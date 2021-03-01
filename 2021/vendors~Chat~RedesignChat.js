// https://www.redditstatic.com/desktop2x/vendors~Chat~RedesignChat.0b8e29ec5de489b739b1.js
// Retrieved at 2/28/2021, 9:18:37 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~Chat~RedesignChat"], {
		"./node_modules/axios/index.js": function(e, n, t) {
			e.exports = t("./node_modules/axios/lib/axios.js")
		},
		"./node_modules/axios/lib/adapters/xhr.js": function(e, n, t) {
			"use strict";
			var r = t("./node_modules/axios/lib/utils.js"),
				i = t("./node_modules/axios/lib/core/settle.js"),
				s = t("./node_modules/axios/lib/helpers/buildURL.js"),
				a = t("./node_modules/axios/lib/core/buildFullPath.js"),
				o = t("./node_modules/axios/lib/helpers/parseHeaders.js"),
				u = t("./node_modules/axios/lib/helpers/isURLSameOrigin.js"),
				l = t("./node_modules/axios/lib/core/createError.js");
			e.exports = function(e) {
				return new Promise((function(n, c) {
					var d = e.data,
						h = e.headers;
					r.isFormData(d) && delete h["Content-Type"];
					var p = new XMLHttpRequest;
					if (e.auth) {
						var f = e.auth.username || "",
							_ = e.auth.password || "";
						h.Authorization = "Basic " + btoa(f + ":" + _)
					}
					var g = a(e.baseURL, e.url);
					if (p.open(e.method.toUpperCase(), s(g, e.params, e.paramsSerializer), !0), p.timeout = e.timeout, p.onreadystatechange = function() {
							if (p && 4 === p.readyState && (0 !== p.status || p.responseURL && 0 === p.responseURL.indexOf("file:"))) {
								var t = "getAllResponseHeaders" in p ? o(p.getAllResponseHeaders()) : null,
									r = {
										data: e.responseType && "text" !== e.responseType ? p.response : p.responseText,
										status: p.status,
										statusText: p.statusText,
										headers: t,
										config: e,
										request: p
									};
								i(n, c, r), p = null
							}
						}, p.onabort = function() {
							p && (c(l("Request aborted", e, "ECONNABORTED", p)), p = null)
						}, p.onerror = function() {
							c(l("Network Error", e, null, p)), p = null
						}, p.ontimeout = function() {
							var n = "timeout of " + e.timeout + "ms exceeded";
							e.timeoutErrorMessage && (n = e.timeoutErrorMessage), c(l(n, e, "ECONNABORTED", p)), p = null
						}, r.isStandardBrowserEnv()) {
						var y = t("./node_modules/axios/lib/helpers/cookies.js"),
							m = (e.withCredentials || u(g)) && e.xsrfCookieName ? y.read(e.xsrfCookieName) : void 0;
						m && (h[e.xsrfHeaderName] = m)
					}
					if ("setRequestHeader" in p && r.forEach(h, (function(e, n) {
							void 0 === d && "content-type" === n.toLowerCase() ? delete h[n] : p.setRequestHeader(n, e)
						})), r.isUndefined(e.withCredentials) || (p.withCredentials = !!e.withCredentials), e.responseType) try {
						p.responseType = e.responseType
					} catch (v) {
						if ("json" !== e.responseType) throw v
					}
					"function" == typeof e.onDownloadProgress && p.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && p.upload && p.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then((function(e) {
						p && (p.abort(), c(e), p = null)
					})), void 0 === d && (d = null), p.send(d)
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
			var u = o(t("./node_modules/axios/lib/defaults.js"));
			u.Axios = s, u.create = function(e) {
				return o(a(u.defaults, e))
			}, u.Cancel = t("./node_modules/axios/lib/cancel/Cancel.js"), u.CancelToken = t("./node_modules/axios/lib/cancel/CancelToken.js"), u.isCancel = t("./node_modules/axios/lib/cancel/isCancel.js"), u.all = function(e) {
				return Promise.all(e)
			}, u.spread = t("./node_modules/axios/lib/helpers/spread.js"), e.exports = u, e.exports.default = u
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

			function u(e) {
				this.defaults = e, this.interceptors = {
					request: new s,
					response: new s
				}
			}
			u.prototype.request = function(e) {
				"string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, (e = o(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
				var n = [a, void 0],
					t = Promise.resolve(e);
				for (this.interceptors.request.forEach((function(e) {
						n.unshift(e.fulfilled, e.rejected)
					})), this.interceptors.response.forEach((function(e) {
						n.push(e.fulfilled, e.rejected)
					})); n.length;) t = t.then(n.shift(), n.shift());
				return t
			}, u.prototype.getUri = function(e) {
				return e = o(this.defaults, e), i(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
			}, r.forEach(["delete", "get", "head", "options"], (function(e) {
				u.prototype[e] = function(n, t) {
					return this.request(r.merge(t || {}, {
						method: e,
						url: n
					}))
				}
			})), r.forEach(["post", "put", "patch"], (function(e) {
				u.prototype[e] = function(n, t, i) {
					return this.request(r.merge(i || {}, {
						method: e,
						url: n,
						data: t
					}))
				}
			})), e.exports = u
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
					i = ["url", "method", "params", "data"],
					s = ["headers", "auth", "proxy"],
					a = ["baseURL", "url", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"];
				r.forEach(i, (function(e) {
					void 0 !== n[e] && (t[e] = n[e])
				})), r.forEach(s, (function(i) {
					r.isObject(n[i]) ? t[i] = r.deepMerge(e[i], n[i]) : void 0 !== n[i] ? t[i] = n[i] : r.isObject(e[i]) ? t[i] = r.deepMerge(e[i]) : void 0 !== e[i] && (t[i] = e[i])
				})), r.forEach(a, (function(r) {
					void 0 !== n[r] ? t[r] = n[r] : void 0 !== e[r] && (t[r] = e[r])
				}));
				var o = i.concat(s).concat(a),
					u = Object.keys(n).filter((function(e) {
						return -1 === o.indexOf(e)
					}));
				return r.forEach(u, (function(r) {
					void 0 !== n[r] ? t[r] = n[r] : void 0 !== e[r] && (t[r] = e[r])
				})), t
			}
		},
		"./node_modules/axios/lib/core/settle.js": function(e, n, t) {
			"use strict";
			var r = t("./node_modules/axios/lib/core/createError.js");
			e.exports = function(e, n, t) {
				var i = t.config.validateStatus;
				!i || i(t.status) ? e(t) : n(r("Request failed with status code " + t.status, t.config, null, t.request, t))
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
				var o, u = {
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
					validateStatus: function(e) {
						return e >= 200 && e < 300
					}
				};
				u.headers = {
					common: {
						Accept: "application/json, text/plain, */*"
					}
				}, r.forEach(["delete", "get", "head"], (function(e) {
					u.headers[e] = {}
				})), r.forEach(["post", "put", "patch"], (function(e) {
					u.headers[e] = r.merge(s)
				})), e.exports = u
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
				return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
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

			function u(e) {
				return "[object Function]" === i.call(e)
			}

			function l(e, n) {
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
				forEach: l,
				merge: function e() {
					var n = {};

					function t(t, r) {
						"object" == typeof n[r] && "object" == typeof t ? n[r] = e(n[r], t) : n[r] = t
					}
					for (var r = 0, i = arguments.length; r < i; r++) l(arguments[r], t);
					return n
				},
				deepMerge: function e() {
					var n = {};

					function t(t, r) {
						"object" == typeof n[r] && "object" == typeof t ? n[r] = e(n[r], t) : n[r] = "object" == typeof t ? e({}, t) : t
					}
					for (var r = 0, i = arguments.length; r < i; r++) l(arguments[r], t);
					return n
				},
				extend: function(e, n, t) {
					return l(n, (function(n, i) {
						e[i] = t && "function" == typeof n ? r(n, t) : n
					})), e
				},
				trim: function(e) {
					return e.replace(/^\s*/, "").replace(/\s*$/, "")
				}
			}
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
			var u = {
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
				l = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
				c = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");

			function d(e) {
				var n = e.re = t("./node_modules/linkify-it/lib/re.js")(e.__opts__),
					r = e.__tlds__.slice();

				function o(e) {
					return e.replace("%TLDS%", n.src_tlds)
				}
				e.onCompile(), e.__tlds_replaced__ || r.push(l), r.push(n.src_xn), n.src_tlds = r.join("|"), n.email_fuzzy = RegExp(o(n.tpl_email_fuzzy), "i"), n.link_fuzzy = RegExp(o(n.tpl_link_fuzzy), "i"), n.link_no_ip_fuzzy = RegExp(o(n.tpl_link_no_ip_fuzzy), "i"), n.host_fuzzy_test = RegExp(o(n.tpl_host_fuzzy_test), "i");
				var u = [];

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
						}(t) ? c(n, t): u.push(n)
					}
				})), u.forEach((function(n) {
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
				}), !1) && (n = e, e = {})), this.__opts__ = r({}, o, n), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = r({}, u, e), this.__compiled__ = {}, this.__tlds__ = c, this.__tlds_replaced__ = !1, this.re = {}, d(this)
			}
			f.prototype.add = function(e, n) {
				return this.__schemas__[e] = n, d(this), this
			}, f.prototype.set = function(e) {
				return this.__opts__ = r(this.__opts__, e), this
			}, f.prototype.test = function(e) {
				if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
				var n, t, r, i, s, a, o, u;
				if (this.re.schema_test.test(e))
					for ((o = this.re.schema_search).lastIndex = 0; null !== (n = o.exec(e));)
						if (i = this.testSchemaAt(e, n[2], o.lastIndex)) {
							this.__schema__ = n[2], this.__index__ = n.index + n[1].length, this.__last_index__ = n.index + n[0].length + i;
							break
						} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (u = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || u < this.__index__) && null !== (t = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (s = t.index + t[1].length, (this.__index__ < 0 || s < this.__index__) && (this.__schema__ = "", this.__index__ = s, this.__last_index__ = t.index + t[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (r = e.match(this.re.email_fuzzy)) && (s = r.index + r[1].length, a = r.index + r[0].length, (this.__index__ < 0 || s < this.__index__ || s === this.__index__ && a > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = s, this.__last_index__ = a)), this.__index__ >= 0
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
					var u = a(t) ? r : i,
						l = n ? n() : {};
					return u(t, e, s(o, 2), l)
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
				var u = null == e ? 0 : e.length;
				if (!u || n < 1) return [];
				for (var l = 0, c = 0, d = Array(a(u / n)); l < u;) d[c++] = r(e, l, l += n);
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
		"./node_modules/lodash/reduce.js": function(e, n, t) {
			var r = t("./node_modules/lodash/_arrayReduce.js"),
				i = t("./node_modules/lodash/_baseEach.js"),
				s = t("./node_modules/lodash/_baseIteratee.js"),
				a = t("./node_modules/lodash/_baseReduce.js"),
				o = t("./node_modules/lodash/isArray.js");
			e.exports = function(e, n, t) {
				var u = o(e) ? r : a,
					l = arguments.length < 3;
				return u(e, s(n, 4), t, l, i)
			}
		},
		"./node_modules/lodash/times.js": function(e, n, t) {
			var r = t("./node_modules/lodash/_baseTimes.js"),
				i = t("./node_modules/lodash/_castFunction.js"),
				s = t("./node_modules/lodash/toInteger.js"),
				a = 9007199254740991,
				o = 4294967295,
				u = Math.min;
			e.exports = function(e, n) {
				if ((e = s(e)) < 1 || e > a) return [];
				var t = o,
					l = u(e, o);
				n = i(n), e -= o;
				for (var c = r(l, n); ++t < e;) n(t);
				return c
			}
		},
		"./node_modules/lodash/toArray.js": function(e, n, t) {
			var r = t("./node_modules/lodash/_Symbol.js"),
				i = t("./node_modules/lodash/_copyArray.js"),
				s = t("./node_modules/lodash/_getTag.js"),
				a = t("./node_modules/lodash/isArrayLike.js"),
				o = t("./node_modules/lodash/isString.js"),
				u = t("./node_modules/lodash/_iteratorToArray.js"),
				l = t("./node_modules/lodash/_mapToArray.js"),
				c = t("./node_modules/lodash/_setToArray.js"),
				d = t("./node_modules/lodash/_stringToArray.js"),
				h = t("./node_modules/lodash/values.js"),
				p = "[object Map]",
				f = "[object Set]",
				_ = r ? r.iterator : void 0;
			e.exports = function(e) {
				if (!e) return [];
				if (a(e)) return o(e) ? d(e) : i(e);
				if (_ && e[_]) return u(e[_]());
				var n = s(e);
				return (n == p ? l : n == f ? c : h)(e)
			}
		},
		"./node_modules/react-router-dom/esm/react-router-dom.js": function(e, n, t) {
			"use strict";

			function r(e, n) {
				e.prototype = Object.create(n.prototype), e.prototype.constructor = e, e.__proto__ = n
			}
			t.d(n, "a", (function() {
				return d
			}));
			var i = t("./node_modules/react/index.js"),
				s = t.n(i),
				a = t("./node_modules/react-router/esm/react-router.js"),
				o = t("./node_modules/history/esm/history.js");
			t("./node_modules/react-router-dom/node_modules/prop-types/index.js");

			function u() {
				return (u = Object.assign || function(e) {
					for (var n = 1; n < arguments.length; n++) {
						var t = arguments[n];
						for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
					}
					return e
				}).apply(this, arguments)
			}

			function l(e, n) {
				if (null == e) return {};
				var t, r, i = {},
					s = Object.keys(e);
				for (r = 0; r < s.length; r++) t = s[r], n.indexOf(t) >= 0 || (i[t] = e[t]);
				return i
			}
			var c = t("./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");
			s.a.Component;
			s.a.Component;
			var d = function(e) {
				function n() {
					return e.apply(this, arguments) || this
				}
				r(n, e);
				var t = n.prototype;
				return t.handleClick = function(e, n) {
					try {
						this.props.onClick && this.props.onClick(e)
					} catch (t) {
						throw e.preventDefault(), t
					}
					e.defaultPrevented || 0 !== e.button || this.props.target && "_self" !== this.props.target || function(e) {
						return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
					}(e) || (e.preventDefault(), (this.props.replace ? n.replace : n.push)(this.props.to))
				}, t.render = function() {
					var e = this,
						n = this.props,
						t = n.innerRef,
						r = (n.replace, n.to),
						i = l(n, ["innerRef", "replace", "to"]);
					return s.a.createElement(a.g.Consumer, null, (function(n) {
						n || Object(c.default)(!1);
						var a = "string" == typeof r ? Object(o.c)(r, null, null, n.location) : r,
							l = a ? n.history.createHref(a) : "";
						return s.a.createElement("a", u({}, i, {
							onClick: function(t) {
								return e.handleClick(t, n.history)
							},
							href: l,
							ref: t
						}))
					}))
				}, n
			}(s.a.Component)
		},
		"./node_modules/react-router-dom/node_modules/prop-types/factoryWithThrowingShims.js": function(e, n, t) {
			"use strict";
			var r = t("./node_modules/react-router-dom/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function i() {}

			function s() {}
			s.resetWarningCache = i, e.exports = function() {
				function e(e, n, t, i, s, a) {
					if (a !== r) {
						var o = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw o.name = "Invariant Violation", o
					}
				}

				function n() {
					return e
				}
				e.isRequired = e;
				var t = {
					array: e,
					bool: e,
					func: e,
					number: e,
					object: e,
					string: e,
					symbol: e,
					any: e,
					arrayOf: n,
					element: e,
					elementType: e,
					instanceOf: n,
					node: e,
					objectOf: n,
					oneOf: n,
					oneOfType: n,
					shape: n,
					exact: n,
					checkPropTypes: s,
					resetWarningCache: i
				};
				return t.PropTypes = t, t
			}
		},
		"./node_modules/react-router-dom/node_modules/prop-types/index.js": function(e, n, t) {
			e.exports = t("./node_modules/react-router-dom/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-router-dom/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, n, t) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./node_modules/sendbird/SendBird.min.js": function(e, n, t) {
			(function(n, r) {
				e.exports = function(e, t, i) {
					"use strict";

					function s(e) {
						return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
							return typeof e
						} : function(e) {
							return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
						})(e)
					}

					function a(e, n) {
						if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
					}

					function o(e, n) {
						for (var t = 0; t < n.length; t++) {
							var r = n[t];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
						}
					}

					function u(e, n, t) {
						return n && o(e.prototype, n), t && o(e, t), e
					}

					function l(e, n) {
						var t = Object.keys(e);
						if (Object.getOwnPropertySymbols) {
							var r = Object.getOwnPropertySymbols(e);
							n && (r = r.filter((function(n) {
								return Object.getOwnPropertyDescriptor(e, n).enumerable
							}))), t.push.apply(t, r)
						}
						return t
					}

					function c(e) {
						for (var n = 1; n < arguments.length; n++) {
							var t = null != arguments[n] ? arguments[n] : {};
							n % 2 ? l(Object(t), !0).forEach((function(n) {
								var r, i, s;
								r = e, s = t[i = n], i in r ? Object.defineProperty(r, i, {
									value: s,
									enumerable: !0,
									configurable: !0,
									writable: !0
								}) : r[i] = s
							})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach((function(n) {
								Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
							}))
						}
						return e
					}

					function d(e, n) {
						if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
						e.prototype = Object.create(n && n.prototype, {
							constructor: {
								value: e,
								writable: !0,
								configurable: !0
							}
						}), n && p(e, n)
					}

					function h(e) {
						return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
							return e.__proto__ || Object.getPrototypeOf(e)
						})(e)
					}

					function p(e, n) {
						return (p = Object.setPrototypeOf || function(e, n) {
							return e.__proto__ = n, e
						})(e, n)
					}

					function f() {
						if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
						if (Reflect.construct.sham) return !1;
						if ("function" == typeof Proxy) return !0;
						try {
							return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
						} catch (T) {
							return !1
						}
					}

					function _(e, n, t) {
						return (_ = f() ? Reflect.construct : function(e, n, t) {
							var r = [null];
							r.push.apply(r, n);
							var i = new(Function.bind.apply(e, r));
							return t && p(i, t.prototype), i
						}).apply(null, arguments)
					}

					function g(e) {
						var n = "function" == typeof Map ? new Map : void 0;
						return (g = function(e) {
							if (null === e || (t = e, -1 === Function.toString.call(t).indexOf("[native code]"))) return e;
							var t;
							if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
							if (void 0 !== n) {
								if (n.has(e)) return n.get(e);
								n.set(e, r)
							}

							function r() {
								return _(e, arguments, h(this).constructor)
							}
							return r.prototype = Object.create(e.prototype, {
								constructor: {
									value: r,
									enumerable: !1,
									writable: !0,
									configurable: !0
								}
							}), p(r, e)
						})(e)
					}

					function y(e) {
						if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return e
					}

					function m(e) {
						var n = f();
						return function() {
							var t, r, i, s = h(e);
							if (n) {
								var a = h(this).constructor;
								t = Reflect.construct(s, arguments, a)
							} else t = s.apply(this, arguments);
							return r = this, !(i = t) || "object" != typeof i && "function" != typeof i ? y(r) : i
						}
					}

					function v(e, n, t) {
						return (v = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, n, t) {
							var r = function(e, n) {
								for (; !Object.prototype.hasOwnProperty.call(e, n) && null !== (e = h(e)););
								return e
							}(e, n);
							if (r) {
								var i = Object.getOwnPropertyDescriptor(r, n);
								return i.get ? i.get.call(t) : i.value
							}
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
						}(e, n) || b(e, n) || function() {
							throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
						}()
					}

					function E(e) {
						return function(e) {
							if (Array.isArray(e)) return U(e)
						}(e) || function(e) {
							if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
						}(e) || b(e) || function() {
							throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
						}()
					}

					function b(e, n) {
						if (e) {
							if ("string" == typeof e) return U(e, n);
							var t = Object.prototype.toString.call(e).slice(8, -1);
							return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? U(e, n) : void 0
						}
					}

					function U(e, n) {
						(null == n || n > e.length) && (n = e.length);
						for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
						return r
					}
					e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e, t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t, i = i && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
					var A = function() {
							function e() {
								a(this, e)
							}
							return u(e, null, [{
								key: "OS_VERSION",
								get: function() {
									return "undefined" != typeof navigator && navigator.userAgent ? navigator.userAgent.replace(/,/g, ".") : "noAgent"
								}
							}, {
								key: "SDK_VERSION",
								get: function() {
									return "3.0.128"
								}
							}, {
								key: "SDK_MAJOR_VERSION",
								get: function() {
									return e.SDK_VERSION.split(".")[0]
								}
							}, {
								key: "COMMAND_ACK_TIMEOUT",
								get: function() {
									return 1e4
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
						S = {},
						k = new WeakMap,
						I = function() {
							function e() {
								var n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
								a(this, e), k.set(this, "object" === s(n) && n ? n : {})
							}
							return u(e, [{
								key: "get",
								value: function(e) {
									return k.get(this)[e]
								}
							}, {
								key: "set",
								value: function(e, n) {
									k.get(this)[e] = n
								}
							}, {
								key: "remove",
								value: function(e) {
									var n = k.get(this);
									n.hasOwnProperty(e) && delete n[e]
								}
							}, {
								key: "container",
								get: function() {
									return k.get(this)
								}
							}], [{
								key: "create",
								value: function(n, t) {
									return S[n] = new e(t), S[n]
								}
							}, {
								key: "get",
								value: function(e) {
									return e = e || kn.getInstance()._iid, S[e]
								}
							}]), e
						}(),
						N = function() {
							d(n, g(Error));
							var e = m(n);

							function n(t, r) {
								var i;
								return a(this, n), (i = e.call(this, r)).name = "SendBirdException", i.code = r || 0, i.message = t, i
							}
							return u(n, null, [{
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
							}]), n
						}(),
						R = function() {
							function e() {
								a(this, e), this.sessionKey = null, this.eKey = null
							}
							return u(e, [{
								key: "hasSession",
								value: function() {
									return !!this.sessionKey
								}
							}]), e
						}(),
						T = {
							DEBUG: "debug",
							PRODUCTION: "production"
						},
						M = T.PRODUCTION,
						O = function() {
							function e() {
								a(this, e)
							}
							return u(e, null, [{
								key: "log",
								value: function() {
									var e;
									(e = console).log.apply(e, arguments)
								}
							}, {
								key: "debug",
								value: function() {
									M === e.Mode.DEBUG && e.log.apply(e, arguments)
								}
							}, {
								key: "Mode",
								get: function() {
									return T
								}
							}, {
								key: "mode",
								get: function() {
									return M
								},
								set: function(n) {
									-1 < Object.keys(e.Mode).map((function(n) {
										return e.Mode[n]
									})).indexOf(n) && (M = n)
								}
							}]), e
						}(),
						w = {},
						L = function() {
							function e(n) {
								var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
								for (var r in a(this, e), this._iid = n, t) {
									var i = t[r];
									"function" == typeof i && (this[r] = this.getClonedClass(i))
								}
								w[n] = this
							}
							return u(e, [{
								key: "getClonedClass",
								value: function(e) {
									var n = this._iid;
									return function() {
										d(r, e);
										var t = m(r);

										function r() {
											return a(this, r), t.apply(this, arguments)
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
						P = function() {
							function e(n) {
								a(this, e), this.sb = n, this.pingTimer = null, this.pingTimeoutTimer = null
							}
							return u(e, [{
								key: "ping",
								value: function() {
									var e = this,
										n = L.get(this.sb._iid).Command.bPing(),
										t = I.get(this.sb._iid).container,
										r = t.wsAdapter,
										i = t.pongTimeout;
									r.ws.send(n), O.debug("PING"), this.pingTimeoutTimer = setTimeout((function() {
										O.debug("PING timeout"), e.stop(), r.ws.handler && r.ws.handler.onError()
									}), i)
								}
							}, {
								key: "pong",
								value: function() {
									clearTimeout(this.pingTimeoutTimer), this.pingTimeoutTimer = null
								}
							}, {
								key: "start",
								value: function() {
									var e = this,
										n = I.get(this.sb._iid).container.pingInterval;
									this.stop(), this.ping(), this.pingTimer = setInterval((function() {
										e.ping()
									}), n)
								}
							}, {
								key: "stop",
								value: function() {
									clearInterval(this.pingTimer), this.pingTimer = null, clearTimeout(this.pingTimeoutTimer), this.pingTimeoutTimer = null
								}
							}]), e
						}(),
						D = [N.CONNECTION_REQUIRED, N.NETWORK_ERROR, N.ACK_TIMEOUT, N.WEBSOCKET_CONNECTION_CLOSED, N.WEBSOCKET_CONNECTION_FAILED, N.FILE_UPLOAD_CANCEL_FAILED, N.REQUEST_CANCELED, 500901, 500910, 900200],
						H = function() {
							function e() {
								a(this, e)
							}
							return u(e, null, [{
								key: "deepEqual",
								value: function(e, n) {
									if (e === n) return !0;
									var t = c({}, e),
										r = c({}, n);
									return !(t.messageId && r.messageId && t.messageId !== r.messageId || t.reqId && r.reqId && t.reqId !== r.reqId || (t.hasOwnProperty("messageId") && delete t.messageId, t.hasOwnProperty("reqId") && delete t.reqId, r.hasOwnProperty("messageId") && delete r.messageId, r.hasOwnProperty("reqId") && delete r.reqId, JSON.stringify(t) !== JSON.stringify(r)))
								}
							}, {
								key: "isResendableError",
								value: function(e) {
									return 0 < e && 0 <= D.indexOf(e)
								}
							}, {
								key: "isFile",
								value: function(e) {
									var t = "object" === s(e) && null !== e && "string" == typeof e.name && "string" == typeof e.uri && "string" == typeof e.type;
									if (!t)
										if ("undefined" == typeof window && void 0 !== n) {
											if (void 0 !== r) return e instanceof r
										} else {
											if ("undefined" != typeof Blob) return e instanceof Blob;
											if ("undefined" != typeof File) return e instanceof File
										} return t
								}
							}]), e
						}(),
						F = function() {
							function e(n) {
								if (a(this, e), this.fields = {}, n)
									for (var t in n) this.fields[t] = {
										value: n[t]
									}, H.isFile(n[t]) && (this.fields[t].filename = n[t].name);
								this.internal = !1, this.upload = {
									reqId: null,
									deleteRequest: null,
									progressHandler: null
								}
							}
							return u(e, [{
								key: "add",
								value: function(e, n, t) {
									var r = 2 < arguments.length && void 0 !== t ? t : null;
									this.fields[e] = {
										value: n,
										filename: r
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
									var e = !1;
									for (var n in this.fields)
										if (H.isFile(this.fields[n].value)) {
											e = !0;
											break
										} if (e) {
										var r = new t;
										for (var i in this.fields) {
											var s = this.fields[i];
											if (H.isFile(s.value)) {
												var a = s.value;
												a.filename || a.name ? r.append(i, s.value, a.filename || a.name) : a.data ? r.append(i, s.value, s.data.name) : r.append(i, s.value, "unnamed")
											} else r.append(i, s.value)
										}
										return r
									}
									var o = {};
									for (var u in this.fields) o[u] = this.fields[u].value;
									return o
								}
							}]), e
						}(),
						G = 200,
						x = 400,
						j = function() {
							function n(e) {
								a(this, n), this.sb = e, this.cls = L.get(this.sb._iid)
							}
							return u(n, [{
								key: "checkRouting",
								value: function(e) {
									if (this.sb.customApiHost && this.sb.customWsHost) "function" == typeof e && e(null, {
										apiHost: this.sb.customApiHost,
										wsHost: this.sb.customWsHost
									});
									else {
										var n = this.sb.getApplicationId();
										e(null, {
											apiHost: "https://api-".concat(n, ".sendbird.com"),
											wsHost: "wss://ws-".concat(n, ".sendbird.com")
										})
									}
								}
							}, {
								key: "_buildUrl",
								value: function(e) {
									var n = e.apiHost,
										t = e.url,
										r = e.params;
									return r && r.internal ? "".concat(n, "/v").concat(A.SDK_MAJOR_VERSION, "/sdk").concat(t) : "".concat(n, "/v").concat(A.SDK_MAJOR_VERSION).concat(t)
								}
							}, {
								key: "_createHeader",
								value: function(e) {
									var n = 0 < arguments.length && void 0 !== e ? e : {},
										r = n instanceof t && "function" == typeof n.getHeaders ? n.getHeaders() : {},
										i = I.get(this.sb._iid).container,
										s = i.appId,
										a = i.auth,
										o = i.extensions,
										u = i.getUserAgentWithExtensions;
									return r.SendBird = "JS,".concat(A.OS_VERSION, ",").concat(A.SDK_VERSION, ",").concat(s), r["SB-User-Agent"] = encodeURIComponent(u(o)), a.sessionKey && (r["Session-Key"] = a.sessionKey), r["Request-Sent-Timestamp"] = (new Date).getTime().toString(), r
								}
							}, {
								key: "_createQuery",
								value: function(e, n) {
									var t = 1 < arguments.length && void 0 !== n ? n : {};
									try {
										var r = [];
										for (var i in t) {
											var a = t[i];
											if (null != a) {
												var o = "";
												o = "object" === s(a) ? Array.isArray(a) ? a.map((function(e) {
													return encodeURIComponent(e)
												})).join(",") : encodeURIComponent(JSON.stringify(a)) : encodeURIComponent(a), r.push("".concat(i, "=").concat(o))
											}
										}
										return 0 < r.length ? "".concat(e, "?").concat(r.join("&")) : e
									} catch (n) {
										return O.debug("createWithEncodedGetParams is failed. - ", n), e
									}
								}
							}, {
								key: "_parseError",
								value: function(e) {
									if (e.isAbort || e.aborted) return new N("Request has been canceled.", N.REQUEST_CANCELED);
									try {
										var n = JSON.parse(e.responseText),
											t = n ? n.message : "Request failed.",
											r = n ? n.code : N.REQUEST_FAILED;
										return new N(t, r)
									} catch (e) {
										return e instanceof N ? e : new N("Request failed.", N.REQUEST_FAILED)
									}
								}
							}, {
								key: "get",
								value: function(n, t, r) {
									var i = this;
									this.checkRouting((function(s, a) {
										if (s) r(new N("Request failed.", N.REQUEST_FAILED), null);
										else {
											var o = i._buildUrl({
													apiHost: a.apiHost,
													url: n,
													params: t
												}),
												u = t ? t.yield() : {},
												l = i._createHeader(u);
											e.get(i._createQuery(o, u), {
												headers: l
											}).then((function(e) {
												var n = e.status,
													t = e.data,
													s = e.request;
												if (G <= n && n < x) r(null, t);
												else {
													var a = i._parseError(s);
													O.debug(a), r(a, null)
												}
											})).catch((function(e) {
												O.debug(e), r(e, null)
											}))
										}
									}))
								}
							}, {
								key: "dummyCall",
								value: function(n) {
									var t = this;
									this.checkRouting((function(r, i) {
										if (r) n(new N("Request failed.", N.REQUEST_FAILED), null);
										else {
											var s = i.apiHost,
												a = t._createHeader();
											e.get(t._createQuery(s), {
												headers: a
											}).then((function(e) {
												var r = e.status,
													i = e.data,
													s = e.request;
												if (G <= r && r < x) n(null, i);
												else {
													var a = t._parseError(s);
													O.debug(a), n(a, null)
												}
											})).catch((function(e) {
												O.debug(e), n(e, null)
											}))
										}
									}))
								}
							}, {
								key: "post",
								value: function(n, r, i) {
									var s = this;
									this.checkRouting((function(a, o) {
										if (a) i(new N("Request failed.", N.REQUEST_FAILED), null);
										else {
											var u = s._buildUrl({
													apiHost: o.apiHost,
													url: n,
													params: r
												}),
												l = r ? r.yield() : {},
												c = s._createHeader(l),
												d = null;
											if (l instanceof t) {
												var h = e.CancelToken.source();
												d = h.token;
												var p = s.cls.FileMessageQueue,
													f = r.upload.reqId;
												f && (p.uploadRequest[f] = h)
											}
											e.post(u, "function" == typeof l.getBuffer ? l.getBuffer() : l, {
												headers: c,
												cancelToken: d,
												onUploadProgress: function(e) {
													r.upload.progressHandler && r.upload.progressHandler(e, r.upload.reqId)
												}
											}).then((function(e) {
												var n = e.status,
													t = e.data,
													a = e.request;
												if (G <= n && n < x) "function" == typeof r.upload.deleteRequest && r.upload.deleteRequest(), i(null, t);
												else {
													"function" == typeof r.upload.deleteRequest && r.upload.deleteRequest();
													var o = s._parseError(a);
													O.debug(o), i(o, null)
												}
											})).catch((function(e) {
												"function" == typeof r.upload.deleteRequest && r.upload.deleteRequest(), O.debug(e), i(e, null)
											}))
										}
									}))
								}
							}, {
								key: "put",
								value: function(n, t, r) {
									var i = this;
									this.checkRouting((function(s, a) {
										if (s) r(new N("Request failed.", N.REQUEST_FAILED), null);
										else {
											var o = i._buildUrl({
													apiHost: a.apiHost,
													url: n,
													params: t
												}),
												u = t ? t.yield() : {},
												l = i._createHeader(u);
											e.put(o, u, {
												headers: l
											}).then((function(e) {
												var n = e.status,
													t = e.data,
													s = e.request;
												if (G <= n && n < x) r(null, t);
												else {
													var a = i._parseError(s);
													O.debug(a), r(a, null)
												}
											})).catch((function(e) {
												O.debug(e), r(e, null)
											}))
										}
									}))
								}
							}, {
								key: "delete",
								value: function(n, t, r) {
									var i = this;
									this.checkRouting((function(s, a) {
										if (s) r(new N("Request failed.", N.REQUEST_FAILED), null);
										else {
											var o = i._buildUrl({
													apiHost: a.apiHost,
													url: n,
													params: t
												}),
												u = t ? t.yield() : {},
												l = i._createHeader(u);
											e.delete(i._createQuery(o, u), {
												headers: l
											}).then((function(e) {
												var n = e.status,
													t = e.data,
													s = e.request;
												if (G <= n && n < x) r(null, t);
												else {
													var a = i._parseError(s);
													O.debug(a), r(a, null)
												}
											})).catch((function(e) {
												O.debug(e), r(e, null)
											}))
										}
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
									this.sb.ConnectionManager.ready((function(e, u) {
										if (e) t(e, null);
										else {
											var l = n.Path.USERS_USERID.replace("%s", encodeURIComponent(u.userId)),
												c = new F;
											i && c.add("nickname", i), s && c.add("profile_url", s), a && c.add("profile_file", a, a.name), o && c.add("preferred_languages", o), r.put(l, c, t)
										}
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
										u = e.includeFrozen;
									this.sb.ConnectionManager.ready((function(e, l) {
										if (e) t(e, null);
										else {
											var c = n.Path.USERS_USERID_MY_GROUP_CHANNEL_CHANGELOGS.replace("%s", encodeURIComponent(l.userId)),
												d = new F({
													show_read_receipt: !0,
													show_delivery_receipt: !0,
													show_member: !0
												});
											s && d.add("token", s), i && d.add("change_ts", i), a && 0 < a.length && d.add("custom_types", a), "boolean" == typeof o && d.add("show_empty", o), "boolean" == typeof u && d.add("show_frozen", u), r.get(c, d, t)
										}
									}))
								}
							}, {
								key: "getChannelInvitationPreference",
								value: function(e, t) {
									var r = this;
									this.sb.ConnectionManager.ready((function(e, i) {
										if (e) t(e, null);
										else {
											var s = n.Path.USERS_USERID_GROUP_CHANNEL_INVITATION_PREFERENCE.replace("%s", encodeURIComponent(i.userId));
											r.get(s, null, t)
										}
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
											var a = r.cls.GroupChannel,
												o = n.Path.USERS_USERID_GROUP_CHANNEL_COUNT.replace("%s", encodeURIComponent(s.userId)),
												u = "";
											switch (i) {
												case a.MemberStateFilter.JOINED:
													u = "joined";
													break;
												case a.MemberStateFilter.INVITED:
													u = "invited";
													break;
												case a.MemberStateFilter.INVITED_BY_FRIEND:
													u = "invited_by_friend";
													break;
												case a.MemberStateFilter.INVITED_BY_NON_FRIEND:
													u = "invited_by_non_friend";
													break;
												default:
													u = "all"
											}
											var l = new F({
												state: u
											});
											r.get(o, l, t)
										}
									}))
								}
							}, {
								key: "getUnreadItemCount",
								value: function(e, t) {
									var r = this,
										i = e.keys;
									this.sb.ConnectionManager.ready((function(e, s) {
										if (e) t(e, null);
										else {
											var a = n.Path.USERS_USERID_UNREAD_ITEM_COUNT.replace("%s", encodeURIComponent(s.userId)),
												o = new F({
													item_keys: i
												});
											r.get(a, o, t)
										}
									}))
								}
							}, {
								key: "getTotalUnreadMessageCount",
								value: function(e, t) {
									var r = this,
										i = e.customTypesFilter,
										s = e.superChannelFilter;
									this.sb.ConnectionManager.ready((function(e, a) {
										if (e) t(e, null);
										else {
											var o = n.Path.USERS_USERID_UNREAD_MESSAGE_COUNT.replace("%s", encodeURIComponent(a.userId)),
												u = new F({
													super_mode: s
												});
											null !== i && 0 < i.length && u.add("custom_types", i), r.get(o, u, t)
										}
									}))
								}
							}, {
								key: "getTotalUnreadChannelCount",
								value: function(e, t) {
									var r = this;
									this.sb.ConnectionManager.ready((function(e, i) {
										if (e) t(e, null);
										else {
											var s = n.Path.USERS_USERID_UNREAD_CHANNEL_COUNT.replace("%s", encodeURIComponent(i.userId));
											r.get(s, null, t)
										}
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
										u = e.channelUrl,
										l = e.channelCustomType,
										c = e.messageTimestampFrom,
										d = e.messageTimestampTo,
										h = e.order,
										p = e.nextToken;
									this.sb.ConnectionManager.ready((function(e, f) {
										if (e) t(e, null);
										else {
											var _ = n.Path.SEARCH_MESSAGE,
												g = new F({
													limit: s,
													reverse: a,
													query: i,
													custom_type: l
												});
											c && g.add("message_ts_from", c), d && g.add("message_ts_to", d), u && g.add("channel_url", u), h && g.add("sort_field", h), "boolean" == typeof o && g.add("exact_match", o), null !== p && 0 < p.length && g.add("after", p), r.get(_, g, t)
										}
									}))
								}
							}, {
								key: "markAsReadAll",
								value: function(e, t) {
									var r = this,
										i = e.channelUrls;
									this.sb.ConnectionManager.ready((function(e, s) {
										if (e) t(e, null);
										else {
											var a = n.Path.USERS_USERID_MARKASREADALL.replace("%s", encodeURIComponent(s.userId)),
												o = new F;
											i && o.add("channel_urls", i), r.put(a, o, t)
										}
									}))
								}
							}, {
								key: "markAsDelivered",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl,
										s = e.userId;
									this.sb.ConnectionManager.ready((function(e, a) {
										if (e) t(e, null);
										else {
											var o = n.Path.GROUPCHANNELS_CHANNELURL_MESSAGES_MARKASDELIVERED.replace("%s", encodeURIComponent(i)),
												u = new F;
											s && u.add("user_id", s), r.put(o, u, t)
										}
									}))
								}
							}, {
								key: "setChannelInvitationPreference",
								value: function(e, t) {
									var r = this,
										i = e.isAutoAccept;
									this.sb.ConnectionManager.ready((function(e, s) {
										if (e) t(e, null);
										else {
											var a = n.Path.USERS_USERID_GROUP_CHANNEL_INVITATION_PREFERENCE.replace("%s", encodeURIComponent(s.userId)),
												o = new F({
													auto_accept: i
												});
											r.put(a, o, t)
										}
									}))
								}
							}, {
								key: "blockUser",
								value: function(e, t) {
									var r = this,
										i = e.blockedUserId;
									this.sb.ConnectionManager.ready((function(e, s) {
										if (e) t(e, null);
										else {
											var a = n.Path.USERS_USERID_BLOCK.replace("%s", encodeURIComponent(s.userId)),
												o = new F({
													target_id: i
												});
											r.post(a, o, t)
										}
									}))
								}
							}, {
								key: "unblockUser",
								value: function(e, t) {
									var r = this,
										i = e.unblockedUserId;
									this.sb.ConnectionManager.ready((function(e, s) {
										if (e) t(e, null);
										else {
											var a = n.Path.USERS_USERID_BLOCK_TARGETID.replace("%s", encodeURIComponent(s.userId)).replace("%s", encodeURIComponent(i));
											r.delete(a, null, t)
										}
									}))
								}
							}, {
								key: "getPushTriggerOption",
								value: function(e, t) {
									var r = this;
									this.sb.ConnectionManager.ready((function(e, i) {
										if (e) t(e, null);
										else {
											var s = n.Path.USERS_USERID_PUSHPREFERENCE.replace("%s", encodeURIComponent(i.userId));
											r.get(s, null, t)
										}
									}))
								}
							}, {
								key: "setPushTriggerOption",
								value: function(e, t) {
									var r = this,
										i = e.pushTriggerOption;
									this.sb.ConnectionManager.ready((function(e, s) {
										if (e) t(e, null);
										else {
											var a = n.Path.USERS_USERID_PUSHPREFERENCE.replace("%s", encodeURIComponent(s.userId)),
												o = new F({
													push_trigger_option: i
												});
											r.put(a, o, t)
										}
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
										if (e) t(e, null);
										else {
											var u = n.Path.USERS_USERID_PUSH_DEVICE_TOKENS.replace("%s", encodeURIComponent(o.userId)).replace("%s", encodeURIComponent(a)),
												l = new F;
											s && l.add("token", s), i && l.add("created_ts", i), r.get(u, l, t)
										}
									}))
								}
							}, {
								key: "getPushTemplate",
								value: function(e, t) {
									var r = this;
									this.sb.ConnectionManager.ready((function(e, i) {
										if (e) t(e, null);
										else {
											var s = n.Path.USERS_USERID_PUSH_TEMPLATE.replace("%s", encodeURIComponent(i.userId));
											r.get(s, null, t)
										}
									}))
								}
							}, {
								key: "setPushTemplate",
								value: function(e, t) {
									var r = this,
										i = e.templateName;
									this.sb.ConnectionManager.ready((function(e, s) {
										if (e) t(e, null);
										else {
											var a = n.Path.USERS_USERID_PUSH_TEMPLATE.replace("%s", encodeURIComponent(s.userId)),
												o = new F({
													name: i
												});
											r.put(a, o, t)
										}
									}))
								}
							}, {
								key: "getDoNotDisturb",
								value: function(e, t) {
									var r = this;
									this.sb.ConnectionManager.ready((function(e, i) {
										if (e) t(e, null);
										else {
											var s = n.Path.USERS_USERID_PUSHPREFERENCE.replace("%s", encodeURIComponent(i.userId));
											r.get(s, null, t)
										}
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
										u = e.endMin,
										l = e.timezone;
									this.sb.ConnectionManager.ready((function(e, c) {
										if (e) t(e, null);
										else {
											var d = n.Path.USERS_USERID_PUSHPREFERENCE.replace("%s", encodeURIComponent(c.userId)),
												h = new F({
													do_not_disturb: i,
													start_hour: s,
													start_min: a,
													end_hour: o,
													end_min: u,
													timezone: l
												});
											r.put(d, h, t)
										}
									}))
								}
							}, {
								key: "getSnoozePeriod",
								value: function(e, t) {
									var r = this;
									this.sb.ConnectionManager.ready((function(e, i) {
										if (e) t(e, null);
										else {
											var s = n.Path.USERS_USERID_PUSHPREFERENCE.replace("%s", encodeURIComponent(i.userId));
											r.get(s, null, t)
										}
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
										if (e) t(e, null);
										else {
											var u = n.Path.USERS_USERID_PUSHPREFERENCE.replace("%s", encodeURIComponent(o.userId)),
												l = new F({
													snooze_enabled: i,
													snooze_start_ts: s,
													snooze_end_ts: a
												});
											r.put(u, l, t)
										}
									}))
								}
							}, {
								key: "registerGCMPushToken",
								value: function(e, t) {
									var r = this,
										i = e.token;
									this.sb.ConnectionManager.ready((function(e, s) {
										if (e) t(e, null);
										else {
											var a = n.Path.USERS_USERID_PUSH_GCM.replace("%s", encodeURIComponent(s.userId)),
												o = new F({
													gcm_reg_token: i,
													always_push: !0
												});
											r.post(a, o, t)
										}
									}))
								}
							}, {
								key: "unregisterGCMPushToken",
								value: function(e, t) {
									var r = this,
										i = e.token;
									this.sb.ConnectionManager.ready((function(e, s) {
										if (e) t(e, null);
										else {
											var a = n.Path.USERS_USERID_PUSH_GCM_TOKEN.replace("%s", encodeURIComponent(s.userId)).replace("%s", encodeURIComponent(i));
											r.delete(a, null, t)
										}
									}))
								}
							}, {
								key: "unregisterAllGCMPushTokens",
								value: function(e, t) {
									var r = this;
									this.sb.ConnectionManager.ready((function(e, i) {
										if (e) t(e, null);
										else {
											var s = n.Path.USERS_USERID_PUSH_GCM.replace("%s", encodeURIComponent(i.userId));
											r.delete(s, null, t)
										}
									}))
								}
							}, {
								key: "registerAPNSPushToken",
								value: function(e, t) {
									var r = this,
										i = e.token;
									this.sb.ConnectionManager.ready((function(e, s) {
										if (e) t(e, null);
										else {
											var a = n.Path.USERS_USERID_PUSH_APNS.replace("%s", encodeURIComponent(s.userId)),
												o = new F({
													apns_device_token: i,
													always_push: !0
												});
											r.post(a, o, t)
										}
									}))
								}
							}, {
								key: "unregisterAPNSPushToken",
								value: function(e, t) {
									var r = this,
										i = e.token;
									this.sb.ConnectionManager.ready((function(e, s) {
										if (e) t(e, null);
										else {
											var a = n.Path.USERS_USERID_PUSH_APNS_TOKEN.replace("%s", encodeURIComponent(s.userId)).replace("%s", encodeURIComponent(i));
											r.delete(a, null, t)
										}
									}))
								}
							}, {
								key: "unregisterAllAPNSPushTokens",
								value: function(e, t) {
									var r = this;
									this.sb.ConnectionManager.ready((function(e, i) {
										if (e) t(e, null);
										else {
											var s = n.Path.USERS_USERID_PUSH_APNS.replace("%s", encodeURIComponent(i.userId));
											r.delete(s, null, t)
										}
									}))
								}
							}, {
								key: "unregisterAllPushTokens",
								value: function(e, t) {
									var r = this;
									this.sb.ConnectionManager.ready((function(e, i) {
										if (e) t(e, null);
										else {
											var s = n.Path.USERS_USERID_PUSH.replace("%s", encodeURIComponent(i.userId));
											r.delete(s, null, t)
										}
									}))
								}
							}, {
								key: "loadFriendList",
								value: function(e, t) {
									var r = this,
										i = e.token,
										s = e.limit;
									this.sb.ConnectionManager.ready((function(e, a) {
										if (e) t(e, null);
										else {
											var o = n.Path.FRIENDS.replace("%s", encodeURIComponent(a.userId)),
												u = new F({
													limit: s,
													token: i
												});
											r.get(o, u, t)
										}
									}))
								}
							}, {
								key: "getFriendChangeLogsByToken",
								value: function(e, t) {
									var r = this,
										i = e.token;
									this.sb.ConnectionManager.ready((function(e, s) {
										if (e) t(e, null);
										else {
											var a = n.Path.FRIENDS_CHANGE_LOGS.replace("%s", encodeURIComponent(s.userId)),
												o = new F;
											i && o.add("token", i), r.get(a, o, t)
										}
									}))
								}
							}, {
								key: "addFriends",
								value: function(e, t) {
									var r = this,
										i = e.userIds;
									this.sb.ConnectionManager.ready((function(e, s) {
										if (e) t(e, null);
										else {
											var a = n.Path.FRIENDS.replace("%s", encodeURIComponent(s.userId)),
												o = new F({
													user_ids: i
												});
											r.post(a, o, t)
										}
									}))
								}
							}, {
								key: "deleteFriends",
								value: function(e, t) {
									var r = this,
										i = e.userIds;
									this.sb.ConnectionManager.ready((function(e, s) {
										if (e) t(e, null);
										else {
											var a = n.Path.FRIENDS.replace("%s", encodeURIComponent(s.userId)),
												o = new F({
													user_ids: i
												});
											r.delete(a, o, t)
										}
									}))
								}
							}, {
								key: "uploadFriendDiscoveries",
								value: function(e, t) {
									var r = this,
										i = e.discoveries;
									this.sb.ConnectionManager.ready((function(e, s) {
										if (e) t(e, null);
										else {
											var a = n.Path.FRIENDS_DISCOVERIES.replace("%s", encodeURIComponent(s.userId)),
												o = [];
											i.forEach((function(e) {
												o.push({
													friend_discovery_key: e.friendDiscoveryKey,
													friend_name: "string" == typeof e.friendName || e.friendName ? e.friendName : null
												})
											}));
											var u = new F({
												friend_discoveries: o
											});
											r.put(a, u, t)
										}
									}))
								}
							}, {
								key: "deleteFriendDiscoveries",
								value: function(e, t) {
									var r = this,
										i = e.discoveryKeys;
									this.sb.ConnectionManager.ready((function(e, s) {
										if (e) t(e, null);
										else {
											var a = n.Path.FRIENDS_DISCOVERIES.replace("%s", encodeURIComponent(s.userId)),
												o = new F({
													friend_discovery_keys: i
												});
											r.delete(a, o, t)
										}
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
										u = e.metaDataValuesFilter;
									this.sb.ConnectionManager.ready((function(e, l) {
										if (e) t(e, null);
										else {
											var c = n.Path.USERS,
												d = new F({
													token: i,
													limit: s
												});
											a && 0 < a.length && d.add("user_ids", a), o && u && 0 < u.length && (d.add("metadatakey", o), d.add("metadatavalues_in", u)), r.get(c, d, t)
										}
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
										if (e) t(e, null);
										else {
											var u = n.Path.USERS_USERID_BLOCK.replace("%s", encodeURIComponent(o.userId)),
												l = new F({
													token: i,
													limit: s
												});
											a && 0 < a.length && l.add("user_ids", a), r.get(u, l, t)
										}
									}))
								}
							}, {
								key: "createUserMetaData",
								value: function(e, t) {
									var r = this,
										i = e.metaData;
									this.sb.ConnectionManager.ready((function(e, s) {
										if (e) t(e, null);
										else {
											var a = n.Path.USERS_USERID_METADATA.replace("%s", encodeURIComponent(s.userId)),
												o = new F({
													metadata: i
												});
											r.post(a, o, t)
										}
									}))
								}
							}, {
								key: "updateUserMetaData",
								value: function(e, t) {
									var r = this,
										i = e.metaData,
										s = e.upsert;
									this.sb.ConnectionManager.ready((function(e, a) {
										if (e) t(e, null);
										else {
											var o = n.Path.USERS_USERID_METADATA.replace("%s", encodeURIComponent(a.userId)),
												u = new F({
													metadata: i,
													upsert: s
												});
											r.put(o, u, t)
										}
									}))
								}
							}, {
								key: "deleteUserMetaData",
								value: function(e, t) {
									var r = this,
										i = e.metaDataKey;
									this.sb.ConnectionManager.ready((function(e, s) {
										if (e) t(e, null);
										else {
											var a = n.Path.USERS_USERID_METADATA_KEY.replace("%s", encodeURIComponent(s.userId)).replace("%s", encodeURIComponent(i));
											r.delete(a, null, t)
										}
									}))
								}
							}, {
								key: "deleteAllUserMetaData",
								value: function(e, t) {
									var r = this;
									this.sb.ConnectionManager.ready((function(e, i) {
										if (e) t(e, null);
										else {
											var s = n.Path.USERS_USERID_METADATA.replace("%s", encodeURIComponent(i.userId));
											r.delete(s, null, t)
										}
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
										u = e.isOpenChannel,
										l = e.includeMetaArray,
										c = e.includeReaction,
										d = e.includeReplies,
										h = e.includeParentMessageText,
										p = e.includeThreadInfo;
									this.sb.ConnectionManager.ready((function(e, f) {
										if (e) t(e, null);
										else {
											var _ = u ? n.Path.OPENCHANNELS_CHANNELURL_MESSAGES_CHANGELOGS.replace("%s", encodeURIComponent(i)) : n.Path.GROUPCHANNELS_CHANNELURL_MESSAGES_CHANGELOGS.replace("%s", encodeURIComponent(i)),
												g = new F;
											o && g.add("token", o), s && g.add("change_ts", s), a && g.add("change_ts", a), "boolean" == typeof l && g.add("with_sorted_meta_array", l), "boolean" == typeof c && g.add("include_reactions", c), "boolean" == typeof d && g.add("include_replies", d), "boolean" == typeof h && g.add("include_parent_text_message", h), "boolean" == typeof p && g.add("include_thread_info", p), r.get(_, g, t)
										}
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
										if (e) t(e, null);
										else {
											var u = a ? n.Path.GROUPCHANNELS_CHANNELURL_MUTE_USERID.replace("%s", encodeURIComponent(i)).replace("%s", encodeURIComponent(s)) : n.Path.OPENCHANNELS_CHANNELURL_MUTE_USERID.replace("%s", encodeURIComponent(i)).replace("%s", encodeURIComponent(s));
											r.get(u, null, t)
										}
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
									this.sb.ConnectionManager.ready((function(e, u) {
										if (e) t(e, null);
										else {
											var l = o ? n.Path.OPENCHANNELS_CHANNELURL_BAN.replace("%s", encodeURIComponent(a)) : n.Path.GROUPCHANNELS_CHANNELURL_BAN.replace("%s", encodeURIComponent(a)),
												c = new F({
													token: i,
													limit: s
												});
											r.get(l, c, t)
										}
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
									this.sb.ConnectionManager.ready((function(e, u) {
										if (e) t(e, null);
										else {
											var l = o ? n.Path.OPENCHANNELS_CHANNELURL_MUTE.replace("%s", encodeURIComponent(a)) : n.Path.GROUPCHANNELS_CHANNELURL_MUTE.replace("%s", encodeURIComponent(a)),
												c = new F({
													token: i,
													limit: s
												});
											r.get(l, c, t)
										}
									}))
								}
							}, {
								key: "getMessageList",
								value: function(e, t) {
									var r = this,
										i = e.channel,
										s = e.token,
										a = e.tokenType,
										o = e.isInclusive,
										u = e.prevResultSize,
										l = void 0 === u ? 0 : u,
										c = e.nextResultSize,
										d = void 0 === c ? 0 : c,
										h = e.shouldReverse,
										p = e.messageType,
										f = e.customType,
										_ = e.senderUserIds,
										g = e.includeMetaArray,
										y = e.includeReaction,
										m = e.includeThreadInfo,
										v = e.includeReplies,
										C = e.includeParentMessageText,
										E = e.rootMessageId,
										b = e.parentMessageId;
									this.sb.ConnectionManager.ready((function(e, u) {
										if (e) t(e, null);
										else {
											var c = i.isOpenChannel() ? n.Path.OPENCHANNELS_CHANNELURL_MESSAGES.replace("%s", i.url) : n.Path.GROUPCHANNELS_CHANNELURL_MESSAGES.replace("%s", i.url),
												U = new F({
													is_sdk: String(!0),
													prev_limit: String(l),
													next_limit: String(d),
													include: String(o),
													reverse: String(h)
												});
											"timestamp" === a ? U.add("message_ts", s) : "messageId" === a && U.add("message_id", String(s)), p && U.add("message_type", String(p)), f && U.add("custom_type", String(f)), Array.isArray(_) && 0 < _.length && U.add("sender_ids", _), "boolean" == typeof g && U.add("with_sorted_meta_array", g), "boolean" == typeof y && U.add("include_reactions", y), "boolean" == typeof m && U.add("include_thread_info", m), "boolean" == typeof v && U.add("include_replies", v), "boolean" == typeof C && U.add("include_parent_message_text", C), E && U.add("root_message_id", E), b && U.add("parent_message_id", b), r.get(c, U, t)
										}
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
									this.sb.ConnectionManager.ready((function(e, u) {
										if (e) t(e, null);
										else {
											var l = s ? n.Path.OPENCHANNELS_CHANNELURL_MESSAGES_MESSAGEID_TRANSLATION.replace("%s", encodeURIComponent(i)).replace("%s", a) : n.Path.GROUPCHANNELS_CHANNELURL_MESSAGES_MESSAGEID_TRANSLATION.replace("%s", encodeURIComponent(i)).replace("%s", a),
												c = new F({
													target_langs: o
												});
											r.post(l, c, t)
										}
									}))
								}
							}, {
								key: "getMessage",
								value: function(e, t) {
									var r = this,
										i = e.channel,
										s = e.messageId;
									this.sb.ConnectionManager.ready((function(e, a) {
										if (e) t(e, null);
										else {
											var o = i.isOpenChannel() ? n.Path.OPENCHANNELS_CHANNELURL_MESSAGES_MESSAGEID.replace("%s", encodeURIComponent(i.url)).replace("%s", encodeURIComponent(s)) : n.Path.GROUPCHANNELS_CHANNELURL_MESSAGES_MESSAGEID.replace("%s", encodeURIComponent(i.url)).replace("%s", encodeURIComponent(s));
											r.get(o, null, t)
										}
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
										if (e) t(e, null);
										else {
											var u = s ? n.Path.OPENCHANNELS_CHANNELURL_MESSAGES_MESSAGEID.replace("%s", encodeURIComponent(i)).replace("%s", encodeURIComponent(a)) : n.Path.GROUPCHANNELS_CHANNELURL_MESSAGES_MESSAGEID.replace("%s", encodeURIComponent(i)).replace("%s", encodeURIComponent(a));
											r.delete(u, null, t)
										}
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
										u = e.isGroupChannel;
									this.sb.ConnectionManager.ready((function(e, l) {
										if (e) t(e, null);
										else {
											var c = u ? n.Path.GROUPCHANNELS_CHANNELURL_MUTE.replace("%s", encodeURIComponent(i)) : n.Path.OPENCHANNELS_CHANNELURL_MUTE.replace("%s", encodeURIComponent(i)),
												d = new F({
													user_id: s
												});
											o && (0 < o || -1 !== o) && d.add("seconds", o), a && d.add("description", a), r.post(c, d, t)
										}
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
										if (e) t(e, null);
										else {
											var u = a ? n.Path.GROUPCHANNELS_CHANNELURL_MUTE_USERID.replace("%s", encodeURIComponent(i)).replace("%s", encodeURIComponent(s)) : n.Path.OPENCHANNELS_CHANNELURL_MUTE_USERID.replace("%s", encodeURIComponent(i)).replace("%s", encodeURIComponent(s));
											r.delete(u, null, t)
										}
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
										u = e.isGroupChannel;
									this.sb.ConnectionManager.ready((function(e, l) {
										if (e) t(e, null);
										else {
											var c = u ? n.Path.GROUPCHANNELS_CHANNELURL_BAN.replace("%s", encodeURIComponent(i)) : n.Path.OPENCHANNELS_CHANNELURL_BAN.replace("%s", encodeURIComponent(i)),
												d = new F({
													user_id: s
												});
											a && d.add("description", a), d.add("seconds", String(o)), r.post(c, d, t)
										}
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
										if (e) t(e, null);
										else {
											var u = a ? n.Path.GROUPCHANNELS_CHANNELURL_BAN_USERID.replace("%s", encodeURIComponent(i)).replace("%s", encodeURIComponent(s)) : n.Path.OPENCHANNELS_CHANNELURL_BAN_USERID.replace("%s", encodeURIComponent(i)).replace("%s", encodeURIComponent(s));
											r.delete(u, null, t)
										}
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
										if (e) t(e, null);
										else {
											var u = s ? n.Path.OPENCHANNELS_CHANNELURL_METACOUNTER.replace("%s", encodeURIComponent(i)) : n.Path.GROUPCHANNELS_CHANNELURL_METACOUNTER.replace("%s", encodeURIComponent(i)),
												l = new F({
													keys: a
												});
											r.get(u, l, t)
										}
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
										if (e) t(e, null);
										else {
											var u = s ? n.Path.OPENCHANNELS_CHANNELURL_METACOUNTER.replace("%s", encodeURIComponent(i)) : n.Path.GROUPCHANNELS_CHANNELURL_METACOUNTER.replace("%s", encodeURIComponent(i)),
												l = new F({
													metacounter: a
												});
											r.post(u, l, t)
										}
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
										u = e.mode;
									this.sb.ConnectionManager.ready((function(e, l) {
										if (e) t(e, null);
										else {
											var c = s ? n.Path.OPENCHANNELS_CHANNELURL_METACOUNTER.replace("%s", encodeURIComponent(i)) : n.Path.GROUPCHANNELS_CHANNELURL_METACOUNTER.replace("%s", encodeURIComponent(i)),
												d = new F({
													metacounter: a,
													upsert: o,
													mode: u
												});
											r.put(c, d, t)
										}
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
										if (e) t(e, null);
										else {
											var u = s ? n.Path.OPENCHANNELS_CHANNELURL_METACOUNTER_KEY.replace("%s", encodeURIComponent(i)).replace("%s", a) : n.Path.GROUPCHANNELS_CHANNELURL_METACOUNTER_KEY.replace("%s", encodeURIComponent(i)).replace("%s", a);
											r.delete(u, null, t)
										}
									}))
								}
							}, {
								key: "deleteAllMetaCounters",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl,
										s = e.isOpenChannel;
									this.sb.ConnectionManager.ready((function(e, a) {
										if (e) t(e, null);
										else {
											var o = s ? n.Path.OPENCHANNELS_CHANNELURL_METACOUNTER.replace("%s", encodeURIComponent(i)) : n.Path.GROUPCHANNELS_CHANNELURL_METACOUNTER.replace("%s", encodeURIComponent(i));
											r.delete(o, null, t)
										}
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
										if (e) t(e, null);
										else {
											var u = s ? n.Path.OPENCHANNELS_CHANNELURL_METADATA.replace("%s", encodeURIComponent(i)) : n.Path.GROUPCHANNELS_CHANNELURL_METADATA.replace("%s", encodeURIComponent(i)),
												l = new F({
													keys: a
												});
											r.get(u, l, t)
										}
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
										if (e) t(e, null);
										else {
											var u = s ? n.Path.OPENCHANNELS_CHANNELURL_METADATA.replace("%s", encodeURIComponent(i)) : n.Path.GROUPCHANNELS_CHANNELURL_METADATA.replace("%s", encodeURIComponent(i)),
												l = new F({
													metadata: a
												});
											r.post(u, l, t)
										}
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
									this.sb.ConnectionManager.ready((function(e, u) {
										if (e) t(e, null);
										else {
											var l = s ? n.Path.OPENCHANNELS_CHANNELURL_METADATA.replace("%s", encodeURIComponent(i)) : n.Path.GROUPCHANNELS_CHANNELURL_METADATA.replace("%s", encodeURIComponent(i)),
												c = new F({
													metadata: a,
													upsert: o
												});
											r.put(l, c, t)
										}
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
										if (e) t(e, null);
										else {
											var u = s ? n.Path.OPENCHANNELS_CHANNELURL_METADATA_KEY.replace("%s", encodeURIComponent(i)).replace("%s", a) : n.Path.GROUPCHANNELS_CHANNELURL_METADATA_KEY.replace("%s", encodeURIComponent(i)).replace("%s", a);
											r.delete(u, null, t)
										}
									}))
								}
							}, {
								key: "deleteAllMetaData",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl,
										s = e.isOpenChannel;
									this.sb.ConnectionManager.ready((function(e, a) {
										if (e) t(e, null);
										else {
											var o = s ? n.Path.OPENCHANNELS_CHANNELURL_METADATA.replace("%s", encodeURIComponent(i)) : n.Path.GROUPCHANNELS_CHANNELURL_METADATA.replace("%s", encodeURIComponent(i));
											r.delete(o, null, t)
										}
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
									this.sb.ConnectionManager.ready((function(e, u) {
										if (e) t(e, null);
										else {
											var l = s ? n.Path.OPENCHANNELS_OPERATORS.replace("%s", encodeURIComponent(i)) : n.Path.GROUPCHANNELS_OPERATORS.replace("%s", encodeURIComponent(i)),
												c = new F({
													token: a,
													limit: o
												});
											r.get(l, c, t)
										}
									}))
								}
							}, {
								key: "getOpenChannel",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl,
										s = e.internalCall;
									this.sb.ConnectionManager.ready((function(e, a) {
										if (e) t(e, null);
										else {
											var o = n.Path.OPENCHANNELS_CHANNELURL.replace("%s", encodeURIComponent(i)),
												u = new F({});
											u.internal = s === A.INTERNAL_CALL, r.get(o, u, t)
										}
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
										u = e.customTypes,
										l = e.includeFrozen;
									this.sb.ConnectionManager.ready((function(e, c) {
										if (e) t(e, null);
										else {
											var d = n.Path.OPENCHANNELS,
												h = new F({
													token: i,
													limit: s
												});
											a && h.add("name_contains", a), o && h.add("url_contains", o), u && 0 < u.length && h.add("custom_types", u), "boolean" == typeof l && h.add("show_frozen", l), r.get(d, h, t)
										}
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
										if (e) t(e, null);
										else {
											var u = n.Path.OPENCHANNELS_CHANNELURL_PARTICIPANTS.replace("%s", encodeURIComponent(a)),
												l = new F({
													token: i,
													limit: s
												});
											r.get(u, l, t)
										}
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
										u = e.customType;
									this.sb.ConnectionManager.ready((function(e, l) {
										if (e) t(e, null);
										else {
											var c = n.Path.OPENCHANNELS,
												d = new F;
											"string" == typeof s && d.add("cover_url", s), H.isFile(s) && d.add("cover_file", s), null !== i && "string" == typeof i && d.add("name", i), a && d.add("data", a), o && (Array.isArray(o) ? d.add("operators", o) : d.add("operators", [o])), u && d.add("custom_type", u), r.post(c, d, t)
										}
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
										u = e.operatorUserIds,
										l = e.customType;
									this.sb.ConnectionManager.ready((function(e, c) {
										if (e) t(e, null);
										else {
											var d = n.Path.OPENCHANNELS_CHANNELURL.replace("%s", encodeURIComponent(i)),
												h = new F;
											"string" == typeof a && h.add("cover_url", a), H.isFile(a) && h.add("cover_file", a, a.name), null !== s && "string" == typeof s && h.add("name", s), null !== o && "string" == typeof o && h.add("data", o), null !== u && (Array.isArray(u) ? h.add("operator_ids", u) : h.add("operator_ids", [u])), null !== l && "string" == typeof l && h.add("custom_type", l), r.put(d, h, t)
										}
									}))
								}
							}, {
								key: "deleteOpenChannel",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl;
									this.sb.ConnectionManager.ready((function(e, s) {
										if (e) t(e, null);
										else {
											var a = n.Path.OPENCHANNELS_CHANNELURL.replace("%s", encodeURIComponent(i));
											r.delete(a, null, t)
										}
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
										if (e) t(e, null);
										else {
											var u = n.Path.GROUPCHANNELS_CHANNELURL.replace("%s", encodeURIComponent(i)),
												l = new F({
													show_member: s,
													show_read_receipt: !0,
													show_delivery_receipt: !0
												});
											l.internal = a === A.INTERNAL_CALL, r.get(u, l, t)
										}
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
										u = e.userIdsFilter,
										l = e.nicknameContainsFilter,
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
										C = e.searchFilter,
										E = e.includeFrozen;
									this.sb.ConnectionManager.ready((function(e, b) {
										if (e) t(e, null);
										else {
											var U = n.Path.MYGROUPCHANNELS.replace("%s", encodeURIComponent(b.userId)),
												A = new F({
													token: i,
													limit: s,
													order: o,
													show_member: !0,
													show_read_receipt: !0,
													show_delivery_receipt: !0,
													show_empty: String(a),
													member_state_filter: f
												});
											h && 0 < h.length && A.add("custom_types", h), l && A.add("members_nickname_contains", l), c && A.add("name_contains", c), C.hasOwnProperty("search_query") && C.hasOwnProperty("search_fields") && (A.add("search_query", C.search_query), A.add("search_fields", C.search_fields)), u.userIds && 0 < u.userIds.length && (u.includeMode ? (A.add("members_include_in", u.userIds), A.add("query_type", u.queryType.toUpperCase())) : A.add("members_exactly_in", u.userIds)), d && 0 < d.length && A.add("channel_urls", d), A.add("super_mode", _), A.add("public_mode", g), A.add("unread_filter", y), m && A.add("metadata_order_key", m), p && A.add("custom_type_startswith", p), v && A.add("hidden_mode", v), "boolean" == typeof E && A.add("show_frozen", E), r.get(U, A, t)
										}
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
										u = e.channelNameContainsFilter,
										l = e.channelUrlsFilter,
										c = e.customTypesFilter,
										d = e.customTypeStartsWithFilter,
										h = e.superChannelFilter,
										p = e.membershipFilter,
										f = e.metadataOrderKeyFilter,
										_ = e.includeFrozen;
									this.sb.ConnectionManager.ready((function(e, g) {
										if (e) t(e, null);
										else {
											var y = r.cls.GroupChannel,
												m = n.Path.GROUPCHANNELS,
												v = new F({
													token: i,
													limit: s,
													order: o,
													show_member: !0,
													show_read_receipt: !0,
													show_delivery_receipt: !0,
													show_empty: String(a),
													public_mode: y.PublicChannelFilter.PUBLIC,
													public_membership_mode: p
												});
											c && 0 < c.length && v.add("custom_types", c), u && v.add("name_contains", u), l && 0 < l.length && v.add("channel_urls", l), v.add("super_mode", h), f && v.add("metadata_order_key", f), d && v.add("custom_type_startswith", d), "boolean" == typeof _ && v.add("show_frozen", _), r.get(m, v, t)
										}
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
										u = e.channelUrl,
										l = e.isDiscoverable,
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
										C = e.operatorUserIds,
										b = e.messageSurvivalSeconds;
									this.sb.ConnectionManager.ready((function(e, m) {
										if (e) t(e, null);
										else {
											var U = n.Path.GROUPCHANNELS,
												A = new F({
													user_ids: [m.userId].concat(E(v)).filter((function(e, n, t) {
														return n === t.indexOf(e)
													}))
												});
											null !== f && "string" == typeof f && A.add("cover_url", f), H.isFile(_) && A.add("cover_file", _, _.name), null !== u && A.add("channel_url", u), null !== i && A.add("is_distinct", i), null !== s && A.add("is_super", s), null !== a && A.add("is_broadcast", a), null !== o && A.add("is_public", o), null !== l && A.add("is_discoverable", l), null !== c && A.add("strict", c), null !== y && A.add("is_ephemeral", y), g && A.add("access_code", g), null !== d && "string" == typeof d && A.add("name", d), h && A.add("data", h), p && A.add("custom_type", p), Array.isArray(C) && 0 < C.length && A.add("operator_ids", C), null !== b && -1 < b && A.add("message_survival_seconds", b), r.post(U, A, t)
										}
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
										u = e.name,
										l = e.data,
										c = e.customType,
										d = e.coverUrl,
										h = e.coverImage,
										p = e.accessCode,
										f = e.operatorUserIds,
										_ = e.messageSurvivalSeconds;
									this.sb.ConnectionManager.ready((function(e, g) {
										if (e) t(e, null);
										else {
											var y = n.Path.GROUPCHANNELS_CHANNELURL.replace("%s", encodeURIComponent(a)),
												m = new F;
											null !== i && m.add("is_distinct", i), null !== s && m.add("is_public", s), null !== o && m.add("is_discoverable", o), null !== p && m.add("access_code", p), null !== d && "string" == typeof d && m.add("cover_url", d), H.isFile(h) && m.add("cover_file", h, h.name), null !== u && "string" == typeof u && m.add("name", u), null !== l && "string" == typeof l && m.add("data", l), null !== c && "string" == typeof c && m.add("custom_type", c), null !== f && (Array.isArray(f) ? m.add("operator_ids", f) : f && m.add("operator_ids", [f])), null !== _ && -1 < _ && m.add("message_survival_seconds", _), r.put(y, m, t)
										}
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
										if (!e) {
											var u = (a ? n.Path.OPENCHANNELS_CHANNELURL_OPERATORS : n.Path.GROUPCHANNELS_CHANNELURL_OPERATORS).replace("%s", encodeURIComponent(i)),
												l = new F({
													operator_ids: o
												});
											r.post(u, l, t)
										}
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
										if (!e) {
											var u = (a ? n.Path.OPENCHANNELS_CHANNELURL_OPERATORS : n.Path.GROUPCHANNELS_CHANNELURL_OPERATORS).replace("%s", encodeURIComponent(i)),
												l = new F({
													operator_ids: o
												});
											r.delete(u, l, t)
										}
									}))
								}
							}, {
								key: "inviteToGroupChannel",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl,
										s = e.userIds;
									this.sb.ConnectionManager.ready((function(e, a) {
										if (e) t(e, null);
										else {
											var o = n.Path.GROUPCHANNELS_CHANNELURL_INVITE.replace("%s", encodeURIComponent(i)),
												u = new F({
													user_ids: s
												});
											r.post(o, u, t)
										}
									}))
								}
							}, {
								key: "acceptInvitation",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl,
										s = e.accessCode;
									this.sb.ConnectionManager.ready((function(e, a) {
										if (e) t(e, null);
										else {
											var o = n.Path.GROUPCHANNELS_CHANNELURL_ACCEPT_INVITATION.replace("%s", encodeURIComponent(i)),
												u = new F({
													user_id: a.userId
												});
											s && u.add("access_code", s), r.put(o, u, t)
										}
									}))
								}
							}, {
								key: "declineInvitation",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl;
									this.sb.ConnectionManager.ready((function(e, s) {
										if (e) t(e, null);
										else {
											var a = n.Path.GROUPCHANNELS_CHANNELURL_DECLINE_INVITATION.replace("%s", encodeURIComponent(i)),
												o = new F({
													user_id: s.userId
												});
											r.put(a, o, t)
										}
									}))
								}
							}, {
								key: "joinGroupChannel",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl,
										s = e.accessCode;
									this.sb.ConnectionManager.ready((function(e, a) {
										if (e) t(e, null);
										else {
											var o = n.Path.GROUPCHANNELS_CHANNELURL_JOIN.replace("%s", encodeURIComponent(i)),
												u = new F({
													user_id: a.userId
												});
											s && u.add("access_code", s), r.put(o, u, t)
										}
									}))
								}
							}, {
								key: "leaveGroupChannel",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl;
									this.sb.ConnectionManager.ready((function(e, s) {
										if (e) t(e, null);
										else {
											var a = n.Path.GROUPCHANNELS_CHANNELURL_LEAVE.replace("%s", encodeURIComponent(i)),
												o = new F({
													user_id: s.userId
												});
											r.put(a, o, t)
										}
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
										if (e) t(e, null);
										else {
											var u = n.Path.GROUPCHANNELS_CHANNELURL_HIDE.replace("%s", encodeURIComponent(i)),
												l = new F({
													user_id: o.userId,
													hide_previous_messages: s,
													allow_auto_unhide: a
												});
											r.put(u, l, t)
										}
									}))
								}
							}, {
								key: "unhideGroupChannel",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl;
									this.sb.ConnectionManager.ready((function(e, s) {
										if (e) t(e, null);
										else {
											var a = n.Path.GROUPCHANNELS_CHANNELURL_HIDE.replace("%s", encodeURIComponent(i));
											r.delete(a, null, t)
										}
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
										if (e) t(e, null);
										else {
											var u = s ? n.Path.GROUPCHANNELS_CHANNELURL_FREEZE.replace("%s", encodeURIComponent(i)) : n.Path.OPENCHANNELS_CHANNELURL_FREEZE.replace("%s", encodeURIComponent(i)),
												l = new F({
													freeze: a
												});
											r.put(u, l, t)
										}
									}))
								}
							}, {
								key: "deleteGroupChannel",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl;
									this.sb.ConnectionManager.ready((function(e, s) {
										if (e) t(e, null);
										else {
											var a = n.Path.GROUPCHANNELS_CHANNELURL.replace("%s", encodeURIComponent(i));
											r.delete(a, null, t)
										}
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
										u = e.order,
										l = e.memberStateFilter,
										c = e.nicknameStartsWithFilter;
									this.sb.ConnectionManager.ready((function(e, d) {
										if (e) t(e, null);
										else {
											var h = n.Path.GROUPCHANNELS_MEMBERS.replace("%s", encodeURIComponent(i)),
												p = new F({
													token: s,
													limit: a,
													order: u.toLowerCase(),
													muted_member_filter: o.toLowerCase(),
													member_state_filter: l,
													show_read_receipt: !0,
													show_delivery_receipt: !0
												});
											c && p.add("nickname_startswith", c), r.get(h, p, t)
										}
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
										u = e.reportDescription;
									this.sb.ConnectionManager.ready((function(e, l) {
										if (e) t(e, null);
										else {
											var c = n.Path.REPORT_CHANNELS.replace("%s", encodeURIComponent(s ? "open_channels" : "group_channels")).replace("%s", encodeURIComponent(i)),
												d = new F({
													report_category: a
												});
											null != o && d.add("reporting_user_id", o), null != u && d.add("report_description", u), r.post(c, d, t)
										}
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
										u = e.reportingUserId,
										l = e.reportDescription;
									this.sb.ConnectionManager.ready((function(e, c) {
										if (e) t(e, null);
										else {
											var d = n.Path.REPORT_USERS.replace("%s", encodeURIComponent(i)),
												h = new F({
													channel_url: s,
													channel_type: a ? "open_channels" : "group_channels",
													report_category: o
												});
											null != u && h.add("reporting_user_id", u), null != l && h.add("report_description", l), r.post(d, h, t)
										}
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
										u = e.reportingUserId,
										l = e.reportDescription,
										c = e.offendingUserId;
									this.sb.ConnectionManager.ready((function(e, d) {
										if (e) t(e, null);
										else {
											var h = n.Path.REPORT_MESSAGES.replace("%s", encodeURIComponent(s ? "open_channels" : "group_channels")).replace("%s", encodeURIComponent(i)).replace("%s", encodeURIComponent(a)),
												p = new F({
													report_category: o,
													offending_user_id: c
												});
											null != u && p.add("reporting_user_id", u), null != l && p.add("report_description", l), r.post(h, p, t)
										}
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
										u = e.customType,
										l = e.translationTargetLanguages,
										c = e.metaArrays,
										d = e.mentionType,
										h = e.mentionedUserIds,
										p = e.pushNotificationDeliveryOption,
										f = e.rootMessageId,
										_ = e.parentMessageId;
									this.sb.ConnectionManager.ready((function(e, g) {
										if (e) t(e, null);
										else {
											var y = r.cls.FileMessageParams,
												m = s ? n.Path.OPENCHANNELS_CHANNELURL_MESSAGES.replace("%s", encodeURIComponent(i)) : n.Path.GROUPCHANNELS_CHANNELURL_MESSAGES.replace("%s", encodeURIComponent(i)),
												v = new F({
													message_type: "MESG",
													user_id: g.userId,
													message: a,
													mention_type: d,
													mentioned_user_ids: []
												});
											null != o && v.add("data", o), null != u && v.add("custom_type", u), l && v.add("translation_target_langs", l), c && 0 < c.length && v.add("sorted_metaarray", c.map((function(e) {
												return e.encode()
											}))), d === r.cls.BaseMessageParams.MentionType.CHANNEL ? v.add("mentioned_user_ids", []) : Array.isArray(h) && 0 < h.length && v.add("mentioned_user_ids", h), p && p !== y.PushNotificationDeliveryOption.DEFAULT && v.add("push_option", p), f && v.add("root_message_id", f), _ && v.add("parent_message_id", _), r.post(m, v, t)
										}
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
										u = e.fileSize,
										l = e.fileType,
										c = e.data,
										d = e.customType,
										h = e.thumbnailSizes,
										p = e.requireAuth,
										f = e.metaArrays,
										_ = e.mentionType,
										g = e.mentionedUserIds,
										y = e.pushNotificationDeliveryOption,
										m = e.rootMessageId,
										v = e.parentMessageId;
									this.sb.ConnectionManager.ready((function(e, C) {
										if (e) t(e, null);
										else {
											var E = r.cls.FileMessageParams,
												b = s ? n.Path.OPENCHANNELS_CHANNELURL_MESSAGES.replace("%s", encodeURIComponent(i)) : n.Path.GROUPCHANNELS_CHANNELURL_MESSAGES.replace("%s", encodeURIComponent(i)),
												U = new F({
													message_type: "FILE",
													user_id: C.userId,
													url: a,
													mention_type: _,
													mentioned_user_ids: []
												});
											null != o && U.add("file_name", o), null != u && U.add("file_size", u), null != l && U.add("file_type", l), null != c && U.add("custom_field", c), null != d && U.add("custom_type", d), h && U.add("thumbnails", h), p && U.add("require_auth", p), f && 0 < f.length && U.add("sorted_metaarray", f.map((function(e) {
												return e.encode()
											}))), _ === r.cls.BaseMessageParams.MentionType.CHANNEL ? U.add("mentioned_user_ids", []) : Array.isArray(g) && 0 < g.length && U.add("mentioned_user_ids", g), y && y !== E.PushNotificationDeliveryOption.DEFAULT && U.add("push_option", y), m && U.add("root_message_id", m), v && U.add("parent_message_id", v), r.post(b, U, t)
										}
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
										u = e.reqId;
									this.sb.ConnectionManager.ready((function(e, l) {
										if (e) t(e, null);
										else {
											var c = n.Path.STORAGE_FILE,
												d = new F;
											if (d.add("file", i, i.name), a && "string" == typeof a && d.add("channel_url", a), s)
												for (var h = 0; h < s.length; h++) d.add("thumbnail" + (h + 1), s[h].maxWidth + "," + s[h].maxHeight);
											d.upload.reqId = u, d.upload.deleteRequest = function() {
												var e = r.cls.FileMessageQueue;
												e.uploadRequest[u] && delete e.uploadRequest[u]
											}, d.upload.progressHandler = function(e) {
												o && "function" == typeof o && o(e, u)
											}, r.post(c, d, t)
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
										if (e) t(e, null);
										else {
											var u = a ? n.Path.OPENCHANNELS_CHANNELURL_SCHEDULED_MESSAGES.replace("%s", encodeURIComponent(s)) : n.Path.GROUPCHANNELS_CHANNELURL_SCHEDULED_MESSAGES.replace("%s", encodeURIComponent(s)),
												l = new F({
													scheduled_dt: i._getScheduleString(),
													user_id: o.userId,
													message: i.message,
													data: i.data
												});
											i.customType && l.add("custom_type", i.customType), i.metaArrayKeys && 0 < Object.keys(i.metaArrayKeys).length && l.add("metaarray", i.metaArrayKeys), i.mentionType && l.add("mention_type", i._mentionType), i._mentionType === r.cls.BaseMessageParams.MentionType.CHANNEL ? l.add("mentioned_user_ids", []) : Array.isArray(i._mentionedUserIds) && 0 < i._mentionedUserIds.length && l.add("mentioned_user_ids", i._mentionedUserIds), i.translationTargetLanguages && 0 < i.translationTargetLanguages.length && l.add("translation_target_langs", i.translationTargetLanguages), i.pushNotificationDeliveryOption && i.pushNotificationDeliveryOption !== r.cls.BaseMessageParams.PushNotificationDeliveryOption.DEFAULT && l.add("push_option", i.pushNotificationDeliveryOption), r.post(u, l, t)
										}
									}))
								}
							}, {
								key: "getMyPushTriggerOption",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl;
									this.sb.ConnectionManager.ready((function(e, s) {
										if (e) t(e, null);
										else {
											var a = n.Path.USERS_USERID_PUSHPREFERENCE_CHANNELURL.replace("%s", encodeURIComponent(s.userId)).replace("%s", encodeURIComponent(i));
											r.get(a, null, t)
										}
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
										if (e) t(e, null);
										else {
											var u = n.Path.USERS_USERID_PUSHPREFERENCE_CHANNELURL.replace("%s", encodeURIComponent(o.userId)).replace("%s", encodeURIComponent(i)),
												l = new F;
											s && l.add("push_trigger_option", s), "boolean" == typeof a && l.add("enable", a), r.put(u, l, t)
										}
									}))
								}
							}, {
								key: "setMyCountPreference",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl,
										s = e.countPreference;
									this.sb.ConnectionManager.ready((function(e, a) {
										if (e) t(e, null);
										else {
											var o = n.Path.USERS_COUNT_PREFERENCE.replace("%s", encodeURIComponent(a.userId)).replace("%s", encodeURIComponent(i)),
												u = new F({
													count_preference: s
												});
											r.put(o, u, t)
										}
									}))
								}
							}, {
								key: "resetMyHistory",
								value: function(e, t) {
									var r = this,
										i = e.channelUrl;
									this.sb.ConnectionManager.ready((function(e, s) {
										if (e) t(e, null);
										else {
											var a = n.Path.GROUPCHANNELS_RESET_USER_HISTORY.replace("%s", encodeURIComponent(i));
											r.put(a, null, t)
										}
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
									this.sb.ConnectionManager.ready((function(e, u) {
										if (e) t(e, null);
										else {
											var l = i ? n.Path.GROUPCHANNELS_CHANNELURL_MESSAGES_MESSAGEID_REACTION.replace("%s", encodeURIComponent(s)).replace("%s", encodeURIComponent(a)) : n.Path.OPENCHANNELS_CHANNELURL_MESSAGES_MESSAGEID_REACTION.replace("%s", encodeURIComponent(s)).replace("%s", encodeURIComponent(a)),
												c = new F({
													reaction: o
												});
											r.post(l, c, t)
										}
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
									this.sb.ConnectionManager.ready((function(e, u) {
										if (e) t(e, null);
										else {
											var l = i ? n.Path.GROUPCHANNELS_CHANNELURL_MESSAGES_MESSAGEID_REACTION.replace("%s", encodeURIComponent(s)).replace("%s", encodeURIComponent(a)) : n.Path.OPENCHANNELS_CHANNELURL_MESSAGES_MESSAGEID_REACTION.replace("%s", encodeURIComponent(s)).replace("%s", encodeURIComponent(a)),
												c = new F({
													reaction: o
												});
											r.delete(l, c, t)
										}
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
										if (e) t(e, null);
										else {
											var a = n.Path.EMOJI_CATEGORIES_CATEGORYID.replace("%s", i);
											r.get(a, null, t)
										}
									}))
								}
							}, {
								key: "getEmoji",
								value: function(e, t) {
									var r = this,
										i = e.emojiKey;
									this.sb.ConnectionManager.ready((function(e, s) {
										if (e) t(e, null);
										else {
											var a = n.Path.EMOJIS_EMOJIKEY.replace("%s", i);
											r.get(a, null, t)
										}
									}))
								}
							}], [{
								key: "Path",
								get: function() {
									return {
										USERS: "/users",
										USERS_USERID: "/users/%s",
										USERS_USERID_LOGIN: "/users/%s/login",
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
						z = function() {
							function e(n, t) {
								a(this, e), this.sb = n, this.ws = null, this.wsHost = null, this.WebSocket = null, this.handler = t || new e.ConnectionHandler, this.explicitDisconnect = !1, this.lastActiveMillis = 0;
								try {
									this.WebSocket = "undefined" == typeof WebSocket ? i : WebSocket
								} catch (n) {
									this.WebSocket = WebSocket
								}
							}
							return u(e, [{
								key: "connect",
								value: function(e, n, t) {
									var r = this;
									O.debug("WSClient connect called");
									var i = I.get(this.sb._iid).container,
										s = i.pinger,
										a = i.auth,
										o = i.extensions,
										u = i.getUserAgentWithExtensions;
									this.wsHost = t;
									try {
										var l = "/?p=JS&pv=" + encodeURIComponent(A.OS_VERSION) + "&sv=" + encodeURIComponent(A.SDK_VERSION) + "&ai=" + encodeURIComponent(this.sb.getApplicationId());
										if (a.sessionKey ? l += "&key=" + encodeURIComponent(a.sessionKey) : l += "&user_id=" + encodeURIComponent(e) + "&access_token=" + encodeURIComponent(n), l += "&active=1", l += "&SB-User-Agent=" + encodeURIComponent(u(o)), l += "&Request-Sent-Timestamp=" + (new Date).getTime().toString(), l += "&include_extra_data=" + encodeURIComponent(["premium_feature_list", "file_upload_size_limit", "emoji_hash"].join(",")), this.ws = new this.WebSocket(this.wsHost + l), !this.ws) return this.sb.isReconnectingOnError = !0, void this.handler.onError("ws does not exist.")
									} catch (e) {
										return this.sb.isReconnectingOnError = !0, void this.handler.onError(e)
									}
									try {
										this.sb.getDebugMode() && "undefined" != typeof window && (window.ws = this.ws)
									} catch (e) {
										O.debug("window object does not exist.")
									}
									var c = !1;
									this.ws.onopen = function(e) {
										O.debug("WSClient onopen called"), r.handler.onOpen(e)
									}, this.ws.onmessage = function(e) {
										r.active();
										var n = e.data.split("\n");
										for (var t in n) {
											var i = n[t];
											if (i && "string" == typeof i) {
												try {
													if ("PONG" === i.substring(0, 4)) {
														s.pong();
														continue
													}
												} catch (e) {
													O.debug("ws.onmessage-command check error: ", e)
												}
												r.handler.onMessage(i)
											}
										}
									}, this.ws.onerror = function(e) {
										O.debug("WSClient ws.onerror called: ", e), s && s.stop(), c = !0, r.sb.isReconnectingOnError = !0, r.handler.onError(e)
									}, this.ws.onclose = function(e) {
										O.debug("WSClient ws.onclose called - e, explicitDisconnect: ", e, r.explicitDisconnect), s && s.stop(), r.explicitDisconnect ? r.handler.onClose(e) : c || r.handler.onError(e), r.explicitDisconnect = !1
									}
								}
							}, {
								key: "disconnect",
								value: function(e, n) {
									O.debug("WSClient disconnect called [explicit]: ", e);
									var t = I.get(this.sb._iid).container.pinger;
									t && t.stop(), this.explicitDisconnect = !0 === e, this.ws && (this.ws.onopen = function() {}, this.ws.onmessage = function() {}, this.ws.onclose = function() {
										n && n()
									}, this.ws.onerror = function() {}, this.ws.close(), this.ws = null), this.explicitDisconnect ? this.handler.onClose() : this.handler.onError(), this.explicitDisconnect = !1
								}
							}, {
								key: "send",
								value: function(e, n) {
									1 !== this.ws.readyState ? n && n(new N("Connection is not valid. Please reconnect.", N.WEBSOCKET_CONNECTION_CLOSED), null) : (this.ws.send(e.encode()), n && n(null, null))
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
									} catch (T) {
										return this.sb.ConnectionState.CLOSED
									}
								}
							}]), e
						}();
					z.ConnectionHandler = function e() {
						a(this, e), this.onReady = function() {}, this.onOpen = function() {}, this.onClose = function() {}, this.onMessage = function() {}, this.onError = function() {}
					}, Number.MAX_SAFE_INTEGER || Object.defineProperty(Number, "MAX_SAFE_INTEGER", {
						value: Math.pow(2, 53) - 1
					});
					var B = function() {
							function e(n) {
								a(this, e), this.sb = n, this.cls = L.get(this.sb._iid), this.ws = new z(this.sb), this.reconnectParams = {
									interval: 3,
									retryCount: 3,
									multiplier: 2,
									maxInterval: 24
								}, this.reconnectCount = 0, this.reconnectDelay = 0
							}
							return u(e, [{
								key: "connect",
								value: function(e, n) {
									var t = this,
										r = I.get(this.sb._iid).container,
										i = r.auth,
										s = r.apiClient,
										a = r.commandHandler,
										o = this.cls.GroupChannel,
										u = new z.ConnectionHandler;
									this.ws = new z(this.sb, u), u.onMessage = function(e) {
										a.onRawCommandReceived(e)
									}, this.sb.loginHandler = function(e, n) {
										if (t.sb.connecting = !1, e) t.disconnect({
											clearSession: !0,
											err: e
										}, null);
										else {
											clearInterval(t.sb.globalTimer);
											var r = function() {
												if (o.cachedChannels)
													for (var e in o.cachedChannels) {
														var n = o.cachedChannels[e];
														if (n.invalidateTypingStatus())
															for (var r in t.sb.channelHandlers) t.sb.channelHandlers[r].onTypingStatusUpdated(n)
													}
											};
											r(), t.sb.globalTimer = setInterval((function() {
												return r()
											}), 1e3), t.flushConnectionCallbacks(null, n), t.sb.connecting = !1, t.sb.reconnecting = !1, t.sb.ConnectionManager.processAllReadyHandler(null)
										}
									}, u.onOpen = function() {
										t.sb.loginTimer = setTimeout((function() {
											t.sb.loginTimer = null, t.sb.onLoginTimerCancel = null, t.flushConnectionCallbacks(new N("Connection timeout.", N.LOGIN_TIMEOUT), null), t.sb.disconnect(null)
										}), A.COMMAND_ACK_TIMEOUT), t.sb.onLoginTimerCancel = function() {
											t.flushConnectionCallbacks(new N("Connection has been canceled.", N.REQUEST_FAILED), null)
										}, t.sb.connecting = !1
									}, u.onError = function(n) {
										O.debug("WebSocketClient.ConnectionHandler.onError", n), i.sessionKey ? (t.sb.isReconnectingOnError = !0, t.sb.ConnectionManager.errorAllReadyHandler(), t.reconnect(e, !0)) : t.flushConnectionCallbacks(new N("Websocket connection failed.", N.WEBSOCKET_CONNECTION_FAILED), null), t.sb.connecting = !1
									}, u.onClose = function() {
										O.debug("WebSocketClient.ConnectionHandler.onClose"), t.sb.connecting = !1
									}, s.checkRouting((function(r, i) {
										if (r) return t.sb.connecting = !1, void t.flushConnectionCallbacks(new N("Connection routing failed.", N.REQUEST_FAILED), null);
										s.dummyCall((function(e) {
											e && O.log("API dummy call failed", e)
										})), t.ws.connect(e, n, i.wsHost)
									}))
								}
							}, {
								key: "reconnect",
								value: function(e, n) {
									var t = this,
										r = !(1 < arguments.length && void 0 !== n) || n,
										i = I.get(this.sb._iid).container,
										s = i.auth,
										a = i.apiClient,
										o = i.commandHandler,
										u = this.cls.OpenChannel;
									if (this.sb.reconnecting = !0, this.sb.reconnectTimer) O.debug("still reconnecting");
									else {
										if (this.reconnectCount += 1, this.reconnectCount <= 1) {
											if (r)
												for (var l in this.sb.connectionHandlers) this.sb.connectionHandlers[l].onReconnectStarted();
											this.reconnectDelay = 0
										} else this.reconnectDelay = Math.min(1e3 * this.reconnectParams.interval * Math.pow(this.reconnectParams.multiplier, this.reconnectCount - 2), 0 < this.reconnectParams.maxInterval ? 1e3 * this.reconnectParams.maxInterval : Number.MAX_SAFE_INTEGER);
										if (!e || !s.sessionKey || 0 < this.reconnectParams.retryCount && this.reconnectCount > this.reconnectParams.retryCount) {
											for (var c in this.disconnect({
													clearSession: !1,
													err: new N("Websocket connection failed.", N.WEBSOCKET_CONNECTION_FAILED)
												}, null), this.reconnectCount = 0, this.sb.connectionHandlers) this.sb.connectionHandlers[c].onReconnectFailed();
											return this.sb.connecting = !1, this.sb.reconnecting = !1, this.sb.isReconnectingOnError = !1, void this.sb.ConnectionManager.errorAllReadyHandler()
										}
										this.sb.onReconnectTimerCancel = function() {
											t.reconnectCount = 0
										}, this.sb.reconnectTimer = setTimeout((function() {
											t.sb.reconnectTimer = null, t.sb.onReconnectTimerCancel = null, t.ws && t.ws.disconnect(!0);
											var n = new z.ConnectionHandler;
											t.ws = new z(t.sb, n), t.sb.loginHandler = function() {
												for (var e in t.reconnectCount = 0, t.sb.connecting = !1, t.sb.reconnecting = !1, t.sb.isReconnectingOnError = !1, t.sb.connectionHandlers) t.sb.connectionHandlers[e].onReconnectSucceeded();
												if (t.sb.ConnectionManager.processAllReadyHandler(null), t.sb.isReconnectingOnError)
													for (var n in t.sb.ConnectionManager.networkHandlers) t.sb.ConnectionManager.networkHandlers[n].onReconnected();
												Object.keys(u.enteredChannels).forEach((function(e) {
													u.enteredChannels[e].enter((function(n, r) {
														if (n) {
															var i = t.cls.FileMessageQueue;
															delete u.enteredChannels[e], i.delete(e)
														}
													}))
												}))
											}, n.onOpen = function() {
												O.debug("reconnect onOpen"), t.sb.loginTimer = setTimeout((function() {
													O.debug("reconnect loginTimer timeout"), t.sb.loginTimer = null, t.reconnect(e, !0)
												}), A.COMMAND_ACK_TIMEOUT), t.sb.onLoginTimerCancel = null, t.sb.reconnecting = !1
											}, n.onMessage = function(e) {
												o.onRawCommandReceived(e)
											}, n.onError = function(n) {
												O.debug("reconnect onError", n), t.sb.isReconnectingOnError = !0, t.sb.ConnectionManager.errorAllReadyHandler(), t.reconnect(e, !0)
											}, n.onClose = function() {
												O.debug("reconnect onClose"), t.sb.reconnecting = !1
											}, a.checkRouting((function(n, r) {
												n ? t.reconnect(e, !0) : (t.sb.getCurrentApiHost() !== r.apiHost && a.get("/", null, (function() {})), t.ws.connect(e, null, r.wsHost))
											}))
										}), this.reconnectDelay)
									}
								}
							}, {
								key: "disconnect",
								value: function(e, n) {
									var t = I.get(this.sb._iid),
										r = t.container.ackStateMap,
										i = this.cls,
										s = i.GroupChannel,
										a = i.OpenChannel,
										o = e.clearSession,
										u = e.err;
									if (this.sb.loginTimer && (clearTimeout(this.sb.loginTimer), this.sb.onLoginTimerCancel && (this.sb.onLoginTimerCancel(), this.sb.onLoginTimerCancel = null), this.sb.loginTimer = null), this.sb.reconnectTimer && (clearTimeout(this.sb.reconnectTimer), this.sb.onReconnectTimerCancel && (this.sb.onReconnectTimerCancel(), this.sb.onReconnectTimerCancel = null), this.sb.reconnectTimer = null), this.ws && (this.reconnectCount = 0, this.ws.disconnect(!0), this.ws = null), o) {
										for (var l in a.clearEnteredChannels(), a.clearCache(), s.clearCache(), this.sb.globalTimer && (clearInterval(this.sb.globalTimer), this.sb.globalTimer = null), r) clearTimeout(r[l].timer);
										this.sb.currentUser = null, t.set("ackStateMap", {}), t.set("subscribedUnreadMessageCount", {
											all: 0,
											custom_types: {},
											ts: 0
										}), t.set("auth", new R)
									}
									u && (this.flushConnectionCallbacks(u, null), this.sb.connecting = !1, this.sb.reconnecting = !1, this.sb.isReconnectingOnError = !1), n && n(null, null)
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
						q = function() {
							function e(n) {
								var t = n.type,
									r = n.nullable,
									i = void 0 !== r && r,
									s = n.optional,
									o = void 0 !== s && s,
									u = n.optionalIf,
									l = void 0 === u ? null : u,
									c = n.ignoreIf,
									d = void 0 === c ? null : c,
									h = n.defaultValue,
									p = void 0 === h ? null : h,
									f = n.constraint,
									_ = void 0 === f ? null : f;
								a(this, e), this.type = t, this.nullable = i, this.optional = o, this.optionalIf = l, this.ignoreIf = d, this.defaultValue = p, this.constraint = _
							}
							return u(e, [{
								key: "isMatchingType",
								value: function(e) {
									function n(n, t) {
										return "string" == typeof t ? s(n) === t || "array" === t && Array.isArray(n) || "file" === t && H.isFile(n) || "null" === t && null === n || "date" === t && n instanceof Date : "function" == typeof t ? n instanceof t : "object" === s(t) && -1 < Object.keys(t).map((function(e) {
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
									for (n = e.toArray(n); void 0 === n[n.length - 1];) n.pop();
									var r = !1,
										i = null;
									"callback" === t[t.length - 1].type && ("function" == typeof n[n.length - 1] && (i = n.pop()), t.pop(), r = !0);
									var s = [],
										a = null,
										o = 0;
									for (var u in t) {
										var l = t[u];
										"function" == typeof l.ignoreIf && l.ignoreIf(n) ? s.push(l.hasOwnProperty("defaultValue") ? l.defaultValue : null) : l.isMatchingType(n[o]) ? (l.nullable && null === n[o] || !l.constraint || l.constraint(n[o]) || (a = e.error), s.push(n[o]), o++) : l.optional || "function" == typeof l.optionalIf && l.optionalIf(n) ? s.push(l.hasOwnProperty("defaultValue") ? l.defaultValue : null) : (a = e.error, s.push(n[o]), o++)
									}
									return r && i && s.push(i), n.length !== o && (a = e.error), [a].concat(s)
								}
							}, {
								key: "toArray",
								value: function(e) {
									for (var n = [], t = 0; t < e.length; t++) n.push(e[t]);
									return n
								}
							}, {
								key: "error",
								get: function() {
									return new N("Invalid parameter.", N.INVALID_PARAMETER)
								}
							}]), e
						}(),
						Q = function() {
							function e(n) {
								a(this, e), this.sb = n, this.authCount = 0, this.readyHandlers = [], this.networkHandlers = {}, this.authenticateTimer = 1e4, this.authInfoRequester = null
							}
							return u(e, [{
								key: "addReadyHandler",
								value: function(e) {
									e && "function" == typeof e && this.readyHandlers.push(e)
								}
							}, {
								key: "ready",
								value: function(e, n) {
									var t = !(1 < arguments.length && void 0 !== n) || n,
										r = I.get(this.sb._iid).container,
										i = r.auth,
										s = r.isInBackground;
									t && i.hasSession() ? e && (this.sb.currentUser ? e(null, this.sb.currentUser) : (this.addReadyHandler(e), this.errorAllReadyHandler()), this.sb.getConnectionState() !== this.sb.ConnectionState.CLOSED || s || this.sb.reconnect()) : (this.addReadyHandler(e), this.sb.isReconnectingOnError ? this.errorAllReadyHandler() : this.sb.getConnectionState() === this.sb.ConnectionState.OPEN ? this.processAllReadyHandler(null) : this.sb.getConnectionState() === this.sb.ConnectionState.CONNECTING || this.errorAllReadyHandler())
								}
							}, {
								key: "processAllReadyHandler",
								value: function(e) {
									if (0 < this.readyHandlers.length) {
										var n = this.sb.currentUser,
											t = this.readyHandlers;
										this.readyHandlers = [], t.forEach((function(t) {
											t && "function" == typeof t && t(e, n)
										}))
									}
								}
							}, {
								key: "errorAllReadyHandler",
								value: function() {
									this.processAllReadyHandler(new N("Connection should be made first.", N.CONNECTION_REQUIRED))
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
									var n = this;
									if (this.sb.getConnectionState() === this.sb.ConnectionState.OPEN || this.sb.reconnecting) this.sb.connecting = !1, e(null, this.sb.currentUser);
									else if (this.authInfoRequester && "function" == typeof this.authInfoRequester) {
										this.sb.connecting = !0, this.authCount++;
										var t = setTimeout((function() {
											t = null, n.authCount--, 0 === n.authCount && 0 === n.sb.connectionCallbacks.length && (n.sb.connecting = !1), n.errorAllReadyHandler(), e(new N("Connection should be made first.", N.CONNECTION_REQUIRED), null)
										}), this.authenticateTimer);
										this.authInfoRequester((function(r) {
											if (t) {
												clearTimeout(t), t = null, n.authCount--;
												var i = function(t) {
													n.sb.connecting = !1, e(t, null)
												};
												r && r.hasOwnProperty("userId") ? r.accessToken ? r.apiHost && r.wsHost ? n.sb.connect(r.userId, r.accessToken, r.apiHost, r.wsHost, i) : n.sb.connect(r.userId, r.accessToken, i) : r.apiHost && r.wsHost ? n.sb.connect(r.userId, r.apiHost, r.wsHost, i) : n.sb.connect(r.userId, i) : e(q.error, null)
											}
										}))
									} else e(q.error, null)
								}
							}]), e
						}(),
						Y = function() {
							function e(n) {
								a(this, e), this.sb = n
							}
							return u(e, [{
								key: "onlineWorker",
								value: function() {
									try {
										if ("undefined" != typeof navigator && navigator.onLine) {
											var e = I.get(this.sb._iid).container.auth;
											this.sb.reconnecting || this.sb.connecting || !e.sessionKey || this.sb.getConnectionState() === this.sb.ConnectionState.OPEN || this.sb.reconnect()
										}
									} catch (e) {
										O.debug("There is no window.addEventListener.ononline or navigator.onLine")
									}
								}
							}, {
								key: "offlineWorker",
								value: function() {
									try {
										if ("undefined" != typeof navigator && !navigator.onLine) {
											var e = I.get(this.sb._iid).container,
												n = e.auth,
												t = e.pinger;
											this.sb.reconnecting || this.sb.connecting || !n.sessionKey || (t && t.stop(), this.sb.reconnect())
										}
									} catch (e) {
										O.debug("There is no window.addEventListener.ononline or navigator.onLine")
									}
								}
							}, {
								key: "start",
								value: function() {
									try {
										"undefined" != typeof window && window.addEventListener && "ononline" in window && "onoffline" in window && "undefined" != typeof navigator && "boolean" == typeof navigator.onLine && (window.addEventListener("online", this.onlineWorker), window.addEventListener("offline", this.offlineWorker))
									} catch (T) {
										O.debug("There is no window.addEventListener.ononline or navigator.onLine")
									}
								}
							}, {
								key: "stop",
								value: function() {
									try {
										window.removeEventListener("online", this.onlineWorker, !1), window.removeEventListener("offline", this.offlineWorker, !1)
									} catch (T) {
										O.debug("There is no window.addEventListener.ononline or navigator.onLine")
									}
								}
							}]), e
						}(),
						K = (new Date).getTime(),
						V = function() {
							function e(n, t) {
								var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
								switch (a(this, e), this.command = n, this.requestId = r, arguments.length) {
									case 1:
										if (!n || n.length <= 4) this.command = "NOOP", this.payload = "{}";
										else if (this.decode(n), this.isRequestIdCommand) {
											var i = this.getJsonElement();
											i && (this.requestId = i.req_id || "")
										}
										break;
									case 2:
									case 3:
										!this.requestId && this.isRequestIdCommand && (this.requestId = e.generateRequestId()), t.req_id = this.requestId || "", this.payload = JSON.stringify(t)
								}
							}
							return u(e, [{
								key: "encode",
								value: function() {
									return this.command + this.payload + "\n"
								}
							}, {
								key: "decode",
								value: function(e) {
									e = e.trim(), this.command = e.substring(0, 4), this.payload = e.substring(4)
								}
							}, {
								key: "getJsonElement",
								value: function() {
									return JSON.parse(this.payload)
								}
							}, {
								key: "isRequestIdCommand",
								get: function() {
									return this.isAckRequired || "EROR" === this.command
								}
							}, {
								key: "isAckRequired",
								get: function() {
									return "MESG" === this.command || "FILE" === this.command || "ENTR" === this.command || "EXIT" === this.command || "READ" === this.command || "MEDI" === this.command || "FEDI" === this.command
								}
							}], [{
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
									var n = e.channelUrl,
										t = e.message,
										r = e.data,
										i = e.customType,
										s = e.metaArrays,
										a = e.mentionType,
										o = e.mentionedUserIds,
										u = e.translationTargetLanguages,
										l = e.pushNotificationDeliveryOption,
										c = e.requestId,
										d = void 0 === c ? null : c,
										h = e.silent,
										p = void 0 !== h && h,
										f = e.rootMessageId,
										_ = void 0 === f ? null : f,
										g = e.parentMessageId,
										y = void 0 === g ? null : g,
										m = L.get(this._iid),
										v = m.UserMessageParams,
										C = m.BaseMessageParams,
										E = {};
									return E.channel_url = n, E.message = t, E.data = r, s && 0 < s.length && (E.metaarray = s.map((function(e) {
										return e.encode()
									}))), a && (E.mention_type = a), E.mentioned_user_ids = [], a === C.MentionType.CHANNEL ? E.mentioned_user_ids = [] : Array.isArray(o) && 0 < o.length && (E.mentioned_user_ids = o), i && (E.custom_type = i), u && 0 < u.length && (E.target_langs = u), l && l !== v.PushNotificationDeliveryOption.DEFAULT && (E.push_option = l), p && (E.silent = p), _ && (E.root_message_id = _), y && (E.parent_message_id = y), new this("MESG", E, d)
								}
							}, {
								key: "bFile",
								value: function(e) {
									var n = e.channelUrl,
										t = e.url,
										r = e.name,
										i = e.type,
										s = e.size,
										a = e.data,
										o = e.customType,
										u = e.thumbnailSizes,
										l = e.requireAuth,
										c = e.metaArrays,
										d = e.mentionType,
										h = e.mentionedUserIds,
										p = e.pushNotificationDeliveryOption,
										f = e.requestId,
										_ = void 0 === f ? null : f,
										g = e.silent,
										y = void 0 !== g && g,
										m = e.rootMessageId,
										v = void 0 === m ? null : m,
										C = e.parentMessageId,
										E = void 0 === C ? null : C,
										b = L.get(this._iid),
										U = b.BaseMessageParams,
										A = b.FileMessageParams,
										S = {};
									return S.channel_url = n, S.url = t, S.name = r || "", S.type = i || "", S.size = s || 0, S.custom = a, o && (S.custom_type = o), u && (S.thumbnails = u), l && (S.require_auth = l), c && 0 < c.length && (S.metaarray = c.map((function(e) {
										return e.encode()
									}))), d && (S.mention_type = d), S.mentioned_user_ids = [], d === U.MentionType.CHANNEL ? S.mentioned_user_ids = [] : Array.isArray(h) && 0 < h.length && (S.mentioned_user_ids = h), p && p !== A.PushNotificationDeliveryOption.DEFAULT && (S.push_option = p), y && (S.silent = y), v && (S.root_message_id = v), E && (S.parent_message_id = E), new this("FILE", S, _)
								}
							}, {
								key: "bUpdateUserMessage",
								value: function(e) {
									var n = e.channelUrl,
										t = e.messageId,
										r = e.message,
										i = void 0 === r ? null : r,
										s = e.data,
										a = void 0 === s ? null : s,
										o = e.customType,
										u = void 0 === o ? null : o,
										l = e.mentionType,
										c = void 0 === l ? null : l,
										d = e.mentionedUserIds,
										h = void 0 === d ? null : d,
										p = e.metaArrayParams,
										f = void 0 === p ? null : p,
										_ = L.get(this._iid).BaseMessageParams,
										g = {};
									return g.channel_url = n, g.msg_id = t, null != i && void 0 !== i && (g.message = i), null != a && void 0 !== a && (g.data = a), null != u && void 0 !== u && (g.custom_type = u), c && (g.mention_type = c), c === _.MentionType.CHANNEL ? g.mentioned_user_ids = [] : Array.isArray(h) && 0 < h.length && (g.mentioned_user_ids = h), f && (g.metaarray = f), new this("MEDI", g)
								}
							}, {
								key: "bUpdateFileMessage",
								value: function(e) {
									var n = e.channelUrl,
										t = e.messageId,
										r = e.data,
										i = void 0 === r ? null : r,
										s = e.customType,
										a = void 0 === s ? null : s,
										o = e.mentionType,
										u = void 0 === o ? null : o,
										l = e.mentionedUserIds,
										c = void 0 === l ? null : l,
										d = e.metaArrayParams,
										h = void 0 === d ? null : d,
										p = L.get(this._iid).BaseMessageParams,
										f = {};
									return f.channel_url = n, f.msg_id = t, null != i && void 0 !== i && (f.data = i), null != a && void 0 !== a && (f.custom_type = a), u && (f.mention_type = u), u === p.MentionType.CHANNEL ? f.mentioned_user_ids = [] : Array.isArray(c) && 0 < c.length && (f.mentioned_user_ids = c), h && (f.metaarray = h), new this("FEDI", f)
								}
							}, {
								key: "bRead",
								value: function(e) {
									var n = e.channelUrl,
										t = {};
									return t.channel_url = n, new this("READ", t)
								}
							}, {
								key: "bMessageAck",
								value: function(e) {
									var n = e.channelUrl,
										t = e.messageId,
										r = {};
									return r.channel_url = n, r.msg_id = t, new this("MACK", r)
								}
							}, {
								key: "bTypeStart",
								value: function(e) {
									var n = e.channelUrl,
										t = e.time,
										r = {};
									return r.channel_url = n, r.time = t, new this("TPST", r)
								}
							}, {
								key: "bTypeEnd",
								value: function(e) {
									var n = e.channelUrl,
										t = e.time,
										r = {};
									return r.channel_url = n, r.time = t, new this("TPEN", r)
								}
							}, {
								key: "bEnter",
								value: function(e) {
									var n = e.channelUrl,
										t = {};
									return t.channel_url = n, new this("ENTR", t)
								}
							}, {
								key: "bExit",
								value: function(e) {
									var n = e.channelUrl,
										t = {};
									return t.channel_url = n, new this("EXIT", t)
								}
							}, {
								key: "generateRequestId",
								value: function() {
									return String(++K)
								}
							}]), e
						}(),
						W = new WeakMap,
						J = function() {
							function e() {
								var n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
								a(this, e);
								var t = [];
								if (n.hasOwnProperty("premium_feature_list") && Array.isArray(n.premium_feature_list)) try {
									var r = n.premium_feature_list;
									t.push.apply(t, E(r))
								} catch (n) {}
								W.set(this, {
									emojiHash: n.hasOwnProperty("emoji_hash") ? n.emoji_hash : "",
									uploadSizeLimit: n.hasOwnProperty("file_upload_size_limit") ? 1048576 * n.file_upload_size_limit : Number.MAX_VALUE,
									useReaction: n.hasOwnProperty("use_reaction") && n.use_reaction,
									premiumFeatureList: t
								})
							}
							return u(e, [{
								key: "emojiHash",
								get: function() {
									return W.get(this).emojiHash
								}
							}, {
								key: "uploadSizeLimit",
								get: function() {
									return W.get(this).uploadSizeLimit
								}
							}, {
								key: "premiumFeatureList",
								get: function() {
									return W.get(this).premiumFeatureList
								}
							}, {
								key: "isUsingReaction",
								get: function() {
									return W.get(this).useReaction
								}
							}]), e
						}(),
						Z = function() {
							function e() {
								a(this, e), this.messageId = null, this.userId = null, this.key = null, this.operation = "", this.updatedAt = null
							}
							return u(e, null, [{
								key: "createFromJson",
								value: function(e) {
									var n = e.msg_id,
										t = e.user_id,
										r = e.operation,
										i = e.reaction,
										s = e.updated_at;
									if (("string" == typeof n || "number" == typeof n) && n && "string" == typeof t && "string" == typeof r && 0 <= ["add", "delete"].indexOf(r.toLowerCase()) && "string" == typeof i && i && "number" == typeof s) {
										var a = new this;
										return a.messageId = parseInt(n), a.userId = t, a.key = i, a.operation = r.toLowerCase(), a.updatedAt = s, a
									}
									return null
								}
							}]), e
						}(),
						X = function() {
							function e() {
								a(this, e)
							}
							return u(e, null, [{
								key: "serialize",
								value: function(e, n) {
									var t = 1 < arguments.length && void 0 !== n ? n : null,
										r = JSON.parse(JSON.stringify(e));
									return t && t(r),
										function e(n) {
											return Object.keys(n).forEach((function(t) {
												n[t] && "object" === s(n[t]) && e(n[t])
											})), Object.freeze(n)
										}(r)
								}
							}, {
								key: "deserialize",
								value: function(e, n) {
									var t = 1 < arguments.length && void 0 !== n ? n : null,
										r = JSON.parse(JSON.stringify(e));
									return t && t(r), r
								}
							}]), e
						}(),
						$ = 0,
						ee = 1,
						ne = 2;

					function te(e, n, t) {
						return void 0 === t ? new Promise((function(e, t) {
							n((function(n, r) {
								return n ? t(n) : e(r)
							}))
						})) : n((function(n, r) {
							t && (I.get(e).container.isErrorFirstInCallback ? t(n, r) : t(r, n))
						}))
					}
					"undefined" == typeof Promise && (Promise = function() {
						function e(n) {
							var t = this;
							if (a(this, e), this.state = $, this._value = null, this._reason = null, "function" != typeof n) throw "Promise resolver ".concat(n, " is not a function");
							n((function(e) {
								t.state === $ && (t.state = ee, t._value = e)
							}), (function(e) {
								t.state === $ && (t.state = ne, t._reason = e)
							}))
						}
						return u(e, [{
							key: "then",
							value: function(n, t) {
								var r = this,
									i = this;
								switch (this.state) {
									case $:
										setTimeout((function() {
											return r.then(n, t)
										}), 100);
										break;
									case ee:
										n && "function" == typeof n && (i = n(this._value));
										break;
									case ne:
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
									case $:
										setTimeout((function() {
											return t.catch(n)
										}), 100);
										break;
									case ee:
										break;
									case ne:
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
									case $:
										setTimeout((function() {
											return t.finally(n)
										}), 100);
										break;
									case ee:
									case ne:
										r = n()
								}
								return r instanceof e ? r : this
							}
						}, {
							key: "length",
							get: function() {
								return 1
							}
						}], [{
							key: "all",
							value: function(n) {
								return new e((function(t, r) {
									if (Array.isArray(n) || "string" == typeof n)
										if (0 < n.length) {
											var i = [];
											for (var a in n) n[a] instanceof e ? i.push(n[a]) : i.push(e.resolve(n[a]));
											var o = new Array(i.length).fill(null),
												u = i.length,
												l = function(e, n, i) {
													n ? r(n) : (u--, o[e] = i, u <= 0 && t(o))
												};
											i.forEach((function(e, n) {
												e.then((function(e) {
													l(n, null, e)
												})).catch((function(e) {
													l(n, e, null)
												}))
											}))
										} else t([]);
									else r(new Error("Uncaught (in promise) TypeError: ".concat(s(n), " ").concat(n, " is not iterable")))
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
					}());
					var re = {
							TIMESTAMP: "timestamp",
							MESSAGE_ID: "messageId"
						},
						ie = new WeakMap,
						se = function() {
							function e(n) {
								a(this, e), this.messageId = 0, this.messageType = e.MESSAGE_TYPE_BASE, this.channelUrl = "", this.data = null, this.customType = null, this.silent = !1, this.createdAt = 0, this.updatedAt = 0, this.channelType = null, this.metaArrays = [], this.reactions = [], this.mentionType = null, this.mentionedUsers = [], ie.set(this, 0), this.parentMessageId = 0, this.parentMessageText = null, this.threadInfo = null, n && this.__update(n)
							}
							return u(e, [{
								key: "serialize",
								value: function() {
									return X.serialize(this, (function(e) {
										e.hasOwnProperty("_sender") && (e.sender = e._sender, delete e._sender)
									}))
								}
							}, {
								key: "isIdentical",
								value: function(e) {
									return !("object" !== s(e) || !e.hasOwnProperty("messageId")) && (0 !== this.messageId && 0 !== e.messageId ? this.messageId === e.messageId : this.reqId === e.reqId)
								}
							}, {
								key: "isEqual",
								value: function(e) {
									return H.deepEqual(this, e)
								}
							}, {
								key: "isOpenChannel",
								value: function() {
									var e = L.get(this._iid).BaseChannel;
									return this.channelType === e.CHANNEL_TYPE_OPEN
								}
							}, {
								key: "isGroupChannel",
								value: function() {
									var e = L.get(this._iid).BaseChannel;
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
										t = L.get(this._iid),
										r = t.User,
										i = t.BaseChannel,
										s = t.BaseMessageParams,
										a = t.Reaction,
										o = t.MessageMetaArray,
										u = t.ThreadInfo;
									e.hasOwnProperty("msg_id") && (this.messageId = parseInt(e.msg_id)), e.hasOwnProperty("message_id") && (this.messageId = parseInt(e.message_id)), this.channelUrl = e.hasOwnProperty("channel_url") ? String(e.channel_url) : "", this.data = e.hasOwnProperty("data") ? String(e.data) : "", this.customType = e.hasOwnProperty("custom_type") ? String(e.custom_type) : "", this.silent = !!e.hasOwnProperty("silent") && e.silent, this.createdAt = e.hasOwnProperty("ts") ? parseInt(e.ts) : 0, e.hasOwnProperty("created_at") && (this.createdAt = parseInt(e.created_at)), this.updatedAt = e.hasOwnProperty("updated_at") ? parseInt(e.updated_at) : 0, this.channelType = e.hasOwnProperty("channel_type") ? String(e.channel_type) : i.CHANNEL_TYPE_GROUP;
									var l = e.hasOwnProperty("metaarray") ? e.metaarray : {},
										c = e.hasOwnProperty("metaarray_key_order") ? e.metaarray_key_order : Object.keys(l).sort((function(e, n) {
											return e.localeCompare(n)
										}));
									this.metaArrays = [];
									for (var d = 0; d < c.length; d++) {
										var h = c[d];
										this.metaArrays.push(new o(h, l[h] || []))
									}
									if (e.hasOwnProperty("sorted_metaarray")) {
										var p = e.sorted_metaarray;
										Array.isArray(p) && (this.metaArrays = p.map((function(e) {
											return new o(e.key, e.value)
										})))
									}
									if (this.reactions = [], e.hasOwnProperty("reactions") && Array.isArray(e.reactions))
										for (var f in e.reactions) {
											var _ = a.createFromJson(e.reactions[f]);
											_ && this.reactions.push(_)
										}
									this.mentionType = e.hasOwnProperty("mention_type") ? e.mention_type : s.MentionType.USERS, this.mentionedUsers = [], e.hasOwnProperty("mentioned_users") && e.mentioned_users.forEach((function(e) {
										var t = new r(e);
										n.mentionedUsers.push(t)
									})), e.hasOwnProperty("root_message_id") && ie.set(this, parseInt(e.root_message_id)), e.hasOwnProperty("parent_message_id") && (this.parentMessageId = parseInt(e.parent_message_id)), e.hasOwnProperty("parent_message_text") && (this.parentMessageText = e.parent_message_text), this.threadInfo = new u(e.thread_info)
								}
							}, {
								key: "getMetaArraysByKeys",
								value: function(e) {
									return Array.isArray(e) ? this.metaArrays.filter((function(n) {
										return -1 < e.indexOf(n.key)
									})) : []
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
									var n, t = this,
										r = L.get(this._iid).Reaction,
										i = C(q.parse(arguments, [new q({
											type: Z,
											constraint: function(e) {
												return parseInt(e.messageId) === parseInt(t.messageId)
											}
										})]), 2);
									if (n = i[0], e = i[1], !n) {
										var s = !1;
										for (var a in this.reactions)
											if (this.reactions[a].key === e.key) {
												this.reactions[a]._applyEvent(e), this.reactions[a].isEmpty && this.reactions.splice(a, 1), s = !0;
												break
											} s || "add" !== e.operation || this.reactions.push(new r(e.key, [e.userId], e.updatedAt))
									}
								}
							}, {
								key: "_getThreadedMessageList",
								value: function(e, n, t, r) {
									var i, s = this,
										a = L.get(this._iid).ThreadedMessageListParams,
										o = C(q.parse(arguments, [new q({
											type: "number"
										}), new q({
											type: "string",
											constraint: function(e) {
												return Object.values(re).includes(e)
											}
										}), new q({
											type: a,
											constraint: function(e) {
												return e._validate()
											}
										}), new q({
											type: "callback"
										})]), 5);
									return i = o[0], e = o[1], n = o[2], t = o[3], r = o[4], te(this._iid, (function(r) {
										if (i) r(i, null);
										else {
											var a = L.get(s._iid),
												o = a.GroupChannel,
												u = a.OpenChannel;
											s.isGroupChannel() ? o.getChannel(s.channelUrl, A.INTERNAL_CALL, (function(i, a) {
												if (SendBird.getInstance(s._iid).getErrorFirstCallback()) {
													var o = [i, a];
													a = o[0], i = o[1]
												}
												a ? r(a, null) : I.get(s._iid).container.apiClient.getMessageList(c(c({
													channel: i,
													token: e,
													tokenType: n
												}, t), {}, {
													shouldReverse: t.reverse,
													rootMessageId: s.messageId,
													includeReplies: !0,
													includeThreadInfo: !0
												}), (function(e, n) {
													if (e) r(e, null);
													else {
														var t = L.get(s._iid).BaseChannel,
															i = n.messages.map((function(e) {
																return t.buildMessage(e, s)
															})).filter((function(e) {
																return null !== e
															})),
															a = i.filter((function(e) {
																return e.messageId === s.messageId
															}))[0],
															o = i.filter((function(e) {
																return e.parentMessageId === s.messageId
															}));
														r(null, {
															parentMessage: a,
															threadedReplies: o
														})
													}
												}))
											})) : s.isOpenChannel() && u.getChannel(s.channelUrl, A.INTERNAL_CALL, (function(i, a) {
												if (SendBird.getInstance(s._iid).getErrorFirstCallback()) {
													var o = [i, a];
													a = o[0], i = o[1]
												}
												a ? r(a, null) : I.get(s._iid).container.apiClient.getMessageList(c(c({
													channel: i,
													token: e,
													tokenType: n
												}, t), {}, {
													shouldReverse: t.reverse,
													rootMessageId: s.messageId,
													includeReplies: !0,
													includeThreadInfo: !0
												}), (function(e, n) {
													if (e) r(e, null);
													else {
														var t = L.get(s._iid).BaseChannel,
															i = n.messages.map((function(e) {
																return t.buildMessage(e, s)
															})).filter((function(e) {
																return null !== e
															})),
															a = i.filter((function(e) {
																return e.messageId === s.messageId
															}))[0],
															o = i.filter((function(e) {
																return e.parentMessageId === s.messageId
															}));
														r(null, {
															parentMessage: a,
															threadedReplies: o
														})
													}
												}))
											}))
										}
									}), r)
								}
							}, {
								key: "getThreadedMessagesByTimestamp",
								value: function(e, n, t) {
									return this._getThreadedMessageList(e, re.TIMESTAMP, n, t)
								}
							}, {
								key: "applyThreadInfoUpdateEvent",
								value: function(e) {
									var n, t = L.get(this._iid),
										r = t.ThreadInfo,
										i = t.ThreadInfoUpdateEvent,
										s = ie.get(this),
										a = C(q.parse(arguments, [new q({
											type: i,
											constraint: function(e) {
												return parseInt(e.targetMessageId) === parseInt(s)
											}
										})]), 2);
									if (n = a[0], e = a[1], n) return !1;
									var o = e.threadInfo;
									return this.threadInfo = new r(o), !0
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
									if ("object" === s(e) && e) {
										var n = L.get(this._iid).MessageMetaArray,
											t = [];
										for (var r in e) t.push(new n(r, e[r]));
										this.metaArrays = t
									}
								}
							}], [{
								key: "getMessage",
								value: function(e, n) {
									var t, r = this,
										i = L.get(this._iid),
										s = i.BaseChannel,
										a = i.MessageRetrievalParams,
										o = C(q.parse(arguments, [new q({
											type: a,
											constraint: function(e) {
												return e._validate()
											}
										}), new q({
											type: "callback"
										})]), 3);
									return t = o[0], e = o[1], n = o[2], te(this._iid, (function(n) {
										if (t) n(t, null);
										else {
											var i = L.get(r._iid),
												a = i.GroupChannel,
												o = i.OpenChannel;
											switch (e.channelType) {
												case s.CHANNEL_TYPE_GROUP:
													a.getChannel(e.channelUrl, A.INTERNAL_CALL, (function(t, i) {
														if (SendBird.getInstance(r._iid).getErrorFirstCallback()) {
															var a = [t, i];
															i = a[0], t = a[1]
														}
														i ? n(i, null) : I.get(r._iid).container.apiClient.getMessage(c({
															channel: t
														}, e), (function(e, r) {
															if (e) n(e, null);
															else {
																var i = s.buildMessage(r, t);
																n(null, i)
															}
														}))
													}));
													break;
												case s.CHANNEL_TYPE_OPEN:
													o.getChannel(e.channelUrl, A.INTERNAL_CALL, (function(t, i) {
														if (SendBird.getInstance(r._iid).getErrorFirstCallback()) {
															var a = [t, i];
															i = a[0], t = a[1]
														}
														i ? n(i, null) : I.get(r._iid).container.apiClient.getMessage(c({
															channel: t
														}, e), (function(e, r) {
															if (e) n(e, null);
															else {
																var i = s.buildMessage(r, t);
																n(null, i)
															}
														}))
													}))
											}
										}
									}), n)
								}
							}, {
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
							}]), e
						}(),
						ae = function() {
							function e(n) {
								a(this, e), this.nickname = "", this.profileUrl = "", this.userId = "", this.connectionStatus = "", this.lastSeenAt = null, this.metaData = {}, this.isActive = !0, this.friendDiscoveryKey = null, this.friendName = null, this._preferredLanguages = null, n && this.__update(n)
							}
							return u(e, [{
								key: "__update",
								value: function(n) {
									n.hasOwnProperty("guest_id") && (this.userId = String(n.guest_id)), n.hasOwnProperty("user_id") && (this.userId = String(n.user_id)), n.hasOwnProperty("name") && (this.nickname = String(n.name)), n.hasOwnProperty("nickname") && (this.nickname = String(n.nickname)), n.hasOwnProperty("image") && (this.profileUrl = String(n.image)), n.hasOwnProperty("profile_url") && (this.profileUrl = String(n.profile_url)), n.hasOwnProperty("is_online") && n.is_online !== e.NON_AVAILABLE ? this.connectionStatus = n.is_online ? e.ONLINE : e.OFFLINE : this.connectionStatus = e.NON_AVAILABLE, n.hasOwnProperty("last_seen_at") ? this.lastSeenAt = parseInt(n.last_seen_at) : this.lastSeenAt = 0, n.hasOwnProperty("metadata") ? this.metaData = n.metadata : this.metaData = {}, n.hasOwnProperty("is_active") ? this.isActive = void 0 === n.is_active || n.is_active : this.isActive = !0, n.hasOwnProperty("friend_discovery_key") ? this.friendDiscoveryKey = n.friend_discovery_key : this.friendDiscoveryKey = null, n.hasOwnProperty("friend_name") ? this.friendName = n.friend_name : this.friendName = null, n.hasOwnProperty("preferred_languages") ? this._preferredLanguages = n.preferred_languages || null : this._preferredLanguages = null
								}
							}, {
								key: "_updateMetaData",
								value: function(e, n) {
									var t = 1 < arguments.length && void 0 !== n && n,
										r = L.get(this._iid).GroupChannel;
									for (var i in e) t ? delete this.metaData[i] : this.metaData[i] = e[i];
									for (var s in r.cachedChannels)
										if (r.cachedChannels.hasOwnProperty(s)) {
											var a = r.cachedChannels[s];
											a.memberMap.hasOwnProperty(this.userId) && (a.memberMap[this.userId].metaData = this.metaData)
										}
								}
							}, {
								key: "serialize",
								value: function() {
									return X.serialize(this, (function(e) {
										e.hasOwnProperty("_preferredLanguages") && (e.preferredLanguages = e._preferredLanguages, delete e._preferredLanguages)
									}))
								}
							}, {
								key: "getOriginalProfileUrl",
								value: function() {
									var e = "";
									if ((-1 < (e = (e = -1 < this.profileUrl.indexOf("://") ? this.profileUrl.split("/")[2] : this.profileUrl.split("/")[0]).split("?")[0]).indexOf("sendbird.com") || -1 < e.indexOf("intoz.com") || -1 < e.indexOf("file-local")) && -1 < this.profileUrl.indexOf(e + "/profile_images/")) {
										var n = this.profileUrl.replace("profile_images/", "");
										return n === this.profileUrl ? "" : n
									}
									return ""
								}
							}, {
								key: "createMetaData",
								value: function(e, n) {
									var t, r = this,
										i = C(q.parse(arguments, [new q({
											type: "object",
											constraint: function(e) {
												return 0 < Object.keys(e).length && !Array.isArray(e)
											}
										}), new q({
											type: "callback"
										})]), 3);
									return t = i[0], e = i[1], n = i[2], te(this._iid, (function(n) {
										t ? n(t, null) : I.get(r._iid).container.apiClient.createUserMetaData({
											metaData: e
										}, (function(e, t) {
											e || r._updateMetaData(t), n(e, t)
										}))
									}), n)
								}
							}, {
								key: "updateMetaData",
								value: function(e, n, t) {
									var r, i = this,
										s = C(q.parse(arguments, [new q({
											type: "object",
											constraint: function(e) {
												return !Array.isArray(e) && 0 < Object.keys(e).length && Object.keys(e).map((function(n) {
													return e[n]
												})).every((function(e) {
													return "string" == typeof e
												}))
											}
										}), new q({
											type: "boolean",
											optional: !0,
											defaultValue: !1
										}), new q({
											type: "callback"
										})]), 4);
									return r = s[0], e = s[1], n = s[2], t = s[3], te(this._iid, (function(t) {
										r ? t(r, null) : I.get(i._iid).container.apiClient.updateUserMetaData({
											metaData: e,
											upsert: n
										}, (function(e, n) {
											e || i._updateMetaData(n), t(e, n)
										}))
									}), t)
								}
							}, {
								key: "deleteMetaData",
								value: function(e, n) {
									var t, r = this,
										i = C(q.parse(arguments, [new q({
											type: "string",
											constraint: function(e) {
												return 0 < e.length
											}
										}), new q({
											type: "callback"
										})]), 3);
									return t = i[0], e = i[1], n = i[2], te(this._iid, (function(n) {
										if (t) n(t, null);
										else {
											var i = {};
											i[e] = "", I.get(r._iid).container.apiClient.deleteUserMetaData({
												metaDataKey: e
											}, (function(e, t) {
												e || r._updateMetaData(i, !0), n(e, t)
											}))
										}
									}), n)
								}
							}, {
								key: "deleteAllMetaData",
								value: function(e) {
									var n = this;
									return te(this._iid, (function(e) {
										var t = n.metaData;
										I.get(n._iid).container.apiClient.deleteAllUserMetaData({}, (function(r, i) {
											r || n._updateMetaData(t, !0), e(r, i)
										}))
									}), e)
								}
							}, {
								key: "preferredLanguages",
								get: function() {
									return this._preferredLanguages
								}
							}], [{
								key: "objectify",
								value: function(e) {
									var n = e.userId,
										t = void 0 === n ? null : n,
										r = e.nickname,
										i = void 0 === r ? "" : r,
										s = e.profileUrl,
										a = void 0 === s ? "" : s,
										o = e.connectionStatus,
										u = void 0 === o ? "" : o,
										l = e.lastSeenAt,
										c = void 0 === l ? 0 : l,
										d = e.metaData,
										h = void 0 === d ? {} : d,
										p = e.isActive,
										f = void 0 === p || p,
										_ = e.friendDiscoveryKey,
										g = void 0 === _ ? null : _,
										y = e.friendName,
										m = void 0 === y ? null : y,
										v = e.preferredLanguages;
									return {
										user_id: t,
										nickname: i,
										profile_url: a,
										is_online: u,
										last_seen_at: c,
										metadata: h,
										is_active: f,
										friend_discovery_key: g,
										friend_name: m,
										preferred_languages: void 0 === v ? null : v
									}
								}
							}, {
								key: "build",
								value: function(e, n, t, r, i, s, a, o, u, l) {
									return this.objectify({
										userId: e,
										nickname: n,
										profileUrl: t,
										connectionStatus: r,
										lastSeenAt: i,
										metaData: s,
										isActive: a,
										friendDiscoveryKey: o,
										friendName: u,
										preferredLanguages: l
									})
								}
							}, {
								key: "buildFromSerializedData",
								value: function(e) {
									var n = L.get(this._iid).User,
										t = X.deserialize(e);
									return new n(n.objectify(t))
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
						oe = {
							TIMESTAMP: "timestamp",
							MESSAGE_ID: "messageId"
						},
						ue = function() {
							function e(n) {
								a(this, e), this.url = "", this.channelType = e.CHANNEL_TYPE_BASE, this.name = "", this.coverUrl = "", this.createdAt = 0, this.data = null, this.customType = null, this.isFrozen = !1, this.isEphemeral = !1, n && (this.__update(n), n.__wk && (this.__wk = n.__wk))
							}
							return u(e, [{
								key: "__update",
								value: function(e) {
									this.url = e.hasOwnProperty("channel_url") ? String(e.channel_url) : "", this.name = e.hasOwnProperty("name") ? String(e.name) : "", this.coverUrl = e.hasOwnProperty("cover_url") ? String(e.cover_url) : "", this.createdAt = e.hasOwnProperty("created_at") ? 1e3 * e.created_at : 0, this.data = e.hasOwnProperty("data") ? String(e.data) : "", this.customType = e.hasOwnProperty("custom_type") ? e.custom_type : "", this.isFrozen = !!e.hasOwnProperty("freeze") && e.freeze, this.isEphemeral = !!e.hasOwnProperty("is_ephemeral") && e.is_ephemeral
								}
							}, {
								key: "isGroupChannel",
								value: function() {
									var e = L.get(this._iid).BaseChannel;
									return this.channelType === e.CHANNEL_TYPE_GROUP
								}
							}, {
								key: "isOpenChannel",
								value: function() {
									var e = L.get(this._iid).BaseChannel;
									return this.channelType === e.CHANNEL_TYPE_OPEN
								}
							}, {
								key: "createOperatorListQuery",
								value: function() {
									return new(L.get(this._iid).OperatorListQuery)(this)
								}
							}, {
								key: "createMessageListQuery",
								value: function() {
									return new(L.get(this._iid).MessageListQuery)(this)
								}
							}, {
								key: "createPreviousMessageListQuery",
								value: function() {
									return new(L.get(this._iid).PreviousMessageListQuery)(this)
								}
							}, {
								key: "serialize",
								value: function() {
									return X.serialize(this, (function(e) {
										if (null !== e.lastMessage && "object" === s(e.lastMessage)) {
											var n = e.lastMessage;
											n.hasOwnProperty("_sender") && (n.sender = n._sender, delete n._sender, e.lastMessage = n)
										}
										e.hasOwnProperty("_messageOffsetTimestamp") && (e.messageOffsetTimestamp = e._messageOffsetTimestamp, delete e._messageOffsetTimestamp)
									}))
								}
							}, {
								key: "getMessageChangeLogsByTimestamp",
								value: function(e, n, t, r) {
									var i, s = this,
										a = C(q.parse(arguments, [new q({
											type: "number",
											constraint: function(e) {
												return 0 <= e
											}
										}), new q({
											type: "boolean",
											optional: !0,
											defaultValue: !1
										}), new q({
											type: "boolean",
											optional: !0,
											defaultValue: !1
										}), new q({
											type: "callback"
										})]), 5);
									return i = a[0], e = a[1], n = a[2], t = a[3], r = a[4], te(this._iid, (function(r) {
										i ? r(i, null) : I.get(s._iid).container.apiClient.getMessageChangeLogs({
											channelUrl: s.url,
											ts: e,
											token: null,
											isOpenChannel: s.isOpenChannel(),
											includeMetaArray: n,
											includeReaction: t
										}, (function(e, n) {
											var t = null;
											if (!e) {
												var i = L.get(s._iid).BaseChannel;
												t = {
													updatedMessages: n.updated.map((function(e) {
														return i.buildMessage(e, s)
													})),
													deletedMessageIds: n.deleted.map((function(e) {
														return e.message_id
													})),
													hasMore: n.has_more,
													token: n.next
												}
											}
											r(e, t)
										}))
									}), r)
								}
							}, {
								key: "getMessageChangeLogsByToken",
								value: function(e, n, t, r) {
									var i, s = this,
										a = C(q.parse(arguments, [new q({
											type: "string",
											nullable: !0
										}), new q({
											type: "boolean",
											optional: !0,
											defaultValue: !1
										}), new q({
											type: "boolean",
											optional: !0,
											defaultValue: !1
										}), new q({
											type: "callback"
										})]), 5);
									return i = a[0], e = a[1], n = a[2], t = a[3], r = a[4], te(this._iid, (function(r) {
										i ? r(i, null) : I.get(s._iid).container.apiClient.getMessageChangeLogs({
											channelUrl: s.url,
											ts: null,
											token: e,
											isOpenChannel: s.isOpenChannel(),
											includeMetaArray: n,
											includeReaction: t
										}, (function(e, n) {
											var t = null;
											if (!e) {
												var i = L.get(s._iid).BaseChannel;
												t = {
													updatedMessages: n.updated.map((function(e) {
														return i.buildMessage(e, s)
													})),
													deletedMessageIds: n.deleted.map((function(e) {
														return e.message_id
													})),
													hasMore: n.has_more,
													token: n.next
												}
											}
											r(e, t)
										}))
									}), r)
								}
							}, {
								key: "getMessageChangeLogsSinceToken",
								value: function(e, n, t) {
									var r, i = this,
										s = L.get(this._iid),
										a = s.BaseChannel,
										o = s.MessageChangeLogsParams,
										u = C(q.parse(arguments, [new q({
											type: "string",
											nullable: !0
										}), new q({
											type: o
										}), new q({
											type: "callback"
										})]), 4);
									return r = u[0], e = u[1], n = u[2], t = u[3], te(this._iid, (function(t) {
										r ? t(r, null) : I.get(i._iid).container.apiClient.getMessageChangeLogs(c({
											channelUrl: i.url,
											ts: null,
											token: e,
											isOpenChannel: i.isOpenChannel()
										}, n), (function(e, n) {
											var r = null;
											e || (r = {
												updatedMessages: n.updated.map((function(e) {
													return a.buildMessage(e, i)
												})),
												deletedMessageIds: n.deleted.map((function(e) {
													return e.message_id
												})),
												hasMore: n.has_more,
												token: n.next
											}), t(e, r)
										}))
									}), t)
								}
							}, {
								key: "getMessageChangeLogsSinceTimestamp",
								value: function(e, n, t) {
									var r, i = this,
										s = L.get(this._iid),
										a = s.BaseChannel,
										o = s.MessageChangeLogsParams,
										u = C(q.parse(arguments, [new q({
											type: "number",
											constraint: function(e) {
												return 0 <= e
											}
										}), new q({
											type: o
										}), new q({
											type: "callback"
										})]), 4);
									return r = u[0], e = u[1], n = u[2], t = u[3], te(this._iid, (function(t) {
										r ? t(r, null) : I.get(i._iid).container.apiClient.getMessageChangeLogs(c({
											channelUrl: i.url,
											timestamp: e,
											token: null,
											isOpenChannel: i.isOpenChannel()
										}, n), (function(e, n) {
											var r = null;
											e || (r = {
												updatedMessages: n.updated.map((function(e) {
													return a.buildMessage(e, i)
												})),
												deletedMessageIds: n.deleted.map((function(e) {
													return e.message_id
												})),
												hasMore: n.has_more,
												token: n.next
											}), t(e, r)
										}))
									}), t)
								}
							}, {
								key: "getMyMutedInfo",
								value: function(e) {
									var n = this;
									return te(this._iid, (function(e) {
										var t = kn.getInstance(n._iid);
										I.get(n._iid).container.apiClient.getMyMutedInfo({
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
									for (var n = new(L.get(this._iid).MessageListParams), t = null, r = !1, i = 0, s = 0, a = !1, o = "", u = "", l = null, c = !1, d = !1, h = null, p = arguments.length, f = new Array(1 < p ? p - 1 : 0), _ = 1; _ < p; _++) f[_ - 1] = arguments[_];
									switch (e) {
										case "prev":
											var g = C(q.parse(f, [new q({
												type: "number"
											}), new q({
												type: "boolean"
											}), new q({
												type: "number"
											}), new q({
												type: "boolean"
											}), new q({
												type: "string"
											}), new q({
												type: "string"
											}), new q({
												type: "array",
												optional: !0
											}), new q({
												type: "boolean",
												optional: !0,
												defaultValue: !1
											}), new q({
												type: "boolean",
												optional: !0,
												defaultValue: !1
											}), new q({
												type: "callback"
											})]), 11);
											t = g[0], g[1], r = g[2], i = g[3], a = g[4], o = g[5], u = g[6], l = g[7], c = g[8], d = g[9], h = g[10];
											break;
										case "next":
											var y = C(q.parse(f, [new q({
												type: "number"
											}), new q({
												type: "boolean"
											}), new q({
												type: "number"
											}), new q({
												type: "boolean"
											}), new q({
												type: "string"
											}), new q({
												type: "string"
											}), new q({
												type: "array",
												optional: !0
											}), new q({
												type: "boolean",
												optional: !0,
												defaultValue: !1
											}), new q({
												type: "boolean",
												optional: !0,
												defaultValue: !1
											}), new q({
												type: "callback"
											})]), 11);
											t = y[0], y[1], r = y[2], s = y[3], a = y[4], o = y[5], u = y[6], l = y[7], c = y[8], d = y[9], h = y[10];
											break;
										case "prevnext":
											var m = C(q.parse(f, [new q({
												type: "number"
											}), new q({
												type: "number"
											}), new q({
												type: "number"
											}), new q({
												type: "boolean"
											}), new q({
												type: "string"
											}), new q({
												type: "string"
											}), new q({
												type: "array",
												optional: !0
											}), new q({
												type: "boolean",
												optional: !0,
												defaultValue: !1
											}), new q({
												type: "boolean",
												optional: !0,
												defaultValue: !1
											}), new q({
												type: "callback"
											})]), 11);
											t = m[0], m[1], i = m[2], s = m[3], a = m[4], o = m[5], u = m[6], l = m[7], c = m[8], d = m[9], h = m[10], r = !0
									}
									return t ? [null, h] : (n.isInclusive = r, n.prevResultSize = i, n.nextResultSize = s, n.reverse = a, n.messageType = o, n.customType = u, n.senderUserIds = l, n.includeMetaArray = c, n.includeReaction = d, [n, h])
								}
							}, {
								key: "_getMessageList",
								value: function(e, n, t, r) {
									var i, s = this,
										a = L.get(this._iid).MessageListParams,
										o = C(q.parse(arguments, [new q({
											type: "number"
										}), new q({
											type: "string",
											constraint: function(e) {
												return Object.values(oe).includes(e)
											}
										}), new q({
											type: a,
											constraint: function(e) {
												return e._validate()
											}
										}), new q({
											type: "callback"
										})]), 5);
									return i = o[0], e = o[1], n = o[2], t = o[3], r = o[4], te(this._iid, (function(r) {
										i ? r(i, null) : I.get(s._iid).container.apiClient.getMessageList(c(c({
											channel: s,
											token: e,
											tokenType: n
										}, t), {}, {
											shouldReverse: t.reverse
										}), (function(e, n) {
											if (e) r(e, null);
											else {
												var t = L.get(s._iid).BaseChannel,
													i = n.messages.map((function(e) {
														return t.buildMessage(e, s)
													})).filter((function(e) {
														return null !== e
													}));
												r(null, i)
											}
										}))
									}), r)
								}
							}, {
								key: "getPreviousMessagesByTimestamp",
								value: function(e) {
									var n = C(this._parseMessageListParams.apply(this, ["prev"].concat(E(q.toArray(arguments)))), 2),
										t = n[0],
										r = n[1];
									return this._getMessageList(e, oe.TIMESTAMP, t, r)
								}
							}, {
								key: "getNextMessagesByTimestamp",
								value: function(e) {
									var n = C(this._parseMessageListParams.apply(this, ["next"].concat(E(q.toArray(arguments)))), 2),
										t = n[0],
										r = n[1];
									return this._getMessageList(e, oe.TIMESTAMP, t, r)
								}
							}, {
								key: "getPreviousAndNextMessagesByTimestamp",
								value: function(e) {
									var n = C(this._parseMessageListParams.apply(this, ["prevnext"].concat(E(q.toArray(arguments)))), 2),
										t = n[0],
										r = n[1];
									return this._getMessageList(e, oe.TIMESTAMP, t, r)
								}
							}, {
								key: "getPreviousMessagesByID",
								value: function(e) {
									var n = C(this._parseMessageListParams.apply(this, ["prev"].concat(E(q.toArray(arguments)))), 2),
										t = n[0],
										r = n[1];
									return this._getMessageList(e, oe.MESSAGE_ID, t, r)
								}
							}, {
								key: "getNextMessagesByID",
								value: function(e) {
									var n = C(this._parseMessageListParams.apply(this, ["next"].concat(E(q.toArray(arguments)))), 2),
										t = n[0],
										r = n[1];
									return this._getMessageList(e, oe.MESSAGE_ID, t, r)
								}
							}, {
								key: "getPreviousAndNextMessagesByID",
								value: function(e) {
									var n = C(this._parseMessageListParams.apply(this, ["prevnext"].concat(E(q.toArray(arguments)))), 2),
										t = n[0],
										r = n[1];
									return this._getMessageList(e, oe.MESSAGE_ID, t, r)
								}
							}, {
								key: "getMessagesByTimestamp",
								value: function(e, n, t) {
									return this._getMessageList(e, oe.TIMESTAMP, n, t)
								}
							}, {
								key: "getMessagesByMessageId",
								value: function(e, n, t) {
									return this._getMessageList(e, oe.MESSAGE_ID, n, t)
								}
							}, {
								key: "_sendUserMessage",
								value: function(e) {
									var n = this,
										t = e.message,
										r = e.data,
										i = e.customType,
										s = e.metaArrays,
										a = e.mentionType,
										o = e.mentionedUserIds,
										u = e.translationTargetLanguages,
										l = e.pushNotificationDeliveryOption,
										c = e.reqId,
										d = e.rootMessageId,
										h = e.parentMessageId,
										p = e.silent,
										f = void 0 !== p && p,
										_ = e.callback,
										g = L.get(this._iid),
										y = g.Command,
										m = g.UserMessage;
									c = c || y.generateRequestId();
									var v = kn.getInstance(this._iid),
										C = m.objectify({
											messageId: 0,
											reqId: c,
											user: v.currentUser || {},
											channel: this,
											message: t,
											data: r,
											customType: i,
											metaArrays: s,
											mentionType: a,
											rootMessageId: d,
											parentMessageId: h,
											mentionedUserIds: o,
											translations: u,
											silent: f,
											createdAt: (new Date).getTime()
										}),
										E = new m(C);
									if (E.requestState = v.MessageRequestState.PENDING, E.sendingStatus = v.MessageSendingStatus.PENDING, E.requestedMentionUserIds = o, !v.currentUser) {
										var b = new N("Connection should be made first.", N.CONNECTION_REQUIRED),
											U = new m(C);
										return U.requestState = v.MessageRequestState.FAILED, U.sendingStatus = v.MessageSendingStatus.FAILED, U.requestedMentionUserIds = o, U.errorCode = b.code, _(b, U), E
									}
									var A = y.bMessage({
										channelUrl: this.url,
										message: t,
										data: r,
										customType: i,
										metaArrays: s,
										mentionType: a,
										mentionedUserIds: o,
										requestId: c,
										rootMessageId: d,
										parentMessageId: h,
										silent: f,
										translationTargetLanguages: u,
										pushNotificationDeliveryOption: l
									});
									return E.reqId = A.requestId, this.isGroupChannel() && v.getConnectionState() !== v.ConnectionState.OPEN && v.currentUser && !v.connecting && !v.reconnecting && "string" == typeof i && 0 === i.indexOf("SB_VIDEOCHAT") ? I.get(v._iid).container.apiClient.sendUserMessage({
										channelUrl: this.url,
										isOpenChannel: this.isOpenChannel(),
										message: t,
										data: r,
										customType: i,
										translationTargetLanguages: u,
										metaArrays: s,
										mentionType: a,
										mentionedUserIds: o,
										pushNotificationDeliveryOption: l,
										rootMessageId: d,
										parentMessageId: h
									}, (function(e, n) {
										var t = null;
										e ? ((t = new m(C)).requestState = v.MessageRequestState.FAILED, t.sendingStatus = v.MessageSendingStatus.FAILED, e.code === N.REQUEST_CANCELED && (t.sendingStatus = v.MessageSendingStatus.CANCELED), t.requestedMentionUserIds = o, t.errorCode = e.code) : ((t = new m(n)).requestState = v.MessageRequestState.SUCCEEDED, t.sendingStatus = v.MessageSendingStatus.SUCCEEDED), _(e, t)
									})) : v.sendCommand(A, (function(e, t) {
										if (v.getErrorFirstCallback()) {
											var r = [e, t];
											t = r[0], e = r[1]
										}
										if (t) {
											var i = new m(C);
											i.reqId = A.requestId, i.requestState = v.MessageRequestState.FAILED, i.sendingStatus = v.MessageSendingStatus.FAILED, t.code === N.REQUEST_CANCELED && (i.sendingStatus = v.MessageSendingStatus.CANCELED), i.requestedMentionUserIds = o, i.errorCode = t.code, _(new N(t.message, t.code), i)
										} else {
											var s = new m(e.getJsonElement()),
												a = v.currentUser;
											if (a && s._sender && a.userId === s._sender.userId && (a.nickname !== s._sender.nickname && (a.nickname = s._sender.nickname), a.profileUrl !== s._sender.profileUrl && (a.profileUrl = s._sender.profileUrl), H.deepEqual(a.metaData, s._sender.metaData) || (a.metaData = s._sender.metaData)), n.isGroupChannel()) {
												for (var u in n.lastMessage = s, v.channelHandlers) v.channelHandlers[u].onChannelChanged(n);
												s.requestState = v.MessageRequestState.SUCCEEDED, s.sendingStatus = v.MessageSendingStatus.SUCCEEDED, _(null, s)
											} else s.requestState = v.MessageRequestState.SUCCEEDED, s.sendingStatus = v.MessageSendingStatus.SUCCEEDED, _(null, s)
										}
									})), E
								}
							}, {
								key: "sendUserMessage",
								value: function() {
									var e = q.toArray(arguments),
										n = e.pop(),
										t = null,
										r = null,
										i = L.get(this._iid).UserMessageParams;
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
											t = q.error
									} else t = q.error;
									else t = q.error;
									var s = I.get(this._iid).container.isErrorFirstInCallback;
									return !t && r._validate() && r.message ? this._sendUserMessage(c(c({}, r), {}, {
										metaArrays: r.metaArrays,
										mentionType: r.mentionType,
										mentionedUserIds: r._mentionedUserIds,
										rootMessageId: r.rootMessageId,
										parentMessageId: r.parentMessageId,
										translationTargetLanguages: r._translationTargetLanguages,
										callback: function(e, t) {
											s ? n(e, t) : n(t, e)
										}
									})) : (s ? n(q.error, null) : n(null, q.error), null)
								}
							}, {
								key: "resendUserMessage",
								value: function(e, n) {
									var t = this,
										r = L.get(this._iid),
										i = r.UserMessage,
										s = r.UserMessageParams,
										a = null,
										o = C(q.parse(arguments, [new q({
											type: i,
											constraint: function(e) {
												return 0 === e.messageId && e.isResendable() && e.reqId && e.channelUrl === t.url && "string" == typeof e.message && "string" == typeof e.data && "string" == typeof e.customType && Array.isArray(e.translations)
											}
										}), new q({
											type: "callback"
										})]), 3);
									return a = o[0], e = o[1], n = o[2], te(this._iid, (function(n) {
										if (a) a.message += " Please check if the failed message is resend-able with `message.isResendable().`", n(a, null);
										else {
											var r = s.PushNotificationDeliveryOption.DEFAULT;
											t._sendUserMessage(c(c({}, e), {}, {
												mentionedUserIds: e.requestedMentionUserIds,
												translationTargetLanguages: e.translations,
												pushNotificationDeliveryOption: r,
												reqId: e.reqId,
												callback: n
											}))
										}
									}), n)
								}
							}, {
								key: "updateUserMessage",
								value: function(e, n, t, r, i) {
									var s = this,
										a = L.get(this._iid),
										o = a.Command,
										u = a.UserMessage,
										l = a.UserMessageParams,
										d = arguments,
										h = null,
										p = null;
									if ("number" == typeof e) switch (d.length) {
										case 3:
											var f = C(q.parse(d, [new q({
												type: "number"
											}), new q({
												type: l
											}), new q({
												type: "callback"
											})]), 4);
											h = f[0], e = f[1], p = f[2], i = f[3];
											break;
										case 5:
											p = new l;
											var _ = C(q.parse(d, [new q({
												type: "number"
											}), new q({
												type: "string",
												nullable: !0
											}), new q({
												type: "string",
												nullable: !0
											}), new q({
												type: "string",
												nullable: !0
											}), new q({
												type: "callback"
											})]), 6);
											h = _[0], e = _[1], n = _[2], t = _[3], r = _[4], i = _[5], p.message = n, p.data = t, p.customType = r
									}
									return te(this._iid, (function(n) {
										if (!h && p && p._validate()) {
											var t = o.bUpdateUserMessage(c(c({
													channelUrl: s.url,
													messageId: e
												}, p), {}, {
													mentionType: p._mentionType,
													mentionedUserIds: p._mentionedUserIds
												})),
												r = kn.getInstance(s._iid);
											r.sendCommand(t, (function(e, t) {
												if (r.getErrorFirstCallback()) {
													var i = [e, t];
													t = i[0], e = i[1]
												}
												var s = null;
												t || (s = new u(e.getJsonElement())), n(t, s)
											}))
										} else n(q.error, null)
									}), i)
								}
							}, {
								key: "translateUserMessage",
								value: function(e, n, t) {
									var r, i = this,
										s = kn.getInstance(this._iid),
										a = L.get(this._iid).UserMessage,
										o = C(q.parse(arguments, [new q({
											type: a,
											constraint: function(e) {
												return e.channelUrl === i.url && e.sendingStatus === s.MessageSendingStatus.SUCCEEDED
											}
										}), new q({
											type: "array",
											constraint: function(e) {
												return e.every((function(e) {
													return "string" == typeof e
												}))
											}
										}), new q({
											type: "callback"
										})]), 4);
									return r = o[0], e = o[1], n = o[2], t = o[3], te(this._iid, (function(t) {
										r ? t(r, null) : I.get(i._iid).container.apiClient.translateUserMessage({
											channelUrl: i.url,
											isOpenChannel: i.isOpenChannel(),
											messageId: e.messageId,
											translationTargetLanguages: n
										}, (function(e, n) {
											var r = null;
											e || (r = new a(n)), t(e, r)
										}))
									}), t)
								}
							}, {
								key: "_parseFileMessageArguments",
								value: function(e) {
									var n = L.get(this._iid),
										t = n.BaseMessageParams,
										r = n.FileMessageParams,
										i = {
											error: null,
											file: null,
											name: null,
											type: null,
											size: null,
											data: "",
											customType: "",
											thumbnailSizes: [],
											metaArrays: [],
											mentionType: t.MentionType.USERS,
											mentionedUserIds: [],
											pushNotificationDeliveryOption: r.PushNotificationDeliveryOption.DEFAULT,
											rootMessageId: null,
											parentMessageId: null,
											progressHandler: null,
											silent: !1,
											callback: null
										};
									if ("function" == typeof e[e.length - 1] && (i.callback = e.pop()), "function" == typeof e[e.length - 1] && (i.progressHandler = e.pop()), e[0] instanceof r) i.file = e[0].file || e[0].fileUrl, i.name = e[0].fileName, i.type = e[0].mimeType, i.size = e[0].fileSize, i.data = e[0].data, i.customType = e[0].customType, i.thumbnailSizes = e[0].thumbnailSizes, i.metaArrays = e[0].metaArrays, i.mentionType = e[0]._mentionType, i.mentionedUserIds = e[0]._mentionedUserIds, i.pushNotificationDeliveryOption = e[0].pushNotificationDeliveryOption ? e[0].pushNotificationDeliveryOption : r.PushNotificationDeliveryOption.DEFAULT, i.rootMessageId = e[0].rootMessageId, i.parentMessageId = e[0].parentMessageId, i.silent = e[0].silent, e[0]._validate() || (i.error = q.error);
									else if (H.isFile(e[0]) || "string" == typeof e[0]) {
										switch (i.file = e[0], e.length) {
											case 1:
												break;
											case 2:
												i.data = e[1];
												break;
											case 3:
												i.data = e[1], i.customType = e[2];
												break;
											case 4:
												i.data = e[1], i.customType = e[2], i.thumbnailSizes = e[3];
												break;
											case 5:
												i.name = e[1], i.type = e[2], i.size = e[3], i.data = e[4];
												break;
											case 6:
												i.name = e[1], i.type = e[2], i.size = e[3], i.data = e[4], i.customType = e[5];
												break;
											case 7:
												i.name = e[1], i.type = e[2], i.size = e[3], i.data = e[4], i.customType = e[5], i.thumbnailSizes = e[6]
										}
										var s = C(q.parse([i.file, i.name, i.type, i.size, i.data, i.customType, i.thumbnailSizes], [new q({
											type: ["file", "string"]
										}), new q({
											type: "string",
											nullable: !0
										}), new q({
											type: "string",
											nullable: !0
										}), new q({
											type: "number",
											nullable: !0,
											constraint: function(e) {
												return 0 <= e
											}
										}), new q({
											type: "string",
											nullable: !0
										}), new q({
											type: "string",
											nullable: !0
										}), new q({
											type: "array"
										})]), 8);
										i.error = s[0], i.file = s[1], i.name = s[2], i.type = s[3], i.size = s[4], i.data = s[5], i.customType = s[6], i.thumbnailSizes = s[7]
									} else i.error = q.error;
									return H.isFile(i.file) && (i.name = i.name || i.file.name, i.type = i.type || i.file.type, i.size = i.size || i.file.size), i
								}
							}, {
								key: "_createTempFileMessage",
								value: function(e) {
									try {
										var n = kn.getInstance(this._iid),
											t = L.get(this._iid),
											r = t.Command,
											i = t.FileMessage,
											s = i.objectify(c(c({}, e), {}, {
												messageId: 0,
												reqId: r.generateRequestId(),
												user: n.currentUser || {},
												channel: this,
												url: "string" == typeof e.file ? e.file : "",
												thumbnails: e.thumbnailSizes.map((function(e) {
													return {
														url: "",
														width: e.maxWidth,
														height: e.maxHeight,
														real_width: 0,
														real_height: 0
													}
												})),
												sendingStatus: n.MessageSendingStatus.PENDING,
												createdAt: (new Date).getTime()
											}));
										return new i(s)
									} catch (e) {
										return null
									}
								}
							}, {
								key: "sendFileMessage",
								value: function() {
									var e = this._parseFileMessageArguments(q.toArray(arguments)),
										n = null,
										t = L.get(this._iid).Command.generateRequestId();
									e.error || ((n = this._createTempFileMessage(e)).requestedMentionUserIds = e.mentionedUserIds, t = n.reqId);
									var r = kn.getInstance(this._iid);
									r && r.currentUser || (e.error = new N("Connection should be made first.", N.CONNECTION_REQUIRED));
									var i = L.get(this._iid).FileMessageQueue;
									return i.create(this).addJob(new i.Job({
										fileInfo: e,
										pendingMessage: n,
										requestId: t,
										error: e.error,
										response: null
									})), n
								}
							}, {
								key: "sendFileMessages",
								value: function(e, n) {
									var t = this,
										r = 1 < arguments.length && void 0 !== n ? n : {},
										i = r.progress ? r.progress : function() {},
										s = r.sent ? r.sent : function() {},
										a = r.complete ? r.complete : function() {};
									if (Array.isArray(e) && 0 < e.length && e.length <= 20) {
										var o = [];
										return e.forEach((function(n, r) {
											o.push(t.sendFileMessage(n, i, (function(n, t) {
												s(n, t), r === e.length - 1 && a(null)
											})))
										})), o
									}
									return a(q.error), null
								}
							}, {
								key: "resendFileMessage",
								value: function(e, n, t) {
									var r = this,
										i = L.get(this._iid),
										s = i.FileMessage,
										a = i.FileMessageParams,
										o = null,
										u = C(q.parse(arguments, [new q({
											type: s,
											constraint: function(e) {
												return 0 === e.messageId && e.isResendable() && e.reqId && e.channelUrl === r.url && "string" == typeof e.data && "string" == typeof e.customType && Array.isArray(e.thumbnails)
											}
										}), new q({
											type: "file",
											optionalIf: function(e) {
												return !!e[0].url
											},
											defaultValue: null
										}), new q({
											type: "callback"
										})]), 4);
									return o = u[0], e = u[1], n = u[2], t = u[3], te(this._iid, (function(t) {
										if (o) o.message += " Please check if the failed message is resend-able with `message.isResendable().`", t(o, null);
										else {
											var i = new a;
											e.url ? i.fileUrl = e.url : i.file = n, i.fileName = e.name, i.fileSize = e.size, i.mimeType = e.type, i.data = e.data, i.customType = e.customType, i.mentionType = e.mentionType, i.mentionedUserIds = e.requestedMentionUserIds, i.metaArrays = e.metaArrays, i.thumbnailSizes = e.thumbnails.map((function(e) {
												return {
													maxWidth: e.width,
													maxHeight: e.height
												}
											})), r.sendFileMessage(i, t)
										}
									}), t)
								}
							}, {
								key: "updateFileMessage",
								value: function(e, n, t, r) {
									var i = this,
										s = L.get(this._iid),
										a = s.Command,
										o = s.FileMessage,
										u = s.FileMessageParams,
										l = arguments,
										d = null,
										h = null;
									if ("number" == typeof e) switch (l.length) {
										case 3:
											var p = C(q.parse(l, [new q({
												type: "number"
											}), new q({
												type: u
											}), new q({
												type: "callback"
											})]), 4);
											d = p[0], e = p[1], h = p[2], r = p[3], h && (h._isUpdate = !0);
											break;
										case 4:
											h = new u;
											var f = C(q.parse(l, [new q({
												type: "number"
											}), new q({
												type: "string",
												nullable: !0
											}), new q({
												type: "string",
												nullable: !0
											}), new q({
												type: "callback"
											})]), 5);
											d = f[0], e = f[1], n = f[2], t = f[3], r = f[4], h.data = n, h.customType = t, h._isUpdate = !0
									}
									return te(this._iid, (function(n) {
										if (!d && h && h._validate()) {
											var t = a.bUpdateFileMessage(c(c({
													channelUrl: i.url,
													messageId: e
												}, h), {}, {
													mentionType: h._mentionType,
													mentionedUserIds: h._mentionedUserIds
												})),
												r = kn.getInstance(i._iid);
											r.sendCommand(t, (function(e, t) {
												if (r.getErrorFirstCallback()) {
													var i = [e, t];
													t = i[0], e = i[1]
												}
												var s = null;
												t || (s = new o(e.getJsonElement())), n(t, s)
											}))
										} else n(q.error, null)
									}), r)
								}
							}, {
								key: "cancelUploadingFileMessage",
								value: function(e, n) {
									var t, r = C(q.parse(arguments, [new q({
										type: ["number", "string"]
									}), new q({
										type: "callback"
									})]), 3);
									t = r[0], e = r[1], n = r[2];
									var i = I.get(this._iid).container.isErrorFirstInCallback;
									return t ? (i ? n(t, null) : n(null, t), !1) : L.get(this._iid).FileMessageQueue.create(this).cancelUploadItemByRequestId(e, (function(e, t) {
										return i ? n(e, t) : n(t, e)
									}))
								}
							}, {
								key: "addReaction",
								value: function(e, n, t) {
									var r, i = this,
										s = kn.getInstance(this._iid),
										a = L.get(this._iid).ReactionEvent,
										o = C(q.parse(arguments, [new q({
											type: se
										}), new q({
											type: "string",
											constraint: function(e) {
												return 0 < e.length
											}
										}), new q({
											type: "callback"
										})]), 4);
									return r = o[0], e = o[1], n = o[2], t = o[3], te(this._iid, (function(t) {
										r ? t(r, null) : e.sendingStatus === s.MessageSendingStatus.SUCCEEDED ? I.get(i._iid).container.apiClient.addReaction({
											isGroupChannel: e.isGroupChannel(),
											channelUrl: e.channelUrl,
											messageId: e.messageId,
											key: n
										}, (function(n, r) {
											var i = null;
											n || (i = a.createFromJson(c(c({}, r), {}, {
												msg_id: e.messageId
											}))), t(n, i)
										})) : t(new N("Cannot add reaction to a non-succeeded message.", N.REQUEST_FAILED), null)
									}), t)
								}
							}, {
								key: "deleteReaction",
								value: function(e, n, t) {
									var r, i = this,
										s = kn.getInstance(this._iid),
										a = L.get(this._iid).ReactionEvent,
										o = C(q.parse(arguments, [new q({
											type: se
										}), new q({
											type: "string",
											constraint: function(e) {
												return 0 < e.length
											}
										}), new q({
											type: "callback"
										})]), 4);
									return r = o[0], e = o[1], n = o[2], t = o[3], te(this._iid, (function(t) {
										r ? t(r, null) : e.sendingStatus === s.MessageSendingStatus.SUCCEEDED ? I.get(i._iid).container.apiClient.deleteReaction({
											isGroupChannel: e.isGroupChannel(),
											channelUrl: e.channelUrl,
											messageId: e.messageId,
											key: n
										}, (function(n, r) {
											var i = null;
											n || (i = a.createFromJson(c(c({}, r), {}, {
												msg_id: e.messageId
											}))), t(n, i)
										})) : t(new N("Cannot remove reaction to a non-succeeded message.", N.REQUEST_FAILED), null)
									}), t)
								}
							}, {
								key: "deleteMessage",
								value: function(e, n) {
									var t, r = this,
										i = C(q.parse(arguments, [new q({
											type: "object",
											constraint: function(e) {
												return !Array.isArray(e) && null !== e && e.hasOwnProperty("messageId")
											}
										}), new q({
											type: "callback"
										})]), 3);
									return t = i[0], e = i[1], n = i[2], te(this._iid, (function(n) {
										t ? n(t, null) : I.get(r._iid).container.apiClient.deleteMessage({
											channelUrl: r.url,
											isOpenChannel: r.isOpenChannel(),
											messageId: e.messageId
										}, (function(e, t) {
											return n(e, null)
										}))
									}), n)
								}
							}, {
								key: "addOperators",
								value: function(e, n) {
									var t, r = this,
										i = C(q.parse(arguments, [new q({
											type: "array",
											constraint: function(e) {
												return Object.keys(e).map((function(n) {
													return e[n]
												})).every((function(e) {
													return "string" == typeof e
												}))
											}
										}), new q({
											type: "callback"
										})]), 3);
									return t = i[0], e = i[1], n = i[2], te(this._iid, (function(n) {
										t ? n(t, null) : I.get(r._iid).container.apiClient.addOperators({
											channelUrl: r.url,
											isOpenChannel: r.isOpenChannel(),
											operatorUserIds: e
										}, (function(e, t) {
											return n(e, t)
										}))
									}), n)
								}
							}, {
								key: "removeOperators",
								value: function(e, n) {
									var t, r = this,
										i = C(q.parse(arguments, [new q({
											type: "array",
											constraint: function(e) {
												return Object.keys(e).map((function(n) {
													return e[n]
												})).every((function(e) {
													return "string" == typeof e
												}))
											}
										}), new q({
											type: "callback"
										})]), 3);
									return t = i[0], e = i[1], n = i[2], te(this._iid, (function(n) {
										t ? n(t, null) : I.get(r._iid).container.apiClient.removeOperators({
											channelUrl: r.url,
											isOpenChannel: r.isOpenChannel(),
											operatorUserIds: e
										}, (function(e, t) {
											return n(e, t)
										}))
									}), n)
								}
							}, {
								key: "getMetaCounters",
								value: function(e, n) {
									var t, r = this,
										i = C(q.parse(arguments, [new q({
											type: "array",
											constraint: function(e) {
												return Object.keys(e).map((function(n) {
													return e[n]
												})).every((function(e) {
													return "string" == typeof e
												}))
											}
										}), new q({
											type: "callback"
										})]), 3);
									return t = i[0], e = i[1], n = i[2], te(this._iid, (function(n) {
										t ? n(t, null) : I.get(r._iid).container.apiClient.getMetaCounters({
											channelUrl: r.url,
											isOpenChannel: r.isOpenChannel(),
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
									return te(this._iid, (function(e) {
										I.get(n._iid).container.apiClient.getMetaCounters({
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
									var t, r = this,
										i = C(q.parse(arguments, [new q({
											type: "object",
											constraint: function(e) {
												return e && !Array.isArray(e) && 0 < Object.keys(e).length && Object.keys(e).map((function(n) {
													return e[n]
												})).every((function(e) {
													return "number" == typeof e
												}))
											}
										}), new q({
											type: "callback"
										})]), 3);
									return t = i[0], e = i[1], n = i[2], te(this._iid, (function(n) {
										t ? n(t, null) : I.get(r._iid).container.apiClient.createMetaCounters({
											channelUrl: r.url,
											isOpenChannel: r.isOpenChannel(),
											metaCounter: e
										}, (function(e, t) {
											return n(e, t)
										}))
									}), n)
								}
							}, {
								key: "updateMetaCounters",
								value: function(e, n, t) {
									var r, i = this,
										s = C(q.parse(arguments, [new q({
											type: "object",
											constraint: function(e) {
												return e && !Array.isArray(e) && 0 < Object.keys(e).length && Object.keys(e).map((function(n) {
													return e[n]
												})).every((function(e) {
													return "number" == typeof e
												}))
											}
										}), new q({
											type: "boolean",
											optional: !0,
											defaultValue: !1
										}), new q({
											type: "callback"
										})]), 4);
									return r = s[0], e = s[1], n = s[2], t = s[3], te(this._iid, (function(t) {
										r ? t(r, null) : I.get(i._iid).container.apiClient.updateMetaCounters({
											channelUrl: i.url,
											isOpenChannel: i.isOpenChannel(),
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
									var t, r = this,
										i = C(q.parse(arguments, [new q({
											type: "object",
											constraint: function(e) {
												return e && !Array.isArray(e) && 0 < Object.keys(e).length && Object.keys(e).map((function(n) {
													return e[n]
												})).every((function(e) {
													return "number" == typeof e
												}))
											}
										}), new q({
											type: "callback"
										})]), 3);
									return t = i[0], e = i[1], n = i[2], te(this._iid, (function(n) {
										t ? n(t, null) : I.get(r._iid).container.apiClient.updateMetaCounters({
											channelUrl: r.url,
											isOpenChannel: r.isOpenChannel(),
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
									var t, r = this,
										i = C(q.parse(arguments, [new q({
											type: "object",
											constraint: function(e) {
												return e && !Array.isArray(e) && 0 < Object.keys(e).length && Object.keys(e).map((function(n) {
													return e[n]
												})).every((function(e) {
													return "number" == typeof e
												}))
											}
										}), new q({
											type: "callback"
										})]), 3);
									return t = i[0], e = i[1], n = i[2], te(this._iid, (function(n) {
										t ? n(t, null) : I.get(r._iid).container.apiClient.updateMetaCounters({
											channelUrl: r.url,
											isOpenChannel: r.isOpenChannel(),
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
									var t, r = this,
										i = C(q.parse(arguments, [new q({
											type: "string"
										}), new q({
											type: "callback"
										})]), 3);
									return t = i[0], e = i[1], n = i[2], te(this._iid, (function(n) {
										t ? n(t, null) : I.get(r._iid).container.apiClient.deleteMetaCounter({
											channelUrl: r.url,
											isOpenChannel: r.isOpenChannel(),
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
									return te(this._iid, (function(e) {
										I.get(n._iid).container.apiClient.deleteAllMetaCounters({
											channelUrl: n.url,
											isOpenChannel: n.isOpenChannel()
										}, (function(n, t) {
											return e(n, t)
										}))
									}), e)
								}
							}, {
								key: "getMetaData",
								value: function(e, n) {
									var t, r = this,
										i = C(q.parse(arguments, [new q({
											type: "array",
											constraint: function(e) {
												return Object.keys(e).map((function(n) {
													return e[n]
												})).every((function(e) {
													return "string" == typeof e
												}))
											}
										}), new q({
											type: "callback"
										})]), 3);
									return t = i[0], e = i[1], n = i[2], te(this._iid, (function(n) {
										t ? n(t, null) : I.get(r._iid).container.apiClient.getMetaData({
											channelUrl: r.url,
											isOpenChannel: r.isOpenChannel(),
											keys: e
										}, (function(e, t) {
											return n(e, t)
										}))
									}), n)
								}
							}, {
								key: "getAllMetaData",
								value: function(e) {
									var n = this;
									return te(this._iid, (function(e) {
										I.get(n._iid).container.apiClient.getMetaData({
											channelUrl: n.url,
											isOpenChannel: n.isOpenChannel(),
											keys: []
										}, (function(n, t) {
											return e(n, t)
										}))
									}), e)
								}
							}, {
								key: "createMetaData",
								value: function(e, n) {
									var t, r = this,
										i = C(q.parse(arguments, [new q({
											type: "object",
											constraint: function(e) {
												return e && !Array.isArray(e) && 0 < Object.keys(e).length && Object.keys(e).map((function(n) {
													return e[n]
												})).every((function(e) {
													return "string" == typeof e
												}))
											}
										}), new q({
											type: "callback"
										})]), 3);
									return t = i[0], e = i[1], n = i[2], te(this._iid, (function(n) {
										t ? n(t, null) : I.get(r._iid).container.apiClient.createMetaData({
											channelUrl: r.url,
											isOpenChannel: r.isOpenChannel(),
											metaData: e
										}, (function(e, t) {
											return n(e, t)
										}))
									}), n)
								}
							}, {
								key: "updateMetaData",
								value: function(e, n, t) {
									var r, i = this,
										s = C(q.parse(arguments, [new q({
											type: "object",
											constraint: function(e) {
												return e && !Array.isArray(e) && 0 < Object.keys(e).length && Object.keys(e).map((function(n) {
													return e[n]
												})).every((function(e) {
													return "string" == typeof e
												}))
											}
										}), new q({
											type: "boolean",
											optional: !0,
											defaultValue: !1
										}), new q({
											type: "callback"
										})]), 4);
									return r = s[0], e = s[1], n = s[2], t = s[3], te(this._iid, (function(t) {
										r ? t(r, null) : I.get(i._iid).container.apiClient.updateMetaData({
											channelUrl: i.url,
											isOpenChannel: i.isOpenChannel(),
											metaData: e,
											upsert: n
										}, (function(e, n) {
											return t(e, n)
										}))
									}), t)
								}
							}, {
								key: "deleteMetaData",
								value: function(e, n) {
									var t, r = this,
										i = C(q.parse(arguments, [new q({
											type: "string"
										}), new q({
											type: "callback"
										})]), 3);
									return t = i[0], e = i[1], n = i[2], te(this._iid, (function(n) {
										t ? n(t, null) : I.get(r._iid).container.apiClient.deleteMetaData({
											channelUrl: r.url,
											isOpenChannel: r.isOpenChannel(),
											key: e
										}, (function(e, t) {
											return n(e, t)
										}))
									}), n)
								}
							}, {
								key: "deleteAllMetaData",
								value: function(e) {
									var n = this;
									return te(this._iid, (function(e) {
										I.get(n._iid).container.apiClient.deleteAllMetaData({
											channelUrl: n.url,
											isOpenChannel: n.isOpenChannel()
										}, (function(n, t) {
											return e(n, t)
										}))
									}), e)
								}
							}, {
								key: "_updateMessageMetaArray",
								value: function(e, n, t, r) {
									var i = this;
									return te(this._iid, (function(r) {
										var s = L.get(i._iid),
											a = s.Command,
											o = s.UserMessage,
											u = s.FileMessage,
											l = s.AdminMessage,
											c = null;
										if (n.isUserMessage() ? c = a.bUpdateUserMessage({
												channelUrl: e,
												messageId: n.messageId,
												metaArrayParams: t
											}) : n.isFileMessage() && (c = a.bUpdateFileMessage({
												channelUrl: e,
												messageId: n.messageId,
												metaArrayParams: t
											})), c) {
											var d = kn.getInstance(i._iid);
											d.sendCommand(c, (function(e, t) {
												if (d.getErrorFirstCallback()) {
													var i = [e, t];
													t = i[0], e = i[1]
												}
												var s = null;
												t || (n.isUserMessage() ? s = new o(e.getJsonElement()) : n.isFileMessage() ? s = new u(e.getJsonElement()) : n.isAdminMessage() && (s = new l(e.getJsonElement()))), r(t, s)
											}))
										} else r(q.error, null)
									}), r)
								}
							}, {
								key: "createMessageMetaArrayKeys",
								value: function(e, n, t) {
									var r, i = L.get(this._iid).MessageMetaArray,
										s = C(q.parse(arguments, [new q({
											type: se
										}), new q({
											type: "array",
											constraint: function(e) {
												return e.every((function(e) {
													return "string" == typeof e && "" !== e
												}))
											}
										}), new q({
											type: "callback"
										})]), 4);
									if (r = s[0], e = s[1], n = s[2], t = s[3], r) return te(this._iid, (function(e) {
										e(r, null)
									}), t);
									var a = [];
									if (Array.isArray(n))
										for (var o = 0; o < n.length; o++) {
											var u = n[o];
											a.push(new i(u, []))
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
									var r, i = L.get(this._iid).MessageMetaArray,
										s = C(q.parse(arguments, [new q({
											type: se
										}), new q({
											type: "array",
											constraint: function(e) {
												return e.every((function(e) {
													return "string" == typeof e && "" !== e
												}))
											}
										}), new q({
											type: "callback"
										})]), 4);
									if (r = s[0], e = s[1], n = s[2], t = s[3], r) return te(this._iid, (function(e) {
										e(r, null)
									}), t);
									var a = [];
									if (Array.isArray(n))
										for (var o = 0; o < n.length; o++) {
											var u = n[o];
											a.push(new i(u, []))
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
									var r, i = L.get(this._iid).MessageMetaArray,
										s = C(q.parse(arguments, [new q({
											type: se
										}), new q({
											type: "object",
											constraint: function(e) {
												return e && (Array.isArray(e) && 0 < e.length && e.every((function(e) {
													return e instanceof i
												})) || 0 < Object.keys(e).length && Object.keys(e).every((function(n) {
													return Array.isArray(e[n]) && 0 < e[n].length && e[n].every((function(e) {
														return "string" == typeof e && 0 < e.length
													}))
												})))
											}
										}), new q({
											type: "callback"
										})]), 4);
									if (r = s[0], e = s[1], n = s[2], t = s[3], r) return te(this._iid, (function(e) {
										e(r, null)
									}), t);
									var a = Array.isArray(n) ? n.map((function(e) {
										return e.encode()
									})) : Object.keys(n).map((function(e) {
										return {
											key: e,
											value: n[e]
										}
									}));
									return this._updateMessageMetaArray(this.url, e, {
										array: a,
										mode: "add",
										upsert: !0
									}, t)
								}
							}, {
								key: "removeMessageMetaArrayValues",
								value: function(e, n, t) {
									var r, i = L.get(this._iid).MessageMetaArray,
										s = C(q.parse(arguments, [new q({
											type: se
										}), new q({
											type: "object",
											constraint: function(e) {
												return e && (Array.isArray(e) && 0 < e.length && e.every((function(e) {
													return e instanceof i
												})) || 0 < Object.keys(e).length && Object.keys(e).every((function(n) {
													return Array.isArray(e[n]) && 0 < e[n].length && e[n].every((function(e) {
														return "string" == typeof e && 0 < e.length
													}))
												})))
											}
										}), new q({
											type: "callback"
										})]), 4);
									if (r = s[0], e = s[1], n = s[2], t = s[3], r) return te(this._iid, (function(e) {
										e(r, null)
									}), t);
									var a = Array.isArray(n) ? n.map((function(e) {
										return e.encode()
									})) : Object.keys(n).map((function(e) {
										return {
											key: e,
											value: n[e]
										}
									}));
									return this._updateMessageMetaArray(this.url, e, {
										array: a,
										mode: "remove",
										upsert: !0
									}, t)
								}
							}, {
								key: "report",
								value: function(e, n, t) {
									var r, i = this,
										s = L.get(this._iid).BaseChannel,
										a = C(q.parse(arguments, [new q({
											type: s.ReportCategory
										}), new q({
											type: "string"
										}), new q({
											type: "callback"
										})]), 4);
									return r = a[0], e = a[1], n = a[2], t = a[3], te(this._iid, (function(t) {
										if (r) t(r, null);
										else {
											var s = kn.getInstance(i._iid);
											I.get(i._iid).container.apiClient.report({
												channelUrl: i.url,
												isOpenChannel: i.isOpenChannel(),
												reportCategory: e,
												reportingUserId: s.currentUser ? s.currentUser.userId : null,
												reportDescription: n
											}, (function(e, n) {
												t(e, null)
											}))
										}
									}), t)
								}
							}, {
								key: "reportUser",
								value: function(e, n, t, r) {
									var i, s = this,
										a = L.get(this._iid).BaseChannel,
										o = C(q.parse(arguments, [new q({
											type: ae
										}), new q({
											type: a.ReportCategory
										}), new q({
											type: "string"
										}), new q({
											type: "callback"
										})]), 5);
									return i = o[0], e = o[1], n = o[2], t = o[3], r = o[4], te(this._iid, (function(r) {
										if (i) r(i, null);
										else {
											var a = kn.getInstance(s._iid);
											I.get(s._iid).container.apiClient.reportUser({
												channelUrl: s.url,
												isOpenChannel: s.isOpenChannel(),
												reportCategory: n,
												offendingUserId: e.userId,
												reportingUserId: a.currentUser ? a.currentUser.userId : null,
												reportDescription: t
											}, (function(e, n) {
												r(e, null)
											}))
										}
									}), r)
								}
							}, {
								key: "reportMessage",
								value: function(e, n, t, r) {
									var i, s = this,
										a = L.get(this._iid).BaseChannel,
										o = C(q.parse(arguments, [new q({
											type: se
										}), new q({
											type: a.ReportCategory
										}), new q({
											type: "string"
										}), new q({
											type: "callback"
										})]), 5);
									return i = o[0], e = o[1], n = o[2], t = o[3], r = o[4], te(this._iid, (function(r) {
										if (i) r(i, null);
										else {
											var a = kn.getInstance(s._iid);
											I.get(s._iid).container.apiClient.reportMessage({
												messageId: e.messageId,
												channelUrl: s.url,
												isOpenChannel: s.isOpenChannel(),
												reportCategory: n,
												offendingUserId: e.sender.userId,
												reportingUserId: a.currentUser ? a.currentUser.userId : null,
												reportDescription: t
											}, (function(e, n) {
												r(e, null)
											}))
										}
									}), r)
								}
							}], [{
								key: "buildMessage",
								value: function(e, n) {
									var t = L.get(this._iid),
										r = t.UserMessage,
										i = t.FileMessage,
										s = t.AdminMessage;
									if (e) switch (e.hasOwnProperty("channel_type") || (e.channel_type = n.channelType), e.type) {
										case "MESG":
											return new r(e);
										case "FILE":
											var a = e.file;
											return new i(c(c({}, e), {}, {
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
							}, {
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
							}]), e
						}(),
						le = function() {
							function e(n) {
								a(this, e), n && (this.category = n.hasOwnProperty("cat") ? parseInt(n.cat) : 0, this.data = n.hasOwnProperty("data") ? n.data : null, this.channelUrl = n.hasOwnProperty("channel_url") ? String(n.channel_url) : "", this.channelType = n.hasOwnProperty("channel_type") ? String(n.channel_type) : ue.CHANNEL_TYPE_GROUP)
							}
							return u(e, [{
								key: "isGroupChannel",
								value: function() {
									return this.channelType === ue.CHANNEL_TYPE_GROUP
								}
							}, {
								key: "isOpenChannel",
								value: function() {
									return this.channelType === ue.CHANNEL_TYPE_OPEN
								}
							}]), e
						}();

					function ce(e) {
						a(this, ce), e && (this.category = e.hasOwnProperty("cat") ? parseInt(e.cat) : 0)
					}
					le.CATEGORY_NONE = 0, le.CATEGORY_CHANNEL_ENTER = 10102, le.CATEGORY_CHANNEL_EXIT = 10103, le.CATEGORY_USER_CHANNEL_MUTE = 10201, le.CATEGORY_USER_CHANNEL_UNMUTE = 10200, le.CATEGORY_USER_CHANNEL_BAN = 10601, le.CATEGORY_USER_CHANNEL_UNBAN = 10600, le.CATEGORY_CHANNEL_FREEZE = 10701, le.CATEGORY_CHANNEL_UNFREEZE = 10700, le.CATEGORY_TYPING_START = 10900, le.CATEGORY_TYPING_END = 10901, le.CATEGORY_CHANNEL_JOIN = 1e4, le.CATEGORY_CHANNEL_LEAVE = 10001, le.CATEGORY_CHANNEL_OPERATOR_UPDATE = 10002, le.CATEGORY_CHANNEL_INVITE = 10020, le.CATEGORY_CHANNEL_DECLINE_INVITE = 10022, le.CATEGORY_CHANNEL_PROP_CHANGED = 11e3, le.CATEGORY_CHANNEL_DELETED = 12e3, le.CATEGORY_CHANNEL_META_DATA_CHANGED = 11100, le.CATEGORY_CHANNEL_META_COUNTERS_CHANGED = 11200, le.CATEGORY_CHANNEL_HIDE = 13e3, le.CATEGORY_CHANNEL_UNHIDE = 13001, ce.CATEGORY_USER_BLOCK = 20001, ce.CATEGORY_USER_UNBLOCK = 2e4, ce.CATEGORY_FRIEND_DISCOVERED = 20900;
					var de = function() {
							function e(n) {
								a(this, e), this.sb = n, this.cls = L.get(this.sb._iid)
							}
							return u(e, [{
								key: "onRawCommandReceived",
								value: function(e) {
									var n = this,
										t = this.cls,
										r = t.Command,
										i = t.User,
										a = t.Member,
										o = t.BaseChannel,
										u = t.GroupChannel,
										l = t.OpenChannel,
										c = t.UserMessage,
										d = t.FileMessage,
										h = t.AdminMessage,
										p = t.BaseMessageParams,
										f = t.ReactionEvent,
										_ = t.ReadStatus,
										g = t.ThreadInfoUpdateEvent,
										y = I.get(this.sb._iid),
										m = y.container,
										v = m.pinger,
										C = m.auth,
										E = m.subscribedUnreadMessageCount,
										b = m.ackStateMap,
										U = new r(e),
										S = U.getJsonElement();
									if (S.hasOwnProperty("unread_cnt") && "object" === s(S.unread_cnt)) {
										var k = !1,
											R = S.unread_cnt.ts;
										if ("number" == typeof R && R > E.ts) {
											if (E.all !== S.unread_cnt.all && (k = !0), E.all = 0 <= S.unread_cnt.all ? S.unread_cnt.all : 0, S.unread_cnt.custom_types)
												for (var T in S.unread_cnt.custom_types) E.custom_types[T] !== S.unread_cnt.custom_types[T] && (k = !0), E.custom_types[T] = S.unread_cnt.custom_types[T];
											k = k && 0 < E.ts, E.ts = R
										}
										if (k)
											for (var M in this.sb.userEventHandlers) this.sb.userEventHandlers[M].onTotalUnreadMessageCountUpdated(E.all, E.custom_types)
									}
									var w = U.requestId;
									if (w) {
										var L = b[w];
										if (L) {
											clearTimeout(L.timer);
											var P = L.handler;
											P && ("EROR" === U.command ? P(new N(S.message, S.code), null) : P(null, U)), b.hasOwnProperty(w) && delete b[w]
										}
									} else switch (v && "LOGI" !== U.command && v.start(), U.command) {
										case "LOGI":
											this.sb.loginTimer && (clearTimeout(this.sb.loginTimer), this.sb.loginTimer = null, this.sb.onLoginTimerCancel = null, S.hasOwnProperty("error") ? (this.sb.isSessionOpened = !1, this.sb.loginHandler(new N(S.message, S.code), null)) : (this.sb.isSessionOpened = !0, S.hasOwnProperty("key") && (C.sessionKey = S.key), S.hasOwnProperty("ekey") && (C.eKey = S.ekey), S.hasOwnProperty("user_id") && (this.sb.currentUser = new i(S)), "number" == typeof S.ping_interval && 0 < S.ping_interval && y.set("pingInterval", 1e3 * S.ping_interval), "number" == typeof S.pong_timeout && 0 < S.pong_timeout && y.set("pongTimeout", 1e3 * S.pong_timeout), "number" == typeof S.login_ts && y.set("connectedAt", 1e3 * S.login_ts), "number" == typeof S.max_unread_cnt_on_super_group ? y.set("maxUnreadCountOfSuperGroupChannel", S.max_unread_cnt_on_super_group) : y.set("maxUnreadCountOfSuperGroupChannel", A.DEFAULT_MAX_UNREAD_COUNT_OF_SUPER_GROUP_CHANNEL), v && v.start(), S.hasOwnProperty("file_upload_size_limit") && S.hasOwnProperty("premium_feature_list") && S.hasOwnProperty("emoji_hash") && y.set("appInfo", new J(S)), this.sb.loginHandler(null, this.sb.currentUser)), this.sb.connecting = !1, this.sb.reconnecting = !1);
											break;
										case "MESG":
										case "FILE":
										case "BRDM":
										case "ADMM":
											var D = null;
											if ("MESG" === U.command ? D = new c(S) : "FILE" === U.command ? D = new d(S) : "BRDM" !== U.command && "ADMM" !== U.command || (D = new h(S)), D) {
												var F = this.sb.currentUser ? this.sb.currentUser.userId : null,
													G = D.silent,
													x = !!S.force_update_last_message,
													j = D._sender && D._sender.userId === F;
												if (D.isGroupChannel()) {
													var z = r.bMessageAck({
														channelUrl: D.channelUrl,
														messageId: D.messageId
													});
													this.sb.sendCommand(z);
													var B = u.cachedChannels.hasOwnProperty(D.channelUrl);
													u.getChannel(D.channelUrl, A.INTERNAL_CALL, (function(e, t) {
														if (n.sb.getErrorFirstCallback()) {
															var r = [e, t];
															t = r[0], e = r[1]
														}
														if (!t) {
															if (e.isHidden = !1, e.hiddenState = u.HiddenState.UNHIDDEN, u.cachedChannels[e.url] = e, D._sender && e.memberMap.hasOwnProperty(D._sender.userId)) {
																var i = e.memberMap[D._sender.userId];
																i.nickname !== D._sender.nickname && (i.nickname = D._sender.nickname), i.profileUrl !== D._sender.profileUrl && (i.profileUrl = D._sender.profileUrl), H.deepEqual(i.metaData, D._sender.metaData) || (i.metaData = D._sender.metaData), i.isBlockedByMe !== D._sender.isBlockedByMe && (i.isBlockedByMe = D._sender.isBlockedByMe)
															}
															var s = n.sb.currentUser;
															s && j && (s.nickname !== D._sender.nickname && (s.nickname = D._sender.nickname), s.profileUrl !== D._sender.profileUrl && (s.profileUrl = D._sender.profileUrl), H.deepEqual(s.metaData, D._sender.metaData) || (s.metaData = D._sender.metaData));
															var a = !1;
															if (D.mentionType === p.MentionType.CHANNEL) j || (a = !0);
															else if (D.mentionType === p.MentionType.USERS)
																for (var o = 0; o < D.mentionedUsers.length; o++)
																	if (!j && D.mentionedUsers[o].userId === F) {
																		a = !0;
																		break
																	} if (G && !j || (e.isEphemeral || B) && ((!e.lastMessage || e.lastMessage.createdAt < D.createdAt) && (e.lastMessage = D), j || e._setGroupChannelUnreadCount(e.unreadMessageCount + 1, e.unreadMentionCount + (a ? 1 : 0))), x && (!e.lastMessage || e.lastMessage.createdAt < D.createdAt) && (e.lastMessage = D), !G || j)
																for (var l in n.sb.channelHandlers) n.sb.channelHandlers[l].onChannelChanged(e);
															for (var c in n.sb.channelHandlers) {
																var d = n.sb.channelHandlers[c];
																d.onMessageReceived(e, D), a && d.onMentionReceived(e, D)
															}
														}
													}))
												} else D.isOpenChannel() && l.getChannel(D.channelUrl, A.INTERNAL_CALL, (function(e, t) {
													if (n.sb.getErrorFirstCallback()) {
														var r = [e, t];
														t = r[0], e = r[1]
													}
													if (!t) {
														var i = !1;
														if (D.mentionType === p.MentionType.CHANNEL) i = !0;
														else if (D.mentionType === p.MentionType.USERS)
															for (var s = 0; s < D.mentionedUsers.length; s++)
																if (D.mentionedUsers[s].userId === F) {
																	i = !0;
																	break
																} for (var a in n.sb.channelHandlers) {
															var o = n.sb.channelHandlers[a];
															l.enteredChannels[e.url] && o.onMessageReceived(e, D), i && o.onMentionReceived(e, D)
														}
													}
												}))
											}
											break;
										case "MEDI":
										case "FEDI":
										case "AEDI":
											var q = null;
											if ("MEDI" === U.command ? q = new c(S) : "FEDI" === U.command ? q = new d(S) : "AEDI" === U.command && (q = new h(S)), q) {
												var Q = this.sb.currentUser ? this.sb.currentUser.userId : null,
													Y = q.silent,
													K = q.sender && q.sender.userId === Q;
												if (q.isGroupChannel()) {
													var V = u.cachedChannels.hasOwnProperty(q.channelUrl);
													u.getChannel(q.channelUrl, A.INTERNAL_CALL, (function(e, t) {
														if (n.sb.getErrorFirstCallback()) {
															var r = [e, t];
															t = r[0], e = r[1]
														}
														if (!t) {
															var i = e.cachedReadReceiptStatus[Q],
																s = i && i >= q.createAt,
																a = n.sb.currentUser;
															a && K && (a.nickname !== q._sender.nickname && (a.nickname = q._sender.nickname), a.profileUrl !== q._sender.profileUrl && (a.profileUrl = q._sender.profileUrl), H.deepEqual(a.metaData, q._sender.metaData) || (a.metaData = q._sender.metaData));
															var o = !1,
																u = !1;
															if (!K && !s && S && S.hasOwnProperty("old_values")) {
																var l = S.old_values.mention_type || q.mentionType,
																	c = S.old_values.mentioned_user_ids || q.mentionedUsers.map((function(e) {
																		return e.userId
																	}));
																if (l === p.MentionType.USERS && q.mentionType === p.MentionType.USERS) {
																	for (var d = !1, h = !1, f = 0; f < c.length; f++)
																		if (c[f] === Q) {
																			d = !0;
																			break
																		} for (var _ = 0; _ < q.mentionedUsers.length; _++)
																		if (q.mentionedUsers[_].userId === Q) {
																			h = !0;
																			break
																		}! d && h && (u = !0, !Y && V && (e._setGroupChannelUnreadCount(e.unreadMessageCount, e.unreadMentionCount + 1), o = !0))
																} else if (l === p.MentionType.USERS && q.mentionType === p.MentionType.CHANNEL) {
																	for (var g = !1, y = 0; y < c.length; y++)
																		if (c[y] === Q) {
																			g = !0;
																			break
																		} g || (u = !0, !Y && V && (e._setGroupChannelUnreadCount(e.unreadMessageCount, e.unreadMentionCount + 1), o = !0))
																}
															}
															if (!e.lastMessage || e.lastMessage.createdAt < q.createdAt ? (e.lastMessage = q, o = !0) : e.lastMessage.createdAt === q.createdAt && e.lastMessage.messageId === q.messageId && (V ? e.lastMessage.updatedAt < q.updatedAt && (e.lastMessage = q, o = !0) : o = !0), (!Y || K) && o)
																for (var m in n.sb.channelHandlers) n.sb.channelHandlers[m].onChannelChanged(e);
															for (var v in n.sb.channelHandlers) {
																var C = n.sb.channelHandlers[v];
																C.onMessageUpdated(e, q), u && C.onMentionReceived(e, q)
															}
														}
													}))
												} else q.isOpenChannel() && l.getChannel(q.channelUrl, A.INTERNAL_CALL, (function(e, t) {
													if (n.sb.getErrorFirstCallback()) {
														var r = [e, t];
														t = r[0], e = r[1]
													}
													if (!t)
														for (var i in n.sb.channelHandlers) n.sb.channelHandlers[i].onMessageUpdated(e, q)
												}))
											}
											break;
										case "DELM":
											var W = String(S.channel_type),
												Z = String(S.channel_url),
												X = String(S.msg_id);
											switch (W) {
												case o.CHANNEL_TYPE_GROUP:
													u.getChannel(Z, A.INTERNAL_CALL, (function(e, t) {
														if (n.sb.getErrorFirstCallback()) {
															var r = [e, t];
															t = r[0], e = r[1]
														}
														if (t) O.debug("Discard command", U.command);
														else
															for (var i in n.sb.channelHandlers) n.sb.channelHandlers[i].onMessageDeleted(e, X)
													}));
													break;
												case o.CHANNEL_TYPE_OPEN:
													l.getChannel(Z, A.INTERNAL_CALL, (function(e, t) {
														if (n.sb.getErrorFirstCallback()) {
															var r = [e, t];
															t = r[0], e = r[1]
														}
														if (t) O.debug("Discard command", U.command);
														else
															for (var i in n.sb.channelHandlers) n.sb.channelHandlers[i].onMessageDeleted(e, X)
													}))
											}
											break;
										case "READ":
											var $ = new _(S),
												ee = u.cachedChannels.hasOwnProperty($.channelUrl);
											u.getChannel($.channelUrl, A.INTERNAL_CALL, (function(e, t) {
												if (n.sb.getErrorFirstCallback()) {
													var r = [e, t];
													t = r[0], e = r[1]
												}
												if (!t && (ee && e.updateReadReceipt($.reader.userId, $.timestamp), n.sb.currentUser))
													if ($.reader.userId === n.sb.currentUser.userId) {
														if (ee) {
															if (0 < e.unreadMessageCount || 0 < e.unreadMentionCount)
																for (var i in e._setGroupChannelUnreadCount(0, 0), n.sb.channelHandlers) n.sb.channelHandlers[i].onChannelChanged(e)
														} else if (0 === e.unreadMessageCount || 0 === e.unreadMentionCount)
															for (var s in n.sb.channelHandlers) n.sb.channelHandlers[s].onChannelChanged(e)
													} else
														for (var a in n.sb.channelHandlers) n.sb.channelHandlers[a].onReadReceiptUpdated(e)
											}));
											break;
										case "MRCT":
											var ne = String(S.channel_type),
												te = String(S.channel_url),
												re = f.createFromJson(S);
											switch (ne) {
												case o.CHANNEL_TYPE_GROUP:
													u.getChannel(te, A.INTERNAL_CALL, (function(e, t) {
														if (n.sb.getErrorFirstCallback()) {
															var r = [e, t];
															t = r[0], e = r[1]
														}
														if (t) O.debug("Discard command", U.command);
														else
															for (var i in n.sb.channelHandlers) n.sb.channelHandlers[i].onReactionUpdated(e, re)
													}));
													break;
												case o.CHANNEL_TYPE_OPEN:
													l.getChannel(te, A.INTERNAL_CALL, (function(e, t) {
														if (n.sb.getErrorFirstCallback()) {
															var r = [e, t];
															t = r[0], e = r[1]
														}
														if (t) O.debug("Discard command", U.command);
														else
															for (var i in n.sb.channelHandlers) n.sb.channelHandlers[i].onReactionUpdated(e, re)
													}))
											}
											break;
										case "DLVR":
											var ie = String(S.channel_url),
												se = S.hasOwnProperty("updated") ? S.updated : null,
												ae = u.cachedChannels.hasOwnProperty(ie);
											u.getChannel(ie, A.INTERNAL_CALL, (function(e, t) {
												if (n.sb.getErrorFirstCallback()) {
													var r = [e, t];
													t = r[0], e = r[1]
												}
												if (!t) {
													var i = !1;
													for (var s in se) n.sb.currentUser && s === n.sb.currentUser.userId && (i = !0), ae && e.updateDeliveryReceipt(s, parseInt(se[s]));
													if (u.cachedChannels[e.url] = e, !i || 1 !== Object.keys(se).length)
														for (var a in n.sb.channelHandlers) n.sb.channelHandlers[a].onDeliveryReceiptUpdated(e)
												}
											}));
											break;
										case "MTHD":
											var oe = String(S.channel_url),
												ue = String(S.channel_type),
												de = g.createFromJson(S);
											switch (ue) {
												case o.CHANNEL_TYPE_GROUP:
													u.getChannel(oe, A.INTERNAL_CALL, (function(e, t) {
														if (n.sb.getErrorFirstCallback()) {
															var r = [e, t];
															t = r[0], e = r[1]
														}
														if (!t)
															for (var i in n.sb.channelHandlers) n.sb.channelHandlers[i].onThreadInfoUpdated(e, de)
													}));
													break;
												case o.CHANNEL_TYPE_OPEN:
													l.getChannel(oe, A.INTERNAL_CALL, (function(e, t) {
														if (n.sb.getErrorFirstCallback()) {
															var r = [e, t];
															t = r[0], e = r[1]
														}
														if (!t)
															for (var i in n.sb.channelHandlers) n.sb.channelHandlers[i].onThreadInfoUpdated(e, de)
													}))
											}
											break;
										case "SYEV":
											var he = new le(S);
											switch (he.category) {
												case le.CATEGORY_CHANNEL_JOIN:
												case le.CATEGORY_CHANNEL_LEAVE:
													u.getChannel(he.channelUrl, A.INTERNAL_CALL, (function(e, t) {
														if (n.sb.getErrorFirstCallback()) {
															var r = [e, t];
															t = r[0], e = r[1]
														}
														if (t) O.debug("Discard command", U.command, he.category);
														else {
															var s = he.data.hasOwnProperty("member_count") ? he.data.member_count : null,
																o = he.data.hasOwnProperty("joined_member_count") ? he.data.joined_member_count : null;
															if (he.category === le.CATEGORY_CHANNEL_JOIN)(he.data.hasOwnProperty("users") ? he.data.users : [he.data]).forEach((function(t) {
																e.isSuper || e.isBroadcast ? e.setLatestMemberCount(s, o, S.ts) : (t.state = a.JOINED, e.addMember(new a(t)), e.updateJoinedMemberCount());
																var r = new i(t);
																for (var l in n.sb.currentUser && r.userId === n.sb.currentUser.userId && (e.myMemberState = "joined", u.cachedChannels[e.url] = e), n.sb.channelHandlers) n.sb.channelHandlers[l].onUserJoined(e, r)
															}));
															else {
																var l = new i(he.data);
																for (var c in n.sb.currentUser && l.userId === n.sb.currentUser.userId ? (e.isPublic || u.removeCachedChannel(he.channelUrl), e.myMemberState = "none", e.invitedAt = 0, e._setGroupChannelUnreadCount(0, 0)) : u.cachedChannels[e.url] = e, e.isSuper || e.isBroadcast ? e.setLatestMemberCount(s, o, S.ts) : (e.removeMember(l), e.updateJoinedMemberCount()), n.sb.channelHandlers) n.sb.channelHandlers[c].onUserLeft(e, l)
															}
														}
													}));
													break;
												case le.CATEGORY_CHANNEL_OPERATOR_UPDATE:
													he.isGroupChannel() ? u.getChannel(he.channelUrl, A.INTERNAL_CALL, (function(e, t) {
														if (n.sb.getErrorFirstCallback()) {
															var r = [e, t];
															t = r[0], e = r[1]
														}
														if (t) O.debug("Discard command", U.command, he.category);
														else {
															var s = he.data.operators.map((function(e) {
																	return new i(e)
																})),
																a = s.map((function(e) {
																	return e.userId
																}));
															for (var o in e.members) e.members[o].role = 0 <= a.indexOf(e.members[o].userId) ? u.Role.OPERATOR : u.Role.NONE;
															for (var l in e.myRole = n.sb.currentUser && 0 <= a.indexOf(n.sb.currentUser.userId) ? u.Role.OPERATOR : u.Role.NONE, n.sb.channelHandlers) n.sb.channelHandlers[l].onOperatorUpdated(e, s)
														}
													})) : he.isOpenChannel() && l.getChannel(he.channelUrl, A.INTERNAL_CALL, (function(e, t) {
														if (n.sb.getErrorFirstCallback()) {
															var r = [e, t];
															t = r[0], e = r[1]
														}
														if (t) O.debug("Discard command", U.command, he.category);
														else
															for (var s in e.operators = he.data.operators.map((function(e) {
																	return new i(e)
																})), n.sb.channelHandlers) n.sb.channelHandlers[s].onOperatorUpdated(e, e.operators)
													}));
													break;
												case le.CATEGORY_CHANNEL_INVITE:
													u.getChannel(he.channelUrl, A.INTERNAL_CALL, (function(e, t) {
														if (n.sb.getErrorFirstCallback()) {
															var r = [e, t];
															t = r[0], e = r[1]
														}
														if (t) O.debug("Discard command", U.command, he.category);
														else {
															var s = null;
															he.data && he.data.inviter && 0 < Object.keys(he.data.inviter).length && (s = new i(he.data.inviter));
															for (var o = [], l = 0; l < he.data.invitees.length; l++) {
																var c = new i(he.data.invitees[l]);
																o.push(c), he.data.invitees[l].state = a.INVITED;
																var d = new a(he.data.invitees[l]);
																if (e.isSuper || e.isBroadcast) {
																	var h = he.data.hasOwnProperty("member_count") ? he.data.member_count : null,
																		p = he.data.hasOwnProperty("joined_member_count") ? he.data.joined_member_count : null;
																	e.setLatestMemberCount(h, p, S.ts)
																} else e.addMember(d);
																n.sb.currentUser && d.userId === n.sb.currentUser.userId && (e.isHidden = !1, "joined" !== e.myMemberState && (e.myMemberState = "invited"), e.invitedAt = S.ts, u.cachedChannels[e.url] = e)
															}
															for (var f in n.sb.channelHandlers) n.sb.channelHandlers[f].onUserReceivedInvitation(e, s, o)
														}
													}));
													break;
												case le.CATEGORY_CHANNEL_DECLINE_INVITE:
													u.getChannel(he.channelUrl, A.INTERNAL_CALL, (function(e, t) {
														if (n.sb.getErrorFirstCallback()) {
															var r = [e, t];
															t = r[0], e = r[1]
														}
														if (t) O.debug("Discard command", U.command, he.category);
														else {
															var s = null;
															he.data && he.data.inviter && 0 < Object.keys(he.data.inviter).length && (s = new i(he.data.inviter));
															var a = new i(he.data.invitee);
															if (n.sb.currentUser && a.userId === n.sb.currentUser.userId && (e.invitedAt = 0, e.myMemberState = "none", e.isPublic || u.removeCachedChannel(he.channelUrl)), e.isSuper || e.isBroadcast) {
																var o = he.data.hasOwnProperty("member_count") ? he.data.member_count : null,
																	l = he.data.hasOwnProperty("joined_member_count") ? he.data.joined_member_count : null;
																e.setLatestMemberCount(o, l, S.ts)
															} else e.removeMember(a);
															for (var c in n.sb.currentUser && a.userId !== n.sb.currentUser.userId && (u.cachedChannels[e.url] = e), n.sb.channelHandlers) n.sb.channelHandlers[c].onUserDeclinedInvitation(e, s, a)
														}
													}));
													break;
												case le.CATEGORY_TYPING_START:
												case le.CATEGORY_TYPING_END:
													u.getChannel(he.channelUrl, A.INTERNAL_CALL, (function(e, t) {
														if (n.sb.getErrorFirstCallback()) {
															var r = [e, t];
															t = r[0], e = r[1]
														}
														if (t) O.debug("Discard command", U.command, he.category);
														else {
															var s = new i(he.data);
															for (var a in he.category === le.CATEGORY_TYPING_START ? e.updateTypingStatus(s, !0) : e.updateTypingStatus(s, !1), n.sb.channelHandlers) n.sb.channelHandlers[a].onTypingStatusUpdated(e)
														}
													}));
													break;
												case le.CATEGORY_CHANNEL_ENTER:
												case le.CATEGORY_CHANNEL_EXIT:
													l.getChannel(he.channelUrl, A.INTERNAL_CALL, (function(e, t) {
														if (n.sb.getErrorFirstCallback()) {
															var r = [e, t];
															t = r[0], e = r[1]
														}
														if (t) O.debug("Discard command", U.command, he.category);
														else {
															he.data.hasOwnProperty("participant_count") && (e.participantCount = he.data.participant_count);
															var s = new i(he.data);
															if (he.category === le.CATEGORY_CHANNEL_ENTER)
																for (var a in n.sb.channelHandlers) n.sb.channelHandlers[a].onUserEntered(e, s);
															else
																for (var o in n.sb.channelHandlers) n.sb.channelHandlers[o].onUserExited(e, s)
														}
													}));
													break;
												case le.CATEGORY_USER_CHANNEL_MUTE:
												case le.CATEGORY_USER_CHANNEL_UNMUTE:
													he.isOpenChannel() ? l.getChannel(he.channelUrl, A.INTERNAL_CALL, (function(e, t) {
														if (n.sb.getErrorFirstCallback()) {
															var r = [e, t];
															t = r[0], e = r[1]
														}
														if (t) O.debug("Discard command", U.command, he.category);
														else {
															var s = new i(he.data);
															if (he.category === le.CATEGORY_USER_CHANNEL_MUTE)
																for (var a in n.sb.channelHandlers) n.sb.channelHandlers[a].onUserMuted(e, s);
															else
																for (var o in n.sb.channelHandlers) n.sb.channelHandlers[o].onUserUnmuted(e, s)
														}
													})) : u.getChannel(he.channelUrl, A.INTERNAL_CALL, (function(e, t) {
														if (n.sb.getErrorFirstCallback()) {
															var r = [e, t];
															t = r[0], e = r[1]
														}
														if (t) O.debug("Discard command", U.command, he.category);
														else {
															var s = new i(he.data);
															if (n.sb.currentUser && s.userId === n.sb.currentUser.userId && (e.myMutedState = he.category === le.CATEGORY_USER_CHANNEL_MUTE ? "muted" : "unmuted"), he.category === le.CATEGORY_USER_CHANNEL_MUTE)
																for (var a in n.sb.channelHandlers) n.sb.channelHandlers[a].onUserMuted(e, s);
															else
																for (var o in n.sb.channelHandlers) n.sb.channelHandlers[o].onUserUnmuted(e, s)
														}
													}));
													break;
												case le.CATEGORY_USER_CHANNEL_BAN:
												case le.CATEGORY_USER_CHANNEL_UNBAN:
													he.isOpenChannel() ? l.getChannel(he.channelUrl, A.INTERNAL_CALL, (function(e, t) {
														if (n.sb.getErrorFirstCallback()) {
															var r = [e, t];
															t = r[0], e = r[1]
														}
														if (t) O.debug("Discard command", U.command, he.category);
														else {
															var s = new i(he.data);
															if (he.category === le.CATEGORY_USER_CHANNEL_BAN)
																for (var a in n.sb.currentUser && s.userId === n.sb.currentUser.userId && (delete l.enteredChannels[he.channelUrl], n.cls.FileMessageQueue.delete(he.channelUrl)), n.sb.channelHandlers) n.sb.channelHandlers[a].onUserBanned(e, s);
															else
																for (var o in n.sb.channelHandlers) n.sb.channelHandlers[o].onUserUnbanned(e, s)
														}
													})) : u.getChannel(he.channelUrl, A.INTERNAL_CALL, (function(e, t) {
														if (n.sb.getErrorFirstCallback()) {
															var r = [e, t];
															t = r[0], e = r[1]
														}
														if (t) O.debug("Discard command", U.command, he.category);
														else {
															var s = new i(he.data);
															if (he.category === le.CATEGORY_USER_CHANNEL_BAN) {
																if (n.sb.currentUser && s.userId === n.sb.currentUser.userId && (e.isPublic || u.removeCachedChannel(he.channelUrl), e.myMemberState = "none", e.invitedAt = 0, e._setGroupChannelUnreadCount(0, 0)), e.isSuper || e.isBroadcast) {
																	var a = he.data.hasOwnProperty("member_count") ? he.data.member_count : null,
																		o = he.data.hasOwnProperty("joined_member_count") ? he.data.joined_member_count : null;
																	e.setLatestMemberCount(a, o, S.ts)
																} else e.removeMember(s), e.updateJoinedMemberCount();
																for (var l in n.sb.channelHandlers) n.sb.channelHandlers[l].onUserBanned(e, s)
															} else
																for (var c in n.sb.channelHandlers) n.sb.channelHandlers[c].onUserUnbanned(e, s)
														}
													}));
													break;
												case le.CATEGORY_CHANNEL_FREEZE:
												case le.CATEGORY_CHANNEL_UNFREEZE:
													he.isOpenChannel() ? l.getChannel(he.channelUrl, A.INTERNAL_CALL, (function(e, t) {
														if (n.sb.getErrorFirstCallback()) {
															var r = [e, t];
															t = r[0], e = r[1]
														}
														if (t) O.debug("Discard command", U.command, he.category);
														else if (e.isFrozen = he.data.freeze, l.cachedChannels[e.url] = e, he.category === le.CATEGORY_CHANNEL_FREEZE)
															for (var i in n.sb.channelHandlers) n.sb.channelHandlers[i].onChannelFrozen(e);
														else
															for (var s in n.sb.channelHandlers) n.sb.channelHandlers[s].onChannelUnfrozen(e)
													})) : u.getChannel(he.channelUrl, A.INTERNAL_CALL, (function(e, t) {
														if (n.sb.getErrorFirstCallback()) {
															var r = [e, t];
															t = r[0], e = r[1]
														}
														if (t) O.debug("Discard command", U.command, he.category);
														else if (e.isFrozen = he.data.freeze, u.cachedChannels[e.url] = e, he.category === le.CATEGORY_CHANNEL_FREEZE)
															for (var i in n.sb.channelHandlers) n.sb.channelHandlers[i].onChannelFrozen(e);
														else
															for (var s in n.sb.channelHandlers) n.sb.channelHandlers[s].onChannelUnfrozen(e)
													}));
													break;
												case le.CATEGORY_CHANNEL_DELETED:
													for (var pe in he.isGroupChannel() ? u.removeCachedChannel(he.channelUrl) : l.removeCachedChannel(he.channelUrl), this.sb.channelHandlers) this.sb.channelHandlers[pe].onChannelDeleted(he.channelUrl, he.isGroupChannel() ? "group" : "open");
													break;
												case le.CATEGORY_CHANNEL_PROP_CHANGED:
													he.isOpenChannel() ? l.getChannelWithoutCache(he.channelUrl, (function(e, t) {
														if (n.sb.getErrorFirstCallback()) {
															var r = [e, t];
															t = r[0], e = r[1]
														}
														if (t) O.debug("Discard command", U.command, he.category);
														else
															for (var i in n.sb.channelHandlers) n.sb.channelHandlers[i].onChannelChanged(e)
													})) : u.getChannelWithoutCache(he.channelUrl, (function(e, t) {
														if (n.sb.getErrorFirstCallback()) {
															var r = [e, t];
															t = r[0], e = r[1]
														}
														if (t) O.debug("Discard command", U.command, he.category);
														else {
															var i = e.unreadMessageCount,
																s = e.unreadMentionCount;
															for (var a in e.myCountPreference !== u.CountPreference.ALL && (e.myCountPreference === u.CountPreference.UNREAD_MESSAGE_COUNT_ONLY ? s = 0 : e.myCountPreference === u.CountPreference.UNREAD_MENTION_COUNT_ONLY ? i = 0 : s = i = 0), e._setGroupChannelUnreadCount(i, s), n.sb.channelHandlers) n.sb.channelHandlers[a].onChannelChanged(e)
														}
													}));
													break;
												case le.CATEGORY_CHANNEL_META_DATA_CHANGED:
												case le.CATEGORY_CHANNEL_META_COUNTERS_CHANGED:
													var fe = he.data.hasOwnProperty("created"),
														_e = he.data.hasOwnProperty("updated"),
														ge = he.data.hasOwnProperty("deleted");
													he.isOpenChannel() ? l.getChannel(he.channelUrl, A.INTERNAL_CALL, (function(e, t) {
														if (n.sb.getErrorFirstCallback()) {
															var r = [e, t];
															t = r[0], e = r[1]
														}
														if (t) O.debug("Discard command", U.command, he.category);
														else
															for (var i in n.sb.channelHandlers) {
																var s = n.sb.channelHandlers[i];
																he.category === le.CATEGORY_CHANNEL_META_DATA_CHANGED ? (fe && s.onMetaDataCreated(e, he.data.created), _e && s.onMetaDataUpdated(e, he.data.updated), ge && s.onMetaDataDeleted(e, he.data.deleted)) : (fe && s.onMetaCountersCreated(e, he.data.created), _e && s.onMetaCountersUpdated(e, he.data.updated), ge && s.onMetaCountersDeleted(e, he.data.deleted))
															}
													})) : u.getChannel(he.channelUrl, A.INTERNAL_CALL, (function(e, t) {
														if (n.sb.getErrorFirstCallback()) {
															var r = [e, t];
															t = r[0], e = r[1]
														}
														if (t) O.debug("Discard command", U.command, he.category);
														else
															for (var i in n.sb.channelHandlers) {
																var s = n.sb.channelHandlers[i];
																he.category === le.CATEGORY_CHANNEL_META_DATA_CHANGED ? (fe && s.onMetaDataCreated(e, he.data.created), _e && s.onMetaDataUpdated(e, he.data.updated), ge && s.onMetaDataDeleted(e, he.data.deleted)) : (fe && s.onMetaCountersCreated(e, he.data.created), _e && s.onMetaCountersUpdated(e, he.data.updated), ge && s.onMetaCountersDeleted(e, he.data.deleted))
															}
													}));
													break;
												case le.CATEGORY_CHANNEL_HIDE:
												case le.CATEGORY_CHANNEL_UNHIDE:
													u.getChannel(he.channelUrl, A.INTERNAL_CALL, (function(e, t) {
														if (n.sb.getErrorFirstCallback()) {
															var r = [e, t];
															t = r[0], e = r[1]
														}
														if (t) O.debug("Discard command", U.command, he.category);
														else if (he.category === le.CATEGORY_CHANNEL_HIDE)
															for (var i in e.isHidden = !0, he.data && (he.data.hasOwnProperty("allow_auto_unhide") && (e.hiddenState = he.data.allow_auto_unhide ? u.HiddenState.HIDDEN_ALLOW_AUTO_UNHIDE : u.HiddenState.HIDDEN_PREVENT_AUTO_UNHIDE), he.data.hasOwnProperty("hide_previous_messages") && he.data.hide_previous_messages && e._setGroupChannelUnreadCount(0, 0)), S.hasOwnProperty("ts_message_offset") && (e._messageOffsetTimestamp = S.ts_message_offset), u.cachedChannels[e.url] = e, n.sb.channelHandlers) n.sb.channelHandlers[i].onChannelHidden(e);
														else
															for (var s in e.isHidden = !1, e.hiddenState = u.HiddenState.UNHIDDEN, u.cachedChannels[e.url] = e, n.sb.channelHandlers) n.sb.channelHandlers[s].onChannelChanged(e)
													}))
											}
											break;
										case "USEV":
											var ye = new le(S);
											switch (ye.category) {
												case ce.CATEGORY_USER_BLOCK:
												case ce.CATEGORY_USER_UNBLOCK:
													var me = ye.data.blocker.user_id,
														ve = ye.data.blockee.user_id;
													Object.keys(u.cachedChannels).forEach((function(e) {
														var t = u.cachedChannels[e];
														try {
															n.sb.currentUser && (n.sb.currentUser.userId === me ? t.memberMap[ve].isBlockedByMe = ye.category === ce.CATEGORY_USER_BLOCK : n.sb.currentUser.userId === ve && (t.memberMap[me].isBlockingMe = ye.category === ce.CATEGORY_USER_BLOCK))
														} catch (e) {}
													}));
													break;
												case ce.CATEGORY_FRIEND_DISCOVERED:
													var Ce = ye.data.friend_discoveries.map((function(e) {
														return new i(e)
													}));
													for (var Ee in this.sb.userEventHandlers) this.sb.userEventHandlers[Ee].onFriendsDiscovered(Ce)
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
											O.debug("Discard command", U.command)
									}
								}
							}]), e
						}(),
						he = {},
						pe = {},
						fe = function() {
							function e(n) {
								a(this, e), this.channel = n, this.uploadQueue = [], this.messageQueue = [], this.latestTimestampToSendMessage = 0, L.get(this._iid).FileMessageQueue.queueMap[n.url] = this
							}
							return u(e, [{
								key: "_handleMessageQueueUpdated",
								value: function(e) {
									var n = this;
									switch (O.debug("fileMessageQueue message queue updated: ", this.messageQueue), e) {
										case "add":
											this.uploadQueue.length < 6 && this._moveFirstPendingMessageToUploadQueue();
											break;
										case "update":
										case "remove":
											if (0 < this.messageQueue.length) {
												var t = L.get(this._iid).FileMessageQueue,
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
									switch (O.debug("fileMessageQueue upload queue updated: ", this.uploadQueue), e) {
										case "add":
											var r = L.get(this._iid).FileMessageQueue;
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
									var e = L.get(this._iid).FileMessageQueue,
										n = this.messageQueue.filter((function(n) {
											return n.state === e.State.PENDING
										}));
									if (0 < n.length) {
										var t = n[0];
										this.uploadQueue.push(t), this._handleUploadQueueUpdated("add", t)
									}
								}
							}, {
								key: "_sendUploadedMessage",
								value: function(e, n) {
									var t = L.get(this._iid),
										r = t.Command,
										i = t.FileMessage,
										s = e.fileInfo,
										a = r.bFile(c(c({}, s), {}, {
											requestId: e.requestId,
											channelUrl: this.channel.url,
											url: s.file,
											metaArrays: s.metaArrays
										})),
										o = kn.getInstance(this._iid),
										u = I.get(this._iid);
									o.getConnectionState() !== o.ConnectionState.OPEN && o.currentUser && !o.connecting ? u.container.apiClient.sendFileMessage(c(c({
										channelUrl: this.channel.url,
										isOpenChannel: this.channel.isOpenChannel()
									}, s), {}, {
										fileUrl: s.file,
										fileName: s.name,
										fileSize: s.size,
										fileType: s.type,
										metaArrays: s.metaArrays
									}), (function(e, t) {
										var r = new i(e ? a.getJsonElement() : t);
										e && (r.requestedMentionUserIds = s.mentionedUserIds), n(e, r)
									})) : o.sendCommand(a, (function(e, t) {
										if (o.getErrorFirstCallback()) {
											var r = [e, t];
											t = r[0], e = r[1]
										}
										if (t) {
											var u = new i(a.getJsonElement());
											u.requestedMentionUserIds = s.mentionedUserIds, n(t, u)
										} else {
											var l = new i(e.getJsonElement());
											n(null, l)
										}
									}))
								}
							}, {
								key: "_uploadFile",
								value: function(e, n) {
									var t = e.fileInfo,
										r = e.pendingMessage;
									if ("string" != typeof t.file && t.file) {
										var i = L.get(this._iid).FileMessageQueue;
										I.get(this._iid).container.apiClient.uploadFile(c(c({}, t), {}, {
											fileType: t.type,
											channelUrl: this.channel.url,
											reqId: r ? r.reqId : null
										}), (function(r, a) {
											if (r) e.state = i.State.SENT, e.error = r, e.response = null, n(t);
											else {
												var o = "object" === s(a) ? a : JSON.parse(a);
												t.file = o.url, t.thumbnailSizes = o.hasOwnProperty("thumbnails") ? o.thumbnails : [], t.requireAuth = !!o.hasOwnProperty("require_auth") && o.require_auth, n(t)
											}
										}))
									} else t.thumbnailSizes = [], t.requireAuth = !1, n(t)
								}
							}, {
								key: "_finalizeUpload",
								value: function(e) {
									var n = this.uploadQueue.map((function(e) {
										return e.requestId
									})).indexOf(e);
									if (-1 < n) {
										var t = this.uploadQueue.splice(n, 1);
										0 < t.length && this._handleUploadQueueUpdated("remove", t[0])
									}
								}
							}, {
								key: "_finalizeMessage",
								value: function() {
									var e = this,
										n = I.get(this._iid).container.isErrorFirstInCallback,
										t = kn.getInstance(this._iid),
										r = L.get(this._iid),
										i = r.GroupChannel,
										s = (r.BaseMessage, r.FileMessageQueue),
										a = this.messageQueue[0];
									if (a && a.state === s.State.SENT) {
										a.state = s.State.DONE;
										var o = a.response,
											u = a.error,
											l = a.fileInfo.callback;
										if (o && !u) {
											var c = t.currentUser;
											if (c && o._sender && c.userId === o._sender.userId && (c.nickname !== o._sender.nickname && (c.nickname = o._sender.nickname), c.profileUrl !== o._sender.profileUrl && (c.profileUrl = o._sender.profileUrl)), this.channel.isGroupChannel()) return void i.getChannel(this.channel.url, A.INTERNAL_CALL, (function(r, i) {
												if (t.getErrorFirstCallback()) {
													var s = [r, i];
													i = s[0], r = s[1]
												}
												if (i) n ? l(null, o) : l(o, null), e.messageQueue.shift(), e._handleMessageQueueUpdated("remove");
												else {
													for (var a in r.lastMessage = o, t.channelHandlers) t.channelHandlers[a].onChannelChanged(r);
													n ? l(i, o) : l(o, i), e.messageQueue.shift(), e._handleMessageQueueUpdated("remove")
												}
											}))
										}
										u && (o = a.pendingMessage) && (u.code !== N.INVALID_PARAMETER ? (o.requestState = t.MessageRequestState.FAILED, o.sendingStatus = t.MessageSendingStatus.FAILED, u.code !== N.FILE_UPLOAD_CANCEL_FAILED && u.code !== N.REQUEST_CANCELED || (o.sendingStatus = t.MessageSendingStatus.CANCELED), o.requestedMentionUserIds = a.fileInfo.mentionedUserIds, o.errorCode = u.code) : o = null), n ? l(u, o) : l(o, u), this.messageQueue.shift(), this._handleMessageQueueUpdated("remove")
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
									this._finalizeUpload(e);
									var t = this.messageQueue.map((function(e) {
										return e.requestId
									})).indexOf(e);
									if (-1 < t) {
										var r = L.get(this._iid).FileMessageQueue,
											i = this.messageQueue[t];
										!i || i.state !== r.State.UPLOADING && i.state !== r.State.PENDING || (i.state = r.State.SENT, i.response = null, i.error = new N("Uploading has been completed or canceled.", N.FILE_UPLOAD_CANCEL_FAILED), this._handleMessageQueueUpdated("update"));
										var s = r.uploadRequest[e];
										if (s) return s.cancel("Upload has been canceled."), n(null, !0), !0;
										n(new N("Uploading has been completed or canceled.", N.FILE_UPLOAD_CANCEL_FAILED), !1)
									} else n(new N("Uploading has been completed or canceled.", N.FILE_UPLOAD_CANCEL_FAILED), !1);
									return !1
								}
							}], [{
								key: "getByChannelUrl",
								value: function(e) {
									return L.get(this._iid).FileMessageQueue.queueMap[e]
								}
							}, {
								key: "create",
								value: function(e) {
									var n = L.get(this._iid).FileMessageQueue;
									return n.queueMap.hasOwnProperty(e.url) || (n.queueMap[e.url] = new n(e)), n.queueMap[e.url]
								}
							}, {
								key: "delete",
								value: function(e) {
									var n = L.get(this._iid).FileMessageQueue;
									n.queueMap.hasOwnProperty(e) && delete n.queueMap[e]
								}
							}, {
								key: "clear",
								value: function() {
									pe[this._iid] = {}
								}
							}, {
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
								key: "queueMap",
								get: function() {
									return pe[this._iid] || (pe[this._iid] = {}), pe[this._iid]
								}
							}, {
								key: "uploadRequest",
								get: function() {
									return he[this._iid] || (he[this._iid] = {}), he[this._iid]
								}
							}]), e
						}();

					function _e() {
						a(this, _e), this.channelCustomTypesFilter = [], this.superChannelFilter = ke.SuperChannelFilter.ALL
					}

					function ge() {
						a(this, ge), this.onReconnectStarted = function() {}, this.onReconnectSucceeded = function() {}, this.onReconnectFailed = function() {}
					}

					function ye() {
						a(this, ye), this.onFriendsDiscovered = function(e) {}, this.onTotalUnreadMessageCountUpdated = function(e, n) {}
					}

					function me() {
						a(this, me), this.onMessageReceived = function(e, n) {}, this.onMessageUpdated = function(e, n) {}, this.onMessageDeleted = function(e, n) {}, this.onReadReceiptUpdated = function(e) {}, this.onReactionUpdated = function(e, n) {}, this.onDeliveryReceiptUpdated = function(e) {}, this.onTypingStatusUpdated = function(e) {}, this.onUserJoined = function(e, n) {}, this.onUserLeft = function(e, n) {}, this.onOperatorUpdated = function(e, n) {}, this.onUserEntered = function(e, n) {}, this.onUserExited = function(e, n) {}, this.onUserMuted = function(e, n) {}, this.onUserUnmuted = function(e, n) {}, this.onUserBanned = function(e, n) {}, this.onUserUnbanned = function(e, n) {}, this.onChannelFrozen = function(e) {}, this.onChannelUnfrozen = function(e) {}, this.onChannelChanged = function(e) {}, this.onChannelDeleted = function(e, n) {}, this.onUserReceivedInvitation = function(e, n, t) {}, this.onUserDeclinedInvitation = function(e, n, t) {}, this.onMetaDataCreated = function(e, n) {}, this.onMetaDataUpdated = function(e, n) {}, this.onMetaDataDeleted = function(e, n) {}, this.onMetaCountersCreated = function(e, n) {}, this.onMetaCountersUpdated = function(e, n) {}, this.onMetaCountersDeleted = function(e, n) {}, this.onChannelHidden = function(e) {}, this.onMentionReceived = function(e, n) {}, this.onThreadInfoUpdated = function(e, n) {}
					}

					function ve(e) {
						if (a(this, ve), e) {
							var n = L.get(this._iid),
								t = n.User,
								r = n.BaseChannel;
							this.reader = new t(e.user), this.timestamp = parseInt(e.ts), this.channelUrl = e.hasOwnProperty("channel_url") ? String(e.channel_url) : "", this.channelType = e.hasOwnProperty("channel_type") ? String(e.channel_type) : r.CHANNEL_TYPE_GROUP
						}
					}
					fe.Job = function e(n) {
						var t = n.fileInfo,
							r = n.requestId,
							i = n.pendingMessage,
							s = n.state,
							o = n.error,
							u = void 0 === o ? null : o,
							l = n.response,
							c = void 0 === l ? null : l;
						a(this, e), this.fileInfo = t, this.requestId = r, this.pendingMessage = i, this.state = s || fe.State.PENDING, this.error = u, this.response = c
					};
					var Ce = function() {
							function e() {
								a(this, e)
							}
							return u(e, null, [{
								key: "create",
								value: function() {
									return "".concat(parseInt(1e5 * Math.random()), "-").concat((new Date).getTime())
								}
							}]), e
						}(),
						Ee = {},
						be = {},
						Ue = new WeakMap,
						Ae = new WeakMap,
						Se = new WeakMap,
						ke = function() {
							d(n, ue);
							var e = m(n);

							function n(t) {
								var r;
								return a(this, n), (r = e.call(this, t)).channelType = ue.CHANNEL_TYPE_GROUP, r.isDistinct = !1, r.isSuper = !1, r.isBroadcast = !1, r.isPublic = !1, r.unreadMessageCount = 0, r.inviter = null, r.members = [], r.memberMap = {}, r.lastMessage = null, r.memberCount = 0, r.joinedMemberCount = 0, r.cachedReadReceiptStatus = {}, r.cachedDeliveryReceiptStatus = null, r.myPushTriggerOption = n.PushTriggerOption.DEFAULT, r.isPushEnabled, r.isHidden = !1, r.hiddenState = n.HiddenState.UNHIDDEN, r.isDiscoverable = !0, r.myLastRead = 0, r.messageSurvivalSeconds = -1, r._messageOffsetTimestamp = 0, r._cachedLastDeliveredReceipt = {
									sentAt: 0,
									timeout: null
								}, Ue.set(y(r), {}), Ae.set(y(r), {
									start: 0,
									end: 0
								}), Se.set(y(r), 0), t && r._update(t), r
							}
							return u(n, [{
								key: "_setGroupChannelUnreadCount",
								value: function(e, n) {
									try {
										if ("number" == typeof e && 0 <= e)
											if ("all" === this.myCountPreference || "unread_message_count_only" === this.myCountPreference)
												if (this.isSuper || this.isBroadcast) {
													var t = I.get(this._iid).container.maxUnreadCountOfSuperGroupChannel;
													this.unreadMessageCount = t <= e ? t : e
												} else this.unreadMessageCount = e;
										else this.unreadMessageCount = 0;
										"number" == typeof n && 0 <= n && ("all" === this.myCountPreference || "unread_mention_count_only" === this.myCountPreference ? this.unreadMentionCount = n : this.unreadMentionCount = 0)
									} catch (e) {}
								}
							}, {
								key: "_update",
								value: function(e) {
									var n = L.get(this._iid),
										t = n.BaseChannel,
										r = n.GroupChannel,
										i = n.User,
										a = n.Member;
									if (this.isAccessCodeRequired = !!e.is_access_code_required && e.is_access_code_required, this.isDistinct = !!e.is_distinct && e.is_distinct, this.isPushEnabled = !!e.is_push_enabled && e.is_push_enabled, this.isHidden = !!e.hasOwnProperty("is_hidden") && e.is_hidden, this.myPushTriggerOption = e.push_trigger_option ? e.push_trigger_option : r.PushTriggerOption.DEFAULT, this.myCountPreference = e.hasOwnProperty("count_preference") ? e.count_preference : r.CountPreference.ALL, this.unreadMessageCount = 0, this.unreadMentionCount = 0, this._setGroupChannelUnreadCount(parseInt(e.unread_message_count), parseInt(e.unread_mention_count)), e.hasOwnProperty("read_receipt"))
										for (var o in this.cachedReadReceiptStatus = {}, e.read_receipt) {
											var u = e.read_receipt[o];
											this.updateReadReceipt(o, parseInt(u))
										}
									if (e.hasOwnProperty("delivery_receipt") && "object" === s(e.delivery_receipt) && null !== e.delivery_receipt)
										for (var l in this.cachedDeliveryReceiptStatus || (this.cachedDeliveryReceiptStatus = {}), e.delivery_receipt) {
											var c = e.delivery_receipt[l];
											this.updateDeliveryReceipt(l, parseInt(c))
										}
									if (e.hasOwnProperty("user_last_read") && "number" == typeof e.user_last_read ? this.myLastRead = e.user_last_read : this.myLastRead = 0, e.hasOwnProperty("members")) {
										this.members = [], this.memberMap = {};
										for (var d = 0; d < e.members.length; d++) {
											var h = new a(e.members[d]);
											this.members.push(h), this.memberMap[h.userId] = h
										}
									}
									this.myMemberState = e.member_state || "none", this.myRole = e.my_role || r.Role.NONE, e.hasOwnProperty("is_muted") ? "string" == typeof e.is_muted ? this.myMutedState = e.is_muted : "boolean" == typeof e.is_muted ? this.myMutedState = e.is_muted ? "muted" : "unmuted" : this.myMutedState = "unmuted" : this.myMutedState = "unmuted", e.hasOwnProperty("member_count") && (this.memberCount = parseInt(e.member_count)), e.hasOwnProperty("joined_member_count") && (this.joinedMemberCount = parseInt(e.joined_member_count)), e.hasOwnProperty("last_message") && "object" === s(e.last_message) && e.last_message ? e.last_message instanceof se ? this.lastMessage = e.last_message : this.lastMessage = t.buildMessage(e.last_message, this) : this.lastMessage = null, e.hasOwnProperty("inviter") && null !== e.inviter && "object" === s(e.inviter) && 0 < Object.keys(e.inviter).length ? this.inviter = new i(e.inviter) : this.inviter = null, this.invitedAt = e.invited_at || 0, e.hasOwnProperty("is_super") && "boolean" == typeof e.is_super ? this.isSuper = e.is_super : this.isSuper = !1, e.hasOwnProperty("is_broadcast") && "boolean" == typeof e.is_broadcast ? this.isBroadcast = e.is_broadcast : this.isBroadcast = !1, e.hasOwnProperty("is_public") && "boolean" == typeof e.is_public ? this.isPublic = e.is_public : this.isPublic = !1, e.hasOwnProperty("hidden_state") ? this.hiddenState = e.hidden_state : this.hiddenState = r.HiddenState.UNHIDDEN, e.hasOwnProperty("is_discoverable") && "boolean" == typeof e.is_discoverable ? this.isDiscoverable = e.is_discoverable : this.isDiscoverable = this.isPublic, e.hasOwnProperty("ts_message_offset") && (this._messageOffsetTimestamp = e.ts_message_offset), e.hasOwnProperty("message_survival_seconds") && "number" == typeof e.message_survival_seconds && (this.messageSurvivalSeconds = e.message_survival_seconds)
								}
							}, {
								key: "addMember",
								value: function(e) {
									if (!this.isSuper && !this.isBroadcast) {
										var n = L.get(this._iid).Member,
											t = this.removeMember(e);
										t && t.state === n.JOINED && (e.state = n.JOINED), this.memberMap[e.userId] = e, this.members.push(e), this.memberCount++, this.updateReadReceipt(e.userId, 0), this.updateDeliveryReceipt(e.userId, 0)
									}
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
									return H.deepEqual(this, e)
								}
							}, {
								key: "createMemberListQuery",
								value: function() {
									return new(L.get(this._iid).MemberListQuery)(this.url)
								}
							}, {
								key: "createBannedUserListQuery",
								value: function() {
									return new(L.get(this._iid).BannedUserListQuery)({
										channelUrl: this.url,
										isOpenChannel: this.isOpenChannel()
									})
								}
							}, {
								key: "refresh",
								value: function(e) {
									return L.get(this._iid).GroupChannel.getChannelWithoutCache(this.url, e)
								}
							}, {
								key: "updateChannel",
								value: function() {
									var e = this,
										n = q.toArray(arguments),
										t = void 0;
									"function" == typeof n[n.length - 1] && (t = n.pop());
									var r = L.get(this._iid),
										i = r.GroupChannel,
										s = r.GroupChannelParams;
									if (n[0] instanceof s && 1 === n.length) return te(this._iid, (function(t) {
										var r = n[0];
										r.channelUrl = e.url, r._validate() ? I.get(e._iid).container.apiClient.updateGroupChannel(c(c({}, r), {}, {
											operatorUserIds: r.operatorUserIds
										}), (function(e, n) {
											var r = null;
											e || (r = i.upsert(n)), t(e, r)
										})) : t(q.error, null)
									}), t);
									if (3 === n.length) {
										var a = new s;
										return a.channelUrl = this.url, a.name = n[0], "string" == typeof n[1] ? a.coverUrl = n[1] : a.coverImage = n[1], a.data = n[2], this.updateChannel(a, t)
									}
									if (4 === n.length) {
										var o = new s;
										return o.channelUrl = this.url, o.isDistinct = n[0], o.name = n[1], "string" == typeof n[1] ? o.coverUrl = n[2] : o.coverImage = n[2], o.data = n[3], this.updateChannel(o, t)
									}
									if (5 !== n.length) return te(this._iid, (function(e) {
										return e(q.error, null)
									}), t);
									var u = new s;
									return u.channelUrl = this.url, u.isDistinct = n[0], u.name = n[1], "string" == typeof n[2] ? u.coverUrl = n[2] : u.coverImage = n[2], u.data = n[3], u.customType = n[4], this.updateChannel(u, t)
								}
							}, {
								key: "invite",
								value: function(e, n) {
									var t, r = C(q.parse(arguments, [new q({
										type: "array",
										constraint: function(e) {
											return 0 < e.length && e.every((function(e) {
												return !!e.userId && "string" == typeof e.userId
											}))
										}
									}), new q({
										type: "callback"
									})]), 3);
									return t = r[0], e = r[1], n = r[2], t ? te(this._iid, (function(e) {
										return e(q.error, null)
									}), n) : this.inviteWithUserIds(e.map((function(e) {
										return e.userId
									})), n)
								}
							}, {
								key: "inviteWithUserIds",
								value: function(e, n) {
									var t, r = this,
										i = C(q.parse(arguments, [new q({
											type: "array",
											constraint: function(e) {
												return e.every((function(e) {
													return "string" == typeof e
												}))
											}
										}), new q({
											type: "callback"
										})]), 3);
									return t = i[0], e = i[1], n = i[2], te(this._iid, (function(n) {
										t ? n(t, null) : I.get(r._iid).container.apiClient.inviteToGroupChannel({
											channelUrl: r.url,
											userIds: e
										}, (function(e, t) {
											var i = null;
											e || (i = L.get(r._iid).GroupChannel.upsert(t)), n(e, i)
										}))
									}), n)
								}
							}, {
								key: "acceptInvitation",
								value: function(e, n) {
									var t, r = this,
										i = C(q.parse(arguments, [new q({
											type: "string",
											optional: !0,
											defaultValue: null
										}), new q({
											type: "callback"
										})]), 3);
									return t = i[0], e = i[1], n = i[2], te(this._iid, (function(n) {
										t ? n(t, null) : I.get(r._iid).container.apiClient.acceptInvitation({
											channelUrl: r.url,
											accessCode: e
										}, (function(e, t) {
											var i = null;
											e || ((i = L.get(r._iid).GroupChannel.upsert(t)).myMemberState = "joined"), n(e, i)
										}))
									}), n)
								}
							}, {
								key: "declineInvitation",
								value: function(e) {
									var n = this;
									return te(this._iid, (function(e) {
										I.get(n._iid).container.apiClient.declineInvitation({
											channelUrl: n.url
										}, (function(t, r) {
											var i = null;
											if (!t) {
												var s = L.get(n._iid).GroupChannel;
												(i = s.upsert(r)).myMemberState = "none", n.isPublic || s.removeCachedChannel(n.url)
											}
											e(t, i)
										}))
									}), e)
								}
							}, {
								key: "join",
								value: function(e, n) {
									var t, r = this,
										i = C(q.parse(arguments, [new q({
											type: "string",
											optional: !0,
											defaultValue: null
										}), new q({
											type: "callback"
										})]), 3);
									return t = i[0], e = i[1], n = i[2], te(this._iid, (function(n) {
										t ? n(t, null) : I.get(r._iid).container.apiClient.joinGroupChannel({
											channelUrl: r.url,
											accessCode: e
										}, (function(e, t) {
											var i = null;
											e || ((i = L.get(r._iid).GroupChannel.upsert(t)).myMemberState = "joined"), n(e, i)
										}))
									}), n)
								}
							}, {
								key: "leave",
								value: function(e) {
									var n = this;
									return te(this._iid, (function(e) {
										I.get(n._iid).container.apiClient.leaveGroupChannel({
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
									var i, s = this,
										a = C(q.parse(arguments, [new q({
											type: "string"
										}), new q({
											type: "number",
											optional: !0,
											defaultValue: -1,
											constraint: function(e) {
												return -1 <= e
											}
										}), new q({
											type: "string",
											optional: !0,
											defaultValue: ""
										}), new q({
											type: "callback"
										})]), 5);
									return i = a[0], e = a[1], n = a[2], t = a[3], r = a[4], te(this._iid, (function(r) {
										i ? r(i, null) : I.get(s._iid).container.apiClient.muteUser({
											channelUrl: s.url,
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
									var t, r = this,
										i = C(q.parse(arguments, [new q({
											type: "string"
										}), new q({
											type: "callback"
										})]), 3);
									return t = i[0], e = i[1], n = i[2], te(this._iid, (function(n) {
										t ? n(t, null) : I.get(r._iid).container.apiClient.unmuteUser({
											channelUrl: r.url,
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
									var i, s = this,
										a = C(q.parse(arguments, [new q({
											type: "string"
										}), new q({
											type: "number",
											optional: !0,
											defaultValue: -1,
											constraint: function(e) {
												return -1 <= e
											}
										}), new q({
											type: "string"
										}), new q({
											type: "callback"
										})]), 5);
									return i = a[0], e = a[1], n = a[2], t = a[3], r = a[4], te(this._iid, (function(r) {
										i ? r(i, null) : I.get(s._iid).container.apiClient.banUser({
											channelUrl: s.url,
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
									var t, r = this,
										i = C(q.parse(arguments, [new q({
											type: "string"
										}), new q({
											type: "callback"
										})]), 3);
									return t = i[0], e = i[1], n = i[2], te(this._iid, (function(n) {
										t ? n(t, null) : I.get(r._iid).container.apiClient.unbanUser({
											channelUrl: r.url,
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
									if (!this.isSuper && !this.isBroadcast) {
										var e = L.get(this._iid).Member;
										this.joinedMemberCount = this.members.filter((function(n) {
											return n.state === e.JOINED
										})).length
									}
								}
							}, {
								key: "setLatestMemberCount",
								value: function(e, n, t) {
									"number" == typeof e && "number" == typeof n && "number" == typeof t && t >= Se.get(this) && (Se.set(this, t), this.memberCount = e, this.joinedMemberCount = n)
								}
							}, {
								key: "hide",
								value: function(e, n, t) {
									var r, i = this,
										s = C(q.parse(arguments, [new q({
											type: "boolean",
											optional: !0,
											defaultValue: !1
										}), new q({
											type: "boolean",
											optional: !0,
											defaultValue: !0
										}), new q({
											type: "callback"
										})]), 4);
									return r = s[0], e = s[1], n = s[2], t = s[3], te(this._iid, (function(t) {
										r ? t(r, null) : I.get(i._iid).container.apiClient.hideGroupChannel({
											channelUrl: i.url,
											hidePreviousMessages: e,
											allowAutoUnhide: n
										}, (function(r, s) {
											if (!r) {
												var a = L.get(i._iid).GroupChannel;
												i.isHidden = !0, i.hiddenState = n ? a.HiddenState.HIDDEN_ALLOW_AUTO_UNHIDE : a.HiddenState.HIDDEN_PREVENT_AUTO_UNHIDE, e && i._setGroupChannelUnreadCount(0, 0), s.hasOwnProperty("ts_message_offset") && (i._messageOffsetTimestamp = s.ts_message_offset), a.cachedChannels[i.url] = i
											}
											t(r, s)
										}))
									}), t)
								}
							}, {
								key: "unhide",
								value: function(e) {
									var n = this;
									return te(this._iid, (function(e) {
										I.get(n._iid).container.apiClient.unhideGroupChannel({
											channelUrl: n.url
										}, (function(t, r) {
											if (!t) {
												var i = L.get(n._iid).GroupChannel;
												n.isHidden = !1, n.hiddenState = i.HiddenState.UNHIDDEN, i.cachedChannels[n.url] = n
											}
											e(t, r)
										}))
									}), e)
								}
							}, {
								key: "freeze",
								value: function(e) {
									var n = this;
									return te(this._iid, (function(e) {
										I.get(n._iid).container.apiClient.freeze({
											channelUrl: n.url,
											isGroupChannel: !0,
											freezing: !0
										}, (function(t, r) {
											t || L.get(n._iid).GroupChannel.upsert(r), e(t, null)
										}))
									}), e)
								}
							}, {
								key: "unfreeze",
								value: function(e) {
									var n = this;
									return te(this._iid, (function(e) {
										I.get(n._iid).container.apiClient.freeze({
											channelUrl: n.url,
											isGroupChannel: !0,
											freezing: !1
										}, (function(t, r) {
											t || L.get(n._iid).GroupChannel.upsert(r), e(t, null)
										}))
									}), e)
								}
							}, {
								key: "delete",
								value: function(e) {
									var n = this;
									return te(this._iid, (function(e) {
										I.get(n._iid).container.apiClient.deleteGroupChannel({
											channelUrl: n.url
										}, (function(t, r) {
											t || L.get(n._iid).GroupChannel.removeCachedChannel(n.url), e(t, r)
										}))
									}), e)
								}
							}, {
								key: "markAsRead",
								value: function() {
									var e = this,
										n = L.get(this._iid).Command,
										t = kn.getInstance(this._iid),
										r = n.bRead({
											channelUrl: this.url
										});
									t.sendCommand(r, (function(n, r) {
										if (t.getErrorFirstCallback()) {
											var i = [n, r];
											r = i[0], n = i[1]
										}
										if (!r && t.currentUser && (e.updateReadReceipt(t.currentUser.userId, n.getJsonElement().ts), 0 < e.unreadMessageCount || 0 < e.unreadMentionCount))
											for (var s in e._setGroupChannelUnreadCount(0, 0), t.channelHandlers) t.channelHandlers[s].onChannelChanged(e)
									}))
								}
							}, {
								key: "getUnreadMemberCount",
								value: function(e) {
									var n = kn.getInstance(this._iid);
									if (e instanceof se && !e.isAdminMessage() && n.currentUser && !this.isSuper && !this.isBroadcast) {
										for (var t = 0, r = e.createdAt, i = this.members, s = 0; s < i.length; s++) {
											var a = i[s];
											n.currentUser.userId === a.userId || e.sender && e.sender.userId === a.userId || (this.cachedReadReceiptStatus[a.userId] || 0) < r && t++
										}
										return t
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
									function e() {
										var e = kn.getInstance(n._iid),
											t = e.currentUser ? e.currentUser.userId : null;
										I.get(n._iid).container.apiClient.markAsDelivered({
											channelUrl: n.url,
											userId: t
										}, (function(e, r) {
											if (e) O.debug(e);
											else {
												var i = r.hasOwnProperty("ts") ? r.ts : 0;
												n.updateDeliveryReceipt(t, i)
											}
										}))
									}
									var n = this,
										t = this._cachedLastDeliveredReceipt;
									t && Date.now() - t.sentAt < 1e3 ? (t.timeout && clearTimeout(t.timeout), t.timeout = setTimeout((function() {
										t.sentAt = Date.now(), e()
									}), t.sentAt + 1e3 - Date.now())) : (t.sentAt = Date.now(), e())
								}
							}, {
								key: "getUndeliveredMemberCount",
								value: function(e) {
									var n = kn.getInstance(this._iid);
									if (this.cachedDeliveryReceiptStatus && e instanceof se && !e.isAdminMessage() && n.currentUser && !this.isSuper && !this.isBroadcast) {
										var t, r = e.createdAt,
											i = 0,
											s = function(e, n) {
												var t;
												if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
													if (Array.isArray(e) || (t = b(e))) {
														t && (e = t);
														var r = 0,
															i = function() {};
														return {
															s: i,
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
															f: i
														}
													}
													throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
												}
												var s, a = !0,
													o = !1;
												return {
													s: function() {
														t = e[Symbol.iterator]()
													},
													n: function() {
														var e = t.next();
														return a = e.done, e
													},
													e: function(e) {
														o = !0, s = e
													},
													f: function() {
														try {
															a || null == t.return || t.return()
														} finally {
															if (o) throw s
														}
													}
												}
											}(this.members);
										try {
											for (s.s(); !(t = s.n()).done;) {
												var a = t.value;
												n.currentUser.userId === a.userId || e.sender && e.sender.userId === a.userId || this.cachedDeliveryReceiptStatus[a.userId] < r && i++
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
								value: function(e, n) {
									var t = 1 < arguments.length && void 0 !== n && n,
										r = kn.getInstance(this._iid);
									if (r.currentUser && !this.isSuper && !this.isBroadcast && e instanceof se && !e.isAdminMessage()) {
										for (var i = [], s = 0; s < this.members.length; s++) {
											var a = this.members[s];
											(t || a.userId !== r.currentUser.userId && a.userId !== e.sender.userId) && (this.cachedReadReceiptStatus[a.userId] || 0) >= e.createdAt && i.push(a)
										}
										return i
									}
									return []
								}
							}, {
								key: "getUnreadMembers",
								value: function(e, n) {
									var t = 1 < arguments.length && void 0 !== n && n,
										r = kn.getInstance(this._iid);
									if (r.currentUser && !this.isSuper && !this.isBroadcast && e instanceof se && !e.isAdminMessage()) {
										for (var i = [], s = 0; s < this.members.length; s++) {
											var a = this.members[s];
											(t || a.userId !== r.currentUser.userId && a.userId !== e.sender.userId) && (this.cachedReadReceiptStatus[a.userId] || 0) < e.createdAt && i.push(a)
										}
										return i
									}
									return []
								}
							}, {
								key: "getReadStatus",
								value: function(e) {
									var n = this,
										t = 0 < arguments.length && void 0 !== e && e,
										r = kn.getInstance(this._iid);
									if (!r.currentUser || this.isSuper || this.isBroadcast) return {};

									function i(e) {
										if (!t && e === r.currentUser.userId) return "continue";
										var i = n.cachedReadReceiptStatus[e],
											a = n.members.filter((function(n) {
												return n.userId === e
											}));
										s[e] = {
											user: 0 < a.length ? a[0] : null,
											last_seen_at: parseInt(i)
										}
									}
									var s = {};
									for (var a in this.cachedReadReceiptStatus) i(a);
									return s
								}
							}, {
								key: "updateReadReceipt",
								value: function(e, n) {
									var t = this.cachedReadReceiptStatus[e];
									if (!t || t < n) {
										this.cachedReadReceiptStatus[e] = n;
										var r = kn.getInstance(this._iid);
										r.currentUser && e === r.currentUser.userId && (this.myLastRead = n)
									}
								}
							}, {
								key: "updateDeliveryReceipt",
								value: function(e, n) {
									if (this.cachedDeliveryReceiptStatus)
										if (this.cachedDeliveryReceiptStatus.hasOwnProperty(e)) {
											var t = this.cachedDeliveryReceiptStatus[e];
											(!t || t < n) && (this.cachedDeliveryReceiptStatus[e] = n)
										} else this.cachedDeliveryReceiptStatus[e] = n
								}
							}, {
								key: "startTyping",
								value: function() {
									var e = kn.getInstance(this._iid),
										n = (new Date).getTime(),
										t = e.Options.typingIndicatorThrottle;
									("number" != typeof t || t < 1e3 || 9e3 < t) && (t = 1e3);
									var r = Ae.get(this);
									if (n - r.start >= t) {
										r.end = 0, r.start = n;
										var i = L.get(this._iid).Command.bTypeStart({
											channelUrl: this.url,
											time: r.start
										});
										e.sendCommand(i, null)
									}
								}
							}, {
								key: "endTyping",
								value: function() {
									var e = kn.getInstance(this._iid),
										n = (new Date).getTime(),
										t = e.Options.typingIndicatorThrottle;
									("number" != typeof t || t < 1e3 || 9e3 < t) && (t = 1e3);
									var r = Ae.get(this);
									if (n - r.end >= t) {
										r.start = 0, r.end = n;
										var i = L.get(this._iid).Command.bTypeEnd({
											channelUrl: this.url,
											time: r.end
										});
										e.sendCommand(i, null)
									}
								}
							}, {
								key: "invalidateTypingStatus",
								value: function() {
									var e = Ue.get(this),
										n = (new Date).getTime(),
										t = !1;
									for (var r in e) 1e4 <= n - e[r] && (delete e[r], t = !0);
									return t
								}
							}, {
								key: "getTypingMembers",
								value: function() {
									var e = Ue.get(this),
										n = [];
									for (var t in e) {
										var r = this.memberMap[t];
										r && n.push(r)
									}
									return n
								}
							}, {
								key: "updateTypingStatus",
								value: function(e, n) {
									var t = Ue.get(this);
									n ? t[e.userId] = (new Date).getTime() : delete t[e.userId]
								}
							}, {
								key: "isTyping",
								value: function() {
									var e = Ue.get(this);
									return 0 !== Object.keys(e).length
								}
							}, {
								key: "registerScheduledUserMessage",
								value: function(e, n) {
									var t, r = this,
										i = L.get(this._iid),
										s = i.ScheduledUserMessage,
										a = i.ScheduledUserMessageParams,
										o = C(q.parse(arguments, [new q({
											type: a,
											constraint: function(e) {
												return "string" == typeof e.message && "string" == typeof e._getScheduleString()
											}
										}), new q({
											type: "callback"
										})]), 3);
									return t = o[0], e = o[1], n = o[2], te(this._iid, (function(n) {
										t ? n(t, null) : I.get(r._iid).container.apiClient.registerScheduledUserMessage({
											groupChannelParams: e,
											channelUrl: r.url,
											isOpenChannel: !1
										}, (function(e, t) {
											var i = null;
											if (!e) {
												i = new s(t);
												var a = kn.getInstance(r._iid).currentUser;
												a && i._sender && a.userId === i._sender.userId && (a.nickname = i._sender.nickname, a.profileUrl = i._sender.profileUrl, a.metaData = i._sender.metaData)
											}
											n(e, i)
										}))
									}), n)
								}
							}, {
								key: "getPushPreference",
								value: function(e) {
									var n = this;
									return te(this._iid, (function(e) {
										I.get(n._iid).container.apiClient.getMyPushTriggerOption({
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
									return te(this._iid, (function(n) {
										var r = L.get(t._iid).GroupChannel;
										I.get(t._iid).container.apiClient.setMyPushTriggerOption({
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
									return te(this._iid, (function(e) {
										I.get(t._iid).container.apiClient.getMyPushTriggerOption({
											channelUrl: t.url
										}, (function(r, i) {
											var s = null;
											if (!r) {
												try {
													s = i.push_trigger_option || n.PushTriggerOption.DEFAULT
												} catch (r) {
													O.debug(r)
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
									var t, r = this,
										i = L.get(this._iid).GroupChannel,
										s = C(q.parse(arguments, [new q({
											type: i.PushTriggerOption
										}), new q({
											type: "callback"
										})]), 3);
									return t = s[0], e = s[1], n = s[2], te(this._iid, (function(n) {
										t ? n(t, null) : I.get(r._iid).container.apiClient.setMyPushTriggerOption({
											channelUrl: r.url,
											pushTriggerOption: e
										}, (function(e, t) {
											var i = null;
											if (!e) {
												try {
													i = t.push_trigger_option
												} catch (e) {
													O.debug(e)
												}
												r.myPushTriggerOption = i
											}
											n(e, i)
										}))
									}), n)
								}
							}, {
								key: "setMyCountPreference",
								value: function(e, n) {
									var t, r = this,
										i = L.get(this._iid).GroupChannel,
										s = C(q.parse(arguments, [new q({
											type: i.CountPreference
										}), new q({
											type: "callback"
										})]), 3);
									return t = s[0], e = s[1], n = s[2], te(this._iid, (function(n) {
										t ? n(t, null) : I.get(r._iid).container.apiClient.setMyCountPreference({
											channelUrl: r.url,
											countPreference: e
										}, (function(e, t) {
											var s = null;
											e || (s = r.myCountPreference = t.count_preference, r._setGroupChannelUnreadCount(r.unreadMessageCount, r.unreadMentionCount), i.cachedChannels[r.url] = r), n(e, s)
										}))
									}), n)
								}
							}, {
								key: "resetMyHistory",
								value: function(e) {
									var n = this;
									return te(this._iid, (function(e) {
										I.get(n._iid).container.apiClient.resetMyHistory({
											channelUrl: n.url
										}, (function(t, r) {
											if (!t && r.hasOwnProperty("ts_message_offset")) {
												var i = L.get(n._iid).GroupChannel;
												n._messageOffsetTimestamp = r.ts_message_offset, i.cachedChannels[n.url] = n
											}
											e(t, r)
										}))
									}), e)
								}
							}, {
								key: "messageOffsetTimestamp",
								get: function() {
									return this._messageOffsetTimestamp
								}
							}], [{
								key: "buildFromSerializedData",
								value: function(e) {
									var n, t = L.get(this._iid),
										r = t.User,
										i = t.Member,
										a = t.GroupChannel,
										o = t.BaseMessage,
										u = t.UserMessage,
										l = t.FileMessage,
										d = t.AdminMessage,
										h = X.deserialize(e);
									return new a({
										channel_url: h.url,
										name: h.name,
										cover_url: h.coverUrl,
										data: h.data,
										custom_type: h.customType,
										invited_at: h.invitedAt,
										created_at: h.createdAt / 1e3,
										is_access_code_required: h.isAccessCodeRequired,
										is_distinct: h.isDistinct,
										is_super: h.isSuper,
										is_broadcast: h.isBroadcast,
										is_public: h.isPublic,
										is_discoverable: h.isDiscoverable,
										freeze: h.isFrozen,
										is_ephemeral: h.isEphemeral,
										unread_message_count: h.unreadMessageCount,
										unread_mention_count: h.unreadMentionCount,
										is_push_enabled: h.isPushEnabled,
										push_trigger_option: h.myPushTriggerOption,
										count_preference: h.myCountPreference,
										is_hidden: h.isHidden,
										hidden_state: h.hiddenState,
										member_count: h.memberCount,
										joined_member_count: h.joinedMemberCount,
										member_state: h.myMemberState,
										my_role: h.myRole,
										is_muted: h.myMutedState,
										user_last_read: h.myLastRead,
										ts_message_offset: h.messageOffsetTimestamp,
										message_survival_seconds: h.messageSurvivalSeconds,
										read_receipt: h.cachedReadReceiptStatus,
										delivery_receipt: h.cachedDeliveryReceiptStatus,
										members: h.members.map((function(e) {
											return i.objectify(c({
												user: e
											}, e))
										})),
										last_message: null != (n = h.lastMessage) && "object" === s(n) ? n.messageType === o.MESSAGE_TYPE_USER ? new u(u.objectify(c(c({}, n), {}, {
											channel: {
												url: n.channelUrl,
												channelType: n.channelType
											},
											user: n.sender,
											mentionedUsers: n.mentionedUsers
										}))) : n.messageType === o.MESSAGE_TYPE_FILE ? new l(l.objectify(c(c({}, n), {}, {
											channel: {
												url: n.channelUrl,
												channelType: n.channelType
											},
											user: n.sender,
											mentionedUsers: n.mentionedUsers
										}))) : new d(d.objectify(c(c({}, n), {}, {
											channel: {
												url: n.channelUrl,
												channelType: n.channelType
											},
											mentionedUsers: n.mentionedUsers
										}))) : null,
										inviter: null !== h.inviter && void 0 !== h.inviter && "object" === s(h.inviter) ? r.objectify(h.inviter) : null
									})
								}
							}, {
								key: "upsert",
								value: function(e) {
									var n = L.get(this._iid).GroupChannel,
										t = new n(e);
									if (n.cachedChannels.hasOwnProperty(t.url)) {
										if (t.isEphemeral) {
											var r = n.cachedChannels[t.url];
											e.last_message = r.lastMessage, e.unread_message_count = r.unreadMessageCount
										}
										n.cachedChannels[t.url].update(e)
									} else n.cachedChannels[t.url] = t;
									return n.cachedChannels[t.url]
								}
							}, {
								key: "removeCachedChannel",
								value: function(e) {
									var n = L.get(this._iid),
										t = n.GroupChannel,
										r = n.FileMessageQueue;
									t.cachedChannels[e] && delete t.cachedChannels[e], r.delete(e)
								}
							}, {
								key: "clearCache",
								value: function() {
									Ee[this._iid] = {}, L.get(this._iid).FileMessageQueue.clear()
								}
							}, {
								key: "getChannel",
								value: function(e, n) {
									var t, r, i = C(q.parse(arguments, [new q({
										type: "string"
									}), new q({
										type: "string",
										optional: !0,
										nullable: !0,
										defaultValue: null
									}), new q({
										type: "callback"
									})]), 4);
									if (t = i[0], e = i[1], r = i[2], n = i[3], t) return te(this._iid, (function(e) {
										e(t, null)
									}), n);
									var s = L.get(this._iid).GroupChannel;
									return s.cachedChannels[e] ? te(this._iid, (function(n) {
										n(null, s.cachedChannels[e])
									}), n) : s.getChannelWithoutCache(e, r, n)
								}
							}, {
								key: "getChannelWithoutCache",
								value: function(e, n) {
									var t, r, i = this,
										s = C(q.parse(arguments, [new q({
											type: "string"
										}), new q({
											type: "string",
											optional: !0,
											nullable: !0,
											defaultValue: null
										}), new q({
											type: "callback"
										})]), 4);
									return t = s[0], e = s[1], r = s[2], n = s[3], te(this._iid, (function(n) {
										t ? n(t, null) : I.get(i._iid).container.apiClient.getGroupChannel({
											channelUrl: e,
											internalCall: r,
											showMember: !0
										}, (function(e, t) {
											var r = null;
											e || (r = i.upsert(t)), n(e, r)
										}))
									}), n)
								}
							}, {
								key: "createDistinctChannelIfNotExist",
								value: function(e, n) {
									var t, r = this,
										i = L.get(this._iid).GroupChannelParams,
										s = C(q.parse(arguments, [new q({
											type: i,
											constraint: function(e) {
												return e._validate()
											}
										}), new q({
											type: "callback"
										})]), 3);
									return t = s[0], e = s[1], n = s[2], te(this._iid, (function(n) {
										t ? n(t, null) : (e.isPublic || (e.accessCode = null), I.get(r._iid).container.apiClient.createGroupChannel(c(c({}, e), {}, {
											isDistinct: !0
										}), (function(e, t) {
											var i = null;
											if (!e) {
												var s = L.get(r._iid).GroupChannel;
												i = {
													channel: new s(t),
													isCreated: t.is_created
												}, s.cachedChannels[i.channel.url] = i.channel
											}
											n(e, i)
										})))
									}), n)
								}
							}, {
								key: "createChannel",
								value: function() {
									var e = this,
										n = q.toArray(arguments),
										t = void 0;
									"function" == typeof n[n.length - 1] && (t = n.pop());
									var r = L.get(this._iid),
										i = r.GroupChannel,
										s = r.GroupChannelParams;
									if (n[0] instanceof s && 1 === n.length) return te(this._iid, (function(t) {
										var r = n[0];
										r.isPublic || (r.accessCode = null), r._validate() ? I.get(e._iid).container.apiClient.createGroupChannel(r, (function(e, n) {
											var r = null;
											e || (r = new i(n), i.cachedChannels[r.url] = r), t(e, r)
										})) : t(q.error, null)
									}), t);
									if (Array.isArray(n[0])) {
										var a = new s;
										switch (n.length) {
											case 1:
												a.addUsers(n[0]);
												break;
											case 2:
												a.addUsers(n[0]), a.isDistinct = n[1];
												break;
											case 3:
												a.addUsers(n[0]), a.isDistinct = n[1], a.customType = n[2];
												break;
											case 5:
												a.addUsers(n[0]), a.isDistinct = n[1], a.name = n[2], "string" == typeof n[3] ? a.coverUrl = n[3] : a.coverImage = n[3], a.data = n[4];
												break;
											case 6:
												a.addUsers(n[0]), a.isDistinct = n[1], a.name = n[2], "string" == typeof n[3] ? a.coverUrl = n[3] : a.coverImage = n[3], a.data = n[4], a.customType = n[5];
												break;
											default:
												return te(this._iid, (function(e) {
													return e(q.error, null)
												}), t)
										}
										return t ? i.createChannel(a, t) : i.createChannel(a)
									}
									return te(this._iid, (function(e) {
										return e(q.error, null)
									}), t)
								}
							}, {
								key: "createChannelWithUserIds",
								value: function() {
									var e = q.toArray(arguments),
										n = void 0;
									"function" == typeof e[e.length - 1] && (n = e.pop());
									var t = L.get(this._iid),
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
											return te(this._iid, (function(e) {
												return e(q.error, null)
											}), n)
									}
									return r.createChannel(i, n)
								}
							}, {
								key: "createMyGroupChannelListQuery",
								value: function() {
									return new(L.get(this._iid).GroupChannelListQuery)
								}
							}, {
								key: "createPublicGroupChannelListQuery",
								value: function() {
									return new(L.get(this._iid).PublicGroupChannelListQuery)
								}
							}, {
								key: "getChannelCount",
								value: function(e, n) {
									return kn.getInstance(this._iid).getGroupChannelCount(e, n)
								}
							}, {
								key: "getUnreadItemCount",
								value: function(e, n) {
									return kn.getInstance(this._iid).getUnreadItemCount(e, n)
								}
							}, {
								key: "getTotalUnreadMessageCount",
								value: function() {
									var e = q.toArray(arguments),
										n = "function" == typeof e[e.length - 1] ? e.pop() : null,
										t = kn.getInstance(this._iid);
									return t.getTotalUnreadMessageCount.apply(t, E(e).concat([n]))
								}
							}, {
								key: "getTotalUnreadChannelCount",
								value: function(e) {
									return kn.getInstance(this._iid).getTotalUnreadChannelCount(e)
								}
							}, {
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
									return Ee[this._iid] || (Ee[this._iid] = {}), Ee[this._iid]
								}
							}, {
								key: "markAsReadAllLastSentAt",
								get: function() {
									return be[this._iid] || 0
								},
								set: function(e) {
									be[this._iid] = e
								}
							}]), n
						}(),
						Ie = function() {
							d(n, ae);
							var e = m(n);

							function n(t) {
								var r;
								return a(this, n), (r = e.call(this, t)).state = "", r.role = "", r.isBlockedByMe = !1, r.isBlockingMe = !1, t && r._update(t), r
							}
							return u(n, [{
								key: "_update",
								value: function(e) {
									this.state = e.state, this.role = e.role || ke.Role.NONE, e.hasOwnProperty("is_blocked_by_me") && (this.isBlockedByMe = e.is_blocked_by_me), e.hasOwnProperty("is_blocking_me") && (this.isBlockingMe = e.is_blocking_me)
								}
							}, {
								key: "parse",
								value: function(e) {
									this._update(e)
								}
							}], [{
								key: "objectify",
								value: function(e) {
									var n = L.get(this._iid).User,
										t = e.user,
										r = e.state,
										i = e.role,
										s = void 0 === i ? "" : i,
										a = e.isBlockedByMe,
										o = void 0 !== a && a,
										u = e.isBlockingMe,
										l = void 0 !== u && u,
										c = n.objectify(t);
									return c.state = r, c.role = s, c.is_blocked_by_me = o, c.is_blocking_me = l, c
								}
							}, {
								key: "build",
								value: function(e, n, t, r, i) {
									var s = L.get(this._iid).User;
									return this.objectify({
										user: new s(e),
										state: n,
										role: t,
										isBlockedByMe: r,
										isBlockingMe: i
									})
								}
							}, {
								key: "buildFromSerializedData",
								value: function(e) {
									var n = L.get(this._iid).Member,
										t = X.deserialize(e);
									return new n(n.objectify(c({
										user: t
									}, t)))
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
						Ne = function() {
							d(n, ae);
							var e = m(n);

							function n(t) {
								var r;
								return a(this, n), (r = e.call(this, t)).isBlockedByMe = !1, t && r._update(t), r
							}
							return u(n, [{
								key: "parse",
								value: function(e) {
									this._update(e)
								}
							}, {
								key: "_update",
								value: function(e) {
									e.hasOwnProperty("is_blocked_by_me") && (this.isBlockedByMe = e.is_blocked_by_me)
								}
							}], [{
								key: "objectify",
								value: function(e) {
									var n = L.get(this._iid).User,
										t = e.user,
										r = e.isBlockedByMe,
										i = void 0 !== r && r,
										s = n.objectify(t);
									return s.is_blocked_by_me = i, s
								}
							}, {
								key: "build",
								value: function(e, n) {
									var t = L.get(this._iid).User;
									return this.objectify({
										user: new t(e),
										isBlockedByMe: n
									})
								}
							}, {
								key: "buildFromSerializedData",
								value: function(e) {
									var n = L.get(this._iid).Sender,
										t = X.deserialize(e);
									return new n(n.objectify(c({
										user: t
									}, t)))
								}
							}]), n
						}(),
						Re = function() {
							function e(n) {
								a(this, e), this.emojiHash = null, this.emojiCategories = null, n && this._update(n)
							}
							return u(e, [{
								key: "_update",
								value: function(e) {
									var n = L.get(this._iid).EmojiCategory;
									this.emojiHash = e.emoji_hash || "", this.emojiCategories = e.emoji_categories ? e.emoji_categories.map((function(e) {
										return new n(e)
									})) : []
								}
							}]), e
						}(),
						Te = function() {
							function e(n) {
								a(this, e), this.id = null, this.name = null, this.url = null, this.emojis = null, n && this._update(n)
							}
							return u(e, [{
								key: "_update",
								value: function(e) {
									var n = L.get(this._iid).Emoji;
									this.id = e.id || 0, this.name = e.name || "", this.url = e.url || "", this.emojis = e.emojis ? e.emojis.map((function(e) {
										return new n(e)
									})) : []
								}
							}]), e
						}(),
						Me = function() {
							function e(n) {
								a(this, e), this.key = null, this.url = null, n && this._update(n)
							}
							return u(e, [{
								key: "_update",
								value: function(e) {
									this.key = e.key, this.url = e.url
								}
							}]), e
						}(),
						Oe = {},
						we = {},
						Le = function() {
							d(n, ue);
							var e = m(n);

							function n(t) {
								var r;
								return a(this, n), (r = e.call(this, t)).channelType = ue.CHANNEL_TYPE_OPEN, r.participantCount = 0, r.operators = [], t && r._update(t), r
							}
							return u(n, [{
								key: "_update",
								value: function(e) {
									var n = L.get(this._iid).User;
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
									return new(L.get(this._iid).ParticipantListQuery)({
										channelUrl: this.url
									})
								}
							}, {
								key: "createMutedUserListQuery",
								value: function() {
									return new(L.get(this._iid).MutedUserListQuery)({
										channelUrl: this.url,
										isOpenChannel: !0
									})
								}
							}, {
								key: "createBannedUserListQuery",
								value: function() {
									return new(L.get(this._iid).BannedUserListQuery)({
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
									return L.get(this._iid).OpenChannel.getChannelWithoutCache(this.url, e)
								}
							}, {
								key: "enter",
								value: function(e) {
									var n = this;
									return te(this._iid, (function(e) {
										var t = L.get(n._iid).Command.bEnter({
												channelUrl: n.url
											}),
											r = kn.getInstance(n._iid);
										r.sendCommand(t, (function(t, i) {
											if (r.getErrorFirstCallback()) {
												var s = [t, i];
												i = s[0], t = s[1]
											}
											i ? (i = i ? new N(i.message, i.code) : null, e(i, null)) : (L.get(n._iid).OpenChannel.enteredChannels[n.url] = n).refresh((function() {
												return e(null, null)
											}))
										}))
									}), e)
								}
							}, {
								key: "exit",
								value: function(e) {
									var n = this;
									return te(this._iid, (function(e) {
										var t = L.get(n._iid),
											r = t.Command,
											i = t.FileMessageQueue,
											s = r.bExit({
												channelUrl: n.url
											}),
											a = kn.getInstance(n._iid);
										a.sendCommand(s, (function(t, r) {
											if (a.getErrorFirstCallback()) {
												var s = [t, r];
												r = s[0], t = s[1]
											}
											r ? (r = r ? new N(r.message, r.code) : null, e(r, null)) : (delete L.get(n._iid).OpenChannel.enteredChannels[n.url], i.delete(n.url), e(null, null))
										}))
									}), e)
								}
							}, {
								key: "updateChannel",
								value: function(e, n, t, r, i, s) {
									var a, o = this,
										u = C(q.parse(arguments, [new q({
											type: "string",
											nullable: !0
										}), new q({
											type: ["string", "file"],
											nullable: !0
										}), new q({
											type: "string",
											nullable: !0
										}), new q({
											type: "array",
											nullable: !0,
											optional: !0,
											defaultValue: null,
											constraint: function(e) {
												return e.map((function(e) {
													return "string" == typeof e
												}))
											}
										}), new q({
											type: "string",
											nullable: !0,
											optional: !0
										}), new q({
											type: "callback"
										})]), 7);
									return a = u[0], e = u[1], n = u[2], t = u[3], r = u[4], i = u[5], s = u[6], te(this._iid, (function(s) {
										a ? s(a, null) : I.get(o._iid).container.apiClient.updateOpenChannel({
											channelUrl: o.url,
											name: e,
											coverUrlOrImage: n,
											data: t,
											operatorUserIds: r,
											customType: i
										}, (function(e, n) {
											var t = null;
											e || (t = L.get(o._iid).OpenChannel.upsert(n)), s(e, t)
										}))
									}), s)
								}
							}, {
								key: "updateChannelWithOperatorUserIds",
								value: function() {
									var e = q.toArray(arguments),
										n = void 0;
									switch ("function" == typeof e[e.length - 1] && (n = e.pop()), e.length) {
										case 4:
										case 5:
											return this.updateChannel.apply(this, E(e).concat([n]));
										default:
											return te(this._iid, (function(e) {
												return e(q.error, null)
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
									var i, s = this,
										a = C(q.parse(arguments, [new q({
											type: "string"
										}), new q({
											type: "number",
											optional: !0,
											defaultValue: -1,
											constraint: function(e) {
												return -1 <= e
											}
										}), new q({
											type: "string",
											optional: !0,
											defaultValue: ""
										}), new q({
											type: "callback"
										})]), 5);
									return i = a[0], e = a[1], n = a[2], t = a[3], r = a[4], te(this._iid, (function(r) {
										i ? r(i, null) : I.get(s._iid).container.apiClient.muteUser({
											channelUrl: s.url,
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
									var t, r = this,
										i = C(q.parse(arguments, [new q({
											type: "string"
										}), new q({
											type: "callback"
										})]), 3);
									return t = i[0], e = i[1], n = i[2], te(this._iid, (function(n) {
										t ? n(t, null) : I.get(r._iid).container.apiClient.unmuteUser({
											channelUrl: r.url,
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
									var r, i = this,
										s = C(q.parse(arguments, [new q({
											type: "string"
										}), new q({
											type: "number",
											optional: !0,
											defaultValue: -1,
											constraint: function(e) {
												return -1 <= e
											}
										}), new q({
											type: "callback"
										})]), 4);
									return r = s[0], e = s[1], n = s[2], t = s[3], te(this._iid, (function(t) {
										r ? t(r, null) : I.get(i._iid).container.apiClient.banUser({
											channelUrl: i.url,
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
									var t, r = this,
										i = C(q.parse(arguments, [new q({
											type: "string"
										}), new q({
											type: "callback"
										})]), 3);
									return t = i[0], e = i[1], n = i[2], te(this._iid, (function(n) {
										t ? n(t, null) : I.get(r._iid).container.apiClient.unbanUser({
											channelUrl: r.url,
											userId: e,
											isGroupChannel: !1
										}, (function(e, t) {
											n(e, null)
										}))
									}), n)
								}
							}, {
								key: "delete",
								value: function(e) {
									var n = this;
									return te(this._iid, (function(e) {
										I.get(n._iid).container.apiClient.deleteOpenChannel({
											channelUrl: n.url
										}, (function(t, r) {
											t || (delete L.get(n._iid).OpenChannel.cachedChannels[n.url], L.get(n._iid).FileMessageQueue.delete(n.url)), e(t, r)
										}))
									}), e)
								}
							}], [{
								key: "buildFromSerializedData",
								value: function(e) {
									var n = L.get(this._iid),
										t = n.User,
										r = n.OpenChannel,
										i = X.deserialize(e);
									return new r({
										channel_url: i.url,
										name: i.name,
										cover_url: i.coverUrl,
										data: i.data,
										custom_type: i.customType,
										created_at: i.createdAt / 1e3,
										freeze: i.isFrozen,
										is_ephemeral: i.isEphemeral,
										participant_count: i.participantCount,
										operators: i.operators.map((function(e) {
											return t.objectify(e)
										}))
									})
								}
							}, {
								key: "getChannel",
								value: function(e, n) {
									var t, r, i = C(q.parse(arguments, [new q({
										type: "string"
									}), new q({
										type: "string",
										optional: !0,
										nullable: !0,
										defaultValue: null
									}), new q({
										type: "callback"
									})]), 4);
									if (t = i[0], e = i[1], r = i[2], n = i[3], t) return te(this._iid, (function(e) {
										e(t, null)
									}), n);
									var s = L.get(this._iid).OpenChannel;
									return s.cachedChannels[e] ? te(this._iid, (function(n) {
										n(null, s.cachedChannels[e])
									}), n) : s.getChannelWithoutCache(e, r, n)
								}
							}, {
								key: "getChannelWithoutCache",
								value: function(e, n) {
									var t, r, i = this,
										s = C(q.parse(arguments, [new q({
											type: "string"
										}), new q({
											type: "string",
											optional: !0,
											nullable: !0,
											defaultValue: null
										}), new q({
											type: "callback"
										})]), 4);
									return t = s[0], e = s[1], r = s[2], n = s[3], te(this._iid, (function(n) {
										t ? n(t, null) : I.get(i._iid).container.apiClient.getOpenChannel({
											channelUrl: e,
											internalCall: r
										}, (function(e, t) {
											var r = null;
											e || (r = L.get(i._iid).OpenChannel.upsert(t)), n(e, r)
										}))
									}), n)
								}
							}, {
								key: "createChannel",
								value: function(e, n, t, r, i, s) {
									var a, o = this,
										u = C(q.parse(arguments, [new q({
											type: "string",
											nullable: !0,
											ignoreIf: function(e) {
												return 0 === e.length
											}
										}), new q({
											type: ["string", "file"],
											nullable: !0,
											ignoreIf: function(e) {
												return 0 === e.length
											}
										}), new q({
											type: "string",
											nullable: !0,
											ignoreIf: function(e) {
												return 0 === e.length
											}
										}), new q({
											type: "array",
											nullable: !0,
											ignoreIf: function(e) {
												return e.length < 4
											},
											constraint: function(e) {
												return e.map((function(e) {
													return "string" == typeof e
												}))
											}
										}), new q({
											type: "string",
											nullable: !0,
											ignoreIf: function(e) {
												return e.length < 5
											}
										}), new q({
											type: "callback"
										})]), 7);
									return a = u[0], e = u[1], n = u[2], t = u[3], r = u[4], i = u[5], s = u[6], te(this._iid, (function(s) {
										a ? s(a, null) : I.get(o._iid).container.apiClient.createOpenChannel({
											name: e,
											coverUrlOrImage: n,
											data: t,
											operatorUserIds: r,
											customType: i
										}, (function(e, n) {
											var t = null;
											e || (t = L.get(o._iid).OpenChannel.upsert(n)), s(e, t)
										}))
									}), s)
								}
							}, {
								key: "createChannelWithOperatorUserIds",
								value: function() {
									var e = q.toArray(arguments),
										n = void 0;
									switch ("function" == typeof e[e.length - 1] && (n = e.pop()), e.length) {
										case 4:
										case 5:
											return this.createChannel.apply(this, E(e).concat([n]));
										default:
											return te(this._iid, (function(e) {
												return e(q.error, null)
											}), n)
									}
								}
							}, {
								key: "upsert",
								value: function(e) {
									var n = new(L.get(this._iid).OpenChannel)(e);
									return this.cachedChannels.hasOwnProperty(n.url) ? this.cachedChannels[n.url].update(e) : this.cachedChannels[n.url] = n, this.cachedChannels[n.url]
								}
							}, {
								key: "removeCachedChannel",
								value: function(e) {
									this.cachedChannels[e] && delete this.cachedChannels[e], L.get(this._iid).FileMessageQueue.delete(e)
								}
							}, {
								key: "clearCache",
								value: function() {
									Oe[this._iid] = {}, L.get(this._iid).FileMessageQueue.clear()
								}
							}, {
								key: "clearEnteredChannels",
								value: function() {
									we[this._iid] = {}
								}
							}, {
								key: "createOpenChannelListQuery",
								value: function() {
									return new(L.get(this._iid).OpenChannelListQuery)
								}
							}, {
								key: "cachedChannels",
								get: function() {
									return Oe[this._iid] || (Oe[this._iid] = {}), Oe[this._iid]
								}
							}, {
								key: "enteredChannels",
								get: function() {
									return we[this._iid] || (we[this._iid] = {}), we[this._iid]
								}
							}]), n
						}(),
						Pe = function() {
							d(n, se);
							var e = m(n);

							function n(t) {
								var r;
								return a(this, n), (r = e.call(this, t)).messageType = se.MESSAGE_TYPE_USER, r.message = null, r._sender = null, r.reqId = "", r.translations = {}, r.requestState = null, r.sendingStatus = null, r.requestedMentionUserIds = [], r.errorCode = 0, r.messageSurvivalSeconds = -1, t && r._update(t), r
							}
							return u(n, [{
								key: "_update",
								value: function(e) {
									var n = kn.getInstance(this._iid),
										t = L.get(this._iid).Sender;
									this.message = String(e.message), this._sender = new t(e.user), this.reqId = e.hasOwnProperty("req_id") ? String(e.req_id) : "", this.translations = e.hasOwnProperty("translations") ? e.translations : {}, this.sendingStatus = 0 < this.messageId ? n.MessageSendingStatus.SUCCEEDED : n.MessageSendingStatus.FAILED, e.hasOwnProperty("sending_status") && (this.sendingStatus = e.sending_status), this.requestState = 0 < this.messageId ? n.MessageRequestState.SUCCEEDED : n.MessageRequestState.FAILED, e.hasOwnProperty("sending_status") && (this.requestState = e.sending_status, this.requestState === n.MessageSendingStatus.CANCELED && (this.requestState = n.MessageRequestState.FAILED)), this.requestedMentionUserIds = [], e.hasOwnProperty("requested_mention_user_ids") && (this.requestedMentionUserIds = e.requested_mention_user_ids), this.errorCode = 0, e.hasOwnProperty("error_code") && (this.errorCode = e.error_code), this.messageSurvivalSeconds = -1, e.hasOwnProperty("message_survival_seconds") && (this.messageSurvivalSeconds = e.message_survival_seconds)
								}
							}, {
								key: "isResendable",
								value: function() {
									var e = kn.getInstance(this._iid);
									return this.sendingStatus === e.MessageSendingStatus.FAILED && H.isResendableError(this.errorCode)
								}
							}, {
								key: "sender",
								get: function() {
									var e = kn.getInstance(this._iid),
										n = L.get(this._iid).GroupChannel;
									if (e.Options.useMemberAsMessageSender && this.isGroupChannel()) {
										var t = n.cachedChannels[this.channelUrl];
										if (t) {
											var r = t.memberMap[this._sender.userId];
											r && (this._sender.nickname !== r.nickname && (this._sender.nickname = r.nickname), this._sender.profileUrl !== r.profileUrl && (this._sender.profileUrl = r.profileUrl), H.deepEqual(this._sender.metaData, r.metaData) || (this._sender.metaData = r.metaData))
										}
									}
									return this._sender
								},
								set: function(e) {
									this._sender = e
								}
							}], [{
								key: "objectify",
								value: function(e) {
									var n = kn.getInstance(this._iid),
										t = L.get(this._iid),
										r = t.BaseChannel,
										i = t.BaseMessageParams,
										s = t.Sender,
										a = t.User,
										o = t.ThreadInfo,
										u = e.messageId,
										l = e.reqId,
										c = void 0 === l ? "" : l,
										d = e.user,
										h = e.channel,
										p = e.message,
										f = e.data,
										_ = void 0 === f ? "" : f,
										g = e.customType,
										y = void 0 === g ? "" : g,
										m = e.mentionType,
										v = void 0 === m ? i.MentionType.USERS : m,
										C = e.mentionedUsers,
										E = void 0 === C ? [] : C,
										b = e.mentionedUserIds,
										U = void 0 === b ? [] : b,
										A = e.requestedMentionUserIds,
										S = void 0 === A ? [] : A,
										k = e.reactions,
										I = void 0 === k ? [] : k,
										N = e.metaArrays,
										R = void 0 === N ? [] : N,
										T = e.rootMessageId,
										M = void 0 === T ? 0 : T,
										O = e.parentMessageId,
										w = void 0 === O ? 0 : O,
										P = e.parentMessageText,
										D = void 0 === P ? "" : P,
										H = e.threadInfo,
										F = void 0 === H ? null : H,
										G = e.translations,
										x = void 0 === G ? {} : G,
										j = e.sendingStatus,
										z = e.errorCode,
										B = void 0 === z ? 0 : z,
										q = e.silent,
										Q = void 0 !== q && q,
										Y = e.isGlobalBlocked,
										K = void 0 !== Y && Y,
										V = e.messageSurvivalSeconds,
										W = void 0 === V ? -1 : V,
										J = e.createdAt,
										Z = e.updatedAt,
										X = void 0 === Z ? 0 : Z,
										$ = {};
									for (var ee in $.req_id = c, $.msg_id = u, $.user = s.objectify({
											user: d,
											isBlockedByMe: d.isBlockedByMe
										}), $.channel_url = h.url, $.channel_type = h.channelType === r.CHANNEL_TYPE_OPEN ? r.CHANNEL_TYPE_OPEN : r.CHANNEL_TYPE_GROUP, $.message = p, $.data = _, $.custom_type = y, $.translations = x, $.is_global_block = !!K, $.ts = J, $.updated_at = X, $.mention_type = v, $.mentioned_users = E.map((function(e) {
											return a.objectify(e)
										})), $.mentioned_user_ids = U, $.requested_mention_user_ids = S, $.reactions = I.map((function(e) {
											return e.serialize()
										})), $.metaarray = {}, R) {
										var ne = R[ee].key;
										$.metaarray[ne] = R[ee].value
									}
									return $.metaarray_key_order = R.map((function(e) {
										return e.key
									})), $.root_message_id = M, $.parent_message_id = w, $.parent_message_text = D, F && ($.thread_info = o.objectify(F)), $.sending_status = 0 < u ? n.MessageSendingStatus.SUCCEEDED : n.MessageSendingStatus.FAILED, j && ($.sending_status = j), $.silent = !!Q, $.error_code = B, $.message_survival_seconds = W, $
								}
							}, {
								key: "build",
								value: function(e, n, t, r, i, s, a, o, u, l, c, d, h, p, f, _, g, y, m, v, C, E, b, U) {
									return this.objectify({
										messageId: n,
										reqId: e,
										user: t,
										channel: r,
										message: i,
										data: s,
										customType: a,
										mentionType: p,
										mentionedUsers: f,
										mentionedUserIds: v,
										requestedMentionUserIds: E,
										reactions: h,
										metaArrays: d,
										rootMessageId: _,
										parentMessageId: g,
										parentMessageText: y,
										threadInfo: m,
										translations: o,
										sendingStatus: C,
										errorCode: b,
										isGlobalBlocked: u,
										messageSurvivalSeconds: U,
										createdAt: l,
										updatedAt: c
									})
								}
							}, {
								key: "buildFromSerializedData",
								value: function(e) {
									var n = L.get(this._iid).UserMessage,
										t = X.deserialize(e);
									return new n(n.objectify(c(c({}, t), {}, {
										channel: {
											url: t.channelUrl,
											channelType: t.channelType
										},
										user: t.sender
									})))
								}
							}]), n
						}(),
						De = function() {
							d(n, se);
							var e = m(n);

							function n(t) {
								var r;
								return a(this, n), (r = e.call(this, t)).messageType = se.MESSAGE_TYPE_FILE, r.url = null, r.name = "File", r.size = 0, r.type = null, r.thumbnails = [], r._sender = null, r.reqId = "", r.requireAuth = null, r.requestState = null, r.sendingStatus = null, r.requestedMentionUserIds = [], r.errorCode = 0, r.messageSurvivalSeconds = -1, t && r._update(t), r
							}
							return u(n, [{
								key: "_update",
								value: function(e) {
									var n = kn.getInstance(this._iid),
										t = I.get(this._iid).container.auth,
										r = L.get(this._iid).Sender;
									if (this._sender = new r(e.user), this.requireAuth = !!e.hasOwnProperty("require_auth") && e.require_auth, this.url = this.requireAuth ? String(e.url).split("?auth=")[0] + "?auth=" + t.eKey : String(e.url).split("?auth=")[0], this.name = e.hasOwnProperty("name") ? e.name : "File", this.size = parseInt(e.size) || 0, this.type = String(e.type), e.hasOwnProperty("custom") && (this.data = String(e.custom)), this.reqId = e.hasOwnProperty("req_id") ? String(e.req_id) : "", this.thumbnails = e.hasOwnProperty("thumbnails") ? e.thumbnails : [], this.requireAuth)
										for (var i in this.thumbnails) this.thumbnails[i].url = String(this.thumbnails[i].url).split("?auth=")[0] + "?auth=" + t.eKey;
									this.sendingStatus = 0 < this.messageId ? n.MessageSendingStatus.SUCCEEDED : n.MessageSendingStatus.FAILED, e.hasOwnProperty("sending_status") && (this.sendingStatus = e.sending_status), this.requestState = 0 < this.messageId ? n.MessageRequestState.SUCCEEDED : n.MessageRequestState.FAILED, e.hasOwnProperty("sending_status") && (this.requestState = e.sending_status, this.requestState === n.MessageSendingStatus.CANCELED && (this.requestState = n.MessageRequestState.FAILED)), this.requestedMentionUserIds = [], e.hasOwnProperty("requested_mention_user_ids") && (this.requestedMentionUserIds = e.requested_mention_user_ids), this.errorCode = 0, e.hasOwnProperty("error_code") && (this.errorCode = e.error_code), this.messageSurvivalSeconds = -1, e.hasOwnProperty("message_survival_seconds") && (this.messageSurvivalSeconds = e.message_survival_seconds)
								}
							}, {
								key: "isResendable",
								value: function() {
									var e = kn.getInstance(this._iid);
									return this.sendingStatus === e.MessageSendingStatus.FAILED && H.isResendableError(this.errorCode)
								}
							}, {
								key: "sender",
								get: function() {
									var e = kn.getInstance(this._iid),
										n = L.get(this._iid).GroupChannel;
									if (e.Options.useMemberAsMessageSender && this.isGroupChannel()) {
										var t = n.cachedChannels[this.channelUrl];
										if (t) {
											var r = t.memberMap[this._sender.userId];
											r && (this._sender.nickname !== r.nickname && (this._sender.nickname = r.nickname), this._sender.profileUrl !== r.profileUrl && (this._sender.profileUrl = r.profileUrl), H.deepEqual(this._sender.metaData, r.metaData) || (this._sender.metaData = r.metaData))
										}
									}
									return this._sender
								},
								set: function(e) {
									this._sender = e
								}
							}], [{
								key: "objectify",
								value: function(e) {
									var n = kn.getInstance(this._iid),
										t = L.get(this._iid),
										r = t.BaseChannel,
										i = t.BaseMessageParams,
										s = t.Sender,
										a = t.User,
										o = t.ThreadInfo,
										u = e.messageId,
										l = e.reqId,
										c = void 0 === l ? "" : l,
										d = e.user,
										h = void 0 === d ? {} : d,
										p = e.channel,
										f = e.url,
										_ = e.name,
										g = e.type,
										y = e.size,
										m = void 0 === y ? 0 : y,
										v = e.data,
										C = void 0 === v ? "" : v,
										E = e.customType,
										b = void 0 === E ? "" : E,
										U = e.mentionType,
										A = void 0 === U ? i.MentionType.USERS : U,
										S = e.mentionedUsers,
										k = void 0 === S ? [] : S,
										I = e.mentionedUserIds,
										N = void 0 === I ? [] : I,
										R = e.requestedMentionUserIds,
										T = void 0 === R ? [] : R,
										M = e.reactions,
										O = void 0 === M ? [] : M,
										w = e.metaArrays,
										P = void 0 === w ? [] : w,
										D = e.rootMessageId,
										H = void 0 === D ? 0 : D,
										F = e.parentMessageId,
										G = void 0 === F ? 0 : F,
										x = e.parentMessageText,
										j = void 0 === x ? "" : x,
										z = e.threadInfo,
										B = void 0 === z ? null : z,
										q = e.thumbnails,
										Q = void 0 === q ? [] : q,
										Y = e.requireAuth,
										K = void 0 !== Y && Y,
										V = e.sendingStatus,
										W = e.errorCode,
										J = void 0 === W ? 0 : W,
										Z = e.silent,
										X = void 0 !== Z && Z,
										$ = e.isGlobalBlocked,
										ee = void 0 !== $ && $,
										ne = e.messageSurvivalSeconds,
										te = void 0 === ne ? -1 : ne,
										re = e.createdAt,
										ie = e.updatedAt,
										se = void 0 === ie ? 0 : ie,
										ae = {};
									ae.req_id = c, ae.msg_id = u, ae.user = s.objectify({
										user: h,
										isBlockedByMe: h.isBlockedByMe
									}), ae.channel_url = p.url, ae.channel_type = p.channelType === r.CHANNEL_TYPE_OPEN ? r.CHANNEL_TYPE_OPEN : r.CHANNEL_TYPE_GROUP, ae.url = f, ae.name = _, ae.type = g, ae.size = m, ae.custom = C, ae.custom_type = b, ae.thumbnails = Q, ae.require_auth = K, ae.is_global_block = !!ee, ae.ts = re, ae.updated_at = se, ae.mention_type = A, ae.mentioned_users = k.map((function(e) {
										return a.objectify(e)
									})), ae.mentioned_user_ids = N, ae.requested_mention_user_ids = T, ae.reactions = O.map((function(e) {
										return e.serialize()
									})), ae.metaarray = {};
									for (var oe = 0; oe < P.length; oe++) {
										var ue = P[oe].key;
										ae.metaarray[ue] = P[oe].value
									}
									return ae.metaarray_key_order = P.map((function(e) {
										return e.key
									})), ae.root_message_id = H, ae.parent_message_id = G, ae.parent_message_text = j, B && (ae.thread_info = o.objectify(B)), ae.sending_status = 0 < u ? n.MessageSendingStatus.SUCCEEDED : n.MessageSendingStatus.FAILED, V && (ae.sending_status = V), ae.silent = !!X, ae.error_code = J, ae.message_survival_seconds = te, ae
								}
							}, {
								key: "build",
								value: function(e, n, t, r, i, s, a, o, u, l, c, d, h, p, f, _, g, y, m, v, C, E, b, U, A, S, k, I) {
									return this.objectify({
										messageId: n,
										reqId: e,
										user: t,
										channel: r,
										url: i,
										name: s,
										type: a,
										size: o,
										data: u,
										customType: l,
										mentionType: y,
										mentionedUsers: m,
										mentionedUserIds: U,
										requestedMentionUserIds: S,
										reactions: g,
										metaArrays: _,
										rootMessageId: v,
										parentMessageId: C,
										parentMessageText: E,
										threadInfo: b,
										thumbnails: h,
										requireAuth: p,
										sendingStatus: A,
										errorCode: k,
										isGlobalBlocked: c,
										messageSurvivalSeconds: I,
										createdAt: d,
										updatedAt: f
									})
								}
							}, {
								key: "buildFromSerializedData",
								value: function(e) {
									var n = L.get(this._iid).FileMessage,
										t = X.deserialize(e);
									return new n(n.objectify(c(c({}, t), {}, {
										channel: {
											url: t.channelUrl,
											channelType: t.channelType
										},
										user: t.sender
									})))
								}
							}]), n
						}(),
						He = function() {
							d(n, se);
							var e = m(n);

							function n(t) {
								var r;
								return a(this, n), (r = e.call(this, t)).messageType = se.MESSAGE_TYPE_ADMIN, r.message = "", r.translations = {}, t && r._update(t), r
							}
							return u(n, [{
								key: "_update",
								value: function(e) {
									this.message = String(e.message), this.translations = e.hasOwnProperty("translations") ? e.translations : {}
								}
							}], [{
								key: "objectify",
								value: function(e) {
									var n = L.get(this._iid),
										t = n.BaseChannel,
										r = n.BaseMessageParams,
										i = n.User,
										s = n.ThreadInfo,
										a = e.messageId,
										o = e.channel,
										u = e.message,
										l = e.data,
										c = void 0 === l ? "" : l,
										d = e.customType,
										h = void 0 === d ? "" : d,
										p = e.mentionType,
										f = void 0 === p ? r.MentionType.USERS : p,
										_ = e.mentionedUsers,
										g = void 0 === _ ? [] : _,
										y = e.reactions,
										m = void 0 === y ? [] : y,
										v = e.metaArrays,
										C = void 0 === v ? [] : v,
										E = e.rootMessageId,
										b = void 0 === E ? 0 : E,
										U = e.parentMessageId,
										A = void 0 === U ? 0 : U,
										S = e.parentMessageText,
										k = void 0 === S ? "" : S,
										I = e.threadInfo,
										N = void 0 === I ? null : I,
										R = e.translations,
										T = void 0 === R ? {} : R,
										M = e.silent,
										O = void 0 !== M && M,
										w = e.createdAt,
										P = e.updatedAt,
										D = void 0 === P ? 0 : P,
										H = {
											msg_id: a,
											channel_url: o.url,
											channel_type: o.channelType === t.CHANNEL_TYPE_OPEN ? t.CHANNEL_TYPE_OPEN : t.CHANNEL_TYPE_GROUP,
											message: u,
											data: c,
											custom_type: h,
											silent: O,
											ts: w,
											updated_at: D
										};
									H.translations = T, H.mention_type = f, H.mentioned_users = g.map((function(e) {
										return i.objectify(e)
									})), H.reactions = m.map((function(e) {
										return e.serialize()
									})), H.metaarray = {};
									for (var F = 0; F < C.length; F++) {
										var G = C[F].key;
										H.metaarray[G] = C[F].value
									}
									return H.metaarray_key_order = C.map((function(e) {
										return e.key
									})), H.root_message_id = b, H.parent_message_id = A, H.parent_message_text = k, N && (H.thread_info = s.objectify(N)), H
								}
							}, {
								key: "build",
								value: function(e, n, t, r, i, s, a, o, u, l, c, d, h, p, f, _) {
									return this.objectify({
										messageId: e,
										channel: n,
										message: t,
										data: r,
										customType: i,
										mentionType: c,
										mentionedUsers: d,
										reactions: l,
										metaArrays: u,
										rootMessageId: h,
										parentMessageId: p,
										parentMessageText: f,
										threadInfo: _,
										translations: s,
										createdAt: a,
										updatedAt: o
									})
								}
							}, {
								key: "buildFromSerializedData",
								value: function(e) {
									var n = L.get(this._iid).AdminMessage,
										t = X.deserialize(e);
									return new n(n.objectify(c(c({}, t), {}, {
										channel: {
											url: t.channelUrl,
											channelType: t.channelType
										}
									})))
								}
							}]), n
						}(),
						Fe = function() {
							function e(n) {
								a(this, e);
								var t = L.get(this._iid),
									r = t.BaseMessage,
									i = t.BaseMessageParams;
								this.scheduledId = 0, this.scheduledDateTimeString = "", this.scheduledTimezone = "", this.status = e.Status.SCHEDULED, this.createdAt = 0, this.updatedAt = 0, this._messageType = r.MESSAGE_TYPE_BASE, this._sender = null, this._channelType = "", this.channelUrl = "", this.message = "", this.customType = "", this.data = "", this.metaArrays = [], this.mentionType = i.MentionType.USERS, this.mentionedUsers = [], this.pushNotificationDeliveryOption = i.PushNotificationDeliveryOption.DEFAULT, this.translationTargetLanguages = [], this.errorMessage = "", this.errorCode = 0, n && this._update(n)
							}
							return u(e, [{
								key: "_update",
								value: function(n) {
									var t = this,
										r = L.get(this._iid),
										i = r.User,
										s = r.Sender,
										a = r.BaseMessageParams,
										o = r.MessageMetaArray;
									this.scheduledId = n.hasOwnProperty("scheduled_id") ? parseInt(n.scheduled_id) : 0, this.scheduledDateTimeString = n.hasOwnProperty("scheduled_dt") ? String(n.scheduled_dt) : "", this.scheduledTimezone = n.hasOwnProperty("scheduled_timezone") ? String(n.scheduled_timezone) : "", this.status = n.hasOwnProperty("status") ? String(n.status) : "", this.createdAt = n.hasOwnProperty("created_at") ? parseInt(n.created_at) : 0, this.updatedAt = n.hasOwnProperty("updated_at") ? parseInt(n.updated_at) : 0, this.channelUrl = n.hasOwnProperty("channel_url") ? String(n.channel_url) : "", this._channelType = n.hasOwnProperty("channel_type") ? String(n.channel_type) : "", this._messageType = n.hasOwnProperty("type") ? String(n.type) : "", this._sender = n.hasOwnProperty("user") ? new s(n.user) : "", this.message = n.hasOwnProperty("message") ? String(n.message) : "", this.customType = n.hasOwnProperty("custom_type") ? String(n.custom_type) : "", this.data = n.hasOwnProperty("data") ? String(n.data) : "";
									var u = n.hasOwnProperty("metaarray") ? n.metaarray : {},
										l = n.hasOwnProperty("metaarray_key_order") ? n.metaarray_key_order : Object.keys(u).sort((function(e, n) {
											return e.localeCompare(n)
										}));
									this.metaArrays = [];
									for (var c = 0; c < l.length; c++) {
										var d = l[c];
										this.metaArrays.push(new o(d, u[d] || []))
									}
									this.mentionType = n.hasOwnProperty("mention_type") ? n.mention_type : a.MentionType.USERS, this.mentionedUsers = [], n.hasOwnProperty("mentioned_users") && n.mentioned_users.forEach((function(e) {
										var n = new i(e);
										t.mentionedUsers.push(n)
									})), this.pushNotificationDeliveryOption = n.hasOwnProperty("push_option") ? n.push_option : a.PushNotificationDeliveryOption.DEFAULT, this.translationTargetLanguages = n.hasOwnProperty("translation_target_langs") ? n.translation_target_langs : [], this.status === e.Status.FAILED && (n.hasOwnProperty("error") && n.error.hasOwnProperty("message") && (this.errorMessage = String(n.error.message)), n.hasOwnProperty("error") && n.error.hasOwnProperty("code") && (this.errorCode = parseInt(n.error.code)))
								}
							}, {
								key: "isOpenChannel",
								value: function() {
									var e = L.get(this._iid).BaseChannel;
									return this._channelType === e.CHANNEL_TYPE_OPEN
								}
							}, {
								key: "isGroupChannel",
								value: function() {
									var e = L.get(this._iid).BaseChannel;
									return this._channelType === e.CHANNEL_TYPE_GROUP
								}
							}, {
								key: "sender",
								get: function() {
									var e = kn.getInstance(this._iid),
										n = L.get(this._iid).GroupChannel;
									if (e.Options.useMemberAsMessageSender && this.isGroupChannel()) {
										var t = n.cachedChannels[this.channelUrl];
										if (t) {
											var r = t.memberMap[this._sender.userId];
											r && (this._sender.nickname !== r.nickname && (this._sender.nickname = r.nickname), this._sender.profileUrl !== r.profileUrl && (this._sender.profileUrl = r.profileUrl), H.deepEqual(this._sender.metaData, r.metaData) || (this._sender.metaData = r.metaData))
										}
									}
									return this._sender
								},
								set: function(e) {
									this._sender = e
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
									if ("object" === s(e) && e) {
										var n = L.get(this._iid).MessageMetaArray,
											t = [];
										for (var r in e) t.push(new n(r, e[r]));
										this.metaArrays = t
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
						Ge = function() {
							function e(n) {
								a(this, e), this.replyCount = 0, this.mostRepliedUsers = [], this.lastRepliedAt = 0, this.updatedAt = 0, n && this._update(n)
							}
							return u(e, [{
								key: "_update",
								value: function(e) {
									var n = L.get(this._iid).User;
									e.hasOwnProperty("reply_count") && (this.replyCount = parseInt(e.reply_count)), e.hasOwnProperty("most_replies") && Array.isArray(e.most_replies) && e.most_replies.every((function(e) {
										return "object" === s(e)
									})) && (this.mostRepliedUsers = e.most_replies.map((function(e) {
										return new n(e)
									}))), e.hasOwnProperty("last_replied_at") && (this.lastRepliedAt = parseInt(e.last_replied_at)), e.hasOwnProperty("updated_at") && (this.updatedAt = parseInt(e.updated_at))
								}
							}], [{
								key: "objectify",
								value: function(e) {
									var n = L.get(this._iid).User,
										t = e.replyCount,
										r = e.mostRepliedUsers,
										i = e.lastRepliedAt,
										s = e.updatedAt,
										a = {};
									return a.reply_count = t, Array.isArray(r) && r.every((function(e) {
										return e instanceof n
									})) && (a.most_replies = r.map((function(e) {
										return n.objectify(e)
									}))), a.last_replied_at = i, a.updated_at = s, a
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
						xe = function() {
							function e() {
								a(this, e), this.threadInfo = null, this.targetMessageId = 0, this.channelUrl = null, this.channelType = null
							}
							return u(e, null, [{
								key: "createFromJson",
								value: function(e) {
									var n = L.get(this._iid),
										t = n.BaseChannel,
										r = n.ThreadInfo,
										i = e.thread_info,
										a = e.root_message_id,
										o = e.channel_url,
										u = e.channel_type;
									if (!i || "object" !== s(i) || "string" != typeof a && "number" != typeof a || "string" != typeof o || "string" != typeof u || ![t.CHANNEL_TYPE_GROUP].includes(u)) return null;
									var l = new this;
									return l.threadInfo = new r(i), l.targetMessageId = parseInt(a), l.channelUrl = o, l.channelType = u, l
								}
							}]), e
						}(),
						je = function() {
							function e() {
								a(this, e), this.isLoading = !1, this.hasNext = !0, this.limit = 20, this.userIdsFilter = [], this.metaDataKeyFilter = "", this.metaDataValuesFilter = [], this._token = ""
							}
							return u(e, [{
								key: "next",
								value: function(e) {
									var n = this;
									return te(this._iid, (function(e) {
										"number" == typeof n.limit && 0 < n.limit && Array.isArray(n.userIdsFilter) && "string" == typeof n.metaDataKeyFilter && Array.isArray(n.metaDataValuesFilter) && !!n.metaDataKeyFilter == 0 < n.metaDataValuesFilter.length ? n.isLoading ? e(new N("Query in progress.", N.QUERY_IN_PROGRESS), null) : n.hasNext ? (n.isLoading = !0, I.get(n._iid).container.apiClient.loadUserList(c(c({}, n), {}, {
											token: n._token
										}), (function(t, r) {
											var i = null;
											if (!t) {
												var s = L.get(n._iid).User,
													a = String(r.next);
												n._token = a, n.hasNext = !!a, i = r.users.map((function(e) {
													return new s(e)
												}))
											}
											n.isLoading = !1, e(t, i)
										}))) : e(null, []) : e(q.error, null)
									}), e)
								}
							}]), e
						}(),
						ze = function() {
							function e(n) {
								a(this, e), this.isLoading = !1, this.hasNext = !0, this.limit = 20, this._isOpenChannel = !1, this._channelUrl = null, this._token = "", n.channelUrl && (this._channelUrl = n.channelUrl), n.isOpenChannel && (this._isOpenChannel = n.isOpenChannel)
							}
							return u(e, [{
								key: "next",
								value: function(e) {
									var n = this;
									return te(this._iid, (function(e) {
										"number" == typeof n.limit && 0 < n.limit ? n.isLoading ? e(new N("Query in progress.", N.QUERY_IN_PROGRESS), null) : n.hasNext ? (n.isLoading = !0, I.get(n._iid).container.apiClient.loadBannedUserList(c(c({}, n), {}, {
											channelUrl: n._channelUrl,
											isOpenChannel: n._isOpenChannel,
											token: n._token
										}), (function(t, r) {
											var i = null;
											if (!t) {
												var s = L.get(n._iid).User,
													a = String(r.next);
												n._token = a, n.hasNext = !!a, i = r.banned_list.map((function(e) {
													return new s(e.user)
												}))
											}
											n.isLoading = !1, e(t, i)
										}))) : e(null, []) : e(q.error, null)
									}), e)
								}
							}]), e
						}(),
						Be = function() {
							function e() {
								a(this, e), this.isLoading = !1, this.hasNext = !0, this.limit = 20, this.userIdsFilter = [], this._token = ""
							}
							return u(e, [{
								key: "next",
								value: function(e) {
									var n = this;
									return te(this._iid, (function(e) {
										"number" == typeof n.limit && 0 < n.limit && Array.isArray(n.userIdsFilter) ? n.isLoading ? e(new N("Query in progress.", N.QUERY_IN_PROGRESS), null) : n.hasNext ? (n.isLoading = !0, I.get(n._iid).container.apiClient.loadBlockedUserList(c(c({}, n), {}, {
											token: n._token
										}), (function(t, r) {
											var i = null;
											if (!t) {
												var s = L.get(n._iid).User,
													a = String(r.next);
												n._token = a, n.hasNext = !!a, i = r.users.map((function(e) {
													return new s(e)
												}))
											}
											n.isLoading = !1, e(t, i)
										}))) : e(null, []) : e(q.error, null)
									}), e)
								}
							}]), e
						}(),
						qe = function() {
							function e() {
								a(this, e), this.isLoading = !1, this.hasMore = !0, this.limit = 20, this._token = ""
							}
							return u(e, [{
								key: "next",
								value: function(e) {
									var n = this;
									return te(this._iid, (function(e) {
										"number" == typeof n.limit && 0 < n.limit ? n.isLoading ? e(new N("Query in progress.", N.QUERY_IN_PROGRESS), null) : n.hasMore ? (n.isLoading = !0, I.get(n._iid).container.apiClient.loadFriendList(c(c({}, n), {}, {
											token: n._token
										}), (function(t, r) {
											var i = null;
											if (!t) {
												var s = L.get(n._iid).User,
													a = String(r.next);
												n._token = a, n.hasMore = !!a, i = r.users.map((function(e) {
													return new s(e)
												}))
											}
											n.isLoading = !1, e(t, i)
										}))) : e(null, []) : e(q.error, null)
									}), e)
								}
							}]), e
						}(),
						Qe = function() {
							function e() {
								a(this, e), this.isLoading = !1, this.hasNext = !0, this.limit = 20, this.includeEmpty = !1, this.order = e.ORDER_LATEST_LAST_MESSAGE, this._token = "", this._searchFilter = {}, this._userIdsFilter = {
									userIds: [],
									includeMode: !0,
									queryType: e.QueryType.AND
								}, this._userIdsExactFilter = [], this._userIdsIncludeFilter = [], this._userIdsIncludeFilterQueryType = e.QueryType.AND, this.nicknameContainsFilter = "", this.channelNameContainsFilter = "", this.memberStateFilter = ke.MemberStateFilter.ALL, this.customTypesFilter = [], this.channelUrlsFilter = [], this.superChannelFilter = ke.SuperChannelFilter.ALL, this.publicChannelFilter = ke.PublicChannelFilter.ALL, this.customTypeStartsWithFilter = null, this.unreadChannelFilter = ke.UnreadChannelFilter.ALL, this.metadataOrderKeyFilter = null, this.hiddenChannelFilter = ke.HiddenChannelFilter.UNHIDDEN, this.includeFrozen = !0
							}
							return u(e, [{
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
									return X.serialize(this, (function(e) {
										e.isLoading = !1
									}))
								}
							}, {
								key: "next",
								value: function(e) {
									var n = this;
									return te(this._iid, (function(e) {
										var t = L.get(n._iid),
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
										})).indexOf(n.hiddenChannelFilter)) || "string" != typeof n.customTypeStartsWithFilter && null !== n.customTypeStartsWithFilter || "string" != typeof n.nicknameContainsFilter || "string" != typeof n.channelNameContainsFilter || "string" != typeof n.metadataOrderKeyFilter && null !== n.metadataOrderKeyFilter || "boolean" != typeof n.includeFrozen ? e(q.error, null) : n.isLoading ? e(new N("Query in progress.", N.QUERY_IN_PROGRESS), null) : n.hasNext ? (n.isLoading = !0, I.get(n._iid).container.apiClient.loadGroupChannelList(c(c({}, n), {}, {
											token: n._token,
											userIdsFilter: n._userIdsFilter,
											searchFilter: n._searchFilter
										}), (function(t, i) {
											if (t) return n.isLoading = !1, void e(t, null);
											var s = [],
												a = String(i.next);
											n._token = a, n.hasNext = !!a;
											for (var o = i.channels, u = 0; u < o.length; u++) {
												var l = r.upsert(o[u]);
												s.push(l)
											}
											n.isLoading = !1, e(t, s)
										}))) : e(null, [])
									}), e)
								}
							}, {
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
							}], [{
								key: "buildFromSerializedData",
								value: function(e) {
									var n = L.get(this._iid).GroupChannel,
										t = X.deserialize(e),
										r = n.createMyGroupChannelListQuery();
									for (var i in t) r.hasOwnProperty(i) && (r[i] = t[i]);
									return r
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
							}]), e
						}(),
						Ye = function() {
							function e(n) {
								a(this, e), this.isLoading = !1, this.hasNext = !0, this.limit = 20, this.mutedMemberFilter = e.MutedMemberFilter.ALL, this.memberStateFilter = ke.MemberStateFilter.ALL, this.nicknameStartsWithFilter = null, this._token = "", this._channelUrl = n
							}
							return u(e, [{
								key: "next",
								value: function(e) {
									var n = this;
									return te(this._iid, (function(e) {
										var t = L.get(n._iid),
											r = t.GroupChannel,
											i = t.Member,
											s = t.MemberListQuery;
										if ("number" == typeof n.limit && 0 < n.limit && -1 < Object.keys(s.MutedMemberFilter).map((function(e) {
												return s.MutedMemberFilter[e]
											})).indexOf(n.mutedMemberFilter) && -1 < Object.keys(r.MemberStateFilter).map((function(e) {
												return r.MemberStateFilter[e]
											})).indexOf(n.memberStateFilter) && ("string" == typeof n.nicknameStartsWithFilter || null === n.nicknameStartsWithFilter))
											if (n.isLoading) e(new N("Query in progress.", N.QUERY_IN_PROGRESS), null);
											else if (n.hasNext) {
											n.isLoading = !0;
											var a = s.Order.MEMBER_NICKNAME_ALPHABETICAL;
											I.get(n._iid).container.apiClient.loadMemberList(c(c({}, n), {}, {
												channelUrl: n._channelUrl,
												order: a,
												token: n._token
											}), (function(t, r) {
												var s = null;
												if (!t) {
													var a = String(r.next);
													n._token = a, n.hasNext = !!a, s = r.members.map((function(e) {
														return new i(e)
													}))
												}
												n.isLoading = !1, e(t, s)
											}))
										} else e(null, []);
										else e(q.error, null)
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
										MEMBER_NICKNAME_ALPHABETICAL: "member_nickname_alphabetical"
									}
								}
							}]), e
						}(),
						Ke = function() {
							function e(n) {
								a(this, e), this.isLoading = !1, this.hasNext = !0, this.limit = 20, this._token = "", n.channelUrl && (this._channelUrl = n.channelUrl), n.isOpenChannel && (this._isOpenChannel = n.isOpenChannel)
							}
							return u(e, [{
								key: "next",
								value: function(e) {
									var n = this;
									return te(this._iid, (function(e) {
										"number" == typeof n.limit && 0 < n.limit ? n.isLoading ? e(new N("Query in progress.", N.QUERY_IN_PROGRESS), null) : n.hasNext ? (n.isLoading = !0, I.get(n._iid).container.apiClient.loadMutedUserList(c(c({}, n), {}, {
											channelUrl: n._channelUrl,
											isOpenChannel: n._isOpenChannel,
											token: n._token
										}), (function(t, r) {
											var i = null;
											if (!t) {
												var s = L.get(n._iid).User,
													a = String(r.next);
												n._token = a, n.hasNext = !!a, i = r.muted_list.map((function(e) {
													return new s(e)
												}))
											}
											n.isLoading = !1, e(t, i)
										}))) : e(null, []) : e(q.error, null)
									}), e)
								}
							}]), e
						}(),
						Ve = function() {
							function e() {
								a(this, e), this.limit = 20, this.isLoading = !1, this.hasNext = !0, this.nameKeyword = null, this.urlKeyword = null, this.customTypes = [], this.includeFrozen = !0
							}
							return u(e, [{
								key: "next",
								value: function(e) {
									var n = this;
									return te(this._iid, (function(e) {
										!("number" == typeof n.limit && 0 < n.limit && Array.isArray(n.customTypes)) || "string" != typeof n.nameKeyword && null !== n.nameKeyword || "string" != typeof n.urlKeyword && null !== n.urlKeyword || "boolean" != typeof n.includeFrozen ? e(q.error, null) : n.isLoading ? e(new N("Query in progress.", N.QUERY_IN_PROGRESS), null) : n.hasNext ? (n.isLoading = !0, I.get(n._iid).container.apiClient.loadOpenChannelList(c(c({}, n), {}, {
											token: n._token
										}), (function(t, r) {
											var i = null;
											if (!t) {
												var s = L.get(n._iid).OpenChannel,
													a = String(r.next);
												n._token = a, n.hasNext = !!a, i = r.channels.map((function(e) {
													return s.upsert(e)
												}))
											}
											n.isLoading = !1, e(t, i)
										}))) : e(null, [])
									}), e)
								}
							}]), e
						}(),
						We = new WeakMap,
						Je = function() {
							function e(n) {
								a(this, e), this.isLoading = !1, this.hasNext = !0, this.limit = 20, this._token = "", We.set(this, n)
							}
							return u(e, [{
								key: "next",
								value: function(e) {
									var n = this;
									return te(this._iid, (function(e) {
										if ("number" == typeof n.limit && 0 < n.limit)
											if (n.isLoading) e(new N("Query in progress.", N.QUERY_IN_PROGRESS), null);
											else if (n.hasNext) {
											n.isLoading = !0;
											var t = We.get(n);
											I.get(n._iid).container.apiClient.loadOperatorList(c(c({}, n), {}, {
												token: n._token,
												channelUrl: t.url,
												isOpenChannel: t.isOpenChannel()
											}), (function(t, r) {
												var i = null;
												if (!t) {
													var s = L.get(n._iid).User,
														a = String(r.next);
													n._token = a, n.hasNext = !!a, i = r.operators.map((function(e) {
														return new s(e)
													}))
												}
												n.isLoading = !1, e(t, i)
											}))
										} else e(null, []);
										else e(q.error, null)
									}), e)
								}
							}]), e
						}(),
						Ze = new WeakMap,
						Xe = function() {
							function e(n) {
								a(this, e), this.isLoading = !1, this.hasNext = !0, this.limit = 20, this._token = "", n && Ze.set(this, n.channelUrl)
							}
							return u(e, [{
								key: "next",
								value: function(e) {
									var n = this;
									return te(this._iid, (function(e) {
										"number" == typeof n.limit && 0 < n.limit ? n.isLoading ? e(new N("Query in progress.", N.QUERY_IN_PROGRESS), null) : n.hasNext ? (n.isLoading = !0, I.get(n._iid).container.apiClient.loadParticipantList(c(c({}, n), {}, {
											channelUrl: Ze.get(n),
											token: n._token
										}), (function(t, r) {
											var i = null;
											if (!t) {
												var s = L.get(n._iid).User,
													a = String(r.next);
												n._token = a, n.hasNext = !!a, i = r.participants.map((function(e) {
													return new s(e)
												}))
											}
											n.isLoading = !1, e(t, i)
										}))) : e(null, []) : e(q.error, null)
									}), e)
								}
							}]), e
						}(),
						$e = new WeakMap,
						en = function() {
							function e(n, t) {
								var r = t.limit,
									i = void 0 === r ? 20 : r,
									s = t.reverse,
									o = void 0 !== s && s,
									u = t.exactMatch,
									l = void 0 !== u && u,
									c = t.channelUrl,
									d = void 0 === c ? "" : c,
									h = t.channelCustomType,
									p = void 0 === h ? "" : h,
									f = t.messageTimestampFrom,
									_ = void 0 === f ? null : f,
									g = t.messageTimestampTo,
									y = void 0 === g ? null : g,
									m = t.order,
									v = void 0 === m ? "score" : m;
								a(this, e), this.isLoading = !1, this.hasNext = !0, $e.set(this, {
									keyword: n,
									limit: i,
									reverse: o,
									exactMatch: l,
									channelUrl: d,
									channelCustomType: p,
									messageTimestampFrom: _,
									messageTimestampTo: y,
									order: v,
									previousToken: "",
									nextToken: ""
								})
							}
							return u(e, [{
								key: "next",
								value: function(e) {
									var n = this,
										t = L.get(this._iid),
										r = t.BaseChannel,
										i = t.GroupChannel,
										s = t.OpenChannel;
									return te(this._iid, (function(e) {
										var t = $e.get(n),
											a = t.keyword,
											o = t.limit,
											u = t.reverse,
											l = t.exactMatch,
											c = t.channelUrl,
											d = t.channelCustomType,
											h = t.messageTimestampFrom,
											p = t.messageTimestampTo,
											f = t.order,
											_ = t.nextToken;
										!("number" == typeof o && 0 < o && o <= 1e3 && "boolean" == typeof u && "boolean" == typeof l) || "string" != typeof c && null !== c || "string" != typeof d && null !== d || "number" != typeof h && null !== h || "number" != typeof p && null !== p || !(0 <= ["score", "ts"].indexOf(f)) ? e(q.error, null) : n.isLoading ? e(new N("Query in progress.", N.QUERY_IN_PROGRESS), null) : n.hasNext ? (n.isLoading = !0, I.get(n._iid).container.apiClient.searchMessages({
											keyword: a,
											limit: o,
											reverse: u,
											exactMatch: l,
											channelUrl: c,
											channelCustomType: d,
											messageTimestampFrom: h,
											messageTimestampTo: p,
											order: f,
											nextToken: _
										}, (function(t, a) {
											var o = null;
											if (!t) {
												for (var u in o = [], a.results) {
													var l = a.results[u],
														c = null;
													l.channel.hasOwnProperty("members") ? (c = new i(l.channel), i.cachedChannels[c.url] = c) : (c = new s(l.channel), s.cachedChannels[c.url] = c), o.push(r.buildMessage(l, c))
												}
												n.hasNext = a.has_next, $e.get(n).nextToken = a.end_cursor
											}
											n.isLoading = !1, e(t, o)
										}))) : e(null, [])
									}), e)
								}
							}, {
								key: "key",
								get: function() {
									return $e.get(this).keyword
								}
							}, {
								key: "limit",
								get: function() {
									return $e.get(this).limit
								}
							}, {
								key: "reverse",
								get: function() {
									return $e.get(this).reverse
								}
							}, {
								key: "exactMatch",
								get: function() {
									return $e.get(this).exactMatch
								}
							}, {
								key: "channelUrl",
								get: function() {
									return $e.get(this).channelUrl
								}
							}, {
								key: "channelCustomType",
								get: function() {
									return $e.get(this).channelCustomType
								}
							}, {
								key: "messageTimestampFrom",
								get: function() {
									return $e.get(this).messageTimestampFrom
								}
							}, {
								key: "messageTimestampTo",
								get: function() {
									return $e.get(this).messageTimestampTo
								}
							}, {
								key: "order",
								get: function() {
									return $e.get(this).order
								}
							}]), e
						}(),
						nn = new WeakMap,
						tn = new WeakMap,
						rn = function() {
							function e(n) {
								a(this, e), this.isLoading = !1, this.hasMore = !0, this.limit = 20, tn.set(this, Number.MAX_SAFE_INTEGER), nn.set(this, n), this.reverse = !1, this.messageTypeFilter = null, this.customTypeFilter = null, this.senderUserIdsFilter = [], this.includeMetaArray = !1, this.includeReaction = !1, this.includeReplies = !1, this.includeParentMessageText = !1, this.includeThreadInfo = !1
							}
							return u(e, [{
								key: "load",
								value: function(e, n, t, r) {
									var i = this,
										s = L.get(this._iid).BaseChannel,
										a = null,
										o = C(q.parse(arguments, [new q({
											type: "number",
											optional: !0,
											defaultValue: this.limit
										}), new q({
											type: "boolean",
											optional: !0,
											defaultValue: this.reverse
										}), new q({
											type: ["string", "number"],
											optional: !0,
											defaultValue: this.messageTypeFilter,
											constraint: function(e) {
												return -1 < Object.keys(s.MessageTypeFilter).map((function(e) {
													return s.MessageTypeFilter[e]
												})).indexOf(e) || -1 < [0, 1, 2, 3].indexOf(e)
											}
										}), new q({
											type: "callback"
										})]), 5);
									return a = o[0], e = o[1], n = o[2], t = o[3], r = o[4], te(this._iid, (function(r) {
										if (Array.isArray(i.senderUserIdsFilter) && !i.senderUserIdsFilter.some((function(e) {
												return "string" != typeof e
											})) || (a = q.error), a) r(a, null);
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
											if (i.isLoading) r(new N("Query in progress.", N.QUERY_IN_PROGRESS), null);
											else if (i.hasMore) {
												i.isLoading = !0;
												var o = nn.get(i);
												I.get(i._iid).container.apiClient.getMessageList({
													channel: o,
													token: tn.get(i) || (new Date).getTime() + 1e4,
													tokenType: "timestamp",
													isInclusive: !1,
													prevResultSize: e,
													nextResultSize: 0,
													shouldReverse: n,
													messageType: t,
													customType: i.customTypeFilter,
													senderUserIds: i.senderUserIdsFilter,
													includeMetaArray: i.includeMetaArray,
													includeReaction: i.includeReaction,
													includeReplies: i.includeReplies,
													includeParentMessageText: i.includeParentMessageText,
													includeThreadInfo: i.includeThreadInfo
												}, (function(n, t) {
													var a = null;
													if (!n) {
														(0 === (a = t.messages.map((function(e) {
															return s.buildMessage(e, o)
														}))).length || a.length < e) && (i.hasMore = !1);
														var u = tn.get(i);
														tn.set(i, Math.min.apply(Math, E(a.map((function(e) {
															return e.createdAt
														}))).concat([u])))
													}
													i.isLoading = !1, r(n, a)
												}))
											} else r(null, [])
										}
									}), r)
								}
							}]), e
						}(),
						sn = function() {
							function e() {
								a(this, e), this.isLoading = !1, this.hasNext = !0, this.limit = 20, this.includeEmpty = !1, this.order = Qe.ORDER_LATEST_LAST_MESSAGE, this._token = "", this.channelNameContainsFilter = "", this.channelUrlsFilter = [], this.customTypesFilter = [], this.customTypeStartsWithFilter = null, this.superChannelFilter = ke.SuperChannelFilter.ALL, this.membershipFilter = e.MembershipType.JOINED, this.metadataOrderKeyFilter = null, this.includeFrozen = !0
							}
							return u(e, [{
								key: "next",
								value: function(n) {
									var t = this;
									return te(this._iid, (function(n) {
										var r = L.get(t._iid).GroupChannel;
										!("number" == typeof t.limit && 0 < t.limit && "boolean" == typeof t.includeEmpty && "string" == typeof t.order && -1 < [e.ORDER_CHRONOLOGICAL, e.CHANNEL_NAME_ALPHABETICAL, e.METADATA_VALUE_ALPHABETICAL, e.ORDER_LATEST_LAST_MESSAGE].indexOf(t.order.toLowerCase()) && Array.isArray(t.customTypesFilter) && Array.isArray(t.channelUrlsFilter) && -1 < Object.keys(e.MembershipType).map((function(n) {
											return e.MembershipType[n]
										})).indexOf(t.membershipFilter) && -1 < Object.keys(r.SuperChannelFilter).map((function(e) {
											return r.SuperChannelFilter[e]
										})).indexOf(t.superChannelFilter)) || "string" != typeof t.customTypeStartsWithFilter && null !== t.customTypeStartsWithFilter || "string" != typeof t.channelNameContainsFilter || "string" != typeof t.metadataOrderKeyFilter && null !== t.metadataOrderKeyFilter || "boolean" != typeof t.includeFrozen ? n(q.error, null) : t.isLoading ? n(new N("Query in progress.", N.QUERY_IN_PROGRESS), null) : t.hasNext ? (t.isLoading = !0, I.get(t._iid).container.apiClient.loadPublicGroupChannelList(c(c({}, t), {}, {
											token: t._token
										}), (function(e, i) {
											var s = null;
											if (!e) {
												var a = String(i.next);
												t._token = a, t.hasNext = !!a, s = i.channels.map((function(e) {
													return r.upsert(e)
												}))
											}
											t.isLoading = !1, n(e, s)
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
						an = function() {
							function e() {
								a(this, e), this.isDistinct = null, this.isSuper = null, this.isBroadcast = null, this.isPublic = null, this.channelUrl = null, this.isEphemeral = null, this.isDiscoverable = null, this.isStrict = null, this.name = null, this.data = null, this.customType = null, this.channelCover = null, this.coverUrl = null, this.coverImage = null, this.accessCode = null, this.messageSurvivalSeconds = null, this._invitedUserIds = [];
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
									})) && ("string" == typeof this.channelUrl || null === this.channelUrl) && ("string" == typeof this.coverUrl || null === this.coverUrl) && (H.isFile(this.coverImage) || null === this.coverImage) && ("string" == typeof this.name || null === this.name) && ("string" == typeof this.data || null === this.data) && ("string" == typeof this.customType || null === this.customType) && ("boolean" == typeof this.isDistinct || null === this.isDistinct) && ("boolean" == typeof this.isSuper || null === this.isSuper) && ("boolean" == typeof this.isBroadcast || null === this.isBroadcast) && ("boolean" == typeof this.isPublic || null === this.isPublic) && ("boolean" == typeof this.isEphemeral || null === this.isEphemeral) && ("boolean" == typeof this.isDiscoverable || null === this.isDiscoverable) && ("boolean" == typeof this.isStrict || null === this.isStrict) && (Array.isArray(this.operatorUserIds) && this.operatorUserIds.every((function(e) {
										return "string" == typeof e
									})) || null === this.operatorUserIds) && ("string" == typeof this.accessCode || null === this.accessCode) && ("number" == typeof this.messageSurvivalSeconds || null === this.messageSurvivalSeconds)
								}
							}, {
								key: "addUsers",
								value: function(e) {
									if (Array.isArray(e)) {
										var n, t = e.filter((function(e) {
											return e.hasOwnProperty("userId") && "string" == typeof e.userId
										})).map((function(e) {
											return e.userId
										}));
										(n = this._invitedUserIds).push.apply(n, E(t))
									}
								}
							}, {
								key: "addUser",
								value: function(e) {
									e.hasOwnProperty("userId") && "string" == typeof e.userId && this._invitedUserIds.push(e.userId)
								}
							}, {
								key: "addUserIds",
								value: function(e) {
									if (Array.isArray(e)) {
										var n, t = e.filter((function(e) {
											return "string" == typeof e
										}));
										(n = this._invitedUserIds).push.apply(n, E(t))
									}
								}
							}, {
								key: "addUserId",
								value: function(e) {
									"string" == typeof e && this._invitedUserIds.push(e)
								}
							}]), e
						}(),
						on = new WeakMap,
						un = function() {
							function e() {
								a(this, e), this._mentionType = e.MentionType.USERS, this._mentionedUserIds = [], this._cachedMentionedUsers = [], this._cachedMentionedUserIds = [], this._metaArrays = [], on.set(this, null), this._parentMessageId = null
							}
							return u(e, [{
								key: "_validate",
								value: function() {
									var e = L.get(this._iid),
										n = e.BaseMessageParams,
										t = e.MessageMetaArray,
										r = on.get(this);
									return -1 < Object.keys(n.MentionType).map((function(e) {
										return n.MentionType[e]
									})).indexOf(this.mentionType) && this._mentionedUserIds.every((function(e) {
										return "string" == typeof e
									})) && Array.isArray(this._metaArrays) && this._metaArrays.every((function(e) {
										return e instanceof t
									})) && ("number" == typeof r || null === r) && ("number" == typeof this._parentMessageId || null === this._parentMessageId)
								}
							}, {
								key: "mentionType",
								get: function() {
									return this._mentionType
								},
								set: function(e) {
									var n = L.get(this._iid).BaseMessageParams; - 1 < Object.keys(n.MentionType).map((function(e) {
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
										for (var n = kn.getInstance(this._iid), t = 0; t < e.length; t++) {
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
										for (var n = kn.getInstance(this._iid), t = 0; t < e.length; t++) {
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
									var n = L.get(this._iid).MessageMetaArray,
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
									var n = L.get(this._iid).MessageMetaArray;
									if (Array.isArray(e)) {
										this._metaArrays = [];
										for (var t = 0; t < e.length; t++) {
											var r = e[t];
											if (r instanceof n) {
												var i, s = this._metaArrays.map((function(e) {
													return e.key
												})).indexOf(r.key);
												s < 0 ? this._metaArrays.push(r) : (i = this._metaArrays[s].value).push.apply(i, E(r.value))
											}
										}
									}
								}
							}, {
								key: "rootMessageId",
								get: function() {
									return on.get(this)
								}
							}, {
								key: "parentMessageId",
								get: function() {
									return this._parentMessageId
								},
								set: function(e) {
									on.set(this, e), this._parentMessageId = e
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
						ln = function() {
							d(n, un);
							var e = m(n);

							function n() {
								var t;
								return a(this, n), (t = e.call(this)).message = null, t.data = null, t.customType = null, t.pushNotificationDeliveryOption = null, t._translationTargetLanguages = [], t
							}
							return u(n, [{
								key: "_validate",
								value: function() {
									var e = L.get(this._iid).BaseMessageParams;
									return v(h(n.prototype), "_validate", this).call(this) && ("string" == typeof this.message || null === this.message) && ("string" == typeof this.data || null === this.data) && ("string" == typeof this.customType || null === this.customType) && Array.isArray(this.translationTargetLanguages) && this.translationTargetLanguages.every((function(e) {
										return "string" == typeof e
									})) && (null === this.pushNotificationDeliveryOption || -1 < Object.keys(e.PushNotificationDeliveryOption).map((function(n) {
										return e.PushNotificationDeliveryOption[n]
									})).indexOf(this.pushNotificationDeliveryOption))
								}
							}, {
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
							}]), n
						}(),
						cn = function() {
							d(n, un);
							var e = m(n);

							function n() {
								var t;
								return a(this, n), (t = e.call(this)).fileName = null, t.mimeType = null, t.fileSize = null, t.data = null, t.customType = null, t.pushNotificationDeliveryOption = null, t._isUpdate = !1, t._file = null, t._fileUrl = null, t._thumbnailSizes = [], t
							}
							return u(n, [{
								key: "_validate",
								value: function() {
									var e = L.get(this._iid).BaseMessageParams;
									return v(h(n.prototype), "_validate", this).call(this) && (this._isUpdate || H.isFile(this.file) || "string" == typeof this.fileUrl) && ("string" == typeof this.fileName || null === this.fileName) && ("string" == typeof this.mimeType || null === this.mimeType) && ("number" == typeof this.fileSize || null === this.fileSize) && ("string" == typeof this.data || null === this.data) && ("string" == typeof this.customType || null === this.customType) && (null === this._thumbnailSizes || this._thumbnailSizes.every((function(e) {
										return "object" === s(e) && 0 < e.maxWidth && 0 < e.maxHeight
									}))) && (null === this.pushNotificationDeliveryOption || -1 < Object.keys(e.PushNotificationDeliveryOption).map((function(n) {
										return e.PushNotificationDeliveryOption[n]
									})).indexOf(this.pushNotificationDeliveryOption))
								}
							}, {
								key: "file",
								get: function() {
									return this._file
								},
								set: function(e) {
									H.isFile(e) && (this._fileUrl = null, this._file = e)
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
											if ("object" !== s(e[n]) || "number" != typeof e[n].maxWidth || "number" != typeof e[n].maxHeight) return void(this._thumbnailSizes = []);
										this._thumbnailSizes = e
									}
								}
							}]), n
						}(),
						dn = function() {
							d(n, ln);
							var e = m(n);

							function n(t) {
								var r;
								return a(this, n), (r = e.call(this)).year = null, r.month = null, r.day = null, r.hour = null, r.min = null, r.timezone = null, r._scheduledDateTimeString = null, t && r._update(t), r
							}
							return u(n, [{
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
							}, {
								key: "scheduledDateTimeString",
								get: function() {
									return this._scheduledDateTimeString ? this._scheduledDateTimeString : "number" == typeof this.year && 4 === this.year.toString().length && "number" == typeof this.month && 1 <= this.month && this.month <= 12 && "number" == typeof this.day && 1 <= this.day && this.day <= 31 && "number" == typeof this.hour && 0 <= this.hour && this.hour <= 24 && "number" == typeof this.min && 0 <= this.min && this.min <= 60 && "string" == typeof this.timezone && 0 < this.timezone.length ? this.year.toString() + "-" + ("0" + this.month.toString()).substr(-2) + "-" + ("0" + this.day.toString()).substr(-2) + " " + ("0" + this.hour.toString()).substr(-2) + ":" + ("0" + this.min.toString()).substr(-2) : null
								},
								set: function(e) {
									e && "string" == typeof e && (this._scheduledDateTimeString = e)
								}
							}]), n
						}(),
						hn = function() {
							function e() {
								a(this, e), this.channelUrl = null, this.channelType = null, this.messageId = 0, this.includeMetaArray = !1, this.includeParentMessageText = !1, this.includeThreadInfo = !1
							}
							return u(e, [{
								key: "_validate",
								value: function() {
									var e = L.get(this._iid).BaseChannel;
									return "string" == typeof this.channelUrl && "string" == typeof this.channelType && [e.CHANNEL_TYPE_BASE, e.CHANNEL_TYPE_OPEN, e.CHANNEL_TYPE_GROUP].includes(this.channelType) && "number" == typeof this.messageId && "boolean" == typeof this.includeMetaArray && "boolean" == typeof this.includeParentMessageText && "boolean" == typeof this.includeThreadInfo
								}
							}]), e
						}(),
						pn = function() {
							function e() {
								a(this, e);
								var n = L.get(this._iid).BaseChannel;
								this.prevResultSize = 0, this.nextResultSize = 0, this.isInclusive = !1, this.reverse = !1, this.messageType = n.MessageTypeFilter.ALL, this.customType = null, this.senderUserIds = null, this.includeMetaArray = !1, this.includeReactions = !1, this.includeReplies = !1, this.includeParentMessageText = !1, this.includeThreadInfo = !1
							}
							return u(e, [{
								key: "_validate",
								value: function() {
									var e = L.get(this._iid).BaseChannel;
									return "number" == typeof this.prevResultSize && "number" == typeof this.nextResultSize && "boolean" == typeof this.isInclusive && "boolean" == typeof this.reverse && "string" == typeof this.messageType && Object.values(e.MessageTypeFilter).includes(this.messageType) && ("string" == typeof this.customType || null === this.customType) && (Array.isArray(this.senderUserIds) && this.senderUserIds.every((function(e) {
										return "string" == typeof e
									})) || null === this.senderUserIds) && "boolean" == typeof this.includeMetaArray && "boolean" == typeof this.includeReactions && "boolean" == typeof this.includeReplies && "boolean" == typeof this.includeParentMessageText && "boolean" == typeof this.includeThreadInfo
								}
							}]), e
						}(),
						fn = function() {
							function e() {
								a(this, e);
								var n = L.get(this._iid).BaseChannel;
								this.prevResultSize = 0, this.nextResultSize = 0, this.isInclusive = !1, this.reverse = !1, this.messageType = n.MessageTypeFilter.ALL, this.customType = null, this.senderUserIds = null, this.includeMetaArray = !1, this.includeReactions = !1, this.includeParentMessageText = !1
							}
							return u(e, [{
								key: "_validate",
								value: function() {
									var e = L.get(this._iid).BaseChannel;
									return "number" == typeof this.prevResultSize && "number" == typeof this.nextResultSize && "boolean" == typeof this.isInclusive && "boolean" == typeof this.reverse && "string" == typeof this.messageType && Object.values(e.MessageTypeFilter).includes(this.messageType) && ("string" == typeof this.customType || null === this.customType) && (Array.isArray(this.senderUserIds) && this.senderUserIds.every((function(e) {
										return "string" == typeof e
									})) || null === this.senderUserIds) && "boolean" == typeof this.includeMetaArray && "boolean" == typeof this.includeReactions && "boolean" == typeof this.includeParentMessageText
								}
							}]), e
						}(),
						_n = function() {
							function e() {
								a(this, e), this.includeMetaArray = !1, this.includeReactions = !1, this.includeReplies = !1, this.includeParentMessageText = !1, this.includeThreadInfo = !1
							}
							return u(e, [{
								key: "_validate",
								value: function() {
									return "boolean" == typeof this.includeMetaArray && "boolean" == typeof this.includeReactions && "boolean" == typeof this.includeReplies && "boolean" == typeof this.includeParentMessageText && "boolean" == typeof this.includeThreadInfo
								}
							}]), e
						}(),
						gn = function() {
							function e() {
								a(this, e), this.customTypes = [], this.includeEmpty = !1, this.includeFrozen = !0
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
						yn = function() {
							function e(n) {
								var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [];
								a(this, e), this.key = n, this.value = Array.isArray(t) && t.every((function(e) {
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
						mn = new WeakMap,
						vn = function() {
							function e(n) {
								var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [],
									r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
								a(this, e), this.key = n, this.userIds = t, this.updatedAt = r;
								var i = {};
								for (var s in this.userIds) i[this.userIds[s]] = this.updatedAt;
								mn.set(this, i)
							}
							return u(e, [{
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
									if (e instanceof Z) {
										var n = mn.get(this);
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
							}, {
								key: "isEmpty",
								get: function() {
									return 0 === this.userIds.length
								}
							}], [{
								key: "createFromJson",
								value: function(e) {
									var n = e.key,
										t = e.user_ids,
										r = e.updated_at;
									return "string" == typeof n && n && Array.isArray(t) && 0 < t.length && "number" == typeof r ? new this(n, t, r) : null
								}
							}]), e
						}(),
						Cn = function() {
							function e() {
								var n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
								a(this, e), this.isLoading = !1, this.hasNext = !0, this.limit = 20, this.userIds = n, this.metaDataKey = "", this.metaDataValues = [], this._token = ""
							}
							return u(e, [{
								key: "next",
								value: function(e) {
									var n = this;
									return te(this._iid, (function(e) {
										"number" == typeof n.limit && 0 < n.limit && Array.isArray(n.userIds) && "string" == typeof n.metaDataKey && Array.isArray(n.metaDataValues) && !!n.metaDataKey == 0 < n.metaDataValues.length ? n.isLoading ? e(new N("Query in progress.", N.QUERY_IN_PROGRESS), null) : n.hasNext ? (n.isLoading = !0, I.get(n._iid).container.apiClient.loadUserList(c(c({}, n), {}, {
											userIdsFilter: n.userIds,
											metaDataKeyFilter: n.metaDataKey,
											metaDataValuesFilter: n.metaDataValues,
											token: n._token
										}), (function(t, r) {
											var i = null;
											if (!t) {
												var s = L.get(n._iid).User,
													a = String(r.next);
												n._token = a, n.hasNext = !!a, i = r.users.map((function(e) {
													return new s(e)
												}))
											}
											n.isLoading = !1, e(t, i)
										}))) : e(null, []) : e(q.error, null)
									}), e)
								}
							}]), e
						}(),
						En = new WeakMap,
						bn = function() {
							function e(n) {
								a(this, e), this.isLoading = !1, En.set(this, n)
							}
							return u(e, [{
								key: "prev",
								value: function(e, n, t, r) {
									var i = arguments,
										s = this;
									return te(this._iid, (function(r) {
										var a, o = L.get(s._iid).BaseChannel,
											u = C(q.parse(i, [new q({
												type: "number"
											}), new q({
												type: "number"
											}), new q({
												type: "boolean"
											}), new q({
												type: "function"
											})]), 5);
										if (a = u[0], e = u[1], n = u[2], t = u[3], r = u[4], a) r(a, null);
										else if (s.isLoading) r(new N("Query in progress.", N.QUERY_IN_PROGRESS), null);
										else {
											s.isLoading = !0;
											var l = En.get(s);
											I.get(s._iid).container.apiClient.getMessageList({
												channelUrl: l.url,
												channelType: l.channelType,
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
													return o.buildMessage(e, l)
												}))), s.isLoading = !1, r(e, t)
											}))
										}
									}), r)
								}
							}, {
								key: "next",
								value: function(e, n, t, r) {
									var i = arguments,
										s = this;
									return te(this._iid, (function(r) {
										var a, o = L.get(s._iid).BaseChannel,
											u = C(q.parse(i, [new q({
												type: "number"
											}), new q({
												type: "number"
											}), new q({
												type: "boolean"
											}), new q({
												type: "function"
											})]), 5);
										if (a = u[0], e = u[1], n = u[2], t = u[3], r = u[4], a) r(a, null);
										else if (s.isLoading) r(new N("Query in progress.", N.QUERY_IN_PROGRESS), null);
										else {
											s.isLoading = !0;
											var l = En.get(s);
											I.get(s._iid).container.apiClient.getMessageList({
												channelUrl: l.url,
												channelType: l.channelType,
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
													return o.buildMessage(e, l)
												}))), s.isLoading = !1, r(e, t)
											}))
										}
									}), r)
								}
							}, {
								key: "load",
								value: function(e, n, t, r, i) {
									var s = arguments,
										a = this;
									return te(this._iid, (function(i) {
										var o, u = L.get(a._iid).BaseChannel,
											l = C(q.parse(s, [new q({
												type: "number"
											}), new q({
												type: "number"
											}), new q({
												type: "number"
											}), new q({
												type: "boolean"
											}), new q({
												type: "callback"
											})]), 6);
										if (o = l[0], e = l[1], n = l[2], t = l[3], r = l[4], i = l[5], o) i(o, null);
										else if (a.isLoading) i(new N("Query in progress.", N.QUERY_IN_PROGRESS), null);
										else {
											a.isLoading = !0;
											var c = En.get(a);
											I.get(a._iid).container.apiClient.getMessageList({
												channelUrl: c.url,
												channelType: c.channelType,
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
													return u.buildMessage(e, c)
												}))), a.isLoading = !1, i(e, t)
											}))
										}
									}), i)
								}
							}]), e
						}(),
						Un = null,
						An = {},
						Sn = !1,
						kn = function() {
							function e(n) {
								a(this, e);
								var t = !1;
								if ((n.newInstance || !Un || Un && n.appId !== Un.getApplicationId() && Un.getConnectionState() === Un.ConnectionState.CLOSED) && (t = !0, Un = this), t) {
									try {
										if (!n.hasOwnProperty("appId")) return O.debug("Must be set appId"), null
									} catch (n) {
										return O.debug("Must be set appId"), null
									}
									var r = Ce.create();
									Object.defineProperty(this, "_iid", {
										get: function() {
											return r
										}
									}), (An[r] = this).customApiHost = null, this.customWsHost = null, this.connecting = !1, this.reconnecting = !1, this.isReconnectingOnError = !1, this.connectionCallbacks = [], this.ConnectionManager = new Q(this), this.GCMPushToken = "", this.APNSPushToken = "", this.PUSH_TEMPLATE_DEFAULT = "default", this.PUSH_TEMPLATE_ALTERNATIVE = "alternative", this.currentUser = null, this.isSessionOpened = !1, this.globalTimer, this.loginTimer, this.reconnectTimer, this.loginHandler = null, this.onLoginTimerCancel, this.onReconnectTimerCancel, this.BaseChannel = {
										MessageTypeFilter: ue.MessageTypeFilter
									};
									var i = {
											User: ae,
											Member: Ie,
											GroupChannel: ke,
											OpenChannel: Le,
											UserMessage: Pe,
											FileMessage: De,
											AdminMessage: He,
											GroupChannelListQuery: Qe,
											GroupChannelParams: an,
											BaseMessageParams: un,
											UserMessageParams: ln,
											FileMessageParams: cn,
											ScheduledUserMessageParams: dn,
											GroupChannelTotalUnreadMessageCountParams: _e,
											MessageRetrievalParams: hn,
											MessageListParams: pn,
											ThreadedMessageListParams: fn,
											MessageChangeLogsParams: _n,
											GroupChannelChangeLogsParams: gn,
											MessageMetaArray: yn,
											UserEventHandler: ye,
											ChannelHandler: me,
											ConnectionHandler: ge
										},
										s = {
											BaseChannel: ue,
											BaseMessage: se,
											UserListQuery: Cn,
											ApplicationUserListQuery: je,
											BannedUserListQuery: ze,
											BlockedUserListQuery: Be,
											FriendListQuery: qe,
											MemberListQuery: Ye,
											MutedUserListQuery: Ke,
											OpenChannelListQuery: Ve,
											OperatorListQuery: Je,
											ParticipantListQuery: Xe,
											MessageListQuery: bn,
											PreviousMessageListQuery: rn,
											MessageSearchQuery: en,
											PublicGroupChannelListQuery: sn,
											ScheduledUserMessage: Fe,
											ThreadInfo: Ge,
											ThreadInfoUpdateEvent: xe,
											Command: V,
											Sender: Ne,
											ReadStatus: ve,
											Reaction: vn,
											ReactionEvent: Z,
											Emoji: Me,
											EmojiCategory: Te,
											EmojiContainer: Re,
											FileMessageQueue: fe
										},
										o = new L(this._iid, c(c({}, i), s));
									for (var u in o) i[u] && (this[u] = o[u]);
									I.create(r, {
										appId: n.appId,
										pinger: new P(this),
										apiClient: new j(this),
										wsAdapter: new B(this),
										commandHandler: new de(this),
										onlineDetector: new Y(this),
										ackStateMap: {},
										subscribedUnreadMessageCount: {
											all: 0,
											custom_types: {},
											ts: 0
										},
										maxUnreadCountOfSuperGroupChannel: A.DEFAULT_MAX_UNREAD_COUNT_OF_SUPER_GROUP_CHANNEL,
										auth: new R,
										appInfo: null,
										pingInterval: 15e3,
										pongTimeout: 5e3,
										connectedAt: 0,
										extensions: {},
										supportedExtensionKeys: ["sb_uikit", "sb_syncmanager"],
										getUserAgentWithExtensions: function(e) {
											var n = e.sb_syncmanager ? "s".concat(e.sb_syncmanager) : "",
												t = e.sb_uikit ? "u".concat(e.sb_uikit) : "";
											return "JS/c".concat(A.SDK_VERSION, "/").concat(n, "/").concat(t)
										},
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
										_typingIndicatorThrottle: 1e3,
										get typingIndicatorThrottle() {
											return this._typingIndicatorThrottle
										},
										set typingIndicatorThrottle(e) {
											"number" == typeof e && 1e3 <= e && e <= 9e3 && (this._typingIndicatorThrottle = e)
										}
									}
								}
								return Un
							}
							return u(e, [{
								key: "getApplicationId",
								value: function() {
									return I.get(this._iid).get("appId")
								}
							}, {
								key: "getCurrentUserId",
								value: function() {
									return this.currentUser ? this.currentUser.userId : null
								}
							}, {
								key: "getDebugMode",
								value: function() {
									return Sn
								}
							}, {
								key: "setDebugMode",
								value: function(e) {
									Sn = e, O.mode = e ? O.Mode.DEBUG : O.Mode.PRODUCTION
								}
							}, {
								key: "getErrorFirstCallback",
								value: function() {
									return I.get(this._iid).container.isErrorFirstInCallback
								}
							}, {
								key: "setErrorFirstCallback",
								value: function(e) {
									"boolean" == typeof e && I.get(this._iid).set("isErrorFirstInCallback", e)
								}
							}, {
								key: "getCurrentApiHost",
								value: function() {
									return this.customApiHost ? this.customApiHost : "https://api.sendbird.com"
								}
							}, {
								key: "clearCurrentApiHost",
								value: function() {
									this.customApiHost = null
								}
							}, {
								key: "getCurrentWsHost",
								value: function() {
									return this.customWsHost ? this.customWsHost : "wss://ws.sendbird.com"
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
										var e = I.get(this._iid).container.wsAdapter;
										return this.connecting || this.reconnecting ? this.ConnectionState.CONNECTING : e.ws ? this.connecting || this.reconnecting ? this.ConnectionState.CONNECTING : this.isSessionOpened ? e.ws.getConnectionState() : this.ConnectionState.CLOSED : this.ConnectionState.CLOSED
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
									var e = I.get(this._iid);
									return this.currentUser && e.get("auth").hasSession()
								}
							}, {
								key: "getLastConnectedAt",
								value: function() {
									var e = I.get(this._iid);
									return this.getConnectionState() === this.ConnectionState.OPEN && this.currentUser ? e.get("connectedAt") : 0
								}
							}, {
								key: "connect",
								value: function(e, n, t, r, i) {
									var s = this,
										a = I.get(this._iid).container,
										o = a.wsAdapter,
										u = a.onlineDetector;
									u && u.start();
									var l, c = C(q.parse(arguments, [new q({
										type: "string",
										constraint: function(e) {
											return 0 < e.length
										}
									}), new q({
										type: "string",
										nullable: !0,
										ignoreIf: function(e) {
											return 1 === e.length || 3 === e.length
										}
									}), new q({
										type: "string",
										nullable: !0,
										ignoreIf: function(e) {
											return 1 === e.length || 2 === e.length
										}
									}), new q({
										type: "string",
										nullable: !0,
										ignoreIf: function(e) {
											return 1 === e.length || 2 === e.length
										}
									}), new q({
										type: "callback"
									})]), 6);
									return l = c[0], e = c[1], n = c[2], t = c[3], r = c[4], i = c[5], te(this._iid, (function(i) {
										l ? i(l, null) : (s.customApiHost = t, s.customWsHost = r, s.connecting = !0, s.reconnecting = !1, s.isReconnectingOnError = !1, s.reconnectTimer && (clearTimeout(s.reconnectTimer), s.reconnectTimer = null, s.onReconnectTimerCancel = null), s.getConnectionState() === s.ConnectionState.OPEN && s.currentUser && s.currentUser.userId === e ? (s.connecting = !1, i(null, s.currentUser)) : (s.connectionCallbacks.push(i), 1 === s.connectionCallbacks.length && (o.disconnect({
											clearSession: !0,
											err: null
										}, null), o.connect(e, n))))
									}), i)
								}
							}, {
								key: "reconnect",
								value: function() {
									var e = I.get(this._iid).container,
										n = e.wsAdapter;
									if (e.auth.sessionKey && this.currentUser) {
										var t = !0;
										return 0 < n.reconnectCount && (t = !1), n.disconnect({
											clearSession: !1,
											err: new N("Connection has been canceled.", N.CONNECTION_CANCELED)
										}, null), n.reconnectCount = 0, n.reconnect(this.currentUser.userId, t), !0
									}
									return !1
								}
							}, {
								key: "disconnect",
								value: function(e) {
									var n = this;
									return te(this._iid, (function(e) {
										var t = I.get(n._iid).container,
											r = t.wsAdapter,
											i = t.onlineDetector;
										i && i.stop(), r.disconnect({
											clearSession: !0,
											err: new N("Connection has been canceled.", N.CONNECTION_CANCELED)
										}, e)
									}), e)
								}
							}, {
								key: "setBackgroundState",
								value: function() {
									var e = I.get(this._iid),
										n = e.container,
										t = n.wsAdapter,
										r = n.stateChangeEnabled;
									!n.isInBackground && r && (e.set("isInBackground", !0), this.getConnectionState() !== this.ConnectionState.CLOSED ? (e.set("closedByGoingBackground", !0), t.disconnect({
										clearSession: !1,
										err: new N("Websocket connection failed.", N.WEBSOCKET_CONNECTION_FAILED)
									}, null)) : e.set("closedByGoingBackground", !1))
								}
							}, {
								key: "setForegroundState",
								value: function() {
									var e = I.get(this._iid),
										n = e.container,
										t = n.wsAdapter,
										r = n.stateChangeEnabled,
										i = n.isInBackground,
										s = n.closedByGoingBackground;
									i && r && (e.set("isInBackground", !1), s && this.currentUser && t.reconnect(this.currentUser.userId, !0))
								}
							}, {
								key: "enableStateChange",
								value: function() {
									I.get(this._iid).set("enableStateChange", !0)
								}
							}, {
								key: "disableStateChange",
								value: function() {
									I.get(this._iid).set("enableStateChange", !1)
								}
							}, {
								key: "addExtension",
								value: function(e, n) {
									var t = I.get(this._iid).container,
										r = t.extensions; - 1 < t.supportedExtensionKeys.indexOf(e) && (r[e] = n)
								}
							}, {
								key: "createUserListQuery",
								value: function(e) {
									return new(L.get(this._iid).UserListQuery)(e)
								}
							}, {
								key: "createApplicationUserListQuery",
								value: function() {
									return new(L.get(this._iid).ApplicationUserListQuery)
								}
							}, {
								key: "createBlockedUserListQuery",
								value: function() {
									return new(L.get(this._iid).BlockedUserListQuery)
								}
							}, {
								key: "createFriendListQuery",
								value: function() {
									return new(L.get(this._iid).FriendListQuery)
								}
							}, {
								key: "createMessageSearchQuery",
								value: function(e, n) {
									return new(L.get(this._iid).MessageSearchQuery)(e, n)
								}
							}, {
								key: "sendCommand",
								value: function(e, n) {
									var t = this;
									return te(this._iid, (function(n) {
										t.ConnectionManager.ready((function(r, i) {
											if (r) n(r, null);
											else {
												var s = I.get(t._iid).container,
													a = s.wsAdapter,
													o = s.ackStateMap;
												if (null == a || null == a.ws || a.ws.getConnectionState() !== t.ConnectionState.OPEN || t.getConnectionState() !== t.ConnectionState.OPEN) return void n(new N("Connection is not valid. Please reconnect.", N.WEBSOCKET_CONNECTION_CLOSED), null);
												if (e.isAckRequired) {
													var u = e.requestId,
														l = {
															handler: n,
															timer: setTimeout((function() {
																n(new N("Command received no ack.", N.ACK_TIMEOUT), null), delete o[u]
															}), A.COMMAND_ACK_TIMEOUT)
														};
													o[u] = l, a.ws.send(e, (function(e) {
														e && (clearTimeout(l.timer), n(e, null))
													}))
												} else a.ws.send(e, n)
											}
										}), !1)
									}), n)
								}
							}, {
								key: "addUserEventHandler",
								value: function(e, n) {
									n instanceof L.get(this._iid).UserEventHandler && (this.userEventHandlers[e] = n)
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
									n instanceof L.get(this._iid).ChannelHandler && (this.channelHandlers[e] = n)
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
									n instanceof L.get(this._iid).ConnectionHandler && (this.connectionHandlers[e] = n)
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
									var r, i = this,
										s = C(q.parse(arguments, [new q({
											type: "string",
											nullable: !0
										}), new q({
											type: "string",
											nullable: !0
										}), new q({
											type: "callback"
										})]), 4);
									return r = s[0], e = s[1], n = s[2], t = s[3], te(this._iid, (function(t) {
										r ? t(r, null) : I.get(i._iid).container.apiClient.updateCurrentUserInfo({
											nickname: e,
											profileUrl: n
										}, (function(r, s) {
											var a = null;
											r || (i.currentUser && (e && (i.currentUser.nickname = e), n && (i.currentUser.profileUrl = n)), a = i.currentUser), t(r, a)
										}))
									}), t)
								}
							}, {
								key: "updateCurrentUserInfoWithProfileImage",
								value: function(e, n, t) {
									var r, i = this,
										s = C(q.parse(arguments, [new q({
											type: "string",
											nullable: !0
										}), new q({
											type: "file",
											nullable: !0
										}), new q({
											type: "callback"
										})]), 4);
									return r = s[0], e = s[1], n = s[2], t = s[3], te(this._iid, (function(t) {
										r ? t(r, null) : I.get(i._iid).container.apiClient.updateCurrentUserInfo({
											nickname: e,
											profileImage: n
										}, (function(n, r) {
											var s = null;
											n || (i.currentUser && (e && (i.currentUser.nickname = e), r.profile_url && (i.currentUser.profileUrl = r.profile_url)), s = i.currentUser), t(n, s)
										}))
									}), t)
								}
							}, {
								key: "updateCurrentUserInfoWithPreferredLanguages",
								value: function(e, n) {
									var t, r = this,
										i = C(q.parse(arguments, [new q({
											type: "array",
											constraint: function(e) {
												return e.every((function(e) {
													return "string" == typeof e
												}))
											}
										}), new q({
											type: "callback"
										})]), 3);
									return t = i[0], e = i[1], n = i[2], te(this._iid, (function(n) {
										t ? n(t, null) : I.get(r._iid).container.apiClient.updateCurrentUserInfo({
											preferredLanguages: e
										}, (function(t, i) {
											var s = null;
											t || (r.currentUser && e && (r.currentUser._preferredLanguages = e), s = r.currentUser), n(t, s)
										}))
									}), n)
								}
							}, {
								key: "registerGCMPushTokenForCurrentUser",
								value: function(e, n) {
									var t, r = this,
										i = C(q.parse(arguments, [new q({
											type: "string",
											constraint: function(e) {
												return 0 < e.length
											}
										}), new q({
											type: "callback"
										})]), 3);
									return t = i[0], e = i[1], n = i[2], te(this._iid, (function(n) {
										t ? n(t, r.pushTokenRegistrationState.ERROR) : r.currentUser ? I.get(r._iid).container.apiClient.registerGCMPushToken({
											token: e
										}, (function(e, t) {
											var i = r.pushTokenRegistrationState.ERROR;
											e || (r.GCMPushToken = "", i = r.pushTokenRegistrationState.SUCCESS), n(e, i)
										})) : (r.GCMPushToken = e, n(null, r.pushTokenRegistrationState.PENDING))
									}), n)
								}
							}, {
								key: "unregisterGCMPushTokenForCurrentUser",
								value: function(e, n) {
									var t, r = this,
										i = C(q.parse(arguments, [new q({
											type: "string",
											constraint: function(e) {
												return 0 < e.length
											}
										}), new q({
											type: "callback"
										})]), 3);
									return t = i[0], e = i[1], n = i[2], te(this._iid, (function(n) {
										t ? n(t, null) : r.currentUser ? I.get(r._iid).container.apiClient.unregisterGCMPushToken({
											token: e
										}, (function(e, t) {
											n(e, null)
										})) : (r.GCMPushToken = e, n(null, r.pushTokenRegistrationState.PENDING))
									}), n)
								}
							}, {
								key: "unregisterGCMPushTokenAllForCurrentUser",
								value: function(e) {
									var n = this;
									return te(this._iid, (function(e) {
										I.get(n._iid).container.apiClient.unregisterAllGCMPushTokens({}, (function(n, t) {
											e(n, null)
										}))
									}), e)
								}
							}, {
								key: "registerAPNSPushTokenForCurrentUser",
								value: function(e, n) {
									var t, r = this,
										i = C(q.parse(arguments, [new q({
											type: "string",
											constraint: function(e) {
												return 0 < e.length
											}
										}), new q({
											type: "callback"
										})]), 3);
									return t = i[0], e = i[1], n = i[2], te(this._iid, (function(n) {
										t ? n(t, r.pushTokenRegistrationState.ERROR) : r.currentUser ? I.get(r._iid).container.apiClient.registerAPNSPushToken({
											token: e
										}, (function(e, t) {
											var i = r.pushTokenRegistrationState.ERROR;
											e || (r.APNSPushToken = "", i = r.pushTokenRegistrationState.SUCCESS), n(e, i)
										})) : (r.APNSPushToken = e, n(null, r.pushTokenRegistrationState.PENDING))
									}), n)
								}
							}, {
								key: "unregisterAPNSPushTokenForCurrentUser",
								value: function(e, n) {
									var t, r = this,
										i = C(q.parse(arguments, [new q({
											type: "string",
											constraint: function(e) {
												return 0 < e.length
											}
										}), new q({
											type: "callback"
										})]), 3);
									return t = i[0], e = i[1], n = i[2], te(this._iid, (function(n) {
										t ? n(t, null) : r.currentUser ? I.get(r._iid).container.apiClient.unregisterAPNSPushToken({
											token: e
										}, (function(e, t) {
											n(e, null)
										})) : (r.APNSPushToken = e, n(null, r.pushTokenRegistrationState.PENDING))
									}), n)
								}
							}, {
								key: "unregisterAPNSPushTokenAllForCurrentUser",
								value: function(e) {
									var n = this;
									return te(this._iid, (function(e) {
										I.get(n._iid).container.apiClient.unregisterAllAPNSPushTokens({}, (function(n, t) {
											e(n, null)
										}))
									}), e)
								}
							}, {
								key: "unregisterPushTokenAllForCurrentUser",
								value: function(e) {
									var n = this;
									return te(this._iid, (function(e) {
										I.get(n._iid).container.apiClient.unregisterAllPushTokens({}, (function(n, t) {
											e(n, null)
										}))
									}), e)
								}
							}, {
								key: "getMyGroupChannelChangeLogsByToken",
								value: function(e, n, t, r) {
									var i = this,
										s = null,
										a = C(q.parse(arguments, [new q({
											type: "string",
											nullable: !0
										}), new q({
											type: "array",
											optional: !0,
											nullable: !0,
											defaultValue: null
										}), new q({
											type: "boolean",
											nullable: !0,
											optional: !0,
											defaultValue: null
										}), new q({
											type: "callback"
										})]), 5);
									s = a[0], e = a[1], n = a[2], t = a[3], r = a[4];
									var o = L.get(this._iid).GroupChannelChangeLogsParams,
										u = null;
									if (s) {
										var l = C(q.parse(arguments, [new q({
											type: "string",
											nullable: !0
										}), new q({
											type: o,
											constraint: function(e) {
												return e._validate()
											}
										}), new q({
											type: "callback"
										})]), 4);
										s = l[0], e = l[1], u = l[2], r = l[3]
									} else(u = new o).customTypes = n, u.includeEmpty = t, u.includeFrozen = !0;
									return te(this._iid, (function(n) {
										s ? n(s, null) : I.get(i._iid).container.apiClient.getMyGroupChannelChangeLogs(c({
											ts: null,
											token: e
										}, u), (function(e, t) {
											if (e) n(e, null);
											else {
												var r = L.get(i._iid).GroupChannel,
													s = t.updated.map((function(e) {
														return new r(e)
													})),
													a = t.deleted,
													o = t.has_more,
													u = t.next;
												n(null, {
													updatedChannels: s,
													deletedChannelUrls: a,
													hasMore: o,
													token: u
												})
											}
										}))
									}), r)
								}
							}, {
								key: "getMyGroupChannelChangeLogsByTimestamp",
								value: function(e, n, t, r) {
									var i = this,
										s = null,
										a = C(q.parse(arguments, [new q({
											type: "number",
											constraint: function(e) {
												return 0 <= e
											}
										}), new q({
											type: "array",
											optional: !0,
											nullable: !0,
											defaultValue: null
										}), new q({
											type: "boolean",
											nullable: !0,
											optional: !0,
											defaultValue: null
										}), new q({
											type: "callback"
										})]), 5);
									s = a[0], e = a[1], n = a[2], t = a[3], r = a[4];
									var o = L.get(this._iid).GroupChannelChangeLogsParams,
										u = null;
									if (s) {
										var l = C(q.parse(arguments, [new q({
											type: "number",
											constraint: function(e) {
												return 0 <= e
											}
										}), new q({
											type: o,
											constraint: function(e) {
												return e._validate()
											}
										}), new q({
											type: "callback"
										})]), 4);
										s = l[0], e = l[1], u = l[2], r = l[3]
									} else(u = new o).customTypes = n, u.includeEmpty = t, u.includeFrozen = !0;
									return te(this._iid, (function(n) {
										s ? n(s, null) : I.get(i._iid).container.apiClient.getMyGroupChannelChangeLogs(c({
											ts: e,
											token: null
										}, u), (function(e, t) {
											if (e) n(e, null);
											else {
												var r = L.get(i._iid).GroupChannel,
													s = t.updated.map((function(e) {
														return new r(e)
													})),
													a = t.deleted,
													o = t.has_more,
													u = t.next;
												n(null, {
													updatedChannels: s,
													deletedChannelUrls: a,
													hasMore: o,
													token: u
												})
											}
										}))
									}), r)
								}
							}, {
								key: "getChannelInvitationPreference",
								value: function(e) {
									var n = this;
									return te(this._iid, (function(e) {
										I.get(n._iid).container.apiClient.getChannelInvitationPreference({}, (function(n, t) {
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
									var t, r = this,
										i = C(q.parse(arguments, [new q({
											type: "boolean"
										}), new q({
											type: "callback"
										})]), 3);
									return t = i[0], e = i[1], n = i[2], te(this._iid, (function(n) {
										t ? n(t, null) : I.get(r._iid).container.apiClient.setChannelInvitationPreference({
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
									return te(this._iid, (function(e) {
										I.get(n._iid).container.apiClient.getDoNotDisturb({}, (function(n, t) {
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
									var o, u = this,
										l = C(q.parse(arguments, [new q({
											type: "boolean"
										}), new q({
											type: "number",
											constraint: function(e) {
												return 0 <= e && e <= 23
											}
										}), new q({
											type: "number",
											constraint: function(e) {
												return 0 <= e && e <= 59
											}
										}), new q({
											type: "number",
											constraint: function(e) {
												return 0 <= e && e <= 23
											}
										}), new q({
											type: "number",
											constraint: function(e) {
												return 0 <= e && e <= 59
											}
										}), new q({
											type: "string"
										}), new q({
											type: "callback"
										})]), 8);
									return o = l[0], e = l[1], n = l[2], t = l[3], r = l[4], i = l[5], s = l[6], a = l[7], te(this._iid, (function(a) {
										o ? a(o, null) : I.get(u._iid).container.apiClient.setDoNotDisturb({
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
									return te(this._iid, (function(e) {
										I.get(n._iid).container.apiClient.getSnoozePeriod({}, (function(n, t) {
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
									var i, s = this,
										a = C(q.parse(arguments, [new q({
											type: "boolean"
										}), new q({
											type: "number",
											constraint: function(e) {
												return 0 < e
											}
										}), new q({
											type: "number",
											constraint: function(e) {
												return 0 < e
											}
										}), new q({
											type: "callback"
										})]), 5);
									return i = a[0], e = a[1], n = a[2], t = a[3], r = a[4], te(this._iid, (function(r) {
										i ? r(i, null) : I.get(s._iid).container.apiClient.setSnoozePeriod({
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
									var t, r = C(q.parse(arguments, [new q({
										type: "object",
										constraint: function(e) {
											return e && e.hasOwnProperty("userId")
										}
									}), new q({
										type: "callback"
									})]), 3);
									return t = r[0], e = r[1], n = r[2], t ? te(this._iid, (function(e) {
										e(t, null)
									}), n) : this.blockUserWithUserId(e.userId, n)
								}
							}, {
								key: "blockUserWithUserId",
								value: function(e, n) {
									var t, r = this,
										i = C(q.parse(arguments, [new q({
											type: "string",
											constraint: function(e) {
												return e && (!r.currentUser || e !== r.currentUser.userId)
											}
										}), new q({
											type: "callback"
										})]), 3);
									return t = i[0], e = i[1], n = i[2], te(this._iid, (function(n) {
										t ? n(t, null) : I.get(r._iid).container.apiClient.blockUser({
											blockedUserId: e
										}, (function(e, t) {
											var r = null;
											e || (r = new ae(t)), n(e, r)
										}))
									}), n)
								}
							}, {
								key: "unblockUser",
								value: function(e, n) {
									var t, r = C(q.parse(arguments, [new q({
										type: "object",
										constraint: function(e) {
											return e && e.hasOwnProperty("userId")
										}
									}), new q({
										type: "callback"
									})]), 3);
									return t = r[0], e = r[1], n = r[2], t ? te(this._iid, (function(e) {
										e(t, null)
									}), n) : this.unblockUserWithUserId(e.userId, n)
								}
							}, {
								key: "unblockUserWithUserId",
								value: function(e, n) {
									var t, r = this,
										i = C(q.parse(arguments, [new q({
											type: "string",
											constraint: function(e) {
												return e && (!r.currentUser || e !== r.currentUser.userId)
											}
										}), new q({
											type: "callback"
										})]), 3);
									return t = i[0], e = i[1], n = i[2], te(this._iid, (function(n) {
										t ? n(t, null) : I.get(r._iid).container.apiClient.unblockUser({
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
									return te(this._iid, (function(e) {
										I.get(n._iid).container.apiClient.getPushTriggerOption({}, (function(n, t) {
											e(n, t ? t.push_trigger_option : null)
										}))
									}), e)
								}
							}, {
								key: "setPushTriggerOption",
								value: function(e, n) {
									var t = this;
									return te(this._iid, (function(n) {
										-1 < Object.keys(t.PushTriggerOption).map((function(e) {
											return t.PushTriggerOption[e]
										})).indexOf(e) ? I.get(t._iid).container.apiClient.setPushTriggerOption({
											pushTriggerOption: e
										}, (function(e, t) {
											n(e, t ? t.push_trigger_option : null)
										})) : n(q.error, null)
									}), n)
								}
							}, {
								key: "getGroupChannelCount",
								value: function(e, n) {
									var t, r = this,
										i = L.get(this._iid).GroupChannel,
										s = C(q.parse(arguments, [new q({
											type: i.MemberStateFilter,
											optional: !0,
											defaultValue: i.MemberStateFilter.ALL
										}), new q({
											type: "callback"
										})]), 3);
									return t = s[0], e = s[1], n = s[2], te(this._iid, (function(n) {
										t ? n(t, null) : I.get(r._iid).container.apiClient.getGroupChannelCount({
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
									return te(this._iid, (function(e) {
										I.get(n._iid).container.apiClient.getTotalUnreadChannelCount({}, (function(n, t) {
											var r = null;
											n || (r = parseInt(t.unread_count)), e(n, r)
										}))
									}), e)
								}
							}, {
								key: "getTotalUnreadMessageCount",
								value: function(e, n) {
									var t, r = this,
										i = L.get(this._iid),
										s = i.GroupChannel,
										a = i.GroupChannelTotalUnreadMessageCountParams,
										o = C(q.parse(arguments, [new q({
											type: "object",
											optional: !0,
											defaultValue: null,
											constraint: function(e) {
												return Array.isArray(e) && e.every((function(e) {
													return "string" == typeof e
												})) || e instanceof a
											}
										}), new q({
											type: "callback"
										})]), 3);
									return t = o[0], e = o[1], n = o[2], te(this._iid, (function(n) {
										if (t) n(t, null);
										else {
											var i = s.SuperChannelFilter.ALL;
											if (e instanceof a) {
												var o = e;
												e = o.channelCustomTypesFilter, i = o.superChannelFilter
											}
											I.get(r._iid).container.apiClient.getTotalUnreadMessageCount({
												customTypesFilter: e,
												superChannelFilter: i
											}, (function(e, t) {
												var r = null;
												e || (r = parseInt(t.unread_count)), n(e, r)
											}))
										}
									}), n)
								}
							}, {
								key: "getUnreadItemCount",
								value: function(e, n) {
									var t, r = this,
										i = C(q.parse(arguments, [new q({
											type: "array",
											constraint: function(e) {
												return 0 < e.length && e.every((function(e) {
													return -1 < Object.keys(ke.UnreadItemKey).map((function(e) {
														return ke.UnreadItemKey[e]
													})).indexOf(e)
												}))
											}
										}), new q({
											type: "callback"
										})]), 3);
									return t = i[0], e = i[1], n = i[2], te(this._iid, (function(n) {
										if (t) n(t, null);
										else {
											var i = e.filter((function(n, t) {
												return e.indexOf(n) === t
											}));
											I.get(r._iid).container.apiClient.getUnreadItemCount({
												keys: i
											}, (function(e, t) {
												n(e, t)
											}))
										}
									}), n)
								}
							}, {
								key: "getSubscribedTotalUnreadMessageCount",
								value: function() {
									var e = I.get(this._iid).container.subscribedUnreadMessageCount;
									return 0 <= e.all ? e.all : 0
								}
							}, {
								key: "getSubscribedCustomTypeTotalUnreadMessageCount",
								value: function() {
									var e = I.get(this._iid).container.subscribedUnreadMessageCount;
									if (0 < Object.keys(e.custom_types).length) {
										var n = 0;
										for (var t in e.custom_types) n += e.custom_types[t];
										return n
									}
									return 0
								}
							}, {
								key: "getSubscribedCustomTypeUnreadMessageCount",
								value: function(e) {
									if (e && "string" == typeof e) {
										var n = I.get(this._iid).container.subscribedUnreadMessageCount;
										return n.custom_types.hasOwnProperty(e) ? n.custom_types[e] : 0
									}
									return 0
								}
							}, {
								key: "getMyPushTokensByToken",
								value: function(e, n, t) {
									var r, i = this,
										s = C(q.parse(arguments, [new q({
											type: "string"
										}), new q({
											type: "string",
											constraint: function(e) {
												return -1 < ["gcm", "apns", "apns_voip"].indexOf(e)
											}
										}), new q({
											type: "callback"
										})]), 4);
									return r = s[0], e = s[1], n = s[2], t = s[3], te(this._iid, (function(t) {
										r ? t(r, null) : I.get(i._iid).container.apiClient.getPushTokens({
											ts: null,
											token: e,
											type: n
										}, (function(e, n) {
											if (e) t(e, null);
											else {
												var r = n.type;
												t(null, {
													deviceTokens: n.device_tokens,
													type: r ? r.toLowerCase() : "unknown",
													hasMore: n.has_more,
													token: n.token
												})
											}
										}))
									}), t)
								}
							}, {
								key: "getPushTemplate",
								value: function(e) {
									var n = this;
									return te(this._iid, (function(e) {
										I.get(n._iid).container.apiClient.getPushTemplate({}, (function(n, t) {
											var r = null;
											n || (r = t.name.toString()), e(n, r)
										}))
									}), e)
								}
							}, {
								key: "setPushTemplate",
								value: function(e, n) {
									var t = this;
									return te(this._iid, (function(n) {
										-1 < [t.PUSH_TEMPLATE_DEFAULT, t.PUSH_TEMPLATE_ALTERNATIVE].indexOf(e) ? I.get(t._iid).container.apiClient.setPushTemplate({
											templateName: e
										}, (function(e, t) {
											var r = null;
											e || (r = t.name.toString()), n(e, r)
										})) : n(q.error, null)
									}), n)
								}
							}, {
								key: "markAsReadAll",
								value: function(e) {
									var n = this;
									return te(this._iid, (function(e) {
										var t = L.get(n._iid).GroupChannel,
											r = (new Date).getTime();
										r - t.markAsReadAllLastSentAt < 1e3 ? e(new N("MarkAsRead rate limit exceeded.", N.MARK_AS_READ_RATE_LIMIT_EXCEEDED), null) : (t.markAsReadAllLastSentAt = r, I.get(n._iid).container.apiClient.markAsReadAll({
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
									var t, r = this,
										i = C(q.parse(arguments, [new q({
											type: "array",
											constraint: function(e) {
												return e.every((function(e) {
													return "string" == typeof e
												}))
											}
										}), new q({
											type: "callback"
										})]), 3);
									return t = i[0], e = i[1], n = i[2], te(this._iid, (function(n) {
										if (t) n(t, null);
										else {
											var i = (new Date).getTime();
											I.get(r._iid).container.apiClient.markAsReadAll({
												channelUrls: e
											}, (function(t, s) {
												if (!t)
													for (var a in e) {
														var o = e[a];
														ke.cachedChannels[o] && (r.currentUser && ke.cachedChannels[o].updateReadReceipt(r.currentUser.userId, i), ke.cachedChannels[o]._setGroupChannelUnreadCount(0, 0))
													}
												n(t, null)
											}))
										}
									}), n)
								}
							}, {
								key: "markAsDelivered",
								value: function(e) {
									"string" == typeof e && L.get(this._iid).GroupChannel.getChannel(e, A.INTERNAL_CALL, (function(e, n) {
										e || n.markAsDelivered()
									}))
								}
							}, {
								key: "getFriendChangeLogsByToken",
								value: function(e, n) {
									var t, r = this,
										i = C(q.parse(arguments, [new q({
											type: "string",
											optional: !0,
											defaultValue: null
										}), new q({
											type: "callback"
										})]), 3);
									return t = i[0], e = i[1], n = i[2], te(this._iid, (function(n) {
										t ? n(t, null) : I.get(r._iid).container.apiClient.getFriendChangeLogsByToken({
											token: e
										}, (function(e, t) {
											var i = null;
											if (!e) {
												var s = L.get(r._iid).User;
												i = {
													updatedUsers: t.updated.map((function(e) {
														return new s(e)
													})),
													deletedUserIds: t.deleted,
													hasMore: t.has_more,
													token: t.next
												}
											}
											n(e, i)
										}))
									}), n)
								}
							}, {
								key: "uploadFriendDiscoveries",
								value: function(e, n) {
									var t, r = this,
										i = C(q.parse(arguments, [new q({
											type: "array",
											constraint: function(e) {
												return e.every((function(e) {
													return e.hasOwnProperty("friendDiscoveryKey")
												}))
											}
										}), new q({
											type: "callback"
										})]), 3);
									return t = i[0], e = i[1], n = i[2], te(this._iid, (function(n) {
										t ? n(t, null) : I.get(r._iid).container.apiClient.uploadFriendDiscoveries({
											discoveries: e
										}, (function(e, t) {
											n(e, t)
										}))
									}), n)
								}
							}, {
								key: "deleteFriendDiscovery",
								value: function(e, n) {
									var t, r = C(q.parse(arguments, [new q({
										type: "string"
									}), new q({
										type: "callback"
									})]), 3);
									return t = r[0], e = r[1], n = r[2], t ? te(this._iid, (function(e) {
										e(t, null)
									}), n) : this.deleteFriendDiscoveries([e], n)
								}
							}, {
								key: "deleteFriendDiscoveries",
								value: function(e, n) {
									var t, r = this,
										i = C(q.parse(arguments, [new q({
											type: "array",
											constraint: function(e) {
												return e.every((function(e) {
													return "string" == typeof e
												}))
											}
										}), new q({
											type: "callback"
										})]), 3);
									return t = i[0], e = i[1], n = i[2], te(this._iid, (function(n) {
										t ? n(t, null) : I.get(r._iid).container.apiClient.deleteFriendDiscoveries({
											discoveryKeys: e
										}, (function(e, t) {
											n(e, t)
										}))
									}), n)
								}
							}, {
								key: "addFriends",
								value: function(e, n) {
									var t, r = this,
										i = C(q.parse(arguments, [new q({
											type: "array",
											constraint: function(e) {
												return e.every((function(e) {
													return "string" == typeof e
												}))
											}
										}), new q({
											type: "callback"
										})]), 3);
									return t = i[0], e = i[1], n = i[2], te(this._iid, (function(n) {
										t ? n(t, null) : I.get(r._iid).container.apiClient.addFriends({
											userIds: e
										}, (function(e, t) {
											var i = null;
											if (!e) {
												var s = L.get(r._iid).User;
												i = t.users.map((function(e) {
													return new s(e)
												}))
											}
											n(e, i)
										}))
									}), n)
								}
							}, {
								key: "deleteFriend",
								value: function(e, n) {
									var t, r = C(q.parse(arguments, [new q({
										type: "string"
									}), new q({
										type: "callback"
									})]), 3);
									return t = r[0], e = r[1], n = r[2], t ? te(this._iid, (function(e) {
										e(t, null)
									}), n) : this.deleteFriends([e], n)
								}
							}, {
								key: "deleteFriends",
								value: function(e, n) {
									var t, r = this,
										i = C(q.parse(arguments, [new q({
											type: "array",
											constraint: function(e) {
												return e.every((function(e) {
													return "string" == typeof e
												}))
											}
										}), new q({
											type: "callback"
										})]), 3);
									return t = i[0], e = i[1], n = i[2], te(this._iid, (function(n) {
										t ? n(t, null) : I.get(r._iid).container.apiClient.deleteFriends({
											userIds: e
										}, (function(e, t) {
											n(e, t)
										}))
									}), n)
								}
							}, {
								key: "getAllEmoji",
								value: function(e) {
									var n, t = this,
										r = C(q.parse(arguments, [new q({
											type: "callback"
										})]), 2);
									return n = r[0], e = r[1], te(this._iid, (function(e) {
										n ? e(n, null) : I.get(t._iid).container.apiClient.getAllEmoji((function(n, r) {
											if (n) e(n, null);
											else {
												var i = new(L.get(t._iid).EmojiContainer)(r);
												e(null, i)
											}
										}))
									}), e)
								}
							}, {
								key: "getEmojiCategory",
								value: function(e, n) {
									var t, r = this,
										i = C(q.parse(arguments, [new q({
											type: "number",
											constraint: function(e) {
												return 0 <= e
											}
										}), new q({
											type: "callback"
										})]), 3);
									return t = i[0], e = i[1], n = i[2], te(this._iid, (function(n) {
										t ? n(t, null) : I.get(r._iid).container.apiClient.getEmojiCategory({
											categoryId: e
										}, (function(e, t) {
											if (e) n(e, null);
											else {
												var i = new(L.get(r._iid).EmojiCategory)(t);
												n(null, i)
											}
										}))
									}), n)
								}
							}, {
								key: "getEmoji",
								value: function(e, n) {
									var t, r = this,
										i = C(q.parse(arguments, [new q({
											type: "string"
										}), new q({
											type: "callback"
										})]), 3);
									return t = i[0], e = i[1], n = i[2], te(this._iid, (function(n) {
										t ? n(t, null) : I.get(r._iid).container.apiClient.getEmoji({
											emojiKey: e
										}, (function(e, t) {
											if (e) n(e, null);
											else {
												var i = new(L.get(r._iid).Emoji)(t);
												n(null, i)
											}
										}))
									}), n)
								}
							}, {
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
									return I.get(this._iid).container.appInfo
								}
							}], [{
								key: "getInstance",
								value: function(e) {
									return e ? An[e] : Un
								}
							}, {
								key: "version",
								get: function() {
									return A.SDK_VERSION
								}
							}]), e
						}();
					return kn
				}(t("./node_modules/axios/index.js"), t("./node_modules/sendbird/node_modules/form-data/lib/browser.js"), t("./node_modules/ws/browser.js"))
			}).call(this, t("./node_modules/process/browser.js"), t("./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer)
		},
		"./node_modules/sendbird/node_modules/form-data/lib/browser.js": function(e, n) {
			e.exports = "object" == typeof self ? self.FormData : window.FormData
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~Chat~RedesignChat.0b8e29ec5de489b739b1.js.map