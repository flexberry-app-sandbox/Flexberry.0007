docker build --no-cache -f SQL\Dockerfile.PostgreSql -t 0007/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t 0007/app ../..
