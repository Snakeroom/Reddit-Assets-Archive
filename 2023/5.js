// https://www.redditstatic.com/desktop2x/5.a6cbc21a15f4cd1b0b23.js
// Retrieved at 5/25/2023, 11:10:03 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	[5], {
		"./node_modules/html-to-image/es/index.js": function(t, e, n) {
			"use strict";
			n.r(e), n.d(e, "toSvg", (function() {
				return W
			})), n.d(e, "toCanvas", (function() {
				return K
			})), n.d(e, "toPixelData", (function() {
				return G
			})), n.d(e, "toPng", (function() {
				return J
			})), n.d(e, "toJpeg", (function() {
				return X
			})), n.d(e, "toBlob", (function() {
				return Q
			})), n.d(e, "getFontEmbedCSS", (function() {
				return Y
			}));
			var r = function(t, e, n, r) {
				return new(n || (n = Promise))((function(o, i) {
					function c(t) {
						try {
							s(r.next(t))
						} catch (e) {
							i(e)
						}
					}

					function u(t) {
						try {
							s(r.throw(t))
						} catch (e) {
							i(e)
						}
					}

					function s(t) {
						var e;
						t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
							t(e)
						}))).then(c, u)
					}
					s((r = r.apply(t, e || [])).next())
				}))
			};
			const o = "application/font-woff",
				i = {
					woff: o,
					woff2: o,
					ttf: "application/font-truetype",
					eot: "application/vnd.ms-fontobject",
					png: "image/png",
					jpg: "image/jpeg",
					jpeg: "image/jpeg",
					gif: "image/gif",
					tiff: "image/tiff",
					svg: "image/svg+xml"
				};

			function c(t) {
				const e = function(t) {
					const e = /\.([^./]*?)$/g.exec(t);
					return e ? e[1] : ""
				}(t).toLowerCase();
				return i[e] || ""
			}

			function u(t) {
				return -1 !== t.search(/^(data:)/)
			}

			function s(t, e) {
				return `data:${e};base64,${t}`
			}

			function l(t) {
				return t.split(/,/)[1]
			}
			const a = function() {
				let t = 0;
				return () => (t += 1, `u${(()=>`0000${(Math.random()*Math.pow(36,4)<<0).toString(36)}`.slice(-4))()}${t}`)
			}();

			function h(t) {
				const e = [];
				for (let n = 0, r = t.length; n < r; n += 1) e.push(t[n]);
				return e
			}

			function f(t, e) {
				const n = window.getComputedStyle(t).getPropertyValue(e);
				return parseFloat(n.replace("px", ""))
			}

			function d(t) {
				return t.toBlob ? new Promise(e => t.toBlob(e)) : new Promise(e => {
					const n = window.atob(t.toDataURL().split(",")[1]),
						r = n.length,
						o = new Uint8Array(r);
					for (let t = 0; t < r; t += 1) o[t] = n.charCodeAt(t);
					e(new Blob([o], {
						type: "image/png"
					}))
				})
			}

			function m(t) {
				return new Promise((e, n) => {
					const r = new Image;
					r.onload = () => e(r), r.onerror = n, r.crossOrigin = "anonymous", r.decoding = "sync", r.src = t
				})
			}

			function g(t, e, n) {
				return r(this, void 0, void 0, (function*() {
					const o = "http://www.w3.org/2000/svg",
						i = document.createElementNS(o, "svg"),
						c = document.createElementNS(o, "foreignObject");
					return i.setAttribute("width", `${e}`), i.setAttribute("height", `${n}`), i.setAttribute("viewBox", `0 0 ${e} ${n}`), c.setAttribute("width", "100%"), c.setAttribute("height", "100%"), c.setAttribute("x", "0"), c.setAttribute("y", "0"), c.setAttribute("externalResourcesRequired", "true"), i.appendChild(c), c.appendChild(t),
						function(t) {
							return r(this, void 0, void 0, (function*() {
								return Promise.resolve().then(() => (new XMLSerializer).serializeToString(t)).then(encodeURIComponent).then(t => `data:image/svg+xml;charset=utf-8,${t}`)
							}))
						}(i)
				}))
			}
			const p = {};

			function v(t, e) {
				const n = function(t) {
					let e = t.replace(/\?.*/, "");
					return /ttf|otf|eot|woff2?/i.test(e) && (e = e.replace(/.*\//, "")), e
				}(t);
				if (null != p[n]) return p[n];
				e.cacheBust && (t += (/\?/.test(t) ? "&" : "?") + (new Date).getTime());
				const r = window.fetch(t).then(t => t.blob().then(e => ({
					blob: e,
					contentType: t.headers.get("Content-Type") || ""
				}))).then(({
					blob: t,
					contentType: e
				}) => new Promise((n, r) => {
					const o = new FileReader;
					o.onloadend = () => n({
						contentType: e,
						blob: o.result
					}), o.onerror = r, o.readAsDataURL(t)
				})).then(({
					blob: t,
					contentType: e
				}) => ({
					contentType: e,
					blob: l(t)
				})).catch(n => {
					let r = "";
					if (e.imagePlaceholder) {
						const t = e.imagePlaceholder.split(/,/);
						t && t[1] && (r = t[1])
					}
					let o = `Failed to fetch resource: ${t}`;
					return n && (o = "string" == typeof n ? n : n.message), o && console.error(o), {
						blob: r,
						contentType: ""
					}
				});
				return p[n] = r, r
			}

			function w(t, e, n) {
				const r = `.${t}:${e}`,
					o = n.cssText ? function(t) {
						const e = t.getPropertyValue("content");
						return `${t.cssText} content: '${e.replace(/'|"/g,"")}';`
					}(n) : function(t) {
						return h(t).map(e => {
							return `${e}: ${t.getPropertyValue(e)}${t.getPropertyPriority(e)?" !important":""};`
						}).join(" ")
					}(n);
				return document.createTextNode(`${r}{${o}}`)
			}

			function y(t, e, n) {
				const r = window.getComputedStyle(t, n),
					o = r.getPropertyValue("content");
				if ("" === o || "none" === o) return;
				const i = a();
				try {
					e.className = `${e.className} ${i}`
				} catch (u) {
					return
				}
				const c = document.createElement("style");
				c.appendChild(w(i, n, r)), e.appendChild(c)
			}
			var b = function(t, e, n, r) {
				return new(n || (n = Promise))((function(o, i) {
					function c(t) {
						try {
							s(r.next(t))
						} catch (e) {
							i(e)
						}
					}

					function u(t) {
						try {
							s(r.throw(t))
						} catch (e) {
							i(e)
						}
					}

					function s(t) {
						var e;
						t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
							t(e)
						}))).then(c, u)
					}
					s((r = r.apply(t, e || [])).next())
				}))
			};

			function P(t, e) {
				return b(this, void 0, void 0, (function*() {
					return t instanceof HTMLCanvasElement ? function(t) {
						return b(this, void 0, void 0, (function*() {
							const e = t.toDataURL();
							return "data:," === e ? Promise.resolve(t.cloneNode(!1)) : m(e)
						}))
					}(t) : t instanceof HTMLVideoElement && t.poster ? function(t, e) {
						return b(this, void 0, void 0, (function*() {
							return Promise.resolve(t.poster).then(t => v(t, e)).then(e => s(e.blob, c(t.poster) || e.contentType)).then(t => m(t))
						}))
					}(t, e) : Promise.resolve(t.cloneNode(!1))
				}))
			}
			const x = t => null != t.tagName && "SLOT" === t.tagName.toUpperCase();

			function S(t, e) {
				return b(this, void 0, void 0, (function*() {
					return e instanceof Element ? Promise.resolve().then(() => (function(t, e) {
						const n = window.getComputedStyle(t),
							r = e.style;
						r && (n.cssText ? r.cssText = n.cssText : h(n).forEach(t => {
							r.setProperty(t, n.getPropertyValue(t), n.getPropertyPriority(t))
						}))
					})(t, e)).then(() => (function(t, e) {
						y(t, e, ":before"), y(t, e, ":after")
					})(t, e)).then(() => (function(t, e) {
						t instanceof HTMLTextAreaElement && (e.innerHTML = t.value), t instanceof HTMLInputElement && e.setAttribute("value", t.value)
					})(t, e)).then(() => e) : Promise.resolve(e)
				}))
			}

			function E(t, e, n) {
				return b(this, void 0, void 0, (function*() {
					return n || !e.filter || e.filter(t) ? Promise.resolve(t).then(t => P(t, e)).then(n => (function(t, e, n) {
						var r;
						return b(this, void 0, void 0, (function*() {
							const o = x(t) && t.assignedNodes ? h(t.assignedNodes()) : h((null !== (r = t.shadowRoot) && void 0 !== r ? r : t).childNodes);
							return 0 === o.length || t instanceof HTMLVideoElement ? Promise.resolve(e) : o.reduce((t, r) => t.then(() => E(r, n)).then(t => {
								t && e.appendChild(t)
							}), Promise.resolve()).then(() => e)
						}))
					})(t, n, e)).then(e => S(t, e)) : Promise.resolve(null)
				}))
			}
			var C = function(t, e, n, r) {
				return new(n || (n = Promise))((function(o, i) {
					function c(t) {
						try {
							s(r.next(t))
						} catch (e) {
							i(e)
						}
					}

					function u(t) {
						try {
							s(r.throw(t))
						} catch (e) {
							i(e)
						}
					}

					function s(t) {
						var e;
						t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
							t(e)
						}))).then(c, u)
					}
					s((r = r.apply(t, e || [])).next())
				}))
			};
			const $ = /url\((['"]?)([^'"]+?)\1\)/g,
				T = /url\([^)]+\)\s*format\((["'])([^"']+)\1\)/g,
				R = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;

			function L(t) {
				const e = [];
				return t.replace($, (t, n, r) => (e.push(r), t)), e.filter(t => !u(t))
			}

			function A(t, e, n, r, o) {
				const i = n ? function(t, e) {
					if (t.match(/^[a-z]+:\/\//i)) return t;
					if (t.match(/^\/\//)) return window.location.protocol + t;
					if (t.match(/^[a-z]+:/i)) return t;
					const n = document.implementation.createHTMLDocument(),
						r = n.createElement("base"),
						o = n.createElement("a");
					return n.head.appendChild(r), n.body.appendChild(o), e && (r.href = e), o.href = t, o.href
				}(e, n) : e;
				return Promise.resolve(i).then(t => o ? o(t) : v(t, r)).then(t => "string" == typeof t ? s(t, c(e)) : s(t.blob, c(e) || t.contentType)).then(n => t.replace(function(t) {
					const e = t.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
					return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`, "g")
				}(e), `$1${n}$3`)).then(t => t, () => i)
			}

			function N(t) {
				return -1 !== t.search($)
			}

			function D(t, e, n) {
				return C(this, void 0, void 0, (function*() {
					if (!N(t)) return Promise.resolve(t);
					const r = function(t, {
						preferredFontFormat: e
					}) {
						return e ? t.replace(R, t => {
							for (;;) {
								const [n, , r] = T.exec(t) || [];
								if (!r) return "";
								if (r === e) return `src: ${n};`
							}
						}) : t
					}(t, n);
					return Promise.resolve(r).then(L).then(t => t.reduce((t, r) => t.then(t => A(t, r, e, n)), Promise.resolve(r)))
				}))
			}
			var _ = function(t, e, n, r) {
				return new(n || (n = Promise))((function(o, i) {
					function c(t) {
						try {
							s(r.next(t))
						} catch (e) {
							i(e)
						}
					}

					function u(t) {
						try {
							s(r.throw(t))
						} catch (e) {
							i(e)
						}
					}

					function s(t) {
						var e;
						t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
							t(e)
						}))).then(c, u)
					}
					s((r = r.apply(t, e || [])).next())
				}))
			};

			function I(t, e) {
				return _(this, void 0, void 0, (function*() {
					return t instanceof Element ? Promise.resolve(t).then(t => (function(t, e) {
						var n;
						return _(this, void 0, void 0, (function*() {
							const r = null === (n = t.style) || void 0 === n ? void 0 : n.getPropertyValue("background");
							return r ? Promise.resolve(r).then(t => D(t, null, e)).then(e => (t.style.setProperty("background", e, t.style.getPropertyPriority("background")), t)) : Promise.resolve(t)
						}))
					})(t, e)).then(t => (function(t, e) {
						return _(this, void 0, void 0, (function*() {
							if ((!(t instanceof HTMLImageElement) || u(t.src)) && (!(t instanceof SVGImageElement) || u(t.href.baseVal))) return Promise.resolve(t);
							const n = t instanceof HTMLImageElement ? t.src : t.href.baseVal;
							return Promise.resolve(n).then(t => v(t, e)).then(t => s(t.blob, c(n) || t.contentType)).then(e => new Promise((n, r) => {
								t.onload = n, t.onerror = r, t instanceof HTMLImageElement ? (t.srcset = "", t.src = e) : t.href.baseVal = e
							})).then(() => t, () => t)
						}))
					})(t, e)).then(t => (function(t, e) {
						return _(this, void 0, void 0, (function*() {
							const n = h(t.childNodes).map(t => I(t, e));
							return Promise.all(n).then(() => t)
						}))
					})(t, e)) : Promise.resolve(t)
				}))
			}
			var H = function(t, e, n, r) {
				return new(n || (n = Promise))((function(o, i) {
					function c(t) {
						try {
							s(r.next(t))
						} catch (e) {
							i(e)
						}
					}

					function u(t) {
						try {
							s(r.throw(t))
						} catch (e) {
							i(e)
						}
					}

					function s(t) {
						var e;
						t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
							t(e)
						}))).then(c, u)
					}
					s((r = r.apply(t, e || [])).next())
				}))
			};
			const M = {};

			function U(t) {
				const e = M[t];
				if (null != e) return e;
				const n = window.fetch(t).then(e => ({
					url: t,
					cssText: e.text()
				}));
				return M[t] = n, n
			}

			function k(t) {
				return H(this, void 0, void 0, (function*() {
					return t.cssText.then(e => {
						let n = e;
						const r = /url\(["']?([^"')]+)["']?\)/g,
							o = (n.match(/url\([^)]+\)/g) || []).map(e => {
								let o = e.replace(r, "$1");
								return o.startsWith("https://") || (o = new URL(o, t.url).href), window.fetch(o).then(t => t.blob()).then(t => new Promise((r, o) => {
									const i = new FileReader;
									i.onloadend = () => {
										n = n.replace(e, `url(${i.result})`), r([e, i.result])
									}, i.onerror = o, i.readAsDataURL(t)
								}))
							});
						return Promise.all(o).then(() => n)
					})
				}))
			}

			function V(t) {
				if (null == t) return [];
				const e = [];
				let n = t.replace(/(\/\*[\s\S]*?\*\/)/gi, "");
				const r = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
				for (;;) {
					const t = r.exec(n);
					if (null === t) break;
					e.push(t[0])
				}
				n = n.replace(r, "");
				const o = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,
					i = new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", "gi");
				for (;;) {
					let t = o.exec(n);
					if (null === t) {
						if (null === (t = i.exec(n))) break;
						o.lastIndex = i.lastIndex
					} else i.lastIndex = o.lastIndex;
					e.push(t[0])
				}
				return e
			}

			function j(t) {
				return t.filter(t => t.type === CSSRule.FONT_FACE_RULE).filter(t => N(t.style.getPropertyValue("src")))
			}

			function O(t) {
				return H(this, void 0, void 0, (function*() {
					return new Promise((e, n) => {
						null == t.ownerDocument && n(new Error("Provided element is not within a Document")), e(h(t.ownerDocument.styleSheets))
					}).then(t => (function(t) {
						return H(this, void 0, void 0, (function*() {
							const e = [],
								n = [];
							return t.forEach(e => {
								if ("cssRules" in e) try {
									h(e.cssRules).forEach((t, r) => {
										if (t.type === CSSRule.IMPORT_RULE) {
											let o = r + 1;
											const i = U(t.href).then(t => t ? k(t) : "").then(t => V(t).forEach(t => {
												try {
													e.insertRule(t, t.startsWith("@import") ? o += 1 : e.cssRules.length)
												} catch (n) {
													console.error("Error inserting rule from remote css", {
														rule: t,
														error: n
													})
												}
											})).catch(t => {
												console.error("Error loading remote css", t.toString())
											});
											n.push(i)
										}
									})
								} catch (r) {
									const o = t.find(t => null == t.href) || document.styleSheets[0];
									null != e.href && n.push(U(e.href).then(t => t ? k(t) : "").then(t => V(t).forEach(t => {
										o.insertRule(t, e.cssRules.length)
									})).catch(t => {
										console.error("Error loading remote stylesheet", t.toString())
									})), console.error("Error inlining remote css file", r.toString())
								}
							}), Promise.all(n).then(() => (t.forEach(t => {
								if ("cssRules" in t) try {
									h(t.cssRules).forEach(t => {
										e.push(t)
									})
								} catch (n) {
									console.error(`Error while reading CSS rules from ${t.href}`, n.toString())
								}
							}), e))
						}))
					})(t)).then(j)
				}))
			}

			function B(t, e) {
				return H(this, void 0, void 0, (function*() {
					return O(t).then(t => Promise.all(t.map(t => {
						const n = t.parentStyleSheet ? t.parentStyleSheet.href : null;
						return D(t.cssText, n, e)
					}))).then(t => t.join("\n"))
				}))
			}
			var F = function(t, e, n, r) {
				return new(n || (n = Promise))((function(o, i) {
					function c(t) {
						try {
							s(r.next(t))
						} catch (e) {
							i(e)
						}
					}

					function u(t) {
						try {
							s(r.throw(t))
						} catch (e) {
							i(e)
						}
					}

					function s(t) {
						var e;
						t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
							t(e)
						}))).then(c, u)
					}
					s((r = r.apply(t, e || [])).next())
				}))
			};

			function z(t, e = {}) {
				return {
					width: e.width || function(t) {
						const e = f(t, "border-left-width"),
							n = f(t, "border-right-width");
						return t.clientWidth + e + n
					}(t),
					height: e.height || function(t) {
						const e = f(t, "border-top-width"),
							n = f(t, "border-bottom-width");
						return t.clientHeight + e + n
					}(t)
				}
			}

			function W(t, e = {}) {
				return F(this, void 0, void 0, (function*() {
					const {
						width: n,
						height: r
					} = z(t, e);
					return Promise.resolve(t).then(t => E(t, e, !0)).then(t => (function(t, e) {
						return H(this, void 0, void 0, (function*() {
							return (null != e.fontEmbedCSS ? Promise.resolve(e.fontEmbedCSS) : B(t, e)).then(e => {
								const n = document.createElement("style"),
									r = document.createTextNode(e);
								return n.appendChild(r), t.firstChild ? t.insertBefore(n, t.firstChild) : t.appendChild(n), t
							})
						}))
					})(t, e)).then(t => I(t, e)).then(t => (function(t, e) {
						const {
							style: n
						} = t;
						e.backgroundColor && (n.backgroundColor = e.backgroundColor), e.width && (n.width = `${e.width}px`), e.height && (n.height = `${e.height}px`);
						const r = e.style;
						return null != r && Object.keys(r).forEach(t => {
							n[t] = r[t]
						}), t
					})(t, e)).then(t => g(t, n, r))
				}))
			}
			const q = 16384;

			function K(t, e = {}) {
				return F(this, void 0, void 0, (function*() {
					return W(t, e).then(m).then(n => {
						const r = document.createElement("canvas"),
							o = r.getContext("2d"),
							i = e.pixelRatio || function() {
								let t, e;
								try {
									e = process
								} catch (r) {}
								const n = e && e.env ? e.env.devicePixelRatio : null;
								return n && (t = parseInt(n, 10), Number.isNaN(t) && (t = 1)), t || window.devicePixelRatio || 1
							}(),
							{
								width: c,
								height: u
							} = z(t, e),
							s = e.canvasWidth || c,
							l = e.canvasHeight || u;
						return r.width = s * i, r.height = l * i, e.skipAutoScale || function(t) {
							(t.width > q || t.height > q) && (t.width > q && t.height > q ? t.width > t.height ? (t.height *= q / t.width, t.width = q) : (t.width *= q / t.height, t.height = q) : t.width > q ? (t.height *= q / t.width, t.width = q) : (t.width *= q / t.height, t.height = q))
						}(r), r.style.width = `${s}`, r.style.height = `${l}`, e.backgroundColor && (o.fillStyle = e.backgroundColor, o.fillRect(0, 0, r.width, r.height)), o.drawImage(n, 0, 0, r.width, r.height), r
					})
				}))
			}

			function G(t, e = {}) {
				return F(this, void 0, void 0, (function*() {
					const {
						width: n,
						height: r
					} = z(t, e);
					return K(t, e).then(t => {
						return t.getContext("2d").getImageData(0, 0, n, r).data
					})
				}))
			}

			function J(t, e = {}) {
				return F(this, void 0, void 0, (function*() {
					return K(t, e).then(t => t.toDataURL())
				}))
			}

			function X(t, e = {}) {
				return F(this, void 0, void 0, (function*() {
					return K(t, e).then(t => t.toDataURL("image/jpeg", e.quality || 1))
				}))
			}

			function Q(t, e = {}) {
				return F(this, void 0, void 0, (function*() {
					return K(t, e).then(d)
				}))
			}

			function Y(t, e = {}) {
				return F(this, void 0, void 0, (function*() {
					return B(t, e)
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/5.a6cbc21a15f4cd1b0b23.js.map