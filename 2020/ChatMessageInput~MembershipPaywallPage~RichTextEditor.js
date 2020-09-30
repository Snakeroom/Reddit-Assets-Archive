// https://www.redditstatic.com/desktop2x/ChatMessageInput~MembershipPaywallPage~RichTextEditor.1086c2994d7301f9318d.js
// Retrieved at 9/30/2020, 6:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatMessageInput~MembershipPaywallPage~RichTextEditor"], {
		"./src/lib/forEachGroup/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return s
			}));
			const o = t => t;

			function s(t, e, n) {
				const [s, i] = Array.isArray(t) ? [t.length, e => t[e]] : [t.size, e => t.get(e)], {
					keyFn: r = o
				} = e || {};
				let {
					start: c = 0,
					end: a = s
				} = e || {};
				if ((c = c < 0 ? 0 : c) >= (a = a > s ? s : a)) return;
				let l = i(c),
					d = r(l, c),
					u = c;
				for (let o = c + 1; o < a; o++) {
					const t = i(o),
						e = r(t, o);
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
				return x
			})), n.d(e, "g", (function() {
				return S
			})), n.d(e, "h", (function() {
				return C
			}));
			n("./node_modules/core-js/modules/es6.regexp.replace.js"), n("./node_modules/core-js/modules/es6.regexp.match.js");
			var o = n("./node_modules/linkify-it/index.js"),
				s = n.n(o),
				i = n("./node_modules/tlds/index.js"),
				r = n.n(i),
				c = n("./src/lib/linkMatchers/customLinks.ts"),
				a = n("./node_modules/lodash/values.js"),
				l = n.n(a);
			const d = t => l()(c.b).includes(t.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				p = t => ((t, e) => (e.forEach(e => t.add(e, null)), t))(t, u),
				h = s()().tlds(r.a).set({
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
				b = s()().tlds(r.a).set({
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
				x = t => {
					return [...f.match(t) || [], ...g.match(t) || []].map(t => !d(t.text) && t.text.replace(c.a, "")).filter(t => t)
				},
				S = (t, e) => {
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
			n.d(e, "f", (function() {
				return A
			})), n.d(e, "b", (function() {
				return M
			})), n.d(e, "a", (function() {
				return L
			})), n.d(e, "c", (function() {
				return F
			})), n.d(e, "e", (function() {
				return N
			})), n.d(e, "d", (function() {
				return P
			}));
			n("./node_modules/core-js/modules/es6.regexp.to-string.js"), n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/uuid/v4.js"),
				i = n.n(s),
				r = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/formatApiError/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/actions/upload.ts"),
				u = n("./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts"),
				p = n("./src/lib/makeApiRequest/index.ts"),
				h = n("./src/lib/omitHeaders/index.ts"),
				g = n("./src/reddit/constants/headers.ts");
			var m = n("./src/reddit/helpers/correlationIdTracker.ts"),
				f = n("./src/reddit/helpers/imagePreview/index.ts"),
				b = n("./src/reddit/helpers/media/index.ts"),
				y = n("./src/reddit/models/Upload/index.ts"),
				E = n("./src/reddit/selectors/telemetry.ts"),
				x = n("./src/telemetry/index.ts");
			const S = async t => {
				let {
					state: e,
					uploadKey: n,
					assetId: o,
					isCanceled: s,
					fileSource: i,
					uploadDuration: r,
					correlationId: c
				} = t;
				const a = e.uploads[n],
					l = s || a.status === y.a.CANCELED,
					{
						file: d,
						url: u,
						metadata: p,
						error: h
					} = a,
					g = p.mimetype || d.type,
					m = g.startsWith("video/"),
					f = a.status === y.a.SUCCESS;
				let b = "";
				h ? b = JSON.stringify(h) : l && (b = "canceled");
				const S = {
					width: p.width,
					height: p.height,
					duration: p.videoDuration && Math.round(1e3 * p.videoDuration)
				};
				Object(x.a)(Object.assign(Object.assign({
					source: m ? "videoupload" : "imageupload",
					action: "upload",
					correlationId: c,
					noun: m ? "video" : "image"
				}, (t => Object.assign(Object.assign({}, E.defaults(t)), {
					screen: E.screen(t),
					profile: E.profile(t),
					subreddit: E.subreddit(t)
				}))(e)), {
					actionInfo: Object.assign(Object.assign(Object.assign({}, E.actionInfo(e)), {
						success: f
					}), b ? {
						reason: b
					} : {}),
					media: Object.assign(Object.assign(Object.assign({
						mimetype: g,
						uploadDuration: r,
						source: i,
						fileName: d.name,
						size: d.size,
						type: m ? "video" : "image"
					}, o ? {
						id: o
					} : {}), u ? {
						url: u
					} : {}), S)
				}))
			};
			var C = n("./src/reddit/helpers/trackers/postComposer.ts"),
				O = n("./src/reddit/models/Gold/Powerups/index.ts"),
				k = n("./src/reddit/models/PostCreationForm/index.ts"),
				v = n("./src/reddit/models/Toast/index.ts"),
				T = n("./src/reddit/selectors/gold/powerups.ts"),
				j = n("./src/reddit/selectors/postCreations.ts"),
				R = n("./src/reddit/actions/postCreation/constants.ts"),
				w = n("./src/reddit/actions/postCreation/general.ts");
			const B = Object(a.a)(R.x),
				_ = Object(a.a)(R.y),
				I = Object(a.a)(R.w),
				A = t => async (e, n) => {
					e(B());
					const o = t.map(t => {
						let {
							url: n,
							uploadKey: o
						} = t;
						const s = Object(b.a)(Object(b.c)(n), "poster.png");
						return e(D(s, o))
					});
					await Promise.all(o);
					const s = n().uploads,
						i = t.map(t => {
							let {
								uploadKey: e
							} = t;
							return s[e]
						}).find(t => t.status !== y.a.SUCCESS);
					e(i ? I(i.error) : _())
				}, K = (t, e) => ({
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
			const M = "RTE",
				L = "GALLERY",
				D = (t, e, n, s) => async (i, c, a) => {
					let {
						apiContext: l
					} = a;
					const u = Object(j.g)(c()),
						y = Date.now();
					let E = null,
						x = !1,
						k = !1,
						v = !1;
					const R = t => {
						if (!v && n && x) {
							v = !0;
							const o = c(),
								s = Date.now() - y,
								i = Object(m.c)(m.a.PostComposer);
							k ? S({
								state: o,
								uploadKey: e,
								assetId: E,
								isCanceled: t,
								fileSource: n,
								uploadDuration: s,
								correlationId: i
							}) : C.t(o, e)
						}
					};
					return await i(Object(d.l)(t, e, async a => {
						x = !0, Object(d.k)(a.id, () => {
							R(!0)
						});
						const {
							error: m,
							metadata: y
						} = await async function(t, e, n) {
							const s = n && n.allowedPostTypes,
								i = n && n.name,
								c = await Object(b.g)(e) || e.type,
								a = Object(b.b)(e) || void 0;
							if (!a) return K("UNSUPPORTED_BROWSER");
							const l = {
								localUrl: a,
								mimetype: c
							};
							if (!c || !Object(b.i)(c)) return {
								error: {
									type: r.M
								}
							};
							if (c.startsWith("image/")) {
								if (s && !s.images) {
									const t = o.fbt._("Images are not allowed in r/{subredditName}", [o.fbt._param("subredditName", i)], {
										hk: "3C2E7Q"
									});
									return K(r.M, t)
								}
								if ("image/gif" === c) {
									if (e.size > r.R) return K(r.H)
								} else if (e.size > r.T) return K(r.K);
								const t = await Object(f.a)(a);
								l.width = t.width, l.height = t.height
							} else if (c.startsWith("video/")) {
								const c = !(null == n || !n.id) && Object(T.i)(t, {
										subredditId: n.id,
										benefit: O.a.HdVideo
									}),
									u = c ? 2 * r.Y : r.Y;
								if (e.size > u) return K(r.Yb);
								let p;
								try {
									p = await Object(b.h)(a, !0)
								} catch (d) {
									return K(r.M)
								}
								if (s) {
									const {
										videos: t,
										images: e
									} = s;
									if (e && !t && p.duration > r.Z) {
										const t = o.fbt._("Sorry, r/{subredditName} doesn't allow videos. Please upload a video less than 60 seconds to convert to animated GIF.", [o.fbt._param("subredditName", i)], {
											hk: "46ULiz"
										});
										return K(r.M, t)
									}
									if (!e && !t) {
										const t = o.fbt._("Videos are not allowed in r/{subredditName}", [o.fbt._param("subredditName", i)], {
											hk: "4uTUZb"
										});
										return K(r.M, t)
									}
								}
								const h = c ? 2 * r.X : r.X;
								if (p.duration > h) {
									const t = o.fbt._("Video is too long. Maximum video length is {duration} minutes.", [o.fbt._param("duration", (h / 60).toString())], {
										hk: "20nB6Q"
									});
									return K(r.M, t)
								}
								l.height = p.height, l.width = p.width, l.videoDuration = p.duration, l.videoFirstFrameUrl = p.firstFrame.dataUrl
							}
							return {
								metadata: l
							}
						}(c(), t, u);
						if (m || !y) return {
							error: m
						};
						i(Object(d.m)({
							key: e,
							metadata: Object.assign({
								fileSource: n
							}, y)
						})), k = !0, s && s();
						const S = t.name,
							C = await (async (t, e, n) => Object(p.a)(Object(h.a)(t, [g.a]), {
								endpoint: "".concat(t.apiUrl, "/api/media/asset.json"),
								method: r.db.POST,
								data: {
									filepath: e,
									mimetype: n
								}
							}))(l(), S, y.mimetype);
						return C.ok ? (E = C.body.asset.asset_id, {
							uploadLease: C.body.args
						}) : {
							error: C.error || void 0
						}
					}, !0)), R(!1), c().uploads[e] || null
				}, F = t => async (e, n, o) => {
					let {
						apiContext: s
					} = o;
					const i = n().uploads[t];
					i && !Object(y.c)(i) && await e(D(i.file, i.key, i.metadata.fileSource, void 0))
				}, N = (t, e, n) => async (s, r) => {
					const a = t.map((t, o) => new Promise(async o => {
							const r = Object(y.d)(n, i()().slice(-6));
							await s(D(t, r, e, () => o({
								uploadKey: r,
								isValid: !0
							}))), o({
								uploadKey: r,
								isValid: !1
							})
						})),
						d = await Promise.all(a),
						u = d.map(t => t.uploadKey);
					return s(function(t) {
						let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
						return async (n, s) => {
							const {
								uploads: i
							} = s(), r = t.map(t => i[t]).filter(t => t.status === y.a.FAILED && !t.metadata.mimetype).map(t => t.error), a = r.length > e ? e - 1 : r.length, d = r.length - a;
							r.slice(0, a).forEach(t => n(Object(l.e)({
								duration: l.a,
								kind: v.b.Error,
								text: Object(c.a)(t)
							}))), d > 0 && n(Object(l.e)({
								duration: l.a,
								kind: v.b.Error,
								text: o.fbt._({
									"*": "Couldn't add {number} more files",
									_1: "Couldn't add 1 more file"
								}, [o.fbt._plural(d, "number")], {
									hk: "2fQwvl"
								})
							}))
						}
					}(u)), d.filter(t => t.isValid).map(t => t.uploadKey)
				}, P = (t, e) => async (n, s) => {
					const i = s(),
						r = Object(j.O)(i),
						{
							items: c
						} = r,
						a = !c.length && 1 === t.length,
						p = Object(j.G)(i) && !a;
					let h = !1,
						g = t;
					if (p) {
						if (Object(k.v)(r)) return void n(Object(l.e)({
							kind: v.b.Error,
							text: o.fbt._("Please remove the existing video first. Videos aren't supported within galleries yet.", null, {
								hk: "3lGxp4"
							})
						}));
						g.some(t => Object(b.l)(t.type)) && n(Object(l.e)({
							kind: v.b.Error,
							text: o.fbt._("Videos aren’t supported within galleries...yet", null, {
								hk: "9Cl20"
							})
						})), g = g.filter(t => Object(b.k)(t.type));
						const t = Math.max(0, u.b - c.length);
						g.length > t && (n(Object(l.e)({
							kind: v.b.Error,
							text: o.fbt._("You have hit the limit of {images_limit} images", [o.fbt._param("images_limit", "".concat(u.b))], {
								hk: "6M4kX"
							})
						})), g = g.slice(0, t))
					} else g = g.slice(0, 1), h = !0, n(Object(d.j)(L, !0));
					const m = await n(N(g, e, L));
					if (!m.length) return;
					const f = m.map(t => ({
							uploadKey: t,
							caption: "",
							url: ""
						})),
						y = 0 === c.length;
					n(Object(w.d)(Object.assign(Object.assign({}, r), {
						items: h ? f : [...c, ...f],
						selectedKey: y ? m[0] : m[m.length - 1]
					})))
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
				i = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				a = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				l = n("./src/reddit/layout/row/Inline/index.tsx"),
				d = n("./src/reddit/components/MakeGifToggle/index.m.less"),
				u = n.n(d);
			e.a = t => i.a.createElement(l.a, {
				className: Object(r.a)(u.a.container, t.disabled ? u.a.mDisabled : null, t.isCompact ? u.a.mCompactSwitch : null),
				onMouseDown: t => t.preventDefault(),
				onClick: e => {
					e.stopPropagation(), !t.disabled && t.onClick()
				}
			}, i.a.createElement(l.a, {
				className: u.a.content
			}, i.a.createElement(a.a, {
				className: u.a.toggleSwitch,
				on: t.on
			}), i.a.createElement("label", null, o.fbt._("Make GIF", null, {
				hk: "2ig2GG"
			}))), t.tooltip ? i.a.createElement(c.a, {
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
				i = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/constants/keycodes.ts"),
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
					e || (n && n(t), t.defaultPrevented || t.which !== r.a.Enter && t.which !== r.a.Space || t.currentTarget.click())
				};
			e.a = t => {
				var {
					className: e,
					disabled: n,
					onClick: o,
					onKeyPress: r,
					setRef: c,
					tabIndex: h
				} = t, g = d(t, ["className", "disabled", "onClick", "onKeyPress", "setRef", "tabIndex"]);
				return s.a.createElement("div", l({
					"aria-disabled": !!n,
					className: Object(i.a)(e, a.a.button, n ? a.a.disabled : null),
					onClick: t => u(t, n, o),
					onKeyPress: t => p(t, n, r),
					role: "button",
					ref: c,
					tabIndex: h || 0
				}, g))
			}
		},
		"./src/reddit/components/PostCreationForm/MediaInput/ImageGalleryDrop/constants.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return o
			})), n.d(e, "a", (function() {
				return s
			}));
			const o = 20,
				s = 180
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
				i = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/components/ProgressBar/index.m.less"),
				c = n.n(r);
			e.a = t => {
				let {
					className: e,
					innerBarClassName: n,
					percent: o
				} = t;
				return s.a.createElement("div", {
					className: Object(i.a)(c.a.outerBar, e)
				}, s.a.createElement("div", {
					className: Object(i.a)(c.a.innerBar, n),
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
			var i = n("./src/reddit/helpers/dom/index.ts"),
				r = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
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
									i = e(t[s]);
								if (i > 0) n = s + 1;
								else {
									if (!(i < 0)) return s;
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
					const n = Object(i.b)(t, l, c);
					return n || u(t, e)
				},
				h = (t, e) => {
					const n = (t => {
						const e = t.target;
						if (!(e instanceof HTMLElement)) return;
						const n = Object(i.b)(e, c);
						if (!n) return;
						const o = p(e, t.clientY);
						if (!o) return;
						const s = Object(i.b)(o, a);
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
							i = n;
						if (t.getType() === r.b.UNSTYLED) s = i = e;
						else if (Object(r.o)(t.getType())) {
							s = i = e;
							const c = o.getBlockAfter(t.getKey());
							c && Object(r.u)(c.getType()) && (i = n.nextElementSibling)
						} else Object(r.u)(t.getType()) && (s = n.previousElementSibling, i = e);
						return {
							upperElement: s,
							lowerElement: i
						}
					})(h, s, o, u), {
						clientY: f,
						isBefore: b
					} = ((t, e, n) => {
						const o = t.getBoundingClientRect(),
							s = e.getBoundingClientRect();
						let r, a;
						if (n > (o.top + s.bottom) / 2) {
							r = s.bottom, a = !1;
							const t = Object(i.b)(e, t => !!t.nextElementSibling, c);
							if (t) {
								r = (t.nextElementSibling.getBoundingClientRect().top + s.bottom) / 2
							}
						} else {
							r = o.top, a = !0;
							const e = Object(i.b)(t, t => !!t.previousElementSibling, c);
							if (e) {
								r = (e.previousElementSibling.getBoundingClientRect().bottom + o.top) / 2
							}
						}
						return {
							clientY: r,
							isBefore: a
						}
					})(g, m, e.clientY);
					let y = l;
					if (h.getType() !== r.b.UNSTYLED) {
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
				i = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/lessComponent.tsx"),
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
			e.a = r.a.wrapped(t => {
				const {
					children: e,
					className: n,
					renderBelow: o,
					text: r,
					tooltipContentClass: c
				} = t, u = d(t, ["children", "className", "renderBelow", "text", "tooltipContentClass"]);
				return s.a.createElement("div", l({}, u, {
					className: Object(i.a)(a.a.container, n)
				}), r ? s.a.createElement("div", {
					className: Object(i.a)(a.a.tooltip, c, o ? a.a.below : a.a.above)
				}, r) : null, e)
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
				i = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				a = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.m.less"),
				l = n.n(a);
			const d = t => {
				t.preventDefault(), t.stopPropagation()
			};
			e.a = r.a.wrapped(t => {
				const {
					active: e,
					className: n,
					disabledTooltip: o,
					enabled: r = !0,
					tooltip: a,
					Icon: u,
					onClick: p,
					tooltipBelow: h,
					children: g
				} = t;
				return s.a.createElement("div", {
					"aria-label": a,
					"aria-selected": e,
					className: Object(i.a)(l.a.button, n, {
						[l.a.active]: !!e,
						[l.a.enabled]: r
					}),
					onMouseDown: d,
					onClick: function(t) {
						d(t), r && p && p(t)
					},
					role: "button",
					tabIndex: -1
				}, s.a.createElement(c.a, {
					text: (r ? a : o) || "",
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
				i = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
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
				E = Object(r.b)(y);
			e.a = E(t => i.a.createElement(b, {
				"aria-label": o.fbt._("Switch to markdown", null, {
					hk: "OxsM0"
				}),
				tabIndex: -1,
				className: t.className,
				onClick: t.onClick
			}, t.isConverting && i.a.createElement(m, {
				sizePx: 12
			}), !t.shouldHideTooltip && i.a.createElement(p.a, {
				text: o.fbt._("Switch to markdown", null, {
					hk: "4mWw83"
				})
			}), i.a.createElement(f, null, o.fbt._("Markdown mode", null, {
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
				return O
			})), n.d(e, "b", (function() {
				return M
			})), n.d(e, "e", (function() {
				return L
			})), n.d(e, "j", (function() {
				return D
			})), n.d(e, "g", (function() {
				return F
			})), n.d(e, "i", (function() {
				return N
			})), n.d(e, "k", (function() {
				return P
			})), n.d(e, "d", (function() {
				return U
			})), n.d(e, "l", (function() {
				return H
			})), n.d(e, "h", (function() {
				return z
			})), n.d(e, "a", (function() {
				return V
			})), n.d(e, "c", (function() {
				return W
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				r = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/icons/svgs/FormattingBlockQuotes/index.tsx"),
				a = n("./src/reddit/icons/svgs/FormattingBold/index.tsx"),
				l = n("./src/reddit/icons/svgs/FormattingCodeBlock/index.tsx"),
				d = n("./src/reddit/icons/svgs/FormattingHeading/index.tsx"),
				u = n("./src/reddit/icons/svgs/FormattingItalics/index.tsx"),
				p = n("./src/reddit/icons/svgs/FormattingMonospace/index.tsx"),
				h = n("./src/reddit/icons/svgs/FormattingOrderedList/index.tsx"),
				g = n("./src/reddit/icons/svgs/FormattingSpoiler/index.tsx"),
				m = n("./src/reddit/icons/svgs/FormattingStrikethrough/index.tsx"),
				f = n("./src/reddit/icons/svgs/FormattingSuperscript/index.tsx"),
				b = n("./src/reddit/icons/svgs/FormattingUnorderedList/index.tsx"),
				y = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				E = n("./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.m.less"),
				x = n.n(E);

			function S() {
				return (S = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			const C = t => r.a.wrapped(t, "Icon", x.a),
				O = function(t) {
					let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
					return n => {
						const o = C(t);
						return i.a.createElement(o, S({}, n, {
							style: {
								padding: e
							}
						}))
					}
				},
				k = O(c.a),
				v = O(a.a),
				T = O(l.a),
				j = O(d.a),
				R = O(u.a),
				w = O(p.a),
				B = O(h.a),
				_ = O(g.a, 1),
				I = O(m.a),
				A = O(f.a),
				K = O(b.a),
				M = {
					type: "style",
					name: "bold",
					Icon: v,
					style: y.k.BOLD,
					tooltipTranslation: () => o.fbt._("Bold", null, {
						hk: "16qNLn"
					})
				},
				L = {
					type: "style",
					name: "italics",
					Icon: R,
					style: y.k.ITALIC,
					tooltipTranslation: () => o.fbt._("Italics", null, {
						hk: "3hxpiB"
					})
				},
				D = {
					type: "style",
					name: "strikethrough",
					Icon: I,
					style: y.k.STRIKETHROUGH,
					tooltipTranslation: () => o.fbt._("Strikethrough", null, {
						hk: "U4hXC"
					})
				},
				F = {
					type: "style",
					name: "inline_code",
					Icon: w,
					style: y.k.MONOSPACE,
					tooltipTranslation: () => o.fbt._("Inline Code", null, {
						hk: "1eNxEt"
					})
				},
				N = {
					type: "style",
					name: "spoiler",
					Icon: _,
					style: y.k.SPOILER,
					tooltipTranslation: () => o.fbt._("Spoiler", null, {
						hk: "1tb6Ht"
					})
				},
				P = {
					type: "style",
					name: "superscript",
					Icon: A,
					style: y.k.SUPERSCRIPT,
					tooltipTranslation: () => o.fbt._("Superscript", null, {
						hk: "sqKFn"
					})
				},
				U = {
					type: "block",
					name: "heading",
					Icon: j,
					block: y.b.H1,
					tooltipTranslation: () => o.fbt._("Heading", null, {
						hk: "4jnBPs"
					})
				},
				H = {
					type: "block",
					name: "unordered_list",
					Icon: K,
					block: y.i.UNORDERED,
					tooltipTranslation: () => o.fbt._("Bulleted List", null, {
						hk: "21Yx7R"
					})
				},
				z = {
					type: "block",
					name: "ordered_list",
					Icon: B,
					block: y.i.ORDERED,
					tooltipTranslation: () => o.fbt._("Numbered List", null, {
						hk: "4BmF1X"
					})
				},
				V = {
					type: "block",
					name: "block_quote",
					Icon: k,
					block: y.e,
					tooltipTranslation: () => o.fbt._("Quote Block", null, {
						hk: "1xUsGm"
					})
				},
				W = {
					type: "block",
					name: "code_block",
					Icon: T,
					block: y.f,
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
				return N
			})), n.d(e, "f", (function() {
				return P
			})), n.d(e, "h", (function() {
				return U
			})), n.d(e, "e", (function() {
				return H
			})), n.d(e, "a", (function() {
				return z
			})), n.d(e, "d", (function() {
				return V
			})), n.d(e, "b", (function() {
				return W
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/react/index.js"),
				r = n.n(i),
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
						i = t.getSelection().getEndKey(),
						r = Object(f.l)(e, n),
						c = Object(m.f)(s, i, r, m.a.after, !0),
						a = o.EditorState.push(t, c, g.e);
					return o.EditorState.forceSelection(a, o.SelectionState.createEmpty(r[0].getKey()))
				},
				y = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx"),
				E = n("./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.tsx"),
				x = n("./src/reddit/components/RichTextEditor/Toolbar/MarkdownButton/index.tsx"),
				S = n("./src/lib/constants/index.ts"),
				C = n("./src/reddit/icons/svgs/ImagePost/index.tsx"),
				O = n("./src/reddit/icons/svgs/Video/index.tsx"),
				k = n("./src/reddit/components/RichTextEditor/Toolbar/MediaInputButton/index.m.less"),
				v = n.n(k);
			const T = a.a.wrapped(C.a, "ImageIcon", v.a),
				j = a.a.wrapped(O.a, "VideoIcon", v.a),
				R = a.a.input("HiddenInput", v.a);
			class w extends i.Component {
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
					} = this.props, o = "image" === n, i = t.blocks[h.a];
					let c = !0;
					if (e && e.allowedPostTypes) {
						const {
							images: t,
							videos: n
						} = e.allowedPostTypes;
						c = o ? t : n
					}
					return r.a.createElement(y.a, {
						Icon: o ? T : j,
						active: i.isActive,
						enabled: i.isEnabled && c,
						tooltip: o ? s.fbt._("Add an image", null, {
							hk: "4bqU7J"
						}) : s.fbt._("Add a video", null, {
							hk: "2dn6oZ"
						}),
						onClick: this.onButtonClick
					}, r.a.createElement(R, {
						multiple: !0,
						innerRef: t => this.hiddenInputEl = t,
						onChange: this.onFileInputChange,
						onClick: this.onHiddenInputClick,
						type: "file",
						accept: Array.from(o ? S.a : S.b).join()
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
				M = t => r.a.createElement(y.a, I({}, t, {
					tooltipContentClass: _.a.tooltip
				})),
				L = a.a.div("SectionSpacer", _.a),
				D = a.a.div("Spacer", _.a),
				F = (t, e, n, s, i) => {
					const {
						name: c,
						Icon: a,
						tooltipTranslation: l
					} = t, d = l();
					if ("style" === t.type) {
						const {
							style: o
						} = t;
						return r.a.createElement(M, {
							Icon: a,
							active: e.styles[o].isActive,
							enabled: e.styles[o].isEnabled,
							key: c,
							tooltip: d,
							onClick: () => {
								const t = Object(u.c)(o, n);
								s(t), i(c, ((t, e) => t.getCurrentInlineStyle().contains(e))(t, o))
							}
						})
					} {
						const {
							block: l
						} = t;
						return r.a.createElement(M, {
							Icon: a,
							active: e.blocks[l].isActive,
							enabled: e.blocks[l].isEnabled,
							key: c,
							tooltip: d,
							onClick: () => {
								const t = Object(u.i)(l, n);
								s(t), i(c, ((t, e) => o.RichUtils.getCurrentBlockType(t) === e)(t, l))
							}
						})
					}
				},
				N = (t, e, n, o, s) => t.map(t => F(t, e, n, o, s)),
				P = [E.b, E.e],
				U = [E.j, E.g, E.k, E.i],
				H = [E.d, E.l, E.h, E.a, E.c],
				z = t => r.a.createElement(M, {
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
				V = t => r.a.createElement(M, {
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
				W = t => {
					const {
						className: e,
						allowMediaUploads: n = !1,
						destSubreddit: o,
						editorState: s,
						isOverlay: i,
						onChange: a,
						onFilesSelect: l,
						readOnly: d,
						trackOnClick: u,
						onLinkButtonClick: h,
						onMarkdownButtonClick: g
					} = t, m = Object(p.a)(s);
					return d && Object(p.b)(m), r.a.createElement("div", {
						className: Object(c.a)(_.a.toolbarContent, e, {
							[_.a.isSticky]: !i
						})
					}, N(P, m, s, a, u), r.a.createElement(z, {
						controlsState: m,
						trackOnClick: u,
						onLinkButtonClick: h
					}), N(U, m, s, a, u), r.a.createElement(L, null), N(H, m, s, a, u), r.a.createElement(L, null), r.a.createElement(V, {
						controlsState: m,
						editorState: s,
						trackOnClick: u,
						onChange: a
					}), n && r.a.createElement(w, {
						destSubreddit: o,
						controlsState: m,
						onClick: () => u("image_upload"),
						onFilesInput: l,
						type: "image"
					}), n && r.a.createElement(w, {
						destSubreddit: o,
						controlsState: m,
						onClick: () => u("video_upload"),
						onFilesInput: l,
						type: "video"
					}), r.a.createElement(D, null), r.a.createElement(x.a, {
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
				i = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/CSSVariableProvider/index.tsx"),
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
					className: Object(i.a)(l.a.triangle, {
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
						i = t ? t.top : o.target.top,
						r = t ? t.left : o.target.left,
						a = Object(c.e)(this.containerRef);
					let l, d, u;
					if (a) {
						const t = a.getBoundingClientRect();
						l = t.bottom - (s || 0), d = r - t.left + a.scrollLeft, u = i - t.top + a.scrollTop
					} else {
						const t = document.documentElement,
							e = window.pageYOffset || t.scrollTop;
						d = r + (window.pageXOffset || t.scrollLeft), u = i + e
					}
					const p = {
						target: {
							top: i,
							left: r
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
					const i = s + p - u / 2;
					let r;
					n === h.Above ? (t.tooltip.top += d, r = -d) : (t.tooltip.top -= t.tooltipHeight + d, r = t.tooltipHeight), t.triangle = {
						top: r,
						left: i
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
						className: Object(i.a)(l.a.tooltipBox, this.props.className, {
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
					return this.props.usePortal && (a = Object(r.d)(a, this.props.portalContainer || document.body)), a
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
				return i
			})), n.d(e, "h", (function() {
				return r
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
				i = "underline",
				r = "undo",
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
				return i
			})), n.d(e, "b", (function() {
				return r
			})), n.d(e, "c", (function() {
				return c
			})), n.d(e, "f", (function() {
				return a
			}));
			const o = "backspace-character",
				s = "insert-fragment",
				i = "insert-characters",
				r = "change-block-data",
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
				return x
			})), n.d(e, "a", (function() {
				return S
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./node_modules/immutable/dist/immutable.js"),
				i = n("./src/reddit/components/RichTextEditor/constants/draftEditorCommands.ts"),
				r = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
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
						i = s.getEndKey(),
						a = o.RichUtils.getCurrentBlockType(e) === t ? d.n : t;
					let u = e,
						p = o.Modifier.setBlockType(n, s, a);
					const h = n.getBlockForKey(i).getLength();
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
						const t = p.getBlockAfter(i);
						if (!t || t.getType() !== a && t.getType() !== d.n) {
							const t = o.SelectionState.createEmpty(i).merge({
								anchorOffset: h,
								focusOffset: h
							});
							p = o.Modifier.splitBlock(p, t), p = o.Modifier.setBlockType(p, p.getSelectionAfter(), d.n)
						}
					}
					return p = p.merge({
						selectionAfter: s
					}), o.EditorState.push(u, p, r.c)
				},
				h = (t, e) => {
					const n = o.Modifier.setBlockType(t, e, d.n);
					return o.Modifier.replaceText(n, e, "", Object(s.OrderedSet)([]))
				},
				g = (t, e) => o.EditorState.forceSelection(t, o.SelectionState.createEmpty(e)),
				m = t => {
					const e = t.getCurrentContent(),
						n = t.getSelection(),
						i = a.d(e, n),
						c = i.getBlockAfter(n.getEndKey()),
						l = o.SelectionState.createEmpty(c.getKey()),
						u = o.Modifier.replaceText(o.Modifier.setBlockType(i, l, d.n), l, "", Object(s.OrderedSet)([])),
						p = o.EditorState.push(t, u, r.d);
					return g(p, c.getKey())
				},
				f = t => {
					const e = t.getCurrentContent(),
						n = t.getSelection(),
						s = e.getBlockForKey(n.getEndKey()),
						r = s.set("depth", Math.max(s.getDepth() - 1, 0)),
						c = e.merge({
							blockMap: e.getBlockMap().merge({
								[s.getKey()]: r
							})
						});
					return o.EditorState.push(t, c, i.a)
				},
				b = t => {
					const e = t.getCurrentContent(),
						n = t.getSelection(),
						s = e.getBlockForKey(n.getEndKey()).getKey(),
						i = o.EditorState.push(t, h(e, n), r.c);
					return g(i, s)
				},
				y = t => {
					const e = t.getCurrentContent(),
						n = t.getSelection(),
						s = e.getBlockForKey(n.getEndKey()),
						i = s.getKey(),
						c = e.getBlockBefore(i).getKey(),
						a = o.SelectionState.createEmpty(i).merge({
							focusOffset: s.getText().length
						}),
						l = o.EditorState.push(t, h(((t, e) => {
							const n = t.getBlockMap().remove(e);
							return t.merge({
								blockMap: n
							})
						})(e, c), a), r.c);
					return g(l, i)
				},
				E = t => {
					const e = a.d(t.getCurrentContent(), t.getSelection());
					return o.EditorState.push(t, e, i.f)
				},
				x = t => {
					const e = a.a(t.getCurrentContent(), t.getSelection(), "\n");
					return o.EditorState.push(t, e, r.d)
				},
				S = t => {
					const e = t.getSelection(),
						n = a.a(t.getCurrentContent(), e, " ");
					return o.EditorState.push(t, n, r.d)
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
				return x
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./node_modules/immutable/dist/immutable.js"),
				i = n("./src/lib/memoizeByReference/index.ts"),
				r = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
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
				const i = o.EditorState.push(e, n, r.d);
				return o.EditorState.forceSelection(i, i.getSelection())
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
				let i = e.getFocusOffset() - 1;
				const r = [];
				for (; i >= 0;) {
					const t = o[i],
						e = s.get(i),
						n = e && e.getEntity();
					if (!t.trim().length || n) return null;
					if (":" === t && r.length > 0) break;
					r.unshift(t), i--
				}
				return i >= 0 && r.length ? r.join("").toLowerCase() : null
			}

			function y(t, e, n) {
				t.findEntityRanges(t => {
					const e = t.getEntity();
					return !!e && n.getEntity(e).getType() === c.a.EMOTE
				}, e)
			}
			const E = Object(i.a)(t => {
				if (t.getBlockMap().size > 1) return !1;
				const e = t.getFirstBlock();
				let n = 0;
				return y(e, () => n++, t), n <= 3 && n === e.getLength()
			});

			function x(t, e) {
				if (E(t.getCurrentContent()) === E(e.getCurrentContent())) return t;
				const n = t.getCurrentContent(),
					i = n.getFirstBlock();
				return o.EditorState.set(t, {
					currentContent: o.Modifier.mergeBlockData(n, Object(l.b)(i), Object(s.Map)({
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
				let i = t.getCharacterList();
				return i = i.withMutations(t => {
					for (let i = e; i < n; i++) t.set(i, o.CharacterMetadata.applyEntity(t.get(i), s))
				}), t.set("characterList", i)
			}
		},
		"./src/reddit/components/RichTextEditor/entity/cloneEntitiesInFragment.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return s
			})), n.d(e, "b", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/reddit/components/RichTextEditor/entity/applyEntityToContentBlock.ts");

			function s(t, e, n, s, i) {
				const r = t.createEntity(n.getType(), n.getMutability(), n.getData()),
					c = t.getLastCreatedEntityKey();
				return [r, Object(o.a)(e, s, i, c)]
			}

			function i(t, e) {
				let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const o = new Map;
				let i = e,
					r = t;
				return e.forEach((t, e) => {
					t && e && t.findEntityRanges(t => !!t.getEntity(), (n, s) => {
						const i = t.getEntityAt(n),
							r = o.get(i) || [];
						r.push({
							start: n,
							end: s,
							blockKey: e
						}), o.set(i, r)
					})
				}), o.forEach((e, o) => {
					const c = t.getEntity(o);
					(n ? e.slice(1) : e).forEach(t => {
						let {
							start: e,
							end: n,
							blockKey: o
						} = t;
						const a = i.get(o),
							[l, d] = s(r, a, c, e, n);
						r = l, i = i.set(o, d)
					})
				}), [r, i]
			}
		},
		"./src/reddit/components/RichTextEditor/entity/entityTypes.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return o
			})), n.d(e, "b", (function() {
				return i
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
				i = (t, e) => {
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
					const i = e.getStartKey() === o ? e.getStartOffset() : 0,
						r = e.getEndKey() === o ? e.getEndOffset() : t.getLength();
					t.findEntityRanges(n, (e, n) => {
						i <= n && r >= e && s.push({
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
					i = e.getStartOffset(),
					r = e.getEndOffset(),
					c = s.getEntityAt(r) || (r > 0 ? s.getEntityAt(r - 1) : null);
				if (!c) return;
				let a, l;
				if (s.findEntityRanges(t => t.getEntity() === c, (t, e) => {
						t <= i && r <= e && (a = t, l = e)
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
				return x
			})), n.d(e, "g", (function() {
				return S
			})), n.d(e, "e", (function() {
				return C
			}));
			n("./node_modules/core-js/modules/es6.regexp.match.js");
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./src/lib/linkMatchers/index.ts"),
				i = n("./src/lib/linkMatchers/customLinks.ts"),
				r = n("./src/lib/memoizeByReference/index.ts"),
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
				f = Object(r.a)((function(t) {
					const e = t.getCurrentContent(),
						n = t.getSelection();
					if (!n.isCollapsed()) return;
					if (Object(u.q)(e.getBlockForKey(n.getStartKey()).getType())) return;
					const i = n.getFocusKey(),
						r = e.getBlockForKey(i),
						c = n.getFocusOffset(),
						a = r.getText(),
						l = a.lastIndexOf(" ", c - 1) + 1,
						p = a.slice(l, c);
					if (!p) return;
					const h = s.e.match(p);
					if (!h) return;
					const g = h[h.length - 1],
						m = l + g.index,
						f = l + g.lastIndex;
					let b = -1;
					if (r.findEntityRanges(t => !!t.getEntity(), (t, e) => {
							t < c && (b = e)
						}), b >= m) return;
					return r.getCharacterList().slice(m, f).find(d.b) ? void 0 : {
						selection: o.SelectionState.createEmpty(i).merge({
							anchorOffset: m,
							focusOffset: f
						}),
						url: g.url
					}
				}));

			function b(t, e, n) {
				const s = t.getSelection();
				let i = t.getCurrentContent();
				const r = (i = i.createEntity(c.a.LINK, "MUTABLE", {
					url: n
				})).getLastCreatedEntityKey();
				return i = (i = o.Modifier.applyEntity(i, e, r)).merge({
					selectionAfter: s
				}), o.EditorState.push(t, i, "apply-entity")
			}
			const y = Object(r.a)((function(t) {
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
			const E = Object(r.a)((function(t) {
				const e = t.getCurrentContent(),
					n = t.getSelection(),
					o = Object(l.a)(e, n);
				if (!o) return;
				const s = n.getFocusOffset(),
					i = e.getEntity(o.entityKey),
					{
						linkPrefix: r
					} = m(o.entityText);
				if (!p.includes(i.getType()) || !o.entityText.startsWith(r) || s - o.entitySelection.getStartOffset() < r.length) return;
				const c = o.entityText.slice(r.length);
				return Object.assign({
					internalName: c
				}, o)
			}));

			function x(t, e, n, s) {
				let i = "apply-entity",
					r = t.getCurrentContent(),
					a = t;
				const d = Object(l.a)(r, e);
				if (n)
					if (d) {
						const t = r.getEntity(d.entityKey),
							{
								url: e
							} = t.getData();
						e !== n && (r = r.mergeEntityData(d.entityKey, {
							url: n
						})), void 0 !== s && d.entityText !== s && (r = o.Modifier.replaceText(r, d.entitySelection, s, void 0, d.entityKey), i = "insert-characters")
					} else {
						if (void 0 === s) throw new Error("New link display text must be provided!");
						const t = (r = r.createEntity(c.a.LINK, "MUTABLE", {
							url: n
						})).getLastCreatedEntityKey();
						r = o.Modifier.replaceText(r, e, s, void 0, t), i = "insert-characters"
					}
				else r = (r = o.Modifier.applyEntity(r, e, "")).merge({
					selectionAfter: t.getSelection()
				});
				return r === t.getCurrentContent() ? t : a = o.EditorState.push(a, r, i)
			}

			function S(t, e) {
				const n = E(t);
				if (!n) return t;
				const {
					linkPrefix: s,
					url: r
				} = m(n.entityText), c = s === i.d.mention ? i.d.profile : s, a = "".concat(c).concat(e), l = n.entitySelection.getStartOffset() + a.length;
				let d = x(t, n.entitySelection, r, a);
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
				i = n("./node_modules/immutable/dist/immutable.js"),
				r = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			! function(t) {
				t.before = "before", t.after = "after"
			}(o || (o = {}));
			const c = (t, e) => new s.ContentBlock(Object.assign({
					key: t || Object(s.genKey)()
				}, e ? {
					text: e,
					characterList: Object(i.List)(Object(i.Repeat)(s.CharacterMetadata.create(), e.length))
				} : {})),
				a = t => t.props.children,
				l = t => a(t).props.block,
				d = function(t, e, n) {
					let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.after,
						a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
						l = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
					const d = [];
					let p = -1;
					if (t.getBlockMap().forEach((t, s) => {
							i === o.after && d.push(t), s === e && (d.push(...n), p = d.length - 1), i === o.before && d.push(t)
						}), p >= 0) {
						if (a) {
							const t = d[p + 1];
							t && t.getType() === r.n || d.splice(p + 1, 0, c())
						}
						if (l) {
							const t = p - n.length,
								e = d[t];
							e && e.getType() === r.n || d.splice(t + 1, 0, c())
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
				g = t => t.getType() === r.n && !t.getText()
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
				i = n("./src/lib/forEachGroup/index.ts"),
				r = n("./src/lib/memoizeByReference/index.ts"),
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
					const r = new Set(Object.keys(o));
					if (r.delete(d.k.HIGHLIGHT), n.isCollapsed()) {
						const s = e.getBlockForKey(n.getEndKey()),
							i = s.getType();
						Object(d.q)(i) || Object(d.r)(i) || Object(d.t)(i) || r.forEach(t => o[t].isEnabled = !0), t.getCurrentInlineStyle().forEach(t => {
							t && o[t] && (o[t].isActive = !0)
						}), Object(u.i)(s) && (o[d.k.BOLD] = {
							isEnabled: !1,
							isActive: !1
						})
					} else {
						Object(h.e)(e, n).forEach(t => {
							r.delete(t), o[t] && (o[t].isActive = !0, o[t].isEnabled = !0)
						}), Object(p.a)(e, n, (t, s) => {
							if (!r.size) return !1;
							const c = n.getStartKey() === s ? n.getStartOffset() : 0,
								a = n.getEndKey() === s ? n.getEndOffset() : t.getLength(),
								l = t.getType(),
								u = t.getCharacterList();
							Object(d.q)(l) || Object(d.r)(l) || Object(d.t)(l) || Object(i.a)(u, {
								start: c,
								end: a
							}, (n, s, i, c) => {
								const a = n.getStyle(),
									l = n.getEntity(),
									d = l ? e.getEntity(l) : null;
								if (r.forEach(e => {
										const n = !o[e].isActive,
											s = Object(h.f)(a, t, d, e, n);
										s && s !== a && (o[e].isEnabled = !0, r.delete(e))
									}), !r.size) return !1
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
				f = Object(r.a)(t => {
					const e = t.getCurrentContent(),
						n = t.getSelection(),
						o = (t => {
							const e = t.getCurrentContent(),
								n = t.getSelection();
							let o = m(!0),
								i = null;
							if (n.isCollapsed()) i = e.getBlockForKey(n.getEndKey()).getType();
							else {
								let t = null;
								Object(p.a)(e, n, (e, n) => {
									const s = e.getType();
									return Object(d.t)(s) ? (o = m(!1), !1) : (null === t && (t = s), t !== s ? (t = null, !1) : void 0)
								}), i = t
							}
							return null !== i && ((Object(d.v)(i) || Object(d.t)(i)) && s()(o, t => {
								t.isEnabled = !1
							}), o[i].isActive = !0), o
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
				let i = !1;
				t.getBlockMap().forEach((t, e) => {
					if (e === o && (i = !0), !i || !t || !e) return;
					const r = n(t, e);
					return e !== s && r
				})
			}
			n.d(e, "a", (function() {
				return o
			}))
		},
		"./src/reddit/components/RichTextEditor/helpers/modifiers.ts": function(t, e, n) {
			"use strict";
			n.d(e, "c", (function() {
				return r
			})), n.d(e, "b", (function() {
				return c
			})), n.d(e, "a", (function() {
				return a
			})), n.d(e, "d", (function() {
				return l
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./src/reddit/components/RichTextEditor/entity/cloneEntitiesInFragment.ts");

			function i(t, e) {
				const n = e.getStartKey();
				if (n !== e.getEndKey()) return;
				const o = t.getBlockForKey(n),
					i = e.getStartOffset(),
					r = e.getEndOffset(),
					c = i > 0 ? o.getEntityAt(i - 1) : null,
					a = o.getEntityAt(r);
				if (!c || !a || c !== a) return;
				const l = t.getEntity(a),
					d = o.getCharacterList().toSeq().skip(r).takeWhile(t => !!t && t.getEntity() === a).count(),
					[u, p] = Object(s.a)(t, o, l, r, r + d);
				return u.merge({
					blockMap: u.getBlockMap().set(o.getKey(), p)
				})
			}

			function r(t, e, n) {
				const s = i(t, e) || t;
				return o.Modifier.replaceWithFragment(s, e, n)
			}

			function c(t, e, n, s, r) {
				let c = t;
				return -1 !== n.indexOf("\n") && (c = i(t, e) || c), o.Modifier.replaceText(c, e, n, s, r)
			}

			function a(t, e, n, s, r) {
				let c = t;
				return -1 !== n.indexOf("\n") && (c = i(t, e) || c), o.Modifier.insertText(c, e, n, s, r)
			}

			function l(t, e) {
				const n = i(t, e) || t;
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
					i = e.getType();
				let r = null,
					c = null,
					a = !1;
				if (s()(n, (t, e) => {
						if (a || t.getKey() !== o || (a = !0), t.getType() === i) null === r && (r = e), c = e;
						else {
							if (a) return !1;
							r = null, c = null
						}
					}), a) return c = c || 0, {
					start: r = r || 0,
					blocks: n.slice(r, c + 1)
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
				i = n("./src/lib/forEachGroup/index.ts"),
				r = n("./src/reddit/components/RichTextEditor/entity/entityTypes.ts"),
				c = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts"),
				a = n("./src/reddit/components/RichTextEditor/table/helpers.ts"),
				l = n("./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts");
			const d = Object(s.OrderedSet)([]),
				u = function(t, e, n, o) {
					let i = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
					const l = e.getType();
					if (Object(c.q)(l) || Object(c.r)(l) || Object(c.t)(l)) return;
					if (o === c.k.BOLD && Object(a.i)(e)) return;
					const u = n ? n.getType() : null,
						p = u === r.a.SUBREDDIT_LINK || u === r.a.USER_LINK;
					return p && o !== c.k.SPOILER && o !== c.k.MONOSPACE || u === r.a.EMOTE ? void 0 : o === c.k.MONOSPACE || o === c.k.SPOILER ? i ? Object(s.OrderedSet)([o]) : d : (t.has(c.k.MONOSPACE) || t.has(c.k.SPOILER)) && i ? Object(s.OrderedSet)([o]) : !i || o !== c.k.SUPERSCRIPT && o !== c.k.SUBSCRIPT ? i ? t.add(o) : t.has(o) ? t.delete(o) : void 0 : t.delete(c.k.SUBSCRIPT).delete(c.k.SUPERSCRIPT).add(o)
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
						Object(i.a)(g, {
							start: p,
							end: h
						}, e => {
							const o = e.getEntity();
							if (o && t.getEntity(o).getType() === r.a.SUBREDDIT_LINK) return;
							let s = e.getStyle();
							return u && (s = s.add(c.k.BOLD)), null === n ? n = s.asMutable() : n.intersect(s), !(n && !n.size) && void 0
						})
					}), null === n ? [] : (o && n.delete(c.k.BOLD), n.toJS())
				},
				h = (t, e) => {
					const n = e.getCurrentContent(),
						s = e.getSelection();
					let r = n.getBlockMap();
					const a = -1 === p(n, s).indexOf(t);
					Object(l.a)(n, s, (e, l) => {
						if (!e || !l) return !1;
						const d = s.getStartKey() === l ? s.getStartOffset() : 0,
							p = s.getEndKey() === l ? s.getEndOffset() : e.getLength(),
							h = e.getCharacterList(),
							g = h.withMutations(s => {
								Object(i.a)(h, {
									start: d,
									end: p
								}, (i, r, l, d) => {
									const p = i.getStyle(),
										h = i.getEntity(),
										g = h ? n.getEntity(h) : null,
										m = u(p, e, g, t, a);
									if (m) {
										const t = ((t, e) => o.CharacterMetadata.create({
											style: e,
											entity: e.has(c.k.SPOILER) ? null : t.getEntity()
										}))(i, m);
										for (let e = l; e < d; e++) s.set(e, t)
									}
								})
							});
						if (g !== h) {
							const t = e.set("characterList", g);
							r = r.set(l, t)
						}
					});
					const d = n.merge({
						blockMap: r,
						selectionAfter: s
					});
					return o.EditorState.push(e, d, "change-inline-style")
				},
				g = (t, e) => {
					const n = e.getCurrentContent(),
						s = e.getSelection(),
						i = n.getBlockForKey(s.getStartKey()),
						r = i.getEntityAt(s.getStartOffset()),
						c = r ? n.getEntity(r) : null,
						a = e.getCurrentInlineStyle(),
						l = u(a, i, c, t, !a.has(t));
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
				i = n("./node_modules/lodash/filter.js"),
				r = n.n(i),
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
				x = n("./src/reddit/actions/postCreation/mediaUpload.ts"),
				S = n("./src/reddit/featureFlags/index.ts"),
				C = n("./src/reddit/helpers/trackers/postComposer.ts"),
				O = n("./src/reddit/models/Gold/Powerups/index.ts"),
				k = n("./src/reddit/models/PostCreationForm/index.ts"),
				v = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const T = {
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
				_ = n("./node_modules/lodash/escape.js"),
				I = n.n(_),
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
				V = n("./src/reddit/components/RichTextEditor/helpers/modifiers.ts"),
				W = n("./src/reddit/components/RichTextEditor/table/helpers.ts"),
				q = n("./node_modules/lodash/last.js"),
				G = n.n(q),
				Q = n("./src/reddit/components/RichTextEditor/constants/editorChangeTypes.ts"),
				Y = n("./src/reddit/components/RichTextEditor/helpers/forEachBlock.ts"),
				Z = n("./node_modules/lodash/find.js"),
				J = n.n(Z);
			var X = (t, e) => {
				const n = t.getSelection(),
					s = t.getCurrentContent(),
					i = s.getBlockForKey(n.getAnchorKey()),
					r = s.getBlockForKey(n.getFocusKey()),
					[c, a] = Object(W.e)(s, i, r);
				if (!c || c !== a) return t;
				const l = Object(W.g)(i),
					d = Object(W.g)(r),
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
					} = Object(W.f)(l, d),
					E = u.filter(t => {
						const {
							rowIndex: n,
							colIndex: o
						} = Object(W.g)(t);
						return "rows" === e ? !(f <= n && n <= y) : !(m <= o && o <= b)
					});
				E.sort(W.b);
				const x = "rows" === e ? h : E.length / g,
					S = U()(Object(W.d)(N()(E, x))),
					C = s.getBlocksAsArray(),
					O = [...C.slice(0, p), ...S, ...C.slice(p + u.length)],
					k = s.merge({
						blockMap: o.BlockMapBuilder.createFromArray(O)
					}),
					v = {
						colIndex: m,
						rowIndex: f
					};
				let T = J()(S, t => Object(W.h)(v, Object(W.g)(t)));
				T || (T = S.length ? S[S.length - 1] : C[p > 0 ? p - 1 : 0]);
				const j = o.SelectionState.createEmpty(T.getKey()).merge({
					focusOffset: T.getLength(),
					anchorOffset: T.getLength()
				});
				let R = o.EditorState.push(t, k, Q.e);
				return R = o.EditorState.forceSelection(R, j)
			};
			var $ = function(t) {
				let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				const n = t.getSelection();
				if (n.isCollapsed()) return;
				if (n.getStartKey() === n.getEndKey() && !e) return;
				const s = t.getCurrentContent(),
					i = s.getBlockForKey(n.getAnchorKey()),
					r = s.getBlockForKey(n.getFocusKey()),
					[c, a] = Object(W.e)(s, i, r);
				if (!c || c !== a) return;
				const l = {};
				let d = n;
				if (i === r) {
					const t = Object(W.n)(r, 0, n.getStartOffset()),
						e = Object(W.n)(r, n.getEndOffset());
					l[r.getKey()] = Object(W.j)(r, [t, e]), d = n
				} else {
					if (c.blocks[0].getKey() === n.getStartKey() && G()(c.blocks).getKey() === n.getEndKey()) return X(t, "rows");
					Object(Y.a)(s, n, (t, e) => {
						l[e] = Object(W.n)(t, 0, 0)
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
					t.forEach((t, i) => {
						s.push("<".concat(n, " ").concat(o[i], " ").concat('style="margin: 0px; padding: 4px 9px; border: 1px solid rgb(229, 227, 218);"', ">")), bt(t, e), s.push("</".concat(n, ">"))
					})
				},
				et = t => {
					const e = t[0],
						n = t[t.length - 1],
						o = [...t].sort(W.b),
						{
							minCol: s,
							maxCol: i
						} = Object(W.f)(Object(W.g)(e), Object(W.g)(n)),
						r = i - s + 1;
					return Object(W.d)(N()(o, r))
				},
				nt = (t, e, n) => {
					n ? bt(t[0], e) : ((t, e) => {
						const {
							editor: n,
							htmlParts: o
						} = e, s = n.getEditorKey(), i = t[0].map(t => {
							const {
								alignment: e
							} = Object(W.g)(t);
							return e ? 'align="'.concat(W.a[e], '"') : ""
						}), [r, ...c] = t;
						o.push('\n    <table data-editor="'.concat(s, '">\n      <thead>\n        <tr>')), tt(r, e, "th", i), o.push("\n        </tr>\n      </thead>\n      <tbody>"), c.forEach(t => {
							o.push("\n        <tr>"), tt(t, e, "td", i), o.push("\n        </tr>")
						}), o.push("\n      </tbody>\n    </table>")
					})(et(t), e)
				},
				ot = (t, e, n) => {
					n ? e.textParts.push(xt(t[0], e)) : ((t, e) => {
						const {
							textParts: n
						} = e;
						t.forEach(t => {
							n.push(t.map(t => xt(t, e)).join(" "))
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
						i = 1 === o.length && s;
					nt(o, t, i), ot(o, t, i), ((t, e, n, o) => {
						if (n)
							if (o) {
								const n = t[0].merge({
									data: Object(L.Map)(),
									type: v.n
								});
								e.blocksParts = [n]
							} else e.blocksParts = U()(et(t))
					})(o, t, s, i), e.push(...o)
				},
				it = t => $(t, !0),
				rt = (t, e, n) => {
					const s = Object(v.v)(n.first().getType()),
						i = Object(v.v)(n.last().getType()),
						r = t.getBlockForKey(e.getAnchorKey()),
						c = t.getBlockForKey(e.getFocusKey()),
						[a, l] = Object(W.e)(t, r, c);
					return a && a === l ? ((t, e, n, s) => {
						const i = Object(v.v)(s.first().getType()),
							r = t.getBlockForKey(e.getAnchorKey()),
							c = t.getBlockForKey(e.getFocusKey()),
							{
								blocks: a,
								start: l
							} = n;
						a.sort(W.b);
						const d = Object(W.g)(a[0]);
						let {
							colCount: u
						} = d;
						const p = N()(a, u);
						let h = p.length;
						const {
							minRow: g,
							minCol: m
						} = Object(W.f)(Object(W.g)(r), Object(W.g)(c)), f = s.toArray();
						if (i) {
							const n = z()(f, t => Object(v.v)(t.getType()));
							n.sort(W.b);
							const s = Object(W.g)(n[0]).colCount,
								i = N()(n, s),
								r = i.length,
								c = g + r - 1,
								d = m + s - 1;
							if (n.length !== r * s) throw new Error("Invalid table fragment!");
							if (d >= u && p.forEach(t => {
									t.push(...Object(W.l)(d - u + 1, 1))
								}), u = p[0].length, c >= h) {
								const t = N()(Object(W.l)(u, c - h + 1), u);
								p.push(...t)
							}
							h = p.length;
							for (let t = 0; t < r; t++)
								for (let e = 0; e < s; e++) {
									const n = g + t,
										o = m + e,
										s = i[t][e];
									p[n][o] = s.set("key", p[n][o].getKey())
								}
							const b = Object(W.d)(p),
								y = U()(b),
								E = t.getBlocksAsArray(),
								x = [...E.slice(0, l), ...y, ...E.slice(l + a.length)],
								S = Object(W.o)(e, p[g][m], p[c][d]);
							return t.merge({
								blockMap: o.BlockMapBuilder.createFromArray(x),
								selectionAfter: S
							})
						} {
							const n = p[g][m],
								s = Object(W.j)(n, f, " ");
							let i = e;
							return e.getStartKey() !== e.getEndKey() && (i = Object(W.o)(e, n, n)), V.c(t, i, o.BlockMapBuilder.createFromArray([s]))
						}
					})(t, e, a, n) : a || l || !s && !i ? void 0 : ((t, e, n) => {
						const s = Object(v.v)(n.first().getType()),
							i = Object(v.v)(n.last().getType()),
							r = n.toArray();
						s && r.unshift(Object(K.h)()), i && r.push(Object(K.h)());
						const c = o.BlockMapBuilder.createFromArray(r);
						return V.c(t, e, c)
					})(t, e, n)
				};
			var ct = n("./node_modules/draft-js/lib/removeEntitiesAtEdges.js"),
				at = n.n(ct);
			var lt = (t, e) => {
				const n = e.getStartKey(),
					o = e.getStartOffset(),
					s = e.getEndKey(),
					i = e.getEndOffset(),
					r = at()(t, e).getBlockMap(),
					c = r.keySeq(),
					a = c.indexOf(n),
					l = c.indexOf(s) + 1;
				return r.slice(a, l).map((t, e) => {
					const r = t.getText(),
						c = t.getCharacterList();
					return n === s ? t.merge({
						text: r.slice(o, i),
						characterList: c.slice(o, i)
					}) : e === n ? t.merge({
						text: r.slice(o),
						characterList: c.slice(o)
					}) : e === s ? t.merge({
						text: r.slice(0, i),
						characterList: c.slice(0, i)
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
					} = e, i = n === v.b.ORDERED_LIST ? "ol" : "ul";
					s.push("<".concat(i, ">")), o.forEach(t => ((t, e) => {
						const {
							block: n,
							childrenLists: o
						} = t, {
							htmlParts: s
						} = e;
						s.push("<li>"), bt(n, e, !0), o && o.forEach(t => ut(t, e)), s.push("</li>")
					})(t, e)), s.push("</".concat(i, ">"))
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
						textParts: i
					} = n, r = " ".repeat(o.getDepth()), c = o.getType() === v.b.ORDERED_LIST ? "".concat(e + 1, ".") : "-", a = xt(o, n);
					i.push("".concat(r).concat(c, " ").concat(a)), s && s.forEach(t => pt(t, n))
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
					const i = (t => {
						const e = t[0],
							n = {
								type: e.getType(),
								children: []
							};
						let o, s = n,
							i = e.getDepth();
						return t.forEach(t => {
							const e = t.getType(),
								n = t.getDepth();
							if (n > i) {
								const e = dt(t, o);
								s = e.list, o = e.item, i = n
							} else {
								for (; i !== n;) s = s.parentItem ? s.parentItem.parentList : s, i--;
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
					ut(i, t), pt(i, t), t.processed.push(...s)
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
					i = JSON.stringify(Object(o.convertToRaw)(s));
				return "<div ".concat("data-reddit-rtjson", '="').concat(I()(i), '">').concat(e, "</div>")
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
					} = e, s = n.getStartKey(), i = n.getEndKey(), r = t.getKey(), c = o.refs.editor, a = Object(K.d)(r, c);
					return a ? r === s || r === i ? Object(D.c)(a) : [a] : null
				};
			var Et = (t, e, n) => {
				const s = t.getCurrentContent(),
					i = t.getSelection(),
					r = Tt(t) || lt(s, i);
				if (!r || !r.count()) return;
				const c = r.toArray(),
					a = {
						editor: e,
						editorState: t,
						selection: i,
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
							St(a)
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
			const xt = (t, e) => {
					const n = t.getText(),
						o = e.editorState.getCurrentContent(),
						s = [];
					let i = -1;
					return t.getCharacterList().forEach((t, e) => {
						const r = t && t.getEntity();
						if (r && void 0 !== e) {
							const t = o.getEntity(r);
							t.getType() === M.a.EMOTE && (s.push(n.substring(i + 1, e)), s.push(":".concat(t.getData().id, ":")), i = e)
						}
					}), s.push(n.substring(i + 1, n.length)), s.join("")
				},
				St = t => {
					const e = t.remaining.shift();
					((t, e) => bt(t, e))(e, t), ((t, e) => {
						e.textParts.push(xt(t, e))
					})(e, t), t.processed.push(e)
				},
				Ct = (t, e) => {
					const n = t.first(),
						s = t.last();
					let i = t;
					if (Object(v.u)(n.getType()) ? i = i.set(i.keySeq().first(), n.merge({
							type: v.n
						})) : Object(v.o)(n.getType()) && (i = o.BlockMapBuilder.createFromArray([Object(K.h)(), ...i.toArray()])), Object(v.u)(s.getType()) || !Object(A.q)(e)) {
						const t = Object(K.h)();
						i = i.set(t.getKey(), t)
					} else if (Object(v.o)(s.getType())) {
						const t = Object(K.h)().merge({
							type: v.j
						});
						i = i.set(t.getKey(), t)
					}
					return i
				},
				Ot = (t, e, n) => {
					const o = t.getBlockForKey(e.getStartKey());
					if (Object(v.u)(o.getType())) {
						const o = n.first(),
							s = n.set(n.keySeq().first(), Object(K.h)(o.getKey(), o.getText()).merge({
								type: v.j
							}));
						return V.c(t, e, s)
					}
				},
				kt = (t, e, n) => {
					const o = ((t, e, n) => {
						const o = e ? e.getText() : "";
						return '<span data-editor="'.concat(n, '">').concat(I()(o), "</span>")
					})(0, e, n.editor.getEditorKey());
					n.htmlParts.push(o)
				},
				vt = t => {
					const {
						remaining: e
					} = t, n = e.shift(), o = e[0] && Object(v.u)(e[0].getType()) ? e.shift() : void 0;
					kt(0, o, t), ((t, e) => {
						const n = t ? xt(t, e) : "";
						e.textParts.push(n)
					})(o, t), t.processed.push(n), o && t.processed.push(o)
				},
				Tt = t => {
					const e = t.getSelection(),
						n = e.getFocusKey();
					if (n !== e.getAnchorKey()) return;
					const s = t.getCurrentContent(),
						i = s.getBlockForKey(n);
					if (Object(v.o)(i.getType())) {
						const t = [i],
							e = s.getBlockAfter(i.getKey());
						return e && Object(v.u)(e.getType()) && t.push(e), o.ContentState.createFromBlockArray(t).getBlockMap()
					}
				},
				jt = t => {
					const e = Tt(t);
					if (e) return Object(A.d)(t, e.first().getKey())
				},
				Rt = t => {
					const e = t.getSelection();
					let n = t.getCurrentContent();
					const s = n.getBlockForKey(e.getStartKey()),
						i = n.getBlockForKey(e.getEndKey());
					if (Object(v.t)(s.getType()) || Object(v.t)(i.getType())) {
						if (e.isCollapsed())
							if (Object(v.u)(s.getType())) n = V.d(n, e), n = o.Modifier.setBlockType(n, n.getSelectionAfter(), v.n);
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
						i = "up" === e ? n.getStartKey() : n.getEndKey(),
						r = s.getBlockForKey(i);
					if (!Object(v.o)(r.getType())) return;
					const c = "up" === e ? s.getBlockBefore(i) : s.getBlockAfter(i);
					return c ? o.EditorState.forceSelection(t, Object(K.b)(c, !0)) : Object(A.b)(t, i, "up" === e ? K.a.before : K.a.after)
				},
				Bt = (t, e) => {
					if (t.shiftKey) return;
					const n = wt(e, "up");
					return n && t.preventDefault(), n
				},
				_t = (t, e) => {
					if (t.shiftKey) return;
					const n = wt(e, "down");
					return n && t.preventDefault(), n
				},
				It = (t, e) => {
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
				Pt = n("./src/reddit/selectors/activeModalId.ts");
			const Ut = "application/x-reddit-rte-block";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var Ht = n("./src/reddit/models/Upload/index.ts"),
				zt = n("./src/reddit/components/RichTextEditor/media/MediaBlock/MediaView/ImagePreview/index.m.less"),
				Vt = n.n(zt);
			const Wt = m.a.img("Img", Vt.a);
			var qt = m.a.wrapped(t => {
					const {
						className: e,
						url: n
					} = t;
					return a.a.createElement("div", {
						className: e
					}, a.a.createElement(Wt, {
						draggable: !1,
						src: n
					}))
				}, "Component", Vt.a),
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
				oe = m.a.wrapped($t.o, "Button", ee.a),
				se = m.a.wrapped($t.o, "ErrButton", ee.a),
				ie = m.a.div("Status", ee.a),
				re = m.a.wrapped(Xt.a, "ProgressBar", ee.a),
				ce = m.a.div("ErrorLine", ee.a),
				ae = t => e => {
					e.stopPropagation(), t(e)
				};
			var le = m.a.wrapped(t => {
					const {
						upload: e
					} = t, n = ae(t.onCancel), o = ae(t.onRetry), i = ae(t.onRemove), {
						status: r,
						progress: c
					} = e, l = c && c.percent || 0, d = r === Ht.a.FAILED || r === Ht.a.CANCELED, u = (t => {
						const {
							status: e,
							progress: n
						} = t;
						return e === Ht.a.CANCELED ? s.fbt._("Upload was canceled", null, {
							hk: "71azQ"
						}) : e === Ht.a.FAILED ? s.fbt._("Upload failed: {errorText}", [s.fbt._param("errorText", Object(Jt.a)(t.error))], {
							hk: "3NGGzE"
						}) : 100 === (n && n.percent || 0) ? s.fbt._("Success!", null, {
							hk: "3622uh"
						}) : s.fbt._("Uploading: {fileName}", [s.fbt._param("fileName", t.file.name)], {
							hk: "H7qzO"
						})
					})(e);
					return a.a.createElement("div", {
						className: t.className
					}, d ? a.a.createElement(ce, null) : a.a.createElement(re, {
						innerBarClassName: ee.a.ProgressBarInner,
						percent: l
					}), a.a.createElement(ne, null, a.a.createElement(ie, {
						className: d ? ee.a.hasError : void 0,
						title: d ? u : void 0
					}, u), a.a.createElement("div", null, d ? [a.a.createElement(se, {
						key: "remove",
						onClick: i
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
						style: i,
						dashUrl: r,
						hlsUrl: c,
						otherUrl: l
					} = t;
					return a.a.createElement("div", {
						className: n,
						style: i
					}, a.a.createElement(ue.b, {
						autoPlay: e,
						shouldIgnoreAutoplayPref: !0,
						shouldLoad: !1,
						shouldPause: s,
						isGif: !1,
						hlsSource: c,
						mpegDashSource: r,
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
			class xe extends a.a.Component {
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
						otherUrl: i
					} = this.props;
					if (!n) return this.renderVideo();
					const {
						showVideo: r
					} = this.state, c = !!(o || s || i);
					return a.a.createElement(de.TransitionMotion, {
						defaultStyles: [],
						styles: e && r && c ? fe : [],
						willEnter: this.willEnter,
						willLeave: this.willLeave,
						didLeave: this.didLeave
					}, c => a.a.createElement("div", {
						className: t
					}, c.map(t => a.a.createElement(be, {
						key: t.key,
						autoPlay: !0,
						style: t.style,
						otherUrl: i,
						dashUrl: o,
						hlsUrl: s,
						showControls: !0,
						shouldPause: !e || void 0
					})), a.a.createElement(Ee, {
						url: n,
						showPlayButton: !r || !e,
						onPlayButtonClick: this.onPlayButtonClick
					})))
				}
			}
			var Se = m.a.wrapped(xe, "Component", ge.a),
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
			var ve = function(t, e) {
				var n = {};
				for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.indexOf(o) < 0 && (n[o] = t[o]);
				if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (o = Object.getOwnPropertySymbols(t); s < o.length; s++) e.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[s]) && (n[o[s]] = t[o[s]])
				}
				return n
			};
			var Te = t => {
					const {
						alignCenter: e,
						isSelected: n,
						onCancel: o,
						onRetry: s,
						onRemove: i,
						upload: r,
						mediaAsset: c,
						thumbnail: l
					} = t, d = ve(t, ["alignCenter", "isSelected", "onCancel", "onRetry", "onRemove", "upload", "mediaAsset", "thumbnail"]);
					let u = !1;
					if (r) u = "image" === Object(Ft.f)(r.metadata.mimetype);
					else {
						if (!c) return null;
						u = c.type === A.a.Image || c.type === A.a.AnimatedImage
					}
					const p = r ? r.metadata.height : c.height,
						g = !r || r.status === Ht.a.SUCCESS,
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
						url: r ? r.metadata.localUrl : c.imageUrl
					}) : a.a.createElement(Se, {
						className: Oe.a.videoPreview,
						dashUrl: c ? c.dashUrl : void 0,
						hlsUrl: c ? c.hlsUrl : void 0,
						isSelected: n,
						isUploaded: g,
						otherUrl: r ? r.metadata.localUrl : void 0,
						posterUrl: l ? l.url : c.posterUrl
					}), r && a.a.createElement(le, {
						className: Oe.a.statusBar,
						onCancel: o,
						onRemove: i,
						onRetry: s,
						upload: r
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
				Fe = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx"),
				Ne = n("./src/reddit/components/RichTextEditor/Toolbar/formatterConfigs.tsx"),
				Pe = n("./src/reddit/components/RichTextEditor/media/MediaBlock/Toolbar/index.m.less"),
				Ue = n.n(Pe);
			const He = m.a.wrapped(Fe.a, "FormatterButton", Ue.a),
				ze = Object(Ne.f)(Me.b),
				Ve = Object(Ne.f)(Ke.a),
				We = m.a.wrapped(Le.a, "ToolbarContent", Ue.a);
			var qe = t => {
					const {
						alignCenter: e,
						block: n,
						editorState: o,
						onChange: i,
						showVideoControls: r
					} = t, c = n.getKey(), {
						makeGif: l = !1
					} = Object(A.h)(n) || {};
					return a.a.createElement("div", {
						className: Object(h.a)(Ue.a.container, {
							[Ue.a.alignCenter]: e
						})
					}, a.a.createElement(We, {
						className: Ue.a.content
					}, r && a.a.createElement(Ae.a, {
						isCompact: !0,
						key: "make-gif",
						on: l,
						onClick: () => i(Object(A.r)(o, c, {
							makeGif: !l
						}))
					}), r && t.showThumbnailButton && a.a.createElement(He, {
						Icon: Ve,
						onClick: t.onThumbnailButtonClick,
						tooltip: s.fbt._("Choose thumbnail", null, {
							hk: "2gKwDF"
						}),
						tooltipBelow: !0
					}), r && a.a.createElement(De.c, null), a.a.createElement(He, {
						Icon: ze,
						onClick: () => i(Object(A.d)(o, c)),
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
					const n = Object(A.h)(e.block);
					return n && n.uploadInfo && n.uploadInfo.uploadKey
				}, (t, e) => e ? t[e] : void 0),
				Je = Object(l.b)((t, e) => ({
					upload: Ze(t, e),
					isThumbnailSelectorOpen: Object(Pt.a)(t) === Ye(e.block),
					isRteVideoPosterEnabled: S.d.rteVideoPoster(t)
				}), (t, e) => ({
					onCancelUpload: e => t(Mt.i(e, !1)),
					toggleVideoThumbnailsSelector: () => t(Object(Kt.i)(Ye(e.block)))
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
						t.dataTransfer.effectAllowed = "move", t.dataTransfer.setData(Ut, this.props.block.getKey())
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
						offsetKey: o,
						upload: s
					} = this.props, i = Object(A.h)(t), r = i ? i.thumbnail : void 0, c = !!s && Object(Ft.l)(s.metadata.mimetype || ""), {
						active: l,
						isInSelection: d
					} = this.state, u = e.editorType === Nt.a.Comment;
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
					}, a.a.createElement(Te, {
						isSelected: d || l,
						thumbnail: r,
						onCancel: this.onCancelUpload,
						onClickCapture: this.onMediaViewClickCapture,
						onRetry: this.onRetryUpload,
						onRemove: this.onRemove,
						upload: s,
						mediaAsset: i.mediaAsset,
						alignCenter: !u
					})), s && c && a.a.createElement(Lt.a, {
						onSelect: this.onThumbnailSelect,
						onToggleModal: this.toggleVideoThumbnailsSelector,
						videoSource: s.metadata.localUrl,
						videoDuration: s.metadata.videoDuration,
						selected: r,
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
						i = o.getBlockForKey(this.mediaBlockKey),
						r = Object(A.h)(i);
					if (!r || !(r.mediaAsset || r.uploadInfo && r.uploadInfo.mediaType)) return null;
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
			const rn = Object(L.Map)({
				[v.j]: {
					element: "div",
					wrapper: a.a.createElement(sn, null)
				}
			});
			var cn = (t, e, n) => {
					const s = t.getSelection(),
						i = t.getCurrentContent(),
						r = i.getBlockForKey(s.getAnchorKey()),
						c = i.getBlockForKey(s.getFocusKey()),
						[a, l] = Object(W.e)(i, r, c);
					if (!a || a !== l) return t;
					const {
						blocks: d,
						start: u
					} = a, p = Object(W.g)(r), h = Object(W.g)(c), {
						colCount: g
					} = h;
					d.sort(W.b);
					const m = N()(d, g),
						{
							minCol: f,
							minRow: b,
							maxCol: y,
							maxRow: E
						} = Object(W.f)(p, h),
						x = {
							rowIndex: 0,
							colIndex: 0
						};
					if ("rows" === e) {
						const t = "before" === n ? b : E + 1,
							e = N()(Object(W.l)(g, E - b + 1), g);
						m.splice(t, 0, ...e), x.rowIndex = t
					} else {
						const t = "before" === n ? f : y + 1;
						m.forEach(e => {
							e.splice(t, 0, ...Object(W.l)(y - f + 1, 1))
						}), x.colIndex = t
					}
					const S = Object(W.d)(m),
						C = i.getBlocksAsArray(),
						O = U()(S),
						k = [...C.slice(0, u), ...O, ...C.slice(u + d.length)],
						v = i.merge({
							blockMap: o.BlockMapBuilder.createFromArray(k)
						}),
						T = J()(O, t => Object(W.h)(x, Object(W.g)(t))),
						j = Object(W.o)(s, T, T);
					let R = o.EditorState.push(t, v, Q.e);
					return R = o.EditorState.forceSelection(R, j)
				},
				an = n("./node_modules/lodash/clamp.js"),
				ln = n.n(an),
				dn = n("./src/reddit/components/RichTextEditor/helpers/sliceContiguousBlocks.ts");
			var un = function(t, e) {
				let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "preserve";
				const s = t.getSelection(),
					i = t.getCurrentContent(),
					r = "up" === e || "left" === e ? s.getStartKey() : s.getEndKey(),
					c = i.getBlockForKey(r);
				if (!Object(v.v)(c.getType())) return;
				const a = Object(W.g)(c),
					{
						colCount: l,
						colIndex: d,
						rowIndex: u
					} = a,
					p = i.getBlocksAsArray(),
					h = Object(dn.a)(i, c);
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
				let b = r;
				const y = J()(h.blocks, t => Object(W.h)(Object(W.g)(t), f));
				if (y) b = y.getKey();
				else {
					const t = Object(W.c)(f, a) < 0 ? h.start - 1 : h.start + h.blocks.length;
					0 <= t && t < p.length && (b = p[t].getKey())
				}
				const E = i.getBlockForKey(b);
				let x = 0;
				"preserve" === n ? x = ln()(s.getFocusOffset(), 0, E.getLength()) : "end" === n && (x = E.getLength());
				const S = s.merge({
					anchorKey: b,
					focusKey: b,
					focusOffset: x,
					anchorOffset: x
				});
				return s !== S ? o.EditorState.forceSelection(t, S) : void 0
			};
			const pn = (t, e) => {
					const n = e.getCurrentContent(),
						o = e.getSelection(),
						s = n.getBlockForKey(o.getFocusKey()),
						[i] = Object(W.e)(n, s, s);
					if (!i) return;
					const r = Object(W.g)(s);
					let c;
					return (c = r.colIndex === r.colCount - 1 && r.rowIndex === i.blocks.length / r.colCount - 1 && !t.shiftKey && o.getFocusKey() === o.getAnchorKey() ? cn(e, "rows", "after") : un(e, t.shiftKey ? "left" : "right", "end")) ? (t.preventDefault(), c) : void 0
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
						[s] = Object(W.e)(e, o, o);
					if (!s) return !1;
					const i = Object(W.g)(s.blocks[0]).colCount,
						r = s.blocks.length / i;
					return Object(W.g)(o).rowIndex === r - 1
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
					i = s.getBlockForKey(n.getAnchorKey()),
					r = s.getBlockForKey(n.getFocusKey()),
					[c, a] = Object(W.e)(s, i, r);
				if (c && c === a) {
					const i = Object(W.o)(n, r, r, !1),
						c = V.b(s, i, e);
					return o.EditorState.push(t, c, Q.d)
				}
			};
			var bn = n("./node_modules/lodash/forEach.js"),
				yn = n.n(bn);
			const En = (t, e) => e ? t[0] : t[t.length - 1];
			var xn = (t, e) => {
					return t.getSelection().isCollapsed() ? ((t, e) => {
						const n = t.getSelection(),
							s = e.getSelection();
						if (!n.isCollapsed() || s.isCollapsed() || 0 !== s.getStartOffset() || s.getStartKey() !== n.getStartKey()) return t;
						const i = t.getCurrentContent(),
							r = e.getCurrentContent(),
							c = i.getBlockForKey(n.getAnchorKey());
						if (!Object(v.v)(c.getType())) return t;
						const {
							rowIndex: a,
							colIndex: l
						} = Object(W.g)(c);
						if (0 !== a || 0 !== l) return t;
						const d = i.getBlockMap(),
							u = r.getBlockMap();
						if (d.size >= u.size) return t;
						const p = i.getBlockAfter(n.getAnchorKey()),
							h = r.getBlockAfter(s.getEndKey());
						if (p && p !== h) return t;
						const g = c.merge({
								type: v.n,
								data: Object(L.Map)({})
							}),
							m = i.merge({
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
							i = s.getBlockForKey(n.getAnchorKey()),
							r = s.getBlockForKey(n.getFocusKey()),
							[c, a] = Object(W.e)(s, i, r);
						if (!c && !a) return t;
						let l = t;
						if (c !== a) {
							const e = n.getIsBackward(),
								s = Object(W.o)(n, c ? En(c.blocks, !e) : null, a ? En(a.blocks, e) : null, e);
							n !== s && (l = o.EditorState.forceSelection(t, s))
						} else if (c && a && c === a) {
							const e = Object(W.g)(i),
								c = Object(W.g)(r),
								d = s.getBlocksAsArray(),
								{
									start: u,
									blocks: p
								} = a,
								h = p[0],
								g = Object(W.g)(h);
							if (0 !== g.colIndex || 0 !== g.rowIndex) throw new Error("First table block must always has [0, 0] coordinate!");
							const m = Object(W.b)(r, i) < 0,
								f = Object(W.k)(e, c),
								b = [],
								y = [];
							yn()(p, t => {
								const e = Object(W.g)(t);
								f(e.rowIndex, e.colIndex) ? b.push(t) : t !== h && y.push(t)
							});
							const E = b[0] === h;
							b.sort(W.b);
							const x = [...d.slice(0, u), ...E ? [] : [h], ...b, ...y, ...d.slice(u + p.length)],
								S = En(b, !m),
								C = En(b, m),
								O = Object(W.o)(n, S, C, m),
								k = s.merge({
									blockMap: o.BlockMapBuilder.createFromArray(x),
									selectionAfter: O
								});
							l = o.EditorState.set(t, {
								currentContent: k
							}), O !== n && (l = o.EditorState.forceSelection(l, O))
						}
						return l
					})(t, e)
				},
				Sn = (n("./node_modules/core-js/modules/es6.regexp.to-string.js"), n("./src/reddit/components/RichTextEditor/table/Renderer/index.m.less")),
				Cn = n.n(Sn);
			const On = m.a.div("Cell", Cn.a),
				kn = m.a.div("Row", Cn.a),
				vn = m.a.div("Table", Cn.a),
				Tn = (t, e) => {
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
						return Object(D.i)(n, t) && !t.contains(n.commonAncestorContainer)
					}
					return !1
				},
				Bn = t => {
					const e = a.a.Children.toArray(t),
						n = Object(K.e)(e[0]),
						{
							selection: o,
							contentState: s,
							block: i
						} = n.props,
						{
							colCount: r
						} = Object(W.g)(i);
					e.sort((t, e) => Object(W.b)(Object(K.c)(t), Object(K.c)(e)));
					const c = N()(e, r);
					let l, d, u = !1;
					if (o.getAnchorKey() !== o.getFocusKey()) {
						const t = s.getBlocksAsArray(),
							n = s.getBlockForKey(o.getStartKey()),
							r = s.getBlockForKey(o.getEndKey()),
							c = t.indexOf(n),
							a = t.indexOf(r),
							p = t.indexOf(i),
							h = p + e.length - 1;
						c < p && p < a || c < h && h < a ? u = !0 : p <= c && a <= h && (d = Object(W.g)(o.getIsBackward() ? r : n), l = Object(W.g)(o.getIsBackward() ? n : r))
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
							o = Tn(this.tableElem, e.focusNode);
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
						const n = Tn(t, e.anchorNode),
							o = Tn(t, e.focusNode);
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
						Object(W.h)(n, this.state.focusCell) && Object(W.h)(o, this.state.anchorCell) && !this.state.isSelectWholeTable || this.setState({
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
				UNSAFE_componentWillReceiveProps(t) {
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
					o ? s = (t, e) => !0 : e && n && !Object(W.h)(e, n) && (s = Object(W.k)(e, n));
					const i = t[0].map(t => Object(W.g)(Object(K.e)(t).props.block).alignment),
						r = t.map((t, e) => a.a.createElement(kn, {
							key: e
						}, t.map((t, n) => a.a.createElement(On, {
							"data-row": e,
							"data-col": n,
							"data-selected": !!s && s(e, n),
							key: n,
							style: {
								"--cell-text-alignment": i[n] ? W.a[i[n]] : void 0
							}
						}, t))));
					return a.a.createElement(vn, {
						className: s ? Cn.a.isFakeSelectionActive : void 0,
						innerRef: t => this.tableElem = t,
						onMouseDown: this.onMouseDown,
						"data-table": !0
					}, r)
				}
			}
			const In = Object(L.Map)({
				[v.l]: {
					element: "div",
					wrapper: a.a.createElement(_n, null)
				}
			});
			var An = n("./node_modules/lodash/isEqual.js"),
				Kn = n.n(An),
				Mn = n("./src/reddit/components/RichTextEditor/Tooltip/index.tsx"),
				Ln = n("./src/reddit/icons/svgs/FormattingAlignCenter/index.tsx"),
				Dn = n("./src/reddit/icons/svgs/FormattingAlignLeft/index.tsx"),
				Fn = n("./src/reddit/icons/svgs/FormattingAlignRight/index.tsx"),
				Nn = n("./src/reddit/icons/svgs/FormattingDeleteRow/index.tsx"),
				Pn = n("./src/reddit/icons/svgs/FormattingInsertRow/index.tsx"),
				Un = n("./src/reddit/models/RichTextJson/index.ts");
			var Hn = function(t) {
				arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				const e = t.getSelection(),
					n = t.getCurrentContent(),
					s = n.getBlockForKey(e.getAnchorKey()),
					i = n.getBlockForKey(e.getFocusKey()),
					[r, c] = Object(W.e)(n, s, i);
				if (r && r === c) {
					const {
						blocks: n
					} = r;
					n.sort(W.b);
					const s = Object(W.o)(e, n[0], G()(n));
					return X(o.EditorState.set(t, {
						selection: s
					}), "rows")
				}
			};
			var zn = (t, e) => {
					const n = t.getSelection(),
						s = t.getCurrentContent(),
						i = s.getBlockForKey(n.getAnchorKey()),
						r = s.getBlockForKey(n.getFocusKey()),
						[c, a] = Object(W.e)(s, i, r);
					if (!c || c !== a) return t;
					const l = Object(W.g)(i),
						d = Object(W.g)(r),
						{
							minCol: u,
							maxCol: p
						} = Object(W.f)(l, d),
						h = c.blocks.map(t => {
							const {
								colIndex: n
							} = Object(W.g)(t);
							return u <= n && n <= p ? Object(W.m)(t, {
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
				Vn = n("./src/reddit/components/RichTextEditor/table/Toolbar/index.m.less"),
				Wn = n.n(Vn);

			function qn() {
				return (qn = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			const Gn = (t, e) => n => a.a.createElement(t, qn({}, e, n)),
				Qn = Object(Ne.f)(Pn.a),
				Yn = Gn(Qn, {
					orientation: "up"
				}),
				Zn = Gn(Qn, {
					orientation: "right"
				}),
				Jn = Gn(Qn, {
					orientation: "left"
				}),
				Xn = Object(Ne.f)(Nn.a),
				$n = Gn(Xn, {
					orientation: "vertical"
				}),
				to = Object(Ne.f)(Ln.a),
				eo = Object(Ne.f)(Dn.a),
				no = Object(Ne.f)(Fn.a),
				oo = Object(Ne.f)(Me.b),
				so = m.a.wrapped(Le.a, "ToolbarContent", Wn.a),
				io = t => a.a.createElement(Fe.a, qn({}, t, {
					className: Object(h.a)(Wn.a.formatterButton, t.className),
					tooltipContentClass: Wn.a.tooltip
				}));
			var ro = t => {
					const {
						editorState: e,
						onChange: n
					} = t;
					return a.a.createElement(so, null, a.a.createElement(io, {
						Icon: eo,
						onClick: () => n(zn(e, Un.e)),
						tooltip: s.fbt._("Left align", null, {
							hk: "45eAc"
						})
					}), a.a.createElement(io, {
						Icon: to,
						onClick: () => n(zn(e, Un.d)),
						tooltip: s.fbt._("Center align", null, {
							hk: "4aAfyf"
						})
					}), a.a.createElement(io, {
						Icon: no,
						onClick: () => n(zn(e, Un.f)),
						tooltip: s.fbt._("Right align", null, {
							hk: "3oHuXw"
						})
					}), a.a.createElement(De.c, null), a.a.createElement(io, {
						Icon: Jn,
						onClick: () => n(cn(e, "columns", "before")),
						tooltip: s.fbt._("Insert column before", null, {
							hk: "11EB6Q"
						})
					}), a.a.createElement(io, {
						Icon: Zn,
						onClick: () => n(cn(e, "columns", "after")),
						tooltip: s.fbt._("Insert column after", null, {
							hk: "Ddlpl"
						})
					}), a.a.createElement(io, {
						Icon: $n,
						onClick: () => n(X(e, "columns")),
						tooltip: s.fbt._("Delete column", null, {
							hk: "3HaQQD"
						})
					}), a.a.createElement(De.c, null), a.a.createElement(io, {
						Icon: Yn,
						onClick: () => n(cn(e, "rows", "before")),
						tooltip: s.fbt._("Insert row above", null, {
							hk: "1HIgn"
						})
					}), a.a.createElement(io, {
						Icon: Qn,
						onClick: () => n(cn(e, "rows", "after")),
						tooltip: s.fbt._("Insert row below", null, {
							hk: "3t7ZU"
						})
					}), a.a.createElement(io, {
						Icon: Xn,
						onClick: () => n(X(e, "rows")),
						tooltip: s.fbt._("Delete row", null, {
							hk: "3yJYqS"
						})
					}), a.a.createElement(De.c, null), a.a.createElement(io, {
						Icon: oo,
						onClick: () => n(Hn(e) || e),
						tooltip: s.fbt._("Delete table", null, {
							hk: "1fK0KA"
						})
					}))
				},
				co = n("./src/reddit/components/RichTextEditor/table/ToolbarController/index.m.less"),
				ao = n.n(co);
			const lo = 20,
				uo = m.a.div("ActionButton", ao.a),
				po = m.a.div("ToolbarWrapper", ao.a),
				ho = t => {
					const e = {};
					if (!t || !document.documentElement) return e;
					const n = t.left - 154.5,
						o = t.left + 154.5 - document.documentElement.clientWidth;
					return n < 0 ? e.left = -n + lo + 2 : o > 0 && (e.left = -o + lo - 2), e
				},
				go = t => {
					t.preventDefault(), t.stopPropagation()
				};
			class mo extends c.Component {
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
						const s = Tn(o, t.anchorNode);
						if (!s) return void this.hideActionButton();
						const i = Tn(o, t.focusNode);
						i ? this.updateActionButtonPosition(s, i) : this.hideActionButton()
					}, this.updateActionButtonPosition = (t, e) => {
						const n = t.getBoundingClientRect(),
							o = e.getBoundingClientRect(),
							s = {
								top: Math.min(n.top, o.top),
								left: Math.max(n.right, o.right) - lo
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
						})), go(t)
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
				UNSAFE_componentWillReceiveProps(t) {
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
					}, a.a.createElement(uo, {
						className: t ? ao.a.isPressed : void 0,
						onClick: this.onActionButtonClick,
						onMouseDown: go,
						onMouseMove: go
					}, t ? a.a.createElement(po, {
						style: ho(e)
					}, a.a.createElement(ro, {
						onChange: this.props.onChange,
						editorState: this.props.editorState
					})) : null)))
				}
			}
			var fo = n("./src/reddit/components/RichTextEditor/editorStateTransforms.ts");

			function bo() {
				return (bo = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}

			function yo() {
				return new Map
			}
			const Eo = a.a.createContext(yo());

			function xo(t) {
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
				return t => a.a.createElement(Eo.Consumer, null, n => a.a.createElement(e, bo({}, t, {
					registry: n
				})))
			}
			var So = n("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				Co = n("./src/reddit/components/RichTextEditor/emotes/decorator.m.less"),
				Oo = n.n(Co);
			const ko = {
					strategy: So.e,
					component: xo(t => {
						const {
							contentState: e
						} = t, n = Object(So.i)(e), o = e.getEntity(t.entityKey), {
							id: s,
							emoji: i,
							sticker: r
						} = o.getData(), c = n ? r : i;
						return a.a.createElement("span", {
							className: Object(h.a)(Oo.a.emote, {
								[Oo.a.sticker]: n
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
				vo = () => ko;
			var To = n("./src/higherOrderComponents/makeAsync.tsx"),
				jo = Object(To.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("EmotesTooltip").then(n.bind(null, "./src/reddit/components/RichTextEditor/emotes/tooltip.tsx")).then(t => t.default)
				});
			const Ro = new Set([M.a.LINK]);
			var wo = n("./src/reddit/components/RichTextEditor/entity/link/helpers.tsx"),
				Bo = n("./src/reddit/components/RichTextEditor/entity/link/decorator.m.less"),
				_o = n.n(Bo);
			const Io = m.a.a("RegularLink", _o.a),
				Ao = {
					strategy: wo.a,
					component: xo(t => {
						const e = t.contentState.getEntity(t.entityKey),
							{
								url: n
							} = e.getData();
						return a.a.createElement(Io, {
							href: n
						}, t.children)
					})
				},
				Ko = () => Ao;
			n("./node_modules/core-js/modules/es6.regexp.replace.js"), n("./node_modules/core-js/modules/es6.regexp.match.js");
			var Mo = n("./src/lib/linkMatchers/index.ts");
			const Lo = (t, e) => {
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
				Do = (t, e, n, s, i, r) => {
					const c = t.getBlockForKey(e),
						a = o.SelectionState.createEmpty(e),
						l = [],
						d = new Set;
					let u = t;
					const p = n === M.a.USER_MENTION ? M.a.USER_LINK : n,
						h = (t, e, o) => {
							let s = null;
							for (let i = t; i < e; i++) {
								const t = c.getEntityAt(i),
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
					Lo(s, b).forEach((t, s) => {
						let {
							index: c,
							lastIndex: p,
							url: m
						} = t;
						const b = h(c, p, m);
						b && (n === M.a.USER_MENTION ? (((t, n, s) => {
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
								u = Object(V.b)(u, e, f.d.profile), u = o.Modifier.applyEntity(u, c, s), i && r && r(o.EditorState.forceSelection(i, l))
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
				Fo = (t, e) => {
					const n = t.getCurrentContent(),
						s = e.getCurrentContent();
					if (n === s) return t;
					const i = n.getBlockMap(),
						r = s.getBlockMap();
					let c = n;
					return i.forEach((e, n) => {
						if (n) {
							if (e === r.get(n)) return;
							c = Do(c, n, M.a.SUBREDDIT_LINK, Mo.f), c = Do(c, n, M.a.USER_LINK, Mo.i), c = Do(c, n, M.a.USER_MENTION, Mo.d, t, e => t = e)
						}
					}), t.getCurrentContent() === c ? t : (c = c.merge({
						selectionAfter: t.getCurrentContent().getSelectionAfter(),
						selectionBefore: t.getCurrentContent().getSelectionBefore()
					}), o.EditorState.set(t, {
						currentContent: c
					}))
				};
			var No = t => {
				return !!t.getCurrentContent().getBlockMap().filter(t => !!t && t.getType() === v.a).size
			};
			n("./node_modules/core-js/modules/es6.regexp.constructor.js");
			const Po = " ".repeat(4),
				Uo = new RegExp("^ {1,".concat(4, "}|\\t")),
				Ho = new Set([v.b.CODE_BLOCK]),
				zo = (t, e) => {
					const n = e.getCurrentContent(),
						s = e.getSelection(),
						i = t.shiftKey;
					let r = n,
						c = s.getAnchorOffset(),
						a = s.getFocusOffset();
					if (Object(Y.a)(n, s, (t, e) => {
							const n = t.getType();
							if ("paragraph" === n || !Ho.has(n)) return !1;
							let l = null;
							const d = t.getText(),
								u = o.SelectionState.createEmpty(e);
							if (i) {
								const t = d.match(Uo);
								if (t) {
									const e = t[0].length;
									r = V.b(r, u.merge({
										focusOffset: e
									}), ""), l = -e
								}
							} else r = V.a(r, s.isCollapsed() ? s : u, Po), l = 4;
							null !== l && (e === s.getAnchorKey() && (c += l), e === s.getFocusKey() && (a += l))
						}), r !== n) return r = r.merge({
						selectionAfter: s.merge({
							anchorOffset: c,
							focusOffset: a
						})
					}), t.preventDefault(), o.EditorState.push(e, r, i ? "remove-range" : "insert-characters")
				},
				Vo = (t, e) => (t => {
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
						const i = s.getBlockForKey(n.getEndKey());
						if (Object(v.o)(i.getType())) return Object(A.d)(t, i.getKey());
						if (Object(v.u)(i.getType())) {
							const e = s.getBlockBefore(i.getKey());
							return o.EditorState.forceSelection(t, Object(K.b)(e))
						}
						if (!Object(A.q)(e) && Object(K.g)(i)) {
							const e = s.getBlockBefore(i.getKey());
							if (e && Object(v.o)(e.getType())) return t = o.EditorState.push(t, Object(K.i)(s, i.getKey()), Q.f), o.EditorState.forceSelection(t, Object(K.b)(e))
						}
					}
				})(t, e),
				Wo = (t, e) => (t => {
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
					const i = s.getBlockForKey(n.getEndKey());
					if (n.getEndOffset() === i.getLength()) {
						if (Object(v.o)(i.getType())) return Object(A.d)(t, i.getKey()); {
							const r = s.getBlockAfter(n.getEndKey());
							if (r && Object(v.o)(r.getType())) {
								if (Object(A.q)(e)) return Object(A.d)(t, r.getKey());
								if (Object(K.g)(i)) return t = o.EditorState.push(t, Object(K.i)(s, i.getKey()), Q.f), o.EditorState.forceSelection(t, Object(K.b)(r))
							}
						}
					}
				})(t, e),
				qo = t => {
					const e = t.getSelection();
					if (!e.isCollapsed()) return !1;
					const n = o.RichUtils.getCurrentBlockType(t);
					if (!v.c.includes(n)) return !1;
					if (e.getFocusOffset() > 0) {
						if ("\n" === t.getCurrentContent().getBlockForKey(e.getFocusKey()).getText()[e.getFocusOffset() - 1]) return !1
					}
					return !0
				};
			var Go = n("./src/lib/memoizeByReference/index.ts");
			const Qo = Object(Go.a)(t => {
					const e = t.getSelection();
					if (!e.isCollapsed()) return;
					const n = e.getStartOffset(),
						o = t.getCurrentContent(),
						s = o.getBlockForKey(e.getFocusKey());
					if (s.getType() !== v.n) return;
					const i = s.getText();
					if (i.startsWith("1.") && 2 === n) return v.i.ORDERED;
					if (i.startsWith("*") && 1 === n) {
						const t = o.getBlockBefore(s.getKey());
						if (t && t.getType() === v.n && t.getText().startsWith("* ")) return;
						return v.i.UNORDERED
					}
				}),
				Yo = t => {
					const e = Qo(t);
					if (!e) return t;
					const n = Object(fo.a)(t);
					let s = o.Modifier.replaceText(n.getCurrentContent(), n.getSelection().merge({
						anchorOffset: 0
					}), "");
					return s = o.Modifier.setBlockType(s, s.getSelectionAfter(), e), o.EditorState.push(n, s, Q.c)
				};
			var Zo = n("./src/reddit/components/RichTextEditor/helpers/styles.ts");
			const Jo = Object(To.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GifTooltip").then(n.bind(null, "./src/reddit/components/RichTextEditor/media/GifTooltip/index.tsx")).then(t => t.default)
			});

			function Xo(t) {
				return a.a.createElement(Jo, t)
			}
			var $o = n("./src/reddit/components/RichTextEditor/spoiler/helpers.ts"),
				ts = n("./src/reddit/components/RichTextEditor/spoiler/decorator.m.less"),
				es = n.n(ts);
			const ns = t => a.a.createElement("span", {
					className: es.a.spoiler
				}, a.a.createElement("span", null), t.children, a.a.createElement("span", null)),
				os = () => ({
					strategy: $o.a,
					component: ns
				});
			var ss = n("./src/reddit/components/FocusableContent/index.tsx"),
				is = n("./src/reddit/components/RichTextEditor/Blockquote/index.m.less"),
				rs = n.n(is);
			const cs = m.a.div("BlockQuoteWrapper", rs.a),
				as = Object(L.Map)({
					[v.e]: {
						element: "blockquote",
						wrapper: a.a.createElement(cs, null)
					}
				});
			var ls = n("./src/reddit/components/RichTextEditor/CodeBlock/index.m.less"),
				ds = n.n(ls);
			const us = m.a.div("CodeBlockWrapper", ds.a),
				ps = Object(L.Map)({
					[v.f]: {
						element: "code",
						wrapper: a.a.createElement(us, null)
					}
				});
			var hs = n("./node_modules/bowser/src/bowser.js"),
				gs = n.n(hs),
				ms = n("./node_modules/lodash/includes.js"),
				fs = n.n(ms),
				bs = n("./src/reddit/components/RichTextEditor/DragController/helpers.ts"),
				ys = n("./src/reddit/components/RichTextEditor/DragController/index.m.less"),
				Es = n.n(ys);
			const xs = m.a.div("DropLine", Es.a),
				Ss = m.a.wrapped(Mn.b, "Tooltip", Es.a);
			class Cs extends c.Component {
				constructor(t) {
					super(t), this.dragCount = 0, this.setContainerRef = t => this.containerRef = t, this.preventDocumentDrop = t => {
						!! function t(e) {
							return e.draggable ? e : e.parentElement ? t(e.parentElement) : null
						}(t.target) || (t.preventDefault(), t.stopPropagation())
					}, this.onDragOver = t => {
						const e = fs()(t.dataTransfer.types, Ut);
						if (!e) {
							if (!Object(bs.c)(t.dataTransfer) || !this.props.allowMediaUploads) return
						}
						if (!e && !Object(bs.c)(t.dataTransfer)) return;
						t.preventDefault();
						try {
							t.dataTransfer.dropEffect = e ? "move" : "copy"
						} catch (i) {}
						const {
							editorState: n
						} = this.props;
						let o = null;
						const s = Object(bs.b)(n, t);
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
							n = gs.a.msie ? null : t.dataTransfer.getData(Ut),
							o = Object(bs.a)(t.dataTransfer);
						if (!(n || o.length && this.props.allowMediaUploads)) return void e();
						const {
							editorState: s
						} = this.props, i = Object(bs.b)(s, t);
						if (!i) return void e();
						t.preventDefault(), t.stopPropagation();
						const r = i.isBefore ? K.a.before : K.a.after;
						n ? this.props.onBlockMove(n, i.blockKey, r) : setTimeout(() => {
							this.props.onFilesDrop(o, i.blockKey, r)
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
						className: Object(h.a)(Es.a.container, {
							[Es.a.hideCaret]: !!e
						}),
						onDragEnter: this.onDragEnter,
						onDragLeave: this.onDragLeave,
						onDragOver: this.onDragOver,
						onDrop: this.onDrop,
						ref: this.setContainerRef
					}, a.a.createElement("div", null, n), a.a.createElement(Ss, {
						targetPosition: e
					}, a.a.createElement(xs, null)))
				}
			}
			var Os = n("./node_modules/draft-js/lib/DraftPasteProcessor.js"),
				ks = n.n(Os),
				vs = n("./node_modules/draft-js/lib/getEntityKeyForSelection.js"),
				Ts = n.n(vs),
				js = n("./node_modules/draft-js/lib/splitTextIntoTextBlocks.js"),
				Rs = n.n(js),
				ws = n("./src/reddit/components/RichTextEditor/entity/cloneEntitiesInFragment.ts"),
				Bs = n("./src/reddit/components/RichTextEditor/entity/applyEntityToContentBlock.ts");

			function _s(t, e, n) {
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

			function Is(t, e, n) {
				const s = Rs()(e),
					i = n && 1 === s.length ? n : o.CharacterMetadata.create(),
					r = ks.a.processText(s, i).map(t => t.merge({
						type: v.n
					}));
				return o.BlockMapBuilder.createFromArray(r)
			}
			const As = t => {
					if (!t) return null;
					const e = (new DOMParser).parseFromString(t, "text/html").querySelector("[".concat("data-reddit-rtjson", "]"));
					return e && e.getAttribute("data-reddit-rtjson")
				},
				Ks = t => {
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

			function Ms(t, e, n, s) {
				const {
					text: i,
					html: r
				} = Ks(n), c = function(t, e, n, o) {
					const s = {
							text: e,
							html: n,
							rtjson: o,
							fragment: null
						},
						i = t.getClipboard();
					return i && n && function(t, e, n, o) {
						return -1 !== e.indexOf(o) || 1 === t.size && t.first().getText() === n
					}(i, n, e, t.getEditorKey()) && (s.fragment = i), s
				}(e, i, r, r && As(r));
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
						if (o.getType() === v.f || s.getType() === v.f) return Is(0, n).map(t => t.merge({
							type: v.f,
							depth: 0
						}))
					}(h, l, c.text)) && c.fragment && (p = c.fragment, [h, p] = Object(ws.b)(h, p), p = Ct(p, s)), !p && c.rtjson && (p = function(t) {
						const e = JSON.parse(t);
						return Object(o.convertFromRaw)(e).getBlockMap()
					}(c.rtjson)), !p && c.html && ([h, p] = _s(h, c.html, u)), !p && c.text) {
					const t = function(t, e, n) {
						return o.CharacterMetadata.create({
							style: n,
							entity: Ts()(t, e)
						})
					}(h, l, d);
					p = Is(0, c.text, t), [h, p] = function(t, e) {
						let n = t,
							o = e;
						return e.forEach(t => {
							const e = t.getText(),
								s = Mo.e.match(e);
							if (!s) return;
							let i = t;
							s.forEach(t => {
								let {
									index: e,
									lastIndex: s,
									url: r
								} = t;
								const c = (n = n.createEntity(M.a.LINK, "MUTABLE", {
									url: r
								})).getLastCreatedEntityKey();
								i = Object(Bs.a)(i, e, s, c), o = o.set(i.getKey(), i)
							})
						}), [n, o]
					}(h, p)
				}
				if (p) return h = function(t, e, n) {
					if (n.isEmpty()) return t;
					let o = rt(t, e, n) || Ot(t, e, n);
					return o || (o = V.c(t, e, n))
				}(h, l, p), o.EditorState.push(t, h, Q.e)
			}
			var Ls = n("./src/reddit/components/RichTextEditor/entity/getSelectionEntityInfo.ts"),
				Ds = n("./src/reddit/components/RichTextEditor/Tooltip/getSelectionClientRect.ts"),
				Fs = n("./src/reddit/components/RichTextEditor/LinksController/LinkDetailsPopup/index.m.less"),
				Ns = n.n(Fs);
			const Ps = m.a.div("LinkDetailsBox", Ns.a),
				Us = m.a.a("Link", Ns.a),
				Hs = m.a.a("LinkButton", Ns.a);
			var zs = t => a.a.createElement("div", null, a.a.createElement(Ps, {
					onMouseDown: t => t.preventDefault()
				}, a.a.createElement(Us, {
					href: t.url,
					target: "_blank"
				}, t.url), a.a.createElement("span", null, " – "), a.a.createElement(Hs, {
					onClick: () => t.onStartEdit(),
					role: "button"
				}, s.fbt._("Change", null, {
					hk: "3aOmcP"
				})), a.a.createElement("span", null, " | "), a.a.createElement(Hs, {
					onClick: () => t.onRemove(),
					role: "button"
				}, s.fbt._("Remove", null, {
					hk: "3nPt5D"
				})))),
				Vs = n("./src/reddit/controls/Input/index.tsx"),
				Ws = n("./src/reddit/components/RichTextEditor/LinksController/LinkEditorPopup/index.m.less"),
				qs = n.n(Ws);
			const Gs = m.a.form("EditForm", qs.a),
				Qs = m.a.wrapped(t => a.a.createElement("div", t, t.children), "LinkEditorBox", qs.a),
				Ys = m.a.wrapped(Vs.a, "Input", qs.a),
				Zs = m.a.label("Label", qs.a),
				Js = m.a.div("HintAndButtonRow", qs.a),
				Xs = m.a.span("InvalidUrlHint", qs.a),
				$s = m.a.wrapped($t.i, "SubmitButton", qs.a),
				ti = t => {
					t && (t.focus(), t.select())
				},
				ei = / /g,
				ni = t => t.replace(ei, "%20");
			class oi extends c.Component {
				constructor(t) {
					super(t), this.focused = !1, this.focusLostTimer = 0, this.textInputElementRef = null, this.urlInputElementRef = null, this.onEdited = () => {
						const t = this.state.url.trim(),
							e = ni(t),
							n = Object(Mo.h)(e);
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
						n && Object(Mo.g)(Mo.e, e) && (n = !1), this.setState({
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
					Object(Mo.g)(Mo.e, this.state.displayText) ? ti(this.textInputElementRef) : ti(this.urlInputElementRef)
				}
				componentWillUnmount() {
					this.focusLostTimer && clearTimeout(this.focusLostTimer)
				}
				render() {
					const {
						isInsertMode: t
					} = this.props;
					return a.a.createElement(Qs, {
						tabIndex: 0,
						onClick: this.onClick,
						onBlur: this.onBlur,
						onFocus: this.onFocus
					}, a.a.createElement(Gs, {
						onSubmit: this.handleSubmit
					}, a.a.createElement(Zs, null, s.fbt._("Text", null, {
						hk: "1oock0"
					}), ":", a.a.createElement(Ys, {
						innerRef: t => this.textInputElementRef = t,
						type: "text",
						placeholder: s.fbt._("Title of link (optional)", null, {
							hk: "17GvI"
						}),
						value: this.state.displayText,
						onChange: this.handleDisplayTextChange
					})), a.a.createElement(Zs, null, s.fbt._("Link", null, {
						hk: "1Cfzw7"
					}), a.a.createElement(Ys, {
						innerRef: t => this.urlInputElementRef = t,
						type: "text",
						placeholder: s.fbt._("Paste or type a link", null, {
							hk: "3QWoAf"
						}),
						value: this.state.url,
						onChange: this.handleUrlChange
					})), a.a.createElement(Js, null, a.a.createElement($s, {
						type: "submit",
						disabled: this.state.isInvalidUrl
					}, t ? s.fbt._("Insert", null, {
						hk: "3H7yaS"
					}) : s.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), this.state.isInvalidUrl ? a.a.createElement(Xs, null, s.fbt._("Link doesn't look right", null, {
						hk: "1BHfKz"
					})) : null)))
				}
			}

			function si(t, e, n) {
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
					const n = Object(Mo.g)(Mo.e, s.text);
					n && (s.url = n.url)
				}
				return s
			}

			function ii(t, e) {
				return o.EditorState.set(t, {
					currentContent: o.Modifier.removeInlineStyle(t.getCurrentContent(), e, v.k.HIGHLIGHT)
				})
			}
			class ri extends c.Component {
				constructor(t) {
					super(t), this.api = null, this.updateTooltipPosition = null, this.lastEditorSelectionClientRect = null, this.editLinkInSelection = t => {
						const {
							editorState: e
						} = this.props;
						let n = t,
							s = e;
						const i = e.getCurrentContent();
						if (!Object(wo.e)(i, t)) return !1;
						const r = Object(Ls.a)(i, t);
						if (r) {
							if (i.getEntity(r.entityKey).getType() !== M.a.LINK) return !1;
							n = r.entitySelection
						} else this.isEditorFocused() && (this.lastEditorSelectionClientRect = Object(Ds.a)());
						return this.state.linkSelection && (s = ii(e, this.state.linkSelection)), s = function(t, e) {
							return o.EditorState.set(t, {
								currentContent: o.Modifier.applyInlineStyle(t.getCurrentContent(), e, v.k.HIGHLIGHT)
							})
						}(e, n), this.props.onChange(s, () => {
							this.setState({
								linkSelection: n,
								linkEntity: r
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
							const t = Object(Ls.a)(e, this.state.linkSelection);
							if (t) {
								const e = this.props.entityElementRegistry.get(t.entityKey);
								n = e && e.getBoundingClientRect()
							} else this.lastEditorSelectionClientRect && (n = this.lastEditorSelectionClientRect)
						} else {
							const e = Object(wo.c)(t);
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
						let i = s;
						n && (n.isCollapsed() || (i = ii(s, n)), void 0 !== t && (i = Object(wo.h)(i, n, t, e)), this.setState({
							linkSelection: null,
							linkEntity: null
						}), i !== s && (i = o.EditorState.forceSelection(i, i.getSelection()), this.props.onChange(i)))
					}, this.onLinkEdited = (t, e) => {
						this.handleLink(t, e)
					}, this.interruptLinkEditing = () => this.handleLink(), this.isEditorFocused = () => this.props.editorState.getSelection().getHasFocus(), this.onStartEditFocusedLink = () => {
						const {
							editorState: t
						} = this.props, e = Object(wo.c)(t);
						e && this.editLinkInSelection(e.entitySelection)
					}, this.onRemoveFocusedLink = () => {
						const {
							editorState: t
						} = this.props, e = Object(wo.c)(t);
						e && this.props.onChange(Object(wo.h)(t, e.entitySelection, ""))
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
						} = si(n, t, e);
						return a.a.createElement(oi, {
							url: s,
							displayText: o,
							isInsertMode: !e,
							onEdited: this.onLinkEdited,
							onFocusLost: this.interruptLinkEditing
						})
					}, this.renderDetailsPopup = () => {
						const t = Object(wo.c)(this.props.editorState);
						return t && this.isEditorFocused() && this.state.isDetailsPopupActive ? a.a.createElement(zs, {
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
			var ci = n("./src/reddit/components/RichTextEditor/OrderedList/index.m.less"),
				ai = n.n(ci);
			const li = m.a.ol("OrderedListWrapper", ai.a),
				di = Object(L.Map)({
					[v.i.ORDERED]: {
						element: "li",
						aliasedElements: ["li"],
						wrapper: a.a.createElement(li, null)
					}
				});
			var ui = n("./src/reddit/components/RichTextEditor/Paragraph/index.m.less"),
				pi = n.n(ui);
			const hi = m.a.div("ParagraphWrapper", pi.a),
				gi = Object(L.Map)({
					[v.n]: {
						element: "div",
						aliasedElements: ["p"],
						wrapper: a.a.createElement(hi, null)
					}
				});
			var mi = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx");
			const fi = "Noto Sans, ".concat("Arial, sans-serif"),
				bi = "Noto Mono, ".concat("Menlo, Monaco, Consolas, monospace");
			"\n  font-family: ".concat(fi, ";\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 21px;\n");
			var yi = n("./src/reddit/components/RichTextEditor/TextRendering/index.m.less"),
				Ei = n.n(yi);
			const xi = Object(Go.a)(() => ({
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
						fontFamily: bi,
						padding: "0.1em 0.2em",
						fontSize: "0.8em",
						borderRadius: "3px"
					}
				})),
				Si = m.a.div("H1", Ei.a),
				Ci = m.a.div("H2", Ei.a),
				Oi = m.a.div("H3", Ei.a),
				ki = m.a.div("H4", Ei.a),
				vi = m.a.div("H5", Ei.a),
				Ti = m.a.div("H6", Ei.a),
				ji = t => ({
					component: e => a.a.createElement(t, null, a.a.createElement(o.EditorBlock, e)),
					editable: !0
				}),
				Ri = {
					[v.g.H1]: ji(Si),
					[v.g.H2]: ji(Ci),
					[v.g.H3]: ji(Oi),
					[v.g.H4]: ji(ki),
					[v.g.H5]: ji(vi),
					[v.g.H6]: ji(Ti)
				},
				wi = ["italic normal 1em 'Noto Sans'", "italic bold 1em 'Noto Sans'", "normal bold 1em 'Noto Sans'"],
				Bi = () => {
					const t = document.fonts;
					t && t.load && wi.forEach(e => t.load(e))
				};
			var _i = n("./src/reddit/components/RichTextEditor/UnorderedList/index.m.less"),
				Ii = n.n(_i);
			const Ai = m.a.ul("UnorderedListWrapper", Ii.a),
				Ki = Object(L.Map)({
					[v.i.UNORDERED]: {
						element: "li",
						aliasedElements: ["li"],
						wrapper: a.a.createElement(Ai, null)
					}
				});
			var Mi = n("./src/reddit/contexts/InsideOverlay.tsx"),
				Li = n("./node_modules/lodash/debounce.js"),
				Di = n.n(Li),
				Fi = n("./src/reddit/actions/subredditAutocomplete.ts"),
				Ni = n("./src/reddit/controls/SubredditDropdown/index.m.less"),
				Pi = n.n(Ni);

			function Ui() {
				return (Ui = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			var Hi = function(t, e) {
				var n = {};
				for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.indexOf(o) < 0 && (n[o] = t[o]);
				if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (o = Object.getOwnPropertySymbols(t); s < o.length; s++) e.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[s]) && (n[o[s]] = t[o[s]])
				}
				return n
			};
			const zi = t => {
				var {
					isFocused: e
				} = t, n = Hi(t, ["isFocused"]);
				return a.a.createElement("div", Ui({
					className: Object(h.a)(Pi.a.entry, {
						[Pi.a.mIsFocused]: e
					})
				}, n))
			};
			class Vi extends c.Component {
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
					return a.a.createElement(zi, {
						isFocused: this.props.isFocused,
						onMouseDown: this.onMouseDown,
						onMouseUp: this.onMouseUp,
						onMouseOver: this.onMouseOver
					}, this.props.children)
				}
			}
			var Wi = n("./src/reddit/helpers/name/index.ts"),
				qi = n("./src/reddit/selectors/subredditAutocomplete.ts");
			const Gi = Object(d.c)({
				subredditSuggestions: (t, e) => {
					const n = Object(qi.d)(t, e);
					return n ? n.subreddits : []
				}
			});
			class Qi extends c.Component {
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
					}, this.requestSubredditAutocomplete = Di()(this.requestSubredditAutocomplete.bind(this), 200, {
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
						className: Object(h.a)(Pi.a.list, this.props.className)
					}, this.props.subredditSuggestions.map((t, e) => a.a.createElement(Vi, {
						entry: e,
						isFocused: e === this.state.selectedSuggestionIndex,
						key: t.name,
						onEntrySelect: this.onEntrySelect,
						onEntryFocus: this.onEntryFocus
					}, Object(Wi.b)(t.name)))) : null
				}
			}
			var Yi = Object(l.b)(Gi, (t, e) => ({
					onGetSubredditAutocomplete: e => {
						t(Fi.d(e))
					}
				}))(Qi),
				Zi = n("./src/reddit/selectors/comments.ts");
			const Ji = Object(d.c)({
				commentAuthors: Zi.h
			});
			class Xi extends c.Component {
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
						className: Object(h.a)(Pi.a.list, this.props.className)
					}, this.state.userSuggestions.map((t, e) => a.a.createElement(Vi, {
						key: e,
						entry: e,
						onEntryFocus: this.onEntryFocus,
						onEntrySelect: this.onEntrySelect,
						isFocused: e === this.state.selectedSuggestionIndex
					}, Object(Wi.c)(t)))) : null
				}
			}
			var $i = Object(l.b)(Ji)(Xi),
				tr = n("./node_modules/lodash/dropRightWhile.js"),
				er = n.n(tr),
				nr = n("./node_modules/lodash/flatMap.js"),
				or = n.n(nr),
				sr = n("./node_modules/lodash/reduceRight.js"),
				ir = n.n(sr),
				rr = n("./node_modules/lodash/trimEnd.js"),
				cr = n.n(rr),
				ar = n("./node_modules/lodash/trimStart.js"),
				lr = n.n(ar),
				dr = n("./src/lib/forEachGroup/index.ts");

			function ur(t, e) {
				const n = [],
					o = t.withMutations(t => {
						for (; t.size && e(t.first());) n.push(t.first()), t.shift()
					});
				return {
					popped: n,
					stack: o
				}
			}
			var pr = n("./src/lib/unicodeUtils/index.ts"),
				hr = n("./src/reddit/helpers/richTextJson/index.ts"),
				gr = n("./src/reddit/models/RichTextJson/nodeMakers.ts");
			const mr = {
				BOLD: Un.j.bold,
				ITALIC: Un.j.italic,
				MONOSPACE: Un.j.monospace,
				STRIKETHROUGH: Un.j.strikethrough,
				SUBSCRIPT: Un.j.subscript,
				SUPERSCRIPT: Un.j.superscript,
				UNDERLINE: Un.j.underline
			};
			var fr = (t, e) => br(t.getBlockMap(), t, e);
			const br = (t, e, n) => {
					const o = [];
					let s = t.toStack();
					for (; s.size;) {
						const t = s.first(),
							i = t.getType();
						switch (s = s.shift(), i) {
							case v.g.H1:
							case v.g.H2:
							case v.g.H3:
							case v.g.H4:
							case v.g.H5:
							case v.g.H6:
								o.push(Or(t, e));
								break;
							case v.e: {
								const {
									popped: n,
									stack: i
								} = ur(s, t => t.getType() === v.e);
								s = i, o.push(kr([t, ...n], e));
								break
							}
							case v.f: {
								const {
									popped: e,
									stack: n
								} = ur(s, t => t.getType() === v.f);
								s = n, o.push(vr([t, ...e]));
								break
							}
							case v.i.ORDERED:
							case v.i.UNORDERED: {
								const {
									popped: n,
									stack: r
								} = ur(s, t => t.getType() === i);
								s = r, o.push(Tr([t, ...n], e));
								break
							}
							case v.l: {
								const {
									popped: n,
									stack: i
								} = ur(s, t => Object(v.v)(t.getType()));
								s = i, o.push(jr([t, ...n], e));
								break
							}
							case v.a: {
								let e = s.first();
								e && Object(v.u)(e.getType()) ? s = s.shift() : e = void 0, o.push(Rr(t, e, n));
								break
							}
							case v.n:
							default:
								o.push(Sr(t, e))
						}
					}
					return o
				},
				yr = t => t.reduce((t, e) => e === v.k.UNDERLINE || e === v.k.SUBSCRIPT ? t : t | (mr[e] || 0) | 0, 0),
				Er = (t, e) => {
					const n = [],
						o = Object(pr.b)(t);
					return Object(dr.a)(e, {
						keyFn: t => t.getStyle()
					}, (e, s, i, r) => {
						if (s.isEmpty()) return;
						const c = t.slice(i, r),
							a = i + (c.length - lr()(c).length),
							l = r - (c.length - cr()(c).length),
							d = l - a,
							u = o[a],
							p = o[l] - u;
						d > 0 && n.push([yr(s), u, p])
					}), n.length ? n : null
				},
				xr = (t, e) => {
					const n = t.getText(),
						o = t.getCharacterList(),
						s = [],
						i = v.d.includes(t.getType()),
						r = v.c.includes(t.getType());
					let c = 0;
					return Object(dr.a)(o, {
						keyFn: (t, o) => {
							const s = t.getEntity();
							return i && t.getStyle().contains(v.k.SPOILER) ? "spoiler" : Object(M.b)(s, e) ? "link-".concat(t.getEntity()) : "\n" === n[o] ? r ? "linebreak" : "skip" : s && e.getEntity(s).getType() === M.a.EMOTE ? "emote-".concat(c++) : "text"
						}
					}, (t, i, r, c) => {
						const a = n.slice(r, c),
							l = o.slice(r, c).toList();
						if ("text" === i) {
							const t = Er(a, l);
							s.push(Object(gr.s)(a, t))
						} else if ("spoiler" === i) s.push(Object(gr.n)(a));
						else if (i.startsWith("link-")) {
							const n = e.getEntity(t.getEntity());
							s.push(((t, e, n) => {
								const o = t.getType(),
									s = [M.a.USER_LINK, M.a.USER_MENTION],
									{
										url: i
									} = t.getData(),
									r = e.startsWith("/");
								if (o === M.a.SUBREDDIT_LINK) {
									const t = e.replace(f.e, "");
									return Object(gr.o)(t, r)
								}
								if (s.includes(o)) {
									const t = e.replace(f.a, "");
									return Object(gr.t)(t, r)
								}
								const c = Er(e, n);
								return Object(gr.i)(e, i, c)
							})(n, a, l))
						} else if ("linebreak" === i) s.push(Object(gr.h)());
						else if (i.startsWith("emote-")) {
							const n = e.getEntity(t.getEntity()).getData();
							s.push(Object(gr.e)(n.fullId, n.imageType))
						}
					}), s
				},
				Sr = (t, e) => Object(gr.l)(xr(t, e)),
				Cr = t => "text" === t.e ? Object(gr.m)(t.t) : "link" === t.e ? Object(gr.i)(t.t, t.u, null) : t.e === Un.x ? t.c.map(Cr) : t.e === Un.n ? Object(gr.m)("") : t,
				Or = (t, e) => Object(gr.f)(v.m[t.getType()], ((t, e) => ir()(or()(xr(t, e), Cr), (t, e) => {
					let [n, ...o] = t;
					if (!n) return [e];
					const s = o.length ? o : [];
					return n && "raw" === e.e && "raw" === n.e ? [Object(gr.m)(e.t + n.t), ...s] : [e, n, ...s]
				}, []))(t, e)),
				kr = (t, e) => Object(gr.c)(er()(t.map(t => ((t, e) => t.getText().trim().length ? Sr(t, e) : gr.a)(t, e)), t => t === gr.a)),
				vr = t => Object(gr.d)(t.map(t => Object(gr.m)(t.getText()))),
				Tr = (t, e) => {
					if (!t.length) return Object(gr.k)([], !1);
					const n = t[0].getDepth();
					let o = null;
					const s = [];
					let i = [];
					const r = () => null !== o || i.length,
						c = () => {
							const t = [];
							null !== o && (t.push(o), o = null), i.length && (t.push(Tr(i, e)), i = []), s.push(Object(gr.j)(t))
						};
					return t.forEach(t => {
						t.getDepth() > n ? i.push(t) : (r() && c(), o = Object(gr.l)(xr(t, e)))
					}), r() && c(), Object(gr.k)(s, t[0].getType() === v.i.ORDERED)
				},
				jr = (t, e) => {
					const n = [...t].sort(W.b),
						o = n[0],
						{
							colCount: s
						} = Object(W.g)(o),
						i = N()(n, s),
						r = i[0].map(t => {
							const {
								alignment: n
							} = Object(W.g)(t);
							return Object(gr.q)(xr(t, e), n)
						}),
						c = i.slice(1).map(t => t.map(t => Object(gr.p)(xr(t, e))));
					return Object(gr.r)(r, c)
				},
				Rr = (t, e, n) => {
					const o = Object(A.h)(t);
					if (!o) throw new Error("Invalid atomic block!");
					const {
						uploadInfo: s,
						mediaAsset: i,
						makeGif: r
					} = o, c = e ? e.getText() : "";
					if (s && n) {
						const t = n[s.uploadKey],
							e = t && t.metadata.mimetype || "",
							{
								assetId: i,
								thumbnailAssetId: a
							} = Object(A.f)(o, n);
						return Object(Ft.j)(e) ? Object(gr.b)(i, c) : Object(Ft.k)(e) ? Object(gr.g)(i, c) : Object(gr.u)(i, c, a, r)
					} {
						const {
							assetId: t,
							type: e
						} = i;
						let n;
						switch (e) {
							case A.a.AnimatedImage:
								n = Object(gr.b)(t, c);
								break;
							case A.a.Image:
								n = Object(gr.g)(t, c);
								break;
							case A.a.Video:
								n = Object(gr.u)(t, c);
								break;
							default:
								throw new Error("Invalid media type")
						}
						return Object(hr.e)(t) ? Object(gr.l)([n]) : n
					}
				};
			var wr, Br = n("./src/reddit/constants/componentSizes.ts"),
				_r = n("./src/reddit/constants/elementIds.ts");
			! function(t) {
				t.Up = "up", t.Down = "down"
			}(wr || (wr = {}));
			var Ir = t => {
					const e = window.getSelection().focusNode;
					if (!e || !e.parentElement) return;
					const n = document.getElementById(_r.d),
						o = n || document.documentElement;
					if (!o) return;
					const s = window.innerHeight,
						{
							bottom: i,
							top: r
						} = e.parentElement.getBoundingClientRect(),
						c = n ? 0 : Br.f + Br.p;
					t === wr.Up && r < c ? o.scrollBy(0, r - c) : t === wr.Down && i > s && o.scrollBy(0, i - s)
				},
				Ar = n("./src/reddit/models/Product/index.ts"),
				Kr = (t, e, n) => {
					const o = {
						url: n
					};
					return t.createEntity(e, "MUTABLE", o)
				},
				Mr = n("./node_modules/lodash/maxBy.js"),
				Lr = n.n(Mr);
			const Dr = (t, e) => {
				if (!e) return (t => {
					const e = t.id;
					switch (t.e) {
						case Un.m:
							return {
								assetId: e, type: A.a.Image
							};
						case Un.a:
							return {
								assetId: e, type: A.a.AnimatedImage
							};
						case Un.D:
							return {
								assetId: e, type: A.a.Video
							}
					}
				})(t);
				const n = e.id;
				switch (e.e) {
					case Un.s: {
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
					case Un.r: {
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
					case Un.t: {
						const {
							isGif: t,
							dashUrl: o,
							hlsUrl: s,
							p: i,
							x: r,
							y: c
						} = e;
						let a;
						if (i) {
							a = Lr()(i, t => t.x).u
						}
						return {
							assetId: n,
							type: A.a.Video,
							isGif: t,
							dashUrl: o,
							hlsUrl: s,
							posterUrl: a,
							width: r,
							height: c
						}
					}
				}
			};

			function Fr(t, e, n) {
				const s = t.id,
					i = t.c,
					r = Un.E(e, s),
					c = Dr(t, r),
					a = [new o.ContentBlock({
						key: Object(o.genKey)(),
						type: v.a,
						data: Object(L.Map)({
							mediaAsset: c
						})
					})];
				if (n) {
					const t = Object(K.h)(Object(o.genKey)(), i).merge({
						type: v.j
					});
					a.push(t)
				}
				return a
			}
			const Nr = Object.keys(mr),
				Pr = (t, e, n) => {
					switch (e.e) {
						case Un.u:
							return qr(t, e.c, v.b.UNSTYLED, n);
						case Un.k:
							const o = v.h[e.l];
							return qr(t, e.c || [], o, n);
						case Un.p:
							return zr(t, e, n);
						case Un.b:
							return Ur(t, e, n);
						case Un.c:
							return void e.c.forEach(e => qr(t, [e], v.b.CODE_BLOCK, n));
						case Un.z:
							return Hr(t, e, n);
						case Un.m:
						case Un.a:
						case Un.D:
							return void t.blocks.push(...Fr(e, n.mediaMetadataMap, Object(A.q)(n.editorType)))
					}
				},
				Ur = (t, e, n) => {
					e && e.c && e.c.length && e.c.forEach(e => e.e === Un.u ? qr(t, e.c, v.b.BLOCK_QUOTE, n) : Pr(t, e, n))
				},
				Hr = (t, e, n) => {
					const {
						h: o,
						c: s
					} = e, i = o.length;
					[o, ...s].forEach((e, s) => e.forEach((e, r) => {
						const {
							c = []
						} = e, {
							a
						} = o[r], l = {
							alignment: a,
							colCount: i,
							colIndex: r,
							rowIndex: s
						};
						qr(t, c, v.b.TABLE_CELL, n, l)
					}))
				},
				zr = function t(e, n, o) {
					let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
					const i = n.o ? v.b.ORDERED_LIST : v.b.UNORDERED_LIST;
					n.c.forEach(n => {
						const r = n.c;
						if (!r || !r.length) return;
						const [c, a] = r, l = c.e === Un.u ? c.c : [];
						qr(e, l, i, o, void 0, s), a && a.e === Un.p && t(e, a, o, s + 1)
					})
				},
				Vr = {
					[Un.y]: ["r/", "/r/"],
					[Un.B]: ["u/", "/user/"],
					[Un.C]: ["u/", "/user/"],
					[Un.v]: ["p/", ""],
					[Un.g]: ["c/", ""]
				},
				Wr = {
					[Un.y]: M.a.SUBREDDIT_LINK,
					[Un.B]: M.a.USER_LINK,
					[Un.C]: M.a.USER_MENTION,
					[Un.v]: M.a.POST_LINK,
					[Un.g]: M.a.COMMENT_LINK
				},
				qr = function(t, e, n, s) {
					let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
						r = arguments.length > 5 ? arguments[5] : void 0,
						c = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
					const a = t.content;
					if (1 === e.length && (e[0].e === Un.m || e[0].e === Un.a)) {
						const n = e[0];
						if (Object(hr.e)(n.id)) return void t.blocks.push(...Fr(n, s.mediaMetadataMap, Object(A.q)(s.editorType)))
					}
					const {
						charList: l,
						text: d,
						updatedContent: u
					} = Gr(e, a, s), p = new o.ContentBlock({
						key: Object(o.genKey)(),
						characterList: Object(L.List)(l),
						data: Object(L.fromJS)(i),
						depth: r,
						text: d,
						type: n
					});
					t.content = u || a, c ? t.blocks.unshift(p) : t.blocks.push(p)
				},
				Gr = (t, e, n) => {
					let o = e,
						s = "";
					const i = [];
					if (t.forEach(t => {
							const e = Qr(t, o, n);
							o = e.updatedContent || o, s += e.text, i.push(...e.charList)
						}), s.length !== i.length) throw new Error("Characters length mismatch!");
					return {
						charList: i,
						text: s,
						updatedContent: o !== e ? o : void 0
					}
				},
				Qr = (t, e, n) => {
					switch (t.e) {
						case Un.A: {
							const {
								t: e,
								f: n
							} = t;
							return {
								charList: Zr(e, n),
								text: e
							}
						}
						case Un.x: {
							const {
								c: s
							} = t, i = Gr(s, e, n);
							return i.charList = i.charList.map(t => (t => o.CharacterMetadata.create({
								style: t.getStyle().add(v.k.SPOILER),
								entity: t.getEntity()
							}))(t)), i
						}
						case Un.v:
						case Un.g:
						case Un.w: {
							const {
								t: e
							} = t;
							return {
								charList: Zr(e),
								text: e
							}
						}
						case Un.y:
						case Un.B:
						case Un.C: {
							const [n, o] = Vr[t.e], s = (t.l ? "/" : "") + n + t.t, i = o + t.t, r = Kr(e, Wr[t.e], i), c = r.getLastCreatedEntityKey();
							return {
								charList: Zr(s, void 0, c),
								text: s,
								updatedContent: r
							}
						}
						case Un.o: {
							const {
								t: n,
								u: o,
								f: s
							} = t, i = Kr(e, M.a.LINK, o), r = i.getLastCreatedEntityKey();
							return {
								charList: Zr(n, s, r),
								text: n,
								updatedContent: i
							}
						}
						case Un.m:
						case Un.a:
							const {
								id: s
							} = t;
							if (s.startsWith("emote|")) {
								const t = Object(Ar.b)(s),
									o = n.activeEmotes && n.activeEmotes[t];
								if (o) {
									const t = Object(So.c)(e, o),
										n = t.getLastCreatedEntityKey(),
										s = So.a;
									return {
										charList: Zr(s, void 0, n),
										text: s,
										updatedContent: t
									}
								}
								const i = ":".concat(t, ":");
								return {
									charList: Zr(i),
									text: i
								}
							}
							return {
								text: "", charList: Zr("")
							};
						default:
							return {
								text: "", charList: Zr("")
							}
					}
				},
				Yr = t => {
					const e = Nr.filter(e => !!(mr[e] & t));
					return Object(L.OrderedSet)(e)
				},
				Zr = function(t, e) {
					let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
					const s = o.CharacterMetadata.create({
							entity: n
						}),
						i = Array(t.length).fill(s),
						r = Object(pr.a)(t);
					return e && e.forEach(t => {
						const [e, s, c] = t, a = Yr(e), l = s + c, d = o.CharacterMetadata.create({
							entity: n,
							style: a
						});
						i.fill(d, r[s], r[l])
					}), i
				},
				Jr = (t, e) => {
					t.blocks.length && (t.blocks[0].getType() === v.b.TABLE_CELL && qr(t, [], v.b.UNSTYLED, e, void 0, void 0, !0), t.blocks[t.blocks.length - 1].getType() === v.b.TABLE_CELL && qr(t, [], v.b.UNSTYLED, e))
				};
			var Xr = (t, e, n, s) => {
					const i = "string" == typeof t ? JSON.parse(t) : t;
					if (!i || !i.document || !i.document.length) return null;
					const r = {
							editorType: e,
							mediaMetadataMap: n,
							activeEmotes: s ? s.reduce((t, e) => Object.assign(Object.assign({}, t), e.emotes), {}) : void 0
						},
						c = {
							blocks: [],
							content: o.ContentState.createFromText("")
						};
					i.document.forEach(t => {
						Pr(c, t, r)
					}), 0 === c.blocks.length && qr(c, [], v.b.UNSTYLED, r), Jr(c, r);
					const a = o.BlockMapBuilder.createFromArray(c.blocks),
						l = o.SelectionState.createEmpty(a.first().getKey());
					return c.content.merge({
						blockMap: a,
						selectionBefore: l,
						selectionAfter: l
					})
				},
				$r = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				tc = n("./src/reddit/constants/elementClassNames.ts"),
				ec = n("./src/reddit/constants/keycodes.ts"),
				nc = n("./src/reddit/icons/svgs/Send/index.tsx"),
				oc = n("./src/reddit/selectors/economics.ts"),
				sc = n("./src/reddit/selectors/gold/powerups.ts"),
				ic = n("./src/reddit/components/RichTextEditor/index.m.less"),
				rc = n.n(ic);

			function cc() {
				return (cc = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
					}
					return t
				}).apply(this, arguments)
			}
			Object(mi.b)({
				draftToRTFJson: fr,
				getMediaCount: A.g,
				getPendingThumbnailUploads: A.i,
				isAllMediaUploaded: A.m
			});
			const ac = "handled",
				lc = "not-handled",
				dc = /^\s*$/,
				uc = 20,
				pc = m.a.wrapped(ss.a, "FocusableContent", rc.a),
				hc = m.a.div("Container", rc.a),
				gc = m.a.wrapped($r.a, "CurrentUserIcon", rc.a),
				mc = t => "".concat(x.b, "-").concat(t),
				fc = Object(l.b)(() => {
					const t = (() => Object(d.a)(t => t.uploads, (t, e) => e.rteState.editorKey, (t, e) => r()(t, t => t.key.startsWith(mc(e)))))();
					return Object(d.c)({
						editorUploads: t,
						emotesPowerupBenefitUnlocked: (t, e) => {
							let {
								destSubreddit: n
							} = e;
							return !!n && !!n.id && Object(sc.i)(t, {
								subredditId: n.id,
								benefit: O.a.CommentsWithEmoji
							})
						},
						emotesSpecialMembershipEnabled: S.d.spEmotes,
						giphyPowerupBenefitUnlocked: (t, e) => {
							let {
								destSubreddit: n,
								userCanUseGifs: o
							} = e;
							return !!n && !!n.id && !!o
						},
						giphySpecialMembershipEnabled: S.d.spGiphy,
						activeEmotes: (t, e) => !!e.destSubreddit && e.destSubreddit.id && Object(oc.b)(t, e.destSubreddit.id) || void 0
					})
				}, t => ({
					onFetchEditorProducts: e => t(Object(E.e)(e)),
					onTrackMediaDrop: e => t((t, n) => C.o(n(), e)),
					retryUpload: e => t(x.c(e)),
					startUploads: (e, n, o) => t(x.e(e, n, mc(o)))
				}));
			class bc extends c.Component {
				constructor(t) {
					super(t), this.blockRenderMap = o.DefaultDraftBlockRenderMap.merge(as, ps, In, di, gi, Ki, rn), this.editorHeight = null, this.editorRef = null, this.editorRootStyleMutationObserver = null, this.linksControllerApi = null, this.suggestionDropdownApi = null, this.tableToolbarControllerApi = null, this.emotesTooltipApi = null, this.gifTooltipApi = null, this.updateSuggestionDropdownPosition = null, this.isJustAutocompleteSelected = !1, this.isJustLinkified = !1, this.isMouseDown = !1, this.isJustConvertedToList = !1, this.needSyncScroll = null, this.transforms = {
						[T.BREAK_HEADER_ENTITY]: fo.b,
						[T.INSERT_LINE_BREAK]: fo.e,
						[T.REDUCE_LIST_INDENT]: fo.f,
						[T.RESET_CURRENT_AND_PREVIOUS_BLOCKS]: fo.g,
						[T.REMOVE_EXTRA_LIST_ITEM]: fo.h,
						[B.d]: t => Wo(t, this.props.editorType),
						[B.b]: t => Vo(t, this.props.editorType),
						[B.f]: fo.d,
						[B.c]: t => Object(fo.c)(v.k.BOLD, t),
						[B.e]: t => Object(fo.c)(v.k.ITALIC, t),
						[B.g]: t => Object(fo.c)(v.k.UNDERLINE, t)
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
						const n = Object.assign(Object.assign({}, this.props.rteState), {
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
							insertionMode: i
						} = n, r = o.map(e => t.find(t => t.file === e)).filter(Boolean);
						this.setState({
							mediaToInsert: null
						});
						const c = r.filter(t => !!t.metadata.mimetype);
						c.length && this.onChange(Object(A.l)(e, c, s, i))
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
						n = xn(n, this.state.editorState), n = At(n, this.props.editorType), this.emotesTooltipApi && (n = Object(So.d)(n, this.state.editorState)), n = Fo(n, this.state.editorState), n = Object(Zo.d)(n, this.state.editorState), this.setEditorState(n, e);
						let {
							suppressAutocompleteForLink: o
						} = this.state;
						if (o) {
							const e = Object(wo.b)(t);
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
						if (this.isMouseDown) return ac;
						if (It(e, t)) return ac;
						let n = function(t, e) {
							const n = t.getSelection(),
								s = n.getFocusOffset();
							if (!n.isCollapsed() || 0 === s) return;
							const i = n.getFocusKey(),
								r = t.getCurrentContent(),
								c = r.getBlockForKey(i),
								a = c.getEntityAt(s - 1),
								l = c.getEntityAt(s);
							if (!(a && (!l || l !== a))) return;
							const d = r.getEntity(a),
								u = Ro.has(d.getType());
							if ("MUTABLE" === d.getMutability() && u) {
								const s = o.Modifier.insertText(r, n, e, t.getCurrentInlineStyle());
								return o.EditorState.push(t, s, "insert-characters")
							}
						}(e, t) || e;
						return (n = fn(n, t) || n) !== e ? (this.onChange(n), ac) : lc
					}, this.keyBindingFN = t => {
						const {
							editorState: e
						} = this.state, {
							submitOnEnter: n
						} = this.props, s = e.getSelection();
						if (t.metaKey && t.keyCode === ec.a.K) return T.OPEN_LINK_TOOLTIP;
						if (t.keyCode === ec.a.Space) {
							if (Qo(e)) return T.CONVERT_TO_LIST_ON_SPACE;
							if (Object(wo.d)(e)) return T.LINKIFY_ON_SPACE
						} else if (t.keyCode === ec.a.Enter) {
							if (t.ctrlKey || t.metaKey || n && !t.shiftKey) return T.SUBMIT;
							if (t.shiftKey && qo(e)) return T.INSERT_LINE_BREAK; {
								const t = this.enterKeyBinding(e);
								if (t) return t
							}
						} else if (t.keyCode === ec.a.Backspace) {
							if (this.isJustLinkified || this.isJustConvertedToList) return B.h;
							if (s.isCollapsed()) {
								const t = e.getCurrentContent(),
									n = s.getEndKey(),
									o = s.getStartOffset(),
									i = t.getBlockForKey(n),
									r = i.getType();
								if ((Object(v.s)(r) || Object(v.q)(r) || Object(v.p)(r)) && 0 === o && i.getLength() > 0) {
									const e = t.getBlockBefore(n);
									if (!e || e.getType() !== r) return T.MAKE_PLAIN_BLOCK
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
						const i = t => {
							let e = t;
							if (s) {
								const {
									selection: t,
									url: n
								} = s;
								e = Object(wo.f)(e, t, n)
							}
							return this.onChange(e), this.isJustLinkified = !!s, ac
						};
						if (n === T.SUBMIT) this.props.onSubmit();
						else {
							if (n === T.CONVERT_TO_LIST_ON_SPACE) {
								const t = i(Yo(e));
								return this.isJustConvertedToList = !0, t
							}
							if (n === T.LINKIFY_ON_SPACE) return s = Object(wo.d)(e), i(Object(fo.a)(e));
							if (n === T.LINKIFY_ON_ENTER && (s = Object(wo.d)(e), !(n = this.enterKeyBinding(e, !1)))) return i(Object(fo.d)(e))
						}
						if (n === T.OPEN_LINK_TOOLTIP) return this.onToolbarLinkButtonClick(), ac;
						if (n === T.MAKE_PLAIN_BLOCK) {
							return i(Object(fo.i)(v.n, e))
						}
						if (n === T.EXEC_TABLE_ON_ENTER_HANDLER) return i(this.tableOnEnterHandler.handle(e));
						const r = this.transforms[n];
						if (r) {
							const t = r(e);
							if (t) return i(t)
						}
						const c = o.RichUtils.handleKeyCommand(e, n);
						return c ? i(c) : lc
					}, this.handleOnTab = t => {
						if (this.emotesTooltipApi && this.emotesTooltipApi.handleTabInEditor() || this.suggestionDropdownApi && this.suggestionDropdownApi.selectCurrent()) return void t.preventDefault();
						const {
							editorState: e
						} = this.state;
						let n = pn(t, e);
						if (n = n || zo(t, e)) return void this.onChange(n);
						const s = o.RichUtils.onTab(t, e, 2);
						this.onChange(s)
					}, this.handleOnUpArrow = t => {
						if (this.emotesTooltipApi && this.emotesTooltipApi.handleUpArrowInEditor() || this.suggestionDropdownApi && this.suggestionDropdownApi.moveUp()) return void t.preventDefault();
						const e = hn(t, this.state.editorState) || Bt(t, this.state.editorState);
						e && this.onChange(e), this.needSyncScroll = wr.Up
					}, this.handleOnDownArrow = t => {
						if (this.suggestionDropdownApi && this.suggestionDropdownApi.moveDown()) return void t.preventDefault();
						const e = gn(t, this.state.editorState) || _t(t, this.state.editorState);
						e && this.onChange(e), this.needSyncScroll = wr.Down
					}, this.handleReturn = t => {
						const e = Rt(this.state.editorState);
						return e ? (this.onChange(e), t.preventDefault(), ac) : this.suggestionDropdownApi && this.suggestionDropdownApi.selectCurrent() ? (t.preventDefault(), ac) : lc
					}, this.suppressAutocompleteForFocusedLink = () => {
						const t = Object(wo.b)(this.state.editorState);
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
						const n = it(e) || jt(e) || Object(A.e)(e);
						n && this.onChange(n)
					}, this.handleOnPaste = t => {
						const {
							editorState: e
						} = this.state;
						if (!this.editorRef) return;
						if (this.handleFilesPaste(t, e), t.isPropagationStopped()) return;
						const n = Ms(e, this.editorRef, t, this.props.editorType);
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
								filesSource: y.FileSource.Clipboard
							}), t.stopPropagation()
						}
					}, this.handleOnMouseDown = t => {
						this.isMouseDown = !0
					}, this.handleOnMouseUp = t => {
						this.isMouseDown = !1
					}, this.handleDroppedFiles = (t, e) => ac, this.handleDrop = (t, e, n) => ac, this.handleBlur = () => {
						this.props.onBlur && this.props.onBlur()
					}, this.handlePastedText = (t, e) => ac, this.onInternalSuggestionSelected = t => {
						this.onChange(Object(wo.g)(this.state.editorState, t)), this.isJustAutocompleteSelected = !0
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
						} = this.props, n = mi.a.toRichTextJSON(Object.assign(Object.assign({}, this.props.rteState), {
							isBound: !0,
							editorState: Object(A.c)(t)
						}));
						e && e(k.h.MARKDOWN, n), this.state.confirmModalOpen && this.toggleConfirmModal()
					}, this.onToolbarMarkdownSwitchClick = () => {
						const {
							editorState: t
						} = this.state;
						t && No(t) ? this.setState({
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
						} = t, o = e.slice(0, uc);
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
						} = this.state, s = Object(A.o)(o, t, e, n);
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
						return e === v.a ? this.getAtomicBlocksRenderConfig() : e in Ri ? Ri[e] : void 0
					}, this.renderToolbar = t => a.a.createElement(De.b, t), this.entityElementRegistry = yo(), this.tableOnEnterHandler = new mn;
					const {
						activeEmotes: e,
						editorType: n,
						noBorder: s,
						initialHeight: i,
						initialMinHeight: r,
						rteState: c
					} = t;
					let l;
					c.isBound ? l = c.editorState : Object(Un.G)(c.initialRTJSON) ? l = this.createInitialState(c.editorKey) : (l = o.EditorState.createWithContent(Xr(c.initialRTJSON, n, c.mediaMetadataMap, e), this.editorDecorators()), l = this.moveSelectionToEnd(l)), this.state = {
						noBorder: s,
						containerRef: null,
						confirmModalOpen: !1,
						editorState: l,
						focusableContentRef: null,
						inited: !1,
						initialHeight: i,
						initialMinHeight: r,
						mediaToInsert: null,
						suppressAutocompleteForLink: null
					}
				}
				editorDecorators() {
					return new o.CompositeDecorator([vo(), os(), Ko()])
				}
				moveSelectionToEnd(t) {
					const e = t.getCurrentContent().getBlockMap(),
						n = e.last().getKey(),
						s = e.last().getLength(),
						i = new o.SelectionState({
							anchorKey: n,
							anchorOffset: s,
							focusKey: n,
							focusOffset: s
						});
					return o.EditorState.acceptSelection(t, i)
				}
				createInitialState(t) {
					return o.EditorState.createWithContent(o.ContentState.createFromBlockArray([new o.ContentBlock({
						key: "".concat(t, "_initial")
					})]), this.editorDecorators())
				}
				componentDidMount() {
					if (this.props.rteRef && this.props.rteRef(this), g.a.write(Bi), this.rteStateChanged(this.state.editorState, !1), this.editorRef) {
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
					this.needSyncScroll && (Ir(this.needSyncScroll), this.needSyncScroll = null)
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
						i = o.getEndKey(),
						r = o.getEndOffset(),
						c = n.getBlockForKey(s).getType(),
						a = n.getBlockForKey(i),
						l = a.getType(),
						d = r === a.getText().length;
					if (c === v.l || l === v.l) return T.EXEC_TABLE_ON_ENTER_HANDLER;
					if (o.isCollapsed()) {
						if (e && Object(wo.d)(t)) return T.LINKIFY_ON_ENTER;
						if (Object(v.r)(l) && d) return T.BREAK_HEADER_ENTITY;
						if (Object(v.s)(l)) {
							if (dc.test(a.getText())) return a.getDepth() > 0 ? T.REDUCE_LIST_INDENT : T.REMOVE_EXTRA_LIST_ITEM
						} else if (l === v.e) {
							const t = n.getBlockBefore(i);
							if (t && t.getType() === v.e && dc.test(t.getText()) && dc.test(a.getText())) return T.RESET_CURRENT_AND_PREVIOUS_BLOCKS
						} else if (l === v.f) {
							const t = n.getBlockBefore(i),
								e = n.getBlockAfter(i);
							if (!a.getText() && t && t.getType() === v.f && !t.getText() && (!e || e.getType() !== v.f)) return T.RESET_CURRENT_AND_PREVIOUS_BLOCKS
						}
					}
				}
				getLinkForAutocomplete() {
					const {
						editorState: t,
						suppressAutocompleteForLink: e
					} = this.state;
					if (!this.isJustAutocompleteSelected && t.getSelection().getHasFocus()) {
						const n = Object(wo.b)(t);
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
					}, e.entityText.startsWith(f.f) && a.a.createElement(Yi, {
						onDropdownApi: this.setSuggestionDropdownApi,
						onSelect: this.onInternalSuggestionSelected,
						substring: e.internalName
					}), f.a.test(e.entityText) && a.a.createElement($i, {
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
						allowMediaUploads: i = !1,
						dataTestId: r,
						destSubreddit: c,
						editorType: l,
						emotesPowerupBenefitUnlocked: d,
						emotesSpecialMembershipEnabled: u,
						focusableContentRTEClassName: p,
						giphyPowerupBenefitUnlocked: g,
						giphySpecialMembershipEnabled: m,
						hideToolbar: f,
						rteState: b,
						isExpanded: y,
						isOverlay: E,
						isCommentBoxDesignEnabled: x,
						onSubmit: S,
						placeholderText: C,
						showSubmitButton: O = !1,
						submitButtonClassName: k,
						toolbarPosition: v = "top",
						renderToolbar: T = this.renderToolbar
					} = this.props, {
						editorKey: R
					} = b, {
						containerRef: B,
						editorState: _,
						mediaToInsert: I,
						confirmModalOpen: A
					} = this.state, K = this.props.readOnly || !!I, M = j(_), L = this.isEmpty(), D = !(!e || !Object.keys(e).length), F = (u || d) && D, N = m || g, P = T({
						allowMediaUploads: i,
						destSubreddit: c,
						editorKey: R,
						editorState: _,
						isOverlay: !!E,
						onChange: this.toolbarSetState,
						onFilesSelect: this.onFilesSelect,
						trackOnClick: this.props.trackToolbarClick,
						readOnly: K,
						onEmoteButtonClick: F ? this.onToolbarEmoteButtonClick : void 0,
						onGifButtonClick: N ? this.onToolbarGifButtonClick : void 0,
						onLinkButtonClick: this.onToolbarLinkButtonClick,
						onMarkdownButtonClick: this.onToolbarMarkdownSwitchClick,
						userCanUseGifs: !!n
					}), U = !f && (!x || y);
					return a.a.createElement(hc, {
						className: t,
						innerRef: this.setContainerRef
					}, x && a.a.createElement("div", {
						className: rc.a.userIcon
					}, a.a.createElement(gc, null)), a.a.createElement(pc, {
						className: Object(h.a)(p, {
							[rc.a.showSubmitButton]: O,
							[rc.a.mExpanded]: y,
							[rc.a.mRedesign]: x
						}),
						noBorder: this.props.noBorder,
						isFocused: this.isFocused(),
						ref: this.setFocusableContentRef
					}, U && "top" === v && P, B && a.a.createElement(mo, {
						editorState: _,
						readOnly: K,
						onChange: this.onChange,
						onSetApi: this.setTableToolbarControllerApi,
						rteDomRef: B
					}), a.a.createElement("div", {
						className: Object(h.a)(rc.a.editorWrapper, {
							[rc.a.hasInitialHeight]: !!this.props.initialHeight,
							[rc.a.hasInitialMinHeight]: !!this.props.initialMinHeight,
							[rc.a.noBorder]: !!this.props.noBorder
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
					}, a.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: "\n                .".concat(tc.b, "[").concat(tc.d, '="').concat(M, "-0-0\"]::after {\n                  bottom: 0;\n                  color: var(--newCommunityTheme-actionIcon);\n                  content: '").concat(C, "';\n                  cursor: text;\n                  left: 0;\n                  position: absolute;\n                  top: 0;\n                }\n              ")
						}
					}), a.a.createElement(Cs, {
						allowMediaUploads: i && !K,
						onBlockMove: this.onBlockMove,
						onFilesDrop: this.onFilesDrop,
						editorState: _,
						onChange: this.onChange
					}, a.a.createElement(Eo.Provider, {
						value: this.entityElementRegistry
					}, a.a.createElement(o.Editor, {
						readOnly: K,
						ref: this.setEditorRef,
						blockRendererFn: this.blockRendererFn,
						blockRenderMap: this.blockRenderMap,
						editorKey: R,
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
						customStyleMap: xi()
					})))), U && "bottom" === v && P, a.a.createElement(ri, {
						editorState: _,
						entityElementRegistry: this.entityElementRegistry,
						onSetApi: this.setLinksControllerApi,
						onChange: this.onChange
					}), F && !!c && l === Nt.a.Comment && a.a.createElement(jo, {
						editorState: _,
						onChange: this.onChange,
						onSetApi: this.setEmotesTooltipApi,
						subreddit: c,
						shouldHideAddEmote: !u
					}), N && c && a.a.createElement(Xo, {
						editorState: _,
						onChange: this.onChange,
						onSetApi: this.setGifTooltipApi,
						subreddit: c,
						userCanUseGifs: !!n
					}), this.renderInternalLinkSuggestionDropdown(), O && a.a.createElement($t.d, {
						"aria-label": s.fbt._("submit", null, {
							hk: "12XoZ8"
						}),
						className: Object(h.a)(k, rc.a.insetSubmitButton, {
							[rc.a.emptyContent]: L,
							[rc.a.focusedContent]: this.isFocused()
						}),
						disabled: L,
						onClick: S,
						tabIndex: -1,
						type: "submit"
					}, a.a.createElement(nc.a, null))), A && a.a.createElement(w.a, {
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
			e.a = fc(Object(Mi.b)(t => a.a.createElement(bc, cc({
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
				return x
			})), n.d(e, "k", (function() {
				return S
			})), n.d(e, "n", (function() {
				return C
			})), n.d(e, "p", (function() {
				return O
			})), n.d(e, "d", (function() {
				return v
			})), n.d(e, "c", (function() {
				return T
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
				i = n("./node_modules/immutable/dist/immutable.js"),
				r = n("./node_modules/lodash/flatten.js"),
				c = n.n(r),
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
					const r = o.getBlockForKey(e),
						c = y(r),
						a = c && c.uploadInfo;
					if (!a) throw new Error("Block must contain `uploadInfo` data");
					if (n.makeGif === c.makeGif && n.thumbnail === c.thumbnail) return t;
					const l = Object(i.Map)(n),
						d = o.getBlockMap().toKeyedSeq().filter(t => {
							const e = y(t);
							return !!e && !!e.uploadInfo && e.uploadInfo.uploadKey === a.uploadKey
						}).map(t => t.mergeIn(["data"], l));
					return o = (o = o.mergeIn(["blockMap"], d)).merge({
						selectionAfter: t.getSelection()
					}), s.EditorState.push(t, o, g.b)
				},
				x = (t, e, n, o) => {
					let r = t.getCurrentContent();
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
							data: Object(i.Map)({
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
					r = Object(m.f)(r, n, a, o);
					const u = s.EditorState.push(t, r, g.e),
						p = l()(a);
					return s.EditorState.forceSelection(u, Object(m.b)(p, !0))
				},
				S = (t, e, n, r, c, a, l, d) => {
					const u = new s.ContentBlock({
							key: Object(s.genKey)(),
							type: f.a,
							data: Object(i.Map)({
								mediaAsset: {
									type: o.AnimatedImage,
									assetId: Object(p.b)(e, r),
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
				v = function(t, e) {
					let n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
						o = t.getCurrentContent();
					o = k(o, e);
					let i = n ? s.EditorState.push(t, o, g.f) : s.EditorState.set(t, {
						currentContent: o
					});
					return i = s.EditorState.forceSelection(i, o.getSelectionAfter())
				},
				T = t => {
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
						const i = M(n),
							r = e[i];
						return r && r.url ? void 0 : Object.assign(Object.assign({}, s), {
							uploadKey: i
						})
					}).filter(Boolean).toArray();
					return n.length ? n : void 0
				},
				A = (t, e, n, o) => {
					let i = t.getCurrentContent();
					const r = i.getBlockForKey(e),
						c = i.getBlockAfter(e),
						a = [r];
					if (c && Object(f.u)(c.getType()) && a.push(c), a.find(t => t.getKey() === n)) return;
					const d = a.reduce((t, e) => t.remove(e.getKey()), i.getBlockMap());
					i = i.set("blockMap", d), i = Object(m.f)(i, n, a, o);
					const u = s.EditorState.push(t, i, g.e);
					return s.EditorState.forceSelection(u, Object(m.b)(l()(a), !0))
				},
				K = function(t, e) {
					let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : m.a.after;
					const o = Object(m.h)(),
						i = Object(m.f)(t.getCurrentContent(), e, [o], n),
						r = s.EditorState.push(t, i, g.e);
					return s.EditorState.forceSelection(r, s.SelectionState.createEmpty(o.getKey()))
				},
				M = t => t.thumbnail && t.uploadInfo ? "".concat(t.uploadInfo.uploadKey, "-thumbnail-").concat(t.thumbnail.time) : "",
				L = (t, e) => {
					let n = "",
						o = "";
					if (t.uploadInfo) {
						const {
							uploadKey: s
						} = t.uploadInfo, i = e[s];
						i && i.url && (n = Object(h.b)(i.url));
						const r = e[M(t)];
						r && r.url && (o = Object(h.b)(r.url))
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
				return i
			})), n.d(e, "a", (function() {
				return r
			}));
			var o = n("./src/lib/forEachGroup/index.ts"),
				s = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const i = t => t.getStyle().has(s.k.SPOILER);

			function r(t, e, n) {
				const s = t.getCharacterList();
				Object(o.a)(s, {
					keyFn: i
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
				return x
			})), n.d(e, "e", (function() {
				return S
			})), n.d(e, "o", (function() {
				return C
			})), n.d(e, "d", (function() {
				return O
			}));
			var o = n("./node_modules/draft-js/lib/Draft.js"),
				s = n("./node_modules/immutable/dist/immutable.js"),
				i = n("./src/reddit/models/RichTextJson/index.ts"),
				r = n("./src/reddit/components/RichTextEditor/helpers/sliceContiguousBlocks.ts"),
				c = n("./src/reddit/components/RichTextEditor/styleAndBlockTypes.ts");
			const a = {
					[i.e]: "left",
					[i.f]: "right",
					[i.d]: "center"
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
					const i = e.map(t => t.getText()).join(n),
						r = n ? s || o.CharacterMetadata.create() : null,
						c = [];
					return e.forEach(t => {
						c.push(...t.getCharacterList().toArray()), r && e.length > 1 && c.push(r)
					}), t.merge({
						text: i,
						characterList: c
					})
				},
				g = (t, e) => {
					const n = [];
					for (let i = 0; i < e; i++)
						for (let e = 0; e < t; e++) n.push(new o.ContentBlock({
							key: Object(o.genKey)(),
							type: c.l,
							data: Object(s.Map)({
								colCount: t,
								colIndex: e,
								rowIndex: i
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
						maxRow: i
					} = m(t, e);
					return (t, e) => o <= t && t <= i && n <= e && e <= s
				},
				b = (t, e) => t.rowIndex < e.rowIndex ? -1 : t.rowIndex > e.rowIndex ? 1 : t.colIndex - e.colIndex,
				y = (t, e) => t === e || !(!t || !e) && 0 === b(t, e),
				E = (t, e) => b(l(t), l(e)),
				x = t => {
					if (Object(c.v)(t.getType())) {
						return 0 === l(t).rowIndex
					}
					return !1
				},
				S = (t, e, n) => {
					const o = (e, n) => {
						if (e) {
							const o = Object(r.a)(t, e);
							return o && n && -1 !== o.blocks.indexOf(n) ? [o, o] : [o, n ? Object(r.a)(t, n) : null]
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
				i = n.n(s),
				r = n("./node_modules/lodash/range.js"),
				c = n.n(r),
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
			const x = 10,
				S = Object(p.a)(u.a.div("Component", E.a)),
				C = u.a.wrapped(b.a, "TitleRow", E.a),
				O = u.a.wrapped(f.a, "Close", E.a),
				k = u.a.div("CloseWrapper", E.a),
				v = u.a.div("ThumbnailsContainer", E.a),
				T = u.a.img("Image", E.a),
				j = t => l.a.createElement("div", {
					className: Object(d.a)(E.a.thumbnail, Object(m.a)({
						isLoading: t.isLoading
					}), {
						[E.a.isSelected]: t.isSelected
					}),
					onClick: t.onClick,
					ref: t.elementRef
				}, t.thumbnail.url && l.a.createElement(T, {
					src: t.thumbnail.url
				})),
				R = u.a.wrapped(b.a, "ButtonRow", E.a),
				w = h.i,
				B = u.a.wrapped(h.l, "CancelButton", E.a),
				_ = (t, e) => {
					if (1 === t) return [0];
					const n = c()(0, e, e / (t - 1));
					return n.push(e), n.map(t => +t.toFixed(2))
				};
			class I extends l.a.Component {
				constructor(t) {
					super(t), this.isThumbnailsAreGenerating = !1, this.setSelectedElementRef = t => this.selectedElement = t, this.setThumbnails = i()(t => this.setState({
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
						thumbnailsCount: e = x,
						selected: n,
						videoDuration: o
					} = this.props, s = _(e, o).map(t => ({
						time: t,
						url: n && n.time === t ? n.url : void 0
					})), r = n ? s.findIndex(t => n.time === t.time) : -1;
					this.state = {
						thumbnails: s,
						selectedIndex: r
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
					return l.a.createElement(S, {
						withOverlay: !0
					}, l.a.createElement(C, null, o.fbt._("Choose thumbnail", null, {
						hk: "XlI0H"
					}), l.a.createElement(k, {
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
		"./src/reddit/icons/svgs/FormattingAlignCenter/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_1ZVHRoTDdo57082D2GcC80"
			}
		},
		"./src/reddit/icons/svgs/FormattingAlignCenter/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/FormattingAlignCenter/index.m.less"),
				c = n.n(r);
			e.a = t => s.a.createElement("svg", {
				className: Object(i.a)(c.a.icon, t.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				fill: "inherit",
				fillRule: "nonzero"
			}, s.a.createElement("path", {
				d: "M3.5 11h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1zM7.42 16h5.08c.55 0 1-.45 1-1s-.45-1-1-1H7.42c-.56 0-1 .45-1 1s.44 1 1 1zM3.5 6h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1z"
			})))
		},
		"./src/reddit/icons/svgs/FormattingAlignLeft/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_33vXt91MK_ualpifvvw_3v"
			}
		},
		"./src/reddit/icons/svgs/FormattingAlignLeft/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/FormattingAlignLeft/index.m.less"),
				c = n.n(r);
			e.a = t => s.a.createElement("svg", {
				className: Object(i.a)(c.a.icon, t.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				fill: "inherit",
				fillRule: "nonzero"
			}, s.a.createElement("path", {
				d: "M3.5 11h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1zM3.5 16h5.4c.54 0 1-.45 1-1s-.46-1-1-1H3.5c-.55 0-1 .45-1 1s.45 1 1 1zM3.5 6h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1z"
			})))
		},
		"./src/reddit/icons/svgs/FormattingAlignRight/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_34rYEsgbWk8eOQx_bs7fTV"
			}
		},
		"./src/reddit/icons/svgs/FormattingAlignRight/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/FormattingAlignRight/index.m.less"),
				c = n.n(r);
			e.a = t => s.a.createElement("svg", {
				className: Object(i.a)(c.a.icon, t.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				fill: "inherit",
				fillRule: "nonzero"
			}, s.a.createElement("path", {
				d: "M3.5 11h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1zM11.5 16h5c.55 0 1-.45 1-1s-.45-1-1-1h-5c-.55 0-1 .45-1 1s.45 1 1 1zM3.5 6h13c.55 0 1-.45 1-1s-.45-1-1-1h-13c-.55 0-1 .45-1 1s.45 1 1 1z"
			})))
		},
		"./src/reddit/icons/svgs/FormattingBlockQuotes/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_32TQMV98QwoweVXtMHpwr2"
			}
		},
		"./src/reddit/icons/svgs/FormattingBlockQuotes/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/FormattingBlockQuotes/index.m.less"),
				c = n.n(r);
			e.a = t => s.a.createElement("svg", {
				className: Object(i.a)(c.a.icon, t.className),
				style: t.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("polygon", {
				points: "8.63 4 5.36 4 2 9.8 2 16 9.2 16 9.2 9.24 6.75 9.24 8.63 4"
			}), s.a.createElement("polygon", {
				points: "15.56 9.24 17.39 4 14.16 4 10.8 9.8 10.8 16 18 16 18 9.24 15.56 9.24"
			}))
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
				i = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/FormattingBold/index.m.less"),
				c = n.n(r);
			e.a = t => s.a.createElement("svg", {
				className: Object(i.a)(c.a.icon, t.className),
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
		"./src/reddit/icons/svgs/FormattingCodeBlock/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/FormattingCodeBlock/index.m.less"),
				c = n.n(r);
			e.a = t => s.a.createElement("svg", {
				className: Object(i.a)(c.a.icon, t.className),
				style: t.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M15,2H13a1,1,0,0,0,0,2h2a1,1,0,0,1,1,1V15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V13a1,1,0,0,0-2,0v2a3,3,0,0,0,3,3H15a3,3,0,0,0,3-3V5A3,3,0,0,0,15,2Z"
			}), s.a.createElement("path", {
				d: "M2.79,5a.71.71,0,0,0,.53-.2.74.74,0,0,0,.19-.54V4.08l0-.48H5.07V8.4H4.9a1,1,0,0,0-.69.18A.79.79,0,0,0,4,9.2a.79.79,0,0,0,.21.61A1,1,0,0,0,4.9,10H7.1a1,1,0,0,0,.69-.19A.79.79,0,0,0,8,9.2a.78.78,0,0,0-.21-.61A1,1,0,0,0,7.1,8.4H6.93V3.6H8.44l0,.48a1.19,1.19,0,0,0,.18.72.7.7,0,0,0,.56.2.75.75,0,0,0,.59-.2A1,1,0,0,0,10,4.14V4.08L9.93,2.9q0-.64-.18-.77A1.06,1.06,0,0,0,9.11,2H2.89a1.06,1.06,0,0,0-.63.13q-.16.13-.18.77L2,4.08v.06a.94.94,0,0,0,.19.65A.78.78,0,0,0,2.79,5Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingDeleteRow/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_8Y1-XP7A1OOfoU_mUqKcg"
			}
		},
		"./src/reddit/icons/svgs/FormattingDeleteRow/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/FormattingDeleteRow/index.m.less"),
				c = n.n(r);
			e.a = t => s.a.createElement("svg", {
				className: Object(i.a)(c.a.icon, t.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				fill: "inherit",
				fillRule: "nonzero",
				transform: "vertical" === t.orientation ? "rotate(90, 10, 10)" : ""
			}, s.a.createElement("path", {
				d: "M3 3c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V3zM2 3v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2z"
			}), s.a.createElement("path", {
				d: "M2 15h16v1H2M2 4h16v1H2M7.17 11.4l4.24-4.23c.4-.4 1.04-.4 1.43 0 .4.4.4 1.03 0 1.42L8.6 12.82c-.4.4-1.04.4-1.43 0-.4-.4-.4-1.03 0-1.42z"
			}), s.a.createElement("path", {
				d: "M8.6 7.17l4.23 4.24c.4.4.4 1.04 0 1.43-.4.4-1.03.4-1.42 0L7.18 8.6c-.4-.4-.4-1.04 0-1.43.4-.4 1.03-.4 1.42 0z"
			})))
		},
		"./src/reddit/icons/svgs/FormattingHeading/index.m.less": function(t, e, n) {
			t.exports = {
				icon: "_2C-VR7luDjfFqzNiJQEpk0"
			}
		},
		"./src/reddit/icons/svgs/FormattingHeading/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/FormattingHeading/index.m.less"),
				c = n.n(r);
			e.a = t => s.a.createElement("svg", {
				className: Object(i.a)(c.a.icon, t.className),
				style: t.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("polygon", {
				points: "6.57 3 6.57 5.57 10.73 5.57 10.73 17 13.82 17 13.82 5.57 18 5.57 18 3 6.57 3"
			}), s.a.createElement("polygon", {
				points: "2 9.65 4.68 9.65 4.68 17 6.66 17 6.66 9.65 9.35 9.65 9.35 8 2 8 2 9.65"
			}))
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
				i = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/FormattingHyperlink/index.m.less"),
				c = n.n(r);
			e.a = t => s.a.createElement("svg", {
				className: Object(i.a)(c.a.icon, t.className),
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
		"./src/reddit/icons/svgs/FormattingInsertRow/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/FormattingInsertRow/index.m.less"),
				c = n.n(r);
			const a = {
				up: "rotate(180 10 10)",
				down: "",
				left: "rotate(90 10 10)",
				right: "rotate(-90 10 10)"
			};
			e.a = t => s.a.createElement("svg", {
				className: Object(i.a)(c.a.icon, t.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				fill: "inherit",
				fillRule: "nonzero",
				transform: a[t.orientation || "down"]
			}, s.a.createElement("path", {
				d: "M17 17c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v14zm1 0V3c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2z"
			}), s.a.createElement("path", {
				d: "M18 6H2V5h16M13 13H7c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1z"
			}), s.a.createElement("path", {
				d: "M9 15V9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1z"
			})))
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
				i = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/FormattingItalics/index.m.less"),
				c = n.n(r);
			e.a = t => s.a.createElement("svg", {
				className: Object(i.a)(c.a.icon, t.className),
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
				i = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/FormattingMonospace/index.m.less"),
				c = n.n(r);
			e.a = t => s.a.createElement("svg", {
				className: Object(i.a)(c.a.icon, t.className),
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
				i = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/FormattingSpoiler/index.m.less"),
				c = n.n(r);
			e.a = t => s.a.createElement("svg", {
				className: Object(i.a)(c.a.icon, t.className),
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
				i = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/FormattingStrikethrough/index.m.less"),
				c = n.n(r);
			e.a = t => s.a.createElement("svg", {
				className: Object(i.a)(c.a.icon, t.className),
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
				i = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/FormattingSuperscript/index.m.less"),
				c = n.n(r);
			e.a = t => s.a.createElement("svg", {
				className: Object(i.a)(c.a.icon, t.className),
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
				i = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/FormattingTable/index.m.less"),
				c = n.n(r);
			e.a = t => s.a.createElement("svg", {
				className: Object(i.a)(c.a.icon, t.className),
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
				i = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/FormattingUnorderedList/index.m.less"),
				c = n.n(r);
			e.a = t => s.a.createElement("svg", {
				className: Object(i.a)(c.a.icon, t.className),
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
				i = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/ImagePost/index.m.less"),
				c = n.n(r);
			e.a = t => s.a.createElement("svg", {
				className: Object(i.a)(c.a.icon, t.className),
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
				i = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/ThumbnailSelect/index.m.less"),
				c = n.n(r);
			e.a = t => s.a.createElement("svg", {
				className: Object(i.a)(c.a.icon, t.className),
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
			const s = (t, e) => t.creations.api.editor.converting.pending[e || o.n]
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatMessageInput~MembershipPaywallPage~RichTextEditor.1086c2994d7301f9318d.js.map