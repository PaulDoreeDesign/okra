mkdir -p ~/.aws

cat > ~/.aws/credentials << EOF1
[default]
aws_access_key_id = foo
aws_secret_access_key = foo
EOF1

aws s3 sync ${TRAVIS_BUILD_DIR}/dist s3://foo