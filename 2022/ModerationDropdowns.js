// https://www.redditstatic.com/desktop2x/ModerationDropdowns.6a62be13f3ab72b54dd1.js
// Retrieved at 2/14/2022, 9:30:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModerationDropdowns"], {
		"./node_modules/lodash/_arrayEvery.js": function(e, t) {
			e.exports = function(e, t) {
				for (var n = -1, o = null == e ? 0 : e.length; ++n < o;)
					if (!t(e[n], n, e)) return !1;
				return !0
			}
		},
		"./node_modules/lodash/_baseEvery.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, t) {
				var n = !0;
				return o(e, (function(e, o, s) {
					return n = !!t(e, o, s)
				})), n
			}
		},
		"./node_modules/lodash/every.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_arrayEvery.js"),
				s = n("./node_modules/lodash/_baseEvery.js"),
				r = n("./node_modules/lodash/_baseIteratee.js"),
				a = n("./node_modules/lodash/isArray.js"),
				i = n("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, t, n) {
				var c = a(e) ? o : s;
				return n && i(e, t, n) && (t = void 0), c(e, r(t, 3))
			}
		},
		"./src/lib/memoizeByReference/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./node_modules/lodash/every.js"),
				s = n.n(o);

			function r(e) {
				let t = null,
					n = null;
				return (...o) => (null !== t && o.length === t.length && s()(o, (e, n) => e === t[n]) || (t = o, n = e(...o)), n)
			}
		},
		"./src/reddit/actions/economics/predictions/modTools.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "d", (function() {
				return f
			}));
			var o = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/reddit/actions/economics/predictions/index.ts"),
				r = n("./src/reddit/reducers/features/predictions/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/constants/modals.ts"),
				d = n("./src/reddit/models/Toast/index.ts");
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			Object(o.a)({
				features: {
					predictions: r.a
				}
			});
			const u = ({
				postId: e,
				closedAt: t
			}) => async n => {
				try {
					await n(Object(s.d)(e, {
						closedAt: t
					})), n(Object(i.f)({
						duration: i.a,
						kind: d.b.SuccessCommunity,
						text: l._("Updated", null, {
							hk: "4cncaA"
						})
					}))
				} catch {
					(e => e(Object(i.f)({
						duration: i.a,
						kind: d.b.Error,
						text: l._("Error: Failed to update prediction end time, please try again later", null, {
							hk: "MkaNA"
						})
					})))(n)
				}
			};

			function p(e, t) {
				return async n => {
					try {
						await n(Object(s.d)(e, {
							resolvedOptionId: t
						}));
						const o = Object(i.e)(l._("Outcome changed", null, {
							hk: "Io0na"
						}), d.b.SuccessMod);
						n(Object(i.f)(o))
					} catch {
						const e = Object(i.e)(l._("Oops! Something went wrong. Please note that the outcome can be changed just once per Prediction", null, {
							hk: "4B5dNf"
						}), d.b.Error);
						n(Object(i.f)(e))
					}
				}
			}
			const m = e => Object(a.h)(c.a.ECON_PREDICTIONS_CHANGE_END_TIME, {
					postId: e
				}),
				b = e => Object(a.h)(c.a.ECON_PREDICTIONS_CANCEL_PREDICTION, {
					postId: e
				}),
				f = e => Object(a.h)(c.a.ECON_PREDICTIONS_CHANGE_OUTCOME, {
					postId: e
				})
		},
		"./src/reddit/actions/postFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return b
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "f", (function() {
				return C
			})), n.d(t, "b", (function() {
				return S
			})), n.d(t, "e", (function() {
				return w
			})), n.d(t, "d", (function() {
				return I
			})), n.d(t, "l", (function() {
				return R
			})), n.d(t, "k", (function() {
				return L
			})), n.d(t, "j", (function() {
				return D
			})), n.d(t, "g", (function() {
				return A
			})), n.d(t, "i", (function() {
				return W
			})), n.d(t, "h", (function() {
				return B
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/post.ts"),
				a = n("./src/reddit/actions/postFlairStyleTemplate.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/flair/index.ts"),
				d = n("./src/reddit/helpers/flair.ts"),
				l = n("./src/reddit/models/Flair/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				p = n("./src/reddit/selectors/postFlair.ts"),
				m = n("./src/reddit/selectors/subreddit.ts");
			const b = "STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_SUCCESS",
				f = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_PENDING"),
				h = Object(s.a)(b),
				x = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_FAILED"),
				_ = "STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				O = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING"),
				j = Object(s.a)(_),
				E = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED"),
				C = "STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_SUCCESS",
				v = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_PENDING"),
				T = Object(s.a)(C),
				k = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_FAILED"),
				S = "STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_SUCCESS",
				g = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_PENDING"),
				y = Object(s.a)(S),
				P = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_FAILED"),
				w = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_PENDING",
				I = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_FAILED",
				F = Object(s.a)(w),
				M = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_SUCCESS"),
				N = Object(s.a)(I),
				R = (e, t) => async (n, o, {
					apiContext: s
				}) => {
					const r = o(),
						a = Object(m.R)(r, {
							subredditId: e
						}).name;
					n(f());
					const i = await Object(c.k)(s(), a, t);
					if (i.ok) {
						n(h({
							subredditId: e,
							isEnabled: t
						}))
					} else n(x());
					return i.ok
				}, L = (e, t) => async (n, o, {
					apiContext: s
				}) => {
					const r = o(),
						a = Object(m.R)(r, {
							subredditId: e
						}).name;
					n(O());
					const i = await Object(c.j)(s(), t, l.d.LinkFlair, a);
					if (i.ok) {
						n(j({
							subredditId: e,
							canAssignOwn: t
						}))
					} else n(E());
					return i.ok
				}, D = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const d = s(),
						p = Object(m.R)(d, {
							subredditId: t
						}).name;
					n(v());
					const b = await Object(c.f)(r(), e, p, l.d.LinkFlair);
					let f = b.ok && !(b.body && !1 === b.body.success);
					if (f) {
						const o = b.body;
						if (n(T({
								subredditId: t,
								template: o
							})), o.id) {
							const s = e.styleTemplate,
								r = d.structuredStyles.flairTemplate.models[o.id];
							s ? f = await n(Object(a.d)(t, o.id, s)) : r && (f = await n(Object(a.c)(t, o.id)))
						}
					}
					if (f) {
						const e = Object(i.e)(o.fbt._("Flair saved!", null, {
							hk: "3MQuUt"
						}), u.b.SuccessMod);
						n(Object(i.f)(e))
					} else {
						n(k());
						const s = Object(i.e)(o.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "1yf1Ne"
						}), u.b.Error, o.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), D(e, t));
						n(Object(i.f)(s))
					}
					return f
				}, A = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const a = s(),
						d = Object(m.R)(a, {
							subredditId: t
						}).name;
					if (n(g()), (await Object(c.b)(r(), e, d)).ok) {
						n(y({
							subredditId: t,
							templateId: e
						}));
						const s = Object(i.e)(o.fbt._("Flair deleted!", null, {
							hk: "44T1il"
						}), u.b.SuccessMod);
						n(Object(i.f)(s))
					} else {
						n(P());
						const s = Object(i.e)(o.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "1nwT0G"
						}), u.b.Error, o.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), A(e, t));
						n(Object(i.f)(s))
					}
				}, W = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const a = s(),
						d = Object(p.d)(a, {
							subredditId: t
						}).templateIds,
						b = Object(m.R)(a, {
							subredditId: t
						}).name;
					if (n(F({
							subredditId: t,
							templateIds: e
						})), (await Object(c.e)(r(), b, l.d.LinkFlair, e)).ok) {
						n(M());
						const e = Object(i.e)(o.fbt._("Flair reorder saved.", null, {
							hk: "1Xbuan"
						}), u.b.SuccessMod);
						n(Object(i.f)(e))
					} else {
						n(N({
							subredditId: t,
							templateIds: d
						}));
						const s = Object(i.e)(o.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "4ohwNd"
						}), u.b.Error, o.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), W(e, t));
						n(Object(i.f)(s))
					}
				}, B = ({
					post: e,
					previewFlair: t,
					selectedTemplateId: n
				}) => async (o, s, {
					apiContext: a
				}) => {
					const i = e.flair.filter(e => !Object(d.q)(e.type));
					if (t && i.unshift(t), o(Object(r.S)({
							[e.id]: {
								flair: i
							}
						})), t) {
						const o = Object(d.g)(t);
						Object(c.h)(a(), e.id, n, o)
					} else Object(c.h)(a(), e.id, "", "")
				}
		},
		"./src/reddit/actions/postFlairStyleTemplate.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return E
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "a", (function() {
				return T
			})), n.d(t, "c", (function() {
				return S
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./node_modules/lodash/forEach.js"),
				s = n.n(o),
				r = n("./node_modules/lodash/isEqual.js"),
				a = n.n(r),
				i = n("./node_modules/lodash/values.js"),
				c = n.n(i),
				d = n("./src/lib/makeActionCreator/index.ts"),
				l = n("./src/reddit/actions/imageUploads.ts"),
				u = n("./src/reddit/helpers/media/index.ts"),
				p = n("./src/lib/constants/index.ts"),
				m = n("./src/lib/makeApiRequest/index.ts"),
				b = n("./src/lib/omitHeaders/index.ts"),
				f = n("./src/reddit/constants/headers.ts");
			var h = n("./src/reddit/helpers/trackers/blade.ts"),
				x = n("./src/reddit/models/Image/index.tsx"),
				_ = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./src/telemetry/index.ts");
			const j = ({
				subredditId: e,
				flairId: t,
				imageKey: n,
				imageData: o
			}) => async (s, r, a) => {
				const i = r(),
					c = Object(_.R)(i, {
						subredditId: e
					});
				if (!c) return !1;
				s(Object(l.k)(o));
				const d = await (async (e, t, n, o, s, r) => Object(m.a)(Object(b.a)(e, [f.a]), {
					endpoint: `${e.apiUrl}/api/v1/${t}/flair_style_asset_upload_s3/${n}`,
					method: p.jb.POST,
					data: {
						filepath: o,
						imagetype: s,
						mimetype: r
					}
				}))(a.apiContext(), c.name, t, o.file.name, n, await Object(u.g)(o.file));
				let h = !1;
				try {
					const e = await Object(l.g)(r(), d, o, x.a.FlairTemplates);
					e && s(Object(l.j)(e)), h = !0
				} catch (O) {
					if (O instanceof Error) throw O;
					s(Object(l.i)(O))
				}
				return h
			}, E = "POSTFLAIR_STYLETEMPLATE_SAVED_SUCCESS", C = Object(d.a)(E), v = (e, t, n) => async (o, r, i) => {
				const {
					apiContext: d
				} = i;
				let u = r();
				const {
					pendingImages: E,
					...v
				} = n;
				let T = v;
				const k = Object(_.R)(u, {
					subredditId: e
				});
				if (!k) return !1;
				const S = u.structuredStyles.flairTemplate.models[t];
				if (S && a()(S, T)) return !0;
				if (E) {
					const n = [];
					if (s()(E, (s, r) => {
							s && n.push(o(j({
								flairId: t,
								imageData: Object(x.m)(s),
								imageKey: r,
								subredditId: e
							})))
						}), !(await Promise.all(n)).every(e => e)) return !1;
					T = ((e, t, n) => {
						const o = {
							...e
						};
						return s()(t, (e, t) => {
							const s = e && n.imageUploads[e.id];
							s && s.kind === x.b.TempUploaded && (o[t] = s.url)
						}), o
					})(T, E, r())
				}
				u = r();
				let g = null,
					y = null;
				const P = [];
				try {
					(g = await Object(l.f)(u, x.a.FlairTemplates)) && (y = Object(l.m)(g)(o, r, i), P.push(...c()(g.imagesByKey)))
				} catch (M) {
					return !1
				}
				const w = await (async (e, t, n, o) => Object(m.a)(Object(b.a)(e, [f.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${n}`,
						method: p.jb.PUT,
						data: o
					}))(d(), k.name, t, T),
					I = S ? "edit_post_flair_template" : "save_post_flair_template",
					F = Object(h.e)(u, I);
				if (w.ok) {
					let e;
					if (y) try {
						await y, e = ((e, t, n) => {
							const o = {
								...e
							};
							return t.forEach(e => {
								const t = n.imageUploads[e.id];
								t && t.kind === x.b.Uploaded && (e.url === o.postBackgroundImage ? o.postBackgroundImage = t.url : e.url === o.postPlaceholderImage && (o.postPlaceholderImage = t.url))
							}), o
						})(T, P, r())
					} catch (M) {
						e = null
					} else e = T;
					o(C({
						flairId: t,
						template: e || T
					}))
				} else g && g.websocket.close();
				return Object(O.a)({
					...F,
					actionInfo: {
						...F.actionInfo,
						success: w.ok
					}
				}), w.ok
			}, T = "POSTFLAIR_STYLETEMPLATE_DELETED_SUCCESS", k = Object(d.a)(T), S = (e, t) => async (n, o, {
				apiContext: s
			}) => {
				const r = o(),
					a = Object(_.R)(r, {
						subredditId: e
					});
				if (!a) return !1;
				const i = await (async (e, t, n) => Object(m.a)(Object(b.a)(e, [f.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${n}`,
						method: p.jb.DELETE
					}))(s(), a.name, t),
					c = Object(h.e)(r, "delete_flair_template");
				return i.ok && n(k({
					flairId: t
				})), Object(O.a)({
					...c,
					actionInfo: {
						...c.actionInfo,
						success: i.ok
					}
				}), i.ok
			}
		},
		"./src/reddit/components/BadgeCounter/index.m.less": function(e, t, n) {
			e.exports = {
				badgeCounter: "_1-nIsCaWhGBFN-L4ZHnbGp",
				mEmpty: "_3FX9lCQKNdKXkfBiSWCjSb"
			}
		},
		"./src/reddit/components/BadgeCounter/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/components/BadgeCounter/index.m.less"),
				c = n.n(i);
			t.a = ({
				className: e,
				isActive: t,
				showEmpty: n,
				unreadCount: o
			}) => t ? s.a.createElement("span", {
				className: Object(r.a)(e, c.a.badgeCounter, {
					[c.a.mEmpty]: n || o < 1
				})
			}, n || o < 1 ? "" : Object(a.b)(o)) : null
		},
		"./src/reddit/components/Emoji/index.m.less": function(e, t, n) {
			e.exports = {
				EmojiDisplay: "_2Gt13AX94UlLxkluAMsZqP",
				emojiDisplay: "_2Gt13AX94UlLxkluAMsZqP"
			}
		},
		"./src/reddit/components/Flair/index.m.less": function(e, t, n) {
			e.exports = {
				FlairEmojiDisplay: "_1QwShihKKlyRXyQSlqYaWW",
				flairEmojiDisplay: "_1QwShihKKlyRXyQSlqYaWW",
				FlairWrapper: "_2X6EB3ZhEeXCh1eIVA64XM",
				flairWrapper: "_2X6EB3ZhEeXCh1eIVA64XM",
				TextFlair: "_1jNPl3YUk6zbpLWdjaJT1r",
				textFlair: "_1jNPl3YUk6zbpLWdjaJT1r",
				transparentBackgroundColor: "_39BEcWjOlYi1QGcJil6-yl",
				RichTextFlair: "_2hSecp_zkPm_s5ddV2htoj",
				richTextFlair: "_2hSecp_zkPm_s5ddV2htoj",
				MetaFlair: "_1wzhGvvafQFOWAyA157okr",
				metaFlair: "_1wzhGvvafQFOWAyA157okr",
				CloseButton: "_3BPVpMSn5b1vb1yTQuqCRH",
				closeButton: "_3BPVpMSn5b1vb1yTQuqCRH",
				CloseIcon: "_2cvySYWkqJfynvXFOpNc5L",
				closeIcon: "_2cvySYWkqJfynvXFOpNc5L",
				small: "aJrgrewN9C8x1Fusdx4hh",
				large: "_1wj6zoMi6hRP5YhJ8nXWXE",
				flairVariant: "_2VqfzH0dZ9dIl3XWNxs42y"
			}
		},
		"./src/reddit/components/Flair/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return B
			})), n.d(t, "a", (function() {
				return U
			})), n.d(t, "b", (function() {
				return J
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/pick.js"),
				r = n.n(s),
				a = n("./node_modules/polished/dist/polished.es.js"),
				i = n("./node_modules/react/index.js"),
				c = n.n(i),
				d = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				l = n("./src/lib/addQueryParams/index.ts"),
				u = n("./src/lib/classNames/index.ts"),
				p = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = n("./src/lib/lessComponent.tsx"),
				b = n("./src/reddit/components/Emoji/index.m.less"),
				f = n.n(b);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const x = m.a.wrapped(({
				backgroundImage: e,
				style: t,
				...n
			}) => c.a.createElement("div", h({
				style: {
					...t || {},
					backgroundImage: `url('${e}')`
				}
			}, n)), "EmojiDisplay", f.a);
			var _ = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				O = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				j = n("./src/reddit/constants/colors.ts"),
				E = n("./src/reddit/constants/parameters.ts"),
				C = n("./src/reddit/controls/InternalLink/index.tsx"),
				v = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				T = n("./src/reddit/icons/svgs/Close/index.tsx"),
				k = n("./src/reddit/models/Flair/index.ts"),
				S = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				g = n("./src/reddit/components/Flair/index.m.less"),
				y = n.n(g);

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const w = Object(O.a)(_.b),
				I = m.a.div("FlairWrapper", y.a),
				F = m.a.wrapped(d.a, "CloseButton", y.a),
				M = m.a.wrapped(Object(p.a)(({
					forceSmallEmojis: e,
					theme: t,
					...n
				}) => {
					const o = t;
					return c.a.createElement(x, P({
						style: {
							...N(!!e, o) || {}
						}
					}, n))
				}), "FlairEmojiDisplay", y.a),
				N = (e, t) => {
					if (!e && !!t.subredditContext.emojiHeight && !!t.subredditContext.emojiWidth) return {
						height: `${t.subredditContext.emojiHeight}px`,
						width: `${t.subredditContext.emojiWidth}px`
					}
				},
				R = (e, t) => {
					const n = t ? `/r/${t}/search` : "/search",
						o = `${t?"flair_name":"flair"}:"${e}"`;
					return Object(l.a)(n, {
						[E.q]: o,
						[E.t]: t ? "1" : ""
					})
				},
				L = e => e.isFlairFilter ? c.a.createElement(C.a, {
					onMouseDown: e.onMouseDown,
					to: e.to || ""
				}, e.flair) : e.onClick ? c.a.createElement(C.a, {
					onClick: () => e.onClick(e.searchableTerm),
					to: R(e.searchableTerm, e.subredditName)
				}, e.flair) : e.flair;
			class D extends c.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.state = {
						isTooltipOpen: !1
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.setState({
							isTooltipOpen: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							isTooltipOpen: !1
						})
					}
				}
				render() {
					const e = c.a.createElement("span", {
						className: Object(u.a)(this.props.className, {
							[y.a.transparentBackgroundColor]: "transparent" === this.props.backgroundColor
						}),
						onMouseEnter: this.props.tooltip ? this.onShowTooltip : void 0,
						onMouseLeave: this.props.tooltip ? this.onHideTooltip : void 0,
						ref: this.setTooltipTargetRef,
						style: {
							backgroundColor: this.props.backgroundColor || Object(S.a)(this.props).flair,
							color: `${B(this.props)}`
						}
					}, this.props.text, this.props.isSelected && c.a.createElement(F, {
						to: "./",
						onClick: this.props.onCloseClick
					}, c.a.createElement(T.a, {
						className: y.a.CloseIcon,
						style: {
							fill: this.props.backgroundColor || Object(S.a)(this.props).flair
						}
					})), !!this.props.tooltip && c.a.createElement(w, {
						text: this.props.tooltip,
						isOpen: this.state.isTooltipOpen,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: ["center", "top"],
						tooltipPosition: ["center", "bottom"]
					}));
					return c.a.createElement(L, {
						flair: e,
						isFlairFilter: this.props.isFlairFilter,
						onClick: this.props.onClick,
						onMouseDown: this.props.onMouseDown,
						searchableTerm: this.props.text,
						subredditName: this.props.subredditName,
						to: this.props.to
					})
				}
			}
			const A = Object(p.a)(D),
				W = Object(p.a)(e => {
					let t = "",
						n = !1;
					const o = e.richtext.map((o, s) => {
						if (o.e === k.c.Emoji) {
							const r = o;
							return t += r.a, n = !0, c.a.createElement(M, {
								forceSmallEmojis: e.forceSmallEmojis,
								backgroundImage: r.u,
								key: s,
								title: r.a
							})
						} {
							const e = o;
							return t += e.t, c.a.createElement("span", {
								key: s
							}, e.t)
						}
					});
					let s;
					n && !e.forceSmallEmojis && e.theme && e.theme.subredditContext.emojiWidth && e.theme.subredditContext.emojiHeight && e.theme.subredditContext.emojiHeight > 16 && (s = {
						marginTop: `-${e.theme.subredditContext.emojiHeight-16}px`
					});
					const r = c.a.createElement(I, {
						className: Object(u.a)(e.className, {
							[y.a.transparentBackgroundColor]: "transparent" === e.backgroundColor
						}),
						style: {
							...s,
							backgroundColor: e.backgroundColor || Object(S.a)(e).flair,
							color: `${B(e)}`
						}
					}, o, e.isSelected && c.a.createElement(F, {
						to: "./",
						onClick: e.onCloseClick
					}, c.a.createElement(T.a, {
						className: y.a.CloseIcon,
						style: {
							fill: e.backgroundColor || Object(S.a)(e).flair
						}
					})));
					return c.a.createElement(L, {
						flair: r,
						isFlairFilter: e.isFlairFilter,
						onClick: e.onClick ? () => {
							e.onClick(t)
						} : void 0,
						onMouseDown: e.onMouseDown,
						searchableTerm: t,
						subredditName: e.subredditName,
						to: e.to
					})
				}),
				B = e => !e.textColor || e.textColor && !e.backgroundColor ? Object(S.a)(e).postFlairText : "transparent" === e.backgroundColor ? Object(v.a)(Object(S.a)(e).post, j.a.black, j.a.white) : e.textColor === k.e.Dark ? j.a.black : j.a.white,
				U = m.a.wrapped(A, "TextFlair", y.a),
				V = m.a.wrapped(W, "RichTextFlair", y.a),
				H = e => {
					switch (e.type) {
						case "spoiler":
							return "#A4A7A8";
						case "nsfw":
							return "#FF585B";
						default:
							return Object(a.i)(.1, Object(S.a)(r()(e, "theme", "redditStyle", "data-redditstyle")).button)
					}
				},
				G = m.a.wrapped(e => {
					const t = H(e),
						n = c.a.createElement("span", {
							className: e.className,
							style: {
								border: `1px solid ${t}`,
								color: t
							}
						}, e.text);
					return c.a.createElement(L, {
						flair: n,
						searchableTerm: e.text
					})
				}, "MetaFlair", y.a);

			function J(e) {
				const {
					className: t,
					disabled: n = !1,
					flair: s,
					isFlairFilter: r,
					isSelected: a,
					onClick: i,
					onCloseClick: d,
					onMouseDown: l,
					subredditName: p,
					usesCommunityStyles: m,
					forceSmallEmojis: b,
					to: f
				} = e, h = Object(u.a)({
					[y.a.flairVariant]: r,
					[y.a.small]: r && !e.large,
					[y.a.large]: r && e.large
				}, t);
				switch (s.type) {
					case k.f.Richtext:
						return n || !s.richtext ? null : c.a.createElement(V, {
							backgroundColor: s.backgroundColor,
							className: h,
							forceSmallEmojis: b,
							isFlairFilter: r,
							isSelected: a,
							onClick: i,
							onCloseClick: d,
							onMouseDown: l,
							redditStyle: !m,
							richtext: s.richtext,
							subredditName: p,
							textColor: s.textColor,
							to: f
						});
					case k.f.Text:
						return n || !s.text ? null : c.a.createElement(U, {
							backgroundColor: s.backgroundColor,
							className: h,
							isFlairFilter: r,
							isSelected: a,
							onClick: i,
							onCloseClick: d,
							onMouseDown: l,
							subredditName: p,
							text: s.text,
							textColor: s.textColor,
							redditStyle: !m,
							to: f
						});
					case k.f.Meta:
						return c.a.createElement(U, {
							backgroundColor: s.backgroundColor,
							className: t,
							isFlairFilter: r,
							subredditName: p,
							text: s.text,
							textColor: s.textColor,
							redditStyle: !m,
							to: f
						});
					case k.f.Nsfw:
					case k.f.Spoiler:
						return c.a.createElement(G, {
							className: t,
							text: s.text,
							type: s.type
						});
					case k.f.Quarantined:
						return null;
					case k.f.Oc:
						return c.a.createElement(U, {
							backgroundColor: j.a.alienblue,
							text: s.text,
							textColor: k.e.Light,
							tooltip: o.fbt._("This post is marked as Original Content [OC]", null, {
								hk: "h7je6"
							})
						});
					default:
						return s.text ? c.a.createElement(U, {
							backgroundColor: s.backgroundColor,
							className: h,
							isFlairFilter: r,
							onClick: i,
							onCloseClick: d,
							onMouseDown: l,
							subredditName: p,
							text: s.text,
							redditStyle: !m,
							to: f
						}) : null
				}
			}
		},
		"./src/reddit/components/FlairPickerTitle/index.m.less": function(e, t, n) {
			e.exports = {
				modalHeader: "_26bOTAKvGixX5tMC3vGfTv"
			}
		},
		"./src/reddit/components/FlairPickerTitle/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/lodash/noop.js"),
				s = n.n(o),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = n("./src/reddit/controls/TextButton/index.tsx"),
				d = n("./src/reddit/components/FlairPickerTitle/index.m.less"),
				l = n.n(d);
			t.a = e => a.a.createElement(i.i, {
				className: l.a.modalHeader
			}, a.a.createElement(i.q, null, e.title), a.a.createElement(c.a, {
				onClick: e.onClosePressed || s.a
			}, a.a.createElement(i.b, null)))
		},
		"./src/reddit/components/FlairPickerWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_3nRJIwLuth2pKYrXnr2jPN",
				wrapper: "_3nRJIwLuth2pKYrXnr2jPN"
			}
		},
		"./src/reddit/components/FlairPickerWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/components/FlairPickerWrapper/index.m.less"),
				r = n.n(s);
			const a = o.a.div("Wrapper", r.a);
			t.a = a
		},
		"./src/reddit/components/FlairPreview/index.m.less": function(e, t, n) {
			e.exports = {
				Placeholder: "_30zvTaAcvBFmwfelq6Bvwg",
				placeholder: "_30zvTaAcvBFmwfelq6Bvwg",
				SelectedFlair: "BzonfS85jX2JTiu_i0Jyd",
				selectedFlair: "BzonfS85jX2JTiu_i0Jyd",
				FlairComponent: "vynkb69RQyUY-PA6bCaW0",
				flairComponent: "vynkb69RQyUY-PA6bCaW0"
			}
		},
		"./src/reddit/components/FlairPreview/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/Flair/index.tsx"),
				c = n("./src/reddit/components/FlairPreview/index.m.less"),
				d = n.n(c);
			const l = a.a.span("Placeholder", d.a),
				u = a.a.div("SelectedFlair", d.a),
				p = a.a.wrapped(i.b, "FlairComponent", d.a);
			t.a = e => e.flair ? r.a.createElement(u, null, r.a.createElement(l, null, o.fbt._("{placeholder}", [o.fbt._param("placeholder", e.placeholderText)], {
				hk: "4G6VRy"
			})), r.a.createElement(p, {
				flair: e.flair,
				forceSmallEmojis: !0
			})) : r.a.createElement(u, null, o.fbt._("No flair selected", null, {
				hk: "1XPXbv"
			}))
		},
		"./src/reddit/components/FlairSearch/FlairEdit/helper.m.less": function(e, t, n) {
			e.exports = {
				FlairEditStub: "Z7x0t_45z9vZGN2zw6US6",
				flairEditStub: "Z7x0t_45z9vZGN2zw6US6",
				isCompact: "_3YjPWOd9tK9O_DN50RI_FN"
			}
		},
		"./src/reddit/components/FlairSearch/FlairEdit/helper.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var o = n("./node_modules/lodash/once.js"),
				s = n.n(o),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./src/higherOrderComponents/makeAsync.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/lib/loadWithRetries/index.ts"),
				u = n("./src/reddit/components/FlairSearch/FlairEdit/helper.m.less"),
				p = n.n(u);
			const m = d.a.wrapped(e => a.a.createElement("div", {
					className: Object(c.a)(e.className, {
						[p.a.isCompact]: e.isCompact
					})
				}), "FlairEditStub", p.a),
				b = s()((e = m) => Object(i.a)({
					getComponent: () => Object(l.a)(() => Promise.all([n.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), n.e("FlairEdit")]).then(n.bind(null, "./src/reddit/components/FlairSearch/FlairEdit/index.tsx")).then(e => e.default)),
					ErrorComponent: e,
					LoadingComponent: e
				}))
		},
		"./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1bdAduczElF9-gLoCvHz-p",
				flairComponent: "_2leID3tMN8hpvVd4XhEqTl",
				radioOption: "FJIE5E2gciCA8q3Jzvcyg",
				pencil: "_3H_wwe03-Fkrm6oWGakXI8",
				searchBoxWrapper: "_18cuM8Uu7RcIFu1bCT0r4t",
				searchIcon: "_2bECVWL_WJ9RGBx7-RnzfO",
				searchInput: "_1nQbRaoAvb6Uy0oI-OfDtZ"
			}
		},
		"./src/reddit/components/FlairSearch/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2AKP6aCod0Z6TuXXfc1ZqL",
				buttonsRow: "_3w7b_fPwMuVD17J7epjTXi",
				clearButton: "_3WykjMvdVO5xibqd5xlfTC",
				flairEditSection: "SVd7IxchgiWetdYbftTHx",
				editLabel: "KTa3kg9lzGPUeLuhAHMT_",
				restrictionHintText: "_1fV9kJfKnED9qQ2AF8f3iT"
			}
		},
		"./src/reddit/components/FlairSearch/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/memoizeByReference/index.ts"),
				l = n("./src/reddit/featureFlags/index.ts"),
				u = n("./src/reddit/helpers/flair.ts"),
				p = n("./src/reddit/helpers/trackers/userFlair.ts"),
				m = n("./src/reddit/hooks/useTracking.ts"),
				b = n("./src/reddit/selectors/moderatorPermissions.ts"),
				f = n("./src/reddit/components/FlairSearch/FlairEdit/helper.tsx"),
				h = n("./src/reddit/components/Flair/index.tsx"),
				x = n("./src/reddit/components/TrackingHelper/index.tsx"),
				_ = n("./src/reddit/controls/RadioInput/index.tsx"),
				O = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				j = n("./src/reddit/helpers/trackers/postComposer.ts"),
				E = n("./src/reddit/icons/svgs/Pencil/index.tsx"),
				C = n("./src/reddit/icons/svgs/Search/index.tsx"),
				v = n("./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less"),
				T = n.n(v);
			class k extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						searchQuery: ""
					}, this.onSearchChange = e => {
						this.setState({
							searchQuery: e.target.value
						})
					}, this.onSearchClick = () => {
						this.props.sendEvent(Object(j.n)())
					}
				}
				render() {
					const {
						templates: e,
						templateIds: t,
						selectedTemplateId: n
					} = this.props, {
						searchQuery: s
					} = this.state, a = t.map(t => e[t]).filter(e => e.text.toLowerCase().includes(s)), i = !!n && a.some(e => e.id === n);
					return r.a.createElement("div", {
						className: T.a.container
					}, r.a.createElement("div", {
						className: T.a.searchBoxWrapper
					}, r.a.createElement("input", {
						className: T.a.searchInput,
						onChange: this.onSearchChange,
						onClick: this.onSearchClick,
						type: "text",
						placeholder: o.fbt._("Search for flair", null, {
							hk: "jQdqA"
						}),
						value: s
					}), r.a.createElement(C.a, {
						className: T.a.searchIcon
					})), r.a.createElement(_.a, {
						name: "flair_picker",
						onChange: this.props.onChange,
						value: n
					}, a.map((e, t) => {
						const o = Object(u.c)(e),
							s = n === e.id || !i && 0 === t;
						return r.a.createElement(O.a, {
							className: T.a.radioOption,
							key: e.id,
							showButton: !0,
							tabIndex: s ? 0 : -1,
							value: e.id
						}, r.a.createElement(h.b, {
							className: T.a.flairComponent,
							flair: o,
							forceSmallEmojis: !0
						}), e.textEditable && r.a.createElement(E.a, {
							className: T.a.pencil
						}))
					})))
				}
			}
			var S = Object(x.c)(k),
				g = n("./src/reddit/components/FlairSearch/index.m.less"),
				y = n.n(g);
			const P = Object(d.a)(e => e && Object(u.c)(e)),
				w = Object(i.c)({
					areFlairRestrictionsEnabled: l.d.flairRestrictions,
					isModerator: b.g
				}),
				I = Object(a.b)(w);
			t.a = I(e => {
				const {
					flairTemplateType: t,
					flair: n,
					className: s,
					onChange: a,
					subredditId: i,
					templates: d,
					templateIds: l,
					areFlairRestrictionsEnabled: b,
					isModerator: h
				} = e, x = Object(m.a)(), _ = d && n && n.templateId && d[n.templateId] || void 0, O = Object(f.a)(), j = n || P(_);
				return r.a.createElement("div", {
					className: Object(c.a)(s, y.a.container)
				}, d && l && r.a.createElement(S, {
					flairTemplateType: t,
					onChange: e => {
						if (d) {
							const t = d[e],
								n = Object(u.c)(t);
							x(Object(p.b)({
								userFlair: t
							})), a(n)
						}
					},
					selectedTemplateId: _ ? _.id : "",
					templateIds: l,
					templates: d
				}), j && _ && (h || _.textEditable) && r.a.createElement("div", {
					className: y.a.flairEditSection
				}, r.a.createElement("div", {
					className: y.a.editLabel
				}, o.fbt._("Edit flair", null, {
					hk: "1APWWu"
				})), b && r.a.createElement("div", {
					className: y.a.restrictionHintText
				}, Object(u.k)(_)), r.a.createElement(O, {
					autofocus: !0,
					emojiPickerId: "FlairSearch-EmojiPicker-DropdownId",
					flair: j,
					flairTemplate: _,
					flairTemplateType: t,
					isFlairModOnly: _.modOnly,
					onChange: e => {
						const t = d && e.templateId ? d[e.templateId] : void 0;
						let n = e;
						t && (n = Object(u.d)({
							flair: e,
							template: t,
							ignoreTextAllowance: !0
						})), a(n)
					},
					subredditId: i
				})))
			})
		},
		"./src/reddit/components/InfoTextTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				BottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				bottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				Text: "HQ2VJViRjokXpRbJzPvvc",
				text: "HQ2VJViRjokXpRbJzPvvc",
				"fade-in": "_1tIZttmhLdrIGrB-6VvZcT",
				fadeIn: "_1tIZttmhLdrIGrB-6VvZcT"
			}
		},
		"./src/reddit/components/InfoTextTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return h
			})), n.d(t, "a", (function() {
				return x
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = n("./src/reddit/selectors/tooltip.ts"),
				l = n("./src/reddit/components/InfoTextTooltip/index.m.less"),
				u = n.n(l),
				p = n("./src/lib/lessComponent.tsx");

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const b = p.a.div("Text", u.a),
				f = p.a.div("BottomText", u.a),
				h = e => s.a.createElement(b, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				x = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return s.a.createElement(f, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				_ = Object(a.c)({
					isOpen: (e, {
						tooltipId: t
					}) => Object(d.b)(t)(e)
				}),
				O = Object(c.a)(x, [i.a.Click, i.a.Keydown]),
				j = Object(c.a)(h, [i.a.Click, i.a.Keydown]),
				E = Object(r.b)(_);
			t.c = E(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? s.a.createElement(O, m({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : s.a.createElement(j, m({}, e, {
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				}))
			})
		},
		"./src/reddit/components/ModModeReports/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			const o = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				s = e => {
					if (e.numReports && e.numReports > 0) return e.numReports;
					return (e.modReportsDismissed && e.modReportsDismissed.length || 0) + (e.userReportsDismissed && e.userReportsDismissed.length || 0)
				},
				r = e => (e.numReports || 0) > 0
		},
		"./src/reddit/components/ModToolsFlatlist/breakpoints.m.less": function(e, t, n) {
			e.exports = {
				HideIfVWSmaller: "_3_rOJpfw54EqNa6daNkKzY",
				hideIfVwSmaller: "_3_rOJpfw54EqNa6daNkKzY",
				ApproveGroup: "LoIAKSBD5_isA5qtrC3Kt",
				approveGroup: "LoIAKSBD5_isA5qtrC3Kt",
				DefaultVariant: "_1LDTBaBSnv4jL7lV98ayQL",
				defaultVariant: "_1LDTBaBSnv4jL7lV98ayQL",
				CompactVariant: "_2SLG9GIeu2AqBhz2XpW8ow",
				compactVariant: "_2SLG9GIeu2AqBhz2XpW8ow",
				ClassicVariant: "_1u3Z1cqZ8_083AStFVo71a",
				classicVariant: "_1u3Z1cqZ8_083AStFVo71a",
				RemoveGroup: "_3LzZxt89CjBbx__WYlCPCh",
				removeGroup: "_3LzZxt89CjBbx__WYlCPCh",
				SpamGroup: "_2WaHNFliLea9SKyF3nlBx8",
				spamGroup: "_2WaHNFliLea9SKyF3nlBx8",
				FlairGroup: "_129dedXMiIcel_grUelwoG",
				flairGroup: "_129dedXMiIcel_grUelwoG",
				HideIfVWLarger: "_1RO0TIeDG89QPdOWgZwUvR",
				hideIfVwLarger: "_1RO0TIeDG89QPdOWgZwUvR",
				ButtonTextWrapper: "_2xZQ73fYkUDMcVkB0PnaU9",
				buttonTextWrapper: "_2xZQ73fYkUDMcVkB0PnaU9"
			}
		},
		"./src/reddit/components/ModToolsFlatlist/constants.ts": function(e, t, n) {
			"use strict";
			var o;
			n.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.Flair = "FLAIR", e.Spam = "SPAM", e.Remove = "REMOVE", e.Approve = "APPROVE"
				}(o || (o = {}))
		},
		"./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "c", (function() {
				return h
			}));
			var o, s, r, a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				c = n("./src/reddit/constants/postLayout.ts"),
				d = n("./src/reddit/components/ModToolsFlatlist/breakpoints.m.less"),
				l = n.n(d),
				u = n("./src/reddit/components/ModToolsFlatlist/index.m.less"),
				p = n.n(u);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(o || (o = {})),
			function(e) {
				e.Approve = "ApproveGroup", e.Remove = "RemoveGroup", e.Spam = "SpamGroup", e.Flair = "FlairGroup"
			}(s || (s = {})),
			function(e) {
				e.Classic = "ClassicVariant", e.Compact = "CompactVariant", e.Default = "DefaultVariant"
			}(r || (r = {}));
			const m = {
					[i.a.Approve]: s.Approve,
					[i.a.Remove]: s.Remove,
					[i.a.Spam]: s.Spam,
					[i.a.Flair]: s.Flair
				},
				b = {
					[c.g.Classic]: r.Classic,
					[c.g.Compact]: r.Compact,
					[c.g.Large]: r.Default,
					[c.g.Medium]: r.Default,
					[c.g.Search]: r.Default
				},
				f = e => {
					const t = m[e.flatlistItem],
						n = e.postLayout && b[e.postLayout],
						o = l.a[e.breakpointType],
						s = l.a[t],
						i = n ? l.a[n] : l.a[r.Default];
					return Object(a.a)(o, s, i)
				},
				h = e => {
					const t = e && b[e],
						n = t ? l.a[t] : l.a[r.Default];
					return Object(a.a)(n, p.a.ButtonTextWrapper, l.a.ButtonTextWrapper)
				}
		},
		"./src/reddit/components/ModToolsFlatlist/index.m.less": function(e, t, n) {
			e.exports = {
				container: "OccjSdFd6HkHhShRg6DOl",
				tooltip: "_2a9swcTo72vLia4mUm08Fk",
				ButtonTextWrapper: "_3kA8j4bWXyfQV-T-H2dkNq",
				buttonTextWrapper: "_3kA8j4bWXyfQV-T-H2dkNq"
			}
		},
		"./src/reddit/components/ModalStyledComponents/index.m.less": function(e, t, n) {
			e.exports = {
				CloseIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				closeIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				ModalBody: "_2R3RlhymCOkPrz9TusvcPq",
				modalBody: "_2R3RlhymCOkPrz9TusvcPq",
				ModalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				modalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				ModalText: "mFTHPdbEAklUs8yhT4Xm7",
				modalText: "mFTHPdbEAklUs8yhT4Xm7",
				ModalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				modalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				ModalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				modalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				ModalMetaText: "_27eskYssCs-urVW1uHI4YI",
				modalMetaText: "_27eskYssCs-urVW1uHI4YI",
				ModalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				modalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				ModalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				modalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				ModalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				modalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				ModalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				modalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				ModalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				modalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				ModalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				modalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				ModalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				modalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				ModalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				modalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				TextArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				textArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				WarningButton: "_17UyTSs2atqnKg9dIq5ERg",
				warningButton: "_17UyTSs2atqnKg9dIq5ERg",
				PrimaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				primaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				CancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				cancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				RemoveButton: "_2ulRgczjI5SWCMgSA1CNLj",
				removeButton: "_2ulRgczjI5SWCMgSA1CNLj",
				ConfirmButton: "JZC61-VzVuaiHdWuRUiSC",
				confirmButton: "JZC61-VzVuaiHdWuRUiSC"
			}
		},
		"./src/reddit/components/ModalStyledComponents/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return m
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "n", (function() {
				return f
			})), n.d(t, "p", (function() {
				return h
			})), n.d(t, "o", (function() {
				return x
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "m", (function() {
				return O
			})), n.d(t, "h", (function() {
				return j
			})), n.d(t, "j", (function() {
				return E
			})), n.d(t, "k", (function() {
				return C
			})), n.d(t, "g", (function() {
				return v
			})), n.d(t, "i", (function() {
				return T
			})), n.d(t, "q", (function() {
				return k
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "l", (function() {
				return g
			})), n.d(t, "t", (function() {
				return y
			})), n.d(t, "u", (function() {
				return P
			})), n.d(t, "r", (function() {
				return w
			})), n.d(t, "a", (function() {
				return I
			})), n.d(t, "s", (function() {
				return F
			})), n.d(t, "c", (function() {
				return M
			}));
			var o = n("./src/lib/classNames/index.ts"),
				s = n("./src/lib/lessComponent.tsx"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/controls/Input/ModalInput.tsx"),
				d = n("./src/reddit/icons/svgs/Close/index.tsx"),
				l = n("./src/reddit/components/ModalStyledComponents/index.m.less"),
				u = n.n(l);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const m = s.a.wrapped(d.a, "CloseIcon", u.a),
				b = s.a.section("ModalBody", u.a),
				f = s.a.section("ModalPostPreview", u.a),
				h = s.a.p("ModalText", u.a),
				x = s.a.div("ModalSmallText", u.a),
				_ = s.a.div("ModalDescriptionText", u.a),
				O = s.a.div("ModalMetaText", u.a),
				j = s.a.label("ModalFormItem", u.a),
				E = s.a.wrapped(c.a, "ModalInput", u.a),
				C = s.a.label("ModalInputLabel", u.a),
				v = s.a.footer("ModalFooter", u.a),
				T = s.a.header("ModalHeader", u.a),
				k = s.a.div("ModalTitle", u.a),
				S = s.a.div("ModalAnnotation", u.a),
				g = s.a.div("ModalMain", u.a),
				y = s.a.textarea("TextArea", u.a),
				P = s.a.wrapped(i.l, "WarningButton", u.a),
				w = s.a.wrapped(i.l, "PrimaryButton", u.a),
				I = s.a.wrapped(i.o, "CancelButton", u.a),
				F = s.a.wrapped(i.r, "RemoveButton", u.a),
				M = ({
					className: e,
					...t
				}) => a.a.createElement(i.t, p({
					kind: i.b.Button,
					priority: i.c.Primary,
					className: Object(o.a)(u.a.ConfirmButton, e)
				}, t))
		},
		"./src/reddit/components/ModerationDropdown/_ModerationDropdown.m.less": function(e, t, n) {
			e.exports = {
				StyledDropdown: "_3WeRItzSNTP8PlJhYPlcOV",
				styledDropdown: "_3WeRItzSNTP8PlJhYPlcOV",
				Separator: "_25jFfk04fRizfTaV4T8_fC",
				separator: "_25jFfk04fRizfTaV4T8_fC",
				IconWrapper: "_3sg-oQTG-KtWNGZEzdlnV9",
				iconWrapper: "_3sg-oQTG-KtWNGZEzdlnV9",
				BadgeCounter: "O2gjjKs4ae_nDFlxL3cbh",
				badgeCounter: "O2gjjKs4ae_nDFlxL3cbh"
			}
		},
		"./src/reddit/components/ModerationDropdown/_ModerationDropdown.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "default", (function() {
				return j
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/higherOrderComponents/asTooltip.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/BadgeCounter/index.tsx"),
				l = n("./src/reddit/controls/Dropdown/index.tsx"),
				u = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx"),
				p = n("./src/reddit/icons/fonts/index.tsx"),
				m = n("./src/reddit/components/ModerationDropdown/index.tsx"),
				b = n("./src/reddit/components/ModerationDropdown/_ModerationDropdown.m.less"),
				f = n.n(b);
			const h = c.a.wrapped(l.a, "StyledDropdown", f.a),
				x = Object(a.a)(h),
				_ = c.a.div("Separator", f.a),
				O = (e, t) => n => r.a.createElement("span", {
					className: Object(i.a)(f.a.IconWrapper, n.className)
				}, r.a.createElement(d.a, {
					className: f.a.BadgeCounter,
					isActive: t,
					unreadCount: -1,
					showEmpty: !0
				}), r.a.createElement(p.a, {
					name: e
				}));

			function j(e) {
				const {
					className: t,
					unreadNotifications: n,
					isOpen: s,
					sendEventWithName: a
				} = e, i = Object(u.c)(Object(p.b)("mod_queue"), `${o.fbt._("Mod Queue",null,{hk:"2fqLkD"})}`), c = Object(u.b)(O("message", n.hasUnreadModmail), `${o.fbt._("Modmail",null,{hk:"1IvnFd"})}`);
				return r.a.createElement("div", {
					className: t
				}, r.a.createElement(x, {
					isFixed: !0,
					isOpen: s,
					tooltipId: m.a
				}, r.a.createElement(i, {
					href: "/r/mod/about/modqueue",
					onClick: () => a("mod_queue")
				}), r.a.createElement(_, null), r.a.createElement(c, {
					href: "https://mod.reddit.com/mail/all",
					isLit: n.hasUnreadModmail,
					onClick: () => a("mod_mail")
				}), r.a.createElement(_, null)))
			}
		},
		"./src/reddit/components/ModerationDropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./src/higherOrderComponents/makeAsync.tsx"),
				s = n("./src/lib/loadWithRetries/index.ts");
			const r = "Header--Moderation",
				a = () => null;
			t.b = Object(o.a)({
				ErrorComponent: a,
				getComponent: () => Object(s.a)(() => n.e("ModerationDropdowns").then(n.bind(null, "./src/reddit/components/ModerationDropdown/_ModerationDropdown.tsx"))).then(e => e.default),
				LoadingComponent: a
			})
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/higherOrderComponents/asTooltip.tsx"),
				a = n("./src/reddit/constants/elementIds.ts"),
				i = n("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				const n = Object(r.a)(e, t);
				class o extends s.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(a.d);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return s.a.createElement(n, c({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(i.b)(o)
			}
		},
		"./src/reddit/components/PostFlairPicker/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			}));
			var o = n("./node_modules/lodash/isEqual.js"),
				s = n.n(o),
				r = n("./src/reddit/constants/flair.ts"),
				a = n("./src/reddit/helpers/flair.ts"),
				i = n("./src/reddit/models/Flair/index.ts");
			const c = e => (e || []).find(e => e.type === i.f.Text || e.type === i.f.Image || e.type === i.f.Richtext);
			var d;
			! function(e) {
				e[e.InvalidTemplate = 0] = "InvalidTemplate", e[e.NoChanges = 1] = "NoChanges", e[e.NotSelected = 2] = "NotSelected", e[e.TextIsNotAllowed = 3] = "TextIsNotAllowed", e[e.TextIsEmpty = 4] = "TextIsEmpty", e[e.TextIsTooLong = 5] = "TextIsTooLong"
			}(d || (d = {}));
			const l = (e, t, n) => {
				if (n && !t) return {
					canSave: !0
				};
				if (!t) return {
					canSave: !1,
					reason: d.NotSelected
				};
				const o = e && t.templateId ? e[t.templateId] : void 0;
				if (!o) return {
					canSave: !1,
					reason: d.InvalidTemplate
				};
				const i = Object(a.g)(t).length;
				return 0 === i ? {
					canSave: !1,
					reason: d.TextIsEmpty
				} : i > r.g ? {
					canSave: !1,
					reason: d.TextIsTooLong
				} : Object(a.n)(t) && !Object(a.r)(o) ? {
					canSave: !1,
					reason: d.TextIsNotAllowed
				} : s()(n, t) ? {
					canSave: !1,
					reason: d.NoChanges
				} : {
					canSave: !0
				}
			}
		},
		"./src/reddit/components/PostFlairPicker/index.m.less": function(e, t, n) {
			e.exports = {
				buttonsRow: "cF9DU_4WDAKS4gs43ct2_",
				clearButton: "_3vB6Y9PiwJ0YV6c9MGbDwT"
			}
		},
		"./src/reddit/components/PostFlairPicker/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return T
			}));
			var o, s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/higherOrderComponents/asModal/index.tsx"),
				u = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/components/FlairPickerTitle/index.tsx"),
				m = n("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				b = n("./src/reddit/components/FlairPreview/index.tsx"),
				f = n("./src/reddit/components/FlairSearch/index.tsx"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				x = n("./src/reddit/helpers/trackers/postComposer.ts"),
				_ = n("./src/reddit/models/Flair/index.ts"),
				O = n("./src/reddit/selectors/postFlair.ts"),
				j = n("./src/reddit/selectors/subreddit.ts"),
				E = n("./src/reddit/components/PostFlairPicker/helpers.ts"),
				C = n("./src/reddit/components/PostFlairPicker/index.m.less"),
				v = n.n(C);
			! function(e) {
				e.UNSET = "unset", e.MOD_FLATLIST = "postModFlatlist", e.POST_OVERFLOW = "postOverlay"
			}(o || (o = {}));
			const T = (e, t = !1, n = o.UNSET) => `PostFlair__Modal-[postId: ${e}]-isOverlay[${t}]-position[${n}]`,
				k = Object(c.c)({
					flairData: O.d,
					subreddit: j.R
				});
			class S extends a.a.Component {
				constructor(e) {
					super(e), this.trackEvent = () => {
						this.props.sendEvent(Object(x.F)(this.props.subredditId))
					}, this.onApply = () => {
						const {
							previewFlair: e
						} = this.state, t = e && e.templateId;
						this.props.onFlairChanged({
							previewFlair: e,
							selectedTemplateId: t
						}), this.props.closeModal && this.props.closeModal(), this.trackEvent()
					}, this.onClear = () => {
						this.props.sendEvent(Object(x.b)()), this.setSelectedFlair(null)
					}, this.setSelectedFlair = e => {
						this.setState({
							previewFlair: e
						})
					};
					const t = Object(E.c)(e.flairs);
					this.state = {
						previewFlair: t || null
					}
				}
				canSave() {
					const {
						templates: e
					} = this.props.flairData, {
						previewFlair: t
					} = this.state, n = Object(E.c)(this.props.flairs) || null;
					return Object(E.b)(e, t, n)
				}
				render() {
					const {
						props: e
					} = this, {
						previewFlair: t
					} = this.state, {
						className: n,
						flairData: o,
						subreddit: r
					} = e, i = r.displayText, {
						templates: c,
						templateIds: d
					} = o, {
						canSave: l
					} = this.canSave();
					return a.a.createElement(m.a, {
						className: n
					}, a.a.createElement(p.a, {
						onClosePressed: e.closeModal,
						title: s.fbt._("Select {subredditName} flair", [s.fbt._param("subredditName", i)], {
							hk: "1lDMWS"
						})
					}), a.a.createElement(b.a, {
						flair: t,
						flairTemplateType: _.d.LinkFlair,
						placeholderText: s.fbt._("Post Title", null, {
							hk: "43RsbC"
						})
					}), a.a.createElement(f.a, {
						flair: t,
						flairTemplateType: _.d.LinkFlair,
						subredditId: r.id,
						templates: c,
						templateIds: d,
						onChange: this.setSelectedFlair
					}), a.a.createElement("div", {
						className: v.a.buttonsRow
					}, a.a.createElement(h.l, {
						disabled: !l,
						onClick: this.onApply
					}, s.fbt._("Apply", null, {
						hk: "3mAjVQ"
					})), a.a.createElement(h.o, {
						className: v.a.clearButton,
						onClick: this.onClear
					}, s.fbt._("Clear Flair", null, {
						hk: "3jvT0B"
					}))))
				}
			}
			const g = Object(i.b)(k, (e, t) => ({
				closeModal: () => e(Object(u.i)(t.modalId))
			}))(S);
			t.a = Object(l.a)(Object(d.c)(g))
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less": function(e, t, n) {
			e.exports = {
				ListContainer: "VHCAEHBEuD8bln8MDFl35",
				listContainer: "VHCAEHBEuD8bln8MDFl35",
				Icon: "_3WbGqnEpw_ds1P508Qawma",
				icon: "_3WbGqnEpw_ds1P508Qawma",
				DropdownRow: "x_9o8pHUgKrlsT51QhLnG",
				dropdownRow: "x_9o8pHUgKrlsT51QhLnG",
				text: "_1llB9GXV3OPp_55xrtgYNh",
				svgIcon: "_2mkCGM7pDFARBtuKmKCBf0"
			}
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "h", (function() {
				return O
			})), n.d(t, "i", (function() {
				return j
			})), n.d(t, "j", (function() {
				return E
			})), n.d(t, "k", (function() {
				return C
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "b", (function() {
				return T
			})), n.d(t, "c", (function() {
				return k
			})), n.d(t, "e", (function() {
				return S
			})), n.d(t, "g", (function() {
				return g
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/controls/Dropdown/Row.tsx"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				d = n("./src/reddit/icons/fonts/Envelope/index.tsx"),
				l = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				u = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				p = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				m = n("./src/reddit/icons/fonts/Tag/index.tsx"),
				b = n("./src/reddit/icons/svgs/CircleCheckLight/index.tsx"),
				f = n("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				h = n.n(f);
			const x = r.a.wrapped(c.a, "Icon", h.a),
				_ = r.a.wrapped(d.a, "Icon", h.a),
				O = r.a.wrapped(l.a, "Icon", h.a),
				j = r.a.wrapped(u.a, "Icon", h.a),
				E = r.a.wrapped(p.a, "Icon", h.a),
				C = r.a.wrapped(m.a, "Icon", h.a),
				v = () => s.a.createElement(i.a, {
					name: "mod_mute",
					className: h.a.Icon
				}),
				T = () => s.a.createElement(i.a, {
					name: "calendar",
					className: h.a.Icon
				}),
				k = () => s.a.createElement(b.a, {
					className: h.a.svgIcon
				}),
				S = r.a.wrapped(a.b, "DropdownRow", h.a),
				g = r.a.div("ListContainer", h.a)
		},
		"./src/reddit/components/PostModModeDropdown/_PostModModeDropdown.m.less": function(e, t, n) {
			e.exports = {
				dropdown: "_1DqDpxxERz4UiuumI26tIZ"
			}
		},
		"./src/reddit/components/PostModModeDropdown/_PostModModeDropdown.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/constants/index.ts"),
				c = n("./src/reddit/actions/economics/predictions/modTools.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/actions/postFlair.ts"),
				p = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = n("./src/reddit/components/PostFlairPicker/index.tsx"),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				f = n("./src/reddit/constants/modals.ts"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				x = n("./src/reddit/controls/Dropdown/index.tsx"),
				_ = n("./src/reddit/featureFlags/index.ts"),
				O = n("./src/reddit/helpers/trackers/modTools.ts"),
				j = n("./src/reddit/helpers/trackers/predictionsModTools.ts"),
				E = n("./src/reddit/models/Prediction/Tournament/index.ts"),
				C = n("./src/reddit/selectors/tooltip.ts"),
				v = n("./node_modules/fbt/lib/FbtPublic.js"),
				T = n("./src/reddit/components/ModModeReports/helpers.ts"),
				k = n("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				S = n("./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts"),
				g = n("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				y = n("./src/reddit/helpers/isCrosspost.ts"),
				P = n("./src/reddit/models/Flair/index.ts"),
				w = n("./src/reddit/models/Prediction/index.ts"),
				I = n("./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx"),
				F = n("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				M = n.n(F);
			const N = (e, t) => Object(S.b)({
					breakpointType: S.a.HideIfVWLarger,
					flatlistItem: e,
					postLayout: t
				}),
				R = () => void 0,
				L = ({
					canEditFlair: e,
					hasModFullPerms: t,
					hasModPostPerms: n,
					isDistinguished: o,
					isModToMemberShareEnabled: r,
					isOverlay: a,
					isPostAuthor: i,
					isProfilePage: c,
					layout: d,
					modModeEnabled: l,
					onApprovePost: u,
					onCancelPrediction: p,
					onChangePredictionOutcome: m,
					onEditPredictionEnd: b,
					onDistinguishPost: f,
					onFlairPost: h,
					onLockPost: x,
					onNsfwPost: _,
					onOcPost: O,
					onCcPost: j,
					onRemovePost: C,
					onModToMemberShareOpened: S,
					onSpamPost: F,
					onStickyPost: L,
					onSpoilerPost: D,
					post: A
				}) => {
					var W, B, U, V, H;
					const G = (null === (W = A.pollData) || void 0 === W ? void 0 : W.isPrediction) && !(null === (B = A.pollData) || void 0 === B ? void 0 : B.resolvedOptionId),
						J = (null === (U = A.pollData) || void 0 === U ? void 0 : U.isPrediction) && null !== A.pollData.resolvedOptionId,
						K = A.flair.filter(e => e.type !== P.f.Nsfw && e.type !== P.f.Spoiler).length > 0,
						X = Object(T.b)(A),
						Q = !(!A.approvedBy || !X),
						Y = a ? void 0 : d,
						Z = Object(y.a)(A),
						q = l ? N : R;
					return s.a.createElement(I.g, null, n && s.a.createElement(s.a.Fragment, null, !A.isSponsored && s.a.createElement(s.a.Fragment, null, s.a.createElement(I.e, {
						className: q(k.a.Approve, Y),
						displayText: Q ? v.fbt._("Reapprove", null, {
							hk: "39rQqr"
						}) : A.approvedBy ? v.fbt._("Approved", null, {
							hk: "1j7d8E"
						}) : v.fbt._("Approve", null, {
							hk: "29dW3F"
						}),
						onClick: u
					}, s.a.createElement(I.a, null)), s.a.createElement(I.e, {
						className: q(k.a.Remove, Y),
						displayText: A.isRemoved ? v.fbt._("Removed", null, {
							hk: "3rSb2M"
						}) : v.fbt._("Remove", null, {
							hk: "dflNO"
						}),
						onClick: C
					}, s.a.createElement(I.i, null)), s.a.createElement(I.e, {
						className: q(k.a.Spam, Y),
						displayText: A.isSpam ? v.fbt._("Removed as spam", null, {
							hk: "2olZT7"
						}) : v.fbt._("Remove as spam", null, {
							hk: "4A9ZT8"
						}),
						onClick: F
					}, s.a.createElement(I.j, null))), e && s.a.createElement(I.e, {
						className: q(k.a.Flair, Y),
						displayText: K ? v.fbt._("Edit post flair", null, {
							hk: "2oet1"
						}) : v.fbt._("Add post flair", null, {
							hk: "1iPNLQ"
						}),
						onClick: h
					}, s.a.createElement(I.k, null))), r && t && s.a.createElement(I.e, {
						displayText: v.fbt._("Share with members", null, {
							hk: "2XMBQE"
						}),
						onClick: S
					}, s.a.createElement(I.f, null)), !A.isRemoved && !c && s.a.createElement(g.a, {
						isSelected: A.isStickied,
						onClick: L,
						text: v.fbt._("Sticky post", null, {
							hk: "3uXoIh"
						})
					}), Object(E.b)(A) && s.a.createElement(I.e, {
						disabled: Boolean((null === (V = A.pollData) || void 0 === V ? void 0 : V.resolvedOptionId) || (null === (H = A.pollData) || void 0 === H ? void 0 : H.predictionStatus) === w.b.Cancelled),
						displayText: v.fbt._("Cancel Prediction", null, {
							hk: "hgWFW"
						}),
						onClick: p
					}, s.a.createElement(I.i, null)), G && s.a.createElement(I.e, {
						displayText: v.fbt._("Update the end date", null, {
							hk: "FjDpu"
						}),
						onClick: b
					}, s.a.createElement(I.b, null)), J && s.a.createElement(I.e, {
						textClassName: M.a.text,
						onClick: m,
						displayText: v.fbt._("Change the outcome", null, {
							hk: "2FH6j9"
						})
					}, s.a.createElement(I.c, null)), i && s.a.createElement(g.a, {
						isSelected: o,
						onClick: f,
						text: v.fbt._("Distinguish as Mod", null, {
							hk: "3cCdJd"
						})
					}), s.a.createElement(g.a, {
						isSelected: A.isLocked,
						onClick: x,
						text: v.fbt._("Lock comments", null, {
							hk: "YAV8n"
						})
					}), !Z && s.a.createElement(g.a, {
						isSelected: A.isOriginalContent,
						onClick: O,
						text: v.fbt._("Mark as OC", null, {
							hk: "4yx2EO"
						})
					}), s.a.createElement(g.a, {
						isSelected: A.isNSFW,
						onClick: _,
						text: v.fbt._("Mark as NSFW", null, {
							hk: "8QQ2f"
						})
					}), t && "subreddit" === A.belongsTo.type && s.a.createElement(I.e, {
						displayText: v.fbt._("Adjust crowd control", null, {
							hk: "4Drg85"
						}),
						onClick: j
					}, s.a.createElement(I.d, null)), s.a.createElement(g.a, {
						isSelected: A.isSpoiler,
						onClick: D,
						text: v.fbt._("Mark as spoiler", null, {
							hk: "3ef0MU"
						})
					}))
				};
			var D = n("./src/reddit/components/PostModModeDropdown/_PostModModeDropdown.m.less"),
				A = n.n(D);
			const W = Object(h.u)({
					isProfilePage: h.J,
					pageLayer: e => e
				}),
				B = Object(a.c)({
					layout: h.R,
					isDropdownOpen: (e, {
						tooltipId: t
					}) => Object(C.b)(t)(e),
					isModToMemberShareEnabled: _.d.modToMemberShare
				}),
				U = Object(r.b)(B, (e, {
					post: t
				}) => ({
					onApprovePost: () => e(Object(l.s)(t.id)),
					onCancelPrediction: () => e(Object(c.c)(t.id)),
					onChangePredictionOutcome: () => e(Object(c.d)(t.id)),
					onEditPredictionEnd: () => e(Object(c.e)(t.id)),
					onDistinguishPost: n => e(Object(l.v)(t.id, n)),
					onFlairChanged: (n, o) => e(Object(u.h)({
						post: t,
						previewFlair: n,
						selectedTemplateId: o
					})),
					onFlairPost: t => e(Object(d.i)(t)),
					onLockPost: () => e(Object(l.E)(t.id)),
					onNsfwPost: () => e(Object(l.G)(t.id)),
					onOcPost: () => e(Object(l.J)(t.id)),
					onCcPost: () => {
						e(Object(d.i)(f.a.CROWD_CONTROL)), e(Object(l.u)(t.id))
					},
					onRemovePost: () => e(Object(l.T)(t.id, !1)),
					onModToMemberShareOpened: () => {
						e(Object(d.i)(f.a.MOD_TO_MEMBER_SHARE)), e(Object(l.F)(t.id))
					},
					onSpamPost: () => e(Object(l.T)(t.id, !0)),
					onSpoilerPost: () => e(Object(l.db)(t.id)),
					onStickyPost: () => e(Object(l.hb)(t.id))
				})),
				V = Object(p.a)(x.a);
			t.default = W(U(Object(b.c)(({
				canEditFlair: e,
				hasModFullPerms: t,
				hasModPostPerms: n,
				isDropdownOpen: o,
				isModToMemberShareEnabled: r,
				isOverlay: a,
				isPostAuthor: c,
				isProfilePage: d,
				layout: l,
				modModeEnabled: u,
				onApprovePost: p,
				onCancelPrediction: b,
				onChangePredictionOutcome: f,
				onEditPredictionEnd: h,
				onDistinguishPost: x,
				onFlairPost: _,
				onLockPost: C,
				onNsfwPost: v,
				onOcPost: T,
				onCcPost: k,
				onRemovePost: S,
				onModToMemberShareOpened: g,
				onSpamPost: y,
				onSpoilerPost: P,
				onStickyPost: w,
				post: I,
				sendEvent: F,
				tooltipId: M
			}) => {
				const N = I.distinguishType === i.G.MODERATOR,
					R = N ? i.G.NONE : i.G.MODERATOR,
					D = Object(m.b)(I.id, a);
				return s.a.createElement(V, {
					className: A.a.dropdown,
					isOpen: o,
					tooltipId: M
				}, s.a.createElement(L, {
					canEditFlair: e,
					hasModFullPerms: t,
					hasModPostPerms: n,
					isDistinguished: N,
					isModToMemberShareEnabled: r,
					isOverlay: a,
					isPostAuthor: c,
					isProfilePage: d,
					layout: l,
					modModeEnabled: u,
					onApprovePost: () => {
						p(), F(Object(O.j)("approve", I.id))
					},
					onCancelPrediction: () => {
						b(), F(Object(j.a)(I.id))
					},
					onChangePredictionOutcome: () => {
						f(), F(Object(j.b)(I.id))
					},
					onEditPredictionEnd: () => {
						h(), F(Object(j.c)(I.id))
					},
					onRemovePost: () => {
						S(), Object(E.b)(I) ? F(Object(j.d)(I.id)) : F(Object(O.j)("remove", I.id))
					},
					onSpamPost: () => {
						y(), F(Object(O.j)("spam", I.id))
					},
					onDistinguishPost: () => {
						x(R), F(Object(O.j)(N ? "undistinguish" : "distinguish", I.id))
					},
					onFlairPost: () => {
						_(D), F(Object(O.j)("post_flair", I.id))
					},
					onLockPost: () => {
						C(), F(Object(O.j)(I.isLocked ? "unlock" : "lock", I.id))
					},
					onNsfwPost: () => {
						v(), F(Object(O.j)(I.isNSFW ? "unmark_nsfw" : "mark_nsfw", I.id))
					},
					onOcPost: () => {
						T(), F(Object(O.j)(I.isOriginalContent ? "unmark_original_content" : "mark_original_content", I.id))
					},
					onCcPost: () => {
						k()
					},
					onModToMemberShareOpened: () => {
						g(), F(Object(O.j)("mod_to_member_share", I.id))
					},
					onSpoilerPost: () => {
						P(), F(Object(O.j)(I.isSpoiler ? "unmark_spoiler" : "mark_spoiler", I.id))
					},
					onStickyPost: () => {
						w(), F(Object(O.j)(I.isStickied ? "unsticky" : "sticky", I.id))
					},
					post: I
				}))
			})))
		},
		"./src/reddit/controls/CheckboxMenuItem/index.m.less": function(e, t, n) {
			e.exports = {
				checkboxIcon: "_3Ebr0mkLD0A7HiowzExNW-",
				checkboxMenuItem: "_2eawLPCtwzvTZhWKtaUgZQ",
				expandRight: "_34Odk7t6y-rCPxPcYJa4Nw",
				postCheckboxMenuItem: "_3LyKu57c-QkPvlFvAgWop5"
			}
		},
		"./src/reddit/controls/CheckboxMenuItem/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/index.tsx"),
				i = n("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				c = n("./src/reddit/controls/CheckboxMenuItem/index.m.less"),
				d = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const u = e => s.a.createElement("div", {
					className: Object(r.a)(d.a.checkboxMenuItem, e.className),
					onClick: e.onClick
				}, s.a.createElement(i.a, {
					className: d.a.expandRight
				}, s.a.createElement(a.a, {
					name: "checkbox",
					isFilled: e.isSelected,
					className: d.a.checkboxIcon
				}), e.text)),
				p = ({
					className: e,
					...t
				}) => s.a.createElement(u, l({
					className: Object(r.a)(d.a.postCheckboxMenuItem, e)
				}, t))
		},
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/constants/keycodes.ts"),
				d = n("./src/reddit/controls/Input/index.m.less"),
				l = n.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			class p extends s.a.Component {
				constructor() {
					super(...arguments), this.handleKeyDown = ({
						keyCode: e
					}) => {
						e === c.a.Escape && this.props.closeModal()
					}
				}
				render() {
					const {
						className: e,
						closeModal: t,
						...n
					} = this.props;
					return s.a.createElement("input", u({
						className: Object(a.a)(l.a.input, e),
						onKeyDown: this.handleKeyDown
					}, n))
				}
			}
			t.a = Object(r.b)(null, {
				closeModal: i.f
			})(p)
		},
		"./src/reddit/controls/Input/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
			}
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.m.less": function(e, t, n) {
			e.exports = {
				radioOption: "_2e6fJknJ4noSygWYov8-F1",
				radioOff: "_1lzSnSABNXX12WerTnwqI3",
				radioOn: "_3PYsg_uRJ6AGptv-hi7kqu"
			}
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/constants/keycodes.ts"),
				i = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				c = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = n("./src/reddit/layout/row/Inline/index.tsx"),
				l = n("./src/reddit/controls/RadioInput/RadioOption/index.m.less"),
				u = n.n(l);
			class p extends s.a.Component {
				constructor() {
					super(...arguments), this.ref = null, this.onKeyPress = e => {
						const {
							props: t
						} = this;
						t.disabled || e.key !== a.b.Enter && e.key !== a.b.Space || (t.onClick && t.onClick(t.value), e.preventDefault())
					}
				}
				componentDidUpdate(e) {
					this.props.selected && !e.selected && this.ref && this.ref.focus()
				}
				render() {
					const {
						props: e
					} = this;
					return e.hidden ? null : s.a.createElement(d.a, {
						"aria-checked": e.selected,
						className: Object(r.a)(e.className, u.a.radioOption),
						innerRef: e => this.ref = e,
						onClick: e.disabled ? void 0 : e.onClick,
						onKeyPress: this.onKeyPress,
						role: "radio",
						tabIndex: e.tabIndex
					}, e.showButton && (e.selected ? s.a.createElement(c.a, {
						className: u.a.radioOn,
						role: "presentation"
					}) : s.a.createElement(i.a, {
						className: u.a.radioOff,
						role: "presentation"
					})), e.children)
				}
			}
			t.a = p
		},
		"./src/reddit/controls/RadioInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/constants/keycodes.ts");
			class a extends s.a.Component {
				constructor(e) {
					super(e), this.handleClick = e => {
						const {
							disabled: t,
							onChange: n
						} = this.props;
						t || this.state.value !== e && (n(e), this.setState({
							value: e
						}))
					}, this.getValues = () => {
						const e = [];
						return s.a.Children.forEach(this.props.children, t => {
							t.props.hidden || t.props.disabled || e.push(t.props.value)
						}), e
					}, this.onKeyDown = e => {
						const {
							disabled: t,
							onChange: n
						} = this.props, {
							value: o
						} = this.state;
						if (t) return;
						const s = e.key === r.b.ArrowUp,
							a = e.key === r.b.ArrowDown;
						if (s || a) {
							const t = this.getValues();
							if (!t.length) return;
							const r = o ? t.indexOf(o) : 0,
								a = t[((s ? r - 1 : r + 1) + t.length) % t.length];
							n(a), this.setState({
								value: a
							}), e.preventDefault()
						}
					}, this.state = {
						value: e.value || null
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.value !== this.props.value && this.setState({
						value: e.value || null
					})
				}
				render() {
					const {
						props: e
					} = this, {
						value: t
					} = this.state;
					return s.a.createElement("div", {
						"aria-label": e.name,
						className: e.className,
						role: "radiogroup",
						onKeyDown: this.onKeyDown
					}, s.a.createElement("input", {
						disabled: e.disabled,
						type: "hidden",
						value: t || ""
					}), s.a.Children.map(e.children, (n, o) => {
						const r = 0 === o,
							a = n.props.value === t,
							i = null !== t ? a ? 0 : -1 : r ? 0 : -1;
						return s.a.cloneElement(n, {
							disabled: e.disabled,
							onClick: e => this.handleClick(n.props.value),
							selected: a,
							tabIndex: i
						})
					}))
				}
			}
		},
		"./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less": function(e, t, n) {
			e.exports = {
				basicLink: "_1YWXCINvcuU7nk0ED-bta8",
				metaContainer: "_1HGeWoy6faY2UWkCD7cYoW",
				outboundLink: "_1Jtes5zRWNpwobWM4O2Unx",
				button: "_2KotRmn9DgdA58Ikji2mnV",
				icon: "_2BQPq3iyS8t6kKtFmtkB30",
				isLit: "_3RofgwJEAbXD6OnLxEZ8Kg",
				body: "vzhy90YD0qH7ZDJi7xMGw"
			}
		},
		"./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "c", (function() {
				return m
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less"),
				d = n.n(c);
			const l = i.a.button("button", d.a),
				u = e => t => s.a.createElement("div", {
					className: t.className
				}, e);

			function p(e, t, n) {
				return b(e, t, !0, {
					...n
				})
			}

			function m(e, t, n) {
				return b(e, t, !1, {
					...n
				})
			}

			function b(e, t, n, o) {
				const i = e,
					c = "function" == typeof t ? t : u(t),
					{
						meta: l
					} = o,
					p = e => s.a.createElement(s.a.Fragment, null, s.a.createElement(i, {
						className: Object(a.a)(d.a.icon, {
							[d.a.isLit]: e
						})
					}), s.a.createElement(c, {
						className: d.a.body
					}), l && s.a.createElement("div", {
						className: d.a.metaContainer
					}, l));
				return n ? e => s.a.createElement("a", {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, d.a.basicLink),
					href: e.href,
					onClick: e.onClick,
					target: "_blank",
					rel: "noopener noreferrer"
				}, p(e.isLit)) : e => e.href ? s.a.createElement(r.a, {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, d.a.basicLink),
					to: e.href,
					onClick: e.onClick
				}, p(e.isLit)) : s.a.createElement("button", {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, d.a.button),
					onClick: e.onClick
				}, p(e.isLit))
			}
		},
		"./src/reddit/helpers/trackers/modTools.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return a
			})), n.d(t, "j", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "k", (function() {
				return b
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "l", (function() {
				return x
			}));
			var o = n("./src/reddit/constants/tracking.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					screen: Object(s.bb)(e),
					profile: Object(s.S)(e),
					subreddit: Object(s.jb)(e),
					userSubreddit: Object(s.tb)(e)
				}),
				a = e => t => ({
					source: "nav",
					action: "click",
					noun: e ? "mod_mode_on" : "mod_mode_off",
					...r(t)
				}),
				i = (e, t) => n => ({
					source: "post_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(s.J)(n, t),
					...r(n)
				}),
				c = (e, t) => n => ({
					source: "comment",
					action: "click",
					noun: e,
					post: Object(s.J)(n, t),
					comment: Object(s.i)(n, t),
					...r(n)
				}),
				d = (e, t) => n => ({
					source: "comment",
					action: o.c.UNDO,
					noun: e,
					post: Object(s.J)(n, t),
					comment: Object(s.i)(n, t),
					...r(n)
				}),
				l = (e, t) => n => ({
					source: "comment_overflow_menu",
					action: "click",
					noun: e,
					post: Object(s.J)(n, t),
					comment: Object(s.i)(n, t),
					...r(n)
				}),
				u = (e, t) => n => ({
					source: "mod_distinguish_menu",
					action: "click",
					noun: e,
					post: Object(s.J)(n, t),
					comment: Object(s.i)(n, t),
					...r(n)
				}),
				p = (e, t) => n => ({
					source: "comment_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(s.J)(n, t),
					comment: Object(s.i)(n, t),
					...r(n)
				}),
				m = (e, t) => n => ({
					source: "comment_report_menu",
					action: "click",
					noun: e,
					comment: Object(s.i)(n, t),
					post: Object(s.J)(n, t),
					...r(n)
				}),
				b = (e, t) => n => ({
					source: "post_report_menu",
					action: "click",
					noun: e,
					post: Object(s.J)(n, t),
					...r(n)
				}),
				f = (e, t) => n => ({
					source: "post",
					action: "click",
					noun: e,
					post: Object(s.J)(n, t),
					subreddit: Object(s.mb)(n, t)
				}),
				h = (e, t) => n => ({
					source: "comment",
					action: "click",
					noun: e,
					comment: Object(s.i)(n, t),
					post: Object(s.J)(n, t),
					subreddit: Object(s.mb)(n, t)
				}),
				x = (e, t, n, o) => r => ({
					source: e ? "comment" : "post",
					action: "click",
					noun: t ? "unsnooze_reporter" : "snooze_reporter",
					post: Object(s.J)(r, n),
					subreddit: Object(s.mb)(r, n),
					actionInfo: {
						reason: o
					},
					...e && {
						comment: Object(s.i)(r, n)
					}
				})
		},
		"./src/reddit/helpers/trackers/predictionsModTools.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "e", (function() {
				return l
			}));
			var o = n("./src/reddit/selectors/telemetry.ts");
			const s = (e, t) => ({
					...Object(o.o)(e),
					post: Object(o.J)(e, t),
					predictions: Object(o.P)(e, t),
					subreddit: Object(o.jb)(e)
				}),
				r = e => t => ({
					...s(t, e),
					source: "predictions",
					action: "click",
					noun: "edit_prediction_end_dt"
				}),
				a = e => t => ({
					...s(t, e),
					source: "edit_prediction_end_dt",
					action: "click",
					noun: "confirm"
				}),
				i = e => t => ({
					...s(t, e),
					source: "predictions",
					action: "click",
					noun: "cancel_prediction"
				}),
				c = e => t => ({
					...s(t, e),
					source: "predictions",
					action: "click",
					noun: "remove_post"
				}),
				d = e => t => ({
					...s(t, e),
					source: "predictions",
					action: "click",
					noun: "prediction_change_outcome"
				}),
				l = e => t => ({
					...s(t, e),
					source: "prediction_change_outcome",
					action: "click",
					noun: "confirm"
				})
		},
		"./src/reddit/helpers/trackers/userFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			}));
			var o = n("./src/reddit/helpers/flair.ts"),
				s = n("./src/reddit/selectors/gold/powerups/index.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const a = () => e => ({
					source: "id_card",
					action: "click",
					noun: "user_flair_picker",
					...r.o(e)
				}),
				i = e => t => {
					const n = r.jb(t),
						a = Object(s.x)(t, {
							subredditId: null == n ? void 0 : n.id
						}),
						{
							userFlair: i,
							achievementFlair: c,
							supporterFlair: d
						} = e,
						l = c || d;
					return {
						source: "user_flair_picker",
						action: "click",
						noun: "user_flair",
						...r.o(t),
						subreddit: n,
						userFlair: {
							id: null == i ? void 0 : i.id,
							title: i ? Object(o.g)(i) : void 0,
							isActive: !!i || void 0,
							achievementFlairId: null == c ? void 0 : c.type,
							achievementFlairTitle: null == c ? void 0 : c.name,
							isLocked: null == l ? void 0 : l.isLocked,
							supporterFlairId: null == d ? void 0 : d.type,
							supporterFlairTitle: null == d ? void 0 : d.name,
							isSupporter: a
						}
					}
				},
				c = () => e => ({
					source: "user_flair_picker",
					action: "click",
					noun: "edit_user_flair",
					...r.o(e)
				}),
				d = e => t => ({
					source: "user_flair_picker",
					action: "click",
					noun: "enable_powerups_flair",
					setting: {
						value: e ? "0" : "1",
						oldValue: e ? "1" : "0"
					},
					subreddit: r.jb(t),
					...r.o(t)
				})
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("approve", e.isFilled), c.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(r.b)("message",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("lock", e.isFilled), c.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("remove", e.isFilled), c.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("spam", e.isFilled), c.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Tag/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(r.b)("tag",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, n) {},
		"./src/reddit/icons/svgs/CircleCheckLight/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			const r = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M18.04 7.67457C18.5905 9.55741 18.4654 11.5734 17.6865 13.3738C16.9076 15.1742 15.5238 16.6457 13.7746 17.5336C12.0254 18.4215 10.0209 18.67 8.1078 18.2362C6.19473 17.8023 4.49351 16.7133 3.29851 15.1576C2.10351 13.602 1.48992 11.6775 1.5639 9.71728C1.63788 7.75702 2.39478 5.88429 3.70364 4.42313C5.01249 2.96197 6.79095 2.00431 8.73128 1.71586C10.6716 1.42742 12.6517 1.82633 14.329 2.84357L15.189 1.90557C13.2556 0.658893 10.9412 0.141738 8.661 0.446834C6.38077 0.75193 4.2838 1.85932 2.74608 3.57044C1.20837 5.28156 0.330485 7.4845 0.269845 9.78425C0.209205 12.084 0.969774 14.3301 2.41518 16.1199C3.86058 17.9097 5.89628 19.1261 8.15726 19.5509C10.4182 19.9757 12.7566 19.5813 14.7531 18.4382C16.7496 17.2952 18.2736 15.4783 19.0519 13.3134C19.8301 11.1485 19.8118 8.77715 19 6.62457L18.04 7.67457Z",
				fill: "inherit"
			}), s.a.createElement("path", {
				d: "M9.99503 12.6426C9.91293 12.6427 9.83162 12.6266 9.75577 12.5952C9.67991 12.5638 9.61101 12.5177 9.55303 12.4596L5.54703 8.45257L6.43203 7.56957L9.97603 11.1146L19.013 1.24657L19.935 2.08957L10.456 12.4396C10.3989 12.5013 10.3298 12.5509 10.253 12.5852C10.1762 12.6196 10.0932 12.6381 10.009 12.6396L9.99503 12.6426Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/Pencil/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("title", {
				id: `${e.title}-title`
			}, e.title), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M15.75,7.834625 L12,4.084625 L12.808,3.276625 C13.8435,2.241125 15.5225,2.241125 16.558,3.276625 C17.5935,4.312125 17.5935,5.991125 16.558,7.026625 L15.75,7.834625 Z M11.366,5 L15.116,8.75 L7.25,16.616 L3.5,12.866 L11.366,5 Z M2.5035,13.5 L6.1125,17.109 L1,18.6125 L2.5035,13.5 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOff/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_11Rht_b1e-kmk12gkz7Lug"
			}
		},
		"./src/reddit/icons/svgs/RadioOff/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/RadioOff/index.m.less"),
				i = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", c({}, e, {
				className: Object(r.a)(i.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), s.a.createElement("g", {
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M10,1.66666667 C5.39762708,1.66666667 1.66666667,5.39762708 1.66666667,10 C1.66666667,14.6023729 5.39762708,18.3333333 10,18.3333333 C14.6023729,18.3333333 18.3333333,14.6023729 18.3333333,10 C18.3333333,5.39762708 14.6023729,1.66666667 10,1.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOn/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", r({}, e, {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), s.a.createElement("g", {
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M10,6.66666667 C8.15905083,6.66666667 6.66666667,8.15905083 6.66666667,10 C6.66666667,11.8409492 8.15905083,13.3333333 10,13.3333333 C11.8409492,13.3333333 13.3333333,11.8409492 13.3333333,10 C13.3333333,8.15905083 11.8409492,6.66666667 10,6.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/Search/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"
			}))
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, n) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/layout/row/Inline/index.m.less"),
				r = n.n(s);
			t.a = o.a.div("inlineRow", r.a)
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, n) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				c = n.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(r.a)(e => {
				const {
					className: t,
					children: n,
					heightLeft: o,
					widthLeft: r,
					gutter: i,
					...l
				} = e;
				return s.a.createElement("div", d({
					className: Object(a.a)(c.a.expandRightContainer, t)
				}, l), s.a.createElement("div", {
					className: c.a.left,
					style: {
						flexBasis: r,
						height: o,
						marginRight: i
					}
				}, Array.isArray(n) && n[0]), s.a.createElement("div", {
					className: c.a.right
				}, Array.isArray(n) && n[1]))
			}, 2)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModerationDropdowns.6a62be13f3ab72b54dd1.js.map