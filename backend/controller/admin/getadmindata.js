
import get_admin_data from "../../model/getadmindata.js"




const getadmindata = async(req,res)=>{
try {

        const admin = await get_admin_data(req.user.id);

        if (!admin) {

            return res.status(404).json({

                message: "Admin not found"

            });

        }

        return res.status(200).json({

            message: "Admin data retrieved successfully",

            admin

        });

    } catch (err) {

        console.log(err);

        return res.status(500).json({

            message: "Something went wrong"

        });

    }
}
export default getadmindata;