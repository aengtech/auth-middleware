import jwt from 'jsonwebtoken';

const auth = async ( req, res, next) => {
    try {
        const token = req.headers.authorisation.split(" ")[1];
        const isCustomAuth = token.length < 500;
        let decodedData;

        if( token && isCustomAuth ) {
            docodedData = jwt.verify(token, 'password');

            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub;
        }

        next();
    } catch (error) {
        console.log(error)
    }
}