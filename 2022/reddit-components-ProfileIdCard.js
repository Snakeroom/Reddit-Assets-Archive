// https://www.redditstatic.com/desktop2x/reddit-components-ProfileIdCard.0dfdd2f0e471470c012a.js
// Retrieved at 5/4/2022, 1:00:04 PM by Reddit Dataminer v1.0.0
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

			function a(e) {
				let {
					showDay: t,
					useUtc: r,
					shortMonths: a,
					locale: o = n.E
				} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				const i = new Date(e * n.Tb);
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
			t.a = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.E;
				const r = e.toString().length > 10,
					s = new Date(e * (r ? 1 : 1e3));
				return s.toLocaleString(t, {
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
				return l
			})), r.d(t, "b", (function() {
				return d
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
				l = "BLOCKED_REDDITORS_LIST__REMOVE",
				d = "BLOCKED_REDDITORS_LIST__FAILED",
				m = "BLOCKED_REDDITORS_LIST__LOADED",
				u = "BLOCKED_REDDITORS_LIST__PENDING",
				p = Object(n.a)(c),
				f = Object(n.a)(l),
				b = Object(n.a)(d),
				g = Object(n.a)(m),
				v = Object(n.a)(u),
				h = () => async (e, t, r) => {
					let {
						gqlContext: n
					} = r;
					const s = t(),
						a = Object(i.a)(s);
					if (Object(i.b)(s) || a.timestamp && Date.now() - a.timestamp < 36e6) return;
					let c = !1,
						l = "";
					do {
						e(v());
						const t = {
								after: l,
								pageSize: 100
							},
							r = await o(n(), t);
						if (r && r.ok) {
							const {
								data: {
									identity: t
								}
							} = r.body;
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
									c = e, l = t || ""
								}
							} else c = !1
						} else {
							c = !1;
							const t = r.error ? r.error.type : "unknown error";
							e(b({
								message: t
							}))
						}
					} while (c)
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
				return v
			})), r.d(t, "b", (function() {
				return h
			})), r.d(t, "c", (function() {
				return x
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
				l = r("./src/reddit/selectors/experiments/antievil/index.tsx"),
				d = r("./src/reddit/selectors/user.ts");
			const m = "USER_BLOCK__PENDING",
				u = "USER_BLOCK__LOADED",
				p = "USER_BLOCK__FAILED",
				f = Object(s.a)(m),
				b = Object(s.a)(u),
				g = Object(s.a)(p),
				v = e => async (t, r, s) => {
					let {
						apiContext: d
					} = s;
					const m = r();
					if (m.blockUser.api.pending[e]) return;
					t(f({
						username: e
					}));
					const u = await Object(i.a)(d(), e),
						p = `error-block-${e}`;
					if (u.ok) u.body.name && t(b(u.body)), u.body.id && t(Object(a.f)(u.body.id)), t(o.g(p)), t(o.f({
						kind: c.b.SuccessCommunity,
						text: n.fbt._("{username} is now blocked", [n.fbt._param("username", e)], {
							hk: "MI2y8"
						})
					}));
					else {
						const r = {
								type: u.error ? u.error.type : "Unknown error",
								username: e
							},
							s = Object(l.e)(m) && "REBLOCK_RATE_LIMIT" === u.body.reason;
						t(g(r)), t(s ? o.f({
							id: p,
							kind: c.b.Error,
							text: n.fbt._("You can't block u/{username} for 24 hours after unblocking them", [n.fbt._param("username", e)], {
								hk: "W0oUd"
							}),
							buttonAction: v(e)
						}) : o.f({
							id: p,
							kind: c.b.Error,
							text: n.fbt._("An error has occured. Please try again later", null, {
								hk: "2FpsLy"
							}),
							buttonText: n.fbt._("Retry", null, {
								hk: "36rgQw"
							}),
							buttonAction: v(e)
						}))
					}
				}, h = "USER_UNBLOCK__PENDING", x = "USER_UNBLOCK__SUCCESS", I = "USER_UNBLOCK__FAILED", C = Object(s.a)(h), _ = Object(s.a)(x), O = Object(s.a)(I), P = e => async (t, r, s) => {
					let {
						apiContext: l
					} = s;
					const m = r(),
						u = Object(d.l)(m),
						p = u ? u.id : void 0,
						f = m.user.blocked.data.filter(t => t.name === e)[0];
					p && (t(C({
						name: e
					})), (await Object(i.c)(l(), p, e)).ok ? (t(_({
						name: e
					})), f && f.id && t(Object(a.h)(f.id)), t(o.f({
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
				l = r("./src/reddit/controls/Button/index.tsx"),
				d = r("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(n || (n = {}));
			const m = e => {
				let {
					onStartChat: t,
					text: r,
					className: s,
					sendEvent: o,
					contextId: i,
					priority: c,
					Icon: m,
					redditStyle: u,
					isFullWidth: p,
					eventSource: f,
					onClick: b,
					onAddUserToQuickReplyList: g,
					children: v,
					style: h
				} = e;
				return a.a.createElement(l.t, {
					onClick: e => {
						if (b && b(e), t(), f === n.awardNotification) return g();
						o(Object(d.b)(i))
					},
					className: s,
					text: r,
					priority: c,
					Icon: m,
					redditStyle: u,
					isFullWidth: p,
					style: h
				}, v)
			};
			m.displayName = "ChatButton";
			const u = Object(o.b)(null, (e, t) => {
				let {
					contextId: r,
					userId: n
				} = t;
				return {
					onStartChat: () => {
						e(Object(i.b)(n, r))
					},
					onAddUserToQuickReplyList: () => {
						e(Object(i.a)(n))
					}
				}
			});
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
		"./src/reddit/components/Econ/Marketplace/NftProfileUnit/async.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(n.a)({
				resolved: {},
				chunkName: () => "NftProfileUnit",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => Promise.all([r.e(2), r.e("NftProfileUnit")]).then(r.bind(null, "./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = s
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
				l = r("./src/reddit/icons/fonts/index.tsx"),
				d = r("./src/reddit/models/ApiRequestState/index.ts"),
				m = r("./src/reddit/selectors/experiments/profileAvatarChangeFix.ts"),
				u = r("./src/reddit/components/EditableImage/index.m.less"),
				p = r.n(u);
			const {
				fbt: f
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					altText: t,
					children: r,
					className: n,
					isProfileCard: u,
					isLoading: f,
					imageUrl: b,
					onFileSelected: g
				} = e;
				const v = Object(a.e)(m.a);
				return s.a.createElement("div", {
					className: Object(o.a)(p.a.Container, n)
				}, s.a.createElement("label", {
					className: p.a.HitBox
				}, s.a.createElement("span", {
					className: p.a.ImageContainer,
					role: "presentation"
				}, b ? s.a.createElement("img", {
					alt: t,
					className: p.a.Image,
					src: b
				}) : r), s.a.createElement(i.a, {
					className: p.a.ImageUploader,
					multiple: !1,
					onChange: e => {
						const t = Object(d.b)();
						g(e, t)
					},
					isPending: v ? f : void 0
				}), !f && s.a.createElement("div", {
					className: Object(o.a)(p.a.EditButton, {
						[p.a.profileCard]: u
					})
				}, s.a.createElement(l.a, {
					name: "add_media",
					className: p.a.EditIcon
				}))), f && s.a.createElement(c.a, {
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
				return l
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "c", (function() {
				return g
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/timeAgo/index.ts"),
				o = r("./src/reddit/hooks/useLocale.ts");
			var i = function(e) {
					let {
						seconds: t,
						...r
					} = e;
					var n;
					const i = Object(o.a)(),
						c = {
							...r,
							locale: null !== (n = r.locale) && void 0 !== n ? n : i
						};
					return s.a.createElement(s.a.Fragment, null, Object(a.d)(t, c))
				},
				c = r("./src/lib/humanizeDate/index.ts");
			var l = function(e) {
					let {
						seconds: t,
						...r
					} = e;
					var n;
					const a = Object(o.a)(),
						i = {
							...r,
							locale: null !== (n = r.locale) && void 0 !== n ? n : a
						};
					return s.a.createElement(s.a.Fragment, null, Object(c.a)(t, i))
				},
				d = r("./src/lib/constants/index.ts");
			var m = function(e) {
					let {
						seconds: t,
						locale: r
					} = e;
					const n = Object(o.a)(),
						a = null != r ? r : n;
					return s.a.createElement(s.a.Fragment, null, function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.E;
						const r = e * d.Tb;
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
					}(t, a))
				},
				u = r("./node_modules/fbt/lib/FbtPublic.js"),
				p = r("./src/lib/eventTools/index.ts");

			function f(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.E;
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}

			function b(e, t) {
				let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
					n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d.E;
				const s = Object(p.e)(e, t),
					a = new Date(e * d.Tb);
				let o;
				if (s === p.a.Live || r) return u.fbt._("Now", null, {
					hk: "Prpcg"
				});
				return s === p.a.Future ? o = Object(p.d)(e) ? u.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : Object(p.b)(e) >= 5 ? f(a, n) : function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.E;
					return e.toLocaleDateString(t, {
						weekday: "long"
					})
				}(a, n) : s === p.a.Past && (o = Object(p.d)(e) ? u.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : f(a, n)), `${o} @ ${function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d.E;return e.toLocaleTimeString(t,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(a,n)}`
			}
			var g = function(e) {
				let {
					startTime: t,
					endTime: r,
					isLive: n,
					locale: a
				} = e;
				const i = Object(o.a)(),
					c = null != a ? a : i;
				return s.a.createElement(s.a.Fragment, null, b(t, r, n, c))
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
				return v
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				i = r("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = r("./src/reddit/selectors/tooltip.ts"),
				d = r("./src/reddit/components/InfoTextTooltip/index.m.less"),
				m = r.n(d),
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
				v = e => {
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
					isOpen: (e, t) => {
						let {
							tooltipId: r
						} = t;
						return Object(l.b)(r)(e)
					}
				}),
				x = Object(c.a)(v, [i.a.Click, i.a.Keydown]),
				I = Object(c.a)(g, [i.a.Click, i.a.Keydown]),
				C = Object(a.b)(h);
			t.c = C(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? s.a.createElement(x, p({}, e, {
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
				return l
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

			function l(e, t) {
				const r = Object(a.a)(e, t);
				class n extends s.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(o.e);
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
				fbt: l
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			class d extends s.a.PureComponent {
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
					} = t, d = n.description ? n.description : n.name;
					return s.a.createElement("a", {
						className: c.a.AwardedLastMonth,
						href: `${a.a.oldRedditUrl}/user/${r}/gilded`
					}, s.a.createElement("div", {
						className: c.a.iconColumn
					}, s.a.createElement("img", {
						alt: d,
						className: c.a.icon,
						src: e
					}), i > 1 && s.a.createElement("span", {
						className: c.a.count
					}, `+${Object(o.b)(i-1)}`)), s.a.createElement("div", {
						className: c.a.textColumn
					}, l._({
						"*": "Received the {award-name} Award and more in the past 30 days",
						_1: "Received the {award-name} Award in the past 30 days"
					}, [l._param("award-name", n.name), l._plural(i)], {
						hk: "16MJHe"
					})))
				}
			}
			t.a = d
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
				l = r("./src/lib/lessComponent.tsx"),
				d = r("./src/lib/prettyPrintNumber/index.ts"),
				m = r("./src/reddit/components/HumanDate/index.tsx"),
				u = r("./src/reddit/contexts/InsideOverlay.tsx"),
				p = r("./src/reddit/endpoints/profile/info.ts"),
				f = r("./src/reddit/helpers/karma.ts"),
				b = r("./src/reddit/helpers/trackers/followers.ts"),
				g = r("./src/reddit/hooks/useTracking.ts"),
				v = r("./src/reddit/icons/fonts/index.tsx"),
				h = r("./src/reddit/selectors/profile.ts"),
				x = r("./src/reddit/selectors/user.ts"),
				I = r("./src/reddit/actions/tooltip.ts"),
				C = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				_ = r("./src/reddit/components/ProfileIdCard/Highlight.m.less"),
				O = r.n(_);

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const k = l.a.div("Container", O.a),
				E = l.a.div("Body", O.a),
				N = l.a.h5("Title", O.a),
				j = l.a.span("Label", O.a);
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
					return a.a.createElement(k, {
						className: o
					}, a.a.createElement(N, null, r), a.a.createElement(E, null, e, a.a.createElement(j, P({
						key: "label"
					}, i), t)), s && n && a.a.createElement(C.c, {
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
				U = r("./src/reddit/components/ProfileIdCard/Highlights.m.less"),
				S = r.n(U);
			const F = Object(i.a)(h.j, (e, t) => {
					let {
						profileName: r
					} = t;
					return Object(x.Hb)(e, r)
				}, (e, t) => ({
					karma: {
						...p.a,
						...null == t ? void 0 : t.karma,
						total: Object(f.a)(t)
					},
					enableFollowers: !!(null == t ? void 0 : t.enableFollowers),
					profileCreated: t && (t.createdUtc || t.created) || 0,
					subscribers: e && e.subscribers || 0
				})),
				L = l.a.div("Container", S.a);

			function B(e, t) {
				return `profile--id-card--highlight-tooltip-${e?"-overlay":""}-${t}`
			}
			const T = e => {
				const t = Object(g.a)(),
					r = Object(s.useCallback)(() => {
						t(Object(b.b)())
					}, [t]),
					o = e.isOwnProfile ? a.a.createElement(a.a.Fragment, null, Object(d.b)(e.subscribers, {
						displayFull: !0
					}), a.a.createElement(v.a, {
						name: "right",
						className: S.a.iconRight
					})) : Object(d.b)(e.subscribers, {
						displayFull: !0
					}),
					i = a.a.createElement(y, {
						className: Object(c.a)(S.a.profileHighlight, e.highlightClassName),
						icon: a.a.createElement(v.a, {
							name: "user",
							isFilled: !0,
							className: S.a.icon,
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
					highlightClassName: l
				} = e, u = {
					...p.a,
					...t
				}, f = B(o, "karma"), b = B(o, "cakeday"), g = `${n.fbt._({"*":"{number} Post Karma",_1:"1 Post Karma"},[n.fbt._plural(u.fromPosts,"number",Object(d.b)(u.fromPosts,{displayFull:!0}))],{hk:"husfU"})}\n${n.fbt._({"*":"{number} Comment Karma",_1:"1 Comment Karma"},[n.fbt._plural(u.fromComments,"number",Object(d.b)(u.fromComments,{displayFull:!0}))],{hk:"26iPTL"})}\n${n.fbt._({"*":"{number} Awardee Karma",_1:"1 Awardee Karma"},[n.fbt._plural(u.fromAwardsReceived,"number",Object(d.b)(u.fromAwardsReceived,{displayFull:!0}))],{hk:"2Ww5MR"})}\n${n.fbt._({"*":"{number} Awarder Karma",_1:"1 Awarder Karma"},[n.fbt._plural(u.fromAwardsGiven,"number",Object(d.b)(u.fromAwardsGiven,{displayFull:!0}))],{hk:"2F1chz"})}`;
				return a.a.createElement(L, {
					className: c
				}, a.a.createElement(y, {
					className: l,
					icon: a.a.createElement(v.a, {
						name: "karma",
						isFilled: !0,
						className: S.a.icon,
						key: "karma"
					}),
					label: Object(d.b)(u.total, {
						displayFull: !0
					}),
					title: n.fbt._("Karma", null, {
						hk: "RtSgN"
					}),
					tooltipId: f,
					tooltip: g
				}), a.a.createElement(y, {
					className: l,
					icon: a.a.createElement(v.a, {
						name: "cake",
						isFilled: !0,
						className: S.a.icon,
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
					highlightClassName: l,
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
				l = a.a.div("dynamicTwoCol", c.a),
				d = r("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				m = r("./src/reddit/components/ProfileIdCard/Highlights.tsx"),
				u = r("./src/reddit/components/ProfileIdCard/Preview.m.less"),
				p = r.n(u),
				f = r("./src/config.ts"),
				b = r("./node_modules/fbt/lib/FbtPublic.js"),
				g = r("./src/reddit/controls/InternalLink/index.tsx"),
				v = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				h = r("./src/reddit/controls/OutboundLink/index.tsx"),
				x = r("./src/reddit/icons/fonts/index.tsx"),
				I = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.tsx"),
				C = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				_ = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				O = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				P = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserIcon/index.m.less"),
				k = r.n(P),
				E = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				N = r.n(E);
			var j = e => {
					let {
						bannerBackgroundImage: t,
						editMode: r,
						isDefaultIcon: n,
						isDeletingBanner: a,
						isDeletingIcon: o,
						isEmployee: i,
						isGold: c,
						isNSFW: l,
						isOwnProfile: d,
						onClickSnoovatar: m,
						onDeleteBanner: u,
						onDeleteIcon: p,
						profileIcon: P,
						title: E,
						userCreated: j,
						username: w,
						url: y
					} = e;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement(_.a, {
						bannerBackgroundImage: t,
						editMode: !!r,
						isNSFW: l,
						username: w,
						isDeletingBanner: !!a,
						onDeleteBanner: u
					}), s.a.createElement("div", {
						className: k.a.SnooIconWrapper
					}, d || !P || l ? s.a.createElement(I.a, {
						iconUrl: P,
						isNSFW: l,
						userName: w,
						isProfileIdCard: !0
					}) : s.a.createElement(h.b, {
						href: P
					}, s.a.createElement(I.a, {
						iconUrl: P,
						isNSFW: l,
						userName: w,
						isProfileIdCard: !0
					})), r && !n && (o ? s.a.createElement(v.a, {
						sizePx: 20,
						className: N.a.loadingIcon
					}) : s.a.createElement(x.a, {
						name: "close",
						className: N.a.closeIcon,
						onClick: p
					}))), !r && d && s.a.createElement(g.a, {
						to: "/settings/profile",
						className: k.a.settingsLink
					}, s.a.createElement(x.a, {
						name: "settings",
						className: N.a.settingsIcon
					})), E && s.a.createElement("h4", {
						className: k.a.userTitle
					}, E), s.a.createElement(O.a, {
						className: k.a.userName,
						username: w,
						userCreated: j,
						url: y
					}), i && s.a.createElement(x.a, {
						name: "admin",
						isFilled: !0,
						className: k.a.adminIcon,
						title: b.fbt._("Reddit admin", null, {
							hk: "goUUb"
						})
					}), c && s.a.createElement("a", {
						title: b.fbt._("{username} has Reddit Premium", [b.fbt._param("username", w)], {
							hk: "3Fylv"
						}),
						href: `${f.a.redditUrl}/premium`
					}, s.a.createElement(x.a, {
						name: "premium",
						isFilled: !0,
						className: k.a.premiumIcon
					})), d && s.a.createElement(C.a, {
						currentUserHasSnoovatar: !1,
						isOwnProfile: !0,
						onClick: m
					}))
				},
				w = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx");
			var y = e => {
					let {
						bannerBackgroundImage: t,
						currentUserHasSnoovatar: r,
						editMode: n,
						isDefaultIcon: a,
						isDeletingBanner: o,
						isDeletingIcon: i,
						isEmployee: c,
						isGold: l,
						isNSFW: d,
						isOwnProfile: m,
						onClickSnoovatar: u,
						onDeleteBanner: p,
						onDeleteIcon: f,
						prefersReducedAnimations: b,
						profileIcon: g,
						snoovatarUrl: v,
						title: h,
						userCreated: x,
						username: I,
						url: C
					} = e;
					return v ? s.a.createElement(w.a, {
						bannerBackgroundImage: t,
						currentUserHasSnoovatar: r,
						editMode: n,
						isDeletingBanner: o,
						isEmployee: c,
						isGold: l,
						isNSFW: d,
						isOwnProfile: m,
						onClickSnoovatar: u,
						onDeleteBanner: p,
						prefersReducedAnimations: b,
						snoovatarUrl: v,
						title: h,
						userCreated: x,
						username: I,
						url: C
					}) : s.a.createElement(j, {
						bannerBackgroundImage: t,
						editMode: n,
						isDefaultIcon: a,
						isDeletingBanner: o,
						isDeletingIcon: i,
						isEmployee: c,
						isGold: l,
						isNSFW: d,
						isOwnProfile: m,
						onClickSnoovatar: u,
						onDeleteBanner: p,
						onDeleteIcon: f,
						profileIcon: g,
						title: h,
						userCreated: x,
						username: I,
						url: C
					})
				},
				U = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/NftCard/index.tsx");
			const S = a.a.wrapped(o.b, "Widget", p.a),
				F = a.a.div("Description", p.a),
				L = a.a.wrapped(l, "Actions", p.a);
			class B extends s.a.PureComponent {
				renderAwardedLastMonth() {
					const {
						recentAwardings: e,
						topAwardIcon: t,
						username: r
					} = this.props;
					return e ? s.a.createElement(d.a, {
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
						isOverlay: l,
						isOwnProfile: d,
						profileIcon: u,
						publicDescription: p,
						snoovatarUrl: f,
						title: b,
						url: g,
						userCreated: v,
						username: h,
						isDefaultIcon: x,
						isDeletingIcon: I,
						isDeletingBanner: C,
						onClickSnoovatar: _,
						onDeleteIcon: O,
						onDeleteBanner: P,
						prefersReducedAnimations: k,
						editMode: E,
						isNftPreview: N
					} = this.props;
					return N ? s.a.createElement(s.a.Fragment, null, s.a.createElement(U.a, {
						bannerBackgroundImage: t,
						currentUserHasSnoovatar: r,
						editMode: E,
						isDeletingBanner: C,
						isEmployee: o,
						isGold: i,
						isNSFW: c,
						isOwnProfile: !!d,
						onClickSnoovatar: _,
						onDeleteBanner: P,
						prefersReducedAnimations: k,
						snoovatarUrl: f,
						title: b,
						userCreated: v,
						username: h,
						actions: e,
						url: g,
						footer: a
					})) : s.a.createElement(S, {
						className: n
					}, s.a.createElement(y, {
						bannerBackgroundImage: N ? void 0 : t,
						currentUserHasSnoovatar: r,
						editMode: E,
						isDefaultIcon: x,
						isDeletingBanner: C,
						isDeletingIcon: I,
						isEmployee: o,
						isGold: i,
						isNSFW: c,
						isOwnProfile: !!d,
						onClickSnoovatar: _,
						onDeleteBanner: P,
						onDeleteIcon: O,
						prefersReducedAnimations: k,
						profileIcon: u,
						title: b,
						userCreated: v,
						username: h,
						url: g,
						snoovatarUrl: f
					}), s.a.createElement(F, null, p), s.a.createElement(m.a, {
						isOwnProfile: !!d,
						profileName: h,
						isOverlay: l
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
				l = r("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				d = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less"),
				m = r.n(d);
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
						userName: l
					} = this.props, {
						isUpdating: d
					} = this.state, u = e ? a.a.createElement("div", {
						className: m.a.Banner,
						style: {
							backgroundImage: `url(${e})`
						}
					}) : null;
					return r && Object(c.e)(r) === l ? a.a.createElement(i.a, {
						altText: n.fbt._("{userName} banner image", [n.fbt._param("userName", l)], {
							hk: "1PcEBS"
						}),
						className: t,
						isLoading: d,
						onFileSelected: this.updateProfileIcon
					}, u) : o && s ? null : u
				}
			}
			t.a = Object(l.a)(u)
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
				l = r("./src/reddit/models/User/index.ts"),
				d = r("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
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
						userName: d
					} = this.props, {
						isUpdating: m
					} = this.state, p = a.a.createElement(c.a, {
						className: u.a.Icon,
						iconUrl: r,
						isNSFW: s,
						userName: d,
						isProfileIcon: !0
					});
					return t && Object(l.e)(t) === d ? a.a.createElement(i.a, {
						altText: n.fbt._("{userName} avatar image", [n.fbt._param("userName", d)], {
							hk: "1LJxYE"
						}),
						className: e,
						isProfileCard: o,
						isLoading: m,
						onFileSelected: this.updateProfileIcon
					}, p) : p
				}
			}
			t.a = Object(d.a)(p)
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/reselect/es/index.js"),
				a = r("./src/reddit/actions/preferences.ts"),
				o = r("./src/reddit/selectors/user.ts");
			const i = Object(s.c)({
					currentUser: o.l,
					hideNSFWPref: o.G
				}),
				c = Object(n.b)(i, e => ({
					imageUpdateRequested: (t, r) => e(Object(a.C)(t, r))
				}));
			t.a = c
		},
		"./src/reddit/components/ProfileIdCard/ProfileNewPostButton/index.m.less": function(e, t, r) {
			e.exports = {
				button: "_2spwuTMFClUpwN0pWeYHnJ"
			}
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/classNames/index.ts"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/react-router/esm/react-router.js"),
				c = r("./src/reddit/actions/post.ts"),
				l = r("./src/reddit/actions/snoovatarModal.ts"),
				d = r("./src/reddit/components/TrackingHelper/index.tsx"),
				m = r("./src/reddit/controls/Button/index.tsx"),
				u = r("./src/reddit/helpers/trackers/snoovatar.ts"),
				p = r("./src/reddit/icons/svgs/Shirt/index.tsx"),
				f = r("./src/reddit/models/Vote/index.ts"),
				b = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				g = r.n(b);
			const {
				fbt: v
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(i.i)(e => {
				let {
					isHovercard: t,
					username: r,
					isAvatarPost: i,
					post: b,
					share: h
				} = e;
				const x = Object(d.b)(),
					I = Object(o.d)(),
					C = b && b.id,
					_ = b && b.voteState;
				let O = null;
				C || (O = t ? "user_hovercard" : "profile_overview");
				const P = Object(s.useCallback)(() => x(Object(u.g)(t ? "user_hovercard" : "profile_overview", r)), [t, x, r]);
				return a.a.createElement(m.t, {
					onClick: () => {
						i ? (x(u.h), C && _ === f.a.notVoted && I(Object(c.kb)(C))) : P();
						const e = i ? "postify" : "copy";
						I(Object(l.b)({
							clickSource: O,
							share: h,
							source: e
						}))
					},
					className: Object(n.a)(g.a.snoovatarButton, g.a.snoovatarExtraPadding, g.a.compactButtonLayout, {
						[g.a.avatarPostifyButton]: i
					}),
					isFullWidth: !0
				}, a.a.createElement(p.a, {
					className: Object(n.a)({
						[g.a.shirtIcon]: !i,
						[g.a.avatarPostButtonShirtIcon]: i
					})
				}), v._("Try this Look", null, {
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
				l = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				d = r.n(l);
			const {
				fbt: m
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function(e) {
				let {
					compact: t,
					currentUserHasSnoovatar: r,
					className: n,
					isOwnProfile: l,
					onClick: u
				} = e;
				return s.a.createElement(o.t, {
					onClick: u,
					isFullWidth: !0,
					className: Object(a.a)(d.a.snoovatarButton, {
						[d.a.snoovatarExtraPadding]: !r && l,
						[d.a.compactButtonLayout]: t
					}, n)
				}, r ? s.a.createElement(c.a, {
					className: d.a.shirtIcon
				}) : s.a.createElement("div", {
					className: d.a.shirtIcon
				}), r ? m._("Style Avatar", null, {
					hk: "UEtBO"
				}) : l ? m._("Create Avatar", null, {
					hk: "2pJgje"
				}) : m._("Create Your Own Avatar", null, {
					hk: "22FFcO"
				}), r ? s.a.createElement("div", {
					className: d.a.chevronIcon
				}) : s.a.createElement(i.a, {
					name: "caret_right",
					className: d.a.chevronIcon
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UnblockConfirmationModal/async.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "ProfileIdCardUnblockConfirmationModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => r.e("ProfileIdCardUnblockConfirmationModal").then(r.bind(null, "./src/reddit/components/ProfileIdCard/UnblockConfirmationModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/ProfileIdCard/UnblockConfirmationModal/index.tsx"
				}
			})
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
				l = r("./src/reddit/selectors/user.ts"),
				d = r("./src/reddit/components/ProfileIdCard/Highlights.tsx"),
				m = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				u = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx"),
				p = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/NftCard/index.m.less"),
				f = r.n(p);
			const b = /(?:\/|-)nft-([a-z0-9]+)-([a-z]+)(?:-headshot)?\.(?:png|svg)/i;

			function g(e) {
				return !!e && b.test(e)
			}
			t.a = e => {
				let {
					isEmployee: t,
					isGold: r,
					isNSFW: p,
					snoovatarUrl: g,
					title: v,
					userCreated: h,
					username: x,
					url: I,
					className: C,
					actions: _,
					footer: O
				} = e;
				const {
					badge: P,
					url: k
				} = Object(n.useMemo)(() => (function(e) {
					const t = b.exec(e) || ["", "", ""],
						r = t[1],
						n = t[2];
					return {
						id: r,
						url: "testing" === n ? "https://nft.reddit.com" : `https://nft.reddit.com/n/${r}`,
						badge: n
					}
				})(g), [g]), E = Object(a.e)(l.eb);
				return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: Object(i.a)(f.a.container, C)
				}, s.a.createElement(c.a, {
					className: f.a.cardAnimation,
					useCanvasRenderer: !0,
					assetUrl: `${o.a.assetPath}/img/snoovatars/nft_card_animation.json`,
					loop: !0
				}), s.a.createElement("div", {
					className: f.a.inner
				}, "testing" !== P && s.a.createElement("img", {
					alt: `${P} NFT`,
					className: f.a.badgeImage,
					src: `${o.a.assetPath}/img/snoovatars/nft_badge_${P}.svg`
				}), s.a.createElement("img", {
					className: f.a.cutout,
					src: `${o.a.assetPath}/img/snoovatars/hole-cutout-${E?"black":"white"}.svg`
				}), s.a.createElement("a", {
					href: k,
					target: "_blank",
					className: f.a.nftIcon,
					rel: "noopener noreferrer"
				}, s.a.createElement("img", {
					className: f.a.nftIconImage,
					alt: "View this NFT",
					src: `${o.a.assetPath}/img/snoovatars/nft_icon.svg`
				})), s.a.createElement("img", {
					className: f.a.snoovatarImage,
					src: g,
					alt: "Avatar NFT Image"
				}), s.a.createElement(u.a, {
					isEmployee: t,
					isGold: r,
					isNSFW: p,
					title: v,
					username: x
				}), s.a.createElement(m.a, {
					className: f.a.subUsername,
					shouldDisplaySnoovatar: !0,
					username: x,
					userCreated: h,
					url: I
				}), s.a.createElement(d.a, {
					className: f.a.highlights,
					highlightClassName: f.a.highlight,
					profileName: x,
					isOverlay: !1
				}), s.a.createElement("nav", {
					className: f.a.actions
				}, _))), s.a.createElement("div", {
					className: Object(i.a)(f.a.footer, C)
				}, O))
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
				l = r.n(c),
				d = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				m = r.n(d);
			t.a = function(e) {
				let {
					bannerBackgroundImage: t,
					isNSFW: r,
					username: n,
					editMode: c,
					isDeletingBanner: d,
					onDeleteBanner: u
				} = e;
				return s.a.createElement("div", {
					className: l.a.bannerWrapper
				}, s.a.createElement(i.a, {
					bannerUrl: t,
					isNSFW: r,
					userName: n
				}), c && t && (d ? s.a.createElement(a.a, {
					sizePx: 20,
					className: m.a.loadingIcon
				}) : s.a.createElement(o.a, {
					className: m.a.closeIcon,
					onClick: u
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
			t.a = function(e) {
				let {
					className: t,
					shouldDisplaySnoovatar: r,
					url: n,
					userCreated: c,
					username: l,
					...d
				} = e;
				const m = r ? s.a.createElement(s.a.Fragment, null, "u/", l, " · ", s.a.createElement(o.d, {
					seconds: c,
					noPostfix: !0,
					shortenedUnit: !0
				})) : `u/${l}`;
				return n ? s.a.createElement(a.a, i({}, d, {
					className: t,
					to: n
				}), m) : s.a.createElement("span", i({}, d, {
					className: t
				}), m)
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
				l = r("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
				d = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				m = r.n(d);
			t.a = e => {
				let {
					title: t,
					username: r,
					isEmployee: a,
					isGold: d,
					isNSFW: u
				} = e;
				return o.a.createElement("h1", {
					className: m.a.snoovatarUserTitle
				}, t || r, a && o.a.createElement(i.a, {
					className: m.a.snoovatarAdminIcon,
					title: s.fbt._("Reddit admin", null, {
						hk: "goUUb"
					})
				}), d && o.a.createElement("a", {
					title: s.fbt._("{username} has Reddit Premium", [s.fbt._param("username", r)], {
						hk: "3Fylv"
					}),
					href: `${n.a.redditUrl}/premium`
				}, o.a.createElement(l.a, {
					className: m.a.snoovatarPremiumIcon
				})), u && o.a.createElement(c.a, {
					className: m.a.snoovatarNsfwIcon,
					title: s.fbt._("NSFW - Adult Content", null, {
						hk: "2Iw7mN"
					})
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less": function(e, t, r) {
			e.exports = {
				snoovatarContainer: "_34XIqvI8-YT1wukR_W8vj6",
				nftProfileUnitContainer: "OfvB_Czxn5wwXiBN6RVlG",
				nftProfileUnit: "n5OW4wkmX5R3yYizuJXw1",
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
				i = r("./src/reddit/components/Econ/Marketplace/NftProfileUnit/async.ts"),
				c = r("./src/reddit/controls/InternalLink/index.tsx"),
				l = r("./src/reddit/helpers/userSnoovatar/index.ts"),
				d = r("./src/reddit/icons/fonts/index.tsx"),
				m = r("./src/reddit/selectors/experiments/econ/index.ts"),
				u = r("./src/reddit/selectors/experiments/econ/avatarNfts.ts"),
				p = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				f = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				b = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				g = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				v = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less")),
				h = r.n(v);
			const x = 25;

			function I(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function C(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const _ = I("particleDelay", h.a),
				O = I("particleX", h.a),
				P = I("particleFloat", h.a),
				k = () => {
					const e = C(O),
						t = C(P),
						r = C(_);
					return Object(o.a)(h.a.particle, e, t, r)
				};
			class E extends s.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < x; t++) e.push(this.createParticle(t));
					return s.a.createElement("div", {
						role: "presentation",
						className: h.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return s.a.createElement("div", {
						key: e,
						className: `${k()}`
					})
				}
			}
			var N = E,
				j = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				w = r.n(j),
				y = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx");
			t.a = e => {
				let {
					bannerBackgroundImage: t,
					compact: r,
					currentUserHasSnoovatar: n,
					editMode: v,
					isDeletingBanner: x,
					isEmployee: I,
					isGold: C,
					isNSFW: _,
					isOwnProfile: O,
					onClickSnoovatar: P,
					onDeleteBanner: k,
					prefersReducedAnimations: E,
					snoovatarUrl: j,
					title: U,
					userCreated: S,
					username: F,
					url: L,
					isHovercard: B
				} = e;
				const T = Object(a.e)(e => !O && !!j && Object(m.e)(e)),
					M = Object(a.e)(u.b),
					A = j && Object(l.e)(j) && M;
				return s.a.createElement(s.a.Fragment, null, s.a.createElement(b.a, {
					bannerBackgroundImage: t,
					editMode: !!v,
					isNSFW: _,
					username: F,
					isDeletingBanner: !!x,
					onDeleteBanner: k
				}), A ? s.a.createElement("div", {
					className: h.a.nftProfileUnitContainer
				}, s.a.createElement(i.a, {
					className: h.a.nftProfileUnit,
					imageUrl: j
				})) : s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: h.a.snoovatarContainer
				}, C && s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: h.a.topGlow
				}), s.a.createElement("div", {
					className: h.a.bottomGlow
				}), !E && s.a.createElement(N, null)), s.a.createElement("img", {
					className: Object(o.a)(h.a.snoovatar, {
						[h.a.premiumGlow]: C
					}),
					src: j || void 0
				})), !v && O && s.a.createElement(c.a, {
					to: "/settings/profile",
					className: h.a.snoovatarSettingsLink
				}, s.a.createElement(d.a, {
					name: "settings",
					className: w.a.settingsIcon
				}))), s.a.createElement(y.a, {
					isEmployee: I,
					isGold: C,
					isNSFW: _,
					title: U,
					username: F
				}), s.a.createElement(g.a, {
					className: h.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: F,
					userCreated: S,
					url: L
				}), (O || !n && !!j) && s.a.createElement(p.a, {
					compact: r,
					currentUserHasSnoovatar: n,
					isOwnProfile: O,
					onClick: P
				}), T && s.a.createElement(f.a, {
					username: F,
					isHovercard: !!B,
					share: {
						username: F
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
			var n, s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				c = r("./src/reddit/actions/snoovatarModal.ts"),
				l = r("./src/reddit/actions/subscription/index.ts"),
				d = r("./src/reddit/actions/userBlocks.ts"),
				m = r("./src/reddit/components/ChatButton/index.tsx"),
				u = r("./src/reddit/components/ProfileIdCard/Preview.tsx"),
				p = r("./src/reddit/components/TrackingHelper/index.tsx"),
				f = r("./src/reddit/constants/posts.ts"),
				b = r("./src/reddit/controls/Button/index.tsx"),
				g = r("./src/reddit/constants/tracking.ts"),
				v = r("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.FOLLOW = "follow", e.UNFOLLOW = "unfollow", e.CREATE_POST = "create_post"
			}(n || (n = {}));
			const h = (e, t) => ({
				...Object(v.n)(t),
				profile: Object(v.k)(t),
				subreddit: {
					id: e
				}
			});
			var x = r("./src/reddit/helpers/trackers/user.ts"),
				I = r("./src/reddit/selectors/gold/awardIcon.ts"),
				C = r("./src/reddit/selectors/platform.ts"),
				_ = r("./src/reddit/selectors/profile.ts"),
				O = r("./src/reddit/selectors/structuredStyles.ts"),
				P = r("./src/reddit/selectors/tooltip.ts"),
				k = r("./src/reddit/selectors/user.ts"),
				E = r("./src/reddit/selectors/userPrefs.ts"),
				N = r("./src/reddit/selectors/experiments/econ/avatarNfts.ts"),
				j = r("./node_modules/fbt/lib/FbtPublic.js"),
				w = r("./node_modules/lodash/compact.js"),
				y = r.n(w),
				U = r("./src/config.ts"),
				S = r("./src/lib/classNames/index.ts"),
				F = r("./src/lib/loadableAction/index.ts"),
				L = r("./src/lib/copyToClipboard/index.ts"),
				B = r("./src/reddit/actions/toaster.ts"),
				T = r("./src/reddit/endpoints/chat/userSettings.ts"),
				M = r("./src/reddit/models/Toast/index.ts");
			var A = r("./src/reddit/actions/gold/modals.ts"),
				D = r("./src/reddit/actions/modal.ts"),
				R = r("./src/reddit/actions/profile/index.ts"),
				W = r("./src/reddit/components/CrisisFlow/index.tsx"),
				G = r("./src/higherOrderComponents/makeAsync.tsx"),
				H = r("./src/lib/loadWithRetries/index.ts");
			var K = Object(G.a)({
					getComponent: () => Object(H.a)(() => r.e("GivePremiumModal").then(r.bind(null, "./src/reddit/components/GivePremiumModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				z = r("./src/reddit/constants/modals.ts"),
				Z = r("./src/reddit/helpers/correlationIdTracker.ts"),
				q = r("./src/reddit/helpers/styles/mixins/loading.ts"),
				Y = r("./src/reddit/models/Gold/Premium/index.ts"),
				Q = r("./src/reddit/selectors/experiments/chatInviteLinkSharing.ts"),
				V = r("./src/reddit/selectors/experiments/crisisTextLine.ts"),
				X = r("./src/reddit/selectors/premium.ts"),
				J = r("./src/reddit/components/ProfileIdCard/footer.m.less"),
				$ = r.n(J);

			function ee() {
				return (ee = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const te = Object(i.c)({
					areModeratedSubredditsPending: _.a,
					coinsToSpend: k.e,
					givePremiumModalIsOpen: X.c,
					hasFetchedModerators: _.k,
					isEmployee: k.O,
					isLoggedIn: k.R,
					profile: _.j,
					crisisFlowEnabled: V.b,
					chatInviteLinkSharing: Q.a
				}),
				re = e => {
					let {
						isLoading: t,
						...r
					} = e;
					return a.a.createElement("div", ee({}, r, {
						className: Object(S.a)($.a.Shimmer, Object(q.b)({
							isLoading: t
						}))
					}))
				};
			class ne extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						expanded: !1,
						showCrisisModal: !1
					}, this.clickGivePremium = async () => {
						const {
							onClickGivePremium: e,
							sendEvent: t
						} = this.props;
						e(Object(Z.e)(Z.a.GiftPremiumFlow));
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
							profileName: l,
							profile: d,
							crisisFlowEnabled: m,
							userAcceptsPms: u,
							onClickBlockUser: p,
							onClickChatInviteLink: f,
							onClickUnblockUser: b,
							isUserBlocked: g
						} = this.props, v = o && Object(Y.d)(n, a).length && !c || a, h = y()([(c || i) && s ? {
							text: j.fbt._("Profile Moderation", null, {
								hk: "4x1una"
							}),
							url: `/user/${l}/about/edit/moderation`,
							isInternalLink: !0
						} : void 0, !c && u ? {
							text: j.fbt._("Send Message", null, {
								hk: "2oAlZ5"
							}),
							url: `${U.a.redditUrl}/message/compose/?to=${l}`
						} : void 0, o && !c ? {
							onClick: g ? b : p,
							text: g ? j.fbt._("Unblock User", null, {
								hk: "1onWdM"
							}) : j.fbt._("Block User", null, {
								hk: "4ltcgv"
							})
						} : void 0, !c && t ? {
							text: j.fbt._("View Snoovatar", null, {
								hk: "31JWSq"
							}),
							url: `${U.a.redditUrl}/user/${l}/snoo`
						} : void 0, !c && m ? {
							text: j.fbt._("Get Them Help and Support", null, {
								hk: "3FfPTy"
							}),
							onClick: this.onOpenCrisisModal
						} : void 0, !c && d ? {
							text: j.fbt._("Report User", null, {
								hk: "4hFoE2"
							}),
							url: `${U.a.redditUrl}/api/report_redirect?reason_code=USER_PROFILE&thing=${d.id}`
						} : void 0, o && d && !d.isQuarantined ? {
							onClick: e,
							text: j.fbt._("Add to Custom Feed", null, {
								hk: "3ZtOdG"
							})
						} : void 0, c && o && r ? {
							onClick: f,
							text: j.fbt._("Invite someone to chat", null, {
								hk: "1ndvHF"
							})
						} : void 0]);
						return v && h.splice(1, 0, {
							onClick: this.clickGivePremium,
							text: j.fbt._("Give Premium", null, {
								hk: "2wyUqF"
							})
						}), h
					}, this.moreOptionsToggled = () => {
						!this.state.expanded && this.canLoadMods() && this.props.onModeratorsRequested(), this.setState(e => {
							let {
								expanded: t
							} = e;
							return {
								expanded: !t
							}
						})
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
					const n = (t ? r : []).map(e => e.url ? e.isInternalLink ? a.a.createElement(b.t, {
						kind: b.b.InternalLink,
						priority: b.c.Plain,
						size: b.d.XS,
						key: e.url,
						onClick: e.onClick,
						to: e.url,
						className: $.a.menuItem
					}, e.text) : a.a.createElement(b.t, {
						kind: b.b.ExternalLink,
						priority: b.c.Plain,
						size: b.d.XS,
						key: e.url,
						href: e.url,
						onClick: e.onClick,
						className: $.a.menuItem
					}, e.text) : a.a.createElement(b.t, {
						priority: b.c.Plain,
						size: b.d.XS,
						className: $.a.menuItem,
						key: e.text,
						onClick: e.onClick
					}, e.text));
					this.state.expanded && this.isLoadingMods() && (n.unshift(a.a.createElement("div", {
						className: $.a.menuItem,
						key: "loading-1"
					}, a.a.createElement(re, {
						isLoading: this.props.areModeratedSubredditsPending
					}))), n.unshift(a.a.createElement("div", {
						className: $.a.menuItem,
						key: "loading-2"
					}, a.a.createElement(re, {
						isLoading: this.props.areModeratedSubredditsPending
					}))));
					const s = t ? j.fbt._("Fewer Options", null, {
						hk: "4ixXKg"
					}) : j.fbt._("More Options", null, {
						hk: "4ix9v1"
					});
					return a.a.createElement("div", {
						className: $.a.container
					}, n, a.a.createElement("div", {
						className: $.a.expandContainer
					}, a.a.createElement(b.r, {
						className: $.a.expandButton,
						onClick: this.moreOptionsToggled
					}, s)), e && a.a.createElement(K, null), this.state.showCrisisModal && a.a.createElement(W.b, {
						withOverlay: !0,
						overlayCustomStyles: W.a,
						fromUserProfile: !0,
						username: this.props.profileName,
						onCloseCrisisModal: this.onCloseCrisisModal
					}))
				}
			}
			var se = Object(o.b)(te, (e, t) => {
					let {
						profileName: n,
						sendEvent: s
					} = t;
					return {
						addToMultiClicked: () => {
							e(Object(F.a)(() => Promise.all([r.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), r.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), r.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), r.e("CountryPage~Multireddit"), r.e("Multireddit")]).then(r.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.myMultiredditsRequested))(!0, !0)), e(Object(D.h)(z.a.MULTIREDDIT_ADD_SUBREDDIT))
						},
						onClickGivePremium: t => e(Object(A.e)({
							correlationId: t,
							profileName: n
						})),
						onModeratorsRequested: () => e(Object(R.b)(n)),
						onClickBlockUser: () => {
							e(Object(d.h)(n)), s(Object(x.a)(n))
						},
						onClickUnblockUser: () => {
							e(Object(d.g)(n)), s(Object(x.i)(n))
						},
						onClickChatInviteLink: () => e((() => async (e, t, r) => {
							let {
								gqlContext: n
							} = r;
							const s = await Object(T.a)(n());
							if (s.ok) {
								const t = s.body.data.createChatChannelInviteLink.inviteUrl;
								if (t) {
									Object(L.a)(t);
									const r = Object(B.e)(j.fbt._("Copied link!", null, {
										hk: "4a4E1x"
									}), M.b.SuccessCommunity);
									e(Object(B.f)(r))
								}
							} else {
								const t = Object(B.e)(j.fbt._("Something went wrong", null, {
									hk: "22u7ha"
								}), M.b.Error);
								e(Object(B.f)(t))
							}
						})())
					}
				})(ne),
				ae = r("./src/reddit/helpers/trackers/postComposer.ts"),
				oe = r("./src/reddit/components/ProfileIdCard/ProfileNewPostButton/index.m.less"),
				ie = r.n(oe);
			const {
				fbt: ce
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var le = e => {
					let {
						username: t,
						currentUserHasSubreddit: r
					} = e;
					const n = Object(p.b)(),
						o = Object(s.useCallback)(() => n(Object(ae.x)({
							actionInfoType: "profile"
						})), [n]);
					return a.a.createElement(b.a, {
						className: ie.a.button,
						kind: b.b.InternalLink,
						to: r ? `/user/${t}/submit` : "/submit",
						onClick: o
					}, ce._("New Post", null, {
						hk: "2VCZwF"
					}))
				},
				de = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/NftCard/index.tsx"),
				me = r("./src/reddit/components/ProfileIdCard/index.m.less"),
				ue = r.n(me),
				pe = r("./src/reddit/components/ProfileIdCard/UnblockConfirmationModal/async.tsx");
			const {
				fbt: fe
			} = r("./node_modules/fbt/lib/FbtPublic.js"), be = Object(i.c)({
				account: k.l,
				activeTooltipId: P.a,
				currentUserHasSubreddit: k.h,
				hideNSFWPref: k.G,
				isModerator: _.f,
				prefersReducedAnimations: E.c,
				profile: _.j,
				profileAboutInfo: _.h,
				topAwardIcon: (e, t) => {
					let {
						profileName: r
					} = t;
					return Object(I.e)(e, {
						userName: r,
						minSize: 32
					})
				},
				structuredStyle: (e, t) => Object(O.m)(e, Object(_.m)(e, t.profileName)),
				userHasSubreddit: (e, t) => {
					let {
						profileName: r
					} = t;
					return Object(k.Cb)(e, {
						userName: r
					})
				},
				user: (e, t) => {
					let {
						profileName: r
					} = t;
					return Object(k.Bb)(e, {
						userName: r
					})
				},
				page: C.b,
				allowNFTs: N.a,
				isUserBlocked: k.M
			}), ge = e => {
				let {
					username: t,
					currentUserHasSubreddit: r,
					id: n
				} = e;
				return a.a.createElement("div", {
					className: ue.a.actionItem
				}, a.a.createElement(le, {
					username: t,
					currentUserHasSubreddit: r
				}))
			}, ve = e => {
				let {
					profileName: t,
					toggleFollow: r,
					userIsSubscriber: n,
					isUserBlocked: o,
					onClickUnblockUser: i,
					enableFollowers: c
				} = e;
				const [l, d] = Object(s.useState)(!1);
				return o ? a.a.createElement("div", {
					className: ue.a.actionItem
				}, a.a.createElement(b.k, {
					isFullWidth: !0,
					onClick: () => {
						i(t)
					},
					onMouseOver: () => {
						d(!0)
					},
					onMouseOut: () => {
						d(!1)
					}
				}, l ? fe._("Unblock", null, {
					hk: "2d6Cyx"
				}) : fe._("Blocked", null, {
					hk: "1wiBJY"
				}))) : c ? a.a.createElement("div", {
					className: ue.a.actionItem
				}, n ? a.a.createElement(b.o, {
					className: ue.a.button,
					onClick: () => r(t, n)
				}, fe._("Unfollow", null, {
					hk: "1nM1SO"
				})) : a.a.createElement(b.l, {
					className: ue.a.button,
					onClick: () => r(t, n)
				}, fe._("Follow", null, {
					hk: "OPQuq"
				}))) : a.a.createElement(a.a.Fragment, null)
			}, he = e => {
				let {
					userId: t
				} = e;
				return a.a.createElement("div", {
					className: ue.a.actionItem
				}, a.a.createElement(m.b, {
					contextId: t,
					className: ue.a.button,
					userId: t,
					text: fe._("Chat", null, {
						hk: "UKkIW"
					})
				}))
			};
			t.default = Object(o.b)(be, e => ({
				onToggleFollow: (t, r) => e(Object(l.d)([{
					name: t,
					type: f.a.PROFILE
				}], !r)),
				onClickSnoovatar: () => e(Object(c.b)({
					clickSource: "profile_overview"
				})),
				onClickUnblockUser: t => e(Object(d.g)(t))
			}))(Object(p.c)(e => {
				const [t, r] = Object(s.useState)(!1), {
					account: o,
					currentUserHasSubreddit: i,
					hideNSFWPref: c,
					isModerator: l,
					isOverlay: d,
					isSubmissionPage: m,
					onClickSnoovatar: p,
					onToggleFollow: f,
					profile: b,
					profileAboutInfo: v,
					sendEvent: I,
					structuredStyle: C,
					topAwardIcon: _,
					userHasSubreddit: O,
					allowNFTs: P,
					user: k,
					page: E,
					prefersReducedAnimations: N,
					isUserBlocked: j,
					onClickUnblockUser: w
				} = e;
				if (!k) return null;
				const {
					accountIcon: y,
					awardedLastMonth: U,
					created: S,
					enableFollowers: F,
					id: L,
					isEmployee: B,
					isGold: T,
					prefShowSnoovatar: M,
					snoovatarFullBodyAsset: A,
					username: D
				} = k, R = !!o && o.id === L, W = !(!o || !o.snoovatarFullBodyAsset), G = C && C.bannerBackgroundImage, H = !!b && b.isNSFW, K = H && c, z = !(!v || !v.userIsSubscriber), Z = `/user/${D}/`, q = E && E.url === Z, Y = !v || v.acceptChats, Q = !v || v.acceptPms, V = P && Object(de.b)(A), X = () => {
					r(e => !e)
				};
				return a.a.createElement(a.a.Fragment, null, a.a.createElement(u.a, {
					isEmployee: B,
					isGold: T,
					isNSFW: H,
					isNftPreview: V,
					isOverlay: d,
					isOwnProfile: R,
					publicDescription: v ? v.publicDescription : void 0,
					title: b ? b.title : void 0,
					url: q ? null : Z,
					userCreated: S,
					username: D,
					recentAwardings: U,
					currentUserHasSnoovatar: W,
					prefersReducedAnimations: !!N,
					snoovatarUrl: A,
					topAwardIcon: _,
					actions: a.a.createElement(a.a.Fragment, null, R && !m && ge({
						username: D,
						currentUserHasSubreddit: i,
						id: L
					}), !R && O && a.a.createElement(ve, {
						profileName: D,
						toggleFollow: (e, t) => {
							f(e, t), I(t ? (e => t => ({
								...h(e, t),
								source: "profile",
								action: g.c.CLICK,
								noun: n.UNFOLLOW
							}))(L) : (e => t => ({
								...h(e, t),
								source: "profile",
								action: g.c.CLICK,
								noun: n.FOLLOW
							}))(L))
						},
						userIsSubscriber: z,
						isUserBlocked: j,
						onClickUnblockUser: X,
						enableFollowers: F
					}), !!o && !R && !j && Y && he({
						userId: L
					})),
					footer: j ? void 0 : a.a.createElement(se, {
						hasSubreddit: O,
						isModerator: l,
						isOwnProfile: R,
						allowViewSnoovatar: M,
						profileName: D,
						sendEvent: I,
						userAcceptsPms: Q,
						isUserBlocked: j
					}),
					onClickSnoovatar: p,
					profileIcon: y,
					bannerBackgroundImage: K ? void 0 : G
				}), t && a.a.createElement(pe.a, {
					onClose: X,
					onConfirm: e => {
						X(), w(e), I(Object(x.i)(D))
					},
					username: D,
					withOverlay: !0
				}))
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
				return d
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/lessComponent.tsx"),
				o = r("./src/reddit/components/SEOTitle/index.tsx"),
				i = r("./src/reddit/components/Widgets/Base/index.m.less"),
				c = r.n(i);
			const l = a.a.div("WidgetBackground", c.a),
				d = a.a.wrapped(e => {
					let {
						children: t,
						...r
					} = e;
					return s.a.createElement("div", r, s.a.createElement(o.b, {
						type: o.a.Widget
					}, t))
				}, "WidgetHeader", c.a);
			t.b = e => s.a.createElement("div", {
				className: e.className
			}, s.a.createElement(l, null, e.children))
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
			t.a = e => {
				let {
					center: t,
					className: r,
					sizePx: n = 10
				} = e;
				return s.a.createElement("div", {
					className: Object(a.a)(i.a.loadingIcon, r, {
						[i.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${n}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/endpoints/accounts/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			})), r.d(t, "c", (function() {
				return d
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
			const l = async (e, t) => Object(a.a)(Object(o.a)(e, [i.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/block_user`,
				method: s.kb.POST
			}), d = async (e, t, r) => Object(a.a)(Object(o.a)(e, [i.a]), {
				data: {
					name: r,
					container: t,
					type: "enemy"
				},
				endpoint: `${e.apiUrl}/api/unfriend`,
				method: s.kb.POST
			}), m = async (e, t) => Object(a.a)(Object(o.a)(e, [i.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/add_whitelisted?include_model`,
				method: s.kb.POST
			}), u = async (e, t) => Object(a.a)(Object(o.a)(e, [i.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/remove_whitelisted`,
				method: s.kb.POST
			}), p = async (e, t) => Object(a.a)(Object(o.a)(e, [i.a]), {
				endpoint: Object(c.a)(`${n.a.oauthUrl}/user/${t}/about`),
				method: s.kb.GET,
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
				l = r("./src/reddit/constants/headers.ts"),
				d = r("./src/redditGQL/operations/CreateChatChannelInviteLink.json"),
				m = r("./src/redditGQL/types.ts");
			const u = e => Boolean(e && e.data && (null == e ? void 0 : e.errors)),
				p = e => Object(a.a)(Object(i.a)(e, [l.a]), {
					endpoint: `${n.a.sendbirdServiceUrl}/api/v1/chat/me/settings`,
					method: s.kb.GET
				}),
				f = async (e, t) => Object(a.a)(Object(i.a)(t, [l.a]), {
					endpoint: `${n.a.sendbirdServiceUrl}/api/v1/chat/me/settings`,
					method: s.kb.PUT,
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
					...d,
					variables: {
						input: {
							customType: m.b.Direct
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
			const o = e => {
					let {
						isLoading: t
					} = e;
					return Object(n.a)(a.a.loadingBackground, {
						[a.a["m-loading"]]: t
					})
				},
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
					...Object(s.n)(t),
					action: n.c.CLICK,
					noun: `follower_list_page_${e?"follow":"unfollow"}`,
					source: "profile"
				}),
				o = () => e => ({
					...Object(s.n)(e),
					action: n.c.CLICK,
					noun: "follower_list_cta",
					source: "profile"
				})
		},
		"./src/reddit/helpers/trackers/user.ts": function(e, t, r) {
			"use strict";
			r.d(t, "g", (function() {
				return i
			})), r.d(t, "h", (function() {
				return c
			})), r.d(t, "f", (function() {
				return l
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "d", (function() {
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
					screen: s.Y(e),
					profile: s.Q(e),
					subreddit: s.gb(e)
				}),
				i = e => t => ({
					source: "user_dropdown",
					action: "click",
					noun: e ? "night_mode_off" : "night_mode_on",
					...o(t)
				}),
				c = e => t => ({
					source: "nav",
					action: "click",
					actionInfo: {
						pageType: t.platform.currentPage ? s.u(t.platform.currentPage) : void 0,
						settingValue: e ? "online" : "hidden"
					},
					noun: "online_presence_toggle",
					...o(t)
				}),
				l = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "premium",
					correlationId: Object(n.c)(n.a.GoldPayment),
					...o(e)
				}),
				d = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "powerups",
					correlationId: Object(n.e)(n.a.PowerupsFlow, !1),
					...o(e)
				}),
				m = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "advertise",
					...o(e)
				}),
				u = () => e => ({
					source: "nav",
					action: "click",
					noun: "advertise",
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
						id: Object(a.Bb)(t, {
							userName: e
						}).id
					},
					...s.n(t)
				}),
				b = e => t => ({
					source: "profile",
					action: "click",
					noun: "unblock_user",
					targetUser: {
						id: Object(a.Bb)(t, {
							userName: e
						}).id
					},
					...s.n(t)
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
			t.a = function(e) {
				let {
					className: t
				} = e;
				return s.a.createElement("svg", {
					className: t,
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
		"./src/reddit/selectors/blockedRedditors.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return s
			})), r.d(t, "c", (function() {
				return a
			}));
			r("./src/reddit/selectors/user.ts");
			const n = e => e.blockedRedditors.api.pending,
				s = e => e.blockedRedditors.list,
				a = (e, t) => {
					const r = (e => {
						const t = s(e);
						return t && t.ids
					})(e);
					return !!r && r.includes(t)
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
				experimentName: n.G,
				experimentEligibilitySelector: () => Object(a.Q)(e)
			}) === n.wd
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
					experimentEligibilitySelector: a.R,
					experimentName: n.i
				}),
				i = e => n.e.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: a.R,
					experimentName: n.n
				})
		},
		"./src/reddit/selectors/experiments/econ/avatarNfts.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return o
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts");
			const a = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.v
				}) === n.y.Enabled,
				o = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.Tc
				}) === n.wd
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ProfileIdCard.0dfdd2f0e471470c012a.js.map