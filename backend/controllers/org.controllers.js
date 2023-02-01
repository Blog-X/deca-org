import orgs from '../models/org.model.js';

const addOrg = async (req, res) => {
    const { orgName, orgEthAddress } = req.body;
    const newOrg = {
        orgName,
        orgEthAddress,
    };
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
            orgEthAddress: orgEthAddress,
        });
        const saveCheck = await newOrg.save();
        if (saveCheck) {
            return res.status(200).json({
            message: "Organization added successfully",
            });
        } else {
            return res.status(401).json({
            message: "Failed to add organization",
            });
        }
        }
    } catch (error) {
        return res.status(500).json({
        message: "Internal Server Error",
        });
    }
}

export { addOrg }