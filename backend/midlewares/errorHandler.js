module.exports = (err, req, res, next) => {
  // console.log(process.env.NODE_ENV);
  console.log(res.statusCode);
  res.json({
    message: err.message,
  });
};
