const basic=[1e9+7,1e10+1,1e13+13,1e14+15,1e16+17];
const r = 250;

export default function hashPassword(password) {
	let hashs=[];
	for (let i = 0; i < basic.length; i++) {
		let hash = 0;
		for (let j=0; j < password.length; j++){
			hash = hash * r + password.charCodeAt(j)+3;
			hash %= basic[i];
		}
		hashs.push(hash);
	}
	return hashs;
}

export function isEqualHashs(hash1, hash2) {
	for(let i=0;i<hash1.length;i++){
			if(hash1[i]!==hash2[i])
				return false;
	}
	return true;
}