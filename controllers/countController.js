const Visitor = require("../models/visitorSchema");

// Get visitor count
exports.getVisitorCount = async (req, res) => {
  try {
    let visitor = await Visitor.findOne();
    if (!visitor) {
      visitor = new Visitor({ count: 1 });
      await visitor.save();
    }
    res.json({ count: visitor.count });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

exports.incrementVisitorCount = async (req, res) => {
  try {
    let visitor = await Visitor.findOne();
    if (!visitor) {
      visitor = new Visitor({ count: 1 });
    } else {
      visitor.count += 1;
    }
    await visitor.save();
    res.json({ count: visitor.count });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};


exports.resetVisitorCount = async (req, res) => {
    try {
      let visitor = await Visitor.findOne();
      if (!visitor) {
        visitor = new Visitor({ count: 0 });
      } else {
        visitor.count = 0;
      }
      await visitor.save();
      res.json({ message: "Visitor count reset successfully", count: visitor.count });
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  };
