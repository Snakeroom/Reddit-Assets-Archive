// https://www.redditstatic.com/desktop2x/reddit-components-ProfileIdCard.603fd0e29e7994c2ea66.js
// Retrieved at 1/10/2022, 2:40:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ProfileIdCard"], {
		"./node_modules/lodash/compact.js": function(e, t) {
			e.exports = function(e) {
				for (var t = -1, r = null == e ? 0 : e.length, n = 0, s = []; ++t < r;) {
					var a = e[t];
					a && (s[n++] = a)
				}
				return s
			}
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/reddit/constants/intlSupport.ts");

			function a(e, {
				showDay: t,
				useUtc: r,
				shortMonths: a,
				locale: o = n.D
			} = {}) {
				const i = new Date(e * n.Rb);
				return s.a ? new Intl.DateTimeFormat(o, {
					month: a ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: r ? "UTC" : void 0
				}).format(i) : i.toLocaleString()
			}
		},
		"./src/lib/humanizeUTCDate/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/constants/index.ts");
			t.a = (e, t = n.D) => {
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
		"./src/reddit/actions/blockedRedditors.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "f", (function() {
				return p
			})), r.d(t, "h", (function() {
				return f
			})), r.d(t, "g", (function() {
				return h
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/makeGqlRequest/index.ts"),
				a = r("./src/redditGQL/operations/FetchBlockedRedditorsInfo.json");
			const o = (e, t) => Object(s.a)(e, {
				...a,
				variables: t
			}, {
				traceRequestName: "get_blocked_redditors_info"
			});
			var i = r("./src/reddit/selectors/blockedRedditors.ts");
			const c = "BLOCKED_REDDITORS_LIST__ADD",
				d = "BLOCKED_REDDITORS_LIST__REMOVE",
				l = "BLOCKED_REDDITORS_LIST__FAILED",
				m = "BLOCKED_REDDITORS_LIST__LOADED",
				u = "BLOCKED_REDDITORS_LIST__PENDING",
				p = Object(n.a)(c),
				f = Object(n.a)(d),
				b = Object(n.a)(l),
				g = Object(n.a)(m),
				x = Object(n.a)(u),
				h = () => async (e, t, {
					gqlContext: r
				}) => {
					const n = t(),
						s = Object(i.a)(n);
					if (Object(i.b)(n) || s.timestamp && Date.now() - s.timestamp < 36e6) return;
					let a = !1,
						c = "";
					do {
						e(x());
						const t = {
								after: c,
								pageSize: 100
							},
							n = await o(r(), t);
						if (n && n.ok) {
							const {
								data: {
									identity: t
								}
							} = n.body;
							if (t && t.blockedRedditorsInfo) {
								const {
									pageInfo: r,
									edges: n
								} = t.blockedRedditorsInfo;
								if (e(g(n.map(e => e.node.id))), r) {
									const {
										hasNextPage: e,
										endCursor: t
									} = r;
									a = e, c = t || ""
								}
							} else a = !1
						} else {
							a = !1;
							const t = n.error ? n.error.type : "unknown error";
							e(b({
								message: t
							}))
						}
					} while (a)
				}
		},
		"./src/reddit/actions/userBlocks.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return m
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "h", (function() {
				return x
			})), r.d(t, "b", (function() {
				return h
			})), r.d(t, "c", (function() {
				return v
			})), r.d(t, "a", (function() {
				return I
			})), r.d(t, "g", (function() {
				return P
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/blockedRedditors.ts"),
				o = r("./src/reddit/actions/toaster.ts"),
				i = r("./src/reddit/endpoints/accounts/index.ts"),
				c = r("./src/reddit/models/Toast/index.ts"),
				d = r("./src/reddit/selectors/experiments/antievil/index.tsx"),
				l = r("./src/reddit/selectors/user.ts");
			const m = "USER_BLOCK__PENDING",
				u = "USER_BLOCK__LOADED",
				p = "USER_BLOCK__FAILED",
				f = Object(s.a)(m),
				b = Object(s.a)(u),
				g = Object(s.a)(p),
				x = e => async (t, r, {
					apiContext: s
				}) => {
					const l = r();
					if (l.blockUser.api.pending[e]) return;
					t(f({
						username: e
					}));
					const m = await Object(i.a)(s(), e),
						u = `error-block-${e}`;
					if (m.ok) m.body.name && t(b(m.body)), m.body.id && t(Object(a.f)(m.body.id)), t(o.g(u)), t(o.f({
						kind: c.b.SuccessCommunity,
						text: n.fbt._("{username} is now blocked", [n.fbt._param("username", e)], {
							hk: "MI2y8"
						})
					}));
					else {
						const r = {
								type: m.error ? m.error.type : "Unknown error",
								username: e
							},
							s = Object(d.c)(l) && "REBLOCK_RATE_LIMIT" === m.body.reason;
						t(g(r)), t(s ? o.f({
							id: u,
							kind: c.b.Error,
							text: n.fbt._("You can't block u/{username} for 24 hours after unblocking them", [n.fbt._param("username", e)], {
								hk: "W0oUd"
							}),
							buttonAction: x(e)
						}) : o.f({
							id: u,
							kind: c.b.Error,
							text: n.fbt._("An error has occured. Please try again later", null, {
								hk: "2FpsLy"
							}),
							buttonText: n.fbt._("Retry", null, {
								hk: "36rgQw"
							}),
							buttonAction: x(e)
						}))
					}
				}, h = "USER_UNBLOCK__PENDING", v = "USER_UNBLOCK__SUCCESS", I = "USER_UNBLOCK__FAILED", _ = Object(s.a)(h), C = Object(s.a)(v), O = Object(s.a)(I), P = e => async (t, r, {
					apiContext: s
				}) => {
					const d = r(),
						m = Object(l.k)(d),
						u = m ? m.id : void 0,
						p = d.user.blocked.data.filter(t => t.name === e)[0];
					u && (t(_({
						name: e
					})), (await Object(i.c)(s(), u, e)).ok ? (t(C({
						name: e
					})), p && p.id && t(Object(a.h)(p.id)), t(o.f({
						kind: c.b.SuccessCommunity,
						text: n.fbt._("{username} is now unblocked", [n.fbt._param("username", e)], {
							hk: "4CEi6N"
						})
					}))) : (t(o.f({
						kind: c.b.Error,
						text: n.fbt._("An error has occured. Please try again later", null, {
							hk: "2FpsLy"
						})
					})), t(O({
						name: e
					}))))
				}
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var n, s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/reddit/actions/chat/toggle.ts"),
				c = r("./src/reddit/components/TrackingHelper/index.tsx"),
				d = r("./src/reddit/controls/Button/index.tsx"),
				l = r("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(n || (n = {}));
			const m = ({
				onStartChat: e,
				text: t,
				className: r,
				sendEvent: s,
				contextId: o,
				priority: i,
				Icon: c,
				redditStyle: m,
				isFullWidth: u,
				eventSource: p,
				onClick: f,
				onAddUserToQuickReplyList: b,
				children: g
			}) => {
				return a.a.createElement(d.t, {
					onClick: t => {
						if (f && f(t), e(), p === n.awardNotification) return b();
						s(Object(l.b)(o))
					},
					className: r,
					text: t,
					priority: i,
					Icon: c,
					redditStyle: m,
					isFullWidth: u
				}, g)
			};
			m.displayName = "ChatButton";
			const u = Object(o.b)(null, (e, {
				contextId: t,
				userId: r
			}) => ({
				onStartChat: () => {
					e(Object(i.b)(r, t))
				},
				onAddUserToQuickReplyList: () => {
					e(Object(i.a)(r))
				}
			}));
			t.b = u(Object(c.c)(m))
		},
		"./src/reddit/components/CrisisFlow/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = r("./src/reddit/constants/colors.ts");
			const a = {
				backgroundColor: s.a.overlayReportFlow
			};
			t.b = Object(n.a)({
				resolved: {},
				chunkName: () => "CrisisFlow",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => r.e("CrisisFlow").then(r.bind(null, "./src/reddit/components/CrisisFlow/_CrisisFlow.tsx")).then(e => e.default),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/CrisisFlow/_CrisisFlow.tsx"
				}
			})
		},
		"./src/reddit/components/EditableImage/index.m.less": function(e, t, r) {
			e.exports = {
				Container: "_27zThB3Syksyv8gLdDJqep",
				container: "_27zThB3Syksyv8gLdDJqep",
				HitBox: "_1RlGOQJAoxE66cPOVTH0s",
				hitBox: "_1RlGOQJAoxE66cPOVTH0s",
				Image: "_1te2cn6lvn-YtGSv-hrM7g",
				image: "_1te2cn6lvn-YtGSv-hrM7g",
				ImageContainer: "_1z4A5-p2XgzMTJUEq3GaXu",
				imageContainer: "_1z4A5-p2XgzMTJUEq3GaXu",
				ImageUploader: "_3oOZrOdvGjAOYvzKCu-Kjf",
				imageUploader: "_3oOZrOdvGjAOYvzKCu-Kjf",
				LoadingIcon: "_3syvcMeczod-NOIewWIb8n",
				loadingIcon: "_3syvcMeczod-NOIewWIb8n",
				EditButton: "_3A5WTC_rfbijxxWBmIP4Yx",
				editButton: "_3A5WTC_rfbijxxWBmIP4Yx",
				profileCard: "eHsnwmpOgtfnBAgrWXQKq",
				EditIcon: "_3X4DuB4IpAlTY0XMdSI5q6",
				editIcon: "_3X4DuB4IpAlTY0XMdSI5q6"
			}
		},
		"./src/reddit/components/EditableImage/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/controls/ImageInput/index.tsx"),
				c = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				d = r("./src/reddit/icons/fonts/index.tsx"),
				l = r("./src/reddit/models/ApiRequestState/index.ts"),
				m = r("./src/reddit/selectors/experiments/profileAvatarChangeFix.ts"),
				u = r("./src/reddit/components/EditableImage/index.m.less"),
				p = r.n(u);
			const {
				fbt: f
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = ({
				altText: e,
				children: t,
				className: r,
				isProfileCard: n,
				isLoading: u,
				imageUrl: f,
				onFileSelected: b
			}) => {
				const g = Object(a.e)(m.a);
				return s.a.createElement("div", {
					className: Object(o.a)(p.a.Container, r)
				}, s.a.createElement("label", {
					className: p.a.HitBox
				}, s.a.createElement("span", {
					className: p.a.ImageContainer,
					role: "presentation"
				}, f ? s.a.createElement("img", {
					alt: e,
					className: p.a.Image,
					src: f
				}) : t), s.a.createElement(i.a, {
					className: p.a.ImageUploader,
					multiple: !1,
					onChange: e => {
						const t = Object(l.b)();
						b(e, t)
					},
					isPending: g ? u : void 0
				}), !u && s.a.createElement("div", {
					className: Object(o.a)(p.a.EditButton, {
						[p.a.profileCard]: n
					})
				}, s.a.createElement(d.a, {
					name: "add_media",
					className: p.a.EditIcon
				}))), u && s.a.createElement(c.a, {
					className: p.a.LoadingIcon,
					sizePx: 80
				}))
			}
		},
		"./src/reddit/components/HumanDate/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return i
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "c", (function() {
				return g
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/timeAgo/index.ts"),
				o = r("./src/reddit/hooks/useLocale.ts");
			var i = function({
					seconds: e,
					...t
				}) {
					var r;
					const n = Object(o.a)(),
						i = {
							...t,
							locale: null !== (r = t.locale) && void 0 !== r ? r : n
						};
					return s.a.createElement(s.a.Fragment, null, Object(a.d)(e, i))
				},
				c = r("./src/lib/humanizeDate/index.ts");
			var d = function({
					seconds: e,
					...t
				}) {
					var r;
					const n = Object(o.a)(),
						a = {
							...t,
							locale: null !== (r = t.locale) && void 0 !== r ? r : n
						};
					return s.a.createElement(s.a.Fragment, null, Object(c.a)(e, a))
				},
				l = r("./src/lib/constants/index.ts");
			var m = function({
					seconds: e,
					locale: t
				}) {
					const r = Object(o.a)(),
						n = null != t ? t : r;
					return s.a.createElement(s.a.Fragment, null, function(e, t = l.D) {
						const r = e * l.Rb;
						return new Date(r).toLocaleString(t, {
							weekday: "short",
							month: "short",
							year: "numeric",
							day: "2-digit",
							hour: "2-digit",
							minute: "2-digit",
							second: "2-digit",
							timeZoneName: "long"
						})
					}(e, n))
				},
				u = r("./node_modules/fbt/lib/FbtPublic.js"),
				p = r("./src/lib/eventTools/index.ts");

			function f(e, t = l.D) {
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}

			function b(e, t, r = !1, n = l.D) {
				const s = Object(p.e)(e, t),
					a = new Date(e * l.Rb);
				let o;
				if (s === p.a.Live || r) return u.fbt._("Now", null, {
					hk: "Prpcg"
				});
				return s === p.a.Future ? o = Object(p.d)(e) ? u.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : Object(p.b)(e) >= 5 ? f(a, n) : function(e, t = l.D) {
					return e.toLocaleDateString(t, {
						weekday: "long"
					})
				}(a, n) : s === p.a.Past && (o = Object(p.d)(e) ? u.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : f(a, n)), `${o} @ ${function(e,t=l.D){return e.toLocaleTimeString(t,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(a,n)}`
			}
			var g = function({
				startTime: e,
				endTime: t,
				isLive: r,
				locale: n
			}) {
				const a = Object(o.a)(),
					i = null != n ? n : a;
				return s.a.createElement(s.a.Fragment, null, b(e, t, r, i))
			};
			r("./src/lib/humanizeUTCDate/index.tsx")
		},
		"./src/reddit/components/InfoTextTooltip/index.m.less": function(e, t, r) {
			e.exports = {
				BottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				bottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				Text: "HQ2VJViRjokXpRbJzPvvc",
				text: "HQ2VJViRjokXpRbJzPvvc",
				"fade-in": "_1tIZttmhLdrIGrB-6VvZcT",
				fadeIn: "_1tIZttmhLdrIGrB-6VvZcT"
			}
		},
		"./src/reddit/components/InfoTextTooltip/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return g
			})), r.d(t, "a", (function() {
				return x
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				i = r("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = r("./src/reddit/selectors/tooltip.ts"),
				l = r("./src/reddit/components/InfoTextTooltip/index.m.less"),
				m = r.n(l),
				u = r("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const f = u.a.div("Text", m.a),
				b = u.a.div("BottomText", m.a),
				g = e => s.a.createElement(f, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				x = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return s.a.createElement(b, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				h = Object(o.c)({
					isOpen: (e, {
						tooltipId: t
					}) => Object(d.b)(t)(e)
				}),
				v = Object(c.a)(x, [i.a.Click, i.a.Keydown]),
				I = Object(c.a)(g, [i.a.Click, i.a.Keydown]),
				_ = Object(a.b)(h);
			t.c = _(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? s.a.createElement(v, p({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : s.a.createElement(I, p({}, e, {
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				}))
			})
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/higherOrderComponents/asTooltip.tsx"),
				o = r("./src/reddit/constants/elementIds.ts"),
				i = r("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				const r = Object(a.a)(e, t);
				class n extends s.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(o.d);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return s.a.createElement(r, c({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(i.b)(n)
			}
		},
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/config.ts"),
				o = r("./src/lib/prettyPrintNumber/index.ts"),
				i = r("./src/reddit/components/ProfileIdCard/index.m.less"),
				c = r.n(i);
			const {
				fbt: d
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			class l extends s.a.PureComponent {
				render() {
					const {
						topAwardIcon: e,
						recentAwardings: t,
						username: r
					} = this.props;
					if (!t.topAward) return null;
					const {
						topAward: n,
						totalCount: i
					} = t, l = n.description ? n.description : n.name;
					return s.a.createElement("a", {
						className: c.a.AwardedLastMonth,
						href: `${a.a.oldRedditUrl}/user/${r}/gilded`
					}, s.a.createElement("div", {
						className: c.a.iconColumn
					}, s.a.createElement("img", {
						alt: l,
						className: c.a.icon,
						src: e
					}), i > 1 && s.a.createElement("span", {
						className: c.a.count
					}, `+${Object(o.b)(i-1)}`)), s.a.createElement("div", {
						className: c.a.textColumn
					}, d._({
						"*": "Received the {award-name} Award and more in the past 30 days",
						_1: "Received the {award-name} Award in the past 30 days"
					}, [d._param("award-name", n.name), d._plural(i)], {
						hk: "16MJHe"
					})))
				}
			}
			t.a = l
		},
		"./src/reddit/components/ProfileIdCard/Highlight.m.less": function(e, t, r) {
			e.exports = {
				Container: "_2fN55zgax6VM7DyEl9pOmM",
				container: "_2fN55zgax6VM7DyEl9pOmM",
				Body: "_3KNaG9-PoXf4gcuy5_RCVy",
				body: "_3KNaG9-PoXf4gcuy5_RCVy",
				Title: "_26kBTuLE_sSZzRBwU7HLij",
				title: "_26kBTuLE_sSZzRBwU7HLij",
				Label: "_1hNyZSklmcC7R_IfCUcXmZ",
				label: "_1hNyZSklmcC7R_IfCUcXmZ"
			}
		},
		"./src/reddit/components/ProfileIdCard/Highlights.m.less": function(e, t, r) {
			e.exports = {
				icon: "_2fopwfsUIdZKFtFUEsud9r",
				iconRight: "_2tFYRyhxfQeK2QFUlYSYz0",
				Container: "_3odBTM7RqvRgN1nvkf5k8B",
				container: "_3odBTM7RqvRgN1nvkf5k8B",
				profileHighlight: "_2g-S5jW8q9bwmI732bPLXz"
			}
		},
		"./src/reddit/components/ProfileIdCard/Highlights.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/lessComponent.tsx"),
				l = r("./src/lib/prettyPrintNumber/index.ts"),
				m = r("./src/reddit/components/HumanDate/index.tsx"),
				u = r("./src/reddit/contexts/InsideOverlay.tsx"),
				p = r("./src/reddit/endpoints/profile/info.ts"),
				f = r("./src/reddit/helpers/karma.ts"),
				b = r("./src/reddit/helpers/trackers/followers.ts"),
				g = r("./src/reddit/hooks/useTracking.ts"),
				x = r("./src/reddit/icons/fonts/index.tsx"),
				h = r("./src/reddit/selectors/profile.ts"),
				v = r("./src/reddit/selectors/user.ts"),
				I = r("./src/reddit/actions/tooltip.ts"),
				_ = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				C = r("./src/reddit/components/ProfileIdCard/Highlight.m.less"),
				O = r.n(C);

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const E = d.a.div("Container", O.a),
				k = d.a.div("Body", O.a),
				N = d.a.h5("Title", O.a),
				j = d.a.span("Label", O.a);
			class w extends a.a.Component {
				constructor() {
					super(...arguments), this.toggleTooltip = () => {
						const {
							toggleTooltip: e,
							tooltipId: t
						} = this.props;
						e && t && e(t)
					}
				}
				render() {
					const {
						icon: e,
						label: t,
						title: r,
						tooltip: n,
						tooltipId: s,
						className: o
					} = this.props, i = s && n ? {
						id: s,
						onMouseEnter: this.toggleTooltip,
						onMouseLeave: this.toggleTooltip
					} : {};
					return a.a.createElement(E, {
						className: o
					}, a.a.createElement(N, null, r), a.a.createElement(k, null, e, a.a.createElement(j, P({
						key: "label"
					}, i), t)), s && n && a.a.createElement(_.c, {
						caretOnTop: !0,
						tooltipId: s
					}, n))
				}
			}
			var y = Object(o.b)(null, e => ({
					toggleTooltip: t => e(Object(I.h)({
						tooltipId: t
					}))
				}))(Object(u.b)(w)),
				S = r("./src/reddit/components/ProfileIdCard/Highlights.m.less"),
				U = r.n(S);
			const F = Object(i.a)(h.j, (e, {
					profileName: t
				}) => Object(v.sb)(e, t), (e, t) => ({
					karma: {
						...p.a,
						...null == t ? void 0 : t.karma,
						total: Object(f.a)(t)
					},
					enableFollowers: !!(null == t ? void 0 : t.enableFollowers),
					profileCreated: t && (t.createdUtc || t.created) || 0,
					subscribers: e && e.subscribers || 0
				})),
				L = d.a.div("Container", U.a);

			function B(e, t) {
				return `profile--id-card--highlight-tooltip-${e?"-overlay":""}-${t}`
			}
			const T = e => {
				const t = Object(g.a)(),
					r = Object(s.useCallback)(() => {
						t(Object(b.b)())
					}, [t]),
					o = e.isOwnProfile ? a.a.createElement(a.a.Fragment, null, Object(l.b)(e.subscribers, {
						displayFull: !0
					}), a.a.createElement(x.a, {
						name: "right",
						className: U.a.iconRight
					})) : Object(l.b)(e.subscribers, {
						displayFull: !0
					}),
					i = a.a.createElement(y, {
						className: Object(c.a)(U.a.profileHighlight, e.highlightClassName),
						icon: a.a.createElement(x.a, {
							name: "user",
							isFilled: !0,
							className: U.a.icon,
							key: "followers"
						}),
						title: n.fbt._("Followers", null, {
							hk: "4ucimK"
						}),
						label: o
					});
				return e.isOwnProfile ? a.a.createElement("a", {
					href: `/user/${e.profileName}/followers`,
					onClick: r
				}, i) : i
			};
			t.a = Object(o.b)(F)(Object(u.b)(e => {
				const {
					karma: t,
					enableFollowers: r,
					profileCreated: s,
					isOverlay: o,
					subscribers: i,
					className: c,
					highlightClassName: d
				} = e, u = {
					...p.a,
					...t
				}, f = B(o, "karma"), b = B(o, "cakeday"), g = `${n.fbt._({"*":"{number} Post Karma",_1:"1 Post Karma"},[n.fbt._plural(u.fromPosts,"number",Object(l.b)(u.fromPosts,{displayFull:!0}))],{hk:"husfU"})}\n${n.fbt._({"*":"{number} Comment Karma",_1:"1 Comment Karma"},[n.fbt._plural(u.fromComments,"number",Object(l.b)(u.fromComments,{displayFull:!0}))],{hk:"26iPTL"})}\n${n.fbt._({"*":"{number} Awardee Karma",_1:"1 Awardee Karma"},[n.fbt._plural(u.fromAwardsReceived,"number",Object(l.b)(u.fromAwardsReceived,{displayFull:!0}))],{hk:"2Ww5MR"})}\n${n.fbt._({"*":"{number} Awarder Karma",_1:"1 Awarder Karma"},[n.fbt._plural(u.fromAwardsGiven,"number",Object(l.b)(u.fromAwardsGiven,{displayFull:!0}))],{hk:"2F1chz"})}`;
				return a.a.createElement(L, {
					className: c
				}, a.a.createElement(y, {
					className: d,
					icon: a.a.createElement(x.a, {
						name: "karma",
						isFilled: !0,
						className: U.a.icon,
						key: "karma"
					}),
					label: Object(l.b)(u.total, {
						displayFull: !0
					}),
					title: n.fbt._("Karma", null, {
						hk: "RtSgN"
					}),
					tooltipId: f,
					tooltip: g
				}), a.a.createElement(y, {
					className: d,
					icon: a.a.createElement(x.a, {
						name: "cake",
						isFilled: !0,
						className: U.a.icon,
						key: "cakeDay"
					}),
					label: a.a.createElement(m.a, {
						seconds: s,
						showDay: !0
					}),
					title: n.fbt._("Cake day", null, {
						hk: "4x2LB5"
					}),
					tooltipId: b,
					tooltip: a.a.createElement(m.d, {
						seconds: s
					})
				}), r && i > 0 && a.a.createElement(T, {
					highlightClassName: d,
					isOwnProfile: !!e.isOwnProfile,
					profileName: e.profileName,
					subscribers: i
				}))
			}))
		},
		"./src/reddit/components/ProfileIdCard/Preview.m.less": function(e, t, r) {
			e.exports = {
				Widget: "_27SH1SRzjtOk_2NB2YC-FR",
				widget: "_27SH1SRzjtOk_2NB2YC-FR",
				Description: "bVfceI5F_twrnRcVO1328",
				description: "bVfceI5F_twrnRcVO1328",
				Actions: "GQV0F7lQiMOV6EofzopdJ",
				actions: "GQV0F7lQiMOV6EofzopdJ"
			}
		},
		"./src/reddit/components/ProfileIdCard/Preview.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return B
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/lessComponent.tsx"),
				o = r("./src/reddit/components/Widgets/Base/index.tsx"),
				i = r("./src/reddit/layout/twoCol/Dynamic/index.m.less"),
				c = r.n(i),
				d = a.a.div("dynamicTwoCol", c.a),
				l = r("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				m = r("./src/reddit/components/ProfileIdCard/Highlights.tsx"),
				u = r("./src/reddit/components/ProfileIdCard/Preview.m.less"),
				p = r.n(u),
				f = r("./src/config.ts"),
				b = r("./node_modules/fbt/lib/FbtPublic.js"),
				g = r("./src/reddit/controls/InternalLink/index.tsx"),
				x = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				h = r("./src/reddit/controls/OutboundLink/index.tsx"),
				v = r("./src/reddit/icons/fonts/index.tsx"),
				I = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.tsx"),
				_ = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				C = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				O = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				P = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserIcon/index.m.less"),
				E = r.n(P),
				k = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				N = r.n(k);
			var j = ({
					bannerBackgroundImage: e,
					editMode: t,
					isDefaultIcon: r,
					isDeletingBanner: n,
					isDeletingIcon: a,
					isEmployee: o,
					isGold: i,
					isNSFW: c,
					isOwnProfile: d,
					onClickSnoovatar: l,
					onDeleteBanner: m,
					onDeleteIcon: u,
					profileIcon: p,
					title: P,
					userCreated: k,
					username: j,
					url: w
				}) => s.a.createElement(s.a.Fragment, null, s.a.createElement(C.a, {
					bannerBackgroundImage: e,
					editMode: !!t,
					isNSFW: c,
					username: j,
					isDeletingBanner: !!n,
					onDeleteBanner: m
				}), s.a.createElement("div", {
					className: E.a.SnooIconWrapper
				}, d || !p || c ? s.a.createElement(I.a, {
					iconUrl: p,
					isNSFW: c,
					userName: j,
					isProfileIdCard: !0
				}) : s.a.createElement(h.b, {
					href: p
				}, s.a.createElement(I.a, {
					iconUrl: p,
					isNSFW: c,
					userName: j,
					isProfileIdCard: !0
				})), t && !r && (a ? s.a.createElement(x.a, {
					sizePx: 20,
					className: N.a.loadingIcon
				}) : s.a.createElement(v.a, {
					name: "close",
					className: N.a.closeIcon,
					onClick: u
				}))), !t && d && s.a.createElement(g.a, {
					to: "/settings/profile",
					className: E.a.settingsLink
				}, s.a.createElement(v.a, {
					name: "settings",
					className: N.a.settingsIcon
				})), P && s.a.createElement("h4", {
					className: E.a.userTitle
				}, P), s.a.createElement(O.a, {
					className: E.a.userName,
					username: j,
					userCreated: k,
					url: w
				}), o && s.a.createElement(v.a, {
					name: "admin",
					isFilled: !0,
					className: E.a.adminIcon,
					title: b.fbt._("Reddit admin", null, {
						hk: "goUUb"
					})
				}), i && s.a.createElement("a", {
					title: b.fbt._("{username} has Reddit Premium", [b.fbt._param("username", j)], {
						hk: "3Fylv"
					}),
					href: `${f.a.redditUrl}/premium`
				}, s.a.createElement(v.a, {
					name: "premium",
					isFilled: !0,
					className: E.a.premiumIcon
				})), d && s.a.createElement(_.a, {
					currentUserHasSnoovatar: !1,
					isOwnProfile: !0,
					onClick: l
				})),
				w = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx");
			var y = ({
					bannerBackgroundImage: e,
					currentUserHasSnoovatar: t,
					editMode: r,
					isDefaultIcon: n,
					isDeletingBanner: a,
					isDeletingIcon: o,
					isEmployee: i,
					isGold: c,
					isNSFW: d,
					isOwnProfile: l,
					onClickSnoovatar: m,
					onDeleteBanner: u,
					onDeleteIcon: p,
					prefersReducedAnimations: f,
					profileIcon: b,
					snoovatarUrl: g,
					title: x,
					userCreated: h,
					username: v,
					url: I
				}) => g ? s.a.createElement(w.a, {
					bannerBackgroundImage: e,
					currentUserHasSnoovatar: t,
					editMode: r,
					isDeletingBanner: a,
					isEmployee: i,
					isGold: c,
					isNSFW: d,
					isOwnProfile: l,
					onClickSnoovatar: m,
					onDeleteBanner: u,
					prefersReducedAnimations: f,
					snoovatarUrl: g,
					title: x,
					userCreated: h,
					username: v,
					url: I
				}) : s.a.createElement(j, {
					bannerBackgroundImage: e,
					editMode: r,
					isDefaultIcon: n,
					isDeletingBanner: a,
					isDeletingIcon: o,
					isEmployee: i,
					isGold: c,
					isNSFW: d,
					isOwnProfile: l,
					onClickSnoovatar: m,
					onDeleteBanner: u,
					onDeleteIcon: p,
					profileIcon: b,
					title: x,
					userCreated: h,
					username: v,
					url: I
				}),
				S = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/NftCard/index.tsx");
			const U = a.a.wrapped(o.b, "Widget", p.a),
				F = a.a.div("Description", p.a),
				L = a.a.wrapped(d, "Actions", p.a);
			class B extends s.a.PureComponent {
				renderAwardedLastMonth() {
					const {
						recentAwardings: e,
						topAwardIcon: t,
						username: r
					} = this.props;
					return e ? s.a.createElement(l.a, {
						topAwardIcon: t,
						recentAwardings: e,
						username: r
					}) : null
				}
				render() {
					const {
						actions: e,
						bannerBackgroundImage: t,
						currentUserHasSnoovatar: r,
						className: n,
						footer: a,
						isEmployee: o,
						isGold: i,
						isNSFW: c,
						isOverlay: d,
						isOwnProfile: l,
						profileIcon: u,
						publicDescription: p,
						snoovatarUrl: f,
						title: b,
						url: g,
						userCreated: x,
						username: h,
						isDefaultIcon: v,
						isDeletingIcon: I,
						isDeletingBanner: _,
						onClickSnoovatar: C,
						onDeleteIcon: O,
						onDeleteBanner: P,
						prefersReducedAnimations: E,
						editMode: k,
						isNftPreview: N
					} = this.props;
					return N ? s.a.createElement(s.a.Fragment, null, s.a.createElement(S.a, {
						bannerBackgroundImage: t,
						currentUserHasSnoovatar: r,
						editMode: k,
						isDeletingBanner: _,
						isEmployee: o,
						isGold: i,
						isNSFW: c,
						isOwnProfile: !!l,
						onClickSnoovatar: C,
						onDeleteBanner: P,
						prefersReducedAnimations: E,
						snoovatarUrl: f,
						title: b,
						userCreated: x,
						username: h,
						actions: e,
						url: g,
						footer: a
					})) : s.a.createElement(U, {
						className: n
					}, s.a.createElement(y, {
						bannerBackgroundImage: N ? void 0 : t,
						currentUserHasSnoovatar: r,
						editMode: k,
						isDefaultIcon: v,
						isDeletingBanner: _,
						isDeletingIcon: I,
						isEmployee: o,
						isGold: i,
						isNSFW: c,
						isOwnProfile: !!l,
						onClickSnoovatar: C,
						onDeleteBanner: P,
						onDeleteIcon: O,
						prefersReducedAnimations: E,
						profileIcon: u,
						title: b,
						userCreated: x,
						username: h,
						url: g,
						snoovatarUrl: f
					}), s.a.createElement(F, null, p), s.a.createElement(m.a, {
						isOwnProfile: !!l,
						profileName: h,
						isOverlay: d
					}), this.renderAwardedLastMonth(), s.a.createElement(L, null, e), a)
				}
			}
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less": function(e, t, r) {
			e.exports = {
				Banner: "_2ZyL7luKQghNeMnczY3gqW",
				banner: "_2ZyL7luKQghNeMnczY3gqW"
			}
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./src/reddit/models/Image/index.tsx"),
				i = r("./src/reddit/components/EditableImage/index.tsx"),
				c = r("./src/reddit/models/User/index.ts"),
				d = r("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				l = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less"),
				m = r.n(l);
			class u extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isUpdating: !1
					}, this.updateProfileIcon = async (e, t) => {
						const r = await Object(o.e)(e);
						this.setState({
							isUpdating: !0
						}, async () => {
							await this.props.imageUpdateRequested(r, "profileBanner"), this.setState({
								isUpdating: !1
							})
						})
					}
				}
				render() {
					const {
						bannerUrl: e,
						className: t,
						currentUser: r,
						hideNSFWPref: s,
						isNSFW: o,
						userName: d
					} = this.props, {
						isUpdating: l
					} = this.state, u = e ? a.a.createElement("div", {
						className: m.a.Banner,
						style: {
							backgroundImage: `url(${e})`
						}
					}) : null;
					return r && Object(c.e)(r) === d ? a.a.createElement(i.a, {
						altText: n.fbt._("{userName} banner image", [n.fbt._param("userName", d)], {
							hk: "1PcEBS"
						}),
						className: t,
						isLoading: l,
						onFileSelected: this.updateProfileIcon
					}, u) : o && s ? null : u
				}
			}
			t.a = Object(d.a)(u)
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.m.less": function(e, t, r) {
			e.exports = {
				Icon: "_3Y33QReHCnUZm9ewFAsk8C",
				icon: "_3Y33QReHCnUZm9ewFAsk8C"
			}
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./src/reddit/models/Image/index.tsx"),
				i = r("./src/reddit/components/EditableImage/index.tsx"),
				c = r("./src/reddit/components/UserIcon/index.tsx"),
				d = r("./src/reddit/models/User/index.ts"),
				l = r("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				m = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.m.less"),
				u = r.n(m);
			class p extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isUpdating: !1
					}, this.updateProfileIcon = async e => {
						const t = await Object(o.e)(e);
						this.setState({
							isUpdating: !0
						}, async () => {
							await this.props.imageUpdateRequested(t, "profileIcon"), this.setState({
								isUpdating: !1
							})
						})
					}
				}
				render() {
					const {
						className: e,
						currentUser: t,
						iconUrl: r,
						isNSFW: s,
						isProfileIdCard: o,
						userName: l
					} = this.props, {
						isUpdating: m
					} = this.state, p = a.a.createElement(c.a, {
						className: u.a.Icon,
						iconUrl: r,
						isNSFW: s,
						userName: l,
						isProfileIcon: !0
					});
					return t && Object(d.e)(t) === l ? a.a.createElement(i.a, {
						altText: n.fbt._("{userName} avatar image", [n.fbt._param("userName", l)], {
							hk: "1LJxYE"
						}),
						className: e,
						isProfileCard: o,
						isLoading: m,
						onFileSelected: this.updateProfileIcon
					}, p) : p
				}
			}
			t.a = Object(l.a)(p)
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/reselect/es/index.js"),
				a = r("./src/reddit/actions/preferences.ts"),
				o = r("./src/reddit/selectors/user.ts");
			const i = Object(s.c)({
					currentUser: o.k,
					hideNSFWPref: o.C
				}),
				c = Object(n.b)(i, e => ({
					imageUpdateRequested: (t, r) => e(Object(a.B)(t, r))
				}));
			t.a = c
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/classNames/index.ts"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/react-router/esm/react-router.js"),
				c = r("./src/reddit/actions/post.ts"),
				d = r("./src/reddit/actions/snoovatarModal.ts"),
				l = r("./src/reddit/components/TrackingHelper/index.tsx"),
				m = r("./src/reddit/controls/Button/index.tsx"),
				u = r("./src/reddit/helpers/trackers/snoovatar.ts"),
				p = r("./src/reddit/icons/svgs/Shirt/index.tsx"),
				f = r("./src/reddit/models/Vote/index.ts"),
				b = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				g = r.n(b);
			const {
				fbt: x
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(i.i)(({
				isHovercard: e,
				username: t,
				isAvatarPost: r,
				post: i,
				share: b
			}) => {
				const h = Object(l.b)(),
					v = Object(o.d)(),
					I = i && i.id,
					_ = i && i.voteState;
				let C = null;
				I || (C = e ? "user_hovercard" : "profile_overview");
				const O = Object(s.useCallback)(() => h(Object(u.f)(e ? "user_hovercard" : "profile_overview", t)), [e, h, t]);
				return a.a.createElement(m.t, {
					onClick: () => {
						r ? (h(u.g), I && _ === f.a.notVoted && v(Object(c.jb)(I))) : O();
						const e = r ? "postify" : "copy";
						v(Object(d.b)({
							clickSource: C,
							share: b,
							source: e
						}))
					},
					className: Object(n.a)(g.a.snoovatarButton, g.a.snoovatarExtraPadding, g.a.compactButtonLayout, {
						[g.a.avatarPostifyButton]: r
					}),
					isFullWidth: !0
				}, a.a.createElement(p.a, {
					className: Object(n.a)({
						[g.a.shirtIcon]: !r,
						[g.a.avatarPostButtonShirtIcon]: r
					})
				}), x._("Try this Look", null, {
					hk: "dOuPb"
				}), a.a.createElement("div", {
					className: g.a.chevronIcon
				}))
			})
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less": function(e, t, r) {
			e.exports = {
				snoovatarButton: "_3F1tNW0P4Ff182mO_CefIg",
				avatarPostifyButton: "_2Viile0fcrruho_hQqpnUx",
				snoovatarExtraPadding: "_3DnDqV66Np6rVEiI8QK7kl",
				shirtIcon: "_3gYTHRBO1S_S5AOddgqD6Z",
				avatarPostButtonShirtIcon: "ARFP2bx6U967JwMoJ2Xr5",
				compactButtonLayout: "VFbNvXfZXUhRFiCTDHO6f",
				chevronIcon: "_12pWM-aURvVUuSrUyqfNZh"
			}
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/Button/index.tsx"),
				i = r("./src/reddit/icons/fonts/index.tsx"),
				c = r("./src/reddit/icons/svgs/Shirt/index.tsx"),
				d = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				l = r.n(d);
			const {
				fbt: m
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function({
				compact: e,
				currentUserHasSnoovatar: t,
				className: r,
				isOwnProfile: n,
				onClick: d
			}) {
				return s.a.createElement(o.t, {
					onClick: d,
					isFullWidth: !0,
					className: Object(a.a)(l.a.snoovatarButton, {
						[l.a.snoovatarExtraPadding]: !t && n,
						[l.a.compactButtonLayout]: e
					}, r)
				}, t ? s.a.createElement(c.a, {
					className: l.a.shirtIcon
				}) : s.a.createElement("div", {
					className: l.a.shirtIcon
				}), t ? m._("Style Avatar", null, {
					hk: "UEtBO"
				}) : n ? m._("Create Avatar", null, {
					hk: "2pJgje"
				}) : m._("Create Your Own Avatar", null, {
					hk: "22FFcO"
				}), t ? s.a.createElement("div", {
					className: l.a.chevronIcon
				}) : s.a.createElement(i.a, {
					name: "caret_right",
					className: l.a.chevronIcon
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/NftCard/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_1EcFK4dFoEcSJ97pB5pOOU",
				footer: "_1Kgb3W_zNnEh31kMBVmE8P",
				inner: "_3y5mp8nbvcVpPPsIMMPy7I",
				cardAnimation: "F8BKwLEVngSa9Mnbhrh5O",
				badgeImage: "_1lfIyNaIhBqLPhINtdgyar",
				nftIcon: "_2QX-qTkkdeCQTZc8F_jzSH",
				cutout: "_31NukdfV7zdnSSZAdgi4tH",
				nftIconImage: "_3EGHrS2jJIdFIfFHkrelY9",
				snoovatarImage: "_2eA2Gqtco1MTIW8ciy89hm",
				username: "_1jzwWcdNR0oe0D59lSILCw",
				subUsername: "_1LL19cRuUqTadh1-miEt-t",
				snoovatarButton: "_1BpuPYvrp51NlrYGgxbx9D",
				highlight: "_1IKngTFY9eM7GVrB7cJAYY",
				actions: "_1Xz5f0CORkQlgzeYxV3itr"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/NftCard/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return g
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/config.ts"),
				i = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/components/LottieAnimation/index.tsx"),
				d = r("./src/reddit/selectors/user.ts"),
				l = r("./src/reddit/components/ProfileIdCard/Highlights.tsx"),
				m = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				u = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx"),
				p = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/NftCard/index.m.less"),
				f = r.n(p);
			const b = /(?:\/|-)nft-([a-z0-9]+)-([a-z]+)(?:-headshot)?\.(?:png|svg)/i;

			function g(e) {
				return !!e && b.test(e)
			}
			t.a = ({
				isEmployee: e,
				isGold: t,
				isNSFW: r,
				snoovatarUrl: p,
				title: g,
				userCreated: x,
				username: h,
				url: v,
				className: I,
				actions: _,
				footer: C
			}) => {
				const {
					badge: O,
					url: P
				} = Object(n.useMemo)(() => (function(e) {
					const t = b.exec(e) || ["", "", ""],
						r = t[1],
						n = t[2];
					return {
						id: r,
						url: "testing" === n ? "https://nft.reddit.com" : `https://nft.reddit.com/n/${r}`,
						badge: n
					}
				})(p), [p]), E = Object(a.e)(d.W);
				return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: Object(i.a)(f.a.container, I)
				}, s.a.createElement(c.a, {
					className: f.a.cardAnimation,
					useCanvasRenderer: !0,
					assetUrl: `${o.a.assetPath}/img/snoovatars/nft_card_animation.json`,
					loop: !0
				}), s.a.createElement("div", {
					className: f.a.inner
				}, "testing" !== O && s.a.createElement("img", {
					alt: `${O} NFT`,
					className: f.a.badgeImage,
					src: `${o.a.assetPath}/img/snoovatars/nft_badge_${O}.svg`
				}), s.a.createElement("img", {
					className: f.a.cutout,
					src: `${o.a.assetPath}/img/snoovatars/hole-cutout-${E?"black":"white"}.svg`
				}), s.a.createElement("a", {
					href: P,
					target: "_blank",
					className: f.a.nftIcon,
					rel: "noopener noreferrer"
				}, s.a.createElement("img", {
					className: f.a.nftIconImage,
					alt: "View this NFT",
					src: `${o.a.assetPath}/img/snoovatars/nft_icon.svg`
				})), s.a.createElement("img", {
					className: f.a.snoovatarImage,
					src: p,
					alt: "Avatar NFT Image"
				}), s.a.createElement(u.a, {
					isEmployee: e,
					isGold: t,
					isNSFW: r,
					title: g,
					username: h
				}), s.a.createElement(m.a, {
					className: f.a.subUsername,
					shouldDisplaySnoovatar: !0,
					username: h,
					userCreated: x,
					url: v
				}), s.a.createElement(l.a, {
					className: f.a.highlights,
					highlightClassName: f.a.highlight,
					profileName: h,
					isOverlay: !1
				}), s.a.createElement("nav", {
					className: f.a.actions
				}, _))), s.a.createElement("div", {
					className: Object(i.a)(f.a.footer, I)
				}, C))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less": function(e, t, r) {
			e.exports = {
				BannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				bannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				BannerImage: "_1IvROQ79nAJZ87_JkTFsLO",
				bannerImage: "_1IvROQ79nAJZ87_JkTFsLO"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				o = r("./src/reddit/icons/svgs/Close/index.tsx"),
				i = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				c = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less"),
				d = r.n(c),
				l = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				m = r.n(l);
			t.a = function({
				bannerBackgroundImage: e,
				isNSFW: t,
				username: r,
				editMode: n,
				isDeletingBanner: c,
				onDeleteBanner: l
			}) {
				return s.a.createElement("div", {
					className: d.a.bannerWrapper
				}, s.a.createElement(i.a, {
					bannerUrl: e,
					isNSFW: t,
					userName: r
				}), n && e && (c ? s.a.createElement(a.a, {
					sizePx: 20,
					className: m.a.loadingIcon
				}) : s.a.createElement(o.a, {
					className: m.a.closeIcon,
					onClick: l
				})))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserIcon/index.m.less": function(e, t, r) {
			e.exports = {
				SnooIconWrapper: "_2TuF8LuTZGoynMOwiccrRC",
				snooIconWrapper: "_2TuF8LuTZGoynMOwiccrRC",
				userName: "_1LCAhi_8JjayVo7pJ0KIh0",
				userTitle: "_34MUxmcmBZ5-3ekT3s0UPM",
				settingsLink: "n0u1JMdFWeI5YWXw1QJWF",
				adminIcon: "_2U-fbzStTSISVTxXL1Z3Us",
				premiumIcon: "_1azJKXXMZviwmUJnaAYpfi"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/reddit/controls/InternalLink/index.tsx"),
				o = r("./src/reddit/components/HumanDate/index.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: c
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function({
				className: e,
				shouldDisplaySnoovatar: t,
				url: r,
				userCreated: n,
				username: c,
				...d
			}) {
				const l = t ? s.a.createElement(s.a.Fragment, null, "u/", c, " · ", s.a.createElement(o.d, {
					seconds: n,
					noPostfix: !0,
					shortenedUnit: !0
				})) : `u/${c}`;
				return r ? s.a.createElement(a.a, i({}, d, {
					className: e,
					to: r
				}), l) : s.a.createElement("span", i({}, d, {
					className: e
				}), l)
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less": function(e, t, r) {
			e.exports = {
				loadingIcon: "_2DTxp6tzlJMeNlZ-cjXWTs",
				closeIcon: "_2ioQgcdZvYlf34S0OEqBuQ",
				settingsIcon: "A4Iifg_NCOrfabq0ON3mW"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/config.ts"),
				s = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
				i = r("./src/reddit/icons/svgs/Admin/index.tsx"),
				c = r("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				d = r("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
				l = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				m = r.n(l);
			t.a = ({
				title: e,
				username: t,
				isEmployee: r,
				isGold: a,
				isNSFW: l
			}) => o.a.createElement("h1", {
				className: m.a.snoovatarUserTitle
			}, e || t, r && o.a.createElement(i.a, {
				className: m.a.snoovatarAdminIcon,
				title: s.fbt._("Reddit admin", null, {
					hk: "goUUb"
				})
			}), a && o.a.createElement("a", {
				title: s.fbt._("{username} has Reddit Premium", [s.fbt._param("username", t)], {
					hk: "3Fylv"
				}),
				href: `${n.a.redditUrl}/premium`
			}, o.a.createElement(d.a, {
				className: m.a.snoovatarPremiumIcon
			})), l && o.a.createElement(c.a, {
				className: m.a.snoovatarNsfwIcon,
				title: s.fbt._("NSFW - Adult Content", null, {
					hk: "2Iw7mN"
				})
			}))
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less": function(e, t, r) {
			e.exports = {
				snoovatarContainer: "_34XIqvI8-YT1wukR_W8vj6",
				bottomGlow: "_18b8M-cZftX_frkYRy3DN1",
				topGlow: "_1-PwjX8ETMrfCu2hAkAHFd",
				snoovatar: "_2bLCGrtCCJIMNCZgmAMZFM",
				premiumGlow: "_18BjSGkpIVVfS1xJXL1eoW",
				snoovatarUserName: "_28nEhn86_R1ENZ59eAru8S",
				snoovatarUserTitle: "_3LM4tRaExed4x1wBfK1pmg",
				snoovatarSettingsLink: "PNl4tAYE2TRxhOc34iqcY",
				snoovatarAdminIcon: "kOKnXvA8jebkfk2wVIb9R",
				snoovatarNsfwIcon: "Wb4wBt474lETdwG0YpWID",
				snoovatarPremiumIcon: "_3NZUKOdsA_2X9TrZGSNQyP",
				particleWrapper: "_3sckwXGpSWEBLgH7dBHDSI",
				particle: "R8JC02qFTBSKsWVEamnnh",
				particleX0: "_2FHPkirHUUZZ53WuQRt_ku",
				particleX20: "DeM4CXWl9dmFhzxbChV3v",
				particleX40: "_2jQr36LfrhyZudo0c4r5qb",
				particleX60: "_2ThlCGLfserHkMW64od-w_",
				particleX80: "_2PoCUl_D7HnNn8GhlmyNMn",
				particleX100: "_3xLPb9tG5DMGKH5Qmq0lMn",
				particleFloat1: "_2Tlu1OsBOwuxXIF1MLT2k",
				floatUp1: "_1-74-z_0KhbvP-MLUh63RF",
				particleFloat2: "BW4L6Zj7IYZtY4carTDWz",
				floatUp2: "BhXouEsciSb0lIayg329d",
				particleFloat3: "UjQ0lRcZlylUigyKGCSrO",
				floatUp3: "_2cAI3EiKyyG1hMFOLbG7ka",
				particleFloat4: "_2_ke4gf08pfYrY6lP-aPZ_",
				floatUp1Left: "_2D7to5Dk7q0ZyKN3MMQfuJ",
				particleFloat5: "_2wM6_vp4fY0ziLkOrGaobV",
				floatUp2Left: "_3BR2d3YbOQLeA3LmAmwBJL",
				particleFloat6: "_23n0biPU5CQf96pEUSFupJ",
				floatUp3Left: "_3FnzyfIl1wHuAYA54rlkJH",
				particleDelay1: "_3meTYeYw1F3UdYO0v-gAYr",
				particleDelay2: "_3d8_fd8LwWsj0tyZWIeQdt",
				particleDelay3: "_2PLSBdnBk3jcotYknlKud1",
				particleDelay4: "_2pnTv5ZAxpIbkx38PkPJPg",
				particleDelay5: "_3j1NzwW_t2Ufnx4ed9QabN",
				particleDelay6: "_1hddWHnQ8DFnwilLlN9GEO",
				particleDelay7: "_3eRR1I_MwXC19q9sr8mKaR",
				particleDelay8: "_1sCUpg4sdajNDXrcNTP0qW",
				particleDelay9: "_3J5h1MCyY_xUf2QP7PDSHY",
				particleDelay10: "_2RqcLn9onSZQmKQgvKmSF7"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/controls/InternalLink/index.tsx"),
				c = r("./src/reddit/icons/fonts/index.tsx"),
				d = r("./src/reddit/selectors/experiments/econ/index.ts"),
				l = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				m = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				u = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				p = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				f = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less")),
				b = r.n(f);
			const g = 25;

			function x(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function h(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const v = x("particleDelay", b.a),
				I = x("particleX", b.a),
				_ = x("particleFloat", b.a),
				C = () => {
					const e = h(I),
						t = h(_),
						r = h(v);
					return Object(o.a)(b.a.particle, e, t, r)
				};
			class O extends s.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < g; t++) e.push(this.createParticle(t));
					return s.a.createElement("div", {
						role: "presentation",
						className: b.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return s.a.createElement("div", {
						key: e,
						className: `${C()}`
					})
				}
			}
			var P = O,
				E = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				k = r.n(E),
				N = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx");
			t.a = ({
				bannerBackgroundImage: e,
				compact: t,
				currentUserHasSnoovatar: r,
				editMode: n,
				isDeletingBanner: f,
				isEmployee: g,
				isGold: x,
				isNSFW: h,
				isOwnProfile: v,
				onClickSnoovatar: I,
				onDeleteBanner: _,
				prefersReducedAnimations: C,
				snoovatarUrl: O,
				title: E,
				userCreated: j,
				username: w,
				url: y,
				isHovercard: S
			}) => {
				const U = Object(a.e)(e => !v && !!O && Object(d.i)(e));
				return s.a.createElement(s.a.Fragment, null, s.a.createElement(u.a, {
					bannerBackgroundImage: e,
					editMode: !!n,
					isNSFW: h,
					username: w,
					isDeletingBanner: !!f,
					onDeleteBanner: _
				}), s.a.createElement("div", {
					className: b.a.snoovatarContainer
				}, x && s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: b.a.topGlow
				}), s.a.createElement("div", {
					className: b.a.bottomGlow
				}), !C && s.a.createElement(P, null)), s.a.createElement("img", {
					className: Object(o.a)(b.a.snoovatar, {
						[b.a.premiumGlow]: x
					}),
					src: O || void 0
				})), !n && v && s.a.createElement(i.a, {
					to: "/settings/profile",
					className: b.a.snoovatarSettingsLink
				}, s.a.createElement(c.a, {
					name: "settings",
					className: k.a.settingsIcon
				})), s.a.createElement(N.a, {
					isEmployee: g,
					isGold: x,
					isNSFW: h,
					title: E,
					username: w
				}), s.a.createElement(p.a, {
					className: b.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: w,
					userCreated: j,
					url: y
				}), (v || !r && !!O) && s.a.createElement(l.a, {
					compact: t,
					currentUserHasSnoovatar: r,
					isOwnProfile: v,
					onClick: I
				}), U && s.a.createElement(m.a, {
					username: w,
					isHovercard: !!S,
					share: {
						username: w
					}
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/footer.m.less": function(e, t, r) {
			e.exports = {
				container: "_2jvbIljd1r6tRUsfoDij_y",
				expandContainer: "_1HKW6ri9nK1INtj09BfFfM",
				expandButton: "_34I-V8v9TxMwIW1R6Rbi3A",
				menuItem: "_2j70PtPj9zrWOU8NshwTg-",
				Shimmer: "_1-2CAwx45SgG4EsI1-GWZh",
				shimmer: "_1-2CAwx45SgG4EsI1-GWZh"
			}
		},
		"./src/reddit/components/ProfileIdCard/index.m.less": function(e, t, r) {
			e.exports = {
				actionItem: "_1l7CTV4NjDjmzX8DiiSgTL",
				AwardedLastMonth: "oZjk-MiWCU7KVYej9wPSw",
				awardedLastMonth: "oZjk-MiWCU7KVYej9wPSw",
				textColumn: "_wi1DtT7oN7k_x5oIV8zm",
				iconColumn: "_32tzMaZn7x3dfQC5MXndJn",
				icon: "_12jN4wdttUosp76WHzuieI",
				count: "_6xPPP5HdELF-SZJL8layH",
				awardIcon: "_2Eq8z6UD7I0ul3wnZ-YT80",
				adminIcon: "_1sNQxemH_0rq1jtZAMyAZd",
				snoovatarAdminIcon: "_1rf3zLc4sH59mO7_BEXyze",
				snoovatarPremiumIcon: "_3QQFENUs15G6BHI5pjsswJ",
				button: "_2q1wcTx60QKM_bQ1Maev7b"
			}
		},
		"./src/reddit/components/ProfileIdCard/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				i = r("./src/reddit/actions/snoovatarModal.ts"),
				c = r("./src/reddit/actions/subscription/index.ts"),
				d = r("./src/reddit/actions/userBlocks.ts"),
				l = r("./src/reddit/components/ChatButton/index.tsx"),
				m = r("./src/reddit/components/ProfileIdCard/Preview.tsx"),
				u = r("./src/reddit/components/TrackingHelper/index.tsx"),
				p = r("./src/reddit/constants/posts.ts"),
				f = r("./src/reddit/controls/Button/index.tsx"),
				b = r("./src/reddit/helpers/trackers/user.ts"),
				g = r("./src/reddit/selectors/blockedRedditors.ts"),
				x = r("./src/reddit/selectors/gold/awardIcon.ts"),
				h = r("./src/reddit/selectors/platform.ts"),
				v = r("./src/reddit/selectors/profile.ts"),
				I = r("./src/reddit/selectors/structuredStyles.ts"),
				_ = r("./src/reddit/selectors/tooltip.ts"),
				C = r("./src/reddit/selectors/user.ts"),
				O = r("./src/reddit/selectors/userPrefs.ts"),
				P = r("./src/reddit/selectors/experiments/econ/avatarNfts.ts"),
				E = r("./node_modules/fbt/lib/FbtPublic.js"),
				k = r("./node_modules/lodash/compact.js"),
				N = r.n(k),
				j = r("./src/config.ts"),
				w = r("./src/lib/classNames/index.ts"),
				y = r("./src/lib/loadableAction/index.ts"),
				S = r("./src/lib/copyToClipboard/index.ts"),
				U = r("./src/reddit/actions/toaster.ts"),
				F = r("./src/reddit/endpoints/chat/userSettings.ts"),
				L = r("./src/reddit/models/Toast/index.ts");
			var B = r("./src/reddit/actions/gold/modals.ts"),
				T = r("./src/reddit/actions/modal.ts"),
				M = r("./src/reddit/actions/profile/index.ts"),
				D = r("./src/reddit/components/CrisisFlow/index.tsx"),
				A = r("./src/higherOrderComponents/makeAsync.tsx"),
				R = r("./src/lib/loadWithRetries/index.ts");
			var W = Object(A.a)({
					getComponent: () => Object(R.a)(() => r.e("GivePremiumModal").then(r.bind(null, "./src/reddit/components/GivePremiumModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				G = r("./src/reddit/constants/modals.ts"),
				H = r("./src/reddit/helpers/correlationIdTracker.ts"),
				K = r("./src/reddit/helpers/styles/mixins/loading.ts"),
				z = r("./src/reddit/models/Gold/Premium/index.ts"),
				Z = r("./src/reddit/selectors/experiments/chatInviteLinkSharing.ts"),
				q = r("./src/reddit/selectors/experiments/crisisTextLine.ts"),
				V = r("./src/reddit/selectors/premium.ts"),
				Q = r("./src/reddit/components/ProfileIdCard/footer.m.less"),
				Y = r.n(Q);

			function X() {
				return (X = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const J = Object(o.c)({
					areModeratedSubredditsPending: v.a,
					coinsToSpend: C.e,
					givePremiumModalIsOpen: V.c,
					hasFetchedModerators: v.k,
					isEmployee: C.G,
					isLoggedIn: C.J,
					profile: v.j,
					crisisFlowEnabled: q.b,
					chatInviteLinkSharing: Z.a
				}),
				$ = ({
					isLoading: e,
					...t
				}) => s.a.createElement("div", X({}, t, {
					className: Object(w.a)(Y.a.Shimmer, Object(K.b)({
						isLoading: e
					}))
				}));
			class ee extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						expanded: !1,
						showCrisisModal: !1
					}, this.clickGivePremium = async () => {
						const {
							onClickGivePremium: e,
							sendEvent: t
						} = this.props;
						e(Object(H.e)(H.a.GiftPremiumFlow));
						const {
							clickGivePremiumEvent: n
						} = await r.e("givePremiumTrackers").then(r.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
						t(n())
					}, this.onOpenCrisisModal = () => {
						this.setState({
							showCrisisModal: !0
						})
					}, this.onCloseCrisisModal = () => {
						this.setState({
							showCrisisModal: !1
						})
					}, this.makeMenuItems = () => {
						const {
							addToMultiClicked: e,
							allowViewSnoovatar: t,
							chatInviteLinkSharing: r,
							coinsToSpend: n,
							hasSubreddit: s,
							isEmployee: a,
							isLoggedIn: o,
							isModerator: i,
							isOwnProfile: c,
							profileName: d,
							profile: l,
							crisisFlowEnabled: m,
							userAcceptsPms: u,
							onClickBlockUser: p,
							onClickChatInviteLink: f,
							onClickUnblockUser: b,
							isUserBlocked: g
						} = this.props, x = o && Object(z.d)(n, a).length && !c || a, h = N()([(c || i) && s ? {
							text: E.fbt._("Profile Moderation", null, {
								hk: "4x1una"
							}),
							url: `/user/${d}/about/edit/moderation`,
							isInternalLink: !0
						} : void 0, !c && u ? {
							text: E.fbt._("Send Message", null, {
								hk: "2oAlZ5"
							}),
							url: `${j.a.redditUrl}/message/compose/?to=${d}`
						} : void 0, o && !c ? {
							onClick: g ? b : p,
							text: g ? E.fbt._("Unblock User", null, {
								hk: "1onWdM"
							}) : E.fbt._("Block User", null, {
								hk: "4ltcgv"
							})
						} : void 0, !c && t ? {
							text: E.fbt._("View Snoovatar", null, {
								hk: "31JWSq"
							}),
							url: `${j.a.redditUrl}/user/${d}/snoo`
						} : void 0, !c && m ? {
							text: E.fbt._("Get Them Help and Support", null, {
								hk: "3FfPTy"
							}),
							onClick: this.onOpenCrisisModal
						} : void 0, !c && l ? {
							text: E.fbt._("Report User", null, {
								hk: "4hFoE2"
							}),
							url: `${j.a.redditUrl}/api/report_redirect?reason_code=USER_PROFILE&thing=${l.id}`
						} : void 0, o && l && !l.isQuarantined ? {
							onClick: e,
							text: E.fbt._("Add to Custom Feed", null, {
								hk: "3ZtOdG"
							})
						} : void 0, c && o && r ? {
							onClick: f,
							text: E.fbt._("Invite someone to chat", null, {
								hk: "1ndvHF"
							})
						} : void 0]);
						return x && h.splice(1, 0, {
							onClick: this.clickGivePremium,
							text: E.fbt._("Give Premium", null, {
								hk: "2wyUqF"
							})
						}), h
					}, this.moreOptionsToggled = () => {
						!this.state.expanded && this.canLoadMods() && this.props.onModeratorsRequested(), this.setState(({
							expanded: e
						}) => ({
							expanded: !e
						}))
					}
				}
				canLoadMods() {
					return this.props.isLoggedIn && !this.props.isOwnProfile && !this.props.hasFetchedModerators && !this.props.areModeratedSubredditsPending
				}
				isLoadingMods() {
					return this.props.isLoggedIn && !this.props.isOwnProfile && (!this.props.hasFetchedModerators || this.props.areModeratedSubredditsPending)
				}
				render() {
					const {
						givePremiumModalIsOpen: e
					} = this.props, {
						expanded: t
					} = this.state, r = this.makeMenuItems();
					if (0 === r.length) return null;
					const n = (t ? r : []).map(e => e.url ? e.isInternalLink ? s.a.createElement(f.t, {
						kind: f.b.InternalLink,
						priority: f.c.Plain,
						size: f.d.XS,
						key: e.url,
						onClick: e.onClick,
						to: e.url,
						className: Y.a.menuItem
					}, e.text) : s.a.createElement(f.t, {
						kind: f.b.ExternalLink,
						priority: f.c.Plain,
						size: f.d.XS,
						key: e.url,
						href: e.url,
						onClick: e.onClick,
						className: Y.a.menuItem
					}, e.text) : s.a.createElement(f.t, {
						priority: f.c.Plain,
						size: f.d.XS,
						className: Y.a.menuItem,
						key: e.text,
						onClick: e.onClick
					}, e.text));
					this.state.expanded && this.isLoadingMods() && (n.unshift(s.a.createElement("div", {
						className: Y.a.menuItem,
						key: "loading-1"
					}, s.a.createElement($, {
						isLoading: this.props.areModeratedSubredditsPending
					}))), n.unshift(s.a.createElement("div", {
						className: Y.a.menuItem,
						key: "loading-2"
					}, s.a.createElement($, {
						isLoading: this.props.areModeratedSubredditsPending
					}))));
					const a = t ? E.fbt._("Fewer Options", null, {
						hk: "4ixXKg"
					}) : E.fbt._("More Options", null, {
						hk: "4ix9v1"
					});
					return s.a.createElement("div", {
						className: Y.a.container
					}, n, s.a.createElement("div", {
						className: Y.a.expandContainer
					}, s.a.createElement(f.r, {
						className: Y.a.expandButton,
						onClick: this.moreOptionsToggled
					}, a)), e && s.a.createElement(W, null), this.state.showCrisisModal && s.a.createElement(D.b, {
						withOverlay: !0,
						overlayCustomStyles: D.a,
						fromUserProfile: !0,
						username: this.props.profileName,
						onCloseCrisisModal: this.onCloseCrisisModal
					}))
				}
			}
			var te = Object(a.b)(J, (e, {
					profileName: t,
					sendEvent: n
				}) => ({
					addToMultiClicked: () => {
						e(Object(y.a)(() => Promise.all([r.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), r.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), r.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), r.e("CountryPage~Multireddit"), r.e("Multireddit")]).then(r.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.myMultiredditsRequested))(!0, !0)), e(Object(T.h)(G.a.MULTIREDDIT_ADD_SUBREDDIT))
					},
					onClickGivePremium: r => e(Object(B.e)({
						correlationId: r,
						profileName: t
					})),
					onModeratorsRequested: () => e(Object(M.b)(t)),
					onClickBlockUser: () => {
						e(Object(d.h)(t)), n(Object(b.a)(t))
					},
					onClickUnblockUser: () => {
						e(Object(d.g)(t)), n(Object(b.i)(t))
					},
					onClickChatInviteLink: () => e((() => async (e, t, {
						gqlContext: r
					}) => {
						const n = await Object(F.a)(r());
						if (n.ok) {
							const t = n.body.data.createChatChannelInviteLink.inviteUrl;
							if (t) {
								Object(S.a)(t);
								const r = Object(U.e)(E.fbt._("Copied link!", null, {
									hk: "4a4E1x"
								}), L.b.SuccessCommunity);
								e(Object(U.f)(r))
							}
						} else {
							const t = Object(U.e)(E.fbt._("Something went wrong", null, {
								hk: "22u7ha"
							}), L.b.Error);
							e(Object(U.f)(t))
						}
					})())
				}))(ee),
				re = r("./src/reddit/components/ProfileIdCard/index.m.less"),
				ne = r.n(re),
				se = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/NftCard/index.tsx");
			const {
				fbt: ae
			} = r("./node_modules/fbt/lib/FbtPublic.js"), oe = Object(o.c)({
				account: C.k,
				activeTooltipId: _.a,
				currentUserHasSubreddit: C.h,
				hideNSFWPref: C.C,
				isModerator: v.f,
				prefersReducedAnimations: O.c,
				profile: v.j,
				profileAboutInfo: v.h,
				topAwardIcon: (e, {
					profileName: t
				}) => Object(x.e)(e, {
					userName: t,
					minSize: 32
				}),
				structuredStyle: (e, t) => Object(I.m)(e, Object(v.m)(e, t.profileName)),
				userHasSubreddit: (e, {
					profileName: t
				}) => Object(C.nb)(e, {
					userName: t
				}),
				user: (e, {
					profileName: t
				}) => Object(C.mb)(e, {
					userName: t
				}),
				page: h.b,
				allowNFTs: P.a,
				isUserBlocked: (e, {
					profileName: t
				}) => Object(g.c)(e, t)
			}), ie = ({
				username: e,
				currentUserHasSubreddit: t
			}) => s.a.createElement("div", {
				className: ne.a.actionItem
			}, s.a.createElement(f.n, {
				className: ne.a.button,
				to: t ? `/user/${e}/submit` : "/submit"
			}, ae._("New Post", null, {
				hk: "2VCZwF"
			}))), ce = ({
				profileName: e,
				toggleFollow: t,
				userIsSubscriber: r,
				isUserBlocked: n,
				onClickUnblockUser: a,
				sendEvent: o
			}) => s.a.createElement("div", {
				className: ne.a.actionItem
			}, r && !n ? s.a.createElement(f.o, {
				className: ne.a.button,
				onClick: () => t(e, r)
			}, ae._("Unfollow", null, {
				hk: "1nM1SO"
			})) : n ? s.a.createElement(f.l, {
				className: ne.a.button,
				onClick: () => {
					a(e), o(Object(b.i)(e))
				}
			}, ae._("Unblock", null, {
				hk: "2d6Cyx"
			})) : s.a.createElement(f.l, {
				className: ne.a.button,
				onClick: () => t(e, r)
			}, ae._("Follow", null, {
				hk: "OPQuq"
			}))), de = ({
				userId: e
			}) => s.a.createElement("div", {
				className: ne.a.actionItem
			}, s.a.createElement(l.b, {
				contextId: e,
				className: ne.a.button,
				userId: e,
				text: ae._("Chat", null, {
					hk: "UKkIW"
				})
			}));
			t.default = Object(a.b)(oe, e => ({
				onToggleFollow: (t, r) => e(Object(c.d)([{
					name: t,
					type: p.a.PROFILE
				}], !r)),
				onClickSnoovatar: () => e(Object(i.b)({
					clickSource: "profile_overview"
				})),
				onClickUnblockUser: t => e(Object(d.g)(t))
			}))(Object(u.c)(e => {
				const {
					account: t,
					currentUserHasSubreddit: n,
					hideNSFWPref: a,
					isModerator: o,
					isOverlay: i,
					isSubmissionPage: c,
					onClickSnoovatar: d,
					onToggleFollow: l,
					profile: u,
					profileAboutInfo: p,
					sendEvent: f,
					structuredStyle: b,
					topAwardIcon: g,
					userHasSubreddit: x,
					allowNFTs: h,
					user: v,
					page: I,
					prefersReducedAnimations: _,
					isUserBlocked: C,
					onClickUnblockUser: O
				} = e;
				if (!v) return null;
				const {
					accountIcon: P,
					awardedLastMonth: E,
					created: k,
					enableFollowers: N,
					id: j,
					isEmployee: w,
					isGold: y,
					prefShowSnoovatar: S,
					snoovatarFullBodyAsset: U,
					username: F
				} = v, L = !!t && t.id === j, B = !(!t || !t.snoovatarFullBodyAsset), T = b && b.bannerBackgroundImage, M = !!u && u.isNSFW, D = M && a, A = !(!p || !p.userIsSubscriber), R = `/user/${F}/`, W = I && I.url === R, G = !p || p.acceptChats, H = !p || p.acceptPms, K = h && Object(se.b)(U);
				return s.a.createElement(m.a, {
					isEmployee: w,
					isGold: y,
					isNSFW: M,
					isNftPreview: K,
					isOverlay: i,
					isOwnProfile: L,
					publicDescription: p ? p.publicDescription : void 0,
					title: u ? u.title : void 0,
					url: W ? null : R,
					userCreated: k,
					username: F,
					recentAwardings: E,
					currentUserHasSnoovatar: B,
					prefersReducedAnimations: !!_,
					snoovatarUrl: U,
					topAwardIcon: g,
					actions: s.a.createElement(s.a.Fragment, null, L && !c && ie({
						username: F,
						currentUserHasSubreddit: n
					}), !L && x && N && ce({
						profileName: F,
						toggleFollow: async (e, t) => {
							l(e, t);
							const {
								clickProfileFollowButton: n,
								clickProfileUnfollowButton: s
							} = await r.e(8).then(r.bind(null, "./src/reddit/helpers/trackers/profileIdCard.ts"));
							f(t ? s(j) : n(j))
						},
						userIsSubscriber: A,
						isUserBlocked: C,
						onClickUnblockUser: O,
						sendEvent: f
					}), !!t && !L && G && de({
						userId: j
					})),
					footer: s.a.createElement(te, {
						hasSubreddit: x,
						isModerator: o,
						isOwnProfile: L,
						allowViewSnoovatar: S,
						profileName: F,
						sendEvent: f,
						userAcceptsPms: H,
						isUserBlocked: C
					}),
					onClickSnoovatar: d,
					profileIcon: P,
					bannerBackgroundImage: D ? void 0 : T
				})
			}))
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, r) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/lessComponent.tsx"),
				o = r("./src/reddit/components/SEOTitle/index.tsx"),
				i = r("./src/reddit/components/Widgets/Base/index.m.less"),
				c = r.n(i);
			const d = a.a.div("WidgetBackground", c.a),
				l = a.a.wrapped(({
					children: e,
					...t
				}) => s.a.createElement("div", t, s.a.createElement(o.b, {
					type: o.a.Widget
				}, e)), "WidgetHeader", c.a);
			t.b = e => s.a.createElement("div", {
				className: e.className
			}, s.a.createElement(d, null, e.children))
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			class a extends s.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							r = this.props.multiple ? [...t] : t[0];
						this.props.onChange(r), this.setState(() => ({
							value: r
						}))
					}, this.state = {
						value: e.value || ""
					}
				}
				static getDerivedStateFromProps(e, t) {
					return {
						value: t.value || e.value || ""
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this, r = "string" == typeof t.value ? t.value : "", n = "object" == typeof t.value ? t.value : null, a = r || n;
					return s.a.createElement("div", {
						className: e.className
					}, r && s.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: r,
						tabIndex: e.tabIndex
					}), (!a || e.multiple || void 0 !== e.isPending && !e.isPending) && s.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						type: "file",
						onChange: this.onFileInput,
						accept: "image/x-png,image/jpeg",
						multiple: e.multiple || !1,
						tabIndex: e.tabIndex
					}))
				}
			}
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, r) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = r.n(o);
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => s.a.createElement("div", {
				className: Object(a.a)(i.a.loadingIcon, t, {
					[i.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${r}px`
				},
				"data-testid": "LoadingIcon"
			})
		},
		"./src/reddit/endpoints/accounts/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "c", (function() {
				return l
			})), r.d(t, "e", (function() {
				return m
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "b", (function() {
				return p
			}));
			var n = r("./src/config.ts"),
				s = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/lib/omitHeaders/index.ts"),
				i = r("./src/reddit/constants/headers.ts"),
				c = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const d = async (e, t) => Object(a.a)(Object(o.a)(e, [i.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/block_user`,
				method: s.jb.POST
			}), l = async (e, t, r) => Object(a.a)(Object(o.a)(e, [i.a]), {
				data: {
					name: r,
					container: t,
					type: "enemy"
				},
				endpoint: `${e.apiUrl}/api/unfriend`,
				method: s.jb.POST
			}), m = async (e, t) => Object(a.a)(Object(o.a)(e, [i.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/add_whitelisted?include_model`,
				method: s.jb.POST
			}), u = async (e, t) => Object(a.a)(Object(o.a)(e, [i.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/remove_whitelisted`,
				method: s.jb.POST
			}), p = async (e, t) => Object(a.a)(Object(o.a)(e, [i.a]), {
				endpoint: Object(c.a)(`${n.a.oauthUrl}/user/${t}/about`),
				method: s.jb.GET,
				data: {
					raw_json: 1
				}
			})
		},
		"./src/reddit/endpoints/chat/userSettings.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return u
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "e", (function() {
				return f
			})), r.d(t, "d", (function() {
				return b
			})), r.d(t, "a", (function() {
				return g
			}));
			var n = r("./src/config.ts"),
				s = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/lib/makeGqlRequest/index.ts"),
				i = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/redditGQL/operations/UpdateChatMessagesAsRead.json"),
				d = r("./src/reddit/constants/headers.ts"),
				l = r("./src/redditGQL/operations/CreateChatChannelInviteLink.json"),
				m = r("./src/redditGQL/types.ts");
			const u = e => Boolean(e && e.data && (null == e ? void 0 : e.errors)),
				p = e => Object(a.a)(Object(i.a)(e, [d.a]), {
					endpoint: `${n.a.sendbirdServiceUrl}/api/v1/chat/me/settings`,
					method: s.jb.GET
				}),
				f = async (e, t) => Object(a.a)(Object(i.a)(t, [d.a]), {
					endpoint: `${n.a.sendbirdServiceUrl}/api/v1/chat/me/settings`,
					method: s.jb.PUT,
					data: JSON.stringify({
						invite_policy: e
					})
				}), b = (e, t) => {
					const r = {
						channels: t
					};
					return Object(o.a)(e, {
						...c,
						variables: {
							input: r
						}
					})
				}, g = e => Object(o.a)(e, {
					...l,
					variables: {
						input: {
							customType: m.a.Direct
						}
					}
				})
		},
		"./src/reddit/helpers/karma.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			const n = e => {
				if (!e || !e.karma) return 0;
				const {
					total: t,
					...r
				} = e.karma;
				return t || Object.values(r).reduce((e, t) => e + (t || 0), 0)
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, r) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return i
			}));
			var n = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/helpers/styles/mixins/loading.m.less"),
				a = r.n(s);
			const o = ({
					isLoading: e
				}) => Object(n.a)(a.a.loadingBackground, {
					[a.a["m-loading"]]: e
				}),
				i = e => Object(n.a)(a.a.loadingBar, o(e))
		},
		"./src/reddit/helpers/trackers/followers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return o
			}));
			var n = r("./src/reddit/constants/tracking.ts"),
				s = r("./src/reddit/selectors/telemetry.ts");
			const a = e => t => ({
					...Object(s.o)(t),
					action: n.c.CLICK,
					noun: `follower_list_page_${e?"follow":"unfollow"}`,
					source: "profile"
				}),
				o = () => e => ({
					...Object(s.o)(e),
					action: n.c.CLICK,
					noun: "follower_list_cta",
					source: "profile"
				})
		},
		"./src/reddit/helpers/trackers/user.ts": function(e, t, r) {
			"use strict";
			r.d(t, "g", (function() {
				return i
			})), r.d(t, "f", (function() {
				return c
			})), r.d(t, "h", (function() {
				return d
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "e", (function() {
				return m
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "a", (function() {
				return f
			})), r.d(t, "i", (function() {
				return b
			}));
			var n = r("./src/reddit/helpers/correlationIdTracker.ts"),
				s = r("./src/reddit/selectors/telemetry.ts"),
				a = r("./src/reddit/selectors/user.ts");
			const o = e => ({
					screen: s.ab(e),
					profile: s.R(e),
					subreddit: s.jb(e)
				}),
				i = e => t => ({
					source: "user_dropdown",
					action: "click",
					noun: e ? "night_mode_off" : "night_mode_on",
					...o(t)
				}),
				c = () => e => ({
					...o(e),
					source: "nav",
					action: "click",
					noun: "recap"
				}),
				d = e => t => ({
					source: "nav",
					action: "click",
					actionInfo: {
						pageType: t.platform.currentPage ? s.v(t.platform.currentPage) : void 0,
						settingValue: e ? "online" : "hidden"
					},
					noun: "online_presence_toggle",
					...o(t)
				}),
				l = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "predictions",
					...o(e)
				}),
				m = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "premium",
					correlationId: Object(n.c)(n.a.GoldPayment),
					...o(e)
				}),
				u = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "powerups",
					correlationId: Object(n.e)(n.a.PowerupsFlow, !1),
					...o(e)
				}),
				p = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "coins",
					correlationId: Object(n.c)(n.a.GoldPayment),
					...o(e)
				}),
				f = e => t => ({
					source: "profile",
					action: "click",
					noun: "block_user",
					targetUser: {
						id: Object(a.mb)(t, {
							userName: e
						}).id
					},
					...s.o(t)
				}),
				b = e => t => ({
					source: "profile",
					action: "click",
					noun: "unblock_user",
					targetUser: {
						id: Object(a.mb)(t, {
							userName: e
						}).id
					},
					...s.o(t)
				})
		},
		"./src/reddit/hooks/useLocale.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			}));
			var n = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				s = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/selectors/meta.ts");
			const i = "undefined" == typeof document ? function() {
				const e = Object(a.e)(o.i) || s.DEFAULT_LOCALE;
				return Object(n.isPseudoLocale)(e) ? s.DEFAULT_LOCALE : e
			} : function() {
				const e = document.documentElement.lang || s.DEFAULT_LOCALE;
				return Object(n.isPseudoLocale)(e) ? s.DEFAULT_LOCALE : e
			};
			t.a = i;
			const c = () => {
				const e = i(),
					t = Object(a.e)(o.b);
				return t ? e.replace(/([a-z]+-)([A-Z]+)/, `$1${t}`) : e
			}
		},
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, r) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/icons/svgs/Admin/index.m.less"),
				i = r.n(o);
			t.a = e => s.a.createElement("svg", {
				className: Object(a.a)(e.className, i.a.admin, {
					[i.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && s.a.createElement("title", null, e.title), e.desc && s.a.createElement("desc", null, e.desc), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), s.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, s.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), s.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && s.a.createElement("title", null, e.title), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M38.5,16.5l-15-15c-2-2-5.1-2-7.1,0l-15,15c-2,2-2,5.1,0,7.1l15,15c2,2,5.1,2,7.1,0l15-15 C40.5,21.6,40.5,18.4,38.5,16.5z M17.7,8.3C17.7,7,18.7,6,20,6s2.3,1,2.3,2.3v14.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3V8.3z M20,33.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1C23.1,32.4,21.7,33.7,20,33.7z"
			})))
		},
		"./src/reddit/icons/svgs/PremiumCircle/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("rect", {
				width: "20",
				height: "20",
				rx: "10",
				fill: "url(#gradient)"
			}), s.a.createElement("path", {
				d: "M12.121 13.471c-1.007.146-1.73.445-2.121.643v-3.068a1.2 1.2 0 00-1.2-1.2H6.53c.027-.292.046-.61.046-.978 0-1.015-.294-1.78-.53-2.233l.834-.834H10v2.845a1.2 1.2 0 001.2 1.2h2.27c.036.402.086.749.132 1.045.058.38.109.706.109 1.047 0 .627-.497 1.375-1.59 1.533zm3.017-7.35l-1.345-1.345a.6.6 0 00-.425-.175H6.632a.6.6 0 00-.425.175L4.862 6.122a.6.6 0 00-.042.802c.006.006.556.72.556 1.944 0 .783-.087 1.344-.164 1.84-.064.41-.124.797-.124 1.23 0 1.163.9 2.471 2.619 2.72 1.251.183 1.952.638 1.956.64a.61.61 0 00.67.002c.007-.004.709-.46 1.96-.642 1.719-.249 2.618-1.557 2.618-2.72 0-.433-.06-.82-.124-1.23a11.026 11.026 0 01-.163-1.84c0-1.22.536-1.919.556-1.944a.6.6 0 00-.042-.802z",
				fill: "#fff"
			}), s.a.createElement("defs", null, s.a.createElement("linearGradient", {
				id: "gradient",
				x1: "0",
				y1: "20",
				x2: "20.021",
				y2: "19.979",
				gradientUnits: "userSpaceOnUse"
			}, s.a.createElement("stop", {
				stopColor: "#EC0623"
			}), s.a.createElement("stop", {
				offset: "1",
				stopColor: "#FF8717"
			}))))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = function({
				className: e
			}) {
				return s.a.createElement("svg", {
					className: e,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, s.a.createElement("g", {
					fill: "inherit"
				}, s.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
		},
		"./src/reddit/layout/twoCol/Dynamic/index.m.less": function(e, t, r) {
			e.exports = {
				dynamicTwoCol: "_3lhzE6Cg3SSeQGIHuLjILb"
			}
		},
		"./src/reddit/models/Gold/Premium/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return c
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js");
			const s = {
					PREMIUM_1_MONTH: {
						priceInCoins: 1800,
						monthsOfPremium: 1
					},
					PREMIUM_3_MONTHS: {
						priceInCoins: 5400,
						monthsOfPremium: 3
					},
					PREMIUM_6_MONTHS: {
						priceInCoins: 10800,
						monthsOfPremium: 6
					},
					PREMIUM_12_MONTHS: {
						priceInCoins: 21600,
						monthsOfPremium: 12
					}
				},
				a = (e, t = !1) => {
					const r = [];
					for (const n in s) {
						const a = s[n];
						(a.priceInCoins <= e || t) && r.push(a)
					}
					return r
				},
				o = e => n.fbt._({
					"*": "{number of months} months {number of coins} Coins",
					_1: "1 month {number of coins} Coins"
				}, [n.fbt._plural(e.monthsOfPremium, "number of months"), n.fbt._param("number of coins", e.priceInCoins.toLocaleString())], {
					hk: "2bar0C"
				}),
				i = "com.reddit.premium_1";
			var c;
			! function(e) {
				e.Monthly = "monthly", e.Yearly = "yearly"
			}(c || (c = {}))
		},
		"./src/reddit/selectors/blockedRedditors.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "c", (function() {
				return i
			}));
			var n = r("./src/reddit/selectors/user.ts");
			const s = e => e.blockedRedditors.api.pending,
				a = e => e.blockedRedditors.list,
				o = (e, t) => {
					const r = (e => {
						const t = a(e);
						return t && t.ids
					})(e);
					return !!r && r.includes(t)
				},
				i = (e, t) => {
					const r = Object(n.mb)(e, {
						userName: t
					});
					return !!r && o(e, r.id)
				}
		},
		"./src/reddit/selectors/experiments/antievil/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return i
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts");
			const a = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: n.g
					}) === n.a.Enabled
				},
				o = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: n.m
					}) === n.Vc
				},
				i = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: n.n
					}) === n.Vc
				}
		},
		"./src/reddit/selectors/experiments/chatInviteLinkSharing.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts"),
				a = r("./src/reddit/selectors/user.ts");
			const o = e => Object(s.c)(e, {
				experimentName: n.F,
				experimentEligibilitySelector: () => Object(a.I)(e)
			}) === n.Vc
		},
		"./src/reddit/selectors/experiments/crisisTextLine.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return i
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts"),
				a = r("./src/reddit/selectors/user.ts");
			const o = e => n.c.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: a.J,
					experimentName: n.i
				}),
				i = e => n.e.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: a.J,
					experimentName: n.l
				})
		},
		"./src/reddit/selectors/experiments/econ/avatarNfts.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts");
			const a = e => Object(s.c)(e, {
				experimentEligibilitySelector: s.a,
				experimentName: n.t
			}) === n.w.Enabled
		},
		"./src/reddit/selectors/premium.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return n
			})), r.d(t, "d", (function() {
				return s
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return o
			}));
			const n = e => !!e.givePremium.givePremiumModalAccountName,
				s = e => e.givePremium.givePremiumModalAccountName,
				a = e => e.givePremium.api.error || "",
				o = e => e.givePremium.api.pending
		},
		"./src/redditGQL/operations/FetchBlockedRedditorsInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"1e9183c00f76"}')
		},
		"./src/redditGQL/operations/UpdateChatMessagesAsRead.json": function(e) {
			e.exports = JSON.parse('{"id":"bfc6fe51708d"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ProfileIdCard.603fd0e29e7994c2ea66.js.map