import axios from "axios";
let URL = 'http://localhost:3342'

export const getPeminjam = (token, id, level) => {
  return {
    type: "GET_PEMINJAM",
    payload: axios.get(URL+'/user', {
      headers: {
        'authorization' : 'w3lc0meto4pp',
        'x-access-token' : token,
        'x-control-user': id
      }
    })
  };
};

export const postPeminjam = (data) => {
  console.log('ini dari aksi',data[0]);
  // {id_ktp:data[0].id_ktp, nama_peminjam: data[0].nama_peminjam, alamat: data[0].alamat}
  return {
    type: "POST_PEMINJAM",
    payload: axios.post(URL+'/user', data[0])
  };
};

export const registrasiPeminjam = (data) => {
  console.log('ini dari aksi',data[0]);
  // {id_ktp:data[0].id_ktp, nama_peminjam: data[0].nama_peminjam, alamat: data[0].alamat}
  return {
    type: "REGISTRASI_PEMINJAM",
    payload: axios.post(URL+'/user/register', data[0])
  };
};

export const deletePinjam = (id_ktp) =>{
  console.log('action id', id_ktp)
	return{
		type: 'DELETE_PINJAM',
		payload: axios.delete(URL +`/user/${id_ktp}`)
	}
}
