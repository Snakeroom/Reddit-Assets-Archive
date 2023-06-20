// https://www.redditstatic.com/desktop2x/vendors~Chat~RedesignChat.5bcc271b52167e90c8ef.js
// Retrieved at 6/20/2023, 11:10:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~Chat~RedesignChat"], {
		"./node_modules/axios/index.js": function(e, n, t) {
			e.exports = t("./node_modules/axios/lib/axios.js")
		},
		"./node_modules/axios/lib/adapters/xhr.js": function(e, n, t) {
			"use strict";
			var r = t("./node_modules/axios/lib/utils.js"),
				i = t("./node_modules/axios/lib/core/settle.js"),
				s = t("./node_modules/axios/lib/helpers/cookies.js"),
				a = t("./node_modules/axios/lib/helpers/buildURL.js"),
				o = t("./node_modules/axios/lib/core/buildFullPath.js"),
				l = t("./node_modules/axios/lib/helpers/parseHeaders.js"),
				u = t("./node_modules/axios/lib/helpers/isURLSameOrigin.js"),
				c = t("./node_modules/axios/lib/core/createError.js");
			e.exports = function(e) {
				return new Promise((function(n, t) {
					var d = e.data,
						h = e.headers;
					r.isFormData(d) && delete h["Content-Type"];
					var p = new XMLHttpRequest;
					if (e.auth) {
						var f = e.auth.username || "",
							_ = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
						h.Authorization = "Basic " + btoa(f + ":" + _)
					}
					var g = o(e.baseURL, e.url);
					if (p.open(e.method.toUpperCase(), a(g, e.params, e.paramsSerializer), !0), p.timeout = e.timeout, p.onreadystatechange = function() {
							if (p && 4 === p.readyState && (0 !== p.status || p.responseURL && 0 === p.responseURL.indexOf("file:"))) {
								var r = "getAllResponseHeaders" in p ? l(p.getAllResponseHeaders()) : null,
									s = {
										data: e.responseType && "text" !== e.responseType ? p.response : p.responseText,
										status: p.status,
										statusText: p.statusText,
										headers: r,
										config: e,
										request: p
									};
								i(n, t, s), p = null
							}
						}, p.onabort = function() {
							p && (t(c("Request aborted", e, "ECONNABORTED", p)), p = null)
						}, p.onerror = function() {
							t(c("Network Error", e, null, p)), p = null
						}, p.ontimeout = function() {
							var n = "timeout of " + e.timeout + "ms exceeded";
							e.timeoutErrorMessage && (n = e.timeoutErrorMessage), t(c(n, e, "ECONNABORTED", p)), p = null
						}, r.isStandardBrowserEnv()) {
						var y = (e.withCredentials || u(g)) && e.xsrfCookieName ? s.read(e.xsrfCookieName) : void 0;
						y && (h[e.xsrfHeaderName] = y)
					}
					if ("setRequestHeader" in p && r.forEach(h, (function(e, n) {
							void 0 === d && "content-type" === n.toLowerCase() ? delete h[n] : p.setRequestHeader(n, e)
						})), r.isUndefined(e.withCredentials) || (p.withCredentials = !!e.withCredentials), e.responseType) try {
						p.responseType = e.responseType
					} catch (m) {
						if ("json" !== e.responseType) throw m
					}
					"function" == typeof e.onDownloadProgress && p.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && p.upload && p.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then((function(e) {
						p && (p.abort(), t(e), p = null)
					})), d || (d = null), p.send(d)
				}))
			}
		},
		"./node_modules/axios/lib/axios.js": function(e, n, t) {
			"use strict";
			var r = t("./node_modules/axios/lib/utils.js"),
				i = t("./node_modules/axios/lib/helpers/bind.js"),
				s = t("./node_modules/axios/lib/core/Axios.js"),
				a = t("./node_modules/axios/lib/core/mergeConfig.js");

			function o(e) {
				var n = new s(e),
					t = i(s.prototype.request, n);
				return r.extend(t, s.prototype, n), r.extend(t, n), t
			}
			var l = o(t("./node_modules/axios/lib/defaults.js"));
			l.Axios = s, l.create = function(e) {
				return o(a(l.defaults, e))
			}, l.Cancel = t("./node_modules/axios/lib/cancel/Cancel.js"), l.CancelToken = t("./node_modules/axios/lib/cancel/CancelToken.js"), l.isCancel = t("./node_modules/axios/lib/cancel/isCancel.js"), l.all = function(e) {
				return Promise.all(e)
			}, l.spread = t("./node_modules/axios/lib/helpers/spread.js"), l.isAxiosError = t("./node_modules/axios/lib/helpers/isAxiosError.js"), e.exports = l, e.exports.default = l
		},
		"./node_modules/axios/lib/cancel/Cancel.js": function(e, n, t) {
			"use strict";

			function r(e) {
				this.message = e
			}
			r.prototype.toString = function() {
				return "Cancel" + (this.message ? ": " + this.message : "")
			}, r.prototype.__CANCEL__ = !0, e.exports = r
		},
		"./node_modules/axios/lib/cancel/CancelToken.js": function(e, n, t) {
			"use strict";
			var r = t("./node_modules/axios/lib/cancel/Cancel.js");

			function i(e) {
				if ("function" != typeof e) throw new TypeError("executor must be a function.");
				var n;
				this.promise = new Promise((function(e) {
					n = e
				}));
				var t = this;
				e((function(e) {
					t.reason || (t.reason = new r(e), n(t.reason))
				}))
			}
			i.prototype.throwIfRequested = function() {
				if (this.reason) throw this.reason
			}, i.source = function() {
				var e;
				return {
					token: new i((function(n) {
						e = n
					})),
					cancel: e
				}
			}, e.exports = i
		},
		"./node_modules/axios/lib/cancel/isCancel.js": function(e, n, t) {
			"use strict";
			e.exports = function(e) {
				return !(!e || !e.__CANCEL__)
			}
		},
		"./node_modules/axios/lib/core/Axios.js": function(e, n, t) {
			"use strict";
			var r = t("./node_modules/axios/lib/utils.js"),
				i = t("./node_modules/axios/lib/helpers/buildURL.js"),
				s = t("./node_modules/axios/lib/core/InterceptorManager.js"),
				a = t("./node_modules/axios/lib/core/dispatchRequest.js"),
				o = t("./node_modules/axios/lib/core/mergeConfig.js");

			function l(e) {
				this.defaults = e, this.interceptors = {
					request: new s,
					response: new s
				}
			}
			l.prototype.request = function(e) {
				"string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, (e = o(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
				var n = [a, void 0],
					t = Promise.resolve(e);
				for (this.interceptors.request.forEach((function(e) {
						n.unshift(e.fulfilled, e.rejected)
					})), this.interceptors.response.forEach((function(e) {
						n.push(e.fulfilled, e.rejected)
					})); n.length;) t = t.then(n.shift(), n.shift());
				return t
			}, l.prototype.getUri = function(e) {
				return e = o(this.defaults, e), i(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
			}, r.forEach(["delete", "get", "head", "options"], (function(e) {
				l.prototype[e] = function(n, t) {
					return this.request(o(t || {}, {
						method: e,
						url: n,
						data: (t || {}).data
					}))
				}
			})), r.forEach(["post", "put", "patch"], (function(e) {
				l.prototype[e] = function(n, t, r) {
					return this.request(o(r || {}, {
						method: e,
						url: n,
						data: t
					}))
				}
			})), e.exports = l
		},
		"./node_modules/axios/lib/core/InterceptorManager.js": function(e, n, t) {
			"use strict";
			var r = t("./node_modules/axios/lib/utils.js");

			function i() {
				this.handlers = []
			}
			i.prototype.use = function(e, n) {
				return this.handlers.push({
					fulfilled: e,
					rejected: n
				}), this.handlers.length - 1
			}, i.prototype.eject = function(e) {
				this.handlers[e] && (this.handlers[e] = null)
			}, i.prototype.forEach = function(e) {
				r.forEach(this.handlers, (function(n) {
					null !== n && e(n)
				}))
			}, e.exports = i
		},
		"./node_modules/axios/lib/core/buildFullPath.js": function(e, n, t) {
			"use strict";
			var r = t("./node_modules/axios/lib/helpers/isAbsoluteURL.js"),
				i = t("./node_modules/axios/lib/helpers/combineURLs.js");
			e.exports = function(e, n) {
				return e && !r(n) ? i(e, n) : n
			}
		},
		"./node_modules/axios/lib/core/createError.js": function(e, n, t) {
			"use strict";
			var r = t("./node_modules/axios/lib/core/enhanceError.js");
			e.exports = function(e, n, t, i, s) {
				var a = new Error(e);
				return r(a, n, t, i, s)
			}
		},
		"./node_modules/axios/lib/core/dispatchRequest.js": function(e, n, t) {
			"use strict";
			var r = t("./node_modules/axios/lib/utils.js"),
				i = t("./node_modules/axios/lib/core/transformData.js"),
				s = t("./node_modules/axios/lib/cancel/isCancel.js"),
				a = t("./node_modules/axios/lib/defaults.js");

			function o(e) {
				e.cancelToken && e.cancelToken.throwIfRequested()
			}
			e.exports = function(e) {
				return o(e), e.headers = e.headers || {}, e.data = i(e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(n) {
					delete e.headers[n]
				})), (e.adapter || a.adapter)(e).then((function(n) {
					return o(e), n.data = i(n.data, n.headers, e.transformResponse), n
				}), (function(n) {
					return s(n) || (o(e), n && n.response && (n.response.data = i(n.response.data, n.response.headers, e.transformResponse))), Promise.reject(n)
				}))
			}
		},
		"./node_modules/axios/lib/core/enhanceError.js": function(e, n, t) {
			"use strict";
			e.exports = function(e, n, t, r, i) {
				return e.config = n, t && (e.code = t), e.request = r, e.response = i, e.isAxiosError = !0, e.toJSON = function() {
					return {
						message: this.message,
						name: this.name,
						description: this.description,
						number: this.number,
						fileName: this.fileName,
						lineNumber: this.lineNumber,
						columnNumber: this.columnNumber,
						stack: this.stack,
						config: this.config,
						code: this.code
					}
				}, e
			}
		},
		"./node_modules/axios/lib/core/mergeConfig.js": function(e, n, t) {
			"use strict";
			var r = t("./node_modules/axios/lib/utils.js");
			e.exports = function(e, n) {
				n = n || {};
				var t = {},
					i = ["url", "method", "data"],
					s = ["headers", "auth", "proxy", "params"],
					a = ["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "timeoutMessage", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "decompress", "maxContentLength", "maxBodyLength", "maxRedirects", "transport", "httpAgent", "httpsAgent", "cancelToken", "socketPath", "responseEncoding"],
					o = ["validateStatus"];

				function l(e, n) {
					return r.isPlainObject(e) && r.isPlainObject(n) ? r.merge(e, n) : r.isPlainObject(n) ? r.merge({}, n) : r.isArray(n) ? n.slice() : n
				}

				function u(i) {
					r.isUndefined(n[i]) ? r.isUndefined(e[i]) || (t[i] = l(void 0, e[i])) : t[i] = l(e[i], n[i])
				}
				r.forEach(i, (function(e) {
					r.isUndefined(n[e]) || (t[e] = l(void 0, n[e]))
				})), r.forEach(s, u), r.forEach(a, (function(i) {
					r.isUndefined(n[i]) ? r.isUndefined(e[i]) || (t[i] = l(void 0, e[i])) : t[i] = l(void 0, n[i])
				})), r.forEach(o, (function(r) {
					r in n ? t[r] = l(e[r], n[r]) : r in e && (t[r] = l(void 0, e[r]))
				}));
				var c = i.concat(s).concat(a).concat(o),
					d = Object.keys(e).concat(Object.keys(n)).filter((function(e) {
						return -1 === c.indexOf(e)
					}));
				return r.forEach(d, u), t
			}
		},
		"./node_modules/axios/lib/core/settle.js": function(e, n, t) {
			"use strict";
			var r = t("./node_modules/axios/lib/core/createError.js");
			e.exports = function(e, n, t) {
				var i = t.config.validateStatus;
				t.status && i && !i(t.status) ? n(r("Request failed with status code " + t.status, t.config, null, t.request, t)) : e(t)
			}
		},
		"./node_modules/axios/lib/core/transformData.js": function(e, n, t) {
			"use strict";
			var r = t("./node_modules/axios/lib/utils.js");
			e.exports = function(e, n, t) {
				return r.forEach(t, (function(t) {
					e = t(e, n)
				})), e
			}
		},
		"./node_modules/axios/lib/defaults.js": function(e, n, t) {
			"use strict";
			(function(n) {
				var r = t("./node_modules/axios/lib/utils.js"),
					i = t("./node_modules/axios/lib/helpers/normalizeHeaderName.js"),
					s = {
						"Content-Type": "application/x-www-form-urlencoded"
					};

				function a(e, n) {
					!r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = n)
				}
				var o, l = {
					adapter: ("undefined" != typeof XMLHttpRequest ? o = t("./node_modules/axios/lib/adapters/xhr.js") : void 0 !== n && "[object process]" === Object.prototype.toString.call(n) && (o = t("./node_modules/axios/lib/adapters/xhr.js")), o),
					transformRequest: [function(e, n) {
						return i(n, "Accept"), i(n, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (a(n, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) ? (a(n, "application/json;charset=utf-8"), JSON.stringify(e)) : e
					}],
					transformResponse: [function(e) {
						if ("string" == typeof e) try {
							e = JSON.parse(e)
						} catch (n) {}
						return e
					}],
					timeout: 0,
					xsrfCookieName: "XSRF-TOKEN",
					xsrfHeaderName: "X-XSRF-TOKEN",
					maxContentLength: -1,
					maxBodyLength: -1,
					validateStatus: function(e) {
						return e >= 200 && e < 300
					}
				};
				l.headers = {
					common: {
						Accept: "application/json, text/plain, */*"
					}
				}, r.forEach(["delete", "get", "head"], (function(e) {
					l.headers[e] = {}
				})), r.forEach(["post", "put", "patch"], (function(e) {
					l.headers[e] = r.merge(s)
				})), e.exports = l
			}).call(this, t("./node_modules/process/browser.js"))
		},
		"./node_modules/axios/lib/helpers/bind.js": function(e, n, t) {
			"use strict";
			e.exports = function(e, n) {
				return function() {
					for (var t = new Array(arguments.length), r = 0; r < t.length; r++) t[r] = arguments[r];
					return e.apply(n, t)
				}
			}
		},
		"./node_modules/axios/lib/helpers/buildURL.js": function(e, n, t) {
			"use strict";
			var r = t("./node_modules/axios/lib/utils.js");

			function i(e) {
				return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
			}
			e.exports = function(e, n, t) {
				if (!n) return e;
				var s;
				if (t) s = t(n);
				else if (r.isURLSearchParams(n)) s = n.toString();
				else {
					var a = [];
					r.forEach(n, (function(e, n) {
						null != e && (r.isArray(e) ? n += "[]" : e = [e], r.forEach(e, (function(e) {
							r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), a.push(i(n) + "=" + i(e))
						})))
					})), s = a.join("&")
				}
				if (s) {
					var o = e.indexOf("#"); - 1 !== o && (e = e.slice(0, o)), e += (-1 === e.indexOf("?") ? "?" : "&") + s
				}
				return e
			}
		},
		"./node_modules/axios/lib/helpers/combineURLs.js": function(e, n, t) {
			"use strict";
			e.exports = function(e, n) {
				return n ? e.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : e
			}
		},
		"./node_modules/axios/lib/helpers/cookies.js": function(e, n, t) {
			"use strict";
			var r = t("./node_modules/axios/lib/utils.js");
			e.exports = r.isStandardBrowserEnv() ? {
				write: function(e, n, t, i, s, a) {
					var o = [];
					o.push(e + "=" + encodeURIComponent(n)), r.isNumber(t) && o.push("expires=" + new Date(t).toGMTString()), r.isString(i) && o.push("path=" + i), r.isString(s) && o.push("domain=" + s), !0 === a && o.push("secure"), document.cookie = o.join("; ")
				},
				read: function(e) {
					var n = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
					return n ? decodeURIComponent(n[3]) : null
				},
				remove: function(e) {
					this.write(e, "", Date.now() - 864e5)
				}
			} : {
				write: function() {},
				read: function() {
					return null
				},
				remove: function() {}
			}
		},
		"./node_modules/axios/lib/helpers/isAbsoluteURL.js": function(e, n, t) {
			"use strict";
			e.exports = function(e) {
				return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
			}
		},
		"./node_modules/axios/lib/helpers/isAxiosError.js": function(e, n, t) {
			"use strict";
			e.exports = function(e) {
				return "object" == typeof e && !0 === e.isAxiosError
			}
		},
		"./node_modules/axios/lib/helpers/isURLSameOrigin.js": function(e, n, t) {
			"use strict";
			var r = t("./node_modules/axios/lib/utils.js");
			e.exports = r.isStandardBrowserEnv() ? function() {
				var e, n = /(msie|trident)/i.test(navigator.userAgent),
					t = document.createElement("a");

				function i(e) {
					var r = e;
					return n && (t.setAttribute("href", r), r = t.href), t.setAttribute("href", r), {
						href: t.href,
						protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
						host: t.host,
						search: t.search ? t.search.replace(/^\?/, "") : "",
						hash: t.hash ? t.hash.replace(/^#/, "") : "",
						hostname: t.hostname,
						port: t.port,
						pathname: "/" === t.pathname.charAt(0) ? t.pathname : "/" + t.pathname
					}
				}
				return e = i(window.location.href),
					function(n) {
						var t = r.isString(n) ? i(n) : n;
						return t.protocol === e.protocol && t.host === e.host
					}
			}() : function() {
				return !0
			}
		},
		"./node_modules/axios/lib/helpers/normalizeHeaderName.js": function(e, n, t) {
			"use strict";
			var r = t("./node_modules/axios/lib/utils.js");
			e.exports = function(e, n) {
				r.forEach(e, (function(t, r) {
					r !== n && r.toUpperCase() === n.toUpperCase() && (e[n] = t, delete e[r])
				}))
			}
		},
		"./node_modules/axios/lib/helpers/parseHeaders.js": function(e, n, t) {
			"use strict";
			var r = t("./node_modules/axios/lib/utils.js"),
				i = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
			e.exports = function(e) {
				var n, t, s, a = {};
				return e ? (r.forEach(e.split("\n"), (function(e) {
					if (s = e.indexOf(":"), n = r.trim(e.substr(0, s)).toLowerCase(), t = r.trim(e.substr(s + 1)), n) {
						if (a[n] && i.indexOf(n) >= 0) return;
						a[n] = "set-cookie" === n ? (a[n] ? a[n] : []).concat([t]) : a[n] ? a[n] + ", " + t : t
					}
				})), a) : a
			}
		},
		"./node_modules/axios/lib/helpers/spread.js": function(e, n, t) {
			"use strict";
			e.exports = function(e) {
				return function(n) {
					return e.apply(null, n)
				}
			}
		},
		"./node_modules/axios/lib/utils.js": function(e, n, t) {
			"use strict";
			var r = t("./node_modules/axios/lib/helpers/bind.js"),
				i = Object.prototype.toString;

			function s(e) {
				return "[object Array]" === i.call(e)
			}

			function a(e) {
				return void 0 === e
			}

			function o(e) {
				return null !== e && "object" == typeof e
			}

			function l(e) {
				if ("[object Object]" !== i.call(e)) return !1;
				var n = Object.getPrototypeOf(e);
				return null === n || n === Object.prototype
			}

			function u(e) {
				return "[object Function]" === i.call(e)
			}

			function c(e, n) {
				if (null != e)
					if ("object" != typeof e && (e = [e]), s(e))
						for (var t = 0, r = e.length; t < r; t++) n.call(null, e[t], t, e);
					else
						for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && n.call(null, e[i], i, e)
			}
			e.exports = {
				isArray: s,
				isArrayBuffer: function(e) {
					return "[object ArrayBuffer]" === i.call(e)
				},
				isBuffer: function(e) {
					return null !== e && !a(e) && null !== e.constructor && !a(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
				},
				isFormData: function(e) {
					return "undefined" != typeof FormData && e instanceof FormData
				},
				isArrayBufferView: function(e) {
					return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
				},
				isString: function(e) {
					return "string" == typeof e
				},
				isNumber: function(e) {
					return "number" == typeof e
				},
				isObject: o,
				isPlainObject: l,
				isUndefined: a,
				isDate: function(e) {
					return "[object Date]" === i.call(e)
				},
				isFile: function(e) {
					return "[object File]" === i.call(e)
				},
				isBlob: function(e) {
					return "[object Blob]" === i.call(e)
				},
				isFunction: u,
				isStream: function(e) {
					return o(e) && u(e.pipe)
				},
				isURLSearchParams: function(e) {
					return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
				},
				isStandardBrowserEnv: function() {
					return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
				},
				forEach: c,
				merge: function e() {
					var n = {};

					function t(t, r) {
						l(n[r]) && l(t) ? n[r] = e(n[r], t) : l(t) ? n[r] = e({}, t) : s(t) ? n[r] = t.slice() : n[r] = t
					}
					for (var r = 0, i = arguments.length; r < i; r++) c(arguments[r], t);
					return n
				},
				extend: function(e, n, t) {
					return c(n, (function(n, i) {
						e[i] = t && "function" == typeof n ? r(n, t) : n
					})), e
				},
				trim: function(e) {
					return e.replace(/^\s*/, "").replace(/\s*$/, "")
				},
				stripBOM: function(e) {
					return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e
				}
			}
		},
		"./node_modules/classnames/index.js": function(e, n, t) {
			var r;
			! function() {
				"use strict";
				var t = {}.hasOwnProperty;

				function i() {
					for (var e = [], n = 0; n < arguments.length; n++) {
						var r = arguments[n];
						if (r) {
							var s = typeof r;
							if ("string" === s || "number" === s) e.push(r);
							else if (Array.isArray(r)) {
								if (r.length) {
									var a = i.apply(null, r);
									a && e.push(a)
								}
							} else if ("object" === s)
								if (r.toString === Object.prototype.toString)
									for (var o in r) t.call(r, o) && r[o] && e.push(o);
								else e.push(r.toString())
						}
					}
					return e.join(" ")
				}
				e.exports ? (i.default = i, e.exports = i) : void 0 === (r = function() {
					return i
				}.apply(n, [])) || (e.exports = r)
			}()
		},
		"./node_modules/form-data/lib/browser.js": function(e, n) {
			e.exports = "object" == typeof self ? self.FormData : window.FormData
		},
		"./node_modules/intersection-observer/intersection-observer.js": function(e, n) {
			! function(e, n) {
				"use strict";
				if ("IntersectionObserver" in e && "IntersectionObserverEntry" in e && "intersectionRatio" in e.IntersectionObserverEntry.prototype) "isIntersecting" in e.IntersectionObserverEntry.prototype || Object.defineProperty(e.IntersectionObserverEntry.prototype, "isIntersecting", {
					get: function() {
						return this.intersectionRatio > 0
					}
				});
				else {
					var t = [];
					i.prototype.THROTTLE_TIMEOUT = 100, i.prototype.POLL_INTERVAL = null, i.prototype.observe = function(e) {
						if (!this._observationTargets.some((function(n) {
								return n.element == e
							}))) {
							if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
							this._registerInstance(), this._observationTargets.push({
								element: e,
								entry: null
							}), this._monitorIntersections(), this._checkForIntersections()
						}
					}, i.prototype.unobserve = function(e) {
						this._observationTargets = this._observationTargets.filter((function(n) {
							return n.element != e
						})), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
					}, i.prototype.disconnect = function() {
						this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
					}, i.prototype.takeRecords = function() {
						var e = this._queuedEntries.slice();
						return this._queuedEntries = [], e
					}, i.prototype._initThresholds = function(e) {
						var n = e || [0];
						return Array.isArray(n) || (n = [n]), n.sort().filter((function(e, n, t) {
							if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
							return e !== t[n - 1]
						}))
					}, i.prototype._parseRootMargin = function(e) {
						var n = (e || "0px").split(/\s+/).map((function(e) {
							var n = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
							if (!n) throw new Error("rootMargin must be specified in pixels or percent");
							return {
								value: parseFloat(n[1]),
								unit: n[2]
							}
						}));
						return n[1] = n[1] || n[0], n[2] = n[2] || n[0], n[3] = n[3] || n[1], n
					}, i.prototype._monitorIntersections = function() {
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (s(e, "resize", this._checkForIntersections, !0), s(n, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(n, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						}))))
					}, i.prototype._unmonitorIntersections = function() {
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, a(e, "resize", this._checkForIntersections, !0), a(n, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
					}, i.prototype._checkForIntersections = function() {
						var n = this._rootIsInDom(),
							t = n ? this._getRootRect() : {
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								width: 0,
								height: 0
							};
						this._observationTargets.forEach((function(i) {
							var s = i.element,
								a = o(s),
								l = this._rootContainsTarget(s),
								u = i.entry,
								c = n && l && this._computeTargetAndRootIntersection(s, t),
								d = i.entry = new r({
									time: e.performance && performance.now && performance.now(),
									target: s,
									boundingClientRect: a,
									rootBounds: t,
									intersectionRect: c
								});
							u ? n && l ? this._hasCrossedThreshold(u, d) && this._queuedEntries.push(d) : u && u.isIntersecting && this._queuedEntries.push(d) : this._queuedEntries.push(d)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, i.prototype._computeTargetAndRootIntersection = function(t, r) {
						if ("none" != e.getComputedStyle(t).display) {
							for (var i, s, a, l, c, d, h, p, f = o(t), _ = u(t), g = !1; !g;) {
								var y = null,
									m = 1 == _.nodeType ? e.getComputedStyle(_) : {};
								if ("none" == m.display) return;
								if (_ == this.root || _ == n ? (g = !0, y = r) : _ != n.body && _ != n.documentElement && "visible" != m.overflow && (y = o(_)), y && (i = y, s = f, a = void 0, l = void 0, c = void 0, d = void 0, h = void 0, p = void 0, a = Math.max(i.top, s.top), l = Math.min(i.bottom, s.bottom), c = Math.max(i.left, s.left), d = Math.min(i.right, s.right), p = l - a, !(f = (h = d - c) >= 0 && p >= 0 && {
										top: a,
										bottom: l,
										left: c,
										right: d,
										width: h,
										height: p
									}))) break;
								_ = u(_)
							}
							return f
						}
					}, i.prototype._getRootRect = function() {
						var e;
						if (this.root) e = o(this.root);
						else {
							var t = n.documentElement,
								r = n.body;
							e = {
								top: 0,
								left: 0,
								right: t.clientWidth || r.clientWidth,
								width: t.clientWidth || r.clientWidth,
								bottom: t.clientHeight || r.clientHeight,
								height: t.clientHeight || r.clientHeight
							}
						}
						return this._expandRectByRootMargin(e)
					}, i.prototype._expandRectByRootMargin = function(e) {
						var n = this._rootMarginValues.map((function(n, t) {
								return "px" == n.unit ? n.value : n.value * (t % 2 ? e.width : e.height) / 100
							})),
							t = {
								top: e.top - n[0],
								right: e.right + n[1],
								bottom: e.bottom + n[2],
								left: e.left - n[3]
							};
						return t.width = t.right - t.left, t.height = t.bottom - t.top, t
					}, i.prototype._hasCrossedThreshold = function(e, n) {
						var t = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
							r = n.isIntersecting ? n.intersectionRatio || 0 : -1;
						if (t !== r)
							for (var i = 0; i < this.thresholds.length; i++) {
								var s = this.thresholds[i];
								if (s == t || s == r || s < t != s < r) return !0
							}
					}, i.prototype._rootIsInDom = function() {
						return !this.root || l(n, this.root)
					}, i.prototype._rootContainsTarget = function(e) {
						return l(this.root || n, e)
					}, i.prototype._registerInstance = function() {
						t.indexOf(this) < 0 && t.push(this)
					}, i.prototype._unregisterInstance = function() {
						var e = t.indexOf(this); - 1 != e && t.splice(e, 1)
					}, e.IntersectionObserver = i, e.IntersectionObserverEntry = r
				}

				function r(e) {
					this.time = e.time, this.target = e.target, this.rootBounds = e.rootBounds, this.boundingClientRect = e.boundingClientRect, this.intersectionRect = e.intersectionRect || {
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						width: 0,
						height: 0
					}, this.isIntersecting = !!e.intersectionRect;
					var n = this.boundingClientRect,
						t = n.width * n.height,
						r = this.intersectionRect,
						i = r.width * r.height;
					this.intersectionRatio = t ? i / t : this.isIntersecting ? 1 : 0
				}

				function i(e, n) {
					var t, r, i, s = n || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (s.root && 1 != s.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (t = this._checkForIntersections.bind(this), r = this.THROTTLE_TIMEOUT, i = null, function() {
						i || (i = setTimeout((function() {
							t(), i = null
						}), r))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(s.rootMargin), this.thresholds = this._initThresholds(s.threshold), this.root = s.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function s(e, n, t, r) {
					"function" == typeof e.addEventListener ? e.addEventListener(n, t, r || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + n, t)
				}

				function a(e, n, t, r) {
					"function" == typeof e.removeEventListener ? e.removeEventListener(n, t, r || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + n, t)
				}

				function o(e) {
					var n;
					try {
						n = e.getBoundingClientRect()
					} catch (t) {}
					return n ? (n.width && n.height || (n = {
						top: n.top,
						right: n.right,
						bottom: n.bottom,
						left: n.left,
						width: n.right - n.left,
						height: n.bottom - n.top
					}), n) : {
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						width: 0,
						height: 0
					}
				}

				function l(e, n) {
					for (var t = n; t;) {
						if (t == e) return !0;
						t = u(t)
					}
					return !1
				}

				function u(e) {
					var n = e.parentNode;
					return n && 11 == n.nodeType && n.host ? n.host : n
				}
			}(window, document)
		},
		"./node_modules/linkify-it/index.js": function(e, n, t) {
			"use strict";

			function r(e) {
				return Array.prototype.slice.call(arguments, 1).forEach((function(n) {
					n && Object.keys(n).forEach((function(t) {
						e[t] = n[t]
					}))
				})), e
			}

			function i(e) {
				return Object.prototype.toString.call(e)
			}

			function s(e) {
				return "[object Function]" === i(e)
			}

			function a(e) {
				return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
			}
			var o = {
				fuzzyLink: !0,
				fuzzyEmail: !0,
				fuzzyIP: !1
			};
			var l = {
					"http:": {
						validate: function(e, n, t) {
							var r = e.slice(n);
							return t.re.http || (t.re.http = new RegExp("^\\/\\/" + t.re.src_auth + t.re.src_host_port_strict + t.re.src_path, "i")), t.re.http.test(r) ? r.match(t.re.http)[0].length : 0
						}
					},
					"https:": "http:",
					"ftp:": "http:",
					"//": {
						validate: function(e, n, t) {
							var r = e.slice(n);
							return t.re.no_http || (t.re.no_http = new RegExp("^" + t.re.src_auth + "(?:localhost|(?:(?:" + t.re.src_domain + ")\\.)+" + t.re.src_domain_root + ")" + t.re.src_port + t.re.src_host_terminator + t.re.src_path, "i")), t.re.no_http.test(r) ? n >= 3 && ":" === e[n - 3] ? 0 : n >= 3 && "/" === e[n - 3] ? 0 : r.match(t.re.no_http)[0].length : 0
						}
					},
					"mailto:": {
						validate: function(e, n, t) {
							var r = e.slice(n);
							return t.re.mailto || (t.re.mailto = new RegExp("^" + t.re.src_email_name + "@" + t.re.src_host_strict, "i")), t.re.mailto.test(r) ? r.match(t.re.mailto)[0].length : 0
						}
					}
				},
				u = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
				c = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");

			function d(e) {
				var n = e.re = t("./node_modules/linkify-it/lib/re.js")(e.__opts__),
					r = e.__tlds__.slice();

				function o(e) {
					return e.replace("%TLDS%", n.src_tlds)
				}
				e.onCompile(), e.__tlds_replaced__ || r.push(u), r.push(n.src_xn), n.src_tlds = r.join("|"), n.email_fuzzy = RegExp(o(n.tpl_email_fuzzy), "i"), n.link_fuzzy = RegExp(o(n.tpl_link_fuzzy), "i"), n.link_no_ip_fuzzy = RegExp(o(n.tpl_link_no_ip_fuzzy), "i"), n.host_fuzzy_test = RegExp(o(n.tpl_host_fuzzy_test), "i");
				var l = [];

				function c(e, n) {
					throw new Error('(LinkifyIt) Invalid schema "' + e + '": ' + n)
				}
				e.__compiled__ = {}, Object.keys(e.__schemas__).forEach((function(n) {
					var t = e.__schemas__[n];
					if (null !== t) {
						var r = {
							validate: null,
							link: null
						};
						if (e.__compiled__[n] = r, "[object Object]" === i(t)) return ! function(e) {
							return "[object RegExp]" === i(e)
						}(t.validate) ? s(t.validate) ? r.validate = t.validate : c(n, t) : r.validate = function(e) {
							return function(n, t) {
								var r = n.slice(t);
								return e.test(r) ? r.match(e)[0].length : 0
							}
						}(t.validate), void(s(t.normalize) ? r.normalize = t.normalize : t.normalize ? c(n, t) : r.normalize = function(e, n) {
							n.normalize(e)
						});
						! function(e) {
							return "[object String]" === i(e)
						}(t) ? c(n, t): l.push(n)
					}
				})), l.forEach((function(n) {
					e.__compiled__[e.__schemas__[n]] && (e.__compiled__[n].validate = e.__compiled__[e.__schemas__[n]].validate, e.__compiled__[n].normalize = e.__compiled__[e.__schemas__[n]].normalize)
				})), e.__compiled__[""] = {
					validate: null,
					normalize: function(e, n) {
						n.normalize(e)
					}
				};
				var d = Object.keys(e.__compiled__).filter((function(n) {
					return n.length > 0 && e.__compiled__[n]
				})).map(a).join("|");
				e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + n.src_ZPCc + "))(" + d + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + n.src_ZPCc + "))(" + d + ")", "ig"), e.re.pretest = RegExp("(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@", "i"),
					function(e) {
						e.__index__ = -1, e.__text_cache__ = ""
					}(e)
			}

			function h(e, n) {
				var t = e.__index__,
					r = e.__last_index__,
					i = e.__text_cache__.slice(t, r);
				this.schema = e.__schema__.toLowerCase(), this.index = t + n, this.lastIndex = r + n, this.raw = i, this.text = i, this.url = i
			}

			function p(e, n) {
				var t = new h(e, n);
				return e.__compiled__[t.schema].normalize(t, e), t
			}

			function f(e, n) {
				if (!(this instanceof f)) return new f(e, n);
				var t;
				n || (t = e, Object.keys(t || {}).reduce((function(e, n) {
					return e || o.hasOwnProperty(n)
				}), !1) && (n = e, e = {})), this.__opts__ = r({}, o, n), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = r({}, l, e), this.__compiled__ = {}, this.__tlds__ = c, this.__tlds_replaced__ = !1, this.re = {}, d(this)
			}
			f.prototype.add = function(e, n) {
				return this.__schemas__[e] = n, d(this), this
			}, f.prototype.set = function(e) {
				return this.__opts__ = r(this.__opts__, e), this
			}, f.prototype.test = function(e) {
				if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
				var n, t, r, i, s, a, o, l;
				if (this.re.schema_test.test(e))
					for ((o = this.re.schema_search).lastIndex = 0; null !== (n = o.exec(e));)
						if (i = this.testSchemaAt(e, n[2], o.lastIndex)) {
							this.__schema__ = n[2], this.__index__ = n.index + n[1].length, this.__last_index__ = n.index + n[0].length + i;
							break
						} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (l = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || l < this.__index__) && null !== (t = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (s = t.index + t[1].length, (this.__index__ < 0 || s < this.__index__) && (this.__schema__ = "", this.__index__ = s, this.__last_index__ = t.index + t[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (r = e.match(this.re.email_fuzzy)) && (s = r.index + r[1].length, a = r.index + r[0].length, (this.__index__ < 0 || s < this.__index__ || s === this.__index__ && a > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = s, this.__last_index__ = a)), this.__index__ >= 0
			}, f.prototype.pretest = function(e) {
				return this.re.pretest.test(e)
			}, f.prototype.testSchemaAt = function(e, n, t) {
				return this.__compiled__[n.toLowerCase()] ? this.__compiled__[n.toLowerCase()].validate(e, t, this) : 0
			}, f.prototype.match = function(e) {
				var n = 0,
					t = [];
				this.__index__ >= 0 && this.__text_cache__ === e && (t.push(p(this, n)), n = this.__last_index__);
				for (var r = n ? e.slice(n) : e; this.test(r);) t.push(p(this, n)), r = r.slice(this.__last_index__), n += this.__last_index__;
				return t.length ? t : null
			}, f.prototype.tlds = function(e, n) {
				return e = Array.isArray(e) ? e : [e], n ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter((function(e, n, t) {
					return e !== t[n - 1]
				})).reverse(), d(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, d(this), this)
			}, f.prototype.normalize = function(e) {
				e.schema || (e.url = "http://" + e.url), "mailto:" !== e.schema || /^mailto:/i.test(e.url) || (e.url = "mailto:" + e.url)
			}, f.prototype.onCompile = function() {}, e.exports = f
		},
		"./node_modules/linkify-it/lib/re.js": function(e, n, t) {
			"use strict";
			e.exports = function(e) {
				var n = {};
				n.src_Any = t("./node_modules/uc.micro/properties/Any/regex.js").source, n.src_Cc = t("./node_modules/uc.micro/categories/Cc/regex.js").source, n.src_Z = t("./node_modules/uc.micro/categories/Z/regex.js").source, n.src_P = t("./node_modules/uc.micro/categories/P/regex.js").source, n.src_ZPCc = [n.src_Z, n.src_P, n.src_Cc].join("|"), n.src_ZCc = [n.src_Z, n.src_Cc].join("|");
				return n.src_pseudo_letter = "(?:(?![><｜]|" + n.src_ZPCc + ")" + n.src_Any + ")", n.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", n.src_auth = "(?:(?:(?!" + n.src_ZCc + "|[@/\\[\\]()]).)+@)?", n.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", n.src_host_terminator = "(?=$|[><｜]|" + n.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + n.src_ZPCc + "))", n.src_path = "(?:[/?#](?:(?!" + n.src_ZCc + "|[><｜]|[()[\\]{}.,\"'?!\\-]).|\\[(?:(?!" + n.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + n.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + n.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + n.src_ZCc + '|["]).)+\\"|\\\'(?:(?!' + n.src_ZCc + "|[']).)+\\'|\\'(?=" + n.src_pseudo_letter + "|[-]).|\\.{2,3}[a-zA-Z0-9%/]|\\.(?!" + n.src_ZCc + "|[.]).|" + (e && e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + "\\,(?!" + n.src_ZCc + ").|\\!(?!" + n.src_ZCc + "|[!]).|\\?(?!" + n.src_ZCc + "|[?]).)+|\\/)?", n.src_email_name = '[\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]+', n.src_xn = "xn--[a-z0-9\\-]{1,59}", n.src_domain_root = "(?:" + n.src_xn + "|" + n.src_pseudo_letter + "{1,63})", n.src_domain = "(?:" + n.src_xn + "|(?:" + n.src_pseudo_letter + ")|(?:" + n.src_pseudo_letter + "(?:-(?!-)|" + n.src_pseudo_letter + "){0,61}" + n.src_pseudo_letter + "))", n.src_host = "(?:(?:(?:(?:" + n.src_domain + ")\\.)*" + n.src_domain + "))", n.tpl_host_fuzzy = "(?:" + n.src_ip4 + "|(?:(?:(?:" + n.src_domain + ")\\.)+(?:%TLDS%)))", n.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + n.src_domain + ")\\.)+(?:%TLDS%))", n.src_host_strict = n.src_host + n.src_host_terminator, n.tpl_host_fuzzy_strict = n.tpl_host_fuzzy + n.src_host_terminator, n.src_host_port_strict = n.src_host + n.src_port + n.src_host_terminator, n.tpl_host_port_fuzzy_strict = n.tpl_host_fuzzy + n.src_port + n.src_host_terminator, n.tpl_host_port_no_ip_fuzzy_strict = n.tpl_host_no_ip_fuzzy + n.src_port + n.src_host_terminator, n.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + n.src_ZPCc + "|>|$))", n.tpl_email_fuzzy = "(^|[><｜]|\\(|" + n.src_ZCc + ")(" + n.src_email_name + "@" + n.tpl_host_fuzzy_strict + ")", n.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + n.src_ZPCc + "))((?![$+<=>^`|｜])" + n.tpl_host_port_fuzzy_strict + n.src_path + ")", n.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + n.src_ZPCc + "))((?![$+<=>^`|｜])" + n.tpl_host_port_no_ip_fuzzy_strict + n.src_path + ")", n
			}
		},
		"./node_modules/lodash/_arrayAggregator.js": function(e, n) {
			e.exports = function(e, n, t, r) {
				for (var i = -1, s = null == e ? 0 : e.length; ++i < s;) {
					var a = e[i];
					n(r, a, t(a), e)
				}
				return r
			}
		},
		"./node_modules/lodash/_baseAggregator.js": function(e, n, t) {
			var r = t("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, n, t, i) {
				return r(e, (function(e, r, s) {
					n(i, e, t(e), s)
				})), i
			}
		},
		"./node_modules/lodash/_baseDelay.js": function(e, n) {
			var t = "Expected a function";
			e.exports = function(e, n, r) {
				if ("function" != typeof e) throw new TypeError(t);
				return setTimeout((function() {
					e.apply(void 0, r)
				}), n)
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, n) {
			e.exports = function(e, n, t, r, i) {
				return i(e, (function(e, i, s) {
					t = r ? (r = !1, e) : n(t, e, i, s)
				})), t
			}
		},
		"./node_modules/lodash/_createAggregator.js": function(e, n, t) {
			var r = t("./node_modules/lodash/_arrayAggregator.js"),
				i = t("./node_modules/lodash/_baseAggregator.js"),
				s = t("./node_modules/lodash/_baseIteratee.js"),
				a = t("./node_modules/lodash/isArray.js");
			e.exports = function(e, n) {
				return function(t, o) {
					var l = a(t) ? r : i,
						u = n ? n() : {};
					return l(t, e, s(o, 2), u)
				}
			}
		},
		"./node_modules/lodash/_iteratorToArray.js": function(e, n) {
			e.exports = function(e) {
				for (var n, t = []; !(n = e.next()).done;) t.push(n.value);
				return t
			}
		},
		"./node_modules/lodash/chunk.js": function(e, n, t) {
			var r = t("./node_modules/lodash/_baseSlice.js"),
				i = t("./node_modules/lodash/_isIterateeCall.js"),
				s = t("./node_modules/lodash/toInteger.js"),
				a = Math.ceil,
				o = Math.max;
			e.exports = function(e, n, t) {
				n = (t ? i(e, n, t) : void 0 === n) ? 1 : o(s(n), 0);
				var l = null == e ? 0 : e.length;
				if (!l || n < 1) return [];
				for (var u = 0, c = 0, d = Array(a(l / n)); u < l;) d[c++] = r(e, u, u += n);
				return d
			}
		},
		"./node_modules/lodash/defer.js": function(e, n, t) {
			var r = t("./node_modules/lodash/_baseDelay.js"),
				i = t("./node_modules/lodash/_baseRest.js")((function(e, n) {
					return r(e, 1, n)
				}));
			e.exports = i
		},
		"./node_modules/lodash/keyBy.js": function(e, n, t) {
			var r = t("./node_modules/lodash/_baseAssignValue.js"),
				i = t("./node_modules/lodash/_createAggregator.js")((function(e, n, t) {
					r(e, t, n)
				}));
			e.exports = i
		},
		"./node_modules/lodash/map.js": function(e, n, t) {
			var r = t("./node_modules/lodash/_arrayMap.js"),
				i = t("./node_modules/lodash/_baseIteratee.js"),
				s = t("./node_modules/lodash/_baseMap.js"),
				a = t("./node_modules/lodash/isArray.js");
			e.exports = function(e, n) {
				return (a(e) ? r : s)(e, i(n, 3))
			}
		},
		"./node_modules/lodash/reduce.js": function(e, n, t) {
			var r = t("./node_modules/lodash/_arrayReduce.js"),
				i = t("./node_modules/lodash/_baseEach.js"),
				s = t("./node_modules/lodash/_baseIteratee.js"),
				a = t("./node_modules/lodash/_baseReduce.js"),
				o = t("./node_modules/lodash/isArray.js");
			e.exports = function(e, n, t) {
				var l = o(e) ? r : a,
					u = arguments.length < 3;
				return l(e, s(n, 4), t, u, i)
			}
		},
		"./node_modules/lodash/toArray.js": function(e, n, t) {
			var r = t("./node_modules/lodash/_Symbol.js"),
				i = t("./node_modules/lodash/_copyArray.js"),
				s = t("./node_modules/lodash/_getTag.js"),
				a = t("./node_modules/lodash/isArrayLike.js"),
				o = t("./node_modules/lodash/isString.js"),
				l = t("./node_modules/lodash/_iteratorToArray.js"),
				u = t("./node_modules/lodash/_mapToArray.js"),
				c = t("./node_modules/lodash/_setToArray.js"),
				d = t("./node_modules/lodash/_stringToArray.js"),
				h = t("./node_modules/lodash/values.js"),
				p = "[object Map]",
				f = "[object Set]",
				_ = r ? r.iterator : void 0;
			e.exports = function(e) {
				if (!e) return [];
				if (a(e)) return o(e) ? d(e) : i(e);
				if (_ && e[_]) return l(e[_]());
				var n = s(e);
				return (n == p ? u : n == f ? c : h)(e)
			}
		},
		"./node_modules/lodash/xorBy.js": function(e, n, t) {
			var r = t("./node_modules/lodash/_arrayFilter.js"),
				i = t("./node_modules/lodash/_baseIteratee.js"),
				s = t("./node_modules/lodash/_baseRest.js"),
				a = t("./node_modules/lodash/_baseXor.js"),
				o = t("./node_modules/lodash/isArrayLikeObject.js"),
				l = t("./node_modules/lodash/last.js"),
				u = s((function(e) {
					var n = l(e);
					return o(n) && (n = void 0), a(r(e, o), i(n, 2))
				}));
			e.exports = u
		},
		"./node_modules/react-popper/lib/esm/usePopper.js": function(e, n, t) {
			"use strict";
			t.d(n, "a", (function() {
				return pe
			}));
			var r = t("./node_modules/react/index.js");

			function i(e) {
				var n = e.getBoundingClientRect();
				return {
					width: n.width,
					height: n.height,
					top: n.top,
					right: n.right,
					bottom: n.bottom,
					left: n.left,
					x: n.left,
					y: n.top
				}
			}

			function s(e) {
				if ("[object Window]" !== e.toString()) {
					var n = e.ownerDocument;
					return n ? n.defaultView : window
				}
				return e
			}

			function a(e) {
				var n = s(e);
				return {
					scrollLeft: n.pageXOffset,
					scrollTop: n.pageYOffset
				}
			}

			function o(e) {
				return e instanceof s(e).Element || e instanceof Element
			}

			function l(e) {
				return e instanceof s(e).HTMLElement || e instanceof HTMLElement
			}

			function u(e) {
				return e ? (e.nodeName || "").toLowerCase() : null
			}

			function c(e) {
				return (o(e) ? e.ownerDocument : e.document).documentElement
			}

			function d(e) {
				return i(c(e)).left + a(e).scrollLeft
			}

			function h(e) {
				return s(e).getComputedStyle(e)
			}

			function p(e) {
				var n = h(e),
					t = n.overflow,
					r = n.overflowX,
					i = n.overflowY;
				return /auto|scroll|overlay|hidden/.test(t + i + r)
			}

			function f(e, n, t) {
				void 0 === t && (t = !1);
				var r, o, h = c(n),
					f = i(e),
					_ = l(n),
					g = {
						scrollLeft: 0,
						scrollTop: 0
					},
					y = {
						x: 0,
						y: 0
					};
				return (_ || !_ && !t) && (("body" !== u(n) || p(h)) && (g = (r = n) !== s(r) && l(r) ? {
					scrollLeft: (o = r).scrollLeft,
					scrollTop: o.scrollTop
				} : a(r)), l(n) ? ((y = i(n)).x += n.clientLeft, y.y += n.clientTop) : h && (y.x = d(h))), {
					x: f.left + g.scrollLeft - y.x,
					y: f.top + g.scrollTop - y.y,
					width: f.width,
					height: f.height
				}
			}

			function _(e) {
				return {
					x: e.offsetLeft,
					y: e.offsetTop,
					width: e.offsetWidth,
					height: e.offsetHeight
				}
			}

			function g(e) {
				return "html" === u(e) ? e : e.assignedSlot || e.parentNode || e.host || c(e)
			}

			function y(e, n) {
				void 0 === n && (n = []);
				var t = function e(n) {
						return ["html", "body", "#document"].indexOf(u(n)) >= 0 ? n.ownerDocument.body : l(n) && p(n) ? n : e(g(n))
					}(e),
					r = "body" === u(t),
					i = s(t),
					a = r ? [i].concat(i.visualViewport || [], p(t) ? t : []) : t,
					o = n.concat(a);
				return r ? o : o.concat(y(g(a)))
			}

			function m(e) {
				return ["table", "td", "th"].indexOf(u(e)) >= 0
			}

			function v(e) {
				return l(e) && "fixed" !== h(e).position ? e.offsetParent : null
			}

			function E(e) {
				for (var n = s(e), t = v(e); t && m(t) && "static" === h(t).position;) t = v(t);
				return t && "body" === u(t) && "static" === h(t).position ? n : t || function(e) {
					for (var n = g(e); l(n) && ["html", "body"].indexOf(u(n)) < 0;) {
						var t = h(n);
						if ("none" !== t.transform || "none" !== t.perspective || "auto" !== t.willChange) return n;
						n = n.parentNode
					}
					return null
				}(e) || n
			}
			var C = "top",
				b = "bottom",
				A = "right",
				U = "left",
				k = "auto",
				S = [C, b, A, U],
				I = "start",
				N = "end",
				O = "clippingParents",
				R = "viewport",
				T = "popper",
				w = "reference",
				M = S.reduce((function(e, n) {
					return e.concat([n + "-" + I, n + "-" + N])
				}), []),
				L = [].concat(S, [k]).reduce((function(e, n) {
					return e.concat([n, n + "-" + I, n + "-" + N])
				}), []),
				P = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

			function D(e) {
				var n = new Map,
					t = new Set,
					r = [];
				return e.forEach((function(e) {
					n.set(e.name, e)
				})), e.forEach((function(e) {
					t.has(e.name) || function e(i) {
						t.add(i.name), [].concat(i.requires || [], i.requiresIfExists || []).forEach((function(r) {
							if (!t.has(r)) {
								var i = n.get(r);
								i && e(i)
							}
						})), r.push(i)
					}(e)
				})), r
			}
			var F = {
				placement: "bottom",
				modifiers: [],
				strategy: "absolute"
			};

			function H() {
				for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
				return !n.some((function(e) {
					return !(e && "function" == typeof e.getBoundingClientRect)
				}))
			}

			function x(e) {
				void 0 === e && (e = {});
				var n = e,
					t = n.defaultModifiers,
					r = void 0 === t ? [] : t,
					i = n.defaultOptions,
					s = void 0 === i ? F : i;
				return function(e, n, t) {
					void 0 === t && (t = s);
					var i, a, l = {
							placement: "bottom",
							orderedModifiers: [],
							options: Object.assign(Object.assign({}, F), s),
							modifiersData: {},
							elements: {
								reference: e,
								popper: n
							},
							attributes: {},
							styles: {}
						},
						u = [],
						c = !1,
						d = {
							state: l,
							setOptions: function(t) {
								h(), l.options = Object.assign(Object.assign(Object.assign({}, s), l.options), t), l.scrollParents = {
									reference: o(e) ? y(e) : e.contextElement ? y(e.contextElement) : [],
									popper: y(n)
								};
								var i = function(e) {
									var n = D(e);
									return P.reduce((function(e, t) {
										return e.concat(n.filter((function(e) {
											return e.phase === t
										})))
									}), [])
								}(function(e) {
									var n = e.reduce((function(e, n) {
										var t = e[n.name];
										return e[n.name] = t ? Object.assign(Object.assign(Object.assign({}, t), n), {}, {
											options: Object.assign(Object.assign({}, t.options), n.options),
											data: Object.assign(Object.assign({}, t.data), n.data)
										}) : n, e
									}), {});
									return Object.keys(n).map((function(e) {
										return n[e]
									}))
								}([].concat(r, l.options.modifiers)));
								return l.orderedModifiers = i.filter((function(e) {
									return e.enabled
								})), l.orderedModifiers.forEach((function(e) {
									var n = e.name,
										t = e.options,
										r = void 0 === t ? {} : t,
										i = e.effect;
									if ("function" == typeof i) {
										var s = i({
											state: l,
											name: n,
											instance: d,
											options: r
										});
										u.push(s || function() {})
									}
								})), d.update()
							},
							forceUpdate: function() {
								if (!c) {
									var e = l.elements,
										n = e.reference,
										t = e.popper;
									if (H(n, t)) {
										l.rects = {
											reference: f(n, E(t), "fixed" === l.options.strategy),
											popper: _(t)
										}, l.reset = !1, l.placement = l.options.placement, l.orderedModifiers.forEach((function(e) {
											return l.modifiersData[e.name] = Object.assign({}, e.data)
										}));
										for (var r = 0; r < l.orderedModifiers.length; r++)
											if (!0 !== l.reset) {
												var i = l.orderedModifiers[r],
													s = i.fn,
													a = i.options,
													o = void 0 === a ? {} : a,
													u = i.name;
												"function" == typeof s && (l = s({
													state: l,
													options: o,
													name: u,
													instance: d
												}) || l)
											} else l.reset = !1, r = -1
									}
								}
							},
							update: (i = function() {
								return new Promise((function(e) {
									d.forceUpdate(), e(l)
								}))
							}, function() {
								return a || (a = new Promise((function(e) {
									Promise.resolve().then((function() {
										a = void 0, e(i())
									}))
								}))), a
							}),
							destroy: function() {
								h(), c = !0
							}
						};
					if (!H(e, n)) return d;

					function h() {
						u.forEach((function(e) {
							return e()
						})), u = []
					}
					return d.setOptions(t).then((function(e) {
						!c && t.onFirstUpdate && t.onFirstUpdate(e)
					})), d
				}
			}
			var G = {
				passive: !0
			};

			function j(e) {
				return e.split("-")[0]
			}

			function B(e) {
				return e.split("-")[1]
			}

			function z(e) {
				return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
			}

			function q(e) {
				var n, t = e.reference,
					r = e.element,
					i = e.placement,
					s = i ? j(i) : null,
					a = i ? B(i) : null,
					o = t.x + t.width / 2 - r.width / 2,
					l = t.y + t.height / 2 - r.height / 2;
				switch (s) {
					case C:
						n = {
							x: o,
							y: t.y - r.height
						};
						break;
					case b:
						n = {
							x: o,
							y: t.y + t.height
						};
						break;
					case A:
						n = {
							x: t.x + t.width,
							y: l
						};
						break;
					case U:
						n = {
							x: t.x - r.width,
							y: l
						};
						break;
					default:
						n = {
							x: t.x,
							y: t.y
						}
				}
				var u = s ? z(s) : null;
				if (null != u) {
					var c = "y" === u ? "height" : "width";
					switch (a) {
						case I:
							n[u] = Math.floor(n[u]) - Math.floor(t[c] / 2 - r[c] / 2);
							break;
						case N:
							n[u] = Math.floor(n[u]) + Math.ceil(t[c] / 2 - r[c] / 2)
					}
				}
				return n
			}
			var Q = {
				top: "auto",
				right: "auto",
				bottom: "auto",
				left: "auto"
			};

			function Y(e) {
				var n, t = e.popper,
					r = e.popperRect,
					i = e.placement,
					a = e.offsets,
					o = e.position,
					l = e.gpuAcceleration,
					u = e.adaptive,
					d = function(e) {
						var n = e.x,
							t = e.y,
							r = window.devicePixelRatio || 1;
						return {
							x: Math.round(n * r) / r || 0,
							y: Math.round(t * r) / r || 0
						}
					}(a),
					h = d.x,
					p = d.y,
					f = a.hasOwnProperty("x"),
					_ = a.hasOwnProperty("y"),
					g = U,
					y = C,
					m = window;
				if (u) {
					var v = E(t);
					v === s(t) && (v = c(t)), i === C && (y = b, p -= v.clientHeight - r.height, p *= l ? 1 : -1), i === U && (g = A, h -= v.clientWidth - r.width, h *= l ? 1 : -1)
				}
				var k, S = Object.assign({
					position: o
				}, u && Q);
				return l ? Object.assign(Object.assign({}, S), {}, ((k = {})[y] = _ ? "0" : "", k[g] = f ? "0" : "", k.transform = (m.devicePixelRatio || 1) < 2 ? "translate(" + h + "px, " + p + "px)" : "translate3d(" + h + "px, " + p + "px, 0)", k)) : Object.assign(Object.assign({}, S), {}, ((n = {})[y] = _ ? p + "px" : "", n[g] = f ? h + "px" : "", n.transform = "", n))
			}
			var K = {
				left: "right",
				right: "left",
				bottom: "top",
				top: "bottom"
			};

			function W(e) {
				return e.replace(/left|right|bottom|top/g, (function(e) {
					return K[e]
				}))
			}
			var V = {
				start: "end",
				end: "start"
			};

			function J(e) {
				return e.replace(/start|end/g, (function(e) {
					return V[e]
				}))
			}

			function Z(e, n) {
				var t = Boolean(n.getRootNode && n.getRootNode().host);
				if (e.contains(n)) return !0;
				if (t) {
					var r = n;
					do {
						if (r && e.isSameNode(r)) return !0;
						r = r.parentNode || r.host
					} while (r)
				}
				return !1
			}

			function X(e) {
				return Object.assign(Object.assign({}, e), {}, {
					left: e.x,
					top: e.y,
					right: e.x + e.width,
					bottom: e.y + e.height
				})
			}

			function $(e, n) {
				return n === R ? X(function(e) {
					var n = s(e),
						t = c(e),
						r = n.visualViewport,
						i = t.clientWidth,
						a = t.clientHeight,
						o = 0,
						l = 0;
					return r && (i = r.width, a = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (o = r.offsetLeft, l = r.offsetTop)), {
						width: i,
						height: a,
						x: o + d(e),
						y: l
					}
				}(e)) : l(n) ? function(e) {
					var n = i(e);
					return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n
				}(n) : X(function(e) {
					var n = c(e),
						t = a(e),
						r = e.ownerDocument.body,
						i = Math.max(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
						s = Math.max(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
						o = -t.scrollLeft + d(e),
						l = -t.scrollTop;
					return "rtl" === h(r || n).direction && (o += Math.max(n.clientWidth, r ? r.clientWidth : 0) - i), {
						width: i,
						height: s,
						x: o,
						y: l
					}
				}(c(e)))
			}

			function ee(e, n, t) {
				var r = "clippingParents" === n ? function(e) {
						var n = y(e),
							t = ["absolute", "fixed"].indexOf(h(e).position) >= 0 && l(e) ? E(e) : e;
						return o(t) ? n.filter((function(e) {
							return o(e) && Z(e, t)
						})) : []
					}(e) : [].concat(n),
					i = [].concat(r, [t]),
					s = i[0],
					a = i.reduce((function(n, t) {
						var r = $(e, t);
						return n.top = Math.max(r.top, n.top), n.right = Math.min(r.right, n.right), n.bottom = Math.min(r.bottom, n.bottom), n.left = Math.max(r.left, n.left), n
					}), $(e, s));
				return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a
			}

			function ne(e) {
				return Object.assign(Object.assign({}, {
					top: 0,
					right: 0,
					bottom: 0,
					left: 0
				}), e)
			}

			function te(e, n) {
				return n.reduce((function(n, t) {
					return n[t] = e, n
				}), {})
			}

			function re(e, n) {
				void 0 === n && (n = {});
				var t = n,
					r = t.placement,
					s = void 0 === r ? e.placement : r,
					a = t.boundary,
					l = void 0 === a ? O : a,
					u = t.rootBoundary,
					d = void 0 === u ? R : u,
					h = t.elementContext,
					p = void 0 === h ? T : h,
					f = t.altBoundary,
					_ = void 0 !== f && f,
					g = t.padding,
					y = void 0 === g ? 0 : g,
					m = ne("number" != typeof y ? y : te(y, S)),
					v = p === T ? w : T,
					E = e.elements.reference,
					U = e.rects.popper,
					k = e.elements[_ ? v : p],
					I = ee(o(k) ? k : k.contextElement || c(e.elements.popper), l, d),
					N = i(E),
					M = q({
						reference: N,
						element: U,
						strategy: "absolute",
						placement: s
					}),
					L = X(Object.assign(Object.assign({}, U), M)),
					P = p === T ? L : N,
					D = {
						top: I.top - P.top + m.top,
						bottom: P.bottom - I.bottom + m.bottom,
						left: I.left - P.left + m.left,
						right: P.right - I.right + m.right
					},
					F = e.modifiersData.offset;
				if (p === T && F) {
					var H = F[s];
					Object.keys(D).forEach((function(e) {
						var n = [A, b].indexOf(e) >= 0 ? 1 : -1,
							t = [C, b].indexOf(e) >= 0 ? "y" : "x";
						D[e] += H[t] * n
					}))
				}
				return D
			}

			function ie(e, n, t) {
				return Math.max(e, Math.min(n, t))
			}

			function se(e, n, t) {
				return void 0 === t && (t = {
					x: 0,
					y: 0
				}), {
					top: e.top - n.height - t.y,
					right: e.right - n.width + t.x,
					bottom: e.bottom - n.height + t.y,
					left: e.left - n.width - t.x
				}
			}

			function ae(e) {
				return [C, A, b, U].some((function(n) {
					return e[n] >= 0
				}))
			}
			var oe = x({
					defaultModifiers: [{
						name: "eventListeners",
						enabled: !0,
						phase: "write",
						fn: function() {},
						effect: function(e) {
							var n = e.state,
								t = e.instance,
								r = e.options,
								i = r.scroll,
								a = void 0 === i || i,
								o = r.resize,
								l = void 0 === o || o,
								u = s(n.elements.popper),
								c = [].concat(n.scrollParents.reference, n.scrollParents.popper);
							return a && c.forEach((function(e) {
									e.addEventListener("scroll", t.update, G)
								})), l && u.addEventListener("resize", t.update, G),
								function() {
									a && c.forEach((function(e) {
										e.removeEventListener("scroll", t.update, G)
									})), l && u.removeEventListener("resize", t.update, G)
								}
						},
						data: {}
					}, {
						name: "popperOffsets",
						enabled: !0,
						phase: "read",
						fn: function(e) {
							var n = e.state,
								t = e.name;
							n.modifiersData[t] = q({
								reference: n.rects.reference,
								element: n.rects.popper,
								strategy: "absolute",
								placement: n.placement
							})
						},
						data: {}
					}, {
						name: "computeStyles",
						enabled: !0,
						phase: "beforeWrite",
						fn: function(e) {
							var n = e.state,
								t = e.options,
								r = t.gpuAcceleration,
								i = void 0 === r || r,
								s = t.adaptive,
								a = void 0 === s || s,
								o = {
									placement: j(n.placement),
									popper: n.elements.popper,
									popperRect: n.rects.popper,
									gpuAcceleration: i
								};
							null != n.modifiersData.popperOffsets && (n.styles.popper = Object.assign(Object.assign({}, n.styles.popper), Y(Object.assign(Object.assign({}, o), {}, {
								offsets: n.modifiersData.popperOffsets,
								position: n.options.strategy,
								adaptive: a
							})))), null != n.modifiersData.arrow && (n.styles.arrow = Object.assign(Object.assign({}, n.styles.arrow), Y(Object.assign(Object.assign({}, o), {}, {
								offsets: n.modifiersData.arrow,
								position: "absolute",
								adaptive: !1
							})))), n.attributes.popper = Object.assign(Object.assign({}, n.attributes.popper), {}, {
								"data-popper-placement": n.placement
							})
						},
						data: {}
					}, {
						name: "applyStyles",
						enabled: !0,
						phase: "write",
						fn: function(e) {
							var n = e.state;
							Object.keys(n.elements).forEach((function(e) {
								var t = n.styles[e] || {},
									r = n.attributes[e] || {},
									i = n.elements[e];
								l(i) && u(i) && (Object.assign(i.style, t), Object.keys(r).forEach((function(e) {
									var n = r[e];
									!1 === n ? i.removeAttribute(e) : i.setAttribute(e, !0 === n ? "" : n)
								})))
							}))
						},
						effect: function(e) {
							var n = e.state,
								t = {
									popper: {
										position: n.options.strategy,
										left: "0",
										top: "0",
										margin: "0"
									},
									arrow: {
										position: "absolute"
									},
									reference: {}
								};
							return Object.assign(n.elements.popper.style, t.popper), n.elements.arrow && Object.assign(n.elements.arrow.style, t.arrow),
								function() {
									Object.keys(n.elements).forEach((function(e) {
										var r = n.elements[e],
											i = n.attributes[e] || {},
											s = Object.keys(n.styles.hasOwnProperty(e) ? n.styles[e] : t[e]).reduce((function(e, n) {
												return e[n] = "", e
											}), {});
										l(r) && u(r) && (Object.assign(r.style, s), Object.keys(i).forEach((function(e) {
											r.removeAttribute(e)
										})))
									}))
								}
						},
						requires: ["computeStyles"]
					}, {
						name: "offset",
						enabled: !0,
						phase: "main",
						requires: ["popperOffsets"],
						fn: function(e) {
							var n = e.state,
								t = e.options,
								r = e.name,
								i = t.offset,
								s = void 0 === i ? [0, 0] : i,
								a = L.reduce((function(e, t) {
									return e[t] = function(e, n, t) {
										var r = j(e),
											i = [U, C].indexOf(r) >= 0 ? -1 : 1,
											s = "function" == typeof t ? t(Object.assign(Object.assign({}, n), {}, {
												placement: e
											})) : t,
											a = s[0],
											o = s[1];
										return a = a || 0, o = (o || 0) * i, [U, A].indexOf(r) >= 0 ? {
											x: o,
											y: a
										} : {
											x: a,
											y: o
										}
									}(t, n.rects, s), e
								}), {}),
								o = a[n.placement],
								l = o.x,
								u = o.y;
							null != n.modifiersData.popperOffsets && (n.modifiersData.popperOffsets.x += l, n.modifiersData.popperOffsets.y += u), n.modifiersData[r] = a
						}
					}, {
						name: "flip",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var n = e.state,
								t = e.options,
								r = e.name;
							if (!n.modifiersData[r]._skip) {
								for (var i = t.mainAxis, s = void 0 === i || i, a = t.altAxis, o = void 0 === a || a, l = t.fallbackPlacements, u = t.padding, c = t.boundary, d = t.rootBoundary, h = t.altBoundary, p = t.flipVariations, f = void 0 === p || p, _ = t.allowedAutoPlacements, g = n.options.placement, y = j(g), m = l || (y === g || !f ? [W(g)] : function(e) {
										if (j(e) === k) return [];
										var n = W(e);
										return [J(e), n, J(n)]
									}(g)), v = [g].concat(m).reduce((function(e, t) {
										return e.concat(j(t) === k ? function(e, n) {
											void 0 === n && (n = {});
											var t = n,
												r = t.placement,
												i = t.boundary,
												s = t.rootBoundary,
												a = t.padding,
												o = t.flipVariations,
												l = t.allowedAutoPlacements,
												u = void 0 === l ? L : l,
												c = B(r),
												d = (c ? o ? M : M.filter((function(e) {
													return B(e) === c
												})) : S).filter((function(e) {
													return u.indexOf(e) >= 0
												})).reduce((function(n, t) {
													return n[t] = re(e, {
														placement: t,
														boundary: i,
														rootBoundary: s,
														padding: a
													})[j(t)], n
												}), {});
											return Object.keys(d).sort((function(e, n) {
												return d[e] - d[n]
											}))
										}(n, {
											placement: t,
											boundary: c,
											rootBoundary: d,
											padding: u,
											flipVariations: f,
											allowedAutoPlacements: _
										}) : t)
									}), []), E = n.rects.reference, N = n.rects.popper, O = new Map, R = !0, T = v[0], w = 0; w < v.length; w++) {
									var P = v[w],
										D = j(P),
										F = B(P) === I,
										H = [C, b].indexOf(D) >= 0,
										x = H ? "width" : "height",
										G = re(n, {
											placement: P,
											boundary: c,
											rootBoundary: d,
											altBoundary: h,
											padding: u
										}),
										z = H ? F ? A : U : F ? b : C;
									E[x] > N[x] && (z = W(z));
									var q = W(z),
										Q = [];
									if (s && Q.push(G[D] <= 0), o && Q.push(G[z] <= 0, G[q] <= 0), Q.every((function(e) {
											return e
										}))) {
										T = P, R = !1;
										break
									}
									O.set(P, Q)
								}
								if (R)
									for (var Y = function(e) {
											var n = v.find((function(n) {
												var t = O.get(n);
												if (t) return t.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (n) return T = n, "break"
										}, K = f ? 3 : 1; K > 0; K--) {
										if ("break" === Y(K)) break
									}
								n.placement !== T && (n.modifiersData[r]._skip = !0, n.placement = T, n.reset = !0)
							}
						},
						requiresIfExists: ["offset"],
						data: {
							_skip: !1
						}
					}, {
						name: "preventOverflow",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var n = e.state,
								t = e.options,
								r = e.name,
								i = t.mainAxis,
								s = void 0 === i || i,
								a = t.altAxis,
								o = void 0 !== a && a,
								l = t.boundary,
								u = t.rootBoundary,
								c = t.altBoundary,
								d = t.padding,
								h = t.tether,
								p = void 0 === h || h,
								f = t.tetherOffset,
								g = void 0 === f ? 0 : f,
								y = re(n, {
									boundary: l,
									rootBoundary: u,
									padding: d,
									altBoundary: c
								}),
								m = j(n.placement),
								v = B(n.placement),
								k = !v,
								S = z(m),
								N = "x" === S ? "y" : "x",
								O = n.modifiersData.popperOffsets,
								R = n.rects.reference,
								T = n.rects.popper,
								w = "function" == typeof g ? g(Object.assign(Object.assign({}, n.rects), {}, {
									placement: n.placement
								})) : g,
								M = {
									x: 0,
									y: 0
								};
							if (O) {
								if (s) {
									var L = "y" === S ? C : U,
										P = "y" === S ? b : A,
										D = "y" === S ? "height" : "width",
										F = O[S],
										H = O[S] + y[L],
										x = O[S] - y[P],
										G = p ? -T[D] / 2 : 0,
										q = v === I ? R[D] : T[D],
										Q = v === I ? -T[D] : -R[D],
										Y = n.elements.arrow,
										K = p && Y ? _(Y) : {
											width: 0,
											height: 0
										},
										W = n.modifiersData["arrow#persistent"] ? n.modifiersData["arrow#persistent"].padding : {
											top: 0,
											right: 0,
											bottom: 0,
											left: 0
										},
										V = W[L],
										J = W[P],
										Z = ie(0, R[D], K[D]),
										X = k ? R[D] / 2 - G - Z - V - w : q - Z - V - w,
										$ = k ? -R[D] / 2 + G + Z + J + w : Q + Z + J + w,
										ee = n.elements.arrow && E(n.elements.arrow),
										ne = ee ? "y" === S ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										te = n.modifiersData.offset ? n.modifiersData.offset[n.placement][S] : 0,
										se = O[S] + X - te - ne,
										ae = O[S] + $ - te,
										oe = ie(p ? Math.min(H, se) : H, F, p ? Math.max(x, ae) : x);
									O[S] = oe, M[S] = oe - F
								}
								if (o) {
									var le = "x" === S ? C : U,
										ue = "x" === S ? b : A,
										ce = O[N],
										de = ie(ce + y[le], ce, ce - y[ue]);
									O[N] = de, M[N] = de - ce
								}
								n.modifiersData[r] = M
							}
						},
						requiresIfExists: ["offset"]
					}, {
						name: "arrow",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var n, t = e.state,
								r = e.name,
								i = t.elements.arrow,
								s = t.modifiersData.popperOffsets,
								a = j(t.placement),
								o = z(a),
								l = [U, A].indexOf(a) >= 0 ? "height" : "width";
							if (i && s) {
								var u = t.modifiersData[r + "#persistent"].padding,
									c = _(i),
									d = "y" === o ? C : U,
									h = "y" === o ? b : A,
									p = t.rects.reference[l] + t.rects.reference[o] - s[o] - t.rects.popper[l],
									f = s[o] - t.rects.reference[o],
									g = E(i),
									y = g ? "y" === o ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
									m = p / 2 - f / 2,
									v = u[d],
									k = y - c[l] - u[h],
									S = y / 2 - c[l] / 2 + m,
									I = ie(v, S, k),
									N = o;
								t.modifiersData[r] = ((n = {})[N] = I, n.centerOffset = I - S, n)
							}
						},
						effect: function(e) {
							var n = e.state,
								t = e.options,
								r = e.name,
								i = t.element,
								s = void 0 === i ? "[data-popper-arrow]" : i,
								a = t.padding,
								o = void 0 === a ? 0 : a;
							null != s && ("string" != typeof s || (s = n.elements.popper.querySelector(s))) && Z(n.elements.popper, s) && (n.elements.arrow = s, n.modifiersData[r + "#persistent"] = {
								padding: ne("number" != typeof o ? o : te(o, S))
							})
						},
						requires: ["popperOffsets"],
						requiresIfExists: ["preventOverflow"]
					}, {
						name: "hide",
						enabled: !0,
						phase: "main",
						requiresIfExists: ["preventOverflow"],
						fn: function(e) {
							var n = e.state,
								t = e.name,
								r = n.rects.reference,
								i = n.rects.popper,
								s = n.modifiersData.preventOverflow,
								a = re(n, {
									elementContext: "reference"
								}),
								o = re(n, {
									altBoundary: !0
								}),
								l = se(a, r),
								u = se(o, i, s),
								c = ae(l),
								d = ae(u);
							n.modifiersData[t] = {
								referenceClippingOffsets: l,
								popperEscapeOffsets: u,
								isReferenceHidden: c,
								hasPopperEscaped: d
							}, n.attributes.popper = Object.assign(Object.assign({}, n.attributes.popper), {}, {
								"data-popper-reference-hidden": c,
								"data-popper-escaped": d
							})
						}
					}]
				}),
				le = t("./node_modules/react-popper/node_modules/react-fast-compare/index.js"),
				ue = t.n(le),
				ce = function(e) {
					return e.reduce((function(e, n) {
						var t = n[0],
							r = n[1];
						return e[t] = r, e
					}), {})
				},
				de = "undefined" != typeof window && window.document && window.document.createElement ? r.useLayoutEffect : r.useEffect,
				he = [],
				pe = function(e, n, t) {
					void 0 === t && (t = {});
					var i = r.useRef(null),
						s = {
							onFirstUpdate: t.onFirstUpdate,
							placement: t.placement || "bottom",
							strategy: t.strategy || "absolute",
							modifiers: t.modifiers || he
						},
						a = r.useState({
							styles: {
								popper: {
									position: s.strategy,
									left: "0",
									top: "0"
								}
							},
							attributes: {}
						}),
						o = a[0],
						l = a[1],
						u = r.useMemo((function() {
							return {
								name: "updateState",
								enabled: !0,
								phase: "write",
								fn: function(e) {
									var n = e.state,
										t = Object.keys(n.elements);
									l({
										styles: ce(t.map((function(e) {
											return [e, n.styles[e] || {}]
										}))),
										attributes: ce(t.map((function(e) {
											return [e, n.attributes[e]]
										})))
									})
								},
								requires: ["computeStyles"]
							}
						}), []),
						c = r.useMemo((function() {
							var e = {
								onFirstUpdate: s.onFirstUpdate,
								placement: s.placement,
								strategy: s.strategy,
								modifiers: [].concat(s.modifiers, [u, {
									name: "applyStyles",
									enabled: !1
								}])
							};
							return ue()(i.current, e) ? i.current || e : (i.current = e, e)
						}), [s.onFirstUpdate, s.placement, s.strategy, s.modifiers, u]),
						d = r.useRef();
					return de((function() {
						d.current && d.current.setOptions(c)
					}), [c]), de((function() {
						if (null != e && null != n) {
							var r = (t.createPopper || oe)(e, n, c);
							return d.current = r,
								function() {
									r.destroy(), d.current = null
								}
						}
					}), [e, n, t.createPopper]), {
						state: d.current ? d.current.state : null,
						styles: o.styles,
						attributes: o.attributes,
						update: d.current ? d.current.update : null,
						forceUpdate: d.current ? d.current.forceUpdate : null
					}
				}
		},
		"./node_modules/react-popper/node_modules/react-fast-compare/index.js": function(e, n) {
			var t = "undefined" != typeof Element,
				r = "function" == typeof Map,
				i = "function" == typeof Set,
				s = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
			e.exports = function(e, n) {
				try {
					return function e(n, a) {
						if (n === a) return !0;
						if (n && a && "object" == typeof n && "object" == typeof a) {
							if (n.constructor !== a.constructor) return !1;
							var o, l, u, c;
							if (Array.isArray(n)) {
								if ((o = n.length) != a.length) return !1;
								for (l = o; 0 != l--;)
									if (!e(n[l], a[l])) return !1;
								return !0
							}
							if (r && n instanceof Map && a instanceof Map) {
								if (n.size !== a.size) return !1;
								for (c = n.entries(); !(l = c.next()).done;)
									if (!a.has(l.value[0])) return !1;
								for (c = n.entries(); !(l = c.next()).done;)
									if (!e(l.value[1], a.get(l.value[0]))) return !1;
								return !0
							}
							if (i && n instanceof Set && a instanceof Set) {
								if (n.size !== a.size) return !1;
								for (c = n.entries(); !(l = c.next()).done;)
									if (!a.has(l.value[0])) return !1;
								return !0
							}
							if (s && ArrayBuffer.isView(n) && ArrayBuffer.isView(a)) {
								if ((o = n.length) != a.length) return !1;
								for (l = o; 0 != l--;)
									if (n[l] !== a[l]) return !1;
								return !0
							}
							if (n.constructor === RegExp) return n.source === a.source && n.flags === a.flags;
							if (n.valueOf !== Object.prototype.valueOf) return n.valueOf() === a.valueOf();
							if (n.toString !== Object.prototype.toString) return n.toString() === a.toString();
							if ((o = (u = Object.keys(n)).length) !== Object.keys(a).length) return !1;
							for (l = o; 0 != l--;)
								if (!Object.prototype.hasOwnProperty.call(a, u[l])) return !1;
							if (t && n instanceof Element) return !1;
							for (l = o; 0 != l--;)
								if (("_owner" !== u[l] && "__v" !== u[l] && "__o" !== u[l] || !n.$$typeof) && !e(n[u[l]], a[u[l]])) return !1;
							return !0
						}
						return n != n && a != a
					}(e, n)
				} catch (a) {
					if ((a.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
					throw a
				}
			}
		},
		"./node_modules/sendbird/SendBird.min.js": function(e, n, t) {
			(function(n, r, i) {
				e.exports = function(e, t, s) {
					"use strict";

					function a(e) {
						return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
							return typeof e
						} : function(e) {
							return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
						})(e)
					}

					function o(e, n) {
						if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
					}

					function l(e, n) {
						for (var t = 0; t < n.length; t++) {
							var r = n[t];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
						}
					}

					function u(e, n, t) {
						return n && l(e.prototype, n), t && l(e, t), e
					}

					function c(e, n) {
						var t, r = Object.keys(e);
						return Object.getOwnPropertySymbols && (t = Object.getOwnPropertySymbols(e), n && (t = t.filter((function(n) {
							return Object.getOwnPropertyDescriptor(e, n).enumerable
						}))), r.push.apply(r, t)), r
					}

					function d(e) {
						for (var n = 1; n < arguments.length; n++) {
							var t = null != arguments[n] ? arguments[n] : {};
							n % 2 ? c(Object(t), !0).forEach((function(n) {
								var r, i;
								r = e, n = t[i = n], i in r ? Object.defineProperty(r, i, {
									value: n,
									enumerable: !0,
									configurable: !0,
									writable: !0
								}) : r[i] = n
							})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach((function(n) {
								Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
							}))
						}
						return e
					}

					function h(e, n) {
						if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
						e.prototype = Object.create(n && n.prototype, {
							constructor: {
								value: e,
								writable: !0,
								configurable: !0
							}
						}), n && f(e, n)
					}

					function p(e) {
						return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
							return e.__proto__ || Object.getPrototypeOf(e)
						})(e)
					}

					function f(e, n) {
						return (f = Object.setPrototypeOf || function(e, n) {
							return e.__proto__ = n, e
						})(e, n)
					}

					function _() {
						if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
						if (Reflect.construct.sham) return !1;
						if ("function" == typeof Proxy) return !0;
						try {
							return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
						} catch (F) {
							return !1
						}
					}

					function g(e, n, t) {
						return (g = _() ? Reflect.construct : function(e, n, t) {
							var r = [null];
							return r.push.apply(r, n), r = new(Function.bind.apply(e, r)), t && f(r, t.prototype), r
						}).apply(null, arguments)
					}

					function y(e) {
						var n = "function" == typeof Map ? new Map : void 0;
						return (y = function(e) {
							if (null === e || (t = e, -1 === Function.toString.call(t).indexOf("[native code]"))) return e;
							var t;
							if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
							if (void 0 !== n) {
								if (n.has(e)) return n.get(e);
								n.set(e, r)
							}

							function r() {
								return g(e, arguments, p(this).constructor)
							}
							return r.prototype = Object.create(e.prototype, {
								constructor: {
									value: r,
									enumerable: !1,
									writable: !0,
									configurable: !0
								}
							}), f(r, e)
						})(e)
					}

					function m(e) {
						if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return e
					}

					function v(e) {
						var n = _();
						return function() {
							var t, r = p(e);
							return t = n ? (t = p(this).constructor, Reflect.construct(r, arguments, t)) : r.apply(this, arguments), r = this, !(t = t) || "object" != typeof t && "function" != typeof t ? m(r) : t
						}
					}

					function E(e, n, t) {
						return (E = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, n, t) {
							if (e = function(e, n) {
									for (; !Object.prototype.hasOwnProperty.call(e, n) && null !== (e = p(e)););
									return e
								}(e, n)) return (n = Object.getOwnPropertyDescriptor(e, n)).get ? n.get.call(t) : n.value
						})(e, n, t || e)
					}

					function C(e, n) {
						return function(e) {
							if (Array.isArray(e)) return e
						}(e) || function(e, n) {
							if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
								var t = [],
									r = !0,
									i = !1,
									s = void 0;
								try {
									for (var a, o = e[Symbol.iterator](); !(r = (a = o.next()).done) && (t.push(a.value), !n || t.length !== n); r = !0);
								} catch (e) {
									i = !0, s = e
								} finally {
									try {
										r || null == o.return || o.return()
									} finally {
										if (i) throw s
									}
								}
								return t
							}
						}(e, n) || A(e, n) || function() {
							throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
						}()
					}

					function b(e) {
						return function(e) {
							if (Array.isArray(e)) return U(e)
						}(e) || function(e) {
							if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
						}(e) || A(e) || function() {
							throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
						}()
					}

					function A(e, n) {
						if (e) {
							if ("string" == typeof e) return U(e, n);
							var t = Object.prototype.toString.call(e).slice(8, -1);
							return "Map" === (t = "Object" === t && e.constructor ? e.constructor.name : t) || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? U(e, n) : void 0
						}
					}

					function U(e, n) {
						(null == n || n > e.length) && (n = e.length);
						for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
						return r
					}

					function k(e, n) {
						var t;
						if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
							if (Array.isArray(e) || (t = A(e)) || n && e && "number" == typeof e.length) {
								t && (e = t);
								var r = 0;
								return {
									s: n = function() {},
									n: function() {
										return r >= e.length ? {
											done: !0
										} : {
											done: !1,
											value: e[r++]
										}
									},
									e: function(e) {
										throw e
									},
									f: n
								}
							}
							throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
						}
						var i, s = !0,
							a = !1;
						return {
							s: function() {
								t = e[Symbol.iterator]()
							},
							n: function() {
								var e = t.next();
								return s = e.done, e
							},
							e: function(e) {
								a = !0, i = e
							},
							f: function() {
								try {
									s || null == t.return || t.return()
								} finally {
									if (a) throw i
								}
							}
						}
					}
					e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e, t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, s = s && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
					var S = function() {
							function e() {
								o(this, e)
							}
							return u(e, null, [{
								key: "OS_VERSION",
								get: function() {
									return "undefined" != typeof navigator && navigator.userAgent ? navigator.userAgent.replace(/,/g, ".") : "noAgent"
								}
							}, {
								key: "SDK_VERSION",
								get: function() {
									return "3.0.148"
								}
							}, {
								key: "SDK_MAJOR_VERSION",
								get: function() {
									return e.SDK_VERSION.split(".")[0]
								}
							}, {
								key: "DEFAULT_MAX_UNREAD_COUNT_OF_SUPER_GROUP_CHANNEL",
								get: function() {
									return 100
								}
							}, {
								key: "INTERNAL_CALL",
								get: function() {
									return "ic"
								}
							}]), e
						}(),
						I = {},
						N = new WeakMap,
						O = function() {
							function e() {
								var n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
								o(this, e), N.set(this, "object" === a(n) && n ? n : {})
							}
							return u(e, [{
								key: "container",
								get: function() {
									return N.get(this)
								}
							}, {
								key: "get",
								value: function(e) {
									return N.get(this)[e]
								}
							}, {
								key: "set",
								value: function(e, n) {
									N.get(this)[e] = n
								}
							}, {
								key: "remove",
								value: function(e) {
									var n = N.get(this);
									n.hasOwnProperty(e) && delete n[e]
								}
							}], [{
								key: "create",
								value: function(n, t) {
									return I[n] = new e(t), I[n]
								}
							}, {
								key: "get",
								value: function(e) {
									return e = e || ot.getInstance()._iid, I[e]
								}
							}]), e
						}(),
						R = function() {
							h(n, y(Error));
							var e = v(n);

							function n(t, r) {
								var i;
								return o(this, n), (i = e.call(this, r)).name = "SendBirdException", i.code = r || 0, i.message = t, i
							}
							return u(n, [{
								key: "isSessionKeyExpiredError",
								get: function() {
									return 400309 === this.code
								}
							}, {
								key: "isSessionTokenExpiredError",
								get: function() {
									return 400302 === this.code
								}
							}], [{
								key: "INVALID_INITIALIZATION",
								get: function() {
									return 800100
								}
							}, {
								key: "CONNECTION_REQUIRED",
								get: function() {
									return 800101
								}
							}, {
								key: "CONNECTION_CANCELED",
								get: function() {
									return 800102
								}
							}, {
								key: "INVALID_PARAMETER",
								get: function() {
									return 800110
								}
							}, {
								key: "NETWORK_ERROR",
								get: function() {
									return 800120
								}
							}, {
								key: "NETWORK_ROUTING_ERROR",
								get: function() {
									return 800121
								}
							}, {
								key: "MALFORMED_DATA",
								get: function() {
									return 800130
								}
							}, {
								key: "MALFORMED_ERROR_DATA",
								get: function() {
									return 800140
								}
							}, {
								key: "WRONG_CHANNEL_TYPE",
								get: function() {
									return 800150
								}
							}, {
								key: "MARK_AS_READ_RATE_LIMIT_EXCEEDED",
								get: function() {
									return 800160
								}
							}, {
								key: "QUERY_IN_PROGRESS",
								get: function() {
									return 800170
								}
							}, {
								key: "ACK_TIMEOUT",
								get: function() {
									return 800180
								}
							}, {
								key: "LOGIN_TIMEOUT",
								get: function() {
									return 800190
								}
							}, {
								key: "WEBSOCKET_CONNECTION_CLOSED",
								get: function() {
									return 800200
								}
							}, {
								key: "WEBSOCKET_CONNECTION_FAILED",
								get: function() {
									return 800210
								}
							}, {
								key: "REQUEST_FAILED",
								get: function() {
									return 800220
								}
							}, {
								key: "FILE_UPLOAD_CANCEL_FAILED",
								get: function() {
									return 800230
								}
							}, {
								key: "REQUEST_CANCELED",
								get: function() {
									return 800240
								}
							}, {
								key: "REQUEST_DUPLICATED",
								get: function() {
									return 800250
								}
							}, {
								key: "FILE_SIZE_LIMIT_EXCEEDED",
								get: function() {
									return 800260
								}
							}, {
								key: "SESSION_TOKEN_REQUEST_FAILED",
								get: function() {
									return 800500
								}
							}, {
								key: "SESSION_TOKEN_REFRESHED",
								get: function() {
									return 800501
								}
							}, {
								key: "SESSION_TOKEN_REFRESH_FAILED",
								get: function() {
									return 800502
								}
							}]), n
						}(),
						T = function() {
							function e() {
								o(this, e), this.sessionToken = null, this.sessionKey = null, this.eKey = null
							}
							return u(e, [{
								key: "hasSession",
								value: function() {
									return !!this.sessionKey
								}
							}]), e
						}(),
						w = {},
						M = function() {
							function e(n) {
								var t, r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
								for (t in o(this, e), this._iid = n, r) {
									var i = r[t];
									"function" == typeof i && (this[t] = this.getClonedClass(i))
								}
								w[n] = this
							}
							return u(e, [{
								key: "getClonedClass",
								value: function(e) {
									var n = this._iid;
									return function() {
										h(r, e);
										var t = v(r);

										function r() {
											return o(this, r), t.apply(this, arguments)
										}
										return u(r, [{
											key: "_iid",
											get: function() {
												return n
											}
										}], [{
											key: "_iid",
											get: function() {
												return n
											}
										}, {
											key: "_name",
											get: function() {
												return e.name
											}
										}]), r
									}()
								}
							}], [{
								key: "get",
								value: function(e) {
									return e ? w[e] : {}
								}
							}]), e
						}(),
						L = {
							verbose: "VERBOSE",
							info: "INFO",
							debug: "DEBUG",
							warn: "WARN",
							error: "ERROR"
						},
						P = function() {
							function e() {
								o(this, e)
							}
							return u(e, [{
								key: "getLogLevelText",
								value: function(e) {
									return L[e]
								}
							}]), e
						}(),
						D = function() {
							h(n, P);
							var e = v(n);

							function n() {
								return o(this, n), e.apply(this, arguments)
							}
							return u(n, [{
								key: "log",
								value: function(e) {
									for (var n, t, r, i = this.getLogLevelText(e); i.length < 8;) i += " ";
									for (var s = arguments.length, a = new Array(1 < s ? s - 1 : 0), o = 1; o < s; o++) a[o - 1] = arguments[o];
									switch (a.unshift("[".concat(i, "]")), e) {
										case "verbose":
											(n = console).log.apply(n, a);
											break;
										case "debug":
											(t = console).log.apply(t, a);
											break;
										case "info":
											(t = console).info.apply(t, a);
											break;
										case "warn":
											(r = console).warn.apply(r, a);
											break;
										case "error":
											(r = console).error.apply(r, a)
									}
								}
							}, {
								key: "groupStart",
								value: function() {
									var e;
									(e = console).group.apply(e, arguments)
								}
							}, {
								key: "groupEnd",
								value: function() {
									var e;
									(e = console).groupEnd.apply(e, arguments)
								}
							}]), n
						}(),
						F = {
							DEBUG: "debug",
							PRODUCTION: "production"
						},
						H = F.PRODUCTION,
						x = {
							VERBOSE: "verbose",
							DEBUG: "debug",
							INFO: "info",
							WARN: "warn",
							ERROR: "error"
						},
						G = ["error", "warn", "info", "debug", "verbose"],
						j = x.WARN,
						B = G.indexOf(j),
						z = [new D],
						q = function() {
							function e() {
								o(this, e)
							}
							return u(e, null, [{
								key: "Mode",
								get: function() {
									return F
								}
							}, {
								key: "mode",
								get: function() {
									return H
								},
								set: function(n) {
									-1 < Object.keys(e.Mode).map((function(n) {
										return e.Mode[n]
									})).indexOf(n) && (H = n)
								}
							}, {
								key: "supportedLogLevels",
								get: function() {
									return x
								}
							}, {
								key: "logLevel",
								get: function() {
									return G[B]
								},
								set: function(e) {
									G.includes(e) || (e = j), B = G.indexOf(e)
								}
							}, {
								key: "defaultLogLevel",
								get: function() {
									return j
								}
							}, {
								key: "isDisplayableLogLevel",
								value: function(e) {
									return 0 <= (e = G.indexOf(e)) && e <= B
								}
							}, {
								key: "log",
								value: function(n) {
									for (var t = arguments.length, r = new Array(1 < t ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
									e.isDisplayableLogLevel(n) && z.forEach((function(e) {
										return e.log.apply(e, [n].concat(r))
									}))
								}
							}, {
								key: "verbose",
								value: function() {
									for (var n = arguments.length, t = new Array(n), r = 0; r < n; r++) t[r] = arguments[r];
									e.log.apply(e, [x.VERBOSE].concat(t))
								}
							}, {
								key: "debug",
								value: function() {
									for (var n = arguments.length, t = new Array(n), r = 0; r < n; r++) t[r] = arguments[r];
									e.log.apply(e, [x.DEBUG].concat(t))
								}
							}, {
								key: "info",
								value: function() {
									for (var n = arguments.length, t = new Array(n), r = 0; r < n; r++) t[r] = arguments[r];
									e.log.apply(e, [x.INFO].concat(t))
								}
							}, {
								key: "warn",
								value: function() {
									for (var n = arguments.length, t = new Array(n), r = 0; r < n; r++) t[r] = arguments[r];
									e.log.apply(e, [x.WARN].concat(t))
								}
							}, {
								key: "error",
								value: function() {
									for (var n = arguments.length, t = new Array(n), r = 0; r < n; r++) t[r] = arguments[r];
									e.log.apply(e, [x.ERROR].concat(t))
								}
							}, {
								key: "group",
								value: function() {
									for (var n = arguments.length, t = new Array(n), r = 0; r < n; r++) t[r] = arguments[r];
									var i = [];
									(i = Array.isArray(t[t.length - 1]) ? t.pop() : i).some((function(n) {
										return e.isDisplayableLogLevel(n.level)
									})) && z.filter((function(e) {
										return e instanceof D
									})).forEach((function(e) {
										e.groupStart.apply(e, t), i.forEach((function(n) {
											return e.log.apply(e, [n.level].concat(b(n.messages)))
										})), e.groupEnd()
									}))
								}
							}]), e
						}(),
						Q = function() {
							function e() {
								o(this, e), this._queue = [], this.locked = !1
							}
							return u(e, [{
								key: "lock",
								value: function(e) {
									var n = this;
									this.locked ? this._queue.push(e) : (this.locked = !0, e((function() {
										return n.unlock()
									})))
								}
							}, {
								key: "unlock",
								value: function() {
									var e;
									this.locked = !1, 0 < this._queue.length && (e = this._queue.shift(), this.lock(e))
								}
							}]), e
						}(),
						Y = function() {
							function e(n) {
								o(this, e), this.sb = n, this.mutex = new Q, this.pingTimer = null, this.pingTimeoutTimer = null
							}
							return u(e, [{
								key: "ping",
								value: function() {
									var e = this,
										n = M.get(this.sb._iid).Command.bPing(),
										t = (r = O.get(this.sb._iid).container).wsAdapter,
										r = r.pongTimeout;
									t.client.send(n), q.debug("`PING`"), this.pingTimeoutTimer = setTimeout((function() {
										q.debug("`PING` timeout."), e.stop(), t.client.handler && t.client.handler.onError()
									}), r)
								}
							}, {
								key: "pong",
								value: function() {
									this.pingTimeoutTimer && (clearTimeout(this.pingTimeoutTimer), this.pingTimeoutTimer = null)
								}
							}, {
								key: "refreshTimer",
								value: function() {
									var e = this,
										n = O.get(this.sb._iid).container.pingInterval;
									this.mutex.lock((function(t) {
										e.stop(), e.pingTimer = setInterval((function() {
											e.ping()
										}), n), t()
									}))
								}
							}, {
								key: "start",
								value: function() {
									this.refreshTimer(), this.ping()
								}
							}, {
								key: "stop",
								value: function() {
									this.pingTimer && (clearInterval(this.pingTimer), this.pingTimer = null), this.pingTimeoutTimer && (clearTimeout(this.pingTimeoutTimer), this.pingTimeoutTimer = null)
								}
							}]), e
						}();

					function K() {
						return "undefined" == typeof window && void 0 !== n
					}
					var W = [R.CONNECTION_REQUIRED, R.NETWORK_ERROR, R.ACK_TIMEOUT, R.WEBSOCKET_CONNECTION_CLOSED, R.WEBSOCKET_CONNECTION_FAILED, R.FILE_UPLOAD_CANCEL_FAILED, R.REQUEST_CANCELED, 500901, 500910, 900200],
						V = function() {
							function e() {
								o(this, e)
							}
							return u(e, null, [{
								key: "deepEqual",
								value: function(e, n) {
									return e === n || (e = d({}, e), n = d({}, n), !(e.messageId && n.messageId && e.messageId !== n.messageId || e.reqId && n.reqId && e.reqId !== n.reqId || (e.hasOwnProperty("messageId") && delete e.messageId, e.hasOwnProperty("reqId") && delete e.reqId, n.hasOwnProperty("messageId") && delete n.messageId, n.hasOwnProperty("reqId") && delete n.reqId, JSON.stringify(e) !== JSON.stringify(n))))
								}
							}, {
								key: "isResendableError",
								value: function(e) {
									return 0 < e && 0 <= W.indexOf(e)
								}
							}, {
								key: "isFile",
								value: function(e) {
									var n = "object" === a(e) && null !== e && "string" == typeof e.name && "string" == typeof e.uri && "string" == typeof e.type;
									if (!n)
										if (K()) {
											if (void 0 !== r) return e instanceof r
										} else {
											if ("undefined" != typeof Blob) return e instanceof Blob;
											if ("undefined" != typeof File) return e instanceof File
										} return n
								}
							}]), e
						}(),
						J = function() {
							function e(n) {
								if (o(this, e), this.fields = {}, n)
									for (var t in n) this.fields[t] = {
										value: n[t]
									}, V.isFile(n[t]) && (this.fields[t].filename = n[t].name);
								this.options = {}, this.internal = !1, this.upload = {
									reqId: null,
									deleteRequest: null,
									progressHandler: null
								}
							}
							return u(e, [{
								key: "add",
								value: function(e, n) {
									var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
									this.fields[e] = {
										value: n,
										filename: t
									}
								}
							}, {
								key: "remove",
								value: function(e) {
									this.fields.hasOwnProperty(e) && delete this.fields[e]
								}
							}, {
								key: "yield",
								value: function() {
									var e, n = !1;
									for (e in this.fields)
										if (V.isFile(this.fields[e].value)) {
											n = !0;
											break
										} if (n) {
										var r, i = new t;
										for (r in this.fields) {
											var s, a = this.fields[r];
											V.isFile(a.value) ? (s = a.value).filename || s.name ? i.append(r, a.value, s.filename || s.name) : s.data ? i.append(r, a.value, a.data.name) : i.append(r, a.value, "unnamed") : i.append(r, a.value)
										}
										return i
									}
									var o, l = {};
									for (o in this.fields) l[o] = this.fields[o].value;
									return l
								}
							}]), e
						}(),
						Z = function() {
							function n(e) {
								o(this, n), this.sb = e, this.cls = M.get(this.sb._iid)
							}
							return u(n, [{
								key: "checkRouting",
								value: function(e) {
									var n;
									this.sb.customApiHost && this.sb.customWsHost ? "function" == typeof e && e(null, {
										apiHost: this.sb.customApiHost,
										wsHost: this.sb.customWsHost
									}) : (n = this.sb.getApplicationId(), e(null, {
										apiHost: "https://api-".concat(n, ".sendbird.com"),
										wsHost: "wss://ws-".concat(n, ".sendbird.com")
									}))
								}
							}, {
								key: "_buildUrl",
								value: function(e) {
									var n = e.apiHost,
										t = e.url;
									return e = e.params, t ? (e && e.internal ? "".concat(n, "/v").concat(S.SDK_MAJOR_VERSION, "/sdk") : "".concat(n, "/v").concat(S.SDK_MAJOR_VERSION)).concat(t) : n
								}
							}, {
								key: "_createHeader",
								value: function() {
									var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
										n = void 0 !== (o = (s = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).noSessionKey) && o,
										r = void 0 === (a = s.accessToken) ? null : a,
										i = e instanceof t && "function" == typeof e.getHeaders ? e.getHeaders() : {},
										s = (o = O.get(this.sb._iid).container).appId,
										a = o.auth,
										o = (e = o.extensions, o.getUserAgentWithExtensions);
									return i.SendBird = "JS,".concat(S.OS_VERSION, ",").concat(S.SDK_VERSION, ",").concat(s), i["SB-User-Agent"] = encodeURIComponent(o(e)), !n && a.sessionKey && (i["Session-Key"] = a.sessionKey), r && (i["App-Id"] = s, i["Access-Token"] = r), i["Request-Sent-Timestamp"] = (new Date).getTime().toString(), i
								}
							}, {
								key: "_createQuery",
								value: function(e) {
									var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
									try {
										var t, r = [];
										for (t in n) {
											var i, s = n[t];
											null != s && (i = "", i = "object" === a(s) ? Array.isArray(s) ? s.map((function(e) {
												return encodeURIComponent("string" == typeof e ? e.trim() : e)
											})).join(",") : encodeURIComponent(JSON.stringify(s)) : encodeURIComponent(s), r.push("".concat(t, "=").concat(i)))
										}
										return 0 < r.length ? "".concat(e, "?").concat(r.join("&")) : e
									} catch (n) {
										return q.debug("createWithEncodedGetParams is failed. - ", n), e
									}
								}
							}, {
								key: "_request",
								value: function(n, r, i, s) {
									var a = this;
									this.checkRouting((function(o, l) {
										if (o) s(new R("Request failed.", R.REQUEST_FAILED), null);
										else {
											var u = a._buildUrl({
													apiHost: l.apiHost,
													url: r,
													params: i
												}),
												c = i ? i.yield() : {},
												d = a._createHeader(c, i ? i.options : {}),
												h = [{
													level: q.supportedLogLevels.DEBUG,
													messages: ["url:", r]
												}, {
													level: q.supportedLogLevels.DEBUG,
													messages: ["data:", c]
												}],
												p = null;
											switch (n) {
												case "GET":
													p = a._createQuery(u, c);
													break;
												case "POST":
												case "PUT":
													p = u;
													break;
												case "DELETE":
													p = a._createQuery(u, c)
											}
											var f = null;
											if ("undefined" == typeof ServiceWorker || "undefined" == typeof ServiceWorkerRegistration || "undefined" != typeof ServiceWorkerContainer || K() || "function" != typeof fetch) switch (n) {
												case "GET":
													f = e.get(p, {
														headers: d,
														validateStatus: a._validateStatus
													});
													break;
												case "POST":
													var _, g, y, m = null;
													c instanceof t && (m = (_ = e.CancelToken.source()).token, g = a.cls.FileMessageQueue, (y = i.upload.reqId) && (h.push({
														level: q.supportedLogLevels.DEBUG,
														messages: ["request id:", y]
													}), g.uploadRequest[y] = _)), f = e.post(p, "function" == typeof c.getBuffer ? c.getBuffer() : c, {
														headers: d,
														validateStatus: a._validateStatus,
														cancelToken: m,
														onUploadProgress: function(e) {
															i.upload.progressHandler && i.upload.progressHandler(e, i.upload.reqId)
														}
													});
													break;
												case "PUT":
													f = e.put(p, c, {
														headers: d,
														validateStatus: a._validateStatus
													});
													break;
												case "DELETE":
													f = e.delete(p, {
														headers: d,
														validateStatus: a._validateStatus
													})
											} else {
												var v, E, C, b = {
													method: n,
													headers: d
												};
												switch (n) {
													case "GET":
														break;
													case "POST":
														c instanceof t ? ("function" == typeof AbortController && (C = (v = new AbortController).signal, b.signal = C, E = a.cls.FileMessageQueue, (C = i.upload.reqId) && (h.push({
															level: q.supportedLogLevels.DEBUG,
															messages: ["request id:", C]
														}), E.uploadRequest[C] = v)), b.body = "function" == typeof c.getBuffer ? c.getBuffer() : c) : (d["Content-Type"] = "application/json; charset=utf-8", b.body = JSON.stringify(c));
														break;
													case "PUT":
														c instanceof t ? b.body = "function" == typeof c.getBuffer ? c.getBuffer() : c : (d["Content-Type"] = "application/json; charset=utf-8", b.body = JSON.stringify(c))
												}
												f = fetch(p, b).then((function(e) {
													return e.json().then((function(n) {
														if (!a._validateStatus(e.status)) throw {
															request: {
																isAbort: !1
															},
															response: {
																data: n
															}
														};
														return Promise.resolve({
															data: n
														})
													}))
												}))
											}
											q.group("".concat(n, " request"), h), h = [], f.then((function(e) {
												try {
													var t = e.data;
													"POST" === n && "function" == typeof i.upload.deleteRequest && i.upload.deleteRequest(), h.push({
														level: q.supportedLogLevels.DEBUG,
														messages: ["data:", t]
													}), s(null, t)
												} catch (e) {
													throw {
														code: 888e3,
														rawError: e
													}
												}
											})).catch((function(e) {
												if (888e3 === e.code) throw e.rawError;
												"POST" === n && "function" == typeof i.upload.deleteRequest && i.upload.deleteRequest(), e = a._handleError(e), h.push({
													level: q.supportedLogLevels.DEBUG,
													messages: ["error:", e]
												}), r && i && e.isSessionKeyExpiredError ? O.get(a.sb._iid).container.sessionManager.refresh((function(e) {
													return s(e, null)
												})) : s(e, null)
											})).finally((function() {
												return q.group("".concat(n, " response"), h)
											}))
										}
									}))
								}
							}, {
								key: "_validateStatus",
								value: function(e) {
									return 200 <= e && e < 400
								}
							}, {
								key: "_handleError",
								value: function(e) {
									var n = e.request;
									return e = e.response, n ? n.isAbort || n.aborted ? new R("Request has been canceled.", R.REQUEST_CANCELED) : e ? (e = (n = e.data) ? n.message : "Request failed.", n = n ? n.code : R.REQUEST_FAILED, new R(e, n)) : new R("Request failed.", R.REQUEST_FAILED) : new R("There was a network error.", R.NETWORK_ERROR)
								}
							}, {
								key: "get",
								value: function(e, n, t) {
									this._request("GET", e, n, t)
								}
							}, {
								key: "dummyCall",
								value: function(e) {
									this._request("GET", null, null, e)
								}
							}, {
								key: "post",
								value: function(e, n, t) {
									this._request("POST", e, n, t)
								}
							}, {
								key: "put",
								value: function(e, n, t) {
									this._request("PUT", e, n, t)
								}
							}, {
								key: "delete",
								value: function(e, n, t) {
									this._request("DELETE", e, n, t)
								}
							}, {
								key: "refreshSessionKey",
								value: function(e, t) {
									var r = this,
										i = e.accessToken;
									this.sb.ConnectionManager.ready((function(e, s) {
										e ? t(e, null) : (e = n.Path.USERS_USERID_SESSION_KEY.replace("%s", encodeURIComponent(s.userId)), (s = new J).options.noSessionKey = !0, s.options.accessToken = i, r.post(e, s, t))
									}))
								}
							}, {
								key: "updateCurrentUserInfo",
								value: function(e, t) {
									var r = this,
										i = e.nickname,
										s = e.profileUrl,
										a = e.profileImage,
										o = e.preferredLanguages;
									this.sb.ConnectionManager.ready((function(e, l) {
										e ? t(e, null) : (e = n.Path.USERS_USERID.replace("%s", encodeURIComponent(l.userId)), l = new J, i && l.add("nickname", i), s && l.add("profile_url", s), a && l.add("profile_file", a, a.name), o && l.add("preferred_languages", o), r.put(e, l, t))
									}))
								}
							}, {
								key: "getMyGroupChannelChangeLogs",
								value: function(e, t) {
									var r = this,
										i = e.ts,
										s = e.token,
										a = e.customTypes,
										o = e.includeEmpty,
										l = e.includeFrozen;
									this.sb.ConnectionManager.ready((function(e, u) {
										e ? t(e, null) : (e = n.Path.USERS_USERID_MY_GROUP_CHANNEL_CHANGELOGS.replace("%s", encodeURIComponent(u.userId)), u = new J({
											show_read_receipt: !0,
											show_delivery_receipt: !0,
											show_member: !0
										}), s && u.add("token", s), i && u.add("change_ts", i), a && 0 < a.length && u.add("custom_types", a), "boolean" == typeof o && u.add("show_empty", o), "boolean" == typeof l && u.add("show_frozen", l), r.get(e, u, t))
									}))
								}
							}, {
								key: "getChannelInvitationPreference",
								value: function(e, t) {
									var r = this;
									this.sb.ConnectionManager.ready((function(e, i) {
										e ? t(e, null) : (i = n.Path.USERS_USERID_GROUP_CHANNEL_INVITATION_PREFERENCE.replace("%s", encodeURIComponent(i.userId)), r.get(i, null, t))
									}))
								}
							}, {
								key: "getGroupChannelCount",
								value: function(e, t) {
									var r = this,
										i = e.memberStateFilter;
									this.sb.ConnectionManager.ready((function(e, s) {
										if (e) t(e, null);
										else {
											e = r.cls.GroupChannel, s = n.Path.USERS_USERID_GROUP_CHANNEL_COUNT.replace("%s", encodeURIComponent(s.userId));
											var a = "";
											switch (i) {
												case e.MemberStateFilter.JOINED:
													a = "joined";
													break;
												case e.MemberStateFilter.INVITED:
													a = "invited";
													break;
												case e.MemberStateFilter.INVITED_BY_FRIEND:
													a = "invited_by_friend";
													break;
												case e.MemberStateFilter.INVITED_BY_NON_FRIEND:
													a = "invited_by_non_friend";
													break;
												default:
													a = "all"
											}
											e = new J({
												state: a
											}), r.get(s, e, t)
										}
									}))
								}
							}, {
								key: "getUnreadItemCount",
								value: function(e, t) {
									var r = this,
										i = e.keys;
									this.sb.ConnectionManager.ready((function(e, s) {
										e ? t(e, null) : (e = n.Path.USERS_USERID_UNREAD_ITEM_COUNT.replace("%s", encodeURIComponent(s.userId)), s = new J({
											item_keys: i
										}), r.get(e, s, t))
									}))
								}
							}, {
								key: "getTotalUnreadMessageCount",
								value: function(e, t) {
									var r = this,
										i = e.customTypesFilter,
										s = e.superChannelFilter;
									this.sb.ConnectionManager.ready((function(e, a) {
										e ? t(e, null) : (e = n.Path.USERS_USERID_UNREAD_MESSAGE_COUNT.replace("%s", encodeURIComponent(a.userId)), a = new J({
											super_mode: s
										}), null !== i && 0 < i.length && a.add("custom_types", i), r.get(e, a, t))
									}))
								}
							}, {
								key: "getTotalUnreadChannelCount",
								value: function(e, t) {
									var r = this;
									this.sb.ConnectionManager.ready((function(e, i) {
										e ? t(e, null) : (i = n.Path.USERS_USERID_UNREAD_CHANNEL_COUNT.replace("%s", encodeURIComponent(i.userId)), r.get(i, null, t))
									}))
								}
							}, {
								key: "searchMessages",
								value: function(e, t) {
									var r = this,
										i = e.keyword,
										s = e.limit,
										a = e.reverse,
										o = e.exactMatch,
										l = e.channelUrl,
										u = e.channelCustomType,
										c = e.messageTimestampFrom,
										d = e.messageTimestampTo,
										h = e.order,
										p = e.nextToken;
									this.sb.ConnectionManager.ready((function(e, f) {
										var _;
										e ? t(e, null) : (_ = n.Path.SEARCH_MESSAGE, e = new J({
											limit: s,
											reverse: a,
											query: i,
											custom_type: u
										}), c && e.add("message_ts_from", c), d && e.add("message_ts_to", d), l && e.add("channel_url", l), h && e.add("sort_field", h), "boolean" == typeof o && e.add("exact_match", o), null !== p && 0 < p.length && e.add("after", p), r.get(_, e, t))
									}))
								}
							}, {
								key: "markAsReadAll",
								value: function(e, t) {
									var r = this,
										i = e.channelUrls;
									this.sb.ConnectionManager.ready((function(e, s) {
										e ? t(e, null) : (e = n.Path.USERS_USERID_MARKASREADALL.replace("%s", encodeURIComponent(s.userId)), s = new J, i && s.add("channel_urls", i), r.put(e, s, t))
									}))
								}
							}, {
								key: "markAsDelivered",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl,
										s = e.userId;
									this.sb.ConnectionManager.ready((function(e, a) {
										var o;
										e ? t(e, null) : (o = n.Path.GROUPCHANNELS_CHANNELURL_MESSAGES_MARKASDELIVERED.replace("%s", encodeURIComponent(i)), e = new J, s && e.add("user_id", s), r.put(o, e, t))
									}))
								}
							}, {
								key: "setChannelInvitationPreference",
								value: function(e, t) {
									var r = this,
										i = e.isAutoAccept;
									this.sb.ConnectionManager.ready((function(e, s) {
										e ? t(e, null) : (e = n.Path.USERS_USERID_GROUP_CHANNEL_INVITATION_PREFERENCE.replace("%s", encodeURIComponent(s.userId)), s = new J({
											auto_accept: i
										}), r.put(e, s, t))
									}))
								}
							}, {
								key: "blockUser",
								value: function(e, t) {
									var r = this,
										i = e.blockedUserId;
									this.sb.ConnectionManager.ready((function(e, s) {
										e ? t(e, null) : (e = n.Path.USERS_USERID_BLOCK.replace("%s", encodeURIComponent(s.userId)), s = new J({
											target_id: i
										}), r.post(e, s, t))
									}))
								}
							}, {
								key: "unblockUser",
								value: function(e, t) {
									var r = this,
										i = e.unblockedUserId;
									this.sb.ConnectionManager.ready((function(e, s) {
										e ? t(e, null) : (s = n.Path.USERS_USERID_BLOCK_TARGETID.replace("%s", encodeURIComponent(s.userId)).replace("%s", encodeURIComponent(i)), r.delete(s, null, t))
									}))
								}
							}, {
								key: "getPushTriggerOption",
								value: function(e, t) {
									var r = this;
									this.sb.ConnectionManager.ready((function(e, i) {
										e ? t(e, null) : (i = n.Path.USERS_USERID_PUSHPREFERENCE.replace("%s", encodeURIComponent(i.userId)), r.get(i, null, t))
									}))
								}
							}, {
								key: "setPushTriggerOption",
								value: function(e, t) {
									var r = this,
										i = e.pushTriggerOption;
									this.sb.ConnectionManager.ready((function(e, s) {
										e ? t(e, null) : (e = n.Path.USERS_USERID_PUSHPREFERENCE.replace("%s", encodeURIComponent(s.userId)), s = new J({
											push_trigger_option: i
										}), r.put(e, s, t))
									}))
								}
							}, {
								key: "getPushTokens",
								value: function(e, t) {
									var r = this,
										i = e.ts,
										s = e.token,
										a = e.type;
									this.sb.ConnectionManager.ready((function(e, o) {
										e ? t(e, null) : (e = n.Path.USERS_USERID_PUSH_DEVICE_TOKENS.replace("%s", encodeURIComponent(o.userId)).replace("%s", encodeURIComponent(a)), o = new J, s && o.add("token", s), i && o.add("created_ts", i), r.get(e, o, t))
									}))
								}
							}, {
								key: "getPushTemplate",
								value: function(e, t) {
									var r = this;
									this.sb.ConnectionManager.ready((function(e, i) {
										e ? t(e, null) : (i = n.Path.USERS_USERID_PUSH_TEMPLATE.replace("%s", encodeURIComponent(i.userId)), r.get(i, null, t))
									}))
								}
							}, {
								key: "setPushTemplate",
								value: function(e, t) {
									var r = this,
										i = e.templateName;
									this.sb.ConnectionManager.ready((function(e, s) {
										e ? t(e, null) : (e = n.Path.USERS_USERID_PUSH_TEMPLATE.replace("%s", encodeURIComponent(s.userId)), s = new J({
											name: i
										}), r.put(e, s, t))
									}))
								}
							}, {
								key: "getDoNotDisturb",
								value: function(e, t) {
									var r = this;
									this.sb.ConnectionManager.ready((function(e, i) {
										e ? t(e, null) : (i = n.Path.USERS_USERID_PUSHPREFERENCE.replace("%s", encodeURIComponent(i.userId)), r.get(i, null, t))
									}))
								}
							}, {
								key: "setDoNotDisturb",
								value: function(e, t) {
									var r = this,
										i = e.doNotDisturbOn,
										s = e.startHour,
										a = e.startMin,
										o = e.endHour,
										l = e.endMin,
										u = e.timezone;
									this.sb.ConnectionManager.ready((function(e, c) {
										e ? t(e, null) : (e = n.Path.USERS_USERID_PUSHPREFERENCE.replace("%s", encodeURIComponent(c.userId)), c = new J({
											do_not_disturb: i,
											start_hour: s,
											start_min: a,
											end_hour: o,
											end_min: l,
											timezone: u
										}), r.put(e, c, t))
									}))
								}
							}, {
								key: "getSnoozePeriod",
								value: function(e, t) {
									var r = this;
									this.sb.ConnectionManager.ready((function(e, i) {
										e ? t(e, null) : (i = n.Path.USERS_USERID_PUSHPREFERENCE.replace("%s", encodeURIComponent(i.userId)), r.get(i, null, t))
									}))
								}
							}, {
								key: "setSnoozePeriod",
								value: function(e, t) {
									var r = this,
										i = e.snoozeOn,
										s = e.startTs,
										a = e.endTs;
									this.sb.ConnectionManager.ready((function(e, o) {
										e ? t(e, null) : (e = n.Path.USERS_USERID_PUSHPREFERENCE.replace("%s", encodeURIComponent(o.userId)), o = new J({
											snooze_enabled: i,
											snooze_start_ts: s,
											snooze_end_ts: a
										}), r.put(e, o, t))
									}))
								}
							}, {
								key: "registerGCMPushToken",
								value: function(e, t) {
									var r = this,
										i = e.token;
									this.sb.ConnectionManager.ready((function(e, s) {
										e ? t(e, null) : (e = n.Path.USERS_USERID_PUSH_GCM.replace("%s", encodeURIComponent(s.userId)), s = new J({
											gcm_reg_token: i,
											always_push: !0
										}), r.post(e, s, t))
									}))
								}
							}, {
								key: "unregisterGCMPushToken",
								value: function(e, t) {
									var r = this,
										i = e.token;
									this.sb.ConnectionManager.ready((function(e, s) {
										e ? t(e, null) : (s = n.Path.USERS_USERID_PUSH_GCM_TOKEN.replace("%s", encodeURIComponent(s.userId)).replace("%s", encodeURIComponent(i)), r.delete(s, null, t))
									}))
								}
							}, {
								key: "unregisterAllGCMPushTokens",
								value: function(e, t) {
									var r = this;
									this.sb.ConnectionManager.ready((function(e, i) {
										e ? t(e, null) : (i = n.Path.USERS_USERID_PUSH_GCM.replace("%s", encodeURIComponent(i.userId)), r.delete(i, null, t))
									}))
								}
							}, {
								key: "registerAPNSPushToken",
								value: function(e, t) {
									var r = this,
										i = e.token;
									this.sb.ConnectionManager.ready((function(e, s) {
										e ? t(e, null) : (e = n.Path.USERS_USERID_PUSH_APNS.replace("%s", encodeURIComponent(s.userId)), s = new J({
											apns_device_token: i,
											always_push: !0
										}), r.post(e, s, t))
									}))
								}
							}, {
								key: "unregisterAPNSPushToken",
								value: function(e, t) {
									var r = this,
										i = e.token;
									this.sb.ConnectionManager.ready((function(e, s) {
										e ? t(e, null) : (s = n.Path.USERS_USERID_PUSH_APNS_TOKEN.replace("%s", encodeURIComponent(s.userId)).replace("%s", encodeURIComponent(i)), r.delete(s, null, t))
									}))
								}
							}, {
								key: "unregisterAllAPNSPushTokens",
								value: function(e, t) {
									var r = this;
									this.sb.ConnectionManager.ready((function(e, i) {
										e ? t(e, null) : (i = n.Path.USERS_USERID_PUSH_APNS.replace("%s", encodeURIComponent(i.userId)), r.delete(i, null, t))
									}))
								}
							}, {
								key: "unregisterAllPushTokens",
								value: function(e, t) {
									var r = this;
									this.sb.ConnectionManager.ready((function(e, i) {
										e ? t(e, null) : (i = n.Path.USERS_USERID_PUSH.replace("%s", encodeURIComponent(i.userId)), r.delete(i, null, t))
									}))
								}
							}, {
								key: "loadFriendList",
								value: function(e, t) {
									var r = this,
										i = e.token,
										s = e.limit;
									this.sb.ConnectionManager.ready((function(e, a) {
										e ? t(e, null) : (e = n.Path.FRIENDS.replace("%s", encodeURIComponent(a.userId)), a = new J({
											limit: s,
											token: i
										}), r.get(e, a, t))
									}))
								}
							}, {
								key: "getFriendChangeLogsByToken",
								value: function(e, t) {
									var r = this,
										i = e.token;
									this.sb.ConnectionManager.ready((function(e, s) {
										e ? t(e, null) : (e = n.Path.FRIENDS_CHANGE_LOGS.replace("%s", encodeURIComponent(s.userId)), s = new J, i && s.add("token", i), r.get(e, s, t))
									}))
								}
							}, {
								key: "addFriends",
								value: function(e, t) {
									var r = this,
										i = e.userIds;
									this.sb.ConnectionManager.ready((function(e, s) {
										e ? t(e, null) : (e = n.Path.FRIENDS.replace("%s", encodeURIComponent(s.userId)), s = new J({
											user_ids: i
										}), r.post(e, s, t))
									}))
								}
							}, {
								key: "deleteFriends",
								value: function(e, t) {
									var r = this,
										i = e.userIds;
									this.sb.ConnectionManager.ready((function(e, s) {
										e ? t(e, null) : (e = n.Path.FRIENDS.replace("%s", encodeURIComponent(s.userId)), s = new J({
											user_ids: i
										}), r.delete(e, s, t))
									}))
								}
							}, {
								key: "uploadFriendDiscoveries",
								value: function(e, t) {
									var r = this,
										i = e.discoveries;
									this.sb.ConnectionManager.ready((function(e, s) {
										var a;
										e ? t(e, null) : (e = n.Path.FRIENDS_DISCOVERIES.replace("%s", encodeURIComponent(s.userId)), a = [], i.forEach((function(e) {
											a.push({
												friend_discovery_key: e.friendDiscoveryKey,
												friend_name: "string" == typeof e.friendName || e.friendName ? e.friendName : null
											})
										})), s = new J({
											friend_discoveries: a
										}), r.put(e, s, t))
									}))
								}
							}, {
								key: "deleteFriendDiscoveries",
								value: function(e, t) {
									var r = this,
										i = e.discoveryKeys;
									this.sb.ConnectionManager.ready((function(e, s) {
										e ? t(e, null) : (e = n.Path.FRIENDS_DISCOVERIES.replace("%s", encodeURIComponent(s.userId)), s = new J({
											friend_discovery_keys: i
										}), r.delete(e, s, t))
									}))
								}
							}, {
								key: "loadUserList",
								value: function(e, t) {
									var r = this,
										i = e.token,
										s = e.limit,
										a = e.userIdsFilter,
										o = e.metaDataKeyFilter,
										l = e.metaDataValuesFilter,
										u = e.nicknameStartsWithFilter;
									this.sb.ConnectionManager.ready((function(e, c) {
										var d;
										e ? t(e, null) : (d = n.Path.USERS, e = new J({
											token: i,
											limit: s
										}), a && 0 < a.length && e.add("user_ids", a), o && l && 0 < l.length && (e.add("metadatakey", o), e.add("metadatavalues_in", l)), u && e.add("nickname_startswith", u), r.get(d, e, t))
									}))
								}
							}, {
								key: "loadBlockedUserList",
								value: function(e, t) {
									var r = this,
										i = e.token,
										s = e.limit,
										a = e.userIdsFilter;
									this.sb.ConnectionManager.ready((function(e, o) {
										e ? t(e, null) : (e = n.Path.USERS_USERID_BLOCK.replace("%s", encodeURIComponent(o.userId)), o = new J({
											token: i,
											limit: s
										}), a && 0 < a.length && o.add("user_ids", a), r.get(e, o, t))
									}))
								}
							}, {
								key: "createUserMetaData",
								value: function(e, t) {
									var r = this,
										i = e.metaData;
									this.sb.ConnectionManager.ready((function(e, s) {
										e ? t(e, null) : (e = n.Path.USERS_USERID_METADATA.replace("%s", encodeURIComponent(s.userId)), s = new J({
											metadata: i
										}), r.post(e, s, t))
									}))
								}
							}, {
								key: "updateUserMetaData",
								value: function(e, t) {
									var r = this,
										i = e.metaData,
										s = e.upsert;
									this.sb.ConnectionManager.ready((function(e, a) {
										e ? t(e, null) : (e = n.Path.USERS_USERID_METADATA.replace("%s", encodeURIComponent(a.userId)), a = new J({
											metadata: i,
											upsert: s
										}), r.put(e, a, t))
									}))
								}
							}, {
								key: "deleteUserMetaData",
								value: function(e, t) {
									var r = this,
										i = e.metaDataKey;
									this.sb.ConnectionManager.ready((function(e, s) {
										e ? t(e, null) : (s = n.Path.USERS_USERID_METADATA_KEY.replace("%s", encodeURIComponent(s.userId)).replace("%s", encodeURIComponent(i)), r.delete(s, null, t))
									}))
								}
							}, {
								key: "deleteAllUserMetaData",
								value: function(e, t) {
									var r = this;
									this.sb.ConnectionManager.ready((function(e, i) {
										e ? t(e, null) : (i = n.Path.USERS_USERID_METADATA.replace("%s", encodeURIComponent(i.userId)), r.delete(i, null, t))
									}))
								}
							}, {
								key: "getMessageChangeLogs",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl,
										s = e.ts,
										a = e.timestamp,
										o = e.token,
										l = e.isOpenChannel,
										u = e.includeMetaArray,
										c = e.includeReactions,
										d = e.includeReplies,
										h = e.includeParentMessageText,
										p = e.includeThreadInfo;
									this.sb.ConnectionManager.ready((function(e, f) {
										var _;
										e ? t(e, null) : (_ = (l ? n.Path.OPENCHANNELS_CHANNELURL_MESSAGES_CHANGELOGS : n.Path.GROUPCHANNELS_CHANNELURL_MESSAGES_CHANGELOGS).replace("%s", encodeURIComponent(i)), e = new J, o && e.add("token", o), s && e.add("change_ts", s), a && e.add("change_ts", a), "boolean" == typeof u && e.add("with_sorted_meta_array", u), "boolean" == typeof c && e.add("include_reactions", c), "boolean" == typeof d && e.add("include_replies", d), "boolean" == typeof h && e.add("include_parent_text_message", h), "boolean" == typeof p && e.add("include_thread_info", p), r.get(_, e, t))
									}))
								}
							}, {
								key: "getMyMutedInfo",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl,
										s = e.userId,
										a = e.isGroupChannel;
									this.sb.ConnectionManager.ready((function(e, o) {
										e ? t(e, null) : (e = (a ? n.Path.GROUPCHANNELS_CHANNELURL_MUTE_USERID : n.Path.OPENCHANNELS_CHANNELURL_MUTE_USERID).replace("%s", encodeURIComponent(i)).replace("%s", encodeURIComponent(s)), r.get(e, null, t))
									}))
								}
							}, {
								key: "loadBannedUserList",
								value: function(e, t) {
									var r = this,
										i = e.token,
										s = e.limit,
										a = e.channelUrl,
										o = e.isOpenChannel;
									this.sb.ConnectionManager.ready((function(e, l) {
										var u;
										e ? t(e, null) : (u = (o ? n.Path.OPENCHANNELS_CHANNELURL_BAN : n.Path.GROUPCHANNELS_CHANNELURL_BAN).replace("%s", encodeURIComponent(a)), e = new J({
											token: i,
											limit: s
										}), r.get(u, e, t))
									}))
								}
							}, {
								key: "loadMutedUserList",
								value: function(e, t) {
									var r = this,
										i = e.token,
										s = e.limit,
										a = e.channelUrl,
										o = e.isOpenChannel;
									this.sb.ConnectionManager.ready((function(e, l) {
										var u;
										e ? t(e, null) : (u = (o ? n.Path.OPENCHANNELS_CHANNELURL_MUTE : n.Path.GROUPCHANNELS_CHANNELURL_MUTE).replace("%s", encodeURIComponent(a)), e = new J({
											token: i,
											limit: s
										}), r.get(u, e, t))
									}))
								}
							}, {
								key: "getMessageList",
								value: function(e, t) {
									var r, i = this,
										s = e.channel,
										a = e.token,
										o = e.tokenType,
										l = e.isInclusive,
										u = void 0 === (r = e.prevResultSize) ? 0 : r,
										c = void 0 === (r = e.nextResultSize) ? 0 : r,
										d = e.shouldReverse,
										h = e.messageType,
										p = e.customType,
										f = e.customTypes,
										_ = e.senderUserIds,
										g = e.includeMetaArray,
										y = e.includeReactions,
										m = e.includeThreadInfo,
										v = e.includeReplies,
										E = e.includeParentMessageText,
										C = e.showSubchannelMessagesOnly,
										b = e.rootMessageId,
										A = e.parentMessageId;
									this.sb.ConnectionManager.ready((function(e, r) {
										var U;
										e ? t(e, null) : (U = (s.isOpenChannel() ? n.Path.OPENCHANNELS_CHANNELURL_MESSAGES : n.Path.GROUPCHANNELS_CHANNELURL_MESSAGES).replace("%s", s.url), e = new J({
											is_sdk: String(!0),
											prev_limit: String(u),
											next_limit: String(c),
											include: String(l),
											reverse: String(d)
										}), "timestamp" === o ? e.add("message_ts", a) : "messageId" === o && e.add("message_id", String(a)), h && e.add("message_type", String(h)), Array.isArray(f) && (0 === f.length && ("string" == typeof p ? f.push(p) : f.push("*")), e.add("custom_types", f)), Array.isArray(_) && 0 < _.length && e.add("sender_ids", _), "boolean" == typeof g && e.add("with_sorted_meta_array", g), "boolean" == typeof y && e.add("include_reactions", y), "boolean" == typeof m && e.add("include_thread_info", m), "boolean" == typeof v && e.add("include_replies", v), "boolean" == typeof E && e.add("include_parent_message_text", E), "boolean" == typeof C && s.isOpenChannel() && e.add("show_subchannel_messages_only", C), b && e.add("root_message_id", b), A && e.add("parent_message_id", A), i.get(U, e, t))
									}))
								}
							}, {
								key: "translateUserMessage",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl,
										s = e.isOpenChannel,
										a = e.messageId,
										o = e.translationTargetLanguages;
									this.sb.ConnectionManager.ready((function(e, l) {
										var u;
										e ? t(e, null) : (u = (s ? n.Path.OPENCHANNELS_CHANNELURL_MESSAGES_MESSAGEID_TRANSLATION : n.Path.GROUPCHANNELS_CHANNELURL_MESSAGES_MESSAGEID_TRANSLATION).replace("%s", encodeURIComponent(i)).replace("%s", a), e = new J({
											target_langs: o
										}), r.post(u, e, t))
									}))
								}
							}, {
								key: "getMessage",
								value: function(e, t) {
									var r = this,
										i = e.channel,
										s = e.messageId;
									this.sb.ConnectionManager.ready((function(e, a) {
										e ? t(e, null) : (e = (i.isOpenChannel() ? n.Path.OPENCHANNELS_CHANNELURL_MESSAGES_MESSAGEID : n.Path.GROUPCHANNELS_CHANNELURL_MESSAGES_MESSAGEID).replace("%s", encodeURIComponent(i.url)).replace("%s", encodeURIComponent(s)), r.get(e, null, t))
									}))
								}
							}, {
								key: "deleteMessage",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl,
										s = e.isOpenChannel,
										a = e.messageId;
									this.sb.ConnectionManager.ready((function(e, o) {
										e ? t(e, null) : (e = (s ? n.Path.OPENCHANNELS_CHANNELURL_MESSAGES_MESSAGEID : n.Path.GROUPCHANNELS_CHANNELURL_MESSAGES_MESSAGEID).replace("%s", encodeURIComponent(i)).replace("%s", encodeURIComponent(a)), r.delete(e, null, t))
									}))
								}
							}, {
								key: "muteUser",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl,
										s = e.userId,
										a = e.description,
										o = e.seconds,
										l = e.isGroupChannel;
									this.sb.ConnectionManager.ready((function(e, u) {
										var c;
										e ? t(e, null) : (c = (l ? n.Path.GROUPCHANNELS_CHANNELURL_MUTE : n.Path.OPENCHANNELS_CHANNELURL_MUTE).replace("%s", encodeURIComponent(i)), e = new J({
											user_id: s
										}), o && (0 < o || -1 !== o) && e.add("seconds", o), a && e.add("description", a), r.post(c, e, t))
									}))
								}
							}, {
								key: "unmuteUser",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl,
										s = e.userId,
										a = e.isGroupChannel;
									this.sb.ConnectionManager.ready((function(e, o) {
										e ? t(e, null) : (e = (a ? n.Path.GROUPCHANNELS_CHANNELURL_MUTE_USERID : n.Path.OPENCHANNELS_CHANNELURL_MUTE_USERID).replace("%s", encodeURIComponent(i)).replace("%s", encodeURIComponent(s)), r.delete(e, null, t))
									}))
								}
							}, {
								key: "banUser",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl,
										s = e.userId,
										a = e.description,
										o = e.seconds,
										l = e.isGroupChannel;
									this.sb.ConnectionManager.ready((function(e, u) {
										var c;
										e ? t(e, null) : (c = (l ? n.Path.GROUPCHANNELS_CHANNELURL_BAN : n.Path.OPENCHANNELS_CHANNELURL_BAN).replace("%s", encodeURIComponent(i)), e = new J({
											user_id: s
										}), a && e.add("description", a), e.add("seconds", String(o)), r.post(c, e, t))
									}))
								}
							}, {
								key: "unbanUser",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl,
										s = e.userId,
										a = e.isGroupChannel;
									this.sb.ConnectionManager.ready((function(e, o) {
										e ? t(e, null) : (e = (a ? n.Path.GROUPCHANNELS_CHANNELURL_BAN_USERID : n.Path.OPENCHANNELS_CHANNELURL_BAN_USERID).replace("%s", encodeURIComponent(i)).replace("%s", encodeURIComponent(s)), r.delete(e, null, t))
									}))
								}
							}, {
								key: "getMetaCounters",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl,
										s = e.isOpenChannel,
										a = e.keys;
									this.sb.ConnectionManager.ready((function(e, o) {
										var l;
										e ? t(e, null) : (l = (s ? n.Path.OPENCHANNELS_CHANNELURL_METACOUNTER : n.Path.GROUPCHANNELS_CHANNELURL_METACOUNTER).replace("%s", encodeURIComponent(i)), e = new J({
											keys: a
										}), r.get(l, e, t))
									}))
								}
							}, {
								key: "createMetaCounters",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl,
										s = e.isOpenChannel,
										a = e.metaCounter;
									this.sb.ConnectionManager.ready((function(e, o) {
										var l;
										e ? t(e, null) : (l = (s ? n.Path.OPENCHANNELS_CHANNELURL_METACOUNTER : n.Path.GROUPCHANNELS_CHANNELURL_METACOUNTER).replace("%s", encodeURIComponent(i)), e = new J({
											metacounter: a
										}), r.post(l, e, t))
									}))
								}
							}, {
								key: "updateMetaCounters",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl,
										s = e.isOpenChannel,
										a = e.metaCounter,
										o = e.upsert,
										l = e.mode;
									this.sb.ConnectionManager.ready((function(e, u) {
										var c;
										e ? t(e, null) : (c = (s ? n.Path.OPENCHANNELS_CHANNELURL_METACOUNTER : n.Path.GROUPCHANNELS_CHANNELURL_METACOUNTER).replace("%s", encodeURIComponent(i)), e = new J({
											metacounter: a,
											upsert: o,
											mode: l
										}), r.put(c, e, t))
									}))
								}
							}, {
								key: "deleteMetaCounter",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl,
										s = e.isOpenChannel,
										a = e.key;
									this.sb.ConnectionManager.ready((function(e, o) {
										e ? t(e, null) : (e = (s ? n.Path.OPENCHANNELS_CHANNELURL_METACOUNTER_KEY : n.Path.GROUPCHANNELS_CHANNELURL_METACOUNTER_KEY).replace("%s", encodeURIComponent(i)).replace("%s", a), r.delete(e, null, t))
									}))
								}
							}, {
								key: "deleteAllMetaCounters",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl,
										s = e.isOpenChannel;
									this.sb.ConnectionManager.ready((function(e, a) {
										e ? t(e, null) : (e = (s ? n.Path.OPENCHANNELS_CHANNELURL_METACOUNTER : n.Path.GROUPCHANNELS_CHANNELURL_METACOUNTER).replace("%s", encodeURIComponent(i)), r.delete(e, null, t))
									}))
								}
							}, {
								key: "getMetaData",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl,
										s = e.isOpenChannel,
										a = e.keys;
									this.sb.ConnectionManager.ready((function(e, o) {
										var l;
										e ? t(e, null) : (l = (s ? n.Path.OPENCHANNELS_CHANNELURL_METADATA : n.Path.GROUPCHANNELS_CHANNELURL_METADATA).replace("%s", encodeURIComponent(i)), e = new J({
											keys: a,
											include_ts: !0
										}), r.get(l, e, t))
									}))
								}
							}, {
								key: "createMetaData",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl,
										s = e.isOpenChannel,
										a = e.metaData;
									this.sb.ConnectionManager.ready((function(e, o) {
										var l;
										e ? t(e, null) : (l = (s ? n.Path.OPENCHANNELS_CHANNELURL_METADATA : n.Path.GROUPCHANNELS_CHANNELURL_METADATA).replace("%s", encodeURIComponent(i)), e = new J({
											metadata: a,
											include_ts: !0
										}), r.post(l, e, t))
									}))
								}
							}, {
								key: "updateMetaData",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl,
										s = e.isOpenChannel,
										a = e.metaData,
										o = e.upsert;
									this.sb.ConnectionManager.ready((function(e, l) {
										var u;
										e ? t(e, null) : (u = (s ? n.Path.OPENCHANNELS_CHANNELURL_METADATA : n.Path.GROUPCHANNELS_CHANNELURL_METADATA).replace("%s", encodeURIComponent(i)), e = new J({
											metadata: a,
											upsert: o,
											include_ts: !0
										}), r.put(u, e, t))
									}))
								}
							}, {
								key: "deleteMetaData",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl,
										s = e.isOpenChannel,
										a = e.key;
									this.sb.ConnectionManager.ready((function(e, o) {
										var l;
										e ? t(e, null) : (l = (s ? n.Path.OPENCHANNELS_CHANNELURL_METADATA_KEY : n.Path.GROUPCHANNELS_CHANNELURL_METADATA_KEY).replace("%s", encodeURIComponent(i)).replace("%s", a), e = new J({
											include_ts: !0
										}), r.delete(l, e, t))
									}))
								}
							}, {
								key: "deleteAllMetaData",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl,
										s = e.isOpenChannel;
									this.sb.ConnectionManager.ready((function(e, a) {
										var o;
										e ? t(e, null) : (o = (s ? n.Path.OPENCHANNELS_CHANNELURL_METADATA : n.Path.GROUPCHANNELS_CHANNELURL_METADATA).replace("%s", encodeURIComponent(i)), e = new J({
											include_ts: !0
										}), r.delete(o, e, t))
									}))
								}
							}, {
								key: "loadOperatorList",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl,
										s = e.isOpenChannel,
										a = e.token,
										o = e.limit;
									this.sb.ConnectionManager.ready((function(e, l) {
										var u;
										e ? t(e, null) : (u = (s ? n.Path.OPENCHANNELS_OPERATORS : n.Path.GROUPCHANNELS_OPERATORS).replace("%s", encodeURIComponent(i)), e = new J({
											token: a,
											limit: o
										}), r.get(u, e, t))
									}))
								}
							}, {
								key: "getOpenChannel",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl,
										s = e.internalCall;
									this.sb.ConnectionManager.ready((function(e, a) {
										var o;
										e ? t(e, null) : (o = n.Path.OPENCHANNELS_CHANNELURL.replace("%s", encodeURIComponent(i)), (e = new J({})).internal = s === S.INTERNAL_CALL, r.get(o, e, t))
									}))
								}
							}, {
								key: "loadOpenChannelList",
								value: function(e, t) {
									var r = this,
										i = e.token,
										s = e.limit,
										a = e.nameKeyword,
										o = e.urlKeyword,
										l = e.customTypes,
										u = e.includeFrozen,
										c = e.includeMetaData;
									this.sb.ConnectionManager.ready((function(e, d) {
										var h;
										e ? t(e, null) : (h = n.Path.OPENCHANNELS, e = new J({
											token: i,
											limit: s
										}), a && e.add("name_contains", a), o && e.add("url_contains", o), l && 0 < l.length && e.add("custom_types", l), "boolean" == typeof u && e.add("show_frozen", u), "boolean" == typeof c && e.add("show_metadata", c), r.get(h, e, t))
									}))
								}
							}, {
								key: "loadParticipantList",
								value: function(e, t) {
									var r = this,
										i = e.token,
										s = e.limit,
										a = e.channelUrl;
									this.sb.ConnectionManager.ready((function(e, o) {
										var l;
										e ? t(e, null) : (l = n.Path.OPENCHANNELS_CHANNELURL_PARTICIPANTS.replace("%s", encodeURIComponent(a)), e = new J({
											token: i,
											limit: s
										}), r.get(l, e, t))
									}))
								}
							}, {
								key: "createOpenChannel",
								value: function(e, t) {
									var r = this,
										i = e.name,
										s = e.coverUrlOrImage,
										a = e.data,
										o = e.operatorUserIds,
										l = e.customType;
									this.sb.ConnectionManager.ready((function(e, u) {
										var c;
										e ? t(e, null) : (c = n.Path.OPENCHANNELS, e = new J, "string" == typeof s && e.add("cover_url", s), V.isFile(s) && e.add("cover_file", s), null !== i && "string" == typeof i && e.add("name", i), a && e.add("data", a), o && (Array.isArray(o) ? e.add("operators", o) : e.add("operators", [o])), l && e.add("custom_type", l), r.post(c, e, t))
									}))
								}
							}, {
								key: "updateOpenChannel",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl,
										s = e.name,
										a = e.coverUrlOrImage,
										o = e.data,
										l = e.operatorUserIds,
										u = e.customType;
									this.sb.ConnectionManager.ready((function(e, c) {
										var d;
										e ? t(e, null) : (d = n.Path.OPENCHANNELS_CHANNELURL.replace("%s", encodeURIComponent(i)), e = new J, "string" == typeof a && e.add("cover_url", a), V.isFile(a) && e.add("cover_file", a, a.name), null !== s && "string" == typeof s && e.add("name", s), null !== o && "string" == typeof o && e.add("data", o), null !== l && (Array.isArray(l) ? e.add("operator_ids", l) : e.add("operator_ids", [l])), null !== u && "string" == typeof u && e.add("custom_type", u), r.put(d, e, t))
									}))
								}
							}, {
								key: "deleteOpenChannel",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl;
									this.sb.ConnectionManager.ready((function(e, s) {
										e ? t(e, null) : (e = n.Path.OPENCHANNELS_CHANNELURL.replace("%s", encodeURIComponent(i)), r.delete(e, null, t))
									}))
								}
							}, {
								key: "getGroupChannel",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl,
										s = e.showMember,
										a = e.internalCall;
									this.sb.ConnectionManager.ready((function(e, o) {
										var l;
										e ? t(e, null) : (l = n.Path.GROUPCHANNELS_CHANNELURL.replace("%s", encodeURIComponent(i)), (e = new J({
											show_member: s,
											show_read_receipt: !0,
											show_delivery_receipt: !0
										})).internal = a === S.INTERNAL_CALL, r.get(l, e, t))
									}))
								}
							}, {
								key: "loadGroupChannelList",
								value: function(e, t) {
									var r = this,
										i = e.token,
										s = e.limit,
										a = e.includeEmpty,
										o = e.order,
										l = e.userIdsFilter,
										u = e.nicknameContainsFilter,
										c = e.channelNameContainsFilter,
										d = e.channelUrlsFilter,
										h = e.customTypesFilter,
										p = e.customTypeStartsWithFilter,
										f = e.memberStateFilter,
										_ = e.superChannelFilter,
										g = e.publicChannelFilter,
										y = e.unreadChannelFilter,
										m = e.metadataOrderKeyFilter,
										v = e.hiddenChannelFilter,
										E = e.searchFilter,
										C = e.includeFrozen,
										b = e.includeMetaData;
									this.sb.ConnectionManager.ready((function(e, A) {
										e ? t(e, null) : (e = n.Path.MYGROUPCHANNELS.replace("%s", encodeURIComponent(A.userId)), A = new J({
											token: i,
											limit: s,
											order: o,
											show_member: !0,
											show_read_receipt: !0,
											show_delivery_receipt: !0,
											show_empty: String(a),
											member_state_filter: f
										}), h && 0 < h.length && A.add("custom_types", h), u && A.add("members_nickname_contains", u), c && A.add("name_contains", c), E.hasOwnProperty("search_query") && E.hasOwnProperty("search_fields") && (A.add("search_query", E.search_query), A.add("search_fields", E.search_fields)), l.userIds && 0 < l.userIds.length && (l.includeMode ? (A.add("members_include_in", l.userIds), A.add("query_type", l.queryType.toUpperCase())) : A.add("members_exactly_in", l.userIds)), d && 0 < d.length && A.add("channel_urls", d), A.add("super_mode", _), A.add("public_mode", g), A.add("unread_filter", y), m && A.add("metadata_order_key", m), p && A.add("custom_type_startswith", p), v && A.add("hidden_mode", v), "boolean" == typeof C && A.add("show_frozen", C), "boolean" == typeof b && A.add("show_metadata", b), r.get(e, A, t))
									}))
								}
							}, {
								key: "loadPublicGroupChannelList",
								value: function(e, t) {
									var r = this,
										i = e.token,
										s = e.limit,
										a = e.includeEmpty,
										o = e.order,
										l = e.channelNameContainsFilter,
										u = e.channelUrlsFilter,
										c = e.customTypesFilter,
										d = e.customTypeStartsWithFilter,
										h = e.superChannelFilter,
										p = e.membershipFilter,
										f = e.metadataOrderKeyFilter,
										_ = e.includeFrozen,
										g = e.includeMetaData;
									this.sb.ConnectionManager.ready((function(e, y) {
										var m;
										e ? t(e, null) : (m = r.cls.GroupChannel, e = n.Path.GROUPCHANNELS, m = new J({
											token: i,
											limit: s,
											order: o,
											show_member: !0,
											show_read_receipt: !0,
											show_delivery_receipt: !0,
											show_empty: String(a),
											public_mode: m.PublicChannelFilter.PUBLIC,
											public_membership_mode: p
										}), c && 0 < c.length && m.add("custom_types", c), l && m.add("name_contains", l), u && 0 < u.length && m.add("channel_urls", u), m.add("super_mode", h), f && m.add("metadata_order_key", f), d && m.add("custom_type_startswith", d), "boolean" == typeof _ && m.add("show_frozen", _), "boolean" == typeof g && m.add("show_metadata", g), r.get(e, m, t))
									}))
								}
							}, {
								key: "createGroupChannel",
								value: function(e, t) {
									var r = this,
										i = e.isDistinct,
										s = e.isSuper,
										a = e.isBroadcast,
										o = e.isPublic,
										l = e.channelUrl,
										u = e.isDiscoverable,
										c = e.isStrict,
										d = e.name,
										h = e.data,
										p = e.customType,
										f = e.coverUrl,
										_ = e.coverImage,
										g = e.accessCode,
										y = e.isEphemeral,
										m = e._invitedUserIds,
										v = void 0 === m ? [] : m,
										E = e.operatorUserIds,
										C = e.messageSurvivalSeconds;
									this.sb.ConnectionManager.ready((function(e, m) {
										e ? t(e, null) : (e = n.Path.GROUPCHANNELS, m = new J({
											user_ids: [m.userId].concat(b(v)).filter((function(e, n, t) {
												return n === t.indexOf(e)
											}))
										}), null !== f && "string" == typeof f && m.add("cover_url", f), V.isFile(_) && m.add("cover_file", _, _.name), null !== l && m.add("channel_url", l), null !== i && m.add("is_distinct", i), null !== s && m.add("is_super", s), null !== a && m.add("is_broadcast", a), null !== o && m.add("is_public", o), null !== u && m.add("is_discoverable", u), null !== c && m.add("strict", c), null !== y && m.add("is_ephemeral", y), g && m.add("access_code", g), null !== d && "string" == typeof d && m.add("name", d), h && m.add("data", h), p && m.add("custom_type", p), Array.isArray(E) && 0 < E.length && m.add("operator_ids", E), null !== C && -1 < C && m.add("message_survival_seconds", C), r.post(e, m, t))
									}))
								}
							}, {
								key: "updateGroupChannel",
								value: function(e, t) {
									var r = this,
										i = e.isDistinct,
										s = e.isPublic,
										a = e.channelUrl,
										o = e.isDiscoverable,
										l = e.name,
										u = e.data,
										c = e.customType,
										d = e.coverUrl,
										h = e.coverImage,
										p = e.accessCode,
										f = e.operatorUserIds,
										_ = e.messageSurvivalSeconds;
									this.sb.ConnectionManager.ready((function(e, g) {
										var y;
										e ? t(e, null) : (y = n.Path.GROUPCHANNELS_CHANNELURL.replace("%s", encodeURIComponent(a)), e = new J, null !== i && e.add("is_distinct", i), null !== s && e.add("is_public", s), null !== o && e.add("is_discoverable", o), null !== p && e.add("access_code", p), null !== d && "string" == typeof d && e.add("cover_url", d), V.isFile(h) && e.add("cover_file", h, h.name), null !== l && "string" == typeof l && e.add("name", l), null !== u && "string" == typeof u && e.add("data", u), null !== c && "string" == typeof c && e.add("custom_type", c), null !== f && (Array.isArray(f) ? e.add("operator_ids", f) : f && e.add("operator_ids", [f])), null !== _ && -1 < _ && e.add("message_survival_seconds", _), r.put(y, e, t))
									}))
								}
							}, {
								key: "addOperators",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl,
										s = e.isOpenChannel,
										a = void 0 !== s && s,
										o = e.operatorUserIds;
									this.sb.ConnectionManager.ready((function(e, s) {
										var l;
										e || (l = (a ? n.Path.OPENCHANNELS_CHANNELURL_OPERATORS : n.Path.GROUPCHANNELS_CHANNELURL_OPERATORS).replace("%s", encodeURIComponent(i)), e = new J({
											operator_ids: o
										}), r.post(l, e, t))
									}))
								}
							}, {
								key: "removeOperators",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl,
										s = e.isOpenChannel,
										a = void 0 !== s && s,
										o = e.operatorUserIds;
									this.sb.ConnectionManager.ready((function(e, s) {
										var l;
										e || (l = (a ? n.Path.OPENCHANNELS_CHANNELURL_OPERATORS : n.Path.GROUPCHANNELS_CHANNELURL_OPERATORS).replace("%s", encodeURIComponent(i)), e = new J({
											operator_ids: o
										}), r.delete(l, e, t))
									}))
								}
							}, {
								key: "inviteToGroupChannel",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl,
										s = e.userIds;
									this.sb.ConnectionManager.ready((function(e, a) {
										var o;
										e ? t(e, null) : (o = n.Path.GROUPCHANNELS_CHANNELURL_INVITE.replace("%s", encodeURIComponent(i)), e = new J({
											user_ids: s
										}), r.post(o, e, t))
									}))
								}
							}, {
								key: "acceptInvitation",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl,
										s = e.accessCode;
									this.sb.ConnectionManager.ready((function(e, a) {
										e ? t(e, null) : (e = n.Path.GROUPCHANNELS_CHANNELURL_ACCEPT_INVITATION.replace("%s", encodeURIComponent(i)), a = new J({
											user_id: a.userId
										}), s && a.add("access_code", s), r.put(e, a, t))
									}))
								}
							}, {
								key: "declineInvitation",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl;
									this.sb.ConnectionManager.ready((function(e, s) {
										e ? t(e, null) : (e = n.Path.GROUPCHANNELS_CHANNELURL_DECLINE_INVITATION.replace("%s", encodeURIComponent(i)), s = new J({
											user_id: s.userId
										}), r.put(e, s, t))
									}))
								}
							}, {
								key: "joinGroupChannel",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl,
										s = e.accessCode;
									this.sb.ConnectionManager.ready((function(e, a) {
										e ? t(e, null) : (e = n.Path.GROUPCHANNELS_CHANNELURL_JOIN.replace("%s", encodeURIComponent(i)), a = new J({
											user_id: a.userId
										}), s && a.add("access_code", s), r.put(e, a, t))
									}))
								}
							}, {
								key: "leaveGroupChannel",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl;
									this.sb.ConnectionManager.ready((function(e, s) {
										e ? t(e, null) : (e = n.Path.GROUPCHANNELS_CHANNELURL_LEAVE.replace("%s", encodeURIComponent(i)), s = new J({
											user_id: s.userId
										}), r.put(e, s, t))
									}))
								}
							}, {
								key: "hideGroupChannel",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl,
										s = e.hidePreviousMessages,
										a = e.allowAutoUnhide;
									this.sb.ConnectionManager.ready((function(e, o) {
										e ? t(e, null) : (e = n.Path.GROUPCHANNELS_CHANNELURL_HIDE.replace("%s", encodeURIComponent(i)), o = new J({
											user_id: o.userId,
											hide_previous_messages: s,
											allow_auto_unhide: a
										}), r.put(e, o, t))
									}))
								}
							}, {
								key: "unhideGroupChannel",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl;
									this.sb.ConnectionManager.ready((function(e, s) {
										e ? t(e, null) : (e = n.Path.GROUPCHANNELS_CHANNELURL_HIDE.replace("%s", encodeURIComponent(i)), r.delete(e, null, t))
									}))
								}
							}, {
								key: "freeze",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl,
										s = e.isGroupChannel,
										a = e.freezing;
									this.sb.ConnectionManager.ready((function(e, o) {
										var l;
										e ? t(e, null) : (l = (s ? n.Path.GROUPCHANNELS_CHANNELURL_FREEZE : n.Path.OPENCHANNELS_CHANNELURL_FREEZE).replace("%s", encodeURIComponent(i)), e = new J({
											freeze: a
										}), r.put(l, e, t))
									}))
								}
							}, {
								key: "deleteGroupChannel",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl;
									this.sb.ConnectionManager.ready((function(e, s) {
										e ? t(e, null) : (e = n.Path.GROUPCHANNELS_CHANNELURL.replace("%s", encodeURIComponent(i)), r.delete(e, null, t))
									}))
								}
							}, {
								key: "loadMemberList",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl,
										s = e.token,
										a = e.limit,
										o = e.mutedMemberFilter,
										l = e.order,
										u = e.memberStateFilter,
										c = e.nicknameStartsWithFilter;
									this.sb.ConnectionManager.ready((function(e, d) {
										var h;
										e ? t(e, null) : (h = n.Path.GROUPCHANNELS_MEMBERS.replace("%s", encodeURIComponent(i)), e = new J({
											token: s,
											limit: a,
											order: l.toLowerCase(),
											muted_member_filter: o.toLowerCase(),
											member_state_filter: u,
											show_member_is_muted: !0,
											show_read_receipt: !0,
											show_delivery_receipt: !0
										}), c && e.add("nickname_startswith", c), r.get(h, e, t))
									}))
								}
							}, {
								key: "report",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl,
										s = e.isOpenChannel,
										a = e.reportCategory,
										o = e.reportingUserId,
										l = e.reportDescription;
									this.sb.ConnectionManager.ready((function(e, u) {
										var c;
										e ? t(e, null) : (c = n.Path.REPORT_CHANNELS.replace("%s", encodeURIComponent(s ? "open_channels" : "group_channels")).replace("%s", encodeURIComponent(i)), e = new J({
											report_category: a
										}), null != o && e.add("reporting_user_id", o), null != l && e.add("report_description", l), r.post(c, e, t))
									}))
								}
							}, {
								key: "reportUser",
								value: function(e, t) {
									var r = this,
										i = e.offendingUserId,
										s = e.channelUrl,
										a = e.isOpenChannel,
										o = e.reportCategory,
										l = e.reportingUserId,
										u = e.reportDescription;
									this.sb.ConnectionManager.ready((function(e, c) {
										var d;
										e ? t(e, null) : (d = n.Path.REPORT_USERS.replace("%s", encodeURIComponent(i)), e = new J({
											channel_url: s,
											channel_type: a ? "open_channels" : "group_channels",
											report_category: o
										}), null != l && e.add("reporting_user_id", l), null != u && e.add("report_description", u), r.post(d, e, t))
									}))
								}
							}, {
								key: "reportMessage",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl,
										s = e.isOpenChannel,
										a = e.messageId,
										o = e.reportCategory,
										l = e.reportingUserId,
										u = e.reportDescription,
										c = e.offendingUserId;
									this.sb.ConnectionManager.ready((function(e, d) {
										var h;
										e ? t(e, null) : (h = n.Path.REPORT_MESSAGES.replace("%s", encodeURIComponent(s ? "open_channels" : "group_channels")).replace("%s", encodeURIComponent(i)).replace("%s", encodeURIComponent(a)), e = new J({
											report_category: o,
											offending_user_id: c
										}), null != l && e.add("reporting_user_id", l), null != u && e.add("report_description", u), r.post(h, e, t))
									}))
								}
							}, {
								key: "sendUserMessage",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl,
										s = e.isOpenChannel,
										a = e.message,
										o = e.data,
										l = e.customType,
										u = e.translationTargetLanguages,
										c = e.metaArrays,
										d = e.mentionType,
										h = e.mentionedUserIds,
										p = e.pushNotificationDeliveryOption,
										f = e.rootMessageId,
										_ = e.parentMessageId,
										g = e.appleCriticalAlertOptions;
									this.sb.ConnectionManager.ready((function(e, y) {
										var m;
										e ? t(e, null) : (m = r.cls.FileMessageParams, e = (s ? n.Path.OPENCHANNELS_CHANNELURL_MESSAGES : n.Path.GROUPCHANNELS_CHANNELURL_MESSAGES).replace("%s", encodeURIComponent(i)), y = new J({
											message_type: "MESG",
											user_id: y.userId,
											message: a,
											mention_type: d,
											mentioned_user_ids: []
										}), null != o && y.add("data", o), null != l && y.add("custom_type", l), u && y.add("translation_target_langs", u), c && 0 < c.length && y.add("sorted_metaarray", c.map((function(e) {
											return e.encode()
										}))), d === r.cls.BaseMessageParams.MentionType.CHANNEL ? y.add("mentioned_user_ids", []) : Array.isArray(h) && 0 < h.length && y.add("mentioned_user_ids", h), p && p !== m.PushNotificationDeliveryOption.DEFAULT && y.add("push_option", p), f && y.add("root_message_id", f), _ && y.add("parent_message_id", _), g && y.add("apple_critical_alert_options", g.serialize()), r.post(e, y, t))
									}))
								}
							}, {
								key: "sendFileMessage",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl,
										s = e.isOpenChannel,
										a = e.fileUrl,
										o = e.fileName,
										l = e.fileSize,
										u = e.fileType,
										c = e.data,
										d = e.customType,
										h = e.thumbnailSizes,
										p = e.requireAuth,
										f = e.metaArrays,
										_ = e.mentionType,
										g = e.mentionedUserIds,
										y = e.pushNotificationDeliveryOption,
										m = e.rootMessageId,
										v = e.parentMessageId,
										E = e.appleCriticalAlertOptions;
									this.sb.ConnectionManager.ready((function(e, C) {
										var b;
										e ? t(e, null) : (b = r.cls.FileMessageParams, e = (s ? n.Path.OPENCHANNELS_CHANNELURL_MESSAGES : n.Path.GROUPCHANNELS_CHANNELURL_MESSAGES).replace("%s", encodeURIComponent(i)), C = new J({
											message_type: "FILE",
											user_id: C.userId,
											url: a,
											mention_type: _,
											mentioned_user_ids: []
										}), null != o && C.add("file_name", o), null != l && C.add("file_size", l), null != u && C.add("file_type", u), null != c && C.add("custom_field", c), null != d && C.add("custom_type", d), h && C.add("thumbnails", h), p && C.add("require_auth", p), f && 0 < f.length && C.add("sorted_metaarray", f.map((function(e) {
											return e.encode()
										}))), _ === r.cls.BaseMessageParams.MentionType.CHANNEL ? C.add("mentioned_user_ids", []) : Array.isArray(g) && 0 < g.length && C.add("mentioned_user_ids", g), y && y !== b.PushNotificationDeliveryOption.DEFAULT && C.add("push_option", y), m && C.add("root_message_id", m), v && C.add("parent_message_id", v), E && C.add("apple_critical_alert_options", E.serialize()), r.post(e, C, t))
									}))
								}
							}, {
								key: "uploadFile",
								value: function(e, t) {
									var r = this,
										i = e.file,
										s = e.thumbnailSizes,
										a = e.channelUrl,
										o = e.progressHandler,
										l = e.reqId;
									this.sb.ConnectionManager.ready((function(e, u) {
										if (e) t(e, null);
										else {
											var c = O.get(r.sb._iid).container.appInfo;
											if (c)
												if ("number" == typeof i.size || i.size || (i.size = 0), "number" == typeof i.size)
													if (i.size <= c.uploadSizeLimit) {
														e = n.Path.STORAGE_FILE;
														var d = new J;
														if (d.add("file", i, i.name), a && "string" == typeof a && d.add("channel_url", a), s)
															for (var h = 0; h < s.length; h++) d.add("thumbnail" + (h + 1), s[h].maxWidth + "," + s[h].maxHeight);
														d.upload.reqId = l, d.upload.deleteRequest = function() {
															var e = r.cls.FileMessageQueue;
															e.uploadRequest[l] && delete e.uploadRequest[l]
														}, d.upload.progressHandler = function(e) {
															o && "function" == typeof o && o(e, l)
														}, r.post(e, d, t)
													} else t(new R("The file size exceeded the upload limit: ".concat(c.uploadSizeLimit), R.FILE_SIZE_LIMIT_EXCEEDED), null);
											else t(new R("Invalid file size: ".concat(i.size), R.INVALID_PARAMETER), null);
											else t(new R("Connection should be made first.", R.CONNECTION_REQUIRED), null)
										}
									}))
								}
							}, {
								key: "registerScheduledUserMessage",
								value: function(e, t) {
									var r = this,
										i = e.groupChannelParams,
										s = e.channelUrl,
										a = e.isOpenChannel;
									this.sb.ConnectionManager.ready((function(e, o) {
										e ? t(e, null) : (e = (a ? n.Path.OPENCHANNELS_CHANNELURL_SCHEDULED_MESSAGES : n.Path.GROUPCHANNELS_CHANNELURL_SCHEDULED_MESSAGES).replace("%s", encodeURIComponent(s)), o = new J({
											scheduled_dt: i._getScheduleString(),
											user_id: o.userId,
											message: i.message,
											data: i.data
										}), i.customType && o.add("custom_type", i.customType), i.metaArrayKeys && 0 < Object.keys(i.metaArrayKeys).length && o.add("metaarray", i.metaArrayKeys), i.mentionType && o.add("mention_type", i._mentionType), i._mentionType === r.cls.BaseMessageParams.MentionType.CHANNEL ? o.add("mentioned_user_ids", []) : Array.isArray(i._mentionedUserIds) && 0 < i._mentionedUserIds.length && o.add("mentioned_user_ids", i._mentionedUserIds), i.translationTargetLanguages && 0 < i.translationTargetLanguages.length && o.add("translation_target_langs", i.translationTargetLanguages), i.pushNotificationDeliveryOption && i.pushNotificationDeliveryOption !== r.cls.BaseMessageParams.PushNotificationDeliveryOption.DEFAULT && o.add("push_option", i.pushNotificationDeliveryOption), i.appleCriticalAlertOptions && o.add("apple_critical_alert_options", i.appleCriticalAlertOptions.serialize()), r.post(e, o, t))
									}))
								}
							}, {
								key: "getMyPushTriggerOption",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl;
									this.sb.ConnectionManager.ready((function(e, s) {
										e ? t(e, null) : (s = n.Path.USERS_USERID_PUSHPREFERENCE_CHANNELURL.replace("%s", encodeURIComponent(s.userId)).replace("%s", encodeURIComponent(i)), r.get(s, null, t))
									}))
								}
							}, {
								key: "setMyPushTriggerOption",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl,
										s = e.pushTriggerOption,
										a = e.enable;
									this.sb.ConnectionManager.ready((function(e, o) {
										e ? t(e, null) : (e = n.Path.USERS_USERID_PUSHPREFERENCE_CHANNELURL.replace("%s", encodeURIComponent(o.userId)).replace("%s", encodeURIComponent(i)), o = new J, s && o.add("push_trigger_option", s), "boolean" == typeof a && o.add("enable", a), r.put(e, o, t))
									}))
								}
							}, {
								key: "setMyCountPreference",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl,
										s = e.countPreference;
									this.sb.ConnectionManager.ready((function(e, a) {
										e ? t(e, null) : (e = n.Path.USERS_COUNT_PREFERENCE.replace("%s", encodeURIComponent(a.userId)).replace("%s", encodeURIComponent(i)), a = new J({
											count_preference: s
										}), r.put(e, a, t))
									}))
								}
							}, {
								key: "resetMyHistory",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl;
									this.sb.ConnectionManager.ready((function(e, s) {
										e ? t(e, null) : (e = n.Path.GROUPCHANNELS_RESET_USER_HISTORY.replace("%s", encodeURIComponent(i)), r.put(e, null, t))
									}))
								}
							}, {
								key: "addReaction",
								value: function(e, t) {
									var r = this,
										i = e.isGroupChannel,
										s = e.channelUrl,
										a = e.messageId,
										o = e.key;
									this.sb.ConnectionManager.ready((function(e, l) {
										var u;
										e ? t(e, null) : (u = (i ? n.Path.GROUPCHANNELS_CHANNELURL_MESSAGES_MESSAGEID_REACTION : n.Path.OPENCHANNELS_CHANNELURL_MESSAGES_MESSAGEID_REACTION).replace("%s", encodeURIComponent(s)).replace("%s", encodeURIComponent(a)), e = new J({
											reaction: o
										}), r.post(u, e, t))
									}))
								}
							}, {
								key: "deleteReaction",
								value: function(e, t) {
									var r = this,
										i = e.isGroupChannel,
										s = e.channelUrl,
										a = e.messageId,
										o = e.key;
									this.sb.ConnectionManager.ready((function(e, l) {
										var u;
										e ? t(e, null) : (u = (i ? n.Path.GROUPCHANNELS_CHANNELURL_MESSAGES_MESSAGEID_REACTION : n.Path.OPENCHANNELS_CHANNELURL_MESSAGES_MESSAGEID_REACTION).replace("%s", encodeURIComponent(s)).replace("%s", encodeURIComponent(a)), e = new J({
											reaction: o
										}), r.delete(u, e, t))
									}))
								}
							}, {
								key: "getAllEmoji",
								value: function(e) {
									var t = this;
									this.sb.ConnectionManager.ready((function(r, i) {
										r ? e(r, null) : t.get(n.Path.EMOJI_CATEGORIES, null, e)
									}))
								}
							}, {
								key: "getEmojiCategory",
								value: function(e, t) {
									var r = this,
										i = e.categoryId;
									this.sb.ConnectionManager.ready((function(e, s) {
										e ? t(e, null) : (e = n.Path.EMOJI_CATEGORIES_CATEGORYID.replace("%s", i), r.get(e, null, t))
									}))
								}
							}, {
								key: "getEmoji",
								value: function(e, t) {
									var r = this,
										i = e.emojiKey;
									this.sb.ConnectionManager.ready((function(e, s) {
										e ? t(e, null) : (e = n.Path.EMOJIS_EMOJIKEY.replace("%s", i), r.get(e, null, t))
									}))
								}
							}, {
								key: "getAllowFriendDiscovery",
								value: function(e) {
									var t = this;
									this.sb.ConnectionManager.ready((function(r, i) {
										r ? e(r, null) : (i = n.Path.USERS_USERID_ALLOW_FRIEND_DISCOVERY.replace("%s", encodeURIComponent(i.userId)), t.get(i, null, e))
									}))
								}
							}, {
								key: "setAllowFriendDiscovery",
								value: function(e, t) {
									var r = this,
										i = e.allowFriendDiscovery;
									this.sb.ConnectionManager.ready((function(e, s) {
										e ? t(e, null) : (e = n.Path.USERS_USERID_ALLOW_FRIEND_DISCOVERY.replace("%s", encodeURIComponent(s.userId)), s = new J, "boolean" == typeof i && s.add("allow_friend_discovery", i), r.put(e, s, t))
									}))
								}
							}], [{
								key: "Path",
								get: function() {
									return {
										USERS: "/users",
										USERS_USERID: "/users/%s",
										USERS_USERID_LOGIN: "/users/%s/login",
										USERS_USERID_SESSION_KEY: "/users/%s/session_key",
										USERS_USERID_METADATA: "/users/%s/metadata",
										USERS_USERID_METADATA_KEY: "/users/%s/metadata/%s",
										USERS_USERID_MARKASREADALL: "/users/%s/mark_as_read_all",
										USERS_USERID_MY_GROUP_CHANNEL_CHANGELOGS: "/users/%s/my_group_channels/changelogs",
										USERS_USERID_UNREAD_ITEM_COUNT: "/users/%s/unread_item_count",
										USERS_USERID_UNREAD_MESSAGE_COUNT: "/users/%s/unread_message_count",
										USERS_USERID_UNREAD_CHANNEL_COUNT: "/users/%s/unread_channel_count",
										USERS_USERID_PUSH_GCM_TOKEN: "/users/%s/push/gcm/%s",
										USERS_USERID_PUSH_GCM: "/users/%s/push/gcm",
										USERS_USERID_PUSH_DEVICE_TOKENS: "/users/%s/push/%s/device_tokens",
										USERS_USERID_PUSHPREFERENCE_CHANNELURL: "/users/%s/push_preference/%s",
										USERS_USERID_PUSHPREFERENCE: "/users/%s/push_preference/",
										USERS_USERID_PUSH_TEMPLATE: "/users/%s/push/template",
										USERS_USERID_BLOCK: "/users/%s/block",
										USERS_USERID_BLOCK_TARGETID: "/users/%s/block/%s",
										USERS_USERID_PUSH_APNS_TOKEN: "/users/%s/push/apns/%s",
										USERS_USERID_PUSH_APNS: "/users/%s/push/apns",
										USERS_USERID_PUSH: "/users/%s/push",
										USERS_USERID_GROUP_CHANNEL_INVITATION_PREFERENCE: "/users/%s/channel_invitation_preference",
										USERS_USERID_GROUP_CHANNEL_COUNT: "/users/%s/group_channel_count",
										USERS_COUNT_PREFERENCE: "/users/%s/count_preference/%s",
										USERS_USERID_ALLOW_FRIEND_DISCOVERY: "/users/%s/allow_friend_discovery",
										OPENCHANNELS: "/open_channels",
										OPENCHANNELS_CHANNELURL: "/open_channels/%s",
										OPENCHANNELS_CHANNELURL_MESSAGES: "/open_channels/%s/messages",
										OPENCHANNELS_CHANNELURL_MESSAGES_MESSAGEID: "/open_channels/%s/messages/%s",
										OPENCHANNELS_CHANNELURL_MESSAGES_MESSAGEID_TRANSLATION: "/open_channels/%s/messages/%s/translation",
										OPENCHANNELS_CHANNELURL_MESSAGES_CHANGELOGS: "/open_channels/%s/messages/changelogs",
										OPENCHANNELS_CHANNELURL_SCHEDULED_MESSAGES: "/open_channels/%s/scheduled_messages",
										OPENCHANNELS_CHANNELURL_PARTICIPANTS: "/open_channels/%s/participants",
										OPENCHANNELS_CHANNELURL_OPERATORS: "/open_channels/%s/operators",
										OPENCHANNELS_CHANNELURL_METADATA: "/open_channels/%s/metadata",
										OPENCHANNELS_CHANNELURL_METADATA_KEY: "/open_channels/%s/metadata/%s",
										OPENCHANNELS_CHANNELURL_METACOUNTER: "/open_channels/%s/metacounter",
										OPENCHANNELS_CHANNELURL_METACOUNTER_KEY: "/open_channels/%s/metacounter/%s",
										OPENCHANNELS_CHANNELURL_BAN: "/open_channels/%s/ban",
										OPENCHANNELS_CHANNELURL_BAN_USERID: "/open_channels/%s/ban/%s",
										OPENCHANNELS_CHANNELURL_MUTE: "/open_channels/%s/mute",
										OPENCHANNELS_CHANNELURL_MUTE_USERID: "/open_channels/%s/mute/%s",
										OPENCHANNELS_CHANNELURL_FREEZE: "/open_channels/%s/freeze",
										OPENCHANNELS_OPERATORS: "/open_channels/%s/operators",
										OPENCHANNELS_CHANNELURL_MESSAGES_MESSAGEID_REACTION: "/open_channels/%s/messages/%s/reactions",
										GROUPCHANNELS: "/group_channels",
										MYGROUPCHANNELS: "/users/%s/my_group_channels",
										GROUPCHANNELS_CHANNELURL: "/group_channels/%s",
										GROUPCHANNELS_CHANNELURL_INVITE: "/group_channels/%s/invite",
										GROUPCHANNELS_CHANNELURL_ACCEPT_INVITATION: "/group_channels/%s/accept",
										GROUPCHANNELS_CHANNELURL_DECLINE_INVITATION: "/group_channels/%s/decline",
										GROUPCHANNELS_CHANNELURL_HIDE: "/group_channels/%s/hide",
										GROUPCHANNELS_CHANNELURL_LEAVE: "/group_channels/%s/leave",
										GROUPCHANNELS_CHANNELURL_JOIN: "/group_channels/%s/join",
										GROUPCHANNELS_CHANNELURL_OPERATORS: "/group_channels/%s/operators",
										GROUPCHANNELS_CHANNELURL_MESSAGES: "/group_channels/%s/messages",
										GROUPCHANNELS_CHANNELURL_MESSAGES_MARKASREAD: "/group_channels/%s/messages/mark_as_read",
										GROUPCHANNELS_CHANNELURL_MESSAGES_MARKASDELIVERED: "/group_channels/%s/messages/mark_as_delivered",
										GROUPCHANNELS_CHANNELURL_MESSAGES_TOTALCOUNT: "/group_channels/%s/messages/total_count",
										GROUPCHANNELS_CHANNELURL_MESSAGES_UNREADCOUNT: "/group_channels/%s/messages/unread_count",
										GROUPCHANNELS_CHANNELURL_MESSAGES_MESSAGEID: "/group_channels/%s/messages/%s",
										GROUPCHANNELS_CHANNELURL_MESSAGES_MESSAGEID_TRANSLATION: "/group_channels/%s/messages/%s/translation",
										GROUPCHANNELS_CHANNELURL_MESSAGES_CHANGELOGS: "/group_channels/%s/messages/changelogs",
										GROUPCHANNELS_CHANNELURL_SCHEDULED_MESSAGES: "/group_channels/%s/scheduled_messages",
										GROUPCHANNELS_CHANNELURL_MEMBERS: "/group_channels/%s/members",
										GROUPCHANNELS_CHANNELURL_METADATA: "/group_channels/%s/metadata",
										GROUPCHANNELS_CHANNELURL_METADATA_KEY: "/group_channels/%s/metadata/%s",
										GROUPCHANNELS_CHANNELURL_METACOUNTER: "/group_channels/%s/metacounter",
										GROUPCHANNELS_CHANNELURL_METACOUNTER_KEY: "/group_channels/%s/metacounter/%s",
										GROUPCHANNELS_RESET_USER_HISTORY: "/group_channels/%s/reset_user_history",
										GROUPCHANNELS_OPERATORS: "/group_channels/%s/operators",
										GROUPCHANNELS_MEMBERS: "/group_channels/%s/members",
										GROUPCHANNELS_CHANNELURL_BAN: "/group_channels/%s/ban",
										GROUPCHANNELS_CHANNELURL_BAN_USERID: "/group_channels/%s/ban/%s",
										GROUPCHANNELS_CHANNELURL_MUTE: "/group_channels/%s/mute",
										GROUPCHANNELS_CHANNELURL_MUTE_USERID: "/group_channels/%s/mute/%s",
										GROUPCHANNELS_CHANNELURL_FREEZE: "/group_channels/%s/freeze",
										GROUPCHANNELS_CHANNELURL_MESSAGES_MESSAGEID_REACTION: "/group_channels/%s/messages/%s/reactions",
										STORAGE_FILE: "/storage/file",
										STORAGE_PROFILE: "/storage/profile_image",
										FRIENDS: "/users/%s/friends",
										FRIENDS_CHANGE_LOGS: "/users/%s/friends/changelogs",
										FRIENDS_DISCOVERIES: "/users/%s/friend_discoveries",
										SEARCH_MESSAGE: "/search/messages",
										REPORT_USERS: "/report/users/%s",
										REPORT_CHANNELS: "/report/%s/%s",
										REPORT_MESSAGES: "/report/%s/%s/messages/%s",
										EMOJIS_EMOJIKEY: "/emojis/%s",
										EMOJI_CATEGORIES: "/emoji_categories",
										EMOJI_CATEGORIES_CATEGORYID: "/emoji_categories/%s"
									}
								}
							}]), n
						}(),
						X = function() {
							function e(n, t) {
								o(this, e), this.sb = n, this.ws = null, this.wsHost = null, this.WebSocket = null, this.handler = t || new e.ConnectionHandler, this.explicitDisconnect = !1, this.lastActiveMillis = 0;
								try {
									this.WebSocket = "undefined" == typeof WebSocket ? s : WebSocket
								} catch (n) {
									this.WebSocket = WebSocket
								}
							}
							return u(e, [{
								key: "connect",
								value: function(e, n, t) {
									var r = this;
									q.debug("`WebSocketClient.connect` called.");
									var i = O.get(this.sb._iid).container,
										s = i.pinger,
										a = i.auth,
										o = i.extensions,
										l = i.getUserAgentWithExtensions,
										u = i.sessionManager;
									this.wsHost = t;
									try {
										var c = "/?p=JS&pv=" + encodeURIComponent(S.OS_VERSION) + "&sv=" + encodeURIComponent(S.SDK_VERSION) + "&ai=" + encodeURIComponent(this.sb.getApplicationId());
										if (a.sessionKey ? c += "&key=" + encodeURIComponent(a.sessionKey) : c += "&user_id=" + encodeURIComponent(e) + "&access_token=" + encodeURIComponent(n), c += "&active=1", c += "&SB-User-Agent=" + encodeURIComponent(l(o)), c += "&Request-Sent-Timestamp=" + (new Date).getTime().toString(), c += "&include_extra_data=" + encodeURIComponent(["premium_feature_list", "file_upload_size_limit", "application_attributes", "emoji_hash"].join(",")), u.handler && (c += "&expiring_session=1"), this.ws = new this.WebSocket(this.wsHost + c), !this.ws) return this.sb.isReconnectingOnError = !0, void this.handler.onError("ws does not exist.")
									} catch (e) {
										return this.sb.isReconnectingOnError = !0, void this.handler.onError(e)
									}
									try {
										this.sb.getDebugMode() && "undefined" != typeof window && (window.ws = this.ws)
									} catch (e) {
										q.debug("`window` object does not exist.")
									}
									var d = !1;
									this.ws.onopen = function(e) {
										q.debug("`WebSocket.onopen` called."), r.handler.onOpen(e)
									}, this.ws.onmessage = function(e) {
										r.active();
										var n, t = e.data.split("\n");
										for (n in t) {
											var i = t[n];
											if (i && "string" == typeof i) {
												try {
													if ("PONG" === i.substring(0, 4)) {
														s.pong();
														continue
													}
												} catch (e) {
													q.debug("`WebSocket.onmessage` command check error:", e)
												}
												r.handler.onMessage(i)
											}
										}
									}, this.ws.onerror = function(e) {
										q.debug("`WebSocket.onerror` called:", e), s && s.stop(), d = !0, r.sb.isReconnectingOnError = !0, r.handler.onError(e)
									}, this.ws.onclose = function(e) {
										q.group("`WebSocket.onclose` called.", [{
											level: q.supportedLogLevels.DEBUG,
											messages: ["e", e]
										}, {
											level: q.supportedLogLevels.DEBUG,
											messages: ["explicitDisconnect", r.explicitDisconnect]
										}]), s && s.stop(), r.explicitDisconnect ? r.handler.onClose(e) : d || r.handler.onError(e), r.explicitDisconnect = !1
									}
								}
							}, {
								key: "disconnect",
								value: function(e, n) {
									q.group("`WebSocketClient.onclose` called.", [{
										level: q.supportedLogLevels.DEBUG,
										messages: ["explicit", e]
									}]);
									var t = O.get(this.sb._iid).container.pinger;
									t && t.stop(), this.explicitDisconnect = !0 === e, this.ws && (this.ws.onopen = function() {}, this.ws.onmessage = function() {}, this.ws.onclose = function() {
										n && n()
									}, this.ws.onerror = function() {}, this.ws.close(), this.ws = null), this.explicitDisconnect ? this.handler.onClose() : this.handler.onError(), this.explicitDisconnect = !1
								}
							}, {
								key: "send",
								value: function(e, n) {
									var t;
									1 !== this.ws.readyState ? n && n(new R("Connection is not valid. Please reconnect.", R.WEBSOCKET_CONNECTION_CLOSED), null) : (t = O.get(this.sb._iid).container.pinger, this.ws.send(e.encode()), "PING" !== e.command && t.refreshTimer(), n && n(null, null))
								}
							}, {
								key: "active",
								value: function() {
									this.lastActiveMillis = (new Date).getTime()
								}
							}, {
								key: "getConnectionState",
								value: function() {
									try {
										return 1 === this.ws.readyState ? this.sb.ConnectionState.OPEN : 0 === this.ws.readyState ? this.sb.ConnectionState.CONNECTING : this.sb.ConnectionState.CLOSED
									} catch (F) {
										return this.sb.ConnectionState.CLOSED
									}
								}
							}]), e
						}();
					X.ConnectionHandler = function e() {
						o(this, e), this.onReady = function() {}, this.onOpen = function() {}, this.onClose = function() {}, this.onMessage = function() {}, this.onError = function() {}
					};
					var $ = 3,
						ee = 24,
						ne = 3,
						te = 2,
						re = function() {
							function e(n) {
								o(this, e), this.sb = n, this.cls = M.get(this.sb._iid), this.client = new X(this.sb), this.connectParams = {
									retryCount: 1
								}, this.reconnectParams = {
									interval: $,
									retryCount: ne,
									multiplier: te,
									maxInterval: ee
								}, this.connectCount = 0, this.reconnectCount = 0, this.reconnectDelay = 0
							}
							return u(e, [{
								key: "isConnected",
								get: function() {
									return this.client && this.client.getConnectionState() === this.sb.ConnectionState.OPEN
								}
							}, {
								key: "connect",
								value: function(e, n) {
									var t = this,
										r = (l = O.get(this.sb._iid).container).auth,
										i = l.apiClient,
										s = l.commandHandler;
									r.sessionToken = n || null;
									var a = this.cls.GroupChannel,
										o = null,
										l = new X.ConnectionHandler;
									this.client = new X(this.sb, l), l.onMessage = function(e) {
										s.onRawCommandReceived(e)
									}, this.sb.loginHandler = function(e, n) {
										t.sb.connecting = !1, e ? t.disconnect({
											clearSession: !0,
											err: e
										}, null) : (clearInterval(t.sb.globalTimer), (e = function() {
											if (a.cachedChannels)
												for (var e in a.cachedChannels) {
													var n = a.cachedChannels[e];
													if (n.invalidateTypingStatus())
														for (var r in t.sb.channelHandlers) t.sb.channelHandlers[r].onTypingStatusUpdated(n)
												}
										})(), t.sb.globalTimer = setInterval(e, 1e3), t.flushConnectionCallbacks(null, n), t.sb.connecting = !1, t.sb.reconnecting = !1, t.sb.ConnectionManager.processAllReadyHandler(null))
									}, l.onOpen = function() {
										t.connectCount = 0, t.sb.loginTimer = setTimeout((function() {
											t.sb.loginTimer = null, t.sb.onLoginTimerCancel = null, t.flushConnectionCallbacks(new R("Connection timeout.", R.LOGIN_TIMEOUT), null), t.sb.disconnect(null)
										}), t.sb.Options.websocketResponseTimeout), t.sb.onLoginTimerCancel = function() {
											t.connectCount = 0, t.flushConnectionCallbacks(new R("Connection has been canceled.", R.REQUEST_FAILED), null)
										}, t.sb.connecting = !1
									}, l.onError = function(i) {
										q.debug("Connect: `WebSocketClient.ConnectionHandler.onError` called.", i), r.sessionKey ? (t.sb.isReconnectingOnError = !0, t.sb.ConnectionManager.errorAllReadyHandler(), t.reconnect(e, !0), t.sb.connecting = !1) : t.connectCount < t.connectParams.retryCount ? (t.connectCount++, t.client.connect(e, n, o)) : (t.connectCount = 0, t.flushConnectionCallbacks(new R("Websocket connection failed.", R.WEBSOCKET_CONNECTION_FAILED), null), t.sb.connecting = !1)
									}, l.onClose = function() {
										q.debug("Connect: `WebSocketClient.ConnectionHandler.onClose` called."), t.connectCount = 0, t.sb.connecting = !1
									}, i.checkRouting((function(r, s) {
										r ? (t.sb.connecting = !1, t.flushConnectionCallbacks(new R("Connection routing failed.", R.REQUEST_FAILED), null)) : (o = s.wsHost, i.dummyCall((function(e) {
											e && q.error("API dummy call failed:", e)
										})), t.client.connect(e, n, o))
									}))
								}
							}, {
								key: "reconnect",
								value: function(e) {
									var n = this,
										t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
										r = O.get(this.sb._iid).container,
										i = r.auth,
										s = r.apiClient,
										a = r.commandHandler,
										o = r.sessionManager,
										l = this.cls.OpenChannel;
									if (this.sb.reconnecting = !0, this.sb.reconnectTimer) q.debug("Reconnect: still reconnecting.");
									else {
										if (this.reconnectCount += 1, this.reconnectCount <= 1) {
											if (t)
												for (var u in this.sb.connectionHandlers) this.sb.connectionHandlers[u].onReconnectStarted();
											this.reconnectDelay = 0
										} else this.reconnectDelay = Math.min(1e3 * this.reconnectParams.interval * Math.pow(this.reconnectParams.multiplier, this.reconnectCount - 2), 0 < this.reconnectParams.maxInterval ? 1e3 * this.reconnectParams.maxInterval : Number.MAX_SAFE_INTEGER);
										if (!e || !i.sessionKey || 0 < this.reconnectParams.retryCount && this.reconnectCount > this.reconnectParams.retryCount) {
											for (var c in this.disconnect({
													clearSession: !1,
													err: new R("Websocket connection failed.", R.WEBSOCKET_CONNECTION_FAILED)
												}, null), this.reconnectCount = 0, this.sb.connectionHandlers) this.sb.connectionHandlers[c].onReconnectFailed();
											return this.sb.connecting = !1, this.sb.reconnecting = !1, this.sb.isReconnectingOnError = !1, void this.sb.ConnectionManager.errorAllReadyHandler()
										}
										this.sb.onReconnectTimerCancel = function() {
											n.reconnectCount = 0
										}, this.sb.reconnectTimer = setTimeout((function() {
											n.sb.reconnectTimer = null, n.sb.onReconnectTimerCancel = null, n.client && n.client.disconnect(!0);
											var t = new X.ConnectionHandler;
											n.client = new X(n.sb, t), n.sb.loginHandler = function(t, r) {
												if (t) t.isSessionKeyExpiredError ? o.refresh((function() {})) : (clearTimeout(n.sb.reconnectTimer), n.sb.reconnectTimer = null, n.reconnect(e, !1));
												else {
													for (var i in n.reconnectCount = 0, n.sb.connecting = !1, n.sb.reconnecting = !1, n.sb.isReconnectingOnError = !1, n.sb.connectionHandlers) n.sb.connectionHandlers[i].onReconnectSucceeded();
													if (n.sb.ConnectionManager.processAllReadyHandler(null), n.sb.isReconnectingOnError)
														for (var s in n.sb.ConnectionManager.networkHandlers) n.sb.ConnectionManager.networkHandlers[s].onReconnected();
													Object.keys(l.enteredChannels).forEach((function(e) {
														l.enteredChannels[e].enter((function(t, r) {
															t && (t = n.cls.FileMessageQueue, delete l.enteredChannels[e], t.delete(e))
														}))
													}))
												}
											}, t.onOpen = function() {
												q.debug("Reconnect: `WebSocketClient.ConnectionHandler.onOpen` called."), n.sb.loginTimer = setTimeout((function() {
													q.debug("Reconnect: `loginTimer` timeout."), n.sb.loginTimer = null, n.reconnect(e, !0)
												}), n.sb.Options.websocketResponseTimeout), n.sb.onLoginTimerCancel = null, n.sb.reconnecting = !1
											}, t.onMessage = function(e) {
												a.onRawCommandReceived(e)
											}, t.onError = function(t) {
												q.debug("Reconnect: `WebSocketClient.ConnectionHandler.onError` called.", t), n.sb.isReconnectingOnError = !0, n.sb.ConnectionManager.errorAllReadyHandler(), n.reconnect(e, !0)
											}, t.onClose = function() {
												q.debug("Reconnect: `WebSocketClient.ConnectionHandler.onClose` called."), n.sb.reconnecting = !1
											}, s.checkRouting((function(t, r) {
												t ? n.reconnect(e, !0) : (n.sb.getCurrentApiHost() !== r.apiHost && s.get("/", null, (function() {})), n.client.connect(e, null, r.wsHost))
											}))
										}), this.reconnectDelay)
									}
								}
							}, {
								key: "disconnect",
								value: function(e, n) {
									var t = O.get(this.sb._iid),
										r = t.container.ackStateMap,
										i = (a = this.cls).GroupChannel,
										s = a.OpenChannel,
										a = e.clearSession;
									if (e = e.err, this.sb.loginTimer && (clearTimeout(this.sb.loginTimer), this.sb.onLoginTimerCancel && (this.sb.onLoginTimerCancel(), this.sb.onLoginTimerCancel = null), this.sb.loginTimer = null), this.sb.reconnectTimer && (clearTimeout(this.sb.reconnectTimer), this.sb.onReconnectTimerCancel && (this.sb.onReconnectTimerCancel(), this.sb.onReconnectTimerCancel = null), this.sb.reconnectTimer = null), this.client && (this.reconnectCount = 0, this.client.disconnect(!0), this.client = null), a) {
										for (var o in s.clearEnteredChannels(), s.clearCache(), i.clearCache(), this.sb.globalTimer && (clearInterval(this.sb.globalTimer), this.sb.globalTimer = null), r) clearTimeout(r[o].timer);
										this.sb.currentUser = null, t.set("ackStateMap", {}), t.set("subscribedUnreadMessageCount", {
											all: 0,
											custom_types: {},
											ts: 0
										}), t.set("auth", new T)
									}
									e && (this.flushConnectionCallbacks(e, null), this.sb.connecting = !1, this.sb.reconnecting = !1, this.sb.isReconnectingOnError = !1), n && n(null, null)
								}
							}, {
								key: "flushConnectionCallbacks",
								value: function(e, n) {
									var t = this.sb.connectionCallbacks;
									this.sb.connectionCallbacks = [], t.forEach((function(t) {
										return t(e, n)
									}))
								}
							}]), e
						}(),
						ie = function() {
							function e(n) {
								var t = n.type,
									r = void 0 !== (s = n.nullable) && s,
									i = void 0 !== (l = n.optional) && l,
									s = void 0 === (a = n.optionalIf) ? null : a,
									a = void 0 === (l = n.ignoreIf) ? null : l,
									l = void 0 === (l = n.defaultValue) ? null : l;
								n = void 0 === (n = n.constraint) ? null : n, o(this, e), this.type = t, this.nullable = r, this.optional = i, this.optionalIf = s, this.ignoreIf = a, this.defaultValue = l, this.constraint = n
							}
							return u(e, [{
								key: "isMatchingType",
								value: function(e) {
									function n(n, t) {
										return "string" == typeof t ? a(n) === t || "array" === t && Array.isArray(n) || "file" === t && V.isFile(n) || "null" === t && null === n || "date" === t && n instanceof Date : "function" == typeof t ? n instanceof t : "object" === a(t) && -1 < Object.keys(t).map((function(e) {
											return t[e]
										})).indexOf(e)
									}
									return n(e, this.type) || Array.isArray(this.type) && this.type.some((function(t) {
										return n(e, t)
									})) || this.nullable && null === e
								}
							}], [{
								key: "parse",
								value: function(n, t) {
									for (n = e.toArray(n); 0 < n.length && void 0 === n[n.length - 1];) n.pop();
									var r = !1,
										i = null;
									"callback" === t[t.length - 1].type && ("function" == typeof n[n.length - 1] && (i = n.pop()), t.pop(), r = !0);
									var s, a = [],
										o = null,
										l = 0;
									for (s in t) {
										var u = t[s];
										"function" == typeof u.ignoreIf && u.ignoreIf(n) ? a.push(u.hasOwnProperty("defaultValue") ? u.defaultValue : null) : u.isMatchingType(n[l]) ? (u.nullable && null === n[l] || !u.constraint || u.constraint(n[l]) || (o = e.error), a.push(n[l]), l++) : u.optional || "function" == typeof u.optionalIf && u.optionalIf(n) ? a.push(u.hasOwnProperty("defaultValue") ? u.defaultValue : null) : (o = e.error, a.push(n[l]), l++)
									}
									return r && i && a.push(i), [o = n.length !== l ? e.error : o].concat(a)
								}
							}, {
								key: "error",
								get: function() {
									return new R("Invalid parameter.", R.INVALID_PARAMETER)
								}
							}, {
								key: "toArray",
								value: function(e) {
									for (var n = [], t = 0; t < e.length; t++) n.push(e[t]);
									return n
								}
							}]), e
						}(),
						se = function() {
							function e(n) {
								o(this, e), this.sb = n, this.authCount = 0, this.readyHandlers = [], this.networkHandlers = {}, this.authenticateTimer = 1e4, this.authInfoRequester = null
							}
							return u(e, [{
								key: "addReadyHandler",
								value: function(e) {
									e && "function" == typeof e && this.readyHandlers.push(e)
								}
							}, {
								key: "ready",
								value: function(e) {
									var n = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
										t = (r = O.get(this.sb._iid).container).auth,
										r = r.isInBackground;
									n && t.hasSession() ? e && (this.sb.currentUser ? e(null, this.sb.currentUser) : (this.addReadyHandler(e), this.errorAllReadyHandler()), this.sb.getConnectionState() !== this.sb.ConnectionState.CLOSED || r || this.sb.reconnect()) : (this.addReadyHandler(e), this.sb.isReconnectingOnError ? this.errorAllReadyHandler() : this.sb.getConnectionState() === this.sb.ConnectionState.OPEN ? this.processAllReadyHandler(null) : this.sb.getConnectionState() === this.sb.ConnectionState.CONNECTING || this.errorAllReadyHandler())
								}
							}, {
								key: "processAllReadyHandler",
								value: function(e) {
									var n, t;
									0 < this.readyHandlers.length && (n = this.sb.currentUser, t = this.readyHandlers, this.readyHandlers = [], t.forEach((function(t) {
										t && "function" == typeof t && t(e, n)
									})))
								}
							}, {
								key: "errorAllReadyHandler",
								value: function() {
									this.processAllReadyHandler(new R("Connection should be made first.", R.CONNECTION_REQUIRED))
								}
							}, {
								key: "NetworkHandler",
								value: function() {
									this.onReconnected = function() {}
								}
							}, {
								key: "addNetworkHandler",
								value: function(e, n) {
									this.networkHandlers[e] = n
								}
							}, {
								key: "removeNetworkHandler",
								value: function(e) {
									delete this.networkHandlers[e]
								}
							}, {
								key: "removeAllNetworkHandler",
								value: function() {
									this.networkHandlers = {}
								}
							}, {
								key: "authenticate",
								value: function(e) {
									var n, t = this;
									this.sb.getConnectionState() === this.sb.ConnectionState.OPEN || this.sb.reconnecting ? (this.sb.connecting = !1, e(null, this.sb.currentUser)) : this.authInfoRequester && "function" == typeof this.authInfoRequester ? (this.sb.connecting = !0, this.authCount++, n = setTimeout((function() {
										n = null, t.authCount--, 0 === t.authCount && 0 === t.sb.connectionCallbacks.length && (t.sb.connecting = !1), t.errorAllReadyHandler(), e(new R("Connection should be made first.", R.CONNECTION_REQUIRED), null)
									}), this.authenticateTimer), this.authInfoRequester((function(r) {
										var i;
										n && (clearTimeout(n), n = null, t.authCount--, i = function(n, r) {
											t.sb.connecting = !1, e(n, null)
										}, r && r.hasOwnProperty("userId") ? r.accessToken ? r.apiHost && r.wsHost ? t.sb.connect(r.userId, r.accessToken, r.apiHost, r.wsHost, i) : t.sb.connect(r.userId, r.accessToken, i) : r.apiHost && r.wsHost ? t.sb.connect(r.userId, r.apiHost, r.wsHost, i) : t.sb.connect(r.userId, i) : e(ie.error, null))
									}))) : e(ie.error, null)
								}
							}]), e
						}(),
						ae = function e() {
							o(this, e), this.onSessionExpired = function() {}, this.onSessionTokenRequired = function(e, n) {
								return e(null)
							}, this.onSessionError = function(e) {}, this.onSessionRefreshed = function() {}, this.onSessionClosed = function() {}
						},
						oe = function() {
							function e(n) {
								o(this, e), this.sb = n, this.handler = null, this.callbacks = []
							}
							return u(e, [{
								key: "_refreshSessionKey",
								value: function() {
									var e = this;
									O.get(this._iid).container.wsAdapter.isConnected ? this._refreshSessionKeyByCommand((function(n) {
										n ? n.isSessionTokenExpiredError ? e._handleRefreshError(n) : e._refreshSessionKeyByApi((function(n) {
											n ? e._handleRefreshError(n) : e._handleRefreshSuccess()
										})) : e._handleRefreshSuccess()
									})) : this._refreshSessionKeyByApi((function(n) {
										n ? e._handleRefreshError(n) : e._handleRefreshSuccess()
									}))
								}
							}, {
								key: "_refreshSessionKeyByCommand",
								value: function(e) {
									var n = this.sb,
										t = O.get(this._iid).container.auth,
										r = (r = M.get(this._iid).Command).bSessionRefresh({
											token: t.sessionToken,
											requestId: r.generateRequestId()
										});
									n.sendCommand(r, (function(r, i) {
										var s;
										n.getErrorFirstCallback() && (i = (s = [r, i])[0], r = s[1]), r && (r.hasOwnProperty("error") ? i = new R("Failed to refresh the session key.", R.SESSION_TOKEN_REFRESH_FAILED) : r.hasOwnProperty("new_key") && (t.sessionKey = r.new_key)), e(i)
									}))
								}
							}, {
								key: "_refreshSessionKeyByApi",
								value: function(e) {
									var n = this;
									! function t(r) {
										var i, s, a;
										r < 3 ? (a = O.get(n._iid).container, i = a.auth, s = a.apiClient, a = {}, i.sessionToken && (a.accessToken = i.sessionToken), s.refreshSessionKey(a, (function(n, s) {
											n ? n.isSessionTokenExpiredError ? e(new R("Failed to refresh the session key.", R.SESSION_TOKEN_REFRESH_FAILED)) : t(r + 1) : (s = s.key, i.sessionKey = s, e(null))
										}))) : e(new R("Failed to refresh the session key.", R.SESSION_TOKEN_REFRESH_FAILED))
									}(0)
								}
							}, {
								key: "_handleRefreshSuccess",
								value: function() {
									var e = this.sb;
									e.reconnectTimer && (clearTimeout(e.reconnectTimer), e.reconnectTimer = null), e.reconnect(), this._flushCallbacks(new R("Session key refreshed.", R.SESSION_TOKEN_REFRESHED)), this.handler && this.handler.onSessionRefreshed()
								}
							}, {
								key: "_handleRefreshError",
								value: function(e) {
									this._flushCallbacks(e), this.handler && this.handler.onSessionError(e)
								}
							}, {
								key: "_handleClose",
								value: function() {
									var e = this;
									this.sb.disconnect((function() {
										e._flushCallbacks(new R("Failed to refresh the session key.", R.SESSION_TOKEN_REFRESH_FAILED)), e.handler && e.handler.onSessionClosed()
									}))
								}
							}, {
								key: "_flushCallbacks",
								value: function(e) {
									this.callbacks.forEach((function(n) {
										return n(e)
									})), this.callbacks = []
								}
							}, {
								key: "setHandler",
								value: function(e) {
									e instanceof ae && (this.handler = e)
								}
							}, {
								key: "refresh",
								value: function(e) {
									var n = this,
										t = this.sb,
										r = O.get(this._iid).container.auth;
									this.handler ? (this.callbacks.push(e), 1 === this.callbacks.length && (this.handler.onSessionExpired(), r.sessionToken ? this.handler.onSessionTokenRequired((function(e) {
										e ? (r.sessionToken = e, n._refreshSessionKey()) : n._handleClose()
									}), (function() {
										t.reconnectTimer && (clearTimeout(t.reconnectTimer), t.reconnectTimer = null);
										var e = new R("Failed to get the session token.", R.SESSION_TOKEN_REQUEST_FAILED);
										n._flushCallbacks(e), n.handler && n.handler.onSessionError(e)
									})) : this._refreshSessionKey())) : e(null)
								}
							}]), e
						}(),
						le = function() {
							function e(n) {
								o(this, e), this.sb = n
							}
							return u(e, [{
								key: "onlineWorker",
								value: function() {
									try {
										var e;
										"undefined" != typeof navigator && navigator.onLine && (e = O.get(this.sb._iid).container.auth, this.sb.reconnecting || this.sb.connecting || !e.sessionKey || this.sb.getConnectionState() === this.sb.ConnectionState.OPEN || this.sb.reconnect())
									} catch (e) {
										q.debug("There is no `window.addEventListener.ononline` or `navigator.onLine`")
									}
								}
							}, {
								key: "offlineWorker",
								value: function() {
									try {
										var e, n;
										"undefined" == typeof navigator || navigator.onLine || (e = (n = O.get(this.sb._iid).container).auth, n = n.pinger, this.sb.reconnecting || this.sb.connecting || !e.sessionKey || (n && n.stop(), this.sb.reconnect()))
									} catch (e) {
										q.debug("There is no `window.addEventListener.ononline` or `navigator.onLine`")
									}
								}
							}, {
								key: "start",
								value: function() {
									try {
										"undefined" != typeof window && window.addEventListener && "ononline" in window && "onoffline" in window && "undefined" != typeof navigator && "boolean" == typeof navigator.onLine && (window.addEventListener("online", this.onlineWorker), window.addEventListener("offline", this.offlineWorker))
									} catch (F) {
										q.debug("There is no `window.addEventListener.ononline` or `navigator.onLine`")
									}
								}
							}, {
								key: "stop",
								value: function() {
									try {
										window.removeEventListener("online", this.onlineWorker, !1), window.removeEventListener("offline", this.offlineWorker, !1)
									} catch (F) {
										q.debug("There is no `window.addEventListener.ononline` or `navigator.onLine`")
									}
								}
							}]), e
						}(),
						ue = 4,
						ce = (new Date).getTime(),
						de = function() {
							function e(n, t) {
								var r, i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
								switch (o(this, e), this.command = n, this.requestId = i, arguments.length) {
									case 1:
										!n || n.length <= ue ? (this.command = "NOOP", this.payload = "{}") : (this.decode(n), !this.isRequestIdCommand || (r = this.getJsonElement()) && (this.requestId = r.req_id || ""));
										break;
									case 2:
									case 3:
										!this.requestId && this.isRequestIdCommand && (this.requestId = e.generateRequestId()), t.req_id = this.requestId || "", this.payload = JSON.stringify(t)
								}
							}
							return u(e, [{
								key: "isRequestIdCommand",
								get: function() {
									return this.isAckRequired || "EROR" === this.command
								}
							}, {
								key: "isAckRequired",
								get: function() {
									return "MESG" === this.command || "FILE" === this.command || "ENTR" === this.command || "EXIT" === this.command || "READ" === this.command || "MEDI" === this.command || "FEDI" === this.command
								}
							}, {
								key: "encode",
								value: function() {
									return this.command + this.payload + "\n"
								}
							}, {
								key: "decode",
								value: function(e) {
									e = e.trim(), this.command = e.substring(0, ue), this.payload = e.substring(ue)
								}
							}, {
								key: "getJsonElement",
								value: function() {
									return JSON.parse(this.payload)
								}
							}], [{
								key: "bSessionRefresh",
								value: function(e) {
									return new this("LOGI", {
										token: e.token
									}, e.requestId)
								}
							}, {
								key: "bPing",
								value: function() {
									return new this("PING", {
										id: (new Date).getTime(),
										active: 1
									})
								}
							}, {
								key: "bMessage",
								value: function(e) {
									var n, t = e.channelUrl,
										r = e.message,
										i = e.data,
										s = e.customType,
										a = e.metaArrays,
										o = e.mentionType,
										l = e.mentionedUserIds,
										u = e.translationTargetLanguages,
										c = e.pushNotificationDeliveryOption,
										d = e.appleCriticalAlertOptions,
										h = void 0 === (g = e.requestId) ? null : g,
										p = void 0 !== (_ = e.silent) && _,
										f = void 0 === (n = e.rootMessageId) ? null : n,
										_ = void 0 === (g = e.parentMessageId) ? null : g,
										g = (e = (n = M.get(this._iid)).UserMessageParams, n.BaseMessageParams);
									return (n = {}).channel_url = t, n.message = r, n.data = i, a && 0 < a.length && (n.metaarray = a.map((function(e) {
										return e.encode()
									}))), o && (n.mention_type = o), n.mentioned_user_ids = [], o === g.MentionType.CHANNEL ? n.mentioned_user_ids = [] : Array.isArray(l) && 0 < l.length && (n.mentioned_user_ids = l), s && (n.custom_type = s), u && 0 < u.length && (n.target_langs = u), c && c !== e.PushNotificationDeliveryOption.DEFAULT && (n.push_option = c), d && (n.apple_critical_alert_options = d.serialize()), p && (n.silent = p), f && (n.root_message_id = f), _ && (n.parent_message_id = _), new this("MESG", n, h)
								}
							}, {
								key: "bFile",
								value: function(e) {
									var n, t = e.channelUrl,
										r = e.url,
										i = e.name,
										s = e.type,
										a = e.size,
										o = e.data,
										l = e.customType,
										u = e.thumbnailSizes,
										c = e.requireAuth,
										d = e.metaArrays,
										h = e.mentionType,
										p = e.mentionedUserIds,
										f = e.pushNotificationDeliveryOption,
										_ = e.appleCriticalAlertOptions,
										g = void 0 === (E = e.requestId) ? null : E,
										y = void 0 !== (v = e.silent) && v,
										m = void 0 === (n = e.rootMessageId) ? null : n,
										v = void 0 === (E = e.parentMessageId) ? null : E,
										E = (e = (n = M.get(this._iid)).BaseMessageParams, n.FileMessageParams);
									return (n = {}).channel_url = t, n.url = r, n.name = i || "", n.type = s || "", n.size = a || 0, n.custom = o, l && (n.custom_type = l), u && (n.thumbnails = u), c && (n.require_auth = c), d && 0 < d.length && (n.metaarray = d.map((function(e) {
										return e.encode()
									}))), h && (n.mention_type = h), n.mentioned_user_ids = [], h === e.MentionType.CHANNEL ? n.mentioned_user_ids = [] : Array.isArray(p) && 0 < p.length && (n.mentioned_user_ids = p), f && f !== E.PushNotificationDeliveryOption.DEFAULT && (n.push_option = f), _ && (n.apple_critical_alert_options = _.serialize()), y && (n.silent = y), m && (n.root_message_id = m), v && (n.parent_message_id = v), new this("FILE", n, g)
								}
							}, {
								key: "bUpdateUserMessage",
								value: function(e) {
									var n, t = e.channelUrl,
										r = e.messageId,
										i = e.appleCriticalAlertOptions,
										s = void 0 === (l = e.message) ? null : l,
										a = void 0 === (c = e.data) ? null : c,
										o = void 0 === (u = e.customType) ? null : u,
										l = void 0 === (n = e.mentionType) ? null : n,
										u = void 0 === (c = e.mentionedUserIds) ? null : c,
										c = void 0 === (n = e.metaArrayParams) ? null : n;
									return e = M.get(this._iid).BaseMessageParams, (n = {}).channel_url = t, n.msg_id = r, null != s && void 0 !== s && (n.message = s), null != a && void 0 !== a && (n.data = a), null != o && void 0 !== o && (n.custom_type = o), l && (n.mention_type = l), l === e.MentionType.CHANNEL ? n.mentioned_user_ids = [] : Array.isArray(u) && 0 < u.length && (n.mentioned_user_ids = u), c && (n.metaarray = c), i && (n.apple_critical_alert_options = i.serialize()), new this("MEDI", n)
								}
							}, {
								key: "bUpdateFileMessage",
								value: function(e) {
									var n, t = e.channelUrl,
										r = e.messageId,
										i = e.appleCriticalAlertOptions,
										s = void 0 === (u = e.data) ? null : u,
										a = void 0 === (l = e.customType) ? null : l,
										o = void 0 === (n = e.mentionType) ? null : n,
										l = void 0 === (u = e.mentionedUserIds) ? null : u,
										u = void 0 === (n = e.metaArrayParams) ? null : n;
									return e = M.get(this._iid).BaseMessageParams, (n = {}).channel_url = t, n.msg_id = r, null != s && void 0 !== s && (n.data = s), null != a && void 0 !== a && (n.custom_type = a), o && (n.mention_type = o), o === e.MentionType.CHANNEL ? n.mentioned_user_ids = [] : Array.isArray(l) && 0 < l.length && (n.mentioned_user_ids = l), u && (n.metaarray = u), i && (n.apple_critical_alert_options = i.serialize()), new this("FEDI", n)
								}
							}, {
								key: "bRead",
								value: function(e) {
									var n = e.channelUrl;
									return (e = {}).channel_url = n, new this("READ", e)
								}
							}, {
								key: "bMessageAck",
								value: function(e) {
									var n = e.channelUrl,
										t = e.messageId;
									return (e = {}).channel_url = n, e.msg_id = t, new this("MACK", e)
								}
							}, {
								key: "bTypeStart",
								value: function(e) {
									var n = e.channelUrl,
										t = e.time;
									return (e = {}).channel_url = n, e.time = t, new this("TPST", e)
								}
							}, {
								key: "bTypeEnd",
								value: function(e) {
									var n = e.channelUrl,
										t = e.time;
									return (e = {}).channel_url = n, e.time = t, new this("TPEN", e)
								}
							}, {
								key: "bEnter",
								value: function(e) {
									var n = e.channelUrl;
									return (e = {}).channel_url = n, new this("ENTR", e)
								}
							}, {
								key: "bExit",
								value: function(e) {
									var n = e.channelUrl;
									return (e = {}).channel_url = n, new this("EXIT", e)
								}
							}, {
								key: "generateRequestId",
								value: function() {
									return String(++ce)
								}
							}]), e
						}(),
						he = 1048576,
						pe = new WeakMap,
						fe = function() {
							function e() {
								var n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
								o(this, e);
								var t = [];
								if (n.hasOwnProperty("premium_feature_list") && Array.isArray(n.premium_feature_list)) try {
									var r = n.premium_feature_list;
									t.push.apply(t, b(r))
								} catch (n) {}
								var i = [];
								if (n.hasOwnProperty("application_attributes") && Array.isArray(n.application_attributes)) try {
									var s = n.application_attributes;
									i.push.apply(i, b(s))
								} catch (n) {}
								pe.set(this, {
									emojiHash: n.hasOwnProperty("emoji_hash") ? n.emoji_hash : "",
									uploadSizeLimit: n.hasOwnProperty("file_upload_size_limit") ? n.file_upload_size_limit * he : Number.MAX_VALUE,
									useReaction: n.hasOwnProperty("use_reaction") && n.use_reaction,
									applicationAttributes: i,
									premiumFeatureList: t
								})
							}
							return u(e, [{
								key: "emojiHash",
								get: function() {
									return pe.get(this).emojiHash
								}
							}, {
								key: "uploadSizeLimit",
								get: function() {
									return pe.get(this).uploadSizeLimit
								}
							}, {
								key: "premiumFeatureList",
								get: function() {
									return pe.get(this).premiumFeatureList
								}
							}, {
								key: "applicationAttributes",
								get: function() {
									return pe.get(this).applicationAttributes
								}
							}, {
								key: "isUsingReaction",
								get: function() {
									return pe.get(this).useReaction
								}
							}]), e
						}(),
						_e = function() {
							function e() {
								o(this, e), this.messageId = null, this.userId = null, this.key = null, this.operation = "", this.updatedAt = null
							}
							return u(e, null, [{
								key: "createFromJson",
								value: function(e) {
									var n = parseInt(e.msg_id),
										t = e.user_id,
										r = e.operation,
										i = e.reaction,
										s = e.updated_at;
									return n && "string" == typeof t && "string" == typeof r && 0 <= ["add", "delete"].indexOf(r.toLowerCase()) && "string" == typeof i && i && "number" == typeof s ? ((e = new this).messageId = n, e.userId = t, e.key = i, e.operation = r.toLowerCase(), e.updatedAt = s, e) : null
								}
							}]), e
						}();

					function ge(e, n, t) {
						return new Promise((function(r, i) {
							n((function(n, s) {
								t && "function" == typeof t && (O.get(e).container.isErrorFirstInCallback ? t(n, s) : t(s, n)), n ? i(n) : r(s)
							}))
						}))
					}
					var ye = function() {
							function e() {
								o(this, e)
							}
							return u(e, null, [{
								key: "serialize",
								value: function(e) {
									var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
									return e = JSON.parse(JSON.stringify(e)), n && n(e),
										function e(n) {
											return Object.keys(n).forEach((function(t) {
												n[t] && "object" === a(n[t]) && e(n[t])
											})), Object.freeze(n)
										}(e)
								}
							}, {
								key: "deserialize",
								value: function(e) {
									var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
									return e = JSON.parse(JSON.stringify(e)), n && n(e), e
								}
							}]), e
						}(),
						me = {
							TIMESTAMP: "timestamp",
							MESSAGE_ID: "messageId"
						},
						ve = new WeakMap,
						Ee = function() {
							function e(n) {
								o(this, e), this.messageId = 0, this.messageType = e.MESSAGE_TYPE_BASE, this.channelUrl = "", this.data = null, this.customType = null, this.silent = !1, this.createdAt = 0, this.updatedAt = 0, this.channelType = null, this.metaArrays = [], this.reactions = [], this.mentionType = null, this.mentionedUsers = [], this.sendingStatus = null, ve.set(this, 0), this.parentMessageId = 0, this.parentMessageText = null, this.threadInfo = null, this.ogMetaData = null, this.isOperatorMessage = !1, this.appleCriticalAlertOptions = null, n && this.__update(n)
							}
							return u(e, [{
								key: "serialize",
								value: function() {
									return ye.serialize(this, (function(e) {
										e.hasOwnProperty("_sender") && (e.sender = e._sender, delete e._sender)
									}))
								}
							}, {
								key: "isIdentical",
								value: function(e) {
									return !("object" !== a(e) || !e.hasOwnProperty("messageId")) && (0 !== this.messageId && 0 !== e.messageId ? this.messageId === e.messageId : this.reqId === e.reqId)
								}
							}, {
								key: "isEqual",
								value: function(e) {
									return V.deepEqual(this, e)
								}
							}, {
								key: "isOpenChannel",
								value: function() {
									var e = M.get(this._iid).BaseChannel;
									return this.channelType === e.CHANNEL_TYPE_OPEN
								}
							}, {
								key: "isGroupChannel",
								value: function() {
									var e = M.get(this._iid).BaseChannel;
									return this.channelType === e.CHANNEL_TYPE_GROUP
								}
							}, {
								key: "isUserMessage",
								value: function() {
									return this.messageType === e.MESSAGE_TYPE_USER
								}
							}, {
								key: "isAdminMessage",
								value: function() {
									return this.messageType === e.MESSAGE_TYPE_ADMIN
								}
							}, {
								key: "isFileMessage",
								value: function() {
									return this.messageType === e.MESSAGE_TYPE_FILE
								}
							}, {
								key: "__update",
								value: function(e) {
									var n = this,
										t = ot.getInstance(this._iid),
										r = (c = M.get(this._iid)).User,
										i = c.BaseChannel,
										s = c.BaseMessageParams,
										a = c.Reaction,
										o = c.MessageMetaArray,
										l = c.ThreadInfo,
										u = c.OGMetaData,
										c = c.AppleCriticalAlertOptions;
									e.hasOwnProperty("msg_id") && (this.messageId = parseInt(e.msg_id)), e.hasOwnProperty("message_id") && (this.messageId = parseInt(e.message_id)), this.channelUrl = e.hasOwnProperty("channel_url") ? String(e.channel_url) : "", this.data = e.hasOwnProperty("data") ? String(e.data) : "", this.customType = e.hasOwnProperty("custom_type") ? String(e.custom_type) : "", this.silent = !!e.hasOwnProperty("silent") && e.silent, this.createdAt = e.hasOwnProperty("ts") ? parseInt(e.ts) : 0, e.hasOwnProperty("created_at") && (this.createdAt = parseInt(e.created_at)), this.updatedAt = e.hasOwnProperty("updated_at") ? parseInt(e.updated_at) : 0, this.channelType = e.hasOwnProperty("channel_type") ? String(e.channel_type) : i.CHANNEL_TYPE_GROUP;
									var d = e.hasOwnProperty("metaarray") ? e.metaarray : {},
										h = e.hasOwnProperty("metaarray_key_order") ? e.metaarray_key_order : Object.keys(d).sort((function(e, n) {
											return e.localeCompare(n)
										}));
									this.metaArrays = [];
									for (var p = 0; p < h.length; p++) {
										var f = h[p];
										this.metaArrays.push(new o(f, d[f] || []))
									}
									if (e.hasOwnProperty("sorted_metaarray") && (i = e.sorted_metaarray, Array.isArray(i) && (this.metaArrays = i.map((function(e) {
											return new o(e.key, e.value)
										})))), this.reactions = [], e.hasOwnProperty("reactions") && Array.isArray(e.reactions))
										for (var _ in e.reactions)(_ = a.createFromJson(e.reactions[_])) && this.reactions.push(_);
									this.mentionType = e.hasOwnProperty("mention_type") ? e.mention_type : s.MentionType.USERS, this.mentionedUsers = [], e.hasOwnProperty("mentioned_users") && e.mentioned_users.forEach((function(e) {
										e = new r(e), n.mentionedUsers.push(e)
									})), this.sendingStatus = 0 < this.messageId ? t.MessageSendingStatus.SUCCEEDED : t.MessageSendingStatus.FAILED, e.hasOwnProperty("sending_status") && (this.sendingStatus = e.sending_status), e.hasOwnProperty("root_message_id") && ve.set(this, parseInt(e.root_message_id)), e.hasOwnProperty("parent_message_id") && (this.parentMessageId = parseInt(e.parent_message_id)), e.hasOwnProperty("parent_message_text") && (this.parentMessageText = e.parent_message_text), this.threadInfo = new l(e.thread_info), e.hasOwnProperty("og_tag") && (this.ogMetaData = new u(e.og_tag)), this.isOperatorMessage = !!e.hasOwnProperty("is_op_msg") && e.is_op_msg, e.hasOwnProperty("apple_critical_alert_options") && (this.appleCriticalAlertOptions = new c(e.apple_critical_alert_options))
								}
							}, {
								key: "getMetaArraysByKeys",
								value: function(e) {
									return Array.isArray(e) ? this.metaArrays.filter((function(n) {
										return -1 < e.indexOf(n.key)
									})) : []
								}
							}, {
								key: "metaArray",
								get: function() {
									var e = {};
									return this.metaArrays.forEach((function(n) {
										e[n.key] = n.value
									})), e
								},
								set: function(e) {
									if ("object" === a(e) && e) {
										var n, t = M.get(this._iid).MessageMetaArray,
											r = [];
										for (n in e) r.push(new t(n, e[n]));
										this.metaArrays = r
									}
								}
							}, {
								key: "getMetaArrayByKeys",
								value: function(e) {
									var n = {};
									return this.getMetaArraysByKeys(e).forEach((function(e) {
										n[e.key] = e.value
									})), n
								}
							}, {
								key: "applyReactionEvent",
								value: function(e) {
									var n = this,
										t = M.get(this._iid).Reaction,
										r = C(ie.parse(arguments, [new ie({
											type: _e,
											constraint: function(e) {
												return parseInt(e.messageId) === parseInt(n.messageId)
											}
										})]), 2),
										i = r[0];
									if (e = r[1], !i) {
										var s, a = !1;
										for (s in this.reactions)
											if (this.reactions[s].key === e.key) {
												this.reactions[s]._applyEvent(e), this.reactions[s].isEmpty && this.reactions.splice(s, 1), a = !0;
												break
											} a || "add" !== e.operation || this.reactions.push(new t(e.key, [e.userId], e.updatedAt))
									}
								}
							}, {
								key: "_getThreadedMessageList",
								value: function(e, n, t, r) {
									var i = this,
										s = M.get(this._iid).ThreadedMessageListParams,
										a = (s = C(ie.parse(arguments, [new ie({
											type: "number"
										}), new ie({
											type: "string",
											constraint: function(e) {
												return Object.values(me).includes(e)
											}
										}), new ie({
											type: s,
											constraint: function(e) {
												return e._validate()
											}
										}), new ie({
											type: "callback"
										})]), 5))[0];
									return e = s[1], n = s[2], t = s[3], r = s[4], ge(this._iid, (function(r) {
										var s, o;
										a ? r(a, null) : (s = (o = M.get(i._iid)).GroupChannel, o = o.OpenChannel, i.isGroupChannel() ? s.getChannel(i.channelUrl, S.INTERNAL_CALL, (function(s, a) {
											var o;
											ot.getInstance(i._iid).getErrorFirstCallback() && (a = (o = [s, a])[0], s = o[1]), a ? r(a, null) : O.get(i._iid).container.apiClient.getMessageList(d(d({
												channel: s,
												token: e,
												tokenType: n
											}, t), {}, {
												shouldReverse: t.reverse,
												rootMessageId: i.messageId,
												includeReplies: !0,
												includeThreadInfo: !0
											}), (function(e, n) {
												var t;
												e ? r(e, null) : (t = M.get(i._iid).BaseChannel, n = (e = n.messages.map((function(e) {
													return t.buildMessage(e, i)
												})).filter((function(e) {
													return null !== e
												}))).filter((function(e) {
													return e.messageId === i.messageId
												}))[0], e = e.filter((function(e) {
													return e.parentMessageId === i.messageId
												})), r(null, {
													parentMessage: n,
													threadedReplies: e
												}))
											}))
										})) : i.isOpenChannel() && o.getChannel(i.channelUrl, S.INTERNAL_CALL, (function(s, a) {
											var o;
											ot.getInstance(i._iid).getErrorFirstCallback() && (a = (o = [s, a])[0], s = o[1]), a ? r(a, null) : O.get(i._iid).container.apiClient.getMessageList(d(d({
												channel: s,
												token: e,
												tokenType: n
											}, t), {}, {
												shouldReverse: t.reverse,
												rootMessageId: i.messageId,
												includeReplies: !0,
												includeThreadInfo: !0
											}), (function(e, n) {
												var t;
												e ? r(e, null) : (t = M.get(i._iid).BaseChannel, n = (e = n.messages.map((function(e) {
													return t.buildMessage(e, i)
												})).filter((function(e) {
													return null !== e
												}))).filter((function(e) {
													return e.messageId === i.messageId
												}))[0], e = e.filter((function(e) {
													return e.parentMessageId === i.messageId
												})), r(null, {
													parentMessage: n,
													threadedReplies: e
												}))
											}))
										})))
									}), r)
								}
							}, {
								key: "getThreadedMessagesByTimestamp",
								value: function(e, n, t) {
									return this._getThreadedMessageList(e, me.TIMESTAMP, n, t)
								}
							}, {
								key: "applyThreadInfoUpdateEvent",
								value: function(e) {
									var n = (i = M.get(this._iid)).ThreadInfo,
										t = i.ThreadInfoUpdateEvent,
										r = ve.get(this),
										i = (t = C(ie.parse(arguments, [new ie({
											type: t,
											constraint: function(e) {
												return parseInt(e.targetMessageId) === parseInt(r)
											}
										})]), 2))[0];
									return e = t[1], !i && (e = e.threadInfo, this.threadInfo = new n(e), !0)
								}
							}], [{
								key: "MESSAGE_TYPE_BASE",
								get: function() {
									return "base"
								}
							}, {
								key: "MESSAGE_TYPE_ADMIN",
								get: function() {
									return "admin"
								}
							}, {
								key: "MESSAGE_TYPE_USER",
								get: function() {
									return "user"
								}
							}, {
								key: "MESSAGE_TYPE_FILE",
								get: function() {
									return "file"
								}
							}, {
								key: "SendingStatus",
								get: function() {
									return {
										NONE: "none",
										PENDING: "pending",
										FAILED: "failed",
										CANCELED: "canceled",
										SUCCEEDED: "succeeded"
									}
								}
							}, {
								key: "getMessage",
								value: function(e, n) {
									var t = this,
										r = (i = M.get(this._iid)).BaseChannel,
										i = i.MessageRetrievalParams,
										s = (i = C(ie.parse(arguments, [new ie({
											type: i,
											constraint: function(e) {
												return e._validate()
											}
										}), new ie({
											type: "callback"
										})]), 3))[0];
									return e = i[1], n = i[2], ge(this._iid, (function(n) {
										if (s) n(s, null);
										else {
											var i = M.get(t._iid),
												a = i.GroupChannel,
												o = i.OpenChannel;
											switch (e.channelType) {
												case r.CHANNEL_TYPE_GROUP:
													a.getChannel(e.channelUrl, S.INTERNAL_CALL, (function(i, s) {
														var a;
														ot.getInstance(t._iid).getErrorFirstCallback() && (s = (a = [i, s])[0], i = a[1]), s ? n(s, null) : O.get(t._iid).container.apiClient.getMessage(d({
															channel: i
														}, e), (function(e, t) {
															e ? n(e, null) : (t = r.buildMessage(t, i), n(null, t))
														}))
													}));
													break;
												case r.CHANNEL_TYPE_OPEN:
													o.getChannel(e.channelUrl, S.INTERNAL_CALL, (function(i, s) {
														var a;
														ot.getInstance(t._iid).getErrorFirstCallback() && (s = (a = [i, s])[0], i = a[1]), s ? n(s, null) : O.get(t._iid).container.apiClient.getMessage(d({
															channel: i
														}, e), (function(e, t) {
															e ? n(e, null) : (t = r.buildMessage(t, i), n(null, t))
														}))
													}))
											}
										}
									}), n)
								}
							}]), e
						}(),
						Ce = function() {
							function e(n) {
								o(this, e), this.nickname = "", this.plainProfileUrl = "", this.userId = "", this.connectionStatus = "", this.lastSeenAt = null, this.metaData = {}, this.isActive = !0, this.friendDiscoveryKey = null, this.friendName = null, this._preferredLanguages = null, this.requireAuth = null, n && this.__update(n)
							}
							return u(e, [{
								key: "preferredLanguages",
								get: function() {
									return this._preferredLanguages
								}
							}, {
								key: "__update",
								value: function(n) {
									var t = O.get(this._iid).container.auth;
									n.hasOwnProperty("guest_id") && (this.userId = String(n.guest_id)), n.hasOwnProperty("user_id") && (this.userId = String(n.user_id)), n.hasOwnProperty("name") && (this.nickname = String(n.name)), n.hasOwnProperty("nickname") && (this.nickname = String(n.nickname)), n.hasOwnProperty("require_auth_for_profile_image") ? this.requireAuth = n.require_auth_for_profile_image : this.requireAuth = null, (n.hasOwnProperty("image") || n.hasOwnProperty("profile_url")) && (this.plainProfileUrl = String(n.image || n.profile_url || ""), Object.defineProperty(this, "profileUrl", {
										value: this.requireAuth ? "".concat(this.plainProfileUrl, "?auth=").concat(t.eKey) : this.plainProfileUrl,
										configurable: !0,
										writable: !1
									})), n.hasOwnProperty("is_online") && n.is_online !== e.NON_AVAILABLE ? this.connectionStatus = n.is_online ? e.ONLINE : e.OFFLINE : this.connectionStatus = e.NON_AVAILABLE, n.hasOwnProperty("last_seen_at") ? this.lastSeenAt = parseInt(n.last_seen_at) : this.lastSeenAt = 0, n.hasOwnProperty("metadata") ? this.metaData = n.metadata : this.metaData = {}, n.hasOwnProperty("is_active") ? this.isActive = void 0 === n.is_active || n.is_active : this.isActive = !0, n.hasOwnProperty("friend_discovery_key") ? this.friendDiscoveryKey = n.friend_discovery_key : this.friendDiscoveryKey = null, n.hasOwnProperty("friend_name") ? this.friendName = n.friend_name : this.friendName = null, n.hasOwnProperty("preferred_languages") ? this._preferredLanguages = n.preferred_languages || null : this._preferredLanguages = null
								}
							}, {
								key: "_updateMetaData",
								value: function(e) {
									var n, t, r, i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
										s = M.get(this._iid).GroupChannel;
									for (n in e) i ? delete this.metaData[n] : this.metaData[n] = e[n];
									for (t in s.cachedChannels) !s.cachedChannels.hasOwnProperty(t) || (r = s.cachedChannels[t]).memberMap.hasOwnProperty(this.userId) && (r.memberMap[this.userId].metaData = this.metaData)
								}
							}, {
								key: "serialize",
								value: function() {
									return ye.serialize(this, (function(e) {
										e.hasOwnProperty("_preferredLanguages") && (e.preferredLanguages = e._preferredLanguages, delete e._preferredLanguages)
									}))
								}
							}, {
								key: "getOriginalProfileUrl",
								value: function() {
									var e = "";
									return (-1 < (e = (e = -1 < this.plainProfileUrl.indexOf("://") ? this.plainProfileUrl.split("/")[2] : this.plainProfileUrl.split("/")[0]).split("?")[0]).indexOf("sendbird.com") || -1 < e.indexOf("intoz.com") || -1 < e.indexOf("file-local")) && -1 < this.plainProfileUrl.indexOf(e + "/profile_images/") ? (e = this.plainProfileUrl.replace("profile_images/", "")) === this.plainProfileUrl ? "" : e : ""
								}
							}, {
								key: "createMetaData",
								value: function(e, n) {
									var t = this,
										r = C(ie.parse(arguments, [new ie({
											type: "object",
											constraint: function(e) {
												return 0 < Object.keys(e).length && !Array.isArray(e)
											}
										}), new ie({
											type: "callback"
										})]), 3),
										i = r[0];
									return e = r[1], n = r[2], ge(this._iid, (function(n) {
										i ? n(i, null) : O.get(t._iid).container.apiClient.createUserMetaData({
											metaData: e
										}, (function(e, r) {
											e || t._updateMetaData(r), n(e, r)
										}))
									}), n)
								}
							}, {
								key: "updateMetaData",
								value: function(e, n, t) {
									var r = this,
										i = C(ie.parse(arguments, [new ie({
											type: "object",
											constraint: function(e) {
												return !Array.isArray(e) && 0 < Object.keys(e).length && Object.keys(e).map((function(n) {
													return e[n]
												})).every((function(e) {
													return "string" == typeof e
												}))
											}
										}), new ie({
											type: "boolean",
											optional: !0,
											defaultValue: !1
										}), new ie({
											type: "callback"
										})]), 4),
										s = i[0];
									return e = i[1], n = i[2], t = i[3], ge(this._iid, (function(t) {
										s ? t(s, null) : O.get(r._iid).container.apiClient.updateUserMetaData({
											metaData: e,
											upsert: n
										}, (function(e, n) {
											e || r._updateMetaData(n), t(e, n)
										}))
									}), t)
								}
							}, {
								key: "deleteMetaData",
								value: function(e, n) {
									var t = this,
										r = C(ie.parse(arguments, [new ie({
											type: "string",
											constraint: function(e) {
												return 0 < e.length
											}
										}), new ie({
											type: "callback"
										})]), 3),
										i = r[0];
									return e = r[1], n = r[2], ge(this._iid, (function(n) {
										var r;
										i ? n(i, null) : ((r = {})[e] = "", O.get(t._iid).container.apiClient.deleteUserMetaData({
											metaDataKey: e
										}, (function(e, i) {
											e || t._updateMetaData(r, !0), n(e, i)
										})))
									}), n)
								}
							}, {
								key: "deleteAllMetaData",
								value: function(e) {
									var n = this;
									return ge(this._iid, (function(e) {
										var t = n.metaData;
										O.get(n._iid).container.apiClient.deleteAllUserMetaData({}, (function(r, i) {
											r || n._updateMetaData(t, !0), e(r, i)
										}))
									}), e)
								}
							}], [{
								key: "objectify",
								value: function(e) {
									var n, t, r, i, s;
									return {
										user_id: void 0 === (r = e.userId) ? null : r,
										nickname: void 0 === (n = e.nickname) ? "" : n,
										profile_url: void 0 === (s = e.plainProfileUrl) ? "" : s,
										is_online: void 0 === (t = e.connectionStatus) ? "" : t,
										last_seen_at: void 0 === (i = e.lastSeenAt) ? 0 : i,
										metadata: n = void 0 === (r = e.metaData) ? {} : r,
										is_active: t = void 0 === (s = e.isActive) || s,
										friend_discovery_key: r = void 0 === (i = e.friendDiscoveryKey) ? null : i,
										friend_name: i = void 0 === (s = e.friendName) ? null : s,
										preferred_languages: s = void 0 === (s = e.preferredLanguages) ? null : s,
										require_auth_for_profile_image: void 0 !== (e = e.requireAuth) && e
									}
								}
							}, {
								key: "build",
								value: function(e, n, t, r, i, s, a, o, l, u, c) {
									return this.objectify({
										userId: e,
										nickname: n,
										plainProfileUrl: t,
										connectionStatus: r,
										lastSeenAt: i,
										metaData: s,
										isActive: a,
										friendDiscoveryKey: o,
										friendName: l,
										preferredLanguages: u,
										requireAuth: c
									})
								}
							}, {
								key: "buildFromSerializedData",
								value: function(e) {
									var n = M.get(this._iid).User;
									return e = ye.deserialize(e), new n(n.objectify(e))
								}
							}, {
								key: "NON_AVAILABLE",
								get: function() {
									return "nonavailable"
								}
							}, {
								key: "ONLINE",
								get: function() {
									return "online"
								}
							}, {
								key: "OFFLINE",
								get: function() {
									return "offline"
								}
							}]), e
						}(),
						be = {
							TIMESTAMP: "timestamp",
							MESSAGE_ID: "messageId"
						},
						Ae = new WeakMap,
						Ue = function() {
							function e(n) {
								o(this, e), this.url = "", this.channelType = e.CHANNEL_TYPE_BASE, this.name = "", this.coverUrl = "", this.creator = null, this.createdAt = 0, this.data = null, this.customType = null, this.isFrozen = !1, this.isEphemeral = !1, Ae.set(this, {}), n && this.__update(n)
							}
							return u(e, [{
								key: "__update",
								value: function(e) {
									this.url = e.hasOwnProperty("channel_url") ? String(e.channel_url) : "", this.name = e.hasOwnProperty("name") ? String(e.name) : "", this.coverUrl = e.hasOwnProperty("cover_url") ? String(e.cover_url) : "", this.createdAt = e.hasOwnProperty("created_at") ? 1e3 * e.created_at : 0, this.data = e.hasOwnProperty("data") ? String(e.data) : "", this.customType = e.hasOwnProperty("custom_type") ? e.custom_type : "", this.isFrozen = !!e.hasOwnProperty("freeze") && e.freeze, this.isEphemeral = !!e.hasOwnProperty("is_ephemeral") && e.is_ephemeral, e.hasOwnProperty("created_by") && null !== e.created_by && "object" === a(e.created_by) && 0 < Object.keys(e.created_by).length ? this.creator = new Ce(e.created_by) : this.creator = null, e.hasOwnProperty("metadata") && null !== e.metadata && e.hasOwnProperty("ts") && "number" == typeof e.ts && this._refreshMetaData(e.metadata, e.ts)
								}
							}, {
								key: "_addOrUpdateCachedMetaData",
								value: function(e, n) {
									var t = Ae.get(this);
									Object.keys(e).forEach((function(r) {
										var i = t[r],
											s = e[r];
										i ? n > i.updatedAt && (i.value = s, i.updatedAt = n, i.isRemoved = !1) : t[r] = {
											value: s,
											updatedAt: n,
											isRemoved: !1
										}
									}))
								}
							}, {
								key: "_markAsDeletedCachedMetaData",
								value: function(e, n) {
									var t = Ae.get(this);
									e.forEach((function(e) {
										var r = t[e];
										r ? n > r.updatedAt && (r.isRemoved = !0, r.updatedAt = n) : t[e] = {
											value: null,
											updatedAt: n,
											isRemoved: !0
										}
									}))
								}
							}, {
								key: "_refreshMetaData",
								value: function(e, n) {
									var t = {};
									Object.keys(e).forEach((function(r) {
										t[r] = {
											value: e[r],
											updatedAt: n,
											isRemoved: !1
										}
									})), Ae.set(this, t)
								}
							}, {
								key: "isGroupChannel",
								value: function() {
									var e = M.get(this._iid).BaseChannel;
									return this.channelType === e.CHANNEL_TYPE_GROUP
								}
							}, {
								key: "isOpenChannel",
								value: function() {
									var e = M.get(this._iid).BaseChannel;
									return this.channelType === e.CHANNEL_TYPE_OPEN
								}
							}, {
								key: "createOperatorListQuery",
								value: function() {
									return new(M.get(this._iid).OperatorListQuery)(this)
								}
							}, {
								key: "createMessageListQuery",
								value: function() {
									return new(M.get(this._iid).MessageListQuery)(this)
								}
							}, {
								key: "createPreviousMessageListQuery",
								value: function() {
									return new(M.get(this._iid).PreviousMessageListQuery)(this)
								}
							}, {
								key: "serialize",
								value: function() {
									return ye.serialize(this, (function(e) {
										var n;
										null === e.lastMessage || "object" !== a(e.lastMessage) || (n = e.lastMessage).hasOwnProperty("_sender") && (n.sender = n._sender, delete n._sender, e.lastMessage = n), e.hasOwnProperty("_messageOffsetTimestamp") && (e.messageOffsetTimestamp = e._messageOffsetTimestamp, delete e._messageOffsetTimestamp)
									}))
								}
							}, {
								key: "getMessageChangeLogsByTimestamp",
								value: function(e, n, t, r) {
									var i = this,
										s = C(ie.parse(arguments, [new ie({
											type: "number",
											constraint: function(e) {
												return 0 <= e
											}
										}), new ie({
											type: "boolean",
											optional: !0,
											defaultValue: !1
										}), new ie({
											type: "boolean",
											optional: !0,
											defaultValue: !1
										}), new ie({
											type: "callback"
										})]), 5),
										a = s[0];
									return e = s[1], n = s[2], t = s[3], r = s[4], ge(this._iid, (function(r) {
										a ? r(a, null) : O.get(i._iid).container.apiClient.getMessageChangeLogs({
											channelUrl: i.url,
											ts: e,
											token: null,
											isOpenChannel: i.isOpenChannel(),
											includeMetaArray: n,
											includeReactions: t
										}, (function(e, n) {
											var t, s = null;
											e || (t = M.get(i._iid).BaseChannel, s = {
												updatedMessages: n.updated.map((function(e) {
													return t.buildMessage(e, i)
												})),
												deletedMessageIds: n.deleted.map((function(e) {
													return parseInt(e.message_id)
												})),
												hasMore: n.has_more,
												token: n.next
											}), r(e, s)
										}))
									}), r)
								}
							}, {
								key: "getMessageChangeLogsByToken",
								value: function(e, n, t, r) {
									var i = this,
										s = C(ie.parse(arguments, [new ie({
											type: "string",
											nullable: !0
										}), new ie({
											type: "boolean",
											optional: !0,
											defaultValue: !1
										}), new ie({
											type: "boolean",
											optional: !0,
											defaultValue: !1
										}), new ie({
											type: "callback"
										})]), 5),
										a = s[0];
									return e = s[1], n = s[2], t = s[3], r = s[4], ge(this._iid, (function(r) {
										a ? r(a, null) : O.get(i._iid).container.apiClient.getMessageChangeLogs({
											channelUrl: i.url,
											ts: null,
											token: e,
											isOpenChannel: i.isOpenChannel(),
											includeMetaArray: n,
											includeReactions: t
										}, (function(e, n) {
											var t, s = null;
											e || (t = M.get(i._iid).BaseChannel, s = {
												updatedMessages: n.updated.map((function(e) {
													return t.buildMessage(e, i)
												})),
												deletedMessageIds: n.deleted.map((function(e) {
													return parseInt(e.message_id)
												})),
												hasMore: n.has_more,
												token: n.next
											}), r(e, s)
										}))
									}), r)
								}
							}, {
								key: "getMessageChangeLogsSinceToken",
								value: function(e, n, t) {
									var r = this,
										i = (s = M.get(this._iid)).BaseChannel,
										s = s.MessageChangeLogsParams,
										a = (s = C(ie.parse(arguments, [new ie({
											type: "string",
											nullable: !0
										}), new ie({
											type: s
										}), new ie({
											type: "callback"
										})]), 4))[0];
									return e = s[1], n = s[2], t = s[3], ge(this._iid, (function(t) {
										a ? t(a, null) : O.get(r._iid).container.apiClient.getMessageChangeLogs(d({
											channelUrl: r.url,
											ts: null,
											token: e,
											isOpenChannel: r.isOpenChannel()
										}, n), (function(e, n) {
											var s = null;
											e || (s = {
												updatedMessages: n.updated.map((function(e) {
													return i.buildMessage(e, r)
												})),
												deletedMessageIds: n.deleted.map((function(e) {
													return parseInt(e.message_id)
												})),
												hasMore: n.has_more,
												token: n.next
											}), t(e, s)
										}))
									}), t)
								}
							}, {
								key: "getMessageChangeLogsSinceTimestamp",
								value: function(e, n, t) {
									var r = this,
										i = (s = M.get(this._iid)).BaseChannel,
										s = s.MessageChangeLogsParams,
										a = (s = C(ie.parse(arguments, [new ie({
											type: "number",
											constraint: function(e) {
												return 0 <= e
											}
										}), new ie({
											type: s
										}), new ie({
											type: "callback"
										})]), 4))[0];
									return e = s[1], n = s[2], t = s[3], ge(this._iid, (function(t) {
										a ? t(a, null) : O.get(r._iid).container.apiClient.getMessageChangeLogs(d({
											channelUrl: r.url,
											timestamp: e,
											token: null,
											isOpenChannel: r.isOpenChannel()
										}, n), (function(e, n) {
											var s = null;
											e || (s = {
												updatedMessages: n.updated.map((function(e) {
													return i.buildMessage(e, r)
												})),
												deletedMessageIds: n.deleted.map((function(e) {
													return parseInt(e.message_id)
												})),
												hasMore: n.has_more,
												token: n.next
											}), t(e, s)
										}))
									}), t)
								}
							}, {
								key: "getMyMutedInfo",
								value: function(e) {
									var n = this;
									return ge(this._iid, (function(e) {
										var t = ot.getInstance(n._iid);
										O.get(n._iid).container.apiClient.getMyMutedInfo({
											channelUrl: n.url,
											userId: t.currentUser ? t.currentUser.userId : null,
											isGroupChannel: n.isGroupChannel()
										}, (function(n, t) {
											var r = null;
											n || (r = {
												isMuted: t.is_muted,
												startAt: t.start_at,
												endAt: t.end_at,
												remainingDuration: t.remaining_duration,
												description: t.description
											}), e(n, r)
										}))
									}), e)
								}
							}, {
								key: "_parseMessageListParams",
								value: function(e) {
									for (var n = new(M.get(this._iid).MessageListParams), t = null, r = !1, i = 0, s = 0, a = !1, o = "", l = "", u = null, c = !1, d = !1, h = null, p = arguments.length, f = new Array(1 < p ? p - 1 : 0), _ = 1; _ < p; _++) f[_ - 1] = arguments[_];
									switch (e) {
										case "prev":
											var g = C(ie.parse(f, [new ie({
												type: "number"
											}), new ie({
												type: "boolean"
											}), new ie({
												type: "number"
											}), new ie({
												type: "boolean"
											}), new ie({
												type: "string"
											}), new ie({
												type: "string"
											}), new ie({
												type: "array",
												optional: !0
											}), new ie({
												type: "boolean",
												optional: !0,
												defaultValue: !1
											}), new ie({
												type: "boolean",
												optional: !0,
												defaultValue: !1
											}), new ie({
												type: "callback"
											})]), 11);
											t = g[0], g[1], r = g[2], i = g[3], a = g[4], o = g[5], l = g[6], u = g[7], c = g[8], d = g[9], h = g[10];
											break;
										case "next":
											var y = C(ie.parse(f, [new ie({
												type: "number"
											}), new ie({
												type: "boolean"
											}), new ie({
												type: "number"
											}), new ie({
												type: "boolean"
											}), new ie({
												type: "string"
											}), new ie({
												type: "string"
											}), new ie({
												type: "array",
												optional: !0
											}), new ie({
												type: "boolean",
												optional: !0,
												defaultValue: !1
											}), new ie({
												type: "boolean",
												optional: !0,
												defaultValue: !1
											}), new ie({
												type: "callback"
											})]), 11);
											t = y[0], y[1], r = y[2], s = y[3], a = y[4], o = y[5], l = y[6], u = y[7], c = y[8], d = y[9], h = y[10];
											break;
										case "prevnext":
											t = (y = C(ie.parse(f, [new ie({
												type: "number"
											}), new ie({
												type: "number"
											}), new ie({
												type: "number"
											}), new ie({
												type: "boolean"
											}), new ie({
												type: "string"
											}), new ie({
												type: "string"
											}), new ie({
												type: "array",
												optional: !0
											}), new ie({
												type: "boolean",
												optional: !0,
												defaultValue: !1
											}), new ie({
												type: "boolean",
												optional: !0,
												defaultValue: !1
											}), new ie({
												type: "callback"
											})]), 11))[0], y[1], i = y[2], s = y[3], a = y[4], o = y[5], l = y[6], u = y[7], c = y[8], d = y[9], h = y[10], r = !0
									}
									return t ? [null, h] : (n.isInclusive = r, n.prevResultSize = i, n.nextResultSize = s, n.reverse = a, n.messageType = o, n.customType = l, "" === n.customType && (n.customType = "*"), n.senderUserIds = u, n.includeMetaArray = c, n.includeReactions = d, [n, h])
								}
							}, {
								key: "_getMessageList",
								value: function(e, n, t, r) {
									var i = this,
										s = M.get(this._iid).MessageListParams,
										a = (s = C(ie.parse(arguments, [new ie({
											type: "number"
										}), new ie({
											type: "string",
											constraint: function(e) {
												return Object.values(be).includes(e)
											}
										}), new ie({
											type: s,
											constraint: function(e) {
												return e._validate()
											}
										}), new ie({
											type: "callback"
										})]), 5))[0];
									return e = s[1], n = s[2], t = s[3], r = s[4], ge(this._iid, (function(r) {
										a ? r(a, null) : O.get(i._iid).container.apiClient.getMessageList(d(d({
											channel: i,
											token: e,
											tokenType: n
										}, t), {}, {
											shouldReverse: t.reverse
										}), (function(e, n) {
											var t;
											e ? r(e, null) : (t = M.get(i._iid).BaseChannel, n = n.messages.map((function(e) {
												return t.buildMessage(e, i)
											})).filter((function(e) {
												return null !== e
											})), r(null, n))
										}))
									}), r)
								}
							}, {
								key: "getPreviousMessagesByTimestamp",
								value: function(e) {
									var n = (t = C(this._parseMessageListParams.apply(this, ["prev"].concat(b(ie.toArray(arguments)))), 2))[0],
										t = t[1];
									return this._getMessageList(e, be.TIMESTAMP, n, t)
								}
							}, {
								key: "getNextMessagesByTimestamp",
								value: function(e) {
									var n = (t = C(this._parseMessageListParams.apply(this, ["next"].concat(b(ie.toArray(arguments)))), 2))[0],
										t = t[1];
									return this._getMessageList(e, be.TIMESTAMP, n, t)
								}
							}, {
								key: "getPreviousAndNextMessagesByTimestamp",
								value: function(e) {
									var n = (t = C(this._parseMessageListParams.apply(this, ["prevnext"].concat(b(ie.toArray(arguments)))), 2))[0],
										t = t[1];
									return this._getMessageList(e, be.TIMESTAMP, n, t)
								}
							}, {
								key: "getPreviousMessagesByID",
								value: function(e) {
									var n = (t = C(this._parseMessageListParams.apply(this, ["prev"].concat(b(ie.toArray(arguments)))), 2))[0],
										t = t[1];
									return this._getMessageList(e, be.MESSAGE_ID, n, t)
								}
							}, {
								key: "getNextMessagesByID",
								value: function(e) {
									var n = (t = C(this._parseMessageListParams.apply(this, ["next"].concat(b(ie.toArray(arguments)))), 2))[0],
										t = t[1];
									return this._getMessageList(e, be.MESSAGE_ID, n, t)
								}
							}, {
								key: "getPreviousAndNextMessagesByID",
								value: function(e) {
									var n = (t = C(this._parseMessageListParams.apply(this, ["prevnext"].concat(b(ie.toArray(arguments)))), 2))[0],
										t = t[1];
									return this._getMessageList(e, be.MESSAGE_ID, n, t)
								}
							}, {
								key: "getMessagesByTimestamp",
								value: function(e, n, t) {
									return this._getMessageList(e, be.TIMESTAMP, n, t)
								}
							}, {
								key: "getMessagesByMessageId",
								value: function(e, n, t) {
									return this._getMessageList(e, be.MESSAGE_ID, n, t)
								}
							}, {
								key: "_sendUserMessage",
								value: function(e) {
									var n = this,
										t = e.reqId,
										r = e.message,
										i = e.data,
										s = e.customType,
										a = e.metaArrays,
										o = e.mentionType,
										l = e.mentionedUserIds,
										u = e.pushNotificationDeliveryOption,
										c = e.rootMessageId,
										d = e.parentMessageId,
										h = e.translationTargetLanguages,
										p = e.appleCriticalAlertOptions,
										f = void 0 !== (C = e.silent) && C,
										_ = e.callback,
										g = M.get(this._iid),
										y = g.Command,
										m = g.UserMessage,
										v = (t = t || y.generateRequestId(), ot.getInstance(this._iid)),
										E = {};
									Array.isArray(h) && h.forEach((function(e) {
										return E[e] = ""
									}));
									var C, b = m.objectify({
										messageId: 0,
										reqId: t,
										user: v.currentUser || {},
										channel: this,
										message: r,
										data: i,
										customType: s,
										appleCriticalAlertOptions: p,
										metaArrays: a,
										mentionType: o,
										mentionedUserIds: l,
										rootMessageId: c,
										parentMessageId: d,
										translations: E,
										silent: f,
										createdAt: (new Date).getTime()
									});
									if ((C = new m(b)).requestState = v.MessageRequestState.PENDING, C.sendingStatus = v.MessageSendingStatus.PENDING, C.requestedMentionUserIds = l, !v.currentUser) return e = new R("Connection should be made first.", R.CONNECTION_REQUIRED), (g = new m(b)).requestState = v.MessageRequestState.FAILED, g.sendingStatus = v.MessageSendingStatus.FAILED, g.requestedMentionUserIds = l, g.errorCode = e.code, _(e, g), C;
									var A = y.bMessage({
										channelUrl: this.url,
										message: r,
										data: i,
										customType: s,
										metaArrays: a,
										mentionType: o,
										mentionedUserIds: l,
										requestId: t,
										rootMessageId: c,
										parentMessageId: d,
										silent: f,
										translationTargetLanguages: h,
										pushNotificationDeliveryOption: u,
										appleCriticalAlertOptions: p
									});
									return C.reqId = A.requestId, this.isGroupChannel() && v.getConnectionState() !== v.ConnectionState.OPEN && v.currentUser && !v.connecting && !v.reconnecting && "string" == typeof s && 0 === s.indexOf("SB_VIDEOCHAT") ? O.get(v._iid).container.apiClient.sendUserMessage({
										channelUrl: this.url,
										isOpenChannel: this.isOpenChannel(),
										message: r,
										data: i,
										customType: s,
										translationTargetLanguages: h,
										metaArrays: a,
										mentionType: o,
										mentionedUserIds: l,
										pushNotificationDeliveryOption: u,
										rootMessageId: c,
										parentMessageId: d,
										appleCriticalAlertOptions: p
									}, (function(e, n) {
										var t = null;
										e ? ((t = new m(b)).requestState = v.MessageRequestState.FAILED, t.sendingStatus = v.MessageSendingStatus.FAILED, e.code === R.REQUEST_CANCELED && (t.sendingStatus = v.MessageSendingStatus.CANCELED), t.requestedMentionUserIds = l, t.errorCode = e.code) : ((t = new m(n)).requestState = v.MessageRequestState.SUCCEEDED, t.sendingStatus = v.MessageSendingStatus.SUCCEEDED), _(e, t)
									})) : v.sendCommand(A, (function(e, t) {
										var r;
										if (v.getErrorFirstCallback() && (t = (r = [e, t])[0], e = r[1]), t) {
											var i = new m(b);
											i.reqId = A.requestId, i.requestState = v.MessageRequestState.FAILED, i.sendingStatus = v.MessageSendingStatus.FAILED, t.code === R.REQUEST_CANCELED && (i.sendingStatus = v.MessageSendingStatus.CANCELED), i.requestedMentionUserIds = l, i.errorCode = t.code, _(new R(t.message, t.code), i)
										} else {
											if (i = new m(e.getJsonElement()), (e = v.currentUser) && i._sender && e.userId === i._sender.userId && (e.nickname !== i._sender.nickname && (e.nickname = i._sender.nickname), e.plainProfileUrl !== i._sender.plainProfileUrl && (e.plainProfileUrl = i._sender.plainProfileUrl), V.deepEqual(e.metaData, i._sender.metaData) || (e.metaData = i._sender.metaData)), n.isGroupChannel())
												for (var s in n.lastMessage = i, v.channelHandlers) v.channelHandlers[s].onChannelChanged(n);
											i.requestState = v.MessageRequestState.SUCCEEDED, i.sendingStatus = v.MessageSendingStatus.SUCCEEDED, _(null, i)
										}
									})), C
								}
							}, {
								key: "sendUserMessage",
								value: function() {
									var e = ie.toArray(arguments),
										n = e.pop(),
										t = null,
										r = null,
										i = M.get(this._iid).UserMessageParams;
									if ("function" == typeof n)
										if (e[0] instanceof i) null === (r = e[0]).data && (r.data = ""), null === r.customType && (r.customType = "");
										else if ("string" == typeof e[0]) switch ((r = new i).message = e[0], e.length) {
										case 1:
											break;
										case 2:
											r.data = e[1] || "";
											break;
										case 3:
											r.data = e[1] || "", r.customType = e[2] || "";
											break;
										case 4:
											r.data = e[1] || "", r.customType = e[2] || "", r.translationTargetLanguages = Array.isArray(e[3]) ? e[3] : [e[3]];
											break;
										default:
											t = ie.error
									} else t = ie.error;
									else t = ie.error;
									var s = O.get(this._iid).container.isErrorFirstInCallback;
									return !t && r._validate() && r.message ? this._sendUserMessage(d(d({}, r), {}, {
										metaArrays: r.metaArrays,
										mentionType: r.mentionType,
										mentionedUserIds: r._mentionedUserIds,
										rootMessageId: r.rootMessageId,
										parentMessageId: r.parentMessageId,
										translationTargetLanguages: r._translationTargetLanguages,
										callback: function(e, t) {
											s ? n(e, t) : n(t, e)
										}
									})) : (s ? n(ie.error, null) : n(null, ie.error), null)
								}
							}, {
								key: "resendUserMessage",
								value: function(e, n) {
									var t = this,
										r = M.get(this._iid),
										i = r.UserMessage,
										s = r.UserMessageParams,
										o = null;
									return o = (i = C(ie.parse(arguments, [new ie({
										type: i,
										constraint: function(e) {
											return 0 === e.messageId && e.isResendable() && e.reqId && e.channelUrl === t.url && "string" == typeof e.message && "string" == typeof e.data && "string" == typeof e.customType && "object" === a(e.translations) && !Array.isArray(e.translations)
										}
									}), new ie({
										type: "callback"
									})]), 3))[0], e = i[1], n = i[2], ge(this._iid, (function(n) {
										var r, i;
										o ? (o.message += " Please check if the failed message is resend-able with `message.isResendable().`", n(o, null)) : (r = Object.keys(e.translations), i = s.PushNotificationDeliveryOption.DEFAULT, t._sendUserMessage(d(d({}, e), {}, {
											mentionedUserIds: e.requestedMentionUserIds,
											translationTargetLanguages: r,
											pushNotificationDeliveryOption: i,
											reqId: e.reqId,
											callback: n
										})))
									}), n)
								}
							}, {
								key: "updateUserMessage",
								value: function(e, n, t, r, i) {
									var s = this,
										a = M.get(this._iid),
										o = a.Command,
										l = a.UserMessage,
										u = a.UserMessageParams,
										c = arguments,
										h = null,
										p = null;
									if ("number" == typeof e) switch (c.length) {
										case 3:
											var f = C(ie.parse(c, [new ie({
												type: "number"
											}), new ie({
												type: u
											}), new ie({
												type: "callback"
											})]), 4);
											h = f[0], e = f[1], p = f[2], i = f[3];
											break;
										case 5:
											p = new u, f = C(ie.parse(c, [new ie({
												type: "number"
											}), new ie({
												type: "string",
												nullable: !0
											}), new ie({
												type: "string",
												nullable: !0
											}), new ie({
												type: "string",
												nullable: !0
											}), new ie({
												type: "callback"
											})]), 6), h = f[0], e = f[1], n = f[2], t = f[3], r = f[4], i = f[5], p.message = n, p.data = t, p.customType = r
									}
									return ge(this._iid, (function(n) {
										var t, r;
										!h && p && p._validate() ? (t = o.bUpdateUserMessage(d(d({
											channelUrl: s.url,
											messageId: e
										}, p), {}, {
											mentionType: p._mentionType,
											mentionedUserIds: p._mentionedUserIds
										})), (r = ot.getInstance(s._iid)).sendCommand(t, (function(e, t) {
											r.getErrorFirstCallback() && (t = (i = [e, t])[0], e = i[1]);
											var i = null;
											t || (i = new l(e.getJsonElement())), n(t, i)
										}))) : n(ie.error, null)
									}), i)
								}
							}, {
								key: "translateUserMessage",
								value: function(e, n, t) {
									var r = this,
										i = ot.getInstance(this._iid),
										s = M.get(this._iid).UserMessage,
										a = C(ie.parse(arguments, [new ie({
											type: s,
											constraint: function(e) {
												return e.channelUrl === r.url && e.sendingStatus === i.MessageSendingStatus.SUCCEEDED
											}
										}), new ie({
											type: "array",
											constraint: function(e) {
												return e.every((function(e) {
													return "string" == typeof e
												}))
											}
										}), new ie({
											type: "callback"
										})]), 4),
										o = a[0];
									return e = a[1], n = a[2], t = a[3], ge(this._iid, (function(t) {
										o ? t(o, null) : O.get(r._iid).container.apiClient.translateUserMessage({
											channelUrl: r.url,
											isOpenChannel: r.isOpenChannel(),
											messageId: e.messageId,
											translationTargetLanguages: n
										}, (function(e, n) {
											var r = null;
											e || (r = new s(n)), t(e, r)
										}))
									}), t)
								}
							}, {
								key: "_parseFileMessageArguments",
								value: function(e) {
									var n = (t = M.get(this._iid)).BaseMessageParams,
										t = t.FileMessageParams,
										r = {
											error: null,
											file: null,
											name: null,
											type: null,
											size: null,
											data: "",
											customType: "",
											thumbnailSizes: [],
											metaArrays: [],
											mentionType: n.MentionType.USERS,
											mentionedUserIds: [],
											pushNotificationDeliveryOption: t.PushNotificationDeliveryOption.DEFAULT,
											rootMessageId: null,
											parentMessageId: null,
											progressHandler: null,
											silent: !1,
											callback: null,
											appleCriticalAlertOptions: null
										};
									if ("function" == typeof e[e.length - 1] && (r.callback = e.pop()), "function" == typeof e[e.length - 1] && (r.progressHandler = e.pop()), e[0] instanceof t) r.file = e[0].file || e[0].fileUrl, r.name = e[0].fileName, r.type = e[0].mimeType, r.size = e[0].fileSize, r.data = e[0].data, r.customType = e[0].customType, r.thumbnailSizes = e[0].thumbnailSizes, r.metaArrays = e[0].metaArrays, r.mentionType = e[0]._mentionType, r.mentionedUserIds = e[0]._mentionedUserIds, r.pushNotificationDeliveryOption = e[0].pushNotificationDeliveryOption || t.PushNotificationDeliveryOption.DEFAULT, r.rootMessageId = e[0].rootMessageId, r.parentMessageId = e[0].parentMessageId, r.silent = e[0].silent, e[0]._validate() || (r.error = ie.error), r.appleCriticalAlertOptions = e[0].appleCriticalAlertOptions;
									else if (V.isFile(e[0]) || "string" == typeof e[0]) {
										switch (r.file = e[0], e.length) {
											case 1:
												break;
											case 2:
												r.data = e[1];
												break;
											case 3:
												r.data = e[1], r.customType = e[2];
												break;
											case 4:
												r.data = e[1], r.customType = e[2], r.thumbnailSizes = e[3];
												break;
											case 5:
												r.name = e[1], r.type = e[2], r.size = e[3], r.data = e[4];
												break;
											case 6:
												r.name = e[1], r.type = e[2], r.size = e[3], r.data = e[4], r.customType = e[5];
												break;
											case 7:
												r.name = e[1], r.type = e[2], r.size = e[3], r.data = e[4], r.customType = e[5], r.thumbnailSizes = e[6]
										}
										t = C(ie.parse([r.file, r.name, r.type, r.size, r.data, r.customType, r.thumbnailSizes], [new ie({
											type: ["file", "string"]
										}), new ie({
											type: "string",
											nullable: !0
										}), new ie({
											type: "string",
											nullable: !0
										}), new ie({
											type: "number",
											nullable: !0,
											constraint: function(e) {
												return 0 <= e
											}
										}), new ie({
											type: "string",
											nullable: !0
										}), new ie({
											type: "string",
											nullable: !0
										}), new ie({
											type: "array"
										})]), 8), r.error = t[0], r.file = t[1], r.name = t[2], r.type = t[3], r.size = t[4], r.data = t[5], r.customType = t[6], r.thumbnailSizes = t[7]
									} else r.error = ie.error;
									return V.isFile(r.file) && (r.name = r.name || r.file.name, r.type = r.type || r.file.type, r.size = r.size || r.file.size), r
								}
							}, {
								key: "_createTempFileMessage",
								value: function(e) {
									try {
										var n, t = ot.getInstance(this._iid),
											r = (n = M.get(this._iid)).Command;
										return t = (n = n.FileMessage).objectify(d(d({}, e), {}, {
											messageId: 0,
											reqId: r.generateRequestId(),
											user: t.currentUser || {},
											channel: this,
											plainUrl: "string" == typeof e.file ? e.file : "",
											thumbnails: e.thumbnailSizes.map((function(e) {
												return {
													url: "",
													plainUrl: "",
													width: e.maxWidth,
													height: e.maxHeight,
													real_width: 0,
													real_height: 0
												}
											})),
											sendingStatus: t.MessageSendingStatus.PENDING,
											createdAt: (new Date).getTime()
										})), new n(t)
									} catch (e) {
										return null
									}
								}
							}, {
								key: "sendFileMessage",
								value: function() {
									var e = this._parseFileMessageArguments(ie.toArray(arguments)),
										n = null,
										t = M.get(this._iid).Command.generateRequestId();
									e.error || ((n = this._createTempFileMessage(e)).requestedMentionUserIds = e.mentionedUserIds, t = n.reqId);
									var r = ot.getInstance(this._iid);
									return r && r.currentUser || (e.error = new R("Connection should be made first.", R.CONNECTION_REQUIRED)), (r = M.get(this._iid).FileMessageQueue).create(this).addJob(new r.Job({
										fileInfo: e,
										pendingMessage: n,
										requestId: t,
										error: e.error,
										response: null
									})), n
								}
							}, {
								key: "sendFileMessages",
								value: function(e) {
									var n = this,
										t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
										r = t.progress || function() {},
										i = t.sent || function() {},
										s = t.complete || function() {};
									if (Array.isArray(e) && 0 < e.length && e.length <= 20) {
										var a = [];
										return e.forEach((function(t, o) {
											a.push(n.sendFileMessage(t, r, (function(n, t) {
												i(n, t), o === e.length - 1 && s(null)
											})))
										})), a
									}
									return s(ie.error), null
								}
							}, {
								key: "resendFileMessage",
								value: function(e, n, t) {
									var r = this,
										i = M.get(this._iid),
										s = i.FileMessage,
										a = i.FileMessageParams,
										o = null;
									return o = (s = C(ie.parse(arguments, [new ie({
										type: s,
										constraint: function(e) {
											return 0 === e.messageId && e.isResendable() && e.reqId && e.channelUrl === r.url && "string" == typeof e.data && "string" == typeof e.customType && Array.isArray(e.thumbnails)
										}
									}), new ie({
										type: "file",
										optionalIf: function(e) {
											return !!e[0].url
										},
										defaultValue: null
									}), new ie({
										type: "callback"
									})]), 4))[0], e = s[1], n = s[2], t = s[3], ge(this._iid, (function(t) {
										var i;
										o ? (o.message += " Please check if the failed message is resend-able with `message.isResendable().`", t(o, null)) : (i = new a, e.url ? i.fileUrl = e.url : i.file = n, i.fileName = e.name, i.fileSize = e.size, i.mimeType = e.type, i.data = e.data, i.customType = e.customType, i.mentionType = e.mentionType, i.mentionedUserIds = e.requestedMentionUserIds, i.metaArrays = e.metaArrays, i.thumbnailSizes = e.thumbnails.map((function(e) {
											return {
												maxWidth: e.width,
												maxHeight: e.height
											}
										})), i.appleCriticalAlertOptions = e.appleCriticalAlertOptions, r.sendFileMessage(i, t))
									}), t)
								}
							}, {
								key: "updateFileMessage",
								value: function(e, n, t, r) {
									var i = this,
										s = M.get(this._iid),
										a = s.Command,
										o = s.FileMessage,
										l = s.FileMessageParams,
										u = arguments,
										c = null,
										h = null;
									if ("number" == typeof e) switch (u.length) {
										case 3:
											var p = C(ie.parse(u, [new ie({
												type: "number"
											}), new ie({
												type: l
											}), new ie({
												type: "callback"
											})]), 4);
											c = p[0], e = p[1], h = p[2], r = p[3], h && (h._isUpdate = !0);
											break;
										case 4:
											h = new l, p = C(ie.parse(u, [new ie({
												type: "number"
											}), new ie({
												type: "string",
												nullable: !0
											}), new ie({
												type: "string",
												nullable: !0
											}), new ie({
												type: "callback"
											})]), 5), c = p[0], e = p[1], n = p[2], t = p[3], r = p[4], h.data = n, h.customType = t, h._isUpdate = !0
									}
									return ge(this._iid, (function(n) {
										var t, r;
										!c && h && h._validate() ? (t = a.bUpdateFileMessage(d(d({
											channelUrl: i.url,
											messageId: e
										}, h), {}, {
											mentionType: h._mentionType,
											mentionedUserIds: h._mentionedUserIds
										})), (r = ot.getInstance(i._iid)).sendCommand(t, (function(e, t) {
											r.getErrorFirstCallback() && (t = (i = [e, t])[0], e = i[1]);
											var i = null;
											t || (i = new o(e.getJsonElement())), n(t, i)
										}))) : n(ie.error, null)
									}), r)
								}
							}, {
								key: "cancelUploadingFileMessage",
								value: function(e, n) {
									var t = C(ie.parse(arguments, [new ie({
											type: ["number", "string"]
										}), new ie({
											type: "callback"
										})]), 3),
										r = t[0];
									e = t[1], n = t[2];
									var i = O.get(this._iid).container.isErrorFirstInCallback;
									return r ? (i ? n(r, null) : n(null, r), !1) : M.get(this._iid).FileMessageQueue.create(this).cancelUploadItemByRequestId(e, (function(e, t) {
										return i ? n(e, t) : n(t, e)
									}))
								}
							}, {
								key: "addReaction",
								value: function(e, n, t) {
									var r = this,
										i = ot.getInstance(this._iid),
										s = M.get(this._iid).ReactionEvent,
										a = C(ie.parse(arguments, [new ie({
											type: Ee
										}), new ie({
											type: "string",
											constraint: function(e) {
												return 0 < e.length
											}
										}), new ie({
											type: "callback"
										})]), 4),
										o = a[0];
									return e = a[1], n = a[2], t = a[3], ge(this._iid, (function(t) {
										o ? t(o, null) : e.sendingStatus === i.MessageSendingStatus.SUCCEEDED ? O.get(r._iid).container.apiClient.addReaction({
											isGroupChannel: e.isGroupChannel(),
											channelUrl: e.channelUrl,
											messageId: e.messageId,
											key: n
										}, (function(n, r) {
											var i = null;
											n || (i = s.createFromJson(d(d({}, r), {}, {
												msg_id: e.messageId
											}))), t(n, i)
										})) : t(new R("Cannot add reaction to a non-succeeded message.", R.REQUEST_FAILED), null)
									}), t)
								}
							}, {
								key: "deleteReaction",
								value: function(e, n, t) {
									var r = this,
										i = ot.getInstance(this._iid),
										s = M.get(this._iid).ReactionEvent,
										a = C(ie.parse(arguments, [new ie({
											type: Ee
										}), new ie({
											type: "string",
											constraint: function(e) {
												return 0 < e.length
											}
										}), new ie({
											type: "callback"
										})]), 4),
										o = a[0];
									return e = a[1], n = a[2], t = a[3], ge(this._iid, (function(t) {
										o ? t(o, null) : e.sendingStatus === i.MessageSendingStatus.SUCCEEDED ? O.get(r._iid).container.apiClient.deleteReaction({
											isGroupChannel: e.isGroupChannel(),
											channelUrl: e.channelUrl,
											messageId: e.messageId,
											key: n
										}, (function(n, r) {
											var i = null;
											n || (i = s.createFromJson(d(d({}, r), {}, {
												msg_id: e.messageId
											}))), t(n, i)
										})) : t(new R("Cannot remove reaction to a non-succeeded message.", R.REQUEST_FAILED), null)
									}), t)
								}
							}, {
								key: "deleteMessage",
								value: function(e, n) {
									var t = this,
										r = C(ie.parse(arguments, [new ie({
											type: "object",
											constraint: function(e) {
												return !Array.isArray(e) && null !== e && e.hasOwnProperty("messageId")
											}
										}), new ie({
											type: "callback"
										})]), 3),
										i = r[0];
									return e = r[1], n = r[2], ge(this._iid, (function(n) {
										i ? n(i, null) : O.get(t._iid).container.apiClient.deleteMessage({
											channelUrl: t.url,
											isOpenChannel: t.isOpenChannel(),
											messageId: e.messageId
										}, (function(e, t) {
											return n(e, null)
										}))
									}), n)
								}
							}, {
								key: "copyUserMessage",
								value: function(n, t, r) {
									var i = ((a = M.get(this._iid)).Command, a.UserMessage),
										s = a.BaseMessageParams,
										a = (i = C(ie.parse(arguments, [new ie({
											type: e
										}), new ie({
											type: i
										}), new ie({
											type: "callback"
										})]), 4))[0];
									if (n = i[1], t = i[2], r = i[3], i = O.get(this._iid).container.isErrorFirstInCallback, a) return i ? r(ie.error, null) : r(null, ie.error), null;
									if (this.url !== t.channelUrl) {
										var o = new R("The message does not belong to this channel", R.INVALID_PARAMETER);
										return i ? r(o, null) : r(null, o), null
									}
									var l = {};
									return (o = Object.keys(t.translations)).forEach((function(e) {
										return l[e] = ""
									})), s = s.PushNotificationDeliveryOption.DEFAULT, n._sendUserMessage(d(d({}, t), {}, {
										reqId: null,
										pushNotificationDeliveryOption: s,
										translationTargetLanguages: o,
										rootMessageId: null,
										parentMessageId: null,
										parentMessageText: null,
										callback: r
									}))
								}
							}, {
								key: "copyFileMessage",
								value: function(n, t, r) {
									var i = (N = M.get(this._iid)).Command,
										s = (N.GroupChannel, N.FileMessage),
										a = N.BaseMessageParams,
										o = (N.FileMessageParams, N.User),
										l = (T = C(ie.parse(arguments, [new ie({
											type: e
										}), new ie({
											type: s
										}), new ie({
											type: "callback"
										})]), 4))[0];
									n = T[1], t = T[2], r = T[3];
									var u = O.get(this._iid),
										c = u.container.isErrorFirstInCallback;
									if (l) return c ? r(ie.error, null) : r(null, ie.error), null;
									if (this.url !== t.channelUrl) {
										var d = new R("The message does not belong to this channel");
										return c ? r(d, null) : r(null, d), null
									}
									var h = ot.getInstance(this._iid),
										p = t.url,
										f = t.name,
										_ = t.type,
										g = t.size,
										y = t.data,
										m = t.customType,
										v = t.mentionType,
										E = t.mentionedUserIds,
										b = t.mentionedUsers,
										A = t.metaArrays,
										U = t.thumbnails,
										k = t.requireAuth,
										S = t.messageSurvivalSeconds,
										I = t.silent,
										N = t.appleCriticalAlertOptions,
										T = i.generateRequestId(),
										w = h.currentUser || {},
										L = (l = n.url, d = n.isOpenChannel(), t = b.filter((function(e) {
											return new o(o.objectify(e))
										})), b = a.PushNotificationDeliveryOption.DEFAULT, s.objectify({
											messageId: 0,
											reqId: T,
											user: w,
											channel: n,
											plainUrl: p,
											name: f,
											type: _,
											size: g,
											data: y,
											customType: m,
											mentionType: v,
											mentionedUserIds: E,
											mentionedUsers: t,
											requestedMentionUserIds: E,
											metaArrays: A,
											thumbnails: U,
											requireAuth: k,
											messageSurvivalSeconds: S,
											silent: I,
											createdAt: (new Date).getTime(),
											appleCriticalAlertOptions: N
										}));
									return (a = new s(L)).requestState = h.MessageRequestState.PENDING, a.sendingStatus = h.MessageSendingStatus.PENDING, h.currentUser ? (I = i.bFile({
										requestId: T,
										channelUrl: l,
										url: p,
										name: f,
										type: _,
										size: g,
										data: y,
										customType: m,
										metaArrays: A,
										mentionType: v,
										mentionedUserIds: E,
										thumbnailSizes: U,
										requireAuth: k,
										pushNotificationDeliveryOption: b,
										silent: I,
										appleCriticalAlertOptions: N
									}), h.getConnectionState() === h.ConnectionState.OPEN || h.connecting || h.reconnecting ? h.sendCommand(I, (function(e, t) {
										var i;
										if (h.getErrorFirstCallback() && (t = (i = [e, t])[0], e = i[1]), t) t.code !== R.INVALID_PARAMETER ? ((i = new s(L)).requestState = h.MessageRequestState.FAILED, i.sendingStatus = h.MessageSendingStatus.FAILED, t.code !== R.FILE_UPLOAD_CANCEL_FAILED && t.code !== SendBridException.REQUEST_CANCELED || (i.sendingStatus = h.MessageSendingStatus.CANCELED), i.errorCode = t.code, c ? r(t, i) : r(i, t)) : c ? r(t, null) : r(null, t);
										else {
											if (t = new s(e.getJsonElement()), e = t._sender, w && e && w.userId === e.userId && (w.nickname !== e.nickname && (w.nickname = e.nickname), w.plainProfileUrl !== e.plainProfileUrl && (w.plainProfileUrl = e.plainProfileUrl)), n.isGroupChannel())
												for (var a in n.lastMessage = t, h.channelHandlers) h.channelHandlers[a].onChannelChanged(n);
											c ? r(null, t) : r(t, null)
										}
									})) : u.container.apiClient.sendFileMessage({
										channelUrl: l,
										isOpenChannel: d,
										fileUrl: p,
										fileName: f,
										fileType: _,
										fileSize: g,
										data: y,
										customType: m,
										metaArrays: A,
										mentionType: v,
										mentionedUserIds: E,
										thumbnailSizes: U,
										requireAuth: k,
										pushNotificationDeliveryOption: b,
										appleCriticalAlertOptions: N
									}, (function(e, t) {
										if (e) {
											var i;
											e.code !== R.INVALID_PARAMETER ? ((i = new s(commnad.getJsonElement())).requestState = h.MessageRequestState.FAILED, i.sendingStatus = h.MessageSendingStatus.FAILED, e.code !== R.FILE_UPLOAD_CANCEL_FAILED && e.code !== SendBridException.REQUEST_CANCELED || (i.sendingStatus = h.MessageSendingStatus.CANCELED), i.errorCode = e.code, c ? r(e, i) : r(i, e)) : c ? r(e, null) : r(null, e)
										} else {
											if (t = (e = new s(t))._sender, w && t && w.userId === t.userId && (w.nickname !== t.nickname && (w.nickname = t.nickname), w.plainProfileUrl !== t.plainProfileUrl && (w.plainProfileUrl = t.plainProfileUrl)), n.isGroupChannel())
												for (var a in n.lastMessage = e, h.channelHandlers) h.channelHandlers[a].onChannelChanged(n);
											c ? r(null, e) : r(e, null)
										}
									})), a) : (t = new R("Connection should be made first.", R.CONNECTION_REQUIRED), (S = new s(L)).requestState = h.MessageRequestState.FAILED, S.sendingStatus = h.MessageSendingStatus.FAILED, S.errorCode = t.code, c ? r(t, S) : r(S, t), a)
								}
							}, {
								key: "addOperators",
								value: function(e, n) {
									var t = this,
										r = C(ie.parse(arguments, [new ie({
											type: "array",
											constraint: function(e) {
												return Object.keys(e).map((function(n) {
													return e[n]
												})).every((function(e) {
													return "string" == typeof e
												}))
											}
										}), new ie({
											type: "callback"
										})]), 3),
										i = r[0];
									return e = r[1], n = r[2], ge(this._iid, (function(n) {
										i ? n(i, null) : O.get(t._iid).container.apiClient.addOperators({
											channelUrl: t.url,
											isOpenChannel: t.isOpenChannel(),
											operatorUserIds: e
										}, (function(e, t) {
											return n(e, t)
										}))
									}), n)
								}
							}, {
								key: "removeOperators",
								value: function(e, n) {
									var t = this,
										r = C(ie.parse(arguments, [new ie({
											type: "array",
											constraint: function(e) {
												return Object.keys(e).map((function(n) {
													return e[n]
												})).every((function(e) {
													return "string" == typeof e
												}))
											}
										}), new ie({
											type: "callback"
										})]), 3),
										i = r[0];
									return e = r[1], n = r[2], ge(this._iid, (function(n) {
										i ? n(i, null) : O.get(t._iid).container.apiClient.removeOperators({
											channelUrl: t.url,
											isOpenChannel: t.isOpenChannel(),
											operatorUserIds: e
										}, (function(e, t) {
											return n(e, t)
										}))
									}), n)
								}
							}, {
								key: "getMetaCounters",
								value: function(e, n) {
									var t = this,
										r = C(ie.parse(arguments, [new ie({
											type: "array",
											constraint: function(e) {
												return Object.keys(e).map((function(n) {
													return e[n]
												})).every((function(e) {
													return "string" == typeof e
												}))
											}
										}), new ie({
											type: "callback"
										})]), 3),
										i = r[0];
									return e = r[1], n = r[2], ge(this._iid, (function(n) {
										i ? n(i, null) : O.get(t._iid).container.apiClient.getMetaCounters({
											channelUrl: t.url,
											isOpenChannel: t.isOpenChannel(),
											keys: e
										}, (function(e, t) {
											return n(e, t)
										}))
									}), n)
								}
							}, {
								key: "getAllMetaCounters",
								value: function(e) {
									var n = this;
									return ge(this._iid, (function(e) {
										O.get(n._iid).container.apiClient.getMetaCounters({
											channelUrl: n.url,
											isOpenChannel: n.isOpenChannel(),
											keys: []
										}, (function(n, t) {
											return e(n, t)
										}))
									}), e)
								}
							}, {
								key: "createMetaCounters",
								value: function(e, n) {
									var t = this,
										r = C(ie.parse(arguments, [new ie({
											type: "object",
											constraint: function(e) {
												return e && !Array.isArray(e) && 0 < Object.keys(e).length && Object.keys(e).map((function(n) {
													return e[n]
												})).every((function(e) {
													return "number" == typeof e
												}))
											}
										}), new ie({
											type: "callback"
										})]), 3),
										i = r[0];
									return e = r[1], n = r[2], ge(this._iid, (function(n) {
										i ? n(i, null) : O.get(t._iid).container.apiClient.createMetaCounters({
											channelUrl: t.url,
											isOpenChannel: t.isOpenChannel(),
											metaCounter: e
										}, (function(e, t) {
											return n(e, t)
										}))
									}), n)
								}
							}, {
								key: "updateMetaCounters",
								value: function(e, n, t) {
									var r = this,
										i = C(ie.parse(arguments, [new ie({
											type: "object",
											constraint: function(e) {
												return e && !Array.isArray(e) && 0 < Object.keys(e).length && Object.keys(e).map((function(n) {
													return e[n]
												})).every((function(e) {
													return "number" == typeof e
												}))
											}
										}), new ie({
											type: "boolean",
											optional: !0,
											defaultValue: !1
										}), new ie({
											type: "callback"
										})]), 4),
										s = i[0];
									return e = i[1], n = i[2], t = i[3], ge(this._iid, (function(t) {
										s ? t(s, null) : O.get(r._iid).container.apiClient.updateMetaCounters({
											channelUrl: r.url,
											isOpenChannel: r.isOpenChannel(),
											metaCounter: e,
											upsert: n,
											mode: "set"
										}, (function(e, n) {
											return t(e, n)
										}))
									}), t)
								}
							}, {
								key: "increaseMetaCounters",
								value: function(e, n) {
									var t = this,
										r = C(ie.parse(arguments, [new ie({
											type: "object",
											constraint: function(e) {
												return e && !Array.isArray(e) && 0 < Object.keys(e).length && Object.keys(e).map((function(n) {
													return e[n]
												})).every((function(e) {
													return "number" == typeof e
												}))
											}
										}), new ie({
											type: "callback"
										})]), 3),
										i = r[0];
									return e = r[1], n = r[2], ge(this._iid, (function(n) {
										i ? n(i, null) : O.get(t._iid).container.apiClient.updateMetaCounters({
											channelUrl: t.url,
											isOpenChannel: t.isOpenChannel(),
											metaCounter: e,
											upsert: !1,
											mode: "increase"
										}, (function(e, t) {
											return n(e, t)
										}))
									}), n)
								}
							}, {
								key: "decreaseMetaCounters",
								value: function(e, n) {
									var t = this,
										r = C(ie.parse(arguments, [new ie({
											type: "object",
											constraint: function(e) {
												return e && !Array.isArray(e) && 0 < Object.keys(e).length && Object.keys(e).map((function(n) {
													return e[n]
												})).every((function(e) {
													return "number" == typeof e
												}))
											}
										}), new ie({
											type: "callback"
										})]), 3),
										i = r[0];
									return e = r[1], n = r[2], ge(this._iid, (function(n) {
										i ? n(i, null) : O.get(t._iid).container.apiClient.updateMetaCounters({
											channelUrl: t.url,
											isOpenChannel: t.isOpenChannel(),
											metaCounter: e,
											upsert: !1,
											mode: "decrease"
										}, (function(e, t) {
											var r = null;
											if (!e)
												for (var i in r = {}, t) r[i] = t[i];
											n(e, r)
										}))
									}), n)
								}
							}, {
								key: "deleteMetaCounter",
								value: function(e, n) {
									var t = this,
										r = C(ie.parse(arguments, [new ie({
											type: "string"
										}), new ie({
											type: "callback"
										})]), 3),
										i = r[0];
									return e = r[1], n = r[2], ge(this._iid, (function(n) {
										i ? n(i, null) : O.get(t._iid).container.apiClient.deleteMetaCounter({
											channelUrl: t.url,
											isOpenChannel: t.isOpenChannel(),
											key: e
										}, (function(e, t) {
											return n(e, t)
										}))
									}), n)
								}
							}, {
								key: "deleteAllMetaCounters",
								value: function(e) {
									var n = this;
									return ge(this._iid, (function(e) {
										O.get(n._iid).container.apiClient.deleteAllMetaCounters({
											channelUrl: n.url,
											isOpenChannel: n.isOpenChannel()
										}, (function(n, t) {
											return e(n, t)
										}))
									}), e)
								}
							}, {
								key: "getCachedMetaData",
								value: function() {
									var e = Ae.get(this),
										n = {};
									return Object.keys(e).forEach((function(t) {
										var r = e[t];
										r.isRemoved || (n[t] = r.value)
									})), n
								}
							}, {
								key: "getMetaData",
								value: function(e, n) {
									var t = this,
										r = C(ie.parse(arguments, [new ie({
											type: "array",
											constraint: function(e) {
												return Object.keys(e).map((function(n) {
													return e[n]
												})).every((function(e) {
													return "string" == typeof e
												}))
											}
										}), new ie({
											type: "callback"
										})]), 3),
										i = r[0];
									return e = r[1], n = r[2], ge(this._iid, (function(n) {
										i ? n(i, null) : O.get(t._iid).container.apiClient.getMetaData({
											channelUrl: t.url,
											isOpenChannel: t.isOpenChannel(),
											keys: e
										}, (function(e, t) {
											n(e, t && t.ts ? t.metadata : t)
										}))
									}), n)
								}
							}, {
								key: "getAllMetaData",
								value: function(e) {
									var n = this;
									return ge(this._iid, (function(e) {
										O.get(n._iid).container.apiClient.getMetaData({
											channelUrl: n.url,
											isOpenChannel: n.isOpenChannel(),
											keys: []
										}, (function(n, t) {
											e(n, t && t.ts ? t.metadata : t)
										}))
									}), e)
								}
							}, {
								key: "createMetaData",
								value: function(e, n) {
									var t = this,
										r = C(ie.parse(arguments, [new ie({
											type: "object",
											constraint: function(e) {
												return e && !Array.isArray(e) && 0 < Object.keys(e).length
											}
										}), new ie({
											type: "callback"
										})]), 3),
										i = r[0];
									return e = r[1], n = r[2], ge(this._iid, (function(n) {
										i ? n(i, null) : O.get(t._iid).container.apiClient.createMetaData({
											channelUrl: t.url,
											isOpenChannel: t.isOpenChannel(),
											metaData: e
										}, (function(e, t) {
											n(e, t && t.ts ? t.metadata : t)
										}))
									}), n)
								}
							}, {
								key: "updateMetaData",
								value: function(e, n, t) {
									var r = this,
										i = C(ie.parse(arguments, [new ie({
											type: "object",
											constraint: function(e) {
												return e && !Array.isArray(e) && 0 < Object.keys(e).length
											}
										}), new ie({
											type: "boolean",
											optional: !0,
											defaultValue: !1
										}), new ie({
											type: "callback"
										})]), 4),
										s = i[0];
									return e = i[1], n = i[2], t = i[3], ge(this._iid, (function(t) {
										s ? t(s, null) : O.get(r._iid).container.apiClient.updateMetaData({
											channelUrl: r.url,
											isOpenChannel: r.isOpenChannel(),
											metaData: e,
											upsert: n
										}, (function(e, n) {
											t(e, n && n.ts ? n.metadata : n)
										}))
									}), t)
								}
							}, {
								key: "deleteMetaData",
								value: function(e, n) {
									var t = this,
										r = C(ie.parse(arguments, [new ie({
											type: "string"
										}), new ie({
											type: "callback"
										})]), 3),
										i = r[0];
									return e = r[1], n = r[2], ge(this._iid, (function(n) {
										i ? n(i, null) : O.get(t._iid).container.apiClient.deleteMetaData({
											channelUrl: t.url,
											isOpenChannel: t.isOpenChannel(),
											key: e
										}, (function(e, t) {
											n(e, t && t.ts ? {} : t)
										}))
									}), n)
								}
							}, {
								key: "deleteAllMetaData",
								value: function(e) {
									var n = this;
									return ge(this._iid, (function(e) {
										O.get(n._iid).container.apiClient.deleteAllMetaData({
											channelUrl: n.url,
											isOpenChannel: n.isOpenChannel()
										}, (function(n, t) {
											return e(n, t && t.ts ? {} : t)
										}))
									}), e)
								}
							}, {
								key: "_updateMessageMetaArray",
								value: function(e, n, t, r) {
									var i = this;
									return ge(this._iid, (function(r) {
										var s, a = (c = M.get(i._iid)).Command,
											o = c.UserMessage,
											l = c.FileMessage,
											u = c.AdminMessage,
											c = null;
										n.isUserMessage() ? c = a.bUpdateUserMessage({
											channelUrl: e,
											messageId: n.messageId,
											metaArrayParams: t
										}) : n.isFileMessage() && (c = a.bUpdateFileMessage({
											channelUrl: e,
											messageId: n.messageId,
											metaArrayParams: t
										})), c ? (s = ot.getInstance(i._iid)).sendCommand(c, (function(e, t) {
											s.getErrorFirstCallback() && (t = (i = [e, t])[0], e = i[1]);
											var i = null;
											t || (n.isUserMessage() ? i = new o(e.getJsonElement()) : n.isFileMessage() ? i = new l(e.getJsonElement()) : n.isAdminMessage() && (i = new u(e.getJsonElement()))), r(t, i)
										})) : r(ie.error, null)
									}), r)
								}
							}, {
								key: "createMessageMetaArrayKeys",
								value: function(e, n, t) {
									var r = M.get(this._iid).MessageMetaArray,
										i = C(ie.parse(arguments, [new ie({
											type: Ee
										}), new ie({
											type: "array",
											constraint: function(e) {
												return e.every((function(e) {
													return "string" == typeof e && "" !== e
												}))
											}
										}), new ie({
											type: "callback"
										})]), 4),
										s = i[0];
									if (e = i[1], n = i[2], t = i[3], s) return ge(this._iid, (function(e) {
										e(s, null)
									}), t);
									var a = [];
									if (Array.isArray(n))
										for (var o = 0; o < n.length; o++) {
											var l = n[o];
											a.push(new r(l, []))
										}
									return this._updateMessageMetaArray(this.url, e, {
										array: a.map((function(e) {
											return e.encode()
										})),
										mode: "add",
										upsert: !0
									}, t)
								}
							}, {
								key: "deleteMessageMetaArrayKeys",
								value: function(e, n, t) {
									var r = M.get(this._iid).MessageMetaArray,
										i = C(ie.parse(arguments, [new ie({
											type: Ee
										}), new ie({
											type: "array",
											constraint: function(e) {
												return e.every((function(e) {
													return "string" == typeof e && "" !== e
												}))
											}
										}), new ie({
											type: "callback"
										})]), 4),
										s = i[0];
									if (e = i[1], n = i[2], t = i[3], s) return ge(this._iid, (function(e) {
										e(s, null)
									}), t);
									var a = [];
									if (Array.isArray(n))
										for (var o = 0; o < n.length; o++) {
											var l = n[o];
											a.push(new r(l, []))
										}
									return this._updateMessageMetaArray(this.url, e, {
										array: a.map((function(e) {
											return e.encode()
										})),
										mode: "remove",
										upsert: !0
									}, t)
								}
							}, {
								key: "addMessageMetaArrayValues",
								value: function(e, n, t) {
									var r = M.get(this._iid).MessageMetaArray,
										i = C(ie.parse(arguments, [new ie({
											type: Ee
										}), new ie({
											type: "object",
											constraint: function(e) {
												return e && (Array.isArray(e) && 0 < e.length && e.every((function(e) {
													return e instanceof r
												})) || 0 < Object.keys(e).length && Object.keys(e).every((function(n) {
													return Array.isArray(e[n]) && 0 < e[n].length && e[n].every((function(e) {
														return "string" == typeof e && 0 < e.length
													}))
												})))
											}
										}), new ie({
											type: "callback"
										})]), 4),
										s = i[0];
									return e = i[1], n = i[2], t = i[3], s ? ge(this._iid, (function(e) {
										e(s, null)
									}), t) : (i = Array.isArray(n) ? n.map((function(e) {
										return e.encode()
									})) : Object.keys(n).map((function(e) {
										return {
											key: e,
											value: n[e]
										}
									})), this._updateMessageMetaArray(this.url, e, {
										array: i,
										mode: "add",
										upsert: !0
									}, t))
								}
							}, {
								key: "removeMessageMetaArrayValues",
								value: function(e, n, t) {
									var r = M.get(this._iid).MessageMetaArray,
										i = C(ie.parse(arguments, [new ie({
											type: Ee
										}), new ie({
											type: "object",
											constraint: function(e) {
												return e && (Array.isArray(e) && 0 < e.length && e.every((function(e) {
													return e instanceof r
												})) || 0 < Object.keys(e).length && Object.keys(e).every((function(n) {
													return Array.isArray(e[n]) && 0 < e[n].length && e[n].every((function(e) {
														return "string" == typeof e && 0 < e.length
													}))
												})))
											}
										}), new ie({
											type: "callback"
										})]), 4),
										s = i[0];
									return e = i[1], n = i[2], t = i[3], s ? ge(this._iid, (function(e) {
										e(s, null)
									}), t) : (i = Array.isArray(n) ? n.map((function(e) {
										return e.encode()
									})) : Object.keys(n).map((function(e) {
										return {
											key: e,
											value: n[e]
										}
									})), this._updateMessageMetaArray(this.url, e, {
										array: i,
										mode: "remove",
										upsert: !0
									}, t))
								}
							}, {
								key: "report",
								value: function(e, n, t) {
									var r = this,
										i = M.get(this._iid).BaseChannel,
										s = (i = C(ie.parse(arguments, [new ie({
											type: i.ReportCategory
										}), new ie({
											type: "string"
										}), new ie({
											type: "callback"
										})]), 4))[0];
									return e = i[1], n = i[2], t = i[3], ge(this._iid, (function(t) {
										var i;
										s ? t(s, null) : (i = ot.getInstance(r._iid), O.get(r._iid).container.apiClient.report({
											channelUrl: r.url,
											isOpenChannel: r.isOpenChannel(),
											reportCategory: e,
											reportingUserId: i.currentUser ? i.currentUser.userId : null,
											reportDescription: n
										}, (function(e, n) {
											t(e, null)
										})))
									}), t)
								}
							}, {
								key: "reportUser",
								value: function(e, n, t, r) {
									var i = this,
										s = M.get(this._iid).BaseChannel,
										a = (s = C(ie.parse(arguments, [new ie({
											type: Ce
										}), new ie({
											type: s.ReportCategory
										}), new ie({
											type: "string"
										}), new ie({
											type: "callback"
										})]), 5))[0];
									return e = s[1], n = s[2], t = s[3], r = s[4], ge(this._iid, (function(r) {
										var s;
										a ? r(a, null) : (s = ot.getInstance(i._iid), O.get(i._iid).container.apiClient.reportUser({
											channelUrl: i.url,
											isOpenChannel: i.isOpenChannel(),
											reportCategory: n,
											offendingUserId: e.userId,
											reportingUserId: s.currentUser ? s.currentUser.userId : null,
											reportDescription: t
										}, (function(e, n) {
											r(e, null)
										})))
									}), r)
								}
							}, {
								key: "reportMessage",
								value: function(e, n, t, r) {
									var i = this,
										s = M.get(this._iid).BaseChannel,
										a = (s = C(ie.parse(arguments, [new ie({
											type: Ee
										}), new ie({
											type: s.ReportCategory
										}), new ie({
											type: "string"
										}), new ie({
											type: "callback"
										})]), 5))[0];
									return e = s[1], n = s[2], t = s[3], r = s[4], ge(this._iid, (function(r) {
										var s;
										a ? r(a, null) : (s = ot.getInstance(i._iid), O.get(i._iid).container.apiClient.reportMessage({
											messageId: e.messageId,
											channelUrl: i.url,
											isOpenChannel: i.isOpenChannel(),
											reportCategory: n,
											offendingUserId: e.sender.userId,
											reportingUserId: s.currentUser ? s.currentUser.userId : null,
											reportDescription: t
										}, (function(e, n) {
											r(e, null)
										})))
									}), r)
								}
							}], [{
								key: "CHANNEL_TYPE_OPEN",
								get: function() {
									return "open"
								}
							}, {
								key: "CHANNEL_TYPE_GROUP",
								get: function() {
									return "group"
								}
							}, {
								key: "CHANNEL_TYPE_BASE",
								get: function() {
									return "base"
								}
							}, {
								key: "MessageTypeFilter",
								get: function() {
									return {
										ALL: "",
										USER: "MESG",
										FILE: "FILE",
										ADMIN: "ADMM"
									}
								}
							}, {
								key: "ReportCategory",
								get: function() {
									return {
										SPAM: "spam",
										HARASSING: "harassing",
										SUSPICIOUS: "suspicious",
										INAPPROPRIATE: "inappropriate"
									}
								}
							}, {
								key: "buildMessage",
								value: function(e, n) {
									var t = M.get(this._iid),
										r = t.UserMessage,
										i = t.FileMessage,
										s = t.AdminMessage;
									if (e) switch (e.hasOwnProperty("channel_type") || (e.channel_type = n.channelType), e.type) {
										case "MESG":
											return new r(e);
										case "FILE":
											var a = e.file;
											return new i(d(d({}, e), {}, {
												url: String(a.url),
												name: String(a.name),
												type: String(a.type),
												size: parseInt(a.size),
												data: String(a.data)
											}));
										case "BRDM":
										case "ADMM":
											return new s(e)
									}
									return null
								}
							}]), e
						}(),
						ke = function() {
							function e(n) {
								o(this, e), n && (this.category = n.hasOwnProperty("cat") ? parseInt(n.cat) : 0, this.data = n.hasOwnProperty("data") ? n.data : null, this.channelUrl = n.hasOwnProperty("channel_url") ? String(n.channel_url) : "", this.channelType = n.hasOwnProperty("channel_type") ? String(n.channel_type) : Ue.CHANNEL_TYPE_GROUP)
							}
							return u(e, [{
								key: "isGroupChannel",
								value: function() {
									return this.channelType === Ue.CHANNEL_TYPE_GROUP
								}
							}, {
								key: "isOpenChannel",
								value: function() {
									return this.channelType === Ue.CHANNEL_TYPE_OPEN
								}
							}]), e
						}();

					function Se(e) {
						o(this, Se), e && (this.category = e.hasOwnProperty("cat") ? parseInt(e.cat) : 0)
					}
					ke.CATEGORY_NONE = 0, ke.CATEGORY_CHANNEL_ENTER = 10102, ke.CATEGORY_CHANNEL_EXIT = 10103, ke.CATEGORY_USER_CHANNEL_MUTE = 10201, ke.CATEGORY_USER_CHANNEL_UNMUTE = 10200, ke.CATEGORY_USER_CHANNEL_BAN = 10601, ke.CATEGORY_USER_CHANNEL_UNBAN = 10600, ke.CATEGORY_CHANNEL_FREEZE = 10701, ke.CATEGORY_CHANNEL_UNFREEZE = 10700, ke.CATEGORY_TYPING_START = 10900, ke.CATEGORY_TYPING_END = 10901, ke.CATEGORY_CHANNEL_JOIN = 1e4, ke.CATEGORY_CHANNEL_LEAVE = 10001, ke.CATEGORY_CHANNEL_OPERATOR_UPDATE = 10002, ke.CATEGORY_CHANNEL_INVITE = 10020, ke.CATEGORY_CHANNEL_DECLINE_INVITE = 10022, ke.CATEGORY_CHANNEL_PROP_CHANGED = 11e3, ke.CATEGORY_CHANNEL_DELETED = 12e3, ke.CATEGORY_CHANNEL_META_DATA_CHANGED = 11100, ke.CATEGORY_CHANNEL_META_COUNTERS_CHANGED = 11200, ke.CATEGORY_CHANNEL_HIDE = 13e3, ke.CATEGORY_CHANNEL_UNHIDE = 13001, Se.CATEGORY_USER_BLOCK = 20001, Se.CATEGORY_USER_UNBLOCK = 2e4, Se.CATEGORY_FRIEND_DISCOVERED = 20900;
					var Ie = function() {
							function e(n) {
								o(this, e), this.sb = n, this.cls = M.get(this.sb._iid)
							}
							return u(e, [{
								key: "onRawCommandReceived",
								value: function(e) {
									var n = this,
										t = (C = this.cls).Command,
										r = C.User,
										i = C.Member,
										s = C.BaseChannel,
										o = C.GroupChannel,
										l = C.OpenChannel,
										u = C.UserMessage,
										c = C.FileMessage,
										d = C.AdminMessage,
										h = C.BaseMessageParams,
										p = C.ReactionEvent,
										f = C.ReadStatus,
										_ = C.ThreadInfoUpdateEvent,
										g = O.get(this.sb._iid),
										y = (C = g.container).pinger,
										m = C.auth,
										v = C.subscribedUnreadMessageCount,
										E = C.sessionManager,
										C = C.ackStateMap,
										b = new t(e),
										A = b.getJsonElement();
									if (A.hasOwnProperty("unread_cnt") && "object" === a(A.unread_cnt)) {
										var U = !1,
											I = A.unread_cnt.ts;
										if ("number" == typeof I && I > v.ts) {
											if (v.all !== A.unread_cnt.all && (U = !0), v.all = 0 <= A.unread_cnt.all ? A.unread_cnt.all : 0, A.unread_cnt.custom_types)
												for (var N in A.unread_cnt.custom_types) v.custom_types[N] !== A.unread_cnt.custom_types[N] && (U = !0), v.custom_types[N] = A.unread_cnt.custom_types[N];
											U = U && 0 < v.ts, v.ts = I
										}
										if (U)
											for (var T in this.sb.userEventHandlers) this.sb.userEventHandlers[T].onTotalUnreadMessageCountUpdated(v.all, v.custom_types)
									}
									if (e = b.requestId)(I = C[e]) && (clearTimeout(I.timer), (I = I.handler) && ("EROR" === b.command ? I(new R(A.message, A.code), null) : I(null, b)), C.hasOwnProperty(e) && delete C[e]);
									else switch (y && "LOGI" !== b.command && y.refreshTimer(), b.command) {
										case "LOGI":
											this.sb.loginTimer && (clearTimeout(this.sb.loginTimer), this.sb.loginTimer = null, this.sb.onLoginTimerCancel = null, A.hasOwnProperty("error") ? (this.sb.isSessionOpened = !1, this.sb.loginHandler(new R(A.message, A.code), null)) : (this.sb.isSessionOpened = !0, A.hasOwnProperty("key") && (m.sessionKey = A.key), A.hasOwnProperty("ekey") && (m.eKey = A.ekey), A.hasOwnProperty("user_id") && (this.sb.currentUser = new r(A)), "number" == typeof A.ping_interval && 0 < A.ping_interval && g.set("pingInterval", 1e3 * A.ping_interval), "number" == typeof A.pong_timeout && 0 < A.pong_timeout && g.set("pongTimeout", 1e3 * A.pong_timeout), "number" == typeof A.login_ts && g.set("connectedAt", 1e3 * A.login_ts), "number" == typeof A.max_unread_cnt_on_super_group ? g.set("maxUnreadCountOfSuperGroupChannel", A.max_unread_cnt_on_super_group) : g.set("maxUnreadCountOfSuperGroupChannel", S.DEFAULT_MAX_UNREAD_COUNT_OF_SUPER_GROUP_CHANNEL), A.profile_image_encryption && g.set("profileImageEncryption", !0), y && y.start(), A.hasOwnProperty("file_upload_size_limit") && A.hasOwnProperty("premium_feature_list") && A.hasOwnProperty("emoji_hash") && g.set("appInfo", new fe(A)), this.sb.loginHandler(null, this.sb.currentUser)), this.sb.connecting = !1, this.sb.reconnecting = !1);
											break;
										case "EXPR":
											A.hasOwnProperty("expires_in") && "number" == typeof A.expires_in && 0 < A.expires_in && E.refresh((function() {}));
											break;
										case "MESG":
										case "FILE":
										case "BRDM":
										case "ADMM":
											var w, M, L, P, D, F, H = null;
											"MESG" === b.command ? H = new u(A) : "FILE" === b.command ? H = new c(A) : "BRDM" !== b.command && "ADMM" !== b.command || (H = new d(A)), H && (w = this.sb.currentUser ? this.sb.currentUser.userId : null, M = H.silent, L = !!A.force_update_last_message, P = H._sender && H._sender.userId === w, H.isGroupChannel() ? (D = t.bMessageAck({
												channelUrl: H.channelUrl,
												messageId: H.messageId
											}), this.sb.sendCommand(D), F = o.cachedChannels.hasOwnProperty(H.channelUrl), o.getChannel(H.channelUrl, S.INTERNAL_CALL, (function(e, t) {
												var r;
												if (n.sb.getErrorFirstCallback() && (t = (r = [e, t])[0], e = r[1]), !t) {
													e.isHidden = !1, e.hiddenState = o.HiddenState.UNHIDDEN, o.cachedChannels[e.url] = e, H._sender && e.memberMap.hasOwnProperty(H._sender.userId) && ((i = e.memberMap[H._sender.userId]).nickname !== H._sender.nickname && (i.nickname = H._sender.nickname), i.plainProfileUrl !== H._sender.plainProfileUrl && (i.plainProfileUrl = H._sender.plainProfileUrl), V.deepEqual(i.metaData, H._sender.metaData) || (i.metaData = H._sender.metaData), i.isBlockedByMe !== H._sender.isBlockedByMe && (i.isBlockedByMe = H._sender.isBlockedByMe));
													var i = n.sb.currentUser;
													i && P && (i.nickname !== H._sender.nickname && (i.nickname = H._sender.nickname), i.plainProfileUrl !== H._sender.plainProfileUrl && (i.plainProfileUrl = H._sender.plainProfileUrl), V.deepEqual(i.metaData, H._sender.metaData) || (i.metaData = H._sender.metaData));
													var s, a = !1;
													if (H.mentionType === h.MentionType.CHANNEL) P || (a = !0);
													else if (H.mentionType === h.MentionType.USERS)
														for (var l = 0; l < H.mentionedUsers.length; l++)
															if (!P && H.mentionedUsers[l].userId === w) {
																a = !0;
																break
															} if (M && !P || (e.isEphemeral || F) && ((!e.lastMessage || e.lastMessage.createdAt < H.createdAt) && (e.lastMessage = H), P || e._setGroupChannelUnreadCount(e.unreadMessageCount + 1, e.unreadMentionCount + (a ? 1 : 0))), L && (!e.lastMessage || e.lastMessage.createdAt < H.createdAt) && (e.lastMessage = H), !M || P)
														for (var u in n.sb.channelHandlers) n.sb.channelHandlers[u].onChannelChanged(e);
													for (s in n.sb.channelHandlers) {
														var c = n.sb.channelHandlers[s];
														c.onMessageReceived(e, H), a && c.onMentionReceived(e, H)
													}
												}
											}))) : H.isOpenChannel() && l.getChannel(H.channelUrl, S.INTERNAL_CALL, (function(e, t) {
												var r;
												if (n.sb.getErrorFirstCallback() && (t = (r = [e, t])[0], e = r[1]), !t) {
													var i, s = !1;
													if (H.mentionType === h.MentionType.CHANNEL) s = !0;
													else if (H.mentionType === h.MentionType.USERS)
														for (var a = 0; a < H.mentionedUsers.length; a++)
															if (H.mentionedUsers[a].userId === w) {
																s = !0;
																break
															} for (i in n.sb.channelHandlers) {
														var o = n.sb.channelHandlers[i];
														l.enteredChannels[e.url] && o.onMessageReceived(e, H), s && o.onMentionReceived(e, H)
													}
												}
											})));
											break;
										case "MEDI":
										case "FEDI":
										case "AEDI":
											var x, G, j, B, z = null;
											"MEDI" === b.command ? z = new u(A) : "FEDI" === b.command ? z = new c(A) : "AEDI" === b.command && (z = new d(A)), z && (x = this.sb.currentUser ? this.sb.currentUser.userId : null, G = z.silent, j = z.sender && z.sender.userId === x, z.isGroupChannel() ? (B = o.cachedChannels.hasOwnProperty(z.channelUrl), o.getChannel(z.channelUrl, S.INTERNAL_CALL, (function(e, t) {
												if (n.sb.getErrorFirstCallback() && (t = (i = [e, t])[0], e = i[1]), !t) {
													t = (i = e.cachedReadReceiptStatus[x]) && i >= z.createAt, (i = n.sb.currentUser) && j && (i.nickname !== z._sender.nickname && (i.nickname = z._sender.nickname), i.plainProfileUrl !== z._sender.plainProfileUrl && (i.plainProfileUrl = z._sender.plainProfileUrl), V.deepEqual(i.metaData, z._sender.metaData) || (i.metaData = z._sender.metaData));
													var r, i = !1,
														s = !1;
													if (!j && !t && A && A.hasOwnProperty("old_values")) {
														t = A.old_values.mention_type || z.mentionType;
														var a = A.old_values.mentioned_user_ids || z.mentionedUsers.map((function(e) {
															return e.userId
														}));
														if (t === h.MentionType.USERS && z.mentionType === h.MentionType.USERS) {
															for (var o = !1, l = !1, u = 0; u < a.length; u++)
																if (a[u] === x) {
																	o = !0;
																	break
																} for (var c = 0; c < z.mentionedUsers.length; c++)
																if (z.mentionedUsers[c].userId === x) {
																	l = !0;
																	break
																}! o && l && (s = !0, !G && B && (e._setGroupChannelUnreadCount(e.unreadMessageCount, e.unreadMentionCount + 1), i = !0))
														} else if (t === h.MentionType.USERS && z.mentionType === h.MentionType.CHANNEL) {
															for (var d = !1, p = 0; p < a.length; p++)
																if (a[p] === x) {
																	d = !0;
																	break
																} d || (s = !0, !G && B && (e._setGroupChannelUnreadCount(e.unreadMessageCount, e.unreadMentionCount + 1), i = !0))
														}
													}
													if (!e.lastMessage || e.lastMessage.createdAt < z.createdAt ? (e.lastMessage = z, i = !0) : e.lastMessage.createdAt === z.createdAt && e.lastMessage.messageId === z.messageId && (B ? e.lastMessage.updatedAt < z.updatedAt && (e.lastMessage = z, i = !0) : i = !0), (!G || j) && i)
														for (var f in n.sb.channelHandlers) n.sb.channelHandlers[f].onChannelChanged(e);
													for (r in n.sb.channelHandlers) {
														var _ = n.sb.channelHandlers[r];
														_.onMessageUpdated(e, z), s && _.onMentionReceived(e, z)
													}
												}
											}))) : z.isOpenChannel() && l.getChannel(z.channelUrl, S.INTERNAL_CALL, (function(e, t) {
												var r;
												if (n.sb.getErrorFirstCallback() && (t = (r = [e, t])[0], e = r[1]), !t)
													for (var i in n.sb.channelHandlers) n.sb.channelHandlers[i].onMessageUpdated(e, z)
											})));
											break;
										case "DELM":
											var Q = String(A.channel_type),
												Y = String(A.channel_url),
												K = parseInt(A.msg_id);
											switch (Q) {
												case s.CHANNEL_TYPE_GROUP:
													o.getChannel(Y, S.INTERNAL_CALL, (function(e, t) {
														var r;
														if (n.sb.getErrorFirstCallback() && (t = (r = [e, t])[0], e = r[1]), t) q.debug("Discard command:", "`".concat(b.command, "`"));
														else
															for (var i in n.sb.channelHandlers) n.sb.channelHandlers[i].onMessageDeleted(e, K)
													}));
													break;
												case s.CHANNEL_TYPE_OPEN:
													l.getChannel(Y, S.INTERNAL_CALL, (function(e, t) {
														var r;
														if (n.sb.getErrorFirstCallback() && (t = (r = [e, t])[0], e = r[1]), t) q.debug("Discard command:", "`".concat(b.command, "`"));
														else
															for (var i in n.sb.channelHandlers) n.sb.channelHandlers[i].onMessageDeleted(e, K)
													}))
											}
											break;
										case "READ":
											var W = new f(A),
												J = o.cachedChannels.hasOwnProperty(W.channelUrl);
											o.getChannel(W.channelUrl, S.INTERNAL_CALL, (function(e, t) {
												var r;
												if (n.sb.getErrorFirstCallback() && (t = (r = [e, t])[0], e = r[1]), !t && (J && e.updateReadReceipt(W.reader.userId, W.timestamp), n.sb.currentUser))
													if (W.reader.userId === n.sb.currentUser.userId) {
														if (J) {
															if (0 < e.unreadMessageCount || 0 < e.unreadMentionCount)
																for (var i in e._setGroupChannelUnreadCount(0, 0), n.sb.channelHandlers) n.sb.channelHandlers[i].onChannelChanged(e)
														} else if (0 === e.unreadMessageCount || 0 === e.unreadMentionCount)
															for (var s in n.sb.channelHandlers) n.sb.channelHandlers[s].onChannelChanged(e)
													} else
														for (var a in n.sb.channelHandlers) n.sb.channelHandlers[a].onReadReceiptUpdated(e)
											}));
											break;
										case "MRCT":
											Q = String(A.channel_type);
											var Z = String(A.channel_url),
												X = p.createFromJson(A);
											switch (Q) {
												case s.CHANNEL_TYPE_GROUP:
													o.getChannel(Z, S.INTERNAL_CALL, (function(e, t) {
														var r;
														if (n.sb.getErrorFirstCallback() && (t = (r = [e, t])[0], e = r[1]), t) q.debug("Discard command:", "`".concat(b.command, "`"));
														else
															for (var i in n.sb.channelHandlers) n.sb.channelHandlers[i].onReactionUpdated(e, X)
													}));
													break;
												case s.CHANNEL_TYPE_OPEN:
													l.getChannel(Z, S.INTERNAL_CALL, (function(e, t) {
														var r;
														if (n.sb.getErrorFirstCallback() && (t = (r = [e, t])[0], e = r[1]), t) q.debug("Discard command:", "`".concat(b.command, "`"));
														else
															for (var i in n.sb.channelHandlers) n.sb.channelHandlers[i].onReactionUpdated(e, X)
													}))
											}
											break;
										case "DLVR":
											var $ = String(A.channel_url),
												ee = A.hasOwnProperty("updated") ? A.updated : null,
												ne = o.cachedChannels.hasOwnProperty($);
											o.getChannel($, S.INTERNAL_CALL, (function(e, t) {
												var r;
												if (n.sb.getErrorFirstCallback() && (t = (r = [e, t])[0], e = r[1]), !t) {
													var i, s = !1;
													for (i in ee) n.sb.currentUser && i === n.sb.currentUser.userId && (s = !0), ne && e.updateDeliveryReceipt(i, parseInt(ee[i]));
													if (o.cachedChannels[e.url] = e, !s || 1 !== Object.keys(ee).length)
														for (var a in n.sb.channelHandlers) n.sb.channelHandlers[a].onDeliveryReceiptUpdated(e)
												}
											}));
											break;
										case "MTHD":
											var te = String(A.channel_url),
												re = ($ = String(A.channel_type), _.createFromJson(A));
											switch ($) {
												case s.CHANNEL_TYPE_GROUP:
													o.getChannel(te, S.INTERNAL_CALL, (function(e, t) {
														var r;
														if (n.sb.getErrorFirstCallback() && (t = (r = [e, t])[0], e = r[1]), !t)
															for (var i in n.sb.channelHandlers) n.sb.channelHandlers[i].onThreadInfoUpdated(e, re)
													}));
													break;
												case s.CHANNEL_TYPE_OPEN:
													l.getChannel(te, S.INTERNAL_CALL, (function(e, t) {
														var r;
														if (n.sb.getErrorFirstCallback() && (t = (r = [e, t])[0], e = r[1]), !t)
															for (var i in n.sb.channelHandlers) n.sb.channelHandlers[i].onThreadInfoUpdated(e, re)
													}))
											}
											break;
										case "MCNT":
											if (A.hasOwnProperty("group_channels") && Array.isArray(A.group_channels)) {
												var ie = [],
													se = k(A.group_channels);
												try {
													for (se.s(); !(ae = se.n()).done;) {
														var ae, oe = ae.value;
														oe && (oe.hasOwnProperty("joined_member_count") && oe.joined_member_count, oe.hasOwnProperty("member_count") && oe.member_count, (ae = o.cachedChannels[oe.channel_url]) && ae.isBroadcast && ae.setLatestMemberCount(oe.member_count, oe.joined_member_count, oe.ts) && ie.push(ae))
													}
												} catch (e) {
													se.e(e)
												} finally {
													se.f()
												}
												if (0 < ie.length)
													for (var le in this.sb.channelHandlers) this.sb.channelHandlers[le].onChannelMemberCountChanged(ie)
											}
											if (A.hasOwnProperty("open_channels") && Array.isArray(A.open_channels)) {
												var ue = [],
													ce = k(A.open_channels);
												try {
													for (ce.s(); !(de = ce.n()).done;) {
														var de, he = de.value;
														he && (he.hasOwnProperty("participant_count") && he.participant_count, (de = l.cachedChannels[he.channel_url]) && de.setLatestParticipantCount(he.participant_count, he.ts) && ue.push(de))
													}
												} catch (e) {
													ce.e(e)
												} finally {
													ce.f()
												}
												if (0 < ue.length)
													for (var pe in this.sb.channelHandlers) this.sb.channelHandlers[pe].onChannelParticipantCountChanged(ue)
											}
											break;
										case "SYEV":
											var _e = new ke(A),
												ge = A.ts;
											switch (_e.category) {
												case ke.CATEGORY_CHANNEL_JOIN:
												case ke.CATEGORY_CHANNEL_LEAVE:
													o.getChannel(_e.channelUrl, S.INTERNAL_CALL, (function(e, t) {
														var s;
														if (n.sb.getErrorFirstCallback() && (t = (s = [e, t])[0], e = s[1]), t) q.debug("Discard command:", "`".concat(b.command, "`"), _e.category);
														else {
															var a = _e.data.hasOwnProperty("member_count") ? _e.data.member_count : null,
																l = _e.data.hasOwnProperty("joined_member_count") ? _e.data.joined_member_count : null,
																u = !1;
															if (_e.category === ke.CATEGORY_CHANNEL_JOIN)(_e.data.hasOwnProperty("users") ? _e.data.users : [_e.data]).forEach((function(t) {
																e.isSuper || e.isBroadcast ? u = e.setLatestMemberCount(a, l, A.ts) : (t.state = i.JOINED, e.addMember(new i(t), ge), e.updateJoinedMemberCount());
																var s, c = new r(t);
																for (s in n.sb.currentUser && c.userId === n.sb.currentUser.userId && (e.myMemberState = "joined", o.cachedChannels[e.url] = e), n.sb.channelHandlers) {
																	var d = n.sb.channelHandlers[s];
																	d.onUserJoined(e, c), e.isBroadcast && u && d.onChannelMemberCountChanged([e])
																}
															}));
															else {
																var c, d = new r(_e.data);
																for (c in n.sb.currentUser && d.userId === n.sb.currentUser.userId ? (e.isPublic || o.removeCachedChannel(_e.channelUrl), e.myMemberState = "none", e.invitedAt = 0, e._setGroupChannelUnreadCount(0, 0)) : o.cachedChannels[e.url] = e, e.isSuper || e.isBroadcast ? u = e.setLatestMemberCount(a, l, A.ts) : (e.removeMember(d), e.updateJoinedMemberCount()), n.sb.channelHandlers) {
																	var h = n.sb.channelHandlers[c];
																	h.onUserLeft(e, d), e.isBroadcast && u && h.onChannelMemberCountChanged([e])
																}
															}
														}
													}));
													break;
												case ke.CATEGORY_CHANNEL_OPERATOR_UPDATE:
													_e.isGroupChannel() ? o.getChannel(_e.channelUrl, S.INTERNAL_CALL, (function(e, t) {
														var i;
														if (n.sb.getErrorFirstCallback() && (t = (i = [e, t])[0], e = i[1]), t) q.debug("Discard command:", "`".concat(b.command, "`"), _e.category);
														else {
															var s, a, l = _e.data.operators.map((function(e) {
																	return new r(e)
																})),
																u = l.map((function(e) {
																	return e.userId
																}));
															for (s in e.members) e.members[s].role = 0 <= u.indexOf(e.members[s].userId) ? o.Role.OPERATOR : o.Role.NONE;
															for (a in e.myRole = n.sb.currentUser && 0 <= u.indexOf(n.sb.currentUser.userId) ? o.Role.OPERATOR : o.Role.NONE, n.sb.channelHandlers) n.sb.channelHandlers[a].onOperatorUpdated(e, l)
														}
													})) : _e.isOpenChannel() && l.getChannel(_e.channelUrl, S.INTERNAL_CALL, (function(e, t) {
														var i;
														if (n.sb.getErrorFirstCallback() && (t = (i = [e, t])[0], e = i[1]), t) q.debug("Discard command:", "`".concat(b.command, "`"), _e.category);
														else
															for (var s in e.operators = _e.data.operators.map((function(e) {
																	return new r(e)
																})), n.sb.channelHandlers) n.sb.channelHandlers[s].onOperatorUpdated(e, e.operators)
													}));
													break;
												case ke.CATEGORY_CHANNEL_INVITE:
													o.getChannel(_e.channelUrl, S.INTERNAL_CALL, (function(e, t) {
														var s;
														if (n.sb.getErrorFirstCallback() && (t = (s = [e, t])[0], e = s[1]), t) q.debug("Discard command:", "`".concat(b.command, "`"), _e.category);
														else {
															var a = null;
															_e.data && _e.data.inviter && 0 < Object.keys(_e.data.inviter).length && (a = new r(_e.data.inviter));
															for (var l, u = [], c = 0; c < _e.data.invitees.length; c++) {
																var d = new r(_e.data.invitees[c]);
																u.push(d), _e.data.invitees[c].state = i.INVITED;
																var h, p = new i(_e.data.invitees[c]);
																e.isSuper || e.isBroadcast ? (h = _e.data.hasOwnProperty("member_count") ? _e.data.member_count : null, d = _e.data.hasOwnProperty("joined_member_count") ? _e.data.joined_member_count : null, e.setLatestMemberCount(h, d, A.ts)) : e.addMember(p, ge), n.sb.currentUser && p.userId === n.sb.currentUser.userId && (e.isHidden = !1, "joined" !== e.myMemberState && (e.myMemberState = "invited"), e.invitedAt = A.ts, o.cachedChannels[e.url] = e)
															}
															for (l in n.sb.channelHandlers) n.sb.channelHandlers[l].onUserReceivedInvitation(e, a, u)
														}
													}));
													break;
												case ke.CATEGORY_CHANNEL_DECLINE_INVITE:
													o.getChannel(_e.channelUrl, S.INTERNAL_CALL, (function(e, t) {
														if (n.sb.getErrorFirstCallback() && (t = (s = [e, t])[0], e = s[1]), t) q.debug("Discard command:", "`".concat(b.command, "`"), _e.category);
														else {
															var i = null;
															_e.data && _e.data.inviter && 0 < Object.keys(_e.data.inviter).length && (i = new r(_e.data.inviter));
															var s, a, l = new r(_e.data.invitee);
															for (a in n.sb.currentUser && l.userId === n.sb.currentUser.userId && (e.invitedAt = 0, e.myMemberState = "none", e.isPublic || o.removeCachedChannel(_e.channelUrl)), e.isSuper || e.isBroadcast ? (s = _e.data.hasOwnProperty("member_count") ? _e.data.member_count : null, t = _e.data.hasOwnProperty("joined_member_count") ? _e.data.joined_member_count : null, e.setLatestMemberCount(s, t, A.ts)) : e.removeMember(l), n.sb.currentUser && l.userId !== n.sb.currentUser.userId && (o.cachedChannels[e.url] = e), n.sb.channelHandlers) n.sb.channelHandlers[a].onUserDeclinedInvitation(e, i, l)
														}
													}));
													break;
												case ke.CATEGORY_TYPING_START:
												case ke.CATEGORY_TYPING_END:
													o.getChannel(_e.channelUrl, S.INTERNAL_CALL, (function(e, t) {
														var i, s;
														if (n.sb.getErrorFirstCallback() && (t = (i = [e, t])[0], e = i[1]), t) q.debug("Discard command:", "`".concat(b.command, "`"), _e.category);
														else
															for (s in t = new r(_e.data), _e.category === ke.CATEGORY_TYPING_START ? e.updateTypingStatus(t, !0) : e.updateTypingStatus(t, !1), n.sb.channelHandlers) n.sb.channelHandlers[s].onTypingStatusUpdated(e)
													}));
													break;
												case ke.CATEGORY_CHANNEL_ENTER:
												case ke.CATEGORY_CHANNEL_EXIT:
													l.getChannel(_e.channelUrl, S.INTERNAL_CALL, (function(e, t) {
														var i;
														if (n.sb.getErrorFirstCallback() && (t = (i = [e, t])[0], e = i[1]), t) q.debug("Discard command:", "`".concat(b.command, "`"), _e.category);
														else {
															t = _e.data.hasOwnProperty("participant_count") ? _e.data.participant_count : null;
															var s = e.setLatestParticipantCount(t, A.ts),
																a = new r(_e.data);
															if (_e.category === ke.CATEGORY_CHANNEL_ENTER)
																for (var o in n.sb.channelHandlers)(o = n.sb.channelHandlers[o]).onUserEntered(e, a), s && o.onChannelParticipantCountChanged([e]);
															else
																for (var l in n.sb.channelHandlers)(l = n.sb.channelHandlers[l]).onUserExited(e, a), s && l.onChannelParticipantCountChanged([e])
														}
													}));
													break;
												case ke.CATEGORY_USER_CHANNEL_MUTE:
												case ke.CATEGORY_USER_CHANNEL_UNMUTE:
													_e.isOpenChannel() ? l.getChannel(_e.channelUrl, S.INTERNAL_CALL, (function(e, t) {
														var i;
														if (n.sb.getErrorFirstCallback() && (t = (i = [e, t])[0], e = i[1]), t) q.debug("Discard command:", "`".concat(b.command, "`"), _e.category);
														else {
															var s = new r(_e.data);
															if (_e.category === ke.CATEGORY_USER_CHANNEL_MUTE)
																for (var a in n.sb.channelHandlers) n.sb.channelHandlers[a].onUserMuted(e, s);
															else
																for (var o in n.sb.channelHandlers) n.sb.channelHandlers[o].onUserUnmuted(e, s)
														}
													})) : o.getChannel(_e.channelUrl, S.INTERNAL_CALL, (function(e, t) {
														var i;
														if (n.sb.getErrorFirstCallback() && (t = (i = [e, t])[0], e = i[1]), t) q.debug("Discard command:", "`".concat(b.command, "`"), _e.category);
														else {
															var s = new r(_e.data);
															if (n.sb.currentUser && s.userId === n.sb.currentUser.userId && (e.myMutedState = _e.category === ke.CATEGORY_USER_CHANNEL_MUTE ? "muted" : "unmuted"), Array.isArray(e.members) && e.members.forEach((function(e) {
																	e && e.userId === s.userId && (e.isMuted = _e.category === ke.CATEGORY_USER_CHANNEL_MUTE)
																})), _e.category === ke.CATEGORY_USER_CHANNEL_MUTE)
																for (var a in n.sb.channelHandlers) n.sb.channelHandlers[a].onUserMuted(e, s);
															else
																for (var o in n.sb.channelHandlers) n.sb.channelHandlers[o].onUserUnmuted(e, s)
														}
													}));
													break;
												case ke.CATEGORY_USER_CHANNEL_BAN:
												case ke.CATEGORY_USER_CHANNEL_UNBAN:
													_e.isOpenChannel() ? l.getChannel(_e.channelUrl, S.INTERNAL_CALL, (function(e, t) {
														var i;
														if (n.sb.getErrorFirstCallback() && (t = (i = [e, t])[0], e = i[1]), t) q.debug("Discard command:", "`".concat(b.command, "`"), _e.category);
														else {
															var s, a = new r(_e.data);
															if (_e.category === ke.CATEGORY_USER_CHANNEL_BAN)
																for (s in n.sb.currentUser && a.userId === n.sb.currentUser.userId && (delete l.enteredChannels[_e.channelUrl], n.cls.FileMessageQueue.delete(_e.channelUrl)), n.sb.channelHandlers) n.sb.channelHandlers[s].onUserBanned(e, a);
															else
																for (var o in n.sb.channelHandlers) n.sb.channelHandlers[o].onUserUnbanned(e, a)
														}
													})) : o.getChannel(_e.channelUrl, S.INTERNAL_CALL, (function(e, t) {
														if (n.sb.getErrorFirstCallback() && (t = (i = [e, t])[0], e = i[1]), t) q.debug("Discard command:", "`".concat(b.command, "`"), _e.category);
														else {
															var i, s, a = new r(_e.data);
															if (_e.category === ke.CATEGORY_USER_CHANNEL_BAN)
																for (s in n.sb.currentUser && a.userId === n.sb.currentUser.userId && (e.isPublic || o.removeCachedChannel(_e.channelUrl), e.myMemberState = "none", e.invitedAt = 0, e._setGroupChannelUnreadCount(0, 0)), e.isSuper || e.isBroadcast ? (i = _e.data.hasOwnProperty("member_count") ? _e.data.member_count : null, t = _e.data.hasOwnProperty("joined_member_count") ? _e.data.joined_member_count : null, e.setLatestMemberCount(i, t, A.ts)) : (e.removeMember(a), e.updateJoinedMemberCount()), n.sb.channelHandlers) n.sb.channelHandlers[s].onUserBanned(e, a);
															else
																for (var l in n.sb.channelHandlers) n.sb.channelHandlers[l].onUserUnbanned(e, a)
														}
													}));
													break;
												case ke.CATEGORY_CHANNEL_FREEZE:
												case ke.CATEGORY_CHANNEL_UNFREEZE:
													_e.isOpenChannel() ? l.getChannel(_e.channelUrl, S.INTERNAL_CALL, (function(e, t) {
														var r;
														if (n.sb.getErrorFirstCallback() && (t = (r = [e, t])[0], e = r[1]), t) q.debug("Discard command:", "`".concat(b.command, "`"), _e.category);
														else if (e.isFrozen = _e.data.freeze, l.cachedChannels[e.url] = e, _e.category === ke.CATEGORY_CHANNEL_FREEZE)
															for (var i in n.sb.channelHandlers) n.sb.channelHandlers[i].onChannelFrozen(e);
														else
															for (var s in n.sb.channelHandlers) n.sb.channelHandlers[s].onChannelUnfrozen(e)
													})) : o.getChannel(_e.channelUrl, S.INTERNAL_CALL, (function(e, t) {
														var r;
														if (n.sb.getErrorFirstCallback() && (t = (r = [e, t])[0], e = r[1]), t) q.debug("Discard command:", "`".concat(b.command, "`"), _e.category);
														else if (e.isFrozen = _e.data.freeze, o.cachedChannels[e.url] = e, _e.category === ke.CATEGORY_CHANNEL_FREEZE)
															for (var i in n.sb.channelHandlers) n.sb.channelHandlers[i].onChannelFrozen(e);
														else
															for (var s in n.sb.channelHandlers) n.sb.channelHandlers[s].onChannelUnfrozen(e)
													}));
													break;
												case ke.CATEGORY_CHANNEL_DELETED:
													for (var ye in (_e.isGroupChannel() ? o : l).removeCachedChannel(_e.channelUrl), this.sb.channelHandlers) this.sb.channelHandlers[ye].onChannelDeleted(_e.channelUrl, _e.isGroupChannel() ? "group" : "open");
													break;
												case ke.CATEGORY_CHANNEL_PROP_CHANGED:
													_e.isOpenChannel() ? l.getChannelWithoutCache(_e.channelUrl, (function(e, t) {
														var r;
														if (n.sb.getErrorFirstCallback() && (t = (r = [e, t])[0], e = r[1]), t) q.debug("Discard command:", "`".concat(b.command, "`"), _e.category);
														else
															for (var i in n.sb.channelHandlers) n.sb.channelHandlers[i].onChannelChanged(e)
													})) : o.getChannelWithoutCache(_e.channelUrl, (function(e, t) {
														if (n.sb.getErrorFirstCallback() && (t = (i = [e, t])[0], e = i[1]), t) q.debug("Discard command:", "`".concat(b.command, "`"), _e.category);
														else {
															var r, i = e.unreadMessageCount;
															for (r in t = e.unreadMentionCount, e.myCountPreference !== o.CountPreference.ALL && (e.myCountPreference === o.CountPreference.UNREAD_MESSAGE_COUNT_ONLY ? t = 0 : e.myCountPreference === o.CountPreference.UNREAD_MENTION_COUNT_ONLY ? i = 0 : t = i = 0), e._setGroupChannelUnreadCount(i, t), n.sb.channelHandlers) n.sb.channelHandlers[r].onChannelChanged(e)
														}
													}));
													break;
												case ke.CATEGORY_CHANNEL_META_DATA_CHANGED:
												case ke.CATEGORY_CHANNEL_META_COUNTERS_CHANGED:
													var me = _e.data.hasOwnProperty("created"),
														ve = _e.data.hasOwnProperty("updated"),
														Ee = _e.data.hasOwnProperty("deleted");
													(_e.isOpenChannel() ? l : o).getChannel(_e.channelUrl, S.INTERNAL_CALL).then((function(e) {
														var t, r = _e.data.created,
															i = _e.data.updated,
															s = _e.data.deleted,
															a = A.ts;
														for (t in me && e._addOrUpdateCachedMetaData(r, a), ve && e._addOrUpdateCachedMetaData(i, a), Ee && e._markAsDeletedCachedMetaData(s, a), n.sb.channelHandlers) {
															var o = n.sb.channelHandlers[t];
															_e.category === ke.CATEGORY_CHANNEL_META_DATA_CHANGED ? (me && o.onMetaDataCreated(e, r), ve && o.onMetaDataUpdated(e, i), Ee && o.onMetaDataDeleted(e, s)) : (me && o.onMetaCountersCreated(e, r), ve && o.onMetaCountersUpdated(e, i), Ee && o.onMetaCountersDeleted(e, s))
														}
													})).catch((function(e) {
														return q.debug("Discard command:", "`".concat(b.command, "`"), _e.category)
													}));
													break;
												case ke.CATEGORY_CHANNEL_HIDE:
												case ke.CATEGORY_CHANNEL_UNHIDE:
													o.getChannel(_e.channelUrl, S.INTERNAL_CALL, (function(e, t) {
														var r;
														if (n.sb.getErrorFirstCallback() && (t = (r = [e, t])[0], e = r[1]), t) q.debug("Discard command:", "`".concat(b.command, "`"), _e.category);
														else if (_e.category === ke.CATEGORY_CHANNEL_HIDE)
															for (var i in e.isHidden = !0, _e.data && (_e.data.hasOwnProperty("allow_auto_unhide") && (e.hiddenState = _e.data.allow_auto_unhide ? o.HiddenState.HIDDEN_ALLOW_AUTO_UNHIDE : o.HiddenState.HIDDEN_PREVENT_AUTO_UNHIDE), _e.data.hasOwnProperty("hide_previous_messages") && _e.data.hide_previous_messages && e._setGroupChannelUnreadCount(0, 0)), A.hasOwnProperty("ts_message_offset") && (e._messageOffsetTimestamp = A.ts_message_offset), o.cachedChannels[e.url] = e, n.sb.channelHandlers) n.sb.channelHandlers[i].onChannelHidden(e);
														else
															for (var s in e.isHidden = !1, e.hiddenState = o.HiddenState.UNHIDDEN, o.cachedChannels[e.url] = e, n.sb.channelHandlers) n.sb.channelHandlers[s].onChannelChanged(e)
													}))
											}
											break;
										case "USEV":
											var Ce = new ke(A);
											switch (Ce.category) {
												case Se.CATEGORY_USER_BLOCK:
												case Se.CATEGORY_USER_UNBLOCK:
													var be = Ce.data.blocker.user_id,
														Ae = Ce.data.blockee.user_id;
													Object.keys(o.cachedChannels).forEach((function(e) {
														var t = o.cachedChannels[e];
														try {
															n.sb.currentUser && (n.sb.currentUser.userId === be ? t.memberMap[Ae].isBlockedByMe = Ce.category === Se.CATEGORY_USER_BLOCK : n.sb.currentUser.userId === Ae && (t.memberMap[be].isBlockingMe = Ce.category === Se.CATEGORY_USER_BLOCK))
														} catch (e) {}
													}));
													break;
												case Se.CATEGORY_FRIEND_DISCOVERED:
													var Ue, Ie = Ce.data.friend_discoveries.map((function(e) {
														return new r(e)
													}));
													for (Ue in this.sb.userEventHandlers) this.sb.userEventHandlers[Ue].onFriendsDiscovered(Ie)
											}
											break;
										case "LEAV":
										case "JOIN":
										case "PONG":
										case "MTIO":
										case "TPST":
										case "TPEN":
											break;
										default:
											q.debug("Discard command:", "`".concat(b.command, "`"))
									}
								}
							}]), e
						}(),
						Ne = {},
						Oe = {},
						Re = function() {
							function e(n) {
								o(this, e), this.channel = n, this.uploadQueue = [], this.messageQueue = [], this.latestTimestampToSendMessage = 0, M.get(this._iid).FileMessageQueue.queueMap[n.url] = this
							}
							return u(e, [{
								key: "_handleMessageQueueUpdated",
								value: function(e) {
									var n = this;
									switch (q.debug("`fileMessageQueue` message queue updated:", this.messageQueue), e) {
										case "add":
											this.uploadQueue.length < 6 && this._moveFirstPendingMessageToUploadQueue();
											break;
										case "update":
										case "remove":
											if (0 < this.messageQueue.length) {
												var t = M.get(this._iid).FileMessageQueue,
													r = this.messageQueue[0];
												if (r)
													if (r.state === t.State.UPLOADED) {
														if (r && r.state === t.State.UPLOADED) {
															for (r.state = t.State.SENDING, 0 === this.latestTimestampToSendMessage && (this.latestTimestampToSendMessage = (new Date).getTime() - 200);
																(new Date).getTime() - this.latestTimestampToSendMessage < 200;);
															this.latestTimestampToSendMessage = (new Date).getTime(), this._sendUploadedMessage(r, (function(e, i) {
																r.state = t.State.SENT, r.error = e || null, r.response = i || null, n._handleMessageQueueUpdated("update")
															}))
														}
													} else r.state === t.State.SENT && this._finalizeMessage()
											}
									}
								}
							}, {
								key: "_handleUploadQueueUpdated",
								value: function(e, n) {
									var t = this;
									switch (q.debug("`fileMessageQueue` upload queue updated:", this.uploadQueue), e) {
										case "add":
											var r = M.get(this._iid).FileMessageQueue;
											n.state = r.State.UPLOADING, n.error ? (-1 < this.messageQueue.map((function(e) {
												return e.requestId
											})).indexOf(n.requestId) && (n.state = r.State.SENT, this._handleMessageQueueUpdated("update")), this._finalizeUpload(n.requestId)) : this._uploadFile(n, (function(e) {
												n.error && n.state === r.State.SENT || (n.state = r.State.UPLOADED), n.fileInfo = e, t._handleMessageQueueUpdated("update"), t._finalizeUpload(n.requestId)
											}));
											break;
										case "update":
											break;
										case "remove":
											this.uploadQueue.length < 6 && this._moveFirstPendingMessageToUploadQueue()
									}
								}
							}, {
								key: "_moveFirstPendingMessageToUploadQueue",
								value: function() {
									var e = M.get(this._iid).FileMessageQueue,
										n = this.messageQueue.filter((function(n) {
											return n.state === e.State.PENDING
										}));
									0 < n.length && (n = n[0], this.uploadQueue.push(n), this._handleUploadQueueUpdated("add", n))
								}
							}, {
								key: "_sendUploadedMessage",
								value: function(e, n) {
									var t = M.get(this._iid),
										r = t.Command,
										i = t.FileMessage,
										s = e.fileInfo,
										a = r.bFile(d(d({}, s), {}, {
											requestId: e.requestId,
											channelUrl: this.channel.url,
											url: s.file,
											metaArrays: s.metaArrays
										})),
										o = ot.getInstance(this._iid);
									e = O.get(this._iid), o.getConnectionState() === o.ConnectionState.OPEN || !o.currentUser || o.connecting || o.reconnecting ? o.sendCommand(a, (function(e, t) {
										var r;
										o.getErrorFirstCallback() && (t = (r = [e, t])[0], e = r[1]), t ? ((r = new i(a.getJsonElement())).requestedMentionUserIds = s.mentionedUserIds, n(t, r)) : (e = new i(e.getJsonElement()), n(null, e))
									})) : e.container.apiClient.sendFileMessage(d(d({
										channelUrl: this.channel.url,
										isOpenChannel: this.channel.isOpenChannel()
									}, s), {}, {
										fileUrl: s.file,
										fileName: s.name,
										fileSize: s.size,
										fileType: s.type,
										metaArrays: s.metaArrays
									}), (function(e, t) {
										t = new i(e ? a.getJsonElement() : t), e && (t.requestedMentionUserIds = s.mentionedUserIds), n(e, t)
									}))
								}
							}, {
								key: "_uploadFile",
								value: function(e, n) {
									var t, r = e.fileInfo,
										i = e.pendingMessage;
									"string" != typeof r.file && r.file ? (t = M.get(this._iid).FileMessageQueue, O.get(this._iid).container.apiClient.uploadFile(d(d({}, r), {}, {
										fileType: r.type,
										channelUrl: this.channel.url,
										reqId: i ? i.reqId : null
									}), (function(i, s) {
										i ? (e.state = t.State.SENT, e.error = i, e.response = null) : (s = "object" === a(s) ? s : JSON.parse(s), r.file = s.url, r.thumbnailSizes = s.hasOwnProperty("thumbnails") ? s.thumbnails : [], r.requireAuth = !!s.hasOwnProperty("require_auth") && s.require_auth, r.size = s.hasOwnProperty("file_size") ? s.file_size : r.size), n(r)
									}))) : (r.thumbnailSizes = [], r.requireAuth = !1, n(r))
								}
							}, {
								key: "_finalizeUpload",
								value: function(e) {
									-1 < (e = this.uploadQueue.map((function(e) {
										return e.requestId
									})).indexOf(e)) && 0 < (e = this.uploadQueue.splice(e, 1)).length && this._handleUploadQueueUpdated("remove", e[0])
								}
							}, {
								key: "_finalizeMessage",
								value: function() {
									var e = O.get(this._iid).container.isErrorFirstInCallback,
										n = ot.getInstance(this._iid),
										t = M.get(this._iid).FileMessageQueue,
										r = this.messageQueue[0];
									if (r && r.state === t.State.SENT) {
										r.state = t.State.DONE;
										var i = r.response,
											s = r.error,
											a = r.fileInfo.callback;
										if (i && !s) {
											if ((t = n.currentUser) && i._sender && t.userId === i._sender.userId && (t.nickname !== i._sender.nickname && (t.nickname = i._sender.nickname), t.plainProfileUrl !== i._sender.plainProfileUrl && (t.plainProfileUrl = i._sender.plainProfileUrl)), this.channel.isGroupChannel())
												for (var o in this.channel.lastMessage = i, n.channelHandlers) n.channelHandlers[o].onChannelChanged(this.channel);
											return e ? a(null, i) : a(i, null), this.messageQueue.shift(), void this._handleMessageQueueUpdated("remove")
										}
										s && (i = r.pendingMessage) && (s.code !== R.INVALID_PARAMETER ? (i.requestState = n.MessageRequestState.FAILED, i.sendingStatus = n.MessageSendingStatus.FAILED, s.code !== R.FILE_UPLOAD_CANCEL_FAILED && s.code !== R.REQUEST_CANCELED || (i.sendingStatus = n.MessageSendingStatus.CANCELED), i.requestedMentionUserIds = r.fileInfo.mentionedUserIds, i.errorCode = s.code) : i = null), e ? a(s, i) : a(i, s), this.messageQueue.shift(), this._handleMessageQueueUpdated("remove")
									}
								}
							}, {
								key: "addJob",
								value: function(e) {
									this.messageQueue.push(e), this._handleMessageQueueUpdated("add")
								}
							}, {
								key: "cancelUploadItemByRequestId",
								value: function(e, n) {
									if (this._finalizeUpload(e), -1 < (t = this.messageQueue.map((function(e) {
											return e.requestId
										})).indexOf(e))) {
										var t, r = M.get(this._iid).FileMessageQueue;
										if (!(t = this.messageQueue[t]) || t.state !== r.State.UPLOADING && t.state !== r.State.PENDING || (t.state = r.State.SENT, t.response = null, t.error = new R("Uploading has been completed or canceled.", R.FILE_UPLOAD_CANCEL_FAILED), this._handleMessageQueueUpdated("update")), e = r.uploadRequest[e]) return "function" == typeof e.abort ? e.abort() : "function" == typeof e.cancel && e.cancel("Upload has been canceled."), n(null, !0), !0;
										n(new R("Uploading has been completed or canceled.", R.FILE_UPLOAD_CANCEL_FAILED), !1)
									} else n(new R("Uploading has been completed or canceled.", R.FILE_UPLOAD_CANCEL_FAILED), !1);
									return !1
								}
							}], [{
								key: "State",
								get: function() {
									return {
										PENDING: "pending",
										UPLOADING: "uploading",
										UPLOADED: "uploaded",
										SENDING: "sending",
										SENT: "sent",
										DONE: "done"
									}
								}
							}, {
								key: "getByChannelUrl",
								value: function(e) {
									return M.get(this._iid).FileMessageQueue.queueMap[e]
								}
							}, {
								key: "create",
								value: function(e) {
									var n = M.get(this._iid).FileMessageQueue;
									return n.queueMap.hasOwnProperty(e.url) || (n.queueMap[e.url] = new n(e)), n.queueMap[e.url]
								}
							}, {
								key: "delete",
								value: function(e) {
									var n = M.get(this._iid).FileMessageQueue;
									n.queueMap.hasOwnProperty(e) && delete n.queueMap[e]
								}
							}, {
								key: "clear",
								value: function() {
									Oe[this._iid] = {}
								}
							}, {
								key: "queueMap",
								get: function() {
									return Oe[this._iid] || (Oe[this._iid] = {}), Oe[this._iid]
								}
							}, {
								key: "uploadRequest",
								get: function() {
									return Ne[this._iid] || (Ne[this._iid] = {}), Ne[this._iid]
								}
							}]), e
						}();
					Re.Job = function e(n) {
						var t = n.fileInfo,
							r = n.requestId,
							i = n.pendingMessage,
							s = n.state,
							a = void 0 === (a = n.error) ? null : a;
						n = void 0 === (n = n.response) ? null : n, o(this, e), this.fileInfo = t, this.requestId = r, this.pendingMessage = i, this.state = s || Re.State.PENDING, this.error = a, this.response = n
					};
					var Te = function() {
							function e() {
								o(this, e)
							}
							return u(e, null, [{
								key: "create",
								value: function() {
									return "".concat(parseInt(1e5 * Math.random()), "-").concat((new Date).getTime())
								}
							}]), e
						}(),
						we = {},
						Me = {},
						Le = new WeakMap,
						Pe = new WeakMap,
						De = new WeakMap,
						Fe = function() {
							h(n, Ue);
							var e = v(n);

							function n(t) {
								var r;
								return o(this, n), (r = e.call(this, t)).channelType = Ue.CHANNEL_TYPE_GROUP, r.isDistinct = !1, r.isSuper = !1, r.isBroadcast = !1, r.isPublic = !1, r.unreadMessageCount = 0, r.inviter = null, r.members = [], r.memberMap = {}, r.lastMessage = null, r.memberCount = 0, r.joinedMemberCount = 0, r.cachedReadReceiptStatus = {}, r.cachedDeliveryReceiptStatus = null, r.myPushTriggerOption = n.PushTriggerOption.DEFAULT, r.isPushEnabled, r.isHidden = !1, r.hiddenState = n.HiddenState.UNHIDDEN, r.isDiscoverable = !0, r.myLastRead = 0, r.messageSurvivalSeconds = -1, r._messageOffsetTimestamp = 0, r._cachedLastDeliveredReceipt = {
									sentAt: 0,
									timeout: null
								}, Le.set(m(r), {}), Pe.set(m(r), {
									start: 0,
									end: 0
								}), De.set(m(r), 0), t && r._update(t), r
							}
							return u(n, [{
								key: "messageOffsetTimestamp",
								get: function() {
									return this._messageOffsetTimestamp
								}
							}, {
								key: "_setGroupChannelUnreadCount",
								value: function(e, n) {
									try {
										var t;
										"number" == typeof e && 0 <= e && ("all" === this.myCountPreference || "unread_message_count_only" === this.myCountPreference ? this.isSuper || this.isBroadcast ? (t = O.get(this._iid).container.maxUnreadCountOfSuperGroupChannel, this.unreadMessageCount = t <= e ? t : e) : this.unreadMessageCount = e : this.unreadMessageCount = 0), "number" == typeof n && 0 <= n && ("all" === this.myCountPreference || "unread_mention_count_only" === this.myCountPreference ? this.unreadMentionCount = n : this.unreadMentionCount = 0)
									} catch (e) {}
								}
							}, {
								key: "_update",
								value: function(e) {
									var n = M.get(this._iid),
										t = n.BaseChannel,
										r = n.GroupChannel,
										i = n.User,
										s = n.Member;
									if (this.isAccessCodeRequired = e.is_access_code_required || !1, this.isDistinct = e.is_distinct || !1, this.isPushEnabled = e.is_push_enabled || !1, this.isHidden = !!e.hasOwnProperty("is_hidden") && e.is_hidden, this.myPushTriggerOption = e.push_trigger_option || r.PushTriggerOption.DEFAULT, this.myCountPreference = e.hasOwnProperty("count_preference") ? e.count_preference : r.CountPreference.ALL, this.unreadMessageCount = 0, this.unreadMentionCount = 0, this._setGroupChannelUnreadCount(parseInt(e.unread_message_count), parseInt(e.unread_mention_count)), e.hasOwnProperty("read_receipt"))
										for (var o in this.cachedReadReceiptStatus = {}, e.read_receipt) {
											var l = e.read_receipt[o];
											this.updateReadReceipt(o, parseInt(l))
										}
									if (e.hasOwnProperty("delivery_receipt") && "object" === a(e.delivery_receipt) && null !== e.delivery_receipt)
										for (var u in this.cachedDeliveryReceiptStatus || (this.cachedDeliveryReceiptStatus = {}), e.delivery_receipt) {
											var c = e.delivery_receipt[u];
											this.updateDeliveryReceipt(u, parseInt(c))
										}
									if (e.hasOwnProperty("user_last_read") && "number" == typeof e.user_last_read ? this.myLastRead = e.user_last_read : this.myLastRead = 0, e.hasOwnProperty("members")) {
										this.members = [], this.memberMap = {};
										for (var d = 0; d < e.members.length; d++) {
											var h = new s(e.members[d]);
											this.members.push(h), this.memberMap[h.userId] = h
										}
									}
									this.myMemberState = e.member_state || "none", this.myRole = e.my_role || r.Role.NONE, e.hasOwnProperty("is_muted") ? "string" == typeof e.is_muted ? this.myMutedState = e.is_muted : "boolean" == typeof e.is_muted ? this.myMutedState = e.is_muted ? "muted" : "unmuted" : this.myMutedState = "unmuted" : this.myMutedState = "unmuted", e.hasOwnProperty("member_count") && (this.memberCount = parseInt(e.member_count)), e.hasOwnProperty("joined_member_count") && (this.joinedMemberCount = parseInt(e.joined_member_count)), e.hasOwnProperty("last_message") && "object" === a(e.last_message) && e.last_message ? e.last_message instanceof Ee ? this.lastMessage = e.last_message : this.lastMessage = t.buildMessage(e.last_message, this) : this.lastMessage = null, e.hasOwnProperty("inviter") && null !== e.inviter && "object" === a(e.inviter) && 0 < Object.keys(e.inviter).length ? this.inviter = new i(e.inviter) : this.inviter = null, this.invitedAt = e.invited_at || 0, e.hasOwnProperty("is_super") && "boolean" == typeof e.is_super ? this.isSuper = e.is_super : this.isSuper = !1, e.hasOwnProperty("is_broadcast") && "boolean" == typeof e.is_broadcast ? this.isBroadcast = e.is_broadcast : this.isBroadcast = !1, e.hasOwnProperty("is_public") && "boolean" == typeof e.is_public ? this.isPublic = e.is_public : this.isPublic = !1, e.hasOwnProperty("hidden_state") ? this.hiddenState = e.hidden_state : this.hiddenState = r.HiddenState.UNHIDDEN, e.hasOwnProperty("is_discoverable") && "boolean" == typeof e.is_discoverable ? this.isDiscoverable = e.is_discoverable : this.isDiscoverable = this.isPublic, e.hasOwnProperty("ts_message_offset") && (this._messageOffsetTimestamp = e.ts_message_offset), e.hasOwnProperty("message_survival_seconds") && "number" == typeof e.message_survival_seconds && (this.messageSurvivalSeconds = e.message_survival_seconds)
								}
							}, {
								key: "addMember",
								value: function(e) {
									var n, t, r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
									this.isSuper || this.isBroadcast || (n = M.get(this._iid).Member, (t = this.removeMember(e)) && t.state === n.JOINED && (e.state = n.JOINED), this.memberMap[e.userId] = e, this.members.push(e), this.memberCount++, this.updateReadReceipt(e.userId, r), this.updateDeliveryReceipt(e.userId, r))
								}
							}, {
								key: "removeMember",
								value: function(e) {
									var n = null;
									if (!this.isSuper && !this.isBroadcast && this.memberMap.hasOwnProperty(e.userId)) {
										delete this.memberMap[e.userId];
										for (var t = 0; t < this.members.length; t++) {
											var r = this.members[t];
											if (r.userId === e.userId) {
												n = r, this.members.splice(t, 1);
												break
											}
										}
										this.memberCount--
									}
									return n
								}
							}, {
								key: "parse",
								value: function(e) {
									this._update(e)
								}
							}, {
								key: "update",
								value: function(e) {
									this.__update(e), this._update(e)
								}
							}, {
								key: "isIdentical",
								value: function(e) {
									return e && this.url === e.url
								}
							}, {
								key: "isEqual",
								value: function(e) {
									return V.deepEqual(this, e)
								}
							}, {
								key: "createMemberListQuery",
								value: function() {
									return new(M.get(this._iid).MemberListQuery)(this.url)
								}
							}, {
								key: "createBannedUserListQuery",
								value: function() {
									return new(M.get(this._iid).BannedUserListQuery)({
										channelUrl: this.url,
										isOpenChannel: this.isOpenChannel()
									})
								}
							}, {
								key: "refresh",
								value: function(e) {
									return M.get(this._iid).GroupChannel.getChannelWithoutCache(this.url, e)
								}
							}, {
								key: "updateChannel",
								value: function() {
									var e = this,
										n = ie.toArray(arguments),
										t = void 0;
									"function" == typeof n[n.length - 1] && (t = n.pop());
									var r = (i = M.get(this._iid)).GroupChannel,
										i = i.GroupChannelParams;
									if (n[0] instanceof i && 1 === n.length) return ge(this._iid, (function(t) {
										var i = n[0];
										i.channelUrl = e.url, i._validate() ? O.get(e._iid).container.apiClient.updateGroupChannel(d(d({}, i), {}, {
											operatorUserIds: i.operatorUserIds
										}), (function(e, n) {
											var i = null;
											e || (i = r.upsert(n)), t(e, i)
										})) : t(ie.error, null)
									}), t);
									if (3 === n.length) {
										var s = new i;
										return s.channelUrl = this.url, s.name = n[0], "string" == typeof n[1] ? s.coverUrl = n[1] : s.coverImage = n[1], s.data = n[2], this.updateChannel(s, t)
									}
									return 4 === n.length ? ((s = new i).channelUrl = this.url, s.isDistinct = n[0], s.name = n[1], "string" == typeof n[1] ? s.coverUrl = n[2] : s.coverImage = n[2], s.data = n[3], this.updateChannel(s, t)) : 5 !== n.length ? ge(this._iid, (function(e) {
										return e(ie.error, null)
									}), t) : ((i = new i).channelUrl = this.url, i.isDistinct = n[0], i.name = n[1], "string" == typeof n[2] ? i.coverUrl = n[2] : i.coverImage = n[2], i.data = n[3], i.customType = n[4], this.updateChannel(i, t))
								}
							}, {
								key: "invite",
								value: function(e, n) {
									var t = C(ie.parse(arguments, [new ie({
											type: "array",
											constraint: function(e) {
												return 0 < e.length && e.every((function(e) {
													return !!e.userId && "string" == typeof e.userId
												}))
											}
										}), new ie({
											type: "callback"
										})]), 3),
										r = t[0];
									return e = t[1], n = t[2], r ? ge(this._iid, (function(e) {
										return e(ie.error, null)
									}), n) : this.inviteWithUserIds(e.map((function(e) {
										return e.userId
									})), n)
								}
							}, {
								key: "inviteWithUserIds",
								value: function(e, n) {
									var t = this,
										r = C(ie.parse(arguments, [new ie({
											type: "array",
											constraint: function(e) {
												return e.every((function(e) {
													return "string" == typeof e
												}))
											}
										}), new ie({
											type: "callback"
										})]), 3),
										i = r[0];
									return e = r[1], n = r[2], ge(this._iid, (function(n) {
										i ? n(i, null) : O.get(t._iid).container.apiClient.inviteToGroupChannel({
											channelUrl: t.url,
											userIds: e
										}, (function(e, r) {
											var i = null;
											e || (i = M.get(t._iid).GroupChannel.upsert(r)), n(e, i)
										}))
									}), n)
								}
							}, {
								key: "acceptInvitation",
								value: function(e, n) {
									var t = this,
										r = C(ie.parse(arguments, [new ie({
											type: "string",
											optional: !0,
											defaultValue: null
										}), new ie({
											type: "callback"
										})]), 3),
										i = r[0];
									return e = r[1], n = r[2], ge(this._iid, (function(n) {
										i ? n(i, null) : O.get(t._iid).container.apiClient.acceptInvitation({
											channelUrl: t.url,
											accessCode: e
										}, (function(e, r) {
											var i = null;
											e || ((i = M.get(t._iid).GroupChannel.upsert(r)).myMemberState = "joined"), n(e, i)
										}))
									}), n)
								}
							}, {
								key: "declineInvitation",
								value: function(e) {
									var n = this;
									return ge(this._iid, (function(e) {
										O.get(n._iid).container.apiClient.declineInvitation({
											channelUrl: n.url
										}, (function(t, r) {
											var i, s = null;
											t || ((s = (i = M.get(n._iid).GroupChannel).upsert(r)).myMemberState = "none", n.isPublic || i.removeCachedChannel(n.url)), e(t, s)
										}))
									}), e)
								}
							}, {
								key: "join",
								value: function(e, n) {
									var t = this,
										r = C(ie.parse(arguments, [new ie({
											type: "string",
											optional: !0,
											defaultValue: null
										}), new ie({
											type: "callback"
										})]), 3),
										i = r[0];
									return e = r[1], n = r[2], ge(this._iid, (function(n) {
										i ? n(i, null) : O.get(t._iid).container.apiClient.joinGroupChannel({
											channelUrl: t.url,
											accessCode: e
										}, (function(e, r) {
											var i = null;
											e || ((i = M.get(t._iid).GroupChannel.upsert(r)).myMemberState = "joined"), n(e, i)
										}))
									}), n)
								}
							}, {
								key: "leave",
								value: function(e) {
									var n = this;
									return ge(this._iid, (function(e) {
										O.get(n._iid).container.apiClient.leaveGroupChannel({
											channelUrl: n.url
										}, (function(n, t) {
											return e(n, null)
										}))
									}), e)
								}
							}, {
								key: "muteUser",
								value: function(e, n, t, r) {
									return this.muteUserWithUserId(e ? e.userId : null, n, t, r)
								}
							}, {
								key: "muteUserWithUserId",
								value: function(e, n, t, r) {
									var i = this,
										s = C(ie.parse(arguments, [new ie({
											type: "string"
										}), new ie({
											type: "number",
											optional: !0,
											defaultValue: -1,
											constraint: function(e) {
												return -1 <= e
											}
										}), new ie({
											type: "string",
											optional: !0,
											defaultValue: ""
										}), new ie({
											type: "callback"
										})]), 5),
										a = s[0];
									return e = s[1], n = s[2], t = s[3], r = s[4], ge(this._iid, (function(r) {
										a ? r(a, null) : O.get(i._iid).container.apiClient.muteUser({
											channelUrl: i.url,
											userId: e,
											description: t,
											seconds: n,
											isGroupChannel: !0
										}, (function(e, n) {
											r(e, null)
										}))
									}), r)
								}
							}, {
								key: "unmuteUser",
								value: function(e, n) {
									return this.unmuteUserWithUserId(e ? e.userId : null, n)
								}
							}, {
								key: "unmuteUserWithUserId",
								value: function(e, n) {
									var t = this,
										r = C(ie.parse(arguments, [new ie({
											type: "string"
										}), new ie({
											type: "callback"
										})]), 3),
										i = r[0];
									return e = r[1], n = r[2], ge(this._iid, (function(n) {
										i ? n(i, null) : O.get(t._iid).container.apiClient.unmuteUser({
											channelUrl: t.url,
											userId: e,
											isGroupChannel: !0
										}, (function(e, t) {
											n(e, null)
										}))
									}), n)
								}
							}, {
								key: "banUser",
								value: function(e, n, t, r) {
									return this.banUserWithUserId(e ? e.userId : null, n, t, r)
								}
							}, {
								key: "banUserWithUserId",
								value: function(e, n, t, r) {
									var i = this,
										s = C(ie.parse(arguments, [new ie({
											type: "string"
										}), new ie({
											type: "number",
											optional: !0,
											defaultValue: -1,
											constraint: function(e) {
												return -1 <= e
											}
										}), new ie({
											type: "string"
										}), new ie({
											type: "callback"
										})]), 5),
										a = s[0];
									return e = s[1], n = s[2], t = s[3], r = s[4], ge(this._iid, (function(r) {
										a ? r(a, null) : O.get(i._iid).container.apiClient.banUser({
											channelUrl: i.url,
											userId: e,
											description: t,
											seconds: n,
											isGroupChannel: !0
										}, (function(e, n) {
											r(e, null)
										}))
									}), r)
								}
							}, {
								key: "unbanUser",
								value: function(e, n) {
									return this.unbanUserWithUserId(e ? e.userId : null, n)
								}
							}, {
								key: "unbanUserWithUserId",
								value: function(e, n) {
									var t = this,
										r = C(ie.parse(arguments, [new ie({
											type: "string"
										}), new ie({
											type: "callback"
										})]), 3),
										i = r[0];
									return e = r[1], n = r[2], ge(this._iid, (function(n) {
										i ? n(i, null) : O.get(t._iid).container.apiClient.unbanUser({
											channelUrl: t.url,
											userId: e,
											isGroupChannel: !0
										}, (function(e, t) {
											n(e, null)
										}))
									}), n)
								}
							}, {
								key: "updateJoinedMemberCount",
								value: function() {
									var e;
									this.isSuper || this.isBroadcast || (e = M.get(this._iid).Member, this.joinedMemberCount = this.members.filter((function(n) {
										return n.state === e.JOINED
									})).length)
								}
							}, {
								key: "setLatestMemberCount",
								value: function(e, n, t) {
									var r = !1;
									return "number" == typeof e && "number" == typeof n && "number" == typeof t && t >= De.get(this) && (De.set(this, t), r = n !== this.joinedMemberCount || e !== this.memberCount, this.memberCount = e, this.joinedMemberCount = n), r
								}
							}, {
								key: "hide",
								value: function(e, n, t) {
									var r = this,
										i = C(ie.parse(arguments, [new ie({
											type: "boolean",
											optional: !0,
											defaultValue: !1
										}), new ie({
											type: "boolean",
											optional: !0,
											defaultValue: !0
										}), new ie({
											type: "callback"
										})]), 4),
										s = i[0];
									return e = i[1], n = i[2], t = i[3], ge(this._iid, (function(t) {
										s ? t(s, null) : O.get(r._iid).container.apiClient.hideGroupChannel({
											channelUrl: r.url,
											hidePreviousMessages: e,
											allowAutoUnhide: n
										}, (function(i, s) {
											var a;
											i || (a = M.get(r._iid).GroupChannel, r.isHidden = !0, r.hiddenState = n ? a.HiddenState.HIDDEN_ALLOW_AUTO_UNHIDE : a.HiddenState.HIDDEN_PREVENT_AUTO_UNHIDE, e && r._setGroupChannelUnreadCount(0, 0), s.hasOwnProperty("ts_message_offset") && (r._messageOffsetTimestamp = s.ts_message_offset), a.cachedChannels[r.url] = r), t(i, s)
										}))
									}), t)
								}
							}, {
								key: "unhide",
								value: function(e) {
									var n = this;
									return ge(this._iid, (function(e) {
										O.get(n._iid).container.apiClient.unhideGroupChannel({
											channelUrl: n.url
										}, (function(t, r) {
											var i;
											t || (i = M.get(n._iid).GroupChannel, n.isHidden = !1, n.hiddenState = i.HiddenState.UNHIDDEN, i.cachedChannels[n.url] = n), e(t, r)
										}))
									}), e)
								}
							}, {
								key: "freeze",
								value: function(e) {
									var n = this;
									return ge(this._iid, (function(e) {
										O.get(n._iid).container.apiClient.freeze({
											channelUrl: n.url,
											isGroupChannel: !0,
											freezing: !0
										}, (function(t, r) {
											var i;
											t || (i = M.get(n._iid).GroupChannel, n.isFrozen = !0, i.cachedChannels[n.url] = n), e(t, null)
										}))
									}), e)
								}
							}, {
								key: "unfreeze",
								value: function(e) {
									var n = this;
									return ge(this._iid, (function(e) {
										O.get(n._iid).container.apiClient.freeze({
											channelUrl: n.url,
											isGroupChannel: !0,
											freezing: !1
										}, (function(t, r) {
											var i;
											t || (i = M.get(n._iid).GroupChannel, n.isFrozen = !1, i.cachedChannels[n.url] = n), e(t, null)
										}))
									}), e)
								}
							}, {
								key: "delete",
								value: function(e) {
									var n = this;
									return ge(this._iid, (function(e) {
										O.get(n._iid).container.apiClient.deleteGroupChannel({
											channelUrl: n.url
										}, (function(t, r) {
											t || M.get(n._iid).GroupChannel.removeCachedChannel(n.url), e(t, r)
										}))
									}), e)
								}
							}, {
								key: "markAsRead",
								value: function() {
									var e = this,
										n = M.get(this._iid).Command,
										t = ot.getInstance(this._iid);
									n = n.bRead({
										channelUrl: this.url
									}), t.sendCommand(n, (function(n, r) {
										var i;
										if (t.getErrorFirstCallback() && (r = (i = [n, r])[0], n = i[1]), !r && t.currentUser && (e.updateReadReceipt(t.currentUser.userId, n.getJsonElement().ts), 0 < e.unreadMessageCount || 0 < e.unreadMentionCount))
											for (var s in e._setGroupChannelUnreadCount(0, 0), t.channelHandlers) t.channelHandlers[s].onChannelChanged(e)
									}))
								}
							}, {
								key: "getUnreadMemberCount",
								value: function(e) {
									var n = ot.getInstance(this._iid),
										t = M.get(this._iid).Member;
									if (e instanceof Ee && !e.isAdminMessage() && n.currentUser && !this.isSuper && !this.isBroadcast) {
										for (var r = 0, i = e.createdAt, s = this.members, a = 0; a < s.length; a++) {
											var o = s[a];
											n.currentUser.userId === o.userId || o.state !== t.JOINED || e.sender && e.sender.userId === o.userId || (this.cachedReadReceiptStatus[o.userId] || 0) < i && r++
										}
										return r
									}
									return 0
								}
							}, {
								key: "getReadReceipt",
								value: function(e) {
									return this.getUnreadMemberCount(e)
								}
							}, {
								key: "markAsDelivered",
								value: function() {
									var e = this,
										n = ot.getInstance(this._iid),
										t = n.currentUser ? n.currentUser.userId : null;
									O.get(this._iid).container.apiClient.markAsDelivered({
										channelUrl: this.url,
										userId: t
									}, (function(n, r) {
										n ? q.debug(n) : (r = r.hasOwnProperty("ts") ? r.ts : 0, e.updateDeliveryReceipt(t, r))
									}))
								}
							}, {
								key: "getUndeliveredMemberCount",
								value: function(e) {
									var n = ot.getInstance(this._iid),
										t = M.get(this._iid).Member;
									if (this.cachedDeliveryReceiptStatus && e instanceof Ee && !e.isAdminMessage() && n.currentUser && !this.isSuper && !this.isBroadcast) {
										var r = e.createdAt,
											i = 0,
											s = k(this.members);
										try {
											for (s.s(); !(a = s.n()).done;) {
												var a = a.value;
												n.currentUser.userId === a.userId || a.state !== t.JOINED || e.sender && e.sender.userId === a.userId || this.cachedDeliveryReceiptStatus[a.userId] < r && i++
											}
										} catch (e) {
											s.e(e)
										} finally {
											s.f()
										}
										return i
									}
									return 0
								}
							}, {
								key: "getDeliveryReceipt",
								value: function(e) {
									return this.getUndeliveredMemberCount(e)
								}
							}, {
								key: "getReadMembers",
								value: function(e) {
									var n = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
										t = ot.getInstance(this._iid);
									if (t.currentUser && !this.isSuper && !this.isBroadcast && e instanceof Ee && !e.isAdminMessage()) {
										for (var r = [], i = 0; i < this.members.length; i++) {
											var s = this.members[i];
											(n || s.userId !== t.currentUser.userId && s.userId !== e.sender.userId) && (this.cachedReadReceiptStatus[s.userId] || 0) >= e.createdAt && r.push(s)
										}
										return r
									}
									return []
								}
							}, {
								key: "getUnreadMembers",
								value: function(e) {
									var n = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
										t = ot.getInstance(this._iid);
									if (t.currentUser && !this.isSuper && !this.isBroadcast && e instanceof Ee && !e.isAdminMessage()) {
										for (var r = [], i = 0; i < this.members.length; i++) {
											var s = this.members[i];
											(n || s.userId !== t.currentUser.userId && s.userId !== e.sender.userId) && (this.cachedReadReceiptStatus[s.userId] || 0) < e.createdAt && r.push(s)
										}
										return r
									}
									return []
								}
							}, {
								key: "getReadStatus",
								value: function() {
									var e = this,
										n = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
										t = ot.getInstance(this._iid);
									if (!t.currentUser || this.isSuper || this.isBroadcast) return {};
									var r, i = {};
									for (r in this.cachedReadReceiptStatus) ! function(r) {
										if (n || r !== t.currentUser.userId) {
											var s = e.cachedReadReceiptStatus[r],
												a = e.members.filter((function(e) {
													return e.userId === r
												}));
											i[r] = {
												user: 0 < a.length ? a[0] : null,
												last_seen_at: parseInt(s)
											}
										}
									}(r);
									return i
								}
							}, {
								key: "updateReadReceipt",
								value: function(e, n) {
									var t = this.cachedReadReceiptStatus[e];
									(!t || t < n) && (this.cachedReadReceiptStatus[e] = n, (t = ot.getInstance(this._iid)).currentUser && e === t.currentUser.userId && (this.myLastRead = n))
								}
							}, {
								key: "updateDeliveryReceipt",
								value: function(e, n) {
									var t;
									this.cachedDeliveryReceiptStatus && (this.cachedDeliveryReceiptStatus.hasOwnProperty(e) && (t = this.cachedDeliveryReceiptStatus[e]) && !(t < n) || (this.cachedDeliveryReceiptStatus[e] = n))
								}
							}, {
								key: "startTyping",
								value: function() {
									var e = ot.getInstance(this._iid),
										n = (new Date).getTime(),
										t = e.Options.typingIndicatorThrottle;
									("number" != typeof t || t < 1e3 || 9e3 < t) && (t = 1e3);
									var r = Pe.get(this);
									n - r.start >= t && (r.end = 0, r.start = n, r = M.get(this._iid).Command.bTypeStart({
										channelUrl: this.url,
										time: r.start
									}), e.sendCommand(r, null))
								}
							}, {
								key: "endTyping",
								value: function() {
									var e = ot.getInstance(this._iid),
										n = (new Date).getTime(),
										t = e.Options.typingIndicatorThrottle;
									("number" != typeof t || t < 1e3 || 9e3 < t) && (t = 1e3);
									var r = Pe.get(this);
									n - r.end >= t && (r.start = 0, r.end = n, r = M.get(this._iid).Command.bTypeEnd({
										channelUrl: this.url,
										time: r.end
									}), e.sendCommand(r, null))
								}
							}, {
								key: "invalidateTypingStatus",
								value: function() {
									var e, n = Le.get(this),
										t = (new Date).getTime(),
										r = !1;
									for (e in n) 1e4 <= t - n[e].ts && (delete n[e], r = !0);
									return r
								}
							}, {
								key: "getTypingMembers",
								value: function() {
									var e, n = [];
									for (e in Le.get(this)) {
										var t = this.memberMap[e];
										t && n.push(t)
									}
									return n
								}
							}, {
								key: "getTypingUsers",
								value: function() {
									var e, n = Le.get(this),
										t = [];
									for (e in n) {
										var r = n[e].user;
										t.push(r)
									}
									return t
								}
							}, {
								key: "updateTypingStatus",
								value: function(e, n) {
									var t = Le.get(this);
									n ? t[e.userId] = {
										user: e,
										ts: (new Date).getTime()
									} : delete t[e.userId]
								}
							}, {
								key: "isTyping",
								value: function() {
									var e = Le.get(this);
									return 0 !== Object.keys(e).length
								}
							}, {
								key: "registerScheduledUserMessage",
								value: function(e, n) {
									var t = this,
										r = (i = M.get(this._iid)).ScheduledUserMessage,
										i = i.ScheduledUserMessageParams,
										s = (i = C(ie.parse(arguments, [new ie({
											type: i,
											constraint: function(e) {
												return "string" == typeof e.message && "string" == typeof e._getScheduleString()
											}
										}), new ie({
											type: "callback"
										})]), 3))[0];
									return e = i[1], n = i[2], ge(this._iid, (function(n) {
										s ? n(s, null) : O.get(t._iid).container.apiClient.registerScheduledUserMessage({
											groupChannelParams: e,
											channelUrl: t.url,
											isOpenChannel: !1
										}, (function(e, i) {
											var s = null;
											e || (s = new r(i), (i = ot.getInstance(t._iid).currentUser) && s._sender && i.userId === s._sender.userId && (i.nickname = s._sender.nickname, i.plainProfileUrl = s._sender.plainProfileUrl, i.metaData = s._sender.metaData)), n(e, s)
										}))
									}), n)
								}
							}, {
								key: "getPushPreference",
								value: function(e) {
									var n = this;
									return ge(this._iid, (function(e) {
										O.get(n._iid).container.apiClient.getMyPushTriggerOption({
											channelUrl: n.url
										}, (function(t, r) {
											var i = null;
											if (!t) {
												try {
													i = r.enable
												} catch (t) {
													i = !1
												}
												n.isPushEnabled = i
											}
											e && e(t, i)
										}))
									}), e)
								}
							}, {
								key: "setPushPreference",
								value: function(e, n) {
									var t = this;
									return ge(this._iid, (function(n) {
										var r = M.get(t._iid).GroupChannel;
										O.get(t._iid).container.apiClient.setMyPushTriggerOption({
											channelUrl: t.url,
											enable: e
										}, (function(e, i) {
											e || (t.isPushEnabled = i.enable, t.isPushEnabled || (t.myPushTriggerOption = r.PushTriggerOption.OFF)), n(e, i)
										}))
									}), n)
								}
							}, {
								key: "getMyPushTriggerOption",
								value: function(e) {
									var t = this;
									return ge(this._iid, (function(e) {
										O.get(t._iid).container.apiClient.getMyPushTriggerOption({
											channelUrl: t.url
										}, (function(r, i) {
											var s = null;
											if (!r) {
												try {
													s = i.push_trigger_option || n.PushTriggerOption.DEFAULT
												} catch (r) {
													q.debug(r)
												}
												t.myPushTriggerOption = s
											}
											e(r, s)
										}))
									}), e)
								}
							}, {
								key: "setMyPushTriggerOption",
								value: function(e, n) {
									var t = this,
										r = M.get(this._iid).GroupChannel,
										i = (r = C(ie.parse(arguments, [new ie({
											type: r.PushTriggerOption
										}), new ie({
											type: "callback"
										})]), 3))[0];
									return e = r[1], n = r[2], ge(this._iid, (function(n) {
										i ? n(i, null) : O.get(t._iid).container.apiClient.setMyPushTriggerOption({
											channelUrl: t.url,
											pushTriggerOption: e
										}, (function(e, r) {
											var i = null;
											if (!e) {
												try {
													i = r.push_trigger_option
												} catch (e) {
													q.debug(e)
												}
												t.myPushTriggerOption = i
											}
											n(e, i)
										}))
									}), n)
								}
							}, {
								key: "setMyCountPreference",
								value: function(e, n) {
									var t = this,
										r = M.get(this._iid).GroupChannel,
										i = C(ie.parse(arguments, [new ie({
											type: r.CountPreference
										}), new ie({
											type: "callback"
										})]), 3),
										s = i[0];
									return e = i[1], n = i[2], ge(this._iid, (function(n) {
										s ? n(s, null) : O.get(t._iid).container.apiClient.setMyCountPreference({
											channelUrl: t.url,
											countPreference: e
										}, (function(e, i) {
											var s = null;
											e || (s = t.myCountPreference = i.count_preference, t._setGroupChannelUnreadCount(t.unreadMessageCount, t.unreadMentionCount), r.cachedChannels[t.url] = t), n(e, s)
										}))
									}), n)
								}
							}, {
								key: "resetMyHistory",
								value: function(e) {
									var n = this;
									return ge(this._iid, (function(e) {
										O.get(n._iid).container.apiClient.resetMyHistory({
											channelUrl: n.url
										}, (function(t, r) {
											var i;
											!t && r.hasOwnProperty("ts_message_offset") && (i = M.get(n._iid).GroupChannel, n._messageOffsetTimestamp = r.ts_message_offset, i.cachedChannels[n.url] = n), e(t, r)
										}))
									}), e)
								}
							}], [{
								key: "MemberStateFilter",
								get: function() {
									return {
										ALL: "all",
										JOINED: "joined_only",
										INVITED: "invited_only",
										INVITED_BY_FRIEND: "invited_by_friend",
										INVITED_BY_NON_FRIEND: "invited_by_non_friend"
									}
								}
							}, {
								key: "PushTriggerOption",
								get: function() {
									return {
										DEFAULT: "default",
										ALL: "all",
										MENTION_ONLY: "mention_only",
										OFF: "off"
									}
								}
							}, {
								key: "CountPreference",
								get: function() {
									return {
										ALL: "all",
										UNREAD_MESSAGE_COUNT_ONLY: "unread_message_count_only",
										UNREAD_MENTION_COUNT_ONLY: "unread_mention_count_only",
										OFF: "off"
									}
								}
							}, {
								key: "HiddenState",
								get: function() {
									return {
										UNHIDDEN: "unhidden",
										HIDDEN_ALLOW_AUTO_UNHIDE: "hidden_allow_auto_unhide",
										HIDDEN_PREVENT_AUTO_UNHIDE: "hidden_prevent_auto_unhide"
									}
								}
							}, {
								key: "PublicChannelFilter",
								get: function() {
									return {
										ALL: "all",
										PUBLIC: "public",
										PRIVATE: "private"
									}
								}
							}, {
								key: "SuperChannelFilter",
								get: function() {
									return {
										ALL: "all",
										SUPER: "super",
										NON_SUPER: "nonsuper"
									}
								}
							}, {
								key: "UnreadChannelFilter",
								get: function() {
									return {
										ALL: "all",
										UNREAD_MESSAGE: "unread_message"
									}
								}
							}, {
								key: "HiddenChannelFilter",
								get: function() {
									return {
										UNHIDDEN: "unhidden_only",
										HIDDEN: "hidden_only",
										HIDDEN_ALLOW_AUTO_UNHIDE: "hidden_allow_auto_unhide",
										HIDDEN_PREVENT_AUTO_UNHIDE: "hidden_prevent_auto_unhide"
									}
								}
							}, {
								key: "Role",
								get: function() {
									return {
										OPERATOR: "operator",
										NONE: "none"
									}
								}
							}, {
								key: "UnreadItemKey",
								get: function() {
									return {
										GROUP_CHANNEL_UNREAD_MENTION_COUNT: "group_channel_unread_mention_count",
										NONSUPER_UNREAD_MENTION_COUNT: "non_super_group_channel_unread_mention_count",
										SUPER_UNREAD_MENTION_COUNT: "super_group_channel_unread_mention_count",
										GROUP_CHANNEL_UNREAD_MESSAGE_COUNT: "group_channel_unread_message_count",
										NONSUPER_UNREAD_MESSAGE_COUNT: "non_super_group_channel_unread_message_count",
										SUPER_UNREAD_MESSAGE_COUNT: "super_group_channel_unread_message_count",
										GROUP_CHANNEL_INVITATION_COUNT: "group_channel_invitation_count",
										NONSUPER_INVITATION_COUNT: "non_super_group_channel_invitation_count",
										SUPER_INVITATION_COUNT: "super_group_channel_invitation_count"
									}
								}
							}, {
								key: "cachedChannels",
								get: function() {
									return we[this._iid] || (we[this._iid] = {}), we[this._iid]
								}
							}, {
								key: "buildFromSerializedData",
								value: function(e) {
									var n, t = (n = M.get(this._iid)).User,
										r = n.Member,
										i = n.GroupChannel,
										s = n.BaseMessage,
										o = n.UserMessage,
										l = n.FileMessage,
										u = n.AdminMessage;
									return e = null != (e = (n = ye.deserialize(e)).lastMessage) && "object" === a(e) ? e.messageType === s.MESSAGE_TYPE_USER ? new o(o.objectify(d(d({}, e), {}, {
										channel: {
											url: e.channelUrl,
											channelType: e.channelType
										},
										user: e.sender,
										mentionedUsers: e.mentionedUsers
									}))) : e.messageType === s.MESSAGE_TYPE_FILE ? new l(l.objectify(d(d({}, e), {}, {
										channel: {
											url: e.channelUrl,
											channelType: e.channelType
										},
										user: e.sender,
										mentionedUsers: e.mentionedUsers
									}))) : new u(u.objectify(d(d({}, e), {}, {
										channel: {
											url: e.channelUrl,
											channelType: e.channelType
										},
										mentionedUsers: e.mentionedUsers
									}))) : null, new i({
										channel_url: n.url,
										name: n.name,
										cover_url: n.coverUrl,
										data: n.data,
										custom_type: n.customType,
										invited_at: n.invitedAt,
										created_at: n.createdAt / 1e3,
										is_access_code_required: n.isAccessCodeRequired,
										is_distinct: n.isDistinct,
										is_super: n.isSuper,
										is_broadcast: n.isBroadcast,
										is_public: n.isPublic,
										is_discoverable: n.isDiscoverable,
										is_hidden: n.isHidden,
										is_ephemeral: n.isEphemeral,
										is_muted: n.myMutedState,
										is_push_enabled: n.isPushEnabled,
										freeze: n.isFrozen,
										unread_message_count: n.unreadMessageCount,
										unread_mention_count: n.unreadMentionCount,
										push_trigger_option: n.myPushTriggerOption,
										count_preference: n.myCountPreference,
										hidden_state: n.hiddenState,
										member_count: n.memberCount,
										joined_member_count: n.joinedMemberCount,
										member_state: n.myMemberState,
										my_role: n.myRole,
										user_last_read: n.myLastRead,
										ts_message_offset: n.messageOffsetTimestamp,
										message_survival_seconds: n.messageSurvivalSeconds,
										read_receipt: n.cachedReadReceiptStatus,
										delivery_receipt: n.cachedDeliveryReceiptStatus,
										members: n.members.map((function(e) {
											return r.objectify(d({
												user: e
											}, e))
										})),
										last_message: e,
										created_by: null !== n.creator && void 0 !== n.creator && "object" === a(n.creator) ? t.objectify(n.creator) : null,
										inviter: null !== n.inviter && void 0 !== n.inviter && "object" === a(n.inviter) ? t.objectify(n.inviter) : null
									})
								}
							}, {
								key: "upsert",
								value: function(e) {
									var n, t = M.get(this._iid).GroupChannel,
										r = new t(e);
									return t.cachedChannels.hasOwnProperty(r.url) ? (r.isEphemeral && (n = t.cachedChannels[r.url], e.last_message = n.lastMessage, e.unread_message_count = n.unreadMessageCount), t.cachedChannels[r.url].update(e)) : t.cachedChannels[r.url] = r, t.cachedChannels[r.url]
								}
							}, {
								key: "removeCachedChannel",
								value: function(e) {
									var n = (t = M.get(this._iid)).GroupChannel,
										t = t.FileMessageQueue;
									n.cachedChannels[e] && delete n.cachedChannels[e], t.delete(e)
								}
							}, {
								key: "clearCache",
								value: function() {
									we[this._iid] = {}, M.get(this._iid).FileMessageQueue.clear()
								}
							}, {
								key: "getChannel",
								value: function(e, n) {
									var t, r = C(ie.parse(arguments, [new ie({
											type: "string",
											constraint: function(e) {
												return 0 < e.length
											}
										}), new ie({
											type: "string",
											optional: !0,
											nullable: !0,
											defaultValue: null
										}), new ie({
											type: "callback"
										})]), 4),
										i = r[0];
									if (e = r[1], t = r[2], n = r[3], i) return ge(this._iid, (function(e) {
										e(i, null)
									}), n);
									var s = M.get(this._iid).GroupChannel;
									return s.cachedChannels[e] ? ge(this._iid, (function(n) {
										n(null, s.cachedChannels[e])
									}), n) : s.getChannelWithoutCache(e, t, n)
								}
							}, {
								key: "getChannelWithoutCache",
								value: function(e, n) {
									var t, r = this,
										i = C(ie.parse(arguments, [new ie({
											type: "string",
											constraint: function(e) {
												return 0 < e.length
											}
										}), new ie({
											type: "string",
											optional: !0,
											nullable: !0,
											defaultValue: null
										}), new ie({
											type: "callback"
										})]), 4),
										s = i[0];
									return e = i[1], t = i[2], n = i[3], ge(this._iid, (function(n) {
										s ? n(s, null) : O.get(r._iid).container.apiClient.getGroupChannel({
											channelUrl: e,
											internalCall: t,
											showMember: !0
										}, (function(e, t) {
											var i = null;
											e || (i = r.upsert(t)), n(e, i)
										}))
									}), n)
								}
							}, {
								key: "createDistinctChannelIfNotExist",
								value: function(e, n) {
									var t = this,
										r = M.get(this._iid).GroupChannelParams,
										i = (r = C(ie.parse(arguments, [new ie({
											type: r,
											constraint: function(e) {
												return e._validate()
											}
										}), new ie({
											type: "callback"
										})]), 3))[0];
									return e = r[1], n = r[2], ge(this._iid, (function(n) {
										i ? n(i, null) : (e.isPublic || (e.accessCode = null), O.get(t._iid).container.apiClient.createGroupChannel(d(d({}, e), {}, {
											isDistinct: !0
										}), (function(e, r) {
											var i, s = null;
											e || (s = {
												channel: new(i = M.get(t._iid).GroupChannel)(r),
												isCreated: r.is_created
											}, i.cachedChannels[s.channel.url] = s.channel), n(e, s)
										})))
									}), n)
								}
							}, {
								key: "createChannel",
								value: function() {
									var e = this,
										n = ie.toArray(arguments),
										t = void 0;
									"function" == typeof n[n.length - 1] && (t = n.pop());
									var r = (i = M.get(this._iid)).GroupChannel,
										i = i.GroupChannelParams;
									if (n[0] instanceof i && 1 === n.length) return ge(this._iid, (function(t) {
										var i = n[0];
										i.isPublic || (i.accessCode = null), i._validate() ? O.get(e._iid).container.apiClient.createGroupChannel(i, (function(e, n) {
											var i = null;
											e || (i = new r(n), r.cachedChannels[i.url] = i), t(e, i)
										})) : t(ie.error, null)
									}), t);
									if (Array.isArray(n[0])) {
										var s = new i;
										switch (n.length) {
											case 1:
												s.addUsers(n[0]);
												break;
											case 2:
												s.addUsers(n[0]), s.isDistinct = n[1];
												break;
											case 3:
												s.addUsers(n[0]), s.isDistinct = n[1], s.customType = n[2];
												break;
											case 5:
												s.addUsers(n[0]), s.isDistinct = n[1], s.name = n[2], "string" == typeof n[3] ? s.coverUrl = n[3] : s.coverImage = n[3], s.data = n[4];
												break;
											case 6:
												s.addUsers(n[0]), s.isDistinct = n[1], s.name = n[2], "string" == typeof n[3] ? s.coverUrl = n[3] : s.coverImage = n[3], s.data = n[4], s.customType = n[5];
												break;
											default:
												return ge(this._iid, (function(e) {
													return e(ie.error, null)
												}), t)
										}
										return t ? r.createChannel(s, t) : r.createChannel(s)
									}
									return ge(this._iid, (function(e) {
										return e(ie.error, null)
									}), t)
								}
							}, {
								key: "createChannelWithUserIds",
								value: function() {
									var e = ie.toArray(arguments),
										n = void 0;
									"function" == typeof e[e.length - 1] && (n = e.pop());
									var t = M.get(this._iid),
										r = t.GroupChannel,
										i = new t.GroupChannelParams;
									switch (e.length) {
										case 1:
											i.addUserIds(e[0]);
											break;
										case 2:
											i.addUserIds(e[0]), i.isDistinct = e[1];
											break;
										case 3:
											i.addUserIds(e[0]), i.isDistinct = e[1], i.customType = e[2];
											break;
										case 5:
											i.addUserIds(e[0]), i.isDistinct = e[1], i.name = e[2], "string" == typeof e[3] ? i.coverUrl = e[3] : i.coverImage = e[3], i.data = e[4];
											break;
										case 6:
											i.addUserIds(e[0]), i.isDistinct = e[1], i.name = e[2], "string" == typeof e[3] ? i.coverUrl = e[3] : i.coverImage = e[3], i.data = e[4], i.customType = e[5];
											break;
										default:
											return ge(this._iid, (function(e) {
												return e(ie.error, null)
											}), n)
									}
									return r.createChannel(i, n)
								}
							}, {
								key: "createMyGroupChannelListQuery",
								value: function() {
									return new(M.get(this._iid).GroupChannelListQuery)
								}
							}, {
								key: "createPublicGroupChannelListQuery",
								value: function() {
									return new(M.get(this._iid).PublicGroupChannelListQuery)
								}
							}, {
								key: "markAsReadAllLastSentAt",
								get: function() {
									return Me[this._iid] || 0
								},
								set: function(e) {
									Me[this._iid] = e
								}
							}, {
								key: "getChannelCount",
								value: function(e, n) {
									return ot.getInstance(this._iid).getGroupChannelCount(e, n)
								}
							}, {
								key: "getUnreadItemCount",
								value: function(e, n) {
									return ot.getInstance(this._iid).getUnreadItemCount(e, n)
								}
							}, {
								key: "getTotalUnreadMessageCount",
								value: function() {
									var e = ie.toArray(arguments),
										n = "function" == typeof e[e.length - 1] ? e.pop() : null,
										t = ot.getInstance(this._iid);
									return t.getTotalUnreadMessageCount.apply(t, b(e).concat([n]))
								}
							}, {
								key: "getTotalUnreadChannelCount",
								value: function(e) {
									return ot.getInstance(this._iid).getTotalUnreadChannelCount(e)
								}
							}]), n
						}(),
						He = function() {
							h(n, Ce);
							var e = v(n);

							function n(t) {
								var r;
								return o(this, n), (r = e.call(this, t)).state = "", r.role = "", r.isMuted = !1, r.isBlockedByMe = !1, r.isBlockingMe = !1, t && r._update(t), r
							}
							return u(n, [{
								key: "_update",
								value: function(e) {
									this.state = e.state, this.role = e.role || Fe.Role.NONE, e.hasOwnProperty("is_muted") && (this.isMuted = e.is_muted), e.hasOwnProperty("is_blocked_by_me") && (this.isBlockedByMe = e.is_blocked_by_me), e.hasOwnProperty("is_blocking_me") && (this.isBlockingMe = e.is_blocking_me)
								}
							}, {
								key: "parse",
								value: function(e) {
									this._update(e)
								}
							}], [{
								key: "objectify",
								value: function(e) {
									var n = M.get(this._iid).User,
										t = e.user,
										r = e.state,
										i = void 0 === (s = e.role) ? "" : s,
										s = void 0 !== (a = e.isMuted) && a,
										a = void 0 !== (a = e.isBlockedByMe) && a;
									return e = void 0 !== (e = e.isBlockingMe) && e, (t = n.objectify(t)).state = r, t.role = i, t.is_muted = s, t.is_blocked_by_me = a, t.is_blocking_me = e, t
								}
							}, {
								key: "build",
								value: function(e, n, t, r, i, s) {
									var a = M.get(this._iid).User;
									return this.objectify({
										user: new a(e),
										state: n,
										role: t,
										isMuted: r,
										isBlockedByMe: i,
										isBlockingMe: s
									})
								}
							}, {
								key: "buildFromSerializedData",
								value: function(e) {
									var n = M.get(this._iid).Member;
									return e = ye.deserialize(e), new n(n.objectify(d({
										user: e
									}, e)))
								}
							}, {
								key: "JOINED",
								get: function() {
									return "joined"
								}
							}, {
								key: "INVITED",
								get: function() {
									return "invited"
								}
							}]), n
						}(),
						xe = function() {
							h(n, Ce);
							var e = v(n);

							function n(t) {
								var r;
								return o(this, n), (r = e.call(this, t)).role = "", r.isBlockedByMe = !1, t && r._update(t), r
							}
							return u(n, [{
								key: "parse",
								value: function(e) {
									this._update(e)
								}
							}, {
								key: "_update",
								value: function(e) {
									this.role = e.role || Fe.Role.NONE, e.hasOwnProperty("is_blocked_by_me") && (this.isBlockedByMe = e.is_blocked_by_me)
								}
							}], [{
								key: "objectify",
								value: function(e) {
									var n = M.get(this._iid).User,
										t = e.user,
										r = void 0 === (r = e.role) ? "" : r;
									return e = void 0 !== (e = e.isBlockedByMe) && e, (t = n.objectify(t)).role = r, t.is_blocked_by_me = e, t
								}
							}, {
								key: "build",
								value: function(e, n) {
									var t = M.get(this._iid).User;
									return this.objectify({
										user: new t(e),
										isBlockedByMe: n
									})
								}
							}, {
								key: "buildFromSerializedData",
								value: function(e) {
									var n = M.get(this._iid).Sender;
									return e = ye.deserialize(e), new n(n.objectify(d({
										user: e
									}, e)))
								}
							}]), n
						}(),
						Ge = function() {
							function e(n) {
								o(this, e), this.emojiHash = null, this.emojiCategories = null, n && this._update(n)
							}
							return u(e, [{
								key: "_update",
								value: function(e) {
									var n = M.get(this._iid).EmojiCategory;
									this.emojiHash = e.emoji_hash || "", this.emojiCategories = e.emoji_categories ? e.emoji_categories.map((function(e) {
										return new n(e)
									})) : []
								}
							}]), e
						}(),
						je = function() {
							function e(n) {
								o(this, e), this.id = null, this.name = null, this.url = null, this.emojis = null, n && this._update(n)
							}
							return u(e, [{
								key: "_update",
								value: function(e) {
									var n = M.get(this._iid).Emoji;
									this.id = e.id || 0, this.name = e.name || "", this.url = e.url || "", this.emojis = e.emojis ? e.emojis.map((function(e) {
										return new n(e)
									})) : []
								}
							}]), e
						}(),
						Be = function() {
							function e(n) {
								o(this, e), this.key = null, this.url = null, n && this._update(n)
							}
							return u(e, [{
								key: "_update",
								value: function(e) {
									this.key = e.key, this.url = e.url
								}
							}]), e
						}(),
						ze = {},
						qe = {},
						Qe = new WeakMap,
						Ye = function() {
							h(n, Ue);
							var e = v(n);

							function n(t) {
								var r;
								return o(this, n), (r = e.call(this, t)).channelType = Ue.CHANNEL_TYPE_OPEN, r.participantCount = 0, Qe.set(m(r), 0), r.operators = [], t && r._update(t), r
							}
							return u(n, [{
								key: "_update",
								value: function(e) {
									var n = M.get(this._iid).User;
									e.hasOwnProperty("participant_count") && (this.participantCount = parseInt(e.participant_count)), e.hasOwnProperty("operators") && Array.isArray(e.operators) && (this.operators = e.operators.map((function(e) {
										return new n(e)
									})))
								}
							}, {
								key: "parse",
								value: function(e) {
									this._update(e)
								}
							}, {
								key: "update",
								value: function(e) {
									this.__update(e), this._update(e)
								}
							}, {
								key: "createParticipantListQuery",
								value: function() {
									return new(M.get(this._iid).ParticipantListQuery)({
										channelUrl: this.url
									})
								}
							}, {
								key: "createMutedUserListQuery",
								value: function() {
									return new(M.get(this._iid).MutedUserListQuery)({
										channelUrl: this.url,
										isOpenChannel: !0
									})
								}
							}, {
								key: "createBannedUserListQuery",
								value: function() {
									return new(M.get(this._iid).BannedUserListQuery)({
										channelUrl: this.url,
										isOpenChannel: !0
									})
								}
							}, {
								key: "isOperator",
								value: function(e) {
									return !!e && this.isOperatorWithUserId(e.userId)
								}
							}, {
								key: "isOperatorWithUserId",
								value: function(e) {
									return -1 < this.operators.map((function(e) {
										return e.userId
									})).indexOf(e)
								}
							}, {
								key: "refresh",
								value: function(e) {
									return M.get(this._iid).OpenChannel.getChannelWithoutCache(this.url, e)
								}
							}, {
								key: "enter",
								value: function(e) {
									var n = this;
									return ge(this._iid, (function(e) {
										var t = M.get(n._iid).Command.bEnter({
												channelUrl: n.url
											}),
											r = ot.getInstance(n._iid);
										r.sendCommand(t, (function(t, i) {
											var s;
											r.getErrorFirstCallback() && (i = (s = [t, i])[0], t = s[1]), i ? (i = i ? new R(i.message, i.code) : null, e(i, null)) : (M.get(n._iid).OpenChannel.enteredChannels[n.url] = n).refresh((function() {
												return e(null, null)
											}))
										}))
									}), e)
								}
							}, {
								key: "exit",
								value: function(e) {
									var n = this;
									return ge(this._iid, (function(e) {
										var t = M.get(n._iid),
											r = t.Command,
											i = t.FileMessageQueue,
											s = (r = r.bExit({
												channelUrl: n.url
											}), ot.getInstance(n._iid));
										s.sendCommand(r, (function(t, r) {
											var a;
											s.getErrorFirstCallback() && (r = (a = [t, r])[0], t = a[1]), r ? (r = r ? new R(r.message, r.code) : null, e(r, null)) : (delete M.get(n._iid).OpenChannel.enteredChannels[n.url], i.delete(n.url), e(null, null))
										}))
									}), e)
								}
							}, {
								key: "updateChannel",
								value: function() {
									var e = this,
										n = ie.toArray(arguments),
										t = null;
									"function" == typeof n[n.length - 1] && (t = n.pop());
									var r = (i = M.get(this._iid)).OpenChannel,
										i = i.OpenChannelParams;
									if (n[0] instanceof i && 1 === n.length) return ge(this._iid, (function(t) {
										var i = n[0];
										i.channelUrl = e.url, i._validate() ? O.get(e._iid).container.apiClient.updateOpenChannel(i, (function(e, n) {
											var i = null;
											e || (i = r.upsert(n)), t(e, i)
										})) : t(ie.error, null)
									}), t);
									if (3 === n.length) {
										var s = new i;
										return s.channelUrl = this.url, s.name = n[0], s.coverUrlOrImage = n[1], s.data = n[2], s.operatorUserIds = this.operators.map((function(e) {
											return e.userId
										})), this.updateChannel(s, t)
									}
									return 4 === n.length ? ((s = new i).channelUrl = this.url, s.name = n[0], s.coverUrlOrImage = n[1], s.data = n[2], Array.isArray(n[3]) && (s.operatorUserIds = n[3]), this.updateChannel(s, t)) : 5 !== n.length ? ge(this._iid, (function(e) {
										return e(ie.error, null)
									}), t) : ((i = new i).channelUrl = this.url, i.name = n[0], i.coverUrlOrImage = n[1], i.data = n[2], Array.isArray(n[3]) && (i.operatorUserIds = n[3]), i.customType = n[4], this.updateChannel(i, t))
								}
							}, {
								key: "updateChannelWithOperatorUserIds",
								value: function() {
									var e = ie.toArray(arguments),
										n = void 0;
									switch ("function" == typeof e[e.length - 1] && (n = e.pop()), e.length) {
										case 4:
										case 5:
											return this.updateChannel.apply(this, b(e).concat([n]));
										default:
											return ge(this._iid, (function(e) {
												return e(ie.error, null)
											}), n)
									}
								}
							}, {
								key: "muteUser",
								value: function(e, n, t, r) {
									return this.muteUserWithUserId(e ? e.userId : null, n, t, r)
								}
							}, {
								key: "muteUserWithUserId",
								value: function(e, n, t, r) {
									var i = this,
										s = C(ie.parse(arguments, [new ie({
											type: "string"
										}), new ie({
											type: "number",
											optional: !0,
											defaultValue: -1,
											constraint: function(e) {
												return -1 <= e
											}
										}), new ie({
											type: "string",
											optional: !0,
											defaultValue: ""
										}), new ie({
											type: "callback"
										})]), 5),
										a = s[0];
									return e = s[1], n = s[2], t = s[3], r = s[4], ge(this._iid, (function(r) {
										a ? r(a, null) : O.get(i._iid).container.apiClient.muteUser({
											channelUrl: i.url,
											userId: e,
											description: t,
											seconds: n,
											isGroupChannel: !1
										}, (function(e, n) {
											r(e, null)
										}))
									}), r)
								}
							}, {
								key: "unmuteUser",
								value: function(e, n) {
									return this.unmuteUserWithUserId(e ? e.userId : null, n)
								}
							}, {
								key: "unmuteUserWithUserId",
								value: function(e, n) {
									var t = this,
										r = C(ie.parse(arguments, [new ie({
											type: "string"
										}), new ie({
											type: "callback"
										})]), 3),
										i = r[0];
									return e = r[1], n = r[2], ge(this._iid, (function(n) {
										i ? n(i, null) : O.get(t._iid).container.apiClient.unmuteUser({
											channelUrl: t.url,
											userId: e,
											isGroupChannel: !1
										}, (function(e, t) {
											n(e, null)
										}))
									}), n)
								}
							}, {
								key: "banUser",
								value: function(e, n, t) {
									return this.banUserWithUserId(e ? e.userId : null, n, t)
								}
							}, {
								key: "banUserWithUserId",
								value: function(e, n, t) {
									var r = this,
										i = C(ie.parse(arguments, [new ie({
											type: "string"
										}), new ie({
											type: "number",
											optional: !0,
											defaultValue: -1,
											constraint: function(e) {
												return -1 <= e
											}
										}), new ie({
											type: "callback"
										})]), 4),
										s = i[0];
									return e = i[1], n = i[2], t = i[3], ge(this._iid, (function(t) {
										s ? t(s, null) : O.get(r._iid).container.apiClient.banUser({
											channelUrl: r.url,
											userId: e,
											description: null,
											seconds: n,
											isGroupChannel: !1
										}, (function(e, n) {
											t(e, null)
										}))
									}), t)
								}
							}, {
								key: "unbanUser",
								value: function(e, n) {
									return this.unbanUserWithUserId(e ? e.userId : null, n)
								}
							}, {
								key: "unbanUserWithUserId",
								value: function(e, n) {
									var t = this,
										r = C(ie.parse(arguments, [new ie({
											type: "string"
										}), new ie({
											type: "callback"
										})]), 3),
										i = r[0];
									return e = r[1], n = r[2], ge(this._iid, (function(n) {
										i ? n(i, null) : O.get(t._iid).container.apiClient.unbanUser({
											channelUrl: t.url,
											userId: e,
											isGroupChannel: !1
										}, (function(e, t) {
											n(e, null)
										}))
									}), n)
								}
							}, {
								key: "setLatestParticipantCount",
								value: function(e, n) {
									var t = !1;
									return "number" == typeof e && "number" == typeof n && n >= Qe.get(this) && (Qe.set(this, n), t = e !== this.participantCount, this.participantCount = e), t
								}
							}, {
								key: "delete",
								value: function(e) {
									var n = this;
									return ge(this._iid, (function(e) {
										O.get(n._iid).container.apiClient.deleteOpenChannel({
											channelUrl: n.url
										}, (function(t, r) {
											t || (delete M.get(n._iid).OpenChannel.cachedChannels[n.url], M.get(n._iid).FileMessageQueue.delete(n.url)), e(t, r)
										}))
									}), e)
								}
							}], [{
								key: "cachedChannels",
								get: function() {
									return ze[this._iid] || (ze[this._iid] = {}), ze[this._iid]
								}
							}, {
								key: "enteredChannels",
								get: function() {
									return qe[this._iid] || (qe[this._iid] = {}), qe[this._iid]
								}
							}, {
								key: "buildFromSerializedData",
								value: function(e) {
									var n, t = (n = M.get(this._iid)).User;
									return new(n = n.OpenChannel)({
										channel_url: (e = ye.deserialize(e)).url,
										name: e.name,
										cover_url: e.coverUrl,
										data: e.data,
										custom_type: e.customType,
										created_at: e.createdAt / 1e3,
										freeze: e.isFrozen,
										is_ephemeral: e.isEphemeral,
										participant_count: e.participantCount,
										operators: e.operators.map((function(e) {
											return t.objectify(e)
										}))
									})
								}
							}, {
								key: "getChannel",
								value: function(e, n) {
									var t, r = C(ie.parse(arguments, [new ie({
											type: "string",
											constraint: function(e) {
												return 0 < e.length
											}
										}), new ie({
											type: "string",
											optional: !0,
											nullable: !0,
											defaultValue: null
										}), new ie({
											type: "callback"
										})]), 4),
										i = r[0];
									if (e = r[1], t = r[2], n = r[3], i) return ge(this._iid, (function(e) {
										e(i, null)
									}), n);
									var s = M.get(this._iid).OpenChannel;
									return s.cachedChannels[e] ? ge(this._iid, (function(n) {
										n(null, s.cachedChannels[e])
									}), n) : s.getChannelWithoutCache(e, t, n)
								}
							}, {
								key: "getChannelWithoutCache",
								value: function(e, n) {
									var t, r = this,
										i = C(ie.parse(arguments, [new ie({
											type: "string",
											constraint: function(e) {
												return 0 < e.length
											}
										}), new ie({
											type: "string",
											optional: !0,
											nullable: !0,
											defaultValue: null
										}), new ie({
											type: "callback"
										})]), 4),
										s = i[0];
									return e = i[1], t = i[2], n = i[3], ge(this._iid, (function(n) {
										s ? n(s, null) : O.get(r._iid).container.apiClient.getOpenChannel({
											channelUrl: e,
											internalCall: t
										}, (function(e, t) {
											var i = null;
											e || (i = M.get(r._iid).OpenChannel.upsert(t)), n(e, i)
										}))
									}), n)
								}
							}, {
								key: "createChannel",
								value: function() {
									var e = this,
										n = ie.toArray(arguments),
										t = null;
									"function" == typeof n[n.length - 1] && (t = n.pop());
									var r = (i = M.get(this._iid)).OpenChannel,
										i = i.OpenChannelParams;
									if (n[0] instanceof i && 1 === n.length) return ge(this._iid, (function(t) {
										var r = n[0];
										r._validate() ? O.get(e._iid).container.apiClient.createOpenChannel(r, (function(n, r) {
											var i = null;
											n || (i = M.get(e._iid).OpenChannel.upsert(r)), t(n, i)
										})) : t(ie.error, null)
									}), t);
									var s = new i;
									switch (n.length) {
										case 0:
											break;
										case 1:
											s.name = n[0];
											break;
										case 2:
											s.name = n[0], s.coverUrlOrImage = n[1];
											break;
										case 3:
											s.name = n[0], s.coverUrlOrImage = n[1], s.data = n[2];
											break;
										case 4:
											s.name = n[0], s.coverUrlOrImage = n[1], s.data = n[2], s.operatorUserIds = n[3];
											break;
										case 5:
											s.name = n[0], s.coverUrlOrImage = n[1], s.data = n[2], s.operatorUserIds = n[3], s.customType = n[4];
											break;
										default:
											return ge(this._iid, (function(e) {
												return e(ie.error, null)
											}), t)
									}
									return t ? r.createChannel(s, t) : r.createChannel(s)
								}
							}, {
								key: "createChannelWithOperatorUserIds",
								value: function() {
									var e = ie.toArray(arguments),
										n = void 0;
									switch ("function" == typeof e[e.length - 1] && (n = e.pop()), e.length) {
										case 4:
										case 5:
											return this.createChannel.apply(this, b(e).concat([n]));
										default:
											return ge(this._iid, (function(e) {
												return e(ie.error, null)
											}), n)
									}
								}
							}, {
								key: "upsert",
								value: function(e) {
									var n = new(M.get(this._iid).OpenChannel)(e);
									return this.cachedChannels.hasOwnProperty(n.url) ? this.cachedChannels[n.url].update(e) : this.cachedChannels[n.url] = n, this.cachedChannels[n.url]
								}
							}, {
								key: "removeCachedChannel",
								value: function(e) {
									this.cachedChannels[e] && delete this.cachedChannels[e], M.get(this._iid).FileMessageQueue.delete(e)
								}
							}, {
								key: "clearCache",
								value: function() {
									ze[this._iid] = {}, M.get(this._iid).FileMessageQueue.clear()
								}
							}, {
								key: "clearEnteredChannels",
								value: function() {
									qe[this._iid] = {}
								}
							}, {
								key: "createOpenChannelListQuery",
								value: function() {
									return new(M.get(this._iid).OpenChannelListQuery)
								}
							}]), n
						}(),
						Ke = function() {
							h(n, Ee);
							var e = v(n);

							function n(t) {
								var r;
								return o(this, n), (r = e.call(this, t)).messageType = Ee.MESSAGE_TYPE_USER, r.message = null, r._sender = null, r.reqId = "", r.translations = {}, r.requestState = null, r.requestedMentionUserIds = [], r.errorCode = 0, r.messageSurvivalSeconds = -1, r.plugins = [], t && r._update(t), r
							}
							return u(n, [{
								key: "_update",
								value: function(e) {
									var n = ot.getInstance(this._iid),
										t = M.get(this._iid),
										r = t.Sender,
										i = t.Plugin;
									this.message = String(e.message), this._sender = new r(e.user), this.reqId = e.hasOwnProperty("req_id") ? String(e.req_id) : "", this.translations = e.hasOwnProperty("translations") ? e.translations : {}, this.requestState = 0 < this.messageId ? n.MessageRequestState.SUCCEEDED : n.MessageRequestState.FAILED, e.hasOwnProperty("sending_status") && (this.requestState = e.sending_status, this.requestState === n.MessageSendingStatus.CANCELED && (this.requestState = n.MessageRequestState.FAILED)), this.requestedMentionUserIds = [], e.hasOwnProperty("requested_mention_user_ids") && (this.requestedMentionUserIds = e.requested_mention_user_ids), this.errorCode = 0, e.hasOwnProperty("error_code") && (this.errorCode = e.error_code), this.messageSurvivalSeconds = -1, e.hasOwnProperty("message_survival_seconds") && (this.messageSurvivalSeconds = e.message_survival_seconds), this.plugins = [], e.hasOwnProperty("plugins") && Array.isArray(e.plugins) && (this.plugins = e.plugins.map((function(e) {
										return new i(e)
									})))
								}
							}, {
								key: "sender",
								get: function() {
									var e = ot.getInstance(this._iid),
										n = M.get(this._iid).GroupChannel;
									return e.Options.useMemberAsMessageSender && this.isGroupChannel() && (!(n = n.cachedChannels[this.channelUrl]) || (n = n.memberMap[this._sender.userId]) && (this._sender.nickname !== n.nickname && (this._sender.nickname = n.nickname), this._sender.plainProfileUrl !== n.plainProfileUrl && (this._sender.plainProfileUrl = n.plainProfileUrl), V.deepEqual(this._sender.metaData, n.metaData) || (this._sender.metaData = n.metaData))), this._sender
								},
								set: function(e) {
									this._sender = e
								}
							}, {
								key: "isResendable",
								value: function() {
									var e = ot.getInstance(this._iid);
									return this.sendingStatus === e.MessageSendingStatus.FAILED && V.isResendableError(this.errorCode)
								}
							}], [{
								key: "objectify",
								value: function(e) {
									var n, t = ot.getInstance(this._iid),
										r = (k = M.get(this._iid)).BaseChannel,
										i = k.BaseMessageParams,
										s = k.Sender,
										a = k.User,
										o = k.ThreadInfo,
										l = k.OGMetaData,
										u = k.Plugin,
										c = e.messageId,
										d = void 0 === (T = e.reqId) ? "" : T,
										h = e.user,
										p = e.channel,
										f = e.message,
										_ = void 0 === (S = e.data) ? "" : S,
										g = void 0 === (P = e.customType) ? "" : P,
										y = e.appleCriticalAlertOptions,
										m = void 0 === (w = e.mentionType) ? i.MentionType.USERS : w,
										v = void 0 === (I = e.mentionedUsers) ? [] : I,
										E = void 0 === (N = e.mentionedUserIds) ? [] : N,
										C = void 0 === (F = e.requestedMentionUserIds) ? [] : F,
										b = void 0 === (O = e.reactions) ? [] : O,
										A = void 0 === (L = e.metaArrays) ? [] : L,
										U = void 0 === (R = e.rootMessageId) ? 0 : R,
										k = void 0 === (D = e.parentMessageId) ? 0 : D,
										S = void 0 === (T = e.parentMessageText) ? "" : T,
										I = (i = void 0 === (P = e.threadInfo) ? null : P, void 0 === (w = e.translations) ? {} : w),
										N = e.sendingStatus,
										O = void 0 === (F = e.errorCode) ? 0 : F,
										R = void 0 !== (L = e.silent) && L,
										T = void 0 !== (D = e.isGlobalBlocked) && D,
										w = void 0 === (P = e.messageSurvivalSeconds) ? -1 : P,
										L = void 0 === (F = e.ogMetaData) ? null : F,
										P = void 0 !== (D = e.isOperatorMessage) && D,
										D = void 0 === (F = e.plugins) ? [] : F,
										F = e.createdAt,
										H = (e = void 0 === (e = e.updatedAt) ? 0 : e, {});
									for (n in H.req_id = d, H.msg_id = c, H.user = s.objectify({
											user: h,
											role: t.currentUser && t.currentUser.userId === h.userId ? p.myRole : h.role,
											isBlockedByMe: h.isBlockedByMe
										}), H.channel_url = p.url, H.channel_type = p.channelType === r.CHANNEL_TYPE_OPEN ? r.CHANNEL_TYPE_OPEN : r.CHANNEL_TYPE_GROUP, H.message = f, H.data = _, H.custom_type = g, y && (H.apple_critical_alert_options = y.serialize()), H.translations = I, H.is_global_block = !!T, H.ts = F, H.updated_at = e, H.mention_type = m, H.mentioned_users = v.map((function(e) {
											return a.objectify(e)
										})), H.mentioned_user_ids = E, H.requested_mention_user_ids = C, H.reactions = b.map((function(e) {
											return e.serialize()
										})), H.metaarray = {}, A) {
										var x = A[n].key;
										H.metaarray[x] = A[n].value
									}
									return H.metaarray_key_order = A.map((function(e) {
										return e.key
									})), H.root_message_id = U, H.parent_message_id = k, H.parent_message_text = S, i && (H.thread_info = o.objectify(i)), H.sending_status = 0 < c ? t.MessageSendingStatus.SUCCEEDED : t.MessageSendingStatus.FAILED, N && (H.sending_status = N), H.silent = !!R, H.error_code = O, H.message_survival_seconds = w, L && (H.og_tag = l.objectify(L)), H.is_op_msg = !!P, H.plugins = D.map((function(e) {
										return u.objectify(e)
									})), H
								}
							}, {
								key: "build",
								value: function(e, n, t, r, i, s, a, o, l, u, c, d, h, p, f, _, g, y, m, v, E, C, b, A, U, k, S, I) {
									return this.objectify({
										messageId: n,
										reqId: e,
										user: t,
										channel: r,
										message: i,
										data: s,
										customType: a,
										appleCriticalAlertOptions: o,
										mentionType: f,
										mentionedUsers: _,
										mentionedUserIds: E,
										requestedMentionUserIds: b,
										reactions: p,
										metaArrays: h,
										rootMessageId: g,
										parentMessageId: y,
										parentMessageText: m,
										threadInfo: v,
										translations: l,
										sendingStatus: C,
										errorCode: A,
										isGlobalBlocked: u,
										messageSurvivalSeconds: U,
										ogMetaData: k,
										isOperatorMessage: S,
										plugins: I,
										createdAt: c,
										updatedAt: d
									})
								}
							}, {
								key: "buildFromSerializedData",
								value: function(e) {
									var n = M.get(this._iid).UserMessage;
									return e = ye.deserialize(e), new n(n.objectify(d(d({}, e), {}, {
										channel: {
											url: e.channelUrl,
											channelType: e.channelType
										},
										user: e.sender
									})))
								}
							}]), n
						}(),
						We = function() {
							h(n, Ee);
							var e = v(n);

							function n(t) {
								var r;
								return o(this, n), (r = e.call(this, t)).messageType = Ee.MESSAGE_TYPE_FILE, r.plainUrl = null, r.name = "File", r.size = 0, r.type = null, r.thumbnails = [], r._sender = null, r.reqId = "", r.requireAuth = null, r.requestState = null, r.requestedMentionUserIds = [], r.errorCode = 0, r.messageSurvivalSeconds = -1, t && r._update(t), r
							}
							return u(n, [{
								key: "_update",
								value: function(e) {
									var n = ot.getInstance(this._iid),
										t = O.get(this._iid).container.auth,
										r = M.get(this._iid).Sender;
									if (this._sender = new r(e.user), this.requireAuth = !!e.hasOwnProperty("require_auth") && e.require_auth, this.plainUrl = String(e.url).split("?auth=")[0], Object.defineProperty(this, "url", {
											value: this.requireAuth ? "".concat(this.plainUrl, "?auth=").concat(t.eKey) : this.plainUrl,
											configurable: !0,
											writable: !1
										}), this.name = e.hasOwnProperty("name") ? e.name : "File", this.size = parseInt(e.size) || 0, this.type = String(e.type), e.hasOwnProperty("custom") && (this.data = String(e.custom)), this.reqId = e.hasOwnProperty("req_id") ? String(e.req_id) : "", this.thumbnails = e.hasOwnProperty("thumbnails") ? e.thumbnails : [], this.requireAuth)
										for (var i in this.thumbnails) this.thumbnails[i].plainUrl = String(this.thumbnails[i].url).split("?auth=")[0], this.thumbnails[i].url = this.requireAuth ? "".concat(this.thumbnails[i].plainUrl, "?auth=").concat(t.eKey) : this.thumbnails[i].plainUrl;
									this.requestState = 0 < this.messageId ? n.MessageRequestState.SUCCEEDED : n.MessageRequestState.FAILED, e.hasOwnProperty("sending_status") && (this.requestState = e.sending_status, this.requestState === n.MessageSendingStatus.CANCELED && (this.requestState = n.MessageRequestState.FAILED)), this.requestedMentionUserIds = [], e.hasOwnProperty("requested_mention_user_ids") && (this.requestedMentionUserIds = e.requested_mention_user_ids), this.errorCode = 0, e.hasOwnProperty("error_code") && (this.errorCode = e.error_code), this.messageSurvivalSeconds = -1, e.hasOwnProperty("message_survival_seconds") && (this.messageSurvivalSeconds = e.message_survival_seconds)
								}
							}, {
								key: "sender",
								get: function() {
									var e = ot.getInstance(this._iid),
										n = M.get(this._iid).GroupChannel;
									return e.Options.useMemberAsMessageSender && this.isGroupChannel() && (!(n = n.cachedChannels[this.channelUrl]) || (n = n.memberMap[this._sender.userId]) && (this._sender.nickname !== n.nickname && (this._sender.nickname = n.nickname), this._sender.plainProfileUrl !== n.plainProfileUrl && (this._sender.plainProfileUrl = n.plainProfileUrl), V.deepEqual(this._sender.metaData, n.metaData) || (this._sender.metaData = n.metaData))), this._sender
								},
								set: function(e) {
									this._sender = e
								}
							}, {
								key: "isResendable",
								value: function() {
									var e = ot.getInstance(this._iid);
									return this.sendingStatus === e.MessageSendingStatus.FAILED && V.isResendableError(this.errorCode)
								}
							}], [{
								key: "objectify",
								value: function(e) {
									var n = ot.getInstance(this._iid),
										t = (k = M.get(this._iid)).BaseChannel,
										r = k.BaseMessageParams,
										i = k.Sender,
										s = k.User,
										a = k.ThreadInfo,
										o = k.OGMetaData,
										l = e.messageId,
										u = void 0 === (F = e.reqId) ? "" : F,
										c = void 0 === (S = e.user) ? {} : S,
										d = e.channel,
										h = e.plainUrl,
										p = e.name,
										f = e.type,
										_ = void 0 === (w = e.size) ? 0 : w,
										g = void 0 === (I = e.data) ? "" : I,
										y = void 0 === (D = e.customType) ? "" : D,
										m = e.appleCriticalAlertOptions,
										v = void 0 === (L = e.mentionType) ? r.MentionType.USERS : L,
										E = void 0 === (N = e.mentionedUsers) ? [] : N,
										C = void 0 === (H = e.mentionedUserIds) ? [] : H,
										b = void 0 === (O = e.requestedMentionUserIds) ? [] : O,
										A = void 0 === (R = e.reactions) ? [] : R,
										U = void 0 === (P = e.metaArrays) ? [] : P,
										k = void 0 === (T = e.rootMessageId) ? 0 : T,
										S = void 0 === (F = e.parentMessageId) ? 0 : F,
										I = void 0 === (w = e.parentMessageText) ? "" : w,
										N = (r = void 0 === (D = e.threadInfo) ? null : D, void 0 === (L = e.thumbnails) ? [] : L),
										O = void 0 !== (H = e.requireAuth) && H,
										R = e.sendingStatus,
										T = void 0 === (P = e.errorCode) ? 0 : P,
										w = void 0 !== (F = e.silent) && F,
										L = void 0 !== (D = e.isGlobalBlocked) && D,
										P = void 0 === (H = e.messageSurvivalSeconds) ? -1 : H,
										D = void 0 === (F = e.ogMetaData) ? null : F,
										F = void 0 !== (H = e.isOperatorMessage) && H,
										H = e.createdAt,
										x = (e = void 0 === (e = e.updatedAt) ? 0 : e, {});
									x.req_id = u, x.msg_id = l, x.user = i.objectify({
										user: c,
										role: n.currentUser && n.currentUser.userId === c.userId ? d.myRole : c.role,
										isBlockedByMe: c.isBlockedByMe
									}), x.channel_url = d.url, x.channel_type = d.channelType === t.CHANNEL_TYPE_OPEN ? t.CHANNEL_TYPE_OPEN : t.CHANNEL_TYPE_GROUP, x.url = h, x.name = p, x.type = f, x.size = _, x.custom = g, x.custom_type = y, m && (x.apple_critical_alert_options = m.serialize()), x.thumbnails = N, x.require_auth = O, x.is_global_block = !!L, x.ts = H, x.updated_at = e, x.mention_type = v, x.mentioned_users = E.map((function(e) {
										return s.objectify(e)
									})), x.mentioned_user_ids = C, x.requested_mention_user_ids = b, x.reactions = A.map((function(e) {
										return e.serialize()
									})), x.metaarray = {};
									for (var G = 0; G < U.length; G++) {
										var j = U[G].key;
										x.metaarray[j] = U[G].value
									}
									return x.metaarray_key_order = U.map((function(e) {
										return e.key
									})), x.root_message_id = k, x.parent_message_id = S, x.parent_message_text = I, r && (x.thread_info = a.objectify(r)), x.sending_status = 0 < l ? n.MessageSendingStatus.SUCCEEDED : n.MessageSendingStatus.FAILED, R && (x.sending_status = R), x.silent = !!w, x.error_code = T, x.message_survival_seconds = P, D && (x.og_tag = o.objectify(D)), x.is_op_msg = !!F, x
								}
							}, {
								key: "build",
								value: function(e, n, t, r, i, s, a, o, l, u, c, d, h, p, f, _, g, y, m, v, E, C, b, A, U, k, S, I, N, O, R) {
									return this.objectify({
										messageId: n,
										reqId: e,
										user: t,
										channel: r,
										plainUrl: i,
										name: s,
										type: a,
										size: o,
										data: l,
										customType: u,
										appleCriticalAlertOptions: c,
										mentionType: m,
										mentionedUsers: v,
										mentionedUserIds: U,
										requestedMentionUserIds: S,
										reactions: y,
										metaArrays: g,
										rootMessageId: E,
										parentMessageId: C,
										parentMessageText: b,
										threadInfo: A,
										thumbnails: p,
										requireAuth: f,
										sendingStatus: k,
										errorCode: I,
										isGlobalBlocked: d,
										messageSurvivalSeconds: N,
										ogMetaData: O,
										isOperatorMessage: R,
										createdAt: h,
										updatedAt: _
									})
								}
							}, {
								key: "buildFromSerializedData",
								value: function(e) {
									var n = M.get(this._iid).FileMessage;
									return e = ye.deserialize(e), new n(n.objectify(d(d({}, e), {}, {
										channel: {
											url: e.channelUrl,
											channelType: e.channelType
										},
										user: e.sender
									})))
								}
							}]), n
						}(),
						Ve = function() {
							h(n, Ee);
							var e = v(n);

							function n(t) {
								var r;
								return o(this, n), (r = e.call(this, t)).messageType = Ee.MESSAGE_TYPE_ADMIN, r.message = "", r.translations = {}, t && r._update(t), r
							}
							return u(n, [{
								key: "_update",
								value: function(e) {
									this.message = String(e.message), this.translations = e.hasOwnProperty("translations") ? e.translations : {}
								}
							}], [{
								key: "objectify",
								value: function(e) {
									var n = (C = M.get(this._iid)).BaseChannel,
										t = C.BaseMessageParams,
										r = C.User,
										i = C.ThreadInfo,
										s = C.OGMetaData,
										a = e.messageId,
										o = e.channel,
										l = e.message,
										u = void 0 === (_ = e.data) ? "" : _,
										c = void 0 === (m = e.customType) ? "" : m,
										d = void 0 === (E = e.mentionType) ? t.MentionType.USERS : E,
										h = void 0 === (g = e.mentionedUsers) ? [] : g,
										p = void 0 === (v = e.reactions) ? [] : v,
										f = void 0 === (y = e.metaArrays) ? [] : y,
										_ = void 0 === (C = e.rootMessageId) ? 0 : C,
										g = (t = void 0 === (m = e.parentMessageId) ? 0 : m, void 0 === (E = e.parentMessageText) ? "" : E),
										y = void 0 === (v = e.threadInfo) ? null : v,
										m = void 0 === (C = e.translations) ? {} : C,
										v = void 0 !== (E = e.silent) && E,
										E = void 0 === (C = e.ogMetaData) ? null : C,
										C = e.createdAt,
										b = (e = void 0 === (e = e.updatedAt) ? 0 : e, {
											msg_id: a,
											channel_url: o.url,
											channel_type: o.channelType === n.CHANNEL_TYPE_OPEN ? n.CHANNEL_TYPE_OPEN : n.CHANNEL_TYPE_GROUP,
											message: l,
											data: u,
											custom_type: c,
											silent: v,
											ts: C,
											updated_at: e
										});
									b.translations = m, b.mention_type = d, b.mentioned_users = h.map((function(e) {
										return r.objectify(e)
									})), b.reactions = p.map((function(e) {
										return e.serialize()
									})), b.metaarray = {};
									for (var A = 0; A < f.length; A++) {
										var U = f[A].key;
										b.metaarray[U] = f[A].value
									}
									return b.metaarray_key_order = f.map((function(e) {
										return e.key
									})), b.root_message_id = _, b.parent_message_id = t, b.parent_message_text = g, y && (b.thread_info = i.objectify(y)), E && (b.og_tag = s.objectify(E)), b
								}
							}, {
								key: "build",
								value: function(e, n, t, r, i, s, a, o, l, u, c, d, h, p, f, _, g) {
									return this.objectify({
										messageId: e,
										channel: n,
										message: t,
										data: r,
										customType: i,
										mentionType: c,
										mentionedUsers: d,
										reactions: u,
										metaArrays: l,
										rootMessageId: h,
										parentMessageId: p,
										parentMessageText: f,
										threadInfo: _,
										translations: s,
										ogMetaData: g,
										createdAt: a,
										updatedAt: o
									})
								}
							}, {
								key: "buildFromSerializedData",
								value: function(e) {
									var n = M.get(this._iid).AdminMessage;
									return e = ye.deserialize(e), new n(n.objectify(d(d({}, e), {}, {
										channel: {
											url: e.channelUrl,
											channelType: e.channelType
										}
									})))
								}
							}]), n
						}(),
						Je = function() {
							function e(n) {
								o(this, e);
								var t = (r = M.get(this._iid)).BaseMessage,
									r = r.BaseMessageParams;
								this.scheduledId = 0, this.scheduledDateTimeString = "", this.scheduledTimezone = "", this.status = e.Status.SCHEDULED, this.createdAt = 0, this.updatedAt = 0, this._messageType = t.MESSAGE_TYPE_BASE, this._sender = null, this._channelType = "", this.channelUrl = "", this.message = "", this.customType = "", this.data = "", this.metaArrays = [], this.mentionType = r.MentionType.USERS, this.mentionedUsers = [], this.pushNotificationDeliveryOption = r.PushNotificationDeliveryOption.DEFAULT, this.translationTargetLanguages = [], this.errorMessage = "", this.errorCode = 0, this.appleCriticalAlertOptions = null, n && this._update(n)
							}
							return u(e, [{
								key: "sender",
								get: function() {
									var e = ot.getInstance(this._iid),
										n = M.get(this._iid).GroupChannel;
									return e.Options.useMemberAsMessageSender && this.isGroupChannel() && (!(n = n.cachedChannels[this.channelUrl]) || (n = n.memberMap[this._sender.userId]) && (this._sender.nickname !== n.nickname && (this._sender.nickname = n.nickname), this._sender.plainProfileUrl !== n.plainProfileUrl && (this._sender.plainProfileUrl = n.plainProfileUrl), V.deepEqual(this._sender.metaData, n.metaData) || (this._sender.metaData = n.metaData))), this._sender
								},
								set: function(e) {
									this._sender = e
								}
							}, {
								key: "_update",
								value: function(n) {
									var t = this,
										r = (o = M.get(this._iid)).User,
										i = o.Sender,
										s = o.BaseMessageParams,
										a = o.MessageMetaArray,
										o = o.AppleCriticalAlertOptions;
									this.scheduledId = n.hasOwnProperty("scheduled_id") ? parseInt(n.scheduled_id) : 0, this.scheduledDateTimeString = n.hasOwnProperty("scheduled_dt") ? String(n.scheduled_dt) : "", this.scheduledTimezone = n.hasOwnProperty("scheduled_timezone") ? String(n.scheduled_timezone) : "", this.status = n.hasOwnProperty("status") ? String(n.status) : "", this.createdAt = n.hasOwnProperty("created_at") ? parseInt(n.created_at) : 0, this.updatedAt = n.hasOwnProperty("updated_at") ? parseInt(n.updated_at) : 0, this.channelUrl = n.hasOwnProperty("channel_url") ? String(n.channel_url) : "", this._channelType = n.hasOwnProperty("channel_type") ? String(n.channel_type) : "", this._messageType = n.hasOwnProperty("type") ? String(n.type) : "", this._sender = n.hasOwnProperty("user") ? new i(n.user) : null, this.message = n.hasOwnProperty("message") ? String(n.message) : "", this.customType = n.hasOwnProperty("custom_type") ? String(n.custom_type) : "", this.data = n.hasOwnProperty("data") ? String(n.data) : "";
									var l = n.hasOwnProperty("metaarray") ? n.metaarray : {},
										u = n.hasOwnProperty("metaarray_key_order") ? n.metaarray_key_order : Object.keys(l).sort((function(e, n) {
											return e.localeCompare(n)
										}));
									this.metaArrays = [];
									for (var c = 0; c < u.length; c++) {
										var d = u[c];
										this.metaArrays.push(new a(d, l[d] || []))
									}
									this.mentionType = n.hasOwnProperty("mention_type") ? n.mention_type : s.MentionType.USERS, this.mentionedUsers = [], n.hasOwnProperty("mentioned_users") && n.mentioned_users.forEach((function(e) {
										e = new r(e), t.mentionedUsers.push(e)
									})), this.pushNotificationDeliveryOption = n.hasOwnProperty("push_option") ? n.push_option : s.PushNotificationDeliveryOption.DEFAULT, this.translationTargetLanguages = n.hasOwnProperty("translation_target_langs") ? n.translation_target_langs : [], this.status === e.Status.FAILED && (n.hasOwnProperty("error") && n.error.hasOwnProperty("message") && (this.errorMessage = String(n.error.message)), n.hasOwnProperty("error") && n.error.hasOwnProperty("code") && (this.errorCode = parseInt(n.error.code))), n.hasOwnProperty("apple_critical_alert_options") && (this.appleCriticalAlertOptions = new o(n.apple_critical_alert_options))
								}
							}, {
								key: "isOpenChannel",
								value: function() {
									var e = M.get(this._iid).BaseChannel;
									return this._channelType === e.CHANNEL_TYPE_OPEN
								}
							}, {
								key: "isGroupChannel",
								value: function() {
									var e = M.get(this._iid).BaseChannel;
									return this._channelType === e.CHANNEL_TYPE_GROUP
								}
							}, {
								key: "metaArray",
								get: function() {
									var e = {};
									return this.metaArrays.forEach((function(n) {
										e[n.key] = n.value
									})), e
								},
								set: function(e) {
									if ("object" === a(e) && e) {
										var n, t = M.get(this._iid).MessageMetaArray,
											r = [];
										for (n in e) r.push(new t(n, e[n]));
										this.metaArrays = r
									}
								}
							}], [{
								key: "Status",
								get: function() {
									return {
										SCHEDULED: "scheduled",
										SENT: "sent",
										CANCELED: "canceled",
										FAILED: "failed"
									}
								}
							}]), e
						}(),
						Ze = function() {
							function e() {
								o(this, e), this.threadInfo = null, this.targetMessageId = 0, this.channelUrl = null, this.channelType = null
							}
							return u(e, null, [{
								key: "createFromJson",
								value: function(e) {
									var n = (s = M.get(this._iid)).BaseChannel,
										t = s.ThreadInfo,
										r = e.thread_info,
										i = e.root_message_id,
										s = e.channel_url;
									return e = e.channel_type, !r || "object" !== a(r) || "string" != typeof i && "number" != typeof i || "string" != typeof s || "string" != typeof e || ![n.CHANNEL_TYPE_GROUP].includes(e) ? null : ((n = new this).threadInfo = new t(r), n.targetMessageId = parseInt(i), n.channelUrl = s, n.channelType = e, n)
								}
							}]), e
						}(),
						Xe = function() {
							function e() {
								o(this, e), this.isLoading = !1, this.hasNext = !0, this.limit = 20, this.userIdsFilter = [], this.metaDataKeyFilter = "", this.metaDataValuesFilter = [], this.nicknameStartsWithFilter = null, this._token = ""
							}
							return u(e, [{
								key: "next",
								value: function(e) {
									var n = this;
									return ge(this._iid, (function(e) {
										"number" == typeof n.limit && 0 < n.limit && Array.isArray(n.userIdsFilter) && "string" == typeof n.metaDataKeyFilter && Array.isArray(n.metaDataValuesFilter) && !!n.metaDataKeyFilter == 0 < n.metaDataValuesFilter.length && ("string" == typeof n.nicknameStartsWithFilter || null === n.nicknameStartsWithFilter) ? n.isLoading ? e(new R("Query in progress.", R.QUERY_IN_PROGRESS), null) : n.hasNext ? (n.isLoading = !0, O.get(n._iid).container.apiClient.loadUserList(d(d({}, n), {}, {
											token: n._token
										}), (function(t, r) {
											var i, s, a = null;
											t || (i = M.get(n._iid).User, s = String(r.next), n._token = s, n.hasNext = !!s, a = r.users.map((function(e) {
												return new i(e)
											}))), n.isLoading = !1, e(t, a)
										}))) : e(null, []) : e(ie.error, null)
									}), e)
								}
							}]), e
						}(),
						$e = function() {
							function e(n) {
								o(this, e), this.isLoading = !1, this.hasNext = !0, this.limit = 20, this._isOpenChannel = !1, this._channelUrl = null, this._token = "", n.channelUrl && (this._channelUrl = n.channelUrl), n.isOpenChannel && (this._isOpenChannel = n.isOpenChannel)
							}
							return u(e, [{
								key: "next",
								value: function(e) {
									var n = this;
									return ge(this._iid, (function(e) {
										"number" == typeof n.limit && 0 < n.limit ? n.isLoading ? e(new R("Query in progress.", R.QUERY_IN_PROGRESS), null) : n.hasNext ? (n.isLoading = !0, O.get(n._iid).container.apiClient.loadBannedUserList(d(d({}, n), {}, {
											channelUrl: n._channelUrl,
											isOpenChannel: n._isOpenChannel,
											token: n._token
										}), (function(t, r) {
											var i, s, a = null;
											t || (i = M.get(n._iid).User, s = String(r.next), n._token = s, n.hasNext = !!s, a = r.banned_list.map((function(e) {
												return new i(e.user)
											}))), n.isLoading = !1, e(t, a)
										}))) : e(null, []) : e(ie.error, null)
									}), e)
								}
							}]), e
						}(),
						en = function() {
							function e() {
								o(this, e), this.isLoading = !1, this.hasNext = !0, this.limit = 20, this.userIdsFilter = [], this._token = ""
							}
							return u(e, [{
								key: "next",
								value: function(e) {
									var n = this;
									return ge(this._iid, (function(e) {
										"number" == typeof n.limit && 0 < n.limit && Array.isArray(n.userIdsFilter) ? n.isLoading ? e(new R("Query in progress.", R.QUERY_IN_PROGRESS), null) : n.hasNext ? (n.isLoading = !0, O.get(n._iid).container.apiClient.loadBlockedUserList(d(d({}, n), {}, {
											token: n._token
										}), (function(t, r) {
											var i, s, a = null;
											t || (i = M.get(n._iid).User, s = String(r.next), n._token = s, n.hasNext = !!s, a = r.users.map((function(e) {
												return new i(e)
											}))), n.isLoading = !1, e(t, a)
										}))) : e(null, []) : e(ie.error, null)
									}), e)
								}
							}]), e
						}(),
						nn = function() {
							function e() {
								o(this, e), this.isLoading = !1, this.hasMore = !0, this.limit = 20, this._token = ""
							}
							return u(e, [{
								key: "next",
								value: function(e) {
									var n = this;
									return ge(this._iid, (function(e) {
										"number" == typeof n.limit && 0 < n.limit ? n.isLoading ? e(new R("Query in progress.", R.QUERY_IN_PROGRESS), null) : n.hasMore ? (n.isLoading = !0, O.get(n._iid).container.apiClient.loadFriendList(d(d({}, n), {}, {
											token: n._token
										}), (function(t, r) {
											var i, s, a = null;
											t || (i = M.get(n._iid).User, s = String(r.next), n._token = s, n.hasMore = !!s, a = r.users.map((function(e) {
												return new i(e)
											}))), n.isLoading = !1, e(t, a)
										}))) : e(null, []) : e(ie.error, null)
									}), e)
								}
							}]), e
						}(),
						tn = function() {
							function e() {
								o(this, e), this.isLoading = !1, this.hasNext = !0, this.limit = 20, this.includeEmpty = !1, this.order = e.ORDER_LATEST_LAST_MESSAGE, this._token = "", this._searchFilter = {}, this._userIdsFilter = {
									userIds: [],
									includeMode: !0,
									queryType: e.QueryType.AND
								}, this._userIdsExactFilter = [], this._userIdsIncludeFilter = [], this._userIdsIncludeFilterQueryType = e.QueryType.AND, this.nicknameContainsFilter = "", this.channelNameContainsFilter = "", this.memberStateFilter = Fe.MemberStateFilter.ALL, this.customTypesFilter = [], this.channelUrlsFilter = [], this.superChannelFilter = Fe.SuperChannelFilter.ALL, this.publicChannelFilter = Fe.PublicChannelFilter.ALL, this.customTypeStartsWithFilter = null, this.unreadChannelFilter = Fe.UnreadChannelFilter.ALL, this.metadataOrderKeyFilter = null, this.hiddenChannelFilter = Fe.HiddenChannelFilter.UNHIDDEN, this.includeFrozen = !0, this.includeMetaData = !0
							}
							return u(e, [{
								key: "userIdsExactFilter",
								get: function() {
									return this._userIdsExactFilter
								},
								set: function(e) {
									Array.isArray(e) && (this._userIdsExactFilter = e, this._userIdsIncludeFilter = [], this._userIdsFilter.userIds = this._userIdsExactFilter, this._userIdsFilter.includeMode = !1)
								}
							}, {
								key: "userIdsIncludeFilter",
								get: function() {
									return this._userIdsIncludeFilter
								},
								set: function(e) {
									Array.isArray(e) && (this._userIdsIncludeFilter = e, this._userIdsExactFilter = [], this._userIdsFilter.userIds = this._userIdsIncludeFilter, this._userIdsFilter.includeMode = !0)
								}
							}, {
								key: "userIdsIncludeFilterQueryType",
								get: function() {
									return this._userIdsIncludeFilterQueryType
								},
								set: function(n) {
									-1 < Object.keys(e.QueryType).map((function(n) {
										return e.QueryType[n]
									})).indexOf(n) && (this._userIdsIncludeFilterQueryType = n.toUpperCase(), this._userIdsFilter.queryType = this._userIdsIncludeFilterQueryType)
								}
							}, {
								key: "setSearchFilter",
								value: function(e, n) {
									Array.isArray(e) && 0 !== e.length && "string" == typeof n && n && (this._searchFilter = {
										search_query: n,
										search_fields: e.join(",").toLocaleLowerCase()
									})
								}
							}, {
								key: "serialize",
								value: function() {
									return ye.serialize(this, (function(e) {
										e.isLoading = !1
									}))
								}
							}, {
								key: "next",
								value: function(e) {
									var n = this;
									return ge(this._iid, (function(e) {
										var t = M.get(n._iid),
											r = t.GroupChannel,
											i = t.GroupChannelListQuery;
										!("number" == typeof n.limit && 0 < n.limit && "boolean" == typeof n.includeEmpty && "string" == typeof n.order && -1 < [i.ORDER_CHRONOLOGICAL, i.ORDER_LATEST_LAST_MESSAGE, i.CHANNEL_NAME_ALPHABETICAL, i.METADATA_VALUE_ALPHABETICAL].indexOf(n.order.toLowerCase()) && Array.isArray(n._userIdsExactFilter) && Array.isArray(n._userIdsIncludeFilter) && Array.isArray(n.customTypesFilter) && Array.isArray(n.channelUrlsFilter) && -1 < Object.keys(i.QueryType).map((function(e) {
											return i.QueryType[e]
										})).indexOf(n._userIdsIncludeFilterQueryType.toUpperCase()) && -1 < Object.keys(r.MemberStateFilter).map((function(e) {
											return r.MemberStateFilter[e]
										})).indexOf(n.memberStateFilter) && -1 < Object.keys(r.SuperChannelFilter).map((function(e) {
											return r.SuperChannelFilter[e]
										})).indexOf(n.superChannelFilter) && -1 < Object.keys(r.PublicChannelFilter).map((function(e) {
											return r.PublicChannelFilter[e]
										})).indexOf(n.publicChannelFilter) && -1 < Object.keys(r.UnreadChannelFilter).map((function(e) {
											return r.UnreadChannelFilter[e]
										})).indexOf(n.unreadChannelFilter) && -1 < Object.keys(r.HiddenChannelFilter).map((function(e) {
											return r.HiddenChannelFilter[e]
										})).indexOf(n.hiddenChannelFilter)) || "string" != typeof n.customTypeStartsWithFilter && null !== n.customTypeStartsWithFilter || "string" != typeof n.nicknameContainsFilter || "string" != typeof n.channelNameContainsFilter || "string" != typeof n.metadataOrderKeyFilter && null !== n.metadataOrderKeyFilter || "boolean" != typeof n.includeFrozen || "boolean" != typeof n.includeMetaData ? e(ie.error, null) : n.isLoading ? e(new R("Query in progress.", R.QUERY_IN_PROGRESS), null) : n.hasNext ? (n.isLoading = !0, O.get(n._iid).container.apiClient.loadGroupChannelList(d(d({}, n), {}, {
											token: n._token,
											userIdsFilter: n._userIdsFilter,
											searchFilter: n._searchFilter
										}), (function(t, r) {
											var i, s, a = null;
											t || (i = M.get(n._iid).GroupChannel, s = String(r.next), n._token = s, n.hasNext = !!s, (s = r.channels) && Array.isArray(s) ? a = s.map((function(e) {
												return "number" == typeof r.ts && (e.ts = r.ts), i.upsert(e)
											})) : t = new R("Failed at loading group channels.", R.MALFORMED_DATA)), n.isLoading = !1, e(t, a)
										}))) : e(null, [])
									}), e)
								}
							}], [{
								key: "ORDER_LATEST_LAST_MESSAGE",
								get: function() {
									return "latest_last_message"
								}
							}, {
								key: "ORDER_CHRONOLOGICAL",
								get: function() {
									return "chronological"
								}
							}, {
								key: "CHANNEL_NAME_ALPHABETICAL",
								get: function() {
									return "channel_name_alphabetical"
								}
							}, {
								key: "METADATA_VALUE_ALPHABETICAL",
								get: function() {
									return "metadata_value_alphabetical"
								}
							}, {
								key: "QueryType",
								get: function() {
									return {
										AND: "AND",
										OR: "OR"
									}
								}
							}, {
								key: "SearchField",
								get: function() {
									return {
										MEMBER_NICKNAME: "member_nickname",
										CHANNEL_NAME: "channel_name"
									}
								}
							}, {
								key: "buildFromSerializedData",
								value: function(e) {
									var n, t = M.get(this._iid).GroupChannel,
										r = ye.deserialize(e),
										i = t.createMyGroupChannelListQuery();
									for (n in r) i.hasOwnProperty(n) && (i[n] = r[n]);
									return i
								}
							}]), e
						}(),
						rn = function() {
							function e(n) {
								o(this, e), this.isLoading = !1, this.hasNext = !0, this.limit = 20, this.mutedMemberFilter = e.MutedMemberFilter.ALL, this.memberStateFilter = Fe.MemberStateFilter.ALL, this.nicknameStartsWithFilter = null, this.order = e.Order.MEMBER_NICKNAME_ALPHABETICAL, this._token = "", this._channelUrl = n
							}
							return u(e, [{
								key: "next",
								value: function(e) {
									var n = this;
									return ge(this._iid, (function(e) {
										var t = M.get(n._iid),
											r = t.GroupChannel,
											i = t.Member,
											s = t.MemberListQuery;
										"number" == typeof n.limit && 0 < n.limit && -1 < Object.keys(s.MutedMemberFilter).map((function(e) {
											return s.MutedMemberFilter[e]
										})).indexOf(n.mutedMemberFilter) && -1 < Object.keys(r.MemberStateFilter).map((function(e) {
											return r.MemberStateFilter[e]
										})).indexOf(n.memberStateFilter) && -1 < Object.keys(s.Order).map((function(e) {
											return s.Order[e]
										})).indexOf(n.order) && ("string" == typeof n.nicknameStartsWithFilter || null === n.nicknameStartsWithFilter) ? n.isLoading ? e(new R("Query in progress.", R.QUERY_IN_PROGRESS), null) : n.hasNext ? (n.isLoading = !0, O.get(n._iid).container.apiClient.loadMemberList(d(d({}, n), {}, {
											channelUrl: n._channelUrl,
											token: n._token
										}), (function(t, r) {
											var s, a = null;
											t || (s = String(r.next), n._token = s, n.hasNext = !!s, a = r.members.map((function(e) {
												return new i(e)
											}))), n.isLoading = !1, e(t, a)
										}))) : e(null, []) : e(ie.error, null)
									}), e)
								}
							}], [{
								key: "MutedMemberFilter",
								get: function() {
									return {
										ALL: "all",
										MUTED: "muted",
										UNMUTED: "unmuted"
									}
								}
							}, {
								key: "Order",
								get: function() {
									return {
										MEMBER_NICKNAME_ALPHABETICAL: "member_nickname_alphabetical",
										OPERATOR_THEN_MEMBER_ALPHABETICAL: "operator_then_member_alphabetical"
									}
								}
							}]), e
						}(),
						sn = function() {
							function e(n) {
								o(this, e), this.isLoading = !1, this.hasNext = !0, this.limit = 20, this._token = "", n.channelUrl && (this._channelUrl = n.channelUrl), n.isOpenChannel && (this._isOpenChannel = n.isOpenChannel)
							}
							return u(e, [{
								key: "next",
								value: function(e) {
									var n = this;
									return ge(this._iid, (function(e) {
										"number" == typeof n.limit && 0 < n.limit ? n.isLoading ? e(new R("Query in progress.", R.QUERY_IN_PROGRESS), null) : n.hasNext ? (n.isLoading = !0, O.get(n._iid).container.apiClient.loadMutedUserList(d(d({}, n), {}, {
											channelUrl: n._channelUrl,
											isOpenChannel: n._isOpenChannel,
											token: n._token
										}), (function(t, r) {
											var i, s, a = null;
											t || (i = M.get(n._iid).User, s = String(r.next), n._token = s, n.hasNext = !!s, a = r.muted_list.map((function(e) {
												return new i(e)
											}))), n.isLoading = !1, e(t, a)
										}))) : e(null, []) : e(ie.error, null)
									}), e)
								}
							}]), e
						}(),
						an = function() {
							function e() {
								o(this, e), this.limit = 20, this.isLoading = !1, this.hasNext = !0, this.nameKeyword = null, this.urlKeyword = null, this.customTypes = [], this.includeFrozen = !0, this.includeMetaData = !0
							}
							return u(e, [{
								key: "next",
								value: function(e) {
									var n = this;
									return ge(this._iid, (function(e) {
										!("number" == typeof n.limit && 0 < n.limit && Array.isArray(n.customTypes)) || "string" != typeof n.nameKeyword && null !== n.nameKeyword || "string" != typeof n.urlKeyword && null !== n.urlKeyword || "boolean" != typeof n.includeFrozen || "boolean" != typeof n.includeMetaData ? e(ie.error, null) : n.isLoading ? e(new R("Query in progress.", R.QUERY_IN_PROGRESS), null) : n.hasNext ? (n.isLoading = !0, O.get(n._iid).container.apiClient.loadOpenChannelList(d(d({}, n), {}, {
											token: n._token
										}), (function(t, r) {
											var i, s, a = null;
											t || (i = M.get(n._iid).OpenChannel, s = String(r.next), n._token = s, n.hasNext = !!s, (s = r.channels) && Array.isArray(s) ? a = s.map((function(e) {
												return "number" == typeof r.ts && (e.ts = r.ts), i.upsert(e)
											})) : t = new R("Failed at loading open channels.", R.MALFORMED_DATA)), n.isLoading = !1, e(t, a)
										}))) : e(null, [])
									}), e)
								}
							}]), e
						}(),
						on = new WeakMap,
						ln = function() {
							function e(n) {
								o(this, e), this.isLoading = !1, this.hasNext = !0, this.limit = 20, this._token = "", on.set(this, n)
							}
							return u(e, [{
								key: "next",
								value: function(e) {
									var n = this;
									return ge(this._iid, (function(e) {
										var t;
										"number" == typeof n.limit && 0 < n.limit ? n.isLoading ? e(new R("Query in progress.", R.QUERY_IN_PROGRESS), null) : n.hasNext ? (n.isLoading = !0, t = on.get(n), O.get(n._iid).container.apiClient.loadOperatorList(d(d({}, n), {}, {
											token: n._token,
											channelUrl: t.url,
											isOpenChannel: t.isOpenChannel()
										}), (function(t, r) {
											var i, s, a = null;
											t || (i = M.get(n._iid).User, s = String(r.next), n._token = s, n.hasNext = !!s, a = r.operators.map((function(e) {
												return new i(e)
											}))), n.isLoading = !1, e(t, a)
										}))) : e(null, []) : e(ie.error, null)
									}), e)
								}
							}]), e
						}(),
						un = new WeakMap,
						cn = function() {
							function e(n) {
								o(this, e), this.isLoading = !1, this.hasNext = !0, this.limit = 20, this._token = "", n && un.set(this, n.channelUrl)
							}
							return u(e, [{
								key: "next",
								value: function(e) {
									var n = this;
									return ge(this._iid, (function(e) {
										"number" == typeof n.limit && 0 < n.limit ? n.isLoading ? e(new R("Query in progress.", R.QUERY_IN_PROGRESS), null) : n.hasNext ? (n.isLoading = !0, O.get(n._iid).container.apiClient.loadParticipantList(d(d({}, n), {}, {
											channelUrl: un.get(n),
											token: n._token
										}), (function(t, r) {
											var i, s, a = null;
											t || (i = M.get(n._iid).User, s = String(r.next), n._token = s, n.hasNext = !!s, a = r.participants.map((function(e) {
												return new i(e)
											}))), n.isLoading = !1, e(t, a)
										}))) : e(null, []) : e(ie.error, null)
									}), e)
								}
							}]), e
						}(),
						dn = new WeakMap,
						hn = function() {
							function e(n, t) {
								var r = void 0 === (a = t.limit) ? 20 : a,
									i = void 0 !== (u = t.reverse) && u,
									s = void 0 !== (l = t.exactMatch) && l,
									a = void 0 === (c = t.channelUrl) ? "" : c,
									l = void 0 === (u = t.channelCustomType) ? "" : u,
									u = void 0 === (c = t.messageTimestampFrom) ? null : c,
									c = void 0 === (c = t.messageTimestampTo) ? null : c;
								t = void 0 === (t = t.order) ? "score" : t, o(this, e), this.isLoading = !1, this.hasNext = !0, dn.set(this, {
									keyword: n,
									limit: r,
									reverse: i,
									exactMatch: s,
									channelUrl: a,
									channelCustomType: l,
									messageTimestampFrom: u,
									messageTimestampTo: c,
									order: t,
									previousToken: "",
									nextToken: ""
								})
							}
							return u(e, [{
								key: "key",
								get: function() {
									return dn.get(this).keyword
								}
							}, {
								key: "limit",
								get: function() {
									return dn.get(this).limit
								}
							}, {
								key: "reverse",
								get: function() {
									return dn.get(this).reverse
								}
							}, {
								key: "exactMatch",
								get: function() {
									return dn.get(this).exactMatch
								}
							}, {
								key: "channelUrl",
								get: function() {
									return dn.get(this).channelUrl
								}
							}, {
								key: "channelCustomType",
								get: function() {
									return dn.get(this).channelCustomType
								}
							}, {
								key: "messageTimestampFrom",
								get: function() {
									return dn.get(this).messageTimestampFrom
								}
							}, {
								key: "messageTimestampTo",
								get: function() {
									return dn.get(this).messageTimestampTo
								}
							}, {
								key: "order",
								get: function() {
									return dn.get(this).order
								}
							}, {
								key: "next",
								value: function(e) {
									var n = this,
										t = M.get(this._iid),
										r = t.BaseChannel,
										i = t.GroupChannel,
										s = t.OpenChannel;
									return ge(this._iid, (function(e) {
										var t = (f = dn.get(n)).keyword,
											a = f.limit,
											o = f.reverse,
											l = f.exactMatch,
											u = f.channelUrl,
											c = f.channelCustomType,
											d = f.messageTimestampFrom,
											h = f.messageTimestampTo,
											p = f.order,
											f = f.nextToken;
										!("number" == typeof a && 0 < a && a <= 1e3 && "boolean" == typeof o && "boolean" == typeof l) || "string" != typeof u && null !== u || "string" != typeof c && null !== c || "number" != typeof d && null !== d || "number" != typeof h && null !== h || !(0 <= ["score", "ts"].indexOf(p)) ? e(ie.error, null) : n.isLoading ? e(new R("Query in progress.", R.QUERY_IN_PROGRESS), null) : n.hasNext ? (n.isLoading = !0, O.get(n._iid).container.apiClient.searchMessages({
											keyword: t,
											limit: a,
											reverse: o,
											exactMatch: l,
											channelUrl: u,
											channelCustomType: c,
											messageTimestampFrom: d,
											messageTimestampTo: h,
											order: p,
											nextToken: f
										}, (function(t, a) {
											var o = null;
											if (!t) {
												for (var l in o = [], a.results) {
													var u;
													(l = a.results[l]).channel.hasOwnProperty("members") ? (u = new i(l.channel), i.cachedChannels[u.url] = u, o.push(r.buildMessage(l, u))) : (u = new s(l.channel), s.cachedChannels[u.url] = u, o.push(r.buildMessage(l, u)))
												}
												n.hasNext = a.has_next, dn.get(n).nextToken = a.end_cursor
											}
											n.isLoading = !1, e(t, o)
										}))) : e(null, [])
									}), e)
								}
							}]), e
						}(),
						pn = new WeakMap,
						fn = new WeakMap,
						_n = function() {
							function e(n) {
								o(this, e), this.isLoading = !1, this.hasMore = !0, this.limit = 20, fn.set(this, Number.MAX_SAFE_INTEGER), pn.set(this, n), this.reverse = !1, this.messageTypeFilter = null, this.customTypeFilter = null, this.customTypesFilter = [], this.senderUserIdsFilter = [], this.includeMetaArray = !1, this.includeReaction = null, this.includeReactions = !1, this.includeReplies = !1, this.includeParentMessageText = !1, this.includeThreadInfo = !1, this.showSubchannelMessagesOnly = !1
							}
							return u(e, [{
								key: "load",
								value: function(e, n, t, r) {
									var i = this,
										s = M.get(this._iid).BaseChannel,
										a = null,
										o = C(ie.parse(arguments, [new ie({
											type: "number",
											optional: !0,
											defaultValue: this.limit
										}), new ie({
											type: "boolean",
											optional: !0,
											defaultValue: this.reverse
										}), new ie({
											type: ["string", "number"],
											optional: !0,
											defaultValue: this.messageTypeFilter,
											constraint: function(e) {
												return -1 < Object.keys(s.MessageTypeFilter).map((function(e) {
													return s.MessageTypeFilter[e]
												})).indexOf(e) || -1 < [0, 1, 2, 3].indexOf(e)
											}
										}), new ie({
											type: "callback"
										})]), 5);
									return a = o[0], e = o[1], n = o[2], t = o[3], r = o[4], ge(this._iid, (function(r) {
										if (a = !Array.isArray(i.customTypesFilter) || i.customTypesFilter.some((function(e) {
												return "string" != typeof e && null !== e
											})) || !Array.isArray(i.senderUserIdsFilter) || i.senderUserIdsFilter.some((function(e) {
												return "string" != typeof e
											})) ? ie.error : a) r(a, null);
										else {
											if (i.limit = e, i.reverse = n, i.messageTypeFilter = t, "number" == typeof i.messageTypeFilter) switch (i.messageTypeFilter) {
												case 0:
													i.messageTypeFilter = s.MessageTypeFilter.ALL;
													break;
												case 1:
													i.messageTypeFilter = s.MessageTypeFilter.USER;
													break;
												case 2:
													i.messageTypeFilter = s.MessageTypeFilter.FILE;
													break;
												case 3:
													i.messageTypeFilter = s.MessageTypeFilter.ADMIN
											}
											var o, l;
											i.isLoading ? r(new R("Query in progress.", R.QUERY_IN_PROGRESS), null) : i.hasMore ? (i.isLoading = !0, o = pn.get(i), l = O.get(i._iid), "boolean" == typeof i.includeReaction && i.includeReaction && (i.includeReactions = i.includeReaction), l.container.apiClient.getMessageList({
												channel: o,
												token: fn.get(i) || (new Date).getTime() + 1e4,
												tokenType: "timestamp",
												isInclusive: !1,
												prevResultSize: e,
												nextResultSize: 0,
												shouldReverse: n,
												messageType: t,
												customType: i.customTypeFilter,
												customTypes: i.customTypesFilter,
												senderUserIds: i.senderUserIdsFilter,
												includeMetaArray: i.includeMetaArray,
												includeReactions: i.includeReactions,
												includeReplies: i.includeReplies,
												includeParentMessageText: i.includeParentMessageText,
												includeThreadInfo: i.includeThreadInfo,
												showSubchannelMessagesOnly: i.showSubchannelMessagesOnly
											}, (function(n, t) {
												var a = null;
												n || ((0 === (a = t.messages.map((function(e) {
													return s.buildMessage(e, o)
												}))).length || a.length < e) && (i.hasMore = !1), t = fn.get(i), fn.set(i, Math.min.apply(Math, b(a.map((function(e) {
													return e.createdAt
												}))).concat([t])))), i.isLoading = !1, r(n, a)
											}))) : r(null, [])
										}
									}), r)
								}
							}]), e
						}(),
						gn = function() {
							function e() {
								o(this, e), this.isLoading = !1, this.hasNext = !0, this.limit = 20, this.includeEmpty = !1, this.order = tn.ORDER_LATEST_LAST_MESSAGE, this._token = "", this.channelNameContainsFilter = "", this.channelUrlsFilter = [], this.customTypesFilter = [], this.customTypeStartsWithFilter = null, this.superChannelFilter = Fe.SuperChannelFilter.ALL, this.membershipFilter = e.MembershipType.JOINED, this.metadataOrderKeyFilter = null, this.includeFrozen = !0, this.includeMetaData = !0
							}
							return u(e, [{
								key: "next",
								value: function(n) {
									var t = this;
									return ge(this._iid, (function(n) {
										var r = M.get(t._iid).GroupChannel;
										!("number" == typeof t.limit && 0 < t.limit && "boolean" == typeof t.includeEmpty && "string" == typeof t.order && -1 < [e.ORDER_CHRONOLOGICAL, e.CHANNEL_NAME_ALPHABETICAL, e.METADATA_VALUE_ALPHABETICAL, e.ORDER_LATEST_LAST_MESSAGE].indexOf(t.order.toLowerCase()) && Array.isArray(t.customTypesFilter) && Array.isArray(t.channelUrlsFilter) && -1 < Object.keys(e.MembershipType).map((function(n) {
											return e.MembershipType[n]
										})).indexOf(t.membershipFilter) && -1 < Object.keys(r.SuperChannelFilter).map((function(e) {
											return r.SuperChannelFilter[e]
										})).indexOf(t.superChannelFilter)) || "string" != typeof t.customTypeStartsWithFilter && null !== t.customTypeStartsWithFilter || "string" != typeof t.channelNameContainsFilter || "string" != typeof t.metadataOrderKeyFilter && null !== t.metadataOrderKeyFilter || "boolean" != typeof t.includeFrozen || "boolean" != typeof t.includeMetaData ? n(ie.error, null) : t.isLoading ? n(new R("Query in progress.", R.QUERY_IN_PROGRESS), null) : t.hasNext ? (t.isLoading = !0, O.get(t._iid).container.apiClient.loadPublicGroupChannelList(d(d({}, t), {}, {
											token: t._token
										}), (function(e, i) {
											var s, a = null;
											e || (s = String(i.next), t._token = s, t.hasNext = !!s, (s = i.channels) && Array.isArray(s) ? a = s.map((function(e) {
												return "number" == typeof i.ts && (e.ts = i.ts), r.upsert(e)
											})) : e = new R("Failed at loading group channels.", R.MALFORMED_DATA)), t.isLoading = !1, n(e, a)
										}))) : n(null, [])
									}), n)
								}
							}], [{
								key: "MembershipType",
								get: function() {
									return {
										ALL: "all",
										JOINED: "joined"
									}
								}
							}, {
								key: "ORDER_LATEST_LAST_MESSAGE",
								get: function() {
									return "latest_last_message"
								}
							}, {
								key: "ORDER_CHRONOLOGICAL",
								get: function() {
									return "chronological"
								}
							}, {
								key: "CHANNEL_NAME_ALPHABETICAL",
								get: function() {
									return "channel_name_alphabetical"
								}
							}, {
								key: "METADATA_VALUE_ALPHABETICAL",
								get: function() {
									return "metadata_value_alphabetical"
								}
							}]), e
						}(),
						yn = function() {
							function e() {
								o(this, e), this.isDistinct = null, this.isSuper = null, this.isBroadcast = null, this.isPublic = null, this.channelUrl = null, this.isEphemeral = null, this.isDiscoverable = null, this.isStrict = null, this.name = null, this.data = null, this.customType = null, this.channelCover = null, this.coverUrl = null, this.coverImage = null, this.accessCode = null, this.messageSurvivalSeconds = null, this._invitedUserIds = [];
								var n = null;
								Object.defineProperty(this, "operators", {
									set: function(e) {
										Array.isArray(e) && e.filter((function(e) {
											return e.hasOwnProperty("userId")
										})).length === e.length && (n = e.map((function(e) {
											return e.userId
										})))
									}
								}), Object.defineProperty(this, "operatorUserIds", {
									get: function() {
										return n
									},
									set: function(e) {
										Array.isArray(e) && e.filter((function(e) {
											return "string" == typeof e
										})).length === e.length && (n = e)
									}
								})
							}
							return u(e, [{
								key: "_validate",
								value: function() {
									return Array.isArray(this._invitedUserIds) && this._invitedUserIds.every((function(e) {
										return "string" == typeof e
									})) && ("string" == typeof this.channelUrl || null === this.channelUrl) && ("string" == typeof this.coverUrl || null === this.coverUrl) && (V.isFile(this.coverImage) || null === this.coverImage) && ("string" == typeof this.name || null === this.name) && ("string" == typeof this.data || null === this.data) && ("string" == typeof this.customType || null === this.customType) && ("boolean" == typeof this.isDistinct || null === this.isDistinct) && ("boolean" == typeof this.isSuper || null === this.isSuper) && ("boolean" == typeof this.isBroadcast || null === this.isBroadcast) && ("boolean" == typeof this.isPublic || null === this.isPublic) && ("boolean" == typeof this.isEphemeral || null === this.isEphemeral) && ("boolean" == typeof this.isDiscoverable || null === this.isDiscoverable) && ("boolean" == typeof this.isStrict || null === this.isStrict) && (Array.isArray(this.operatorUserIds) && this.operatorUserIds.every((function(e) {
										return "string" == typeof e
									})) || null === this.operatorUserIds) && ("string" == typeof this.accessCode || null === this.accessCode) && ("number" == typeof this.messageSurvivalSeconds || null === this.messageSurvivalSeconds)
								}
							}, {
								key: "addUsers",
								value: function(e) {
									var n;
									Array.isArray(e) && (n = e.filter((function(e) {
										return e.hasOwnProperty("userId") && "string" == typeof e.userId
									})).map((function(e) {
										return e.userId
									})), (e = this._invitedUserIds).push.apply(e, b(n)))
								}
							}, {
								key: "addUser",
								value: function(e) {
									e.hasOwnProperty("userId") && "string" == typeof e.userId && this._invitedUserIds.push(e.userId)
								}
							}, {
								key: "addUserIds",
								value: function(e) {
									var n;
									Array.isArray(e) && (n = e.filter((function(e) {
										return "string" == typeof e
									})), (e = this._invitedUserIds).push.apply(e, b(n)))
								}
							}, {
								key: "addUserId",
								value: function(e) {
									"string" == typeof e && this._invitedUserIds.push(e)
								}
							}]), e
						}(),
						mn = function() {
							function e() {
								o(this, e), this.channelUrl = null, this.name = null, this.coverUrlOrImage = null, this.data = null, this.customType = null, this._operatorUserIds = []
							}
							return u(e, [{
								key: "operatorUserIds",
								get: function() {
									return this._operatorUserIds
								},
								set: function(e) {
									Array.isArray(e) && e.every((function(e) {
										return "string" == typeof e
									})) && (this._operatorUserIds = e)
								}
							}, {
								key: "operators",
								set: function(e) {
									Array.isArray(e) && e.every((function(e) {
										return e.hasOwnProperty("userId")
									})) && (this._operatorUserIds = e.map((function(e) {
										return e.userId
									})))
								}
							}, {
								key: "_validate",
								value: function() {
									return (Array.isArray(this.operatorUserIds) && this.operatorUserIds.every((function(e) {
										return "string" == typeof e
									})) || null === this.operatorUserIds) && ("string" == typeof this.coverUrlOrImage || V.isFile(this.coverUrlOrImage) || null === this.coverUrlOrImage) && ("string" == typeof this.name || null === this.name) && ("string" == typeof this.data || null === this.data) && ("string" == typeof this.customType || null === this.customType) && ("string" == typeof this.channelUrl || null === this.channelUrl)
								}
							}]), e
						}(),
						vn = new WeakMap,
						En = function() {
							function e() {
								o(this, e), this._mentionType = e.MentionType.USERS, this._mentionedUserIds = [], this._cachedMentionedUsers = [], this._cachedMentionedUserIds = [], this._metaArrays = [], vn.set(this, null), this._parentMessageId = null
							}
							return u(e, [{
								key: "mentionType",
								get: function() {
									return this._mentionType
								},
								set: function(e) {
									var n = M.get(this._iid).BaseMessageParams; - 1 < Object.keys(n.MentionType).map((function(e) {
										return n.MentionType[e]
									})).indexOf(e) && (this._mentionType = e)
								}
							}, {
								key: "mentionedUserIds",
								get: function() {
									return this._cachedMentionedUserIds
								},
								set: function(e) {
									if (Array.isArray(e))
										for (var n = ot.getInstance(this._iid), t = 0; t < e.length; t++) {
											var r = e[t];
											if ("string" != typeof r) {
												this._cachedMentionedUserIds = [], this._mentionedUserIds = [];
												break
											}
											this._mentionedUserIds.indexOf(r) < 0 && n.currentUser && n.currentUser.userId !== r && (this._cachedMentionedUserIds.push(r), this._mentionedUserIds.push(r))
										}
								}
							}, {
								key: "mentionedUsers",
								get: function() {
									return this._cachedMentionedUsers
								},
								set: function(e) {
									if (Array.isArray(e))
										for (var n = ot.getInstance(this._iid), t = 0; t < e.length; t++) {
											var r = e[t];
											if (!r.hasOwnProperty("userId")) {
												this._cachedMentionedUsers = [], this._mentionedUserIds = [];
												break
											}
											this._mentionedUserIds.indexOf(r.userId) < 0 && n.currentUser && n.currentUser.userId !== r.userId && (this._cachedMentionedUsers.push(r), this._mentionedUserIds.push(r.userId))
										}
								}
							}, {
								key: "metaArrayKeys",
								get: function() {
									return this._metaArrays.map((function(e) {
										return e.key
									}))
								},
								set: function(e) {
									var n = M.get(this._iid).MessageMetaArray,
										t = {};
									if (Array.isArray(e)) {
										this._metaArrays = [];
										for (var r = 0; r < e.length; r++) "string" != typeof e[r] || t[e[r]] || (t[e[r]] = !0, this._metaArrays.push(new n(e[r])))
									}
								}
							}, {
								key: "metaArrays",
								get: function() {
									return this._metaArrays
								},
								set: function(e) {
									var n = M.get(this._iid).MessageMetaArray;
									if (Array.isArray(e)) {
										this._metaArrays = [];
										for (var t = 0; t < e.length; t++) {
											var r, i = e[t];
											i instanceof n && ((r = this._metaArrays.map((function(e) {
												return e.key
											})).indexOf(i.key)) < 0 ? this._metaArrays.push(i) : (r = this._metaArrays[r].value).push.apply(r, b(i.value)))
										}
									}
								}
							}, {
								key: "rootMessageId",
								get: function() {
									return vn.get(this)
								}
							}, {
								key: "parentMessageId",
								get: function() {
									return this._parentMessageId
								},
								set: function(e) {
									vn.set(this, e), this._parentMessageId = e
								}
							}, {
								key: "_validate",
								value: function() {
									var e = (t = M.get(this._iid)).BaseMessageParams,
										n = t.MessageMetaArray,
										t = vn.get(this);
									return -1 < Object.keys(e.MentionType).map((function(n) {
										return e.MentionType[n]
									})).indexOf(this.mentionType) && this._mentionedUserIds.every((function(e) {
										return "string" == typeof e
									})) && Array.isArray(this._metaArrays) && this._metaArrays.every((function(e) {
										return e instanceof n
									})) && ("number" == typeof t || null === t) && ("number" == typeof this._parentMessageId || null === this._parentMessageId)
								}
							}], [{
								key: "MentionType",
								get: function() {
									return {
										USERS: "users",
										CHANNEL: "channel"
									}
								}
							}, {
								key: "PushNotificationDeliveryOption",
								get: function() {
									return {
										DEFAULT: "default",
										SUPPRESS: "suppress"
									}
								}
							}]), e
						}(),
						Cn = function() {
							h(n, En);
							var e = v(n);

							function n() {
								var t;
								return o(this, n), (t = e.call(this)).message = null, t.data = null, t.customType = null, t.pushNotificationDeliveryOption = null, t.appleCriticalAlertOptions = null, t._translationTargetLanguages = [], t
							}
							return u(n, [{
								key: "targetLanguages",
								get: function() {
									return this.translationTargetLanguages
								},
								set: function(e) {
									this.translationTargetLanguages = e
								}
							}, {
								key: "translationTargetLanguages",
								get: function() {
									return this._translationTargetLanguages
								},
								set: function(e) {
									if (Array.isArray(e)) {
										for (var n = 0; n < e.length; n++)
											if ("string" != typeof e[n]) return void(this._translationTargetLanguages = []);
										this._translationTargetLanguages = e
									}
								}
							}, {
								key: "_validate",
								value: function() {
									var e = (t = M.get(this._iid)).BaseMessageParams,
										t = t.AppleCriticalAlertOptions;
									return E(p(n.prototype), "_validate", this).call(this) && ("string" == typeof this.message || null === this.message) && ("string" == typeof this.data || null === this.data) && ("string" == typeof this.customType || null === this.customType) && Array.isArray(this.translationTargetLanguages) && this.translationTargetLanguages.every((function(e) {
										return "string" == typeof e
									})) && (null === this.pushNotificationDeliveryOption || -1 < Object.keys(e.PushNotificationDeliveryOption).map((function(n) {
										return e.PushNotificationDeliveryOption[n]
									})).indexOf(this.pushNotificationDeliveryOption)) && (null === this.appleCriticalAlertOptions || this.appleCriticalAlertOptions instanceof t)
								}
							}]), n
						}(),
						bn = function() {
							h(n, En);
							var e = v(n);

							function n() {
								var t;
								return o(this, n), (t = e.call(this)).fileName = null, t.mimeType = null, t.fileSize = null, t.data = null, t.customType = null, t.pushNotificationDeliveryOption = null, t.appleCriticalAlertOptions = null, t._isUpdate = !1, t._file = null, t._fileUrl = null, t._thumbnailSizes = [], t
							}
							return u(n, [{
								key: "file",
								get: function() {
									return this._file
								},
								set: function(e) {
									V.isFile(e) && (this._fileUrl = null, this._file = e)
								}
							}, {
								key: "fileUrl",
								get: function() {
									return this._fileUrl
								},
								set: function(e) {
									"string" == typeof e && (this._fileUrl = e, this._file = null)
								}
							}, {
								key: "thumbnailSizes",
								get: function() {
									return this._thumbnailSizes
								},
								set: function(e) {
									if (Array.isArray(e)) {
										for (var n = 0; n < e.length; n++)
											if ("object" !== a(e[n]) || "number" != typeof e[n].maxWidth || "number" != typeof e[n].maxHeight) return void(this._thumbnailSizes = []);
										this._thumbnailSizes = e
									}
								}
							}, {
								key: "_validate",
								value: function() {
									var e = (t = M.get(this._iid)).BaseMessageParams,
										t = t.AppleCriticalAlertOptions;
									return E(p(n.prototype), "_validate", this).call(this) && (this._isUpdate || V.isFile(this.file) || "string" == typeof this.fileUrl) && ("string" == typeof this.fileName || null === this.fileName) && ("string" == typeof this.mimeType || null === this.mimeType) && ("number" == typeof this.fileSize || null === this.fileSize) && ("string" == typeof this.data || null === this.data) && ("string" == typeof this.customType || null === this.customType) && (null === this._thumbnailSizes || this._thumbnailSizes.every((function(e) {
										return "object" === a(e) && 0 < e.maxWidth && 0 < e.maxHeight
									}))) && (null === this.pushNotificationDeliveryOption || -1 < Object.keys(e.PushNotificationDeliveryOption).map((function(n) {
										return e.PushNotificationDeliveryOption[n]
									})).indexOf(this.pushNotificationDeliveryOption)) && (null === this.appleCriticalAlertOptions || this.appleCriticalAlertOptions instanceof t)
								}
							}]), n
						}(),
						An = function() {
							h(n, Cn);
							var e = v(n);

							function n(t) {
								var r;
								return o(this, n), (r = e.call(this)).year = null, r.month = null, r.day = null, r.hour = null, r.min = null, r.timezone = null, r._scheduledDateTimeString = null, t && r._update(t), r
							}
							return u(n, [{
								key: "scheduledDateTimeString",
								get: function() {
									return this._scheduledDateTimeString || ("number" == typeof this.year && 4 === this.year.toString().length && "number" == typeof this.month && 1 <= this.month && this.month <= 12 && "number" == typeof this.day && 1 <= this.day && this.day <= 31 && "number" == typeof this.hour && 0 <= this.hour && this.hour <= 24 && "number" == typeof this.min && 0 <= this.min && this.min <= 60 && "string" == typeof this.timezone && 0 < this.timezone.length ? this.year.toString() + "-" + ("0" + this.month.toString()).substr(-2) + "-" + ("0" + this.day.toString()).substr(-2) + " " + ("0" + this.hour.toString()).substr(-2) + ":" + ("0" + this.min.toString()).substr(-2) : null)
								},
								set: function(e) {
									e && "string" == typeof e && (this._scheduledDateTimeString = e)
								}
							}, {
								key: "_update",
								value: function(e) {
									e.hasOwnProperty("message") && (this.message = e.message), e.hasOwnProperty("year") && (this.year = e.year), e.hasOwnProperty("month") && (this.month = e.month), e.hasOwnProperty("day") && (this.day = e.day), e.hasOwnProperty("hour") && (this.hour = e.hour), e.hasOwnProperty("min") && (this.min = e.min), e.hasOwnProperty("timezone") && (this.timezone = e.timezone)
								}
							}, {
								key: "_getScheduleString",
								value: function() {
									return this.scheduledDateTimeString ? this.scheduledDateTimeString + " " + this.timezone : "number" == typeof this.year && 4 === this.year.toString().length && "number" == typeof this.month && 1 <= this.month && this.month <= 12 && "number" == typeof this.day && 1 <= this.day && this.day <= 31 && "number" == typeof this.hour && 0 <= this.hour && this.hour <= 24 && "number" == typeof this.min && 0 <= this.min && this.min <= 60 && "string" == typeof this.timezone && 0 < this.timezone.length ? this.year.toString() + "-" + ("0" + this.month.toString()).substr(-2) + "-" + ("0" + this.day.toString()).substr(-2) + " " + ("0" + this.hour.toString()).substr(-2) + ":" + ("0" + this.min.toString()).substr(-2) + " " + this.timezone : null
								}
							}, {
								key: "setSchedule",
								value: function(e, n, t, r, i, s) {
									"number" == typeof e && 4 === e.toString().length && "number" == typeof n && 1 <= n && n <= 12 && "number" == typeof t && 1 <= t && t <= 31 && "number" == typeof r && 0 <= r && r <= 24 && "number" == typeof i && 0 <= i && i <= 60 && "string" == typeof s && 0 < s.length && (this.scheduledDateTimeString = e.toString() + "-" + ("0" + n.toString()).substr(-2) + "-" + ("0" + t.toString()).substr(-2) + " " + ("0" + r.toString()).substr(-2) + ":" + ("0" + i.toString()).substr(-2), this.timezone = s)
								}
							}]), n
						}(),
						Un = function e() {
							o(this, e), this.channelCustomTypesFilter = [], this.superChannelFilter = Fe.SuperChannelFilter.ALL
						},
						kn = function() {
							function e() {
								o(this, e), this.channelUrl = null, this.channelType = null, this.messageId = 0, this.includeMetaArray = !1, this.includeParentMessageText = !1, this.includeThreadInfo = !1
							}
							return u(e, [{
								key: "_validate",
								value: function() {
									var e = M.get(this._iid).BaseChannel;
									return "string" == typeof this.channelUrl && "string" == typeof this.channelType && [e.CHANNEL_TYPE_BASE, e.CHANNEL_TYPE_OPEN, e.CHANNEL_TYPE_GROUP].includes(this.channelType) && "number" == typeof this.messageId && "boolean" == typeof this.includeMetaArray && "boolean" == typeof this.includeParentMessageText && "boolean" == typeof this.includeThreadInfo
								}
							}]), e
						}(),
						Sn = function() {
							function e() {
								o(this, e);
								var n = M.get(this._iid).BaseChannel;
								this.prevResultSize = 0, this.nextResultSize = 0, this.isInclusive = !1, this.reverse = !1, this.messageType = n.MessageTypeFilter.ALL, this.customType = null, this.customTypes = [], this.senderUserIds = null, this.includeMetaArray = !1, this.includeReaction = null, this.includeReactions = !1, this.includeReplies = !1, this.includeParentMessageText = !1, this.includeThreadInfo = !1, this.showSubchannelMessagesOnly = !1
							}
							return u(e, [{
								key: "_validate",
								value: function() {
									"boolean" == typeof this.includeReaction && this.includeReaction && (this.includeReactions = this.includeReaction);
									var e = M.get(this._iid).BaseChannel;
									return "number" == typeof this.prevResultSize && "number" == typeof this.nextResultSize && "boolean" == typeof this.isInclusive && "boolean" == typeof this.reverse && "string" == typeof this.messageType && Object.values(e.MessageTypeFilter).includes(this.messageType) && ("string" == typeof this.customType || null === this.customType) && Array.isArray(this.customTypes) && this.customTypes.every((function(e) {
										return "string" == typeof e || null === e
									})) && (Array.isArray(this.senderUserIds) && this.senderUserIds.every((function(e) {
										return "string" == typeof e
									})) || null === this.senderUserIds) && "boolean" == typeof this.includeMetaArray && "boolean" == typeof this.includeReactions && "boolean" == typeof this.includeReplies && "boolean" == typeof this.includeParentMessageText && "boolean" == typeof this.includeThreadInfo && "boolean" == typeof this.showSubchannelMessagesOnly
								}
							}]), e
						}(),
						In = function() {
							function e() {
								o(this, e);
								var n = M.get(this._iid).BaseChannel;
								this.prevResultSize = 0, this.nextResultSize = 0, this.isInclusive = !1, this.reverse = !1, this.messageType = n.MessageTypeFilter.ALL, this.customType = null, this.customTypes = [], this.senderUserIds = null, this.includeMetaArray = !1, this.includeReaction = null, this.includeReactions = !1, this.includeParentMessageText = !1
							}
							return u(e, [{
								key: "_validate",
								value: function() {
									"boolean" == typeof this.includeReaction && this.includeReaction && (this.includeReactions = this.includeReaction);
									var e = M.get(this._iid).BaseChannel;
									return "number" == typeof this.prevResultSize && "number" == typeof this.nextResultSize && "boolean" == typeof this.isInclusive && "boolean" == typeof this.reverse && "string" == typeof this.messageType && Object.values(e.MessageTypeFilter).includes(this.messageType) && ("string" == typeof this.customType || null === this.customType) && Array.isArray(this.customTypes) && this.customTypes.every((function(e) {
										return "string" == typeof e || null === e
									})) && (Array.isArray(this.senderUserIds) && this.senderUserIds.every((function(e) {
										return "string" == typeof e
									})) || null === this.senderUserIds) && "boolean" == typeof this.includeMetaArray && "boolean" == typeof this.includeReactions && "boolean" == typeof this.includeParentMessageText
								}
							}]), e
						}(),
						Nn = function() {
							function e() {
								o(this, e), this.includeMetaArray = !1, this.includeReaction = null, this.includeReactions = !1, this.includeReplies = !1, this.includeParentMessageText = !1, this.includeThreadInfo = !1
							}
							return u(e, [{
								key: "_validate",
								value: function() {
									return "boolean" == typeof this.includeReaction && this.includeReaction && (this.includeReactions = this.includeReaction), "boolean" == typeof this.includeMetaArray && "boolean" == typeof this.includeReactions && "boolean" == typeof this.includeReplies && "boolean" == typeof this.includeParentMessageText && "boolean" == typeof this.includeThreadInfo
								}
							}]), e
						}(),
						On = function() {
							function e() {
								o(this, e), this.customTypes = [], this.includeEmpty = !1, this.includeFrozen = !0
							}
							return u(e, [{
								key: "_validate",
								value: function() {
									return (Array.isArray(this.customTypes) && this.customTypes.every((function(e) {
										return "string" == typeof e
									})) || null === this.customTypes) && ("boolean" == typeof this.includeEmpty || null === this.includeEmpty) && "boolean" == typeof this.includeFrozen
								}
							}]), e
						}(),
						Rn = function e() {
							o(this, e), this.onReconnectStarted = function() {}, this.onReconnectSucceeded = function() {}, this.onReconnectFailed = function() {}
						},
						Tn = function e() {
							o(this, e), this.onFriendsDiscovered = function(e) {}, this.onTotalUnreadMessageCountUpdated = function(e, n) {}
						},
						wn = function e() {
							o(this, e), this.onMessageReceived = function(e, n) {}, this.onMessageUpdated = function(e, n) {}, this.onMessageDeleted = function(e, n) {}, this.onReadReceiptUpdated = function(e) {}, this.onReactionUpdated = function(e, n) {}, this.onDeliveryReceiptUpdated = function(e) {}, this.onTypingStatusUpdated = function(e) {}, this.onUserJoined = function(e, n) {}, this.onUserLeft = function(e, n) {}, this.onOperatorUpdated = function(e, n) {}, this.onUserEntered = function(e, n) {}, this.onUserExited = function(e, n) {}, this.onUserMuted = function(e, n) {}, this.onUserUnmuted = function(e, n) {}, this.onUserBanned = function(e, n) {}, this.onUserUnbanned = function(e, n) {}, this.onChannelFrozen = function(e) {}, this.onChannelUnfrozen = function(e) {}, this.onChannelChanged = function(e) {}, this.onChannelDeleted = function(e, n) {}, this.onUserReceivedInvitation = function(e, n, t) {}, this.onUserDeclinedInvitation = function(e, n, t) {}, this.onMetaDataCreated = function(e, n) {}, this.onMetaDataUpdated = function(e, n) {}, this.onMetaDataDeleted = function(e, n) {}, this.onMetaCountersCreated = function(e, n) {}, this.onMetaCountersUpdated = function(e, n) {}, this.onMetaCountersDeleted = function(e, n) {}, this.onChannelHidden = function(e) {}, this.onMentionReceived = function(e, n) {}, this.onThreadInfoUpdated = function(e, n) {}, this.onChannelMemberCountChanged = function(e) {}, this.onChannelParticipantCountChanged = function(e) {}
						},
						Mn = function e(n) {
							var t, r;
							o(this, e), n && (t = (r = M.get(this._iid)).User, r = r.BaseChannel, this.reader = new t(n.user), this.timestamp = parseInt(n.ts), this.channelUrl = n.hasOwnProperty("channel_url") ? String(n.channel_url) : "", this.channelType = n.hasOwnProperty("channel_type") ? String(n.channel_type) : r.CHANNEL_TYPE_GROUP)
						},
						Ln = function() {
							function e(n) {
								var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [];
								o(this, e), this.key = n, this.value = Array.isArray(t) && t.every((function(e) {
									return "string" == typeof e
								})) ? t : []
							}
							return u(e, [{
								key: "encode",
								value: function() {
									return {
										key: this.key,
										value: this.value || []
									}
								}
							}]), e
						}(),
						Pn = new WeakMap,
						Dn = function() {
							function e(n) {
								var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [],
									r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
								o(this, e), this.key = n, this.userIds = t, this.updatedAt = r;
								var i, s = {};
								for (i in this.userIds) s[this.userIds[i]] = this.updatedAt;
								Pn.set(this, s)
							}
							return u(e, [{
								key: "isEmpty",
								get: function() {
									return 0 === this.userIds.length
								}
							}, {
								key: "serialize",
								value: function() {
									return {
										key: this.key,
										user_ids: this.userIds,
										updated_at: this.updatedAt
									}
								}
							}, {
								key: "_applyEvent",
								value: function(e) {
									if (e instanceof _e) {
										var n = Pn.get(this);
										if (e.key === this.key && (!n[e.userId] || n[e.userId] < e.updatedAt)) {
											var t = this.userIds.indexOf(e.userId);
											switch (e.operation) {
												case "add":
													t < 0 && this.userIds.push(e.userId);
													break;
												case "delete":
													0 <= t && this.userIds.splice(t, 1)
											}
											n[e.userId] = e.updatedAt
										}
									}
								}
							}], [{
								key: "createFromJson",
								value: function(e) {
									var n = e.key,
										t = e.user_ids;
									return e = e.updated_at, "string" == typeof n && n && Array.isArray(t) && 0 < t.length && "number" == typeof e ? new this(n, t, e) : null
								}
							}]), e
						}(),
						Fn = function() {
							function e(n) {
								o(this, e), this.replyCount = 0, this.mostRepliedUsers = [], this.lastRepliedAt = 0, this.updatedAt = 0, n && this._update(n)
							}
							return u(e, [{
								key: "_update",
								value: function(e) {
									var n = M.get(this._iid).User;
									e.hasOwnProperty("reply_count") && (this.replyCount = parseInt(e.reply_count)), e.hasOwnProperty("most_replies") && Array.isArray(e.most_replies) && e.most_replies.every((function(e) {
										return "object" === a(e)
									})) && (this.mostRepliedUsers = e.most_replies.map((function(e) {
										return new n(e)
									}))), e.hasOwnProperty("last_replied_at") && (this.lastRepliedAt = parseInt(e.last_replied_at)), e.hasOwnProperty("updated_at") && (this.updatedAt = parseInt(e.updated_at))
								}
							}], [{
								key: "objectify",
								value: function(e) {
									var n = M.get(this._iid).User,
										t = e.replyCount,
										r = e.mostRepliedUsers,
										i = e.lastRepliedAt,
										s = e.updatedAt;
									return (e = {}).reply_count = t, Array.isArray(r) && r.every((function(e) {
										return e instanceof n
									})) && (e.most_replies = r.map((function(e) {
										return n.objectify(e)
									}))), e.last_replied_at = i, e.updated_at = s, e
								}
							}, {
								key: "build",
								value: function(e, n, t, r) {
									return this.objectify({
										replyCount: e,
										mostRepliedUsers: n,
										lastRepliedAt: t,
										updatedAt: r
									})
								}
							}]), e
						}(),
						Hn = function() {
							function e(n) {
								o(this, e), this.title = null, this.url = null, this.description = null, this.defaultImage = null, n && this._update(n)
							}
							return u(e, [{
								key: "_update",
								value: function(e) {
									var n = M.get(this._iid).OGImage;
									e.hasOwnProperty("og:title") && (this.title = e["og:title"]), e.hasOwnProperty("og:url") && (this.url = e["og:url"]), e.hasOwnProperty("og:description") && (this.description = e["og:description"]), e.hasOwnProperty("og:image") && (this.defaultImage = new n(e["og:image"]))
								}
							}], [{
								key: "objectify",
								value: function(e) {
									var n, t = M.get(this._iid).OGImage,
										r = void 0 === (n = e.title) ? null : n,
										i = void 0 === (s = e.url) ? null : s,
										s = void 0 === (n = e.description) ? null : n;
									return e = void 0 === (n = e.defaultImage) ? null : n, (n = {})["og:title"] = r, n["og:url"] = i, n["og:description"] = s, e && (n["og:image"] = t.objectify(e)), n
								}
							}]), e
						}(),
						xn = function() {
							function e(n) {
								o(this, e), this.url = null, this.secureUrl = null, this.type = null, this.width = 0, this.height = 0, this.alt = null, n && this._update(n)
							}
							return u(e, [{
								key: "_update",
								value: function(e) {
									e.hasOwnProperty("url") && (this.url = e.url), e.hasOwnProperty("secure_url") && (this.secureUrl = e.secure_url), e.hasOwnProperty("type") && (this.type = e.type), e.hasOwnProperty("width") && (this.width = parseInt(e.width)), e.hasOwnProperty("height") && (this.height = parseInt(e.height)), e.hasOwnProperty("alt") && (this.alt = e.alt)
								}
							}], [{
								key: "objectify",
								value: function(e) {
									var n, t = void 0 === (a = e.url) ? null : a,
										r = void 0 === (s = e.secureUrl) ? null : s,
										i = void 0 === (n = e.type) ? null : n,
										s = void 0 === (a = e.width) ? 0 : a,
										a = void 0 === (n = e.height) ? 0 : n;
									return e = void 0 === (n = e.alt) ? null : n, (n = {}).url = t, n.secure_url = r, n.type = i, n.width = s, n.height = a, n.alt = e, n
								}
							}]), e
						}(),
						Gn = function() {
							function e(n) {
								o(this, e), this.type = null, this.vendor = null, this.detail = {}, n && this._update(n)
							}
							return u(e, [{
								key: "_update",
								value: function(e) {
									this.type = e.hasOwnProperty("type") ? e.type : "", this.vendor = e.hasOwnProperty("vendor") ? e.vendor : "", e.hasOwnProperty("detail") && "object" === a(e.detail) && !Array.isArray(e.detail) && (this.detail = e.detail)
								}
							}], [{
								key: "objectify",
								value: function(e) {
									var n, t = void 0 === (r = e.type) ? "" : r,
										r = void 0 === (n = e.vendor) ? "" : n;
									return e = void 0 === (n = e.detail) ? {} : n, (n = {}).type = t, n.vendor = r, n.detail = e, n
								}
							}]), e
						}(),
						jn = "default",
						Bn = 1,
						zn = function() {
							function e(n) {
								o(this, e), this.name = jn, this.volume = Bn, n && this._update(n)
							}
							return u(e, [{
								key: "_update",
								value: function(e) {
									e.hasOwnProperty("name") && (this.name = e.name), e.hasOwnProperty("volume") && (this.volume = e.volume)
								}
							}, {
								key: "serialize",
								value: function() {
									return {
										name: this.name,
										volume: this.volume
									}
								}
							}]), e
						}(),
						qn = function() {
							function e() {
								var n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
								o(this, e), this.isLoading = !1, this.hasNext = !0, this.limit = 20, this.userIds = n, this.metaDataKey = "", this.metaDataValues = [], this._token = ""
							}
							return u(e, [{
								key: "next",
								value: function(e) {
									var n = this;
									return ge(this._iid, (function(e) {
										"number" == typeof n.limit && 0 < n.limit && Array.isArray(n.userIds) && "string" == typeof n.metaDataKey && Array.isArray(n.metaDataValues) && !!n.metaDataKey == 0 < n.metaDataValues.length ? n.isLoading ? e(new R("Query in progress.", R.QUERY_IN_PROGRESS), null) : n.hasNext ? (n.isLoading = !0, O.get(n._iid).container.apiClient.loadUserList(d(d({}, n), {}, {
											userIdsFilter: n.userIds,
											metaDataKeyFilter: n.metaDataKey,
											metaDataValuesFilter: n.metaDataValues,
											token: n._token
										}), (function(t, r) {
											var i, s, a = null;
											t || (i = M.get(n._iid).User, s = String(r.next), n._token = s, n.hasNext = !!s, a = r.users.map((function(e) {
												return new i(e)
											}))), n.isLoading = !1, e(t, a)
										}))) : e(null, []) : e(ie.error, null)
									}), e)
								}
							}]), e
						}(),
						Qn = new WeakMap,
						Yn = function() {
							function e(n) {
								o(this, e), this.isLoading = !1, Qn.set(this, n)
							}
							return u(e, [{
								key: "prev",
								value: function(e, n, t, r) {
									var i = arguments,
										s = this;
									return ge(this._iid, (function(r) {
										var a, o = M.get(s._iid).BaseChannel,
											l = C(ie.parse(i, [new ie({
												type: "number"
											}), new ie({
												type: "number"
											}), new ie({
												type: "boolean"
											}), new ie({
												type: "function"
											})]), 5),
											u = l[0];
										e = l[1], n = l[2], t = l[3], r = l[4], u ? r(u, null) : s.isLoading ? r(new R("Query in progress.", R.QUERY_IN_PROGRESS), null) : (s.isLoading = !0, a = Qn.get(s), O.get(s._iid).container.apiClient.getMessageList({
											channelUrl: a.url,
											channelType: a.channelType,
											token: e,
											tokenType: "timestamp",
											isInclusive: !1,
											prevResultSize: n,
											nextResultSize: 0,
											shouldReverse: t,
											messageType: "",
											customType: ""
										}, (function(e, n) {
											var t = null;
											e || (t = n.messages.map((function(e) {
												return o.buildMessage(e, a)
											}))), s.isLoading = !1, r(e, t)
										})))
									}), r)
								}
							}, {
								key: "next",
								value: function(e, n, t, r) {
									var i = arguments,
										s = this;
									return ge(this._iid, (function(r) {
										var a, o = M.get(s._iid).BaseChannel,
											l = C(ie.parse(i, [new ie({
												type: "number"
											}), new ie({
												type: "number"
											}), new ie({
												type: "boolean"
											}), new ie({
												type: "function"
											})]), 5),
											u = l[0];
										e = l[1], n = l[2], t = l[3], r = l[4], u ? r(u, null) : s.isLoading ? r(new R("Query in progress.", R.QUERY_IN_PROGRESS), null) : (s.isLoading = !0, a = Qn.get(s), O.get(s._iid).container.apiClient.getMessageList({
											channelUrl: a.url,
											channelType: a.channelType,
											token: e,
											tokenType: "timestamp",
											isInclusive: !1,
											prevResultSize: 0,
											nextResultSize: n,
											shouldReverse: t,
											messageType: "",
											customType: ""
										}, (function(e, n) {
											var t = null;
											e || (t = n.messages.map((function(e) {
												return o.buildMessage(e, a)
											}))), s.isLoading = !1, r(e, t)
										})))
									}), r)
								}
							}, {
								key: "load",
								value: function(e, n, t, r, i) {
									var s = arguments,
										a = this;
									return ge(this._iid, (function(i) {
										var o, l = M.get(a._iid).BaseChannel,
											u = C(ie.parse(s, [new ie({
												type: "number"
											}), new ie({
												type: "number"
											}), new ie({
												type: "number"
											}), new ie({
												type: "boolean"
											}), new ie({
												type: "callback"
											})]), 6),
											c = u[0];
										e = u[1], n = u[2], t = u[3], r = u[4], i = u[5], c ? i(c, null) : a.isLoading ? i(new R("Query in progress.", R.QUERY_IN_PROGRESS), null) : (a.isLoading = !0, o = Qn.get(a), O.get(a._iid).container.apiClient.getMessageList({
											channelUrl: o.url,
											channelType: o.channelType,
											token: e,
											tokenType: "timestamp",
											isInclusive: !1,
											prevResultSize: n,
											nextResultSize: t,
											shouldReverse: r,
											messageType: "",
											customType: ""
										}, (function(e, n) {
											var t = null;
											e || (t = n.messages.map((function(e) {
												return l.buildMessage(e, o)
											}))), a.isLoading = !1, i(e, t)
										})))
									}), i)
								}
							}]), e
						}(),
						Kn = {
							PENDING: 0,
							FULFILLED: 1,
							REJECTED: 2
						},
						Wn = function() {
							function e(n) {
								var t = this;
								if (o(this, e), this.state = Kn.PENDING, this._value = null, this._reason = null, "function" != typeof n) throw "Promise resolver ".concat(n, " is not a function");
								n((function(e) {
									t.state === Kn.PENDING && (t.state = Kn.FULFILLED, t._value = e)
								}), (function(e) {
									t.state === Kn.PENDING && (t.state = Kn.REJECTED, t._reason = e)
								}))
							}
							return u(e, [{
								key: "length",
								get: function() {
									return 1
								}
							}, {
								key: "then",
								value: function(n, t) {
									var r = this,
										i = this;
									switch (this.state) {
										case Kn.PENDING:
											setTimeout((function() {
												return r.then(n, t)
											}), 100);
											break;
										case Kn.FULFILLED:
											n && "function" == typeof n && (i = n(this._value));
											break;
										case Kn.REJECTED:
											t && "function" == typeof t && (i = t(this._reason))
									}
									return i instanceof e ? i : this
								}
							}, {
								key: "catch",
								value: function(n) {
									var t = this,
										r = this;
									switch (this.state) {
										case Kn.PENDING:
											setTimeout((function() {
												return t.catch(n)
											}), 100);
											break;
										case Kn.FULFILLED:
											break;
										case Kn.REJECTED:
											r = n(this._reason)
									}
									return r instanceof e ? r : this
								}
							}, {
								key: "finally",
								value: function(n) {
									var t = this,
										r = this;
									switch (this.state) {
										case Kn.PENDING:
											setTimeout((function() {
												return t.finally(n)
											}), 100);
											break;
										case Kn.FULFILLED:
										case Kn.REJECTED:
											r = n()
									}
									return r instanceof e ? r : this
								}
							}], [{
								key: "all",
								value: function(n) {
									return new e((function(t, r) {
										if (Array.isArray(n) || "string" == typeof n)
											if (0 < n.length) {
												var i, s = [];
												for (i in n) n[i] instanceof e ? s.push(n[i]) : s.push(e.resolve(n[i]));
												var o = new Array(s.length).fill(null),
													l = s.length,
													u = function(e, n, i) {
														n ? r(n) : (l--, o[e] = i, l <= 0 && t(o))
													};
												s.forEach((function(e, n) {
													e.then((function(e) {
														u(n, null, e)
													})).catch((function(e) {
														u(n, e, null)
													}))
												}))
											} else t([]);
										else r(new Error("Uncaught (in promise) TypeError: ".concat(a(n), " ").concat(n, " is not iterable")))
									}))
								}
							}, {
								key: "resolve",
								value: function(n) {
									return new e((function(e) {
										e(n)
									}))
								}
							}, {
								key: "reject",
								value: function(n) {
									return new e((function(e, t) {
										t(n)
									}))
								}
							}]), e
						}(),
						Vn = function() {
							"undefined" == typeof Promise && ("undefined" != typeof window ? window.Promise = Wn : void 0 !== i ? i.Promise = Wn : "undefined" != typeof self ? self.Promise = Wn : "undefined" != typeof globalThis && (globalThis.Promise = Wn)), Object.values || (Object.values = function(e) {
								return Object.keys(e).map((function(n) {
									return e[n]
								}))
							}), Number.MAX_SAFE_INTEGER || Object.defineProperty(Number, "MAX_SAFE_INTEGER", {
								value: Math.pow(2, 53) - 1
							})
						},
						Jn = 15e3,
						Zn = 5e3,
						Xn = 1e4,
						$n = 5e3,
						et = 3e5,
						nt = 1e3,
						tt = 1e3,
						rt = 9e3,
						it = null,
						st = {},
						at = !1,
						ot = function() {
							function e() {
								var n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
								o(this, e), Vn();
								var t = !1;
								if ((n.newInstance || !it || it && n.appId !== it.getApplicationId() && it.getConnectionState() === it.ConnectionState.CLOSED) && (t = !0, it = this), t) {
									try {
										if (!n.hasOwnProperty("appId")) return q.warn("Must be set appId."), it = null
									} catch (n) {
										return q.warn("Must be set appId."), it = null
									}
									var r = Te.create();
									Object.defineProperty(this, "_iid", {
										get: function() {
											return r
										}
									}), (st[r] = this).customApiHost = null, this.customWsHost = null, this.connecting = !1, this.reconnecting = !1, this.isReconnectingOnError = !1, this.connectionCallbacks = [], this.ConnectionManager = new se(this), this.GCMPushToken = "", this.APNSPushToken = "", this.PUSH_TEMPLATE_DEFAULT = "default", this.PUSH_TEMPLATE_ALTERNATIVE = "alternative", this.currentUser = null, this.isSessionOpened = !1, this.globalTimer, this.loginTimer, this.reconnectTimer, this.loginHandler = null, this.onLoginTimerCancel, this.onReconnectTimerCancel, this.BaseChannel = {
										MessageTypeFilter: Ue.MessageTypeFilter
									};
									var i, s = {
											User: Ce,
											Member: He,
											GroupChannel: Fe,
											OpenChannel: Ye,
											UserMessage: Ke,
											FileMessage: We,
											AdminMessage: Ve,
											GroupChannelListQuery: tn,
											MemberListQuery: rn,
											GroupChannelParams: yn,
											OpenChannelParams: mn,
											BaseMessageParams: En,
											UserMessageParams: Cn,
											FileMessageParams: bn,
											ScheduledUserMessageParams: An,
											GroupChannelTotalUnreadMessageCountParams: Un,
											MessageRetrievalParams: kn,
											MessageListParams: Sn,
											ThreadedMessageListParams: In,
											MessageChangeLogsParams: Nn,
											GroupChannelChangeLogsParams: On,
											MessageMetaArray: Ln,
											UserEventHandler: Tn,
											SessionHandler: ae,
											ChannelHandler: wn,
											ConnectionHandler: Rn,
											AppleCriticalAlertOptions: zn
										},
										a = (t = {
											SessionManager: oe,
											BaseChannel: Ue,
											BaseMessage: Ee,
											UserListQuery: qn,
											ApplicationUserListQuery: Xe,
											BannedUserListQuery: $e,
											BlockedUserListQuery: en,
											FriendListQuery: nn,
											MutedUserListQuery: sn,
											OpenChannelListQuery: an,
											OperatorListQuery: ln,
											ParticipantListQuery: cn,
											MessageListQuery: Yn,
											PreviousMessageListQuery: _n,
											MessageSearchQuery: hn,
											PublicGroupChannelListQuery: gn,
											ScheduledUserMessage: Je,
											ThreadInfo: Fn,
											ThreadInfoUpdateEvent: Ze,
											OGMetaData: Hn,
											OGImage: xn,
											Plugin: Gn,
											Command: de,
											Sender: xe,
											ReadStatus: Mn,
											Reaction: Dn,
											ReactionEvent: _e,
											Emoji: Be,
											EmojiCategory: je,
											EmojiContainer: Ge,
											FileMessageQueue: Re
										}, new M(this._iid, d(d({}, s), t)));
									for (i in a) s[i] && (this[i] = a[i]);
									O.create(r, {
										appId: n.appId,
										pinger: new Y(this),
										apiClient: new Z(this),
										wsAdapter: new re(this),
										commandHandler: new Ie(this),
										onlineDetector: new le(this),
										ackStateMap: {},
										subscribedUnreadMessageCount: {
											all: 0,
											custom_types: {},
											ts: 0
										},
										maxUnreadCountOfSuperGroupChannel: S.DEFAULT_MAX_UNREAD_COUNT_OF_SUPER_GROUP_CHANNEL,
										auth: new T,
										appInfo: null,
										pingInterval: Jn,
										pongTimeout: Zn,
										connectedAt: 0,
										extensions: {},
										supportedExtensionKeys: ["sb_uikit", "sb_syncmanager"],
										getUserAgentWithExtensions: function(e) {
											var n = e.sb_syncmanager ? "s".concat(e.sb_syncmanager) : "";
											return e = e.sb_uikit ? "u".concat(e.sb_uikit) : "", "JS/c".concat(S.SDK_VERSION, "/").concat(n, "/").concat(e)
										},
										sessionManager: new a.SessionManager(this),
										stateChangeEnabled: !0,
										isInBackground: !1,
										closedByGoingBackground: !1,
										isErrorFirstInCallback: !1
									}), this.userEventHandlers = {}, this.channelHandlers = {}, this.connectionHandlers = {}, this.Options = {
										_useMemberAsMessageSender: !0,
										get UseMemberAsMessageSender() {
											return this._useMemberAsMessageSender
										},
										set UseMemberAsMessageSender(e) {
											"boolean" == typeof e && (this._useMemberAsMessageSender = e)
										},
										get useMemberAsMessageSender() {
											return this._useMemberAsMessageSender
										},
										set useMemberAsMessageSender(e) {
											"boolean" == typeof e && (this._useMemberAsMessageSender = e)
										},
										_typingIndicatorThrottle: nt,
										get typingIndicatorThrottle() {
											return this._typingIndicatorThrottle
										},
										set typingIndicatorThrottle(e) {
											"number" == typeof e && tt <= e && e <= rt && (this._typingIndicatorThrottle = e)
										},
										_websocketResponseTimeout: Xn,
										get websocketResponseTimeout() {
											return this._websocketResponseTimeout
										},
										set websocketResponseTimeout(e) {
											"number" == typeof e && $n <= e && e <= et && (this._websocketResponseTimeout = e)
										}
									}
								}
								return it
							}
							return u(e, [{
								key: "ConnectionState",
								get: function() {
									return {
										CONNECTING: "CONNECTING",
										OPEN: "OPEN",
										CLOSED: "CLOSED"
									}
								}
							}, {
								key: "MessageRequestState",
								get: function() {
									return {
										NONE: "none",
										PENDING: "pending",
										FAILED: "failed",
										SUCCEEDED: "succeeded"
									}
								}
							}, {
								key: "MessageSendingStatus",
								get: function() {
									return {
										NONE: "none",
										PENDING: "pending",
										FAILED: "failed",
										CANCELED: "canceled",
										SUCCEEDED: "succeeded"
									}
								}
							}, {
								key: "pushTokenRegistrationState",
								get: function() {
									return {
										SUCCESS: "success",
										PENDING: "pending",
										ERROR: "error"
									}
								}
							}, {
								key: "PushTriggerOption",
								get: function() {
									return {
										ALL: "all",
										MENTION_ONLY: "mention_only",
										OFF: "off"
									}
								}
							}, {
								key: "appInfo",
								get: function() {
									return O.get(this._iid).container.appInfo
								}
							}, {
								key: "ekey",
								get: function() {
									var e = O.get(this._iid).container.auth;
									return e ? e.eKey : ""
								}
							}, {
								key: "getApplicationId",
								value: function() {
									return O.get(this._iid).get("appId")
								}
							}, {
								key: "getCurrentUserId",
								value: function() {
									return this.currentUser ? this.currentUser.userId : null
								}
							}, {
								key: "getDebugMode",
								value: function() {
									return at
								}
							}, {
								key: "setDebugMode",
								value: function(e) {
									at = e, q.mode = e ? q.Mode.DEBUG : q.Mode.PRODUCTION
								}
							}, {
								key: "getErrorFirstCallback",
								value: function() {
									return O.get(this._iid).container.isErrorFirstInCallback
								}
							}, {
								key: "setErrorFirstCallback",
								value: function(e) {
									"boolean" == typeof e && O.get(this._iid).set("isErrorFirstInCallback", e)
								}
							}, {
								key: "getCurrentApiHost",
								value: function() {
									return this.customApiHost || "https://api.sendbird.com"
								}
							}, {
								key: "clearCurrentApiHost",
								value: function() {
									this.customApiHost = null
								}
							}, {
								key: "getCurrentWsHost",
								value: function() {
									return this.customWsHost || "wss://ws.sendbird.com"
								}
							}, {
								key: "clearCurrentWsHost",
								value: function() {
									this.customWsHost = null
								}
							}, {
								key: "getConnectionState",
								value: function() {
									try {
										var e = O.get(this._iid).container.wsAdapter;
										return this.connecting || this.reconnecting ? this.ConnectionState.CONNECTING : e.client ? this.connecting || this.reconnecting ? this.ConnectionState.CONNECTING : this.isSessionOpened ? e.client.getConnectionState() : this.ConnectionState.CLOSED : this.ConnectionState.CLOSED
									} catch (e) {
										return this.ConnectionState.CLOSED
									}
								}
							}, {
								key: "getPendingGCMToken",
								value: function() {
									return this.GCMPushToken
								}
							}, {
								key: "getPendingAPNSToken",
								value: function() {
									return this.APNSPushToken
								}
							}, {
								key: "hasLoggedIn",
								value: function() {
									var e = O.get(this._iid);
									return this.currentUser && e.get("auth").hasSession()
								}
							}, {
								key: "getLastConnectedAt",
								value: function() {
									var e = O.get(this._iid);
									return this.getConnectionState() === this.ConnectionState.OPEN && this.currentUser ? e.get("connectedAt") : 0
								}
							}, {
								key: "connect",
								value: function(e, n, t, r, i) {
									var s = this,
										a = (o = O.get(this._iid).container).wsAdapter;
									(o = o.onlineDetector) && o.start();
									var o, l = (o = C(ie.parse(arguments, [new ie({
										type: "string",
										constraint: function(e) {
											return 0 < e.length
										}
									}), new ie({
										type: "string",
										nullable: !0,
										ignoreIf: function(e) {
											return 1 === e.length || 3 === e.length
										}
									}), new ie({
										type: "string",
										nullable: !0,
										ignoreIf: function(e) {
											return 1 === e.length || 2 === e.length
										}
									}), new ie({
										type: "string",
										nullable: !0,
										ignoreIf: function(e) {
											return 1 === e.length || 2 === e.length
										}
									}), new ie({
										type: "callback"
									})]), 6))[0];
									return e = o[1], n = o[2], t = o[3], r = o[4], i = o[5], ge(this._iid, (function(i) {
										l ? i(l, null) : (s.customApiHost = t, s.customWsHost = r, s.connecting = !0, s.reconnecting = !1, s.isReconnectingOnError = !1, s.reconnectTimer && (clearTimeout(s.reconnectTimer), s.reconnectTimer = null, s.onReconnectTimerCancel = null), s.getConnectionState() === s.ConnectionState.OPEN && s.currentUser && s.currentUser.userId === e ? (s.connecting = !1, i(null, s.currentUser)) : (s.connectionCallbacks.push(i), 1 === s.connectionCallbacks.length && (a.disconnect({
											clearSession: !0,
											err: null
										}, null), a.connect(e, n))))
									}), i)
								}
							}, {
								key: "reconnect",
								value: function() {
									var e = O.get(this._iid).container,
										n = e.wsAdapter;
									return !(!e.auth.sessionKey || !this.currentUser || (e = !0, 0 < n.reconnectCount && (e = !1), n.disconnect({
										clearSession: !1,
										err: new R("Connection has been canceled.", R.CONNECTION_CANCELED)
									}, null), n.reconnectCount = 0, n.reconnect(this.currentUser.userId, e), 0))
								}
							}, {
								key: "disconnect",
								value: function(e) {
									var n = this;
									return ge(this._iid, (function(e) {
										var t, r = (t = O.get(n._iid).container).wsAdapter;
										(t = t.onlineDetector) && t.stop(), r.disconnect({
											clearSession: !0,
											err: new R("Connection has been canceled.", R.CONNECTION_CANCELED)
										}, e)
									}), e)
								}
							}, {
								key: "setBackgroundState",
								value: function() {
									var e = O.get(this._iid),
										n = e.container,
										t = n.wsAdapter,
										r = n.stateChangeEnabled;
									!n.isInBackground && r && (e.set("isInBackground", !0), this.getConnectionState() !== this.ConnectionState.CLOSED ? (e.set("closedByGoingBackground", !0), t.disconnect({
										clearSession: !1,
										err: new R("Websocket connection failed.", R.WEBSOCKET_CONNECTION_FAILED)
									}, null)) : e.set("closedByGoingBackground", !1))
								}
							}, {
								key: "setForegroundState",
								value: function() {
									var e = O.get(this._iid),
										n = (i = e.container).wsAdapter,
										t = i.stateChangeEnabled,
										r = i.isInBackground,
										i = i.closedByGoingBackground;
									r && t && (e.set("isInBackground", !1), i && this.currentUser && n.reconnect(this.currentUser.userId, !0))
								}
							}, {
								key: "enableStateChange",
								value: function() {
									O.get(this._iid).set("enableStateChange", !0)
								}
							}, {
								key: "disableStateChange",
								value: function() {
									O.get(this._iid).set("enableStateChange", !1)
								}
							}, {
								key: "addExtension",
								value: function(e, n) {
									var t = O.get(this._iid).container,
										r = t.extensions; - 1 < t.supportedExtensionKeys.indexOf(e) && (r[e] = n)
								}
							}, {
								key: "createUserListQuery",
								value: function(e) {
									return new(M.get(this._iid).UserListQuery)(e)
								}
							}, {
								key: "createApplicationUserListQuery",
								value: function() {
									return new(M.get(this._iid).ApplicationUserListQuery)
								}
							}, {
								key: "createBlockedUserListQuery",
								value: function() {
									return new(M.get(this._iid).BlockedUserListQuery)
								}
							}, {
								key: "createFriendListQuery",
								value: function() {
									return new(M.get(this._iid).FriendListQuery)
								}
							}, {
								key: "createMessageSearchQuery",
								value: function(e, n) {
									return new(M.get(this._iid).MessageSearchQuery)(e, n)
								}
							}, {
								key: "sendCommand",
								value: function(e, n) {
									var t = this;
									return ge(this._iid, (function(n) {
										t.ConnectionManager.ready((function(r, i) {
											var s, a, o, l;
											r ? n(r, null) : (r = (s = O.get(t._iid).container).wsAdapter, a = s.ackStateMap, null != r && null != r.client && r.client.getConnectionState() === t.ConnectionState.OPEN && t.getConnectionState() === t.ConnectionState.OPEN ? e.isAckRequired ? (o = e.requestId, l = {
												handler: n,
												timer: setTimeout((function() {
													n(new R("Command received no ack.", R.ACK_TIMEOUT), null), delete a[o]
												}), t.Options.websocketResponseTimeout)
											}, a[o] = l, r.client.send(e, (function(e) {
												e && (clearTimeout(l.timer), n(e, null))
											}))) : r.client.send(e, n) : n(new R("Connection is not valid. Please reconnect.", R.WEBSOCKET_CONNECTION_CLOSED), null))
										}), !1)
									}), n)
								}
							}, {
								key: "setSessionHandler",
								value: function(e) {
									O.get(this._iid).container.sessionManager.handler = e
								}
							}, {
								key: "addUserEventHandler",
								value: function(e, n) {
									n instanceof M.get(this._iid).UserEventHandler && (this.userEventHandlers[e] = n)
								}
							}, {
								key: "removeUserEventHandler",
								value: function(e) {
									delete this.userEventHandlers[e]
								}
							}, {
								key: "removeAllUserEventHandler",
								value: function() {
									this.userEventHandlers = {}
								}
							}, {
								key: "addChannelHandler",
								value: function(e, n) {
									n instanceof M.get(this._iid).ChannelHandler && (this.channelHandlers[e] = n)
								}
							}, {
								key: "removeChannelHandler",
								value: function(e) {
									delete this.channelHandlers[e]
								}
							}, {
								key: "removeAllChannelHandlers",
								value: function() {
									this.channelHandlers = {}
								}
							}, {
								key: "addConnectionHandler",
								value: function(e, n) {
									n instanceof M.get(this._iid).ConnectionHandler && (this.connectionHandlers[e] = n)
								}
							}, {
								key: "removeConnectionHandler",
								value: function(e) {
									delete this.connectionHandlers[e]
								}
							}, {
								key: "removeAllConnectionHandlers",
								value: function() {
									this.connectionHandlers = {}
								}
							}, {
								key: "updateCurrentUserInfo",
								value: function(e, n, t) {
									var r = this,
										i = C(ie.parse(arguments, [new ie({
											type: "string",
											nullable: !0
										}), new ie({
											type: "string",
											nullable: !0
										}), new ie({
											type: "callback"
										})]), 4),
										s = i[0];
									return e = i[1], n = i[2], t = i[3], ge(this._iid, (function(t) {
										s ? t(s, null) : O.get(r._iid).container.apiClient.updateCurrentUserInfo({
											nickname: e,
											profileUrl: n
										}, (function(i, s) {
											var a = null;
											i || (r.currentUser && (e && (r.currentUser.nickname = e), n && (r.currentUser.plainProfileUrl = n)), a = r.currentUser), t(i, a)
										}))
									}), t)
								}
							}, {
								key: "updateCurrentUserInfoWithProfileImage",
								value: function(e, n, t) {
									var r = this,
										i = C(ie.parse(arguments, [new ie({
											type: "string",
											nullable: !0
										}), new ie({
											type: "file",
											nullable: !0
										}), new ie({
											type: "callback"
										})]), 4),
										s = i[0];
									return e = i[1], n = i[2], t = i[3], ge(this._iid, (function(t) {
										s ? t(s, null) : O.get(r._iid).container.apiClient.updateCurrentUserInfo({
											nickname: e,
											profileImage: n
										}, (function(n, i) {
											var s = null;
											n || (r.currentUser && (e && (r.currentUser.nickname = e), i.profile_url && (r.currentUser.plainProfileUrl = i.profile_url)), s = r.currentUser), t(n, s)
										}))
									}), t)
								}
							}, {
								key: "updateCurrentUserInfoWithPreferredLanguages",
								value: function(e, n) {
									var t = this,
										r = C(ie.parse(arguments, [new ie({
											type: "array",
											constraint: function(e) {
												return e.every((function(e) {
													return "string" == typeof e
												}))
											}
										}), new ie({
											type: "callback"
										})]), 3),
										i = r[0];
									return e = r[1], n = r[2], ge(this._iid, (function(n) {
										i ? n(i, null) : O.get(t._iid).container.apiClient.updateCurrentUserInfo({
											preferredLanguages: e
										}, (function(r, i) {
											var s = null;
											r || (t.currentUser && e && (t.currentUser._preferredLanguages = e), s = t.currentUser), n(r, s)
										}))
									}), n)
								}
							}, {
								key: "registerGCMPushTokenForCurrentUser",
								value: function(e, n) {
									var t = this,
										r = C(ie.parse(arguments, [new ie({
											type: "string",
											constraint: function(e) {
												return 0 < e.length
											}
										}), new ie({
											type: "callback"
										})]), 3),
										i = r[0];
									return e = r[1], n = r[2], ge(this._iid, (function(n) {
										i ? n(i, t.pushTokenRegistrationState.ERROR) : t.currentUser ? O.get(t._iid).container.apiClient.registerGCMPushToken({
											token: e
										}, (function(e, r) {
											var i = t.pushTokenRegistrationState.ERROR;
											e || (t.GCMPushToken = "", i = t.pushTokenRegistrationState.SUCCESS), n(e, i)
										})) : (t.GCMPushToken = e, n(null, t.pushTokenRegistrationState.PENDING))
									}), n)
								}
							}, {
								key: "unregisterGCMPushTokenForCurrentUser",
								value: function(e, n) {
									var t = this,
										r = C(ie.parse(arguments, [new ie({
											type: "string",
											constraint: function(e) {
												return 0 < e.length
											}
										}), new ie({
											type: "callback"
										})]), 3),
										i = r[0];
									return e = r[1], n = r[2], ge(this._iid, (function(n) {
										i ? n(i, null) : t.currentUser ? O.get(t._iid).container.apiClient.unregisterGCMPushToken({
											token: e
										}, (function(e, t) {
											n(e, null)
										})) : (t.GCMPushToken = e, n(null, t.pushTokenRegistrationState.PENDING))
									}), n)
								}
							}, {
								key: "unregisterGCMPushTokenAllForCurrentUser",
								value: function(e) {
									var n = this;
									return ge(this._iid, (function(e) {
										O.get(n._iid).container.apiClient.unregisterAllGCMPushTokens({}, (function(n, t) {
											e(n, null)
										}))
									}), e)
								}
							}, {
								key: "registerAPNSPushTokenForCurrentUser",
								value: function(e, n) {
									var t = this,
										r = C(ie.parse(arguments, [new ie({
											type: "string",
											constraint: function(e) {
												return 0 < e.length
											}
										}), new ie({
											type: "callback"
										})]), 3),
										i = r[0];
									return e = r[1], n = r[2], ge(this._iid, (function(n) {
										i ? n(i, t.pushTokenRegistrationState.ERROR) : t.currentUser ? O.get(t._iid).container.apiClient.registerAPNSPushToken({
											token: e
										}, (function(e, r) {
											var i = t.pushTokenRegistrationState.ERROR;
											e || (t.APNSPushToken = "", i = t.pushTokenRegistrationState.SUCCESS), n(e, i)
										})) : (t.APNSPushToken = e, n(null, t.pushTokenRegistrationState.PENDING))
									}), n)
								}
							}, {
								key: "unregisterAPNSPushTokenForCurrentUser",
								value: function(e, n) {
									var t = this,
										r = C(ie.parse(arguments, [new ie({
											type: "string",
											constraint: function(e) {
												return 0 < e.length
											}
										}), new ie({
											type: "callback"
										})]), 3),
										i = r[0];
									return e = r[1], n = r[2], ge(this._iid, (function(n) {
										i ? n(i, null) : t.currentUser ? O.get(t._iid).container.apiClient.unregisterAPNSPushToken({
											token: e
										}, (function(e, t) {
											n(e, null)
										})) : (t.APNSPushToken = e, n(null, t.pushTokenRegistrationState.PENDING))
									}), n)
								}
							}, {
								key: "unregisterAPNSPushTokenAllForCurrentUser",
								value: function(e) {
									var n = this;
									return ge(this._iid, (function(e) {
										O.get(n._iid).container.apiClient.unregisterAllAPNSPushTokens({}, (function(n, t) {
											e(n, null)
										}))
									}), e)
								}
							}, {
								key: "unregisterPushTokenAllForCurrentUser",
								value: function(e) {
									var n = this;
									return ge(this._iid, (function(e) {
										O.get(n._iid).container.apiClient.unregisterAllPushTokens({}, (function(n, t) {
											e(n, null)
										}))
									}), e)
								}
							}, {
								key: "getMyGroupChannelChangeLogsByToken",
								value: function(e, n, t, r) {
									var i = this,
										s = null,
										a = C(ie.parse(arguments, [new ie({
											type: "string",
											nullable: !0
										}), new ie({
											type: "array",
											optional: !0,
											nullable: !0,
											defaultValue: null
										}), new ie({
											type: "boolean",
											nullable: !0,
											optional: !0,
											defaultValue: null
										}), new ie({
											type: "callback"
										})]), 5);
									s = a[0], e = a[1], n = a[2], t = a[3], r = a[4];
									var o = M.get(this._iid).GroupChannelChangeLogsParams,
										l = null;
									return s ? (a = C(ie.parse(arguments, [new ie({
										type: "string",
										nullable: !0
									}), new ie({
										type: o,
										constraint: function(e) {
											return e._validate()
										}
									}), new ie({
										type: "callback"
									})]), 4), s = a[0], e = a[1], l = a[2], r = a[3]) : ((l = new o).customTypes = n, l.includeEmpty = t, l.includeFrozen = !0), ge(this._iid, (function(n) {
										s ? n(s, null) : O.get(i._iid).container.apiClient.getMyGroupChannelChangeLogs(d({
											ts: null,
											token: e
										}, l), (function(e, t) {
											var r, s, a;
											e ? n(e, null) : (r = M.get(i._iid).GroupChannel, s = t.updated.map((function(e) {
												return new r(e)
											})), a = t.deleted, e = t.has_more, t = t.next, n(null, {
												updatedChannels: s,
												deletedChannelUrls: a,
												hasMore: e,
												token: t
											}))
										}))
									}), r)
								}
							}, {
								key: "getMyGroupChannelChangeLogsByTimestamp",
								value: function(e, n, t, r) {
									var i = this,
										s = null,
										a = C(ie.parse(arguments, [new ie({
											type: "number",
											constraint: function(e) {
												return 0 <= e
											}
										}), new ie({
											type: "array",
											optional: !0,
											nullable: !0,
											defaultValue: null
										}), new ie({
											type: "boolean",
											nullable: !0,
											optional: !0,
											defaultValue: null
										}), new ie({
											type: "callback"
										})]), 5);
									s = a[0], e = a[1], n = a[2], t = a[3], r = a[4];
									var o = M.get(this._iid).GroupChannelChangeLogsParams,
										l = null;
									return s ? (a = C(ie.parse(arguments, [new ie({
										type: "number",
										constraint: function(e) {
											return 0 <= e
										}
									}), new ie({
										type: o,
										constraint: function(e) {
											return e._validate()
										}
									}), new ie({
										type: "callback"
									})]), 4), s = a[0], e = a[1], l = a[2], r = a[3]) : ((l = new o).customTypes = n, l.includeEmpty = t, l.includeFrozen = !0), ge(this._iid, (function(n) {
										s ? n(s, null) : O.get(i._iid).container.apiClient.getMyGroupChannelChangeLogs(d({
											ts: e,
											token: null
										}, l), (function(e, t) {
											var r, s, a;
											e ? n(e, null) : (r = M.get(i._iid).GroupChannel, s = t.updated.map((function(e) {
												return new r(e)
											})), a = t.deleted, e = t.has_more, t = t.next, n(null, {
												updatedChannels: s,
												deletedChannelUrls: a,
												hasMore: e,
												token: t
											}))
										}))
									}), r)
								}
							}, {
								key: "getChannelInvitationPreference",
								value: function(e) {
									var n = this;
									return ge(this._iid, (function(e) {
										O.get(n._iid).container.apiClient.getChannelInvitationPreference({}, (function(n, t) {
											var r = null;
											n || (r = {
												autoAccept: t.auto_accept
											}), e(n, r)
										}))
									}), e)
								}
							}, {
								key: "setChannelInvitationPreference",
								value: function(e, n) {
									var t = this,
										r = C(ie.parse(arguments, [new ie({
											type: "boolean"
										}), new ie({
											type: "callback"
										})]), 3),
										i = r[0];
									return e = r[1], n = r[2], ge(this._iid, (function(n) {
										i ? n(i, null) : O.get(t._iid).container.apiClient.setChannelInvitationPreference({
											isAutoAccept: e
										}, (function(e, t) {
											var r = null;
											e || (r = {
												autoAccept: t.auto_accept
											}), n(e, r)
										}))
									}), n)
								}
							}, {
								key: "getDoNotDisturb",
								value: function(e) {
									var n = this;
									return ge(this._iid, (function(e) {
										O.get(n._iid).container.apiClient.getDoNotDisturb({}, (function(n, t) {
											var r = null;
											n || (r = {
												doNotDisturbOn: t.do_not_disturb,
												startHour: t.start_hour,
												startMin: t.start_min,
												endHour: t.end_hour,
												endMin: t.end_min,
												timezone: t.timezone
											}), e(n, r)
										}))
									}), e)
								}
							}, {
								key: "setDoNotDisturb",
								value: function(e, n, t, r, i, s, a) {
									var o = this,
										l = C(ie.parse(arguments, [new ie({
											type: "boolean"
										}), new ie({
											type: "number",
											constraint: function(e) {
												return 0 <= e && e <= 23
											}
										}), new ie({
											type: "number",
											constraint: function(e) {
												return 0 <= e && e <= 59
											}
										}), new ie({
											type: "number",
											constraint: function(e) {
												return 0 <= e && e <= 23
											}
										}), new ie({
											type: "number",
											constraint: function(e) {
												return 0 <= e && e <= 59
											}
										}), new ie({
											type: "string"
										}), new ie({
											type: "callback"
										})]), 8),
										u = l[0];
									return e = l[1], n = l[2], t = l[3], r = l[4], i = l[5], s = l[6], a = l[7], ge(this._iid, (function(a) {
										u ? a(u, null) : O.get(o._iid).container.apiClient.setDoNotDisturb({
											doNotDisturbOn: e,
											startHour: n,
											startMin: t,
											endHour: r,
											endMin: i,
											timezone: s
										}, (function(e, n) {
											var t = null;
											e || (t = {
												doNotDisturbOn: n.do_not_disturb,
												startHour: n.start_hour,
												startMin: n.start_min,
												endHour: n.end_hour,
												endMin: n.end_min,
												timezone: n.timezone
											}), a(e, t)
										}))
									}), a)
								}
							}, {
								key: "getSnoozePeriod",
								value: function(e) {
									var n = this;
									return ge(this._iid, (function(e) {
										O.get(n._iid).container.apiClient.getSnoozePeriod({}, (function(n, t) {
											var r = null;
											n || (r = {
												isSnoozeOn: t.snooze_enabled,
												startTs: t.snooze_start_ts,
												endTs: t.snooze_end_ts
											}), e(n, r)
										}))
									}), e)
								}
							}, {
								key: "setSnoozePeriod",
								value: function(e, n, t, r) {
									var i = this,
										s = C(ie.parse(arguments, [new ie({
											type: "boolean"
										}), new ie({
											type: "number",
											constraint: function(e) {
												return 0 < e
											}
										}), new ie({
											type: "number",
											constraint: function(e) {
												return 0 < e
											}
										}), new ie({
											type: "callback"
										})]), 5),
										a = s[0];
									return e = s[1], n = s[2], t = s[3], r = s[4], ge(this._iid, (function(r) {
										a ? r(a, null) : O.get(i._iid).container.apiClient.setSnoozePeriod({
											snoozeOn: e,
											startTs: n,
											endTs: t
										}, (function(e, n) {
											var t = null;
											e || (t = {
												isSnoozeOn: n.snooze_enabled,
												startTs: n.snooze_start_ts,
												endTs: n.snooze_end_ts
											}), r(e, t)
										}))
									}), r)
								}
							}, {
								key: "blockUser",
								value: function(e, n) {
									var t = C(ie.parse(arguments, [new ie({
											type: "object",
											constraint: function(e) {
												return e && e.hasOwnProperty("userId")
											}
										}), new ie({
											type: "callback"
										})]), 3),
										r = t[0];
									return e = t[1], n = t[2], r ? ge(this._iid, (function(e) {
										e(r, null)
									}), n) : this.blockUserWithUserId(e.userId, n)
								}
							}, {
								key: "blockUserWithUserId",
								value: function(e, n) {
									var t = this,
										r = C(ie.parse(arguments, [new ie({
											type: "string",
											constraint: function(e) {
												return e && (!t.currentUser || e !== t.currentUser.userId)
											}
										}), new ie({
											type: "callback"
										})]), 3),
										i = r[0];
									return e = r[1], n = r[2], ge(this._iid, (function(n) {
										i ? n(i, null) : O.get(t._iid).container.apiClient.blockUser({
											blockedUserId: e
										}, (function(e, t) {
											var r = null;
											e || (r = new Ce(t)), n(e, r)
										}))
									}), n)
								}
							}, {
								key: "unblockUser",
								value: function(e, n) {
									var t = C(ie.parse(arguments, [new ie({
											type: "object",
											constraint: function(e) {
												return e && e.hasOwnProperty("userId")
											}
										}), new ie({
											type: "callback"
										})]), 3),
										r = t[0];
									return e = t[1], n = t[2], r ? ge(this._iid, (function(e) {
										e(r, null)
									}), n) : this.unblockUserWithUserId(e.userId, n)
								}
							}, {
								key: "unblockUserWithUserId",
								value: function(e, n) {
									var t = this,
										r = C(ie.parse(arguments, [new ie({
											type: "string",
											constraint: function(e) {
												return e && (!t.currentUser || e !== t.currentUser.userId)
											}
										}), new ie({
											type: "callback"
										})]), 3),
										i = r[0];
									return e = r[1], n = r[2], ge(this._iid, (function(n) {
										i ? n(i, null) : O.get(t._iid).container.apiClient.unblockUser({
											unblockedUserId: e
										}, (function(e, t) {
											n(e, null)
										}))
									}), n)
								}
							}, {
								key: "getPushTriggerOption",
								value: function(e) {
									var n = this;
									return ge(this._iid, (function(e) {
										O.get(n._iid).container.apiClient.getPushTriggerOption({}, (function(n, t) {
											e(n, t ? t.push_trigger_option : null)
										}))
									}), e)
								}
							}, {
								key: "setPushTriggerOption",
								value: function(e, n) {
									var t = this;
									return ge(this._iid, (function(n) {
										-1 < Object.keys(t.PushTriggerOption).map((function(e) {
											return t.PushTriggerOption[e]
										})).indexOf(e) ? O.get(t._iid).container.apiClient.setPushTriggerOption({
											pushTriggerOption: e
										}, (function(e, t) {
											n(e, t ? t.push_trigger_option : null)
										})) : n(ie.error, null)
									}), n)
								}
							}, {
								key: "getGroupChannelCount",
								value: function(e, n) {
									var t = this,
										r = M.get(this._iid).GroupChannel,
										i = (r = C(ie.parse(arguments, [new ie({
											type: r.MemberStateFilter,
											optional: !0,
											defaultValue: r.MemberStateFilter.ALL
										}), new ie({
											type: "callback"
										})]), 3))[0];
									return e = r[1], n = r[2], ge(this._iid, (function(n) {
										i ? n(i, null) : O.get(t._iid).container.apiClient.getGroupChannelCount({
											memberStateFilter: e
										}, (function(e, t) {
											var r = null;
											e || (r = parseInt(t.group_channel_count)), n(e, r)
										}))
									}), n)
								}
							}, {
								key: "getTotalUnreadChannelCount",
								value: function(e) {
									var n = this;
									return ge(this._iid, (function(e) {
										O.get(n._iid).container.apiClient.getTotalUnreadChannelCount({}, (function(n, t) {
											var r = null;
											n || (r = parseInt(t.unread_count)), e(n, r)
										}))
									}), e)
								}
							}, {
								key: "getTotalUnreadMessageCount",
								value: function(e, n) {
									var t, r = this,
										i = (t = M.get(this._iid)).GroupChannel,
										s = t.GroupChannelTotalUnreadMessageCountParams,
										a = (t = C(ie.parse(arguments, [new ie({
											type: "object",
											optional: !0,
											defaultValue: null,
											constraint: function(e) {
												return Array.isArray(e) && e.every((function(e) {
													return "string" == typeof e
												})) || e instanceof s
											}
										}), new ie({
											type: "callback"
										})]), 3))[0];
									return e = t[1], n = t[2], ge(this._iid, (function(n) {
										var t, o;
										a ? n(a, null) : (t = i.SuperChannelFilter.ALL, e instanceof s && (e = (o = e).channelCustomTypesFilter, t = o.superChannelFilter), O.get(r._iid).container.apiClient.getTotalUnreadMessageCount({
											customTypesFilter: e,
											superChannelFilter: t
										}, (function(e, t) {
											var r = null;
											e || (r = parseInt(t.unread_count)), n(e, r)
										})))
									}), n)
								}
							}, {
								key: "getUnreadItemCount",
								value: function(e, n) {
									var t = this,
										r = C(ie.parse(arguments, [new ie({
											type: "array",
											constraint: function(e) {
												return 0 < e.length && e.every((function(e) {
													return -1 < Object.keys(Fe.UnreadItemKey).map((function(e) {
														return Fe.UnreadItemKey[e]
													})).indexOf(e)
												}))
											}
										}), new ie({
											type: "callback"
										})]), 3),
										i = r[0];
									return e = r[1], n = r[2], ge(this._iid, (function(n) {
										var r;
										i ? n(i, null) : (r = e.filter((function(n, t) {
											return e.indexOf(n) === t
										})), O.get(t._iid).container.apiClient.getUnreadItemCount({
											keys: r
										}, (function(e, t) {
											n(e, t)
										})))
									}), n)
								}
							}, {
								key: "getSubscribedTotalUnreadMessageCount",
								value: function() {
									var e = O.get(this._iid).container.subscribedUnreadMessageCount;
									return 0 <= e.all ? e.all : 0
								}
							}, {
								key: "getSubscribedCustomTypeTotalUnreadMessageCount",
								value: function() {
									var e = O.get(this._iid).container.subscribedUnreadMessageCount;
									if (0 < Object.keys(e.custom_types).length) {
										var n, t = 0;
										for (n in e.custom_types) t += e.custom_types[n];
										return t
									}
									return 0
								}
							}, {
								key: "getSubscribedCustomTypeUnreadMessageCount",
								value: function(e) {
									if (e && "string" == typeof e) {
										var n = O.get(this._iid).container.subscribedUnreadMessageCount;
										return n.custom_types.hasOwnProperty(e) ? n.custom_types[e] : 0
									}
									return 0
								}
							}, {
								key: "getMyPushTokensByToken",
								value: function(e, n, t) {
									var r = this,
										i = C(ie.parse(arguments, [new ie({
											type: "string"
										}), new ie({
											type: "string",
											constraint: function(e) {
												return -1 < ["gcm", "apns", "apns_voip"].indexOf(e)
											}
										}), new ie({
											type: "callback"
										})]), 4),
										s = i[0];
									return e = i[1], n = i[2], t = i[3], ge(this._iid, (function(t) {
										s ? t(s, null) : O.get(r._iid).container.apiClient.getPushTokens({
											ts: null,
											token: e,
											type: n
										}, (function(e, n) {
											e ? t(e, null) : (e = n.type, t(null, {
												deviceTokens: n.device_tokens,
												type: e ? e.toLowerCase() : "unknown",
												hasMore: n.has_more,
												token: n.token
											}))
										}))
									}), t)
								}
							}, {
								key: "getPushTemplate",
								value: function(e) {
									var n = this;
									return ge(this._iid, (function(e) {
										O.get(n._iid).container.apiClient.getPushTemplate({}, (function(n, t) {
											var r = null;
											n || (r = t.name.toString()), e(n, r)
										}))
									}), e)
								}
							}, {
								key: "setPushTemplate",
								value: function(e, n) {
									var t = this;
									return ge(this._iid, (function(n) {
										-1 < [t.PUSH_TEMPLATE_DEFAULT, t.PUSH_TEMPLATE_ALTERNATIVE].indexOf(e) ? O.get(t._iid).container.apiClient.setPushTemplate({
											templateName: e
										}, (function(e, t) {
											var r = null;
											e || (r = t.name.toString()), n(e, r)
										})) : n(ie.error, null)
									}), n)
								}
							}, {
								key: "markAsReadAll",
								value: function(e) {
									var n = this;
									return ge(this._iid, (function(e) {
										var t = M.get(n._iid).GroupChannel,
											r = (new Date).getTime();
										r - t.markAsReadAllLastSentAt < 1e3 ? e(new R("MarkAsRead rate limit exceeded.", R.MARK_AS_READ_RATE_LIMIT_EXCEEDED), null) : (t.markAsReadAllLastSentAt = r, O.get(n._iid).container.apiClient.markAsReadAll({
											channelUrls: null
										}, (function(i, s) {
											if (!i)
												for (var a in t.cachedChannels) n.currentUser && t.cachedChannels[a].updateReadReceipt(n.currentUser.userId, r), t.cachedChannels[a]._setGroupChannelUnreadCount(0, 0);
											e(i, null)
										})))
									}), e)
								}
							}, {
								key: "markAsReadWithChannelUrls",
								value: function(e, n) {
									var t = this,
										r = C(ie.parse(arguments, [new ie({
											type: "array",
											constraint: function(e) {
												return e.every((function(e) {
													return "string" == typeof e
												}))
											}
										}), new ie({
											type: "callback"
										})]), 3),
										i = r[0];
									return e = r[1], n = r[2], ge(this._iid, (function(n) {
										var r;
										i ? n(i, null) : (r = (new Date).getTime(), O.get(t._iid).container.apiClient.markAsReadAll({
											channelUrls: e
										}, (function(i, s) {
											if (!i)
												for (var a in e) a = e[a], Fe.cachedChannels[a] && (t.currentUser && Fe.cachedChannels[a].updateReadReceipt(t.currentUser.userId, r), Fe.cachedChannels[a]._setGroupChannelUnreadCount(0, 0));
											n(i, null)
										})))
									}), n)
								}
							}, {
								key: "markAsDelivered",
								value: function(e) {
									"string" == typeof e && M.get(this._iid).GroupChannel.getChannel(e, S.INTERNAL_CALL, (function(e, n) {
										e || n.markAsDelivered()
									}))
								}
							}, {
								key: "getFriendChangeLogsByToken",
								value: function(e, n) {
									var t = this,
										r = C(ie.parse(arguments, [new ie({
											type: "string",
											optional: !0,
											defaultValue: null
										}), new ie({
											type: "callback"
										})]), 3),
										i = r[0];
									return e = r[1], n = r[2], ge(this._iid, (function(n) {
										i ? n(i, null) : O.get(t._iid).container.apiClient.getFriendChangeLogsByToken({
											token: e
										}, (function(e, r) {
											var i, s = null;
											e || (i = M.get(t._iid).User, s = {
												updatedUsers: r.updated.map((function(e) {
													return new i(e)
												})),
												deletedUserIds: r.deleted,
												hasMore: r.has_more,
												token: r.next
											}), n(e, s)
										}))
									}), n)
								}
							}, {
								key: "uploadFriendDiscoveries",
								value: function(e, n) {
									var t = this,
										r = C(ie.parse(arguments, [new ie({
											type: "array",
											constraint: function(e) {
												return e.every((function(e) {
													return e.hasOwnProperty("friendDiscoveryKey")
												}))
											}
										}), new ie({
											type: "callback"
										})]), 3),
										i = r[0];
									return e = r[1], n = r[2], ge(this._iid, (function(n) {
										i ? n(i, null) : O.get(t._iid).container.apiClient.uploadFriendDiscoveries({
											discoveries: e
										}, (function(e, t) {
											n(e, t)
										}))
									}), n)
								}
							}, {
								key: "deleteFriendDiscovery",
								value: function(e, n) {
									var t = C(ie.parse(arguments, [new ie({
											type: "string"
										}), new ie({
											type: "callback"
										})]), 3),
										r = t[0];
									return e = t[1], n = t[2], r ? ge(this._iid, (function(e) {
										e(r, null)
									}), n) : this.deleteFriendDiscoveries([e], n)
								}
							}, {
								key: "deleteFriendDiscoveries",
								value: function(e, n) {
									var t = this,
										r = C(ie.parse(arguments, [new ie({
											type: "array",
											constraint: function(e) {
												return e.every((function(e) {
													return "string" == typeof e
												}))
											}
										}), new ie({
											type: "callback"
										})]), 3),
										i = r[0];
									return e = r[1], n = r[2], ge(this._iid, (function(n) {
										i ? n(i, null) : O.get(t._iid).container.apiClient.deleteFriendDiscoveries({
											discoveryKeys: e
										}, (function(e, t) {
											n(e, t)
										}))
									}), n)
								}
							}, {
								key: "addFriends",
								value: function(e, n) {
									var t = this,
										r = C(ie.parse(arguments, [new ie({
											type: "array",
											constraint: function(e) {
												return e.every((function(e) {
													return "string" == typeof e
												}))
											}
										}), new ie({
											type: "callback"
										})]), 3),
										i = r[0];
									return e = r[1], n = r[2], ge(this._iid, (function(n) {
										i ? n(i, null) : O.get(t._iid).container.apiClient.addFriends({
											userIds: e
										}, (function(e, r) {
											var i, s = null;
											e || (i = M.get(t._iid).User, s = r.users.map((function(e) {
												return new i(e)
											}))), n(e, s)
										}))
									}), n)
								}
							}, {
								key: "deleteFriend",
								value: function(e, n) {
									var t = C(ie.parse(arguments, [new ie({
											type: "string"
										}), new ie({
											type: "callback"
										})]), 3),
										r = t[0];
									return e = t[1], n = t[2], r ? ge(this._iid, (function(e) {
										e(r, null)
									}), n) : this.deleteFriends([e], n)
								}
							}, {
								key: "deleteFriends",
								value: function(e, n) {
									var t = this,
										r = C(ie.parse(arguments, [new ie({
											type: "array",
											constraint: function(e) {
												return e.every((function(e) {
													return "string" == typeof e
												}))
											}
										}), new ie({
											type: "callback"
										})]), 3),
										i = r[0];
									return e = r[1], n = r[2], ge(this._iid, (function(n) {
										i ? n(i, null) : O.get(t._iid).container.apiClient.deleteFriends({
											userIds: e
										}, (function(e, t) {
											n(e, t)
										}))
									}), n)
								}
							}, {
								key: "getAllEmoji",
								value: function(e) {
									var n = this,
										t = C(ie.parse(arguments, [new ie({
											type: "callback"
										})]), 2),
										r = t[0];
									return e = t[1], ge(this._iid, (function(e) {
										r ? e(r, null) : O.get(n._iid).container.apiClient.getAllEmoji((function(t, r) {
											t ? e(t, null) : (r = new(M.get(n._iid).EmojiContainer)(r), e(null, r))
										}))
									}), e)
								}
							}, {
								key: "getEmojiCategory",
								value: function(e, n) {
									var t = this,
										r = C(ie.parse(arguments, [new ie({
											type: "number",
											constraint: function(e) {
												return 0 <= e
											}
										}), new ie({
											type: "callback"
										})]), 3),
										i = r[0];
									return e = r[1], n = r[2], ge(this._iid, (function(n) {
										i ? n(i, null) : O.get(t._iid).container.apiClient.getEmojiCategory({
											categoryId: e
										}, (function(e, r) {
											e ? n(e, null) : (r = new(M.get(t._iid).EmojiCategory)(r), n(null, r))
										}))
									}), n)
								}
							}, {
								key: "getEmoji",
								value: function(e, n) {
									var t = this,
										r = C(ie.parse(arguments, [new ie({
											type: "string"
										}), new ie({
											type: "callback"
										})]), 3),
										i = r[0];
									return e = r[1], n = r[2], ge(this._iid, (function(n) {
										i ? n(i, null) : O.get(t._iid).container.apiClient.getEmoji({
											emojiKey: e
										}, (function(e, r) {
											e ? n(e, null) : (r = new(M.get(t._iid).Emoji)(r), n(null, r))
										}))
									}), n)
								}
							}, {
								key: "getAllowFriendDiscovery",
								value: function(e) {
									var n = this,
										t = C(ie.parse(arguments, [new ie({
											type: "callback"
										})]), 2),
										r = t[0];
									return e = t[1], ge(this._iid, (function(e) {
										r ? e(r, null) : O.get(n._iid).container.apiClient.getAllowFriendDiscovery((function(n, t) {
											t = t.allow_friend_discovery, n || e(null, t)
										}))
									}), e)
								}
							}, {
								key: "setAllowFriendDiscovery",
								value: function(e, n) {
									var t = this,
										r = C(ie.parse(arguments, [new ie({
											type: "boolean"
										}), new ie({
											type: "callback"
										})]), 3),
										i = r[0];
									return e = r[1], n = r[2], ge(this._iid, (function(n) {
										i ? n(i, null) : O.get(t._iid).container.apiClient.setAllowFriendDiscovery({
											allowFriendDiscovery: e
										}, (function(t, r) {
											t || n(null, e)
										}))
									}), n)
								}
							}], [{
								key: "version",
								get: function() {
									return S.SDK_VERSION
								}
							}, {
								key: "LogLevel",
								get: function() {
									return q.supportedLogLevels
								}
							}, {
								key: "getInstance",
								value: function(e) {
									return e ? st[e] : it
								}
							}, {
								key: "getLogLevel",
								value: function() {
									return q.logLevel
								}
							}, {
								key: "setLogLevel",
								value: function(e) {
									var n = Object.values(q.supportedLogLevels);
									n.includes(e) ? q.logLevel = e : (q.logLevel = q.defaultLogLevel, n = n.map((function(e) {
										return "'".concat(e, "'")
									})).join(", "), q.warn("`logLevel` parameter should be one of", "".concat(n, ","), "not `'".concat(e, "'`."), "Set to default log level", "`".concat(q.defaultLogLevel, "`.")))
								}
							}]), e
						}();
					return ot
				}(t("./node_modules/axios/index.js"), t("./node_modules/form-data/lib/browser.js"), t("./node_modules/ws/browser.js"))
			}).call(this, t("./node_modules/process/browser.js"), t("./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer, t("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/tlds/index.js": function(e, n) {
			e.exports = ["aaa", "aarp", "abarth", "abb", "abbott", "abbvie", "abc", "able", "abogado", "abudhabi", "ac", "academy", "accenture", "accountant", "accountants", "aco", "active", "actor", "ad", "adac", "ads", "adult", "ae", "aeg", "aero", "aetna", "af", "afamilycompany", "afl", "africa", "ag", "agakhan", "agency", "ai", "aig", "aigo", "airbus", "airforce", "airtel", "akdn", "al", "alfaromeo", "alibaba", "alipay", "allfinanz", "allstate", "ally", "alsace", "alstom", "am", "americanexpress", "americanfamily", "amex", "amfam", "amica", "amsterdam", "analytics", "android", "anquan", "anz", "ao", "aol", "apartments", "app", "apple", "aq", "aquarelle", "ar", "arab", "aramco", "archi", "army", "arpa", "art", "arte", "as", "asda", "asia", "associates", "at", "athleta", "attorney", "au", "auction", "audi", "audible", "audio", "auspost", "author", "auto", "autos", "avianca", "aw", "aws", "ax", "axa", "az", "azure", "ba", "baby", "baidu", "banamex", "bananarepublic", "band", "bank", "bar", "barcelona", "barclaycard", "barclays", "barefoot", "bargains", "baseball", "basketball", "bauhaus", "bayern", "bb", "bbc", "bbt", "bbva", "bcg", "bcn", "bd", "be", "beats", "beauty", "beer", "bentley", "berlin", "best", "bestbuy", "bet", "bf", "bg", "bh", "bharti", "bi", "bible", "bid", "bike", "bing", "bingo", "bio", "biz", "bj", "black", "blackfriday", "blanco", "blockbuster", "blog", "bloomberg", "blue", "bm", "bms", "bmw", "bn", "bnl", "bnpparibas", "bo", "boats", "boehringer", "bofa", "bom", "bond", "boo", "book", "booking", "boots", "bosch", "bostik", "boston", "bot", "boutique", "box", "br", "bradesco", "bridgestone", "broadway", "broker", "brother", "brussels", "bs", "bt", "budapest", "bugatti", "build", "builders", "business", "buy", "buzz", "bv", "bw", "by", "bz", "bzh", "ca", "cab", "cafe", "cal", "call", "calvinklein", "cam", "camera", "camp", "cancerresearch", "canon", "capetown", "capital", "capitalone", "car", "caravan", "cards", "care", "career", "careers", "cars", "cartier", "casa", "case", "caseih", "cash", "casino", "cat", "catering", "catholic", "cba", "cbn", "cbre", "cbs", "cc", "cd", "ceb", "center", "ceo", "cern", "cf", "cfa", "cfd", "cg", "ch", "chanel", "channel", "chase", "chat", "cheap", "chintai", "chloe", "christmas", "chrome", "chrysler", "church", "ci", "cipriani", "circle", "cisco", "citadel", "citi", "citic", "city", "cityeats", "ck", "cl", "claims", "cleaning", "click", "clinic", "clinique", "clothing", "cloud", "club", "clubmed", "cm", "cn", "co", "coach", "codes", "coffee", "college", "cologne", "com", "comcast", "commbank", "community", "company", "compare", "computer", "comsec", "condos", "construction", "consulting", "contact", "contractors", "cooking", "cookingchannel", "cool", "coop", "corsica", "country", "coupon", "coupons", "courses", "cr", "credit", "creditcard", "creditunion", "cricket", "crown", "crs", "cruise", "cruises", "csc", "cu", "cuisinella", "cv", "cw", "cx", "cy", "cymru", "cyou", "cz", "dabur", "dad", "dance", "data", "date", "dating", "datsun", "day", "dclk", "dds", "de", "deal", "dealer", "deals", "degree", "delivery", "dell", "deloitte", "delta", "democrat", "dental", "dentist", "desi", "design", "dev", "dhl", "diamonds", "diet", "digital", "direct", "directory", "discount", "discover", "dish", "diy", "dj", "dk", "dm", "dnp", "do", "docs", "doctor", "dodge", "dog", "doha", "domains", "dot", "download", "drive", "dtv", "dubai", "duck", "dunlop", "duns", "dupont", "durban", "dvag", "dvr", "dz", "earth", "eat", "ec", "eco", "edeka", "edu", "education", "ee", "eg", "email", "emerck", "energy", "engineer", "engineering", "enterprises", "epost", "epson", "equipment", "er", "ericsson", "erni", "es", "esq", "estate", "esurance", "et", "etisalat", "eu", "eurovision", "eus", "events", "everbank", "exchange", "expert", "exposed", "express", "extraspace", "fage", "fail", "fairwinds", "faith", "family", "fan", "fans", "farm", "farmers", "fashion", "fast", "fedex", "feedback", "ferrari", "ferrero", "fi", "fiat", "fidelity", "fido", "film", "final", "finance", "financial", "fire", "firestone", "firmdale", "fish", "fishing", "fit", "fitness", "fj", "fk", "flickr", "flights", "flir", "florist", "flowers", "fly", "fm", "fo", "foo", "food", "foodnetwork", "football", "ford", "forex", "forsale", "forum", "foundation", "fox", "fr", "free", "fresenius", "frl", "frogans", "frontdoor", "frontier", "ftr", "fujitsu", "fujixerox", "fun", "fund", "furniture", "futbol", "fyi", "ga", "gal", "gallery", "gallo", "gallup", "game", "games", "gap", "garden", "gb", "gbiz", "gd", "gdn", "ge", "gea", "gent", "genting", "george", "gf", "gg", "ggee", "gh", "gi", "gift", "gifts", "gives", "giving", "gl", "glade", "glass", "gle", "global", "globo", "gm", "gmail", "gmbh", "gmo", "gmx", "gn", "godaddy", "gold", "goldpoint", "golf", "goo", "goodhands", "goodyear", "goog", "google", "gop", "got", "gov", "gp", "gq", "gr", "grainger", "graphics", "gratis", "green", "gripe", "group", "gs", "gt", "gu", "guardian", "gucci", "guge", "guide", "guitars", "guru", "gw", "gy", "hair", "hamburg", "hangout", "haus", "hbo", "hdfc", "hdfcbank", "health", "healthcare", "help", "helsinki", "here", "hermes", "hgtv", "hiphop", "hisamitsu", "hitachi", "hiv", "hk", "hkt", "hm", "hn", "hockey", "holdings", "holiday", "homedepot", "homegoods", "homes", "homesense", "honda", "honeywell", "horse", "hospital", "host", "hosting", "hot", "hoteles", "hotels", "hotmail", "house", "how", "hr", "hsbc", "ht", "htc", "hu", "hughes", "hyatt", "hyundai", "ibm", "icbc", "ice", "icu", "id", "ie", "ieee", "ifm", "ikano", "il", "im", "imamat", "imdb", "immo", "immobilien", "in", "industries", "infiniti", "info", "ing", "ink", "institute", "insurance", "insure", "int", "intel", "international", "intuit", "investments", "io", "ipiranga", "iq", "ir", "irish", "is", "iselect", "ismaili", "ist", "istanbul", "it", "itau", "itv", "iveco", "iwc", "jaguar", "java", "jcb", "jcp", "je", "jeep", "jetzt", "jewelry", "jio", "jlc", "jll", "jm", "jmp", "jnj", "jo", "jobs", "joburg", "jot", "joy", "jp", "jpmorgan", "jprs", "juegos", "juniper", "kaufen", "kddi", "ke", "kerryhotels", "kerrylogistics", "kerryproperties", "kfh", "kg", "kh", "ki", "kia", "kim", "kinder", "kindle", "kitchen", "kiwi", "km", "kn", "koeln", "komatsu", "kosher", "kp", "kpmg", "kpn", "kr", "krd", "kred", "kuokgroup", "kw", "ky", "kyoto", "kz", "la", "lacaixa", "ladbrokes", "lamborghini", "lamer", "lancaster", "lancia", "lancome", "land", "landrover", "lanxess", "lasalle", "lat", "latino", "latrobe", "law", "lawyer", "lb", "lc", "lds", "lease", "leclerc", "lefrak", "legal", "lego", "lexus", "lgbt", "li", "liaison", "lidl", "life", "lifeinsurance", "lifestyle", "lighting", "like", "lilly", "limited", "limo", "lincoln", "linde", "link", "lipsy", "live", "living", "lixil", "lk", "loan", "loans", "locker", "locus", "loft", "lol", "london", "lotte", "lotto", "love", "lpl", "lplfinancial", "lr", "ls", "lt", "ltd", "ltda", "lu", "lundbeck", "lupin", "luxe", "luxury", "lv", "ly", "ma", "macys", "madrid", "maif", "maison", "makeup", "man", "management", "mango", "market", "marketing", "markets", "marriott", "marshalls", "maserati", "mattel", "mba", "mc", "mcd", "mcdonalds", "mckinsey", "md", "me", "med", "media", "meet", "melbourne", "meme", "memorial", "men", "menu", "meo", "metlife", "mg", "mh", "miami", "microsoft", "mil", "mini", "mint", "mit", "mitsubishi", "mk", "ml", "mlb", "mls", "mm", "mma", "mn", "mo", "mobi", "mobile", "mobily", "moda", "moe", "moi", "mom", "monash", "money", "monster", "montblanc", "mopar", "mormon", "mortgage", "moscow", "moto", "motorcycles", "mov", "movie", "movistar", "mp", "mq", "mr", "ms", "msd", "mt", "mtn", "mtr", "mu", "museum", "mutual", "mv", "mw", "mx", "my", "mz", "na", "nab", "nadex", "nagoya", "name", "nationwide", "natura", "navy", "nba", "nc", "ne", "nec", "net", "netbank", "netflix", "network", "neustar", "new", "newholland", "news", "next", "nextdirect", "nexus", "nf", "nfl", "ng", "ngo", "nhk", "ni", "nico", "nike", "nikon", "ninja", "nissan", "nissay", "nl", "no", "nokia", "northwesternmutual", "norton", "now", "nowruz", "nowtv", "np", "nr", "nra", "nrw", "ntt", "nu", "nyc", "nz", "obi", "observer", "off", "office", "okinawa", "olayan", "olayangroup", "oldnavy", "ollo", "om", "omega", "one", "ong", "onl", "online", "onyourside", "ooo", "open", "oracle", "orange", "org", "organic", "origins", "osaka", "otsuka", "ott", "ovh", "pa", "page", "pamperedchef", "panasonic", "panerai", "paris", "pars", "partners", "parts", "party", "passagens", "pay", "pccw", "pe", "pet", "pf", "pfizer", "pg", "ph", "pharmacy", "philips", "phone", "photo", "photography", "photos", "physio", "piaget", "pics", "pictet", "pictures", "pid", "pin", "ping", "pink", "pioneer", "pizza", "pk", "pl", "place", "play", "playstation", "plumbing", "plus", "pm", "pn", "pnc", "pohl", "poker", "politie", "porn", "post", "pr", "pramerica", "praxi", "press", "prime", "pro", "prod", "productions", "prof", "progressive", "promo", "properties", "property", "protection", "pru", "prudential", "ps", "pt", "pub", "pw", "pwc", "py", "qa", "qpon", "quebec", "quest", "qvc", "racing", "radio", "raid", "re", "read", "realestate", "realtor", "realty", "recipes", "red", "redstone", "redumbrella", "rehab", "reise", "reisen", "reit", "reliance", "ren", "rent", "rentals", "repair", "report", "republican", "rest", "restaurant", "review", "reviews", "rexroth", "rich", "richardli", "ricoh", "rightathome", "ril", "rio", "rip", "rmit", "ro", "rocher", "rocks", "rodeo", "rogers", "room", "rs", "rsvp", "ru", "rugby", "ruhr", "run", "rw", "rwe", "ryukyu", "sa", "saarland", "safe", "safety", "sakura", "sale", "salon", "samsclub", "samsung", "sandvik", "sandvikcoromant", "sanofi", "sap", "sapo", "sarl", "sas", "save", "saxo", "sb", "sbi", "sbs", "sc", "sca", "scb", "schaeffler", "schmidt", "scholarships", "school", "schule", "schwarz", "science", "scjohnson", "scor", "scot", "sd", "se", "seat", "secure", "security", "seek", "select", "sener", "services", "ses", "seven", "sew", "sex", "sexy", "sfr", "sg", "sh", "shangrila", "sharp", "shaw", "shell", "shia", "shiksha", "shoes", "shop", "shopping", "shouji", "show", "showtime", "shriram", "si", "silk", "sina", "singles", "site", "sj", "sk", "ski", "skin", "sky", "skype", "sl", "sling", "sm", "smart", "smile", "sn", "sncf", "so", "soccer", "social", "softbank", "software", "sohu", "solar", "solutions", "song", "sony", "soy", "space", "spiegel", "spot", "spreadbetting", "sr", "srl", "srt", "st", "stada", "staples", "star", "starhub", "statebank", "statefarm", "statoil", "stc", "stcgroup", "stockholm", "storage", "store", "stream", "studio", "study", "style", "su", "sucks", "supplies", "supply", "support", "surf", "surgery", "suzuki", "sv", "swatch", "swiftcover", "swiss", "sx", "sy", "sydney", "symantec", "systems", "sz", "tab", "taipei", "talk", "taobao", "target", "tatamotors", "tatar", "tattoo", "tax", "taxi", "tc", "tci", "td", "tdk", "team", "tech", "technology", "tel", "telecity", "telefonica", "temasek", "tennis", "teva", "tf", "tg", "th", "thd", "theater", "theatre", "tiaa", "tickets", "tienda", "tiffany", "tips", "tires", "tirol", "tj", "tjmaxx", "tjx", "tk", "tkmaxx", "tl", "tm", "tmall", "tn", "to", "today", "tokyo", "tools", "top", "toray", "toshiba", "total", "tours", "town", "toyota", "toys", "tr", "trade", "trading", "training", "travel", "travelchannel", "travelers", "travelersinsurance", "trust", "trv", "tt", "tube", "tui", "tunes", "tushu", "tv", "tvs", "tw", "tz", "ua", "ubank", "ubs", "uconnect", "ug", "uk", "unicom", "university", "uno", "uol", "ups", "us", "uy", "uz", "va", "vacations", "vana", "vanguard", "vc", "ve", "vegas", "ventures", "verisign", "versicherung", "vet", "vg", "vi", "viajes", "video", "vig", "viking", "villas", "vin", "vip", "virgin", "visa", "vision", "vista", "vistaprint", "viva", "vivo", "vlaanderen", "vn", "vodka", "volkswagen", "volvo", "vote", "voting", "voto", "voyage", "vu", "vuelos", "wales", "walmart", "walter", "wang", "wanggou", "warman", "watch", "watches", "weather", "weatherchannel", "webcam", "weber", "website", "wed", "wedding", "weibo", "weir", "wf", "whoswho", "wien", "wiki", "williamhill", "win", "windows", "wine", "winners", "wme", "wolterskluwer", "woodside", "work", "works", "world", "wow", "ws", "wtc", "wtf", "xbox", "xerox", "xfinity", "xihuan", "xin", "कॉम", "セール", "佛山", "慈善", "集团", "在线", "한국", "大众汽车", "点看", "คอม", "ভারত", "八卦", "موقع", "বাংলা", "公益", "公司", "香格里拉", "网站", "移动", "我爱你", "москва", "қаз", "католик", "онлайн", "сайт", "联通", "срб", "бг", "бел", "קום", "时尚", "微博", "淡马锡", "ファッション", "орг", "नेट", "ストア", "삼성", "சிங்கப்பூர்", "商标", "商店", "商城", "дети", "мкд", "ею", "ポイント", "新闻", "工行", "家電", "كوم", "中文网", "中信", "中国", "中國", "娱乐", "谷歌", "భారత్", "ලංකා", "電訊盈科", "购物", "クラウド", "ભારત", "通販", "भारत", "网店", "संगठन", "餐厅", "网络", "ком", "укр", "香港", "诺基亚", "食品", "飞利浦", "台湾", "台灣", "手表", "手机", "мон", "الجزائر", "عمان", "ارامكو", "ایران", "العليان", "اتصالات", "امارات", "بازار", "پاکستان", "الاردن", "موبايلي", "بھارت", "المغرب", "ابوظبي", "السعودية", "كاثوليك", "سودان", "همراه", "عراق", "مليسيا", "澳門", "닷컴", "政府", "شبكة", "بيتك", "عرب", "გე", "机构", "组织机构", "健康", "ไทย", "سورية", "рус", "рф", "珠宝", "تونس", "大拿", "みんな", "グーグル", "ελ", "世界", "書籍", "ਭਾਰਤ", "网址", "닷넷", "コム", "天主教", "游戏", "vermögensberater", "vermögensberatung", "企业", "信息", "嘉里大酒店", "嘉里", "مصر", "قطر", "广东", "இலங்கை", "இந்தியா", "հայ", "新加坡", "فلسطين", "政务", "xperia", "xxx", "xyz", "yachts", "yahoo", "yamaxun", "yandex", "ye", "yodobashi", "yoga", "yokohama", "you", "youtube", "yt", "yun", "za", "zappos", "zara", "zero", "zip", "zippo", "zm", "zone", "zuerich", "zw"]
		},
		"./node_modules/uc.micro/categories/Cc/regex.js": function(e, n) {
			e.exports = /[\0-\x1F\x7F-\x9F]/
		},
		"./node_modules/uc.micro/categories/P/regex.js": function(e, n) {
			e.exports = /[!-#%-\*,-/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E44\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD807[\uDC41-\uDC45\uDC70\uDC71]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/
		},
		"./node_modules/uc.micro/categories/Z/regex.js": function(e, n) {
			e.exports = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/
		},
		"./node_modules/uc.micro/properties/Any/regex.js": function(e, n) {
			e.exports = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/
		},
		"./node_modules/ws/browser.js": function(e, n, t) {
			"use strict";
			e.exports = function() {
				throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~Chat~RedesignChat.5bcc271b52167e90c8ef.js.map