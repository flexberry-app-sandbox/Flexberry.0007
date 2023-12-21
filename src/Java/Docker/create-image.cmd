docker build --no-cache -f SQL\Dockerfile.PostgreSql -t 0007-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t 0007-java/app ../../..
