const common = {
    /**
     * 日志打印
     *
     * @param args
     */
    log: (...args) => {
        let info = '';
        args.map(arg => {
            info += arg;
        });
        console.log(info);
    },
	/**
	 * Toast
	 *
	 * @param info
	 * @param type info, error, success
	 */
	toast: (info, type = 'info') => {
		if (typeof OS != 'undefined') {
			OS.toast(type, info);
		} else {
			alert(info)
		}
	},
	/**
	 * 对话框
	 *
	 * @param params
	 * @param complete
	 */
	showDialog: (params, complete = null) => {
		if (typeof OS != 'undefined') {
			OS.showDialog(params, (bool) => {
				if (typeof complete === 'function') {
					complete(bool);
				}
			});
		}
	},
    /**
     * 判断是否是一个json字符串
     *
     * @param str
     * @returns {boolean}
     */
    isJson: (str) => {
        try {
            JSON.parse(str);
            return true;
        } catch (e) {
            return false;
        }
    },
    /**
     * json转字符串
     *
     * @param jsonObj
     * @returns {null|string}
     */
    jsonToString: (jsonObj) => {
        try {
            return JSON.stringify(jsonObj);
        } catch (error) {
            console.log("JSON 转字符串失败:", error);
            return null; // 返回 null 表示转换失败
        }
    },
    /**
     * 字符串转json
     *
     * @param jsonString
     * @returns {any|null}
     */
    stringToJson: (jsonString) => {
        try {
            return JSON.parse(jsonString);
        } catch (error) {
            return null;
        }
    },
	/**
	 * 时间戳转时间格式
	 * @param timestamp
	 * @param format
	 */
	time: (timestamp, format) => {
		if (typeof OS != 'undefined') {
			return OS.time(timestamp, format);
		} else {
			return null;
		}
	},
    /**
     * POST 请求
     *
     * @param params
     * @returns {Promise<unknown>}
     */
    post: (params) => {
        return new Promise((resolve, reject) => {
            if (typeof OS != 'undefined') {
				OS.post(params, (code, data, error) => {
					if (code === 0) {
						resolve(data);
					} else {
						reject(error);
					}
				})
            } else {
                console.log('不支持的POST方法')
				reject('不支持的POST方法');
            }
        })
    },
    /**
     * GET 请求
     * @param params
     * @returns {Promise<unknown>}
     */
    get: (params) => {
        return new Promise((resolve, reject) => {
            if (typeof OS != 'undefined') {
				OS.get(params, (code, data, error) => {
					if (code === 0) {
						resolve(data);
					} else {
						reject(error);
					}
				})
            } else {
                console.log('不支持的GET方法')
				reject('不支持的GET方法');
            }
        })
    },
	/**
	 * 简易存储
	 */
	sp: {
		/**
		 * 存储值
		 *
		 * @param key
		 * @param value
		 * @returns {*|boolean}
		 */
		put: (key, value) => {
			if (typeof OS != 'undefined') {
				return OS.putValue(key, value);
			} else {
				return false;
			}
		},
		/**
		 * 获取值
		 *
		 * @param key
		 * @returns {null|string}
		 */
		get: (key) => {
			if (typeof OS != 'undefined') {
				return OS.getValue(key);
			} else {
				return null;
			}
		},
		/**
		 * 删除值
		 *
		 * @param key
		 * @returns {*|null}
		 */
		delete: (key) => {
			if (typeof OS != 'undefined') {
				return OS.deleteValue(key);
			} else {
				return false;
			}
		},
	},
	/**
	 * aes加密
	 */
	aes: {
		/**
		 * 加密
		 *
		 * @param data
		 * @param key
		 * @param iv
		 * @returns {*|null}
		 */
		encrypt: (data, key, iv) => {
			if (typeof OS != 'undefined') {
				return OS.aesEncrypt(data, key, iv);
			} else {
				return null;
			}
		},
		/**
		 * 解密
		 *
		 * @param data
		 * @param key
		 * @param iv
		 * @returns {*|null}
		 */
		decrypt: (data, key, iv) => {
			if (typeof OS != 'undefined') {
				return OS.aesDecrypt(data, key, iv);
			} else {
				return null;
			}
		},
	},
	/**
	 * RSA加解密
	 */
	rsa: {
		/**
		 * 加密
		 *
		 * @param data
		 * @param publicKey
		 * @returns {*|null}
		 */
		encrypt: (data, publicKey) => {
			if (typeof OS != 'undefined') {
				return OS.rsaEncrypt(data, publicKey);
			} else {
				return null;
			}
		},
		/**
		 * 解密
		 *
		 * @param data
		 * @param privateKey
		 * @returns {*|null}
		 */
		decrypt: (data, privateKey) => {
			if (typeof OS != 'undefined') {
				return OS.rsaDecrypt(data, privateKey);
			} else {
				return null;
			}
		},
	}
}

const app = common
const App = common
const APP = common