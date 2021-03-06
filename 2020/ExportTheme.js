// https://www.redditstatic.com/desktop2x/ExportTheme.4f1092cde562f2f5a4b4.js
// Retrieved at 7/7/2020, 7:40:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ExportTheme"], {
		"./node_modules/file-saver/FileSaver.js": function(e, t, n) {
			var o, r = r || function(e) {
				"use strict";
				if (!(void 0 === e || "undefined" != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
					var t = e.document,
						n = function() {
							return e.URL || e.webkitURL || e
						},
						o = t.createElementNS("http://www.w3.org/1999/xhtml", "a"),
						r = "download" in o,
						a = /constructor/i.test(e.HTMLElement) || e.safari,
						i = /CriOS\/[\d]+/.test(navigator.userAgent),
						s = function(t) {
							(e.setImmediate || e.setTimeout)((function() {
								throw t
							}), 0)
						},
						c = function(e) {
							setTimeout((function() {
								"string" == typeof e ? n().revokeObjectURL(e) : e.remove()
							}), 4e4)
						},
						d = function(e) {
							return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob([String.fromCharCode(65279), e], {
								type: e.type
							}) : e
						},
						l = function(t, l, u) {
							u || (t = d(t));
							var f, p = this,
								w = "application/octet-stream" === t.type,
								m = function() {
									! function(e, t, n) {
										for (var o = (t = [].concat(t)).length; o--;) {
											var r = e["on" + t[o]];
											if ("function" == typeof r) try {
												r.call(e, n || e)
											} catch (a) {
												s(a)
											}
										}
									}(p, "writestart progress write writeend".split(" "))
								};
							if (p.readyState = p.INIT, r) return f = n().createObjectURL(t), void setTimeout((function() {
								var e, t;
								o.href = f, o.download = l, e = o, t = new MouseEvent("click"), e.dispatchEvent(t), m(), c(f), p.readyState = p.DONE
							}));
							! function() {
								if ((i || w && a) && e.FileReader) {
									var o = new FileReader;
									return o.onloadend = function() {
										var t = i ? o.result : o.result.replace(/^data:[^;]*;/, "data:attachment/file;");
										e.open(t, "_blank") || (e.location.href = t), t = void 0, p.readyState = p.DONE, m()
									}, o.readAsDataURL(t), void(p.readyState = p.INIT)
								}(f || (f = n().createObjectURL(t)), w) ? e.location.href = f: e.open(f, "_blank") || (e.location.href = f);
								p.readyState = p.DONE, m(), c(f)
							}()
						},
						u = l.prototype;
					return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function(e, t, n) {
						return t = t || e.name || "download", n || (e = d(e)), navigator.msSaveOrOpenBlob(e, t)
					} : (u.abort = function() {}, u.readyState = u.INIT = 0, u.WRITING = 1, u.DONE = 2, u.error = u.onwritestart = u.onprogress = u.onwrite = u.onabort = u.onerror = u.onwriteend = null, function(e, t, n) {
						return new l(e, t || e.name || "download", n)
					})
				}
			}("undefined" != typeof self && self || "undefined" != typeof window && window || this.content);
			e.exports ? e.exports.saveAs = r : null !== n("./node_modules/webpack/buildin/amd-define.js") && null !== n("./node_modules/webpack/buildin/amd-options.js") && (void 0 === (o = function() {
				return r
			}.call(t, n, t, e)) || (e.exports = o))
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./node_modules/webpack/buildin/amd-options.js": function(e, t) {
			(function(t) {
				e.exports = t
			}).call(this, {})
		},
		"./src/reddit/helpers/exportTheme/index.ts": function(e, t, n) {
			"use strict";
			n.r(t);
			n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/core-js/modules/es6.regexp.replace.js");
			var o = n("./node_modules/file-saver/FileSaver.js"),
				r = n("./node_modules/jszip/lib/index.js"),
				a = n.n(r),
				i = n("./src/reddit/models/StructuredStyles/index.ts");
			t.default = async (e, t) => {
				const n = {},
					r = {};
				for (const o in e) e[o] && (Object(i.l)(o) ? n[o] = e[o] : r[o] = e[o]);
				let s = (new Date).toISOString();
				s = (s = s.replace(/\./g, "-")).replace(/\:/g, "-");
				const c = "".concat(t, "-").concat(s, ".zip"),
					d = new a.a;
				d.file("".concat(t, "-attributes.json"), JSON.stringify(r, null, 2));
				const l = Object.keys(n).map(async e => {
					const t = await fetch(n[e]),
						o = await t.blob();
					d.file("".concat(e, ".png"), o)
				});
				try {
					for (let t = 0; t < l.length; t++) await l[t];
					const e = await d.generateAsync({
						type: "blob"
					});
					return Object(o.saveAs)(e, c), {
						ok: !0
					}
				} catch (u) {
					return {
						ok: !1,
						error: u
					}
				}
			}
		}
	}
]);
//# sourceMappingURL=ExportTheme.4f1092cde562f2f5a4b4.js.map