const handleNotFound = (req, res, next) => {
    res.status(404);
    res.json({
      message: "url not found"
    });
  };
  
  const response = (res, result, statusCode, message) => {
    res.json({
      status: "Success",
      code: statusCode,
      data: result,
      message: message
    });
  };

  module.exports ={
      handleNotFound,
      response
}