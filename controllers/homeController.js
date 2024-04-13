exports.default = (req, res) => {
    res.send("Hello This is a Node Js Kit");
};
exports.index = (req, res) => {
    res.render('index');
};
// homeController.js

exports.getName = (req, res) => {
    try {
      // Simulated data retrieval (replace with actual data fetching logic)
      const name = 'Rishabh'; // Example: Fetching name from database or service
  
      res.status(200).json({ name });
    } catch (error) {
      console.error('Error fetching name:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  module.exports = {
    getName,
  };
  
