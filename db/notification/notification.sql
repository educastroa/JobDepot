DROP FUNCTION IF EXISTS fn_notify_shared_job_request_trigger() CASCADE;
DROP TRIGGER IF EXISTS watched_shared_job_request_table_trigger ON shared_jobs CASCADE;

create or replace function fn_notify_shared_job_request_trigger() returns trigger as $psql$
begin
  perform pg_notify('watcher_shared_job_request', TG_TABLE_NAME || ',id,' || NEW.id);
  return new;
end;
$psql$ language plpgsql;

create trigger watched_shared_job_request_table_trigger before insert on shared_jobs
for each row execute procedure fn_notify_shared_job_request_trigger();
