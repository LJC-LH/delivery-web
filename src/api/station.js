import axios from 'axios'

export const stationsincertainarea = (stationsincertainareaForm) => axios({
    url: `/api/stationsincertainarea`,
    method: 'post',
    data: {
        province: stationsincertainareaForm.province,
		city:stationsincertainareaForm.city,
		county:stationsincertainareaForm.county,
		page:stationsincertainareaForm.page,
        recPerPage: stationsincertainareaForm.recPerPage
    }
});

export const sendpackage= (sendpackageForm) => axios({
    url: `api/station/sendpackage`,
    method: 'post',
    data: {
		packageId:sendpackageForm.packageId,
		stationReceiveId:sendpackageForm.stationReceiveId
    }
});

export const choosepostman= (choosepostmanForm) => axios({
    url: `api/station/choosepostman`,
    method: 'post',
    data: {
		packageId:choosepostmanForm.packageId,
		postmanId:choosepostmanForm.postmanId
    }
});

export const packagestosend= (packagestosendForm) => axios({
    url: `api/station/packagestosend`,
    method: 'post',
    data: {
		stationId:packagestosendForm.stationId,
		page:packagestosendForm.page,
		recPerPage:packagestosendForm.recPerPage
    }
});

export const packagestoreceive= (packagestoreceiveForm) => axios({
    url: `api/station/packagestoreceive`,
    method: 'post',
    data: {
		stationId:packagestoreceiveForm.stationId,
		page:packagestoreceiveForm.page,
		recPerPage:packagestoreceiveForm.recPerPage
    }
});