if [ $TRAVIS_BRANCH == "master" ]
then
mkdir -p ~/.aws

cat > ~/.aws/credentials << EOF1
[default]
aws_access_key_id = $AWS_DEV_ACCESS_KEY
aws_secret_access_key = $AWS_DEV_SECRET_ACCESS_KEY
EOF1

aws s3 sync ${TRAVIS_BUILD_DIR}/dist s3://$S3_DEV_BUCKET
fi

if [ $TRAVIS_BRANCH == "develop" ]
then
mkdir -p ~/.aws

cat > ~/.aws/credentials << EOF1
[default]
aws_access_key_id = foo
aws_secret_access_key = foo
EOF1

aws s3 sync ${TRAVIS_BUILD_DIR}/dist s3://$S3_DEV_BUCKET
fi