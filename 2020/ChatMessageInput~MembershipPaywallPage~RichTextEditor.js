// https://www.redditstatic.com/desktop2x/ChatMessageInput~MembershipPaywallPage~RichTextEditor.ab1e5eef2cacb961aa03.js
// Retrieved at 3/11/2020, 3:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatMessageInput~MembershipPaywallPage~RichTextEditor"], {
		"./src/lib/forEachGroup/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return s
			}));
			const o = t => t;

			function s(t, e, n) {
				const [s, r] = Array.isArray(t) ? [t.length, e => t[e]] : [t.size, e => t.get(e)], {
					keyFn: i = o
				} = e || {};
				let {
					start: c = 0,
					end: a = s
				} = e || {};
				if ((c = c < 0 ? 0 : c) >= (a = a > s ? s : a)) return;
				let l = r(c),
					d = i(l, c),
					u = c;
				for (let o = c + 1; o < a; o++) {
					const t = r(o),
						e = i(t, o);
					if (e !== d) {
						if (!1 === n(l, d, u, o)) return;
						d = e, u = o, l = t
					}
				}
				n(l, d, u, a)
			}
		},
		"./src/lib/linkMatchers/index.ts": function(t, e, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.regexp.replace.js"), n("./node_modules/core-js/modules/es6.regexp.match.js");
			var o = n("./node_modules/linkify-it/index.js"),
				s = n.n(o),
				r = n("./node_modules/tlds/index.js"),
				i = n.n(r),
				c = n("./src/lib/linkMatchers/customLinks.ts"),
				a = n("./node_modules/lodash/values.js"),
				l = n.n(a);
			const d = t => l()(c.b).includes(t.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				p = t => ((t, e) => (e.forEach(e => t.add(e, null)), t))(t, u);
			n.d(e, "e", (function() {
				return h
			})), n.d(e, "d", (function() {
				return g
			})), n.d(e, "f", (function() {
				return m
			})), n.d(e, "i", (function() {
				return f
			})), n.d(e, "a", (function() {
				return b
			})), n.d(e, "b", (function() {
				return E
			})), n.d(e, "c", (function() {
				return S
			})), n.d(e, "g", (function() {
				return x
			})), n.d(e, "h", (function() {
				return C
			}));
			const h = s()().tlds(i.a).set({
					fuzzyIP: !0
				}),
				g = s()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(c.g.mention.prefix, c.g.mention.config),
				m = p(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(c.g.subreddit.prefix, c.g.subreddit.config).add(c.g.subredditFull.prefix, c.g.subreddit.config),
				f = p(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(c.g.profile.prefix, c.g.profile.config).add(c.g.profileFull.prefix, c.g.profile.config),
				b = s()().tlds(i.a).set({
					fuzzyIP: !0
				}).add(c.g.subreddit.prefix, c.g.subreddit.config).add(c.g.subredditFull.prefix, c.g.subreddit.config).add(c.g.profile.prefix, c.g.profile.config).add(c.g.profileFull.prefix, c.g.profile.config).add(c.g.mention.prefix, c.g.mention.config),
				y = h.normalize;
			h.normalize = t => {
				y.call(h, t), !t.schema && t.url.startsWith("http:") && (t.url = "https:".concat(t.url.slice(5)))
			};
			const E = (t, e) => {
					return (b.match(t) || []).filter(t => {
						const n = d(t.text);
						return !n || n && e
					})
				},
				S = t => {
					return [...f.match(t) || [], ...g.match(t) || []].map(t => !d(t.text) && t.text.replace(c.a, "")).filter(t => t)
				},
				x = (t, e) => {
					const n = t.match(e);
					if (n && 1 === n.length && 0 === n[0].index && n[0].lastIndex === e.length) return n[0]
				},
				C = t => {
					const e = h.match(t);
					if (e && 1 === e.length && 0 === e[0].index) {
						const n = e[0];
						return n.lastIndex === t.length ? n : ((t, e) => {
							const n = t.substring(e.lastIndex);
							if (/.*\/\/.*\/.*/.test(e.url) && /^(\?|\!)+$/.test(n)) return e.lastIndex += n.length, e.url += n, e
						})(t, n)
					}
				}
		},
		"./src/reddit/actions/postCreation/mediaUpload.ts": function(t, e, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/uuid/v4.js"),
				r = n.n(s),
				i = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/formatApiError/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/actions/upload.ts"),
				u = n("./src/lib/makeApiRequest/index.ts"),
				p = n("./src/lib/omitHeaders/index.ts"),
				h = n("./src/reddit/constants/headers.ts");
			var g = n("./src/reddit/helpers/correlationIdTracker.ts"),
				m = n("./src/reddit/helpers/imagePreview/index.ts"),
				f = n("./src/reddit/helpers/media/index.ts"),
				b = n("./src/reddit/models/Upload/index.ts"),
				y = n("./src/reddit/selectors/telemetry.ts"),
				E = n("./src/telemetry/index.ts");
			const S = async t => {
				let {
					state: e,
					uploadKey: n,
					assetId: o,
					isCanceled: s,
					fileSource: r,
					uploadDuration: i,
					correlationId: c
				} = t;
				const a = e.uploads[n],
					l = s || a.status === b.a.CANCELED,
					{
						file: d,
						url: u,
						metadata: p,
						error: h
					} = a,
					g = p.mimetype || d.type,
					m = g.startsWith("video/"),
					f = a.status === b.a.SUCCESS;
				let S = "";
				h ? S = JSON.stringify(h) : l && (S = "canceled");
				const x = {
					width: p.width,
					height: p.height,
					duration: p.videoDuration && Math.round(1e3 * p.videoDuration)
				};
				Object(E.a)(Object.assign({
					source: m ? "videoupload" : "imageupload",
					action: "upload",
					correlationId: c,
					noun: m ? "video" : "image"
				}, (t => Object.assign({}, y.defaults(t), {
					screen: y.screen(t),
					profile: y.profile(t),
					subreddit: y.subreddit(t)
				}))(e), {
					actionInfo: Object.assign({}, y.actionInfo(e), {
						success: f
					}, S ? {
						reason: S
					} : {}),
					media: Object.assign({
						mimetype: g,
						uploadDuration: i,
						source: r,
						fileName: d.name,
						size: d.size,
						type: m ? "video" : "image"
					}, o ? {
						id: o
					} : {}, u ? {
						url: u
					} : {}, x)
				}))
			};
			var x = n("./src/reddit/helpers/trackers/postComposer.ts"),
				C = n("./src/reddit/models/Toast/index.ts"),
				O = n("./src/reddit/selectors/postCreations.ts"),
				T = n("./src/reddit/actions/postCreation/constants.ts");
			n.d(e, "d", (function() {
				return R
			})), n.d(e, "c", (function() {
				return B
			})), n.d(e, "a", (function() {
				return I
			})), n.d(e, "b", (function() {
				return _
			}));
			const v = Object(a.a)(T.v),
				k = Object(a.a)(T.w),
				j = Object(a.a)(T.u),
				R = t => async (e, n) => {
					e(v());
					const o = t.map(t => {
						let {
							url: n,
							uploadKey: o
						} = t;
						const s = Object(f.a)(Object(f.c)(n), "poster.png");
						return e(B(s, o))
					});
					await Promise.all(o);
					const s = n().uploads,
						r = t.map(t => {
							let {
								uploadKey: e
							} = t;
							return s[e]
						}).find(t => t.status !== b.a.SUCCESS);
					e(r ? j(r.error) : k())
				}, w = (t, e) => ({
					error: e ? {
						type: t,
						fields: [{
							field: "",
							msg: e
						}]
					} : {
						type: t
					}
				});
			const B = (t, e, n, s) => async (r, c, a) => {
				let {
					apiContext: l
				} = a;
				const y = Object(O.g)(c()),
					E = Date.now();
				let C = null,
					T = !1,
					v = !1,
					k = !1;
				const j = t => {
					if (!k && n && T) {
						k = !0;
						const o = c(),
							s = Date.now() - E,
							r = Object(g.c)(g.a.PostComposer);
						v ? S({
							state: o,
							uploadKey: e,
							assetId: C,
							isCanceled: t,
							fileSource: n,
							uploadDuration: s,
							correlationId: r
						}) : x.q(o, e)
					}
				};
				e.startsWith(b.b.RTE_MEDIA);
				await r(Object(d.k)(t, e, async a => {
					T = !0, Object(d.j)(a.id, () => {
						j(!0)
					});
					const {
						error: g,
						metadata: b
					} = await async function(t, e, n, s) {
						const r = n && n.allowedPostTypes,
							c = n && n.name,
							a = await Object(f.g)(e) || e.type,
							l = Object(f.b)(e) || void 0;
						if (!l) return w("UNSUPPORTED_BROWSER");
						const d = {
							localUrl: l,
							mimetype: a
						};
						if (!a || !Object(f.i)(a)) return {
							error: {
								type: i.M
							}
						};
						if (a.startsWith("image/")) {
							if (r && !r.images) {
								const t = o.fbt._("Images are not allowed in r/{subredditName}", [o.fbt._param("subredditName", c)], {
									hk: "3C2E7Q"
								});
								return w(i.M, t)
							}
							if ("image/gif" === a) {
								if (e.size > i.R) return w(i.H)
							} else if (e.size > i.T) return w(i.K);
							const t = await Object(m.a)(l);
							d.width = t.width, d.height = t.height
						} else if (a.startsWith("video/")) {
							if (e.size > i.Y) return w(i.Wb);
							let t;
							try {
								t = await Object(f.h)(l, !0)
							} catch (u) {
								return w(i.M)
							}
							if (r) {
								const {
									videos: e,
									images: n
								} = r;
								if (n && !e && t.duration > i.Z) {
									const t = o.fbt._("Sorry, r/{subredditName} doesn't allow videos. Please upload a video less than 60 seconds to convert to animated GIF.", [o.fbt._param("subredditName", c)], {
										hk: "46ULiz"
									});
									return w(i.M, t)
								}
								if (!n && !e) {
									const t = o.fbt._("Videos are not allowed in r/{subredditName}", [o.fbt._param("subredditName", c)], {
										hk: "4uTUZb"
									});
									return w(i.M, t)
								}
							}
							if (t.duration > i.X) {
								const t = o.fbt._("Video is too long. Maximum video length is 15 minutes.", null, {
									hk: "26m2mj"
								});
								return w(i.M, t)
							}
							d.height = t.height, d.width = t.width, d.videoDuration = t.duration, d.videoFirstFrameUrl = t.firstFrame.dataUrl
						}
						return {
							metadata: d
						}
					}(c(), t, y);
					if (g || !b) return {
						error: g
					};
					r(Object(d.l)({
						key: e,
						metadata: Object.assign({
							fileSource: n
						}, b)
					})), v = !0, s && s();
					const E = t.name,
						S = await (async (t, e, n) => Object(u.b)(Object(p.a)(t, [h.a]), {
							endpoint: "".concat(t.apiUrl, "/api/media/asset.json"),
							method: i.cb.POST,
							data: {
								filepath: e,
								mimetype: n
							}
						}))(l(), E, b.mimetype);
					if (!S.ok) return {
						error: S.error || void 0
					};
					C = S.body.asset.asset_id;
					const x = S.body.asset.websocket_url;
					return {
						uploadLease: S.body.args,
						websocketUrl: x
					}
				}, !0)), j(!1)
			}, I = t => async (e, n, o) => {
				let {
					apiContext: s
				} = o;
				const r = n().uploads[t];
				r && !Object(b.d)(r) && await e(B(r.file, r.key, r.metadata.fileSource))
			}, _ = (t, e, n) => async (s, i) => {
				const a = t.map((t, o) => new Promise(async o => {
						const i = Object(b.e)(b.b.RTE_MEDIA, "".concat(n, "-").concat(r()().slice(-6)));
						await s(B(t, i, e, () => o(i))), o(i)
					})),
					d = await Promise.all(a);
				s(function(t) {
					let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
					return async (n, s) => {
						const {
							uploads: r,
							user: {
								language: i
							}
						} = s(), a = t.map(t => r[t]).filter(t => t.status === b.a.FAILED && !t.metadata.mimetype).map(t => t.error), d = a.length > e ? e - 1 : a.length, u = a.length - d;
						a.slice(0, d).forEach(t => n(Object(l.e)({
							duration: l.a,
							kind: C.b.Error,
							text: Object(c.a)(i, t)
						}))), u > 0 && n(Object(l.e)({
							duration: l.a,
							kind: C.b.Error,
							text: o.fbt._({
								"*": "Couldn't add {number} more files",
								_1: "Couldn't add 1 more file"
							}, [o.fbt._plural(u, "number")], {
								hk: "2fQwvl"
							})
						}))
					}
				}(d))
			}
		},
		"./src/reddit/components/MakeGifToggle/index.m.less": function(t, e, n) {
			t.exports = {
				container: "_1iRy5EPCLqSx8I0k9OT0wW",
				content: "NfjQg3srQXRhyOxLBwXrS",
				toggleSwitch: "_1fUmirx6e9tUDs04TQq6A1",
				mCompactSwitch: "_3Cx_YBpXo1s1iy7oA-4s6R",
				mDisabled: "_1M5N6DrrQQCQJs3JctDSu8",
				hoverTooltip: "_9qS60cx9uxyt1k4eZF_0w",
				tooltipContentClass: "_21DP8j-B-UkVKGJONbrTmX"
			}
		},
		"./src/reddit/components/MakeGifToggle/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				c = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				a = n("./src/reddit/i18n/utils.ts"),
				l = n("./src/reddit/layout/row/Inline/index.tsx"),
				d = n("./src/reddit/components/MakeGifToggle/index.m.less"),
				u = n.n(d);
			e.a = t => s.a.createElement(l.a, {
				className: Object(r.a)(u.a.container, t.disabled ? u.a.mDisabled : null, t.isCompact ? u.a.mCompactSwitch : null),
				onMouseDown: t => t.preventDefault(),
				onClick: e => {
					e.stopPropagation(), !t.disabled && t.onClick()
				}
			}, s.a.createElement(l.a, {
				className: u.a.content
			}, s.a.createElement(c.a, {
				className: u.a.toggleSwitch,
				on: t.on
			}), s.a.createElement("label", null, Object(a.c)("Make GIF"))), t.tooltip ? s.a.createElement(i.a, {
				className: u.a.hoverTooltip,
				tooltipContentClass: u.a.tooltipContentClass,
				text: t.tooltip
			}) : null)
		},
		"./src/reddit/components/PostCreationForm/DivButton/index.m.less": function(t, e, n) {
			t.exports = {
				button: "ypAk-GyDXsczk_xkC7Eq_",
				disabled: "_3hBIa9WhGl-wxARDDgBvSE"
			}
		},
		"./src/reddit/components/PostCreationForm/DivButton/index.tsx": function(t, e, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/constants/keycodes.ts"),
				c = n("./src/reddit/components/PostCreationForm/DivButton/index.m.less"),
				a = n.n(c);

			function l() {
				return (l = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			var d = function(t, e) {
				var n = {};
				for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.indexOf(o) < 0 && (n[o] = t[o]);
				if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (o = Object.getOwnPropertySymbols(t); s < o.length; s++) e.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[s]) && (n[o[s]] = t[o[s]])
				}
				return n
			};
			const u = (t, e, n) => {
					!e && n && n(t)
				},
				p = (t, e, n) => {
					e || (n && n(t), t.defaultPrevented || t.which !== i.a.Enter && t.which !== i.a.Space || t.currentTarget.click())
				};
			e.a = t => {
				var {
					className: e,
					disabled: n,
					onClick: o,
					onKeyPress: i,
					setRef: c,
					tabIndex: h
				} = t, g = d(t, ["className", "disabled", "onClick", "onKeyPress", "setRef", "tabIndex"]);
				return s.a.createElement("div", l({
					"aria-disabled": !!n,
					className: Object(r.a)(e, a.a.button, n ? a.a.disabled : null),
					onClick: t => u(t, n, o),
					onKeyPress: t => p(t, n, i),
					role: "button",
					ref: c,
					tabIndex: h || 0
				}, g))
			}
		},
		"./src/reddit/components/ProgressBar/index.m.less": function(t, e, n) {
			t.exports = {
				innerBar: "Db3WJFTcyAR-IM0cIkpDG",
				outerBar: "i8kQtxHYBB8Sb3bPI4M_e"
			}
		},
		"./src/reddit/components/ProgressBar/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/ProgressBar/index.m.less"),
				c = n.n(i);
			e.a = t => {
				let {
					className: e,
					innerBarClassName: n,
					percent: o
				} = t;
				return s.a.createElement("div", {
					className: Object(r.a)(c.a.outerBar, e)
				}, s.a.createElement("div", {
					className: Object(r.a)(c.a.innerBar, n),
					style: {
						width: "".concat(o.toFixed(2), "%")
					}
				}))
			}
		},
		"./src/reddit/components/RichTextEditor/Blockquote/index.m.less": function(t, e, n) {
			t.exports = {
				BlockQuoteWrapper: "_3bqfSxMWo3yWv7j4N8hQy6",
				blockQuoteWrapper: "_3bqfSxMWo3yWv7j4N8hQy6"
			}
		},
		"./src/reddit/components/RichTextEditor/CodeBlock/index.m.less": function(t, e, n) {
			t.exports = {
				CodeBlockWrapper: "_2YrwxhRxsXvszOhYWDUhMh",
				codeBlockWrapper: "_2YrwxhRxsXvszOhYWDUhMh"
			}
		},
		"./src/reddit/components/RichTextEditor/DragController/helpers.ts": function(t, e, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.regexp.split.js");
			var o = n("./node_modules/lodash/includes.js"),
				s = n.n(o);
			var r = n("./src/reddit/helpers/dom/index.ts"),
				i = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			n.d(e, "b", (function() {
				return h
			})), n.d(e, "c", (function() {
				return g
			})), n.d(e, "a", (function() {
				return m
			}));
			const c = t => t.className.indexOf("public-DraftEditor-content") >= 0,
				a = t => !!t.parentElement && !!t.parentElement.parentElement && c(t.parentElement.parentElement),
				l = t => !(!t.dataset.block || !t.dataset.offsetKey),
				d = t => {
					const {
						offsetKey: e
					} = t.dataset;
					return e ? (t => t.split("-")[0])(e) : ""
				},
				u = (t, e) => {
					return ((t, e) => {
						const n = function(t, e) {
							let n = 0,
								o = t.length - 1;
							for (; n <= o;) {
								const s = o + n >> 1,
									r = e(t[s]);
								if (r > 0) n = s + 1;
								else {
									if (!(r < 0)) return s;
									o = s - 1
								}
							}
							return n
						}(t, t => {
							const n = t.getBoundingClientRect();
							return e < n.top ? -1 : e > n.bottom ? 1 : 0
						});
						return t[Math.min(n, t.length - 1)]
					})(t.querySelectorAll("[data-block][data-offset-key]"), e)
				},
				p = (t, e) => {
					const n = Object(r.b)(t, l, c);
					return n || u(t, e)
				},
				h = (t, e) => {
					const n = (t => {
						const e = t.target;
						if (!(e instanceof HTMLElement)) return;
						const n = Object(r.b)(e, c);
						if (!n) return;
						const o = p(e, t.clientY);
						if (!o) return;
						const s = Object(r.b)(o, a);
						return s ? {
							editorContentElement: n,
							topLevelElement: s,
							blockElement: o
						} : void 0
					})(e);
					if (!n) return;
					const {
						topLevelElement: o,
						blockElement: s
					} = n, l = d(s), u = t.getCurrentContent(), h = u.getBlockForKey(l);
					if (!h) return;
					const {
						upperElement: g,
						lowerElement: m
					} = ((t, e, n, o) => {
						let s = n,
							r = n;
						if (t.getType() === i.b.UNSTYLED) s = r = e;
						else if (Object(i.o)(t.getType())) {
							s = r = e;
							const c = o.getBlockAfter(t.getKey());
							c && Object(i.u)(c.getType()) && (r = n.nextElementSibling)
						} else Object(i.u)(t.getType()) && (s = n.previousElementSibling, r = e);
						return {
							upperElement: s,
							lowerElement: r
						}
					})(h, s, o, u), {
						clientY: f,
						isBefore: b
					} = ((t, e, n) => {
						const o = t.getBoundingClientRect(),
							s = e.getBoundingClientRect();
						let i, a;
						if (n > (o.top + s.bottom) / 2) {
							i = s.bottom, a = !1;
							const t = Object(r.b)(e, t => !!t.nextElementSibling, c);
							if (t) {
								i = (t.nextElementSibling.getBoundingClientRect().top + s.bottom) / 2
							}
						} else {
							i = o.top, a = !0;
							const e = Object(r.b)(t, t => !!t.previousElementSibling, c);
							if (e) {
								i = (e.previousElementSibling.getBoundingClientRect().bottom + o.top) / 2
							}
						}
						return {
							clientY: i,
							isBefore: a
						}
					})(g, m, e.clientY);
					let y = l;
					if (h.getType() !== i.b.UNSTYLED) {
						const t = p(b ? g : m, f);
						t && (y = d(t))
					}
					return {
						clientY: f,
						isBefore: b,
						blockKey: y
					}
				},
				g = t => t.items ? !!Array.from(t.items).find(t => "file" === t.kind) : !(!t.files || !t.files.length) || s()(t.types, "Files"),
				m = t => t.items ? Array.from(t.items).map(t => "file" === t.kind ? t.getAsFile() : null).filter(Boolean) : t.files ? Array.from(t.files) : []
		},
		"./src/reddit/components/RichTextEditor/DragController/index.m.less": function(t, e, n) {
			t.exports = {
				container: "_13Sj3UMDKkCCJTq88berCB",
				hideCaret: "_2BqK1CuzH2oWi2F9_cuFPQ",
				DropLine: "z5iuD3MVYcfS7tTihbvof",
				dropLine: "z5iuD3MVYcfS7tTihbvof",
				Tooltip: "_1z9S1KmnM79xn-UA0FnbP6",
				tooltip: "_1z9S1KmnM79xn-UA0FnbP6"
			}
		},
		"./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less": function(t, e, n) {
			t.exports = {
				tooltip: "ki2VbfBhU-qxg1S6VyET6",
				above: "_8fNGSBGvr1Ds8PbrsUGzN",
				below: "_38gWvHp3NJkR5r5ftUfbFG",
				HoverTooltip: "Nb7NCPTlQuxN_WDPUg5Q2",
				hoverTooltip: "Nb7NCPTlQuxN_WDPUg5Q2"
			}
		},
		"./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx": function(t, e, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less"),
				a = n.n(c);

			function l() {
				return (l = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			var d = function(t, e) {
				var n = {};
				for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.indexOf(o) < 0 && (n[o] = t[o]);
				if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (o = Object.getOwnPropertySymbols(t); s < o.length; s++) e.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[s]) && (n[o[s]] = t[o[s]])
				}
				return n
			};
			e.a = i.a.wrapped(t => {
				const {
					children: e,
					className: n,
					renderBelow: o,
					text: i,
					tooltipContentClass: c
				} = t, u = d(t, ["children", "className", "renderBelow", "text", "tooltipContentClass"]);
				return s.a.createElement("div", l({}, u, {
					className: Object(r.a)(a.a.container, n)
				}), i ? s.a.createElement("div", {
					className: Object(r.a)(a.a.tooltip, c, o ? a.a.below : a.a.above)
				}, i) : null, e)
			}, "HoverTooltip", a.a)
		},
		"./src/reddit/components/RichTextEditor/LinksController/LinkDetailsPopup/index.m.less": function(t, e, n) {
			t.exports = {
				LinkDetailsBox: "_2F28OVOVlGo6WCT2l8lHzO",
				linkDetailsBox: "_2F28OVOVlGo6WCT2l8lHzO",
				Link: "_3vJCj_aXdDc-UXA9fDK-z-",
				link: "_3vJCj_aXdDc-UXA9fDK-z-",
				LinkButton: "_1NtBcR7JgjxkWLJrk3ddD3",
				linkButton: "_1NtBcR7JgjxkWLJrk3ddD3"
			}
		},
		"./src/reddit/components/RichTextEditor/LinksController/LinkEditorPopup/index.m.less": function(t, e, n) {
			t.exports = {
				EditForm: "_1iFkUjPC4J8jzWrDthDpcv",
				editForm: "_1iFkUjPC4J8jzWrDthDpcv",
				LinkEditorBox: "_3HMg7pEvqliZhuStFZ241S",
				linkEditorBox: "_3HMg7pEvqliZhuStFZ241S",
				Input: "_2rXi0UvEKRcI3WdI52LAx1",
				input: "_2rXi0UvEKRcI3WdI52LAx1",
				Label: "_2olni9Ucr8-t8W62nTkY_",
				label: "_2olni9Ucr8-t8W62nTkY_",
				HintAndButtonRow: "_2qiAR3ZyDGPSr9zmqhP_5Z",
				hintAndButtonRow: "_2qiAR3ZyDGPSr9zmqhP_5Z",
				InvalidUrlHint: "pKrgYGkHvjHPFkWO-Gnko",
				invalidUrlHint: "pKrgYGkHvjHPFkWO-Gnko",
				SubmitButton: "_8a_rf-Al8VNnUQ42WlvF",
				submitButton: "_8a_rf-Al8VNnUQ42WlvF"
			}
		},
		"./src/reddit/components/RichTextEditor/OrderedList/index.m.less": function(t, e, n) {
			t.exports = {
				OrderedListWrapper: "_1QXegNe8bOemD558m-vc9t",
				orderedListWrapper: "_1QXegNe8bOemD558m-vc9t"
			}
		},
		"./src/reddit/components/RichTextEditor/Paragraph/index.m.less": function(t, e, n) {
			t.exports = {
				ParagraphWrapper: "_3LuG0YVLLHE2azRNVaKz7O",
				paragraphWrapper: "_3LuG0YVLLHE2azRNVaKz7O"
			}
		},
		"./src/reddit/components/RichTextEditor/TextRendering/index.m.less": function(t, e, n) {
			t.exports = {
				H1: "_15ThA3NFuzpQTnPu0I3QKj",
				h1: "_15ThA3NFuzpQTnPu0I3QKj",
				H2: "_3R5icAd6cRzwpq-yhvQUoW",
				h2: "_3R5icAd6cRzwpq-yhvQUoW",
				H3: "_3UxnA7bFPnKoS0rKMO1UYe",
				h3: "_3UxnA7bFPnKoS0rKMO1UYe",
				H4: "_10CFPbxVR0HQhyRBkeExmO",
				h4: "_10CFPbxVR0HQhyRBkeExmO",
				H5: "_3bidJE2WceaRjyBA8LLfp3",
				h5: "_3bidJE2WceaRjyBA8LLfp3",
				H6: "_27N6aQ0-d-ntRM1JkDwGg7",
				h6: "_27N6aQ0-d-ntRM1JkDwGg7"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.m.less": function(t, e, n) {
			t.exports = {
				FormatterButton: "alPx0QCb4Fws5307SrGWu",
				formatterButton: "alPx0QCb4Fws5307SrGWu",
				enabled: "_1H0LLEwUP5ys6cgxr9KhMa",
				active: "_32EiQr-Px2GJvCfigwwmuK"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				a = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.m.less"),
				l = n.n(a);
			const d = t => {
				t.preventDefault(), t.stopPropagation()
			};
			e.a = i.a.wrapped(t => {
				const {
					active: e,
					className: n,
					disabledTooltip: o,
					enabled: i = !0,
					tooltip: a,
					Icon: u,
					onClick: p,
					tooltipBelow: h,
					children: g
				} = t;
				return s.a.createElement("div", {
					"aria-label": a,
					"aria-selected": e,
					className: Object(r.a)(l.a.button, n, {
						[l.a.active]: !!e,
						[l.a.enabled]: i
					}),
					onMouseDown: d,
					onClick: function(t) {
						d(t), i && p && p(t)
					},
					role: "button",
					tabIndex: -1
				}, s.a.createElement(c.a, {
					text: (i ? a : o) || "",
					tooltipContentClass: t.tooltipContentClass,
					renderBelow: h
				}), u ? s.a.createElement(u, null) : null, g)
			}, "FormatterButton", l.a)
		},
		"./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.m.less": function(t, e, n) {
			t.exports = {
				LoadingIcon: "jOFrSZE7wRk_lVAP2pBvY",
				loadingIcon: "jOFrSZE7wRk_lVAP2pBvY",
				Text: "EVdFfF5K7kZFMaYpSHbLe",
				text: "EVdFfF5K7kZFMaYpSHbLe",
				Button: "_1Mg8ZhclDuQlkzEqVU21qu",
				button: "_1Mg8ZhclDuQlkzEqVU21qu"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/app/strings/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/PostCreationForm/DivButton/index.tsx"),
				d = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = n("./src/reddit/selectors/editorContent.ts"),
				p = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				h = n("./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.m.less"),
				g = n.n(h);
			const m = Object(c.d)("postCreation.toolbar.markdownMode"),
				f = Object(c.d)("postCreation.toolbar.switchToMarkdown"),
				b = a.a.wrapped(d.a, "LoadingIcon", g.a),
				y = a.a.span("Text", g.a),
				E = a.a.wrapped(l.a, "Button", g.a),
				S = Object(i.c)({
					isConverting: (t, e) => Object(u.a)(t, e.draftKey)
				}),
				x = Object(r.b)(S);
			e.a = x(t => {
				const e = m(t.language);
				return s.a.createElement(E, {
					"aria-label": e,
					tabIndex: -1,
					className: t.className,
					onClick: t.onClick
				}, t.isConverting && s.a.createElement(b, {
					sizePx: 12
				}), !t.shouldHideTooltip && s.a.createElement(p.a, {
					text: e
				}), s.a.createElement(y, null, f(t.language)))
			})
		},
		"./src/reddit/components/RichTextEditor/Toolbar/MediaInputButton/index.m.less": function(t, e, n) {
			t.exports = {
				ImageIcon: "_1jv-IJjyjDSSVuYe6CzeHv",
				imageIcon: "_1jv-IJjyjDSSVuYe6CzeHv",
				VideoIcon: "uo_2BSPFse-IQNQbclyKb",
				videoIcon: "uo_2BSPFse-IQNQbclyKb",
				HiddenInput: "_2keaDnXIlu9Yq2y-cC8zgu",
				hiddenInput: "_2keaDnXIlu9Yq2y-cC8zgu"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.m.less": function(t, e, n) {
			t.exports = {
				Icon: "_3UAl61hrkRAXX5JQ6m_q8R",
				icon: "_3UAl61hrkRAXX5JQ6m_q8R"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/app/strings/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				a = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/icons/svgs/FormattingBlockQuotes/index.m.less"),
				d = n.n(l);
			var u = t => s.a.createElement("svg", {
					className: Object(a.a)(d.a.icon, t.className),
					style: t.style,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("polygon", {
					points: "8.63 4 5.36 4 2 9.8 2 16 9.2 16 9.2 9.24 6.75 9.24 8.63 4"
				}), s.a.createElement("polygon", {
					points: "15.56 9.24 17.39 4 14.16 4 10.8 9.8 10.8 16 18 16 18 9.24 15.56 9.24"
				})),
				p = n("./src/reddit/icons/svgs/FormattingBold/index.tsx"),
				h = n("./src/reddit/icons/svgs/FormattingCodeBlock/index.m.less"),
				g = n.n(h);
			var m = t => s.a.createElement("svg", {
					className: Object(a.a)(g.a.icon, t.className),
					style: t.style,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("path", {
					d: "M15,2H13a1,1,0,0,0,0,2h2a1,1,0,0,1,1,1V15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V13a1,1,0,0,0-2,0v2a3,3,0,0,0,3,3H15a3,3,0,0,0,3-3V5A3,3,0,0,0,15,2Z"
				}), s.a.createElement("path", {
					d: "M2.79,5a.71.71,0,0,0,.53-.2.74.74,0,0,0,.19-.54V4.08l0-.48H5.07V8.4H4.9a1,1,0,0,0-.69.18A.79.79,0,0,0,4,9.2a.79.79,0,0,0,.21.61A1,1,0,0,0,4.9,10H7.1a1,1,0,0,0,.69-.19A.79.79,0,0,0,8,9.2a.78.78,0,0,0-.21-.61A1,1,0,0,0,7.1,8.4H6.93V3.6H8.44l0,.48a1.19,1.19,0,0,0,.18.72.7.7,0,0,0,.56.2.75.75,0,0,0,.59-.2A1,1,0,0,0,10,4.14V4.08L9.93,2.9q0-.64-.18-.77A1.06,1.06,0,0,0,9.11,2H2.89a1.06,1.06,0,0,0-.63.13q-.16.13-.18.77L2,4.08v.06a.94.94,0,0,0,.19.65A.78.78,0,0,0,2.79,5Z"
				})),
				f = n("./src/reddit/icons/svgs/FormattingHeading/index.m.less"),
				b = n.n(f);
			var y = t => s.a.createElement("svg", {
					className: Object(a.a)(b.a.icon, t.className),
					style: t.style,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("polygon", {
					points: "6.57 3 6.57 5.57 10.73 5.57 10.73 17 13.82 17 13.82 5.57 18 5.57 18 3 6.57 3"
				}), s.a.createElement("polygon", {
					points: "2 9.65 4.68 9.65 4.68 17 6.66 17 6.66 9.65 9.35 9.65 9.35 8 2 8 2 9.65"
				})),
				E = n("./src/reddit/icons/svgs/FormattingItalics/index.tsx"),
				S = n("./src/reddit/icons/svgs/FormattingMonospace/index.tsx"),
				x = n("./src/reddit/icons/svgs/FormattingOrderedList/index.tsx"),
				C = n("./src/reddit/icons/svgs/FormattingSpoiler/index.tsx"),
				O = n("./src/reddit/icons/svgs/FormattingStrikethrough/index.tsx"),
				T = n("./src/reddit/icons/svgs/FormattingSuperscript/index.tsx"),
				v = n("./src/reddit/icons/svgs/FormattingUnorderedList/index.tsx"),
				k = n("./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.m.less"),
				j = n.n(k);

			function R() {
				return (R = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			n.d(e, "f", (function() {
				return B
			})), n.d(e, "b", (function() {
				return H
			})), n.d(e, "e", (function() {
				return z
			})), n.d(e, "j", (function() {
				return W
			})), n.d(e, "g", (function() {
				return V
			})), n.d(e, "i", (function() {
				return q
			})), n.d(e, "k", (function() {
				return G
			})), n.d(e, "d", (function() {
				return Q
			})), n.d(e, "l", (function() {
				return Y
			})), n.d(e, "h", (function() {
				return Z
			})), n.d(e, "a", (function() {
				return J
			})), n.d(e, "c", (function() {
				return X
			}));
			const w = t => i.a.wrapped(t, "Icon", j.a),
				B = function(t) {
					let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
					return n => {
						const o = w(t);
						return s.a.createElement(o, R({}, n, {
							style: {
								padding: e
							}
						}))
					}
				},
				I = B(u),
				_ = B(p.a),
				A = B(m),
				K = B(y),
				M = B(E.a),
				L = B(S.a),
				D = B(x.a),
				F = B(C.a, 1),
				N = B(O.a),
				P = B(T.a),
				U = B(v.a),
				H = {
					type: "style",
					name: "bold",
					Icon: _,
					style: c.k.BOLD,
					tooltipTranslation: Object(r.d)("postCreation.toolbar.bold")
				},
				z = {
					type: "style",
					name: "italics",
					Icon: M,
					style: c.k.ITALIC,
					tooltipTranslation: Object(r.d)("postCreation.toolbar.italics")
				},
				W = {
					type: "style",
					name: "strikethrough",
					Icon: N,
					style: c.k.STRIKETHROUGH,
					tooltipTranslation: Object(r.d)("postCreation.toolbar.strikethrough")
				},
				V = {
					type: "style",
					name: "inline_code",
					Icon: L,
					style: c.k.MONOSPACE,
					tooltipTranslation: Object(r.d)("postCreation.toolbar.monospace")
				},
				q = {
					type: "style",
					name: "spoiler",
					Icon: F,
					style: c.k.SPOILER,
					tooltipTranslation: Object(r.d)("postCreation.toolbar.spoiler")
				},
				G = {
					type: "style",
					name: "superscript",
					Icon: P,
					style: c.k.SUPERSCRIPT,
					tooltipTranslation: Object(r.d)("postCreation.toolbar.superscript")
				},
				Q = {
					type: "block",
					name: "heading",
					Icon: K,
					block: c.b.H1,
					tooltipTranslation: Object(r.d)("postCreation.toolbar.heading")
				},
				Y = {
					type: "block",
					name: "unordered_list",
					Icon: U,
					block: c.i.UNORDERED,
					tooltipTranslation: Object(r.d)("postCreation.toolbar.unorderedList")
				},
				Z = {
					type: "block",
					name: "ordered_list",
					Icon: D,
					block: c.i.ORDERED,
					tooltipTranslation: Object(r.d)("postCreation.toolbar.orderedList")
				},
				J = {
					type: "block",
					name: "block_quote",
					Icon: I,
					block: c.e,
					tooltipTranslation: Object(r.d)("postCreation.toolbar.blockQuote")
				},
				X = {
					type: "block",
					name: "code_block",
					Icon: A,
					block: c.f,
					tooltipTranslation: Object(r.d)("postCreation.toolbar.codeBlock")
				}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/index.m.less": function(t, e, n) {
			t.exports = {
				toolbarContent: "_2vR2-7URvDAFSwQjhcvJ7m",
				isSticky: "r7zyyy152ZTdiHhea0cIj",
				tooltip: "dMXy0l6Saub8-fPDkQvGC",
				SectionSpacer: "_2voJAi1L0g2QbtAFDHSOCK",
				sectionSpacer: "_2voJAi1L0g2QbtAFDHSOCK",
				Spacer: "uoedn0efWwCxoQUIxsJY3",
				spacer: "uoedn0efWwCxoQUIxsJY3"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/app/strings/index.ts"),
				c = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/icons/svgs/FormattingHyperlink/index.tsx"),
				d = n("./src/reddit/icons/svgs/FormattingTable/index.tsx"),
				u = n("./src/reddit/components/RichTextEditor/editorStateTransforms.ts"),
				p = n("./src/reddit/components/RichTextEditor/helpers/controlsState.ts"),
				h = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				g = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				m = n("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				f = n("./src/reddit/components/RichTextEditor/table/helpers.ts");
			var b = (t, e, n) => {
					if (Object(h.v)(o.RichUtils.getCurrentBlockType(t))) return t;
					const s = t.getCurrentContent(),
						r = t.getSelection().getEndKey(),
						i = Object(f.l)(e, n),
						c = Object(m.f)(s, r, i, m.a.after, !0),
						a = o.EditorState.push(t, c, g.e);
					return o.EditorState.forceSelection(a, o.SelectionState.createEmpty(i[0].getKey()))
				},
				y = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx"),
				E = n("./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.tsx"),
				S = n("./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.tsx"),
				x = n("./src/lib/constants/index.ts"),
				C = n("./src/reddit/icons/svgs/ImagePost/index.tsx"),
				O = n("./src/reddit/icons/svgs/Video/index.tsx"),
				T = n("./src/reddit/components/RichTextEditor/Toolbar/MediaInputButton/index.m.less"),
				v = n.n(T);
			const k = Object(i.d)("postCreation.toolbar.image"),
				j = Object(i.d)("postCreation.toolbar.video"),
				R = a.a.wrapped(C.a, "ImageIcon", v.a),
				w = a.a.wrapped(O.a, "VideoIcon", v.a),
				B = a.a.input("HiddenInput", v.a);
			class I extends s.Component {
				constructor() {
					super(...arguments), this.hiddenInputEl = null, this.onFileInputChange = t => {
						t.stopPropagation();
						const e = this.hiddenInputEl;
						e.files && e.files.length && (this.props.onFilesInput(Array.from(e.files)), e.value = "")
					}, this.onButtonClick = () => {
						this.hiddenInputEl && this.hiddenInputEl.click(), this.props.onClick()
					}, this.onHiddenInputClick = t => t.stopPropagation()
				}
				render() {
					const {
						controlsState: t,
						destSubreddit: e,
						language: n,
						type: o
					} = this.props, s = "image" === o, i = t.blocks[h.a];
					let c = !0;
					if (e && e.allowedPostTypes) {
						const {
							images: t,
							videos: n
						} = e.allowedPostTypes;
						c = s ? t : n
					}
					return r.a.createElement(y.a, {
						Icon: s ? R : w,
						active: i.isActive,
						enabled: i.isEnabled && c,
						tooltip: (s ? k : j)(n),
						onClick: this.onButtonClick
					}, r.a.createElement(B, {
						multiple: !0,
						innerRef: t => this.hiddenInputEl = t,
						onChange: this.onFileInputChange,
						onClick: this.onHiddenInputClick,
						type: "file",
						accept: Array.from(s ? x.a : x.b).join()
					}))
				}
			}
			var _ = n("./src/reddit/components/RichTextEditor/Toolbar/index.m.less"),
				A = n.n(_);

			function K() {
				return (K = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			n.d(e, "c", (function() {
				return P
			})), n.d(e, "g", (function() {
				return z
			})), n.d(e, "f", (function() {
				return W
			})), n.d(e, "h", (function() {
				return V
			})), n.d(e, "e", (function() {
				return q
			})), n.d(e, "a", (function() {
				return G
			})), n.d(e, "d", (function() {
				return Q
			})), n.d(e, "b", (function() {
				return Y
			}));
			const M = Object(i.d)("postCreation.toolbar.table"),
				L = Object(i.d)("postCreation.toolbar.link"),
				D = Object(E.f)(l.a),
				F = Object(E.f)(d.a),
				N = t => r.a.createElement(y.a, K({}, t, {
					tooltipContentClass: A.a.tooltip
				})),
				P = a.a.div("SectionSpacer", A.a),
				U = a.a.div("Spacer", A.a),
				H = (t, e, n, s, i, c) => {
					const {
						name: a,
						Icon: l,
						tooltipTranslation: d
					} = t, p = d(c);
					if ("style" === t.type) {
						const {
							style: o
						} = t;
						return r.a.createElement(N, {
							Icon: l,
							active: e.styles[o].isActive,
							enabled: e.styles[o].isEnabled,
							key: a,
							tooltip: p,
							onClick: () => {
								const t = Object(u.c)(o, n);
								s(t), i(a, ((t, e) => t.getCurrentInlineStyle().contains(e))(t, o))
							}
						})
					} {
						const {
							block: c
						} = t;
						return r.a.createElement(N, {
							Icon: l,
							active: e.blocks[c].isActive,
							enabled: e.blocks[c].isEnabled,
							key: a,
							tooltip: p,
							onClick: () => {
								const t = Object(u.i)(c, n);
								s(t), i(a, ((t, e) => o.RichUtils.getCurrentBlockType(t) === e)(t, c))
							}
						})
					}
				},
				z = (t, e, n, o, s, r) => t.map(t => H(t, e, n, o, s, r)),
				W = [E.b, E.e],
				V = [E.j, E.g, E.k, E.i],
				q = [E.d, E.l, E.h, E.a, E.c],
				G = t => r.a.createElement(N, {
					Icon: D,
					active: t.controlsState.link.isActive,
					enabled: t.controlsState.link.isEnabled,
					tooltip: L(t.language),
					onClick: () => {
						t.onLinkButtonClick(), t.trackOnClick("link", !0)
					}
				}),
				Q = t => r.a.createElement(N, {
					Icon: F,
					active: t.controlsState.blocks[h.l].isActive,
					enabled: t.controlsState.blocks[h.l].isEnabled,
					tooltip: M(t.language),
					onClick: () => {
						t.onChange(b(t.editorState, 3, 2)), t.trackOnClick("table", !0)
					}
				}),
				Y = t => {
					const {
						className: e,
						allowMediaUploads: n = !1,
						destSubreddit: o,
						editorState: s,
						isOverlay: i,
						language: a,
						onChange: l,
						onFilesSelect: d,
						readOnly: u,
						trackOnClick: h,
						onLinkButtonClick: g,
						onMarkdownButtonClick: m
					} = t, f = Object(p.a)(s);
					return u && Object(p.b)(f), r.a.createElement("div", {
						className: Object(c.a)(A.a.toolbarContent, e, {
							[A.a.isSticky]: !i
						})
					}, z(W, f, s, l, h, a), r.a.createElement(G, {
						language: a,
						controlsState: f,
						trackOnClick: h,
						onLinkButtonClick: g
					}), z(V, f, s, l, h, a), r.a.createElement(P, null), z(q, f, s, l, h, a), r.a.createElement(P, null), r.a.createElement(Q, {
						language: a,
						controlsState: f,
						editorState: s,
						trackOnClick: h,
						onChange: l
					}), n && r.a.createElement(I, {
						destSubreddit: o,
						language: a,
						controlsState: f,
						onClick: () => h("image_upload"),
						onFilesInput: d,
						type: "image"
					}), n && r.a.createElement(I, {
						destSubreddit: o,
						language: a,
						controlsState: f,
						onClick: () => h("video_upload"),
						onFilesInput: d,
						type: "video"
					}), r.a.createElement(U, null), r.a.createElement(S.a, {
						language: a,
						onClick: m
					}))
				}
		},
		"./src/reddit/components/RichTextEditor/Tooltip/getSelectionClientRect.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return s
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js");

			function s() {
				const t = window.getSelection();
				if (!t.rangeCount) return null;
				const e = Object(o.getVisibleSelectionRect)(window);
				return e || (!e && t.focusNode && t.focusNode === t.anchorNode ? t.focusNode.getBoundingClientRect() : null)
			}
		},
		"./src/reddit/components/RichTextEditor/Tooltip/index.m.less": function(t, e, n) {
			t.exports = {
				tooltipBox: "tVQ1dB4n0mAWdcQNxFq-K",
				dropdown: "_1akkpO3lymdoWGIc5tjIpm",
				triangle: "_2O2U-Vhc1mg9O7DOwp50Aa",
				triangleBack: "_3IfYYXUMUzn2OvoiMUNcaQ",
				triangleFront: "_3CtwSTtkmKXvzDo3TmCp9C",
				triangleBelow: "_1churYJpAwcb-tf0k1c46F"
			}
		},
		"./src/reddit/components/RichTextEditor/Tooltip/index.tsx": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return h
			})), n.d(e, "b", (function() {
				return m
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/index.tsx"),
				c = n("./src/reddit/helpers/dom/index.ts"),
				a = n("./src/reddit/components/RichTextEditor/Tooltip/index.m.less"),
				l = n.n(a);
			const d = 8,
				u = 16,
				p = 15 + u / 2;
			var h;
			! function(t) {
				t[t.None = 0] = "None", t[t.Above = 1] = "Above", t[t.Below = 2] = "Below"
			}(h || (h = {}));
			const g = t => {
				let {
					isBelow: e = !1,
					style: n
				} = t;
				return s.a.createElement("div", {
					className: Object(r.a)(l.a.triangle, {
						[l.a.triangleBelow]: e
					}),
					style: n
				}, s.a.createElement("div", {
					className: l.a.triangleBack
				}), s.a.createElement("div", {
					className: l.a.triangleFront
				}))
			};
			class m extends o.Component {
				constructor(t) {
					super(t), this.containerRef = null, this.updateContainerRef = t => this.containerRef = t, this.setTargetPosition = t => {
						t ? this.updatePositioning(t) : this.setState({
							positioning: null
						})
					}, this.state = {
						positioning: null
					}
				}
				updatePositioning(t) {
					if (!this.containerRef) return;
					const e = this.containerRef.offsetWidth,
						n = this.containerRef.offsetHeight,
						o = this.state.positioning;
					if (!t) {
						if (!o) return;
						if (o.tooltipWidth === e && o.tooltipHeight === n) return
					}
					const s = t ? t.bottom : o.target.bottom,
						r = t ? t.top : o.target.top,
						i = t ? t.left : o.target.left,
						a = Object(c.e)(this.containerRef);
					let l, d, u;
					if (a) {
						const t = a.getBoundingClientRect();
						l = t.bottom - (s || 0), d = i - t.left + a.scrollLeft, u = r - t.top + a.scrollTop
					} else {
						const t = document.documentElement,
							e = window.pageYOffset || t.scrollTop;
						d = i + (window.pageXOffset || t.scrollLeft), u = r + e
					}
					const p = {
						target: {
							top: r,
							left: i
						},
						tooltipWidth: e,
						tooltipHeight: n,
						tooltip: {
							top: u,
							left: d,
							bottom: l
						}
					};
					this.adjustPositionForTriangle(p, a), this.setState({
						positioning: p
					})
				}
				adjustPositionForTriangle(t, e) {
					const {
						trianglePlacement: n
					} = this.props;
					if (!n) return;
					const o = e ? e.offsetWidth : document.documentElement.offsetWidth,
						s = o ? Math.max(t.tooltip.left + t.tooltipWidth - o, 0) : 0;
					t.tooltip.left -= s + p;
					const r = s + p - u / 2;
					let i;
					n === h.Above ? (t.tooltip.top += d, i = -d) : (t.tooltip.top -= t.tooltipHeight + d, i = t.tooltipHeight), t.triangle = {
						top: i,
						left: r
					}
				}
				componentDidUpdate(t, e) {
					t.targetPosition !== this.props.targetPosition ? this.setTargetPosition(this.props.targetPosition || null) : this.updatePositioning()
				}
				componentDidMount() {
					this.setTargetPosition(this.props.targetPosition || null), this.props.onSetPositionUpdater && this.props.onSetPositionUpdater(this.setTargetPosition)
				}
				componentWillUnmount() {
					this.props.onSetPositionUpdater && this.props.onSetPositionUpdater(null)
				}
				render() {
					const {
						aboveParent: t,
						dropdown: e,
						trianglePlacement: n
					} = this.props, {
						positioning: o
					} = this.state, c = o && void 0 !== o.triangle && s.a.createElement(g, {
						isBelow: n === h.Below,
						style: {
							top: o.triangle.top + "px",
							left: o.triangle.left + "px"
						}
					});
					let a = s.a.createElement("div", {
						className: Object(r.a)(l.a.tooltipBox, this.props.className, {
							[l.a.dropdown]: e
						}),
						style: o ? Object.assign({
							left: o.tooltip.left
						}, t ? {
							bottom: o.tooltip.bottom
						} : {
							top: o.tooltip.top
						}) : {},
						ref: this.updateContainerRef
					}, o && this.props.children && s.a.createElement(s.a.Fragment, null, c, this.props.children));
					return this.props.usePortal && (a = Object(i.d)(a, this.props.portalContainer || document.body)), a
				}
			}
		},
		"./src/reddit/components/RichTextEditor/UnorderedList/index.m.less": function(t, e, n) {
			t.exports = {
				UnorderedListWrapper: "vXDC2CysyRNVq3lFirKDs",
				unorderedListWrapper: "vXDC2CysyRNVq3lFirKDs"
			}
		},
		"./src/reddit/components/RichTextEditor/constants/draftEditorCommands.ts": function(t, e, n) {
			"use strict";
			n.d(e, "c", (function() {
				return o
			})), n.d(e, "e", (function() {
				return s
			})), n.d(e, "g", (function() {
				return r
			})), n.d(e, "h", (function() {
				return i
			})), n.d(e, "b", (function() {
				return c
			})), n.d(e, "d", (function() {
				return a
			})), n.d(e, "f", (function() {
				return l
			})), n.d(e, "a", (function() {
				return d
			}));
			const o = "bold",
				s = "italic",
				r = "underline",
				i = "undo",
				c = "backspace",
				a = "delete",
				l = "split-block",
				d = "adjust-depth"
		},
		"./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return o
			})), n.d(e, "e", (function() {
				return s
			})), n.d(e, "d", (function() {
				return r
			})), n.d(e, "b", (function() {
				return i
			})), n.d(e, "c", (function() {
				return c
			})), n.d(e, "f", (function() {
				return a
			}));
			const o = "backspace-character",
				s = "insert-fragment",
				r = "insert-characters",
				i = "change-block-data",
				c = "change-block-type",
				a = "remove-range"
		},
		"./src/reddit/components/RichTextEditor/editorStateTransforms.ts": function(t, e, n) {
			"use strict";
			n.d(e, "c", (function() {
				return u
			})), n.d(e, "i", (function() {
				return p
			})), n.d(e, "b", (function() {
				return m
			})), n.d(e, "f", (function() {
				return f
			})), n.d(e, "h", (function() {
				return b
			})), n.d(e, "g", (function() {
				return y
			})), n.d(e, "d", (function() {
				return E
			})), n.d(e, "e", (function() {
				return S
			})), n.d(e, "a", (function() {
				return x
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./node_modules/immutable/dist/immutable.js"),
				r = n("./src/reddit/components/RichTextEditor/constants/draftEditorCommands.ts"),
				i = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				c = n("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				a = n("./src/reddit/components/RichTextEditor/helpers/modifiers.ts"),
				l = n("./src/reddit/components/RichTextEditor/helpers/styles.ts"),
				d = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const u = (t, e) => {
					return e.getSelection().isCollapsed() ? Object(l.a)(t, e) : Object(l.b)(t, e)
				},
				p = (t, e) => {
					const n = e.getCurrentContent(),
						s = e.getSelection(),
						r = s.getEndKey(),
						a = o.RichUtils.getCurrentBlockType(e) === t ? d.n : t;
					let u = e,
						p = o.Modifier.setBlockType(n, s, a);
					const h = n.getBlockForKey(r).getLength();
					if (Object(d.r)(a) || Object(d.q)(a)) {
						const t = o.SelectionState.createEmpty(s.getStartKey()).merge({
							focusKey: s.getEndKey(),
							focusOffset: h
						});
						u = Object(l.c)(u), p = ((t, e) => {
							const n = Object.keys(d.k).reduce((t, n) => o.Modifier.removeInlineStyle(t, e, d.k[n]), t);
							return Object(c.h)(n, e)
						})(p, t)
					}
					if (Object(d.q)(a) || Object(d.p)(a)) {
						const t = p.getBlockAfter(r);
						if (!t || t.getType() !== a && t.getType() !== d.n) {
							const t = o.SelectionState.createEmpty(r).merge({
								anchorOffset: h,
								focusOffset: h
							});
							p = o.Modifier.splitBlock(p, t), p = o.Modifier.setBlockType(p, p.getSelectionAfter(), d.n)
						}
					}
					return p = p.merge({
						selectionAfter: s
					}), o.EditorState.push(u, p, i.c)
				},
				h = (t, e) => {
					const n = o.Modifier.setBlockType(t, e, d.n);
					return o.Modifier.replaceText(n, e, "", Object(s.OrderedSet)([]))
				},
				g = (t, e) => o.EditorState.forceSelection(t, o.SelectionState.createEmpty(e)),
				m = t => {
					const e = t.getCurrentContent(),
						n = t.getSelection(),
						r = a.d(e, n),
						c = r.getBlockAfter(n.getEndKey()),
						l = o.SelectionState.createEmpty(c.getKey()),
						u = o.Modifier.replaceText(o.Modifier.setBlockType(r, l, d.n), l, "", Object(s.OrderedSet)([])),
						p = o.EditorState.push(t, u, i.d);
					return g(p, c.getKey())
				},
				f = t => {
					const e = t.getCurrentContent(),
						n = t.getSelection(),
						s = e.getBlockForKey(n.getEndKey()),
						i = s.set("depth", Math.max(s.getDepth() - 1, 0)),
						c = e.merge({
							blockMap: e.getBlockMap().merge({
								[s.getKey()]: i
							})
						});
					return o.EditorState.push(t, c, r.a)
				},
				b = t => {
					const e = t.getCurrentContent(),
						n = t.getSelection(),
						s = e.getBlockForKey(n.getEndKey()).getKey(),
						r = o.EditorState.push(t, h(e, n), i.c);
					return g(r, s)
				},
				y = t => {
					const e = t.getCurrentContent(),
						n = t.getSelection(),
						s = e.getBlockForKey(n.getEndKey()),
						r = s.getKey(),
						c = e.getBlockBefore(r).getKey(),
						a = o.SelectionState.createEmpty(r).merge({
							focusOffset: s.getText().length
						}),
						l = o.EditorState.push(t, h(((t, e) => {
							const n = t.getBlockMap().remove(e);
							return t.merge({
								blockMap: n
							})
						})(e, c), a), i.c);
					return g(l, r)
				},
				E = t => {
					const e = a.d(t.getCurrentContent(), t.getSelection());
					return o.EditorState.push(t, e, r.f)
				},
				S = t => {
					const e = a.a(t.getCurrentContent(), t.getSelection(), "\n");
					return o.EditorState.push(t, e, i.d)
				},
				x = t => {
					const e = t.getSelection(),
						n = a.a(t.getCurrentContent(), e, " ");
					return o.EditorState.push(t, n, i.d)
				}
		},
		"./src/reddit/components/RichTextEditor/emotes/decorator.m.less": function(t, e, n) {
			t.exports = {
				emote: "Q7hqnjoPSXm7QyvW8qf57",
				sticker: "_1WD0TSe2_gY29FXmFjPCza"
			}
		},
		"./src/reddit/components/RichTextEditor/emotes/helpers.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return p
			})), n.d(e, "c", (function() {
				return h
			})), n.d(e, "g", (function() {
				return g
			})), n.d(e, "b", (function() {
				return m
			})), n.d(e, "h", (function() {
				return f
			})), n.d(e, "f", (function() {
				return b
			})), n.d(e, "e", (function() {
				return y
			})), n.d(e, "i", (function() {
				return E
			})), n.d(e, "d", (function() {
				return S
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./node_modules/immutable/dist/immutable.js"),
				r = n("./src/lib/memoizeByReference/index.ts"),
				i = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				c = n("./src/reddit/components/RichTextEditor/entity/entityTypes.ts"),
				a = n("./src/reddit/components/RichTextEditor/entity/getAllEntitiesInSelection.ts"),
				l = n("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				d = n("./src/reddit/components/RichTextEditor/helpers/modifiers.ts"),
				u = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const p = "⬛";

			function h(t, e) {
				return t.createEntity(c.a.EMOTE, "IMMUTABLE", e)
			}

			function g(t, e) {
				let n = e.getCurrentContent();
				const s = (n = h(n, t)).getLastCreatedEntityKey();
				n = Object(d.b)(n, e.getSelection(), p, void 0, s);
				const r = o.EditorState.push(e, n, i.d);
				return o.EditorState.forceSelection(r, r.getSelection())
			}

			function m(t, e) {
				if (e.getStartKey() !== e.getEndKey()) return !1;
				const n = t.getBlockForKey(e.getEndKey()).getType();
				return !(Object(u.q)(n) || Object(u.r)(n) || Object(u.t)(n))
			}

			function f(t, e) {
				const n = Object(a.a)(t, e, e => {
					const n = e.getEntity();
					return !!n && t.getEntity(n).getType() === c.a.EMOTE
				});
				let s;
				for (; s = n.pop();) {
					const e = o.SelectionState.createEmpty(s.blockKey).merge({
						anchorOffset: s.start,
						focusOffset: s.end
					});
					t = o.Modifier.removeRange(t, e, "backward")
				}
				return t
			}

			function b(t) {
				const e = t.getSelection();
				if (!e.isCollapsed()) return null;
				const n = t.getCurrentContent().getBlockForKey(e.getFocusKey()),
					o = n.getText(),
					s = n.getCharacterList();
				let r = e.getFocusOffset() - 1;
				const i = [];
				for (; r >= 0;) {
					const t = o[r],
						e = s.get(r),
						n = e && e.getEntity();
					if (!t.trim().length || n) return null;
					if (":" === t && i.length > 0) break;
					i.unshift(t), r--
				}
				return r >= 0 && i.length ? i.join("").toLowerCase() : null
			}

			function y(t, e, n) {
				t.findEntityRanges(t => {
					const e = t.getEntity();
					return !!e && n.getEntity(e).getType() === c.a.EMOTE
				}, e)
			}
			const E = Object(r.a)(t => {
				if (t.getBlockMap().size > 1) return !1;
				const e = t.getFirstBlock();
				let n = 0;
				return y(e, () => n++, t), n <= 3 && n === e.getLength()
			});

			function S(t, e) {
				if (E(t.getCurrentContent()) === E(e.getCurrentContent())) return t;
				const n = t.getCurrentContent(),
					r = n.getFirstBlock();
				return o.EditorState.set(t, {
					currentContent: o.Modifier.mergeBlockData(n, Object(l.b)(r), Object(s.Map)({
						_emote_modified: new Date
					}))
				})
			}
		},
		"./src/reddit/components/RichTextEditor/entity/applyEntityToContentBlock.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return s
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js");

			function s(t, e, n, s) {
				let r = t.getCharacterList();
				return r = r.withMutations(t => {
					for (let r = e; r < n; r++) t.set(r, o.CharacterMetadata.applyEntity(t.get(r), s))
				}), t.set("characterList", r)
			}
		},
		"./src/reddit/components/RichTextEditor/entity/cloneEntitiesInFragment.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return s
			})), n.d(e, "b", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/reddit/components/RichTextEditor/entity/applyEntityToContentBlock.ts");

			function s(t, e, n, s, r) {
				const i = t.createEntity(n.getType(), n.getMutability(), n.getData()),
					c = t.getLastCreatedEntityKey();
				return [i, Object(o.a)(e, s, r, c)]
			}

			function r(t, e) {
				let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const o = new Map;
				let r = e,
					i = t;
				return e.forEach((t, e) => {
					t && e && t.findEntityRanges(t => !!t.getEntity(), (n, s) => {
						const r = t.getEntityAt(n),
							i = o.get(r) || [];
						i.push({
							start: n,
							end: s,
							blockKey: e
						}), o.set(r, i)
					})
				}), o.forEach((e, o) => {
					const c = t.getEntity(o);
					(n ? e.slice(1) : e).forEach(t => {
						let {
							start: e,
							end: n,
							blockKey: o
						} = t;
						const a = r.get(o),
							[l, d] = s(i, a, c, e, n);
						i = l, r = r.set(o, d)
					})
				}), [i, r]
			}
		},
		"./src/reddit/components/RichTextEditor/entity/entityTypes.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return o
			})), n.d(e, "b", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const o = {
					COMMENT_LINK: "COMMENT_LINK",
					EMOTE: "EMOTE",
					LINK: "LINK",
					POST_LINK: "POST_LINK",
					SUBREDDIT_LINK: "SUBREDDIT_LINK",
					USER_LINK: "USER_LINK",
					USER_MENTION: "USER_MENTION"
				},
				s = new Set([o.COMMENT_LINK, o.LINK, o.POST_LINK, o.SUBREDDIT_LINK, o.USER_LINK, o.USER_MENTION]),
				r = (t, e) => {
					const n = t && e.getEntity(t);
					return !!n && (t => s.has(t))(n.getType())
				}
		},
		"./src/reddit/components/RichTextEditor/entity/getAllEntitiesInSelection.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return s
			}));
			var o = n("./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts");

			function s(t, e, n) {
				const s = [];
				return Object(o.a)(t, e, (t, o) => {
					const r = e.getStartKey() === o ? e.getStartOffset() : 0,
						i = e.getEndKey() === o ? e.getEndOffset() : t.getLength();
					t.findEntityRanges(n, (e, n) => {
						r <= n && i >= e && s.push({
							blockKey: o,
							entityKey: t.getEntityAt(e),
							start: e,
							end: n
						})
					})
				}), s
			}
		},
		"./src/reddit/components/RichTextEditor/entity/getSelectionEntityInfo.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return s
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js");

			function s(t, e) {
				const n = e.getFocusKey();
				if (n !== e.getAnchorKey()) return;
				const s = t.getBlockForKey(n),
					r = e.getStartOffset(),
					i = e.getEndOffset(),
					c = s.getEntityAt(i) || (i > 0 ? s.getEntityAt(i - 1) : null);
				if (!c) return;
				let a, l;
				if (s.findEntityRanges(t => t.getEntity() === c, (t, e) => {
						t <= r && i <= e && (a = t, l = e)
					}), "number" != typeof a || "number" != typeof l) return;
				const d = s.getText().slice(a, l);
				return {
					entitySelection: o.SelectionState.createEmpty(n).merge({
						anchorOffset: a,
						focusOffset: l
					}),
					entityKey: c,
					entityText: d
				}
			}
		},
		"./src/reddit/components/RichTextEditor/entity/link/decorator.m.less": function(t, e, n) {
			t.exports = {
				RegularLink: "_1FRfMxEAy__7c8vezYv9qP",
				regularLink: "_1FRfMxEAy__7c8vezYv9qP"
			}
		},
		"./src/reddit/components/RichTextEditor/entity/link/helpers.tsx": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return g
			})), n.d(e, "d", (function() {
				return f
			})), n.d(e, "f", (function() {
				return b
			})), n.d(e, "c", (function() {
				return y
			})), n.d(e, "b", (function() {
				return E
			})), n.d(e, "h", (function() {
				return S
			})), n.d(e, "g", (function() {
				return x
			})), n.d(e, "e", (function() {
				return C
			}));
			n("./node_modules/core-js/modules/es6.regexp.match.js");
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./src/lib/linkMatchers/index.ts"),
				r = n("./src/lib/linkMatchers/customLinks.ts"),
				i = n("./src/lib/memoizeByReference/index.ts"),
				c = n("./src/reddit/components/RichTextEditor/entity/entityTypes.ts"),
				a = n("./src/reddit/components/RichTextEditor/entity/getAllEntitiesInSelection.ts"),
				l = n("./src/reddit/components/RichTextEditor/entity/getSelectionEntityInfo.ts"),
				d = n("./src/reddit/components/RichTextEditor/spoiler/helpers.ts"),
				u = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const p = [c.a.SUBREDDIT_LINK, c.a.USER_LINK, c.a.USER_MENTION],
				h = [...p, c.a.LINK];

			function g(t, e, n) {
				t.findEntityRanges(t => {
					const e = t.getEntity();
					return !!e && h.includes(n.getEntity(e).getType())
				}, e)
			}
			const m = t => {
					const e = s.a.match(t);
					if (e && e.length && e[0]) {
						const {
							schema: t,
							url: n
						} = e[0];
						return {
							linkPrefix: t,
							url: n
						}
					}
					return {
						linkPrefix: "",
						url: ""
					}
				},
				f = Object(i.a)((function(t) {
					const e = t.getCurrentContent(),
						n = t.getSelection();
					if (!n.isCollapsed()) return;
					if (Object(u.q)(e.getBlockForKey(n.getStartKey()).getType())) return;
					const r = n.getFocusKey(),
						i = e.getBlockForKey(r),
						c = n.getFocusOffset(),
						a = i.getText(),
						l = a.lastIndexOf(" ", c - 1) + 1,
						p = a.slice(l, c);
					if (!p) return;
					const h = s.e.match(p);
					if (!h) return;
					const g = h[h.length - 1],
						m = l + g.index,
						f = l + g.lastIndex;
					let b = -1;
					if (i.findEntityRanges(t => !!t.getEntity(), (t, e) => {
							t < c && (b = e)
						}), b >= m) return;
					return i.getCharacterList().slice(m, f).find(d.b) ? void 0 : {
						selection: o.SelectionState.createEmpty(r).merge({
							anchorOffset: m,
							focusOffset: f
						}),
						url: g.url
					}
				}));

			function b(t, e, n) {
				const s = t.getSelection();
				let r = t.getCurrentContent();
				const i = (r = r.createEntity(c.a.LINK, "MUTABLE", {
					url: n
				})).getLastCreatedEntityKey();
				return r = (r = o.Modifier.applyEntity(r, e, i)).merge({
					selectionAfter: s
				}), o.EditorState.push(t, r, "apply-entity")
			}
			const y = Object(i.a)((function(t) {
				const e = t.getCurrentContent(),
					n = Object(l.a)(e, t.getSelection());
				if (!n) return;
				const o = e.getEntity(n.entityKey);
				if (o.getType() !== c.a.LINK) return;
				const {
					url: s
				} = o.getData();
				return Object.assign({
					url: s
				}, n)
			}));
			const E = Object(i.a)((function(t) {
				const e = t.getCurrentContent(),
					n = t.getSelection(),
					o = Object(l.a)(e, n);
				if (!o) return;
				const s = n.getFocusOffset(),
					r = e.getEntity(o.entityKey),
					{
						linkPrefix: i
					} = m(o.entityText);
				if (!p.includes(r.getType()) || !o.entityText.startsWith(i) || s - o.entitySelection.getStartOffset() < i.length) return;
				const c = o.entityText.slice(i.length);
				return Object.assign({
					internalName: c
				}, o)
			}));

			function S(t, e, n, s) {
				let r = "apply-entity",
					i = t.getCurrentContent(),
					a = t;
				const d = Object(l.a)(i, e);
				if (n)
					if (d) {
						const t = i.getEntity(d.entityKey),
							{
								url: e
							} = t.getData();
						e !== n && (i = i.mergeEntityData(d.entityKey, {
							url: n
						})), void 0 !== s && d.entityText !== s && (i = o.Modifier.replaceText(i, d.entitySelection, s, void 0, d.entityKey), r = "insert-characters")
					} else {
						if (void 0 === s) throw new Error("New link display text must be provided!");
						const t = (i = i.createEntity(c.a.LINK, "MUTABLE", {
							url: n
						})).getLastCreatedEntityKey();
						i = o.Modifier.replaceText(i, e, s, void 0, t), r = "insert-characters"
					}
				else i = (i = o.Modifier.applyEntity(i, e, "")).merge({
					selectionAfter: t.getSelection()
				});
				return i === t.getCurrentContent() ? t : a = o.EditorState.push(a, i, r)
			}

			function x(t, e) {
				const n = E(t);
				if (!n) return t;
				const {
					linkPrefix: s,
					url: i
				} = m(n.entityText), c = s === r.d.mention ? r.d.profile : s, a = "".concat(c).concat(e), l = n.entitySelection.getStartOffset() + a.length;
				let d = S(t, n.entitySelection, i, a);
				return d = o.EditorState.forceSelection(d, n.entitySelection.merge({
					anchorOffset: l,
					focusOffset: l
				}))
			}

			function C(t, e) {
				if (e.getStartKey() !== e.getEndKey()) return !1;
				const n = t.getBlockForKey(e.getEndKey()).getType();
				return !Object(u.q)(n) && !Object(u.t)(n) && !Object(a.a)(t, e, e => {
					const n = e.getEntity();
					return !!n && t.getEntity(n).getType() !== c.a.LINK
				}).length
			}
		},
		"./src/reddit/components/RichTextEditor/helpers/common.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return o
			})), n.d(e, "h", (function() {
				return c
			})), n.d(e, "e", (function() {
				return a
			})), n.d(e, "c", (function() {
				return l
			})), n.d(e, "f", (function() {
				return d
			})), n.d(e, "b", (function() {
				return u
			})), n.d(e, "i", (function() {
				return p
			})), n.d(e, "d", (function() {
				return h
			})), n.d(e, "g", (function() {
				return g
			}));
			var o, s = n("./node_modules/draft-js/lib/Draft.js"),
				r = n("./node_modules/immutable/dist/immutable.js"),
				i = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			! function(t) {
				t.before = "before", t.after = "after"
			}(o || (o = {}));
			const c = (t, e) => new s.ContentBlock(Object.assign({
					key: t || Object(s.genKey)()
				}, e ? {
					text: e,
					characterList: Object(r.List)(Object(r.Repeat)(s.CharacterMetadata.create(), e.length))
				} : {})),
				a = t => t.props.children,
				l = t => a(t).props.block,
				d = function(t, e, n) {
					let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.after,
						a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
						l = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
					const d = [];
					let p = -1;
					if (t.getBlockMap().forEach((t, s) => {
							r === o.after && d.push(t), s === e && (d.push(...n), p = d.length - 1), r === o.before && d.push(t)
						}), p >= 0) {
						if (a) {
							const t = d[p + 1];
							t && t.getType() === i.n || d.splice(p + 1, 0, c())
						}
						if (l) {
							const t = p - n.length,
								e = d[t];
							e && e.getType() === i.n || d.splice(t + 1, 0, c())
						}
					}
					return t.merge({
						blockMap: s.BlockMapBuilder.createFromArray(d),
						selectionAfter: u(n[n.length - 1], !1, !0)
					})
				},
				u = function(t) {
					let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
						o = s.SelectionState.createEmpty(t.getKey()).merge({
							hasFocus: n
						});
					return e && (o = o.merge({
						anchorOffset: t.getLength(),
						focusOffset: t.getLength()
					})), o
				},
				p = (t, e) => {
					let n = t.getBlockBefore(e),
						o = t.getBlockMap();
					return o.get(e) ? (o = o.size > 1 ? o.remove(e) : o.set(e, c(e)), n = n || o.first(), t.merge({
						blockMap: o,
						selectionAfter: u(n, !0)
					})) : t
				},
				h = (t, e) => e.querySelector('[data-block][data-offset-key="'.concat(t, '-0-0"]')),
				g = t => t.getType() === i.n && !t.getText()
		},
		"./src/reddit/components/RichTextEditor/helpers/controlsState.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return f
			})), n.d(e, "b", (function() {
				return b
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/forEach.js"),
				s = n.n(o),
				r = n("./src/lib/forEachGroup/index.ts"),
				i = n("./src/lib/memoizeByReference/index.ts"),
				c = n("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				a = n("./src/reddit/components/RichTextEditor/entity/link/helpers.tsx"),
				l = n("./src/reddit/components/RichTextEditor/media/helpers.ts"),
				d = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				u = n("./src/reddit/components/RichTextEditor/table/helpers.ts"),
				p = n("./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts"),
				h = n("./src/reddit/components/RichTextEditor/helpers/styles.ts");
			const g = t => {
					const e = t.getCurrentContent(),
						n = t.getSelection(),
						o = {};
					s()(d.k, t => o[t] = {
						isActive: !1,
						isEnabled: !1
					});
					const i = new Set(Object.keys(o));
					if (i.delete(d.k.HIGHLIGHT), n.isCollapsed()) {
						const s = e.getBlockForKey(n.getEndKey()),
							r = s.getType();
						Object(d.q)(r) || Object(d.r)(r) || Object(d.t)(r) || i.forEach(t => o[t].isEnabled = !0), t.getCurrentInlineStyle().forEach(t => {
							t && o[t] && (o[t].isActive = !0)
						}), Object(u.i)(s) && (o[d.k.BOLD] = {
							isEnabled: !1,
							isActive: !1
						})
					} else {
						Object(h.e)(e, n).forEach(t => {
							i.delete(t), o[t] && (o[t].isActive = !0, o[t].isEnabled = !0)
						}), Object(p.a)(e, n, (t, s) => {
							if (!i.size) return !1;
							const c = n.getStartKey() === s ? n.getStartOffset() : 0,
								a = n.getEndKey() === s ? n.getEndOffset() : t.getLength(),
								l = t.getType(),
								u = t.getCharacterList();
							Object(d.q)(l) || Object(d.r)(l) || Object(d.t)(l) || Object(r.a)(u, {
								start: c,
								end: a
							}, (n, s, r, c) => {
								const a = n.getStyle(),
									l = n.getEntity(),
									d = l ? e.getEntity(l) : null;
								if (i.forEach(e => {
										const n = !o[e].isActive,
											s = Object(h.f)(a, t, d, e, n);
										s && s !== a && (o[e].isEnabled = !0, i.delete(e))
									}), !i.size) return !1
							})
						})
					}
					return o
				},
				m = t => {
					const e = {};
					return s()(d.b, n => e[n] = {
						isActive: !1,
						isEnabled: t
					}), e
				},
				f = Object(i.a)(t => {
					const e = t.getCurrentContent(),
						n = t.getSelection(),
						o = (t => {
							const e = t.getCurrentContent(),
								n = t.getSelection();
							let o = m(!0),
								r = null;
							if (n.isCollapsed()) r = e.getBlockForKey(n.getEndKey()).getType();
							else {
								let t = null;
								Object(p.a)(e, n, (e, n) => {
									const s = e.getType();
									return Object(d.t)(s) ? (o = m(!1), !1) : (null === t && (t = s), t !== s ? (t = null, !1) : void 0)
								}), r = t
							}
							return null !== r && ((Object(d.v)(r) || Object(d.t)(r)) && s()(o, t => {
								t.isEnabled = !1
							}), o[r].isActive = !0), o
						})(t);
					return {
						giphy: {
							isActive: !1,
							isEnabled: o[d.a].isEnabled && !Object(l.j)(e)
						},
						emote: {
							isActive: !1,
							isEnabled: Object(c.b)(e, n)
						},
						link: {
							isActive: !1,
							isEnabled: Object(a.e)(e, n)
						},
						blocks: o,
						styles: g(t)
					}
				}),
				b = t => {
					s()(t.blocks, t => {
						t.isEnabled = !1
					}), s()(t.styles, t => {
						t.isEnabled = !1
					}), t.link.isEnabled = !1
				}
		},
		"./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts": function(t, e, n) {
			"use strict";

			function o(t, e, n) {
				const o = e.getStartKey(),
					s = e.getEndKey();
				if (o === s) return void n(t.getBlockForKey(o), o);
				let r = !1;
				t.getBlockMap().forEach((t, e) => {
					if (e === o && (r = !0), !r || !t || !e) return;
					const i = n(t, e);
					return e !== s && i
				})
			}
			n.d(e, "a", (function() {
				return o
			}))
		},
		"./src/reddit/components/RichTextEditor/helpers/modifiers.ts": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./src/reddit/components/RichTextEditor/entity/cloneEntitiesInFragment.ts");

			function r(t, e) {
				const n = e.getStartKey();
				if (n !== e.getEndKey()) return;
				const o = t.getBlockForKey(n),
					r = e.getStartOffset(),
					i = e.getEndOffset(),
					c = r > 0 ? o.getEntityAt(r - 1) : null,
					a = o.getEntityAt(i);
				if (!c || !a || c !== a) return;
				const l = t.getEntity(a),
					d = o.getCharacterList().toSeq().skip(i).takeWhile(t => !!t && t.getEntity() === a).count(),
					[u, p] = Object(s.a)(t, o, l, i, i + d);
				return u.merge({
					blockMap: u.getBlockMap().set(o.getKey(), p)
				})
			}

			function i(t, e, n) {
				const s = r(t, e) || t;
				return o.Modifier.replaceWithFragment(s, e, n)
			}

			function c(t, e, n, s, i) {
				let c = t;
				return -1 !== n.indexOf("\n") && (c = r(t, e) || c), o.Modifier.replaceText(c, e, n, s, i)
			}

			function a(t, e, n, s, i) {
				let c = t;
				return -1 !== n.indexOf("\n") && (c = r(t, e) || c), o.Modifier.insertText(c, e, n, s, i)
			}

			function l(t, e) {
				const n = r(t, e) || t;
				return o.Modifier.splitBlock(n, e)
			}
			n.d(e, "c", (function() {
				return i
			})), n.d(e, "b", (function() {
				return c
			})), n.d(e, "a", (function() {
				return a
			})), n.d(e, "d", (function() {
				return l
			}))
		},
		"./src/reddit/components/RichTextEditor/helpers/sliceContiguousBlocks.ts": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/lodash/forEach.js"),
				s = n.n(o);
			e.a = (t, e) => {
				const n = t.getBlocksAsArray(),
					o = e.getKey(),
					r = e.getType();
				let i = null,
					c = null,
					a = !1;
				if (s()(n, (t, e) => {
						if (a || t.getKey() !== o || (a = !0), t.getType() === r) null === i && (i = e), c = e;
						else {
							if (a) return !1;
							i = null, c = null
						}
					}), a) return c = c || 0, {
					start: i = i || 0,
					blocks: n.slice(i, c + 1)
				}
			}
		},
		"./src/reddit/components/RichTextEditor/helpers/styles.ts": function(t, e, n) {
			"use strict";
			n.d(e, "f", (function() {
				return u
			})), n.d(e, "e", (function() {
				return p
			})), n.d(e, "b", (function() {
				return h
			})), n.d(e, "a", (function() {
				return g
			})), n.d(e, "c", (function() {
				return m
			})), n.d(e, "d", (function() {
				return f
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./node_modules/immutable/dist/immutable.js"),
				r = n("./src/lib/forEachGroup/index.ts"),
				i = n("./src/reddit/components/RichTextEditor/entity/entityTypes.ts"),
				c = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				a = n("./src/reddit/components/RichTextEditor/table/helpers.ts"),
				l = n("./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts");
			const d = Object(s.OrderedSet)([]),
				u = function(t, e, n, o) {
					let r = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
					const l = e.getType();
					if (Object(c.q)(l) || Object(c.r)(l) || Object(c.t)(l)) return;
					if (o === c.k.BOLD && Object(a.i)(e)) return;
					const u = n ? n.getType() : null,
						p = u === i.a.SUBREDDIT_LINK || u === i.a.USER_LINK;
					return p && o !== c.k.SPOILER && o !== c.k.MONOSPACE || u === i.a.EMOTE ? void 0 : o === c.k.MONOSPACE || o === c.k.SPOILER ? r ? Object(s.OrderedSet)([o]) : d : (t.has(c.k.MONOSPACE) || t.has(c.k.SPOILER)) && r ? Object(s.OrderedSet)([o]) : !r || o !== c.k.SUPERSCRIPT && o !== c.k.SUBSCRIPT ? r ? t.add(o) : t.has(o) ? t.delete(o) : void 0 : t.delete(c.k.SUBSCRIPT).delete(c.k.SUPERSCRIPT).add(o)
				},
				p = (t, e) => {
					let n = null,
						o = !0;
					return Object(l.a)(t, e, (s, l) => {
						const d = s.getType(),
							u = Object(a.i)(s);
						if (u || (o = !1), Object(c.q)(d) || Object(c.r)(d) || Object(c.t)(d)) return !1;
						const p = e.getStartKey() === l ? e.getStartOffset() : 0,
							h = e.getEndKey() === l ? e.getEndOffset() : s.getLength(),
							g = s.getCharacterList();
						Object(r.a)(g, {
							start: p,
							end: h
						}, e => {
							const o = e.getEntity();
							if (o && t.getEntity(o).getType() === i.a.SUBREDDIT_LINK) return;
							let s = e.getStyle();
							return u && (s = s.add(c.k.BOLD)), null === n ? n = s.asMutable() : n.intersect(s), !(n && !n.size) && void 0
						})
					}), null === n ? [] : (o && n.delete(c.k.BOLD), n.toJS())
				},
				h = (t, e) => {
					const n = e.getCurrentContent(),
						s = e.getSelection();
					let i = n.getBlockMap();
					const a = -1 === p(n, s).indexOf(t);
					Object(l.a)(n, s, (e, l) => {
						if (!e || !l) return !1;
						const d = s.getStartKey() === l ? s.getStartOffset() : 0,
							p = s.getEndKey() === l ? s.getEndOffset() : e.getLength(),
							h = e.getCharacterList(),
							g = h.withMutations(s => {
								Object(r.a)(h, {
									start: d,
									end: p
								}, (r, i, l, d) => {
									const p = r.getStyle(),
										h = r.getEntity(),
										g = h ? n.getEntity(h) : null,
										m = u(p, e, g, t, a);
									if (m) {
										const t = ((t, e) => o.CharacterMetadata.create({
											style: e,
											entity: e.has(c.k.SPOILER) ? null : t.getEntity()
										}))(r, m);
										for (let e = l; e < d; e++) s.set(e, t)
									}
								})
							});
						if (g !== h) {
							const t = e.set("characterList", g);
							i = i.set(l, t)
						}
					});
					const d = n.merge({
						blockMap: i,
						selectionAfter: s
					});
					return o.EditorState.push(e, d, "change-inline-style")
				},
				g = (t, e) => {
					const n = e.getCurrentContent(),
						s = e.getSelection(),
						r = n.getBlockForKey(s.getStartKey()),
						i = r.getEntityAt(s.getStartOffset()),
						c = i ? n.getEntity(i) : null,
						a = e.getCurrentInlineStyle(),
						l = u(a, r, c, t, !a.has(t));
					let d = e;
					return l && (d = o.EditorState.setInlineStyleOverride(d, l)), d
				},
				m = t => o.EditorState.setInlineStyleOverride(t, d),
				f = (t, e) => {
					const n = t.getSelection(),
						o = e.getSelection();
					return n.getStartOffset() > 0 || n.getFocusKey() === o.getFocusKey() || t.getCurrentInlineStyle().isEmpty() ? t : m(t)
				}
		},
		"./src/reddit/components/RichTextEditor/index.m.less": function(t, e, n) {
			t.exports = {
				FocusableContent: "_3wl1bRnSzxHkKJfvqakrNI",
				focusableContent: "_3wl1bRnSzxHkKJfvqakrNI",
				showSubmitButton: "_3Imp2y02BMA96sEJAe9M3M",
				editorWrapper: "_2baJGEALPiEMZpWB2iWQs7",
				hasInitialHeight: "_35E-zXyMmfsLI7nv_sBvFL",
				hasInitialMinHeight: "_18GfdTZmF2EPjYSkBDE0WI",
				noBorder: "HXDWn-rmYOwqGcGtz9AKm",
				insetSubmitButton: "_3b2mbY1nb1R-z21ihISt7z",
				emptyContent: "_3cP1eCSI5AeGc6__VQ1axu",
				focusedContent: "_2O6bpyGivXLGxZ0LErKCzW"
			}
		},
		"./src/reddit/components/RichTextEditor/index.tsx": function(t, e, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = (n("./node_modules/draft-js/dist/Draft.css"), n("./node_modules/lodash/filter.js")),
				r = n.n(s),
				i = n("./node_modules/react/index.js"),
				c = n.n(i),
				a = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				d = n("./node_modules/shallowequal/index.js"),
				u = n.n(d),
				p = n("./src/lib/classNames/index.ts"),
				h = n("./src/lib/fastdom/index.ts"),
				g = n("./src/lib/lessComponent.tsx"),
				m = n("./src/lib/linkMatchers/customLinks.ts"),
				f = n("./src/lib/logs/console.ts"),
				b = n("./src/telemetry/models/Media.ts"),
				y = n("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				E = n("./src/reddit/actions/postCreation/mediaUpload.ts"),
				S = n("./src/reddit/featureFlags/index.ts"),
				x = n("./src/reddit/helpers/trackers/postComposer.ts"),
				C = n("./src/reddit/i18n/utils.ts"),
				O = n("./src/reddit/models/PostCreationForm/index.ts"),
				T = n("./src/reddit/models/Upload/index.ts"),
				v = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const k = {
				BREAK_HEADER_ENTITY: "BREAK_HEADER_ENTITY",
				CONVERT_TO_LIST_ON_SPACE: "CONVERT_TO_LIST_ON_SPACE",
				EXEC_TABLE_ON_ENTER_HANDLER: "EXEC_TABLE_ON_ENTER_HANDLER",
				INSERT_LINE_BREAK: "INSERT_LINE_BREAK",
				LINKIFY_ON_ENTER: "LINKIFY_ON_ENTER",
				LINKIFY_ON_SPACE: "LINKIFY_ON_SPACE",
				MAKE_PLAIN_BLOCK: "MAKE_PLAIN_BLOCK",
				OPEN_LINK_TOOLTIP: "OPEN_LINK_TOOLTIP",
				REDUCE_LIST_INDENT: "REDUCE_LIST_INDENT",
				REMOVE_EXTRA_LIST_ITEM: "REMOVE_EXTRA_LIST_ITEM",
				RESET_CURRENT_AND_PREVIOUS_BLOCKS: "RESET_CURRENT_AND_PREVIOUS_BLOCKS",
				SUBMIT: "SUBMIT"
			};
			const j = t => {
					const e = t.getCurrentContent().getBlockMap();
					if (e.size > 2 || (t => !!t.reduce((function() {
							let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
								e = arguments.length > 1 ? arguments[1] : void 0;
							return t + e.getLength()
						}), 0))(e) || (t => !!t.find(t => Object(v.o)(t.getType())))(e)) return null; {
						const n = t.getSelection();
						if (n.isCollapsed() && n.getFocusKey() === e.first().getKey()) return n.getFocusKey()
					}
				},
				R = t => {
					const e = t.getCharacterList().map(t => o.CharacterMetadata.create({
						entity: t.getEntity()
					}));
					return t.set("characterList", e)
				};
			var w = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				B = n("./src/reddit/components/RichTextEditor/constants/draftEditorCommands.ts"),
				I = n("./node_modules/lodash/escape.js"),
				_ = n.n(I),
				A = n("./src/reddit/components/RichTextEditor/media/helpers.ts"),
				K = n("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				M = n("./src/reddit/components/RichTextEditor/entity/entityTypes.ts"),
				L = n("./node_modules/immutable/dist/immutable.js"),
				D = n("./src/reddit/helpers/dom/index.ts"),
				F = (n("./node_modules/core-js/modules/es6.array.sort.js"), n("./node_modules/lodash/chunk.js")),
				N = n.n(F),
				P = n("./node_modules/lodash/flatten.js"),
				U = n.n(P),
				H = n("./node_modules/lodash/takeWhile.js"),
				z = n.n(H),
				W = n("./src/reddit/components/RichTextEditor/helpers/modifiers.ts"),
				V = n("./src/reddit/components/RichTextEditor/table/helpers.ts"),
				q = n("./node_modules/lodash/last.js"),
				G = n.n(q),
				Q = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				Y = n("./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts"),
				Z = n("./node_modules/lodash/find.js"),
				J = n.n(Z);
			var X = (t, e) => {
				const n = t.getSelection(),
					s = t.getCurrentContent(),
					r = s.getBlockForKey(n.getAnchorKey()),
					i = s.getBlockForKey(n.getFocusKey()),
					[c, a] = Object(V.e)(s, r, i);
				if (!c || c !== a) return t;
				const l = Object(V.g)(r),
					d = Object(V.g)(i),
					{
						blocks: u,
						start: p
					} = c,
					{
						colCount: h
					} = d,
					g = u.length / h,
					{
						minCol: m,
						minRow: f,
						maxCol: b,
						maxRow: y
					} = Object(V.f)(l, d),
					E = u.filter(t => {
						const {
							rowIndex: n,
							colIndex: o
						} = Object(V.g)(t);
						return "rows" === e ? !(f <= n && n <= y) : !(m <= o && o <= b)
					});
				E.sort(V.b);
				const S = "rows" === e ? h : E.length / g,
					x = U()(Object(V.d)(N()(E, S))),
					C = s.getBlocksAsArray(),
					O = [...C.slice(0, p), ...x, ...C.slice(p + u.length)],
					T = s.merge({
						blockMap: o.BlockMapBuilder.createFromArray(O)
					}),
					v = {
						colIndex: m,
						rowIndex: f
					};
				let k = J()(x, t => Object(V.h)(v, Object(V.g)(t)));
				k || (k = x.length ? x[x.length - 1] : C[p > 0 ? p - 1 : 0]);
				const j = o.SelectionState.createEmpty(k.getKey()).merge({
					focusOffset: k.getLength(),
					anchorOffset: k.getLength()
				});
				let R = o.EditorState.push(t, T, Q.e);
				return R = o.EditorState.forceSelection(R, j)
			};
			var $ = function(t) {
				let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				const n = t.getSelection();
				if (n.isCollapsed()) return;
				if (n.getStartKey() === n.getEndKey() && !e) return;
				const s = t.getCurrentContent(),
					r = s.getBlockForKey(n.getAnchorKey()),
					i = s.getBlockForKey(n.getFocusKey()),
					[c, a] = Object(V.e)(s, r, i);
				if (!c || c !== a) return;
				const l = {};
				let d = n;
				if (r === i) {
					const t = Object(V.n)(i, 0, n.getStartOffset()),
						e = Object(V.n)(i, n.getEndOffset());
					l[i.getKey()] = Object(V.j)(i, [t, e]), d = n
				} else {
					if (c.blocks[0].getKey() === n.getStartKey() && G()(c.blocks).getKey() === n.getEndKey()) return X(t, "rows");
					Object(Y.a)(s, n, (t, e) => {
						l[e] = Object(V.n)(t, 0, 0)
					}), d = n.merge({
						anchorOffset: 0,
						focusOffset: 0
					})
				}
				const u = s.merge({
					blockMap: s.getBlockMap().merge(l),
					selectionAfter: d
				});
				return o.EditorState.push(t, u, Q.f)
			};
			const tt = (t, e, n, o) => {
					const {
						htmlParts: s
					} = e;
					t.forEach((t, r) => {
						s.push("<".concat(n, " ").concat(o[r], " ").concat('style="margin: 0px; padding: 4px 9px; border: 1px solid rgb(229, 227, 218);"', ">")), bt(t, e), s.push("</".concat(n, ">"))
					})
				},
				et = t => {
					const e = t[0],
						n = t[t.length - 1],
						o = [...t].sort(V.b),
						{
							minCol: s,
							maxCol: r
						} = Object(V.f)(Object(V.g)(e), Object(V.g)(n)),
						i = r - s + 1;
					return Object(V.d)(N()(o, i))
				},
				nt = (t, e, n) => {
					n ? bt(t[0], e) : ((t, e) => {
						const {
							editor: n,
							htmlParts: o
						} = e, s = n.getEditorKey(), r = t[0].map(t => {
							const {
								alignment: e
							} = Object(V.g)(t);
							return e ? 'align="'.concat(V.a[e], '"') : ""
						}), [i, ...c] = t;
						o.push('\n    <table data-editor="'.concat(s, '">\n      <thead>\n        <tr>')), tt(i, e, "th", r), o.push("\n        </tr>\n      </thead>\n      <tbody>"), c.forEach(t => {
							o.push("\n        <tr>"), tt(t, e, "td", r), o.push("\n        </tr>")
						}), o.push("\n      </tbody>\n    </table>")
					})(et(t), e)
				},
				ot = (t, e, n) => {
					n ? e.textParts.push(St(t[0], e)) : ((t, e) => {
						const {
							textParts: n
						} = e;
						t.forEach(t => {
							n.push(t.map(t => St(t, e)).join(" "))
						})
					})(et(t), e)
				},
				st = t => {
					const {
						processed: e,
						remaining: n
					} = t, o = [];
					for (; n.length;) {
						const t = n[0];
						if (!Object(v.v)(t.getType())) break;
						o.push(n.shift())
					}
					const s = !n.length && !e.length,
						r = 1 === o.length && s;
					nt(o, t, r), ot(o, t, r), ((t, e, n, o) => {
						if (n)
							if (o) {
								const n = t[0].merge({
									data: Object(L.Map)(),
									type: v.n
								});
								e.blocksParts = [n]
							} else e.blocksParts = U()(et(t))
					})(o, t, s, r), e.push(...o)
				},
				rt = t => $(t, !0),
				it = (t, e, n) => {
					const s = Object(v.v)(n.first().getType()),
						r = Object(v.v)(n.last().getType()),
						i = t.getBlockForKey(e.getAnchorKey()),
						c = t.getBlockForKey(e.getFocusKey()),
						[a, l] = Object(V.e)(t, i, c);
					return a && a === l ? ((t, e, n, s) => {
						const r = Object(v.v)(s.first().getType()),
							i = t.getBlockForKey(e.getAnchorKey()),
							c = t.getBlockForKey(e.getFocusKey()),
							{
								blocks: a,
								start: l
							} = n;
						a.sort(V.b);
						const d = Object(V.g)(a[0]);
						let {
							colCount: u
						} = d;
						const p = N()(a, u);
						let h = p.length;
						const {
							minRow: g,
							minCol: m
						} = Object(V.f)(Object(V.g)(i), Object(V.g)(c)), f = s.toArray();
						if (r) {
							const n = z()(f, t => Object(v.v)(t.getType()));
							n.sort(V.b);
							const s = Object(V.g)(n[0]).colCount,
								r = N()(n, s),
								i = r.length,
								c = g + i - 1,
								d = m + s - 1;
							if (n.length !== i * s) throw new Error("Invalid table fragment!");
							if (d >= u && p.forEach(t => {
									t.push(...Object(V.l)(d - u + 1, 1))
								}), u = p[0].length, c >= h) {
								const t = N()(Object(V.l)(u, c - h + 1), u);
								p.push(...t)
							}
							h = p.length;
							for (let t = 0; t < i; t++)
								for (let e = 0; e < s; e++) {
									const n = g + t,
										o = m + e,
										s = r[t][e];
									p[n][o] = s.set("key", p[n][o].getKey())
								}
							const b = Object(V.d)(p),
								y = U()(b),
								E = t.getBlocksAsArray(),
								S = [...E.slice(0, l), ...y, ...E.slice(l + a.length)],
								x = Object(V.o)(e, p[g][m], p[c][d]);
							return t.merge({
								blockMap: o.BlockMapBuilder.createFromArray(S),
								selectionAfter: x
							})
						} {
							const n = p[g][m],
								s = Object(V.j)(n, f, " ");
							let r = e;
							return e.getStartKey() !== e.getEndKey() && (r = Object(V.o)(e, n, n)), W.c(t, r, o.BlockMapBuilder.createFromArray([s]))
						}
					})(t, e, a, n) : a || l || !s && !r ? void 0 : ((t, e, n) => {
						const s = Object(v.v)(n.first().getType()),
							r = Object(v.v)(n.last().getType()),
							i = n.toArray();
						s && i.unshift(Object(K.h)()), r && i.push(Object(K.h)());
						const c = o.BlockMapBuilder.createFromArray(i);
						return W.c(t, e, c)
					})(t, e, n)
				};
			var ct = n("./node_modules/draft-js/lib/removeEntitiesAtEdges.js"),
				at = n.n(ct);
			var lt = (t, e) => {
				const n = e.getStartKey(),
					o = e.getStartOffset(),
					s = e.getEndKey(),
					r = e.getEndOffset(),
					i = at()(t, e).getBlockMap(),
					c = i.keySeq(),
					a = c.indexOf(n),
					l = c.indexOf(s) + 1;
				return i.slice(a, l).map((t, e) => {
					const i = t.getText(),
						c = t.getCharacterList();
					return n === s ? t.merge({
						text: i.slice(o, r),
						characterList: c.slice(o, r)
					}) : e === n ? t.merge({
						text: i.slice(o),
						characterList: c.slice(o)
					}) : e === s ? t.merge({
						text: i.slice(0, r),
						characterList: c.slice(0, r)
					}) : t
				})
			};
			const dt = (t, e) => {
					const n = {
							children: [],
							parentItem: e,
							type: t.getType()
						},
						o = {
							block: t,
							parentList: n
						};
					return n.children.push(o), e && (e.childrenLists = e.childrenLists || [], e.childrenLists.push(n)), {
						list: n,
						item: o
					}
				},
				ut = (t, e) => {
					const {
						type: n,
						children: o
					} = t, {
						htmlParts: s
					} = e, r = n === v.b.ORDERED_LIST ? "ol" : "ul";
					s.push("<".concat(r, ">")), o.forEach(t => ((t, e) => {
						const {
							block: n,
							childrenLists: o
						} = t, {
							htmlParts: s
						} = e;
						s.push("<li>"), bt(n, e, !0), o && o.forEach(t => ut(t, e)), s.push("</li>")
					})(t, e)), s.push("</".concat(r, ">"))
				},
				pt = (t, e) => {
					const {
						children: n
					} = t;
					n.forEach((t, n) => ht(t, n, e))
				},
				ht = (t, e, n) => {
					const {
						block: o,
						childrenLists: s
					} = t, {
						textParts: r
					} = n, i = " ".repeat(o.getDepth()), c = o.getType() === v.b.ORDERED_LIST ? "".concat(e + 1, ".") : "-", a = St(o, n);
					r.push("".concat(i).concat(c, " ").concat(a)), s && s.forEach(t => pt(t, n))
				},
				gt = t => {
					const {
						remaining: e
					} = t, n = e.shift(), o = n.getType(), s = [n];
					for (; e.length;) {
						const t = e[0],
							n = t.getType();
						if (!Object(v.s)(n)) break;
						if (t.getDepth() > 0 || n === v.b.UNORDERED_LIST) s.push(e.shift());
						else {
							if (n !== o) break;
							if (s.some(t => t.getType() !== v.b.ORDERED_LIST)) break;
							s.push(e.shift())
						}
					}
					const r = (t => {
						const e = t[0],
							n = {
								type: e.getType(),
								children: []
							};
						let o, s = n,
							r = e.getDepth();
						return t.forEach(t => {
							const e = t.getType(),
								n = t.getDepth();
							if (n > r) {
								const e = dt(t, o);
								s = e.list, o = e.item, r = n
							} else {
								for (; r !== n;) s = s.parentItem ? s.parentItem.parentList : s, r--;
								if (e === s.type) o = {
									block: t,
									parentList: s
								}, s.children.push(o);
								else {
									const e = dt(t, s.parentItem);
									s = e.list, o = e.item
								}
							}
						}), n
					})(s);
					ut(r, t), pt(r, t), t.processed.push(...s)
				};
			var mt = (t, e) => {
				const n = t.toArray().filter(t => !Object(v.t)(t.getType()));
				if (1 === n.length) {
					n[0].getType() !== v.n && n.push(new o.ContentBlock({
						key: Object(o.genKey)(),
						type: v.n
					}))
				}
				const s = o.ContentState.createFromBlockArray(n),
					r = JSON.stringify(Object(o.convertToRaw)(s));
				return "<div ".concat("data-reddit-rtjson", '="').concat(_()(r), '">').concat(e, "</div>")
			};
			const ft = () => !!window.clipboardData,
				bt = function(t, e) {
					let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					const {
						htmlParts: o
					} = e, s = yt(t, e);
					s && s.forEach(t => o.push(n ? t.innerHTML : t.outerHTML))
				},
				yt = (t, e) => {
					const {
						selection: n,
						editor: o
					} = e, s = n.getStartKey(), r = n.getEndKey(), i = t.getKey(), c = o.refs.editor, a = Object(K.d)(i, c);
					return a ? i === s || i === r ? Object(D.c)(a) : [a] : null
				};
			var Et = (t, e, n) => {
				const s = t.getCurrentContent(),
					r = t.getSelection(),
					i = kt(t) || lt(s, r);
				if (!i || !i.count()) return;
				const c = i.toArray(),
					a = {
						editor: e,
						editorState: t,
						selection: r,
						remaining: c,
						processed: [],
						htmlParts: [],
						textParts: [],
						blocksParts: [...c]
					};
				for (; a.remaining.length;) {
					const t = a.remaining[0].getType();
					switch (!0) {
						case Object(v.t)(t):
							vt(a);
							break;
						case Object(v.s)(t):
							gt(a);
							break;
						case Object(v.v)(t):
							st(a);
							break;
						default:
							xt(a)
					}
				}
				const l = a.textParts.join("\n"),
					d = (t => Object(L.OrderedMap)(t.map(t => {
						const e = Object(o.genKey)();
						return [e, t.set("key", e)]
					})))(a.blocksParts);
				return ((t, e) => {
					let {
						html: n,
						text: o
					} = e;
					ft() ? window.clipboardData.setData("text", o) : (n && t.clipboardData.setData("text/html", n), t.clipboardData.setData("text/plain", o))
				})(n, {
					html: mt(d, a.htmlParts.join("")),
					text: l
				}), n.stopPropagation(), n.preventDefault(), e.setClipboard(d), d
			};
			const St = (t, e) => {
					const n = t.getText(),
						o = e.editorState.getCurrentContent(),
						s = [];
					let r = -1;
					return t.getCharacterList().forEach((t, e) => {
						const i = t && t.getEntity();
						if (i && void 0 !== e) {
							const t = o.getEntity(i);
							t.getType() === M.a.EMOTE && (s.push(n.substring(r + 1, e)), s.push(":".concat(t.getData().id, ":")), r = e)
						}
					}), s.push(n.substring(r + 1, n.length)), s.join("")
				},
				xt = t => {
					const e = t.remaining.shift();
					((t, e) => bt(t, e))(e, t), ((t, e) => {
						e.textParts.push(St(t, e))
					})(e, t), t.processed.push(e)
				},
				Ct = (t, e) => {
					const n = t.first(),
						s = t.last();
					let r = t;
					if (Object(v.u)(n.getType()) ? r = r.set(r.keySeq().first(), n.merge({
							type: v.n
						})) : Object(v.o)(n.getType()) && (r = o.BlockMapBuilder.createFromArray([Object(K.h)(), ...r.toArray()])), Object(v.u)(s.getType()) || !Object(A.q)(e)) {
						const t = Object(K.h)();
						r = r.set(t.getKey(), t)
					} else if (Object(v.o)(s.getType())) {
						const t = Object(K.h)().merge({
							type: v.j
						});
						r = r.set(t.getKey(), t)
					}
					return r
				},
				Ot = (t, e, n) => {
					const o = t.getBlockForKey(e.getStartKey());
					if (Object(v.u)(o.getType())) {
						const o = n.first(),
							s = n.set(n.keySeq().first(), Object(K.h)(o.getKey(), o.getText()).merge({
								type: v.j
							}));
						return W.c(t, e, s)
					}
				},
				Tt = (t, e, n) => {
					const o = ((t, e, n) => {
						const o = e ? e.getText() : "";
						return '<span data-editor="'.concat(n, '">').concat(_()(o), "</span>")
					})(0, e, n.editor.getEditorKey());
					n.htmlParts.push(o)
				},
				vt = t => {
					const {
						remaining: e
					} = t, n = e.shift(), o = e[0] && Object(v.u)(e[0].getType()) ? e.shift() : void 0;
					Tt(0, o, t), ((t, e) => {
						const n = t ? St(t, e) : "";
						e.textParts.push(n)
					})(o, t), t.processed.push(n), o && t.processed.push(o)
				},
				kt = t => {
					const e = t.getSelection(),
						n = e.getFocusKey();
					if (n !== e.getAnchorKey()) return;
					const s = t.getCurrentContent(),
						r = s.getBlockForKey(n);
					if (Object(v.o)(r.getType())) {
						const t = [r],
							e = s.getBlockAfter(r.getKey());
						return e && Object(v.u)(e.getType()) && t.push(e), o.ContentState.createFromBlockArray(t).getBlockMap()
					}
				},
				jt = t => {
					const e = kt(t);
					if (e) return Object(A.d)(t, e.first().getKey())
				},
				Rt = t => {
					const e = t.getSelection();
					let n = t.getCurrentContent();
					const s = n.getBlockForKey(e.getStartKey()),
						r = n.getBlockForKey(e.getEndKey());
					if (Object(v.t)(s.getType()) || Object(v.t)(r.getType())) {
						if (e.isCollapsed())
							if (Object(v.u)(s.getType())) n = W.d(n, e), n = o.Modifier.setBlockType(n, n.getSelectionAfter(), v.n);
							else if (Object(v.o)(s.getType())) {
							let s = n.getBlockAfter(e.getStartKey());
							return s || (s = (t = Object(A.b)(t, e.getStartKey(), K.a.after)).getCurrentContent().getBlockAfter(e.getStartKey())), o.EditorState.forceSelection(t, Object(K.b)(s, !0))
						}
						return o.EditorState.push(t, n, "split-block")
					}
				},
				wt = (t, e) => {
					const n = t.getSelection(),
						s = t.getCurrentContent(),
						r = "up" === e ? n.getStartKey() : n.getEndKey(),
						i = s.getBlockForKey(r);
					if (!Object(v.o)(i.getType())) return;
					const c = "up" === e ? s.getBlockBefore(r) : s.getBlockAfter(r);
					return c ? o.EditorState.forceSelection(t, Object(K.b)(c, !0)) : Object(A.b)(t, r, "up" === e ? K.a.before : K.a.after)
				},
				Bt = (t, e) => {
					if (t.shiftKey) return;
					const n = wt(e, "up");
					return n && t.preventDefault(), n
				},
				It = (t, e) => {
					if (t.shiftKey) return;
					const n = wt(e, "down");
					return n && t.preventDefault(), n
				},
				_t = (t, e) => {
					const n = t.getSelection();
					return n.isCollapsed() && 0 === n.getStartOffset() && Object(v.o)(t.getCurrentContent().getBlockForKey(n.getStartKey()).getType())
				};
			var At = (t, e) => {
					if (!Object(A.q)(e)) return t;
					const n = t.getSelection(),
						o = t.getCurrentContent(),
						s = o.getBlockForKey(n.getStartKey());
					if (Object(v.o)(s.getType())) {
						const e = o.getBlockAfter(s.getKey());
						if (!e || !Object(v.u)(e.getType())) return Object(A.d)(t, s.getKey(), !1)
					}
					return t
				},
				Kt = n("./src/reddit/actions/modal.ts"),
				Mt = n("./src/reddit/actions/upload.ts"),
				Lt = n("./src/reddit/components/ThumbnailSelector/index.tsx"),
				Dt = t => null,
				Ft = n("./src/reddit/helpers/media/index.ts"),
				Nt = n("./src/reddit/helpers/richTextEditor/index.ts"),
				Pt = n("./src/reddit/selectors/activeModalId.ts"),
				Ut = n("./src/reddit/selectors/user.ts");
			const Ht = "application/x-reddit-rte-block";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var zt = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/ImagePreview/index.m.less"),
				Wt = n.n(zt);
			const Vt = g.a.img("Img", Wt.a);
			var qt = g.a.wrapped(t => {
					const {
						className: e,
						url: n
					} = t;
					return c.a.createElement("div", {
						className: e
					}, c.a.createElement(Vt, {
						draggable: !1,
						src: n
					}))
				}, "Component", Wt.a),
				Gt = n("./src/app/strings/index.ts"),
				Qt = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/Placeholder/index.m.less"),
				Yt = n.n(Qt);
			const Zt = Object(Gt.d)("postCreation.processingVideo"),
				Jt = Object(Gt.d)("postCreation.processingImage"),
				Xt = g.a.div("Message", Yt.a);
			var $t = g.a.wrapped(t => {
					const {
						className: e,
						isImage: n,
						language: o
					} = t;
					return c.a.createElement("div", {
						className: e
					}, c.a.createElement(Xt, null, (n ? Jt : Zt)(o)))
				}, "Component", Yt.a),
				te = n("./src/lib/formatApiError/index.ts"),
				ee = n("./src/reddit/components/ProgressBar/index.tsx"),
				ne = n("./src/reddit/controls/Button/index.tsx"),
				oe = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/StatusBar/index.m.less"),
				se = n.n(oe);
			const re = Object(Gt.d)("postCreation.cancel"),
				ie = Object(Gt.d)("postCreation.retry"),
				ce = Object(Gt.d)("postCreation.remove"),
				ae = Object(Gt.d)("postCreation.uploadStatus.uploadCanceled"),
				le = Object(Gt.d)("postCreation.uploadStatus.uploadFailed"),
				de = Object(Gt.d)("postCreation.uploadStatus.success"),
				ue = Object(Gt.d)("postCreation.uploadStatus.uploading"),
				pe = g.a.div("ControlRow", se.a),
				he = g.a.wrapped(ne.n, "Button", se.a),
				ge = g.a.wrapped(ne.n, "ErrButton", se.a),
				me = g.a.div("Status", se.a),
				fe = g.a.wrapped(ee.a, "ProgressBar", se.a),
				be = g.a.div("ErrorLine", se.a),
				ye = t => e => {
					e.stopPropagation(), t(e)
				};
			var Ee = g.a.wrapped(t => {
					const {
						language: e,
						upload: n
					} = t, o = ye(t.onCancel), s = ye(t.onRetry), r = ye(t.onRemove), {
						status: i,
						progress: a
					} = n, l = a && a.percent || 0, d = i === T.a.FAILED || i === T.a.CANCELED, u = ((t, e) => {
						const {
							status: n,
							progress: o
						} = t;
						return n === T.a.CANCELED ? ae(e) : n === T.a.FAILED ? "".concat(le(e), ": ").concat(Object(te.a)(e, t.error), " ") : 100 === (o && o.percent || 0) ? de(e) : "".concat(ue(e), ': "').concat(t.file.name, '"')
					})(n, e);
					return c.a.createElement("div", {
						className: t.className
					}, d ? c.a.createElement(be, null) : c.a.createElement(fe, {
						innerBarClassName: se.a.ProgressBarInner,
						percent: l
					}), c.a.createElement(pe, null, c.a.createElement(me, {
						className: d ? se.a.hasError : void 0,
						title: d ? u : void 0
					}, u), c.a.createElement("div", null, d ? [c.a.createElement(ge, {
						key: "remove",
						onClick: r
					}, ce(e)), c.a.createElement(ge, {
						key: "retry",
						onClick: s
					}, ie(e))] : c.a.createElement(he, {
						disabled: 100 === l,
						onClick: o
					}, re(e)))))
				}, "Component", se.a),
				Se = n("./node_modules/react-motion/lib/react-motion.js"),
				xe = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				Ce = n("./src/reddit/components/PlayButton/index.tsx"),
				Oe = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/VideoPreview/index.m.less"),
				Te = n.n(Oe);
			const ve = {
					stiffness: 60,
					damping: 20
				},
				ke = [{
					key: "video",
					style: {
						opacity: Object(Se.spring)(1, ve)
					}
				}],
				je = g.a.wrapped(t => {
					const {
						autoPlay: e = !1,
						className: n,
						showControls: o,
						shouldPause: s,
						style: r,
						dashUrl: i,
						hlsUrl: a,
						otherUrl: l
					} = t;
					return c.a.createElement("div", {
						className: n,
						style: r
					}, c.a.createElement(xe.b, {
						autoPlay: e,
						shouldIgnoreAutoplayPref: !0,
						shouldLoad: !1,
						shouldPause: s,
						isGif: !1,
						hlsSource: a,
						mpegDashSource: i,
						otherSource: l,
						showSettingsIcon: !1,
						showControlBar: o,
						playerClickPlay: !1,
						hideUntilLoaded: !0
					}))
				}, "VideoPlayer", Te.a),
				Re = g.a.img("PosterImg", Te.a),
				we = g.a.wrapped(t => {
					const {
						className: e,
						onPlayButtonClick: n,
						url: o,
						showPlayButton: s
					} = t;
					return c.a.createElement("div", {
						className: e
					}, c.a.createElement(Re, {
						draggable: !1,
						src: o
					}), s && c.a.createElement(Ce.a, {
						className: Te.a.playButton,
						onClick: n
					}))
				}, "Poster", Te.a);
			class Be extends c.a.Component {
				constructor(t) {
					super(t), this.onPlayButtonClick = () => {
						this.setState({
							showVideo: !0
						})
					}, this.willEnter = () => ({
						opacity: 0
					}), this.willLeave = () => ({
						opacity: Object(Se.spring)(0, ve)
					}), this.didLeave = () => {
						this.setState({
							showVideo: !1
						})
					}, this.state = {
						showVideo: !1
					}
				}
				renderVideo() {
					const {
						props: t
					} = this;
					return c.a.createElement("div", {
						className: t.className
					}, c.a.createElement(je, {
						dashUrl: t.dashUrl,
						hlsUrl: t.hlsUrl,
						showControls: t.isUploaded && t.isSelected,
						shouldPause: !t.isSelected || void 0
					}))
				}
				render() {
					const {
						className: t,
						isSelected: e,
						posterUrl: n,
						dashUrl: o,
						hlsUrl: s,
						otherUrl: r
					} = this.props;
					if (!n) return this.renderVideo();
					const {
						showVideo: i
					} = this.state, a = !!(o || s || r);
					return c.a.createElement(Se.TransitionMotion, {
						defaultStyles: [],
						styles: e && i && a ? ke : [],
						willEnter: this.willEnter,
						willLeave: this.willLeave,
						didLeave: this.didLeave
					}, a => c.a.createElement("div", {
						className: t
					}, a.map(t => c.a.createElement(je, {
						key: t.key,
						autoPlay: !0,
						style: t.style,
						otherUrl: r,
						dashUrl: o,
						hlsUrl: s,
						showControls: !0,
						shouldPause: !e || void 0
					})), c.a.createElement(we, {
						url: n,
						showPlayButton: !i || !e,
						onPlayButtonClick: this.onPlayButtonClick
					})))
				}
			}
			var Ie = g.a.wrapped(Be, "Component", Te.a),
				_e = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/index.m.less"),
				Ae = n.n(_e);

			function Ke() {
				return (Ke = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			var Me = function(t, e) {
				var n = {};
				for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.indexOf(o) < 0 && (n[o] = t[o]);
				if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (o = Object.getOwnPropertySymbols(t); s < o.length; s++) e.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[s]) && (n[o[s]] = t[o[s]])
				}
				return n
			};
			var Le = t => {
					const {
						alignCenter: e,
						isSelected: n,
						onCancel: o,
						onRetry: s,
						onRemove: r,
						language: i,
						upload: a,
						mediaAsset: l,
						thumbnail: d
					} = t, u = Me(t, ["alignCenter", "isSelected", "onCancel", "onRetry", "onRemove", "language", "upload", "mediaAsset", "thumbnail"]);
					let h = !1;
					if (a) h = "image" === Object(Ft.f)(a.metadata.mimetype);
					else {
						if (!l) return null;
						h = l.type === A.a.Image || l.type === A.a.AnimatedImage
					}
					const g = a ? a.metadata.height : l.height,
						m = !a || a.status === T.a.SUCCESS,
						f = h && !!g && g < 104,
						b = !g;
					return c.a.createElement("div", Ke({
						className: Object(p.a)(Ae.a.container, {
							[Ae.a.alignCenter]: e,
							[Ae.a.isCompact]: f,
							[Ae.a.isUploaded]: m,
							[Ae.a.isSelected]: n
						})
					}, u), b ? c.a.createElement($t, {
						className: Ae.a.placeholder,
						isImage: h,
						language: i
					}) : h ? c.a.createElement(qt, {
						className: Ae.a.imagePreview,
						url: a ? a.metadata.localUrl : l.imageUrl
					}) : c.a.createElement(Ie, {
						className: Ae.a.videoPreview,
						dashUrl: l ? l.dashUrl : void 0,
						hlsUrl: l ? l.hlsUrl : void 0,
						isSelected: n,
						isUploaded: m,
						otherUrl: a ? a.metadata.localUrl : void 0,
						posterUrl: d ? d.url : l.posterUrl
					}), a && c.a.createElement(Ee, {
						className: Ae.a.statusBar,
						language: i,
						onCancel: o,
						onRemove: r,
						onRetry: s,
						upload: a
					}))
				},
				De = n("./src/reddit/components/RichTextEditor/media/MediaBlock/SelectionHook/index.m.less"),
				Fe = n.n(De);

			function Ne() {
				return (Ne = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			var Pe = function(t, e) {
				var n = {};
				for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.indexOf(o) < 0 && (n[o] = t[o]);
				if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (o = Object.getOwnPropertySymbols(t); s < o.length; s++) e.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[s]) && (n[o[s]] = t[o[s]])
				}
				return n
			};
			const Ue = g.a.div("HiddenDiv", Fe.a);
			var He = t => {
					var {
						elementRef: e
					} = t, n = Pe(t, ["elementRef"]);
					return c.a.createElement(Ue, Ne({}, n, {
						innerRef: e
					}), c.a.createElement("br", null))
				},
				ze = n("./src/reddit/components/MakeGifToggle/index.tsx"),
				We = n("./src/reddit/icons/svgs/ThumbnailSelect/index.tsx"),
				Ve = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				qe = n("./src/reddit/layout/row/Inline/index.tsx"),
				Ge = n("./src/reddit/components/RichTextEditor/Toolbar/index.tsx"),
				Qe = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx"),
				Ye = n("./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.tsx"),
				Ze = n("./src/reddit/components/RichTextEditor/media/MediaBlock/Toolbar/index.m.less"),
				Je = n.n(Ze);
			const Xe = Object(Gt.d)("postCreation.remove"),
				$e = Object(Gt.d)("postCreation.mediaInput.chooseThumbnail"),
				tn = g.a.wrapped(Qe.a, "FormatterButton", Je.a),
				en = Object(Ye.f)(Ve.b),
				nn = Object(Ye.f)(We.a),
				on = g.a.wrapped(qe.a, "ToolbarContent", Je.a);
			var sn = t => {
					const {
						alignCenter: e,
						block: n,
						editorState: o,
						language: s,
						onChange: r,
						showVideoControls: i
					} = t, a = n.getKey(), {
						makeGif: l = !1
					} = Object(A.h)(n) || {};
					return c.a.createElement("div", {
						className: Object(p.a)(Je.a.container, {
							[Je.a.alignCenter]: e
						})
					}, c.a.createElement(on, {
						className: Je.a.content
					}, i && c.a.createElement(ze.a, {
						isCompact: !0,
						key: "make-gif",
						on: l,
						onClick: () => r(Object(A.r)(o, a, {
							makeGif: !l
						}))
					}), i && t.showThumbnailButton && c.a.createElement(tn, {
						Icon: nn,
						onClick: t.onThumbnailButtonClick,
						tooltip: $e(s),
						tooltipBelow: !0
					}), i && c.a.createElement(Ge.c, null), c.a.createElement(tn, {
						Icon: en,
						onClick: () => r(Object(A.d)(o, a)),
						tooltip: Xe(s),
						tooltipBelow: !0
					})))
				},
				rn = n("./src/reddit/components/RichTextEditor/media/MediaBlock/index.m.less"),
				cn = n.n(rn);
			const an = t => "RTE_VIDEO_THUMBNAIL_SELECTOR_".concat(t.getKey()),
				ln = Object(l.a)(t => t.uploads, (t, e) => {
					const n = Object(A.h)(e.block);
					return n && n.uploadInfo && n.uploadInfo.uploadKey
				}, (t, e) => e ? t[e] : void 0),
				dn = Object(a.b)((t, e) => ({
					upload: ln(t, e),
					language: Object(Ut.O)(t),
					isThumbnailSelectorOpen: Object(Pt.a)(t) === an(e.block),
					isRteVideoPosterEnabled: S.d.rteVideoPoster(t)
				}), (t, e) => ({
					onCancelUpload: e => t(Mt.i(e, !1)),
					toggleVideoThumbnailsSelector: () => t(Object(Kt.i)(an(e.block)))
				})),
				un = g.a.div("MediaContainer", cn.a),
				pn = g.a.div("Container", cn.a);
			class hn extends c.a.Component {
				constructor(t) {
					super(t), this.onNativeSelectionChange = () => {
						const t = window.getSelection();
						if (0 === t.rangeCount) return;
						const e = t.getRangeAt(0),
							{
								commonAncestorContainer: n
							} = e;
						this.state.active ? this.rootContainer.contains(n) || this.setState({
							active: !1
						}) : this.rootContainer && this.rootContainer.contains(n) && this.selectBlock(), this.setState({
							isInSelection: Object(D.i)(e, this.rootContainer)
						})
					}, this.selectBlock = () => {
						const t = document.createRange();
						t.selectNodeContents(this.rootContainer);
						const e = window.getSelection();
						e.removeAllRanges(), e.addRange(t), this.setState({
							active: !0
						})
					}, this.isSelected = () => {
						const t = this.props.blockProps.getEditorState().getSelection(),
							e = this.props.block.getKey();
						return this.state.active && Object(A.n)(t, e)
					}, this.onRetryUpload = () => {
						const {
							upload: t
						} = this.props;
						t && this.props.blockProps.onRetryUpload(t.key)
					}, this.onMediaViewClickCapture = t => {
						this.state.active || this.selectBlock()
					}, this.onDragStart = t => {
						t.dataTransfer.effectAllowed = "move", t.dataTransfer.setData(Ht, this.props.block.getKey())
					}, this.onRemove = () => {
						const t = this.props.blockProps.getEditorState();
						this.props.blockProps.onChange(Object(A.d)(t, this.props.block.getKey()))
					}, this.onCancelUpload = async () => {
						this.props.upload && (await this.props.onCancelUpload(this.props.upload.key), this.selectBlock())
					}, this.onToolbarStateChange = t => {
						this.props.blockProps.onChange(t)
					}, this.toggleVideoThumbnailsSelector = () => {
						this.props.toggleVideoThumbnailsSelector()
					}, this.onThumbnailSelect = t => {
						const e = this.props.blockProps.getEditorState(),
							n = this.props.block.getKey();
						let o = Object(A.r)(e, this.props.block.getKey(), {
							thumbnail: t
						});
						o = Object(A.p)(o, n), this.props.blockProps.onChange(o), this.toggleVideoThumbnailsSelector()
					}, this.state = {
						active: !1,
						isInSelection: !1
					}
				}
				shouldComponentUpdate(t, e) {
					return e.active !== this.state.active || e.isInSelection !== this.state.isInSelection || t.block !== this.props.block || t.upload !== this.props.upload || Object(A.n)(t.selection, t.block.getKey())
				}
				componentDidMount() {
					document.addEventListener("selectionchange", this.onNativeSelectionChange);
					const {
						selection: t
					} = this.props;
					t.getHasFocus() && Object(A.n)(t, this.props.block.getKey()) && this.selectBlock(), this.overlayContainer = Dt(!0)
				}
				componentWillUnmount() {
					document.removeEventListener("selectionchange", this.onNativeSelectionChange)
				}
				componentWillReceiveProps(t) {
					const e = t.block.getKey(),
						n = this.props.blockProps.getEditorState(),
						o = n;
					n !== o && this.props.blockProps.onChange(o), !this.state.active && t.selection !== this.props.selection && t.selection.getHasFocus() && Object(A.n)(t.selection, e) && this.selectBlock()
				}
				getToolbarOffset() {
					if (!this.props.blockProps.rteFocusableContentRef || !this.rootContainer) return 0;
					const {
						top: t
					} = this.rootContainer.getBoundingClientRect(), {
						top: e
					} = this.props.blockProps.rteFocusableContentRef.getBoundingClientRect();
					return t - e - 30 - 10
				}
				render() {
					const {
						block: t,
						blockProps: e,
						isRteVideoPosterEnabled: n,
						language: o,
						offsetKey: s,
						upload: r
					} = this.props, i = Object(A.h)(t), a = i ? i.thumbnail : void 0, l = !!r && Object(Ft.l)(r.metadata.mimetype || ""), {
						active: d,
						isInSelection: u
					} = this.state, p = e.editorType === Nt.a.Comment;
					return c.a.createElement(pn, {
						innerRef: t => this.rootContainer = t
					}, d && c.a.createElement(sn, {
						block: t,
						editorState: e.getEditorState(),
						language: o,
						onChange: this.onToolbarStateChange,
						onThumbnailButtonClick: this.toggleVideoThumbnailsSelector,
						showThumbnailButton: n,
						showVideoControls: l,
						alignCenter: !p
					}), c.a.createElement(He, null), c.a.createElement("div", {
						contentEditable: !1,
						"data-offset-key": s
					}, c.a.createElement(un, {
						draggable: !0,
						onDragStart: this.onDragStart,
						innerRef: t => this.mediaContainer = t
					}, c.a.createElement(Le, {
						isSelected: u || d,
						language: o,
						thumbnail: a,
						onCancel: this.onCancelUpload,
						onClickCapture: this.onMediaViewClickCapture,
						onRetry: this.onRetryUpload,
						onRemove: this.onRemove,
						upload: r,
						mediaAsset: i.mediaAsset,
						alignCenter: !p
					})), r && l && c.a.createElement(Lt.a, {
						onSelect: this.onThumbnailSelect,
						onToggleModal: this.toggleVideoThumbnailsSelector,
						videoSource: r.metadata.localUrl,
						videoDuration: r.metadata.videoDuration,
						selected: a,
						isOpen: this.props.isThumbnailSelectorOpen
					})), c.a.createElement(He, null))
				}
			}
			var gn = dn(hn),
				mn = n("./src/reddit/components/RichTextEditor/media/MediaCaption/index.m.less"),
				fn = n.n(mn);
			class bn extends c.a.PureComponent {
				constructor(t) {
					super(t);
					const {
						contentState: e,
						block: n
					} = Object(K.e)(t.children[0]).props;
					this.mediaBlockKey = e.getBlockBefore(n.getKey()).getKey()
				}
				render() {
					const t = this.props.children[0],
						e = Object(K.e)(t),
						{
							block: n,
							contentState: o
						} = e.props,
						s = o.getBlockForKey(this.mediaBlockKey),
						r = Object(A.h)(s);
					if (!r || !(r.mediaAsset || r.uploadInfo && r.uploadInfo.mediaType)) return null;
					const i = !n.getLength();
					return c.a.createElement("div", {
						className: fn.a.wrapper,
						style: {
							"--media-caption-placeholder-text": i ? "'".concat(Object(C.c)("Add caption"), "'") : ""
						}
					}, t)
				}
			}
			const yn = Object(L.Map)({
				[v.j]: {
					element: "div",
					wrapper: c.a.createElement(bn, null)
				}
			});
			var En = (t, e, n) => {
					const s = t.getSelection(),
						r = t.getCurrentContent(),
						i = r.getBlockForKey(s.getAnchorKey()),
						c = r.getBlockForKey(s.getFocusKey()),
						[a, l] = Object(V.e)(r, i, c);
					if (!a || a !== l) return t;
					const {
						blocks: d,
						start: u
					} = a, p = Object(V.g)(i), h = Object(V.g)(c), {
						colCount: g
					} = h;
					d.sort(V.b);
					const m = N()(d, g),
						{
							minCol: f,
							minRow: b,
							maxCol: y,
							maxRow: E
						} = Object(V.f)(p, h),
						S = {
							rowIndex: 0,
							colIndex: 0
						};
					if ("rows" === e) {
						const t = "before" === n ? b : E + 1,
							e = N()(Object(V.l)(g, E - b + 1), g);
						m.splice(t, 0, ...e), S.rowIndex = t
					} else {
						const t = "before" === n ? f : y + 1;
						m.forEach(e => {
							e.splice(t, 0, ...Object(V.l)(y - f + 1, 1))
						}), S.colIndex = t
					}
					const x = Object(V.d)(m),
						C = r.getBlocksAsArray(),
						O = U()(x),
						T = [...C.slice(0, u), ...O, ...C.slice(u + d.length)],
						v = r.merge({
							blockMap: o.BlockMapBuilder.createFromArray(T)
						}),
						k = J()(O, t => Object(V.h)(S, Object(V.g)(t))),
						j = Object(V.o)(s, k, k);
					let R = o.EditorState.push(t, v, Q.e);
					return R = o.EditorState.forceSelection(R, j)
				},
				Sn = n("./node_modules/lodash/clamp.js"),
				xn = n.n(Sn),
				Cn = n("./src/reddit/components/RichTextEditor/helpers/sliceContiguousBlocks.ts");
			var On = function(t, e) {
				let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "preserve";
				const s = t.getSelection(),
					r = t.getCurrentContent(),
					i = "up" === e || "left" === e ? s.getStartKey() : s.getEndKey(),
					c = r.getBlockForKey(i);
				if (!Object(v.v)(c.getType())) return;
				const a = Object(V.g)(c),
					{
						colCount: l,
						colIndex: d,
						rowIndex: u
					} = a,
					p = r.getBlocksAsArray(),
					h = Object(Cn.a)(r, c);
				if (!h) return;
				let g = u,
					m = d;
				switch (e) {
					case "up":
						g--;
						break;
					case "down":
						g++;
						break;
					case "left":
						--m < 0 && (g--, m = l - 1);
						break;
					case "right":
						++m >= l && (g++, m = 0)
				}
				const f = {
					rowIndex: g,
					colIndex: m
				};
				let b = i;
				const y = J()(h.blocks, t => Object(V.h)(Object(V.g)(t), f));
				if (y) b = y.getKey();
				else {
					const t = Object(V.c)(f, a) < 0 ? h.start - 1 : h.start + h.blocks.length;
					0 <= t && t < p.length && (b = p[t].getKey())
				}
				const E = r.getBlockForKey(b);
				let S = 0;
				"preserve" === n ? S = xn()(s.getFocusOffset(), 0, E.getLength()) : "end" === n && (S = E.getLength());
				const x = s.merge({
					anchorKey: b,
					focusKey: b,
					focusOffset: S,
					anchorOffset: S
				});
				return s !== x ? o.EditorState.forceSelection(t, x) : void 0
			};
			const Tn = (t, e) => {
					const n = e.getCurrentContent(),
						o = e.getSelection(),
						s = n.getBlockForKey(o.getFocusKey()),
						[r] = Object(V.e)(n, s, s);
					if (!r) return;
					const i = Object(V.g)(s);
					let c;
					return (c = i.colIndex === i.colCount - 1 && i.rowIndex === r.blocks.length / i.colCount - 1 && !t.shiftKey && o.getFocusKey() === o.getAnchorKey() ? En(e, "rows", "after") : On(e, t.shiftKey ? "left" : "right", "end")) ? (t.preventDefault(), c) : void 0
				},
				vn = (t, e) => {
					if (t.shiftKey) return;
					const n = On(e, "up");
					return n && t.preventDefault(), n
				},
				kn = (t, e) => {
					if (t.shiftKey) return;
					const n = On(e, "down");
					return n && t.preventDefault(), n
				};
			class jn {
				constructor() {
					this.lastRowInsertionState = null
				}
				undoRowInsertion(t) {
					const e = o.EditorState.undo(t);
					return On(e, "down", "end") || e
				}
				isSelectionInLastRow(t) {
					const e = t.getCurrentContent(),
						n = t.getSelection(),
						o = e.getBlockForKey(n.getFocusKey()),
						[s] = Object(V.e)(e, o, o);
					if (!s) return !1;
					const r = Object(V.g)(s.blocks[0]).colCount,
						i = s.blocks.length / r;
					return Object(V.g)(o).rowIndex === i - 1
				}
				insertNewRow(t) {
					const e = t.getSelection();
					let n = En(t, "rows", "after");
					return n = o.EditorState.forceSelection(n, e), n = On(n, "down") || n, this.lastRowInsertionState = n, n
				}
				handle(t) {
					return t.getSelection().isCollapsed() ? t === this.lastRowInsertionState ? this.undoRowInsertion(t) : this.isSelectionInLastRow(t) ? this.insertNewRow(t) : On(t, "down") || t : t
				}
			}
			const Rn = (t, e) => {
				const n = t.getSelection();
				if (n.isCollapsed() || n.getStartKey() === n.getEndKey()) return;
				const s = t.getCurrentContent(),
					r = s.getBlockForKey(n.getAnchorKey()),
					i = s.getBlockForKey(n.getFocusKey()),
					[c, a] = Object(V.e)(s, r, i);
				if (c && c === a) {
					const r = Object(V.o)(n, i, i, !1),
						c = W.b(s, r, e);
					return o.EditorState.push(t, c, Q.d)
				}
			};
			var wn = n("./node_modules/lodash/forEach.js"),
				Bn = n.n(wn);
			const In = (t, e) => e ? t[0] : t[t.length - 1];
			var _n = (t, e) => {
					return t.getSelection().isCollapsed() ? ((t, e) => {
						const n = t.getSelection(),
							s = e.getSelection();
						if (!n.isCollapsed() || s.isCollapsed() || 0 !== s.getStartOffset() || s.getStartKey() !== n.getStartKey()) return t;
						const r = t.getCurrentContent(),
							i = e.getCurrentContent(),
							c = r.getBlockForKey(n.getAnchorKey());
						if (!Object(v.v)(c.getType())) return t;
						const {
							rowIndex: a,
							colIndex: l
						} = Object(V.g)(c);
						if (0 !== a || 0 !== l) return t;
						const d = r.getBlockMap(),
							u = i.getBlockMap();
						if (d.size >= u.size) return t;
						const p = r.getBlockAfter(n.getAnchorKey()),
							h = i.getBlockAfter(s.getEndKey());
						if (p && p !== h) return t;
						const g = c.merge({
								type: v.n,
								data: Object(L.Map)({})
							}),
							m = r.merge({
								blockMap: d.set(c.getKey(), g)
							});
						return o.EditorState.set(t, {
							currentContent: m
						})
					})(t, e) : ((t, e) => {
						const n = t.getSelection();
						if (n.isCollapsed()) return t;
						if (e.getSelection() === n) return t;
						if (n.getFocusKey() === n.getAnchorKey()) return t;
						const s = t.getCurrentContent(),
							r = s.getBlockForKey(n.getAnchorKey()),
							i = s.getBlockForKey(n.getFocusKey()),
							[c, a] = Object(V.e)(s, r, i);
						if (!c && !a) return t;
						let l = t;
						if (c !== a) {
							const e = n.getIsBackward(),
								s = Object(V.o)(n, c ? In(c.blocks, !e) : null, a ? In(a.blocks, e) : null, e);
							n !== s && (l = o.EditorState.forceSelection(t, s))
						} else if (c && a && c === a) {
							const e = Object(V.g)(r),
								c = Object(V.g)(i),
								d = s.getBlocksAsArray(),
								{
									start: u,
									blocks: p
								} = a,
								h = p[0],
								g = Object(V.g)(h);
							if (0 !== g.colIndex || 0 !== g.rowIndex) throw new Error("First table block must always has [0, 0] coordinate!");
							const m = Object(V.b)(i, r) < 0,
								f = Object(V.k)(e, c),
								b = [],
								y = [];
							Bn()(p, t => {
								const e = Object(V.g)(t);
								f(e.rowIndex, e.colIndex) ? b.push(t) : t !== h && y.push(t)
							});
							const E = b[0] === h;
							b.sort(V.b);
							const S = [...d.slice(0, u), ...E ? [] : [h], ...b, ...y, ...d.slice(u + p.length)],
								x = In(b, !m),
								C = In(b, m),
								O = Object(V.o)(n, x, C, m),
								T = s.merge({
									blockMap: o.BlockMapBuilder.createFromArray(S),
									selectionAfter: O
								});
							l = o.EditorState.set(t, {
								currentContent: T
							}), O !== n && (l = o.EditorState.forceSelection(l, O))
						}
						return l
					})(t, e)
				},
				An = (n("./node_modules/core-js/modules/es6.regexp.to-string.js"), n("./src/reddit/components/RichTextEditor/table/Renderer/index.m.less")),
				Kn = n.n(An);
			const Mn = g.a.div("Cell", Kn.a),
				Ln = g.a.div("Row", Kn.a),
				Dn = g.a.div("Table", Kn.a),
				Fn = (t, e) => {
					if (!e || !t.contains(e)) return;
					let n = e;
					for (; n && n !== t;) {
						if (n instanceof HTMLElement && n.hasAttribute("data-row")) return n;
						n.parentElement && (n = n.parentElement)
					}
				},
				Nn = function(t) {
					let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
						n = t,
						o = e;
					for (; n && o > 0;) {
						if (n instanceof HTMLElement && n.dataset.table) return n;
						n.parentElement && (n = n.parentElement), o--
					}
				},
				Pn = t => {
					const {
						dataset: e
					} = t;
					if ("string" == typeof e.row && "string" == typeof e.col) return {
						rowIndex: +e.row,
						colIndex: +e.col
					}
				},
				Un = t => {
					const e = window.getSelection(),
						{
							focusNode: n,
							anchorNode: o,
							rangeCount: s
						} = e;
					if (n !== o && s && t) {
						const n = e.getRangeAt(0);
						return Object(D.i)(n, t) && !t.contains(n.commonAncestorContainer)
					}
					return !1
				},
				Hn = t => {
					const e = c.a.Children.toArray(t),
						n = Object(K.e)(e[0]),
						{
							selection: o,
							contentState: s,
							block: r
						} = n.props,
						{
							colCount: i
						} = Object(V.g)(r);
					e.sort((t, e) => Object(V.b)(Object(K.c)(t), Object(K.c)(e)));
					const a = N()(e, i);
					let l, d, u = !1;
					if (o.getAnchorKey() !== o.getFocusKey()) {
						const t = s.getBlocksAsArray(),
							n = s.getBlockForKey(o.getStartKey()),
							i = s.getBlockForKey(o.getEndKey()),
							c = t.indexOf(n),
							a = t.indexOf(i),
							p = t.indexOf(r),
							h = p + e.length - 1;
						c < p && p < a || c < h && h < a ? u = !0 : p <= c && a <= h && (d = Object(V.g)(o.getIsBackward() ? i : n), l = Object(V.g)(o.getIsBackward() ? n : i))
					}
					return {
						rows: a,
						anchorCell: d,
						focusCell: l,
						isSelectWholeTable: u
					}
				};
			class zn extends c.a.Component {
				constructor(t) {
					super(t), this.tableElem = null, this.onMouseDown = t => {
						if (!this.tableElem || t.nativeEvent.detail < 2) return;
						const e = window.getSelection(),
							n = e.rangeCount ? e.getRangeAt(0) : null,
							o = Fn(this.tableElem, e.focusNode);
						if (n && o)
							if (2 === t.nativeEvent.detail && e.isCollapsed) {
								const s = n.cloneRange();
								s.setEndAfter(o), s.toString() || (t.preventDefault(), e.selectAllChildren(o))
							} else t.nativeEvent.detail >= 3 && (e.selectAllChildren(o), t.preventDefault())
					}, this.onNativeSelectionChange = () => {
						const t = this.tableElem;
						if (!t) return;
						const e = window.getSelection();
						if (e.anchorNode === e.focusNode) return void this.resetSelection();
						const n = Fn(t, e.anchorNode),
							o = Fn(t, e.focusNode);
						n && n === o ? this.resetSelection() : n && o ? this.setCellsRange(n, o) : n || o ? this.selectWholeTable() : Un(t) ? this.selectWholeTable() : this.resetSelection()
					}, this.resetSelection = () => {
						(this.state.anchorCell || this.state.focusCell || this.state.isSelectWholeTable) && this.setState({
							isSelectWholeTable: !1,
							focusCell: void 0,
							anchorCell: void 0
						})
					}, this.setCellsRange = (t, e) => {
						const n = Pn(e),
							o = Pn(t);
						Object(V.h)(n, this.state.focusCell) && Object(V.h)(o, this.state.anchorCell) && !this.state.isSelectWholeTable || this.setState({
							focusCell: n,
							anchorCell: o,
							isSelectWholeTable: !1
						})
					}, this.selectWholeTable = () => {
						!this.state.focusCell && this.state.isSelectWholeTable || this.setState({
							focusCell: void 0,
							isSelectWholeTable: !0
						})
					}, this.state = Hn(t.children)
				}
				componentDidMount() {
					document.addEventListener("selectionchange", this.onNativeSelectionChange)
				}
				componentWillUnmount() {
					document.removeEventListener("selectionchange", this.onNativeSelectionChange)
				}
				componentWillReceiveProps(t) {
					t.children !== this.props.children && this.setState(Hn(t.children))
				}
				render() {
					const {
						rows: t,
						anchorCell: e,
						focusCell: n,
						isSelectWholeTable: o
					} = this.state;
					let s;
					o ? s = (t, e) => !0 : e && n && !Object(V.h)(e, n) && (s = Object(V.k)(e, n));
					const r = t[0].map(t => Object(V.g)(Object(K.e)(t).props.block).alignment),
						i = t.map((t, e) => c.a.createElement(Ln, {
							key: e
						}, t.map((t, n) => c.a.createElement(Mn, {
							"data-row": e,
							"data-col": n,
							"data-selected": !!s && s(e, n),
							key: n,
							style: {
								"--cell-text-alignment": r[n] ? V.a[r[n]] : void 0
							}
						}, t))));
					return c.a.createElement(Dn, {
						className: s ? Kn.a.isFakeSelectionActive : void 0,
						innerRef: t => this.tableElem = t,
						onMouseDown: this.onMouseDown,
						"data-table": !0
					}, i)
				}
			}
			const Wn = Object(L.Map)({
				[v.l]: {
					element: "div",
					wrapper: c.a.createElement(zn, null)
				}
			});
			var Vn = n("./node_modules/lodash/isEqual.js"),
				qn = n.n(Vn),
				Gn = n("./src/reddit/components/RichTextEditor/Tooltip/index.tsx"),
				Qn = n("./src/reddit/icons/svgs/FormattingAlignCenter/index.m.less"),
				Yn = n.n(Qn);
			var Zn = t => c.a.createElement("svg", {
					className: Object(p.a)(Yn.a.icon, t.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, c.a.createElement("g", {
					fill: "inherit",
					fillRule: "nonzero"
				}, c.a.createElement("path", {
					d: "M3.5 11h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1zM7.42 16h5.08c.55 0 1-.45 1-1s-.45-1-1-1H7.42c-.56 0-1 .45-1 1s.44 1 1 1zM3.5 6h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1z"
				}))),
				Jn = n("./src/reddit/icons/svgs/FormattingAlignLeft/index.m.less"),
				Xn = n.n(Jn);
			var $n = t => c.a.createElement("svg", {
					className: Object(p.a)(Xn.a.icon, t.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, c.a.createElement("g", {
					fill: "inherit",
					fillRule: "nonzero"
				}, c.a.createElement("path", {
					d: "M3.5 11h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1zM3.5 16h5.4c.54 0 1-.45 1-1s-.46-1-1-1H3.5c-.55 0-1 .45-1 1s.45 1 1 1zM3.5 6h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1z"
				}))),
				to = n("./src/reddit/icons/svgs/FormattingAlignRight/index.m.less"),
				eo = n.n(to);
			var no = t => c.a.createElement("svg", {
					className: Object(p.a)(eo.a.icon, t.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, c.a.createElement("g", {
					fill: "inherit",
					fillRule: "nonzero"
				}, c.a.createElement("path", {
					d: "M3.5 11h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1zM11.5 16h5c.55 0 1-.45 1-1s-.45-1-1-1h-5c-.55 0-1 .45-1 1s.45 1 1 1zM3.5 6h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1z"
				}))),
				oo = n("./src/reddit/icons/svgs/FormattingDeleteRow/index.m.less"),
				so = n.n(oo);
			var ro = t => c.a.createElement("svg", {
					className: Object(p.a)(so.a.icon, t.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, c.a.createElement("g", {
					fill: "inherit",
					fillRule: "nonzero",
					transform: "vertical" === t.orientation ? "rotate(90, 10, 10)" : ""
				}, c.a.createElement("path", {
					d: "M3 3c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V3zM2 3v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2z"
				}), c.a.createElement("path", {
					d: "M2 15h16v1H2M2 4h16v1H2M7.17 11.4l4.24-4.23c.4-.4 1.04-.4 1.43 0 .4.4.4 1.03 0 1.42L8.6 12.82c-.4.4-1.04.4-1.43 0-.4-.4-.4-1.03 0-1.42z"
				}), c.a.createElement("path", {
					d: "M8.6 7.17l4.23 4.24c.4.4.4 1.04 0 1.43-.4.4-1.03.4-1.42 0L7.18 8.6c-.4-.4-.4-1.04 0-1.43.4-.4 1.03-.4 1.42 0z"
				}))),
				io = n("./src/reddit/icons/svgs/FormattingInsertRow/index.m.less"),
				co = n.n(io);
			const ao = {
				up: "rotate(180 10 10)",
				down: "",
				left: "rotate(90 10 10)",
				right: "rotate(-90 10 10)"
			};
			var lo = t => c.a.createElement("svg", {
					className: Object(p.a)(co.a.icon, t.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, c.a.createElement("g", {
					fill: "inherit",
					fillRule: "nonzero",
					transform: ao[t.orientation || "down"]
				}, c.a.createElement("path", {
					d: "M17 17c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v14zm1 0V3c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2z"
				}), c.a.createElement("path", {
					d: "M18 6H2V5h16M13 13H7c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1z"
				}), c.a.createElement("path", {
					d: "M9 15V9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1z"
				}))),
				uo = n("./src/reddit/models/RichTextJson/index.ts");
			var po = function(t) {
				arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				const e = t.getSelection(),
					n = t.getCurrentContent(),
					s = n.getBlockForKey(e.getAnchorKey()),
					r = n.getBlockForKey(e.getFocusKey()),
					[i, c] = Object(V.e)(n, s, r);
				if (i && i === c) {
					const {
						blocks: n
					} = i;
					n.sort(V.b);
					const s = Object(V.o)(e, n[0], G()(n));
					return X(o.EditorState.set(t, {
						selection: s
					}), "rows")
				}
			};
			var ho = (t, e) => {
					const n = t.getSelection(),
						s = t.getCurrentContent(),
						r = s.getBlockForKey(n.getAnchorKey()),
						i = s.getBlockForKey(n.getFocusKey()),
						[c, a] = Object(V.e)(s, r, i);
					if (!c || c !== a) return t;
					const l = Object(V.g)(r),
						d = Object(V.g)(i),
						{
							minCol: u,
							maxCol: p
						} = Object(V.f)(l, d),
						h = c.blocks.map(t => {
							const {
								colIndex: n
							} = Object(V.g)(t);
							return u <= n && n <= p ? Object(V.m)(t, {
								alignment: e
							}) : t
						}),
						g = s.getBlockMap(),
						m = s.merge({
							blockMap: g.merge(o.BlockMapBuilder.createFromArray(h)),
							selectionAfter: n,
							selectionBefore: n
						});
					return o.EditorState.push(t, m, Q.b)
				},
				go = n("./src/reddit/components/RichTextEditor/table/Toolbar/index.m.less"),
				mo = n.n(go);

			function fo() {
				return (fo = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			const bo = Object(Gt.d)("postCreation.tableToolbar.alignLeft"),
				yo = Object(Gt.d)("postCreation.tableToolbar.alignCenter"),
				Eo = Object(Gt.d)("postCreation.tableToolbar.alignRight"),
				So = Object(Gt.d)("postCreation.tableToolbar.insertColumnBefore"),
				xo = Object(Gt.d)("postCreation.tableToolbar.insertColumnAfter"),
				Co = Object(Gt.d)("postCreation.tableToolbar.deleteColumn"),
				Oo = Object(Gt.d)("postCreation.tableToolbar.insertRowAbove"),
				To = Object(Gt.d)("postCreation.tableToolbar.insertRowBelow"),
				vo = Object(Gt.d)("postCreation.tableToolbar.deleteRow"),
				ko = Object(Gt.d)("postCreation.tableToolbar.deleteTable"),
				jo = (t, e) => n => c.a.createElement(t, fo({}, e, n)),
				Ro = Object(Ye.f)(lo),
				wo = jo(Ro, {
					orientation: "up"
				}),
				Bo = jo(Ro, {
					orientation: "right"
				}),
				Io = jo(Ro, {
					orientation: "left"
				}),
				_o = Object(Ye.f)(ro),
				Ao = jo(_o, {
					orientation: "vertical"
				}),
				Ko = Object(Ye.f)(Zn),
				Mo = Object(Ye.f)($n),
				Lo = Object(Ye.f)(no),
				Do = Object(Ye.f)(Ve.b),
				Fo = g.a.wrapped(qe.a, "ToolbarContent", mo.a),
				No = t => c.a.createElement(Qe.a, fo({}, t, {
					className: Object(p.a)(mo.a.formatterButton, t.className),
					tooltipContentClass: mo.a.tooltip
				}));
			var Po = t => {
					const {
						editorState: e,
						language: n,
						onChange: o
					} = t;
					return c.a.createElement(Fo, null, c.a.createElement(No, {
						Icon: Mo,
						onClick: () => o(ho(e, uo.e)),
						tooltip: bo(n)
					}), c.a.createElement(No, {
						Icon: Ko,
						onClick: () => o(ho(e, uo.d)),
						tooltip: yo(n)
					}), c.a.createElement(No, {
						Icon: Lo,
						onClick: () => o(ho(e, uo.f)),
						tooltip: Eo(n)
					}), c.a.createElement(Ge.c, null), c.a.createElement(No, {
						Icon: Io,
						onClick: () => o(En(e, "columns", "before")),
						tooltip: So(n)
					}), c.a.createElement(No, {
						Icon: Bo,
						onClick: () => o(En(e, "columns", "after")),
						tooltip: xo(n)
					}), c.a.createElement(No, {
						Icon: Ao,
						onClick: () => o(X(e, "columns")),
						tooltip: Co(n)
					}), c.a.createElement(Ge.c, null), c.a.createElement(No, {
						Icon: wo,
						onClick: () => o(En(e, "rows", "before")),
						tooltip: Oo(n)
					}), c.a.createElement(No, {
						Icon: Ro,
						onClick: () => o(En(e, "rows", "after")),
						tooltip: To(n)
					}), c.a.createElement(No, {
						Icon: _o,
						onClick: () => o(X(e, "rows")),
						tooltip: vo(n)
					}), c.a.createElement(Ge.c, null), c.a.createElement(No, {
						Icon: Do,
						onClick: () => o(po(e) || e),
						tooltip: ko(n)
					}))
				},
				Uo = n("./src/reddit/components/RichTextEditor/table/ToolbarController/index.m.less"),
				Ho = n.n(Uo);
			const zo = 20,
				Wo = g.a.div("ActionButton", Ho.a),
				Vo = g.a.div("ToolbarWrapper", Ho.a),
				qo = t => {
					const e = {};
					if (!t || !document.documentElement) return e;
					const n = t.left - 154.5,
						o = t.left + 154.5 - document.documentElement.clientWidth;
					return n < 0 ? e.left = -n + zo + 2 : o > 0 && (e.left = -o + zo - 2), e
				},
				Go = t => {
					t.preventDefault(), t.stopPropagation()
				};
			class Qo extends i.Component {
				constructor(t) {
					super(t), this.containerElem = null, this.setContainerRef = t => this.containerElem = t, this.onResize = t => {
						this.hideToolbar(), this.state.tooltipPosition && this.updateForCurrentSelection()
					}, this.onDocumentClick = t => {
						this.state.isToolbarActive && this.containerElem && (this.containerElem.contains(t.target) || this.hideToolbar())
					}, this.onNativeSelectionChange = () => {
						this.updateForCurrentSelection()
					}, this.updateForCurrentSelection = () => {
						const t = window.getSelection();
						if (!t.rangeCount) return void this.hideActionButton();
						const e = t.getRangeAt(0).commonAncestorContainer,
							{
								rteDomRef: n
							} = this.props;
						if (!n.contains(e)) return void this.hideActionButton();
						const o = Nn(e);
						if (!o) return void this.hideActionButton();
						const s = Fn(o, t.anchorNode);
						if (!s) return void this.hideActionButton();
						const r = Fn(o, t.focusNode);
						r ? this.updateActionButtonPosition(s, r) : this.hideActionButton()
					}, this.updateActionButtonPosition = (t, e) => {
						const n = t.getBoundingClientRect(),
							o = e.getBoundingClientRect(),
							s = {
								top: Math.min(n.top, o.top),
								left: Math.max(n.right, o.right) - zo
							};
						qn()(this.state.tooltipPosition, s) || this.setState({
							tooltipPosition: s
						}), this.hideToolbar()
					}, this.hideActionButton = () => {
						this.hideToolbar(), this.state.tooltipPosition && this.setState({
							tooltipPosition: null
						})
					}, this.hideToolbar = () => {
						this.state.isToolbarActive && this.setState({
							isToolbarActive: !1
						})
					}, this.onActionButtonClick = t => {
						this.setState(t => ({
							isToolbarActive: !t.isToolbarActive
						})), Go(t)
					}, this.state = {
						isToolbarActive: !1,
						tooltipPosition: null
					}, this.api = {
						hideActionButton: this.hideActionButton
					}
				}
				componentDidMount() {
					const {
						onSetApi: t
					} = this.props;
					document.addEventListener("selectionchange", this.onNativeSelectionChange), document.addEventListener("click", this.onDocumentClick), window.addEventListener("resize", this.onResize), t && t(this.api)
				}
				componentWillUnmount() {
					const {
						onSetApi: t
					} = this.props;
					document.removeEventListener("selectionchange", this.onNativeSelectionChange), document.removeEventListener("click", this.onDocumentClick), window.removeEventListener("resize", this.onResize), t && t(null)
				}
				componentWillReceiveProps(t) {
					const e = t.editorState.getSelection(),
						n = this.props.editorState.getSelection();
					e.getHasFocus() && Object(v.v)(o.RichUtils.getCurrentBlockType(t.editorState)) ? e !== n && this.hideToolbar() : this.hideActionButton()
				}
				render() {
					const t = !this.props.readOnly && this.state.isToolbarActive,
						{
							tooltipPosition: e
						} = this.state;
					return c.a.createElement("div", {
						ref: this.setContainerRef
					}, c.a.createElement(Gn.b, {
						targetPosition: e
					}, c.a.createElement(Wo, {
						className: t ? Ho.a.isPressed : void 0,
						onClick: this.onActionButtonClick,
						onMouseDown: Go,
						onMouseMove: Go
					}, t ? c.a.createElement(Vo, {
						style: qo(e)
					}, c.a.createElement(Po, {
						onChange: this.props.onChange,
						editorState: this.props.editorState,
						language: this.props.language
					})) : null)))
				}
			}
			var Yo = n("./src/reddit/components/RichTextEditor/editorStateTransforms.ts");

			function Zo() {
				return (Zo = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}

			function Jo() {
				return new Map
			}
			const Xo = c.a.createContext(Jo());

			function $o(t) {
				class e extends c.a.Component {
					constructor() {
						super(...arguments), this.elementRef = null, this.updateElementRef = t => {
							const {
								registry: e
							} = this.props;
							this.elementRef = t, t ? e.set(this.props.entityKey, t) : e.delete(this.props.entityKey)
						}
					}
					componentWillReceiveProps(t) {
						const {
							registry: e
						} = this.props;
						this.props.entityKey !== t.entityKey && this.elementRef && (e.get(this.props.entityKey) === this.elementRef && e.delete(this.props.entityKey), e.set(t.entityKey, this.elementRef))
					}
					render() {
						return c.a.createElement("span", {
							ref: this.updateElementRef
						}, c.a.createElement(t, this.props))
					}
				}
				return t => c.a.createElement(Xo.Consumer, null, n => c.a.createElement(e, Zo({}, t, {
					registry: n
				})))
			}
			var ts = n("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				es = n("./src/reddit/components/RichTextEditor/emotes/decorator.m.less"),
				ns = n.n(es);
			const os = {
					strategy: ts.e,
					component: $o(t => {
						const {
							contentState: e
						} = t, n = Object(ts.i)(e), o = e.getEntity(t.entityKey), {
							id: s,
							emoji: r,
							sticker: i
						} = o.getData(), a = n ? i : r;
						return c.a.createElement("span", {
							className: Object(p.a)(ns.a.emote, {
								[ns.a.sticker]: n
							}),
							title: ":".concat(s, ":"),
							style: {
								backgroundImage: "url(".concat(a.path, ")"),
								height: a.y,
								width: a.x
							}
						}, t.children)
					})
				},
				ss = () => os;
			var rs = n("./src/higherOrderComponents/makeAsync.tsx"),
				is = Object(rs.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("EmotesTooltip").then(n.bind(null, "./src/reddit/components/RichTextEditor/emotes/tooltip.tsx")).then(t => t.default)
				});
			const cs = Object(rs.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GifTooltip").then(n.bind(null, "./src/reddit/components/RichTextEditor/media/GifTooltip/index.tsx")).then(t => t.default)
			});
			var as = function(t) {
				return c.a.createElement(cs, t)
			};
			const ls = new Set([M.a.LINK]);
			var ds = n("./src/reddit/components/RichTextEditor/entity/link/helpers.tsx"),
				us = n("./src/reddit/components/RichTextEditor/entity/link/decorator.m.less"),
				ps = n.n(us);
			const hs = g.a.a("RegularLink", ps.a),
				gs = {
					strategy: ds.a,
					component: $o(t => {
						const e = t.contentState.getEntity(t.entityKey),
							{
								url: n
							} = e.getData();
						return c.a.createElement(hs, {
							href: n
						}, t.children)
					})
				},
				ms = () => gs;
			n("./node_modules/core-js/modules/es6.regexp.replace.js"), n("./node_modules/core-js/modules/es6.regexp.match.js");
			var fs = n("./src/lib/linkMatchers/index.ts");
			const bs = (t, e) => {
					if (e.getType() === v.f) return [];
					return (t.match(e.getText()) || []).filter(t => ((t, e) => {
						let {
							index: n,
							lastIndex: o
						} = e;
						for (let s = n; s < o; s++) {
							if (t.getInlineStyleAt(s).contains(v.k.MONOSPACE)) return !1
						}
						return !0
					})(e, t))
				},
				ys = (t, e, n, s, r, i) => {
					const c = t.getBlockForKey(e),
						a = o.SelectionState.createEmpty(e),
						l = [],
						d = new Set;
					let u = t;
					const p = n === M.a.USER_MENTION ? M.a.USER_LINK : n,
						h = (t, e, o) => {
							let s = null;
							for (let r = t; r < e; r++) {
								const t = c.getEntityAt(r),
									e = t && u.getEntity(t);
								if (e) {
									if (e.getType() !== n) return;
									s || d.has(t) || (s = t)
								}
							}
							if (s) {
								u.getEntity(s).getData().url !== o && (u = u.mergeEntityData(s, {
									url: o
								}))
							}
							return s || (t => (u = u.createEntity(p, "MUTABLE", {
								url: t
							})).getLastCreatedEntityKey())(o)
						},
						g = (t, e, n) => {
							const s = a.merge({
								anchorOffset: t,
								focusOffset: e
							});
							u = o.Modifier.applyEntity(u, s, n)
						},
						f = (t, e) => g(t, e, null),
						b = u.getBlockForKey(e);
					bs(s, b).forEach((t, s) => {
						let {
							index: c,
							lastIndex: p,
							url: f
						} = t;
						const b = h(c, p, f);
						b && (n === M.a.USER_MENTION ? (((t, n, s) => {
							const c = u && u.getBlockForKey(e),
								l = c && c.getText().substr(t, n);
							if (l && l.replace(m.d.mention, "") && l.startsWith(m.d.mention) && m.c.test(l.replace(m.d.mention, ""))) {
								const e = a.merge({
										anchorOffset: t,
										focusOffset: t + m.d.mention.length
									}),
									c = a.merge({
										anchorOffset: t,
										focusOffset: n + m.d.mention.length
									}),
									l = a.merge({
										anchorOffset: n + m.d.mention.length,
										focusOffset: n + m.d.mention.length
									});
								u = Object(W.b)(u, e, m.d.profile), u = o.Modifier.applyEntity(u, c, s), r && i && i(o.EditorState.forceSelection(r, l))
							}
						})(c + s, p + s, b), l.push([c + s, p + s + 1])) : (g(c, p, b), l.push([c, p])), d.add(b))
					});
					let y = 0;
					return b.findEntityRanges(t => {
						const e = t.getEntity();
						return !!e && u.getEntity(e).getType() === n
					}, (t, e) => {
						if (y >= l.length) return void f(t, e);
						const [n, o] = l[y];
						e <= n ? f(t, e) : (t < n && f(t, n - 1), e > o && f(o, e), y++)
					}), u
				},
				Es = (t, e) => {
					const n = t.getCurrentContent(),
						s = e.getCurrentContent();
					if (n === s) return t;
					const r = n.getBlockMap(),
						i = s.getBlockMap();
					let c = n;
					return r.forEach((e, n) => {
						if (n) {
							if (e === i.get(n)) return;
							c = ys(c, n, M.a.SUBREDDIT_LINK, fs.f), c = ys(c, n, M.a.USER_LINK, fs.i), c = ys(c, n, M.a.USER_MENTION, fs.d, t, e => t = e)
						}
					}), t.getCurrentContent() === c ? t : (c = c.merge({
						selectionAfter: t.getCurrentContent().getSelectionAfter(),
						selectionBefore: t.getCurrentContent().getSelectionBefore()
					}), o.EditorState.set(t, {
						currentContent: c
					}))
				};
			var Ss = t => {
				return !!t.getCurrentContent().getBlockMap().filter(t => !!t && t.getType() === v.a).size
			};
			n("./node_modules/core-js/modules/es6.regexp.constructor.js");
			const xs = " ".repeat(4),
				Cs = new RegExp("^ {1,".concat(4, "}|\\t")),
				Os = new Set([v.b.CODE_BLOCK]),
				Ts = (t, e) => {
					const n = e.getCurrentContent(),
						s = e.getSelection(),
						r = t.shiftKey;
					let i = n,
						c = s.getAnchorOffset(),
						a = s.getFocusOffset();
					if (Object(Y.a)(n, s, (t, e) => {
							const n = t.getType();
							if ("paragraph" === n || !Os.has(n)) return !1;
							let l = null;
							const d = t.getText(),
								u = o.SelectionState.createEmpty(e);
							if (r) {
								const t = d.match(Cs);
								if (t) {
									const e = t[0].length;
									i = W.b(i, u.merge({
										focusOffset: e
									}), ""), l = -e
								}
							} else i = W.a(i, s.isCollapsed() ? s : u, xs), l = 4;
							null !== l && (e === s.getAnchorKey() && (c += l), e === s.getFocusKey() && (a += l))
						}), i !== n) return i = i.merge({
						selectionAfter: s.merge({
							anchorOffset: c,
							focusOffset: a
						})
					}), t.preventDefault(), o.EditorState.push(e, i, r ? "remove-range" : "insert-characters")
				},
				vs = (t, e) => (t => {
					const e = t.getSelection(),
						n = t.getCurrentContent();
					if (!e.isCollapsed()) return $(t);
					if (0 === e.getStartOffset()) {
						const o = n.getBlockForKey(e.getEndKey());
						if (Object(v.v)(o.getType())) return t; {
							const e = n.getBlockBefore(o.getKey());
							if (e && Object(v.v)(e.getType())) return t
						}
					}
				})(t) || ((t, e) => {
					const n = t.getSelection(),
						s = t.getCurrentContent();
					if (n.isCollapsed() && 0 === n.getStartOffset()) {
						const r = s.getBlockForKey(n.getEndKey());
						if (Object(v.o)(r.getType())) return Object(A.d)(t, r.getKey());
						if (Object(v.u)(r.getType())) {
							const e = s.getBlockBefore(r.getKey());
							return o.EditorState.forceSelection(t, Object(K.b)(e))
						}
						if (!Object(A.q)(e) && Object(K.g)(r)) {
							const e = s.getBlockBefore(r.getKey());
							if (e && Object(v.o)(e.getType())) return t = o.EditorState.push(t, Object(K.i)(s, r.getKey()), Q.f), o.EditorState.forceSelection(t, Object(K.b)(e))
						}
					}
				})(t, e),
				ks = (t, e) => (t => {
					const e = t.getSelection(),
						n = t.getCurrentContent();
					if (!e.isCollapsed()) return $(t); {
						const o = n.getBlockForKey(e.getEndKey());
						if (e.getEndOffset() === o.getLength()) {
							if (Object(v.v)(o.getType())) return t; {
								const e = n.getBlockAfter(o.getKey());
								if (e && Object(v.v)(e.getType())) return t
							}
						}
					}
				})(t) || ((t, e) => {
					const n = t.getSelection(),
						s = t.getCurrentContent();
					if (!n.isCollapsed()) return;
					const r = s.getBlockForKey(n.getEndKey());
					if (n.getEndOffset() === r.getLength()) {
						if (Object(v.o)(r.getType())) return Object(A.d)(t, r.getKey()); {
							const i = s.getBlockAfter(n.getEndKey());
							if (i && Object(v.o)(i.getType())) {
								if (Object(A.q)(e)) return Object(A.d)(t, i.getKey());
								if (Object(K.g)(r)) return t = o.EditorState.push(t, Object(K.i)(s, r.getKey()), Q.f), o.EditorState.forceSelection(t, Object(K.b)(i))
							}
						}
					}
				})(t, e),
				js = t => {
					const e = t.getSelection();
					if (!e.isCollapsed()) return !1;
					const n = o.RichUtils.getCurrentBlockType(t);
					if (!v.c.includes(n)) return !1;
					if (e.getFocusOffset() > 0) {
						if ("\n" === t.getCurrentContent().getBlockForKey(e.getFocusKey()).getText()[e.getFocusOffset() - 1]) return !1
					}
					return !0
				};
			var Rs = n("./src/lib/memoizeByReference/index.ts");
			const ws = Object(Rs.a)(t => {
					const e = t.getSelection();
					if (!e.isCollapsed()) return;
					const n = e.getStartOffset(),
						o = t.getCurrentContent(),
						s = o.getBlockForKey(e.getFocusKey());
					if (s.getType() !== v.n) return;
					const r = s.getText();
					if (r.startsWith("1.") && 2 === n) return v.i.ORDERED;
					if (r.startsWith("*") && 1 === n) {
						const t = o.getBlockBefore(s.getKey());
						if (t && t.getType() === v.n && t.getText().startsWith("* ")) return;
						return v.i.UNORDERED
					}
				}),
				Bs = t => {
					const e = ws(t);
					if (!e) return t;
					const n = Object(Yo.a)(t);
					let s = o.Modifier.replaceText(n.getCurrentContent(), n.getSelection().merge({
						anchorOffset: 0
					}), "");
					return s = o.Modifier.setBlockType(s, s.getSelectionAfter(), e), o.EditorState.push(n, s, Q.c)
				};
			var Is = n("./src/reddit/components/RichTextEditor/helpers/styles.ts"),
				_s = n("./src/reddit/components/RichTextEditor/spoiler/helpers.ts"),
				As = n("./src/reddit/components/RichTextEditor/spoiler/decorator.m.less"),
				Ks = n.n(As);
			const Ms = t => c.a.createElement("span", {
					className: Ks.a.spoiler
				}, c.a.createElement("span", null), t.children, c.a.createElement("span", null)),
				Ls = () => ({
					strategy: _s.a,
					component: Ms
				});
			var Ds = n("./src/reddit/components/FocusableContent/index.tsx"),
				Fs = n("./src/reddit/components/RichTextEditor/Blockquote/index.m.less"),
				Ns = n.n(Fs);
			const Ps = g.a.div("BlockQuoteWrapper", Ns.a),
				Us = Object(L.Map)({
					[v.e]: {
						element: "blockquote",
						wrapper: c.a.createElement(Ps, null)
					}
				});
			var Hs = n("./src/reddit/components/RichTextEditor/CodeBlock/index.m.less"),
				zs = n.n(Hs);
			const Ws = g.a.div("CodeBlockWrapper", zs.a),
				Vs = Object(L.Map)({
					[v.f]: {
						element: "code",
						wrapper: c.a.createElement(Ws, null)
					}
				});
			var qs = n("./node_modules/bowser/src/bowser.js"),
				Gs = n.n(qs),
				Qs = n("./node_modules/lodash/includes.js"),
				Ys = n.n(Qs),
				Zs = n("./src/reddit/components/RichTextEditor/DragController/helpers.ts"),
				Js = n("./src/reddit/components/RichTextEditor/DragController/index.m.less"),
				Xs = n.n(Js);
			const $s = g.a.div("DropLine", Xs.a),
				tr = g.a.wrapped(Gn.b, "Tooltip", Xs.a);
			class er extends i.Component {
				constructor(t) {
					super(t), this.dragCount = 0, this.setContainerRef = t => this.containerRef = t, this.preventDocumentDrop = t => {
						!! function t(e) {
							return e.draggable ? e : e.parentElement ? t(e.parentElement) : null
						}(t.target) || (t.preventDefault(), t.stopPropagation())
					}, this.onDragOver = t => {
						const e = Ys()(t.dataTransfer.types, Ht);
						if (!e) {
							if (!Object(Zs.c)(t.dataTransfer) || !this.props.allowMediaUploads) return
						}
						if (!e && !Object(Zs.c)(t.dataTransfer)) return;
						t.preventDefault();
						try {
							t.dataTransfer.dropEffect = e ? "move" : "copy"
						} catch (r) {}
						const {
							editorState: n
						} = this.props;
						let o = null;
						const s = Object(Zs.b)(n, t);
						if (s) {
							const t = this.containerRef.getBoundingClientRect().left;
							o = {
								top: s.clientY,
								left: t
							}
						}
						qn()(o, this.state.point) || this.setState({
							point: o
						})
					}, this.onDragEnter = t => {
						this.dragCount++
					}, this.onDragLeave = t => {
						this.dragCount--, 0 === this.dragCount && this.state.point && this.setState({
							point: null
						})
					}, this.onDrop = t => {
						const e = () => {
								this.dragCount = 0, this.setState({
									point: null
								})
							},
							n = Gs.a.msie ? null : t.dataTransfer.getData(Ht),
							o = Object(Zs.a)(t.dataTransfer);
						if (!(n || o.length && this.props.allowMediaUploads)) return void e();
						const {
							editorState: s
						} = this.props, r = Object(Zs.b)(s, t);
						if (!r) return void e();
						t.preventDefault(), t.stopPropagation();
						const i = r.isBefore ? K.a.before : K.a.after;
						n ? this.props.onBlockMove(n, r.blockKey, i) : setTimeout(() => {
							this.props.onFilesDrop(o, r.blockKey, i)
						}), e()
					}, this.state = {
						point: null
					}
				}
				componentDidMount() {
					document.addEventListener("drop", this.preventDocumentDrop), document.addEventListener("dragover", this.preventDocumentDrop)
				}
				componentWillUnmount() {
					document.removeEventListener("drop", this.preventDocumentDrop), document.removeEventListener("dragover", this.preventDocumentDrop)
				}
				render() {
					const {
						children: t
					} = this.props, {
						point: e
					} = this.state, n = c.a.Children.only(t);
					return c.a.createElement("div", {
						className: Object(p.a)(Xs.a.container, {
							[Xs.a.hideCaret]: !!e
						}),
						onDragEnter: this.onDragEnter,
						onDragLeave: this.onDragLeave,
						onDragOver: this.onDragOver,
						onDrop: this.onDrop,
						ref: this.setContainerRef
					}, c.a.createElement("div", null, n), c.a.createElement(tr, {
						targetPosition: e
					}, c.a.createElement($s, null)))
				}
			}
			var nr = n("./node_modules/draft-js/lib/DraftPasteProcessor.js"),
				or = n.n(nr),
				sr = n("./node_modules/draft-js/lib/getEntityKeyForSelection.js"),
				rr = n.n(sr),
				ir = n("./node_modules/draft-js/lib/splitTextIntoTextBlocks.js"),
				cr = n.n(ir),
				ar = n("./src/reddit/components/RichTextEditor/entity/cloneEntitiesInFragment.ts"),
				lr = n("./src/reddit/components/RichTextEditor/entity/applyEntityToContentBlock.ts");

			function dr(t, e, n) {
				const s = Object(o.convertFromHTML)(e, void 0, n);
				if (s) {
					const {
						contentBlocks: e,
						entityMap: n
					} = s;
					if (e) {
						const s = o.BlockMapBuilder.createFromArray(function(t) {
							return t.map(t => Object(v.r)(t.getType()) ? R(t) : t)
						}(e));
						return [t.set("entityMap", n), s]
					}
				}
				return [t, null]
			}

			function ur(t, e, n) {
				const s = cr()(e),
					r = n && 1 === s.length ? n : o.CharacterMetadata.create(),
					i = or.a.processText(s, r).map(t => t.merge({
						type: v.n
					}));
				return o.BlockMapBuilder.createFromArray(i)
			}
			const pr = t => {
					if (!t) return null;
					const e = document.createElement("div");
					e.innerHTML = t;
					const n = e.querySelector("[".concat("data-reddit-rtjson", "]"));
					return n && n.getAttribute("data-reddit-rtjson")
				},
				hr = t => {
					if (ft()) return {
						text: window.clipboardData.getData("text"),
						html: null
					}; {
						const e = t.clipboardData.getData("text/html");
						return {
							text: t.clipboardData.getData("text/plain"),
							html: e
						}
					}
				};

			function gr(t, e, n, s) {
				const {
					text: r,
					html: i
				} = hr(n), c = function(t, e, n, o) {
					const s = {
							text: e,
							html: n,
							rtjson: o,
							fragment: null
						},
						r = t.getClipboard();
					return r && n && function(t, e, n, o) {
						return -1 !== e.indexOf(o) || 1 === t.size && t.first().getText() === n
					}(r, n, e, t.getEditorKey()) && (s.fragment = r), s
				}(e, r, i, i && pr(i));
				e.getClipboard() && !c.fragment && e.setClipboard(null);
				const a = t.getCurrentContent(),
					l = t.getSelection(),
					d = t.getCurrentInlineStyle(),
					u = e.props.blockRenderMap;
				let p = null,
					h = a;
				if (!(p = function(t, e, n) {
						const o = t.getBlockForKey(e.getStartKey()),
							s = t.getBlockForKey(e.getEndKey());
						if (o.getType() === v.f || s.getType() === v.f) return ur(0, n).map(t => t.merge({
							type: v.f,
							depth: 0
						}))
					}(h, l, c.text)) && c.fragment && (p = c.fragment, [h, p] = Object(ar.b)(h, p), p = Ct(p, s)), !p && c.rtjson && (p = function(t) {
						const e = JSON.parse(t);
						return Object(o.convertFromRaw)(e).getBlockMap()
					}(c.rtjson)), !p && c.html && ([h, p] = dr(h, c.html, u)), !p && c.text) {
					const t = function(t, e, n) {
						return o.CharacterMetadata.create({
							style: n,
							entity: rr()(t, e)
						})
					}(h, l, d);
					p = ur(0, c.text, t), [h, p] = function(t, e) {
						let n = t,
							o = e;
						return e.forEach(t => {
							const e = t.getText(),
								s = fs.e.match(e);
							if (!s) return;
							let r = t;
							s.forEach(t => {
								let {
									index: e,
									lastIndex: s,
									url: i
								} = t;
								const c = (n = n.createEntity(M.a.LINK, "MUTABLE", {
									url: i
								})).getLastCreatedEntityKey();
								r = Object(lr.a)(r, e, s, c), o = o.set(r.getKey(), r)
							})
						}), [n, o]
					}(h, p)
				}
				if (p) return h = function(t, e, n) {
					if (n.isEmpty()) return t;
					let o = it(t, e, n) || Ot(t, e, n);
					return o || (o = W.c(t, e, n))
				}(h, l, p), o.EditorState.push(t, h, Q.e)
			}
			var mr = n("./src/reddit/components/RichTextEditor/entity/getSelectionEntityInfo.ts"),
				fr = n("./src/reddit/components/RichTextEditor/Tooltip/getSelectionClientRect.ts"),
				br = n("./src/reddit/components/RichTextEditor/LinksController/LinkDetailsPopup/index.m.less"),
				yr = n.n(br);
			const Er = Object(Gt.d)("postCreation.linkDetailsPopup.changeButton"),
				Sr = Object(Gt.d)("postCreation.linkDetailsPopup.removeButton"),
				xr = g.a.div("LinkDetailsBox", yr.a),
				Cr = g.a.a("Link", yr.a),
				Or = g.a.a("LinkButton", yr.a);
			var Tr = t => c.a.createElement("div", null, c.a.createElement(xr, {
					onMouseDown: t => t.preventDefault()
				}, c.a.createElement(Cr, {
					href: t.url,
					target: "_blank"
				}, t.url), c.a.createElement("span", null, " – "), c.a.createElement(Or, {
					onClick: () => t.onStartEdit(),
					role: "button"
				}, Er(t.language)), c.a.createElement("span", null, " | "), c.a.createElement(Or, {
					onClick: () => t.onRemove(),
					role: "button"
				}, Sr(t.language)))),
				vr = n("./src/reddit/controls/Input/index.tsx"),
				kr = n("./src/reddit/components/RichTextEditor/LinksController/LinkEditorPopup/index.m.less"),
				jr = n.n(kr);
			const Rr = Object(Gt.d)("postCreation.linkEditorPopup.insertButton"),
				wr = Object(Gt.d)("postCreation.linkEditorPopup.applyButton"),
				Br = Object(Gt.d)("postCreation.linkEditorPopup.textLabel"),
				Ir = Object(Gt.d)("postCreation.linkEditorPopup.linkLabel"),
				_r = Object(Gt.d)("postCreation.linkEditorPopup.textInputPlaceholder"),
				Ar = Object(Gt.d)("postCreation.linkEditorPopup.linkInputPlaceholder"),
				Kr = Object(Gt.d)("postCreation.linkEditorPopup.invalidLinkHint"),
				Mr = g.a.form("EditForm", jr.a),
				Lr = g.a.wrapped(t => c.a.createElement("div", t, t.children), "LinkEditorBox", jr.a),
				Dr = g.a.wrapped(vr.a, "Input", jr.a),
				Fr = g.a.label("Label", jr.a),
				Nr = g.a.div("HintAndButtonRow", jr.a),
				Pr = g.a.span("InvalidUrlHint", jr.a),
				Ur = g.a.wrapped(ne.f, "SubmitButton", jr.a),
				Hr = t => {
					t && (t.focus(), t.select())
				},
				zr = / /g,
				Wr = t => t.replace(zr, "%20");
			class Vr extends i.Component {
				constructor(t) {
					super(t), this.focused = !1, this.focusLostTimer = 0, this.textInputElementRef = null, this.urlInputElementRef = null, this.onEdited = () => {
						const t = this.state.url.trim(),
							e = Wr(t),
							n = Object(fs.h)(e);
						if (!n) return this.setState({
							isInvalidUrl: !0
						}), void(this.urlInputElementRef && this.urlInputElementRef.focus());
						const o = n.url;
						this.props.onEdited(o, this.state.displayText.trim() || t)
					}, this.onFocus = () => {
						this.focused = !0
					}, this.onBlur = () => {
						this.focused = !1, this.focusLostTimer = window.setTimeout(() => {
							this.focused || this.props.onFocusLost()
						}, 0)
					}, this.onClick = t => {
						t.stopPropagation()
					}, this.handleUrlChange = t => {
						const e = t.target.value;
						let {
							isInvalidUrl: n
						} = this.state;
						n && Object(fs.g)(fs.e, e) && (n = !1), this.setState({
							url: e,
							isInvalidUrl: n
						})
					}, this.handleDisplayTextChange = t => {
						this.setState({
							displayText: t.target.value
						})
					}, this.handleSubmit = t => {
						this.onEdited(), t.preventDefault()
					}, this.state = {
						url: t.url,
						displayText: t.displayText,
						isInvalidUrl: !1
					}
				}
				componentDidMount() {
					Object(fs.g)(fs.e, this.state.displayText) ? Hr(this.textInputElementRef) : Hr(this.urlInputElementRef)
				}
				componentWillUnmount() {
					this.focusLostTimer && clearTimeout(this.focusLostTimer)
				}
				render() {
					const {
						language: t,
						isInsertMode: e
					} = this.props;
					return c.a.createElement(Lr, {
						tabIndex: 0,
						onClick: this.onClick,
						onBlur: this.onBlur,
						onFocus: this.onFocus
					}, c.a.createElement(Mr, {
						onSubmit: this.handleSubmit
					}, c.a.createElement(Fr, null, Br(t), ":", c.a.createElement(Dr, {
						innerRef: t => this.textInputElementRef = t,
						type: "text",
						placeholder: _r(t),
						value: this.state.displayText,
						onChange: this.handleDisplayTextChange
					})), c.a.createElement(Fr, null, Ir(t), ":", c.a.createElement(Dr, {
						innerRef: t => this.urlInputElementRef = t,
						type: "text",
						placeholder: Ar(t),
						value: this.state.url,
						onChange: this.handleUrlChange
					})), c.a.createElement(Nr, null, c.a.createElement(Ur, {
						type: "submit",
						disabled: this.state.isInvalidUrl
					}, e ? Rr(t) : wr(t)), this.state.isInvalidUrl ? c.a.createElement(Pr, null, Kr(t)) : null)))
				}
			}

			function qr(t, e, n) {
				const o = t.getCurrentContent(),
					s = {
						text: "",
						url: ""
					};
				if (e.isCollapsed()) return s;
				if (n) s.text = n.entityText, s.url = o.getEntity(n.entityKey).getData().url;
				else {
					s.text = function(t, e) {
						if (t.getStartKey() !== t.getEndKey()) throw new Error("Selection must be in a single block");
						return t.isCollapsed() ? "" : e.getBlockForKey(t.getStartKey()).getText().slice(t.getStartOffset(), t.getEndOffset())
					}(e, t.getCurrentContent());
					const n = Object(fs.g)(fs.e, s.text);
					n && (s.url = n.url)
				}
				return s
			}

			function Gr(t, e) {
				return o.EditorState.set(t, {
					currentContent: o.Modifier.removeInlineStyle(t.getCurrentContent(), e, v.k.HIGHLIGHT)
				})
			}
			class Qr extends i.Component {
				constructor(t) {
					super(t), this.api = null, this.updateTooltipPosition = null, this.lastEditorSelectionClientRect = null, this.editLinkInSelection = t => {
						const {
							editorState: e
						} = this.props;
						let n = t,
							s = e;
						const r = e.getCurrentContent();
						if (!Object(ds.e)(r, t)) return !1;
						const i = Object(mr.a)(r, t);
						if (i) {
							if (r.getEntity(i.entityKey).getType() !== M.a.LINK) return !1;
							n = i.entitySelection
						} else this.isEditorFocused() && (this.lastEditorSelectionClientRect = Object(fr.a)());
						return this.state.linkSelection && (s = Gr(e, this.state.linkSelection)), s = function(t, e) {
							return o.EditorState.set(t, {
								currentContent: o.Modifier.applyInlineStyle(t.getCurrentContent(), e, v.k.HIGHLIGHT)
							})
						}(e, n), this.props.onChange(s, () => {
							this.setState({
								linkSelection: n,
								linkEntity: i
							})
						}), !0
					}, this.hidePopup = () => {
						this.interruptLinkEditing(), this.hideDetailsPopup()
					}, this.showDetailsPopup = () => {
						this.state.isDetailsPopupActive || this.setState({
							isDetailsPopupActive: !0
						})
					}, this.hideDetailsPopup = () => {
						this.state.isDetailsPopupActive && this.setState({
							isDetailsPopupActive: !1
						})
					}, this.updatePosition = () => {
						if (!this.updateTooltipPosition) return;
						const {
							editorState: t
						} = this.props, e = t.getCurrentContent();
						let n;
						if (this.state.linkSelection) {
							const t = Object(mr.a)(e, this.state.linkSelection);
							if (t) {
								const e = this.props.entityElementRegistry.get(t.entityKey);
								n = e && e.getBoundingClientRect()
							} else this.lastEditorSelectionClientRect && (n = this.lastEditorSelectionClientRect)
						} else {
							const e = Object(ds.c)(t);
							if (e) {
								const t = this.props.entityElementRegistry.get(e.entityKey);
								n = t && t.getBoundingClientRect()
							}
						}
						n && (this.updateTooltipPosition({
							left: n.left,
							top: n.bottom
						}), this.lastEditorSelectionClientRect = null)
					}, this.handleLink = (t, e) => {
						const {
							linkSelection: n
						} = this.state, {
							editorState: s
						} = this.props;
						let r = s;
						n && (n.isCollapsed() || (r = Gr(s, n)), void 0 !== t && (r = Object(ds.h)(r, n, t, e)), this.setState({
							linkSelection: null,
							linkEntity: null
						}), r !== s && (r = o.EditorState.forceSelection(r, r.getSelection()), this.props.onChange(r)))
					}, this.onLinkEdited = (t, e) => {
						this.handleLink(t, e)
					}, this.interruptLinkEditing = () => this.handleLink(), this.isEditorFocused = () => this.props.editorState.getSelection().getHasFocus(), this.onStartEditFocusedLink = () => {
						const {
							editorState: t
						} = this.props, e = Object(ds.c)(t);
						e && this.editLinkInSelection(e.entitySelection)
					}, this.onRemoveFocusedLink = () => {
						const {
							editorState: t
						} = this.props, e = Object(ds.c)(t);
						e && this.props.onChange(Object(ds.h)(t, e.entitySelection, ""))
					}, this.renderEditorPopup = () => {
						const {
							linkSelection: t,
							linkEntity: e
						} = this.state, {
							editorState: n
						} = this.props;
						if (!t) return null;
						const {
							text: o,
							url: s
						} = qr(n, t, e);
						return c.a.createElement(Vr, {
							url: s,
							displayText: o,
							isInsertMode: !e,
							onEdited: this.onLinkEdited,
							onFocusLost: this.interruptLinkEditing,
							language: this.props.language
						})
					}, this.renderDetailsPopup = () => {
						const t = Object(ds.c)(this.props.editorState);
						return t && this.isEditorFocused() && this.state.isDetailsPopupActive ? c.a.createElement(Tr, {
							url: t.url,
							onStartEdit: this.onStartEditFocusedLink,
							onRemove: this.onRemoveFocusedLink,
							language: this.props.language
						}) : null
					}, this.state = {
						isDetailsPopupActive: !1,
						linkSelection: null,
						linkEntity: null
					}, this.api = {
						editLinkInSelection: this.editLinkInSelection,
						hidePopup: this.hidePopup
					}
				}
				componentDidMount() {
					const {
						onSetApi: t
					} = this.props;
					this.api && t && t(this.api)
				}
				componentWillUnmount() {
					this.props.onSetApi && this.props.onSetApi(null)
				}
				componentDidUpdate(t, e) {
					e.linkSelection === this.state.linkSelection && t.editorState === this.props.editorState || (this.showDetailsPopup(), this.updatePosition())
				}
				render() {
					return c.a.createElement(Gn.b, {
						onSetPositionUpdater: t => this.updateTooltipPosition = t,
						trianglePlacement: Gn.a.Above
					}, this.renderEditorPopup() || this.renderDetailsPopup())
				}
			}
			var Yr = n("./src/reddit/components/RichTextEditor/OrderedList/index.m.less"),
				Zr = n.n(Yr);
			const Jr = g.a.ol("OrderedListWrapper", Zr.a),
				Xr = Object(L.Map)({
					[v.i.ORDERED]: {
						element: "li",
						aliasedElements: ["li"],
						wrapper: c.a.createElement(Jr, null)
					}
				});
			var $r = n("./src/reddit/components/RichTextEditor/Paragraph/index.m.less"),
				ti = n.n($r);
			const ei = g.a.div("ParagraphWrapper", ti.a),
				ni = Object(L.Map)({
					[v.n]: {
						element: "div",
						aliasedElements: ["p"],
						wrapper: c.a.createElement(ei, null)
					}
				});
			var oi = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				si = n("./src/reddit/helpers/styles/mixins/fonts.tsx"),
				ri = n("./src/reddit/components/RichTextEditor/TextRendering/index.m.less"),
				ii = n.n(ri);
			const ci = Object(Rs.a)(() => ({
					[v.k.SUPERSCRIPT]: {
						position: "relative",
						top: "-0.4em",
						fontSize: "0.7em",
						lineHeight: "0.7em"
					},
					[v.k.HIGHLIGHT]: {
						backgroundColor: "#b8e0f9"
					},
					[v.k.UNDERLINE]: {
						textDecoration: "none"
					},
					[v.k.MONOSPACE]: {
						backgroundColor: "var(--newRedditTheme-field)",
						caretColor: "#000",
						color: "var(--newRedditTheme-monospaceColor)",
						fontFamily: si.c,
						padding: "0.1em 0.2em",
						fontSize: "0.8em",
						borderRadius: "3px"
					}
				})),
				ai = g.a.div("H1", ii.a),
				li = g.a.div("H2", ii.a),
				di = g.a.div("H3", ii.a),
				ui = g.a.div("H4", ii.a),
				pi = g.a.div("H5", ii.a),
				hi = g.a.div("H6", ii.a),
				gi = t => ({
					component: e => c.a.createElement(t, null, c.a.createElement(o.EditorBlock, e)),
					editable: !0
				}),
				mi = {
					[v.g.H1]: gi(ai),
					[v.g.H2]: gi(li),
					[v.g.H3]: gi(di),
					[v.g.H4]: gi(ui),
					[v.g.H5]: gi(pi),
					[v.g.H6]: gi(hi)
				},
				fi = ["italic normal 1em 'Noto Sans'", "italic bold 1em 'Noto Sans'", "normal bold 1em 'Noto Sans'"],
				bi = () => {
					const t = document.fonts;
					t && t.load && fi.forEach(e => t.load(e))
				};
			var yi = n("./src/reddit/components/RichTextEditor/UnorderedList/index.m.less"),
				Ei = n.n(yi);
			const Si = g.a.ul("UnorderedListWrapper", Ei.a),
				xi = Object(L.Map)({
					[v.i.UNORDERED]: {
						element: "li",
						aliasedElements: ["li"],
						wrapper: c.a.createElement(Si, null)
					}
				});
			var Ci = n("./src/reddit/contexts/InsideOverlay.tsx"),
				Oi = n("./node_modules/lodash/debounce.js"),
				Ti = n.n(Oi),
				vi = n("./src/reddit/actions/subredditAutocomplete.ts"),
				ki = n("./src/reddit/controls/SubredditDropdown/index.m.less"),
				ji = n.n(ki);

			function Ri() {
				return (Ri = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			var wi = function(t, e) {
				var n = {};
				for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.indexOf(o) < 0 && (n[o] = t[o]);
				if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (o = Object.getOwnPropertySymbols(t); s < o.length; s++) e.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[s]) && (n[o[s]] = t[o[s]])
				}
				return n
			};
			const Bi = t => {
				var {
					isFocused: e
				} = t, n = wi(t, ["isFocused"]);
				return c.a.createElement("div", Ri({
					className: Object(p.a)(ji.a.entry, {
						[ji.a.mIsFocused]: e
					})
				}, n))
			};
			class Ii extends i.Component {
				constructor(t) {
					super(t), this.mouseDown = !1, this.onMouseUp = () => {
						this.mouseDown && (this.props.onEntrySelect(this.props.entry), this.mouseDown = !1)
					}, this.onMouseDown = t => {
						this.mouseDown = !0, t.preventDefault()
					}, this.onMouseOver = () => {
						this.props.onEntryFocus(this.props.entry)
					}, this.mouseDown = !1
				}
				componentDidUpdate() {
					this.mouseDown = !1
				}
				render() {
					return c.a.createElement(Bi, {
						isFocused: this.props.isFocused,
						onMouseDown: this.onMouseDown,
						onMouseUp: this.onMouseUp,
						onMouseOver: this.onMouseOver
					}, this.props.children)
				}
			}
			var _i = n("./src/reddit/helpers/name/index.ts"),
				Ai = n("./src/reddit/selectors/subredditAutocomplete.ts");
			const Ki = Object(l.c)({
				subredditSuggestions: (t, e) => {
					const n = Object(Ai.d)(t, e);
					return n ? n.subreddits : []
				}
			});
			class Mi extends i.Component {
				constructor(t) {
					super(t), this.api = null, this.onEntrySelect = t => {
						this.props.onSelect(this.props.subredditSuggestions[t].name)
					}, this.onEntryFocus = t => {
						this.setState({
							selectedSuggestionIndex: t
						})
					}, this.moveUp = () => {
						if (this.props.subredditSuggestions.length > 1) {
							let t = this.state.selectedSuggestionIndex - 1;
							return t = t < 0 ? this.props.subredditSuggestions.length - 1 : t, this.setState({
								selectedSuggestionIndex: t
							}), !0
						}
						return !1
					}, this.moveDown = () => {
						if (this.props.subredditSuggestions.length > 1) {
							const t = (this.state.selectedSuggestionIndex + 1) % this.props.subredditSuggestions.length;
							return this.setState({
								selectedSuggestionIndex: t
							}), !0
						}
						return !1
					}, this.selectCurrent = () => {
						if (this.props.subredditSuggestions.length) {
							const t = this.props.subredditSuggestions[this.state.selectedSuggestionIndex];
							return t && this.props.onSelect(t.name), !0
						}
						return !1
					}, this.state = {
						selectedSuggestionIndex: 0
					}, this.requestSubredditAutocomplete = Ti()(this.requestSubredditAutocomplete.bind(this), 200, {
						maxWait: 200
					}), this.api = {
						moveUp: this.moveUp,
						moveDown: this.moveDown,
						selectCurrent: this.selectCurrent
					}
				}
				componentDidMount() {
					this.requestSubredditAutocomplete(this.props.substring), this.props.onDropdownApi(this.api)
				}
				componentWillUnmount() {
					this.props.onDropdownApi(null)
				}
				componentWillReceiveProps(t) {
					t.substring !== this.props.substring && (this.requestSubredditAutocomplete(t.substring), this.setState({
						selectedSuggestionIndex: 0
					}))
				}
				requestSubredditAutocomplete(t) {
					this.props.onGetSubredditAutocomplete(t)
				}
				render() {
					return this.props.subredditSuggestions.length ? c.a.createElement("div", {
						className: Object(p.a)(ji.a.list, this.props.className)
					}, this.props.subredditSuggestions.map((t, e) => c.a.createElement(Ii, {
						entry: e,
						isFocused: e === this.state.selectedSuggestionIndex,
						key: t.name,
						onEntrySelect: this.onEntrySelect,
						onEntryFocus: this.onEntryFocus
					}, Object(_i.b)(t.name)))) : null
				}
			}
			var Li = Object(a.b)(Ki, (t, e) => ({
					onGetSubredditAutocomplete: e => {
						t(vi.d(e))
					}
				}))(Mi),
				Di = n("./src/reddit/selectors/comments.ts");
			const Fi = Object(l.c)({
				commentAuthors: Di.h
			});
			class Ni extends i.Component {
				constructor(t) {
					super(t), this.api = null, this.onEntrySelect = t => {
						this.props.onSelect(this.state.userSuggestions[t])
					}, this.onEntryFocus = t => {
						this.setState({
							selectedSuggestionIndex: t
						})
					}, this.moveUp = () => {
						if (this.state.userSuggestions.length > 1) {
							let t = this.state.selectedSuggestionIndex - 1;
							return t = t < 0 ? this.state.userSuggestions.length - 1 : t, this.setState({
								selectedSuggestionIndex: t
							}), !0
						}
						return !1
					}, this.moveDown = () => {
						if (this.state.userSuggestions.length > 1) {
							const t = (this.state.selectedSuggestionIndex + 1) % this.state.userSuggestions.length;
							return this.setState({
								selectedSuggestionIndex: t
							}), !0
						}
						return !1
					}, this.selectCurrent = () => {
						if (this.state.userSuggestions.length) {
							const t = this.state.userSuggestions[this.state.selectedSuggestionIndex];
							return t && this.props.onSelect(t), !0
						}
						return !1
					}, this.state = {
						userSuggestions: [],
						selectedSuggestionIndex: 0
					}, this.api = {
						moveUp: this.moveUp,
						moveDown: this.moveDown,
						selectCurrent: this.selectCurrent
					}
				}
				componentDidMount() {
					this.props.onDropdownApi(this.api), this.setState({
						userSuggestions: this.filterUsers(this.props.substring)
					})
				}
				componentWillUnmount() {
					this.props.onDropdownApi(null)
				}
				componentWillReceiveProps(t) {
					t.substring !== this.props.substring && this.setState({
						selectedSuggestionIndex: 0,
						userSuggestions: this.filterUsers(t.substring)
					})
				}
				filterUsers(t) {
					const {
						commentAuthors: e
					} = this.props;
					return e.filter(e => e.toLowerCase().startsWith(t.toLowerCase()))
				}
				render() {
					return this.state.userSuggestions.length ? c.a.createElement("div", {
						className: Object(p.a)(ji.a.list, this.props.className)
					}, this.state.userSuggestions.map((t, e) => c.a.createElement(Ii, {
						key: e,
						entry: e,
						onEntryFocus: this.onEntryFocus,
						onEntrySelect: this.onEntrySelect,
						isFocused: e === this.state.selectedSuggestionIndex
					}, Object(_i.c)(t)))) : null
				}
			}
			var Pi = Object(a.b)(Fi)(Ni),
				Ui = n("./node_modules/lodash/dropRightWhile.js"),
				Hi = n.n(Ui),
				zi = n("./node_modules/lodash/flatMap.js"),
				Wi = n.n(zi),
				Vi = n("./node_modules/lodash/reduceRight.js"),
				qi = n.n(Vi),
				Gi = n("./node_modules/lodash/trimEnd.js"),
				Qi = n.n(Gi),
				Yi = n("./node_modules/lodash/trimStart.js"),
				Zi = n.n(Yi),
				Ji = n("./src/lib/forEachGroup/index.ts");

			function Xi(t, e) {
				const n = [],
					o = t.withMutations(t => {
						for (; t.size && e(t.first());) n.push(t.first()), t.shift()
					});
				return {
					popped: n,
					stack: o
				}
			}
			var $i = n("./src/lib/unicodeUtils/index.ts"),
				tc = n("./src/reddit/helpers/richTextJson/index.ts"),
				ec = n("./src/reddit/models/RichTextJson/nodeMakers.ts");
			const nc = {
				BOLD: uo.j.bold,
				ITALIC: uo.j.italic,
				MONOSPACE: uo.j.monospace,
				STRIKETHROUGH: uo.j.strikethrough,
				SUBSCRIPT: uo.j.subscript,
				SUPERSCRIPT: uo.j.superscript,
				UNDERLINE: uo.j.underline
			};
			var oc = (t, e) => sc(t.getBlockMap(), t, e);
			const sc = (t, e, n) => {
					const o = [];
					let s = t.toStack();
					for (; s.size;) {
						const t = s.first(),
							r = t.getType();
						switch (s = s.shift(), r) {
							case v.g.H1:
							case v.g.H2:
							case v.g.H3:
							case v.g.H4:
							case v.g.H5:
							case v.g.H6:
								o.push(dc(t, e));
								break;
							case v.e: {
								const {
									popped: n,
									stack: r
								} = Xi(s, t => t.getType() === v.e);
								s = r, o.push(uc([t, ...n], e));
								break
							}
							case v.f: {
								const {
									popped: e,
									stack: n
								} = Xi(s, t => t.getType() === v.f);
								s = n, o.push(pc([t, ...e]));
								break
							}
							case v.i.ORDERED:
							case v.i.UNORDERED: {
								const {
									popped: n,
									stack: i
								} = Xi(s, t => t.getType() === r);
								s = i, o.push(hc([t, ...n], e));
								break
							}
							case v.l: {
								const {
									popped: n,
									stack: r
								} = Xi(s, t => Object(v.v)(t.getType()));
								s = r, o.push(gc([t, ...n], e));
								break
							}
							case v.a: {
								let e = s.first();
								e && Object(v.u)(e.getType()) ? s = s.shift() : e = void 0, o.push(mc(t, e, n));
								break
							}
							case v.n:
							default:
								o.push(ac(t, e))
						}
					}
					return o
				},
				rc = t => t.reduce((t, e) => e === v.k.UNDERLINE || e === v.k.SUBSCRIPT ? t : t | (nc[e] || 0) | 0, 0),
				ic = (t, e) => {
					const n = [],
						o = Object($i.b)(t);
					return Object(Ji.a)(e, {
						keyFn: t => t.getStyle()
					}, (e, s, r, i) => {
						if (s.isEmpty()) return;
						const c = t.slice(r, i),
							a = r + (c.length - Zi()(c).length),
							l = i - (c.length - Qi()(c).length),
							d = l - a,
							u = o[a],
							p = o[l] - u;
						d > 0 && n.push([rc(s), u, p])
					}), n.length ? n : null
				},
				cc = (t, e) => {
					const n = t.getText(),
						o = t.getCharacterList(),
						s = [],
						r = v.d.includes(t.getType()),
						i = v.c.includes(t.getType());
					let c = 0;
					return Object(Ji.a)(o, {
						keyFn: (t, o) => {
							const s = t.getEntity();
							return r && t.getStyle().contains(v.k.SPOILER) ? "spoiler" : Object(M.b)(s, e) ? "link-".concat(t.getEntity()) : "\n" === n[o] ? i ? "linebreak" : "skip" : s && e.getEntity(s).getType() === M.a.EMOTE ? "emote-".concat(c++) : "text"
						}
					}, (t, r, i, c) => {
						const a = n.slice(i, c),
							l = o.slice(i, c).toList();
						if ("text" === r) {
							const t = ic(a, l);
							s.push(Object(ec.s)(a, t))
						} else if ("spoiler" === r) s.push(Object(ec.n)(a));
						else if (r.startsWith("link-")) {
							const n = e.getEntity(t.getEntity());
							s.push(((t, e, n) => {
								const o = t.getType(),
									s = [M.a.USER_LINK, M.a.USER_MENTION],
									{
										url: r
									} = t.getData(),
									i = e.startsWith("/");
								if (o === M.a.SUBREDDIT_LINK) {
									const t = e.replace(m.e, "");
									return Object(ec.o)(t, i)
								}
								if (s.includes(o)) {
									const t = e.replace(m.a, "");
									return Object(ec.t)(t, i)
								}
								const c = ic(e, n);
								return Object(ec.i)(e, r, c)
							})(n, a, l))
						} else if ("linebreak" === r) s.push(Object(ec.h)());
						else if (r.startsWith("emote-")) {
							const n = e.getEntity(t.getEntity()).getData();
							s.push(Object(ec.e)(n.fullId, n.imageType))
						}
					}), s
				},
				ac = (t, e) => Object(ec.l)(cc(t, e)),
				lc = t => "text" === t.e ? Object(ec.m)(t.t) : "link" === t.e ? Object(ec.i)(t.t, t.u, null) : t.e === uo.x ? t.c.map(lc) : t.e === uo.n ? Object(ec.m)("") : t,
				dc = (t, e) => Object(ec.f)(v.m[t.getType()], ((t, e) => qi()(Wi()(cc(t, e), lc), (t, e) => {
					let [n, ...o] = t;
					if (!n) return [e];
					const s = o.length ? o : [];
					return n && "raw" === e.e && "raw" === n.e ? [Object(ec.m)(e.t + n.t), ...s] : [e, n, ...s]
				}, []))(t, e)),
				uc = (t, e) => Object(ec.c)(Hi()(t.map(t => ((t, e) => t.getText().trim().length ? ac(t, e) : ec.a)(t, e)), t => t === ec.a)),
				pc = t => Object(ec.d)(t.map(t => Object(ec.m)(t.getText()))),
				hc = (t, e) => {
					if (!t.length) return Object(ec.k)([], !1);
					const n = t[0].getDepth();
					let o = null;
					const s = [];
					let r = [];
					const i = () => null !== o || r.length,
						c = () => {
							const t = [];
							null !== o && (t.push(o), o = null), r.length && (t.push(hc(r, e)), r = []), s.push(Object(ec.j)(t))
						};
					return t.forEach(t => {
						t.getDepth() > n ? r.push(t) : (i() && c(), o = Object(ec.l)(cc(t, e)))
					}), i() && c(), Object(ec.k)(s, t[0].getType() === v.i.ORDERED)
				},
				gc = (t, e) => {
					const n = [...t].sort(V.b),
						o = n[0],
						{
							colCount: s
						} = Object(V.g)(o),
						r = N()(n, s),
						i = r[0].map(t => {
							const {
								alignment: n
							} = Object(V.g)(t);
							return Object(ec.q)(cc(t, e), n)
						}),
						c = r.slice(1).map(t => t.map(t => Object(ec.p)(cc(t, e))));
					return Object(ec.r)(i, c)
				},
				mc = (t, e, n) => {
					const o = Object(A.h)(t);
					if (!o) throw new Error("Invalid atomic block!");
					const {
						uploadInfo: s,
						mediaAsset: r,
						makeGif: i
					} = o, c = e ? e.getText() : "";
					if (s && n) {
						const t = n[s.uploadKey],
							e = t && t.metadata.mimetype || "",
							{
								assetId: r,
								thumbnailAssetId: a
							} = Object(A.f)(o, n);
						return Object(Ft.j)(e) ? Object(ec.b)(r, c) : Object(Ft.k)(e) ? Object(ec.g)(r, c) : Object(ec.u)(r, c, a, i)
					} {
						const {
							assetId: t,
							type: e
						} = r;
						let n;
						switch (e) {
							case A.a.AnimatedImage:
								n = Object(ec.b)(t, c);
								break;
							case A.a.Image:
								n = Object(ec.g)(t, c);
								break;
							case A.a.Video:
								n = Object(ec.u)(t, c);
								break;
							default:
								throw new Error("Invalid media type")
						}
						return Object(tc.d)(t) ? Object(ec.l)([n]) : n
					}
				};
			var fc, bc = n("./src/reddit/constants/componentSizes.ts"),
				yc = n("./src/reddit/constants/elementIds.ts");
			! function(t) {
				t.Up = "up", t.Down = "down"
			}(fc || (fc = {}));
			var Ec = t => {
					const e = window.getSelection().focusNode;
					if (!e || !e.parentElement) return;
					const n = document.getElementById(yc.d),
						o = n || document.documentElement;
					if (!o) return;
					const s = window.innerHeight,
						{
							bottom: r,
							top: i
						} = e.parentElement.getBoundingClientRect(),
						c = n ? 0 : bc.f + bc.p;
					t === fc.Up && i < c ? o.scrollBy(0, i - c) : t === fc.Down && r > s && o.scrollBy(0, r - s)
				},
				Sc = n("./src/reddit/models/Product/index.ts"),
				xc = (t, e, n) => {
					const o = {
						url: n
					};
					return t.createEntity(e, "MUTABLE", o)
				},
				Cc = n("./node_modules/lodash/maxBy.js"),
				Oc = n.n(Cc);
			const Tc = (t, e) => {
				if (!e) return (t => {
					const e = t.id;
					switch (t.e) {
						case uo.m:
							return {
								assetId: e, type: A.a.Image
							};
						case uo.a:
							return {
								assetId: e, type: A.a.AnimatedImage
							};
						case uo.D:
							return {
								assetId: e, type: A.a.Video
							}
					}
				})(t);
				const n = e.id;
				switch (e.e) {
					case uo.s: {
						const {
							s: t
						} = e;
						return {
							assetId: n,
							type: A.a.Image,
							imageUrl: t.u,
							width: t.x,
							height: t.y
						}
					}
					case uo.r: {
						const {
							s: t
						} = e;
						return {
							assetId: n,
							type: A.a.AnimatedImage,
							imageUrl: t.gif,
							posterUrl: t.p,
							dashUrl: t.mp4,
							width: t.x,
							height: t.y
						}
					}
					case uo.t: {
						const {
							isGif: t,
							dashUrl: o,
							hlsUrl: s,
							p: r,
							x: i,
							y: c
						} = e;
						let a;
						if (r) {
							a = Oc()(r, t => t.x).u
						}
						return {
							assetId: n,
							type: A.a.Video,
							isGif: t,
							dashUrl: o,
							hlsUrl: s,
							posterUrl: a,
							width: i,
							height: c
						}
					}
				}
			};

			function vc(t, e, n) {
				const s = t.id,
					r = t.c,
					i = uo.E(e, s),
					c = Tc(t, i),
					a = [new o.ContentBlock({
						key: Object(o.genKey)(),
						type: v.a,
						data: Object(L.Map)({
							mediaAsset: c
						})
					})];
				if (n) {
					const t = Object(K.h)(Object(o.genKey)(), r).merge({
						type: v.j
					});
					a.push(t)
				}
				return a
			}
			const kc = Object.keys(nc),
				jc = (t, e, n) => {
					switch (e.e) {
						case uo.u:
							return Ac(t, e.c, v.b.UNSTYLED, n);
						case uo.k:
							const o = v.h[e.l];
							return Ac(t, e.c || [], o, n);
						case uo.p:
							return Bc(t, e, n);
						case uo.b:
							return Rc(t, e, n);
						case uo.c:
							return void e.c.forEach(e => Ac(t, [e], v.b.CODE_BLOCK, n));
						case uo.z:
							return wc(t, e, n);
						case uo.m:
						case uo.a:
						case uo.D:
							return void t.blocks.push(...vc(e, n.mediaMetadataMap, Object(A.q)(n.editorType)))
					}
				},
				Rc = (t, e, n) => {
					e && e.c && e.c.length && e.c.forEach(e => e.e === uo.u ? Ac(t, e.c, v.b.BLOCK_QUOTE, n) : jc(t, e, n))
				},
				wc = (t, e, n) => {
					const {
						h: o,
						c: s
					} = e, r = o.length;
					[o, ...s].forEach((e, s) => e.forEach((e, i) => {
						const {
							c = []
						} = e, {
							a
						} = o[i], l = {
							alignment: a,
							colCount: r,
							colIndex: i,
							rowIndex: s
						};
						Ac(t, c, v.b.TABLE_CELL, n, l)
					}))
				},
				Bc = function t(e, n, o) {
					let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
					const r = n.o ? v.b.ORDERED_LIST : v.b.UNORDERED_LIST;
					n.c.forEach(n => {
						const i = n.c;
						if (!i || !i.length) return;
						const [c, a] = i, l = c.e === uo.u ? c.c : [];
						Ac(e, l, r, o, void 0, s), a && a.e === uo.p && t(e, a, o, s + 1)
					})
				},
				Ic = {
					[uo.y]: ["r/", "/r/"],
					[uo.B]: ["u/", "/user/"],
					[uo.C]: ["u/", "/user/"],
					[uo.v]: ["p/", ""],
					[uo.g]: ["c/", ""]
				},
				_c = {
					[uo.y]: M.a.SUBREDDIT_LINK,
					[uo.B]: M.a.USER_LINK,
					[uo.C]: M.a.USER_MENTION,
					[uo.v]: M.a.POST_LINK,
					[uo.g]: M.a.COMMENT_LINK
				},
				Ac = function(t, e, n, s) {
					let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
						i = arguments.length > 5 ? arguments[5] : void 0,
						c = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
					const a = t.content;
					if (1 === e.length && (e[0].e === uo.m || e[0].e === uo.a)) {
						const n = e[0];
						if (Object(tc.d)(n.id)) return void t.blocks.push(...vc(n, s.mediaMetadataMap, Object(A.q)(s.editorType)))
					}
					const {
						charList: l,
						text: d,
						updatedContent: u
					} = Kc(e, a, s), p = new o.ContentBlock({
						key: Object(o.genKey)(),
						characterList: Object(L.List)(l),
						data: Object(L.fromJS)(r),
						depth: i,
						text: d,
						type: n
					});
					t.content = u || a, c ? t.blocks.unshift(p) : t.blocks.push(p)
				},
				Kc = (t, e, n) => {
					let o = e,
						s = "";
					const r = [];
					if (t.forEach(t => {
							const e = Mc(t, o, n);
							o = e.updatedContent || o, s += e.text, r.push(...e.charList)
						}), s.length !== r.length) throw new Error("Characters length mismatch!");
					return {
						charList: r,
						text: s,
						updatedContent: o !== e ? o : void 0
					}
				},
				Mc = (t, e, n) => {
					switch (t.e) {
						case uo.A: {
							const {
								t: e,
								f: n
							} = t;
							return {
								charList: Dc(e, n),
								text: e
							}
						}
						case uo.x: {
							const {
								c: s
							} = t, r = Kc(s, e, n);
							return r.charList = r.charList.map(t => (t => o.CharacterMetadata.create({
								style: t.getStyle().add(v.k.SPOILER),
								entity: t.getEntity()
							}))(t)), r
						}
						case uo.v:
						case uo.g:
						case uo.w: {
							const {
								t: e
							} = t;
							return {
								charList: Dc(e),
								text: e
							}
						}
						case uo.y:
						case uo.B:
						case uo.C: {
							const [n, o] = Ic[t.e], s = (t.l ? "/" : "") + n + t.t, r = o + t.t, i = xc(e, _c[t.e], r), c = i.getLastCreatedEntityKey();
							return {
								charList: Dc(s, void 0, c),
								text: s,
								updatedContent: i
							}
						}
						case uo.o: {
							const {
								t: n,
								u: o,
								f: s
							} = t, r = xc(e, M.a.LINK, o), i = r.getLastCreatedEntityKey();
							return {
								charList: Dc(n, s, i),
								text: n,
								updatedContent: r
							}
						}
						case uo.m:
						case uo.a:
							const {
								id: s
							} = t;
							if (s.startsWith("emote|")) {
								const t = Object(Sc.b)(s),
									o = n.activeEmotes && n.activeEmotes[t];
								if (o) {
									const t = Object(ts.c)(e, o),
										n = t.getLastCreatedEntityKey(),
										s = ts.a;
									return {
										charList: Dc(s, void 0, n),
										text: s,
										updatedContent: t
									}
								}
								const r = ":".concat(t, ":");
								return {
									charList: Dc(r),
									text: r
								}
							}
							return {
								text: "", charList: Dc("")
							};
						default:
							return {
								text: "", charList: Dc("")
							}
					}
				},
				Lc = t => {
					const e = kc.filter(e => !!(nc[e] & t));
					return Object(L.OrderedSet)(e)
				},
				Dc = function(t, e) {
					let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
					const s = o.CharacterMetadata.create({
							entity: n
						}),
						r = Array(t.length).fill(s),
						i = Object($i.a)(t);
					return e && e.forEach(t => {
						const [e, s, c] = t, a = Lc(e), l = s + c, d = o.CharacterMetadata.create({
							entity: n,
							style: a
						});
						r.fill(d, i[s], i[l])
					}), r
				},
				Fc = (t, e) => {
					t.blocks.length && (t.blocks[0].getType() === v.b.TABLE_CELL && Ac(t, [], v.b.UNSTYLED, e, void 0, void 0, !0), t.blocks[t.blocks.length - 1].getType() === v.b.TABLE_CELL && Ac(t, [], v.b.UNSTYLED, e))
				};
			var Nc = (t, e, n, s) => {
					const r = "string" == typeof t ? JSON.parse(t) : t;
					if (!r || !r.document || !r.document.length) return null;
					const i = {
							editorType: e,
							mediaMetadataMap: n,
							activeEmotes: s ? s.reduce((t, e) => Object.assign({}, t, e.emotes), {}) : void 0
						},
						c = {
							blocks: [],
							content: o.ContentState.createFromText("")
						};
					r.document.forEach(t => {
						jc(c, t, i)
					}), 0 === c.blocks.length && Ac(c, [], v.b.UNSTYLED, i), Fc(c, i);
					const a = o.BlockMapBuilder.createFromArray(c.blocks),
						l = o.SelectionState.createEmpty(a.first().getKey());
					return c.content.merge({
						blockMap: a,
						selectionBefore: l,
						selectionAfter: l
					})
				},
				Pc = n("./src/reddit/constants/elementClassNames.ts"),
				Uc = n("./src/reddit/constants/keycodes.ts"),
				Hc = n("./src/reddit/icons/svgs/Send/index.tsx"),
				zc = n("./src/reddit/selectors/economics.ts"),
				Wc = n("./src/reddit/components/RichTextEditor/index.m.less"),
				Vc = n.n(Wc);

			function qc() {
				return (qc = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			Object(oi.b)({
				draftToRTFJson: oc,
				getMediaCount: A.g,
				getPendingThumbnailUploads: A.i,
				isAllMediaUploaded: A.m
			});
			const Gc = "handled",
				Qc = "not-handled",
				Yc = /^\s*$/,
				Zc = 20,
				Jc = g.a.wrapped(Ds.a, "FocusableContent", Vc.a),
				Xc = Object(a.b)(() => {
					const t = (() => Object(l.a)(t => t.uploads, (t, e) => Object(T.e)(T.b.RTE_MEDIA, e.rteState.editorKey), (t, e) => r()(t, t => t.key.startsWith(e))))();
					return Object(l.c)({
						editorUploads: t,
						emotesEnabled: S.d.spEmotes,
						giphyEnabled: S.d.spGiphy,
						activeEmotes: (t, e) => !!e.destSubreddit && e.destSubreddit.id && Object(zc.c)(t, e.destSubreddit.id) || void 0
					})
				}, t => ({
					onFetchEditorProducts: e => t(Object(y.e)(e)),
					onTrackMediaDrop: e => t((t, n) => x.l(n(), e)),
					retryUpload: e => t(E.a(e)),
					startUploads: (e, n, o) => t(E.b(e, n, o))
				}));
			class $c extends i.Component {
				constructor(t) {
					super(t), this.blockRenderMap = o.DefaultDraftBlockRenderMap.merge(Us, Vs, Wn, Xr, ni, xi, yn), this.editorHeight = null, this.editorRef = null, this.editorRootStyleMutationObserver = null, this.linksControllerApi = null, this.suggestionDropdownApi = null, this.tableToolbarControllerApi = null, this.emotesTooltipApi = null, this.gifTooltipApi = null, this.updateSuggestionDropdownPosition = null, this.isJustAutocompleteSelected = !1, this.isJustLinkified = !1, this.isMouseDown = !1, this.isJustConvertedToList = !1, this.needSyncScroll = null, this.transforms = {
						[k.BREAK_HEADER_ENTITY]: Yo.b,
						[k.INSERT_LINE_BREAK]: Yo.e,
						[k.REDUCE_LIST_INDENT]: Yo.f,
						[k.RESET_CURRENT_AND_PREVIOUS_BLOCKS]: Yo.g,
						[k.REMOVE_EXTRA_LIST_ITEM]: Yo.h,
						[B.d]: t => ks(t, this.props.editorType),
						[B.b]: t => vs(t, this.props.editorType),
						[B.f]: Yo.d,
						[B.c]: t => Object(Yo.c)(v.k.BOLD, t),
						[B.e]: t => Object(Yo.c)(v.k.ITALIC, t),
						[B.g]: t => Object(Yo.c)(v.k.UNDERLINE, t)
					}, this.setContainerRef = t => {
						const {
							domRef: e
						} = this.props;
						e && e(t), this.setState({
							containerRef: t
						})
					}, this.setFocusableContentRef = t => this.setState({
						focusableContentRef: t
					}), this.rteStateChanged = (t, e) => {
						const n = Object.assign({}, this.props.rteState, {
							isBound: !0,
							editorState: t
						});
						this.props.onChange(n, e)
					}, this.hideTooltips = () => {
						this.emotesTooltipApi && this.emotesTooltipApi.closeTooltip(), this.gifTooltipApi && this.gifTooltipApi.closeTooltip(), this.tableToolbarControllerApi && this.tableToolbarControllerApi.hideActionButton(), this.linksControllerApi && this.linksControllerApi.hidePopup(), this.suppressAutocompleteForFocusedLink()
					}, this.onEditorStyleChanged = () => {
						if (!this.editorRef) return;
						const t = this.editorRef.refs.editor,
							e = t.style.height ? Number.parseInt(t.style.height) : null;
						this.editorHeight !== e && (this.hideTooltips(), this.editorHeight = e, e && this.props.onEditorResize && this.props.onEditorResize(e))
					}, this.insertValidatedMedia = () => {
						const {
							editorUploads: t
						} = this.props, {
							editorState: e,
							mediaToInsert: n
						} = this.state;
						if (!n) return;
						const {
							files: o,
							blockKey: s,
							insertionMode: r
						} = n, i = o.map(e => t.find(t => t.file === e)).filter(Boolean);
						this.setState({
							mediaToInsert: null
						});
						const c = i.filter(t => !!t.metadata.mimetype);
						c.length && this.onChange(Object(A.l)(e, c, s, r))
					}, this.focus = () => this.editorRef && this.editorRef.focus(), this.blur = () => this.editorRef && this.editorRef.blur(), this.isFocused = () => this.state.editorState.getSelection().getHasFocus(), this.isEmpty = () => !this.state.editorState.getCurrentContent().hasText(), this.setEditorRef = t => this.editorRef = t, this.setSuggestionDropdownApi = t => this.suggestionDropdownApi = t, this.setLinksControllerApi = t => this.linksControllerApi = t, this.setTableToolbarControllerApi = t => this.tableToolbarControllerApi = t, this.setEmotesTooltipApi = t => this.emotesTooltipApi = t, this.setGifTooltipApi = t => this.gifTooltipApi = t, this.setSuggestionDropdownPositionUpdater = t => this.updateSuggestionDropdownPosition = t, this.getEditorState = () => this.state.editorState, this.setEditorState = (t, e) => {
						const n = this.state.editorState.getCurrentContent() !== t.getCurrentContent();
						n && this.props.readOnly || (this.setState({
							editorState: t
						}, e), this.rteStateChanged(t, n))
					}, this.toolbarSetState = t => {
						const e = t.getInlineStyleOverride();
						let n = t;
						n.getSelection().getHasFocus() || (n = o.EditorState.forceSelection(n, n.getSelection()), e && (n = o.EditorState.setInlineStyleOverride(n, e))), this.onChange(n)
					}, this.onChange = (t, e) => {
						let n = t;
						n = _n(n, this.state.editorState), n = At(n, this.props.editorType), this.emotesTooltipApi && (n = Object(ts.d)(n, this.state.editorState)), n = Es(n, this.state.editorState), n = Object(Is.d)(n, this.state.editorState), this.state.shouldShowFtuMessage && this.state.editorState.getCurrentContent() !== t.getCurrentContent() && this.setState({
							shouldShowFtuMessage: !1
						}), this.setEditorState(n, e);
						let {
							suppressAutocompleteForLink: o
						} = this.state;
						if (o) {
							const e = Object(ds.b)(t);
							e && e.entityKey === o || (o = null)
						}
						this.setState({
							suppressAutocompleteForLink: o
						}), this.isJustAutocompleteSelected = !1, this.isJustLinkified = !1, this.isMouseDown = !1, this.isJustConvertedToList = !1
					}, this.onFocus = () => {
						const {
							enableFtuMessage: t,
							onFocus: e
						} = this.props;
						t && this.setState({
							shouldShowFtuMessage: !0
						}), this.emotesTooltipApi && this.emotesTooltipApi.closeTooltip(), this.gifTooltipApi && this.gifTooltipApi.closeTooltip(), e && e()
					}, this.handleBeforeInput = t => {
						const {
							editorState: e
						} = this.state;
						if (this.isMouseDown) return Gc;
						if (_t(e, t)) return Gc;
						let n = function(t, e) {
							const n = t.getSelection(),
								s = n.getFocusOffset();
							if (!n.isCollapsed() || 0 === s) return;
							const r = n.getFocusKey(),
								i = t.getCurrentContent(),
								c = i.getBlockForKey(r),
								a = c.getEntityAt(s - 1),
								l = c.getEntityAt(s);
							if (!(a && (!l || l !== a))) return;
							const d = i.getEntity(a),
								u = ls.has(d.getType());
							if ("MUTABLE" === d.getMutability() && u) {
								const s = o.Modifier.insertText(i, n, e, t.getCurrentInlineStyle());
								return o.EditorState.push(t, s, "insert-characters")
							}
						}(e, t) || e;
						return (n = Rn(n, t) || n) !== e ? (this.onChange(n), Gc) : Qc
					}, this.keyBindingFN = t => {
						const {
							editorState: e
						} = this.state, {
							submitOnEnter: n
						} = this.props, s = e.getSelection();
						if (t.metaKey && t.keyCode === Uc.a.K) return k.OPEN_LINK_TOOLTIP;
						if (t.keyCode === Uc.a.Space) {
							if (ws(e)) return k.CONVERT_TO_LIST_ON_SPACE;
							if (Object(ds.d)(e)) return k.LINKIFY_ON_SPACE
						} else if (t.keyCode === Uc.a.Enter) {
							if (t.ctrlKey || t.metaKey || n && !t.shiftKey) return k.SUBMIT;
							if (t.shiftKey && js(e)) return k.INSERT_LINE_BREAK; {
								const t = this.enterKeyBinding(e);
								if (t) return t
							}
						} else if (t.keyCode === Uc.a.Backspace) {
							if (this.isJustLinkified || this.isJustConvertedToList) return B.h;
							if (s.isCollapsed()) {
								const t = e.getCurrentContent(),
									n = s.getEndKey(),
									o = s.getStartOffset(),
									r = t.getBlockForKey(n),
									i = r.getType();
								if ((Object(v.s)(i) || Object(v.q)(i) || Object(v.p)(i)) && 0 === o && r.getLength() > 0) {
									const e = t.getBlockBefore(n);
									if (!e || e.getType() !== i) return k.MAKE_PLAIN_BLOCK
								}
							}
						}
						return Object(o.getDefaultKeyBinding)(t)
					}, this.handleKeyCommand = t => {
						const {
							editorState: e
						} = this.state;
						let n = t,
							s = null;
						const r = t => {
							let e = t;
							if (s) {
								const {
									selection: t,
									url: n
								} = s;
								e = Object(ds.f)(e, t, n)
							}
							return this.onChange(e), this.isJustLinkified = !!s, Gc
						};
						if (n === k.SUBMIT) this.props.onSubmit();
						else {
							if (n === k.CONVERT_TO_LIST_ON_SPACE) {
								const t = r(Bs(e));
								return this.isJustConvertedToList = !0, t
							}
							if (n === k.LINKIFY_ON_SPACE) return s = Object(ds.d)(e), r(Object(Yo.a)(e));
							if (n === k.LINKIFY_ON_ENTER && (s = Object(ds.d)(e), !(n = this.enterKeyBinding(e, !1)))) return r(Object(Yo.d)(e))
						}
						if (n === k.OPEN_LINK_TOOLTIP) return this.onToolbarLinkButtonClick(), Gc;
						if (n === k.MAKE_PLAIN_BLOCK) {
							return r(Object(Yo.i)(v.n, e))
						}
						if (n === k.EXEC_TABLE_ON_ENTER_HANDLER) return r(this.tableOnEnterHandler.handle(e));
						const i = this.transforms[n];
						if (i) {
							const t = i(e);
							if (t) return r(t)
						}
						const c = o.RichUtils.handleKeyCommand(e, n);
						return c ? r(c) : Qc
					}, this.handleOnTab = t => {
						if (this.emotesTooltipApi && this.emotesTooltipApi.handleTabInEditor() || this.suggestionDropdownApi && this.suggestionDropdownApi.selectCurrent()) return void t.preventDefault();
						const {
							editorState: e
						} = this.state;
						let n = Tn(t, e);
						if (n = n || Ts(t, e)) return void this.onChange(n);
						const s = o.RichUtils.onTab(t, e, 2);
						this.onChange(s)
					}, this.handleOnUpArrow = t => {
						if (this.emotesTooltipApi && this.emotesTooltipApi.handleUpArrowInEditor() || this.suggestionDropdownApi && this.suggestionDropdownApi.moveUp()) return void t.preventDefault();
						const e = vn(t, this.state.editorState) || Bt(t, this.state.editorState);
						e && this.onChange(e), this.needSyncScroll = fc.Up
					}, this.handleOnDownArrow = t => {
						if (this.suggestionDropdownApi && this.suggestionDropdownApi.moveDown()) return void t.preventDefault();
						const e = kn(t, this.state.editorState) || It(t, this.state.editorState);
						e && this.onChange(e), this.needSyncScroll = fc.Down
					}, this.handleReturn = t => {
						const e = Rt(this.state.editorState);
						return e ? (this.onChange(e), t.preventDefault(), Gc) : this.suggestionDropdownApi && this.suggestionDropdownApi.selectCurrent() ? (t.preventDefault(), Gc) : Qc
					}, this.suppressAutocompleteForFocusedLink = () => {
						const t = Object(ds.b)(this.state.editorState);
						t && this.state.suppressAutocompleteForLink !== t.entityKey && this.setState({
							suppressAutocompleteForLink: t.entityKey
						})
					}, this.handleEscape = t => {
						this.emotesTooltipApi && this.emotesTooltipApi.handleEscapeKeyInEditor(), this.suppressAutocompleteForFocusedLink()
					}, this.handleOnCopy = t => {
						this.editorRef && Et(this.state.editorState, this.editorRef, t)
					}, this.handleOnCut = t => {
						const {
							editorState: e
						} = this.state;
						if (!this.editorRef) return;
						if (!Et(e, this.editorRef, t)) return;
						const n = rt(e) || jt(e) || Object(A.e)(e);
						n && this.onChange(n)
					}, this.handleOnPaste = t => {
						const {
							editorState: e
						} = this.state;
						if (!this.editorRef) return;
						if (this.handleFilesPaste(t, e), t.isPropagationStopped()) return;
						const n = gr(e, this.editorRef, t, this.props.editorType);
						n && this.onChange(n)
					}, this.handleFilesPaste = (t, e) => {
						const n = t.clipboardData.files;
						if (n && n.length) {
							const o = Array.from(n),
								s = e.getSelection().getEndKey();
							this.insertMediaFiles({
								files: o,
								blockKey: s,
								insertionMode: K.a.after,
								filesSource: b.FileSource.Clipboard
							}), t.stopPropagation()
						}
					}, this.handleOnMouseDown = t => {
						this.isMouseDown = !0
					}, this.handleOnMouseUp = t => {
						this.isMouseDown = !1
					}, this.handleDroppedFiles = (t, e) => Gc, this.handleDrop = (t, e, n) => Gc, this.handleBlur = () => {
						this.props.onBlur && this.props.onBlur()
					}, this.handlePastedText = (t, e) => Gc, this.onInternalSuggestionSelected = t => {
						this.onChange(Object(ds.g)(this.state.editorState, t)), this.isJustAutocompleteSelected = !0
					}, this.onToolbarEmoteButtonClick = t => {
						this.gifTooltipApi && this.gifTooltipApi.closeTooltip(), this.emotesTooltipApi && this.emotesTooltipApi.toggleTooltip(t)
					}, this.onToolbarGifButtonClick = t => {
						this.emotesTooltipApi && this.emotesTooltipApi.closeTooltip(), this.gifTooltipApi && this.gifTooltipApi.toggleTooltip(t)
					}, this.onToolbarLinkButtonClick = () => {
						if (!this.linksControllerApi) return;
						const {
							editorState: t
						} = this.state;
						this.linksControllerApi.editLinkInSelection(t.getSelection()) || Object(f.b)(void 0, "Current selection cannot be edited by link editor!")
					}, this.onToolbarFtuTooltipClick = () => {
						this.setState({
							shouldShowFtuMessage: !1
						})
					}, this.handleSwitchToMarkdownMode = () => {
						const {
							editorState: t
						} = this.state, {
							onSwitchEditorMode: e
						} = this.props, n = oi.a.toRichTextJSON(Object.assign({}, this.props.rteState, {
							isBound: !0,
							editorState: Object(A.c)(t)
						}));
						e && e(O.h.MARKDOWN, n), this.state.confirmModalOpen && this.toggleConfirmModal()
					}, this.onToolbarMarkdownSwitchClick = () => {
						const {
							editorState: t
						} = this.state;
						t && Ss(t) ? this.setState({
							confirmModalOpen: !0
						}) : this.handleSwitchToMarkdownMode()
					}, this.toggleConfirmModal = () => {
						this.setState({
							confirmModalOpen: !this.state.confirmModalOpen
						})
					}, this.onToolbarOverflowMenuClick = () => {
						this.setState({
							shouldShowFtuMessage: !1
						})
					}, this.insertMediaFiles = async t => {
						this.setState({
							mediaToInsert: t
						});
						const {
							files: e,
							filesSource: n
						} = t, o = e.slice(0, Zc);
						await this.props.startUploads(o, n, this.props.rteState.editorKey), this.insertValidatedMedia()
					}, this.onRetryUpload = t => {
						this.props.retryUpload(t)
					}, this.onFilesSelect = t => {
						const {
							editorState: e
						} = this.state, n = e.getSelection().getEndKey();
						this.insertMediaFiles({
							files: t,
							blockKey: n,
							insertionMode: K.a.after,
							filesSource: b.FileSource.FileSelector
						})
					}, this.onFilesDrop = (t, e, n) => {
						this.props.onTrackMediaDrop(t), this.insertMediaFiles({
							files: t,
							blockKey: e,
							insertionMode: n,
							filesSource: b.FileSource.DragAndDrop
						})
					}, this.onBlockMove = (t, e, n) => {
						const {
							editorState: o
						} = this.state, s = Object(A.o)(o, t, e, n);
						s && this.onChange(s)
					}, this.getAtomicBlocksRenderConfig = () => ({
						component: gn,
						props: {
							getEditorState: this.getEditorState,
							onChange: this.onChange,
							onRetryUpload: this.onRetryUpload,
							rteFocusableContentRef: this.state.focusableContentRef,
							editorType: this.props.editorType
						}
					}), this.blockRendererFn = t => {
						const e = t.getType();
						return e === v.a ? this.getAtomicBlocksRenderConfig() : e in mi ? mi[e] : void 0
					}, this.renderToolbar = t => c.a.createElement(Ge.b, t), this.entityElementRegistry = Jo(), this.tableOnEnterHandler = new jn;
					const {
						activeEmotes: e,
						editorType: n,
						noBorder: s,
						initialHeight: r,
						initialMinHeight: i,
						rteState: a
					} = t;
					let l;
					a.isBound ? l = a.editorState : Object(uo.F)(a.initialRTJSON) ? l = this.createInitialState(a.editorKey) : (l = o.EditorState.createWithContent(Nc(a.initialRTJSON, n, a.mediaMetadataMap, e), this.editorDecorators()), l = this.moveSelectionToEnd(l)), this.state = {
						noBorder: s,
						containerRef: null,
						confirmModalOpen: !1,
						editorState: l,
						focusableContentRef: null,
						inited: !1,
						initialHeight: r,
						initialMinHeight: i,
						mediaToInsert: null,
						shouldShowFtuMessage: !1,
						suppressAutocompleteForLink: null
					}
				}
				editorDecorators() {
					return new o.CompositeDecorator([ss(), Ls(), ms()])
				}
				moveSelectionToEnd(t) {
					const e = t.getCurrentContent().getBlockMap(),
						n = e.last().getKey(),
						s = e.last().getLength(),
						r = new o.SelectionState({
							anchorKey: n,
							anchorOffset: s,
							focusKey: n,
							focusOffset: s
						});
					return o.EditorState.acceptSelection(t, r)
				}
				createInitialState(t) {
					return o.EditorState.createWithContent(o.ContentState.createFromBlockArray([new o.ContentBlock({
						key: "".concat(t, "_initial")
					})]), this.editorDecorators())
				}
				componentDidMount() {
					if (this.props.rteRef && this.props.rteRef(this), h.a.write(bi), this.rteStateChanged(this.state.editorState, !1), this.editorRef) {
						const t = this.editorRef.refs.editor;
						t.addEventListener("scroll", this.hideTooltips), this.editorRootStyleMutationObserver = new MutationObserver(this.onEditorStyleChanged), this.editorRootStyleMutationObserver.observe(t, {
							attributes: !0,
							attributeFilter: ["style"]
						})
					}
					const {
						destSubreddit: t,
						emotesEnabled: e,
						giphyEnabled: n
					} = this.props;
					t && t.id && (e || n) && this.props.onFetchEditorProducts(t.id)
				}
				componentDidUpdate(t, e) {
					const n = this.getLinkForAutocomplete();
					if (n && this.updateSuggestionDropdownPosition) {
						const t = this.entityElementRegistry.get(n.entityKey);
						if (t) {
							const {
								left: e,
								bottom: n,
								height: o
							} = t.getBoundingClientRect();
							this.updateSuggestionDropdownPosition({
								left: e,
								top: n,
								bottom: n - o
							})
						}
					}
					this.needSyncScroll && (Ec(this.needSyncScroll), this.needSyncScroll = null)
				}
				componentWillUnmount() {
					if (this.props.rteRef && this.props.rteRef(null), this.insertValidatedMedia = () => {}, this.editorRef) {
						this.editorRef.refs.editor.removeEventListener("scroll", this.hideTooltips)
					}
					this.editorRootStyleMutationObserver && (this.editorRootStyleMutationObserver.disconnect(), this.editorRootStyleMutationObserver = null)
				}
				componentWillReceiveProps(t) {
					t.rteState !== this.props.rteState && t.rteState.isBound && t.rteState.editorState !== this.state.editorState && this.setState({
						editorState: t.rteState.editorState
					})
				}
				shouldComponentUpdate(t, e) {
					if (e !== this.state) return !0;
					if (!(t.rteState.isBound && t.rteState.editorState === this.state.editorState)) return !0;
					return !u()(t, this.props, (t, e, n) => "rteState" === n || void 0)
				}
				enterKeyBinding(t) {
					let e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
					const n = t.getCurrentContent(),
						o = t.getSelection(),
						s = o.getStartKey(),
						r = o.getEndKey(),
						i = o.getEndOffset(),
						c = n.getBlockForKey(s).getType(),
						a = n.getBlockForKey(r),
						l = a.getType(),
						d = i === a.getText().length;
					if (c === v.l || l === v.l) return k.EXEC_TABLE_ON_ENTER_HANDLER;
					if (o.isCollapsed()) {
						if (e && Object(ds.d)(t)) return k.LINKIFY_ON_ENTER;
						if (Object(v.r)(l) && d) return k.BREAK_HEADER_ENTITY;
						if (Object(v.s)(l)) {
							if (Yc.test(a.getText())) return a.getDepth() > 0 ? k.REDUCE_LIST_INDENT : k.REMOVE_EXTRA_LIST_ITEM
						} else if (l === v.e) {
							const t = n.getBlockBefore(r);
							if (t && t.getType() === v.e && Yc.test(t.getText()) && Yc.test(a.getText())) return k.RESET_CURRENT_AND_PREVIOUS_BLOCKS
						} else if (l === v.f) {
							const t = n.getBlockBefore(r),
								e = n.getBlockAfter(r);
							if (!a.getText() && t && t.getType() === v.f && !t.getText() && (!e || e.getType() !== v.f)) return k.RESET_CURRENT_AND_PREVIOUS_BLOCKS
						}
					}
				}
				getLinkForAutocomplete() {
					const {
						editorState: t,
						suppressAutocompleteForLink: e
					} = this.state;
					if (!this.isJustAutocompleteSelected && t.getSelection().getHasFocus()) {
						const n = Object(ds.b)(t);
						if (n && n.entityKey !== e) return n
					}
				}
				renderInternalLinkSuggestionDropdown() {
					const {
						isChatPost: t
					} = this.props, e = this.getLinkForAutocomplete();
					return e ? c.a.createElement(Gn.b, {
						aboveParent: t,
						dropdown: !0,
						onSetPositionUpdater: this.setSuggestionDropdownPositionUpdater
					}, e.entityText.startsWith(m.f) && c.a.createElement(Li, {
						onDropdownApi: this.setSuggestionDropdownApi,
						onSelect: this.onInternalSuggestionSelected,
						substring: e.internalName
					}), m.a.test(e.entityText) && c.a.createElement(Pi, {
						onDropdownApi: this.setSuggestionDropdownApi,
						onSelect: this.onInternalSuggestionSelected,
						substring: e.internalName
					})) : null
				}
				render() {
					const {
						className: t,
						activeEmotes: e,
						userCanUseGifs: n,
						allowMediaUploads: s = !1,
						dataTestId: r,
						destSubreddit: i,
						editorType: a,
						focusableContentRTEClassName: l,
						giphyEnabled: d,
						hideToolbar: u,
						rteState: h,
						isOverlay: g,
						language: m,
						onSubmit: f,
						placeholderText: b,
						showSubmitButton: y = !1,
						submitButtonClassName: E,
						toolbarPosition: S = "top",
						renderToolbar: x = this.renderToolbar
					} = this.props, {
						editorKey: O
					} = h, {
						containerRef: T,
						editorState: v,
						mediaToInsert: k,
						shouldShowFtuMessage: R,
						confirmModalOpen: B
					} = this.state, I = this.props.readOnly || !!k, _ = j(v), A = this.isEmpty(), K = !(!e || !Object.keys(e).length), M = x({
						allowMediaUploads: s,
						destSubreddit: i,
						editorKey: O,
						editorState: v,
						isOverlay: !!g,
						language: m,
						onChange: this.toolbarSetState,
						onFilesSelect: this.onFilesSelect,
						trackOnClick: this.props.trackToolbarClick,
						readOnly: I,
						onFtuTooltipClick: this.onToolbarFtuTooltipClick,
						onEmoteButtonClick: K ? this.onToolbarEmoteButtonClick : void 0,
						onGifButtonClick: d ? this.onToolbarGifButtonClick : void 0,
						onLinkButtonClick: this.onToolbarLinkButtonClick,
						onMarkdownButtonClick: this.onToolbarMarkdownSwitchClick,
						onOverflowMenuClick: this.onToolbarOverflowMenuClick,
						shouldShowFtuMessage: R,
						userCanUseGifs: !!n
					});
					return c.a.createElement("div", {
						className: t,
						ref: this.setContainerRef
					}, c.a.createElement(Jc, {
						className: Object(p.a)(l, {
							[Vc.a.showSubmitButton]: y
						}),
						noBorder: this.props.noBorder,
						isFocused: this.isFocused(),
						ref: this.setFocusableContentRef
					}, !u && "top" === S && M, T && c.a.createElement(Qo, {
						editorState: v,
						readOnly: I,
						language: m,
						onChange: this.onChange,
						onSetApi: this.setTableToolbarControllerApi,
						rteDomRef: T
					}), c.a.createElement("div", {
						className: Object(p.a)(Vc.a.editorWrapper, {
							[Vc.a.hasInitialHeight]: !!this.props.initialHeight,
							[Vc.a.hasInitialMinHeight]: !!this.props.initialMinHeight,
							[Vc.a.noBorder]: !!this.props.noBorder
						}),
						style: {
							"--rte-initial-height": this.props.initialHeight ? "".concat(this.props.initialHeight, "px") : void 0,
							"--rte-initial-min-height": this.props.initialMinHeight ? "".concat(this.props.initialMinHeight, "px") : void 0
						},
						"data-test-id": r,
						onCopyCapture: this.handleOnCopy,
						onCutCapture: this.handleOnCut,
						onPasteCapture: this.handleOnPaste,
						onMouseDown: this.handleOnMouseDown,
						onMouseUp: this.handleOnMouseUp
					}, c.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: "\n                .".concat(Pc.b, "[").concat(Pc.d, '="').concat(_, "-0-0\"]::after {\n                  bottom: 0;\n                  color: var(--newCommunityTheme-actionIcon);\n                  content: '").concat(b, "';\n                  cursor: text;\n                  left: 0;\n                  position: absolute;\n                  top: 0;\n                }\n              ")
						}
					}), c.a.createElement(er, {
						allowMediaUploads: s && !I,
						onBlockMove: this.onBlockMove,
						onFilesDrop: this.onFilesDrop,
						editorState: v,
						onChange: this.onChange
					}, c.a.createElement(Xo.Provider, {
						value: this.entityElementRegistry
					}, c.a.createElement(o.Editor, {
						readOnly: I,
						ref: this.setEditorRef,
						blockRendererFn: this.blockRendererFn,
						blockRenderMap: this.blockRenderMap,
						editorKey: O,
						editorState: v,
						keyBindingFn: this.keyBindingFN,
						handleBeforeInput: this.handleBeforeInput,
						handleKeyCommand: this.handleKeyCommand,
						handlePastedText: this.handlePastedText,
						handleDroppedFiles: this.handleDroppedFiles,
						handleDrop: this.handleDrop,
						onBlur: this.handleBlur,
						onChange: this.onChange,
						onFocus: this.onFocus,
						onTab: this.handleOnTab,
						onUpArrow: this.handleOnUpArrow,
						onDownArrow: this.handleOnDownArrow,
						onEscape: this.handleEscape,
						spellCheck: !0,
						handleReturn: this.handleReturn,
						customStyleMap: ci()
					})))), !u && "bottom" === S && M, c.a.createElement(Qr, {
						editorState: v,
						entityElementRegistry: this.entityElementRegistry,
						language: m,
						onSetApi: this.setLinksControllerApi,
						onChange: this.onChange
					}), K && !!i && a === Nt.a.Comment && c.a.createElement(is, {
						editorState: v,
						onChange: this.onChange,
						onSetApi: this.setEmotesTooltipApi,
						subreddit: i
					}), d && i && c.a.createElement(as, {
						editorState: v,
						onChange: this.onChange,
						onSetApi: this.setGifTooltipApi,
						subreddit: i,
						userCanUseGifs: !!n
					}), this.renderInternalLinkSuggestionDropdown(), y && c.a.createElement(ne.a, {
						"aria-label": Object(C.c)("submit"),
						className: Object(p.a)(E, Vc.a.insetSubmitButton, {
							[Vc.a.emptyContent]: A,
							[Vc.a.focusedContent]: this.isFocused()
						}),
						disabled: A,
						onClick: f,
						tabIndex: -1,
						type: "submit"
					}, c.a.createElement(Hc.a, null))), B && c.a.createElement(w.a, {
						toggleModal: this.toggleConfirmModal,
						onConfirm: this.handleSwitchToMarkdownMode,
						actionText: "continue",
						cancelActionText: "cancel",
						headerText: Object(C.c)("Switch to Markdown"),
						modalText: Object(C.c)("Switching to markdown will remove any images, gifs or videos from your post."),
						trackClick: () => {}
					}))
				}
			}
			e.a = Xc(Object(Ci.b)(t => c.a.createElement($c, qc({
				key: t.rteState.editorKey
			}, t))))
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/ImagePreview/index.m.less": function(t, e, n) {
			t.exports = {
				Img: "_1gJwMe53cjYITkMu0Ve8j-",
				img: "_1gJwMe53cjYITkMu0Ve8j-",
				Component: "_3VYFd7PKhTJ-0i22YsgFPv",
				component: "_3VYFd7PKhTJ-0i22YsgFPv"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/Placeholder/index.m.less": function(t, e, n) {
			t.exports = {
				Message: "_3cyJHYsdZdz4RWdmrzyYx-",
				message: "_3cyJHYsdZdz4RWdmrzyYx-",
				Component: "_3JSUHg1gLhxUj4PB_Pgw8a",
				component: "_3JSUHg1gLhxUj4PB_Pgw8a"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/StatusBar/index.m.less": function(t, e, n) {
			t.exports = {
				buttonBaseStyles: "_3R1ajPuzbs2MdbXedj3YXU",
				ControlRow: "_1rrSEjTxZcLOZTDNZlj5N4",
				controlRow: "_1rrSEjTxZcLOZTDNZlj5N4",
				Button: "_2rIEdliEXr7qNb-COL-zuO",
				button: "_2rIEdliEXr7qNb-COL-zuO",
				ErrButton: "_3CUr1530H3uD-ts9tKd9RA",
				errButton: "_3CUr1530H3uD-ts9tKd9RA",
				Status: "jXuqxr-x0kyU3BSfugjwM",
				status: "jXuqxr-x0kyU3BSfugjwM",
				hasError: "_4XwI6tILia1pR9HTda4wv",
				ProgressBar: "_1NvtB5J5UfhiHd0ix7TZgb",
				progressBar: "_1NvtB5J5UfhiHd0ix7TZgb",
				ProgressBarInner: "_29o2WRRYmrLU47NaFzQzxq",
				progressBarInner: "_29o2WRRYmrLU47NaFzQzxq",
				ErrorLine: "_3M-thbkBHHvsWjDt8edbhz",
				errorLine: "_3M-thbkBHHvsWjDt8edbhz",
				Component: "_1CqupI5I-zzAInIdLwphQg",
				component: "_1CqupI5I-zzAInIdLwphQg"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/VideoPreview/index.m.less": function(t, e, n) {
			t.exports = {
				VideoPlayer: "_3gstD1_YUjNWZqjtwdgU9t",
				videoPlayer: "_3gstD1_YUjNWZqjtwdgU9t",
				PosterImg: "_2C2yx7Rf_BKPOyll-aq_hI",
				posterImg: "_2C2yx7Rf_BKPOyll-aq_hI",
				Poster: "_1UCJLqzcYXck8Ahv0PlvVw",
				poster: "_1UCJLqzcYXck8Ahv0PlvVw",
				Component: "wSihDBKVJH6iP2jdDjRQ6",
				component: "wSihDBKVJH6iP2jdDjRQ6",
				playButton: "il4HPAfKcVtq-WQY-if85"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/index.m.less": function(t, e, n) {
			t.exports = {
				statusBar: "_33CSkXq7gXeXCM2zSal9BN",
				container: "_1FMEfWD94pPZ_HdEN_e7Xy",
				isCompact: "_3-T8BPflZuKw_F2VRPDbcX",
				isUploaded: "_3Lj2c902Oeb7yL_jYu9v5L",
				isSelected: "Eaps2a9y_jwhKHth8v14G",
				imagePreview: "_2nlrFrYbO0bIKFeZ3HMbn_",
				videoPreview: "_2MumquPHY8gruoy6114twC",
				placeholder: "_1-LSy7nvfNGWVhRWwwQu6A",
				alignCenter: "_3U9f0TNBM1K2bggm3KMHTk"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/SelectionHook/index.m.less": function(t, e, n) {
			t.exports = {
				HiddenDiv: "_13RYjdyxMuKrkV_EtlOjhg",
				hiddenDiv: "_13RYjdyxMuKrkV_EtlOjhg"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/Toolbar/index.m.less": function(t, e, n) {
			t.exports = {
				container: "_3hDtN0e5U4EpahGe25ye-b",
				alignCenter: "Vh7FGvkGyl5SeyJP4J1GG",
				content: "_3wXzBVn-uBvRcixZwQWkNX",
				FormatterButton: "_6DRydZXlG3Ko7_4xxYUhW",
				formatterButton: "_6DRydZXlG3Ko7_4xxYUhW",
				ToolbarContent: "_3qUkCQkbZvTB6uBQEQQfSZ",
				toolbarContent: "_3qUkCQkbZvTB6uBQEQQfSZ"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaBlock/index.m.less": function(t, e, n) {
			t.exports = {
				MediaContainer: "_12ZUhulrgf1BAChnRZHmZt",
				mediaContainer: "_12ZUhulrgf1BAChnRZHmZt",
				Container: "DK9d46mm9FgC8mFWPGlG_",
				container: "DK9d46mm9FgC8mFWPGlG_"
			}
		},
		"./src/reddit/components/RichTextEditor/media/MediaCaption/index.m.less": function(t, e, n) {
			t.exports = {
				wrapper: "_2eZK2IABgFqGZLMYPxwoNY"
			}
		},
		"./src/reddit/components/RichTextEditor/media/helpers.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return o
			})), n.d(e, "q", (function() {
				return b
			})), n.d(e, "h", (function() {
				return y
			})), n.d(e, "r", (function() {
				return E
			})), n.d(e, "l", (function() {
				return S
			})), n.d(e, "k", (function() {
				return x
			})), n.d(e, "n", (function() {
				return C
			})), n.d(e, "p", (function() {
				return O
			})), n.d(e, "d", (function() {
				return v
			})), n.d(e, "c", (function() {
				return k
			})), n.d(e, "e", (function() {
				return j
			})), n.d(e, "m", (function() {
				return w
			})), n.d(e, "g", (function() {
				return B
			})), n.d(e, "j", (function() {
				return I
			})), n.d(e, "i", (function() {
				return _
			})), n.d(e, "o", (function() {
				return A
			})), n.d(e, "b", (function() {
				return K
			})), n.d(e, "f", (function() {
				return L
			}));
			var o, s = n("./node_modules/draft-js/lib/Draft.js"),
				r = n("./node_modules/immutable/dist/immutable.js"),
				i = n("./node_modules/lodash/flatten.js"),
				c = n.n(i),
				a = n("./node_modules/lodash/last.js"),
				l = n.n(a),
				d = n("./src/reddit/helpers/media/index.ts"),
				u = n("./src/reddit/helpers/richTextEditor/index.ts"),
				p = n("./src/reddit/helpers/richTextJson/index.ts"),
				h = n("./src/reddit/models/Upload/index.ts"),
				g = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				m = n("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				f = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			! function(t) {
				t[t.Image = 0] = "Image", t[t.AnimatedImage = 1] = "AnimatedImage", t[t.Video = 2] = "Video"
			}(o || (o = {}));
			const b = t => t !== u.a.Comment,
				y = t => {
					if (!Object(f.o)(t.getType())) return;
					const e = t.getData(),
						n = e.get("mediaAsset"),
						o = e.get("uploadInfo");
					if (!n && !o) return;
					const s = e.get("thumbnail");
					return {
						makeGif: e.get("makeGif"),
						thumbnail: s,
						uploadInfo: o,
						mediaAsset: n
					}
				},
				E = (t, e, n) => {
					let o = t.getCurrentContent();
					const i = o.getBlockForKey(e),
						c = y(i),
						a = c && c.uploadInfo;
					if (!a) throw new Error("Block must contain `uploadInfo` data");
					if (n.makeGif === c.makeGif && n.thumbnail === c.thumbnail) return t;
					const l = Object(r.Map)(n),
						d = o.getBlockMap().toKeyedSeq().filter(t => {
							const e = y(t);
							return !!e && !!e.uploadInfo && e.uploadInfo.uploadKey === a.uploadKey
						}).map(t => t.mergeIn(["data"], l));
					return o = (o = o.mergeIn(["blockMap"], d)).merge({
						selectionAfter: t.getSelection()
					}), s.EditorState.push(t, o, g.b)
				},
				S = (t, e, n, o) => {
					let i = t.getCurrentContent();
					const a = c()(e.map(t => {
						const e = Object(d.f)(t.metadata.mimetype),
							n = (t => {
								if (t && t.metadata.videoFirstFrameUrl) {
									return {
										url: t.metadata.videoFirstFrameUrl,
										time: 0
									}
								}
							})(t);
						return [new s.ContentBlock({
							key: Object(s.genKey)(),
							type: f.a,
							data: Object(r.Map)({
								uploadInfo: {
									mediaType: e,
									uploadKey: t.key
								},
								thumbnail: n
							})
						}), new s.ContentBlock({
							key: Object(s.genKey)(),
							type: f.j
						})]
					}));
					i = Object(m.f)(i, n, a, o);
					const u = s.EditorState.push(t, i, g.e),
						p = l()(a);
					return s.EditorState.forceSelection(u, Object(m.b)(p, !0))
				},
				x = (t, e, n, i, c, a, l, d) => {
					const u = new s.ContentBlock({
							key: Object(s.genKey)(),
							type: f.a,
							data: Object(r.Map)({
								mediaAsset: {
									type: o.AnimatedImage,
									assetId: Object(p.b)(e, i),
									imageUrl: n,
									width: c,
									height: a
								}
							})
						}),
						h = Object(m.f)(t.getCurrentContent(), l, [u], d);
					let b = s.EditorState.push(t, h, g.e);
					b = s.EditorState.forceSelection(b, Object(m.b)(u, !0));
					const y = u.getKey();
					return b.getCurrentContent().getBlockAfter(y) || (b = K(b, y)), b
				};

			function C(t, e) {
				return t.isCollapsed() && t.getStartKey() === e && 0 === t.getStartOffset() && 0 === t.getEndOffset()
			}

			function O(t, e) {
				const n = t.getCurrentContent().getBlockAfter(e);
				return s.EditorState.forceSelection(t, Object(m.b)(n, !0))
			}
			const T = (t, e) => {
					const n = t.getBlockAfter(e);
					return t = Object(m.i)(t, e), n && Object(f.u)(n.getType()) && (t = Object(m.i)(t, n.getKey())), t
				},
				v = function(t, e) {
					let n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
						o = t.getCurrentContent();
					o = T(o, e);
					let r = n ? s.EditorState.push(t, o, g.f) : s.EditorState.set(t, {
						currentContent: o
					});
					return r = s.EditorState.forceSelection(r, o.getSelectionAfter())
				},
				k = t => {
					let e = t.getCurrentContent();
					R(e).forEach(t => {
						e = T(e, t.getKey())
					});
					const n = s.EditorState.push(t, e, g.f);
					return s.EditorState.forceSelection(n, e.getSelectionAfter())
				},
				j = t => {
					let e = t.getCurrentContent();
					const n = t.getSelection();
					e = s.Modifier.removeRange(e, n, "forward");
					let o = s.EditorState.push(t, e, g.f);
					return o = s.EditorState.forceSelection(o, e.getSelectionAfter())
				},
				R = t => t.getBlockMap().toSeq().filter(t => !!t && !!y(t)),
				w = (t, e) => t.getBlockMap().toSeq().filter(t => {
					const n = y(t),
						o = n && n.uploadInfo && n.uploadInfo.uploadKey;
					return !(!o || e[o] && e[o].url)
				}).isEmpty(),
				B = t => {
					const e = R(t),
						n = {
							gifvideo: 0,
							image: 0,
							video: 0,
							total: 0
						};
					return e.forEach(t => {
						const e = y(t);
						let s;
						s = e.makeGif ? "gifvideo" : e.uploadInfo && "video" === e.uploadInfo.mediaType || e.mediaAsset && e.mediaAsset.type === o.Video ? "video" : "image", n[s]++, n.total++
					}), n
				},
				I = t => !R(t).isEmpty(),
				_ = (t, e) => {
					const n = R(t).map(t => {
						const n = y(t),
							{
								uploadInfo: o,
								thumbnail: s
							} = n;
						if (!o || !s) return;
						const r = M(n),
							i = e[r];
						return i && i.url ? void 0 : Object.assign({}, s, {
							uploadKey: r
						})
					}).filter(Boolean).toArray();
					return n.length ? n : void 0
				},
				A = (t, e, n, o) => {
					let r = t.getCurrentContent();
					const i = r.getBlockForKey(e),
						c = r.getBlockAfter(e),
						a = [i];
					if (c && Object(f.u)(c.getType()) && a.push(c), a.find(t => t.getKey() === n)) return;
					const d = a.reduce((t, e) => t.remove(e.getKey()), r.getBlockMap());
					r = r.set("blockMap", d), r = Object(m.f)(r, n, a, o);
					const u = s.EditorState.push(t, r, g.e);
					return s.EditorState.forceSelection(u, Object(m.b)(l()(a), !0))
				},
				K = function(t, e) {
					let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : m.a.after;
					const o = Object(m.h)(),
						r = Object(m.f)(t.getCurrentContent(), e, [o], n),
						i = s.EditorState.push(t, r, g.e);
					return s.EditorState.forceSelection(i, s.SelectionState.createEmpty(o.getKey()))
				},
				M = t => t.thumbnail && t.uploadInfo ? "".concat(t.uploadInfo.uploadKey, "-thumbnail-").concat(t.thumbnail.time) : "",
				L = (t, e) => {
					let n = "",
						o = "";
					if (t.uploadInfo) {
						const {
							uploadKey: s
						} = t.uploadInfo, r = e[s];
						r && r.url && (n = Object(h.c)(r.url));
						const i = e[M(t)];
						i && i.url && (o = Object(h.c)(i.url))
					}
					return {
						assetId: n,
						thumbnailAssetId: o
					}
				}
		},
		"./src/reddit/components/RichTextEditor/spoiler/decorator.m.less": function(t, e, n) {
			t.exports = {
				spoiler: "_1AlhnBqYYVTQbTr33YViyK"
			}
		},
		"./src/reddit/components/RichTextEditor/spoiler/helpers.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return r
			})), n.d(e, "a", (function() {
				return i
			}));
			var o = n("./src/lib/forEachGroup/index.ts"),
				s = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const r = t => t.getStyle().has(s.k.SPOILER);

			function i(t, e, n) {
				const s = t.getCharacterList();
				Object(o.a)(s, {
					keyFn: r
				}, (t, n, o, s) => {
					n && e(o, s)
				})
			}
		},
		"./src/reddit/components/RichTextEditor/table/Renderer/index.m.less": function(t, e, n) {
			t.exports = {
				Cell: "_1J5sneEp0XXo0pFsMN7Kjs",
				cell: "_1J5sneEp0XXo0pFsMN7Kjs",
				Row: "_2Hd-Rc7z9gTKIz6JUGhbcl",
				row: "_2Hd-Rc7z9gTKIz6JUGhbcl",
				Table: "_9QFGu47IyMX1ID1xQid-8",
				table: "_9QFGu47IyMX1ID1xQid-8",
				isFakeSelectionActive: "_1QXaG0_iXh-LFDkah9HqP3"
			}
		},
		"./src/reddit/components/RichTextEditor/table/Toolbar/index.m.less": function(t, e, n) {
			t.exports = {
				formatterButton: "_1dNavKEU0lSO4mo9fYWTPm",
				ToolbarContent: "_1yPmb5QUbyAQX1wIs4FYQI",
				toolbarContent: "_1yPmb5QUbyAQX1wIs4FYQI",
				tooltip: "_3fnB5glctifL-mkYhH6aA1"
			}
		},
		"./src/reddit/components/RichTextEditor/table/ToolbarController/index.m.less": function(t, e, n) {
			t.exports = {
				ActionButton: "_2g2bsszGVtKe_XRKcRrpQi",
				actionButton: "_2g2bsszGVtKe_XRKcRrpQi",
				isPressed: "_2WwwYG59S_TJRq7FSdTVKK",
				ToolbarWrapper: "_3rXrpMuvoGNBbLE7TQQCB9",
				toolbarWrapper: "_3rXrpMuvoGNBbLE7TQQCB9"
			}
		},
		"./src/reddit/components/RichTextEditor/table/helpers.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return a
			})), n.d(e, "g", (function() {
				return l
			})), n.d(e, "m", (function() {
				return u
			})), n.d(e, "n", (function() {
				return p
			})), n.d(e, "j", (function() {
				return h
			})), n.d(e, "l", (function() {
				return g
			})), n.d(e, "f", (function() {
				return m
			})), n.d(e, "k", (function() {
				return f
			})), n.d(e, "c", (function() {
				return b
			})), n.d(e, "h", (function() {
				return y
			})), n.d(e, "b", (function() {
				return E
			})), n.d(e, "i", (function() {
				return S
			})), n.d(e, "e", (function() {
				return x
			})), n.d(e, "o", (function() {
				return C
			})), n.d(e, "d", (function() {
				return O
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./node_modules/immutable/dist/immutable.js"),
				r = n("./src/reddit/models/RichTextJson/index.ts"),
				i = n("./src/reddit/components/RichTextEditor/helpers/sliceContiguousBlocks.ts"),
				c = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const a = {
					[r.e]: "left",
					[r.f]: "right",
					[r.d]: "center"
				},
				l = t => {
					const e = t.getData();
					return {
						colIndex: e.get("colIndex"),
						rowIndex: e.get("rowIndex"),
						colCount: e.get("colCount"),
						alignment: e.get("alignment")
					}
				},
				d = ["data"],
				u = (t, e) => t.mergeIn(d, e),
				p = (t, e, n) => t.merge({
					text: t.getText().slice(e, n),
					characterList: t.getCharacterList().slice(e, n)
				}),
				h = function(t, e) {
					let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
						s = arguments.length > 3 ? arguments[3] : void 0;
					const r = e.map(t => t.getText()).join(n),
						i = n ? s || o.CharacterMetadata.create() : null,
						c = [];
					return e.forEach(t => {
						c.push(...t.getCharacterList().toArray()), i && e.length > 1 && c.push(i)
					}), t.merge({
						text: r,
						characterList: c
					})
				},
				g = (t, e) => {
					const n = [];
					for (let r = 0; r < e; r++)
						for (let e = 0; e < t; e++) n.push(new o.ContentBlock({
							key: Object(o.genKey)(),
							type: c.l,
							data: Object(s.Map)({
								colCount: t,
								colIndex: e,
								rowIndex: r
							})
						}));
					return n
				},
				m = (t, e) => ({
					minCol: Math.min(t.colIndex, e.colIndex),
					minRow: Math.min(t.rowIndex, e.rowIndex),
					maxCol: Math.max(t.colIndex, e.colIndex),
					maxRow: Math.max(t.rowIndex, e.rowIndex)
				}),
				f = (t, e) => {
					const {
						minCol: n,
						minRow: o,
						maxCol: s,
						maxRow: r
					} = m(t, e);
					return (t, e) => o <= t && t <= r && n <= e && e <= s
				},
				b = (t, e) => t.rowIndex < e.rowIndex ? -1 : t.rowIndex > e.rowIndex ? 1 : t.colIndex - e.colIndex,
				y = (t, e) => t === e || !(!t || !e) && 0 === b(t, e),
				E = (t, e) => b(l(t), l(e)),
				S = t => {
					if (Object(c.v)(t.getType())) {
						return 0 === l(t).rowIndex
					}
					return !1
				},
				x = (t, e, n) => {
					const o = (e, n) => {
						if (e) {
							const o = Object(i.a)(t, e);
							return o && n && -1 !== o.blocks.indexOf(n) ? [o, o] : [o, n ? Object(i.a)(t, n) : null]
						}
						return n ? o(n, null).reverse() : [null, null]
					};
					return o(Object(c.v)(e.getType()) ? e : null, Object(c.v)(n.getType()) ? n : null)
				},
				C = function(t, e, n) {
					let o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
					const s = {
						isBackward: o
					};
					return e && (s.anchorKey = e.getKey(), s.anchorOffset = o ? e.getLength() : 0), n && (s.focusKey = n.getKey(), s.focusOffset = o ? 0 : n.getLength()), t.merge(s)
				},
				O = t => {
					if (!t.length) return [];
					const e = t[0].length;
					return t.map((t, n) => t.map((t, o) => u(t, {
						rowIndex: n,
						colIndex: o,
						colCount: e
					})))
				}
		},
		"./src/reddit/components/ThumbnailSelector/index.m.less": function(t, e, n) {
			t.exports = {
				Component: "uqOt5KqJAqw5pe-WNxa0a",
				component: "uqOt5KqJAqw5pe-WNxa0a",
				TitleRow: "HEiFtUR3s93dQ2jUWWnxr",
				titleRow: "HEiFtUR3s93dQ2jUWWnxr",
				Close: "_3RlS_q06rJ_8dy_UNp3Ev7",
				close: "_3RlS_q06rJ_8dy_UNp3Ev7",
				CloseWrapper: "_3lFQIq1yN1kLxjZb5AvHjL",
				closeWrapper: "_3lFQIq1yN1kLxjZb5AvHjL",
				ThumbnailsContainer: "_2sw7c1Sfzp0uz-RIcglCo",
				thumbnailsContainer: "_2sw7c1Sfzp0uz-RIcglCo",
				Image: "_2H32szY9NZ1aKr6j4Ced7u",
				image: "_2H32szY9NZ1aKr6j4Ced7u",
				thumbnail: "_2Ks8P6YD1-8_Ju3IrYpPJf",
				isSelected: "_3oA67AGI49fKcqDP970t4U",
				ButtonRow: "_2Bo7ys2El8ABMVNqYUdrA5",
				buttonRow: "_2Bo7ys2El8ABMVNqYUdrA5",
				CancelButton: "mBq3crGX9-xOOg-b-1V85",
				cancelButton: "mBq3crGX9-xOOg-b-1V85"
			}
		},
		"./src/reddit/components/ThumbnailSelector/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/debounce.js"),
				r = n.n(s),
				i = n("./node_modules/lodash/range.js"),
				c = n.n(i),
				a = n("./node_modules/react/index.js"),
				l = n.n(a),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				p = n("./src/higherOrderComponents/asModal/index.tsx"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/helpers/media/index.ts"),
				m = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				f = n("./src/reddit/icons/svgs/Close/index.tsx"),
				b = n("./src/reddit/layout/row/Inline/index.tsx"),
				y = n("./src/reddit/components/ThumbnailSelector/index.m.less"),
				E = n.n(y);
			const S = 10,
				x = Object(p.a)(u.a.div("Component", E.a)),
				C = u.a.wrapped(b.a, "TitleRow", E.a),
				O = u.a.wrapped(f.a, "Close", E.a),
				T = u.a.div("CloseWrapper", E.a),
				v = u.a.div("ThumbnailsContainer", E.a),
				k = u.a.img("Image", E.a),
				j = t => l.a.createElement("div", {
					className: Object(d.a)(E.a.thumbnail, Object(m.a)({
						isLoading: t.isLoading
					}), {
						[E.a.isSelected]: t.isSelected
					}),
					onClick: t.onClick,
					ref: t.elementRef
				}, t.thumbnail.url && l.a.createElement(k, {
					src: t.thumbnail.url
				})),
				R = u.a.wrapped(b.a, "ButtonRow", E.a),
				w = h.f,
				B = u.a.wrapped(h.i, "CancelButton", E.a),
				I = (t, e) => {
					if (1 === t) return [0];
					const n = c()(0, e, e / (t - 1));
					return n.push(e), n.map(t => +t.toFixed(2))
				};
			class _ extends l.a.Component {
				constructor(t) {
					super(t), this.isThumbnailsAreGenerating = !1, this.setSelectedElementRef = t => this.selectedElement = t, this.setThumbnails = r()(t => this.setState({
						thumbnails: t
					}), 100), this.scrollIntoView = () => {
						this.selectedElement && this.selectedElement.scrollIntoView({})
					}, this.setSelected = t => {
						this.setState({
							selectedIndex: t
						})
					}, this.onSelectButton = () => {
						const {
							selectedIndex: t
						} = this.state, e = this.state.thumbnails[t];
						this.props.onSelect({
							time: e.time,
							url: e.url
						})
					};
					const {
						thumbnailsCount: e = S,
						selected: n,
						videoDuration: o
					} = this.props, s = I(e, o).map(t => ({
						time: t,
						url: n && n.time === t ? n.url : void 0
					})), i = n ? s.findIndex(t => n.time === t.time) : -1;
					this.state = {
						thumbnails: s,
						selectedIndex: i
					}
				}
				componentDidMount() {
					this.scrollIntoView(), this.props.isOpen && this.generateVideoThumbnails()
				}
				componentDidUpdate(t) {
					this.props.isOpen && !t.isOpen && (this.scrollIntoView(), this.generateVideoThumbnails())
				}
				async generateVideoThumbnails() {
					const {
						thumbnails: t
					} = this.state;
					if (this.isThumbnailsAreGenerating || !t.find(t => !t.url)) return;
					this.isThumbnailsAreGenerating = !0;
					const e = document.createElement("video"),
						n = document.createElement("canvas");
					await Object(g.m)(e, this.props.videoSource);
					let o = 0;
					e.currentTime = t[o].time, await Object(g.d)(e, n, e => (t[o].url = e.dataUrl, o++, this.setThumbnails(t), o < t.length ? t[o].time : null)), this.setState({
						thumbnails: t
					}), this.isThumbnailsAreGenerating = !1
				}
				render() {
					if (!this.props.isOpen) return null;
					const {
						selectedIndex: t,
						thumbnails: e
					} = this.state;
					return l.a.createElement(x, {
						withOverlay: !0
					}, l.a.createElement(C, null, o.fbt._("Choose thumbnail", null, {
						hk: "XlI0H"
					}), l.a.createElement(T, {
						onClick: this.props.onToggleModal
					}, l.a.createElement(O, null))), l.a.createElement(v, null, e.map((e, n) => l.a.createElement(j, {
						key: n,
						elementRef: n === t ? this.setSelectedElementRef : void 0,
						isLoading: !e.url,
						onClick: () => this.setSelected(n),
						isSelected: n === t,
						thumbnail: e
					}))), l.a.createElement(R, null, l.a.createElement(B, {
						onClick: this.props.onToggleModal
					}, o.fbt._("Cancel", null, {
						hk: "1f5Zk8"
					})), l.a.createElement(w, {
						onClick: this.onSelectButton
					}, o.fbt._("Select", null, {
						hk: "3s53WD"
					}))))
				}
			}
			e.a = _
		},
		"./src/reddit/controls/SubredditDropdown/index.m.less": function(t, e, n) {
			t.exports = {
				entry: "BR2J4z5ndMj6r3-QW2hHI",
				mIsFocused: "_2KXTnIrbZ1Fr5F4nZyXeKS",
				list: "_17g61LC45mhwjs-g79qbZK"
			}
		},
		"./src/reddit/helpers/richTextEditor/index.ts": function(t, e, n) {
			"use strict";
			var o;
			n.d(e, "a", (function() {
					return o
				})),
				function(t) {
					t[t.Post = 0] = "Post", t[t.Comment = 1] = "Comment"
				}(o || (o = {}))
		},
		"./src/reddit/helpers/styles/mixins/fonts.tsx": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return o
			})), n.d(e, "b", (function() {
				return s
			})), n.d(e, "c", (function() {
				return r
			}));
			const o = "Arial, sans-serif",
				s = "Noto Sans, ".concat(o),
				r = "Noto Mono, ".concat("Menlo, Monaco, Consolas, monospace");
			"\n  font-family: ".concat(s, ";\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 21px;\n")
		},
		"./src/reddit/icons/svgs/FormattingAlignCenter/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_1ZVHRoTDdo57082D2GcC80"
			}
		},
		"./src/reddit/icons/svgs/FormattingAlignLeft/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_33vXt91MK_ualpifvvw_3v"
			}
		},
		"./src/reddit/icons/svgs/FormattingAlignRight/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_34rYEsgbWk8eOQx_bs7fTV"
			}
		},
		"./src/reddit/icons/svgs/FormattingBlockQuotes/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_32TQMV98QwoweVXtMHpwr2"
			}
		},
		"./src/reddit/icons/svgs/FormattingBold/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_1329vPT9OSGZyEvo6Fqss"
			}
		},
		"./src/reddit/icons/svgs/FormattingBold/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingBold/index.m.less"),
				c = n.n(i);
			e.a = t => s.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, t.className),
				style: t.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M12.44,9.72v0a3.07,3.07,0,0,0,2.67-3.22c0-2.84-2.42-3.46-5-3.46H4.51V17H10.4c2.61,0,5.09-1,5.09-3.86C15.49,10.91,14.14,10,12.44,9.72ZM7.54,5.38H9.85c1.65,0,2.31.61,2.31,1.7s-.74,1.68-2.35,1.68H7.54ZM10,14.65H7.54V10.95H9.89c1.7,0,2.59.61,2.59,1.83S11.72,14.65,10,14.65Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingCodeBlock/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "F0bObcodUF6At5SPF9bIr"
			}
		},
		"./src/reddit/icons/svgs/FormattingDeleteRow/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_8Y1-XP7A1OOfoU_mUqKcg"
			}
		},
		"./src/reddit/icons/svgs/FormattingHeading/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_2C-VR7luDjfFqzNiJQEpk0"
			}
		},
		"./src/reddit/icons/svgs/FormattingHyperlink/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_2-0pxD6-cM6bWeb73TNNhJ"
			}
		},
		"./src/reddit/icons/svgs/FormattingHyperlink/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingHyperlink/index.m.less"),
				c = n.n(i);
			e.a = t => s.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, t.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M17.15,2.86a6.33,6.33,0,1,0-9,9A1,1,0,0,0,9.6,10.4a4.39,4.39,0,1,1,4.92.83,7.41,7.41,0,0,1,.14,1.44c0,.23,0,.46,0,.68a6.33,6.33,0,0,0,2.51-10.5Z"
			}), s.a.createElement("path", {
				d: "M10.4,8.19a1,1,0,0,0,0,1.41,4.39,4.39,0,1,1-4.92-.83,7.41,7.41,0,0,1-.14-1.44c0-.23,0-.46,0-.68a6.33,6.33,0,1,0,6.44,1.54A1,1,0,0,0,10.4,8.19Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingInsertRow/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_1PNKgIKbpvIWTVU3LO0PJQ"
			}
		},
		"./src/reddit/icons/svgs/FormattingItalics/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_32WqBD1jOzjyQPJdFZ8Rrt"
			}
		},
		"./src/reddit/icons/svgs/FormattingItalics/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingItalics/index.m.less"),
				c = n.n(i);
			e.a = t => s.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, t.className),
				style: t.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("polygon", {
				points: "7.24 17 10.3 17 12.1 6.85 9.05 6.85 7.24 17"
			}), s.a.createElement("polygon", {
				points: "9.7 3 9.28 5.46 12.34 5.46 12.76 3 9.7 3"
			}))
		},
		"./src/reddit/icons/svgs/FormattingMonospace/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_1cI-FoGkiT7RNcT2BsWaRU"
			}
		},
		"./src/reddit/icons/svgs/FormattingMonospace/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingMonospace/index.m.less"),
				c = n.n(i);
			e.a = t => s.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, t.className),
				style: t.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M18.8,9.4l-3-4a1,1,0,1,0-1.6,1.2L16.75,10,14.2,13.4a1,1,0,1,0,1.6,1.2l3-4A1,1,0,0,0,18.8,9.4Z"
			}), s.a.createElement("path", {
				d: "M5.6,5.2a1,1,0,0,0-1.4.2l-3,4a1,1,0,0,0,0,1.2l3,4a1,1,0,0,0,1.6-1.2L3.25,10,5.8,6.6A1,1,0,0,0,5.6,5.2Z"
			}), s.a.createElement("path", {
				d: "M12.24,1A1,1,0,0,0,11,1.76l-4,16A1,1,0,1,0,9,18.24l4-16A1,1,0,0,0,12.24,1Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingSpoiler/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_1KIFUYxvtUxuRVhS-FGTns"
			}
		},
		"./src/reddit/icons/svgs/FormattingSpoiler/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingSpoiler/index.m.less"),
				c = n.n(i);
			e.a = t => s.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, t.className),
				style: t.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M10,1.5A8.5,8.5,0,1,0,18.5,10,8.51,8.51,0,0,0,10,1.5Zm.71,13-.15.12-.18.1-.18.05a.73.73,0,0,1-.2,0,1,1,0,0,1-.71-.29,1,1,0,0,1-.21-.32A1,1,0,0,1,9,13.83a1,1,0,0,1,.08-.38,1,1,0,0,1,.21-.32,1,1,0,0,1,.91-.28l.18.06.18.09.15.13a1,1,0,0,1,.29.7A1,1,0,0,1,10.71,14.54Zm-.22-3.6a.5.5,0,0,1-1,0l-1-4.67A.5.5,0,0,1,9,5.67h2a.5.5,0,0,1,.49.6Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingStrikethrough/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_3C1w798INaJPgFxfklr4an"
			}
		},
		"./src/reddit/icons/svgs/FormattingStrikethrough/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingStrikethrough/index.m.less"),
				c = n.n(i);
			e.a = t => s.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, t.className),
				style: t.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M11.86,12a1.36,1.36,0,0,1,.7,1.19c0,1.07-1,1.59-2.42,1.59a4.12,4.12,0,0,1-3.75-2.36L4.08,13.79A6.21,6.21,0,0,0,10,17.2c3.86,0,5.55-2,5.55-4.22a4,4,0,0,0-.12-1Z"
			}), s.a.createElement("path", {
				d: "M17,9H11.61l-1.09-.31c-1.82-.51-2.85-.9-2.85-2,0-.82.71-1.39,2-1.39a4.13,4.13,0,0,1,3.41,2L15.2,5.65A6.23,6.23,0,0,0,9.69,2.8c-3,0-5,1.56-5,4.14A3.31,3.31,0,0,0,5.31,9H3a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingSuperscript/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_1DvEfZosXHE4A0gHsGOjEU"
			}
		},
		"./src/reddit/icons/svgs/FormattingSuperscript/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingSuperscript/index.m.less"),
				c = n.n(i);
			e.a = t => s.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, t.className),
				style: t.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M6.94,3,2,17H4.83L5.9,13.89h4.75l1,3.11h3.11L9.86,3Zm-.28,8.67L8.29,6.92h0l1.6,4.75Z"
			}), s.a.createElement("path", {
				d: "M16.06,3H14.92L13,8.49h1.11l.42-1.22h1.86l.41,1.22H18ZM14.81,6.4l.64-1.86h0l.63,1.86Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingTable/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_12fGjUaA4qUfdUrX7rnmTK"
			}
		},
		"./src/reddit/icons/svgs/FormattingTable/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingTable/index.m.less"),
				c = n.n(i);
			e.a = t => s.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, t.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M17,2H3A1,1,0,0,0,2,3V17a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V3A1,1,0,0,0,17,2ZM4,6H9V9.8H4Zm7,0h5V9.8H11ZM4,11.8H9V16H4ZM11,16V11.8h5V16Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingUnorderedList/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "LfxAZX1Sm9aiJZiizUSZO"
			}
		},
		"./src/reddit/icons/svgs/FormattingUnorderedList/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/FormattingUnorderedList/index.m.less"),
				c = n.n(i);
			e.a = t => s.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, t.className),
				style: t.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M17,9H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"
			}), s.a.createElement("path", {
				d: "M17,15H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"
			}), s.a.createElement("path", {
				d: "M8,5h9a1,1,0,0,0,0-2H8A1,1,0,0,0,8,5Z"
			}), s.a.createElement("path", {
				d: "M4.88,9.43a1.29,1.29,0,0,0-.13-.26,2.17,2.17,0,0,0-.19-.23,1.55,1.55,0,0,0-2.12,0,2.16,2.16,0,0,0-.19.23,2.2,2.2,0,0,0-.14.26A2.3,2.3,0,0,0,2,9.71,1.32,1.32,0,0,0,2,10a1.5,1.5,0,0,0,1.5,1.5,1.55,1.55,0,0,0,.57-.11A1.52,1.52,0,0,0,5,10a1.32,1.32,0,0,0,0-.29A1.27,1.27,0,0,0,4.88,9.43Z"
			}), s.a.createElement("path", {
				d: "M4.33,14.75l-.26-.14-.28-.08a1.42,1.42,0,0,0-.58,0l-.28.08-.26.14a2.16,2.16,0,0,0-.23.19A1.52,1.52,0,0,0,2,16a1.47,1.47,0,0,0,.44,1.06,1.52,1.52,0,0,0,.49.33,1.53,1.53,0,0,0,1.14,0,1.61,1.61,0,0,0,.49-.33A1.52,1.52,0,0,0,5,16a1.5,1.5,0,0,0-.44-1.06A2.06,2.06,0,0,0,4.33,14.75Z"
			}), s.a.createElement("path", {
				d: "M2.44,2.94A1.52,1.52,0,0,0,2,4a1.47,1.47,0,0,0,.44,1.06,1.59,1.59,0,0,0,.48.33,1.65,1.65,0,0,0,.58.11,1.55,1.55,0,0,0,.57-.11,1.5,1.5,0,0,0,.49-.33,1.5,1.5,0,0,0,0-2.12A1.55,1.55,0,0,0,2.44,2.94Z"
			}))
		},
		"./src/reddit/icons/svgs/ImagePost/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_1pAYDrDlDFEJk994qhxbYj"
			}
		},
		"./src/reddit/icons/svgs/ImagePost/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/ImagePost/index.m.less"),
				c = n.n(i);
			e.a = t => s.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, t.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M16,2H4A2,2,0,0,0,2,4V16a2,2,0,0,0,2,2H16a2,2,0,0,0,2-2V4A2,2,0,0,0,16,2Zm0,14H10.14a.49.49,0,0,1,.05-.48l3.15-4.26a.5.5,0,0,1,.38-.2.53.53,0,0,1,.4.17L16,13.35ZM4,13.51,7.26,8.82a.54.54,0,0,1,.42-.21.5.5,0,0,1,.41.23l2.85,4.34L8.84,16H4Zm10.4-7.1a1.7,1.7,0,1,1-1.7-1.7A1.7,1.7,0,0,1,14.4,6.41Z"
			}))
		},
		"./src/reddit/icons/svgs/Send/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			e.a = t => s.a.createElement("svg", {
				className: t.className,
				id: t.id,
				viewBox: "0 0 18 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M17.98 8.87c-.012-.093-.03-.182-.062-.27-.017-.043-.034-.085-.055-.126-.013-.026-.02-.057-.034-.082l-.07-.1c-.018-.02-.04-.03-.055-.046-.073-.083-.158-.145-.252-.204-.032-.02-.053-.055-.088-.072L3.88 1.12c-.35-.176-.764-.158-1.096.05-.332.208-.534.576-.534.973V5c0 .507.33.954.81 1.097L9 7.857H3.375c-.175 0-.347.04-.503.12L.622 9.12c-.48.243-.724.8-.582 1.325.135.5.582.84 1.085.84.027 0 .054 0 .08-.003l1.045-.075v4.65c0 .396.202.764.534.972.18.112.386.17.59.17.173 0 .346-.04.505-.12l13.483-6.85c.08-.044.134-.075.184-.113.05-.038.092-.085.136-.13.012-.013.026-.022.037-.036.092-.107.147-.21.19-.32.013-.03.02-.06.03-.09.013-.045.033-.086.042-.132.008-.046.013-.09.017-.138 0-.023-.008-.043-.008-.063 0-.017.008-.03.008-.048 0-.032-.017-.058-.02-.09z"
			})))
		},
		"./src/reddit/icons/svgs/ThumbnailSelect/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_3QNLLzw_kUPhkWkxg22tT9"
			}
		},
		"./src/reddit/icons/svgs/ThumbnailSelect/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/ThumbnailSelect/index.m.less"),
				c = n.n(i);
			e.a = t => s.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, t.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, s.a.createElement("path", {
				d: "M0 0h20v20H0z"
			}), s.a.createElement("path", {
				fill: "#A5A4A4",
				d: "M6 3h8c1.1046 0 2 .8954 2 2v10c0 1.1046-.8954 2-2 2H6c-1.1046 0-2-.8954-2-2V5c0-1.1046.8954-2 2-2zm11 1c1.1046 0 2 .8954 2 2v8c0 1.1046-.8954 2-2 2V4zM3 4v12h-.6667C1.597 16 1 15.1734 1 14.1538V5.8462C1 4.8266 1.597 4 2.3333 4H3z"
			})))
		},
		"./src/reddit/icons/svgs/Video/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			e.a = t => s.a.createElement("svg", {
				className: t.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("g", {
				transform: "translate(3, 4)"
			}, s.a.createElement("path", {
				d: "M15.4927,2.1514 C15.1797,1.9734 14.7947,1.9784 14.4857,2.1644 L11.9997,3.6554 L11.9997,2.0004 C11.9997,0.8974 11.1027,0.0004 9.9997,0.0004 L1.9997,0.0004 C0.8967,0.0004 -0.0003,0.8974 -0.0003,2.0004 L-0.0003,10.0004 C-0.0003,11.1034 0.8967,12.0004 1.9997,12.0004 L9.9997,12.0004 C11.1027,12.0004 11.9997,11.1034 11.9997,10.0004 L11.9997,8.3664 L14.4907,9.8394 C14.6477,9.9324 14.8237,9.9784 14.9997,9.9784 C15.1707,9.9784 15.3417,9.9344 15.4957,9.8474 C15.8077,9.6694 15.9997,9.3384 15.9997,8.9784 L15.9997,3.0214 C15.9997,2.6614 15.8057,2.3284 15.4927,2.1514"
			})))
		},
		"./src/reddit/selectors/editorContent.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return s
			}));
			var o = n("./src/reddit/actions/postCreation/constants.ts");
			const s = (t, e) => t.creations.api.editor.converting.pending[e || o.l]
		}
	}
]);
//# sourceMappingURL=ChatMessageInput~MembershipPaywallPage~RichTextEditor.ab1e5eef2cacb961aa03.js.map