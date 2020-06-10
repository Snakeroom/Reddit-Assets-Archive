// https://www.redditstatic.com/desktop2x/ChatMessageInput~MembershipPaywallPage~RichTextEditor.4d6f4d01e854250c7e6f.js
// Retrieved at 6/10/2020, 6:40:06 PM by Reddit Dataminer v1.0.0
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
				p = t => ((t, e) => (e.forEach(e => t.add(e, null)), t))(t, u),
				h = s()().tlds(i.a).set({
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
			n.d(e, "d", (function() {
				return R
			})), n.d(e, "c", (function() {
				return B
			})), n.d(e, "a", (function() {
				return _
			})), n.d(e, "b", (function() {
				return I
			}));
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
				k = n("./src/reddit/actions/postCreation/constants.ts");
			const T = Object(a.a)(k.v),
				v = Object(a.a)(k.w),
				j = Object(a.a)(k.u),
				R = t => async (e, n) => {
					e(T());
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
					e(r ? j(r.error) : v())
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
					k = !1,
					T = !1,
					v = !1;
				const j = t => {
					if (!v && n && k) {
						v = !0;
						const o = c(),
							s = Date.now() - E,
							r = Object(g.c)(g.a.PostComposer);
						T ? S({
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
					k = !0, Object(d.j)(a.id, () => {
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
								type: i.L
							}
						};
						if (a.startsWith("image/")) {
							if (r && !r.images) {
								const t = o.fbt._("Images are not allowed in r/{subredditName}", [o.fbt._param("subredditName", c)], {
									hk: "3C2E7Q"
								});
								return w(i.L, t)
							}
							if ("image/gif" === a) {
								if (e.size > i.Q) return w(i.G)
							} else if (e.size > i.S) return w(i.J);
							const t = await Object(m.a)(l);
							d.width = t.width, d.height = t.height
						} else if (a.startsWith("video/")) {
							if (e.size > i.X) return w(i.Wb);
							let t;
							try {
								t = await Object(f.h)(l, !0)
							} catch (u) {
								return w(i.L)
							}
							if (r) {
								const {
									videos: e,
									images: n
								} = r;
								if (n && !e && t.duration > i.Y) {
									const t = o.fbt._("Sorry, r/{subredditName} doesn't allow videos. Please upload a video less than 60 seconds to convert to animated GIF.", [o.fbt._param("subredditName", c)], {
										hk: "46ULiz"
									});
									return w(i.L, t)
								}
								if (!n && !e) {
									const t = o.fbt._("Videos are not allowed in r/{subredditName}", [o.fbt._param("subredditName", c)], {
										hk: "4uTUZb"
									});
									return w(i.L, t)
								}
							}
							if (t.duration > i.W) {
								const t = o.fbt._("Video is too long. Maximum video length is 15 minutes.", null, {
									hk: "26m2mj"
								});
								return w(i.L, t)
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
					})), T = !0, s && s();
					const E = t.name,
						S = await (async (t, e, n) => Object(u.a)(Object(p.a)(t, [h.a]), {
							endpoint: "".concat(t.apiUrl, "/api/media/asset.json"),
							method: i.bb.POST,
							data: {
								filepath: e,
								mimetype: n
							}
						}))(l(), E, b.mimetype);
					return S.ok ? (C = S.body.asset.asset_id, {
						uploadLease: S.body.args
					}) : {
						error: S.error || void 0
					}
				}, !0)), j(!1)
			}, _ = t => async (e, n, o) => {
				let {
					apiContext: s
				} = o;
				const r = n().uploads[t];
				r && !Object(b.d)(r) && await e(B(r.file, r.key, r.metadata.fileSource))
			}, I = (t, e, n) => async (s, i) => {
				const a = t.map((t, o) => new Promise(async o => {
						const i = Object(b.e)(b.b.RTE_MEDIA, "".concat(n, "-").concat(r()().slice(-6)));
						await s(B(t, i, e, () => o(i))), o(i)
					})),
					d = await Promise.all(a);
				s(function(t) {
					let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
					return async (n, s) => {
						const {
							uploads: r
						} = s(), i = t.map(t => r[t]).filter(t => t.status === b.a.FAILED && !t.metadata.mimetype).map(t => t.error), a = i.length > e ? e - 1 : i.length, d = i.length - a;
						i.slice(0, a).forEach(t => n(Object(l.e)({
							duration: l.a,
							kind: C.b.Error,
							text: Object(c.a)(t)
						}))), d > 0 && n(Object(l.e)({
							duration: l.a,
							kind: C.b.Error,
							text: o.fbt._({
								"*": "Couldn't add {number} more files",
								_1: "Couldn't add 1 more file"
							}, [o.fbt._plural(d, "number")], {
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
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				a = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				l = n("./src/reddit/layout/row/Inline/index.tsx"),
				d = n("./src/reddit/components/MakeGifToggle/index.m.less"),
				u = n.n(d);
			e.a = t => r.a.createElement(l.a, {
				className: Object(i.a)(u.a.container, t.disabled ? u.a.mDisabled : null, t.isCompact ? u.a.mCompactSwitch : null),
				onMouseDown: t => t.preventDefault(),
				onClick: e => {
					e.stopPropagation(), !t.disabled && t.onClick()
				}
			}, r.a.createElement(l.a, {
				className: u.a.content
			}, r.a.createElement(a.a, {
				className: u.a.toggleSwitch,
				on: t.on
			}), r.a.createElement("label", null, o.fbt._("Make GIF", null, {
				hk: "2ig2GG"
			}))), t.tooltip ? r.a.createElement(c.a, {
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
			n.d(e, "b", (function() {
				return h
			})), n.d(e, "c", (function() {
				return g
			})), n.d(e, "a", (function() {
				return m
			}));
			n("./node_modules/core-js/modules/es6.regexp.split.js");
			var o = n("./node_modules/lodash/includes.js"),
				s = n.n(o);
			var r = n("./src/reddit/helpers/dom/index.ts"),
				i = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
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
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/PostCreationForm/DivButton/index.tsx"),
				d = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = n("./src/reddit/selectors/editorContent.ts"),
				p = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				h = n("./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.m.less"),
				g = n.n(h);
			const m = a.a.wrapped(d.a, "LoadingIcon", g.a),
				f = a.a.span("Text", g.a),
				b = a.a.wrapped(l.a, "Button", g.a),
				y = Object(c.c)({
					isConverting: (t, e) => Object(u.a)(t, e.draftKey)
				}),
				E = Object(i.b)(y);
			e.a = E(t => r.a.createElement(b, {
				"aria-label": o.fbt._("Switch to markdown", null, {
					hk: "OxsM0"
				}),
				tabIndex: -1,
				className: t.className,
				onClick: t.onClick
			}, t.isConverting && r.a.createElement(m, {
				sizePx: 12
			}), !t.shouldHideTooltip && r.a.createElement(p.a, {
				text: o.fbt._("Switch to markdown", null, {
					hk: "4mWw83"
				})
			}), r.a.createElement(f, null, o.fbt._("Markdown mode", null, {
				hk: "VQcEn"
			}))))
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
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/FormattingBlockQuotes/index.m.less"),
				l = n.n(a);
			var d = t => r.a.createElement("svg", {
					className: Object(c.a)(l.a.icon, t.className),
					style: t.style,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("polygon", {
					points: "8.63 4 5.36 4 2 9.8 2 16 9.2 16 9.2 9.24 6.75 9.24 8.63 4"
				}), r.a.createElement("polygon", {
					points: "15.56 9.24 17.39 4 14.16 4 10.8 9.8 10.8 16 18 16 18 9.24 15.56 9.24"
				})),
				u = n("./src/reddit/icons/svgs/FormattingBold/index.tsx"),
				p = n("./src/reddit/icons/svgs/FormattingCodeBlock/index.m.less"),
				h = n.n(p);
			var g = t => r.a.createElement("svg", {
					className: Object(c.a)(h.a.icon, t.className),
					style: t.style,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					d: "M15,2H13a1,1,0,0,0,0,2h2a1,1,0,0,1,1,1V15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V13a1,1,0,0,0-2,0v2a3,3,0,0,0,3,3H15a3,3,0,0,0,3-3V5A3,3,0,0,0,15,2Z"
				}), r.a.createElement("path", {
					d: "M2.79,5a.71.71,0,0,0,.53-.2.74.74,0,0,0,.19-.54V4.08l0-.48H5.07V8.4H4.9a1,1,0,0,0-.69.18A.79.79,0,0,0,4,9.2a.79.79,0,0,0,.21.61A1,1,0,0,0,4.9,10H7.1a1,1,0,0,0,.69-.19A.79.79,0,0,0,8,9.2a.78.78,0,0,0-.21-.61A1,1,0,0,0,7.1,8.4H6.93V3.6H8.44l0,.48a1.19,1.19,0,0,0,.18.72.7.7,0,0,0,.56.2.75.75,0,0,0,.59-.2A1,1,0,0,0,10,4.14V4.08L9.93,2.9q0-.64-.18-.77A1.06,1.06,0,0,0,9.11,2H2.89a1.06,1.06,0,0,0-.63.13q-.16.13-.18.77L2,4.08v.06a.94.94,0,0,0,.19.65A.78.78,0,0,0,2.79,5Z"
				})),
				m = n("./src/reddit/icons/svgs/FormattingHeading/index.m.less"),
				f = n.n(m);
			var b = t => r.a.createElement("svg", {
					className: Object(c.a)(f.a.icon, t.className),
					style: t.style,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("polygon", {
					points: "6.57 3 6.57 5.57 10.73 5.57 10.73 17 13.82 17 13.82 5.57 18 5.57 18 3 6.57 3"
				}), r.a.createElement("polygon", {
					points: "2 9.65 4.68 9.65 4.68 17 6.66 17 6.66 9.65 9.35 9.65 9.35 8 2 8 2 9.65"
				})),
				y = n("./src/reddit/icons/svgs/FormattingItalics/index.tsx"),
				E = n("./src/reddit/icons/svgs/FormattingMonospace/index.tsx"),
				S = n("./src/reddit/icons/svgs/FormattingOrderedList/index.tsx"),
				x = n("./src/reddit/icons/svgs/FormattingSpoiler/index.tsx"),
				C = n("./src/reddit/icons/svgs/FormattingStrikethrough/index.tsx"),
				O = n("./src/reddit/icons/svgs/FormattingSuperscript/index.tsx"),
				k = n("./src/reddit/icons/svgs/FormattingUnorderedList/index.tsx"),
				T = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				v = n("./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.m.less"),
				j = n.n(v);

			function R() {
				return (R = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			const w = t => i.a.wrapped(t, "Icon", j.a),
				B = function(t) {
					let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
					return n => {
						const o = w(t);
						return r.a.createElement(o, R({}, n, {
							style: {
								padding: e
							}
						}))
					}
				},
				_ = B(d),
				I = B(u.a),
				A = B(g),
				K = B(b),
				M = B(y.a),
				L = B(E.a),
				D = B(S.a),
				N = B(x.a, 1),
				F = B(C.a),
				P = B(O.a),
				U = B(k.a),
				H = {
					type: "style",
					name: "bold",
					Icon: I,
					style: T.k.BOLD,
					tooltipTranslation: () => o.fbt._("Bold", null, {
						hk: "16qNLn"
					})
				},
				z = {
					type: "style",
					name: "italics",
					Icon: M,
					style: T.k.ITALIC,
					tooltipTranslation: () => o.fbt._("Italics", null, {
						hk: "3hxpiB"
					})
				},
				W = {
					type: "style",
					name: "strikethrough",
					Icon: F,
					style: T.k.STRIKETHROUGH,
					tooltipTranslation: () => o.fbt._("Strikethrough", null, {
						hk: "U4hXC"
					})
				},
				V = {
					type: "style",
					name: "inline_code",
					Icon: L,
					style: T.k.MONOSPACE,
					tooltipTranslation: () => o.fbt._("Inline Code", null, {
						hk: "1eNxEt"
					})
				},
				q = {
					type: "style",
					name: "spoiler",
					Icon: N,
					style: T.k.SPOILER,
					tooltipTranslation: () => o.fbt._("Spoiler", null, {
						hk: "1tb6Ht"
					})
				},
				G = {
					type: "style",
					name: "superscript",
					Icon: P,
					style: T.k.SUPERSCRIPT,
					tooltipTranslation: () => o.fbt._("Superscript", null, {
						hk: "sqKFn"
					})
				},
				Q = {
					type: "block",
					name: "heading",
					Icon: K,
					block: T.b.H1,
					tooltipTranslation: () => o.fbt._("Heading", null, {
						hk: "4jnBPs"
					})
				},
				Y = {
					type: "block",
					name: "unordered_list",
					Icon: U,
					block: T.i.UNORDERED,
					tooltipTranslation: () => o.fbt._("Bulleted List", null, {
						hk: "21Yx7R"
					})
				},
				Z = {
					type: "block",
					name: "ordered_list",
					Icon: D,
					block: T.i.ORDERED,
					tooltipTranslation: () => o.fbt._("Numbered List", null, {
						hk: "4BmF1X"
					})
				},
				J = {
					type: "block",
					name: "block_quote",
					Icon: _,
					block: T.e,
					tooltipTranslation: () => o.fbt._("Quote Block", null, {
						hk: "1xUsGm"
					})
				},
				X = {
					type: "block",
					name: "code_block",
					Icon: A,
					block: T.f,
					tooltipTranslation: () => o.fbt._("Code Block", null, {
						hk: "2y19DH"
					})
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
			n.d(e, "c", (function() {
				return L
			})), n.d(e, "g", (function() {
				return F
			})), n.d(e, "f", (function() {
				return P
			})), n.d(e, "h", (function() {
				return U
			})), n.d(e, "e", (function() {
				return H
			})), n.d(e, "a", (function() {
				return z
			})), n.d(e, "d", (function() {
				return W
			})), n.d(e, "b", (function() {
				return V
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
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
				k = n("./src/reddit/components/RichTextEditor/Toolbar/MediaInputButton/index.m.less"),
				T = n.n(k);
			const v = a.a.wrapped(C.a, "ImageIcon", T.a),
				j = a.a.wrapped(O.a, "VideoIcon", T.a),
				R = a.a.input("HiddenInput", T.a);
			class w extends r.Component {
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
						type: n
					} = this.props, o = "image" === n, r = t.blocks[h.a];
					let c = !0;
					if (e && e.allowedPostTypes) {
						const {
							images: t,
							videos: n
						} = e.allowedPostTypes;
						c = o ? t : n
					}
					return i.a.createElement(y.a, {
						Icon: o ? v : j,
						active: r.isActive,
						enabled: r.isEnabled && c,
						tooltip: o ? s.fbt._("Add an image", null, {
							hk: "4bqU7J"
						}) : s.fbt._("Add a video", null, {
							hk: "2dn6oZ"
						}),
						onClick: this.onButtonClick
					}, i.a.createElement(R, {
						multiple: !0,
						innerRef: t => this.hiddenInputEl = t,
						onChange: this.onFileInputChange,
						onClick: this.onHiddenInputClick,
						type: "file",
						accept: Array.from(o ? x.a : x.b).join()
					}))
				}
			}
			var B = n("./src/reddit/components/RichTextEditor/Toolbar/index.m.less"),
				_ = n.n(B);

			function I() {
				return (I = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			const A = Object(E.f)(l.a),
				K = Object(E.f)(d.a),
				M = t => i.a.createElement(y.a, I({}, t, {
					tooltipContentClass: _.a.tooltip
				})),
				L = a.a.div("SectionSpacer", _.a),
				D = a.a.div("Spacer", _.a),
				N = (t, e, n, s, r) => {
					const {
						name: c,
						Icon: a,
						tooltipTranslation: l
					} = t, d = l();
					if ("style" === t.type) {
						const {
							style: o
						} = t;
						return i.a.createElement(M, {
							Icon: a,
							active: e.styles[o].isActive,
							enabled: e.styles[o].isEnabled,
							key: c,
							tooltip: d,
							onClick: () => {
								const t = Object(u.c)(o, n);
								s(t), r(c, ((t, e) => t.getCurrentInlineStyle().contains(e))(t, o))
							}
						})
					} {
						const {
							block: l
						} = t;
						return i.a.createElement(M, {
							Icon: a,
							active: e.blocks[l].isActive,
							enabled: e.blocks[l].isEnabled,
							key: c,
							tooltip: d,
							onClick: () => {
								const t = Object(u.i)(l, n);
								s(t), r(c, ((t, e) => o.RichUtils.getCurrentBlockType(t) === e)(t, l))
							}
						})
					}
				},
				F = (t, e, n, o, s) => t.map(t => N(t, e, n, o, s)),
				P = [E.b, E.e],
				U = [E.j, E.g, E.k, E.i],
				H = [E.d, E.l, E.h, E.a, E.c],
				z = t => i.a.createElement(M, {
					Icon: A,
					active: t.controlsState.link.isActive,
					enabled: t.controlsState.link.isEnabled,
					tooltip: s.fbt._("Link", null, {
						hk: "e4PGW"
					}),
					onClick: () => {
						t.onLinkButtonClick(), t.trackOnClick("link", !0)
					}
				}),
				W = t => i.a.createElement(M, {
					Icon: K,
					active: t.controlsState.blocks[h.l].isActive,
					enabled: t.controlsState.blocks[h.l].isEnabled,
					tooltip: s.fbt._("Table", null, {
						hk: "3cHfLT"
					}),
					onClick: () => {
						t.onChange(b(t.editorState, 3, 2)), t.trackOnClick("table", !0)
					}
				}),
				V = t => {
					const {
						className: e,
						allowMediaUploads: n = !1,
						destSubreddit: o,
						editorState: s,
						isOverlay: r,
						onChange: a,
						onFilesSelect: l,
						readOnly: d,
						trackOnClick: u,
						onLinkButtonClick: h,
						onMarkdownButtonClick: g
					} = t, m = Object(p.a)(s);
					return d && Object(p.b)(m), i.a.createElement("div", {
						className: Object(c.a)(_.a.toolbarContent, e, {
							[_.a.isSticky]: !r
						})
					}, F(P, m, s, a, u), i.a.createElement(z, {
						controlsState: m,
						trackOnClick: u,
						onLinkButtonClick: h
					}), F(U, m, s, a, u), i.a.createElement(L, null), F(H, m, s, a, u), i.a.createElement(L, null), i.a.createElement(W, {
						controlsState: m,
						editorState: s,
						trackOnClick: u,
						onChange: a
					}), n && i.a.createElement(w, {
						destSubreddit: o,
						controlsState: m,
						onClick: () => u("image_upload"),
						onFilesInput: l,
						type: "image"
					}), n && i.a.createElement(w, {
						destSubreddit: o,
						controlsState: m,
						onClick: () => u("video_upload"),
						onFilesInput: l,
						type: "video"
					}), i.a.createElement(D, null), i.a.createElement(S.a, {
						onClick: g
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
			n.d(e, "c", (function() {
				return i
			})), n.d(e, "b", (function() {
				return c
			})), n.d(e, "a", (function() {
				return a
			})), n.d(e, "d", (function() {
				return l
			}));
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
				Container: "_3YZ-jFfccqhepgq1dDuLEv",
				container: "_3YZ-jFfccqhepgq1dDuLEv",
				FocusableContent: "_3wl1bRnSzxHkKJfvqakrNI",
				focusableContent: "_3wl1bRnSzxHkKJfvqakrNI",
				showSubmitButton: "_3Imp2y02BMA96sEJAe9M3M",
				mRedesign: "_2sl29I15jbNPrKiiB9kfVf",
				editorWrapper: "_2baJGEALPiEMZpWB2iWQs7",
				mExpanded: "_1UhKfcyzvaWRtDdXZmzg6D",
				userIcon: "_1wS6Q6S9RvAbzxaselfK2i",
				CurrentUserIcon: "_1RdaOAYbtM4Zwt3M_YE8kp",
				currentUserIcon: "_1RdaOAYbtM4Zwt3M_YE8kp",
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
				s = (n("./node_modules/draft-js/dist/Draft.css"), n("./node_modules/fbt/lib/FbtPublic.js")),
				r = n("./node_modules/lodash/filter.js"),
				i = n.n(r),
				c = n("./node_modules/react/index.js"),
				a = n.n(c),
				l = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				u = n("./node_modules/shallowequal/index.js"),
				p = n.n(u),
				h = n("./src/lib/classNames/index.ts"),
				g = n("./src/lib/fastdom/index.ts"),
				m = n("./src/lib/lessComponent.tsx"),
				f = n("./src/lib/linkMatchers/customLinks.ts"),
				b = n("./src/lib/logs/console.ts"),
				y = n("./src/telemetry/models/Media.ts"),
				E = n("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				S = n("./src/reddit/actions/postCreation/mediaUpload.ts"),
				x = n("./src/reddit/featureFlags/index.ts"),
				C = n("./src/reddit/helpers/trackers/postComposer.ts"),
				O = n("./src/reddit/models/Gold/Powerups/index.ts"),
				k = n("./src/reddit/models/PostCreationForm/index.ts"),
				T = n("./src/reddit/models/Upload/index.ts"),
				v = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const j = {
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
			const R = t => {
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
				w = t => {
					const e = t.getCharacterList().map(t => o.CharacterMetadata.create({
						entity: t.getEntity()
					}));
					return t.set("characterList", e)
				};
			var B = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				_ = n("./src/reddit/components/RichTextEditor/constants/draftEditorCommands.ts"),
				I = n("./node_modules/lodash/escape.js"),
				A = n.n(I),
				K = n("./src/reddit/components/RichTextEditor/media/helpers.ts"),
				M = n("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				L = n("./src/reddit/components/RichTextEditor/entity/entityTypes.ts"),
				D = n("./node_modules/immutable/dist/immutable.js"),
				N = n("./src/reddit/helpers/dom/index.ts"),
				F = (n("./node_modules/core-js/modules/es6.array.sort.js"), n("./node_modules/lodash/chunk.js")),
				P = n.n(F),
				U = n("./node_modules/lodash/flatten.js"),
				H = n.n(U),
				z = n("./node_modules/lodash/takeWhile.js"),
				W = n.n(z),
				V = n("./src/reddit/components/RichTextEditor/helpers/modifiers.ts"),
				q = n("./src/reddit/components/RichTextEditor/table/helpers.ts"),
				G = n("./node_modules/lodash/last.js"),
				Q = n.n(G),
				Y = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				Z = n("./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts"),
				J = n("./node_modules/lodash/find.js"),
				X = n.n(J);
			var $ = (t, e) => {
				const n = t.getSelection(),
					s = t.getCurrentContent(),
					r = s.getBlockForKey(n.getAnchorKey()),
					i = s.getBlockForKey(n.getFocusKey()),
					[c, a] = Object(q.e)(s, r, i);
				if (!c || c !== a) return t;
				const l = Object(q.g)(r),
					d = Object(q.g)(i),
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
					} = Object(q.f)(l, d),
					E = u.filter(t => {
						const {
							rowIndex: n,
							colIndex: o
						} = Object(q.g)(t);
						return "rows" === e ? !(f <= n && n <= y) : !(m <= o && o <= b)
					});
				E.sort(q.b);
				const S = "rows" === e ? h : E.length / g,
					x = H()(Object(q.d)(P()(E, S))),
					C = s.getBlocksAsArray(),
					O = [...C.slice(0, p), ...x, ...C.slice(p + u.length)],
					k = s.merge({
						blockMap: o.BlockMapBuilder.createFromArray(O)
					}),
					T = {
						colIndex: m,
						rowIndex: f
					};
				let v = X()(x, t => Object(q.h)(T, Object(q.g)(t)));
				v || (v = x.length ? x[x.length - 1] : C[p > 0 ? p - 1 : 0]);
				const j = o.SelectionState.createEmpty(v.getKey()).merge({
					focusOffset: v.getLength(),
					anchorOffset: v.getLength()
				});
				let R = o.EditorState.push(t, k, Y.e);
				return R = o.EditorState.forceSelection(R, j)
			};
			var tt = function(t) {
				let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				const n = t.getSelection();
				if (n.isCollapsed()) return;
				if (n.getStartKey() === n.getEndKey() && !e) return;
				const s = t.getCurrentContent(),
					r = s.getBlockForKey(n.getAnchorKey()),
					i = s.getBlockForKey(n.getFocusKey()),
					[c, a] = Object(q.e)(s, r, i);
				if (!c || c !== a) return;
				const l = {};
				let d = n;
				if (r === i) {
					const t = Object(q.n)(i, 0, n.getStartOffset()),
						e = Object(q.n)(i, n.getEndOffset());
					l[i.getKey()] = Object(q.j)(i, [t, e]), d = n
				} else {
					if (c.blocks[0].getKey() === n.getStartKey() && Q()(c.blocks).getKey() === n.getEndKey()) return $(t, "rows");
					Object(Z.a)(s, n, (t, e) => {
						l[e] = Object(q.n)(t, 0, 0)
					}), d = n.merge({
						anchorOffset: 0,
						focusOffset: 0
					})
				}
				const u = s.merge({
					blockMap: s.getBlockMap().merge(l),
					selectionAfter: d
				});
				return o.EditorState.push(t, u, Y.f)
			};
			const et = (t, e, n, o) => {
					const {
						htmlParts: s
					} = e;
					t.forEach((t, r) => {
						s.push("<".concat(n, " ").concat(o[r], " ").concat('style="margin: 0px; padding: 4px 9px; border: 1px solid rgb(229, 227, 218);"', ">")), yt(t, e), s.push("</".concat(n, ">"))
					})
				},
				nt = t => {
					const e = t[0],
						n = t[t.length - 1],
						o = [...t].sort(q.b),
						{
							minCol: s,
							maxCol: r
						} = Object(q.f)(Object(q.g)(e), Object(q.g)(n)),
						i = r - s + 1;
					return Object(q.d)(P()(o, i))
				},
				ot = (t, e, n) => {
					n ? yt(t[0], e) : ((t, e) => {
						const {
							editor: n,
							htmlParts: o
						} = e, s = n.getEditorKey(), r = t[0].map(t => {
							const {
								alignment: e
							} = Object(q.g)(t);
							return e ? 'align="'.concat(q.a[e], '"') : ""
						}), [i, ...c] = t;
						o.push('\n    <table data-editor="'.concat(s, '">\n      <thead>\n        <tr>')), et(i, e, "th", r), o.push("\n        </tr>\n      </thead>\n      <tbody>"), c.forEach(t => {
							o.push("\n        <tr>"), et(t, e, "td", r), o.push("\n        </tr>")
						}), o.push("\n      </tbody>\n    </table>")
					})(nt(t), e)
				},
				st = (t, e, n) => {
					n ? e.textParts.push(xt(t[0], e)) : ((t, e) => {
						const {
							textParts: n
						} = e;
						t.forEach(t => {
							n.push(t.map(t => xt(t, e)).join(" "))
						})
					})(nt(t), e)
				},
				rt = t => {
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
					ot(o, t, r), st(o, t, r), ((t, e, n, o) => {
						if (n)
							if (o) {
								const n = t[0].merge({
									data: Object(D.Map)(),
									type: v.n
								});
								e.blocksParts = [n]
							} else e.blocksParts = H()(nt(t))
					})(o, t, s, r), e.push(...o)
				},
				it = t => tt(t, !0),
				ct = (t, e, n) => {
					const s = Object(v.v)(n.first().getType()),
						r = Object(v.v)(n.last().getType()),
						i = t.getBlockForKey(e.getAnchorKey()),
						c = t.getBlockForKey(e.getFocusKey()),
						[a, l] = Object(q.e)(t, i, c);
					return a && a === l ? ((t, e, n, s) => {
						const r = Object(v.v)(s.first().getType()),
							i = t.getBlockForKey(e.getAnchorKey()),
							c = t.getBlockForKey(e.getFocusKey()),
							{
								blocks: a,
								start: l
							} = n;
						a.sort(q.b);
						const d = Object(q.g)(a[0]);
						let {
							colCount: u
						} = d;
						const p = P()(a, u);
						let h = p.length;
						const {
							minRow: g,
							minCol: m
						} = Object(q.f)(Object(q.g)(i), Object(q.g)(c)), f = s.toArray();
						if (r) {
							const n = W()(f, t => Object(v.v)(t.getType()));
							n.sort(q.b);
							const s = Object(q.g)(n[0]).colCount,
								r = P()(n, s),
								i = r.length,
								c = g + i - 1,
								d = m + s - 1;
							if (n.length !== i * s) throw new Error("Invalid table fragment!");
							if (d >= u && p.forEach(t => {
									t.push(...Object(q.l)(d - u + 1, 1))
								}), u = p[0].length, c >= h) {
								const t = P()(Object(q.l)(u, c - h + 1), u);
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
							const b = Object(q.d)(p),
								y = H()(b),
								E = t.getBlocksAsArray(),
								S = [...E.slice(0, l), ...y, ...E.slice(l + a.length)],
								x = Object(q.o)(e, p[g][m], p[c][d]);
							return t.merge({
								blockMap: o.BlockMapBuilder.createFromArray(S),
								selectionAfter: x
							})
						} {
							const n = p[g][m],
								s = Object(q.j)(n, f, " ");
							let r = e;
							return e.getStartKey() !== e.getEndKey() && (r = Object(q.o)(e, n, n)), V.c(t, r, o.BlockMapBuilder.createFromArray([s]))
						}
					})(t, e, a, n) : a || l || !s && !r ? void 0 : ((t, e, n) => {
						const s = Object(v.v)(n.first().getType()),
							r = Object(v.v)(n.last().getType()),
							i = n.toArray();
						s && i.unshift(Object(M.h)()), r && i.push(Object(M.h)());
						const c = o.BlockMapBuilder.createFromArray(i);
						return V.c(t, e, c)
					})(t, e, n)
				};
			var at = n("./node_modules/draft-js/lib/removeEntitiesAtEdges.js"),
				lt = n.n(at);
			var dt = (t, e) => {
				const n = e.getStartKey(),
					o = e.getStartOffset(),
					s = e.getEndKey(),
					r = e.getEndOffset(),
					i = lt()(t, e).getBlockMap(),
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
			const ut = (t, e) => {
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
				pt = (t, e) => {
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
						s.push("<li>"), yt(n, e, !0), o && o.forEach(t => pt(t, e)), s.push("</li>")
					})(t, e)), s.push("</".concat(r, ">"))
				},
				ht = (t, e) => {
					const {
						children: n
					} = t;
					n.forEach((t, n) => gt(t, n, e))
				},
				gt = (t, e, n) => {
					const {
						block: o,
						childrenLists: s
					} = t, {
						textParts: r
					} = n, i = " ".repeat(o.getDepth()), c = o.getType() === v.b.ORDERED_LIST ? "".concat(e + 1, ".") : "-", a = xt(o, n);
					r.push("".concat(i).concat(c, " ").concat(a)), s && s.forEach(t => ht(t, n))
				},
				mt = t => {
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
								const e = ut(t, o);
								s = e.list, o = e.item, r = n
							} else {
								for (; r !== n;) s = s.parentItem ? s.parentItem.parentList : s, r--;
								if (e === s.type) o = {
									block: t,
									parentList: s
								}, s.children.push(o);
								else {
									const e = ut(t, s.parentItem);
									s = e.list, o = e.item
								}
							}
						}), n
					})(s);
					pt(r, t), ht(r, t), t.processed.push(...s)
				};
			var ft = (t, e) => {
				const n = t.toArray().filter(t => !Object(v.t)(t.getType()));
				if (1 === n.length) {
					n[0].getType() !== v.n && n.push(new o.ContentBlock({
						key: Object(o.genKey)(),
						type: v.n
					}))
				}
				const s = o.ContentState.createFromBlockArray(n),
					r = JSON.stringify(Object(o.convertToRaw)(s));
				return "<div ".concat("data-reddit-rtjson", '="').concat(A()(r), '">').concat(e, "</div>")
			};
			const bt = () => !!window.clipboardData,
				yt = function(t, e) {
					let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					const {
						htmlParts: o
					} = e, s = Et(t, e);
					s && s.forEach(t => o.push(n ? t.innerHTML : t.outerHTML))
				},
				Et = (t, e) => {
					const {
						selection: n,
						editor: o
					} = e, s = n.getStartKey(), r = n.getEndKey(), i = t.getKey(), c = o.refs.editor, a = Object(M.d)(i, c);
					return a ? i === s || i === r ? Object(N.c)(a) : [a] : null
				};
			var St = (t, e, n) => {
				const s = t.getCurrentContent(),
					r = t.getSelection(),
					i = jt(t) || dt(s, r);
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
							mt(a);
							break;
						case Object(v.v)(t):
							rt(a);
							break;
						default:
							Ct(a)
					}
				}
				const l = a.textParts.join("\n"),
					d = (t => Object(D.OrderedMap)(t.map(t => {
						const e = Object(o.genKey)();
						return [e, t.set("key", e)]
					})))(a.blocksParts);
				return ((t, e) => {
					let {
						html: n,
						text: o
					} = e;
					bt() ? window.clipboardData.setData("text", o) : (n && t.clipboardData.setData("text/html", n), t.clipboardData.setData("text/plain", o))
				})(n, {
					html: ft(d, a.htmlParts.join("")),
					text: l
				}), n.stopPropagation(), n.preventDefault(), e.setClipboard(d), d
			};
			const xt = (t, e) => {
					const n = t.getText(),
						o = e.editorState.getCurrentContent(),
						s = [];
					let r = -1;
					return t.getCharacterList().forEach((t, e) => {
						const i = t && t.getEntity();
						if (i && void 0 !== e) {
							const t = o.getEntity(i);
							t.getType() === L.a.EMOTE && (s.push(n.substring(r + 1, e)), s.push(":".concat(t.getData().id, ":")), r = e)
						}
					}), s.push(n.substring(r + 1, n.length)), s.join("")
				},
				Ct = t => {
					const e = t.remaining.shift();
					((t, e) => yt(t, e))(e, t), ((t, e) => {
						e.textParts.push(xt(t, e))
					})(e, t), t.processed.push(e)
				},
				Ot = (t, e) => {
					const n = t.first(),
						s = t.last();
					let r = t;
					if (Object(v.u)(n.getType()) ? r = r.set(r.keySeq().first(), n.merge({
							type: v.n
						})) : Object(v.o)(n.getType()) && (r = o.BlockMapBuilder.createFromArray([Object(M.h)(), ...r.toArray()])), Object(v.u)(s.getType()) || !Object(K.q)(e)) {
						const t = Object(M.h)();
						r = r.set(t.getKey(), t)
					} else if (Object(v.o)(s.getType())) {
						const t = Object(M.h)().merge({
							type: v.j
						});
						r = r.set(t.getKey(), t)
					}
					return r
				},
				kt = (t, e, n) => {
					const o = t.getBlockForKey(e.getStartKey());
					if (Object(v.u)(o.getType())) {
						const o = n.first(),
							s = n.set(n.keySeq().first(), Object(M.h)(o.getKey(), o.getText()).merge({
								type: v.j
							}));
						return V.c(t, e, s)
					}
				},
				Tt = (t, e, n) => {
					const o = ((t, e, n) => {
						const o = e ? e.getText() : "";
						return '<span data-editor="'.concat(n, '">').concat(A()(o), "</span>")
					})(0, e, n.editor.getEditorKey());
					n.htmlParts.push(o)
				},
				vt = t => {
					const {
						remaining: e
					} = t, n = e.shift(), o = e[0] && Object(v.u)(e[0].getType()) ? e.shift() : void 0;
					Tt(0, o, t), ((t, e) => {
						const n = t ? xt(t, e) : "";
						e.textParts.push(n)
					})(o, t), t.processed.push(n), o && t.processed.push(o)
				},
				jt = t => {
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
				Rt = t => {
					const e = jt(t);
					if (e) return Object(K.d)(t, e.first().getKey())
				},
				wt = t => {
					const e = t.getSelection();
					let n = t.getCurrentContent();
					const s = n.getBlockForKey(e.getStartKey()),
						r = n.getBlockForKey(e.getEndKey());
					if (Object(v.t)(s.getType()) || Object(v.t)(r.getType())) {
						if (e.isCollapsed())
							if (Object(v.u)(s.getType())) n = V.d(n, e), n = o.Modifier.setBlockType(n, n.getSelectionAfter(), v.n);
							else if (Object(v.o)(s.getType())) {
							let s = n.getBlockAfter(e.getStartKey());
							return s || (s = (t = Object(K.b)(t, e.getStartKey(), M.a.after)).getCurrentContent().getBlockAfter(e.getStartKey())), o.EditorState.forceSelection(t, Object(M.b)(s, !0))
						}
						return o.EditorState.push(t, n, "split-block")
					}
				},
				Bt = (t, e) => {
					const n = t.getSelection(),
						s = t.getCurrentContent(),
						r = "up" === e ? n.getStartKey() : n.getEndKey(),
						i = s.getBlockForKey(r);
					if (!Object(v.o)(i.getType())) return;
					const c = "up" === e ? s.getBlockBefore(r) : s.getBlockAfter(r);
					return c ? o.EditorState.forceSelection(t, Object(M.b)(c, !0)) : Object(K.b)(t, r, "up" === e ? M.a.before : M.a.after)
				},
				_t = (t, e) => {
					if (t.shiftKey) return;
					const n = Bt(e, "up");
					return n && t.preventDefault(), n
				},
				It = (t, e) => {
					if (t.shiftKey) return;
					const n = Bt(e, "down");
					return n && t.preventDefault(), n
				},
				At = (t, e) => {
					const n = t.getSelection();
					return n.isCollapsed() && 0 === n.getStartOffset() && Object(v.o)(t.getCurrentContent().getBlockForKey(n.getStartKey()).getType())
				};
			var Kt = (t, e) => {
					if (!Object(K.q)(e)) return t;
					const n = t.getSelection(),
						o = t.getCurrentContent(),
						s = o.getBlockForKey(n.getStartKey());
					if (Object(v.o)(s.getType())) {
						const e = o.getBlockAfter(s.getKey());
						if (!e || !Object(v.u)(e.getType())) return Object(K.d)(t, s.getKey(), !1)
					}
					return t
				},
				Mt = n("./src/reddit/actions/modal.ts"),
				Lt = n("./src/reddit/actions/upload.ts"),
				Dt = n("./src/reddit/components/ThumbnailSelector/index.tsx"),
				Nt = t => null,
				Ft = n("./src/reddit/helpers/media/index.ts"),
				Pt = n("./src/reddit/helpers/richTextEditor/index.ts"),
				Ut = n("./src/reddit/selectors/activeModalId.ts");
			const Ht = "application/x-reddit-rte-block";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var zt = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/ImagePreview/index.m.less"),
				Wt = n.n(zt);
			const Vt = m.a.img("Img", Wt.a);
			var qt = m.a.wrapped(t => {
					const {
						className: e,
						url: n
					} = t;
					return a.a.createElement("div", {
						className: e
					}, a.a.createElement(Vt, {
						draggable: !1,
						src: n
					}))
				}, "Component", Wt.a),
				Gt = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/Placeholder/index.m.less"),
				Qt = n.n(Gt);
			const Yt = m.a.div("Message", Qt.a);
			var Zt = m.a.wrapped(t => {
					const {
						className: e,
						isImage: n
					} = t;
					return a.a.createElement("div", {
						className: e
					}, a.a.createElement(Yt, null, n ? s.fbt._("Processing video...", null, {
						hk: "3g3QoU"
					}) : s.fbt._("Processing image...", null, {
						hk: "1xoNB3"
					})))
				}, "Component", Qt.a),
				Jt = n("./src/lib/formatApiError/index.ts"),
				Xt = n("./src/reddit/components/ProgressBar/index.tsx"),
				$t = n("./src/reddit/controls/Button/index.tsx"),
				te = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/StatusBar/index.m.less"),
				ee = n.n(te);
			const ne = m.a.div("ControlRow", ee.a),
				oe = m.a.wrapped($t.n, "Button", ee.a),
				se = m.a.wrapped($t.n, "ErrButton", ee.a),
				re = m.a.div("Status", ee.a),
				ie = m.a.wrapped(Xt.a, "ProgressBar", ee.a),
				ce = m.a.div("ErrorLine", ee.a),
				ae = t => e => {
					e.stopPropagation(), t(e)
				};
			var le = m.a.wrapped(t => {
					const {
						upload: e
					} = t, n = ae(t.onCancel), o = ae(t.onRetry), r = ae(t.onRemove), {
						status: i,
						progress: c
					} = e, l = c && c.percent || 0, d = i === T.a.FAILED || i === T.a.CANCELED, u = (t => {
						const {
							status: e,
							progress: n
						} = t;
						return e === T.a.CANCELED ? s.fbt._("Upload was canceled", null, {
							hk: "71azQ"
						}) : e === T.a.FAILED ? s.fbt._("Upload failed: {errorText}", [s.fbt._param("errorText", Object(Jt.a)(t.error))], {
							hk: "3NGGzE"
						}) : 100 === (n && n.percent || 0) ? s.fbt._("Success!", null, {
							hk: "3622uh"
						}) : s.fbt._("Uploading: {fileName}", [s.fbt._param("fileName", t.file.name)], {
							hk: "H7qzO"
						})
					})(e);
					return a.a.createElement("div", {
						className: t.className
					}, d ? a.a.createElement(ce, null) : a.a.createElement(ie, {
						innerBarClassName: ee.a.ProgressBarInner,
						percent: l
					}), a.a.createElement(ne, null, a.a.createElement(re, {
						className: d ? ee.a.hasError : void 0,
						title: d ? u : void 0
					}, u), a.a.createElement("div", null, d ? [a.a.createElement(se, {
						key: "remove",
						onClick: r
					}, s.fbt._("Remove", null, {
						hk: "3LUKPE"
					})), a.a.createElement(se, {
						key: "retry",
						onClick: o
					}, s.fbt._("Retry", null, {
						hk: "3sO2HB"
					}))] : a.a.createElement(oe, {
						disabled: 100 === l,
						onClick: n
					}, s.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})))))
				}, "Component", ee.a),
				de = n("./node_modules/react-motion/lib/react-motion.js"),
				ue = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				pe = n("./src/reddit/components/PlayButton/index.tsx"),
				he = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/VideoPreview/index.m.less"),
				ge = n.n(he);
			const me = {
					stiffness: 60,
					damping: 20
				},
				fe = [{
					key: "video",
					style: {
						opacity: Object(de.spring)(1, me)
					}
				}],
				be = m.a.wrapped(t => {
					const {
						autoPlay: e = !1,
						className: n,
						showControls: o,
						shouldPause: s,
						style: r,
						dashUrl: i,
						hlsUrl: c,
						otherUrl: l
					} = t;
					return a.a.createElement("div", {
						className: n,
						style: r
					}, a.a.createElement(ue.b, {
						autoPlay: e,
						shouldIgnoreAutoplayPref: !0,
						shouldLoad: !1,
						shouldPause: s,
						isGif: !1,
						hlsSource: c,
						mpegDashSource: i,
						otherSource: l,
						showSettingsIcon: !1,
						showControlBar: o,
						playerClickPlay: !1,
						hideUntilLoaded: !0
					}))
				}, "VideoPlayer", ge.a),
				ye = m.a.img("PosterImg", ge.a),
				Ee = m.a.wrapped(t => {
					const {
						className: e,
						onPlayButtonClick: n,
						url: o,
						showPlayButton: s
					} = t;
					return a.a.createElement("div", {
						className: e
					}, a.a.createElement(ye, {
						draggable: !1,
						src: o
					}), s && a.a.createElement(pe.a, {
						className: ge.a.playButton,
						onClick: n
					}))
				}, "Poster", ge.a);
			class Se extends a.a.Component {
				constructor(t) {
					super(t), this.onPlayButtonClick = () => {
						this.setState({
							showVideo: !0
						})
					}, this.willEnter = () => ({
						opacity: 0
					}), this.willLeave = () => ({
						opacity: Object(de.spring)(0, me)
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
					return a.a.createElement("div", {
						className: t.className
					}, a.a.createElement(be, {
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
					} = this.state, c = !!(o || s || r);
					return a.a.createElement(de.TransitionMotion, {
						defaultStyles: [],
						styles: e && i && c ? fe : [],
						willEnter: this.willEnter,
						willLeave: this.willLeave,
						didLeave: this.didLeave
					}, c => a.a.createElement("div", {
						className: t
					}, c.map(t => a.a.createElement(be, {
						key: t.key,
						autoPlay: !0,
						style: t.style,
						otherUrl: r,
						dashUrl: o,
						hlsUrl: s,
						showControls: !0,
						shouldPause: !e || void 0
					})), a.a.createElement(Ee, {
						url: n,
						showPlayButton: !i || !e,
						onPlayButtonClick: this.onPlayButtonClick
					})))
				}
			}
			var xe = m.a.wrapped(Se, "Component", ge.a),
				Ce = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/index.m.less"),
				Oe = n.n(Ce);

			function ke() {
				return (ke = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			var Te = function(t, e) {
				var n = {};
				for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.indexOf(o) < 0 && (n[o] = t[o]);
				if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (o = Object.getOwnPropertySymbols(t); s < o.length; s++) e.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[s]) && (n[o[s]] = t[o[s]])
				}
				return n
			};
			var ve = t => {
					const {
						alignCenter: e,
						isSelected: n,
						onCancel: o,
						onRetry: s,
						onRemove: r,
						upload: i,
						mediaAsset: c,
						thumbnail: l
					} = t, d = Te(t, ["alignCenter", "isSelected", "onCancel", "onRetry", "onRemove", "upload", "mediaAsset", "thumbnail"]);
					let u = !1;
					if (i) u = "image" === Object(Ft.f)(i.metadata.mimetype);
					else {
						if (!c) return null;
						u = c.type === K.a.Image || c.type === K.a.AnimatedImage
					}
					const p = i ? i.metadata.height : c.height,
						g = !i || i.status === T.a.SUCCESS,
						m = u && !!p && p < 104,
						f = !p;
					return a.a.createElement("div", ke({
						className: Object(h.a)(Oe.a.container, {
							[Oe.a.alignCenter]: e,
							[Oe.a.isCompact]: m,
							[Oe.a.isUploaded]: g,
							[Oe.a.isSelected]: n
						})
					}, d), f ? a.a.createElement(Zt, {
						className: Oe.a.placeholder,
						isImage: u
					}) : u ? a.a.createElement(qt, {
						className: Oe.a.imagePreview,
						url: i ? i.metadata.localUrl : c.imageUrl
					}) : a.a.createElement(xe, {
						className: Oe.a.videoPreview,
						dashUrl: c ? c.dashUrl : void 0,
						hlsUrl: c ? c.hlsUrl : void 0,
						isSelected: n,
						isUploaded: g,
						otherUrl: i ? i.metadata.localUrl : void 0,
						posterUrl: l ? l.url : c.posterUrl
					}), i && a.a.createElement(le, {
						className: Oe.a.statusBar,
						onCancel: o,
						onRemove: r,
						onRetry: s,
						upload: i
					}))
				},
				je = n("./src/reddit/components/RichTextEditor/media/MediaBlock/SelectionHook/index.m.less"),
				Re = n.n(je);

			function we() {
				return (we = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			var Be = function(t, e) {
				var n = {};
				for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.indexOf(o) < 0 && (n[o] = t[o]);
				if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (o = Object.getOwnPropertySymbols(t); s < o.length; s++) e.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[s]) && (n[o[s]] = t[o[s]])
				}
				return n
			};
			const _e = m.a.div("HiddenDiv", Re.a);
			var Ie = t => {
					var {
						elementRef: e
					} = t, n = Be(t, ["elementRef"]);
					return a.a.createElement(_e, we({}, n, {
						innerRef: e
					}), a.a.createElement("br", null))
				},
				Ae = n("./src/reddit/components/MakeGifToggle/index.tsx"),
				Ke = n("./src/reddit/icons/svgs/ThumbnailSelect/index.tsx"),
				Me = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				Le = n("./src/reddit/layout/row/Inline/index.tsx"),
				De = n("./src/reddit/components/RichTextEditor/Toolbar/index.tsx"),
				Ne = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx"),
				Fe = n("./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.tsx"),
				Pe = n("./src/reddit/components/RichTextEditor/media/MediaBlock/Toolbar/index.m.less"),
				Ue = n.n(Pe);
			const He = m.a.wrapped(Ne.a, "FormatterButton", Ue.a),
				ze = Object(Fe.f)(Me.b),
				We = Object(Fe.f)(Ke.a),
				Ve = m.a.wrapped(Le.a, "ToolbarContent", Ue.a);
			var qe = t => {
					const {
						alignCenter: e,
						block: n,
						editorState: o,
						onChange: r,
						showVideoControls: i
					} = t, c = n.getKey(), {
						makeGif: l = !1
					} = Object(K.h)(n) || {};
					return a.a.createElement("div", {
						className: Object(h.a)(Ue.a.container, {
							[Ue.a.alignCenter]: e
						})
					}, a.a.createElement(Ve, {
						className: Ue.a.content
					}, i && a.a.createElement(Ae.a, {
						isCompact: !0,
						key: "make-gif",
						on: l,
						onClick: () => r(Object(K.r)(o, c, {
							makeGif: !l
						}))
					}), i && t.showThumbnailButton && a.a.createElement(He, {
						Icon: We,
						onClick: t.onThumbnailButtonClick,
						tooltip: s.fbt._("Choose thumbnail", null, {
							hk: "2gKwDF"
						}),
						tooltipBelow: !0
					}), i && a.a.createElement(De.c, null), a.a.createElement(He, {
						Icon: ze,
						onClick: () => r(Object(K.d)(o, c)),
						tooltip: s.fbt._("Remove", null, {
							hk: "2aF1Zw"
						}),
						tooltipBelow: !0
					})))
				},
				Ge = n("./src/reddit/components/RichTextEditor/media/MediaBlock/index.m.less"),
				Qe = n.n(Ge);
			const Ye = t => "RTE_VIDEO_THUMBNAIL_SELECTOR_".concat(t.getKey()),
				Ze = Object(d.a)(t => t.uploads, (t, e) => {
					const n = Object(K.h)(e.block);
					return n && n.uploadInfo && n.uploadInfo.uploadKey
				}, (t, e) => e ? t[e] : void 0),
				Je = Object(l.b)((t, e) => ({
					upload: Ze(t, e),
					isThumbnailSelectorOpen: Object(Ut.a)(t) === Ye(e.block),
					isRteVideoPosterEnabled: x.d.rteVideoPoster(t)
				}), (t, e) => ({
					onCancelUpload: e => t(Lt.i(e, !1)),
					toggleVideoThumbnailsSelector: () => t(Object(Mt.i)(Ye(e.block)))
				})),
				Xe = m.a.div("MediaContainer", Qe.a),
				$e = m.a.div("Container", Qe.a);
			class tn extends a.a.Component {
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
							isInSelection: Object(N.i)(e, this.rootContainer)
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
						return this.state.active && Object(K.n)(t, e)
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
						this.props.blockProps.onChange(Object(K.d)(t, this.props.block.getKey()))
					}, this.onCancelUpload = async () => {
						this.props.upload && (await this.props.onCancelUpload(this.props.upload.key), this.selectBlock())
					}, this.onToolbarStateChange = t => {
						this.props.blockProps.onChange(t)
					}, this.toggleVideoThumbnailsSelector = () => {
						this.props.toggleVideoThumbnailsSelector()
					}, this.onThumbnailSelect = t => {
						const e = this.props.blockProps.getEditorState(),
							n = this.props.block.getKey();
						let o = Object(K.r)(e, this.props.block.getKey(), {
							thumbnail: t
						});
						o = Object(K.p)(o, n), this.props.blockProps.onChange(o), this.toggleVideoThumbnailsSelector()
					}, this.state = {
						active: !1,
						isInSelection: !1
					}
				}
				shouldComponentUpdate(t, e) {
					return e.active !== this.state.active || e.isInSelection !== this.state.isInSelection || t.block !== this.props.block || t.upload !== this.props.upload || Object(K.n)(t.selection, t.block.getKey())
				}
				componentDidMount() {
					document.addEventListener("selectionchange", this.onNativeSelectionChange);
					const {
						selection: t
					} = this.props;
					t.getHasFocus() && Object(K.n)(t, this.props.block.getKey()) && this.selectBlock(), this.overlayContainer = Nt(!0)
				}
				componentWillUnmount() {
					document.removeEventListener("selectionchange", this.onNativeSelectionChange)
				}
				componentWillReceiveProps(t) {
					const e = t.block.getKey(),
						n = this.props.blockProps.getEditorState(),
						o = n;
					n !== o && this.props.blockProps.onChange(o), !this.state.active && t.selection !== this.props.selection && t.selection.getHasFocus() && Object(K.n)(t.selection, e) && this.selectBlock()
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
						offsetKey: o,
						upload: s
					} = this.props, r = Object(K.h)(t), i = r ? r.thumbnail : void 0, c = !!s && Object(Ft.l)(s.metadata.mimetype || ""), {
						active: l,
						isInSelection: d
					} = this.state, u = e.editorType === Pt.a.Comment;
					return a.a.createElement($e, {
						innerRef: t => this.rootContainer = t
					}, l && a.a.createElement(qe, {
						block: t,
						editorState: e.getEditorState(),
						onChange: this.onToolbarStateChange,
						onThumbnailButtonClick: this.toggleVideoThumbnailsSelector,
						showThumbnailButton: n,
						showVideoControls: c,
						alignCenter: !u
					}), a.a.createElement(Ie, null), a.a.createElement("div", {
						contentEditable: !1,
						"data-offset-key": o
					}, a.a.createElement(Xe, {
						draggable: !0,
						onDragStart: this.onDragStart,
						innerRef: t => this.mediaContainer = t
					}, a.a.createElement(ve, {
						isSelected: d || l,
						thumbnail: i,
						onCancel: this.onCancelUpload,
						onClickCapture: this.onMediaViewClickCapture,
						onRetry: this.onRetryUpload,
						onRemove: this.onRemove,
						upload: s,
						mediaAsset: r.mediaAsset,
						alignCenter: !u
					})), s && c && a.a.createElement(Dt.a, {
						onSelect: this.onThumbnailSelect,
						onToggleModal: this.toggleVideoThumbnailsSelector,
						videoSource: s.metadata.localUrl,
						videoDuration: s.metadata.videoDuration,
						selected: i,
						isOpen: this.props.isThumbnailSelectorOpen
					})), a.a.createElement(Ie, null))
				}
			}
			var en = Je(tn),
				nn = n("./src/reddit/components/RichTextEditor/media/MediaCaption/index.m.less"),
				on = n.n(nn);
			class sn extends a.a.PureComponent {
				constructor(t) {
					super(t);
					const {
						contentState: e,
						block: n
					} = Object(M.e)(t.children[0]).props;
					this.mediaBlockKey = e.getBlockBefore(n.getKey()).getKey()
				}
				render() {
					const t = this.props.children[0],
						e = Object(M.e)(t),
						{
							block: n,
							contentState: o
						} = e.props,
						r = o.getBlockForKey(this.mediaBlockKey),
						i = Object(K.h)(r);
					if (!i || !(i.mediaAsset || i.uploadInfo && i.uploadInfo.mediaType)) return null;
					const c = !n.getLength();
					return a.a.createElement("div", {
						className: on.a.wrapper,
						style: {
							"--media-caption-placeholder-text": c ? "'".concat(s.fbt._("Add caption", null, {
								hk: "3zI8El"
							}), "'") : ""
						}
					}, t)
				}
			}
			const rn = Object(D.Map)({
				[v.j]: {
					element: "div",
					wrapper: a.a.createElement(sn, null)
				}
			});
			var cn = (t, e, n) => {
					const s = t.getSelection(),
						r = t.getCurrentContent(),
						i = r.getBlockForKey(s.getAnchorKey()),
						c = r.getBlockForKey(s.getFocusKey()),
						[a, l] = Object(q.e)(r, i, c);
					if (!a || a !== l) return t;
					const {
						blocks: d,
						start: u
					} = a, p = Object(q.g)(i), h = Object(q.g)(c), {
						colCount: g
					} = h;
					d.sort(q.b);
					const m = P()(d, g),
						{
							minCol: f,
							minRow: b,
							maxCol: y,
							maxRow: E
						} = Object(q.f)(p, h),
						S = {
							rowIndex: 0,
							colIndex: 0
						};
					if ("rows" === e) {
						const t = "before" === n ? b : E + 1,
							e = P()(Object(q.l)(g, E - b + 1), g);
						m.splice(t, 0, ...e), S.rowIndex = t
					} else {
						const t = "before" === n ? f : y + 1;
						m.forEach(e => {
							e.splice(t, 0, ...Object(q.l)(y - f + 1, 1))
						}), S.colIndex = t
					}
					const x = Object(q.d)(m),
						C = r.getBlocksAsArray(),
						O = H()(x),
						k = [...C.slice(0, u), ...O, ...C.slice(u + d.length)],
						T = r.merge({
							blockMap: o.BlockMapBuilder.createFromArray(k)
						}),
						v = X()(O, t => Object(q.h)(S, Object(q.g)(t))),
						j = Object(q.o)(s, v, v);
					let R = o.EditorState.push(t, T, Y.e);
					return R = o.EditorState.forceSelection(R, j)
				},
				an = n("./node_modules/lodash/clamp.js"),
				ln = n.n(an),
				dn = n("./src/reddit/components/RichTextEditor/helpers/sliceContiguousBlocks.ts");
			var un = function(t, e) {
				let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "preserve";
				const s = t.getSelection(),
					r = t.getCurrentContent(),
					i = "up" === e || "left" === e ? s.getStartKey() : s.getEndKey(),
					c = r.getBlockForKey(i);
				if (!Object(v.v)(c.getType())) return;
				const a = Object(q.g)(c),
					{
						colCount: l,
						colIndex: d,
						rowIndex: u
					} = a,
					p = r.getBlocksAsArray(),
					h = Object(dn.a)(r, c);
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
				const y = X()(h.blocks, t => Object(q.h)(Object(q.g)(t), f));
				if (y) b = y.getKey();
				else {
					const t = Object(q.c)(f, a) < 0 ? h.start - 1 : h.start + h.blocks.length;
					0 <= t && t < p.length && (b = p[t].getKey())
				}
				const E = r.getBlockForKey(b);
				let S = 0;
				"preserve" === n ? S = ln()(s.getFocusOffset(), 0, E.getLength()) : "end" === n && (S = E.getLength());
				const x = s.merge({
					anchorKey: b,
					focusKey: b,
					focusOffset: S,
					anchorOffset: S
				});
				return s !== x ? o.EditorState.forceSelection(t, x) : void 0
			};
			const pn = (t, e) => {
					const n = e.getCurrentContent(),
						o = e.getSelection(),
						s = n.getBlockForKey(o.getFocusKey()),
						[r] = Object(q.e)(n, s, s);
					if (!r) return;
					const i = Object(q.g)(s);
					let c;
					return (c = i.colIndex === i.colCount - 1 && i.rowIndex === r.blocks.length / i.colCount - 1 && !t.shiftKey && o.getFocusKey() === o.getAnchorKey() ? cn(e, "rows", "after") : un(e, t.shiftKey ? "left" : "right", "end")) ? (t.preventDefault(), c) : void 0
				},
				hn = (t, e) => {
					if (t.shiftKey) return;
					const n = un(e, "up");
					return n && t.preventDefault(), n
				},
				gn = (t, e) => {
					if (t.shiftKey) return;
					const n = un(e, "down");
					return n && t.preventDefault(), n
				};
			class mn {
				constructor() {
					this.lastRowInsertionState = null
				}
				undoRowInsertion(t) {
					const e = o.EditorState.undo(t);
					return un(e, "down", "end") || e
				}
				isSelectionInLastRow(t) {
					const e = t.getCurrentContent(),
						n = t.getSelection(),
						o = e.getBlockForKey(n.getFocusKey()),
						[s] = Object(q.e)(e, o, o);
					if (!s) return !1;
					const r = Object(q.g)(s.blocks[0]).colCount,
						i = s.blocks.length / r;
					return Object(q.g)(o).rowIndex === i - 1
				}
				insertNewRow(t) {
					const e = t.getSelection();
					let n = cn(t, "rows", "after");
					return n = o.EditorState.forceSelection(n, e), n = un(n, "down") || n, this.lastRowInsertionState = n, n
				}
				handle(t) {
					return t.getSelection().isCollapsed() ? t === this.lastRowInsertionState ? this.undoRowInsertion(t) : this.isSelectionInLastRow(t) ? this.insertNewRow(t) : un(t, "down") || t : t
				}
			}
			const fn = (t, e) => {
				const n = t.getSelection();
				if (n.isCollapsed() || n.getStartKey() === n.getEndKey()) return;
				const s = t.getCurrentContent(),
					r = s.getBlockForKey(n.getAnchorKey()),
					i = s.getBlockForKey(n.getFocusKey()),
					[c, a] = Object(q.e)(s, r, i);
				if (c && c === a) {
					const r = Object(q.o)(n, i, i, !1),
						c = V.b(s, r, e);
					return o.EditorState.push(t, c, Y.d)
				}
			};
			var bn = n("./node_modules/lodash/forEach.js"),
				yn = n.n(bn);
			const En = (t, e) => e ? t[0] : t[t.length - 1];
			var Sn = (t, e) => {
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
						} = Object(q.g)(c);
						if (0 !== a || 0 !== l) return t;
						const d = r.getBlockMap(),
							u = i.getBlockMap();
						if (d.size >= u.size) return t;
						const p = r.getBlockAfter(n.getAnchorKey()),
							h = i.getBlockAfter(s.getEndKey());
						if (p && p !== h) return t;
						const g = c.merge({
								type: v.n,
								data: Object(D.Map)({})
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
							[c, a] = Object(q.e)(s, r, i);
						if (!c && !a) return t;
						let l = t;
						if (c !== a) {
							const e = n.getIsBackward(),
								s = Object(q.o)(n, c ? En(c.blocks, !e) : null, a ? En(a.blocks, e) : null, e);
							n !== s && (l = o.EditorState.forceSelection(t, s))
						} else if (c && a && c === a) {
							const e = Object(q.g)(r),
								c = Object(q.g)(i),
								d = s.getBlocksAsArray(),
								{
									start: u,
									blocks: p
								} = a,
								h = p[0],
								g = Object(q.g)(h);
							if (0 !== g.colIndex || 0 !== g.rowIndex) throw new Error("First table block must always has [0, 0] coordinate!");
							const m = Object(q.b)(i, r) < 0,
								f = Object(q.k)(e, c),
								b = [],
								y = [];
							yn()(p, t => {
								const e = Object(q.g)(t);
								f(e.rowIndex, e.colIndex) ? b.push(t) : t !== h && y.push(t)
							});
							const E = b[0] === h;
							b.sort(q.b);
							const S = [...d.slice(0, u), ...E ? [] : [h], ...b, ...y, ...d.slice(u + p.length)],
								x = En(b, !m),
								C = En(b, m),
								O = Object(q.o)(n, x, C, m),
								k = s.merge({
									blockMap: o.BlockMapBuilder.createFromArray(S),
									selectionAfter: O
								});
							l = o.EditorState.set(t, {
								currentContent: k
							}), O !== n && (l = o.EditorState.forceSelection(l, O))
						}
						return l
					})(t, e)
				},
				xn = (n("./node_modules/core-js/modules/es6.regexp.to-string.js"), n("./src/reddit/components/RichTextEditor/table/Renderer/index.m.less")),
				Cn = n.n(xn);
			const On = m.a.div("Cell", Cn.a),
				kn = m.a.div("Row", Cn.a),
				Tn = m.a.div("Table", Cn.a),
				vn = (t, e) => {
					if (!e || !t.contains(e)) return;
					let n = e;
					for (; n && n !== t;) {
						if (n instanceof HTMLElement && n.hasAttribute("data-row")) return n;
						n.parentElement && (n = n.parentElement)
					}
				},
				jn = function(t) {
					let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
						n = t,
						o = e;
					for (; n && o > 0;) {
						if (n instanceof HTMLElement && n.dataset.table) return n;
						n.parentElement && (n = n.parentElement), o--
					}
				},
				Rn = t => {
					const {
						dataset: e
					} = t;
					if ("string" == typeof e.row && "string" == typeof e.col) return {
						rowIndex: +e.row,
						colIndex: +e.col
					}
				},
				wn = t => {
					const e = window.getSelection(),
						{
							focusNode: n,
							anchorNode: o,
							rangeCount: s
						} = e;
					if (n !== o && s && t) {
						const n = e.getRangeAt(0);
						return Object(N.i)(n, t) && !t.contains(n.commonAncestorContainer)
					}
					return !1
				},
				Bn = t => {
					const e = a.a.Children.toArray(t),
						n = Object(M.e)(e[0]),
						{
							selection: o,
							contentState: s,
							block: r
						} = n.props,
						{
							colCount: i
						} = Object(q.g)(r);
					e.sort((t, e) => Object(q.b)(Object(M.c)(t), Object(M.c)(e)));
					const c = P()(e, i);
					let l, d, u = !1;
					if (o.getAnchorKey() !== o.getFocusKey()) {
						const t = s.getBlocksAsArray(),
							n = s.getBlockForKey(o.getStartKey()),
							i = s.getBlockForKey(o.getEndKey()),
							c = t.indexOf(n),
							a = t.indexOf(i),
							p = t.indexOf(r),
							h = p + e.length - 1;
						c < p && p < a || c < h && h < a ? u = !0 : p <= c && a <= h && (d = Object(q.g)(o.getIsBackward() ? i : n), l = Object(q.g)(o.getIsBackward() ? n : i))
					}
					return {
						rows: c,
						anchorCell: d,
						focusCell: l,
						isSelectWholeTable: u
					}
				};
			class _n extends a.a.Component {
				constructor(t) {
					super(t), this.tableElem = null, this.onMouseDown = t => {
						if (!this.tableElem || t.nativeEvent.detail < 2) return;
						const e = window.getSelection(),
							n = e.rangeCount ? e.getRangeAt(0) : null,
							o = vn(this.tableElem, e.focusNode);
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
						const n = vn(t, e.anchorNode),
							o = vn(t, e.focusNode);
						n && n === o ? this.resetSelection() : n && o ? this.setCellsRange(n, o) : n || o ? this.selectWholeTable() : wn(t) ? this.selectWholeTable() : this.resetSelection()
					}, this.resetSelection = () => {
						(this.state.anchorCell || this.state.focusCell || this.state.isSelectWholeTable) && this.setState({
							isSelectWholeTable: !1,
							focusCell: void 0,
							anchorCell: void 0
						})
					}, this.setCellsRange = (t, e) => {
						const n = Rn(e),
							o = Rn(t);
						Object(q.h)(n, this.state.focusCell) && Object(q.h)(o, this.state.anchorCell) && !this.state.isSelectWholeTable || this.setState({
							focusCell: n,
							anchorCell: o,
							isSelectWholeTable: !1
						})
					}, this.selectWholeTable = () => {
						!this.state.focusCell && this.state.isSelectWholeTable || this.setState({
							focusCell: void 0,
							isSelectWholeTable: !0
						})
					}, this.state = Bn(t.children)
				}
				componentDidMount() {
					document.addEventListener("selectionchange", this.onNativeSelectionChange)
				}
				componentWillUnmount() {
					document.removeEventListener("selectionchange", this.onNativeSelectionChange)
				}
				componentWillReceiveProps(t) {
					t.children !== this.props.children && this.setState(Bn(t.children))
				}
				render() {
					const {
						rows: t,
						anchorCell: e,
						focusCell: n,
						isSelectWholeTable: o
					} = this.state;
					let s;
					o ? s = (t, e) => !0 : e && n && !Object(q.h)(e, n) && (s = Object(q.k)(e, n));
					const r = t[0].map(t => Object(q.g)(Object(M.e)(t).props.block).alignment),
						i = t.map((t, e) => a.a.createElement(kn, {
							key: e
						}, t.map((t, n) => a.a.createElement(On, {
							"data-row": e,
							"data-col": n,
							"data-selected": !!s && s(e, n),
							key: n,
							style: {
								"--cell-text-alignment": r[n] ? q.a[r[n]] : void 0
							}
						}, t))));
					return a.a.createElement(Tn, {
						className: s ? Cn.a.isFakeSelectionActive : void 0,
						innerRef: t => this.tableElem = t,
						onMouseDown: this.onMouseDown,
						"data-table": !0
					}, i)
				}
			}
			const In = Object(D.Map)({
				[v.l]: {
					element: "div",
					wrapper: a.a.createElement(_n, null)
				}
			});
			var An = n("./node_modules/lodash/isEqual.js"),
				Kn = n.n(An),
				Mn = n("./src/reddit/components/RichTextEditor/Tooltip/index.tsx"),
				Ln = n("./src/reddit/icons/svgs/FormattingAlignCenter/index.m.less"),
				Dn = n.n(Ln);
			var Nn = t => a.a.createElement("svg", {
					className: Object(h.a)(Dn.a.icon, t.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("g", {
					fill: "inherit",
					fillRule: "nonzero"
				}, a.a.createElement("path", {
					d: "M3.5 11h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1zM7.42 16h5.08c.55 0 1-.45 1-1s-.45-1-1-1H7.42c-.56 0-1 .45-1 1s.44 1 1 1zM3.5 6h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1z"
				}))),
				Fn = n("./src/reddit/icons/svgs/FormattingAlignLeft/index.m.less"),
				Pn = n.n(Fn);
			var Un = t => a.a.createElement("svg", {
					className: Object(h.a)(Pn.a.icon, t.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("g", {
					fill: "inherit",
					fillRule: "nonzero"
				}, a.a.createElement("path", {
					d: "M3.5 11h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1zM3.5 16h5.4c.54 0 1-.45 1-1s-.46-1-1-1H3.5c-.55 0-1 .45-1 1s.45 1 1 1zM3.5 6h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1z"
				}))),
				Hn = n("./src/reddit/icons/svgs/FormattingAlignRight/index.m.less"),
				zn = n.n(Hn);
			var Wn = t => a.a.createElement("svg", {
					className: Object(h.a)(zn.a.icon, t.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("g", {
					fill: "inherit",
					fillRule: "nonzero"
				}, a.a.createElement("path", {
					d: "M3.5 11h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1zM11.5 16h5c.55 0 1-.45 1-1s-.45-1-1-1h-5c-.55 0-1 .45-1 1s.45 1 1 1zM3.5 6h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1z"
				}))),
				Vn = n("./src/reddit/icons/svgs/FormattingDeleteRow/index.m.less"),
				qn = n.n(Vn);
			var Gn = t => a.a.createElement("svg", {
					className: Object(h.a)(qn.a.icon, t.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("g", {
					fill: "inherit",
					fillRule: "nonzero",
					transform: "vertical" === t.orientation ? "rotate(90, 10, 10)" : ""
				}, a.a.createElement("path", {
					d: "M3 3c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V3zM2 3v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2z"
				}), a.a.createElement("path", {
					d: "M2 15h16v1H2M2 4h16v1H2M7.17 11.4l4.24-4.23c.4-.4 1.04-.4 1.43 0 .4.4.4 1.03 0 1.42L8.6 12.82c-.4.4-1.04.4-1.43 0-.4-.4-.4-1.03 0-1.42z"
				}), a.a.createElement("path", {
					d: "M8.6 7.17l4.23 4.24c.4.4.4 1.04 0 1.43-.4.4-1.03.4-1.42 0L7.18 8.6c-.4-.4-.4-1.04 0-1.43.4-.4 1.03-.4 1.42 0z"
				}))),
				Qn = n("./src/reddit/icons/svgs/FormattingInsertRow/index.m.less"),
				Yn = n.n(Qn);
			const Zn = {
				up: "rotate(180 10 10)",
				down: "",
				left: "rotate(90 10 10)",
				right: "rotate(-90 10 10)"
			};
			var Jn = t => a.a.createElement("svg", {
					className: Object(h.a)(Yn.a.icon, t.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("g", {
					fill: "inherit",
					fillRule: "nonzero",
					transform: Zn[t.orientation || "down"]
				}, a.a.createElement("path", {
					d: "M17 17c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v14zm1 0V3c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2z"
				}), a.a.createElement("path", {
					d: "M18 6H2V5h16M13 13H7c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1z"
				}), a.a.createElement("path", {
					d: "M9 15V9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1z"
				}))),
				Xn = n("./src/reddit/models/RichTextJson/index.ts");
			var $n = function(t) {
				arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				const e = t.getSelection(),
					n = t.getCurrentContent(),
					s = n.getBlockForKey(e.getAnchorKey()),
					r = n.getBlockForKey(e.getFocusKey()),
					[i, c] = Object(q.e)(n, s, r);
				if (i && i === c) {
					const {
						blocks: n
					} = i;
					n.sort(q.b);
					const s = Object(q.o)(e, n[0], Q()(n));
					return $(o.EditorState.set(t, {
						selection: s
					}), "rows")
				}
			};
			var to = (t, e) => {
					const n = t.getSelection(),
						s = t.getCurrentContent(),
						r = s.getBlockForKey(n.getAnchorKey()),
						i = s.getBlockForKey(n.getFocusKey()),
						[c, a] = Object(q.e)(s, r, i);
					if (!c || c !== a) return t;
					const l = Object(q.g)(r),
						d = Object(q.g)(i),
						{
							minCol: u,
							maxCol: p
						} = Object(q.f)(l, d),
						h = c.blocks.map(t => {
							const {
								colIndex: n
							} = Object(q.g)(t);
							return u <= n && n <= p ? Object(q.m)(t, {
								alignment: e
							}) : t
						}),
						g = s.getBlockMap(),
						m = s.merge({
							blockMap: g.merge(o.BlockMapBuilder.createFromArray(h)),
							selectionAfter: n,
							selectionBefore: n
						});
					return o.EditorState.push(t, m, Y.b)
				},
				eo = n("./src/reddit/components/RichTextEditor/table/Toolbar/index.m.less"),
				no = n.n(eo);

			function oo() {
				return (oo = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			const so = (t, e) => n => a.a.createElement(t, oo({}, e, n)),
				ro = Object(Fe.f)(Jn),
				io = so(ro, {
					orientation: "up"
				}),
				co = so(ro, {
					orientation: "right"
				}),
				ao = so(ro, {
					orientation: "left"
				}),
				lo = Object(Fe.f)(Gn),
				uo = so(lo, {
					orientation: "vertical"
				}),
				po = Object(Fe.f)(Nn),
				ho = Object(Fe.f)(Un),
				go = Object(Fe.f)(Wn),
				mo = Object(Fe.f)(Me.b),
				fo = m.a.wrapped(Le.a, "ToolbarContent", no.a),
				bo = t => a.a.createElement(Ne.a, oo({}, t, {
					className: Object(h.a)(no.a.formatterButton, t.className),
					tooltipContentClass: no.a.tooltip
				}));
			var yo = t => {
					const {
						editorState: e,
						onChange: n
					} = t;
					return a.a.createElement(fo, null, a.a.createElement(bo, {
						Icon: ho,
						onClick: () => n(to(e, Xn.e)),
						tooltip: s.fbt._("Left align", null, {
							hk: "45eAc"
						})
					}), a.a.createElement(bo, {
						Icon: po,
						onClick: () => n(to(e, Xn.d)),
						tooltip: s.fbt._("Center align", null, {
							hk: "4aAfyf"
						})
					}), a.a.createElement(bo, {
						Icon: go,
						onClick: () => n(to(e, Xn.f)),
						tooltip: s.fbt._("Right align", null, {
							hk: "3oHuXw"
						})
					}), a.a.createElement(De.c, null), a.a.createElement(bo, {
						Icon: ao,
						onClick: () => n(cn(e, "columns", "before")),
						tooltip: s.fbt._("Insert column before", null, {
							hk: "11EB6Q"
						})
					}), a.a.createElement(bo, {
						Icon: co,
						onClick: () => n(cn(e, "columns", "after")),
						tooltip: s.fbt._("Insert column after", null, {
							hk: "Ddlpl"
						})
					}), a.a.createElement(bo, {
						Icon: uo,
						onClick: () => n($(e, "columns")),
						tooltip: s.fbt._("Delete column", null, {
							hk: "3HaQQD"
						})
					}), a.a.createElement(De.c, null), a.a.createElement(bo, {
						Icon: io,
						onClick: () => n(cn(e, "rows", "before")),
						tooltip: s.fbt._("Insert row above", null, {
							hk: "1HIgn"
						})
					}), a.a.createElement(bo, {
						Icon: ro,
						onClick: () => n(cn(e, "rows", "after")),
						tooltip: s.fbt._("Insert row below", null, {
							hk: "3t7ZU"
						})
					}), a.a.createElement(bo, {
						Icon: lo,
						onClick: () => n($(e, "rows")),
						tooltip: s.fbt._("Delete row", null, {
							hk: "3yJYqS"
						})
					}), a.a.createElement(De.c, null), a.a.createElement(bo, {
						Icon: mo,
						onClick: () => n($n(e) || e),
						tooltip: s.fbt._("Delete table", null, {
							hk: "1fK0KA"
						})
					}))
				},
				Eo = n("./src/reddit/components/RichTextEditor/table/ToolbarController/index.m.less"),
				So = n.n(Eo);
			const xo = 20,
				Co = m.a.div("ActionButton", So.a),
				Oo = m.a.div("ToolbarWrapper", So.a),
				ko = t => {
					const e = {};
					if (!t || !document.documentElement) return e;
					const n = t.left - 154.5,
						o = t.left + 154.5 - document.documentElement.clientWidth;
					return n < 0 ? e.left = -n + xo + 2 : o > 0 && (e.left = -o + xo - 2), e
				},
				To = t => {
					t.preventDefault(), t.stopPropagation()
				};
			class vo extends c.Component {
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
						const o = jn(e);
						if (!o) return void this.hideActionButton();
						const s = vn(o, t.anchorNode);
						if (!s) return void this.hideActionButton();
						const r = vn(o, t.focusNode);
						r ? this.updateActionButtonPosition(s, r) : this.hideActionButton()
					}, this.updateActionButtonPosition = (t, e) => {
						const n = t.getBoundingClientRect(),
							o = e.getBoundingClientRect(),
							s = {
								top: Math.min(n.top, o.top),
								left: Math.max(n.right, o.right) - xo
							};
						Kn()(this.state.tooltipPosition, s) || this.setState({
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
						})), To(t)
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
					return a.a.createElement("div", {
						ref: this.setContainerRef
					}, a.a.createElement(Mn.b, {
						targetPosition: e
					}, a.a.createElement(Co, {
						className: t ? So.a.isPressed : void 0,
						onClick: this.onActionButtonClick,
						onMouseDown: To,
						onMouseMove: To
					}, t ? a.a.createElement(Oo, {
						style: ko(e)
					}, a.a.createElement(yo, {
						onChange: this.props.onChange,
						editorState: this.props.editorState
					})) : null)))
				}
			}
			var jo = n("./src/reddit/components/RichTextEditor/editorStateTransforms.ts");

			function Ro() {
				return (Ro = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}

			function wo() {
				return new Map
			}
			const Bo = a.a.createContext(wo());

			function _o(t) {
				class e extends a.a.Component {
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
						return a.a.createElement("span", {
							ref: this.updateElementRef
						}, a.a.createElement(t, this.props))
					}
				}
				return t => a.a.createElement(Bo.Consumer, null, n => a.a.createElement(e, Ro({}, t, {
					registry: n
				})))
			}
			var Io = n("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				Ao = n("./src/reddit/components/RichTextEditor/emotes/decorator.m.less"),
				Ko = n.n(Ao);
			const Mo = {
					strategy: Io.e,
					component: _o(t => {
						const {
							contentState: e
						} = t, n = Object(Io.i)(e), o = e.getEntity(t.entityKey), {
							id: s,
							emoji: r,
							sticker: i
						} = o.getData(), c = n ? i : r;
						return a.a.createElement("span", {
							className: Object(h.a)(Ko.a.emote, {
								[Ko.a.sticker]: n
							}),
							title: ":".concat(s, ":"),
							style: {
								backgroundImage: "url(".concat(c.path, ")"),
								height: c.y,
								width: c.x
							}
						}, t.children)
					})
				},
				Lo = () => Mo;
			var Do = n("./src/higherOrderComponents/makeAsync.tsx"),
				No = Object(Do.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("EmotesTooltip").then(n.bind(null, "./src/reddit/components/RichTextEditor/emotes/tooltip.tsx")).then(t => t.default)
				});
			const Fo = new Set([L.a.LINK]);
			var Po = n("./src/reddit/components/RichTextEditor/entity/link/helpers.tsx"),
				Uo = n("./src/reddit/components/RichTextEditor/entity/link/decorator.m.less"),
				Ho = n.n(Uo);
			const zo = m.a.a("RegularLink", Ho.a),
				Wo = {
					strategy: Po.a,
					component: _o(t => {
						const e = t.contentState.getEntity(t.entityKey),
							{
								url: n
							} = e.getData();
						return a.a.createElement(zo, {
							href: n
						}, t.children)
					})
				},
				Vo = () => Wo;
			n("./node_modules/core-js/modules/es6.regexp.replace.js"), n("./node_modules/core-js/modules/es6.regexp.match.js");
			var qo = n("./src/lib/linkMatchers/index.ts");
			const Go = (t, e) => {
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
				Qo = (t, e, n, s, r, i) => {
					const c = t.getBlockForKey(e),
						a = o.SelectionState.createEmpty(e),
						l = [],
						d = new Set;
					let u = t;
					const p = n === L.a.USER_MENTION ? L.a.USER_LINK : n,
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
						m = (t, e) => g(t, e, null),
						b = u.getBlockForKey(e);
					Go(s, b).forEach((t, s) => {
						let {
							index: c,
							lastIndex: p,
							url: m
						} = t;
						const b = h(c, p, m);
						b && (n === L.a.USER_MENTION ? (((t, n, s) => {
							const c = u && u.getBlockForKey(e),
								l = c && c.getText().substr(t, n);
							if (l && l.replace(f.d.mention, "") && l.startsWith(f.d.mention) && f.c.test(l.replace(f.d.mention, ""))) {
								const e = a.merge({
										anchorOffset: t,
										focusOffset: t + f.d.mention.length
									}),
									c = a.merge({
										anchorOffset: t,
										focusOffset: n + f.d.mention.length
									}),
									l = a.merge({
										anchorOffset: n + f.d.mention.length,
										focusOffset: n + f.d.mention.length
									});
								u = Object(V.b)(u, e, f.d.profile), u = o.Modifier.applyEntity(u, c, s), r && i && i(o.EditorState.forceSelection(r, l))
							}
						})(c + s, p + s, b), l.push([c + s, p + s + 1])) : (g(c, p, b), l.push([c, p])), d.add(b))
					});
					let y = 0;
					return b.findEntityRanges(t => {
						const e = t.getEntity();
						return !!e && u.getEntity(e).getType() === n
					}, (t, e) => {
						if (y >= l.length) return void m(t, e);
						const [n, o] = l[y];
						e <= n ? m(t, e) : (t < n && m(t, n - 1), e > o && m(o, e), y++)
					}), u
				},
				Yo = (t, e) => {
					const n = t.getCurrentContent(),
						s = e.getCurrentContent();
					if (n === s) return t;
					const r = n.getBlockMap(),
						i = s.getBlockMap();
					let c = n;
					return r.forEach((e, n) => {
						if (n) {
							if (e === i.get(n)) return;
							c = Qo(c, n, L.a.SUBREDDIT_LINK, qo.f), c = Qo(c, n, L.a.USER_LINK, qo.i), c = Qo(c, n, L.a.USER_MENTION, qo.d, t, e => t = e)
						}
					}), t.getCurrentContent() === c ? t : (c = c.merge({
						selectionAfter: t.getCurrentContent().getSelectionAfter(),
						selectionBefore: t.getCurrentContent().getSelectionBefore()
					}), o.EditorState.set(t, {
						currentContent: c
					}))
				};
			var Zo = t => {
				return !!t.getCurrentContent().getBlockMap().filter(t => !!t && t.getType() === v.a).size
			};
			n("./node_modules/core-js/modules/es6.regexp.constructor.js");
			const Jo = " ".repeat(4),
				Xo = new RegExp("^ {1,".concat(4, "}|\\t")),
				$o = new Set([v.b.CODE_BLOCK]),
				ts = (t, e) => {
					const n = e.getCurrentContent(),
						s = e.getSelection(),
						r = t.shiftKey;
					let i = n,
						c = s.getAnchorOffset(),
						a = s.getFocusOffset();
					if (Object(Z.a)(n, s, (t, e) => {
							const n = t.getType();
							if ("paragraph" === n || !$o.has(n)) return !1;
							let l = null;
							const d = t.getText(),
								u = o.SelectionState.createEmpty(e);
							if (r) {
								const t = d.match(Xo);
								if (t) {
									const e = t[0].length;
									i = V.b(i, u.merge({
										focusOffset: e
									}), ""), l = -e
								}
							} else i = V.a(i, s.isCollapsed() ? s : u, Jo), l = 4;
							null !== l && (e === s.getAnchorKey() && (c += l), e === s.getFocusKey() && (a += l))
						}), i !== n) return i = i.merge({
						selectionAfter: s.merge({
							anchorOffset: c,
							focusOffset: a
						})
					}), t.preventDefault(), o.EditorState.push(e, i, r ? "remove-range" : "insert-characters")
				},
				es = (t, e) => (t => {
					const e = t.getSelection(),
						n = t.getCurrentContent();
					if (!e.isCollapsed()) return tt(t);
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
						if (Object(v.o)(r.getType())) return Object(K.d)(t, r.getKey());
						if (Object(v.u)(r.getType())) {
							const e = s.getBlockBefore(r.getKey());
							return o.EditorState.forceSelection(t, Object(M.b)(e))
						}
						if (!Object(K.q)(e) && Object(M.g)(r)) {
							const e = s.getBlockBefore(r.getKey());
							if (e && Object(v.o)(e.getType())) return t = o.EditorState.push(t, Object(M.i)(s, r.getKey()), Y.f), o.EditorState.forceSelection(t, Object(M.b)(e))
						}
					}
				})(t, e),
				ns = (t, e) => (t => {
					const e = t.getSelection(),
						n = t.getCurrentContent();
					if (!e.isCollapsed()) return tt(t); {
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
						if (Object(v.o)(r.getType())) return Object(K.d)(t, r.getKey()); {
							const i = s.getBlockAfter(n.getEndKey());
							if (i && Object(v.o)(i.getType())) {
								if (Object(K.q)(e)) return Object(K.d)(t, i.getKey());
								if (Object(M.g)(r)) return t = o.EditorState.push(t, Object(M.i)(s, r.getKey()), Y.f), o.EditorState.forceSelection(t, Object(M.b)(i))
							}
						}
					}
				})(t, e),
				os = t => {
					const e = t.getSelection();
					if (!e.isCollapsed()) return !1;
					const n = o.RichUtils.getCurrentBlockType(t);
					if (!v.c.includes(n)) return !1;
					if (e.getFocusOffset() > 0) {
						if ("\n" === t.getCurrentContent().getBlockForKey(e.getFocusKey()).getText()[e.getFocusOffset() - 1]) return !1
					}
					return !0
				};
			var ss = n("./src/lib/memoizeByReference/index.ts");
			const rs = Object(ss.a)(t => {
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
				is = t => {
					const e = rs(t);
					if (!e) return t;
					const n = Object(jo.a)(t);
					let s = o.Modifier.replaceText(n.getCurrentContent(), n.getSelection().merge({
						anchorOffset: 0
					}), "");
					return s = o.Modifier.setBlockType(s, s.getSelectionAfter(), e), o.EditorState.push(n, s, Y.c)
				};
			var cs = n("./src/reddit/components/RichTextEditor/helpers/styles.ts");
			const as = Object(Do.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GifTooltip").then(n.bind(null, "./src/reddit/components/RichTextEditor/media/GifTooltip/index.tsx")).then(t => t.default)
			});
			var ls = function(t) {
					return a.a.createElement(as, t)
				},
				ds = n("./src/reddit/components/RichTextEditor/spoiler/helpers.ts"),
				us = n("./src/reddit/components/RichTextEditor/spoiler/decorator.m.less"),
				ps = n.n(us);
			const hs = t => a.a.createElement("span", {
					className: ps.a.spoiler
				}, a.a.createElement("span", null), t.children, a.a.createElement("span", null)),
				gs = () => ({
					strategy: ds.a,
					component: hs
				});
			var ms = n("./src/reddit/components/FocusableContent/index.tsx"),
				fs = n("./src/reddit/components/RichTextEditor/Blockquote/index.m.less"),
				bs = n.n(fs);
			const ys = m.a.div("BlockQuoteWrapper", bs.a),
				Es = Object(D.Map)({
					[v.e]: {
						element: "blockquote",
						wrapper: a.a.createElement(ys, null)
					}
				});
			var Ss = n("./src/reddit/components/RichTextEditor/CodeBlock/index.m.less"),
				xs = n.n(Ss);
			const Cs = m.a.div("CodeBlockWrapper", xs.a),
				Os = Object(D.Map)({
					[v.f]: {
						element: "code",
						wrapper: a.a.createElement(Cs, null)
					}
				});
			var ks = n("./node_modules/bowser/src/bowser.js"),
				Ts = n.n(ks),
				vs = n("./node_modules/lodash/includes.js"),
				js = n.n(vs),
				Rs = n("./src/reddit/components/RichTextEditor/DragController/helpers.ts"),
				ws = n("./src/reddit/components/RichTextEditor/DragController/index.m.less"),
				Bs = n.n(ws);
			const _s = m.a.div("DropLine", Bs.a),
				Is = m.a.wrapped(Mn.b, "Tooltip", Bs.a);
			class As extends c.Component {
				constructor(t) {
					super(t), this.dragCount = 0, this.setContainerRef = t => this.containerRef = t, this.preventDocumentDrop = t => {
						!! function t(e) {
							return e.draggable ? e : e.parentElement ? t(e.parentElement) : null
						}(t.target) || (t.preventDefault(), t.stopPropagation())
					}, this.onDragOver = t => {
						const e = js()(t.dataTransfer.types, Ht);
						if (!e) {
							if (!Object(Rs.c)(t.dataTransfer) || !this.props.allowMediaUploads) return
						}
						if (!e && !Object(Rs.c)(t.dataTransfer)) return;
						t.preventDefault();
						try {
							t.dataTransfer.dropEffect = e ? "move" : "copy"
						} catch (r) {}
						const {
							editorState: n
						} = this.props;
						let o = null;
						const s = Object(Rs.b)(n, t);
						if (s) {
							const t = this.containerRef.getBoundingClientRect().left;
							o = {
								top: s.clientY,
								left: t
							}
						}
						Kn()(o, this.state.point) || this.setState({
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
							n = Ts.a.msie ? null : t.dataTransfer.getData(Ht),
							o = Object(Rs.a)(t.dataTransfer);
						if (!(n || o.length && this.props.allowMediaUploads)) return void e();
						const {
							editorState: s
						} = this.props, r = Object(Rs.b)(s, t);
						if (!r) return void e();
						t.preventDefault(), t.stopPropagation();
						const i = r.isBefore ? M.a.before : M.a.after;
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
					} = this.state, n = a.a.Children.only(t);
					return a.a.createElement("div", {
						className: Object(h.a)(Bs.a.container, {
							[Bs.a.hideCaret]: !!e
						}),
						onDragEnter: this.onDragEnter,
						onDragLeave: this.onDragLeave,
						onDragOver: this.onDragOver,
						onDrop: this.onDrop,
						ref: this.setContainerRef
					}, a.a.createElement("div", null, n), a.a.createElement(Is, {
						targetPosition: e
					}, a.a.createElement(_s, null)))
				}
			}
			var Ks = n("./node_modules/draft-js/lib/DraftPasteProcessor.js"),
				Ms = n.n(Ks),
				Ls = n("./node_modules/draft-js/lib/getEntityKeyForSelection.js"),
				Ds = n.n(Ls),
				Ns = n("./node_modules/draft-js/lib/splitTextIntoTextBlocks.js"),
				Fs = n.n(Ns),
				Ps = n("./src/reddit/components/RichTextEditor/entity/cloneEntitiesInFragment.ts"),
				Us = n("./src/reddit/components/RichTextEditor/entity/applyEntityToContentBlock.ts");

			function Hs(t, e, n) {
				const s = Object(o.convertFromHTML)(e, void 0, n);
				if (s) {
					const {
						contentBlocks: e,
						entityMap: n
					} = s;
					if (e) {
						const s = o.BlockMapBuilder.createFromArray(function(t) {
							return t.map(t => Object(v.r)(t.getType()) ? w(t) : t)
						}(e));
						return [t.set("entityMap", n), s]
					}
				}
				return [t, null]
			}

			function zs(t, e, n) {
				const s = Fs()(e),
					r = n && 1 === s.length ? n : o.CharacterMetadata.create(),
					i = Ms.a.processText(s, r).map(t => t.merge({
						type: v.n
					}));
				return o.BlockMapBuilder.createFromArray(i)
			}
			const Ws = t => {
					if (!t) return null;
					const e = document.createElement("div");
					e.innerHTML = t;
					const n = e.querySelector("[".concat("data-reddit-rtjson", "]"));
					return n && n.getAttribute("data-reddit-rtjson")
				},
				Vs = t => {
					if (bt()) return {
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

			function qs(t, e, n, s) {
				const {
					text: r,
					html: i
				} = Vs(n), c = function(t, e, n, o) {
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
				}(e, r, i, i && Ws(i));
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
						if (o.getType() === v.f || s.getType() === v.f) return zs(0, n).map(t => t.merge({
							type: v.f,
							depth: 0
						}))
					}(h, l, c.text)) && c.fragment && (p = c.fragment, [h, p] = Object(Ps.b)(h, p), p = Ot(p, s)), !p && c.rtjson && (p = function(t) {
						const e = JSON.parse(t);
						return Object(o.convertFromRaw)(e).getBlockMap()
					}(c.rtjson)), !p && c.html && ([h, p] = Hs(h, c.html, u)), !p && c.text) {
					const t = function(t, e, n) {
						return o.CharacterMetadata.create({
							style: n,
							entity: Ds()(t, e)
						})
					}(h, l, d);
					p = zs(0, c.text, t), [h, p] = function(t, e) {
						let n = t,
							o = e;
						return e.forEach(t => {
							const e = t.getText(),
								s = qo.e.match(e);
							if (!s) return;
							let r = t;
							s.forEach(t => {
								let {
									index: e,
									lastIndex: s,
									url: i
								} = t;
								const c = (n = n.createEntity(L.a.LINK, "MUTABLE", {
									url: i
								})).getLastCreatedEntityKey();
								r = Object(Us.a)(r, e, s, c), o = o.set(r.getKey(), r)
							})
						}), [n, o]
					}(h, p)
				}
				if (p) return h = function(t, e, n) {
					if (n.isEmpty()) return t;
					let o = ct(t, e, n) || kt(t, e, n);
					return o || (o = V.c(t, e, n))
				}(h, l, p), o.EditorState.push(t, h, Y.e)
			}
			var Gs = n("./src/reddit/components/RichTextEditor/entity/getSelectionEntityInfo.ts"),
				Qs = n("./src/reddit/components/RichTextEditor/Tooltip/getSelectionClientRect.ts"),
				Ys = n("./src/reddit/components/RichTextEditor/LinksController/LinkDetailsPopup/index.m.less"),
				Zs = n.n(Ys);
			const Js = m.a.div("LinkDetailsBox", Zs.a),
				Xs = m.a.a("Link", Zs.a),
				$s = m.a.a("LinkButton", Zs.a);
			var tr = t => a.a.createElement("div", null, a.a.createElement(Js, {
					onMouseDown: t => t.preventDefault()
				}, a.a.createElement(Xs, {
					href: t.url,
					target: "_blank"
				}, t.url), a.a.createElement("span", null, " – "), a.a.createElement($s, {
					onClick: () => t.onStartEdit(),
					role: "button"
				}, s.fbt._("Change", null, {
					hk: "3aOmcP"
				})), a.a.createElement("span", null, " | "), a.a.createElement($s, {
					onClick: () => t.onRemove(),
					role: "button"
				}, s.fbt._("Remove", null, {
					hk: "3nPt5D"
				})))),
				er = n("./src/reddit/controls/Input/index.tsx"),
				nr = n("./src/reddit/components/RichTextEditor/LinksController/LinkEditorPopup/index.m.less"),
				or = n.n(nr);
			const sr = m.a.form("EditForm", or.a),
				rr = m.a.wrapped(t => a.a.createElement("div", t, t.children), "LinkEditorBox", or.a),
				ir = m.a.wrapped(er.a, "Input", or.a),
				cr = m.a.label("Label", or.a),
				ar = m.a.div("HintAndButtonRow", or.a),
				lr = m.a.span("InvalidUrlHint", or.a),
				dr = m.a.wrapped($t.f, "SubmitButton", or.a),
				ur = t => {
					t && (t.focus(), t.select())
				},
				pr = / /g,
				hr = t => t.replace(pr, "%20");
			class gr extends c.Component {
				constructor(t) {
					super(t), this.focused = !1, this.focusLostTimer = 0, this.textInputElementRef = null, this.urlInputElementRef = null, this.onEdited = () => {
						const t = this.state.url.trim(),
							e = hr(t),
							n = Object(qo.h)(e);
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
						n && Object(qo.g)(qo.e, e) && (n = !1), this.setState({
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
					Object(qo.g)(qo.e, this.state.displayText) ? ur(this.textInputElementRef) : ur(this.urlInputElementRef)
				}
				componentWillUnmount() {
					this.focusLostTimer && clearTimeout(this.focusLostTimer)
				}
				render() {
					const {
						isInsertMode: t
					} = this.props;
					return a.a.createElement(rr, {
						tabIndex: 0,
						onClick: this.onClick,
						onBlur: this.onBlur,
						onFocus: this.onFocus
					}, a.a.createElement(sr, {
						onSubmit: this.handleSubmit
					}, a.a.createElement(cr, null, s.fbt._("Text", null, {
						hk: "1oock0"
					}), ":", a.a.createElement(ir, {
						innerRef: t => this.textInputElementRef = t,
						type: "text",
						placeholder: s.fbt._("Title of link (optional)", null, {
							hk: "17GvI"
						}),
						value: this.state.displayText,
						onChange: this.handleDisplayTextChange
					})), a.a.createElement(cr, null, s.fbt._("Link", null, {
						hk: "1Cfzw7"
					}), a.a.createElement(ir, {
						innerRef: t => this.urlInputElementRef = t,
						type: "text",
						placeholder: s.fbt._("Paste or type a link", null, {
							hk: "3QWoAf"
						}),
						value: this.state.url,
						onChange: this.handleUrlChange
					})), a.a.createElement(ar, null, a.a.createElement(dr, {
						type: "submit",
						disabled: this.state.isInvalidUrl
					}, t ? s.fbt._("Insert", null, {
						hk: "3H7yaS"
					}) : s.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), this.state.isInvalidUrl ? a.a.createElement(lr, null, s.fbt._("Link doesn't look right", null, {
						hk: "1BHfKz"
					})) : null)))
				}
			}

			function mr(t, e, n) {
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
					const n = Object(qo.g)(qo.e, s.text);
					n && (s.url = n.url)
				}
				return s
			}

			function fr(t, e) {
				return o.EditorState.set(t, {
					currentContent: o.Modifier.removeInlineStyle(t.getCurrentContent(), e, v.k.HIGHLIGHT)
				})
			}
			class br extends c.Component {
				constructor(t) {
					super(t), this.api = null, this.updateTooltipPosition = null, this.lastEditorSelectionClientRect = null, this.editLinkInSelection = t => {
						const {
							editorState: e
						} = this.props;
						let n = t,
							s = e;
						const r = e.getCurrentContent();
						if (!Object(Po.e)(r, t)) return !1;
						const i = Object(Gs.a)(r, t);
						if (i) {
							if (r.getEntity(i.entityKey).getType() !== L.a.LINK) return !1;
							n = i.entitySelection
						} else this.isEditorFocused() && (this.lastEditorSelectionClientRect = Object(Qs.a)());
						return this.state.linkSelection && (s = fr(e, this.state.linkSelection)), s = function(t, e) {
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
							const t = Object(Gs.a)(e, this.state.linkSelection);
							if (t) {
								const e = this.props.entityElementRegistry.get(t.entityKey);
								n = e && e.getBoundingClientRect()
							} else this.lastEditorSelectionClientRect && (n = this.lastEditorSelectionClientRect)
						} else {
							const e = Object(Po.c)(t);
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
						n && (n.isCollapsed() || (r = fr(s, n)), void 0 !== t && (r = Object(Po.h)(r, n, t, e)), this.setState({
							linkSelection: null,
							linkEntity: null
						}), r !== s && (r = o.EditorState.forceSelection(r, r.getSelection()), this.props.onChange(r)))
					}, this.onLinkEdited = (t, e) => {
						this.handleLink(t, e)
					}, this.interruptLinkEditing = () => this.handleLink(), this.isEditorFocused = () => this.props.editorState.getSelection().getHasFocus(), this.onStartEditFocusedLink = () => {
						const {
							editorState: t
						} = this.props, e = Object(Po.c)(t);
						e && this.editLinkInSelection(e.entitySelection)
					}, this.onRemoveFocusedLink = () => {
						const {
							editorState: t
						} = this.props, e = Object(Po.c)(t);
						e && this.props.onChange(Object(Po.h)(t, e.entitySelection, ""))
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
						} = mr(n, t, e);
						return a.a.createElement(gr, {
							url: s,
							displayText: o,
							isInsertMode: !e,
							onEdited: this.onLinkEdited,
							onFocusLost: this.interruptLinkEditing
						})
					}, this.renderDetailsPopup = () => {
						const t = Object(Po.c)(this.props.editorState);
						return t && this.isEditorFocused() && this.state.isDetailsPopupActive ? a.a.createElement(tr, {
							url: t.url,
							onStartEdit: this.onStartEditFocusedLink,
							onRemove: this.onRemoveFocusedLink
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
					return a.a.createElement(Mn.b, {
						onSetPositionUpdater: t => this.updateTooltipPosition = t,
						trianglePlacement: Mn.a.Above
					}, this.renderEditorPopup() || this.renderDetailsPopup())
				}
			}
			var yr = n("./src/reddit/components/RichTextEditor/OrderedList/index.m.less"),
				Er = n.n(yr);
			const Sr = m.a.ol("OrderedListWrapper", Er.a),
				xr = Object(D.Map)({
					[v.i.ORDERED]: {
						element: "li",
						aliasedElements: ["li"],
						wrapper: a.a.createElement(Sr, null)
					}
				});
			var Cr = n("./src/reddit/components/RichTextEditor/Paragraph/index.m.less"),
				Or = n.n(Cr);
			const kr = m.a.div("ParagraphWrapper", Or.a),
				Tr = Object(D.Map)({
					[v.n]: {
						element: "div",
						aliasedElements: ["p"],
						wrapper: a.a.createElement(kr, null)
					}
				});
			var vr = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				jr = n("./src/reddit/helpers/styles/mixins/fonts.tsx"),
				Rr = n("./src/reddit/components/RichTextEditor/TextRendering/index.m.less"),
				wr = n.n(Rr);
			const Br = Object(ss.a)(() => ({
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
						fontFamily: jr.c,
						padding: "0.1em 0.2em",
						fontSize: "0.8em",
						borderRadius: "3px"
					}
				})),
				_r = m.a.div("H1", wr.a),
				Ir = m.a.div("H2", wr.a),
				Ar = m.a.div("H3", wr.a),
				Kr = m.a.div("H4", wr.a),
				Mr = m.a.div("H5", wr.a),
				Lr = m.a.div("H6", wr.a),
				Dr = t => ({
					component: e => a.a.createElement(t, null, a.a.createElement(o.EditorBlock, e)),
					editable: !0
				}),
				Nr = {
					[v.g.H1]: Dr(_r),
					[v.g.H2]: Dr(Ir),
					[v.g.H3]: Dr(Ar),
					[v.g.H4]: Dr(Kr),
					[v.g.H5]: Dr(Mr),
					[v.g.H6]: Dr(Lr)
				},
				Fr = ["italic normal 1em 'Noto Sans'", "italic bold 1em 'Noto Sans'", "normal bold 1em 'Noto Sans'"],
				Pr = () => {
					const t = document.fonts;
					t && t.load && Fr.forEach(e => t.load(e))
				};
			var Ur = n("./src/reddit/components/RichTextEditor/UnorderedList/index.m.less"),
				Hr = n.n(Ur);
			const zr = m.a.ul("UnorderedListWrapper", Hr.a),
				Wr = Object(D.Map)({
					[v.i.UNORDERED]: {
						element: "li",
						aliasedElements: ["li"],
						wrapper: a.a.createElement(zr, null)
					}
				});
			var Vr = n("./src/reddit/contexts/InsideOverlay.tsx"),
				qr = n("./node_modules/lodash/debounce.js"),
				Gr = n.n(qr),
				Qr = n("./src/reddit/actions/subredditAutocomplete.ts"),
				Yr = n("./src/reddit/controls/SubredditDropdown/index.m.less"),
				Zr = n.n(Yr);

			function Jr() {
				return (Jr = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			var Xr = function(t, e) {
				var n = {};
				for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.indexOf(o) < 0 && (n[o] = t[o]);
				if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (o = Object.getOwnPropertySymbols(t); s < o.length; s++) e.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[s]) && (n[o[s]] = t[o[s]])
				}
				return n
			};
			const $r = t => {
				var {
					isFocused: e
				} = t, n = Xr(t, ["isFocused"]);
				return a.a.createElement("div", Jr({
					className: Object(h.a)(Zr.a.entry, {
						[Zr.a.mIsFocused]: e
					})
				}, n))
			};
			class ti extends c.Component {
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
					return a.a.createElement($r, {
						isFocused: this.props.isFocused,
						onMouseDown: this.onMouseDown,
						onMouseUp: this.onMouseUp,
						onMouseOver: this.onMouseOver
					}, this.props.children)
				}
			}
			var ei = n("./src/reddit/helpers/name/index.ts"),
				ni = n("./src/reddit/selectors/subredditAutocomplete.ts");
			const oi = Object(d.c)({
				subredditSuggestions: (t, e) => {
					const n = Object(ni.d)(t, e);
					return n ? n.subreddits : []
				}
			});
			class si extends c.Component {
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
					}, this.requestSubredditAutocomplete = Gr()(this.requestSubredditAutocomplete.bind(this), 200, {
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
					return this.props.subredditSuggestions.length ? a.a.createElement("div", {
						className: Object(h.a)(Zr.a.list, this.props.className)
					}, this.props.subredditSuggestions.map((t, e) => a.a.createElement(ti, {
						entry: e,
						isFocused: e === this.state.selectedSuggestionIndex,
						key: t.name,
						onEntrySelect: this.onEntrySelect,
						onEntryFocus: this.onEntryFocus
					}, Object(ei.b)(t.name)))) : null
				}
			}
			var ri = Object(l.b)(oi, (t, e) => ({
					onGetSubredditAutocomplete: e => {
						t(Qr.d(e))
					}
				}))(si),
				ii = n("./src/reddit/selectors/comments.ts");
			const ci = Object(d.c)({
				commentAuthors: ii.h
			});
			class ai extends c.Component {
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
					return this.state.userSuggestions.length ? a.a.createElement("div", {
						className: Object(h.a)(Zr.a.list, this.props.className)
					}, this.state.userSuggestions.map((t, e) => a.a.createElement(ti, {
						key: e,
						entry: e,
						onEntryFocus: this.onEntryFocus,
						onEntrySelect: this.onEntrySelect,
						isFocused: e === this.state.selectedSuggestionIndex
					}, Object(ei.c)(t)))) : null
				}
			}
			var li = Object(l.b)(ci)(ai),
				di = n("./node_modules/lodash/dropRightWhile.js"),
				ui = n.n(di),
				pi = n("./node_modules/lodash/flatMap.js"),
				hi = n.n(pi),
				gi = n("./node_modules/lodash/reduceRight.js"),
				mi = n.n(gi),
				fi = n("./node_modules/lodash/trimEnd.js"),
				bi = n.n(fi),
				yi = n("./node_modules/lodash/trimStart.js"),
				Ei = n.n(yi),
				Si = n("./src/lib/forEachGroup/index.ts");

			function xi(t, e) {
				const n = [],
					o = t.withMutations(t => {
						for (; t.size && e(t.first());) n.push(t.first()), t.shift()
					});
				return {
					popped: n,
					stack: o
				}
			}
			var Ci = n("./src/lib/unicodeUtils/index.ts"),
				Oi = n("./src/reddit/helpers/richTextJson/index.ts"),
				ki = n("./src/reddit/models/RichTextJson/nodeMakers.ts");
			const Ti = {
				BOLD: Xn.j.bold,
				ITALIC: Xn.j.italic,
				MONOSPACE: Xn.j.monospace,
				STRIKETHROUGH: Xn.j.strikethrough,
				SUBSCRIPT: Xn.j.subscript,
				SUPERSCRIPT: Xn.j.superscript,
				UNDERLINE: Xn.j.underline
			};
			var vi = (t, e) => ji(t.getBlockMap(), t, e);
			const ji = (t, e, n) => {
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
								o.push(Ai(t, e));
								break;
							case v.e: {
								const {
									popped: n,
									stack: r
								} = xi(s, t => t.getType() === v.e);
								s = r, o.push(Ki([t, ...n], e));
								break
							}
							case v.f: {
								const {
									popped: e,
									stack: n
								} = xi(s, t => t.getType() === v.f);
								s = n, o.push(Mi([t, ...e]));
								break
							}
							case v.i.ORDERED:
							case v.i.UNORDERED: {
								const {
									popped: n,
									stack: i
								} = xi(s, t => t.getType() === r);
								s = i, o.push(Li([t, ...n], e));
								break
							}
							case v.l: {
								const {
									popped: n,
									stack: r
								} = xi(s, t => Object(v.v)(t.getType()));
								s = r, o.push(Di([t, ...n], e));
								break
							}
							case v.a: {
								let e = s.first();
								e && Object(v.u)(e.getType()) ? s = s.shift() : e = void 0, o.push(Ni(t, e, n));
								break
							}
							case v.n:
							default:
								o.push(_i(t, e))
						}
					}
					return o
				},
				Ri = t => t.reduce((t, e) => e === v.k.UNDERLINE || e === v.k.SUBSCRIPT ? t : t | (Ti[e] || 0) | 0, 0),
				wi = (t, e) => {
					const n = [],
						o = Object(Ci.b)(t);
					return Object(Si.a)(e, {
						keyFn: t => t.getStyle()
					}, (e, s, r, i) => {
						if (s.isEmpty()) return;
						const c = t.slice(r, i),
							a = r + (c.length - Ei()(c).length),
							l = i - (c.length - bi()(c).length),
							d = l - a,
							u = o[a],
							p = o[l] - u;
						d > 0 && n.push([Ri(s), u, p])
					}), n.length ? n : null
				},
				Bi = (t, e) => {
					const n = t.getText(),
						o = t.getCharacterList(),
						s = [],
						r = v.d.includes(t.getType()),
						i = v.c.includes(t.getType());
					let c = 0;
					return Object(Si.a)(o, {
						keyFn: (t, o) => {
							const s = t.getEntity();
							return r && t.getStyle().contains(v.k.SPOILER) ? "spoiler" : Object(L.b)(s, e) ? "link-".concat(t.getEntity()) : "\n" === n[o] ? i ? "linebreak" : "skip" : s && e.getEntity(s).getType() === L.a.EMOTE ? "emote-".concat(c++) : "text"
						}
					}, (t, r, i, c) => {
						const a = n.slice(i, c),
							l = o.slice(i, c).toList();
						if ("text" === r) {
							const t = wi(a, l);
							s.push(Object(ki.s)(a, t))
						} else if ("spoiler" === r) s.push(Object(ki.n)(a));
						else if (r.startsWith("link-")) {
							const n = e.getEntity(t.getEntity());
							s.push(((t, e, n) => {
								const o = t.getType(),
									s = [L.a.USER_LINK, L.a.USER_MENTION],
									{
										url: r
									} = t.getData(),
									i = e.startsWith("/");
								if (o === L.a.SUBREDDIT_LINK) {
									const t = e.replace(f.e, "");
									return Object(ki.o)(t, i)
								}
								if (s.includes(o)) {
									const t = e.replace(f.a, "");
									return Object(ki.t)(t, i)
								}
								const c = wi(e, n);
								return Object(ki.i)(e, r, c)
							})(n, a, l))
						} else if ("linebreak" === r) s.push(Object(ki.h)());
						else if (r.startsWith("emote-")) {
							const n = e.getEntity(t.getEntity()).getData();
							s.push(Object(ki.e)(n.fullId, n.imageType))
						}
					}), s
				},
				_i = (t, e) => Object(ki.l)(Bi(t, e)),
				Ii = t => "text" === t.e ? Object(ki.m)(t.t) : "link" === t.e ? Object(ki.i)(t.t, t.u, null) : t.e === Xn.x ? t.c.map(Ii) : t.e === Xn.n ? Object(ki.m)("") : t,
				Ai = (t, e) => Object(ki.f)(v.m[t.getType()], ((t, e) => mi()(hi()(Bi(t, e), Ii), (t, e) => {
					let [n, ...o] = t;
					if (!n) return [e];
					const s = o.length ? o : [];
					return n && "raw" === e.e && "raw" === n.e ? [Object(ki.m)(e.t + n.t), ...s] : [e, n, ...s]
				}, []))(t, e)),
				Ki = (t, e) => Object(ki.c)(ui()(t.map(t => ((t, e) => t.getText().trim().length ? _i(t, e) : ki.a)(t, e)), t => t === ki.a)),
				Mi = t => Object(ki.d)(t.map(t => Object(ki.m)(t.getText()))),
				Li = (t, e) => {
					if (!t.length) return Object(ki.k)([], !1);
					const n = t[0].getDepth();
					let o = null;
					const s = [];
					let r = [];
					const i = () => null !== o || r.length,
						c = () => {
							const t = [];
							null !== o && (t.push(o), o = null), r.length && (t.push(Li(r, e)), r = []), s.push(Object(ki.j)(t))
						};
					return t.forEach(t => {
						t.getDepth() > n ? r.push(t) : (i() && c(), o = Object(ki.l)(Bi(t, e)))
					}), i() && c(), Object(ki.k)(s, t[0].getType() === v.i.ORDERED)
				},
				Di = (t, e) => {
					const n = [...t].sort(q.b),
						o = n[0],
						{
							colCount: s
						} = Object(q.g)(o),
						r = P()(n, s),
						i = r[0].map(t => {
							const {
								alignment: n
							} = Object(q.g)(t);
							return Object(ki.q)(Bi(t, e), n)
						}),
						c = r.slice(1).map(t => t.map(t => Object(ki.p)(Bi(t, e))));
					return Object(ki.r)(i, c)
				},
				Ni = (t, e, n) => {
					const o = Object(K.h)(t);
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
							} = Object(K.f)(o, n);
						return Object(Ft.j)(e) ? Object(ki.b)(r, c) : Object(Ft.k)(e) ? Object(ki.g)(r, c) : Object(ki.u)(r, c, a, i)
					} {
						const {
							assetId: t,
							type: e
						} = r;
						let n;
						switch (e) {
							case K.a.AnimatedImage:
								n = Object(ki.b)(t, c);
								break;
							case K.a.Image:
								n = Object(ki.g)(t, c);
								break;
							case K.a.Video:
								n = Object(ki.u)(t, c);
								break;
							default:
								throw new Error("Invalid media type")
						}
						return Object(Oi.d)(t) ? Object(ki.l)([n]) : n
					}
				};
			var Fi, Pi = n("./src/reddit/constants/componentSizes.ts"),
				Ui = n("./src/reddit/constants/elementIds.ts");
			! function(t) {
				t.Up = "up", t.Down = "down"
			}(Fi || (Fi = {}));
			var Hi = t => {
					const e = window.getSelection().focusNode;
					if (!e || !e.parentElement) return;
					const n = document.getElementById(Ui.d),
						o = n || document.documentElement;
					if (!o) return;
					const s = window.innerHeight,
						{
							bottom: r,
							top: i
						} = e.parentElement.getBoundingClientRect(),
						c = n ? 0 : Pi.f + Pi.p;
					t === Fi.Up && i < c ? o.scrollBy(0, i - c) : t === Fi.Down && r > s && o.scrollBy(0, r - s)
				},
				zi = n("./src/reddit/models/Product/index.ts"),
				Wi = (t, e, n) => {
					const o = {
						url: n
					};
					return t.createEntity(e, "MUTABLE", o)
				},
				Vi = n("./node_modules/lodash/maxBy.js"),
				qi = n.n(Vi);
			const Gi = (t, e) => {
				if (!e) return (t => {
					const e = t.id;
					switch (t.e) {
						case Xn.m:
							return {
								assetId: e, type: K.a.Image
							};
						case Xn.a:
							return {
								assetId: e, type: K.a.AnimatedImage
							};
						case Xn.D:
							return {
								assetId: e, type: K.a.Video
							}
					}
				})(t);
				const n = e.id;
				switch (e.e) {
					case Xn.s: {
						const {
							s: t
						} = e;
						return {
							assetId: n,
							type: K.a.Image,
							imageUrl: t.u,
							width: t.x,
							height: t.y
						}
					}
					case Xn.r: {
						const {
							s: t
						} = e;
						return {
							assetId: n,
							type: K.a.AnimatedImage,
							imageUrl: t.gif,
							posterUrl: t.p,
							dashUrl: t.mp4,
							width: t.x,
							height: t.y
						}
					}
					case Xn.t: {
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
							a = qi()(r, t => t.x).u
						}
						return {
							assetId: n,
							type: K.a.Video,
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

			function Qi(t, e, n) {
				const s = t.id,
					r = t.c,
					i = Xn.E(e, s),
					c = Gi(t, i),
					a = [new o.ContentBlock({
						key: Object(o.genKey)(),
						type: v.a,
						data: Object(D.Map)({
							mediaAsset: c
						})
					})];
				if (n) {
					const t = Object(M.h)(Object(o.genKey)(), r).merge({
						type: v.j
					});
					a.push(t)
				}
				return a
			}
			const Yi = Object.keys(Ti),
				Zi = (t, e, n) => {
					switch (e.e) {
						case Xn.u:
							return nc(t, e.c, v.b.UNSTYLED, n);
						case Xn.k:
							const o = v.h[e.l];
							return nc(t, e.c || [], o, n);
						case Xn.p:
							return $i(t, e, n);
						case Xn.b:
							return Ji(t, e, n);
						case Xn.c:
							return void e.c.forEach(e => nc(t, [e], v.b.CODE_BLOCK, n));
						case Xn.z:
							return Xi(t, e, n);
						case Xn.m:
						case Xn.a:
						case Xn.D:
							return void t.blocks.push(...Qi(e, n.mediaMetadataMap, Object(K.q)(n.editorType)))
					}
				},
				Ji = (t, e, n) => {
					e && e.c && e.c.length && e.c.forEach(e => e.e === Xn.u ? nc(t, e.c, v.b.BLOCK_QUOTE, n) : Zi(t, e, n))
				},
				Xi = (t, e, n) => {
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
						nc(t, c, v.b.TABLE_CELL, n, l)
					}))
				},
				$i = function t(e, n, o) {
					let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
					const r = n.o ? v.b.ORDERED_LIST : v.b.UNORDERED_LIST;
					n.c.forEach(n => {
						const i = n.c;
						if (!i || !i.length) return;
						const [c, a] = i, l = c.e === Xn.u ? c.c : [];
						nc(e, l, r, o, void 0, s), a && a.e === Xn.p && t(e, a, o, s + 1)
					})
				},
				tc = {
					[Xn.y]: ["r/", "/r/"],
					[Xn.B]: ["u/", "/user/"],
					[Xn.C]: ["u/", "/user/"],
					[Xn.v]: ["p/", ""],
					[Xn.g]: ["c/", ""]
				},
				ec = {
					[Xn.y]: L.a.SUBREDDIT_LINK,
					[Xn.B]: L.a.USER_LINK,
					[Xn.C]: L.a.USER_MENTION,
					[Xn.v]: L.a.POST_LINK,
					[Xn.g]: L.a.COMMENT_LINK
				},
				nc = function(t, e, n, s) {
					let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
						i = arguments.length > 5 ? arguments[5] : void 0,
						c = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
					const a = t.content;
					if (1 === e.length && (e[0].e === Xn.m || e[0].e === Xn.a)) {
						const n = e[0];
						if (Object(Oi.d)(n.id)) return void t.blocks.push(...Qi(n, s.mediaMetadataMap, Object(K.q)(s.editorType)))
					}
					const {
						charList: l,
						text: d,
						updatedContent: u
					} = oc(e, a, s), p = new o.ContentBlock({
						key: Object(o.genKey)(),
						characterList: Object(D.List)(l),
						data: Object(D.fromJS)(r),
						depth: i,
						text: d,
						type: n
					});
					t.content = u || a, c ? t.blocks.unshift(p) : t.blocks.push(p)
				},
				oc = (t, e, n) => {
					let o = e,
						s = "";
					const r = [];
					if (t.forEach(t => {
							const e = sc(t, o, n);
							o = e.updatedContent || o, s += e.text, r.push(...e.charList)
						}), s.length !== r.length) throw new Error("Characters length mismatch!");
					return {
						charList: r,
						text: s,
						updatedContent: o !== e ? o : void 0
					}
				},
				sc = (t, e, n) => {
					switch (t.e) {
						case Xn.A: {
							const {
								t: e,
								f: n
							} = t;
							return {
								charList: ic(e, n),
								text: e
							}
						}
						case Xn.x: {
							const {
								c: s
							} = t, r = oc(s, e, n);
							return r.charList = r.charList.map(t => (t => o.CharacterMetadata.create({
								style: t.getStyle().add(v.k.SPOILER),
								entity: t.getEntity()
							}))(t)), r
						}
						case Xn.v:
						case Xn.g:
						case Xn.w: {
							const {
								t: e
							} = t;
							return {
								charList: ic(e),
								text: e
							}
						}
						case Xn.y:
						case Xn.B:
						case Xn.C: {
							const [n, o] = tc[t.e], s = (t.l ? "/" : "") + n + t.t, r = o + t.t, i = Wi(e, ec[t.e], r), c = i.getLastCreatedEntityKey();
							return {
								charList: ic(s, void 0, c),
								text: s,
								updatedContent: i
							}
						}
						case Xn.o: {
							const {
								t: n,
								u: o,
								f: s
							} = t, r = Wi(e, L.a.LINK, o), i = r.getLastCreatedEntityKey();
							return {
								charList: ic(n, s, i),
								text: n,
								updatedContent: r
							}
						}
						case Xn.m:
						case Xn.a:
							const {
								id: s
							} = t;
							if (s.startsWith("emote|")) {
								const t = Object(zi.b)(s),
									o = n.activeEmotes && n.activeEmotes[t];
								if (o) {
									const t = Object(Io.c)(e, o),
										n = t.getLastCreatedEntityKey(),
										s = Io.a;
									return {
										charList: ic(s, void 0, n),
										text: s,
										updatedContent: t
									}
								}
								const r = ":".concat(t, ":");
								return {
									charList: ic(r),
									text: r
								}
							}
							return {
								text: "", charList: ic("")
							};
						default:
							return {
								text: "", charList: ic("")
							}
					}
				},
				rc = t => {
					const e = Yi.filter(e => !!(Ti[e] & t));
					return Object(D.OrderedSet)(e)
				},
				ic = function(t, e) {
					let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
					const s = o.CharacterMetadata.create({
							entity: n
						}),
						r = Array(t.length).fill(s),
						i = Object(Ci.a)(t);
					return e && e.forEach(t => {
						const [e, s, c] = t, a = rc(e), l = s + c, d = o.CharacterMetadata.create({
							entity: n,
							style: a
						});
						r.fill(d, i[s], i[l])
					}), r
				},
				cc = (t, e) => {
					t.blocks.length && (t.blocks[0].getType() === v.b.TABLE_CELL && nc(t, [], v.b.UNSTYLED, e, void 0, void 0, !0), t.blocks[t.blocks.length - 1].getType() === v.b.TABLE_CELL && nc(t, [], v.b.UNSTYLED, e))
				};
			var ac = (t, e, n, s) => {
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
						Zi(c, t, i)
					}), 0 === c.blocks.length && nc(c, [], v.b.UNSTYLED, i), cc(c, i);
					const a = o.BlockMapBuilder.createFromArray(c.blocks),
						l = o.SelectionState.createEmpty(a.first().getKey());
					return c.content.merge({
						blockMap: a,
						selectionBefore: l,
						selectionAfter: l
					})
				},
				lc = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				dc = n("./src/reddit/constants/elementClassNames.ts"),
				uc = n("./src/reddit/constants/keycodes.ts"),
				pc = n("./src/reddit/icons/svgs/Send/index.tsx"),
				hc = n("./src/reddit/selectors/economics.ts"),
				gc = n("./src/reddit/selectors/gold/powerups.ts"),
				mc = n("./src/reddit/components/RichTextEditor/index.m.less"),
				fc = n.n(mc);

			function bc() {
				return (bc = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			Object(vr.b)({
				draftToRTFJson: vi,
				getMediaCount: K.g,
				getPendingThumbnailUploads: K.i,
				isAllMediaUploaded: K.m
			});
			const yc = "handled",
				Ec = "not-handled",
				Sc = /^\s*$/,
				xc = 20,
				Cc = m.a.wrapped(ms.a, "FocusableContent", fc.a),
				Oc = m.a.div("Container", fc.a),
				kc = m.a.wrapped(lc.a, "CurrentUserIcon", fc.a),
				Tc = Object(l.b)(() => {
					const t = (() => Object(d.a)(t => t.uploads, (t, e) => Object(T.e)(T.b.RTE_MEDIA, e.rteState.editorKey), (t, e) => i()(t, t => t.key.startsWith(e))))();
					return Object(d.c)({
						editorUploads: t,
						emotesPowerupBenefitUnlocked: (t, e) => {
							let {
								destSubreddit: n
							} = e;
							return !!n && !!n.id && Object(gc.e)(t, {
								subredditId: n.id,
								benefit: O.a.CommentsWithEmoji
							})
						},
						emotesSpecialMembershipEnabled: x.d.spEmotes,
						giphyPowerupBenefitEnabledUnlocked: (t, e) => {
							let {
								destSubreddit: n
							} = e;
							return !!n && !!n.id && Object(gc.e)(t, {
								subredditId: n.id,
								benefit: O.a.CommentsWithGifs
							})
						},
						giphySpecialMembershipEnabled: x.d.spGiphy,
						activeEmotes: (t, e) => !!e.destSubreddit && e.destSubreddit.id && Object(hc.c)(t, e.destSubreddit.id) || void 0
					})
				}, t => ({
					onFetchEditorProducts: e => t(Object(E.e)(e)),
					onTrackMediaDrop: e => t((t, n) => C.l(n(), e)),
					retryUpload: e => t(S.a(e)),
					startUploads: (e, n, o) => t(S.b(e, n, o))
				}));
			class vc extends c.Component {
				constructor(t) {
					super(t), this.blockRenderMap = o.DefaultDraftBlockRenderMap.merge(Es, Os, In, xr, Tr, Wr, rn), this.editorHeight = null, this.editorRef = null, this.editorRootStyleMutationObserver = null, this.linksControllerApi = null, this.suggestionDropdownApi = null, this.tableToolbarControllerApi = null, this.emotesTooltipApi = null, this.gifTooltipApi = null, this.updateSuggestionDropdownPosition = null, this.isJustAutocompleteSelected = !1, this.isJustLinkified = !1, this.isMouseDown = !1, this.isJustConvertedToList = !1, this.needSyncScroll = null, this.transforms = {
						[j.BREAK_HEADER_ENTITY]: jo.b,
						[j.INSERT_LINE_BREAK]: jo.e,
						[j.REDUCE_LIST_INDENT]: jo.f,
						[j.RESET_CURRENT_AND_PREVIOUS_BLOCKS]: jo.g,
						[j.REMOVE_EXTRA_LIST_ITEM]: jo.h,
						[_.d]: t => ns(t, this.props.editorType),
						[_.b]: t => es(t, this.props.editorType),
						[_.f]: jo.d,
						[_.c]: t => Object(jo.c)(v.k.BOLD, t),
						[_.e]: t => Object(jo.c)(v.k.ITALIC, t),
						[_.g]: t => Object(jo.c)(v.k.UNDERLINE, t)
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
						c.length && this.onChange(Object(K.l)(e, c, s, r))
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
						n = Sn(n, this.state.editorState), n = Kt(n, this.props.editorType), this.emotesTooltipApi && (n = Object(Io.d)(n, this.state.editorState)), n = Yo(n, this.state.editorState), n = Object(cs.d)(n, this.state.editorState), this.setEditorState(n, e);
						let {
							suppressAutocompleteForLink: o
						} = this.state;
						if (o) {
							const e = Object(Po.b)(t);
							e && e.entityKey === o || (o = null)
						}
						this.setState({
							suppressAutocompleteForLink: o
						}), this.isJustAutocompleteSelected = !1, this.isJustLinkified = !1, this.isMouseDown = !1, this.isJustConvertedToList = !1
					}, this.onFocus = () => {
						const {
							onFocus: t
						} = this.props;
						this.emotesTooltipApi && this.emotesTooltipApi.closeTooltip(), this.gifTooltipApi && this.gifTooltipApi.closeTooltip(), t && t()
					}, this.handleBeforeInput = t => {
						const {
							editorState: e
						} = this.state;
						if (this.isMouseDown) return yc;
						if (At(e, t)) return yc;
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
								u = Fo.has(d.getType());
							if ("MUTABLE" === d.getMutability() && u) {
								const s = o.Modifier.insertText(i, n, e, t.getCurrentInlineStyle());
								return o.EditorState.push(t, s, "insert-characters")
							}
						}(e, t) || e;
						return (n = fn(n, t) || n) !== e ? (this.onChange(n), yc) : Ec
					}, this.keyBindingFN = t => {
						const {
							editorState: e
						} = this.state, {
							submitOnEnter: n
						} = this.props, s = e.getSelection();
						if (t.metaKey && t.keyCode === uc.a.K) return j.OPEN_LINK_TOOLTIP;
						if (t.keyCode === uc.a.Space) {
							if (rs(e)) return j.CONVERT_TO_LIST_ON_SPACE;
							if (Object(Po.d)(e)) return j.LINKIFY_ON_SPACE
						} else if (t.keyCode === uc.a.Enter) {
							if (t.ctrlKey || t.metaKey || n && !t.shiftKey) return j.SUBMIT;
							if (t.shiftKey && os(e)) return j.INSERT_LINE_BREAK; {
								const t = this.enterKeyBinding(e);
								if (t) return t
							}
						} else if (t.keyCode === uc.a.Backspace) {
							if (this.isJustLinkified || this.isJustConvertedToList) return _.h;
							if (s.isCollapsed()) {
								const t = e.getCurrentContent(),
									n = s.getEndKey(),
									o = s.getStartOffset(),
									r = t.getBlockForKey(n),
									i = r.getType();
								if ((Object(v.s)(i) || Object(v.q)(i) || Object(v.p)(i)) && 0 === o && r.getLength() > 0) {
									const e = t.getBlockBefore(n);
									if (!e || e.getType() !== i) return j.MAKE_PLAIN_BLOCK
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
								e = Object(Po.f)(e, t, n)
							}
							return this.onChange(e), this.isJustLinkified = !!s, yc
						};
						if (n === j.SUBMIT) this.props.onSubmit();
						else {
							if (n === j.CONVERT_TO_LIST_ON_SPACE) {
								const t = r(is(e));
								return this.isJustConvertedToList = !0, t
							}
							if (n === j.LINKIFY_ON_SPACE) return s = Object(Po.d)(e), r(Object(jo.a)(e));
							if (n === j.LINKIFY_ON_ENTER && (s = Object(Po.d)(e), !(n = this.enterKeyBinding(e, !1)))) return r(Object(jo.d)(e))
						}
						if (n === j.OPEN_LINK_TOOLTIP) return this.onToolbarLinkButtonClick(), yc;
						if (n === j.MAKE_PLAIN_BLOCK) {
							return r(Object(jo.i)(v.n, e))
						}
						if (n === j.EXEC_TABLE_ON_ENTER_HANDLER) return r(this.tableOnEnterHandler.handle(e));
						const i = this.transforms[n];
						if (i) {
							const t = i(e);
							if (t) return r(t)
						}
						const c = o.RichUtils.handleKeyCommand(e, n);
						return c ? r(c) : Ec
					}, this.handleOnTab = t => {
						if (this.emotesTooltipApi && this.emotesTooltipApi.handleTabInEditor() || this.suggestionDropdownApi && this.suggestionDropdownApi.selectCurrent()) return void t.preventDefault();
						const {
							editorState: e
						} = this.state;
						let n = pn(t, e);
						if (n = n || ts(t, e)) return void this.onChange(n);
						const s = o.RichUtils.onTab(t, e, 2);
						this.onChange(s)
					}, this.handleOnUpArrow = t => {
						if (this.emotesTooltipApi && this.emotesTooltipApi.handleUpArrowInEditor() || this.suggestionDropdownApi && this.suggestionDropdownApi.moveUp()) return void t.preventDefault();
						const e = hn(t, this.state.editorState) || _t(t, this.state.editorState);
						e && this.onChange(e), this.needSyncScroll = Fi.Up
					}, this.handleOnDownArrow = t => {
						if (this.suggestionDropdownApi && this.suggestionDropdownApi.moveDown()) return void t.preventDefault();
						const e = gn(t, this.state.editorState) || It(t, this.state.editorState);
						e && this.onChange(e), this.needSyncScroll = Fi.Down
					}, this.handleReturn = t => {
						const e = wt(this.state.editorState);
						return e ? (this.onChange(e), t.preventDefault(), yc) : this.suggestionDropdownApi && this.suggestionDropdownApi.selectCurrent() ? (t.preventDefault(), yc) : Ec
					}, this.suppressAutocompleteForFocusedLink = () => {
						const t = Object(Po.b)(this.state.editorState);
						t && this.state.suppressAutocompleteForLink !== t.entityKey && this.setState({
							suppressAutocompleteForLink: t.entityKey
						})
					}, this.handleEscape = t => {
						this.emotesTooltipApi && this.emotesTooltipApi.handleEscapeKeyInEditor(), this.suppressAutocompleteForFocusedLink()
					}, this.handleOnCopy = t => {
						this.editorRef && St(this.state.editorState, this.editorRef, t)
					}, this.handleOnCut = t => {
						const {
							editorState: e
						} = this.state;
						if (!this.editorRef) return;
						if (!St(e, this.editorRef, t)) return;
						const n = it(e) || Rt(e) || Object(K.e)(e);
						n && this.onChange(n)
					}, this.handleOnPaste = t => {
						const {
							editorState: e
						} = this.state;
						if (!this.editorRef) return;
						if (this.handleFilesPaste(t, e), t.isPropagationStopped()) return;
						const n = qs(e, this.editorRef, t, this.props.editorType);
						n && this.onChange(n)
					}, this.handleFilesPaste = (t, e) => {
						const n = t.clipboardData.files;
						if (n && n.length) {
							const o = Array.from(n),
								s = e.getSelection().getEndKey();
							this.insertMediaFiles({
								files: o,
								blockKey: s,
								insertionMode: M.a.after,
								filesSource: y.FileSource.Clipboard
							}), t.stopPropagation()
						}
					}, this.handleOnMouseDown = t => {
						this.isMouseDown = !0
					}, this.handleOnMouseUp = t => {
						this.isMouseDown = !1
					}, this.handleDroppedFiles = (t, e) => yc, this.handleDrop = (t, e, n) => yc, this.handleBlur = () => {
						this.props.onBlur && this.props.onBlur()
					}, this.handlePastedText = (t, e) => yc, this.onInternalSuggestionSelected = t => {
						this.onChange(Object(Po.g)(this.state.editorState, t)), this.isJustAutocompleteSelected = !0
					}, this.onToolbarEmoteButtonClick = t => {
						this.gifTooltipApi && this.gifTooltipApi.closeTooltip(), this.emotesTooltipApi && this.emotesTooltipApi.toggleTooltip(t)
					}, this.onToolbarGifButtonClick = t => {
						this.emotesTooltipApi && this.emotesTooltipApi.closeTooltip(), this.gifTooltipApi && this.gifTooltipApi.toggleTooltip(t)
					}, this.onToolbarLinkButtonClick = () => {
						if (!this.linksControllerApi) return;
						const {
							editorState: t
						} = this.state;
						this.linksControllerApi.editLinkInSelection(t.getSelection()) || Object(b.b)(void 0, "Current selection cannot be edited by link editor!")
					}, this.handleSwitchToMarkdownMode = () => {
						const {
							editorState: t
						} = this.state, {
							onSwitchEditorMode: e
						} = this.props, n = vr.a.toRichTextJSON(Object.assign({}, this.props.rteState, {
							isBound: !0,
							editorState: Object(K.c)(t)
						}));
						e && e(k.h.MARKDOWN, n), this.state.confirmModalOpen && this.toggleConfirmModal()
					}, this.onToolbarMarkdownSwitchClick = () => {
						const {
							editorState: t
						} = this.state;
						t && Zo(t) ? this.setState({
							confirmModalOpen: !0
						}) : this.handleSwitchToMarkdownMode()
					}, this.toggleConfirmModal = () => {
						this.setState({
							confirmModalOpen: !this.state.confirmModalOpen
						})
					}, this.insertMediaFiles = async t => {
						this.setState({
							mediaToInsert: t
						});
						const {
							files: e,
							filesSource: n
						} = t, o = e.slice(0, xc);
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
							insertionMode: M.a.after,
							filesSource: y.FileSource.FileSelector
						})
					}, this.onFilesDrop = (t, e, n) => {
						this.props.onTrackMediaDrop(t), this.insertMediaFiles({
							files: t,
							blockKey: e,
							insertionMode: n,
							filesSource: y.FileSource.DragAndDrop
						})
					}, this.onBlockMove = (t, e, n) => {
						const {
							editorState: o
						} = this.state, s = Object(K.o)(o, t, e, n);
						s && this.onChange(s)
					}, this.getAtomicBlocksRenderConfig = () => ({
						component: en,
						props: {
							getEditorState: this.getEditorState,
							onChange: this.onChange,
							onRetryUpload: this.onRetryUpload,
							rteFocusableContentRef: this.state.focusableContentRef,
							editorType: this.props.editorType
						}
					}), this.blockRendererFn = t => {
						const e = t.getType();
						return e === v.a ? this.getAtomicBlocksRenderConfig() : e in Nr ? Nr[e] : void 0
					}, this.renderToolbar = t => a.a.createElement(De.b, t), this.entityElementRegistry = wo(), this.tableOnEnterHandler = new mn;
					const {
						activeEmotes: e,
						editorType: n,
						noBorder: s,
						initialHeight: r,
						initialMinHeight: i,
						rteState: c
					} = t;
					let l;
					c.isBound ? l = c.editorState : Object(Xn.F)(c.initialRTJSON) ? l = this.createInitialState(c.editorKey) : (l = o.EditorState.createWithContent(ac(c.initialRTJSON, n, c.mediaMetadataMap, e), this.editorDecorators()), l = this.moveSelectionToEnd(l)), this.state = {
						noBorder: s,
						containerRef: null,
						confirmModalOpen: !1,
						editorState: l,
						focusableContentRef: null,
						inited: !1,
						initialHeight: r,
						initialMinHeight: i,
						mediaToInsert: null,
						suppressAutocompleteForLink: null
					}
				}
				editorDecorators() {
					return new o.CompositeDecorator([Lo(), gs(), Vo()])
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
					if (this.props.rteRef && this.props.rteRef(this), g.a.write(Pr), this.rteStateChanged(this.state.editorState, !1), this.editorRef) {
						const t = this.editorRef.refs.editor;
						t.addEventListener("scroll", this.hideTooltips), this.editorRootStyleMutationObserver = new MutationObserver(this.onEditorStyleChanged), this.editorRootStyleMutationObserver.observe(t, {
							attributes: !0,
							attributeFilter: ["style"]
						})
					}
					const {
						destSubreddit: t,
						emotesSpecialMembershipEnabled: e,
						giphySpecialMembershipEnabled: n
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
					this.needSyncScroll && (Hi(this.needSyncScroll), this.needSyncScroll = null)
				}
				componentWillUnmount() {
					if (this.props.rteRef && this.props.rteRef(null), this.insertValidatedMedia = () => {}, this.editorRef) {
						this.editorRef.refs.editor.removeEventListener("scroll", this.hideTooltips)
					}
					this.editorRootStyleMutationObserver && (this.editorRootStyleMutationObserver.disconnect(), this.editorRootStyleMutationObserver = null)
				}
				UNSAFE_componentWillReceiveProps(t) {
					t.rteState !== this.props.rteState && t.rteState.isBound && t.rteState.editorState !== this.state.editorState && this.setState({
						editorState: t.rteState.editorState
					})
				}
				shouldComponentUpdate(t, e) {
					if (e !== this.state) return !0;
					if (!(t.rteState.isBound && t.rteState.editorState === this.state.editorState)) return !0;
					return !p()(t, this.props, (t, e, n) => "rteState" === n || void 0)
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
					if (c === v.l || l === v.l) return j.EXEC_TABLE_ON_ENTER_HANDLER;
					if (o.isCollapsed()) {
						if (e && Object(Po.d)(t)) return j.LINKIFY_ON_ENTER;
						if (Object(v.r)(l) && d) return j.BREAK_HEADER_ENTITY;
						if (Object(v.s)(l)) {
							if (Sc.test(a.getText())) return a.getDepth() > 0 ? j.REDUCE_LIST_INDENT : j.REMOVE_EXTRA_LIST_ITEM
						} else if (l === v.e) {
							const t = n.getBlockBefore(r);
							if (t && t.getType() === v.e && Sc.test(t.getText()) && Sc.test(a.getText())) return j.RESET_CURRENT_AND_PREVIOUS_BLOCKS
						} else if (l === v.f) {
							const t = n.getBlockBefore(r),
								e = n.getBlockAfter(r);
							if (!a.getText() && t && t.getType() === v.f && !t.getText() && (!e || e.getType() !== v.f)) return j.RESET_CURRENT_AND_PREVIOUS_BLOCKS
						}
					}
				}
				getLinkForAutocomplete() {
					const {
						editorState: t,
						suppressAutocompleteForLink: e
					} = this.state;
					if (!this.isJustAutocompleteSelected && t.getSelection().getHasFocus()) {
						const n = Object(Po.b)(t);
						if (n && n.entityKey !== e) return n
					}
				}
				renderInternalLinkSuggestionDropdown() {
					const {
						isChatPost: t
					} = this.props, e = this.getLinkForAutocomplete();
					return e ? a.a.createElement(Mn.b, {
						aboveParent: t,
						dropdown: !0,
						onSetPositionUpdater: this.setSuggestionDropdownPositionUpdater
					}, e.entityText.startsWith(f.f) && a.a.createElement(ri, {
						onDropdownApi: this.setSuggestionDropdownApi,
						onSelect: this.onInternalSuggestionSelected,
						substring: e.internalName
					}), f.a.test(e.entityText) && a.a.createElement(li, {
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
						allowMediaUploads: r = !1,
						dataTestId: i,
						destSubreddit: c,
						editorType: l,
						emotesPowerupBenefitUnlocked: d,
						emotesSpecialMembershipEnabled: u,
						focusableContentRTEClassName: p,
						giphyPowerupBenefitEnabledUnlocked: g,
						giphySpecialMembershipEnabled: m,
						hideToolbar: f,
						rteState: b,
						isExpanded: y,
						isOverlay: E,
						isCommentBoxDesignEnabled: S,
						onSubmit: x,
						placeholderText: C,
						showSubmitButton: O = !1,
						submitButtonClassName: k,
						toolbarPosition: T = "top",
						renderToolbar: v = this.renderToolbar
					} = this.props, {
						editorKey: j
					} = b, {
						containerRef: w,
						editorState: _,
						mediaToInsert: I,
						confirmModalOpen: A
					} = this.state, K = this.props.readOnly || !!I, M = R(_), L = this.isEmpty(), D = !(!e || !Object.keys(e).length), N = (u || d) && D, F = m || g, P = v({
						allowMediaUploads: r,
						destSubreddit: c,
						editorKey: j,
						editorState: _,
						isOverlay: !!E,
						onChange: this.toolbarSetState,
						onFilesSelect: this.onFilesSelect,
						trackOnClick: this.props.trackToolbarClick,
						readOnly: K,
						onEmoteButtonClick: N ? this.onToolbarEmoteButtonClick : void 0,
						onGifButtonClick: F ? this.onToolbarGifButtonClick : void 0,
						onLinkButtonClick: this.onToolbarLinkButtonClick,
						onMarkdownButtonClick: this.onToolbarMarkdownSwitchClick,
						userCanUseGifs: !!n
					}), U = !f && (!S || y);
					return a.a.createElement(Oc, {
						className: t,
						innerRef: this.setContainerRef
					}, S && a.a.createElement("div", {
						className: fc.a.userIcon
					}, a.a.createElement(kc, null)), a.a.createElement(Cc, {
						className: Object(h.a)(p, {
							[fc.a.showSubmitButton]: O,
							[fc.a.mExpanded]: y,
							[fc.a.mRedesign]: S
						}),
						noBorder: this.props.noBorder,
						isFocused: this.isFocused(),
						ref: this.setFocusableContentRef
					}, U && "top" === T && P, w && a.a.createElement(vo, {
						editorState: _,
						readOnly: K,
						onChange: this.onChange,
						onSetApi: this.setTableToolbarControllerApi,
						rteDomRef: w
					}), a.a.createElement("div", {
						className: Object(h.a)(fc.a.editorWrapper, {
							[fc.a.hasInitialHeight]: !!this.props.initialHeight,
							[fc.a.hasInitialMinHeight]: !!this.props.initialMinHeight,
							[fc.a.noBorder]: !!this.props.noBorder
						}),
						style: {
							"--rte-initial-height": this.props.initialHeight ? "".concat(this.props.initialHeight, "px") : void 0,
							"--rte-initial-min-height": this.props.initialMinHeight ? "".concat(this.props.initialMinHeight, "px") : void 0
						},
						"data-test-id": i,
						onCopyCapture: this.handleOnCopy,
						onCutCapture: this.handleOnCut,
						onPasteCapture: this.handleOnPaste,
						onMouseDown: this.handleOnMouseDown,
						onMouseUp: this.handleOnMouseUp
					}, a.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: "\n                .".concat(dc.b, "[").concat(dc.d, '="').concat(M, "-0-0\"]::after {\n                  bottom: 0;\n                  color: var(--newCommunityTheme-actionIcon);\n                  content: '").concat(C, "';\n                  cursor: text;\n                  left: 0;\n                  position: absolute;\n                  top: 0;\n                }\n              ")
						}
					}), a.a.createElement(As, {
						allowMediaUploads: r && !K,
						onBlockMove: this.onBlockMove,
						onFilesDrop: this.onFilesDrop,
						editorState: _,
						onChange: this.onChange
					}, a.a.createElement(Bo.Provider, {
						value: this.entityElementRegistry
					}, a.a.createElement(o.Editor, {
						readOnly: K,
						ref: this.setEditorRef,
						blockRendererFn: this.blockRendererFn,
						blockRenderMap: this.blockRenderMap,
						editorKey: j,
						editorState: _,
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
						customStyleMap: Br()
					})))), U && "bottom" === T && P, a.a.createElement(br, {
						editorState: _,
						entityElementRegistry: this.entityElementRegistry,
						onSetApi: this.setLinksControllerApi,
						onChange: this.onChange
					}), N && !!c && l === Pt.a.Comment && a.a.createElement(No, {
						editorState: _,
						onChange: this.onChange,
						onSetApi: this.setEmotesTooltipApi,
						subreddit: c,
						shouldHideAddEmote: !u
					}), F && c && a.a.createElement(ls, {
						editorState: _,
						onChange: this.onChange,
						onSetApi: this.setGifTooltipApi,
						subreddit: c,
						userCanUseGifs: !!n
					}), this.renderInternalLinkSuggestionDropdown(), O && a.a.createElement($t.a, {
						"aria-label": s.fbt._("submit", null, {
							hk: "12XoZ8"
						}),
						className: Object(h.a)(k, fc.a.insetSubmitButton, {
							[fc.a.emptyContent]: L,
							[fc.a.focusedContent]: this.isFocused()
						}),
						disabled: L,
						onClick: x,
						tabIndex: -1,
						type: "submit"
					}, a.a.createElement(pc.a, null))), A && a.a.createElement(B.a, {
						toggleModal: this.toggleConfirmModal,
						onConfirm: this.handleSwitchToMarkdownMode,
						actionText: s.fbt._("Continue", null, {
							hk: "3aoEeD"
						}),
						cancelActionText: s.fbt._("Cancel", null, {
							hk: "2TSLl5"
						}),
						headerText: s.fbt._("Switch to Markdown", null, {
							hk: "3zGkKa"
						}),
						modalText: s.fbt._("Switching to markdown will remove any images, gifs or videos from your post.", null, {
							hk: "3rlwkB"
						}),
						trackClick: () => {}
					}))
				}
			}
			e.a = Tc(Object(Vr.b)(t => a.a.createElement(vc, bc({
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
				placeholder: "_1-LSy7nvfNGWVhRWwwQu6A",
				videoPreview: "_2MumquPHY8gruoy6114twC",
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
				return T
			})), n.d(e, "c", (function() {
				return v
			})), n.d(e, "e", (function() {
				return j
			})), n.d(e, "m", (function() {
				return w
			})), n.d(e, "g", (function() {
				return B
			})), n.d(e, "j", (function() {
				return _
			})), n.d(e, "i", (function() {
				return I
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
			const k = (t, e) => {
					const n = t.getBlockAfter(e);
					return t = Object(m.i)(t, e), n && Object(f.u)(n.getType()) && (t = Object(m.i)(t, n.getKey())), t
				},
				T = function(t, e) {
					let n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
						o = t.getCurrentContent();
					o = k(o, e);
					let r = n ? s.EditorState.push(t, o, g.f) : s.EditorState.set(t, {
						currentContent: o
					});
					return r = s.EditorState.forceSelection(r, o.getSelectionAfter())
				},
				v = t => {
					let e = t.getCurrentContent();
					R(e).forEach(t => {
						e = k(e, t.getKey())
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
				_ = t => !R(t).isEmpty(),
				I = (t, e) => {
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
				k = u.a.div("CloseWrapper", E.a),
				T = u.a.div("ThumbnailsContainer", E.a),
				v = u.a.img("Image", E.a),
				j = t => l.a.createElement("div", {
					className: Object(d.a)(E.a.thumbnail, Object(m.a)({
						isLoading: t.isLoading
					}), {
						[E.a.isSelected]: t.isSelected
					}),
					onClick: t.onClick,
					ref: t.elementRef
				}, t.thumbnail.url && l.a.createElement(v, {
					src: t.thumbnail.url
				})),
				R = u.a.wrapped(b.a, "ButtonRow", E.a),
				w = h.f,
				B = u.a.wrapped(h.i, "CancelButton", E.a),
				_ = (t, e) => {
					if (1 === t) return [0];
					const n = c()(0, e, e / (t - 1));
					return n.push(e), n.map(t => +t.toFixed(2))
				};
			class I extends l.a.Component {
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
					} = this.props, s = _(e, o).map(t => ({
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
					}), l.a.createElement(k, {
						onClick: this.props.onToggleModal
					}, l.a.createElement(O, null))), l.a.createElement(T, null, e.map((e, n) => l.a.createElement(j, {
						key: n,
						elementRef: n === t ? this.setSelectedElementRef : void 0,
						isLoading: !e.url,
						onClick: () => this.setSelected(n),
						isSelected: n === t,
						thumbnail: e
					}))), l.a.createElement(R, null, l.a.createElement(B, {
						onClick: this.props.onToggleModal
					}, o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), l.a.createElement(w, {
						onClick: this.onSelectButton
					}, o.fbt._("Select", null, {
						hk: "3s53WD"
					}))))
				}
			}
			e.a = I
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
//# sourceMappingURL=ChatMessageInput~MembershipPaywallPage~RichTextEditor.4d6f4d01e854250c7e6f.js.map