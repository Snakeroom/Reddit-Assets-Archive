// https://www.redditstatic.com/desktop2x/Governance~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compo~bd4baca2.4a783425b72d9d836a4f.js
// Retrieved at 1/5/2022, 10:10:03 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compo~bd4baca2"], {
		"./src/lib/humanizeDate/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/constants/intlSupport.ts");

			function o(e, {
				showDay: t,
				useUtc: n,
				shortMonths: o,
				locale: a = r.D
			} = {}) {
				const i = new Date(e * r.Rb);
				return s.a ? new Intl.DateTimeFormat(a, {
					month: o ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: n ? "UTC" : void 0
				}).format(i) : i.toLocaleString()
			}
		},
		"./src/lib/humanizeUTCDate/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/constants/index.ts");
			t.a = (e, t = r.D) => {
				return new Date(1e3 * e).toLocaleString(t, {
					weekday: "short",
					month: "short",
					year: "numeric",
					day: "2-digit",
					hour: "2-digit",
					minute: "2-digit",
					second: "2-digit",
					timeZoneName: "short",
					timeZone: "UTC"
				})
			}
		},
		"./src/reddit/actions/jsApi.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const s = "JSAPI__CONSUMER_SUBSCRIBED",
				o = Object(r.a)(s)
		},
		"./src/reddit/actions/postFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return b
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "e", (function() {
				return L
			})), n.d(t, "d", (function() {
				return N
			})), n.d(t, "l", (function() {
				return D
			})), n.d(t, "k", (function() {
				return R
			})), n.d(t, "j", (function() {
				return A
			})), n.d(t, "g", (function() {
				return M
			})), n.d(t, "i", (function() {
				return U
			})), n.d(t, "h", (function() {
				return W
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/post.ts"),
				a = n("./src/reddit/actions/postFlairStyleTemplate.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/flair/index.ts"),
				d = n("./src/reddit/helpers/flair.ts"),
				l = n("./src/reddit/models/Flair/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/selectors/postFlair.ts"),
				p = n("./src/reddit/selectors/subreddit.ts");
			const b = "STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_SUCCESS",
				f = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_PENDING"),
				h = Object(s.a)(b),
				x = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_FAILED"),
				O = "STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				y = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING"),
				j = Object(s.a)(O),
				T = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED"),
				g = "STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_SUCCESS",
				_ = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_PENDING"),
				C = Object(s.a)(g),
				k = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_FAILED"),
				E = "STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_SUCCESS",
				S = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_PENDING"),
				I = Object(s.a)(E),
				v = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_FAILED"),
				L = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_PENDING",
				N = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_FAILED",
				F = Object(s.a)(L),
				P = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_SUCCESS"),
				w = Object(s.a)(N),
				D = (e, t) => async (n, r, {
					apiContext: s
				}) => {
					const o = r(),
						a = Object(p.R)(o, {
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
				}, R = (e, t) => async (n, r, {
					apiContext: s
				}) => {
					const o = r(),
						a = Object(p.R)(o, {
							subredditId: e
						}).name;
					n(y());
					const i = await Object(c.j)(s(), t, l.d.LinkFlair, a);
					if (i.ok) {
						n(j({
							subredditId: e,
							canAssignOwn: t
						}))
					} else n(T());
					return i.ok
				}, A = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					const d = s(),
						m = Object(p.R)(d, {
							subredditId: t
						}).name;
					n(_());
					const b = await Object(c.f)(o(), e, m, l.d.LinkFlair);
					let f = b.ok && !(b.body && !1 === b.body.success);
					if (f) {
						const r = b.body;
						if (n(C({
								subredditId: t,
								template: r
							})), r.id) {
							const s = e.styleTemplate,
								o = d.structuredStyles.flairTemplate.models[r.id];
							s ? f = await n(Object(a.d)(t, r.id, s)) : o && (f = await n(Object(a.c)(t, r.id)))
						}
					}
					if (f) {
						const e = Object(i.e)(r.fbt._("Flair saved!", null, {
							hk: "3MQuUt"
						}), u.b.SuccessMod);
						n(Object(i.f)(e))
					} else {
						n(k());
						const s = Object(i.e)(r.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "1yf1Ne"
						}), u.b.Error, r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), A(e, t));
						n(Object(i.f)(s))
					}
					return f
				}, M = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					const a = s(),
						d = Object(p.R)(a, {
							subredditId: t
						}).name;
					if (n(S()), (await Object(c.b)(o(), e, d)).ok) {
						n(I({
							subredditId: t,
							templateId: e
						}));
						const s = Object(i.e)(r.fbt._("Flair deleted!", null, {
							hk: "44T1il"
						}), u.b.SuccessMod);
						n(Object(i.f)(s))
					} else {
						n(v());
						const s = Object(i.e)(r.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "1nwT0G"
						}), u.b.Error, r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), M(e, t));
						n(Object(i.f)(s))
					}
				}, U = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					const a = s(),
						d = Object(m.d)(a, {
							subredditId: t
						}).templateIds,
						b = Object(p.R)(a, {
							subredditId: t
						}).name;
					if (n(F({
							subredditId: t,
							templateIds: e
						})), (await Object(c.e)(o(), b, l.d.LinkFlair, e)).ok) {
						n(P());
						const e = Object(i.e)(r.fbt._("Flair reorder saved.", null, {
							hk: "1Xbuan"
						}), u.b.SuccessMod);
						n(Object(i.f)(e))
					} else {
						n(w({
							subredditId: t,
							templateIds: d
						}));
						const s = Object(i.e)(r.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "4ohwNd"
						}), u.b.Error, r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), U(e, t));
						n(Object(i.f)(s))
					}
				}, W = ({
					post: e,
					previewFlair: t,
					selectedTemplateId: n
				}) => async (r, s, {
					apiContext: a
				}) => {
					const i = e.flair.filter(e => !Object(d.q)(e.type));
					if (t && i.unshift(t), r(Object(o.S)({
							[e.id]: {
								flair: i
							}
						})), t) {
						const r = Object(d.g)(t);
						Object(c.h)(a(), e.id, n, r)
					} else Object(c.h)(a(), e.id, "", "")
				}
		},
		"./src/reddit/actions/postFlairStyleTemplate.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return T
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "a", (function() {
				return C
			})), n.d(t, "c", (function() {
				return E
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/forEach.js"),
				s = n.n(r),
				o = n("./node_modules/lodash/isEqual.js"),
				a = n.n(o),
				i = n("./node_modules/lodash/values.js"),
				c = n.n(i),
				d = n("./src/lib/makeActionCreator/index.ts"),
				l = n("./src/reddit/actions/imageUploads.ts"),
				u = n("./src/reddit/helpers/media/index.ts"),
				m = n("./src/lib/constants/index.ts"),
				p = n("./src/lib/makeApiRequest/index.ts"),
				b = n("./src/lib/omitHeaders/index.ts"),
				f = n("./src/reddit/constants/headers.ts");
			var h = n("./src/reddit/helpers/trackers/blade.ts"),
				x = n("./src/reddit/models/Image/index.tsx"),
				O = n("./src/reddit/selectors/subreddit.ts"),
				y = n("./src/telemetry/index.ts");
			const j = ({
				subredditId: e,
				flairId: t,
				imageKey: n,
				imageData: r
			}) => async (s, o, a) => {
				const i = o(),
					c = Object(O.R)(i, {
						subredditId: e
					});
				if (!c) return !1;
				s(Object(l.k)(r));
				const d = await (async (e, t, n, r, s, o) => Object(p.a)(Object(b.a)(e, [f.a]), {
					endpoint: `${e.apiUrl}/api/v1/${t}/flair_style_asset_upload_s3/${n}`,
					method: m.jb.POST,
					data: {
						filepath: r,
						imagetype: s,
						mimetype: o
					}
				}))(a.apiContext(), c.name, t, r.file.name, n, await Object(u.g)(r.file));
				let h = !1;
				try {
					const e = await Object(l.g)(o(), d, r, x.a.FlairTemplates);
					e && s(Object(l.j)(e)), h = !0
				} catch (y) {
					if (y instanceof Error) throw y;
					s(Object(l.i)(y))
				}
				return h
			}, T = "POSTFLAIR_STYLETEMPLATE_SAVED_SUCCESS", g = Object(d.a)(T), _ = (e, t, n) => async (r, o, i) => {
				const {
					apiContext: d
				} = i;
				let u = o();
				const {
					pendingImages: T,
					..._
				} = n;
				let C = _;
				const k = Object(O.R)(u, {
					subredditId: e
				});
				if (!k) return !1;
				const E = u.structuredStyles.flairTemplate.models[t];
				if (E && a()(E, C)) return !0;
				if (T) {
					const n = [];
					if (s()(T, (s, o) => {
							s && n.push(r(j({
								flairId: t,
								imageData: Object(x.m)(s),
								imageKey: o,
								subredditId: e
							})))
						}), !(await Promise.all(n)).every(e => e)) return !1;
					C = ((e, t, n) => {
						const r = {
							...e
						};
						return s()(t, (e, t) => {
							const s = e && n.imageUploads[e.id];
							s && s.kind === x.b.TempUploaded && (r[t] = s.url)
						}), r
					})(C, T, o())
				}
				u = o();
				let S = null,
					I = null;
				const v = [];
				try {
					(S = await Object(l.f)(u, x.a.FlairTemplates)) && (I = Object(l.m)(S)(r, o, i), v.push(...c()(S.imagesByKey)))
				} catch (P) {
					return !1
				}
				const L = await (async (e, t, n, r) => Object(p.a)(Object(b.a)(e, [f.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${n}`,
						method: m.jb.PUT,
						data: r
					}))(d(), k.name, t, C),
					N = E ? "edit_post_flair_template" : "save_post_flair_template",
					F = Object(h.e)(u, N);
				if (L.ok) {
					let e;
					if (I) try {
						await I, e = ((e, t, n) => {
							const r = {
								...e
							};
							return t.forEach(e => {
								const t = n.imageUploads[e.id];
								t && t.kind === x.b.Uploaded && (e.url === r.postBackgroundImage ? r.postBackgroundImage = t.url : e.url === r.postPlaceholderImage && (r.postPlaceholderImage = t.url))
							}), r
						})(C, v, o())
					} catch (P) {
						e = null
					} else e = C;
					r(g({
						flairId: t,
						template: e || C
					}))
				} else S && S.websocket.close();
				return Object(y.a)({
					...F,
					actionInfo: {
						...F.actionInfo,
						success: L.ok
					}
				}), L.ok
			}, C = "POSTFLAIR_STYLETEMPLATE_DELETED_SUCCESS", k = Object(d.a)(C), E = (e, t) => async (n, r, {
				apiContext: s
			}) => {
				const o = r(),
					a = Object(O.R)(o, {
						subredditId: e
					});
				if (!a) return !1;
				const i = await (async (e, t, n) => Object(p.a)(Object(b.a)(e, [f.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${n}`,
						method: m.jb.DELETE
					}))(s(), a.name, t),
					c = Object(h.e)(o, "delete_flair_template");
				return i.ok && n(k({
					flairId: t
				})), Object(y.a)({
					...c,
					actionInfo: {
						...c.actionInfo,
						success: i.ok
					}
				}), i.ok
			}
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
				return W
			})), n.d(t, "a", (function() {
				return K
			})), n.d(t, "b", (function() {
				return B
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/pick.js"),
				o = n.n(s),
				a = n("./node_modules/polished/dist/polished.es.js"),
				i = n("./node_modules/react/index.js"),
				c = n.n(i),
				d = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				l = n("./src/lib/addQueryParams/index.ts"),
				u = n("./src/lib/classNames/index.ts"),
				m = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = n("./src/lib/lessComponent.tsx"),
				b = n("./src/reddit/components/Emoji/index.m.less"),
				f = n.n(b);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const x = p.a.wrapped(({
				backgroundImage: e,
				style: t,
				...n
			}) => c.a.createElement("div", h({
				style: {
					...t || {},
					backgroundImage: `url('${e}')`
				}
			}, n)), "EmojiDisplay", f.a);
			var O = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				y = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				j = n("./src/reddit/constants/colors.ts"),
				T = n("./src/reddit/constants/parameters.ts"),
				g = n("./src/reddit/controls/InternalLink/index.tsx"),
				_ = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				C = n("./src/reddit/icons/svgs/Close/index.tsx"),
				k = n("./src/reddit/models/Flair/index.ts"),
				E = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				S = n("./src/reddit/components/Flair/index.m.less"),
				I = n.n(S);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const L = Object(y.a)(O.b),
				N = p.a.div("FlairWrapper", I.a),
				F = p.a.wrapped(d.a, "CloseButton", I.a),
				P = p.a.wrapped(Object(m.a)(({
					forceSmallEmojis: e,
					theme: t,
					...n
				}) => {
					const r = t;
					return c.a.createElement(x, v({
						style: {
							...w(!!e, r) || {}
						}
					}, n))
				}), "FlairEmojiDisplay", I.a),
				w = (e, t) => {
					if (!e && !!t.subredditContext.emojiHeight && !!t.subredditContext.emojiWidth) return {
						height: `${t.subredditContext.emojiHeight}px`,
						width: `${t.subredditContext.emojiWidth}px`
					}
				},
				D = (e, t) => {
					const n = t ? `/r/${t}/search` : "/search",
						r = `${t?"flair_name":"flair"}:"${e}"`;
					return Object(l.a)(n, {
						[T.q]: r,
						[T.t]: t ? "1" : ""
					})
				},
				R = e => e.isFlairFilter ? c.a.createElement(g.a, {
					onMouseDown: e.onMouseDown,
					to: e.to || ""
				}, e.flair) : e.onClick ? c.a.createElement(g.a, {
					onClick: () => e.onClick(e.searchableTerm),
					to: D(e.searchableTerm, e.subredditName)
				}, e.flair) : e.flair;
			class A extends c.a.Component {
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
							[I.a.transparentBackgroundColor]: "transparent" === this.props.backgroundColor
						}),
						onMouseEnter: this.props.tooltip ? this.onShowTooltip : void 0,
						onMouseLeave: this.props.tooltip ? this.onHideTooltip : void 0,
						ref: this.setTooltipTargetRef,
						style: {
							backgroundColor: this.props.backgroundColor || Object(E.a)(this.props).flair,
							color: `${W(this.props)}`
						}
					}, this.props.text, this.props.isSelected && c.a.createElement(F, {
						to: "./",
						onClick: this.props.onCloseClick
					}, c.a.createElement(C.a, {
						className: I.a.CloseIcon,
						style: {
							fill: this.props.backgroundColor || Object(E.a)(this.props).flair
						}
					})), !!this.props.tooltip && c.a.createElement(L, {
						text: this.props.tooltip,
						isOpen: this.state.isTooltipOpen,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: ["center", "top"],
						tooltipPosition: ["center", "bottom"]
					}));
					return c.a.createElement(R, {
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
			const M = Object(m.a)(A),
				U = Object(m.a)(e => {
					let t = "",
						n = !1;
					const r = e.richtext.map((r, s) => {
						if (r.e === k.c.Emoji) {
							const o = r;
							return t += o.a, n = !0, c.a.createElement(P, {
								forceSmallEmojis: e.forceSmallEmojis,
								backgroundImage: o.u,
								key: s,
								title: o.a
							})
						} {
							const e = r;
							return t += e.t, c.a.createElement("span", {
								key: s
							}, e.t)
						}
					});
					let s;
					n && !e.forceSmallEmojis && e.theme && e.theme.subredditContext.emojiWidth && e.theme.subredditContext.emojiHeight && e.theme.subredditContext.emojiHeight > 16 && (s = {
						marginTop: `-${e.theme.subredditContext.emojiHeight-16}px`
					});
					const o = c.a.createElement(N, {
						className: Object(u.a)(e.className, {
							[I.a.transparentBackgroundColor]: "transparent" === e.backgroundColor
						}),
						style: {
							...s,
							backgroundColor: e.backgroundColor || Object(E.a)(e).flair,
							color: `${W(e)}`
						}
					}, r, e.isSelected && c.a.createElement(F, {
						to: "./",
						onClick: e.onCloseClick
					}, c.a.createElement(C.a, {
						className: I.a.CloseIcon,
						style: {
							fill: e.backgroundColor || Object(E.a)(e).flair
						}
					})));
					return c.a.createElement(R, {
						flair: o,
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
				W = e => !e.textColor || e.textColor && !e.backgroundColor ? Object(E.a)(e).postFlairText : "transparent" === e.backgroundColor ? Object(_.a)(Object(E.a)(e).post, j.a.black, j.a.white) : e.textColor === k.e.Dark ? j.a.black : j.a.white,
				K = p.a.wrapped(M, "TextFlair", I.a),
				$ = p.a.wrapped(U, "RichTextFlair", I.a),
				H = e => {
					switch (e.type) {
						case "spoiler":
							return "#A4A7A8";
						case "nsfw":
							return "#FF585B";
						default:
							return Object(a.i)(.1, Object(E.a)(o()(e, "theme", "redditStyle", "data-redditstyle")).button)
					}
				},
				Y = p.a.wrapped(e => {
					const t = H(e),
						n = c.a.createElement("span", {
							className: e.className,
							style: {
								border: `1px solid ${t}`,
								color: t
							}
						}, e.text);
					return c.a.createElement(R, {
						flair: n,
						searchableTerm: e.text
					})
				}, "MetaFlair", I.a);

			function B(e) {
				const {
					className: t,
					disabled: n = !1,
					flair: s,
					isFlairFilter: o,
					isSelected: a,
					onClick: i,
					onCloseClick: d,
					onMouseDown: l,
					subredditName: m,
					usesCommunityStyles: p,
					forceSmallEmojis: b,
					to: f
				} = e, h = Object(u.a)({
					[I.a.flairVariant]: o,
					[I.a.small]: o && !e.large,
					[I.a.large]: o && e.large
				}, t);
				switch (s.type) {
					case k.f.Richtext:
						return n || !s.richtext ? null : c.a.createElement($, {
							backgroundColor: s.backgroundColor,
							className: h,
							forceSmallEmojis: b,
							isFlairFilter: o,
							isSelected: a,
							onClick: i,
							onCloseClick: d,
							onMouseDown: l,
							redditStyle: !p,
							richtext: s.richtext,
							subredditName: m,
							textColor: s.textColor,
							to: f
						});
					case k.f.Text:
						return n || !s.text ? null : c.a.createElement(K, {
							backgroundColor: s.backgroundColor,
							className: h,
							isFlairFilter: o,
							isSelected: a,
							onClick: i,
							onCloseClick: d,
							onMouseDown: l,
							subredditName: m,
							text: s.text,
							textColor: s.textColor,
							redditStyle: !p,
							to: f
						});
					case k.f.Meta:
						return c.a.createElement(K, {
							backgroundColor: s.backgroundColor,
							className: t,
							isFlairFilter: o,
							subredditName: m,
							text: s.text,
							textColor: s.textColor,
							redditStyle: !p,
							to: f
						});
					case k.f.Nsfw:
					case k.f.Spoiler:
						return c.a.createElement(Y, {
							className: t,
							text: s.text,
							type: s.type
						});
					case k.f.Quarantined:
						return null;
					case k.f.Oc:
						return c.a.createElement(K, {
							backgroundColor: j.a.alienblue,
							text: s.text,
							textColor: k.e.Light,
							tooltip: r.fbt._("This post is marked as Original Content [OC]", null, {
								hk: "h7je6"
							})
						});
					default:
						return s.text ? c.a.createElement(K, {
							backgroundColor: s.backgroundColor,
							className: h,
							isFlairFilter: o,
							onClick: i,
							onCloseClick: d,
							onMouseDown: l,
							subredditName: m,
							text: s.text,
							redditStyle: !p,
							to: f
						}) : null
				}
			}
		},
		"./src/reddit/components/FlairList/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/lodash/noop.js"),
				s = n.n(r),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/components/Flair/index.tsx"),
				l = n("./src/reddit/helpers/flair.ts"),
				u = n("./src/reddit/models/Flair/index.ts"),
				m = n("./src/reddit/selectors/user.ts");
			const p = Object(c.c)({
					labelNSFW: m.U
				}),
				b = Object(i.b)(p),
				f = e => {
					if (e.type === u.f.Richtext && e.richtext) {
						const t = e.richtext.map(e => e.e === u.c.Emoji ? e.u : e.t).join("-");
						return `${e.type}--${t}`
					}
					return `${e.type}--${e.text}`
				};
			t.a = b(({
				className: e,
				isFlairFilter: t,
				onClick: n,
				onMouseDown: r,
				disabled: o = !1,
				flair: i,
				labelNSFW: c,
				subredditName: m
			}) => {
				const p = !!i.find(e => e.type === u.f.Richtext),
					b = i.map(e => {
						if (e.type === u.f.Text && p) return null;
						if (!c && e.type === u.f.Nsfw) return null;
						const i = Object(l.j)(e),
							b = `/r/${m}/`,
							h = r ? () => r(e) : s.a;
						return a.a.createElement(d.b, {
							isFlairFilter: t,
							key: f(e),
							onClick: n,
							onMouseDown: h,
							disabled: o,
							flair: e,
							forceSmallEmojis: !0,
							subredditName: m,
							to: Object(l.e)(b, i)
						})
					});
				return a.a.createElement("div", {
					className: e
				}, b)
			})
		},
		"./src/reddit/components/FlairWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				flairList: "lrzZ8b0L6AzLkQj5Ww7H1",
				flairWrapper: "_2fiIRtMpITeCAzXc4cANKp",
				flairNoWrap: "_2xu1HuBz1Yx6SP10AGVx_I"
			}
		},
		"./src/reddit/components/FlairWrapper/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return g
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/components/FlairList/index.tsx"),
				l = n("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/helpers/correlationIdTracker.ts"),
				p = n("./src/reddit/helpers/flair.ts"),
				b = n("./src/reddit/helpers/trackers/postFlair.ts"),
				f = n("./src/reddit/models/Flair/index.ts"),
				h = n("./src/reddit/selectors/postFlair.ts"),
				x = n("./src/reddit/selectors/posts.ts"),
				O = n("./src/reddit/selectors/subreddit.ts"),
				y = n("./src/reddit/components/FlairWrapper/index.m.less"),
				j = n.n(y);
			const T = Object(a.b)(() => Object(i.c)({
					flairPosition: (e, {
						pageLayer: t
					}) => Object(u.q)(e, {
						pageLayer: t
					}),
					isPostFlairEnabled: (e, t) => Object(h.c)(e, {
						subredditId: t.post.belongsTo.id
					}),
					postCategories: (e, {
						post: t
					}) => Object(x.x)(e, t),
					subredditName: (e, {
						post: t
					}) => Object(O.R)(e, {
						subredditId: t.belongsTo.id
					}).name
				})),
				g = e => {
					const t = [];
					return e.isOriginalContent && t.push({
						text: r.fbt._("OC", null, {
							hk: "1i721p"
						}),
						type: f.f.Oc
					}), e.isMeta && t.push({
						text: r.fbt._("Poll", null, {
							hk: "1scdU1"
						}),
						type: f.f.Meta
					}), t.push(...e.flair), t
				};
			t.a = T(({
				className: e,
				disableFlair: t,
				flairPosition: n,
				isFlairFilter: r,
				isPostFlairEnabled: s,
				nowrap: a,
				post: i,
				postCategories: u,
				sendEvent: h,
				subredditName: x,
				titleFlair: O
			}) => {
				const y = Object(l.a)(),
					T = n === f.b.Left,
					_ = O || g(i),
					C = [];
				let k = [];
				T ? _.map(e => {
					Object(p.q)(e.type) ? C.push(e) : k.push(e)
				}) : k = _;
				const E = a ? j.a.flairNoWrap : C.length > 0 || k.length > 0 ? j.a.flairWrapper : null,
					S = e => {
						const t = {
							id: i.belongsTo.id,
							eventType: i.belongsTo.type,
							originElement: "post_flair",
							postFlairName: e
						};
						Object(m.e)(m.a.SearchResults), h && h(Object(b.a)(i.id, t))
					},
					I = e => {
						Object(m.e)(m.a.SearchResults), h && h(Object(b.e)(e, i.id))
					},
					v = !(t || !_ || !_.length);
				return v ? o.a.createElement("div", {
					className: Object(c.a)(E, e),
					"data-ignore-click": y
				}, v && C && o.a.createElement(d.a, {
					className: j.a.flairList,
					isFlairFilter: r,
					key: "leftFlair",
					onClick: S,
					onMouseDown: I,
					flair: C,
					disabled: !s,
					subredditName: x
				}), v && o.a.createElement(d.a, {
					className: j.a.flairList,
					isFlairFilter: r,
					key: "rightFlair",
					onClick: S,
					onMouseDown: I,
					flair: k,
					disabled: !s,
					subredditName: x
				})) : null
			})
		},
		"./src/reddit/components/Hovercards/SubredditHovercard/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/higherOrderComponents/makeAsync.tsx"),
				s = n("./src/lib/loadWithRetries/index.ts");
			const o = () => null;
			t.a = Object(r.a)({
				ErrorComponent: o,
				getComponent: () => Object(s.a)(() => n.e("SubredditHovercard").then(n.bind(null, "./src/reddit/components/Hovercards/SubredditHovercard/_SubredditHovercard.tsx"))).then(e => e.default),
				LoadingComponent: o
			})
		},
		"./src/reddit/components/HumanDate/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return h
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/timeAgo/index.ts"),
				a = n("./src/reddit/hooks/useLocale.ts");
			var i = function({
					seconds: e,
					...t
				}) {
					var n;
					const r = Object(a.a)(),
						i = {
							...t,
							locale: null !== (n = t.locale) && void 0 !== n ? n : r
						};
					return s.a.createElement(s.a.Fragment, null, Object(o.d)(e, i))
				},
				c = n("./src/lib/humanizeDate/index.ts");
			var d = function({
					seconds: e,
					...t
				}) {
					var n;
					const r = Object(a.a)(),
						o = {
							...t,
							locale: null !== (n = t.locale) && void 0 !== n ? n : r
						};
					return s.a.createElement(s.a.Fragment, null, Object(c.a)(e, o))
				},
				l = n("./src/lib/constants/index.ts");
			var u = function({
					seconds: e,
					locale: t
				}) {
					const n = Object(a.a)(),
						r = null != t ? t : n;
					return s.a.createElement(s.a.Fragment, null, function(e, t = l.D) {
						const n = e * l.Rb;
						return new Date(n).toLocaleString(t, {
							weekday: "short",
							month: "short",
							year: "numeric",
							day: "2-digit",
							hour: "2-digit",
							minute: "2-digit",
							second: "2-digit",
							timeZoneName: "long"
						})
					}(e, r))
				},
				m = n("./node_modules/fbt/lib/FbtPublic.js"),
				p = n("./src/lib/eventTools/index.ts");

			function b(e, t = l.D) {
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}

			function f(e, t, n = !1, r = l.D) {
				const s = Object(p.e)(e, t),
					o = new Date(e * l.Rb);
				let a;
				if (s === p.a.Live || n) return m.fbt._("Now", null, {
					hk: "Prpcg"
				});
				return s === p.a.Future ? a = Object(p.d)(e) ? m.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : Object(p.b)(e) >= 5 ? b(o, r) : function(e, t = l.D) {
					return e.toLocaleDateString(t, {
						weekday: "long"
					})
				}(o, r) : s === p.a.Past && (a = Object(p.d)(e) ? m.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : b(o, r)), `${a} @ ${function(e,t=l.D){return e.toLocaleTimeString(t,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(o,r)}`
			}
			var h = function({
				startTime: e,
				endTime: t,
				isLive: n,
				locale: r
			}) {
				const o = Object(a.a)(),
					i = null != r ? r : o;
				return s.a.createElement(s.a.Fragment, null, f(e, t, n, i))
			};
			n("./src/lib/humanizeUTCDate/index.tsx")
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = n("./src/reddit/selectors/tooltip.ts"),
				l = n("./src/reddit/components/InfoTextTooltip/index.m.less"),
				u = n.n(l),
				m = n("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const b = m.a.div("Text", u.a),
				f = m.a.div("BottomText", u.a),
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
				O = Object(a.c)({
					isOpen: (e, {
						tooltipId: t
					}) => Object(d.b)(t)(e)
				}),
				y = Object(c.a)(x, [i.a.Click, i.a.Keydown]),
				j = Object(c.a)(h, [i.a.Click, i.a.Keydown]),
				T = Object(o.b)(O);
			t.c = T(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? s.a.createElement(y, p({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : s.a.createElement(j, p({}, e, {
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				}))
			})
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/higherOrderComponents/asTooltip.tsx"),
				a = n("./src/reddit/constants/elementIds.ts"),
				i = n("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				const n = Object(o.a)(e, t);
				class r extends s.a.PureComponent {
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
				return Object(i.b)(r)
			}
		},
		"./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js");
			const s = Object(r.createContext)(!1);

			function o() {
				return Object(r.useContext)(s)
			}
		},
		"./src/reddit/components/Thumbnail/index.m.less": function(e, t, n) {
			e.exports = {
				blurredThumbnail: "GnWcY6GPzeZ5rzsiQ98fo",
				container: "_2MkcR85HDnYngvlVW2gMMa",
				contentType: "_2hIvPRO2xz4rn9LXAJXYDa",
				hasType: "_10qSZsDWnOBwx4bc7GJ1QF",
				hiddenImage: "_25ZOvQhQdAqwdxPd5z-KFB",
				imageThumbnail: "_33Pa96SGhFVpZeI6a7Y_Pl",
				verticallyCenterThumbnail: "Fq7oYOARH1VVCaLAuAh37",
				linkIcon: "m0n699kowSp8Wfa40lqpF",
				outboundLinkIcon: "_2rOixIHGmpfZB93ihJsw3V",
				placeholderThumbnail: "_2YO2O4rMRYYMeH_t2y8M5w",
				thumbnail: "_2c1ElNxHftd8W_nZtcG9zf",
				usePreview: "_78ohNtfA1urjgUhnN1jLi",
				LinkText: "_3HXDOeeCKnmgu_pIdoLofi",
				linkText: "_3HXDOeeCKnmgu_pIdoLofi"
			}
		},
		"./src/reddit/components/Thumbnail/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return N
			}));
			var r = n("./src/lib/isUrl/index.ts"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				l = n("./src/reddit/components/ImageWithFallback/index.tsx"),
				u = n("./src/reddit/controls/ContentType/index.tsx"),
				m = n("./src/reddit/controls/OutboundLink/index.tsx"),
				p = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				b = n("./src/reddit/models/Media/index.ts"),
				f = n("./src/reddit/models/Theme/index.ts"),
				h = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				x = n("./src/telemetry/models/Outbound.ts"),
				O = n("./src/reddit/components/Thumbnail/index.m.less"),
				y = n.n(O);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const T = e => e.placeholderImage || Object(h.a)(e).placeholderImage,
				g = e => e.placeholderImage ? "cover" : Object(h.a)(e).placeholderImagePosition,
				_ = c.a.span("LinkText", y.a),
				C = ({
					className: e,
					onClick: t,
					children: n
				}) => o.a.createElement("div", {
					onClick: t,
					className: Object(a.a)(y.a.linkIcon, e)
				}, n),
				k = e => o.a.createElement("img", {
					alt: e.alt,
					className: Object(a.a)(y.a.hiddenImage, e.className)
				}),
				E = e => {
					const t = o.a.createRef(),
						{
							src: n,
							errorSrc: r
						} = e;
					return n && r && Object(l.a)(n).catch(() => {
						t.current && (t.current.style.backgroundImage = `url(${r})`)
					}), o.a.createElement("div", {
						"aria-label": e.alt,
						className: Object(a.a)(y.a.thumbnail, y.a.imageThumbnail, e.className),
						"data-click-id": "image",
						ref: t,
						role: "img",
						style: {
							backgroundImage: `url(${e.src})`,
							borderColor: e.isOutbound ? Object(h.a)(e).button : Object(h.a)(e).line
						}
					}, e.isOutbound && o.a.createElement(C, {
						className: e.linkIconClassName
					}, o.a.createElement(p.a, {
						className: Object(a.a)(y.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: !0
					}), e.text && o.a.createElement(_, {
						className: e.linkTextClassName
					}, e.text)), o.a.createElement(k, {
						alt: e.alt,
						className: "hiddenImg"
					}))
				},
				S = e => e.isOutbound ? Object(h.a)(e).button : e.placeholderImage ? "transparent" : Object(h.a)(e).line,
				I = e => {
					const t = T(e),
						n = t && {
							background: Object(f.g)(Object(h.a)(e).placeholder, t, g(e))
						};
					return o.a.createElement("div", {
						className: Object(a.a)(y.a.thumbnail, y.a.placeholderThumbnail, e.className),
						"data-click-id": "image",
						style: {
							...n,
							borderColor: S(e)
						}
					}, (!e.placeholderImage || e.showContentType) && o.a.createElement(u.a, {
						className: Object(a.a)(e.contentTypeClassName, y.a.contentType, {
							[y.a.hasType]: e.type && !e.isOutbound
						}),
						type: e.isMeta || e.isPoll ? "meta" : e.type
					}), e.isOutbound && o.a.createElement(C, {
						className: e.linkIconClassName
					}, o.a.createElement(p.a, {
						className: Object(a.a)(y.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: !0
					}), e.text && o.a.createElement(_, {
						className: e.linkTextClassName
					}, e.text)))
				},
				v = e => o.a.createElement(E, j({}, e, {
					className: Object(a.a)(y.a.blurredThumbnail, e.className)
				})),
				L = Object(i.a)(e => {
					const {
						className: t,
						containerClassName: n,
						contentTypeClassName: s,
						crosspost: i,
						forceShowNSFW: c,
						isCommentsPage: d,
						isMeta: l,
						linkIconClassName: u,
						linkTextClassName: p,
						outboundLinkIconClassName: f,
						post: h,
						redditStyle: O,
						removeLink: j,
						showContentType: g,
						templatePlaceholderImage: _,
						text: C,
						theme: k,
						usePreview: E
					} = e, S = !k.subredditContext.shouldShowNSFWContent && (h.isNSFW || !(!i || !i.isNSFW)) && !c, I = T({
						placeholderImage: _,
						redditStyle: O,
						theme: k
					}), v = N(e), L = d ? x.SourceElement.PostImage : x.SourceElement.ListingPostImage, F = P(h, t, I, S, C, k, v, l, g, j, O, u, p, f, s), w = Object(b.D)(h);
					return Object(r.a)(w) && !j && w.indexOf("redditmedia") < 0 ? o.a.createElement("div", {
						className: Object(a.a)(y.a.container, E ? y.a.usePreview : "", n)
					}, o.a.createElement(m.b, {
						href: Object(b.D)(h),
						isSponsored: h.isSponsored,
						postId: h.id,
						source: h.source,
						sourceElement: L
					}, F)) : o.a.createElement("div", {
						className: Object(a.a)(y.a.container, E ? y.a.usePreview : "", n)
					}, F)
				}),
				N = ({
					crosspost: e,
					post: t,
					url: n,
					usePreview: r
				}) => {
					if (n) return n;
					const {
						preview: s,
						media: o,
						thumbnail: a
					} = e || t;
					return r && s ? s.url : t.isSponsored && s && "default" === a.url ? s.url : F(o) ? o.scrubberThumbSource : a.url
				},
				F = e => !!e && e.type === b.o.LIVEVIDEO,
				P = (e, t, n, s, i, c, l, u, m, p, b, f, h, x, O) => {
					const T = e.source && !e.isSponsored || !1;
					if (Object(r.a)(l)) {
						const n = F(e.media),
							r = n ? {
								errorSrc: d.U
							} : {},
							u = Object(a.a)(t, {
								[y.a.verticallyCenterThumbnail]: n
							});
						return s ? o.a.createElement(v, j({
							"data-click-id": "image",
							src: l
						}, r, {
							className: u,
							isOutbound: T && !p,
							linkIconClassName: f,
							linkTextClassName: h,
							outboundLinkIconClassName: x,
							redditStyle: b,
							text: i,
							theme: c
						})) : o.a.createElement(E, j({
							alt: e.title,
							className: u,
							src: l
						}, r, {
							isOutbound: T && !p,
							linkIconClassName: f,
							linkTextClassName: h,
							outboundLinkIconClassName: x,
							redditStyle: b,
							text: i,
							theme: c
						}))
					}
					return o.a.createElement(I, {
						className: t,
						contentTypeClassName: O,
						placeholderImage: n,
						isMeta: u,
						isOutbound: T && !p,
						linkIconClassName: f,
						linkTextClassName: h,
						outboundLinkIconClassName: x,
						redditStyle: b,
						showContentType: m,
						text: i,
						theme: c,
						type: e.media ? e.media.type : null,
						isPoll: !!e.pollData
					})
				};
			t.a = L
		},
		"./src/reddit/controls/ContentType/index.m.less": function(e, t, n) {
			e.exports = {
				contentTypeIcon: "_3CquMWJ6RMh8E9D-_84AtZ"
			}
		},
		"./src/reddit/controls/ContentType/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/constants/icons.ts"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/constants/elementClassNames.ts"),
				d = n("./src/reddit/controls/ContentType/index.m.less"),
				l = n.n(d);
			const u = e => Object(o.a)(l.a.contentTypeIcon, e.className),
				m = {
					embed: a.a.embed,
					gallery: a.a.media_gallery,
					gifvideo: a.a.gif_post,
					image: a.a.image_post,
					meta: a.a.poll_post,
					rpan: a.a.video_live,
					rtjson: a.a.text_post,
					text: a.a.text_post,
					video: a.a.video_post,
					liveaudio: a.a.audio
				};

			function p(e) {
				const t = u(e),
					n = e.type && m[e.type] || a.a.link_post;
				return s.a.createElement(i.a, {
					name: n,
					className: Object(o.a)({
						[c.a]: n === a.a.link_post
					}, t)
				})
			}
		},
		"./src/reddit/controls/OutboundLink/styled.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/constants/elementClassNames.ts"),
				o = n("./src/reddit/controls/OutboundLink/index.tsx"),
				a = n("./src/reddit/controls/OutboundLink/styles.m.less"),
				i = n.n(a);
			t.a = r.a.wrapped(o.b, "styledOutboundLink", {
				styledOutboundLink: `${i.a.styledOutboundLink} ${s.l}`
			})
		},
		"./src/reddit/controls/OutboundLink/styles.m.less": function(e, t, n) {
			e.exports = {
				styledOutboundLink: "_13svhQIUZqD9PVzFcLwOKT"
			}
		},
		"./src/reddit/helpers/commentList/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/reddit/constants/comments.ts"),
				s = n("./src/reddit/selectors/comments.ts"),
				o = n("./src/reddit/constants/experiments.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts");
			const i = (e, t) => t().features.comments.models[e],
				c = e => {
					switch (e.commentLink.type) {
						case r.a.Comment:
							return e.commentsDict[e.commentLink.id];
						case r.a.MoreComments:
							return e.moreCommentsDict[e.commentLink.id];
						case r.a.ContinueThread:
							return e.continueThreadDict[e.commentLink.id]
					}
				},
				d = (e, t) => e.type === r.a.MoreComments ? t[e.id].numComments : 1,
				l = (e, t, n, r) => {
					let o = Object(s.n)(r, {
							commentLink: t,
							commentsPageKey: e
						}),
						a = t;
					for (; o && o.depth > n && o.prev && (a = o.prev, (o = Object(s.n)(r, {
							commentLink: a,
							commentsPageKey: e
						})) && !(o.depth <= n)););
					return a.id
				},
				u = (e, t, n) => {
					const {
						commentLists: r,
						comments: s
					} = e, {
						head: i
					} = r[t];
					if (i) return Object.keys(s).filter(e => {
						const t = s[e];
						return !(!t.isStickied || !((e, t) => {
							const n = Object(a.c)(e, {
								experimentEligibilitySelector: a.a,
								experimentName: o.I,
								expEventOverride: t
							});
							return !!(Object(o.hf)(n) ? void 0 : n)
						})(n)) || (e => !1 !== e.collapsed)(t)
					})
				}
		},
		"./src/reddit/helpers/richTextJson/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "e", (function() {
				return f
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/reddit/models/RichTextJson/index.ts");
			const s = "giphy|",
				o = "emote|",
				a = "|downsized";

			function i(e, t) {
				return s + e + (t ? a : "")
			}

			function c(e) {
				return !!(null == e ? void 0 : e.startsWith(s))
			}

			function d(e) {
				return !!(null == e ? void 0 : e.startsWith(o))
			}

			function l(e) {
				var t;
				const n = null === (t = null == e ? void 0 : e.media) || void 0 === t ? void 0 : t.mediaMetadata;
				return !!n && Object.keys(n).some(c)
			}

			function u(e) {
				var t;
				const n = null === (t = null == e ? void 0 : e.media) || void 0 === t ? void 0 : t.mediaMetadata;
				return !!n && Object.keys(n).some(d)
			}

			function m(e) {
				let t = e.substring(s.length);
				return t.indexOf("|") && (t = t.split("|")[0]), `https://giphy.com/gifs/${t}`
			}

			function p(e, t) {
				return (Array.isArray(e) ? e : e.c && Array.isArray(e.c) ? e.c : []).reduce((e, n) => [...e, ...p(n, t)], !Array.isArray(e) && t(e) ? [e] : [])
			}

			function b(e) {
				return p(e, r.F).map(e => e.id)
			}

			function f(e, t = !1) {
				return p(e, e => e.e === r.o || t && e.e === r.y).map(e => e.u ? e.u : `https://reddit.com/r/${e.t}`)
			}
		},
		"./src/reddit/helpers/trackers/postFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			}));
			var r = n("./src/reddit/helpers/correlationIdTracker.ts"),
				s = n("./src/reddit/selectors/telemetry.ts"),
				o = n("./src/reddit/helpers/flair.ts");
			const a = (e, t) => n => ({
					source: "post",
					action: "click",
					noun: "post_flair",
					...s.o(n),
					actionInfo: s.d(n),
					correlationId: Object(r.c)(r.a.SearchResults),
					post: s.I(n, e),
					search: {
						...s.M(n, t),
						query: `flair_name:'${t.postFlairName}'`,
						queryId: s.cb(n, r.a.SearchResults)
					},
					subreddit: s.ib(n)
				}),
				i = e => t => ({
					source: "post_flair_widget",
					action: "click",
					noun: "post_flair_search",
					...s.o(t),
					actionInfo: s.d(t),
					correlationId: Object(r.c)(r.a.SearchResults),
					search: s.M(t, e),
					subreddit: s.ib(t)
				}),
				c = e => t => {
					const n = Object(o.g)(e);
					return {
						...s.o(t),
						action: "click",
						noun: "post_flair",
						source: "post_flair_widget",
						subreddit: s.ib(t),
						postFlair: {
							id: e.templateId,
							title: n
						}
					}
				},
				d = () => e => ({
					...s.o(e),
					action: "click",
					noun: "overflow",
					source: "post_flair_widget",
					subreddit: s.ib(e)
				}),
				l = e => t => {
					const n = Object(o.g)(e);
					return {
						...s.o(t),
						action: "click",
						noun: "clear",
						source: "post_flair_widget",
						subreddit: s.ib(t),
						postFlair: {
							id: e.templateId,
							title: n
						}
					}
				},
				u = (e, t) => n => {
					const a = Object(o.g)(e),
						i = s.I(n, t);
					return {
						...s.o(n),
						action: "click",
						noun: "post_flair",
						source: "post",
						subreddit: s.ib(n),
						postFlair: {
							id: e.templateId,
							title: a
						},
						post: i,
						search: {
							query: `flair_name:'${a}'`,
							subredditId: i ? i.subredditId : void 0,
							subredditName: i ? i.subredditName : void 0,
							postFlairName: a,
							originElement: "post_flair",
							queryId: s.cb(n, r.a.SearchResults),
							originPageType: n.platform.currentPage ? s.v(n.platform.currentPage) : void 0
						},
						feed: s.r(n)
					}
				}
		},
		"./src/reddit/hooks/useClickSourceData.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/react/index.js"),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/helpers/clickSourceData/index.ts");

			function a() {
				const e = Object(s.e)(e => e.platform.currentPage),
					[t, n] = Object(r.useState)({});
				return Object(r.useEffect)(() => {
					n(Object(o.a)(e))
				}, [e]), t
			}
		},
		"./src/reddit/hooks/useLocale.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			}));
			var r = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				s = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/selectors/meta.ts");
			const i = "undefined" == typeof document ? function() {
				const e = Object(o.e)(a.i) || s.DEFAULT_LOCALE;
				return Object(r.isPseudoLocale)(e) ? s.DEFAULT_LOCALE : e
			} : function() {
				const e = document.documentElement.lang || s.DEFAULT_LOCALE;
				return Object(r.isPseudoLocale)(e) ? s.DEFAULT_LOCALE : e
			};
			t.a = i;
			const c = () => {
				const e = i(),
					t = Object(o.e)(a.b);
				return t ? e.replace(/([a-z]+-)([A-Z]+)/, `$1${t}`) : e
			}
		},
		"./src/reddit/hooks/usePostContext.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/lib/sentry/index.ts"),
				s = n("./node_modules/react/index.js"),
				o = n("./src/reddit/contexts/Post/index.tsx");

			function a() {
				const e = Object(s.useContext)(o.c);
				return e || r.c.captureMessage("No post context provided"), e
			}
		},
		"./src/reddit/icons/fonts/OutboundLink/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(o.b)("external_link",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/reducers/pages/comments/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/redux/es/redux.js"),
				s = n("./src/reddit/actions/ads/constants.ts");
			const o = [];
			var a = (e = o, t) => {
					switch (t.type) {
						case s.o:
							return t.payload;
						case s.p:
						default:
							return e
					}
				},
				i = n("./src/reddit/actions/pages/constants.ts");
			const c = {};
			var d = (e = c, t) => {
				switch (t.type) {
					case i.d:
					case i.b:
					case i.h:
					case i.f: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case i.a:
					case i.e: {
						const {
							key: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n]: r || {}
						}
					}
					default:
						return e
				}
			};
			const l = {};
			var u = (e = l, t) => {
				switch (t.type) {
					case i.c:
					case i.g: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: !0
						}
					}
					case i.i: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: !1
						}
					}
					default:
						return e
				}
			};
			const m = {};
			var p = (e = m, t) => {
					switch (t.type) {
						case i.d:
						case i.h:
						case i.i: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case i.b:
						case i.a:
						case i.f:
						case i.e: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				b = Object(r.c)({
					error: d,
					fullyLoaded: u,
					pending: p
				}),
				f = n("./src/reddit/actions/comment/constants.ts");
			const h = [];
			var x = (e = h, t) => {
					switch (t.type) {
						case f.E:
							return e.find(e => t.payload.id === e.id) ? [...e.filter(e => t.payload.id !== e.id)] : [...e, t.payload];
						case f.b:
							return [...e.filter(e => e.expiresAt > Date.now())];
						case f.u:
							return [...t.payload.comments];
						default:
							return e
					}
				},
				O = n("./node_modules/lodash/uniqBy.js"),
				y = n.n(O),
				j = n("./node_modules/lodash/values.js"),
				T = n.n(j),
				g = n("./src/reddit/actions/comment/websocket/constants.ts");
			const _ = {};

			function C(e) {
				return y()(e, "id").sort((e, t) => e.created - t.created)
			}
			var k = (e = _, t) => {
					switch (t.type) {
						case i.f:
						case f.w:
						case i.b: {
							const {
								comments: n,
								key: r
							} = t.payload, s = e[r] ? e[r] : [], o = function(e, t) {
								return T()(e).map(e => {
									const n = e.isStickied ? t && t.created || Math.round(Date.now() / 1e3) : e.created;
									return {
										id: e.id,
										created: n,
										stickied: e.isStickied,
										authorId: e.authorId
									}
								})
							}(n, s.find(e => e.stickied)), a = C([...s, ...o]);
							return {
								...e,
								[r]: [...a]
							}
						}
						case g.b:
						case g.c:
						case g.d:
						case f.J:
						case f.I: {
							const {
								comment: {
									id: n,
									created: r,
									isStickied: s,
									authorId: o
								},
								commentsPageKey: a
							} = t.payload;
							return {
								...e,
								[a]: [...C([...e[a] ? e[a] : [], {
									id: n,
									created: r,
									stickied: s,
									authorId: o
								}])]
							}
						}
						default:
							return e
					}
				},
				E = n("./node_modules/lodash/mapValues.js"),
				S = n.n(E),
				I = n("./src/reddit/helpers/commentList/index.ts"),
				v = n("./src/reddit/models/Comment/index.ts");
			const L = {};

			function N(e) {
				const t = e;
				return S()(t, ({
					depth: e,
					next: t,
					prev: n
				}) => ({
					depth: e,
					next: t,
					prev: n
				}))
			}
			var F = (e = L, t) => {
				switch (t.type) {
					case f.w: {
						const {
							comments: n,
							commentLists: r,
							continueThreads: s,
							key: o,
							moreCommentsItem: a,
							moreComments: i
						} = t.payload, c = r[a.postId], d = e[o], l = {}, u = d[a.id];
						if (u && u.prev) {
							const {
								id: e
							} = u.prev;
							l[e] = {
								...d[e],
								next: c.head || u.next
							}
						}
						if (u && u.next) {
							const {
								id: e
							} = u.next;
							l[e] = {
								...d[e],
								prev: c.tail || u.prev
							}
						}
						if (c.head && c.tail) {
							const e = Object(I.c)({
									commentLink: c.head,
									commentsDict: n,
									moreCommentsDict: i,
									continueThreadDict: s
								}),
								t = Object(I.c)({
									commentLink: c.tail,
									commentsDict: n,
									moreCommentsDict: i,
									continueThreadDict: s
								});
							u && (e.prev = u.prev, t.next = u.next)
						}
						return {
							...e,
							[o]: {
								...e[o],
								...N(n),
								...N(s),
								...N(i),
								...l
							}
						}
					}
					case i.b:
					case i.f: {
						const {
							comments: n,
							continueThreads: r,
							key: s,
							moreComments: o
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								...N(n),
								...N(r),
								...N(o)
							}
						}
					}
					case g.b:
					case f.J: {
						const {
							comment: n,
							commentsPageKey: r,
							headCommentId: s
						} = t.payload, o = e[r], a = {};
						let i = null;
						return s && (a[s] = {
							...o[s],
							prev: Object(v.i)(n.id)
						}, i = Object(v.i)(s)), {
							...e,
							[r]: {
								...e[r],
								...a,
								[n.id]: {
									depth: 0,
									next: i,
									prev: null
								}
							}
						}
					}
					case f.I: {
						const {
							comment: n,
							commentsPageKey: r,
							parentCommentId: s,
							depth: o
						} = t.payload, a = e[r], i = {};
						let c = null;
						if (!a[s]) return e;
						const d = a[s].next;
						return d && (i[d.id] = {
							...a[d.id],
							prev: Object(v.i)(n.id)
						}, c = d), i[s] = {
							...a[s],
							next: Object(v.i)(n.id)
						}, {
							...e,
							[r]: {
								...e[r],
								...i,
								[n.id]: {
									depth: o,
									next: c,
									prev: Object(v.i)(s)
								}
							}
						}
					}
					default:
						return e
				}
			};
			const P = {};
			var w = (e = P, t) => {
				switch (t.type) {
					case g.b:
					case g.c:
					case f.J: {
						const {
							comment: n,
							commentsPageKey: r
						} = t.payload;
						return {
							...e,
							[r]: n.id
						}
					}
					case i.b:
					case i.f: {
						const {
							commentLists: n,
							key: r,
							postId: s
						} = t.payload;
						return {
							...e,
							[r]: n[s] && n[s].head ? n[s].head.id : null
						}
					}
					case i.i: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					default:
						return e
				}
			};
			const D = {};
			var R = (e = D, t) => {
				switch (t.type) {
					case i.d:
					case i.b:
					case i.c:
					case i.h: {
						const {
							key: n,
							postId: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case f.J: {
						const {
							parentId: n,
							commentsPageKey: r
						} = t.payload;
						return e[r] ? e : {
							...e,
							[r]: n
						}
					}
					default:
						return e
				}
			};
			t.a = Object(r.c)({
				api: b,
				followed: x,
				keyToChatCommentLinks: k,
				keyToCommentThreadLinkSets: F,
				keyToHeadCommentId: w,
				keyToPostId: R,
				ads: a
			})
		},
		"./src/reddit/selectors/comments.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return f
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "u", (function() {
				return x
			})), n.d(t, "w", (function() {
				return O
			})), n.d(t, "x", (function() {
				return y
			})), n.d(t, "k", (function() {
				return T
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "H", (function() {
				return _
			})), n.d(t, "n", (function() {
				return C
			})), n.d(t, "o", (function() {
				return k
			})), n.d(t, "j", (function() {
				return E
			})), n.d(t, "l", (function() {
				return S
			})), n.d(t, "h", (function() {
				return I
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "b", (function() {
				return L
			})), n.d(t, "q", (function() {
				return N
			})), n.d(t, "m", (function() {
				return F
			})), n.d(t, "t", (function() {
				return P
			})), n.d(t, "z", (function() {
				return w
			})), n.d(t, "J", (function() {
				return D
			})), n.d(t, "s", (function() {
				return R
			})), n.d(t, "D", (function() {
				return A
			})), n.d(t, "E", (function() {
				return M
			})), n.d(t, "F", (function() {
				return U
			})), n.d(t, "r", (function() {
				return W
			})), n.d(t, "e", (function() {
				return K
			})), n.d(t, "v", (function() {
				return $
			})), n.d(t, "K", (function() {
				return H
			})), n.d(t, "f", (function() {
				return Y
			})), n.d(t, "i", (function() {
				return B
			})), n.d(t, "G", (function() {
				return V
			})), n.d(t, "C", (function() {
				return G
			})), n.d(t, "I", (function() {
				return z
			})), n.d(t, "p", (function() {
				return q
			})), n.d(t, "L", (function() {
				return X
			})), n.d(t, "y", (function() {
				return J
			})), n.d(t, "A", (function() {
				return Z
			})), n.d(t, "B", (function() {
				return Q
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/values.js"),
				s = n.n(r),
				o = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/objectSelector/index.ts"),
				i = n("./src/reddit/constants/comments.ts"),
				c = n("./src/reddit/models/Comment/index.ts"),
				d = n("./src/reddit/models/Post/index.ts"),
				l = n("./src/reddit/selectors/subreddit.ts"),
				u = n("./src/reddit/selectors/commentSelector.ts"),
				m = n("./src/lib/initializeClient/installReducer.ts"),
				p = n("./src/reddit/reducers/features/comments/index.ts"),
				b = n("./src/reddit/reducers/pages/comments/index.ts");
			Object(m.a)({
				features: {
					comments: p.a
				},
				pages: {
					comments: b.a
				}
			});
			const f = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.error[t],
				h = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.pending[t],
				x = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.fullyLoaded[t],
				O = (e, t) => e.pages.comments.keyToHeadCommentId[t.commentsPageKey],
				y = (e, t) => {
					const n = O(e, t);
					if (n) return Object(u.b)(e, {
						commentId: n
					})
				},
				j = [],
				T = Object(a.a)((e, t) => {
					const n = y(e, t),
						r = n && n.id;
					if (!r) return j;
					const {
						commentsPageKey: s
					} = t, o = e.pages.comments.keyToCommentThreadLinkSets[s], a = [];
					let c = {
						id: r,
						type: i.a.Comment
					};
					do {
						a.push(c), c = o[c.id].next
					} while (c);
					return a
				}),
				g = (e, t) => O(e, t) ? e.pages.comments.keyToChatCommentLinks[t.commentsPageKey] : [],
				_ = (e, {
					commentsPageKey: t
				}) => {
					const n = e.pages.comments.keyToPostId[t];
					return n ? e.posts.models[n] : null
				},
				C = (e, {
					commentId: t,
					commentLink: n,
					commentsPageKey: r
				}) => {
					const s = e.pages.comments.keyToCommentThreadLinkSets[r];
					return s ? n ? s[n.id] : t ? s[t] : null : null
				},
				k = (e, {
					commentsPageKey: t
				}) => e.pages.comments.keyToCommentThreadLinkSets[t],
				E = (e, t) => {
					const n = t.commentsPageKey ? C(e, t) : null;
					return n ? n.depth : null
				},
				S = (e, {
					commentLink: t
				}) => {
					const {
						id: n,
						type: r
					} = t;
					switch (r) {
						case i.a.Comment:
							return e.features.comments.models[n];
						case i.a.MoreComments:
							return e.moreComments.models[n];
						case i.a.ContinueThread:
							return e.continueThreads.models[n];
						default:
							return null
					}
				},
				I = (e, t) => {
					if (e.platform.currentPage && e.platform.currentPage.urlParams && e.platform.currentPage.urlParams.partialPostId) {
						const {
							partialPostId: t
						} = e.platform.currentPage.urlParams, n = Object(d.t)(t);
						return Array.from(new Set(Object.keys(e.features.comments.models).filter(t => e.features.comments.models[t].postId === n && e.features.comments.models[t].author !== o.E).map(t => e.features.comments.models[t].author)))
					}
					return []
				},
				v = (e, {
					commentsPageKey: t
				}) => e.features.comments.collapsed[t],
				L = e => e.moreComments.models,
				N = e => e.features.comments.models,
				F = (e, {
					commentId: t
				}) => {
					const n = Object(u.b)(e, {
						commentId: t
					});
					return n ? Object(u.a)(e, n) : ""
				},
				P = (e, {
					commentId: t
				}) => !!(t && e.features.comments.focused && e.features.comments.focused[t]),
				w = (e, {
					commentId: t,
					commentsPageKey: n
				}) => !!(t && e.features.comments.isEditing[n] && e.features.comments.isEditing[n][t]),
				D = (e, {
					commentId: t,
					commentsPageKey: n
				}) => !!(t && e.features.comments.replyFormOpen[n] && e.features.comments.replyFormOpen[n][t]),
				R = (e, {
					commentsPageKey: t
				}) => {
					const n = t && e.features.comments.replyFormOpen[t] || {},
						r = Object.keys(n).find(e => n[e]),
						s = Object(u.b)(e, {
							commentId: r
						}),
						o = s && E(e, {
							commentId: s.id,
							commentLink: void 0,
							commentsPageKey: t
						});
					if (s && "number" == typeof o) return {
						...s,
						depth: o
					}
				},
				A = (e, {
					moreCommentsId: t
				}) => e.moreComments.models[t],
				M = (e, {
					moreCommentsId: t
				}) => !!e.moreComments.api.pending[t],
				U = (e, {
					commentsPageKey: t
				}) => {
					const n = e.pages.comments.keyToPostId[t];
					if (n) {
						const t = s()(e.moreComments.models).find(t => t.postId === n && 0 === t.depth && !(void 0 !== e.moreComments.api.pending[t.id]));
						if (t) return {
							moreCommentId: t.id,
							pending: !!e.moreComments.api.pending[t.id]
						}
					}
					return null
				},
				W = (e, {
					id: t
				}) => e.continueThreads.models[t],
				K = (e, {
					commentId: t
				}) => {
					const n = t ? e.features.comments.models[t] : void 0;
					if (!n) return null;
					const r = e.authorFlair.models[n.subredditId];
					return r ? r[n.author] : null
				},
				$ = (e, {
					draftKey: t
				}) => !!e.features.comments.submit.error[t],
				H = (e, {
					draftKey: t
				}) => {
					const n = e.features.comments.submit.error[t];
					return n && n.fields ? n.fields.map(e => e.msg) : []
				},
				Y = (e, {
					draftKey: t
				}) => {
					const n = e.features.comments.drafts[t];
					return !!n && n.autofocusDisabled
				},
				B = (e, {
					draftKey: t
				}) => e.features.comments.drafts[t],
				V = (e, {
					commentId: t
				}) => {
					const n = t ? e.features.comments.submit.error[t] : void 0;
					return n && n.fields ? n.fields.map(e => e.msg) : void 0
				},
				G = (e, {
					commentId: t
				}) => !!t && e.features.comments.submit.pending[t],
				z = (e, {
					commentId: t
				}) => !!t && e.features.comments.models[t].sendReplies,
				q = e => e.features.comments.visitHighlightFilter,
				X = (e, t) => {
					const n = Object(u.b)(e, t);
					if (n) return Object(l.W)(e, n)
				},
				J = (e, {
					commentId: t
				}) => {
					var n, r;
					return !!((null === (r = null === (n = e.pages) || void 0 === n ? void 0 : n.comments) || void 0 === r ? void 0 : r.followed) || []).find(e => e.id === t)
				},
				Z = (e, {
					commentId: t
				}) => {
					var n, r;
					const s = ((null === (r = null === (n = e.pages) || void 0 === n ? void 0 : n.comments) || void 0 === r ? void 0 : r.followed) || []).find(e => e.id === t);
					return !!(s && s.expiresAt < Date.now())
				},
				Q = (e, {
					commentId: t
				}) => {
					let n = Object(u.b)(e, {
						commentId: t
					});
					for (; n && n.parentId;) {
						if (Object(c.g)(n)) return !0;
						if ((n = Object(u.b)(e, {
								commentId: n.parentId
							})) && Object(c.g)(n)) return !0
					}
					return !1
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compo~bd4baca2.4a783425b72d9d836a4f.js.map