// https://www.redditstatic.com/desktop2x/reddit-components-ProfileIdCard.b37ceaf340ca8e92f127.js
// Retrieved at 5/18/2022, 3:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ProfileIdCard"], {
		"./node_modules/lodash/compact.js": function(e, t) {
			e.exports = function(e) {
				for (var t = -1, r = null == e ? 0 : e.length, n = 0, s = []; ++t < r;) {
					var o = e[t];
					o && (s[n++] = o)
				}
				return s
			}
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				s = r("./src/lib/constants/index.ts"),
				o = r("./src/reddit/constants/intlSupport.ts");

			function a(e) {
				let {
					showDay: t,
					useUtc: r,
					shortMonths: a,
					locale: i = n.DEFAULT_LOCALE
				} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				const c = new Date(e * s.Sb);
				return o.a ? new Intl.DateTimeFormat(i, {
					month: a ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: r ? "UTC" : void 0
				}).format(c) : c.toLocaleString()
			}
		},
		"./src/lib/humanizeUTCDate/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js");
			t.a = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.DEFAULT_LOCALE;
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
				return x
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/makeGqlRequest/index.ts"),
				o = r("./src/redditGQL/operations/FetchBlockedRedditorsInfo.json");
			const a = (e, t) => Object(s.a)(e, {
				...o,
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
				v = Object(n.a)(m),
				h = Object(n.a)(u),
				x = () => async (e, t, r) => {
					let {
						gqlContext: n
					} = r;
					const s = t(),
						o = Object(i.a)(s);
					if (Object(i.b)(s) || o.timestamp && Date.now() - o.timestamp < 36e6) return;
					let c = !1,
						d = "";
					do {
						e(h());
						const t = {
								after: d,
								pageSize: 100
							},
							r = await a(n(), t);
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
								if (e(v(n.map(e => e.node.id))), r) {
									const {
										hasNextPage: e,
										endCursor: t
									} = r;
									c = e, d = t || ""
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
				return h
			})), r.d(t, "b", (function() {
				return x
			})), r.d(t, "c", (function() {
				return g
			})), r.d(t, "a", (function() {
				return I
			})), r.d(t, "g", (function() {
				return P
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/actions/blockedRedditors.ts"),
				a = r("./src/reddit/actions/toaster.ts"),
				i = r("./src/reddit/endpoints/accounts/index.ts"),
				c = r("./src/reddit/models/Toast/index.ts"),
				d = r("./src/reddit/selectors/experiments/antievil/index.tsx"),
				l = r("./src/reddit/selectors/user.ts");
			const m = "USER_BLOCK__PENDING",
				u = "USER_BLOCK__LOADED",
				p = "USER_BLOCK__FAILED",
				f = Object(s.a)(m),
				b = Object(s.a)(u),
				v = Object(s.a)(p),
				h = e => async (t, r, s) => {
					let {
						apiContext: l
					} = s;
					const m = r();
					if (m.blockUser.api.pending[e]) return;
					t(f({
						username: e
					}));
					const u = await Object(i.a)(l(), e),
						p = `error-block-${e}`;
					if (u.ok) u.body.name && t(b(u.body)), u.body.id && t(Object(o.f)(u.body.id)), t(a.g(p)), t(a.f({
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
							s = Object(d.e)(m) && "REBLOCK_RATE_LIMIT" === u.body.reason;
						t(v(r)), t(s ? a.f({
							id: p,
							kind: c.b.Error,
							text: n.fbt._("You can't block u/{username} for 24 hours after unblocking them", [n.fbt._param("username", e)], {
								hk: "W0oUd"
							}),
							buttonAction: h(e)
						}) : a.f({
							id: p,
							kind: c.b.Error,
							text: n.fbt._("An error has occured. Please try again later", null, {
								hk: "2FpsLy"
							}),
							buttonText: n.fbt._("Retry", null, {
								hk: "36rgQw"
							}),
							buttonAction: h(e)
						}))
					}
				}, x = "USER_UNBLOCK__PENDING", g = "USER_UNBLOCK__SUCCESS", I = "USER_UNBLOCK__FAILED", _ = Object(s.a)(x), O = Object(s.a)(g), C = Object(s.a)(I), P = e => async (t, r, s) => {
					let {
						apiContext: d
					} = s;
					const m = r(),
						u = Object(l.k)(m),
						p = u ? u.id : void 0,
						f = m.user.blocked.data.filter(t => t.name === e)[0];
					p && (t(_({
						name: e
					})), (await Object(i.c)(d(), p, e)).ok ? (t(O({
						name: e
					})), f && f.id && t(Object(o.h)(f.id)), t(a.f({
						kind: c.b.SuccessCommunity,
						text: n.fbt._("{username} is now unblocked", [n.fbt._param("username", e)], {
							hk: "4CEi6N"
						})
					}))) : (t(a.f({
						kind: c.b.Error,
						text: n.fbt._("An error has occured. Please try again later", null, {
							hk: "2FpsLy"
						})
					})), t(C({
						name: e
					}))))
				}
		},
		"./src/reddit/components/Admin/index.m.less": function(e, t, r) {
			e.exports = {
				admin: "_2xNNl6uDn-la14kNSY-HlG",
				adminIcon: "_39nUIeq_tsYlKJUODkYXBu"
			}
		},
		"./src/reddit/components/Admin/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/reddit/components/Admin/index.m.less"),
				c = r.n(i),
				d = r("./src/lib/constants/icons.ts"),
				l = r("./src/reddit/icons/fonts/index.tsx"),
				m = r("./src/reddit/constants/experiments.ts"),
				u = r("./src/reddit/helpers/chooseVariant/index.ts");
			const p = e => Object(u.c)(e, {
				experimentEligibilitySelector: u.a,
				experimentName: m.a
			});
			t.a = () => {
				return Object(a.e)(p) ? o.a.createElement("span", {
					className: c.a.admin
				}, n.fbt._("Admin", null, {
					hk: "3MyAnD"
				})) : o.a.createElement(l.a, {
					name: d.a.admin,
					isFilled: !0,
					className: c.a.adminIcon,
					title: n.fbt._("Reddit admin", null, {
						hk: "goUUb"
					})
				})
			}
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var n, s = r("./node_modules/react/index.js"),
				o = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/reddit/actions/chat/toggle.ts"),
				c = r("./src/reddit/components/TrackingHelper/index.tsx"),
				d = r("./src/reddit/controls/Button/index.tsx"),
				l = r("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(n || (n = {}));
			const m = e => {
				let {
					onStartChat: t,
					text: r,
					className: s,
					sendEvent: a,
					contextId: i,
					priority: c,
					Icon: m,
					redditStyle: u,
					isFullWidth: p,
					eventSource: f,
					onClick: b,
					onAddUserToQuickReplyList: v,
					children: h,
					style: x
				} = e;
				return o.a.createElement(d.t, {
					onClick: e => {
						if (b && b(e), t(), f === n.awardNotification) return v();
						a(Object(l.b)(i))
					},
					className: s,
					text: r,
					priority: c,
					Icon: m,
					redditStyle: u,
					isFullWidth: p,
					style: x
				}, h)
			};
			m.displayName = "ChatButton";
			const u = Object(a.b)(null, (e, t) => {
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
				return o
			}));
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = r("./src/reddit/constants/colors.ts");
			const o = {
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
				importAsync: () => Promise.all([r.e(1), r.e("vendors~NftProfileUnit"), r.e("NftProfileUnit")]).then(r.bind(null, "./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.tsx")),
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
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
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
			t.a = e => {
				let {
					altText: t,
					children: r,
					className: n,
					isProfileCard: u,
					isLoading: f,
					imageUrl: b,
					onFileSelected: v
				} = e;
				const h = Object(o.e)(m.a);
				return s.a.createElement("div", {
					className: Object(a.a)(p.a.Container, n)
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
						const t = Object(l.b)();
						v(e, t)
					},
					isPending: h ? f : void 0
				}), !f && s.a.createElement("div", {
					className: Object(a.a)(p.a.EditButton, {
						[p.a.profileCard]: u
					})
				}, s.a.createElement(d.a, {
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
				return d
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "c", (function() {
				return h
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/timeAgo/index.ts"),
				a = r("./src/reddit/hooks/useLocale.ts");
			var i = function(e) {
					let {
						seconds: t,
						...r
					} = e;
					var n;
					const i = Object(a.a)(),
						c = {
							...r,
							locale: null !== (n = r.locale) && void 0 !== n ? n : i
						};
					return s.a.createElement(s.a.Fragment, null, Object(o.d)(t, c))
				},
				c = r("./src/lib/humanizeDate/index.ts");
			var d = function(e) {
					let {
						seconds: t,
						...r
					} = e;
					var n;
					const o = Object(a.a)(),
						i = {
							...r,
							locale: null !== (n = r.locale) && void 0 !== n ? n : o
						};
					return s.a.createElement(s.a.Fragment, null, Object(c.a)(t, i))
				},
				l = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				m = r("./src/lib/constants/index.ts");
			var u = function(e) {
					let {
						seconds: t,
						locale: r
					} = e;
					const n = Object(a.a)(),
						o = null != r ? r : n;
					return s.a.createElement(s.a.Fragment, null, function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.DEFAULT_LOCALE;
						const r = e * m.Sb;
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
					}(t, o))
				},
				p = r("./node_modules/fbt/lib/FbtPublic.js"),
				f = r("./src/lib/eventTools/index.ts");

			function b(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.DEFAULT_LOCALE;
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}

			function v(e, t) {
				let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
					n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l.DEFAULT_LOCALE;
				const s = Object(f.e)(e, t),
					o = new Date(e * m.Sb);
				let a;
				if (s === f.a.Live || r) return p.fbt._("Now", null, {
					hk: "Prpcg"
				});
				return s === f.a.Future ? a = Object(f.d)(e) ? p.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : Object(f.b)(e) >= 5 ? b(o, n) : function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.DEFAULT_LOCALE;
					return e.toLocaleDateString(t, {
						weekday: "long"
					})
				}(o, n) : s === f.a.Past && (a = Object(f.d)(e) ? p.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : b(o, n)), `${a} @ ${function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.DEFAULT_LOCALE;return e.toLocaleTimeString(t,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(o,n)}`
			}
			var h = function(e) {
				let {
					startTime: t,
					endTime: r,
					isLive: n,
					locale: o
				} = e;
				const i = Object(a.a)(),
					c = null != o ? o : i;
				return s.a.createElement(s.a.Fragment, null, v(t, r, n, c))
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
				return v
			})), r.d(t, "a", (function() {
				return h
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
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
				v = e => s.a.createElement(f, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				h = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return s.a.createElement(b, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				x = Object(a.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: r
						} = t;
						return Object(d.b)(r)(e)
					}
				}),
				g = Object(c.a)(h, [i.a.Click, i.a.Keydown]),
				I = Object(c.a)(v, [i.a.Click, i.a.Keydown]),
				_ = Object(o.b)(x);
			t.c = _(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? s.a.createElement(g, p({}, e, {
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
				o = r("./src/higherOrderComponents/asTooltip.tsx"),
				a = r("./src/reddit/constants/elementIds.ts"),
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
				const r = Object(o.a)(e, t);
				class n extends s.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(a.e);
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
				o = r("./src/config.ts"),
				a = r("./src/lib/prettyPrintNumber/index.ts"),
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
						href: `${o.a.oldRedditUrl}/user/${r}/gilded`
					}, s.a.createElement("div", {
						className: c.a.iconColumn
					}, s.a.createElement("img", {
						alt: l,
						className: c.a.icon,
						src: e
					}), i > 1 && s.a.createElement("span", {
						className: c.a.count
					}, `+${Object(a.b)(i-1)}`)), s.a.createElement("div", {
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
				o = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/lessComponent.tsx"),
				l = r("./src/lib/prettyPrintNumber/index.ts"),
				m = r("./src/reddit/components/HumanDate/index.tsx"),
				u = r("./src/reddit/contexts/InsideOverlay.tsx"),
				p = r("./src/reddit/endpoints/profile/info.ts"),
				f = r("./src/reddit/helpers/karma.ts"),
				b = r("./src/reddit/helpers/trackers/followers.ts"),
				v = r("./src/reddit/hooks/useTracking.ts"),
				h = r("./src/reddit/icons/fonts/index.tsx"),
				x = r("./src/reddit/selectors/profile.ts"),
				g = r("./src/reddit/selectors/user.ts"),
				I = r("./src/reddit/actions/tooltip.ts"),
				_ = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				O = r("./src/reddit/components/ProfileIdCard/Highlight.m.less"),
				C = r.n(O);

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const k = d.a.div("Container", C.a),
				E = d.a.div("Body", C.a),
				j = d.a.h5("Title", C.a),
				N = d.a.span("Label", C.a);
			class w extends o.a.Component {
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
						className: a
					} = this.props, i = s && n ? {
						id: s,
						onMouseEnter: this.toggleTooltip,
						onMouseLeave: this.toggleTooltip
					} : {};
					return o.a.createElement(k, {
						className: a
					}, o.a.createElement(j, null, r), o.a.createElement(E, null, e, o.a.createElement(N, P({
						key: "label"
					}, i), t)), s && n && o.a.createElement(_.c, {
						caretOnTop: !0,
						tooltipId: s
					}, n))
				}
			}
			var y = Object(a.b)(null, e => ({
					toggleTooltip: t => e(Object(I.h)({
						tooltipId: t
					}))
				}))(Object(u.b)(w)),
				U = r("./src/reddit/components/ProfileIdCard/Highlights.m.less"),
				S = r.n(U);
			const L = Object(i.a)(x.j, (e, t) => {
					let {
						profileName: r
					} = t;
					return Object(g.Fb)(e, r)
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
				F = d.a.div("Container", S.a);

			function A(e, t) {
				return `profile--id-card--highlight-tooltip-${e?"-overlay":""}-${t}`
			}
			const B = e => {
				const t = Object(v.a)(),
					r = Object(s.useCallback)(() => {
						t(Object(b.b)())
					}, [t]),
					a = e.isOwnProfile ? o.a.createElement(o.a.Fragment, null, Object(l.b)(e.subscribers, {
						displayFull: !0
					}), o.a.createElement(h.a, {
						name: "right",
						className: S.a.iconRight
					})) : Object(l.b)(e.subscribers, {
						displayFull: !0
					}),
					i = o.a.createElement(y, {
						className: Object(c.a)(S.a.profileHighlight, e.highlightClassName),
						icon: o.a.createElement(h.a, {
							name: "user",
							isFilled: !0,
							className: S.a.icon,
							key: "followers"
						}),
						title: n.fbt._("Followers", null, {
							hk: "4ucimK"
						}),
						label: a
					});
				return e.isOwnProfile ? o.a.createElement("a", {
					href: `/user/${e.profileName}/followers`,
					onClick: r
				}, i) : i
			};
			t.a = Object(a.b)(L)(Object(u.b)(e => {
				const {
					karma: t,
					enableFollowers: r,
					profileCreated: s,
					isOverlay: a,
					subscribers: i,
					className: c,
					highlightClassName: d
				} = e, u = {
					...p.a,
					...t
				}, f = A(a, "karma"), b = A(a, "cakeday"), v = `${n.fbt._({"*":"{number} Post Karma",_1:"1 Post Karma"},[n.fbt._plural(u.fromPosts,"number",Object(l.b)(u.fromPosts,{displayFull:!0}))],{hk:"husfU"})}\n${n.fbt._({"*":"{number} Comment Karma",_1:"1 Comment Karma"},[n.fbt._plural(u.fromComments,"number",Object(l.b)(u.fromComments,{displayFull:!0}))],{hk:"26iPTL"})}\n${n.fbt._({"*":"{number} Awardee Karma",_1:"1 Awardee Karma"},[n.fbt._plural(u.fromAwardsReceived,"number",Object(l.b)(u.fromAwardsReceived,{displayFull:!0}))],{hk:"2Ww5MR"})}\n${n.fbt._({"*":"{number} Awarder Karma",_1:"1 Awarder Karma"},[n.fbt._plural(u.fromAwardsGiven,"number",Object(l.b)(u.fromAwardsGiven,{displayFull:!0}))],{hk:"2F1chz"})}`;
				return o.a.createElement(F, {
					className: c
				}, o.a.createElement(y, {
					className: d,
					icon: o.a.createElement(h.a, {
						name: "karma",
						isFilled: !0,
						className: S.a.icon,
						key: "karma"
					}),
					label: Object(l.b)(u.total, {
						displayFull: !0
					}),
					title: n.fbt._("Karma", null, {
						hk: "RtSgN"
					}),
					tooltipId: f,
					tooltip: v
				}), o.a.createElement(y, {
					className: d,
					icon: o.a.createElement(h.a, {
						name: "cake",
						isFilled: !0,
						className: S.a.icon,
						key: "cakeDay"
					}),
					label: o.a.createElement(m.a, {
						seconds: s,
						showDay: !0
					}),
					title: n.fbt._("Cake day", null, {
						hk: "4x2LB5"
					}),
					tooltipId: b,
					tooltip: o.a.createElement(m.d, {
						seconds: s
					})
				}), r && i > 0 && o.a.createElement(B, {
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
				o = r("./src/lib/lessComponent.tsx"),
				a = r("./src/reddit/components/SocialLinks/async.tsx"),
				i = r("./src/reddit/components/Widgets/Base/index.tsx"),
				c = r("./src/reddit/layout/twoCol/Dynamic/index.m.less"),
				d = r.n(c),
				l = o.a.div("dynamicTwoCol", d.a),
				m = r("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				u = r("./src/reddit/components/ProfileIdCard/Highlights.tsx"),
				p = r("./src/reddit/components/ProfileIdCard/Preview.m.less"),
				f = r.n(p),
				b = r("./src/config.ts"),
				v = r("./node_modules/fbt/lib/FbtPublic.js"),
				h = r("./src/reddit/controls/InternalLink/index.tsx"),
				x = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = r("./src/reddit/controls/OutboundLink/index.tsx"),
				I = r("./src/reddit/icons/fonts/index.tsx"),
				_ = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.tsx"),
				O = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				C = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				P = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				k = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserIcon/index.m.less"),
				E = r.n(k),
				j = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				N = r.n(j);
			var w = e => {
					let {
						bannerBackgroundImage: t,
						editMode: r,
						isDefaultIcon: n,
						isDeletingBanner: o,
						isDeletingIcon: a,
						isEmployee: i,
						isGold: c,
						isNSFW: d,
						isOwnProfile: l,
						onClickSnoovatar: m,
						onDeleteBanner: u,
						onDeleteIcon: p,
						profileIcon: f,
						title: k,
						userCreated: j,
						username: w,
						url: y
					} = e;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement(C.a, {
						bannerBackgroundImage: t,
						editMode: !!r,
						isNSFW: d,
						username: w,
						isDeletingBanner: !!o,
						onDeleteBanner: u
					}), s.a.createElement("div", {
						className: E.a.SnooIconWrapper
					}, l || !f || d ? s.a.createElement(_.a, {
						iconUrl: f,
						isNSFW: d,
						userName: w,
						isProfileIdCard: !0
					}) : s.a.createElement(g.b, {
						href: f
					}, s.a.createElement(_.a, {
						iconUrl: f,
						isNSFW: d,
						userName: w,
						isProfileIdCard: !0
					})), r && !n && (a ? s.a.createElement(x.a, {
						sizePx: 20,
						className: N.a.loadingIcon
					}) : s.a.createElement(I.a, {
						name: "close",
						className: N.a.closeIcon,
						onClick: p
					}))), !r && l && s.a.createElement(h.default, {
						to: "/settings/profile",
						className: E.a.settingsLink
					}, s.a.createElement(I.a, {
						name: "settings",
						className: N.a.settingsIcon
					})), k && s.a.createElement("h4", {
						className: E.a.userTitle
					}, k), s.a.createElement(P.a, {
						className: E.a.userName,
						username: w,
						userCreated: j,
						url: y
					}), i && s.a.createElement(I.a, {
						name: "admin",
						isFilled: !0,
						className: E.a.adminIcon,
						title: v.fbt._("Reddit admin", null, {
							hk: "goUUb"
						})
					}), c && s.a.createElement("a", {
						title: v.fbt._("{username} has Reddit Premium", [v.fbt._param("username", w)], {
							hk: "3Fylv"
						}),
						href: `${b.a.redditUrl}/premium`
					}, s.a.createElement(I.a, {
						name: "premium",
						isFilled: !0,
						className: E.a.premiumIcon
					})), l && s.a.createElement(O.a, {
						currentUserHasSnoovatar: !1,
						isOwnProfile: !0,
						onClick: m
					}))
				},
				y = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx");
			var U = e => {
					let {
						bannerBackgroundImage: t,
						currentUserHasSnoovatar: r,
						editMode: n,
						isDefaultIcon: o,
						isDeletingBanner: a,
						isDeletingIcon: i,
						isEmployee: c,
						isGold: d,
						isNSFW: l,
						isOwnProfile: m,
						onClickSnoovatar: u,
						onDeleteBanner: p,
						onDeleteIcon: f,
						prefersReducedAnimations: b,
						profileIcon: v,
						snoovatarUrl: h,
						title: x,
						userCreated: g,
						username: I,
						url: _
					} = e;
					return h ? s.a.createElement(y.a, {
						bannerBackgroundImage: t,
						currentUserHasSnoovatar: r,
						editMode: n,
						isDeletingBanner: a,
						isEmployee: c,
						isGold: d,
						isNSFW: l,
						isOwnProfile: m,
						onClickSnoovatar: u,
						onDeleteBanner: p,
						prefersReducedAnimations: b,
						snoovatarUrl: h,
						title: x,
						userCreated: g,
						username: I,
						url: _
					}) : s.a.createElement(w, {
						bannerBackgroundImage: t,
						editMode: n,
						isDefaultIcon: o,
						isDeletingBanner: a,
						isDeletingIcon: i,
						isEmployee: c,
						isGold: d,
						isNSFW: l,
						isOwnProfile: m,
						onClickSnoovatar: u,
						onDeleteBanner: p,
						onDeleteIcon: f,
						profileIcon: v,
						title: x,
						userCreated: g,
						username: I,
						url: _
					})
				},
				S = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/NftCard/index.tsx");
			const L = o.a.wrapped(i.b, "Widget", f.a),
				F = o.a.div("Description", f.a),
				A = o.a.wrapped(l, "Actions", f.a);
			class B extends s.a.PureComponent {
				renderAwardedLastMonth() {
					const {
						recentAwardings: e,
						topAwardIcon: t,
						username: r
					} = this.props;
					return e ? s.a.createElement(m.a, {
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
						footer: o,
						isEmployee: i,
						isGold: c,
						isNSFW: d,
						isOverlay: l,
						isOwnProfile: m,
						isSocialLinksConsumptionEnabled: p,
						isSocialLinksCreationEnabled: f,
						profileIcon: b,
						publicDescription: v,
						snoovatarUrl: h,
						title: x,
						url: g,
						userCreated: I,
						username: _,
						isDefaultIcon: O,
						isDeletingIcon: C,
						isDeletingBanner: P,
						onClickSnoovatar: k,
						onDeleteIcon: E,
						onDeleteBanner: j,
						prefersReducedAnimations: N,
						editMode: w,
						isNftPreview: y
					} = this.props, B = p || f && m;
					return y ? s.a.createElement(s.a.Fragment, null, s.a.createElement(S.a, {
						bannerBackgroundImage: t,
						currentUserHasSnoovatar: r,
						editMode: w,
						isDeletingBanner: P,
						isEmployee: i,
						isGold: c,
						isNSFW: d,
						isOwnProfile: !!m,
						onClickSnoovatar: k,
						onDeleteBanner: j,
						prefersReducedAnimations: N,
						snoovatarUrl: h,
						title: x,
						userCreated: I,
						username: _,
						actions: e,
						url: g,
						footer: o
					})) : s.a.createElement(L, {
						className: n
					}, s.a.createElement(U, {
						bannerBackgroundImage: y ? void 0 : t,
						currentUserHasSnoovatar: r,
						editMode: w,
						isDefaultIcon: O,
						isDeletingBanner: P,
						isDeletingIcon: C,
						isEmployee: i,
						isGold: c,
						isNSFW: d,
						isOwnProfile: !!m,
						onClickSnoovatar: k,
						onDeleteBanner: j,
						onDeleteIcon: E,
						prefersReducedAnimations: N,
						profileIcon: b,
						title: x,
						userCreated: I,
						username: _,
						url: g,
						snoovatarUrl: h
					}), s.a.createElement(F, null, v), s.a.createElement(u.a, {
						isOwnProfile: !!m,
						profileName: _,
						isOverlay: l
					}), B && s.a.createElement(a.a, {
						isCreationEnabled: !(!m || !f),
						username: _
					}), this.renderAwardedLastMonth(), s.a.createElement(A, null, e), o)
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
				o = r.n(s),
				a = r("./src/reddit/models/Image/index.tsx"),
				i = r("./src/reddit/components/EditableImage/index.tsx"),
				c = r("./src/reddit/models/User/index.ts"),
				d = r("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				l = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less"),
				m = r.n(l);
			class u extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isUpdating: !1
					}, this.updateProfileIcon = async (e, t) => {
						const r = await Object(a.e)(e);
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
						isNSFW: a,
						userName: d
					} = this.props, {
						isUpdating: l
					} = this.state, u = e ? o.a.createElement("div", {
						className: m.a.Banner,
						style: {
							backgroundImage: `url(${e})`
						}
					}) : null;
					return r && Object(c.e)(r) === d ? o.a.createElement(i.a, {
						altText: n.fbt._("{userName} banner image", [n.fbt._param("userName", d)], {
							hk: "1PcEBS"
						}),
						className: t,
						isLoading: l,
						onFileSelected: this.updateProfileIcon
					}, u) : a && s ? null : u
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
				o = r.n(s),
				a = r("./src/reddit/models/Image/index.tsx"),
				i = r("./src/reddit/components/EditableImage/index.tsx"),
				c = r("./src/reddit/components/UserIcon/index.tsx"),
				d = r("./src/reddit/models/User/index.ts"),
				l = r("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				m = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.m.less"),
				u = r.n(m);
			class p extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isUpdating: !1
					}, this.updateProfileIcon = async e => {
						const t = await Object(a.e)(e);
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
						isProfileIdCard: a,
						userName: l
					} = this.props, {
						isUpdating: m
					} = this.state, p = o.a.createElement(c.a, {
						className: u.a.Icon,
						iconUrl: r,
						isNSFW: s,
						userName: l,
						isProfileIcon: !0
					});
					return t && Object(d.e)(t) === l ? o.a.createElement(i.a, {
						altText: n.fbt._("{userName} avatar image", [n.fbt._param("userName", l)], {
							hk: "1LJxYE"
						}),
						className: e,
						isProfileCard: a,
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
				o = r("./src/reddit/actions/preferences.ts"),
				a = r("./src/reddit/selectors/user.ts");
			const i = Object(s.c)({
					currentUser: a.k,
					hideNSFWPref: a.F
				}),
				c = Object(n.b)(i, e => ({
					imageUpdateRequested: (t, r) => e(Object(o.C)(t, r))
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
				o = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/react-router/esm/react-router.js"),
				c = r("./src/reddit/actions/post.ts"),
				d = r("./src/reddit/actions/snoovatarModal.ts"),
				l = r("./src/reddit/components/TrackingHelper/index.tsx"),
				m = r("./src/reddit/controls/Button/index.tsx"),
				u = r("./src/reddit/helpers/trackers/snoovatar.ts"),
				p = r("./src/reddit/icons/svgs/Shirt/index.tsx"),
				f = r("./src/reddit/models/Vote/index.ts"),
				b = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				v = r.n(b);
			const {
				fbt: h
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(i.i)(e => {
				let {
					isHovercard: t,
					username: r,
					isAvatarPost: i,
					post: b,
					share: x
				} = e;
				const g = Object(l.b)(),
					I = Object(a.d)(),
					_ = b && b.id,
					O = b && b.voteState;
				let C = null;
				_ || (C = t ? "user_hovercard" : "profile_overview");
				const P = Object(s.useCallback)(() => g(Object(u.h)(t ? "user_hovercard" : "profile_overview", r)), [t, g, r]);
				return o.a.createElement(m.t, {
					onClick: () => {
						i ? (g(u.i), _ && O === f.a.notVoted && I(Object(c.kb)(_))) : P();
						const e = i ? "postify" : "copy";
						I(Object(d.b)({
							clickSource: C,
							share: x,
							source: e
						}))
					},
					className: Object(n.a)(v.a.snoovatarButton, v.a.snoovatarExtraPadding, v.a.compactButtonLayout, {
						[v.a.avatarPostifyButton]: i
					}),
					isFullWidth: !0
				}, o.a.createElement(p.a, {
					className: Object(n.a)({
						[v.a.shirtIcon]: !i,
						[v.a.avatarPostButtonShirtIcon]: i
					})
				}), h._("Try this Look", null, {
					hk: "dOuPb"
				}), o.a.createElement("div", {
					className: v.a.chevronIcon
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
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/controls/Button/index.tsx"),
				i = r("./src/reddit/icons/fonts/index.tsx"),
				c = r("./src/reddit/icons/svgs/Shirt/index.tsx"),
				d = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				l = r.n(d);
			const {
				fbt: m
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function(e) {
				let {
					compact: t,
					currentUserHasSnoovatar: r,
					className: n,
					isOwnProfile: d,
					onClick: u
				} = e;
				return s.a.createElement(a.t, {
					onClick: u,
					isFullWidth: !0,
					className: Object(o.a)(l.a.snoovatarButton, {
						[l.a.snoovatarExtraPadding]: !r && d,
						[l.a.compactButtonLayout]: t
					}, n)
				}, r ? s.a.createElement(c.a, {
					className: l.a.shirtIcon
				}) : s.a.createElement("div", {
					className: l.a.shirtIcon
				}), r ? m._("Style Avatar", null, {
					hk: "UEtBO"
				}) : d ? m._("Create Avatar", null, {
					hk: "2pJgje"
				}) : m._("Create Your Own Avatar", null, {
					hk: "22FFcO"
				}), r ? s.a.createElement("div", {
					className: l.a.chevronIcon
				}) : s.a.createElement(i.a, {
					name: "caret_right",
					className: l.a.chevronIcon
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
				return v
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/config.ts"),
				i = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/components/LottieAnimation/index.tsx"),
				d = r("./src/reddit/selectors/user.ts"),
				l = r("./src/reddit/components/ProfileIdCard/Highlights.tsx"),
				m = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				u = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx"),
				p = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/NftCard/index.m.less"),
				f = r.n(p);
			const b = /(?:\/|-)nft-([a-z0-9]+)-([a-z]+)(?:-headshot)?\.(?:png|svg)/i;

			function v(e) {
				return !!e && b.test(e)
			}
			t.a = e => {
				let {
					isEmployee: t,
					isGold: r,
					isNSFW: p,
					snoovatarUrl: v,
					title: h,
					userCreated: x,
					username: g,
					url: I,
					className: _,
					actions: O,
					footer: C
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
				})(v), [v]), E = Object(o.e)(d.cb);
				return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: Object(i.a)(f.a.container, _)
				}, s.a.createElement(c.a, {
					className: f.a.cardAnimation,
					useCanvasRenderer: !0,
					assetUrl: `${a.a.assetPath}/img/snoovatars/nft_card_animation.json`,
					loop: !0
				}), s.a.createElement("div", {
					className: f.a.inner
				}, "testing" !== P && s.a.createElement("img", {
					alt: `${P} NFT`,
					className: f.a.badgeImage,
					src: `${a.a.assetPath}/img/snoovatars/nft_badge_${P}.svg`
				}), s.a.createElement("img", {
					className: f.a.cutout,
					src: `${a.a.assetPath}/img/snoovatars/hole-cutout-${E?"black":"white"}.svg`
				}), s.a.createElement("a", {
					href: k,
					target: "_blank",
					className: f.a.nftIcon,
					rel: "noopener noreferrer"
				}, s.a.createElement("img", {
					className: f.a.nftIconImage,
					alt: "View this NFT",
					src: `${a.a.assetPath}/img/snoovatars/nft_icon.svg`
				})), s.a.createElement("img", {
					className: f.a.snoovatarImage,
					src: v,
					alt: "Avatar NFT Image"
				}), s.a.createElement(u.a, {
					isEmployee: t,
					isGold: r,
					isNSFW: p,
					title: h,
					username: g
				}), s.a.createElement(m.a, {
					className: f.a.subUsername,
					shouldDisplaySnoovatar: !0,
					username: g,
					userCreated: x,
					url: I
				}), s.a.createElement(l.a, {
					className: f.a.highlights,
					highlightClassName: f.a.highlight,
					profileName: g,
					isOverlay: !1
				}), s.a.createElement("nav", {
					className: f.a.actions
				}, O))), s.a.createElement("div", {
					className: Object(i.a)(f.a.footer, _)
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
				o = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				a = r("./src/reddit/icons/svgs/Close/index.tsx"),
				i = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				c = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less"),
				d = r.n(c),
				l = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				m = r.n(l);
			t.a = function(e) {
				let {
					bannerBackgroundImage: t,
					isNSFW: r,
					username: n,
					editMode: c,
					isDeletingBanner: l,
					onDeleteBanner: u
				} = e;
				return s.a.createElement("div", {
					className: d.a.bannerWrapper
				}, s.a.createElement(i.a, {
					bannerUrl: t,
					isNSFW: r,
					userName: n
				}), c && t && (l ? s.a.createElement(o.a, {
					sizePx: 20,
					className: m.a.loadingIcon
				}) : s.a.createElement(a.a, {
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
				o = r("./src/reddit/controls/InternalLink/index.tsx"),
				a = r("./src/reddit/components/HumanDate/index.tsx");

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
					username: d,
					...l
				} = e;
				const m = r ? s.a.createElement(s.a.Fragment, null, "u/", d, " · ", s.a.createElement(a.d, {
					seconds: c,
					noPostfix: !0,
					shortenedUnit: !0
				})) : `u/${d}`;
				return n ? s.a.createElement(o.default, i({}, l, {
					className: t,
					to: n
				}), m) : s.a.createElement("span", i({}, l, {
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
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/AvatarImage.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return O
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/components/Econ/Marketplace/NftProfileUnit/async.ts"),
				d = r("./src/reddit/helpers/userSnoovatar/index.ts"),
				l = r("./src/reddit/selectors/experiments/econ/marketplace.ts"),
				m = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less")),
				u = r.n(m);
			const p = 25;

			function f(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function b(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const v = f("particleDelay", u.a),
				h = f("particleX", u.a),
				x = f("particleFloat", u.a),
				g = () => {
					const e = b(h),
						t = b(x),
						r = b(v);
					return Object(i.a)(u.a.particle, e, t, r)
				};
			class I extends o.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < p; t++) e.push(this.createParticle(t));
					return o.a.createElement("div", {
						role: "presentation",
						className: u.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return o.a.createElement("div", {
						key: e,
						className: `${g()}`
					})
				}
			}
			var _ = I;
			const O = e => {
				let {
					className: t,
					isGold: r,
					snoovatarUrl: s,
					prefersReducedAnimations: m
				} = e;
				const p = Object(a.e)(l.b);
				return s && Object(d.e)(s) && p ? o.a.createElement("div", {
					className: u.a.nftProfileUnitContainer
				}, o.a.createElement(c.a, {
					className: u.a.nftProfileUnit,
					imageUrl: s
				})) : o.a.createElement("div", {
					className: Object(i.a)(u.a.snoovatarContainer, t)
				}, r && o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: u.a.topGlow
				}), o.a.createElement("div", {
					className: u.a.bottomGlow
				}), !m && o.a.createElement(_, null)), o.a.createElement("img", {
					className: Object(i.a)(u.a.snoovatar, {
						[u.a.premiumGlow]: r
					}),
					src: s,
					alt: n.fbt._("User Avatar", null, {
						hk: "3aQoRV"
					})
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/config.ts"),
				s = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/react/index.js"),
				a = r.n(o),
				i = r("./src/reddit/components/Admin/index.tsx"),
				c = r("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				d = r("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
				l = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				m = r.n(l);
			t.a = e => {
				let {
					title: t,
					username: r,
					isEmployee: o,
					isGold: l,
					isNSFW: u
				} = e;
				return a.a.createElement("h1", {
					className: m.a.snoovatarUserTitle
				}, t || r, l && a.a.createElement("a", {
					title: s.fbt._("{username} has Reddit Premium", [s.fbt._param("username", r)], {
						hk: "3Fylv"
					}),
					href: `${n.a.redditUrl}/premium`
				}, a.a.createElement(d.a, {
					className: m.a.snoovatarPremiumIcon
				})), o && a.a.createElement(i.a, null), u && a.a.createElement(c.a, {
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
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/reddit/controls/InternalLink/index.tsx"),
				i = r("./src/reddit/icons/fonts/index.tsx"),
				c = r("./src/reddit/selectors/experiments/econ/index.ts"),
				d = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				l = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				m = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				u = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				p = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				f = r.n(p),
				b = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				v = r.n(b),
				h = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/AvatarImage.tsx"),
				x = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx");
			t.a = e => {
				let {
					bannerBackgroundImage: t,
					compact: r,
					currentUserHasSnoovatar: n,
					editMode: p,
					isDeletingBanner: b,
					isEmployee: g,
					isGold: I,
					isNSFW: _,
					isOwnProfile: O,
					onClickSnoovatar: C,
					onDeleteBanner: P,
					prefersReducedAnimations: k,
					snoovatarUrl: E,
					title: j,
					userCreated: N,
					username: w,
					url: y,
					isHovercard: U
				} = e;
				const S = Object(o.e)(e => !O && !!E && Object(c.f)(e));
				return s.a.createElement(s.a.Fragment, null, s.a.createElement(m.a, {
					bannerBackgroundImage: t,
					editMode: !!p,
					isNSFW: _,
					username: w,
					isDeletingBanner: !!b,
					onDeleteBanner: P
				}), !p && O && s.a.createElement(a.default, {
					to: "/settings/profile",
					className: f.a.snoovatarSettingsLink
				}, s.a.createElement(i.a, {
					name: "settings",
					className: v.a.settingsIcon
				})), s.a.createElement(h.a, {
					isGold: I,
					snoovatarUrl: E,
					prefersReducedAnimations: k
				}), s.a.createElement(x.a, {
					isEmployee: g,
					isGold: I,
					isNSFW: _,
					title: j,
					username: w
				}), s.a.createElement(u.a, {
					className: f.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: w,
					userCreated: N,
					url: y
				}), (O || !n && !!E) && s.a.createElement(d.a, {
					compact: r,
					currentUserHasSnoovatar: n,
					isOwnProfile: O,
					onClick: C
				}), S && s.a.createElement(l.a, {
					username: w,
					isHovercard: !!U,
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
			var n, s = r("./node_modules/react/index.js"),
				o = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				c = r("./src/reddit/actions/snoovatarModal.ts"),
				d = r("./src/reddit/actions/subscription/index.ts"),
				l = r("./src/reddit/actions/userBlocks.ts"),
				m = r("./src/reddit/components/ChatButton/index.tsx"),
				u = r("./src/reddit/components/ProfileIdCard/Preview.tsx"),
				p = r("./src/reddit/components/TrackingHelper/index.tsx"),
				f = r("./src/reddit/constants/posts.ts"),
				b = r("./src/reddit/controls/Button/index.tsx"),
				v = r("./src/reddit/constants/tracking.ts"),
				h = r("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.FOLLOW = "follow", e.UNFOLLOW = "unfollow", e.CREATE_POST = "create_post"
			}(n || (n = {}));
			const x = (e, t) => ({
				...Object(h.n)(t),
				profile: Object(h.k)(t),
				subreddit: {
					id: e
				}
			});
			var g = r("./src/reddit/helpers/trackers/user.ts"),
				I = r("./src/reddit/selectors/gold/awardIcon.ts"),
				_ = r("./src/reddit/selectors/platform.ts"),
				O = r("./src/reddit/selectors/profile.ts"),
				C = r("./src/reddit/selectors/structuredStyles.ts"),
				P = r("./src/reddit/selectors/tooltip.ts"),
				k = r("./src/reddit/selectors/user.ts"),
				E = r("./src/reddit/selectors/userPrefs.ts"),
				j = r("./src/reddit/constants/experiments.ts"),
				N = r("./src/reddit/helpers/chooseVariant/index.ts");
			var w = r("./src/reddit/selectors/experiments/socialLinks.ts"),
				y = r("./node_modules/fbt/lib/FbtPublic.js"),
				U = r("./node_modules/lodash/compact.js"),
				S = r.n(U),
				L = r("./src/config.ts"),
				F = r("./src/lib/classNames/index.ts"),
				A = r("./src/lib/loadableAction/index.ts"),
				B = r("./src/lib/copyToClipboard/index.ts"),
				T = r("./src/reddit/actions/toaster.ts"),
				M = r("./src/reddit/endpoints/chat/userSettings.ts"),
				D = r("./src/reddit/models/Toast/index.ts");
			var R = r("./src/reddit/actions/gold/modals.ts"),
				W = r("./src/reddit/actions/modal.ts"),
				G = r("./src/reddit/actions/profile/index.ts"),
				H = r("./src/reddit/components/CrisisFlow/index.tsx"),
				z = r("./src/higherOrderComponents/makeAsync.tsx"),
				K = r("./src/lib/loadWithRetries/index.ts");
			var Z = Object(z.a)({
					getComponent: () => Object(K.a)(() => r.e("GivePremiumModal").then(r.bind(null, "./src/reddit/components/GivePremiumModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				q = r("./src/reddit/constants/modals.ts"),
				Y = r("./src/reddit/helpers/correlationIdTracker.ts"),
				V = r("./src/reddit/helpers/styles/mixins/loading.ts"),
				X = r("./src/reddit/models/Gold/Premium/index.ts"),
				Q = r("./src/reddit/selectors/experiments/chatInviteLinkSharing.ts"),
				J = r("./src/reddit/selectors/experiments/crisisTextLine.ts"),
				$ = r("./src/reddit/selectors/premium.ts"),
				ee = r("./src/reddit/components/ProfileIdCard/footer.m.less"),
				te = r.n(ee);

			function re() {
				return (re = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ne = Object(i.c)({
					areModeratedSubredditsPending: O.a,
					coinsToSpend: k.e,
					givePremiumModalIsOpen: $.c,
					hasFetchedModerators: O.k,
					isEmployee: k.M,
					isLoggedIn: k.P,
					profile: O.j,
					crisisFlowEnabled: J.b,
					chatInviteLinkSharing: Q.a
				}),
				se = e => {
					let {
						isLoading: t,
						...r
					} = e;
					return o.a.createElement("div", re({}, r, {
						className: Object(F.a)(te.a.Shimmer, Object(V.b)({
							isLoading: t
						}))
					}))
				};
			class oe extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						expanded: !1,
						showCrisisModal: !1
					}, this.clickGivePremium = async () => {
						const {
							onClickGivePremium: e,
							sendEvent: t
						} = this.props;
						e(Object(Y.d)(Y.a.GiftPremiumFlow));
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
							isEmployee: o,
							isLoggedIn: a,
							isModerator: i,
							isOwnProfile: c,
							profileName: d,
							profile: l,
							crisisFlowEnabled: m,
							userAcceptsPms: u,
							onClickBlockUser: p,
							onClickChatInviteLink: f,
							onClickUnblockUser: b,
							isUserBlocked: v
						} = this.props, h = a && Object(X.d)(n, o).length && !c || o, x = S()([(c || i) && s ? {
							text: y.fbt._("Profile Moderation", null, {
								hk: "4x1una"
							}),
							url: `/user/${d}/about/edit/moderation`,
							isInternalLink: !0
						} : void 0, !c && u ? {
							text: y.fbt._("Send Message", null, {
								hk: "2oAlZ5"
							}),
							url: `${L.a.redditUrl}/message/compose/?to=${d}`
						} : void 0, a && !c ? {
							onClick: v ? b : p,
							text: v ? y.fbt._("Unblock User", null, {
								hk: "1onWdM"
							}) : y.fbt._("Block User", null, {
								hk: "4ltcgv"
							})
						} : void 0, !c && t ? {
							text: y.fbt._("View Snoovatar", null, {
								hk: "31JWSq"
							}),
							url: `${L.a.redditUrl}/user/${d}/snoo`
						} : void 0, !c && m ? {
							text: y.fbt._("Get Them Help and Support", null, {
								hk: "3FfPTy"
							}),
							onClick: this.onOpenCrisisModal
						} : void 0, !c && l ? {
							text: y.fbt._("Report User", null, {
								hk: "4hFoE2"
							}),
							url: `${L.a.redditUrl}/api/report_redirect?reason_code=USER_PROFILE&thing=${l.id}`
						} : void 0, a && l && !l.isQuarantined ? {
							onClick: e,
							text: y.fbt._("Add to Custom Feed", null, {
								hk: "3ZtOdG"
							})
						} : void 0, c && a && r ? {
							onClick: f,
							text: y.fbt._("Invite someone to chat", null, {
								hk: "1ndvHF"
							})
						} : void 0]);
						return h && x.splice(1, 0, {
							onClick: this.clickGivePremium,
							text: y.fbt._("Give Premium", null, {
								hk: "2wyUqF"
							})
						}), x
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
					const n = (t ? r : []).map(e => e.url ? e.isInternalLink ? o.a.createElement(b.t, {
						kind: b.b.InternalLink,
						priority: b.c.Plain,
						size: b.d.XS,
						key: e.url,
						onClick: e.onClick,
						to: e.url,
						className: te.a.menuItem
					}, e.text) : o.a.createElement(b.t, {
						kind: b.b.ExternalLink,
						priority: b.c.Plain,
						size: b.d.XS,
						key: e.url,
						href: e.url,
						onClick: e.onClick,
						className: te.a.menuItem
					}, e.text) : o.a.createElement(b.t, {
						priority: b.c.Plain,
						size: b.d.XS,
						className: te.a.menuItem,
						key: e.text,
						onClick: e.onClick
					}, e.text));
					this.state.expanded && this.isLoadingMods() && (n.unshift(o.a.createElement("div", {
						className: te.a.menuItem,
						key: "loading-1"
					}, o.a.createElement(se, {
						isLoading: this.props.areModeratedSubredditsPending
					}))), n.unshift(o.a.createElement("div", {
						className: te.a.menuItem,
						key: "loading-2"
					}, o.a.createElement(se, {
						isLoading: this.props.areModeratedSubredditsPending
					}))));
					const s = t ? y.fbt._("Fewer Options", null, {
						hk: "4ixXKg"
					}) : y.fbt._("More Options", null, {
						hk: "4ix9v1"
					});
					return o.a.createElement("div", {
						className: te.a.container
					}, n, o.a.createElement("div", {
						className: te.a.expandContainer
					}, o.a.createElement(b.r, {
						className: te.a.expandButton,
						onClick: this.moreOptionsToggled
					}, s)), e && o.a.createElement(Z, null), this.state.showCrisisModal && o.a.createElement(H.b, {
						withOverlay: !0,
						overlayCustomStyles: H.a,
						fromUserProfile: !0,
						username: this.props.profileName,
						onCloseCrisisModal: this.onCloseCrisisModal
					}))
				}
			}
			var ae = Object(a.b)(ne, (e, t) => {
					let {
						profileName: n,
						sendEvent: s
					} = t;
					return {
						addToMultiClicked: () => {
							e(Object(A.a)(() => Promise.all([r.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), r.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), r.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), r.e("CountryPage~Multireddit"), r.e("Multireddit")]).then(r.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.myMultiredditsRequested))(!0, !0)), e(Object(W.h)(q.a.MULTIREDDIT_ADD_SUBREDDIT))
						},
						onClickGivePremium: t => e(Object(R.e)({
							correlationId: t,
							profileName: n
						})),
						onModeratorsRequested: () => e(Object(G.b)(n)),
						onClickBlockUser: () => {
							e(Object(l.h)(n)), s(Object(g.a)(n))
						},
						onClickUnblockUser: () => {
							e(Object(l.g)(n)), s(Object(g.i)(n))
						},
						onClickChatInviteLink: () => e((() => async (e, t, r) => {
							let {
								gqlContext: n
							} = r;
							const s = await Object(M.a)(n());
							if (s.ok) {
								const t = s.body.data.createChatChannelInviteLink.inviteUrl;
								if (t) {
									Object(B.a)(t);
									const r = Object(T.e)(y.fbt._("Copied link!", null, {
										hk: "4a4E1x"
									}), D.b.SuccessCommunity);
									e(Object(T.f)(r))
								}
							} else {
								const t = Object(T.e)(y.fbt._("Something went wrong", null, {
									hk: "22u7ha"
								}), D.b.Error);
								e(Object(T.f)(t))
							}
						})())
					}
				})(oe),
				ie = r("./src/reddit/helpers/trackers/postComposer.ts"),
				ce = r("./src/reddit/components/ProfileIdCard/ProfileNewPostButton/index.m.less"),
				de = r.n(ce);
			const {
				fbt: le
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var me = e => {
					let {
						username: t,
						currentUserHasSubreddit: r
					} = e;
					const n = Object(p.b)(),
						a = Object(s.useCallback)(() => n(Object(ie.x)({
							actionInfoType: "profile"
						})), [n]);
					return o.a.createElement(b.a, {
						className: de.a.button,
						kind: b.b.InternalLink,
						to: r ? `/user/${t}/submit` : "/submit",
						onClick: a
					}, le._("New Post", null, {
						hk: "2VCZwF"
					}))
				},
				ue = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/NftCard/index.tsx"),
				pe = r("./src/reddit/components/ProfileIdCard/index.m.less"),
				fe = r.n(pe),
				be = r("./src/reddit/components/ProfileIdCard/UnblockConfirmationModal/async.tsx");
			const {
				fbt: ve
			} = r("./node_modules/fbt/lib/FbtPublic.js"), he = Object(i.c)({
				account: k.k,
				activeTooltipId: P.a,
				currentUserHasSubreddit: k.h,
				hideNSFWPref: k.F,
				isModerator: O.f,
				isSocialLinksConsumptionEnabled: (e, t) => {
					let {
						profileName: r
					} = t;
					return Object(w.a)(e, r)
				},
				isSocialLinksCreationEnabled: (e, t) => {
					let {
						profileName: r
					} = t;
					const n = Object(k.k)(e),
						s = Object(k.zb)(e, {
							userName: r
						});
					return !!n && !!s && n.id === s.id && Object(w.b)(e)
				},
				prefersReducedAnimations: E.c,
				profile: O.j,
				profileAboutInfo: O.h,
				topAwardIcon: (e, t) => {
					let {
						profileName: r
					} = t;
					return Object(I.e)(e, {
						userName: r,
						minSize: 32
					})
				},
				structuredStyle: (e, t) => Object(C.m)(e, Object(O.m)(e, t.profileName)),
				userHasSubreddit: (e, t) => {
					let {
						profileName: r
					} = t;
					return Object(k.Ab)(e, {
						userName: r
					})
				},
				user: (e, t) => {
					let {
						profileName: r
					} = t;
					return Object(k.zb)(e, {
						userName: r
					})
				},
				page: _.b,
				allowNFTs: e => Object(N.c)(e, {
					experimentEligibilitySelector: N.a,
					experimentName: j.w
				}) === j.y.Enabled,
				isUserBlocked: k.K
			}), xe = e => {
				let {
					username: t,
					currentUserHasSubreddit: r,
					id: n
				} = e;
				return o.a.createElement("div", {
					className: fe.a.actionItem
				}, o.a.createElement(me, {
					username: t,
					currentUserHasSubreddit: r
				}))
			}, ge = e => {
				let {
					profileName: t,
					toggleFollow: r,
					userIsSubscriber: n,
					isUserBlocked: a,
					onClickUnblockUser: i,
					enableFollowers: c
				} = e;
				const [d, l] = Object(s.useState)(!1);
				return a ? o.a.createElement("div", {
					className: fe.a.actionItem
				}, o.a.createElement(b.k, {
					isFullWidth: !0,
					onClick: () => {
						i(t)
					},
					onMouseOver: () => {
						l(!0)
					},
					onMouseOut: () => {
						l(!1)
					}
				}, d ? ve._("Unblock", null, {
					hk: "2d6Cyx"
				}) : ve._("Blocked", null, {
					hk: "1wiBJY"
				}))) : c ? o.a.createElement("div", {
					className: fe.a.actionItem
				}, n ? o.a.createElement(b.o, {
					className: fe.a.button,
					onClick: () => r(t, n)
				}, ve._("Unfollow", null, {
					hk: "1nM1SO"
				})) : o.a.createElement(b.l, {
					className: fe.a.button,
					onClick: () => r(t, n)
				}, ve._("Follow", null, {
					hk: "OPQuq"
				}))) : o.a.createElement(o.a.Fragment, null)
			}, Ie = e => {
				let {
					userId: t
				} = e;
				return o.a.createElement("div", {
					className: fe.a.actionItem
				}, o.a.createElement(m.b, {
					contextId: t,
					className: fe.a.button,
					userId: t,
					text: ve._("Chat", null, {
						hk: "UKkIW"
					})
				}))
			};
			t.default = Object(a.b)(he, e => ({
				onToggleFollow: (t, r) => e(Object(d.d)([{
					name: t,
					type: f.a.PROFILE
				}], !r)),
				onClickSnoovatar: () => e(Object(c.b)({
					clickSource: "profile_overview"
				})),
				onClickUnblockUser: t => e(Object(l.g)(t))
			}))(Object(p.c)(e => {
				const [t, r] = Object(s.useState)(!1), {
					account: a,
					currentUserHasSubreddit: i,
					hideNSFWPref: c,
					isModerator: d,
					isOverlay: l,
					isSocialLinksConsumptionEnabled: m,
					isSocialLinksCreationEnabled: p,
					isSubmissionPage: f,
					onClickSnoovatar: b,
					onToggleFollow: h,
					profile: I,
					profileAboutInfo: _,
					sendEvent: O,
					structuredStyle: C,
					topAwardIcon: P,
					userHasSubreddit: k,
					allowNFTs: E,
					user: j,
					page: N,
					prefersReducedAnimations: w,
					isUserBlocked: y,
					onClickUnblockUser: U
				} = e;
				if (!j) return null;
				const {
					accountIcon: S,
					awardedLastMonth: L,
					created: F,
					enableFollowers: A,
					id: B,
					isEmployee: T,
					isGold: M,
					prefShowSnoovatar: D,
					snoovatarFullBodyAsset: R,
					username: W
				} = j, G = !!a && a.id === B, H = !(!a || !a.snoovatarFullBodyAsset), z = C && C.bannerBackgroundImage, K = !!I && I.isNSFW, Z = K && c, q = !(!_ || !_.userIsSubscriber), Y = `/user/${W}/`, V = N && N.url === Y, X = !_ || _.acceptChats, Q = !_ || _.acceptPms, J = E && Object(ue.b)(R), $ = () => {
					r(e => !e)
				};
				return o.a.createElement(o.a.Fragment, null, o.a.createElement(u.a, {
					isEmployee: T,
					isGold: M,
					isNSFW: K,
					isNftPreview: J,
					isOverlay: l,
					isOwnProfile: G,
					isSocialLinksConsumptionEnabled: m,
					isSocialLinksCreationEnabled: p,
					publicDescription: _ ? _.publicDescription : void 0,
					title: I ? I.title : void 0,
					url: V ? null : Y,
					userCreated: F,
					username: W,
					recentAwardings: L,
					currentUserHasSnoovatar: H,
					prefersReducedAnimations: !!w,
					snoovatarUrl: R,
					topAwardIcon: P,
					actions: o.a.createElement(o.a.Fragment, null, G && !f && xe({
						username: W,
						currentUserHasSubreddit: i,
						id: B
					}), !G && k && o.a.createElement(ge, {
						profileName: W,
						toggleFollow: (e, t) => {
							h(e, t), O(t ? (e => t => ({
								...x(e, t),
								source: "profile",
								action: v.c.CLICK,
								noun: n.UNFOLLOW
							}))(B) : (e => t => ({
								...x(e, t),
								source: "profile",
								action: v.c.CLICK,
								noun: n.FOLLOW
							}))(B))
						},
						userIsSubscriber: q,
						isUserBlocked: y,
						onClickUnblockUser: $,
						enableFollowers: A
					}), !!a && !G && !y && X && Ie({
						userId: B
					})),
					footer: y ? void 0 : o.a.createElement(ae, {
						hasSubreddit: k,
						isModerator: d,
						isOwnProfile: G,
						allowViewSnoovatar: D,
						profileName: W,
						sendEvent: O,
						userAcceptsPms: Q,
						isUserBlocked: y
					}),
					onClickSnoovatar: b,
					profileIcon: S,
					bannerBackgroundImage: Z ? void 0 : z
				}), t && o.a.createElement(be.a, {
					onClose: $,
					onConfirm: e => {
						$(), U(e), O(Object(g.i)(W))
					},
					username: W,
					withOverlay: !0
				}))
			}))
		},
		"./src/reddit/components/SocialLinks/async.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "SocialLinks",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => r.e("SocialLinks").then(r.bind(null, "./src/reddit/components/SocialLinks/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/SocialLinks/index.tsx"
				}
			})
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
				o = r("./src/lib/lessComponent.tsx"),
				a = r("./src/reddit/components/SEOTitle/index.tsx"),
				i = r("./src/reddit/components/Widgets/Base/index.m.less"),
				c = r.n(i);
			const d = o.a.div("WidgetBackground", c.a),
				l = o.a.wrapped(e => {
					let {
						children: t,
						...r
					} = e;
					return s.a.createElement("div", r, s.a.createElement(a.b, {
						type: a.a.Widget
					}, t))
				}, "WidgetHeader", c.a);
			t.b = e => s.a.createElement("div", {
				className: e.className
			}, s.a.createElement(d, null, e.children))
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			class o extends s.a.Component {
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
					} = this, r = "string" == typeof t.value ? t.value : "", n = "object" == typeof t.value ? t.value : null, o = r || n;
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
					}), (!o || e.multiple || void 0 !== e.isPending && !e.isPending) && s.a.createElement("input", {
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
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = r.n(a);
			t.a = e => {
				let {
					center: t,
					className: r,
					sizePx: n = 10
				} = e;
				return s.a.createElement("div", {
					className: Object(o.a)(i.a.loadingIcon, r, {
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
				o = r("./src/lib/makeApiRequest/index.ts"),
				a = r("./src/lib/omitHeaders/index.ts"),
				i = r("./src/reddit/constants/headers.ts"),
				c = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const d = async (e, t) => Object(o.a)(Object(a.a)(e, [i.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/block_user`,
				method: s.jb.POST
			}), l = async (e, t, r) => Object(o.a)(Object(a.a)(e, [i.a]), {
				data: {
					name: r,
					container: t,
					type: "enemy"
				},
				endpoint: `${e.apiUrl}/api/unfriend`,
				method: s.jb.POST
			}), m = async (e, t) => Object(o.a)(Object(a.a)(e, [i.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/add_whitelisted?include_model`,
				method: s.jb.POST
			}), u = async (e, t) => Object(o.a)(Object(a.a)(e, [i.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/remove_whitelisted`,
				method: s.jb.POST
			}), p = async (e, t) => Object(o.a)(Object(a.a)(e, [i.a]), {
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
				return v
			}));
			var n = r("./src/config.ts"),
				s = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/makeApiRequest/index.ts"),
				a = r("./src/lib/makeGqlRequest/index.ts"),
				i = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/redditGQL/operations/UpdateChatMessagesAsRead.json"),
				d = r("./src/reddit/constants/headers.ts"),
				l = r("./src/redditGQL/operations/CreateChatChannelInviteLink.json"),
				m = r("./src/redditGQL/types.ts");
			const u = e => Boolean(e && e.data && (null == e ? void 0 : e.errors)),
				p = e => Object(o.a)(Object(i.a)(e, [d.a]), {
					endpoint: `${n.a.sendbirdServiceUrl}/api/v1/chat/me/settings`,
					method: s.jb.GET
				}),
				f = async (e, t) => Object(o.a)(Object(i.a)(t, [d.a]), {
					endpoint: `${n.a.sendbirdServiceUrl}/api/v1/chat/me/settings`,
					method: s.jb.PUT,
					data: JSON.stringify({
						invite_policy: e
					})
				}), b = (e, t) => {
					const r = {
						channels: t
					};
					return Object(a.a)(e, {
						...c,
						variables: {
							input: r
						}
					})
				}, v = e => Object(a.a)(e, {
					...l,
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
				return a
			})), r.d(t, "b", (function() {
				return i
			}));
			var n = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/helpers/styles/mixins/loading.m.less"),
				o = r.n(s);
			const a = e => {
					let {
						isLoading: t
					} = e;
					return Object(n.a)(o.a.loadingBackground, {
						[o.a["m-loading"]]: t
					})
				},
				i = e => Object(n.a)(o.a.loadingBar, a(e))
		},
		"./src/reddit/helpers/trackers/followers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return a
			}));
			var n = r("./src/reddit/constants/tracking.ts"),
				s = r("./src/reddit/selectors/telemetry.ts");
			const o = e => t => ({
					...Object(s.n)(t),
					action: n.c.CLICK,
					noun: `follower_list_page_${e?"follow":"unfollow"}`,
					source: "profile"
				}),
				a = () => e => ({
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
				return d
			})), r.d(t, "e", (function() {
				return l
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
				o = r("./src/reddit/selectors/user.ts");
			const a = e => ({
					screen: s.Y(e),
					profile: s.Q(e),
					subreddit: s.gb(e)
				}),
				i = e => t => ({
					source: "user_dropdown",
					action: "click",
					noun: e ? "night_mode_off" : "night_mode_on",
					...a(t)
				}),
				c = e => t => ({
					source: "nav",
					action: "click",
					actionInfo: {
						pageType: t.platform.currentPage ? s.u(t.platform.currentPage) : void 0,
						settingValue: e ? "online" : "hidden"
					},
					noun: "online_presence_toggle",
					...a(t)
				}),
				d = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "premium",
					correlationId: Object(n.c)(n.a.GoldPayment),
					...a(e)
				}),
				l = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "powerups",
					correlationId: Object(n.d)(n.a.PowerupsFlow, !1),
					...a(e)
				}),
				m = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "advertise",
					...a(e)
				}),
				u = () => e => ({
					source: "nav",
					action: "click",
					noun: "advertise",
					...a(e)
				}),
				p = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "coins",
					correlationId: Object(n.c)(n.a.GoldPayment),
					...a(e)
				}),
				f = e => t => ({
					source: "profile",
					action: "click",
					noun: "block_user",
					targetUser: {
						id: Object(o.zb)(t, {
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
						id: Object(o.zb)(t, {
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
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/reddit/selectors/meta.ts");
			const i = "undefined" == typeof document ? function() {
				const e = Object(o.e)(a.i) || s.DEFAULT_LOCALE;
				return Object(n.isPseudoLocale)(e) ? s.DEFAULT_LOCALE : e
			} : function() {
				const e = document.documentElement.lang || s.DEFAULT_LOCALE;
				return Object(n.isPseudoLocale)(e) ? s.DEFAULT_LOCALE : e
			};
			t.a = i;
			const c = () => {
				const e = i(),
					t = Object(o.e)(a.b);
				return t ? e.replace(/([a-z]+-)([A-Z]+)/, `$1${t}`) : e
			}
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
				return o
			}));
			r("./src/reddit/selectors/user.ts");
			const n = e => e.blockedRedditors.api.pending,
				s = e => e.blockedRedditors.list,
				o = (e, t) => {
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
				return a
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts"),
				o = r("./src/reddit/selectors/user.ts");
			const a = e => Object(s.c)(e, {
				experimentName: n.G,
				experimentEligibilitySelector: () => Object(o.O)(e)
			}) === n.od
		},
		"./src/reddit/selectors/experiments/crisisTextLine.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return i
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts"),
				o = r("./src/reddit/selectors/user.ts");
			const a = e => n.d.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: o.P,
					experimentName: n.j
				}),
				i = e => n.f.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: o.P,
					experimentName: n.o
				})
		},
		"./src/reddit/selectors/experiments/econ/marketplace.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return a
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
					return !(Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: n.Vd
					}) === n.od)
				},
				a = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.Wd
				}) === n.od
		},
		"./src/reddit/selectors/premium.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return n
			})), r.d(t, "d", (function() {
				return s
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return a
			}));
			const n = e => !!e.givePremium.givePremiumModalAccountName,
				s = e => e.givePremium.givePremiumModalAccountName,
				o = e => e.givePremium.api.error || "",
				a = e => e.givePremium.api.pending
		},
		"./src/redditGQL/operations/FetchBlockedRedditorsInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"1e9183c00f76"}')
		},
		"./src/redditGQL/operations/UpdateChatMessagesAsRead.json": function(e) {
			e.exports = JSON.parse('{"id":"bfc6fe51708d"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ProfileIdCard.b37ceaf340ca8e92f127.js.map