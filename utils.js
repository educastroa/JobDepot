// const { Server } = require("socket.io");

module.exports = () => {
  const sharedJobRequestCallback = (httpServer) => {
    db.query('select shared_job_request FROM time_log order by users DESC LIMIT 1')
      .then(lastDate => {
        // const io = new Server(httpServer);
        const { rows: [ { shared_job_request } ] } = lastDate;

        console.log(shared_job_request);

        // db.query('SELECT * FROM shared_jobs WHERE created_at > $1;', [shared_job_request])
        //   .then(data => {
        //     io.on('connection', (socket) => {
        //       socket.emit('shared_job',  data.rows);
        //     });
        // });
      })
  }

  return {
    sharedJobRequestCallback
  };
};
