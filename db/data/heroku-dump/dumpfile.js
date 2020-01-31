#!/bin/bashecho -n "dbname > "
read dbname
echo -n "host > "
read host
echo -n "port > "
read port
echo -n "username > "
read username
echo -n "create file with name > "
read filenamepg_dump 
--dbname=$dbname
--host=$host
--port=$port
--username=$username
--file=$filename
--verbose
--clean
--no-owner
--schema-only
--no-privileges
--if-existsecho "done"
exit 0