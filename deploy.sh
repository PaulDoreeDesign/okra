if [ ${TRAVIS_BUILD_DIR} == "master" ]
then
  mkdir -p ~/.aws

  cat > ~/.aws/credentials << EOL
  [default]
  aws_access_key_id = ${AWS_DEV_ACCESS_KEY}
  aws_secret_access_key = ${AWS_DEV_SECRET_ACCESS_KEY}
  EOL

  aws s3 sync ${TRAVIS_BUILD_DIR}/dist s3://${okra-ui-dev}
elif [ ${TRAVIS_BUILD_DIR} == "master" ]
  # Do something
else
  # Do something
fi