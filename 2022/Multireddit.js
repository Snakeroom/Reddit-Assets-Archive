// https://www.redditstatic.com/desktop2x/Multireddit.a215a19a458d0df46f9a.js
// Retrieved at 5/9/2022, 10:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Multireddit"], {
		"./src/lib/forceHttps/index.ts": function(e, t, n) {
			"use strict";
			t.a = function(e) {
				return e.startsWith("http") ? e.replace(/^http:\/\//i, "https://") : `https://${e}`
			}
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/constants/intlSupport.ts");

			function s(e) {
				let {
					showDay: t,
					useUtc: n,
					shortMonths: s,
					locale: i = r.D
				} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				const c = new Date(e * r.Sb);
				return o.a ? new Intl.DateTimeFormat(i, {
					month: s ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: n ? "UTC" : void 0
				}).format(c) : c.toLocaleString()
			}
		},
		"./src/lib/humanizeUTCDate/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/constants/index.ts");
			t.a = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.D;
				const n = e.toString().length > 10,
					o = new Date(e * (n ? 1 : 1e3));
				return o.toLocaleString(t, {
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
		"./src/reddit/actions/multireddit/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "q", (function() {
				return r
			})), n.d(t, "r", (function() {
				return o
			})), n.d(t, "s", (function() {
				return s
			})), n.d(t, "t", (function() {
				return i
			})), n.d(t, "u", (function() {
				return c
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "i", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "l", (function() {
				return b
			})), n.d(t, "m", (function() {
				return f
			})), n.d(t, "k", (function() {
				return h
			})), n.d(t, "n", (function() {
				return x
			})), n.d(t, "o", (function() {
				return E
			})), n.d(t, "p", (function() {
				return _
			})), n.d(t, "a", (function() {
				return T
			})), n.d(t, "b", (function() {
				return D
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "A", (function() {
				return g
			})), n.d(t, "B", (function() {
				return y
			})), n.d(t, "z", (function() {
				return O
			})), n.d(t, "y", (function() {
				return I
			})), n.d(t, "v", (function() {
				return v
			})), n.d(t, "w", (function() {
				return S
			})), n.d(t, "x", (function() {
				return j
			})), n.d(t, "d", (function() {
				return k
			}));
			const r = "MULTIREDDIT__MORE_POSTS_FAILED",
				o = "MULTIREDDIT__MORE_POSTS_LOADED",
				s = "MULTIREDDIT__MORE_POSTS_PENDING",
				i = "MULTIREDDIT__MY_MULTIREDDITS_PENDING",
				c = "MULTIREDDIT__MY_MULTIREDDITS_RECEIVED",
				a = "MULTIREDDIT__CREATE_FAILURE",
				l = "MULTIREDDIT__CREATE_PENDING",
				d = "MULTIREDDIT__CREATE_SUCCESS",
				u = "MULTIREDDIT__DELETE_PENDING",
				m = "MULTIREDDIT__DELETE_SUCCESS",
				p = "MULTIREDDIT__DELETE_FAILURE",
				b = "MULTIREDDIT__DUPLICATE_PENDING",
				f = "MULTIREDDIT__DUPLICATE_SUCCESS",
				h = "MULTIREDDIT__DUPLICATE_FAILURE",
				x = "MULTIREDDIT__EDIT_FAILURE",
				E = "MULTIREDDIT__EDIT_PENDING",
				_ = "MULTIREDDIT__EDIT_SUCCESS",
				T = "MULTIREDDIT__ADD_SUBREDDIT_FAILURE",
				D = "MULTIREDDIT__ADD_SUBREDDIT_PENDING",
				C = "MULTIREDDIT__ADD_SUBREDDIT_SUCCESS",
				g = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_PENDING",
				y = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_SUCCESS",
				O = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_FAILURE",
				I = 10,
				v = "MULTIREDDIT__REMOVE_SUBREDDIT_FAILURE",
				S = "MULTIREDDIT__REMOVE_SUBREDDIT_PENDING",
				j = "MULTIREDDIT__REMOVE_SUBREDDIT_SUCCESS";
			var k;
			! function(e) {
				e.InvalidSrQuarantine = "INVALID_SR_QUARANTINE", e.TooManySubreddits = "MULTI_TOO_MANY_SUBREDDITS"
			}(k || (k = {}))
		},
		"./src/reddit/actions/subredditAutocomplete/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return s
			}));
			const r = "SUBREDDIT_AUTOCOMPLETE__PENDING",
				o = "SUBREDDIT_AUTOCOMPLETE__LOADED",
				s = "SUBREDDIT_AUTOCOMPLETE__FAILED"
		},
		"./src/reddit/actions/urlRequested.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./src/lib/matchRoute/index.ts"),
				o = n("./src/lib/opener/index.ts"),
				s = n("./node_modules/react-router-redux/es/index.js");
			const i = function(e) {
				let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
				return async (n, i, c) => {
					let {
						routes: a
					} = c;
					const l = i();
					Object(r.a)(e, a, l) ? n(Object(s.b)(e)) : t ? Object(o.e)(e, "_blank") : window.location.assign(e)
				}
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, n) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				c = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				a = n("./src/reddit/controls/TextButton/index.tsx"),
				l = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				d = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = n.n(d);
			const m = e => e.preventDefault();
			t.a = Object(i.a)(e => s.a.createElement(c.e, null, s.a.createElement(c.i, null, s.a.createElement(l.a, null, s.a.createElement(c.q, null, e.headerText || r.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), s.a.createElement(a.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, s.a.createElement(c.b, null)))), s.a.createElement(c.l, null, s.a.createElement(c.p, {
				className: u.a.ModalText
			}, e.modalText)), s.a.createElement(c.g, null, !e.hideCancelButton && s.a.createElement(c.a, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || r.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), s.a.createElement(c.u, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle,
				disabled: e.isDisabled
			}, e.actionText))))
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
				return W
			})), n.d(t, "b", (function() {
				return G
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/lodash/pick.js"),
				s = n.n(o),
				i = n("./node_modules/polished/dist/polished.es.js"),
				c = n("./node_modules/react/index.js"),
				a = n.n(c),
				l = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./src/lib/addQueryParams/index.ts"),
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
			const x = p.a.wrapped(e => {
				let {
					backgroundImage: t,
					style: n,
					...r
				} = e;
				return a.a.createElement("div", h({
					style: {
						...n || {},
						backgroundImage: `url('${t}')`
					}
				}, r))
			}, "EmojiDisplay", f.a);
			var E = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				_ = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				T = n("./src/reddit/constants/colors.ts"),
				D = n("./src/reddit/constants/parameters.ts"),
				C = n("./src/reddit/controls/InternalLink/index.tsx"),
				g = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				y = n("./src/reddit/icons/svgs/Close/index.tsx"),
				O = n("./src/reddit/models/Flair/index.ts"),
				I = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				v = n("./src/reddit/components/Flair/index.m.less"),
				S = n.n(v);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const k = Object(_.a)(E.b),
				L = p.a.div("FlairWrapper", S.a),
				N = p.a.wrapped(l.a, "CloseButton", S.a),
				U = p.a.wrapped(Object(m.a)(e => {
					let {
						forceSmallEmojis: t,
						theme: n,
						...r
					} = e;
					const o = n;
					return a.a.createElement(x, j({
						style: {
							...M(!!t, o) || {}
						}
					}, r))
				}), "FlairEmojiDisplay", S.a),
				M = (e, t) => {
					if (!e && !!t.subredditContext.emojiHeight && !!t.subredditContext.emojiWidth) return {
						height: `${t.subredditContext.emojiHeight}px`,
						width: `${t.subredditContext.emojiWidth}px`
					}
				},
				w = (e, t) => {
					const n = t ? `/r/${t}/search` : "/search",
						r = `${t?"flair_name":"flair"}:"${e}"`;
					return Object(d.a)(n, {
						[D.r]: r,
						[D.u]: t ? "1" : ""
					})
				},
				F = e => e.isFlairFilter ? a.a.createElement(C.a, {
					onMouseDown: e.onMouseDown,
					to: e.to || ""
				}, e.flair) : e.onClick ? a.a.createElement(C.a, {
					onClick: () => e.onClick(e.searchableTerm),
					to: w(e.searchableTerm, e.subredditName)
				}, e.flair) : e.flair;
			class R extends a.a.Component {
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
					const e = a.a.createElement("span", {
						className: Object(u.a)(this.props.className, {
							[S.a.transparentBackgroundColor]: "transparent" === this.props.backgroundColor
						}),
						onMouseEnter: this.props.tooltip ? this.onShowTooltip : void 0,
						onMouseLeave: this.props.tooltip ? this.onHideTooltip : void 0,
						ref: this.setTooltipTargetRef,
						style: {
							backgroundColor: this.props.backgroundColor || Object(I.a)(this.props).flair,
							color: `${B(this.props)}`
						}
					}, this.props.text, this.props.isSelected && a.a.createElement(N, {
						to: "./",
						onClick: this.props.onCloseClick
					}, a.a.createElement(y.a, {
						className: S.a.CloseIcon,
						style: {
							fill: this.props.backgroundColor || Object(I.a)(this.props).flair
						}
					})), !!this.props.tooltip && a.a.createElement(k, {
						text: this.props.tooltip,
						isOpen: this.state.isTooltipOpen,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: ["center", "top"],
						tooltipPosition: ["center", "bottom"]
					}));
					return a.a.createElement(F, {
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
			const P = Object(m.a)(R),
				A = Object(m.a)(e => {
					let t = "",
						n = !1;
					const r = e.richtext.map((r, o) => {
						if (r.e === O.c.Emoji) {
							const s = r;
							return t += s.a, n = !0, a.a.createElement(U, {
								forceSmallEmojis: e.forceSmallEmojis,
								backgroundImage: s.u,
								key: o,
								title: s.a
							})
						} {
							const e = r;
							return t += e.t, a.a.createElement("span", {
								key: o
							}, e.t)
						}
					});
					let o;
					n && !e.forceSmallEmojis && e.theme && e.theme.subredditContext.emojiWidth && e.theme.subredditContext.emojiHeight && e.theme.subredditContext.emojiHeight > 16 && (o = {
						marginTop: `-${e.theme.subredditContext.emojiHeight-16}px`
					});
					const s = a.a.createElement(L, {
						className: Object(u.a)(e.className, {
							[S.a.transparentBackgroundColor]: "transparent" === e.backgroundColor
						}),
						style: {
							...o,
							backgroundColor: e.backgroundColor || Object(I.a)(e).flair,
							color: `${B(e)}`
						}
					}, r, e.isSelected && a.a.createElement(N, {
						to: "./",
						onClick: e.onCloseClick
					}, a.a.createElement(y.a, {
						className: S.a.CloseIcon,
						style: {
							fill: e.backgroundColor || Object(I.a)(e).flair
						}
					})));
					return a.a.createElement(F, {
						flair: s,
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
				B = e => !e.textColor || e.textColor && !e.backgroundColor ? Object(I.a)(e).postFlairText : "transparent" === e.backgroundColor ? Object(g.a)(Object(I.a)(e).post, T.a.black, T.a.white) : e.textColor === O.e.Dark ? T.a.black : T.a.white,
				W = p.a.wrapped(P, "TextFlair", S.a),
				Z = p.a.wrapped(A, "RichTextFlair", S.a),
				H = e => {
					switch (e.type) {
						case "spoiler":
							return "#A4A7A8";
						case "nsfw":
							return "#FF585B";
						default:
							return Object(i.i)(.1, Object(I.a)(s()(e, "theme", "redditStyle", "data-redditstyle")).button)
					}
				},
				V = p.a.wrapped(e => {
					const t = H(e),
						n = a.a.createElement("span", {
							className: e.className,
							style: {
								border: `1px solid ${t}`,
								color: t
							}
						}, e.text);
					return a.a.createElement(F, {
						flair: n,
						searchableTerm: e.text
					})
				}, "MetaFlair", S.a);

			function G(e) {
				const {
					className: t,
					disabled: n = !1,
					flair: o,
					isFlairFilter: s,
					isSelected: i,
					onClick: c,
					onCloseClick: l,
					onMouseDown: d,
					subredditName: m,
					usesCommunityStyles: p,
					forceSmallEmojis: b,
					to: f
				} = e, h = Object(u.a)({
					[S.a.flairVariant]: s,
					[S.a.small]: s && !e.large,
					[S.a.large]: s && e.large
				}, t);
				switch (o.type) {
					case O.f.Richtext:
						return n || !o.richtext ? null : a.a.createElement(Z, {
							backgroundColor: o.backgroundColor,
							className: h,
							forceSmallEmojis: b,
							isFlairFilter: s,
							isSelected: i,
							onClick: c,
							onCloseClick: l,
							onMouseDown: d,
							redditStyle: !p,
							richtext: o.richtext,
							subredditName: m,
							textColor: o.textColor,
							to: f
						});
					case O.f.Text:
						return n || !o.text ? null : a.a.createElement(W, {
							backgroundColor: o.backgroundColor,
							className: h,
							isFlairFilter: s,
							isSelected: i,
							onClick: c,
							onCloseClick: l,
							onMouseDown: d,
							subredditName: m,
							text: o.text,
							textColor: o.textColor,
							redditStyle: !p,
							to: f
						});
					case O.f.Meta:
						return a.a.createElement(W, {
							backgroundColor: o.backgroundColor,
							className: t,
							isFlairFilter: s,
							subredditName: m,
							text: o.text,
							textColor: o.textColor,
							redditStyle: !p,
							to: f
						});
					case O.f.Nsfw:
					case O.f.Spoiler:
						return a.a.createElement(V, {
							className: t,
							text: o.text,
							type: o.type
						});
					case O.f.Quarantined:
						return null;
					case O.f.Oc:
						return a.a.createElement(W, {
							backgroundColor: T.a.alienblue,
							text: o.text,
							textColor: O.e.Light,
							tooltip: r.fbt._("This post is marked as Original Content [OC]", null, {
								hk: "h7je6"
							})
						});
					default:
						return o.text ? a.a.createElement(W, {
							backgroundColor: o.backgroundColor,
							className: h,
							isFlairFilter: s,
							onClick: c,
							onCloseClick: l,
							onMouseDown: d,
							subredditName: m,
							text: o.text,
							redditStyle: !p,
							to: f
						}) : null
				}
			}
		},
		"./src/reddit/components/HumanDate/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return h
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/timeAgo/index.ts"),
				i = n("./src/reddit/hooks/useLocale.ts");
			var c = function(e) {
					let {
						seconds: t,
						...n
					} = e;
					var r;
					const c = Object(i.a)(),
						a = {
							...n,
							locale: null !== (r = n.locale) && void 0 !== r ? r : c
						};
					return o.a.createElement(o.a.Fragment, null, Object(s.d)(t, a))
				},
				a = n("./src/lib/humanizeDate/index.ts");
			var l = function(e) {
					let {
						seconds: t,
						...n
					} = e;
					var r;
					const s = Object(i.a)(),
						c = {
							...n,
							locale: null !== (r = n.locale) && void 0 !== r ? r : s
						};
					return o.a.createElement(o.a.Fragment, null, Object(a.a)(t, c))
				},
				d = n("./src/lib/constants/index.ts");
			var u = function(e) {
					let {
						seconds: t,
						locale: n
					} = e;
					const r = Object(i.a)(),
						s = null != n ? n : r;
					return o.a.createElement(o.a.Fragment, null, function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.D;
						const n = e * d.Sb;
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
					}(t, s))
				},
				m = n("./node_modules/fbt/lib/FbtPublic.js"),
				p = n("./src/lib/eventTools/index.ts");

			function b(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.D;
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}

			function f(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
					r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d.D;
				const o = Object(p.e)(e, t),
					s = new Date(e * d.Sb);
				let i;
				if (o === p.a.Live || n) return m.fbt._("Now", null, {
					hk: "Prpcg"
				});
				return o === p.a.Future ? i = Object(p.d)(e) ? m.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : Object(p.b)(e) >= 5 ? b(s, r) : function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.D;
					return e.toLocaleDateString(t, {
						weekday: "long"
					})
				}(s, r) : o === p.a.Past && (i = Object(p.d)(e) ? m.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : b(s, r)), `${i} @ ${function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d.D;return e.toLocaleTimeString(t,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(s,r)}`
			}
			var h = function(e) {
				let {
					startTime: t,
					endTime: n,
					isLive: r,
					locale: s
				} = e;
				const c = Object(i.a)(),
					a = null != s ? s : c;
				return o.a.createElement(o.a.Fragment, null, f(t, n, r, a))
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
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				a = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = n("./src/reddit/selectors/tooltip.ts"),
				d = n("./src/reddit/components/InfoTextTooltip/index.m.less"),
				u = n.n(d),
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
				h = e => o.a.createElement(b, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				x = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return o.a.createElement(f, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				E = Object(i.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: n
						} = t;
						return Object(l.b)(n)(e)
					}
				}),
				_ = Object(a.a)(x, [c.a.Click, c.a.Keydown]),
				T = Object(a.a)(h, [c.a.Click, c.a.Keydown]),
				D = Object(s.b)(E);
			t.c = D(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? o.a.createElement(_, p({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : o.a.createElement(T, p({}, e, {
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				}))
			})
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/higherOrderComponents/asTooltip.tsx"),
				i = n("./src/reddit/constants/elementIds.ts"),
				c = n("./src/reddit/contexts/InsideOverlay.tsx");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}

			function l(e, t) {
				const n = Object(s.a)(e, t);
				class r extends o.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(i.e);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return o.a.createElement(n, a({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(c.b)(r)
			}
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, n) {
			e.exports = {
				BaseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				baseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				a = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				l = n.n(a),
				d = n("./src/lib/classNames/index.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const m = (e, t, n) => null != n ? n : t ? e : i.c.Plain,
				p = e => {
					let {
						border: t,
						priority: n,
						small: r,
						...o
					} = e;
					return s.a.createElement(i.t, u({}, o, {
						priority: m(i.c.Primary, t, n),
						className: Object(d.a)(o.className, l.a.BaseButton),
						size: r ? i.d.S : i.d.M
					}))
				},
				b = e => s.a.createElement(s.a.Fragment, null, s.a.createElement("span", {
					className: l.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? r.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : r.fbt._("Following", null, {
					hk: "1wQlVR"
				})), s.a.createElement("span", {
					className: l.a.UnsubscribeButtonHover
				}, "subreddit" === e ? r.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : r.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				f = e => {
					let {
						buttonType: t,
						border: n,
						priority: r,
						small: o,
						...c
					} = e;
					return s.a.createElement(i.t, u({}, c, {
						priority: m(i.c.Secondary, n, r),
						className: Object(d.a)(c.className, l.a.BaseButton),
						size: o ? i.d.S : i.d.M,
						text: b(t)
					}))
				};
			class h extends s.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? (this.props.onUnsubscribe(), this.props.afterUnsubscribeAction && this.props.afterUnsubscribeAction()) : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						id: n,
						priority: r,
						small: o = !1,
						isFullWidth: i = !1,
						style: a
					} = this.props, l = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: r,
						small: o,
						isFullWidth: i,
						style: a
					};
					return this.props.userIsSubscriber ? s.a.createElement(f, u({}, l, {
						buttonType: this.props.identifier.type
					})) : s.a.createElement(p, u({}, l, {
						id: n
					}), this.props.children, Object(c.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/components/TrackingHelper/index.tsx"),
				o = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				s = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(o.a)(Object(r.c)(s.a))
		},
		"./src/reddit/components/UserIcon/CurrentUserIcon.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/classNames/index.ts"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				l = n("./src/reddit/selectors/user.ts"),
				d = n("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				u = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				m = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				p = n("./src/reddit/components/UserIcon/UserIcon.m.less"),
				b = n.n(p);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const h = Object(c.c)({
					currentUser: l.k,
					isNightMode: l.db,
					isPresenceUserPrefEnabled: l.V,
					shouldHideNSFW: l.F
				}),
				x = Object(i.b)(h);
			t.a = x(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: n,
					isPresenceUserPrefEnabled: o,
					wrapperClassName: i,
					...c
				} = e, l = Object(a.b)(null == t ? void 0 : t.accountIcon);
				return s.a.createElement("div", {
					className: Object(r.a)(b.a.currentUserIconWrapper, i)
				}, l ? s.a.createElement(u.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : s.a.createElement(m.b, f({}, c, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), n && s.a.createElement(d.default, {
					showPresence: !0
				}))
			})
		},
		"./src/reddit/controls/OutboundLink/styled.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/constants/elementClassNames.ts"),
				s = n("./src/reddit/controls/OutboundLink/index.tsx"),
				i = n("./src/reddit/controls/OutboundLink/styles.m.less"),
				c = n.n(i);
			t.a = r.a.wrapped(s.b, "styledOutboundLink", {
				styledOutboundLink: `${c.a.styledOutboundLink} ${o.l}`
			})
		},
		"./src/reddit/controls/OutboundLink/styles.m.less": function(e, t, n) {
			e.exports = {
				styledOutboundLink: "_13svhQIUZqD9PVzFcLwOKT"
			}
		},
		"./src/reddit/endpoints/subreddit/recommendations.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/makeGqlRequest/index.ts"),
				o = n("./src/redditGQL/operations/SubredditRecommendations.json");
			t.a = (e, t) => Object(r.a)(e, {
				...o,
				variables: t
			})
		},
		"./src/reddit/helpers/isListingFocused/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/brcast/dist/brcast.es.js");
			const o = Object(r.a)({
				isListingFocused: !1
			})
		},
		"./src/reddit/helpers/richTextJson/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return c
			})), n.d(t, "g", (function() {
				return a
			})), n.d(t, "b", (function() {
				return d
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
			const o = "giphy|",
				s = "emote|",
				i = "|downsized";

			function c(e, t) {
				return o + e + (t ? i : "")
			}

			function a(e) {
				return !!(null == e ? void 0 : e.startsWith(o))
			}

			function l(e) {
				return !!(null == e ? void 0 : e.startsWith(s))
			}

			function d(e) {
				var t;
				const n = null === (t = null == e ? void 0 : e.media) || void 0 === t ? void 0 : t.mediaMetadata;
				return !!n && Object.keys(n).some(a)
			}

			function u(e) {
				var t;
				const n = null === (t = null == e ? void 0 : e.media) || void 0 === t ? void 0 : t.mediaMetadata;
				return !!n && Object.keys(n).some(l)
			}

			function m(e) {
				let t = e.substring(o.length);
				return t.indexOf("|") && (t = t.split("|")[0]), `https://giphy.com/gifs/${t}`
			}

			function p(e, t) {
				return (Array.isArray(e) ? e : e.c && Array.isArray(e.c) ? e.c : []).reduce((e, n) => [...e, ...p(n, t)], !Array.isArray(e) && t(e) ? [e] : [])
			}

			function b(e) {
				return p(e, r.F).map(e => e.id)
			}

			function f(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				return p(e, e => e.e === r.o || t && e.e === r.y).map(e => e.u ? e.u : `https://reddit.com/r/${e.t}`)
			}
		},
		"./src/reddit/helpers/trackers/customFeeds.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "f", (function() {
				return u
			}));
			var r = n("./src/reddit/selectors/telemetry.ts");
			const o = (e, t) => ({
					...Object(r.n)(t),
					customFeed: Object(r.m)(t, e),
					source: "custom_feeds"
				}),
				s = e => t => ({
					...o(e, t),
					action: "click",
					noun: "delete"
				}),
				i = e => t => ({
					...o(e, t),
					action: "click",
					noun: "follow"
				}),
				c = e => t => ({
					...o(e, t),
					action: "click",
					noun: "unfollow"
				}),
				a = e => t => ({
					...o(e, t),
					action: "click",
					noun: "duplicate"
				}),
				l = e => t => ({
					...o(e, t),
					action: "click",
					noun: "share"
				}),
				d = e => t => ({
					...o(e, t),
					action: "click",
					noun: "favorite",
					source: "community_nav"
				}),
				u = e => t => ({
					...o(e, t),
					action: "click",
					noun: "unfavorite",
					source: "community_nav"
				})
		},
		"./src/reddit/helpers/trackers/subredditCreation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "h", (function() {
				return a
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			}));
			var r = n("./src/reddit/helpers/correlationIdTracker.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const s = e => t => ({
					source: e,
					noun: "create_community_button",
					action: "click",
					...o.n(t),
					actionInfo: o.d(t, {
						settingValue: t.user.account && t.user.account.isMod ? "existing_mod" : "new_mod"
					}),
					correlationId: Object(r.e)(r.a.SubredditCreation, !0)
				}),
				i = (e, t, n) => s => ({
					source: "community_form",
					noun: "save_community_button",
					action: "click",
					...o.n(s),
					actionInfo: o.d(s, {
						settingValue: e
					}),
					subreddit: {
						id: n,
						name: t.name,
						publicDescription: t.publicDescription,
						nsfw: t.over18,
						accessType: t.type,
						topicTagContents: t.allTags,
						topicTagPrimaryId: t.primaryTagId
					},
					correlationId: Object(r.c)(r.a.SubredditCreation)
				}),
				c = () => e => ({
					source: "community_form",
					noun: "cancel",
					action: "click",
					...o.n(e),
					actionInfo: o.d(e),
					correlationId: Object(r.c)(r.a.SubredditCreation)
				}),
				a = (e, t) => n => ({
					source: "community_form",
					noun: "error_message",
					action: "view",
					...o.n(n),
					actionInfo: o.d(n, {
						reason: e,
						settingValue: t
					}),
					correlationId: Object(r.c)(r.a.SubredditCreation)
				}),
				l = () => e => ({
					source: "user_dropdown",
					noun: "create_community",
					action: "click",
					...o.n(e),
					actionInfo: o.d(e)
				}),
				d = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "view",
					...o.n(e),
					actionInfo: o.d(e)
				}),
				u = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "click",
					...o.n(e),
					actionInfo: o.d(e)
				}),
				m = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "dismiss",
					...o.n(e),
					actionInfo: o.d(e)
				})
		},
		"./src/reddit/hooks/useClickSourceData.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/react/index.js"),
				o = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/reddit/helpers/clickSourceData/index.ts");

			function i() {
				const e = Object(o.e)(e => e.platform.currentPage),
					[t, n] = Object(r.useState)({});
				return Object(r.useEffect)(() => {
					n(Object(s.b)(e))
				}, [e]), t
			}
		},
		"./src/reddit/hooks/useLocale.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			}));
			var r = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				o = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/selectors/meta.ts");
			const c = "undefined" == typeof document ? function() {
				const e = Object(s.e)(i.i) || o.DEFAULT_LOCALE;
				return Object(r.isPseudoLocale)(e) ? o.DEFAULT_LOCALE : e
			} : function() {
				const e = document.documentElement.lang || o.DEFAULT_LOCALE;
				return Object(r.isPseudoLocale)(e) ? o.DEFAULT_LOCALE : e
			};
			t.a = c;
			const a = () => {
				const e = c(),
					t = Object(s.e)(i.b);
				return t ? e.replace(/([a-z]+-)([A-Z]+)/, `$1${t}`) : e
			}
		},
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 40 40",
				xmlns: "http://www.w3.org/2000/svg",
				fill: e.fill
			}, o.a.createElement("g", null, o.a.createElement("rect", {
				x: "7.5",
				y: "12.5",
				width: "0",
				height: "0"
			}), o.a.createElement("path", {
				fill: "inherit",
				d: "M32.5,17.5v-2.6c0-6.8-5.6-12.4-12.4-12.4h-0.2c-6.8,0-12.4,5.6-12.4,12.4v2.6C6.1,17.5,5,18.6,5,20v10c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V20C35,18.6,33.9,17.5,32.5,17.5z M12.5,17.5v-2.6c0-4.1,3.3-7.4,7.4-7.4h0.2c4.1,0,7.4,3.3,7.4,7.4v2.6H12.5z"
			})))
		},
		"./src/reddit/icons/svgs/Search/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
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
			var r = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/layout/row/Inline/index.m.less"),
				s = n.n(o);
			t.a = r.a.div("inlineRow", s.a)
		},
		"./src/reddit/models/ContentGate.ts": function(e, t, n) {
			"use strict";
			var r;
			n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.CustomFeedDoesNotExist = "CustomFeedDoesNotExist", e.GoldSubreddit = "GoldSubreddit", e.Nsfw = "Nsfw", e.NsfwCustomFeed = "NsfwCustomFeed", e.PrivateSubreddit = "PrivateSubreddit", e.ProfileDoesNotExist = "ProfileDoesNotExist", e.ProfileDeleted = "ProfileDeleted", e.ProfileSuspended = "ProfileSuspended", e.ProfileBlockedForLegalReason = "ProfileBlockedForLegalReason", e.QuarantinedSubreddit = "QuarantinedSubreddit", e.GatedSubreddit = "GatedSubreddit", e.SubredditBanned = "SubredditBanned", e.SubredditBlockedForLegalReason = "SubredditBlockedForLegalReason", e.SubredditDoesNotExist = "SubredditDoesNotExist", e.PostBlockedForLegalReason = "PostBlockedForLegalReason"
				}(r || (r = {}))
		},
		"./src/reddit/selectors/experiments/joinOptimizations.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/experiments/index.ts");
			const c = Object(r.a)(e => Object(s.c)(e, {
					experimentName: o.Jb,
					experimentEligibilitySelector: i.e
				}), e => e === o.Y.Enabled),
				a = Object(r.a)(e => Object(s.c)(e, {
					experimentName: o.Kb,
					experimentEligibilitySelector: i.e
				}), e => e === o.Z.Enabled),
				l = Object(r.a)(e => Object(s.c)(e, {
					experimentName: o.Lb,
					experimentEligibilitySelector: i.e
				}), e => e === o.ab.Enabled),
				d = Object(r.a)(e => Object(s.c)(e, {
					experimentName: o.Mb,
					experimentEligibilitySelector: i.e
				}), e => e === o.bb.Enabled),
				u = Object(r.a)(e => Object(s.c)(e, {
					experimentName: o.Ob,
					experimentEligibilitySelector: i.e
				}), e => e === o.db.Enabled),
				m = Object(r.a)(e => Object(s.c)(e, {
					experimentName: o.Nb,
					experimentEligibilitySelector: i.e
				}), e => e === o.cb.Enabled)
		},
		"./src/redditGQL/operations/SubredditRecommendations.json": function(e) {
			e.exports = JSON.parse('{"id":"074eb98957ec"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Multireddit.a215a19a458d0df46f9a.js.map