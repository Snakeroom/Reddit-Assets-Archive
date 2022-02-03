// https://www.redditstatic.com/desktop2x/Multireddit.92ca0cf708446934f026.js
// Retrieved at 2/3/2022, 11:00:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Multireddit"], {
		"./src/lib/humanizeDate/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/constants/intlSupport.ts");

			function s(e, {
				showDay: t,
				useUtc: n,
				shortMonths: s,
				locale: i = r.D
			} = {}) {
				const c = new Date(e * r.Rb);
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
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "c", (function() {
				return S
			})), n.d(t, "b", (function() {
				return C
			}));
			var r, o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/performanceTimings/index.tsx"),
				i = n("./src/reddit/actions/focusedVerticals/constants.ts"),
				c = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(r || (r = {}));
			var d, l = n("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				u = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(d || (d = {}));
			var m = n("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				p = n("./src/reddit/selectors/platform.ts"),
				b = n("./src/reddit/selectors/user.ts");
			const f = Object(o.a)(i.g),
				x = Object(o.a)(i.e),
				h = Object(o.a)(i.h),
				E = Object(o.a)(i.c),
				_ = Object(o.a)(i.f),
				y = Object(o.a)(i.j),
				S = Object(o.a)(i.i),
				T = () => async (e, t, {
					gqlContext: n
				}) => {
					const o = t(),
						s = Object(m.e)(o),
						i = Object(m.d)(o),
						d = Object(b.J)(o);
					if (s || !i) return;
					e(h());
					let p = !1;
					try {
						const t = d ? r.LoggedInGeo : r.LoggedOutGeo,
							o = await ((e, t, n) => Object(c.a)(e, {
								...a,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(n(), t);
						if (o.ok && o.body) {
							const {
								data: t
							} = o.body;
							if (g(t)) {
								if (O(t)) {
									e(E({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), p = !0
								} else if (j(t)) {
									const n = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: r,
											interactedSubreddit: o,
											category: s
										} = n.focusRecommendations[0],
										i = [r, o],
										c = Object(u.d)(i),
										a = Object(l.b)(i),
										d = Object(u.c)(r),
										m = {
											recommendedSubredditIds: [r.id],
											interactedSubredditIds: [o.id],
											subreddits: c,
											subredditsAboutInfo: a,
											subredditTopContent: d,
											category: s,
											lastLoadedEnv: "client"
										};
									e(f(m)), p = !0
								}
							} else p = !1
						}
					} catch (_) {
						p = !1
					}
					p || e(x({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, g = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, O = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations;
					return !(!n || 0 !== n.length)
				}, j = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations,
						r = t && t.type;
					return !!(n && !O(e) && r === d.GEO && n[0] && n[0].recommendedSubreddit && n[0].interactedSubreddit)
				}, C = () => async (e, t, n) => {
					var r, o;
					const i = t(),
						c = Object(m.g)(i);
					if (Object(m.f)(i) || null === c || "client" === c) {
						const n = null === (o = null === (r = Object(p.b)(t())) || void 0 === r ? void 0 : r.routeMatch) || void 0 === o ? void 0 : o.route.chunk,
							c = Object(b.K)(i);
						return Object(s.i)(() => e(T()), {
							name: "getFocusedVerticalsRequested",
							page: n,
							isLoggedIn: c
						})
					}
					if ("server" === c) return e(_({
						lastLoadedEnv: "client"
					}))
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
				return d
			})), n.d(t, "g", (function() {
				return l
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
				return x
			})), n.d(t, "n", (function() {
				return h
			})), n.d(t, "o", (function() {
				return E
			})), n.d(t, "p", (function() {
				return _
			})), n.d(t, "a", (function() {
				return y
			})), n.d(t, "b", (function() {
				return S
			})), n.d(t, "c", (function() {
				return T
			})), n.d(t, "A", (function() {
				return g
			})), n.d(t, "B", (function() {
				return O
			})), n.d(t, "z", (function() {
				return j
			})), n.d(t, "y", (function() {
				return C
			})), n.d(t, "v", (function() {
				return v
			})), n.d(t, "w", (function() {
				return I
			})), n.d(t, "x", (function() {
				return D
			})), n.d(t, "d", (function() {
				return k
			}));
			const r = "MULTIREDDIT__MORE_POSTS_FAILED",
				o = "MULTIREDDIT__MORE_POSTS_LOADED",
				s = "MULTIREDDIT__MORE_POSTS_PENDING",
				i = "MULTIREDDIT__MY_MULTIREDDITS_PENDING",
				c = "MULTIREDDIT__MY_MULTIREDDITS_RECEIVED",
				a = "MULTIREDDIT__CREATE_FAILURE",
				d = "MULTIREDDIT__CREATE_PENDING",
				l = "MULTIREDDIT__CREATE_SUCCESS",
				u = "MULTIREDDIT__DELETE_PENDING",
				m = "MULTIREDDIT__DELETE_SUCCESS",
				p = "MULTIREDDIT__DELETE_FAILURE",
				b = "MULTIREDDIT__DUPLICATE_PENDING",
				f = "MULTIREDDIT__DUPLICATE_SUCCESS",
				x = "MULTIREDDIT__DUPLICATE_FAILURE",
				h = "MULTIREDDIT__EDIT_FAILURE",
				E = "MULTIREDDIT__EDIT_PENDING",
				_ = "MULTIREDDIT__EDIT_SUCCESS",
				y = "MULTIREDDIT__ADD_SUBREDDIT_FAILURE",
				S = "MULTIREDDIT__ADD_SUBREDDIT_PENDING",
				T = "MULTIREDDIT__ADD_SUBREDDIT_SUCCESS",
				g = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_PENDING",
				O = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_SUCCESS",
				j = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_FAILURE",
				C = 10,
				v = "MULTIREDDIT__REMOVE_SUBREDDIT_FAILURE",
				I = "MULTIREDDIT__REMOVE_SUBREDDIT_PENDING",
				D = "MULTIREDDIT__REMOVE_SUBREDDIT_SUCCESS";
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
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, n) {
			e.exports = {
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/constants/modals.ts"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				h = n.n(x),
				E = n("./src/lib/lessComponent.tsx");
			const _ = "create-community-button",
				y = E.a.wrapped(l.c, "StyledTooltip", h.a),
				S = Object(c.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(f.ib)(e),
					userIsSuspended: f.R
				});
			t.a = Object(i.b)(S, (e, {
				eventSource: t
			}) => ({
				openCommunityCreation: n => {
					n(Object(b.c)(t)), e(Object(a.h)(m.a.SUBREDDIT_CREATION_MODAL_ID))
				},
				onShowTooltip: () => e(Object(d.f)({
					tooltipId: _
				})),
				onHideTooltip: () => e(Object(d.i)())
			}))(Object(u.c)(({
				className: e,
				eventSource: t,
				onShowTooltip: n,
				onHideTooltip: o,
				openCommunityCreation: i,
				sendEvent: c,
				userDoesNotHaveEnoughExpToCreateCommunity: a,
				userIsSuspended: d,
				onClick: l
			}) => {
				return s.a.createElement(p.t, {
					className: e,
					disabled: d || a,
					onClick: e => {
						l && l(e), i(c)
					},
					onMouseEnter: n,
					onMouseLeave: o,
					priority: p.c.Secondary,
					id: _,
					isFullWidth: !0
				}, r.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), a ? s.a.createElement(y, {
					caretOnTop: !0,
					tooltipId: _,
					text: r.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : d ? s.a.createElement(y, {
					caretOnTop: !0,
					tooltipId: _,
					text: r.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
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
				return A
			})), n.d(t, "a", (function() {
				return V
			})), n.d(t, "b", (function() {
				return Q
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/lodash/pick.js"),
				s = n.n(o),
				i = n("./node_modules/polished/dist/polished.es.js"),
				c = n("./node_modules/react/index.js"),
				a = n.n(c),
				d = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				l = n("./src/lib/addQueryParams/index.ts"),
				u = n("./src/lib/classNames/index.ts"),
				m = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				p = n("./src/lib/lessComponent.tsx"),
				b = n("./src/reddit/components/Emoji/index.m.less"),
				f = n.n(b);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const h = p.a.wrapped(({
				backgroundImage: e,
				style: t,
				...n
			}) => a.a.createElement("div", x({
				style: {
					...t || {},
					backgroundImage: `url('${e}')`
				}
			}, n)), "EmojiDisplay", f.a);
			var E = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				_ = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				y = n("./src/reddit/constants/colors.ts"),
				S = n("./src/reddit/constants/parameters.ts"),
				T = n("./src/reddit/controls/InternalLink/index.tsx"),
				g = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				O = n("./src/reddit/icons/svgs/Close/index.tsx"),
				j = n("./src/reddit/models/Flair/index.ts"),
				C = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				v = n("./src/reddit/components/Flair/index.m.less"),
				I = n.n(v);

			function D() {
				return (D = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const k = Object(_.a)(E.b),
				L = p.a.div("FlairWrapper", I.a),
				w = p.a.wrapped(d.a, "CloseButton", I.a),
				N = p.a.wrapped(Object(m.a)(({
					forceSmallEmojis: e,
					theme: t,
					...n
				}) => {
					const r = t;
					return a.a.createElement(h, D({
						style: {
							...F(!!e, r) || {}
						}
					}, n))
				}), "FlairEmojiDisplay", I.a),
				F = (e, t) => {
					if (!e && !!t.subredditContext.emojiHeight && !!t.subredditContext.emojiWidth) return {
						height: `${t.subredditContext.emojiHeight}px`,
						width: `${t.subredditContext.emojiWidth}px`
					}
				},
				M = (e, t) => {
					const n = t ? `/r/${t}/search` : "/search",
						r = `${t?"flair_name":"flair"}:"${e}"`;
					return Object(l.a)(n, {
						[S.q]: r,
						[S.t]: t ? "1" : ""
					})
				},
				R = e => e.isFlairFilter ? a.a.createElement(T.a, {
					onMouseDown: e.onMouseDown,
					to: e.to || ""
				}, e.flair) : e.onClick ? a.a.createElement(T.a, {
					onClick: () => e.onClick(e.searchableTerm),
					to: M(e.searchableTerm, e.subredditName)
				}, e.flair) : e.flair;
			class P extends a.a.Component {
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
							[I.a.transparentBackgroundColor]: "transparent" === this.props.backgroundColor
						}),
						onMouseEnter: this.props.tooltip ? this.onShowTooltip : void 0,
						onMouseLeave: this.props.tooltip ? this.onHideTooltip : void 0,
						ref: this.setTooltipTargetRef,
						style: {
							backgroundColor: this.props.backgroundColor || Object(C.a)(this.props).flair,
							color: `${A(this.props)}`
						}
					}, this.props.text, this.props.isSelected && a.a.createElement(w, {
						to: "./",
						onClick: this.props.onCloseClick
					}, a.a.createElement(O.a, {
						className: I.a.CloseIcon,
						style: {
							fill: this.props.backgroundColor || Object(C.a)(this.props).flair
						}
					})), !!this.props.tooltip && a.a.createElement(k, {
						text: this.props.tooltip,
						isOpen: this.state.isTooltipOpen,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: ["center", "top"],
						tooltipPosition: ["center", "bottom"]
					}));
					return a.a.createElement(R, {
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
			const U = Object(m.a)(P),
				B = Object(m.a)(e => {
					let t = "",
						n = !1;
					const r = e.richtext.map((r, o) => {
						if (r.e === j.c.Emoji) {
							const s = r;
							return t += s.a, n = !0, a.a.createElement(N, {
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
							[I.a.transparentBackgroundColor]: "transparent" === e.backgroundColor
						}),
						style: {
							...o,
							backgroundColor: e.backgroundColor || Object(C.a)(e).flair,
							color: `${A(e)}`
						}
					}, r, e.isSelected && a.a.createElement(w, {
						to: "./",
						onClick: e.onCloseClick
					}, a.a.createElement(O.a, {
						className: I.a.CloseIcon,
						style: {
							fill: e.backgroundColor || Object(C.a)(e).flair
						}
					})));
					return a.a.createElement(R, {
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
				A = e => !e.textColor || e.textColor && !e.backgroundColor ? Object(C.a)(e).postFlairText : "transparent" === e.backgroundColor ? Object(g.a)(Object(C.a)(e).post, y.a.black, y.a.white) : e.textColor === j.e.Dark ? y.a.black : y.a.white,
				V = p.a.wrapped(U, "TextFlair", I.a),
				H = p.a.wrapped(B, "RichTextFlair", I.a),
				G = e => {
					switch (e.type) {
						case "spoiler":
							return "#A4A7A8";
						case "nsfw":
							return "#FF585B";
						default:
							return Object(i.i)(.1, Object(C.a)(s()(e, "theme", "redditStyle", "data-redditstyle")).button)
					}
				},
				W = p.a.wrapped(e => {
					const t = G(e),
						n = a.a.createElement("span", {
							className: e.className,
							style: {
								border: `1px solid ${t}`,
								color: t
							}
						}, e.text);
					return a.a.createElement(R, {
						flair: n,
						searchableTerm: e.text
					})
				}, "MetaFlair", I.a);

			function Q(e) {
				const {
					className: t,
					disabled: n = !1,
					flair: o,
					isFlairFilter: s,
					isSelected: i,
					onClick: c,
					onCloseClick: d,
					onMouseDown: l,
					subredditName: m,
					usesCommunityStyles: p,
					forceSmallEmojis: b,
					to: f
				} = e, x = Object(u.a)({
					[I.a.flairVariant]: s,
					[I.a.small]: s && !e.large,
					[I.a.large]: s && e.large
				}, t);
				switch (o.type) {
					case j.f.Richtext:
						return n || !o.richtext ? null : a.a.createElement(H, {
							backgroundColor: o.backgroundColor,
							className: x,
							forceSmallEmojis: b,
							isFlairFilter: s,
							isSelected: i,
							onClick: c,
							onCloseClick: d,
							onMouseDown: l,
							redditStyle: !p,
							richtext: o.richtext,
							subredditName: m,
							textColor: o.textColor,
							to: f
						});
					case j.f.Text:
						return n || !o.text ? null : a.a.createElement(V, {
							backgroundColor: o.backgroundColor,
							className: x,
							isFlairFilter: s,
							isSelected: i,
							onClick: c,
							onCloseClick: d,
							onMouseDown: l,
							subredditName: m,
							text: o.text,
							textColor: o.textColor,
							redditStyle: !p,
							to: f
						});
					case j.f.Meta:
						return a.a.createElement(V, {
							backgroundColor: o.backgroundColor,
							className: t,
							isFlairFilter: s,
							subredditName: m,
							text: o.text,
							textColor: o.textColor,
							redditStyle: !p,
							to: f
						});
					case j.f.Nsfw:
					case j.f.Spoiler:
						return a.a.createElement(W, {
							className: t,
							text: o.text,
							type: o.type
						});
					case j.f.Quarantined:
						return null;
					case j.f.Oc:
						return a.a.createElement(V, {
							backgroundColor: y.a.alienblue,
							text: o.text,
							textColor: j.e.Light,
							tooltip: r.fbt._("This post is marked as Original Content [OC]", null, {
								hk: "h7je6"
							})
						});
					default:
						return o.text ? a.a.createElement(V, {
							backgroundColor: o.backgroundColor,
							className: x,
							isFlairFilter: s,
							onClick: c,
							onCloseClick: d,
							onMouseDown: l,
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
				return d
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return x
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/timeAgo/index.ts"),
				i = n("./src/reddit/hooks/useLocale.ts");
			var c = function({
					seconds: e,
					...t
				}) {
					var n;
					const r = Object(i.a)(),
						c = {
							...t,
							locale: null !== (n = t.locale) && void 0 !== n ? n : r
						};
					return o.a.createElement(o.a.Fragment, null, Object(s.d)(e, c))
				},
				a = n("./src/lib/humanizeDate/index.ts");
			var d = function({
					seconds: e,
					...t
				}) {
					var n;
					const r = Object(i.a)(),
						s = {
							...t,
							locale: null !== (n = t.locale) && void 0 !== n ? n : r
						};
					return o.a.createElement(o.a.Fragment, null, Object(a.a)(e, s))
				},
				l = n("./src/lib/constants/index.ts");
			var u = function({
					seconds: e,
					locale: t
				}) {
					const n = Object(i.a)(),
						r = null != t ? t : n;
					return o.a.createElement(o.a.Fragment, null, function(e, t = l.D) {
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
				const o = Object(p.e)(e, t),
					s = new Date(e * l.Rb);
				let i;
				if (o === p.a.Live || n) return m.fbt._("Now", null, {
					hk: "Prpcg"
				});
				return o === p.a.Future ? i = Object(p.d)(e) ? m.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : Object(p.b)(e) >= 5 ? b(s, r) : function(e, t = l.D) {
					return e.toLocaleDateString(t, {
						weekday: "long"
					})
				}(s, r) : o === p.a.Past && (i = Object(p.d)(e) ? m.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : b(s, r)), `${i} @ ${function(e,t=l.D){return e.toLocaleTimeString(t,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(s,r)}`
			}
			var x = function({
				startTime: e,
				endTime: t,
				isLive: n,
				locale: r
			}) {
				const s = Object(i.a)(),
					c = null != r ? r : s;
				return o.a.createElement(o.a.Fragment, null, f(e, t, n, c))
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
				return x
			})), n.d(t, "a", (function() {
				return h
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				a = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
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
				x = e => o.a.createElement(b, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				h = e => {
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
					isOpen: (e, {
						tooltipId: t
					}) => Object(d.b)(t)(e)
				}),
				_ = Object(a.a)(h, [c.a.Click, c.a.Keydown]),
				y = Object(a.a)(x, [c.a.Click, c.a.Keydown]),
				S = Object(s.b)(E);
			t.c = S(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? o.a.createElement(_, p({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : o.a.createElement(y, p({}, e, {
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				}))
			})
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
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "n", (function() {
				return f
			})), n.d(t, "p", (function() {
				return x
			})), n.d(t, "o", (function() {
				return h
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "m", (function() {
				return _
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "j", (function() {
				return S
			})), n.d(t, "k", (function() {
				return T
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "i", (function() {
				return O
			})), n.d(t, "q", (function() {
				return j
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "l", (function() {
				return v
			})), n.d(t, "t", (function() {
				return I
			})), n.d(t, "u", (function() {
				return D
			})), n.d(t, "r", (function() {
				return k
			})), n.d(t, "a", (function() {
				return L
			})), n.d(t, "s", (function() {
				return w
			})), n.d(t, "c", (function() {
				return N
			}));
			var r = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				c = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/controls/Input/ModalInput.tsx"),
				d = n("./src/reddit/icons/svgs/Close/index.tsx"),
				l = n("./src/reddit/components/ModalStyledComponents/index.m.less"),
				u = n.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const p = o.a.wrapped(d.a, "CloseIcon", u.a),
				b = o.a.section("ModalBody", u.a),
				f = o.a.section("ModalPostPreview", u.a),
				x = o.a.p("ModalText", u.a),
				h = o.a.div("ModalSmallText", u.a),
				E = o.a.div("ModalDescriptionText", u.a),
				_ = o.a.div("ModalMetaText", u.a),
				y = o.a.label("ModalFormItem", u.a),
				S = o.a.wrapped(a.a, "ModalInput", u.a),
				T = o.a.label("ModalInputLabel", u.a),
				g = o.a.footer("ModalFooter", u.a),
				O = o.a.header("ModalHeader", u.a),
				j = o.a.div("ModalTitle", u.a),
				C = o.a.div("ModalAnnotation", u.a),
				v = o.a.div("ModalMain", u.a),
				I = o.a.textarea("TextArea", u.a),
				D = o.a.wrapped(c.l, "WarningButton", u.a),
				k = o.a.wrapped(c.l, "PrimaryButton", u.a),
				L = o.a.wrapped(c.o, "CancelButton", u.a),
				w = o.a.wrapped(c.r, "RemoveButton", u.a),
				N = ({
					className: e,
					...t
				}) => i.a.createElement(c.t, m({
					kind: c.b.Button,
					priority: c.c.Primary,
					className: Object(r.a)(u.a.ConfirmButton, e)
				}, t))
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
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

			function d(e, t) {
				const n = Object(s.a)(e, t);
				class r extends o.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(i.d);
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
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/SidebarContainer/index.m.less"),
				s = n.n(o);
			t.a = r.a.div("container", s.a)
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1oRQu-aolgpPPJDblUGTw5",
				container: "_1oRQu-aolgpPPJDblUGTw5",
				BackToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				backToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				StickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				stickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				StickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				stickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				LargeOffset: "_2Fh9XKrAUp6CQHSgW98LEb",
				largeOffset: "_2Fh9XKrAUp6CQHSgW98LEb"
			}
		},
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/classNames/index.ts"),
				o = n("./node_modules/lodash/throttle.js"),
				s = n.n(o),
				i = n("./node_modules/react/index.js"),
				c = n.n(i),
				a = n("./src/lib/constants/index.ts"),
				d = n("./src/reddit/constants/elementIds.ts"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/components/BackToTop/index.m.less"),
				m = n.n(u);
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js"), b = e => {
				if (e) {
					const e = document.getElementById(d.d);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			var f = ({
					className: e,
					isOverlay: t,
					style: n
				}) => c.a.createElement("div", {
					className: Object(r.a)(e, m.a.container),
					style: n
				}, c.a.createElement(l.l, {
					className: m.a.button,
					onClick: () => b(t)
				}, p._("Back to Top", null, {
					hk: "YjBtV"
				}))),
				x = n("./src/reddit/components/SidebarFooter/index.tsx"),
				h = n("./src/reddit/constants/componentSizes.ts"),
				E = n("./src/reddit/contexts/PageLayer/index.tsx"),
				_ = n("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				y = n.n(_),
				S = n("./src/lib/lessComponent.tsx");

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const g = a.e[1] + 24,
				O = h.f + 8,
				j = O + 152 + 16,
				C = j + g + 8,
				v = S.a.div("Container", y.a),
				I = S.a.wrapped(({
					className: e,
					isOverlay: t,
					...n
				}) => c.a.createElement(f, T({
					className: e,
					isOverlay: t,
					style: {
						top: `calc(100vh - ${t?O:8}px)`
					}
				}, n)), "BackToTop", y.a),
				D = ({
					children: e,
					className: t,
					isFakeOverlay: n,
					isSticky: o
				}) => c.a.createElement("div", {
					className: Object(r.a)(t, {
						[y.a.StickyStyles]: o && !n,
						[y.a.StickyStylesFakeOverlay]: !!n
					})
				}, e);
			class k extends i.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > C,
						shouldFooterSticky: this.windowHeight > j
					}), this.updateState = () => {
						if (this.isHidden()) return;
						const {
							shouldAdSticky: e,
							shouldFooterSticky: t
						} = this.getStickyContents();
						e === this.state.isAdSticky && t === this.state.isFooterSticky || this.setState({
							isAdSticky: e,
							isFooterSticky: t
						})
					}, this.updateMeasurements = () => {
						this.windowHeight = window.innerHeight
					}, this.handleResize = s()(() => {
						this.updateMeasurements(), this.updateState()
					}, a.K), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
						isAdSticky: !0,
						isFooterSticky: !0
					}
				}
				isHidden() {
					return !this.containerEl || null === this.containerEl.offsetParent
				}
				componentDidMount() {
					this.isHidden() || this.handleResize(), window.addEventListener("resize", this.handleResize)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				render() {
					var e;
					const {
						props: {
							adComponent: t,
							adComponentOnFakeOverlay: n,
							children: r,
							className: o,
							hideFooter: s,
							pageLayer: i
						}
					} = this, a = this.state.isAdSticky && !(!t && !r);
					return c.a.createElement(v, {
						className: o,
						innerRef: this.setWrapperRef
					}, c.a.createElement(D, {
						isFakeOverlay: n,
						isSticky: a
					}, t, r, !s && c.a.createElement(x.a, null)), !this.props.hideBackToTop && c.a.createElement(I, {
						isOverlay: !!(null === (e = null == i ? void 0 : i.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const L = Object(E.u)();
			t.a = L(k)
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
				return x
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				a = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				d = n.n(a),
				l = n("./src/lib/classNames/index.ts");

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
				p = ({
					border: e,
					priority: t,
					small: n,
					...r
				}) => s.a.createElement(i.t, u({}, r, {
					priority: m(i.c.Primary, e, t),
					className: Object(l.a)(r.className, d.a.BaseButton),
					size: n ? i.d.S : i.d.M
				})),
				b = e => s.a.createElement(s.a.Fragment, null, s.a.createElement("span", {
					className: d.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? r.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : r.fbt._("Following", null, {
					hk: "1wQlVR"
				})), s.a.createElement("span", {
					className: d.a.UnsubscribeButtonHover
				}, "subreddit" === e ? r.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : r.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				f = ({
					buttonType: e,
					border: t,
					priority: n,
					small: r,
					...o
				}) => s.a.createElement(i.t, u({}, o, {
					priority: m(i.c.Secondary, t, n),
					className: Object(l.a)(o.className, d.a.BaseButton),
					size: r ? i.d.S : i.d.M,
					text: b(e)
				}));
			class x extends s.a.Component {
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
						isFullWidth: i = !1
					} = this.props, a = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: r,
						small: o,
						isFullWidth: i
					};
					return this.props.userIsSubscriber ? s.a.createElement(f, u({}, a, {
						buttonType: this.props.identifier.type
					})) : s.a.createElement(p, u({}, a, {
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
				d = n("./src/reddit/selectors/user.ts"),
				l = n("./src/reddit/components/UserIcon/PresenceDot.tsx"),
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
			const x = Object(c.c)({
					currentUser: d.k,
					isNightMode: d.X,
					isPresenceUserPrefEnabled: d.P,
					shouldHideNSFW: d.C
				}),
				h = Object(i.b)(x);
			t.a = h(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: n,
					isPresenceUserPrefEnabled: o,
					wrapperClassName: i,
					...c
				} = e, d = Object(a.a)(null == t ? void 0 : t.accountIcon);
				return s.a.createElement("div", {
					className: Object(r.a)(b.a.currentUserIconWrapper, i)
				}, d ? s.a.createElement(u.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : s.a.createElement(m.b, f({}, c, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), n && s.a.createElement(l.default, {
					showPresence: !0
				}))
			})
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return g
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "b", (function() {
				return v
			}));
			var r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				s = n("./src/lib/objectSelector/index.ts"),
				i = n("./src/reddit/actions/ads/index.ts"),
				c = n("./src/reddit/actions/focusedVerticals/index.ts"),
				a = n("./src/reddit/actions/gold/tooltips.ts"),
				d = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/actions/postList.ts"),
				u = n("./src/reddit/actions/survey/index.ts"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/contexts/PageLayer/index.tsx"),
				b = n("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				f = n("./src/reddit/helpers/trackers/post.ts"),
				x = n("./src/reddit/components/PostList/Placeholder.tsx"),
				h = n("./src/reddit/featureFlags/index.ts"),
				E = n("./src/reddit/selectors/experiments/survey.ts"),
				_ = n("./src/reddit/selectors/listings.ts"),
				y = n("./src/reddit/selectors/posts.ts"),
				S = n("./src/reddit/selectors/subreddit.ts"),
				T = n("./src/reddit/selectors/tracking.ts");

			function g() {
				return Object(p.u)({
					currentProfileName: p.i,
					isCommentPermalink: p.w,
					isCommentsPage: p.x,
					isFrontpage: p.A,
					isProfilePostListing: p.L,
					isTopicPage: p.Q,
					pageLayer: e => e
				})
			}
			const O = g(),
				j = {
					apiError: _.c,
					apiPending: _.d,
					measureScrollFPS: h.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.R)(e, t),
					loadMore: _.g,
					postsById: y.S,
					postIds: Object(s.a)((e, {
						listingKey: t,
						listingName: n,
						inSubredditOrProfile: r
					}) => Object(y.D)(e, t, n, r)),
					subredditsById: S.Y,
					viewportDataLoaded: T.a,
					pageReferrer: p.U,
					postListPlaceholderComponent: () => x.a,
					isNpsScrollSurveyEnabled: E.e
				},
				C = Object(o.c)(j),
				v = e => ({
					onBottomViewed: (t, n) => e(l.c(t, n)),
					onFirstPostChanged: t => e(Object(a.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(i.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						t.isFrontpage && e(Object(c.a)({
							lastLoadedEnv: "server"
						})), e(d.L(t))
					},
					fireAdPixelsOfType: (t, n) => {
						e(d.z(t, n))
					},
					trackOnPostEnteredViewport: (t, n, r, o) => {
						e(d.O(t, r, o))
					},
					trackOnPostExitedViewport: (t, n, r, o, s) => {
						e(d.P(t, r, o, s))
					},
					showModalOnScroll: () => e(d.bb()),
					surveyTriggerScrollCounted: () => e(Object(u.k)())
				}),
				I = e => Object(b.b)({
					...e
				}),
				D = (e, t, n, r) => {
					const {
						listingKey: o,
						hostPostData: s,
						listingBelowVariant: i
					} = r;
					return Object(f.h)(e, t, "post", o, s, i, void 0)
				},
				k = Object(r.b)(C, v, (e, t, n) => ({
					...e,
					...t,
					...n,
					postComponentForLayout: I,
					postClickEventFactory: D
				}));
			t.a = e => Object(m.c)(O(k(e)))
		},
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/constants/keycodes.ts"),
				d = n("./src/reddit/controls/Input/index.m.less"),
				l = n.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			class m extends o.a.Component {
				constructor() {
					super(...arguments), this.handleKeyDown = ({
						keyCode: e
					}) => {
						e === a.a.Escape && this.props.closeModal()
					}
				}
				render() {
					const {
						className: e,
						closeModal: t,
						...n
					} = this.props;
					return o.a.createElement("input", u({
						className: Object(i.a)(l.a.input, e),
						onKeyDown: this.handleKeyDown
					}, n))
				}
			}
			t.a = Object(s.b)(null, {
				closeModal: c.f
			})(m)
		},
		"./src/reddit/controls/Input/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
			}
		},
		"./src/reddit/controls/MetaSeparator/index.m.less": function(e, t, n) {
			e.exports = {
				unstyledMetaSeparator: "_3LS4zudUBagjFS7HjWJYxo",
				metaSeparator: "_37gsGHa8DMRAxBmQS-Ppg8"
			}
		},
		"./src/reddit/controls/MetaSeparator/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/MetaSeparator/index.m.less"),
				c = n.n(i);
			const a = e => o.a.createElement("span", {
				className: Object(s.a)(c.a.unstyledMetaSeparator, e.className),
				role: "presentation"
			}, e.isSmall ? "·" : "•");
			t.b = ({
				className: e,
				isSmall: t
			}) => o.a.createElement(a, {
				className: Object(s.a)(c.a.metaSeparator, e),
				isSmall: t
			})
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
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "f", (function() {
				return u
			}));
			var r = n("./src/reddit/selectors/telemetry.ts");
			const o = (e, t) => ({
					...Object(r.m)(t),
					customFeed: Object(r.l)(t, e),
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
				d = e => t => ({
					...o(e, t),
					action: "click",
					noun: "share"
				}),
				l = e => t => ({
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
				return d
			})), n.d(t, "g", (function() {
				return l
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
					...o.m(t),
					actionInfo: o.c(t, {
						settingValue: t.user.account && t.user.account.isMod ? "existing_mod" : "new_mod"
					}),
					correlationId: Object(r.e)(r.a.SubredditCreation, !0)
				}),
				i = (e, t, n) => s => ({
					source: "community_form",
					noun: "save_community_button",
					action: "click",
					...o.m(s),
					actionInfo: o.c(s, {
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
					...o.m(e),
					actionInfo: o.c(e),
					correlationId: Object(r.c)(r.a.SubredditCreation)
				}),
				a = (e, t) => n => ({
					source: "community_form",
					noun: "error_message",
					action: "view",
					...o.m(n),
					actionInfo: o.c(n, {
						reason: e,
						settingValue: t
					}),
					correlationId: Object(r.c)(r.a.SubredditCreation)
				}),
				d = () => e => ({
					source: "user_dropdown",
					noun: "create_community",
					action: "click",
					...o.m(e),
					actionInfo: o.c(e)
				}),
				l = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "view",
					...o.m(e),
					actionInfo: o.c(e)
				}),
				u = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "click",
					...o.m(e),
					actionInfo: o.c(e)
				}),
				m = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "dismiss",
					...o.m(e),
					actionInfo: o.c(e)
				})
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
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, n) {},
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
		"./src/reddit/layout/twoCol/ExpandLeft/index.m.less": function(e, t, n) {
			e.exports = {
				left: "_5gAwSCo7K8G413IoE78Ml",
				right: "_2ghjBMFIsORwdO3oh2Kq6g",
				exapndLeftContainer: "_1zTJo0Ndih4fp__5DjbClN"
			}
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/layout/twoCol/ExpandLeft/index.m.less"),
				a = n.n(c);
			t.a = Object(s.a)(e => o.a.createElement("div", {
				className: Object(i.a)(a.a.exapndLeftContainer, e.className)
			}, o.a.createElement("div", {
				className: a.a.left
			}, Array.isArray(e.children) && e.children[0]), o.a.createElement("div", {
				className: a.a.right,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[1])), 2)
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
				return d
			})), n.d(t, "d", (function() {
				return l
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
					experimentName: o.zb,
					experimentEligibilitySelector: i.e
				}), e => e === o.X.Enabled),
				a = Object(r.a)(e => Object(s.c)(e, {
					experimentName: o.Ab,
					experimentEligibilitySelector: i.e
				}), e => e === o.Y.Enabled),
				d = Object(r.a)(e => Object(s.c)(e, {
					experimentName: o.Bb,
					experimentEligibilitySelector: i.e
				}), e => e === o.Z.Enabled),
				l = Object(r.a)(e => Object(s.c)(e, {
					experimentName: o.Cb,
					experimentEligibilitySelector: i.e
				}), e => e === o.ab.Enabled),
				u = Object(r.a)(e => Object(s.c)(e, {
					experimentName: o.Eb,
					experimentEligibilitySelector: i.e
				}), e => e === o.cb.Enabled),
				m = Object(r.a)(e => Object(s.c)(e, {
					experimentName: o.Db,
					experimentEligibilitySelector: i.e
				}), e => e === o.bb.Enabled)
		},
		"./src/reddit/selectors/focusedVerticalSuggestion.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return a
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "k", (function() {
				return m
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "d", (function() {
				return S
			}));
			var r = n("./src/lib/objectSelector/index.ts"),
				o = n("./src/reddit/featureFlags/index.ts"),
				s = n("./src/reddit/selectors/posts.ts"),
				i = n("./src/reddit/selectors/subreddit.ts"),
				c = n("./src/reddit/selectors/user.ts");
			const a = (e, t) => {
					const n = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (n) {
						const t = Object(i.R)(e, {
							subredditId: n
						});
						return t && t.displayText || ""
					}
					return ""
				},
				d = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				l = e => e.focusedVerticals.components.dismissed,
				u = [],
				m = Object(r.a)((e, t) => {
					const n = p(e, t);
					if (!n) return u;
					const r = Object(i.V)(e, {
						subredditName: n.name
					});
					return r && r.postIds && r.postIds.length ? r.postIds : u
				}),
				p = (e, t) => {
					const n = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return n ? Object(i.R)(e, {
						subredditId: n
					}) : null
				},
				b = (e, t, n, r, o) => {
					const i = o.find(e => e <= t) || -1,
						c = o.find(e => e > t) || 1 / 0;
					return t !== c && t !== i && (!(i + n > t) && (!(t + n > c) && !((e, t, n) => {
						const r = n[t - 1],
							o = n[t],
							i = o && Object(s.G)(e, {
								postId: r
							}) || null,
							c = o && Object(s.G)(e, {
								postId: o
							}) || null;
						return i && i.isSponsored || c && c.isSponsored
					})(e, t, r)))
				},
				f = [3],
				x = Object(r.a)((e, {
					existingDUPositions: t,
					listingProps: n
				}) => {
					const r = t.slice().sort();
					let o = -1;
					const i = Object(s.z)(e, {
							listingKey: n.listingKey
						}),
						c = [];
					return f.forEach(t => {
						let n = o + t;
						if (!(n >= i.length)) {
							for (; n < i.length && !b(e, n, t, i, r);) n += 1;
							n < i.length && (c.push(n), o = n)
						}
					}), c
				}),
				h = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				E = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				_ = e => e.focusedVerticals.category,
				y = e => e.focusedVerticals.lastLoadedEnv,
				S = e => {
					const t = Object(c.J)(e),
						n = o.d.geoSubredditRecommendationDULoggedIn(e),
						r = o.d.geoSubredditRecommendationDULoggedOut(e);
					return t && n || !t && r
				}
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = (e, {
				listingKey: t
			}) => e.tracking.viewportDataLoaded[t]
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"3b91bd4c7419"}')
		},
		"./src/redditGQL/operations/SubredditRecommendations.json": function(e) {
			e.exports = JSON.parse('{"id":"074eb98957ec"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Multireddit.92ca0cf708446934f026.js.map