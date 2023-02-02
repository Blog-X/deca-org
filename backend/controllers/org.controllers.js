import orgs from "../models/org.model.js";

const addOrg = async (req, res) => {
  const { orgName, orgAddress, hostAddress, hostName } = req.body;
    console.log(req.body);
  try {
    const org = await orgs.findOne({
      orgName: orgName,
    });
    if (org) {
      return res.status(401).json({
        message: "Organization already exists",
      });
    } else {
      const newOrg = new orgs({
        orgName: orgName,
        orgAddress: orgAddress,
        hostAddress: hostAddress,
        members: [
          {
            name: hostName,
            address: hostAddress,
            team: "Admin",
          },
        ],
      });
      const saveCheck = await newOrg.save();
      if (saveCheck) {
        return res.status(200).json({
          message: "Organization created successfully",
        });
      } else {
        return res.status(401).json({
          message: "Failed to create organization",
        });
      }
    }
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const getOrg = async (req, res) => {
  const { orgName } = req.body;
  try {
    const org = await orgs.findOne({
      orgName: orgName,
    });
    if (org) {
      return res.status(200).json({
        message: "Organizations fetched successfully",
        org: org,
      });
    } else {
      return res.status(401).json({
        message: "Failed to fetch organizations",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export { addOrg, getOrg };
