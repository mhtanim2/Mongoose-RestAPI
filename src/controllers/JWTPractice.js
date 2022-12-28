const jwt = require("jsonwebtoken");
exports.CreateToken = (req, res) => {
  let payLoad = {
    exp: Math.floor(Data.now() / 1000) + 60 * 60,
    data: { Name: "Toma",
            City: "Dhaka",
            admin: true },
  };
  let Token = jwt.sign(payLoad, process.env.JWT_Token);
  res.status(200).send(Token);
};

exports.DecodeToken = (req, res) => {
  let Token = req.Headers["token-key"];
  jwt.verify(Token, process.env.JWT_Token, (error, decoded) => {
    if (error) {
      res.status(401).json({ status: false, message: error });
    } else {
      res.status(200).json({ status: true, message: decoded });
    }
  });
};
