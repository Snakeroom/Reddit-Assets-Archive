// https://www.redditstatic.com/desktop2x/reddit-components-ProfileIdCard.ad2fc192e47b0c51a757.js
// Retrieved at 8/2/2023, 10:40:04 AM by Reddit Dataminer v1.0.0
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
		"./src/reddit/actions/chat/toggle.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./src/reddit/actions/matrixChat/index.ts");
			const s = e => async t => {
				t(Object(n.f)(e))
			}
		},
		"./src/reddit/actions/matrixChat/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return n
			})), r.d(t, "a", (function() {
				return s
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "b", (function() {
				return i
			}));
			const n = "MATRIX_CHAT_SET_URL",
				s = "MATRIX_CHAT_RESET_ACTIVE_CHAT",
				a = "MATRIX_CHAT_SET_STATE",
				o = "MATRIX_CHAT_START_CHAT_WITH_USER",
				i = "MATRIX_CHAT_SET_NOTIFICATIONS_COUNT"
		},
		"./src/reddit/actions/matrixChat/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return m
			})), r.d(t, "a", (function() {
				return p
			})), r.d(t, "d", (function() {
				return f
			})), r.d(t, "c", (function() {
				return b
			})), r.d(t, "f", (function() {
				return v
			})), r.d(t, "b", (function() {
				return h
			}));
			var n, s = r("./src/lib/cache/index.ts"),
				a = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/reducers/features/matrixChat/index.ts");

			function c(e) {
				return Object(s.c)(a.q.CHAT, a.z.CHAT_CONTAINER_SIZE_KEY, e)
			}

			function l(e) {
				switch (e) {
					case n.EMBED:
						return i.b.NORMAL;
					case n.MINIMIZED:
						return i.b.MINIMIZED;
					default:
						return i.b.CLOSED
				}
			}! function(e) {
				e.EMBED = "embed", e.FULL = "full", e.HIDDEN = "hidden", e.MINIMIZED = "minimized"
			}(n || (n = {}));
			var d = r("./src/reddit/selectors/user.ts"),
				u = r("./src/reddit/actions/matrixChat/constants.ts");
			const m = Object(o.a)(u.d),
				p = Object(o.a)(u.a),
				f = e => (t, r) => {
					const o = r(),
						l = Object(d.k)(o);
					if (l) {
						const t = c(l),
							r = function(e) {
								switch (e) {
									case i.b.NORMAL:
										return n.EMBED;
									case i.b.MINIMIZED:
										return n.MINIMIZED;
									default:
										return n.HIDDEN
								}
							}(e.state);
						Object(s.d)(t, r, a.wc)
					}
					return t({
						type: u.c,
						payload: e
					})
				},
				b = Object(o.a)(u.b),
				v = Object(o.a)(u.e),
				h = e => async t => {
					const r = c(e),
						n = Object(s.b)(r);
					n && t(f({
						state: l(n)
					}))
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
			const u = e => {
				let {
					onStartChat: t,
					text: r,
					className: n,
					sendEvent: s,
					contextId: o,
					priority: i,
					Icon: c,
					redditStyle: u,
					isFullWidth: m,
					eventSource: p,
					onClick: f,
					children: b,
					style: v
				} = e;
				return a.a.createElement(l.t, {
					onClick: e => {
						f && f(e), t(), s(Object(d.b)(o))
					},
					className: n,
					text: r,
					priority: i,
					Icon: c,
					redditStyle: u,
					isFullWidth: m,
					style: v
				}, b)
			};
			u.displayName = "ChatButton";
			const m = Object(o.b)(null, (e, t) => {
				let {
					userId: r
				} = t;
				return {
					onStartChat: () => {
						e(Object(i.a)(r))
					}
				}
			});
			t.b = m(Object(c.c)(u))
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
		"./src/reddit/components/Econ/Marketplace/CollectiblesShowcaseUnit/async.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(n.a)({
				resolved: {},
				chunkName: () => "CollectiblesShowcaseUnit",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => Promise.all([r.e("vendors~Avatar~CollectiblesShowcaseUnit~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceCla~cd1771e1"), r.e("vendors~Avatar~ChatPost~CollectiblesShowcaseUnit~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProf~7d152600"), r.e("vendors~Avatar~CollectiblesShowcaseUnit~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProfileUnit~S~bb3e1fe2"), r.e("CollectiblesShowcaseUnit")]).then(r.bind(null, "./src/reddit/components/Econ/Marketplace/CollectiblesShowcaseUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Marketplace/CollectiblesShowcaseUnit/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = s
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
				importAsync: () => Promise.all([r.e("vendors~Avatar~CollectiblesShowcaseUnit~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceCla~cd1771e1"), r.e("vendors~Avatar~ChatPost~CollectiblesShowcaseUnit~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProf~7d152600"), r.e("vendors~Avatar~CollectiblesShowcaseUnit~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProfileUnit~S~bb3e1fe2"), r.e("NftProfileUnit")]).then(r.bind(null, "./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.tsx")),
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
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/ImageInput/index.tsx"),
				i = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				c = r("./src/reddit/icons/fonts/index.tsx"),
				l = r("./src/reddit/models/ApiRequestState/index.ts"),
				d = r("./src/reddit/components/EditableImage/index.m.less"),
				u = r.n(d);
			const {
				fbt: m
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					altText: t,
					children: r,
					className: n,
					isProfileCard: d,
					isLoading: m,
					imageUrl: p,
					onFileSelected: f
				} = e;
				return s.a.createElement("div", {
					className: Object(a.a)(u.a.Container, n)
				}, s.a.createElement("label", {
					className: u.a.HitBox
				}, s.a.createElement("span", {
					className: u.a.ImageContainer,
					role: "presentation"
				}, p ? s.a.createElement("img", {
					alt: t,
					className: u.a.Image,
					src: p
				}) : r), s.a.createElement(o.a, {
					className: u.a.ImageUploader,
					multiple: !1,
					onChange: e => {
						const t = Object(l.b)();
						f(e, t)
					},
					isPending: m
				}), !m && s.a.createElement("div", {
					className: Object(a.a)(u.a.EditButton, {
						[u.a.profileCard]: d
					})
				}, s.a.createElement(c.a, {
					name: "add_media",
					className: u.a.EditIcon
				}))), m && s.a.createElement(i.a, {
					className: u.a.LoadingIcon,
					sizePx: 80
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/config.ts"),
				i = r("./src/lib/prettyPrintNumber/index.ts"),
				c = r("./src/reddit/selectors/experiments/econ/index.ts"),
				l = r("./src/reddit/components/ProfileIdCard/index.m.less"),
				d = r.n(l);
			const {
				fbt: u
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				if (Object(a.e)(c.d)) return null;
				const {
					topAwardIcon: t,
					recentAwardings: r,
					username: n
				} = e;
				if (!r.topAward) return null;
				const {
					topAward: l,
					totalCount: m
				} = r, p = l.description ? l.description : l.name;
				return s.a.createElement("a", {
					className: d.a.AwardedLastMonth,
					href: `${o.a.oldRedditUrl}/user/${n}/gilded`
				}, s.a.createElement("div", {
					className: d.a.iconColumn
				}, s.a.createElement("img", {
					alt: p,
					className: d.a.icon,
					src: t
				}), m > 1 && s.a.createElement("span", {
					className: d.a.count
				}, `+${Object(i.b)(m-1)}`)), s.a.createElement("div", {
					className: d.a.textColumn
				}, u._({
					"*": "Received the {award-name} Award and more in the past 30 days",
					_1: "Received the {award-name} Award in the past 30 days"
				}, [u._param("award-name", l.name), u._plural(m)], {
					hk: "16MJHe"
				})))
			}
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
				u = r("./src/reddit/components/HumanDate/index.tsx"),
				m = r("./src/reddit/contexts/InsideOverlay.tsx"),
				p = r("./src/reddit/endpoints/profile/info.ts"),
				f = r("./src/reddit/helpers/karma.ts"),
				b = r("./src/reddit/helpers/trackers/followers.ts"),
				v = r("./src/reddit/hooks/useTracking.ts"),
				h = r("./src/reddit/icons/fonts/index.tsx"),
				g = r("./src/reddit/selectors/experiments/econ/index.ts"),
				x = r("./src/reddit/selectors/profile.ts"),
				I = r("./src/reddit/selectors/user.ts"),
				C = r("./src/reddit/actions/tooltip.ts"),
				_ = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				P = r("./src/reddit/components/ProfileIdCard/Highlight.m.less"),
				k = r.n(P);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const N = l.a.div("Container", k.a),
				O = l.a.div("Body", k.a),
				w = l.a.h5("Title", k.a),
				U = l.a.span("Label", k.a);
			class S extends a.a.Component {
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
					return a.a.createElement(N, {
						className: o
					}, a.a.createElement(w, null, r), a.a.createElement(O, null, e, a.a.createElement(U, E({
						key: "label"
					}, i), t)), s && n && a.a.createElement(_.c, {
						caretOnTop: !0,
						tooltipId: s
					}, n))
				}
			}
			var j = Object(o.b)(null, e => ({
					toggleTooltip: t => e(Object(C.h)({
						tooltipId: t
					}))
				}))(Object(m.b)(S)),
				y = r("./src/reddit/components/ProfileIdCard/Highlights.m.less"),
				M = r.n(y);
			const F = Object(i.a)(g.d, x.k, (e, t) => {
					let {
						profileName: r
					} = t;
					return Object(I.Jb)(e, r)
				}, (e, t, r) => ({
					isAwardsSunsetEnabled: e,
					karma: {
						...p.a,
						...null == r ? void 0 : r.karma,
						total: Object(f.a)(r)
					},
					enableFollowers: !!(null == r ? void 0 : r.enableFollowers),
					profileCreated: r && (r.createdUtc || r.created) || 0,
					subscribers: t && t.subscribers || 0
				})),
				A = l.a.div("Container", M.a);

			function B(e, t) {
				return `profile--id-card--highlight-tooltip-${e?"-overlay":""}-${t}`
			}
			const L = e => {
				const t = Object(v.a)(),
					r = Object(s.useCallback)(() => {
						t(Object(b.b)())
					}, [t]),
					o = e.isOwnProfile ? a.a.createElement(a.a.Fragment, null, Object(d.b)(e.subscribers, {
						displayFull: !0
					}), a.a.createElement(h.a, {
						name: "right",
						className: M.a.iconRight
					})) : Object(d.b)(e.subscribers, {
						displayFull: !0
					}),
					i = a.a.createElement(j, {
						className: Object(c.a)(M.a.profileHighlight, e.highlightClassName),
						icon: a.a.createElement(h.a, {
							name: "user",
							isFilled: !0,
							className: M.a.icon,
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
			t.a = Object(o.b)(F)(Object(m.b)(e => {
				const {
					isAwardsSunsetEnabled: t,
					karma: r,
					enableFollowers: s,
					profileCreated: o,
					isOverlay: i,
					subscribers: c,
					className: l,
					highlightClassName: m
				} = e, f = {
					...p.a,
					...r
				}, b = B(i, "karma"), v = B(i, "cakeday"), g = `${n.fbt._({"*":"{number} Post Karma",_1:"1 Post Karma"},[n.fbt._plural(f.fromPosts,"number",Object(d.b)(f.fromPosts,{displayFull:!0}))],{hk:"husfU"})}\n${n.fbt._({"*":"{number} Comment Karma",_1:"1 Comment Karma"},[n.fbt._plural(f.fromComments,"number",Object(d.b)(f.fromComments,{displayFull:!0}))],{hk:"26iPTL"})}\n${t?"":n.fbt._({"*":"{number} Awardee Karma",_1:"1 Awardee Karma"},[n.fbt._plural(f.fromAwardsReceived,"number",Object(d.b)(f.fromAwardsReceived,{displayFull:!0}))],{hk:"2Ww5MR"})}\n${t?"":n.fbt._({"*":"{number} Awarder Karma",_1:"1 Awarder Karma"},[n.fbt._plural(f.fromAwardsGiven,"number",Object(d.b)(f.fromAwardsGiven,{displayFull:!0}))],{hk:"2F1chz"})}`.trim();
				return a.a.createElement(A, {
					className: l
				}, a.a.createElement(j, {
					className: m,
					icon: a.a.createElement(h.a, {
						name: "karma",
						isFilled: !0,
						className: M.a.icon,
						key: "karma"
					}),
					label: Object(d.b)(f.total, {
						displayFull: !0
					}),
					title: n.fbt._("Karma", null, {
						hk: "RtSgN"
					}),
					tooltipId: b,
					tooltip: g
				}), a.a.createElement(j, {
					className: m,
					icon: a.a.createElement(h.a, {
						name: "cake",
						isFilled: !0,
						className: M.a.icon,
						key: "cakeDay"
					}),
					label: a.a.createElement(u.a, {
						seconds: o,
						showDay: !0
					}),
					title: n.fbt._("Cake day", null, {
						hk: "4x2LB5"
					}),
					tooltipId: v,
					tooltip: a.a.createElement(u.d, {
						seconds: o
					})
				}), s && c > 0 && a.a.createElement(L, {
					highlightClassName: m,
					isOwnProfile: !!e.isOwnProfile,
					profileName: e.profileName,
					subscribers: c
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
				o = r("./src/reddit/components/SocialLinks/async.tsx"),
				i = r("./src/reddit/components/Widgets/Base/index.tsx"),
				c = r("./src/reddit/layout/twoCol/Dynamic/index.m.less"),
				l = r.n(c),
				d = a.a.div("dynamicTwoCol", l.a),
				u = r("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				m = r("./src/reddit/components/ProfileIdCard/Highlights.tsx"),
				p = r("./src/reddit/components/ProfileIdCard/Preview.m.less"),
				f = r.n(p),
				b = r("./src/config.ts"),
				v = r("./node_modules/fbt/lib/FbtPublic.js"),
				h = r("./src/reddit/controls/InternalLink/index.tsx"),
				g = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				x = r("./src/reddit/controls/OutboundLink/index.tsx"),
				I = r("./src/reddit/icons/fonts/index.tsx"),
				C = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.tsx"),
				_ = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				P = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				k = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				E = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserIcon/index.m.less"),
				N = r.n(E),
				O = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				w = r.n(O);
			var U = e => {
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
						onClickSnoovatar: u,
						onDeleteBanner: m,
						onDeleteIcon: p,
						profileIcon: f,
						title: E,
						userCreated: O,
						username: U,
						url: S
					} = e;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement(P.a, {
						bannerBackgroundImage: t,
						editMode: !!r,
						isNSFW: l,
						username: U,
						isDeletingBanner: !!a,
						onDeleteBanner: m
					}), s.a.createElement("div", {
						className: N.a.SnooIconWrapper
					}, d || !f || l ? s.a.createElement(C.a, {
						iconUrl: f,
						isNSFW: l,
						userName: U,
						isProfileIdCard: !0
					}) : s.a.createElement(x.b, {
						href: f
					}, s.a.createElement(C.a, {
						iconUrl: f,
						isNSFW: l,
						userName: U,
						isProfileIdCard: !0
					})), r && !n && (o ? s.a.createElement(g.a, {
						sizePx: 20,
						className: w.a.loadingIcon
					}) : s.a.createElement(I.a, {
						name: "close",
						className: w.a.closeIcon,
						onClick: p
					}))), !r && d && s.a.createElement(h.default, {
						to: "/settings/profile",
						className: N.a.settingsLink
					}, s.a.createElement(I.a, {
						name: "settings",
						className: w.a.settingsIcon
					})), E && s.a.createElement("h4", {
						className: N.a.userTitle
					}, E), s.a.createElement(k.a, {
						className: N.a.userName,
						username: U,
						userCreated: O,
						url: S
					}), i && s.a.createElement(I.a, {
						name: "admin",
						isFilled: !0,
						className: N.a.adminIcon,
						title: v.fbt._("Reddit admin", null, {
							hk: "goUUb"
						})
					}), c && s.a.createElement("a", {
						title: v.fbt._("{username} has Reddit Premium", [v.fbt._param("username", U)], {
							hk: "3Fylv"
						}),
						href: `${b.a.redditUrl}/premium`
					}, s.a.createElement(I.a, {
						name: "premium",
						isFilled: !0,
						className: N.a.premiumIcon
					})), d && s.a.createElement(_.a, {
						currentUserHasSnoovatar: !1,
						isOwnProfile: !0,
						onClick: u
					}))
				},
				S = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx");
			var j = e => {
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
						isOwnProfile: u,
						onClickSnoovatar: m,
						onDeleteBanner: p,
						onDeleteIcon: f,
						prefersReducedAnimations: b,
						profileIcon: v,
						snoovatarUrl: h,
						title: g,
						userCreated: x,
						username: I,
						url: C
					} = e;
					return h ? s.a.createElement(S.a, {
						bannerBackgroundImage: t,
						currentUserHasSnoovatar: r,
						editMode: n,
						isDeletingBanner: o,
						isEmployee: c,
						isGold: l,
						isNSFW: d,
						isOwnProfile: u,
						onClickSnoovatar: m,
						onDeleteBanner: p,
						prefersReducedAnimations: b,
						snoovatarUrl: h,
						title: g,
						userCreated: x,
						username: I,
						url: C
					}) : s.a.createElement(U, {
						bannerBackgroundImage: t,
						editMode: n,
						isDefaultIcon: a,
						isDeletingBanner: o,
						isDeletingIcon: i,
						isEmployee: c,
						isGold: l,
						isNSFW: d,
						isOwnProfile: u,
						onClickSnoovatar: m,
						onDeleteBanner: p,
						onDeleteIcon: f,
						profileIcon: v,
						title: g,
						userCreated: x,
						username: I,
						url: C
					})
				},
				y = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/NftCard/index.tsx");
			const M = a.a.wrapped(i.b, "Widget", f.a),
				F = a.a.div("Description", f.a),
				A = a.a.wrapped(d, "Actions", f.a);
			class B extends s.a.PureComponent {
				renderAwardedLastMonth() {
					const {
						recentAwardings: e,
						topAwardIcon: t,
						username: r
					} = this.props;
					return e ? s.a.createElement(u.a, {
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
						isEmployee: i,
						isGold: c,
						isNSFW: l,
						isOverlay: d,
						isOwnProfile: u,
						profileIcon: p,
						publicDescription: f,
						shouldShowSocialLinks: b,
						snoovatarUrl: v,
						title: h,
						url: g,
						userCreated: x,
						username: I,
						isDefaultIcon: C,
						isDeletingIcon: _,
						isDeletingBanner: P,
						onClickSnoovatar: k,
						onDeleteIcon: E,
						onDeleteBanner: N,
						prefersReducedAnimations: O,
						editMode: w,
						isNftPreview: U
					} = this.props;
					return U ? s.a.createElement(s.a.Fragment, null, s.a.createElement(y.a, {
						bannerBackgroundImage: t,
						currentUserHasSnoovatar: r,
						editMode: w,
						isDeletingBanner: P,
						isEmployee: i,
						isGold: c,
						isNSFW: l,
						isOwnProfile: !!u,
						onClickSnoovatar: k,
						onDeleteBanner: N,
						prefersReducedAnimations: O,
						snoovatarUrl: v,
						title: h,
						userCreated: x,
						username: I,
						actions: e,
						url: g,
						footer: a
					})) : s.a.createElement(M, {
						className: n
					}, s.a.createElement(j, {
						bannerBackgroundImage: U ? void 0 : t,
						currentUserHasSnoovatar: r,
						editMode: w,
						isDefaultIcon: C,
						isDeletingBanner: P,
						isDeletingIcon: _,
						isEmployee: i,
						isGold: c,
						isNSFW: l,
						isOwnProfile: !!u,
						onClickSnoovatar: k,
						onDeleteBanner: N,
						onDeleteIcon: E,
						prefersReducedAnimations: O,
						profileIcon: p,
						title: h,
						userCreated: x,
						username: I,
						url: g,
						snoovatarUrl: v
					}), s.a.createElement(F, null, f), s.a.createElement(m.a, {
						isOwnProfile: !!u,
						profileName: I,
						isOverlay: d
					}), b && s.a.createElement(o.a, {
						isCreationEnabled: !!u,
						username: I
					}), this.renderAwardedLastMonth(), s.a.createElement(A, null, e), a)
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
				u = r.n(d);
			class m extends a.a.Component {
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
					} = this.state, m = e ? a.a.createElement("div", {
						className: u.a.Banner,
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
					}, m) : o && s ? null : m
				}
			}
			t.a = Object(l.a)(m)
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
				u = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.m.less"),
				m = r.n(u);
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
						isUpdating: u
					} = this.state, p = a.a.createElement(c.a, {
						className: m.a.Icon,
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
						isLoading: u,
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
					currentUser: o.m,
					hideNSFWPref: o.H
				}),
				c = Object(n.b)(i, e => ({
					imageUpdateRequested: (t, r) => e(Object(a.B)(t, r))
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
				u = r("./src/reddit/controls/Button/index.tsx"),
				m = r("./src/reddit/helpers/trackers/snoovatar.ts"),
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
					share: g
				} = e;
				const x = Object(d.b)(),
					I = Object(o.d)(),
					C = b && b.id,
					_ = b && b.voteState;
				let P = null;
				C || (P = t ? "user_hovercard" : "profile_overview");
				const k = Object(s.useCallback)(() => x(Object(m.h)(t ? "user_hovercard" : "profile_overview", r)), [t, x, r]);
				return a.a.createElement(u.t, {
					onClick: () => {
						i ? (x(m.i), C && _ === f.a.notVoted && I(Object(c.ib)(C))) : k();
						const e = i ? "postify" : "copy";
						I(Object(l.b)({
							clickSource: P,
							share: g,
							source: e
						}))
					},
					className: Object(n.a)(v.a.snoovatarButton, v.a.snoovatarExtraPadding, v.a.compactButtonLayout, {
						[v.a.avatarPostifyButton]: i
					}),
					isFullWidth: !0
				}, a.a.createElement(p.a, {
					className: Object(n.a)({
						[v.a.shirtIcon]: !i,
						[v.a.avatarPostButtonShirtIcon]: i
					})
				}), h._("Try this Look", null, {
					hk: "dOuPb"
				}), a.a.createElement("div", {
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
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/Button/index.tsx"),
				i = r("./src/reddit/icons/fonts/index.tsx"),
				c = r("./src/reddit/icons/svgs/Shirt/index.tsx"),
				l = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				d = r.n(l);
			const {
				fbt: u
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function(e) {
				let {
					compact: t,
					currentUserHasSnoovatar: r,
					className: n,
					isOwnProfile: l,
					onClick: m
				} = e;
				return s.a.createElement(o.t, {
					onClick: m,
					isFullWidth: !0,
					className: Object(a.a)(d.a.snoovatarButton, {
						[d.a.snoovatarExtraPadding]: !r && l,
						[d.a.compactButtonLayout]: t
					}, n)
				}, r ? s.a.createElement(c.a, {
					className: d.a.shirtIcon
				}) : s.a.createElement("div", {
					className: d.a.shirtIcon
				}), r ? u._("Style Avatar", null, {
					hk: "UEtBO"
				}) : l ? u._("Create Avatar", null, {
					hk: "2pJgje"
				}) : u._("Create Your Own Avatar", null, {
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
				return v
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/config.ts"),
				i = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/components/LottieAnimation/index.tsx"),
				l = r("./src/reddit/selectors/user.ts"),
				d = r("./src/reddit/components/ProfileIdCard/Highlights.tsx"),
				u = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				m = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx"),
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
					userCreated: g,
					username: x,
					url: I,
					className: C,
					actions: _,
					footer: P
				} = e;
				const {
					badge: k,
					url: E
				} = Object(n.useMemo)(() => (function(e) {
					const t = b.exec(e) || ["", "", ""],
						r = t[1],
						n = t[2];
					return {
						id: r,
						url: "testing" === n ? "https://nft.reddit.com" : `https://nft.reddit.com/n/${r}`,
						badge: n
					}
				})(v), [v]), N = Object(a.e)(l.fb);
				return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: Object(i.a)(f.a.container, C)
				}, s.a.createElement(c.a, {
					className: f.a.cardAnimation,
					useCanvasRenderer: !0,
					assetUrl: `${o.a.assetPath}/img/snoovatars/nft_card_animation.json`,
					loop: !0
				}), s.a.createElement("div", {
					className: f.a.inner
				}, "testing" !== k && s.a.createElement("img", {
					alt: `${k} NFT`,
					className: f.a.badgeImage,
					src: `${o.a.assetPath}/img/snoovatars/nft_badge_${k}.svg`
				}), s.a.createElement("img", {
					className: f.a.cutout,
					src: `${o.a.assetPath}/img/snoovatars/hole-cutout-${N?"black":"white"}.svg`
				}), s.a.createElement("a", {
					href: E,
					target: "_blank",
					className: f.a.nftIcon,
					rel: "noopener noreferrer"
				}, s.a.createElement("img", {
					className: f.a.nftIconImage,
					alt: "View this NFT",
					src: `${o.a.assetPath}/img/snoovatars/nft_icon.svg`
				})), s.a.createElement("img", {
					className: f.a.snoovatarImage,
					src: v,
					alt: "Avatar NFT Image"
				}), s.a.createElement(m.a, {
					isEmployee: t,
					isGold: r,
					isNSFW: p,
					title: h,
					username: x
				}), s.a.createElement(u.a, {
					className: f.a.subUsername,
					shouldDisplaySnoovatar: !0,
					username: x,
					userCreated: g,
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
				}, P))
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
				u = r.n(d);
			t.a = function(e) {
				let {
					bannerBackgroundImage: t,
					isNSFW: r,
					username: n,
					editMode: c,
					isDeletingBanner: d,
					onDeleteBanner: m
				} = e;
				return s.a.createElement("div", {
					className: l.a.bannerWrapper
				}, s.a.createElement(i.a, {
					bannerUrl: t,
					isNSFW: r,
					userName: n
				}), c && t && (d ? s.a.createElement(a.a, {
					sizePx: 20,
					className: u.a.loadingIcon
				}) : s.a.createElement(o.a, {
					className: u.a.closeIcon,
					onClick: m
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
				const u = r ? s.a.createElement(s.a.Fragment, null, "u/", l, " · ", s.a.createElement(o.d, {
					seconds: c,
					noPostfix: !0,
					shortenedUnit: !0
				})) : `u/${l}`;
				return n ? s.a.createElement(a.default, i({}, d, {
					className: t,
					to: n
				}), u) : s.a.createElement("span", i({}, d, {
					className: t
				}), u)
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
				return k
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/classNames/index.ts"),
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
				i = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/reddit/components/Econ/Marketplace/CollectiblesShowcaseUnit/async.ts"),
				l = r("./src/reddit/components/Econ/Marketplace/NftProfileUnit/async.ts"),
				d = r("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				u = r("./src/reddit/helpers/userSnoovatar/index.ts"),
				m = r("./src/reddit/selectors/experiments/econ/index.ts"),
				p = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				f = r.n(p);
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			const b = 25;

			function v(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function h(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const g = v("particleDelay", f.a),
				x = v("particleX", f.a),
				I = v("particleFloat", f.a),
				C = () => {
					const e = h(x),
						t = h(I),
						r = h(g);
					return Object(s.a)(f.a.particle, e, t, r)
				};
			class _ extends o.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < b; t++) e.push(this.createParticle(t));
					return o.a.createElement("div", {
						role: "presentation",
						className: f.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return o.a.createElement("div", {
						key: e,
						className: `${C()}`
					})
				}
			}
			var P = _;
			const k = e => {
				let {
					className: t,
					isGold: r,
					snoovatarUrl: a,
					prefersReducedAnimations: p,
					origin: b,
					userName: v
				} = e;
				const h = a && Object(u.d)(a),
					g = b === d.a.Profile,
					x = b === d.a.Hovercard,
					I = Object(i.e)(m.p);
				return h ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: Object(s.a)({
						[f.a.profileTreatment]: g,
						[f.a.hovercardTreatment]: x
					})
				}, o.a.createElement("div", {
					className: Object(s.a)(f.a.nftProfileUnitContainer, {
						[f.a.nftProfileUnitContainerWithoutCta]: I
					})
				}, o.a.createElement(l.a, {
					className: f.a.nftProfileUnit,
					imageUrl: a,
					origin: b,
					showDetailsCta: !I
				}))), I && o.a.createElement("div", {
					className: f.a.showcase
				}, o.a.createElement(c.a, {
					origin: b,
					userName: v
				}))) : o.a.createElement("div", {
					className: Object(s.a)(f.a.snoovatarContainer, t)
				}, r && o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: f.a.topGlow
				}), o.a.createElement("div", {
					className: f.a.bottomGlow
				}), !p && o.a.createElement(P, null)), o.a.createElement("img", {
					className: Object(s.a)(f.a.snoovatar, {
						[f.a.premiumGlow]: r
					}),
					src: a,
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
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
				i = r("./src/reddit/icons/svgs/Admin/index.tsx"),
				c = r("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				l = r("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
				d = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				u = r.n(d);
			t.a = e => {
				let {
					title: t,
					username: r,
					isEmployee: a,
					isGold: d,
					isNSFW: m
				} = e;
				return o.a.createElement("h1", {
					className: u.a.snoovatarUserTitle
				}, t || r, a && o.a.createElement(i.a, {
					className: u.a.snoovatarAdminIcon,
					title: s.fbt._("Reddit admin", null, {
						hk: "goUUb"
					})
				}), d && o.a.createElement("a", {
					title: s.fbt._("{username} has Reddit Premium", [s.fbt._param("username", r)], {
						hk: "3Fylv"
					}),
					href: `${n.a.redditUrl}/premium`
				}, o.a.createElement(l.a, {
					className: u.a.snoovatarPremiumIcon
				})), m && o.a.createElement(c.a, {
					className: u.a.snoovatarNsfwIcon,
					title: s.fbt._("NSFW - Adult Content", null, {
						hk: "2Iw7mN"
					})
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less": function(e, t, r) {
			e.exports = {
				snoovatarContainer: "_34XIqvI8-YT1wukR_W8vj6",
				profileTreatment: "_2xpFvOlDs0HF8bwR0pDmqt",
				hovercardTreatment: "_34eH8NsQ_ay5kowUWt9-6E",
				nftProfileUnitContainer: "OfvB_Czxn5wwXiBN6RVlG",
				nftProfileUnitContainerWithoutCta: "_3BzIc6FzgAGGhbAOD7PPEr",
				nftProfileUnit: "n5OW4wkmX5R3yYizuJXw1",
				showcase: "_rvftTJBQnr_blLyFQjK1",
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
				o = r("./src/reddit/controls/InternalLink/index.tsx"),
				i = r("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				c = r("./src/reddit/icons/fonts/index.tsx"),
				l = r("./src/reddit/selectors/experiments/econ/index.ts"),
				d = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				u = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				m = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				p = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				f = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				b = r.n(f),
				v = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				h = r.n(v),
				g = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/AvatarImage.tsx"),
				x = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx");
			t.a = e => {
				let {
					bannerBackgroundImage: t,
					compact: r,
					currentUserHasSnoovatar: n,
					editMode: f,
					isDeletingBanner: v,
					isEmployee: I,
					isGold: C,
					isNSFW: _,
					isOwnProfile: P,
					onClickSnoovatar: k,
					onDeleteBanner: E,
					prefersReducedAnimations: N,
					snoovatarUrl: O,
					title: w,
					userCreated: U,
					username: S,
					url: j,
					isHovercard: y
				} = e;
				const M = Object(a.e)(e => !P && !!O && Object(l.g)(e));
				return s.a.createElement(s.a.Fragment, null, s.a.createElement(m.a, {
					bannerBackgroundImage: t,
					editMode: !!f,
					isNSFW: _,
					username: S,
					isDeletingBanner: !!v,
					onDeleteBanner: E
				}), !f && P && s.a.createElement(o.default, {
					to: "/settings/profile",
					className: b.a.snoovatarSettingsLink
				}, s.a.createElement(c.a, {
					name: "settings",
					className: h.a.settingsIcon
				})), s.a.createElement(g.a, {
					isGold: C,
					snoovatarUrl: O,
					prefersReducedAnimations: N,
					origin: y ? i.a.Hovercard : i.a.Profile,
					userName: S
				}), s.a.createElement(x.a, {
					isEmployee: I,
					isGold: C,
					isNSFW: _,
					title: w,
					username: S
				}), s.a.createElement(p.a, {
					className: b.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: S,
					userCreated: U,
					url: j
				}), (P || !n && !!O) && s.a.createElement(d.a, {
					compact: r,
					currentUserHasSnoovatar: n,
					isOwnProfile: P,
					onClick: k
				}), M && s.a.createElement(u.a, {
					username: S,
					isHovercard: !!y,
					share: {
						username: S
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
				u = r("./src/reddit/components/ChatButton/index.tsx"),
				m = r("./src/reddit/components/ProfileIdCard/Preview.tsx"),
				p = r("./src/reddit/components/TrackingHelper/index.tsx"),
				f = r("./src/reddit/constants/posts.ts"),
				b = r("./src/reddit/controls/Button/index.tsx"),
				v = r("./src/reddit/constants/tracking.ts"),
				h = r("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.FOLLOW = "follow", e.UNFOLLOW = "unfollow", e.CREATE_POST = "create_post"
			}(n || (n = {}));
			const g = (e, t) => ({
				...Object(h.q)(t),
				profile: Object(h.n)(t),
				subreddit: {
					id: e
				}
			});
			var x = r("./src/reddit/helpers/trackers/user.ts"),
				I = r("./src/reddit/selectors/gold/awardIcon.ts"),
				C = r("./src/reddit/selectors/platform.ts"),
				_ = r("./src/reddit/selectors/profile.ts"),
				P = r("./src/reddit/selectors/structuredStyles.ts"),
				k = r("./src/reddit/selectors/tooltip.ts"),
				E = r("./src/reddit/selectors/user.ts"),
				N = r("./src/reddit/selectors/userPrefs.ts"),
				O = r("./src/reddit/constants/experiments.ts"),
				w = r("./src/reddit/helpers/chooseVariant/index.ts");
			var U = r("./node_modules/fbt/lib/FbtPublic.js"),
				S = r("./node_modules/lodash/compact.js"),
				j = r.n(S),
				y = r("./src/config.ts"),
				M = r("./src/lib/classNames/index.ts"),
				F = r("./src/lib/loadableAction/index.ts"),
				A = r("./src/lib/copyToClipboard/index.ts"),
				B = r("./src/reddit/actions/toaster.ts"),
				L = r("./src/reddit/endpoints/chat/userSettings.ts"),
				T = r("./src/reddit/models/Toast/index.ts");
			var D = r("./src/reddit/actions/gold/modals.ts"),
				R = r("./src/reddit/actions/modal.ts"),
				W = r("./src/reddit/actions/profile/index.ts"),
				H = r("./src/reddit/components/CrisisFlow/index.tsx"),
				G = r("./src/higherOrderComponents/makeAsync.tsx"),
				q = r("./src/lib/loadWithRetries/index.ts");
			var z = Object(G.a)({
					getComponent: () => Object(q.a)(() => r.e("GivePremiumModal").then(r.bind(null, "./src/reddit/components/GivePremiumModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				Z = r("./src/reddit/constants/modals.ts"),
				K = r("./src/reddit/helpers/correlationIdTracker.ts"),
				X = r("./src/reddit/helpers/styles/mixins/loading.ts"),
				Y = r("./src/reddit/models/Gold/Premium/index.ts"),
				V = r("./src/reddit/selectors/experiments/chatInviteLinkSharing.ts"),
				Q = r("./src/reddit/selectors/experiments/crisisTextLine.ts"),
				J = r("./src/reddit/selectors/experiments/econ/index.ts"),
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
					areModeratedSubredditsPending: _.b,
					coinsToSpend: E.g,
					givePremiumModalIsOpen: $.c,
					hasFetchedModerators: _.m,
					isAwardsSunsetEnabled: J.d,
					isEmployee: E.P,
					isLoggedIn: E.S,
					profile: _.k,
					crisisFlowEnabled: Q.b,
					chatInviteLinkSharing: V.a
				}),
				se = e => {
					let {
						isLoading: t,
						...r
					} = e;
					return a.a.createElement("div", re({}, r, {
						className: Object(M.a)(te.a.Shimmer, Object(X.b)({
							isLoading: t
						}))
					}))
				};
			class ae extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						expanded: !1,
						showCrisisModal: !1
					}, this.clickGivePremium = async () => {
						const {
							onClickGivePremium: e,
							sendEvent: t
						} = this.props;
						e(Object(K.d)(K.a.GiftPremiumFlow));
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
							isAwardsSunsetEnabled: a,
							isEmployee: o,
							isLoggedIn: i,
							isModerator: c,
							isOwnProfile: l,
							profileName: d,
							profile: u,
							crisisFlowEnabled: m,
							userAcceptsPms: p,
							onClickBlockUser: f,
							onClickChatInviteLink: b,
							onClickUnblockUser: v,
							isUserBlocked: h
						} = this.props, g = !a && (i && Object(Y.d)(n, o).length && !l || o), x = j()([(l || c) && s ? {
							text: U.fbt._("Profile Moderation", null, {
								hk: "4x1una"
							}),
							url: `/user/${d}/about/edit/moderation`,
							isInternalLink: !0
						} : void 0, !l && p ? {
							text: U.fbt._("Send Message", null, {
								hk: "2oAlZ5"
							}),
							url: `${y.a.redditUrl}/message/compose/?to=${d}`
						} : void 0, i && !l ? {
							onClick: h ? v : f,
							text: h ? U.fbt._("Unblock User", null, {
								hk: "1onWdM"
							}) : U.fbt._("Block User", null, {
								hk: "4ltcgv"
							})
						} : void 0, !l && t ? {
							text: U.fbt._("View Snoovatar", null, {
								hk: "31JWSq"
							}),
							url: `${y.a.redditUrl}/user/${d}/snoo`
						} : void 0, !l && m ? {
							text: U.fbt._("Get Them Help and Support", null, {
								hk: "3FfPTy"
							}),
							onClick: this.onOpenCrisisModal
						} : void 0, !l && u ? {
							text: U.fbt._("Report User", null, {
								hk: "4hFoE2"
							}),
							url: `${y.a.redditUrl}/api/report_redirect?reason_code=USER_PROFILE&thing=${u.id}`
						} : void 0, i && u && !u.isQuarantined ? {
							onClick: e,
							text: U.fbt._("Add to Custom Feed", null, {
								hk: "3ZtOdG"
							})
						} : void 0, l && i && r ? {
							onClick: b,
							text: U.fbt._("Invite someone to chat", null, {
								hk: "1ndvHF"
							})
						} : void 0]);
						return g && x.splice(1, 0, {
							onClick: this.clickGivePremium,
							text: U.fbt._("Give Premium", null, {
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
					const n = (t ? r : []).map(e => e.url ? e.isInternalLink ? a.a.createElement(b.t, {
						kind: b.b.InternalLink,
						priority: b.c.Plain,
						size: b.d.XS,
						key: e.url,
						onClick: e.onClick,
						to: e.url,
						className: te.a.menuItem
					}, e.text) : a.a.createElement(b.t, {
						kind: b.b.ExternalLink,
						priority: b.c.Plain,
						size: b.d.XS,
						key: e.url,
						href: e.url,
						onClick: e.onClick,
						className: te.a.menuItem
					}, e.text) : a.a.createElement(b.t, {
						priority: b.c.Plain,
						size: b.d.XS,
						className: te.a.menuItem,
						key: e.text,
						onClick: e.onClick
					}, e.text));
					this.state.expanded && this.isLoadingMods() && (n.unshift(a.a.createElement("div", {
						className: te.a.menuItem,
						key: "loading-1"
					}, a.a.createElement(se, {
						isLoading: this.props.areModeratedSubredditsPending
					}))), n.unshift(a.a.createElement("div", {
						className: te.a.menuItem,
						key: "loading-2"
					}, a.a.createElement(se, {
						isLoading: this.props.areModeratedSubredditsPending
					}))));
					const s = t ? U.fbt._("Fewer Options", null, {
						hk: "4ixXKg"
					}) : U.fbt._("More Options", null, {
						hk: "4ix9v1"
					});
					return a.a.createElement("div", {
						className: te.a.container
					}, n, a.a.createElement("div", {
						className: te.a.expandContainer
					}, a.a.createElement(b.r, {
						className: te.a.expandButton,
						onClick: this.moreOptionsToggled
					}, s)), e && a.a.createElement(z, null), this.state.showCrisisModal && a.a.createElement(H.b, {
						withOverlay: !0,
						overlayCustomStyles: H.a,
						fromUserProfile: !0,
						username: this.props.profileName,
						onCloseCrisisModal: this.onCloseCrisisModal
					}))
				}
			}
			var oe = Object(o.b)(ne, (e, t) => {
					let {
						profileName: n,
						sendEvent: s
					} = t;
					return {
						addToMultiClicked: () => {
							e(Object(F.a)(() => Promise.all([r.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~a5d6a3b8"), r.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Hap~cb450973"), r.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), r.e("CountryPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~ProfilePosts~Subreddit"), r.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), r.e("CountryPage~Multireddit"), r.e("Multireddit")]).then(r.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.myMultiredditsRequested))(!0, !0)), e(Object(R.h)(Z.a.MULTIREDDIT_ADD_SUBREDDIT))
						},
						onClickGivePremium: t => e(Object(D.e)({
							correlationId: t,
							profileName: n
						})),
						onModeratorsRequested: () => e(Object(W.b)(n)),
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
							const s = await Object(L.a)(n());
							if (s.ok) {
								const t = s.body.data.createChatChannelInviteLink.inviteUrl;
								if (t) {
									Object(A.a)(t);
									const r = Object(B.e)(U.fbt._("Copied link!", null, {
										hk: "4a4E1x"
									}), T.b.SuccessCommunity);
									e(Object(B.f)(r))
								}
							} else {
								const t = Object(B.e)(U.fbt._("Something went wrong", null, {
									hk: "22u7ha"
								}), T.b.Error);
								e(Object(B.f)(t))
							}
						})())
					}
				})(ae),
				ie = r("./src/reddit/helpers/trackers/postComposer.ts"),
				ce = r("./src/reddit/components/ProfileIdCard/ProfileNewPostButton/index.m.less"),
				le = r.n(ce);
			const {
				fbt: de
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var ue = e => {
					let {
						username: t,
						currentUserHasSubreddit: r
					} = e;
					const n = Object(p.b)(),
						o = Object(s.useCallback)(() => n(Object(ie.x)({
							actionInfoType: "profile"
						})), [n]);
					return a.a.createElement(b.a, {
						className: le.a.button,
						kind: b.b.InternalLink,
						to: r ? `/user/${t}/submit` : "/submit",
						onClick: o
					}, de._("New Post", null, {
						hk: "2VCZwF"
					}))
				},
				me = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/NftCard/index.tsx"),
				pe = r("./src/reddit/components/ProfileIdCard/index.m.less"),
				fe = r.n(pe),
				be = r("./src/reddit/components/ProfileIdCard/UnblockConfirmationModal/async.tsx");
			const {
				fbt: ve
			} = r("./node_modules/fbt/lib/FbtPublic.js"), he = Object(i.c)({
				account: E.m,
				activeTooltipId: k.a,
				currentUserHasSubreddit: E.j,
				hideNSFWPref: E.H,
				isModerator: _.g,
				prefersReducedAnimations: N.d,
				profile: _.k,
				profileAboutInfo: _.i,
				topAwardIcon: (e, t) => {
					let {
						profileName: r
					} = t;
					return Object(I.e)(e, {
						userName: r,
						minSize: 32
					})
				},
				structuredStyle: (e, t) => Object(P.m)(e, Object(_.o)(e, t.profileName)),
				userHasSubreddit: (e, t) => {
					let {
						profileName: r
					} = t;
					return Object(E.Eb)(e, {
						userName: r
					})
				},
				user: (e, t) => {
					let {
						profileName: r
					} = t;
					return Object(E.Db)(e, {
						userName: r
					})
				},
				page: C.b,
				allowNFTs: e => Object(w.c)(e, {
					experimentEligibilitySelector: w.a,
					experimentName: O.k
				}) === O.m.Enabled,
				isUserBlocked: E.N
			}), ge = e => {
				let {
					username: t,
					currentUserHasSubreddit: r,
					id: n
				} = e;
				return a.a.createElement("div", {
					className: fe.a.actionItem
				}, a.a.createElement(ue, {
					username: t,
					currentUserHasSubreddit: r
				}))
			}, xe = e => {
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
					className: fe.a.actionItem
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
				}, l ? ve._("Unblock", null, {
					hk: "2d6Cyx"
				}) : ve._("Blocked", null, {
					hk: "1wiBJY"
				}))) : c ? a.a.createElement("div", {
					className: fe.a.actionItem
				}, n ? a.a.createElement(b.o, {
					className: fe.a.button,
					onClick: () => r(t, n)
				}, ve._("Unfollow", null, {
					hk: "1nM1SO"
				})) : a.a.createElement(b.l, {
					className: fe.a.button,
					onClick: () => r(t, n)
				}, ve._("Follow", null, {
					hk: "OPQuq"
				}))) : a.a.createElement(a.a.Fragment, null)
			}, Ie = e => {
				let {
					userId: t
				} = e;
				return a.a.createElement("div", {
					className: fe.a.actionItem
				}, a.a.createElement(u.b, {
					className: fe.a.button,
					userId: t,
					text: ve._("Chat", null, {
						hk: "UKkIW"
					}),
					pageType: "user_profile"
				}))
			};
			t.default = Object(o.b)(he, e => ({
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
					isSubmissionPage: u,
					onClickSnoovatar: p,
					onToggleFollow: f,
					profile: b,
					profileAboutInfo: h,
					sendEvent: I,
					structuredStyle: C,
					topAwardIcon: _,
					userHasSubreddit: P,
					allowNFTs: k,
					user: E,
					page: N,
					prefersReducedAnimations: O,
					isUserBlocked: w,
					onClickUnblockUser: U
				} = e;
				if (!E) return null;
				const {
					accountIcon: S,
					awardedLastMonth: j,
					created: y,
					enableFollowers: M,
					id: F,
					isEmployee: A,
					isGold: B,
					prefShowSnoovatar: L,
					snoovatarFullBodyAsset: T,
					username: D
				} = E, R = !!o && o.id === F, W = !(!o || !o.snoovatarFullBodyAsset), H = C && C.bannerBackgroundImage, G = !!b && b.isNSFW, q = G && c, z = !(!h || !h.userIsSubscriber), Z = `/user/${D}/`, K = N && N.url === Z, X = !h || h.acceptChats, Y = !h || h.acceptPms, V = k && Object(me.b)(T), Q = () => {
					r(e => !e)
				};
				return a.a.createElement(a.a.Fragment, null, a.a.createElement(m.a, {
					isEmployee: A,
					isGold: B,
					isNSFW: G,
					isNftPreview: V,
					isOverlay: d,
					isOwnProfile: R,
					publicDescription: h ? h.publicDescription : void 0,
					title: b ? b.title : void 0,
					url: K ? null : Z,
					userCreated: y,
					username: D,
					recentAwardings: j,
					currentUserHasSnoovatar: W,
					prefersReducedAnimations: !!O,
					shouldShowSocialLinks: !0,
					snoovatarUrl: T,
					topAwardIcon: _,
					actions: a.a.createElement(a.a.Fragment, null, R && !u && ge({
						username: D,
						currentUserHasSubreddit: i,
						id: F
					}), !R && P && a.a.createElement(xe, {
						profileName: D,
						toggleFollow: (e, t) => {
							f(e, t), I(t ? (e => t => ({
								...g(e, t),
								source: "profile",
								action: v.c.CLICK,
								noun: n.UNFOLLOW
							}))(F) : (e => t => ({
								...g(e, t),
								source: "profile",
								action: v.c.CLICK,
								noun: n.FOLLOW
							}))(F))
						},
						userIsSubscriber: z,
						isUserBlocked: w,
						onClickUnblockUser: Q,
						enableFollowers: M
					}), !!o && !R && !w && X && Ie({
						userId: F
					})),
					footer: w ? void 0 : a.a.createElement(oe, {
						hasSubreddit: P,
						isModerator: l,
						isOwnProfile: R,
						allowViewSnoovatar: L,
						profileName: D,
						sendEvent: I,
						userAcceptsPms: Y,
						isUserBlocked: w
					}),
					onClickSnoovatar: p,
					profileIcon: S,
					bannerBackgroundImage: q ? void 0 : H
				}), t && a.a.createElement(be.a, {
					onClose: Q,
					onConfirm: e => {
						Q(), U(e), I(Object(x.i)(D))
					},
					username: D,
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
		"./src/reddit/helpers/trackers/authorHovercard.ts": function(e, t, r) {
			"use strict";
			r.d(t, "h", (function() {
				return o
			})), r.d(t, "g", (function() {
				return i
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "f", (function() {
				return l
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "b", (function() {
				return p
			}));
			var n = r("./src/reddit/helpers/isComment.ts"),
				s = r("./src/reddit/selectors/telemetry.ts");
			const a = (e, t) => ({
					comment: t && Object(n.a)(t) ? s.j({
						state: e,
						commentId: t
					}) : null,
					post: t ? s.M(e, t) : null,
					profile: s.V(e, t),
					screen: s.eb(e),
					snoovatar: t ? s.kb(e, t) : null,
					user: s.ub(e)
				}),
				o = (e, t) => r => ({
					source: "user_hovercard",
					action: "click",
					noun: e,
					...a(r, t)
				}),
				i = e => t => ({
					source: "user_hovercard",
					action: "view",
					noun: "hover_user_hovercard",
					...a(t, e)
				}),
				c = e => t => ({
					source: "user_hovercard",
					action: "click",
					noun: "mute_dialog_in_context",
					...a(t, e)
				}),
				l = e => t => ({
					source: "user_hovercard",
					action: "click",
					noun: "unmute_dialog_in_context",
					...a(t, e)
				}),
				d = e => t => ({
					source: "user_hovercard",
					action: "click",
					noun: "ban_dialog_in_context",
					...a(t, e)
				}),
				u = e => t => ({
					source: "user_hovercard",
					action: "click",
					noun: "unban_user_in_context",
					...a(t, e)
				}),
				m = e => t => ({
					source: "user_hovercard",
					action: "click",
					noun: "change_user_flair_in_context",
					userSubreddit: s.wb(t),
					...a(t, e)
				}),
				p = e => t => ({
					source: s.V(t) ? "user_profile" : "user_hovercard",
					action: "click",
					noun: "create_chat",
					...e && a(t, e)
				})
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
					...Object(s.q)(t),
					action: n.c.CLICK,
					noun: `follower_list_page_${e?"follow":"unfollow"}`,
					source: "profile"
				}),
				o = () => e => ({
					...Object(s.q)(e),
					action: n.c.CLICK,
					noun: "follower_list_cta",
					source: "profile"
				})
		},
		"./src/reddit/helpers/trackers/marketplace/claims.ts": function(e, t, r) {
			"use strict";
			r.d(t, "j", (function() {
				return a
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "k", (function() {
				return l
			})), r.d(t, "h", (function() {
				return u
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "i", (function() {
				return p
			})), r.d(t, "c", (function() {
				return f
			})), r.d(t, "f", (function() {
				return b
			})), r.d(t, "g", (function() {
				return v
			}));
			var n = r("./src/reddit/selectors/avatarPushcard.ts"),
				s = r("./src/reddit/selectors/telemetry.ts");
			const a = () => e => ({
					...Object(s.q)(e),
					source: "marketplace",
					action: "view",
					noun: "claim_post_unit"
				}),
				o = () => e => ({
					...Object(s.q)(e),
					source: "marketplace",
					action: "click",
					noun: "claim_post_unit"
				}),
				i = () => e => ({
					...Object(s.q)(e),
					source: "marketplace",
					action: "close",
					noun: "claim_post_unit"
				});
			var c;
			! function(e) {
				e.Profile = "profile", e.Hovercard = "hovercard"
			}(c || (c = {}));
			const l = e => t => {
					const r = Object(s.q)(t);
					return {
						...r,
						source: "marketplace",
						action: "view",
						noun: "product_detail_page",
						actionInfo: {
							...r.actionInfo,
							reason: e,
							pageType: "product_detail_page"
						}
					}
				},
				d = (e, t, r) => a => {
					const o = Object(n.a)(a).id;
					return {
						...Object(s.q)(a),
						source: e,
						action: t,
						noun: r,
						goldPurchase: {
							offerContext: o
						}
					}
				},
				u = d("marketplace_top_nav", "view", "achievement_icon"),
				m = d("marketplace_top_nav", "click", "achievement_icon"),
				p = d("user_drawer", "view", "pushcard"),
				f = d("user_drawer", "click", "pushcard"),
				b = d("user_drawer", "dismiss", "pushcard"),
				v = d("user_drawer", "dismiss_confirm", "pushcard")
		},
		"./src/reddit/helpers/trackers/user.ts": function(e, t, r) {
			"use strict";
			r.d(t, "g", (function() {
				return i
			})), r.d(t, "h", (function() {
				return c
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "b", (function() {
				return d
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "d", (function() {
				return m
			})), r.d(t, "a", (function() {
				return p
			})), r.d(t, "i", (function() {
				return f
			})), r.d(t, "f", (function() {
				return b
			}));
			var n = r("./src/reddit/helpers/correlationIdTracker.ts"),
				s = r("./src/reddit/selectors/telemetry.ts"),
				a = r("./src/reddit/selectors/user.ts");
			const o = e => ({
					screen: s.eb(e),
					profile: s.V(e),
					subreddit: s.nb(e)
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
						pageType: t.platform.currentPage ? s.x(t.platform.currentPage) : void 0,
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
					noun: "advertise",
					...o(e)
				}),
				u = () => e => ({
					source: "nav",
					action: "click",
					noun: "advertise",
					...o(e)
				}),
				m = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "coins",
					correlationId: Object(n.c)(n.a.GoldPayment),
					...o(e)
				}),
				p = e => t => ({
					source: "profile",
					action: "click",
					noun: "block_user",
					targetUser: {
						id: Object(a.Db)(t, {
							userName: e
						}).id
					},
					...s.q(t)
				}),
				f = e => t => ({
					source: "profile",
					action: "click",
					noun: "unblock_user",
					targetUser: {
						id: Object(a.Db)(t, {
							userName: e
						}).id
					},
					...s.q(t)
				}),
				b = () => e => ({
					...o(e),
					source: "nav",
					action: "click",
					noun: "recap"
				})
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
		"./src/reddit/reducers/features/matrixChat/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "c", (function() {
				return i
			}));
			var n, s = r("./src/config.ts"),
				a = r("./src/reddit/actions/matrixChat/constants.ts");
			! function(e) {
				e[e.CLOSED = 0] = "CLOSED", e[e.NORMAL = 1] = "NORMAL", e[e.MINIMIZED = 2] = "MINIMIZED"
			}(n || (n = {}));
			const o = {
					state: n.CLOSED,
					url: s.a.matrixChatUrl
				},
				i = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case a.d:
							const {
								url: r
							} = t.payload;
							return {
								...e, url: r
							};
						case a.c:
							const {
								state: s
							} = t.payload;
							return {
								...e, state: s
							};
						case a.a:
							return {
								...e, activeUserId: void 0
							};
						case a.b:
							const {
								count: o
							} = t.payload;
							return {
								...e, notificationsCount: o
							};
						case a.e:
							const i = t.payload;
							return {
								...e, state: n.NORMAL, activeUserId: i
							};
						default:
							return e
					}
				}
		},
		"./src/reddit/selectors/avatarPushcard.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "c", (function() {
				return l
			})), r.d(t, "b", (function() {
				return d
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				s = r("./src/lib/initializeClient/installReducer.ts"),
				a = r("./src/reddit/helpers/localStorage/index.ts"),
				o = r("./src/reddit/reducers/features/avatar/index.ts"),
				i = r("./src/reddit/selectors/experiments/econ/index.ts");
			Object(s.a)({
				features: {
					avatar: o.a
				}
			});
			const c = e => {
					var t, r, n;
					return null === (n = null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === r ? void 0 : r.marketing) || void 0 === n ? void 0 : n.pushcard
				},
				l = Object(n.a)(c, i.b, (e, t) => {
					if (!e || !t) return null;
					const {
						id: r,
						eventViews: n
					} = Object(a.B)();
					return r === e.id && n > e.maxViews ? null : e
				}),
				d = Object(n.a)(l, e => {
					if (!e) return null;
					const {
						id: t,
						lastInteractionTimestamp: r
					} = Object(a.B)();
					return t === e.id && r > 0 ? null : e.banner
				})
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
				experimentName: n.x,
				experimentEligibilitySelector: () => Object(a.R)(e)
			}) === n.Rd
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
			const o = e => n.a.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: a.S,
					experimentName: n.d
				}),
				i = e => n.b.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: a.S,
					experimentName: n.f
				})
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ProfileIdCard.ad2fc192e47b0c51a757.js.map