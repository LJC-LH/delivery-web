import axios from 'axios'

export const receivepackage= (packageId) => axios({
    url: `/api/station/receivepackage`,
    method: 'post',
    data: {
		packageId

    }
});

export const packagestoreceive = (packagestoreceiveForm) => axios({
    url: `/api/postman/packagestoreceive`,
    method: 'post',
    data: {
        postmanId:packagestoreceiveForm.postmanId,
        page:packagestoreceiveForm.postmanId,
        recPerPage:packagestoreceiveForm.recPerPage
    }
});