#!/bin/sh

APP_RESOURCES_DIRECTORY=$1

export APP_REVISION=`jq -r '"\(.version)-\(.revision[0:8])"' "$APP_RESOURCES_DIRECTORY/data/version.json"`
QUERIES_DIRECTORY=$APP_RESOURCES_DIRECTORY/resources-formatted/static/js
QUERIES=`ls $QUERIES_DIRECTORY | grep .graphql. | grep .json`

mkdir -p src/generated

for file in $QUERIES
do
    id=`jq -r '.params.id' "$QUERIES_DIRECTORY/$file"`
    name=`jq -r '.params.name' "$QUERIES_DIRECTORY/$file"`
    echo "Generating types for GraphQL query $id/$name from module $QUERIES_DIRECTORY/$file from SplatNet 3 $APP_REVISION"

    cat "$QUERIES_DIRECTORY/$file" | node dist/scripts/generate-types.js > src/generated/$id.ts

    echo ""
done

rm src/generated/types.ts
rm src/generated/latest.ts

GENERATED_TYPES=`ls src/generated | sed -r s/\.ts//`
echo "type generated_types = {" > src/generated/types.ts

for id in $GENERATED_TYPES
do
    echo "    '$id': import('./$id.js').default," >> src/generated/types.ts
done

echo "};" >> src/generated/types.ts
echo "" >> src/generated/types.ts
echo "export default generated_types;" >> src/generated/types.ts
echo "" >> src/generated/types.ts

for id in $GENERATED_TYPES
do
    echo "export * from './$id.js';" >> src/generated/types.ts
done

for file in $QUERIES
do
    id=`jq -r '.params.id' "$QUERIES_DIRECTORY/$file"`
    name=`jq -r '.params.name' "$QUERIES_DIRECTORY/$file"`

    # jq -r "'export { default as \(.params.name) } from \'./\(.params.id).js\';'" "$QUERIES_DIRECTORY/$file" >> src/generated/current.ts
    
    echo "export { default as $name } from './$id.js';" >> src/generated/latest.ts
done
