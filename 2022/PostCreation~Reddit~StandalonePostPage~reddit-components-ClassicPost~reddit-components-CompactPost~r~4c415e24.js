// https://www.redditstatic.com/desktop2x/PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~r~4c415e24.ab01f1c7c5a00e060904.js
// Retrieved at 2/22/2022, 3:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~r~4c415e24"], {
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "g", (function() {
				return p
			})), r.d(t, "h", (function() {
				return b
			})), r.d(t, "i", (function() {
				return f
			})), r.d(t, "j", (function() {
				return h
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/actions/modal.ts"),
				s = r("./src/reddit/constants/modals.ts"),
				a = r("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const i = Object(n.a)(a.a),
				c = Object(n.a)(a.b),
				d = Object(n.a)(a.c),
				l = Object(n.a)(a.d),
				u = Object(n.a)(a.e),
				m = Object(n.a)(a.f),
				p = Object(n.a)(a.g),
				b = Object(n.a)(a.h),
				f = Object(n.a)(a.i),
				h = e => Object(o.h)(s.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/actions/gold/communityAwards/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "i", (function() {
				return a
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "e", (function() {
				return c
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "j", (function() {
				return m
			})), r.d(t, "g", (function() {
				return p
			})), r.d(t, "h", (function() {
				return b
			}));
			var n = r("./src/lib/loadableAction/index.ts");
			const o = e => () => r.e("CommunityAwards").then(r.bind(null, "./src/reddit/actions/gold/communityAwards/communityAwards.ts")).then(t => t[e]),
				s = Object(n.a)(o("awardSheetInfoRequested")),
				a = Object(n.a)(o("manageableAwardsRequested")),
				i = Object(n.a)(o("createCommunityAward")),
				c = Object(n.a)(o("createGlobalAward")),
				d = Object(n.a)(o("createModAward")),
				l = Object(n.a)(o("createAwardFailed")),
				u = Object(n.a)(o("createAwardSuccessful")),
				m = Object(n.a)(o("removeCommunityAward")),
				p = Object(n.a)(o("disableAwardinCommunity")),
				b = Object(n.a)(o("enableAwardinCommunity"))
		},
		"./src/reddit/actions/gold/modals.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return h
			})), r.d(t, "b", (function() {
				return g
			})), r.d(t, "d", (function() {
				return O
			})), r.d(t, "c", (function() {
				return j
			})), r.d(t, "a", (function() {
				return _
			})), r.d(t, "f", (function() {
				return w
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/postParentMessage/index.ts"),
				s = r("./src/reddit/helpers/isPost.ts"),
				a = r("./src/reddit/constants/modals.ts"),
				i = r("./src/reddit/selectors/gild.ts"),
				c = r("./src/reddit/helpers/correlationIdTracker.ts"),
				d = r("./src/reddit/actions/gold/communityAwards/index.ts"),
				l = r("./src/reddit/actions/modal.ts"),
				u = r("./src/reddit/selectors/communityAwards.ts"),
				m = r("./src/reddit/selectors/posts.ts"),
				p = r("./src/reddit/selectors/subreddit.ts"),
				b = r("./src/telemetry/index.ts"),
				f = r("./src/reddit/actions/gold/constants.ts");
			const h = Object(n.a)(f.L),
				v = Object(n.a)(f.f),
				g = () => async (e, t) => {
					const n = t();
					e(v()), Object(c.b)(c.a.GiftPremiumFlow);
					const {
						clickCloseModalEvent: o
					} = await r.e("givePremiumTrackers").then(r.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
					Object(b.a)(o()(n))
				}, x = Object(n.a)(f.K), O = ({
					awardId: e,
					correlationId: t,
					thingId: r
				}) => async (n, o) => {
					const i = o(),
						c = e ? Object(u.a)(i, e) : void 0;
					n(x({
						award: c && c.isEnabled ? c : void 0,
						thingId: r,
						correlationId: t
					})), n(Object(l.h)(a.a.GOLD_GILD_MODAL));
					const b = Object(p.I)(i, {
						thingId: r
					});
					let f = null;
					if (b) f = b.id;
					else if (Object(s.a)(r)) {
						const e = Object(m.G)(i, {
							postId: r
						});
						e && (f = e.belongsTo.id)
					}
					f && Object(d.a)(f, r)
				}, y = Object(n.a)(f.e), j = Object(n.a)(f.J), _ = () => async (e, t) => {
					const n = t(),
						s = Object(i.d)(n);
					if (Object(i.g)(n)) {
						const e = "close.gild";
						Object(o.a)({
							type: e
						})
					}
					e(y()), e(Object(l.g)(a.a.GOLD_GILD_MODAL));
					const {
						clickCloseGildModalEvent: d
					} = await Promise.resolve().then(r.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
					Object(b.a)(d(s)(n)), Object(c.b)(c.a.GildingFlow)
				}, w = () => async () => {
					Object(o.a)({
						type: "login.gild"
					})
				}
		},
		"./src/reddit/actions/snoovatar.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return b
			})), r.d(t, "a", (function() {
				return h
			})), r.d(t, "e", (function() {
				return g
			})), r.d(t, "c", (function() {
				return x
			})), r.d(t, "d", (function() {
				return O
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/sentry/index.ts"),
				a = r("./src/config.ts"),
				i = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/makeApiRequest/index.ts"),
				d = r("./src/lib/omitHeaders/index.ts"),
				l = r("./src/reddit/constants/headers.ts");
			var u = r("./src/reddit/reducers/features/avatar/index.ts"),
				m = r("./src/reddit/selectors/avatar.ts"),
				p = r("./src/reddit/actions/users.ts");
			Object(n.a)({
				features: {
					avatar: u.a
				}
			});
			const b = "SET_AVATAR_USER",
				f = Object(o.a)(b),
				h = "RANDOM_AVATAR_LOADED",
				v = Object(o.a)(h),
				g = (e, t, r) => async (n, o, {
					apiContext: s
				}) => {
					var u, b, f, h;
					const v = Object(m.b)(o()),
						g = await (async (e, t, r, n, o) => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${a.a.snoovatarUrl}/api/snoovatar?skip_telemetry=true`,
							method: i.jb.POST,
							headers: {
								"Content-Type": "application/json ",
								"X-CSRF-Token": o || ""
							},
							data: {
								accessory_ids: t,
								styles: r,
								...n
							}
						}))(s(), e, t, r, v);
					if (!g.ok) throw new Error("User avatar failed to save");
					return n(Object(p.A)(g.body)), {
						accountIcon: null === (b = null === (u = g.body) || void 0 === u ? void 0 : u.avatar) || void 0 === b ? void 0 : b.headshot_image_url,
						fullBodySnoovatar: null === (h = null === (f = g.body) || void 0 === f ? void 0 : f.avatar) || void 0 === h ? void 0 : h.image_url
					}
				}, x = () => async (e, t, {
					apiContext: r
				}) => {
					try {
						const t = await (async e => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${a.a.snoovatarUrl}/api/account`,
							method: i.jb.GET
						}))(r());
						t.ok && e(f(t.body))
					} catch (n) {
						s.c.captureException(n)
					}
				}, O = () => async (e, t, {
					apiContext: r
				}) => {
					try {
						const t = await (async e => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${a.a.snoovatarUrl}/api/snoovatars/random:byId`,
							method: i.jb.GET
						}))(r());
						t.ok && e(v(t.body))
					} catch (n) {
						s.c.captureException(n)
					}
				}
		},
		"./src/reddit/actions/snoovatarModal.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			})), r.d(t, "b", (function() {
				return u
			}));
			var n = r("./src/reddit/actions/login.ts"),
				o = r("./src/reddit/actions/modal.ts"),
				s = r("./src/reddit/actions/users.ts"),
				a = r("./src/reddit/constants/modals.ts"),
				i = r("./src/reddit/helpers/trackers/snoovatar.ts"),
				c = r("./src/reddit/selectors/user.ts"),
				d = r("./src/telemetry/index.ts");
			const l = () => async (e, t) => {
				const r = t();
				Object(d.a)(Object(i.k)(r)), e(Object(s.t)({
					forceFetch: !0
				})), await e(Object(o.g)(a.a.SNOOVATAR_MODAL))
			};

			function u(e = {}) {
				return async (t, r) => {
					const {
						clickSource: s,
						share: l,
						source: u
					} = e, m = r();
					s && Object(d.a)(Object(i.f)(s)(m)), Object(c.O)(m) ? await t(Object(o.h)(a.a.SNOOVATAR_MODAL, {
						share: l,
						source: u
					})) : await t(Object(n.i)())
				}
			}
		},
		"./src/reddit/components/AuthorLink/index.m.less": function(e, t, r) {
			e.exports = {
				authorLinkStyles: "_23wugcdiaj44hdfugIAlnX",
				isUnstyled: "oQctV4n0yUb0uiHDdGnmE",
				isStrong: "_2YPMtQeUrWhVZuFXPpgmXz",
				isLivestreaming: "_3otDgT22VIln-JT-1XwFbr",
				deletedAuthorLink: "lizQBHVukyun2S2babj-l"
			}
		},
		"./src/reddit/components/AuthorLink/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				i = r("./src/config.ts"),
				c = r("./src/reddit/actions/post.ts"),
				d = r("./src/reddit/controls/InternalLink/index.tsx"),
				l = r("./src/reddit/hooks/useClickSourceData.ts"),
				u = r("./src/reddit/selectors/experiments/cnc/index.ts"),
				m = r("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				p = r("./src/reddit/components/AuthorLink/index.m.less"),
				b = r.n(p);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				var t, r;
				const n = Object(a.a)(e.className, b.a.authorLinkStyles, {
						[b.a.isLivestreaming]: e.isLivestreaming,
						[b.a.isStrong]: e.isStrong,
						[b.a.isUnstyled]: e.isUnstyled
					}),
					p = Object(l.a)(),
					h = Object(s.d)(),
					v = Object(s.e)(m.b),
					g = t => {
						var r;
						if (null === (r = e.onClick) || void 0 === r || r.call(e, t), v) {
							const r = e.isExternal || e.isLivestreaming || e.forceOpenInNewTab ? `${i.a.redditUrl}/user/${e.author}` : `/user/${e.author}/`;
							t.preventDefault(), h(Object(c.cb)(r))
						}
					};
				return Object(s.e)(u.b) ? o.a.createElement("span", {
					className: n
				}, e.children) : e.isExternal || e.isLivestreaming || e.forceOpenInNewTab ? o.a.createElement("a", f({}, null !== (t = e.linkProps) && void 0 !== t ? t : {}, {
					className: n,
					href: `${i.a.redditUrl}/user/${e.author}`,
					rel: "noopener noreferrer",
					target: "_blank",
					onClick: g
				}), e.children) : e.isAuthorDeleted ? o.a.createElement("span", {
					className: Object(a.a)(b.a.deletedAuthorLink, e.className)
				}, e.children) : o.a.createElement(d.a, f({}, null !== (r = e.linkProps) && void 0 !== r ? r : {}, {
					className: n,
					style: e.style,
					to: {
						pathname: `/user/${e.author}/`,
						state: p
					},
					onClick: g
				}), e.children)
			}
		},
		"./src/reddit/components/Badges/UserDisplay/index.m.less": function(e, t, r) {
			e.exports = {
				addCustom: "LalRrQILNjt65y-p-QlWH",
				addCustomLink: "_3J2-xIxxxP9ISzeLWCOUVc",
				badgeHovercard: "FyLpt0kIWG1bTDWZ8HIL1",
				image: "_2ntJEAiwKXBGvxrJiqxx_2",
				wrapper: "_1SqBC7PQ5dMOdF0MhPIkA8"
			}
		},
		"./src/reddit/components/Badges/UserDisplay/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return I
			})), r.d(t, "c", (function() {
				return M
			})), r.d(t, "a", (function() {
				return S
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				i = r("./src/config.ts"),
				c = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				l = r("./src/reddit/actions/tooltip.ts"),
				u = r("./src/higherOrderComponents/makeAsync.tsx");
			var m = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("SubredditPremiumBadgeHovercardTooltip").then(r.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/tooltip.tsx")).then(e => e.default)
				}),
				p = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = r("./src/reddit/featureFlags/index.ts"),
				f = r("./src/reddit/helpers/economics/sortBadges.ts"),
				h = r("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				v = r("./src/reddit/models/Badge/index.ts");
			var g = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("CustomBadgeHovercardTooltip").then(r.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				x = r("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				O = r.n(x);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const j = "add-custom-badge-tooltip",
				_ = 100,
				w = 2 * _,
				C = 24;
			class I extends o.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, _)), this.mouseOverTooltip = e
					}, this.handleMouseLeave = () => {
						clearTimeout(this.exitTimeout), clearTimeout(this.enterTimeout), this.mouseOverTooltip = void 0, this.exitTimeout = window.setTimeout(() => {
							this.mouseOverTooltip || (clearTimeout(this.enterTimeout), this.props.onHideTooltip())
						}, w)
					}
				}
				render() {
					const {
						badges: e
					} = this.props;
					if (this.props.usePlaceholder && !e.length) return o.a.createElement("img", {
						className: Object(c.a)(O.a.image, this.props.className),
						src: `${i.a.assetPath}/img/badges/placeholder.png`
					});
					const t = `${j}-${this.props.uniqueIdentifier}`,
						r = this.props.badgeSize || C;
					return o.a.createElement(n.Fragment, null, this.props.showAddCustom && o.a.createElement("div", {
						className: O.a.wrapper,
						id: t,
						onMouseEnter: () => this.handleMouseEnter(t),
						onMouseLeave: () => this.handleMouseLeave()
					}, o.a.createElement("button", {
						className: O.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, o.a.createElement(h.a, {
						className: O.a.addCustom
					})), o.a.createElement(g, {
						className: O.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: t,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(f.a)(e).map(e => {
						const t = Object(v.d)(r, r, e),
							s = `badges-display-${e.id}-${this.props.uniqueIdentifier}`;
						return o.a.createElement(n.Fragment, {
							key: `badges-fragement-${e.id}`
						}, o.a.createElement("div", {
							className: Object(c.a)(O.a.wrapper, this.props.className),
							key: `wrapper-${e.id}`,
							onMouseEnter: () => this.handleMouseEnter(s),
							onMouseLeave: () => this.handleMouseLeave()
						}, o.a.createElement("img", {
							className: O.a.image,
							id: s,
							key: e.id,
							src: t.url2x,
							srcSet: `${t.url}, ${t.url2x} 2x`,
							style: {
								height: `${r}px`
							}
						}), this.props.useHovercard ? o.a.createElement(m, {
							badge: e,
							correlationId: this.props.correlationId,
							className: O.a.badgeHovercard,
							key: `tooltip-${e.id}`,
							subredditId: this.props.subredditId,
							targetPosition: ["left", "bottom"],
							tooltipId: s,
							tooltipPosition: ["left", "top"],
							userId: "userId" in this.props ? this.props.userId : void 0
						}) : o.a.createElement(p.c, {
							caretOnTop: !0,
							key: `tooltip-${e.id}`,
							tooltipId: s,
							text: e.title
						})))
					}))
				}
			}
			const P = [],
				k = Object(a.c)({
					badgeIds: (e, {
						subredditId: t,
						userId: r
					}) => {
						var n;
						return (null === (n = e.users.appliedBadges[r]) || void 0 === n ? void 0 : n[t]) || P
					},
					allBadges: e => e.badges.models,
					useHovercard: b.d.spSpecialMemberships
				}),
				E = Object(a.c)({
					badgeIds: (e, {
						subredditId: t
					}) => {
						var r;
						const n = e.user.account;
						return n && (null === (r = e.users.appliedBadges[n.id]) || void 0 === r ? void 0 : r[t]) || P
					},
					allBadges: e => e.badges.models,
					useHovercard: b.d.spSpecialMemberships
				}),
				A = e => ({
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(l.i)()),
					onOpenUploadDialog: () => e(Object(d.j)())
				});

			function T(e) {
				const {
					badgeIds: t,
					allBadges: r,
					...n
				} = e, s = t.map(e => r[e]).filter(Boolean);
				return o.a.createElement(I, y({
					badges: s
				}, n))
			}
			const M = Object(s.b)(k, A)(T),
				S = Object(s.b)(E, A)(T)
		},
		"./src/reddit/components/Econ/Audio/index.m.less": function(e, t, r) {
			e.exports = {
				liveContainer: "reBgd-KYxGiWr_ZyzPgr_",
				userRow: "poHPrsWD-JtPCRh7foOm-",
				isListener: "_3DcaFqbAKhkVLYT6i2vxLy",
				listener: "_3fwbxY1I7EhKfr8MK7xT0S",
				speaker: "_1zEocOo_0euorSuKdx4-t2",
				snoovatar: "_23HWId-tu5O6LulDxLoVD1",
				userIcon: "Xzl_H3G7Qyd756Y0rQz4w",
				classic: "_2XdJHCLvUWJ2gdGBnugD5t",
				buttonContainer: "_2yhW3k4B2CUUSvt-3mqV3S",
				muteContainer: "_3mxKqH41iEa2lxIov7Eup-",
				muteIcon: "_18bneLE5nnOdUrY8P-eepo",
				fullRow: "_2cJzNEK-EGk9V7LDTIEFb-",
				endedContainer: "_21e_ZHJXEi7zMZ6XWWBz",
				speakerRings: "_1XlH7yy1d0pGBQ0hDDAaDv",
				fadein: "gReZnzbKn95aY9xCmFx8M",
				reverb: "_3ZoXC3S9OH5sdTAi4tFt7Z",
				fadeout: "_3os88AwHIpr1NBABjT_1zz",
				nightMode: "z6LY0qX0g0puWE-RPF8XB",
				liveClassicContainer: "_3JLTqaLlFv8aPfzi9eQazu",
				classicSpeaker: "QsNKjj4EDQH2hYFYQB6T4",
				endedClassicContainer: "_2YXJIDv8TLzRj5vNdYs-_t",
				metaStatus: "OvWqIzFfbWF0I-5FMZ18I",
				isLive: "_3Vqz8YzNczoVWpOtpwXAit",
				processingButton: "nxYqAuGeco2RA9q0e9ECw"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.m.less": function(e, t, r) {
			e.exports = {
				badge: "ekl2maIRbrCrsYFt1OwaE"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return h
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				i = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				d = r("./src/reddit/actions/tooltip.ts"),
				l = r("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				u = r("./src/reddit/featureFlags/index.ts"),
				m = r("./src/reddit/hooks/useUserContext.ts"),
				p = r("./src/reddit/selectors/economics.ts"),
				b = r("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.m.less"),
				f = r.n(b);

			function h(e) {
				var t, r;
				const {
					currentUser: n
				} = Object(m.a)(), s = null !== (t = e.badges) && void 0 !== t ? t : Object(p.i)(e.badgeIds, null !== (r = e.allBadges) && void 0 !== r ? r : {});
				return s.length ? o.a.createElement(l.b, {
					useHovercard: !0,
					badges: s,
					badgeSize: e.badgeSize,
					className: Object(i.a)(e.className, f.a.badge),
					uniqueIdentifier: e.uniqueIdentifier,
					showAddCustom: e.customBadgesEnabled && e.premiumEnabled && e.showAddCustom && s.length < 2 && (null == n ? void 0 : n.id) === e.userId,
					subredditId: e.subredditId,
					userId: e.userId,
					onShowTooltip: e.onShowTooltip,
					onHideTooltip: e.onHideTooltip,
					onOpenUploadDialog: e.onOpenUploadDialog
				}) : null
			}
			const v = [];
			t.b = Object(s.b)(() => Object(a.c)({
				badgeIds: (e, {
					subredditId: t,
					userId: r
				}) => {
					var n;
					return (null === (n = e.users.appliedBadges[r]) || void 0 === n ? void 0 : n[t]) || v
				},
				allBadges: e => e.badges.models,
				customBadgesEnabled: u.d.spCustomBadgesAndEmotes,
				premiumEnabled: e => u.d.spSpecialMemberships(e)
			}), e => ({
				onShowTooltip: t => e(Object(d.f)({
					tooltipId: t
				})),
				onHideTooltip: () => e(Object(d.i)()),
				onOpenUploadDialog: () => e(Object(c.j)())
			}))(h)
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				i = r("./src/reddit/selectors/economics.ts");

			function c(e) {
				const {
					badges: t
				} = e, r = t[t.length - 1];
				return r && !e.ignore ? o.a.cloneElement(e.children, {
					style: r.extra && r.extra.style && r.extra.style.color ? {
						...e.children.props.style || {},
						color: r.extra.style.color,
						fontWeight: 700
					} : e.children.props.style
				}) : e.children
			}
			t.b = Object(s.b)(() => Object(a.c)({
				badges: (e, {
					subredditId: t,
					userId: r
				}) => Object(i.q)(e, t, r)
			}))(c)
		},
		"./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/higherOrderComponents/makeAsync.tsx");
			const o = Object(n.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => r.e("GovernanceUserPublicPointsDisplay").then(r.bind(null, "./src/reddit/components/Governance/UserPublicPointsDisplay/index.tsx")).then(e => e.default)
			});
			t.a = o
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./src/higherOrderComponents/makeAsync.tsx"),
				o = r("./src/lib/loadWithRetries/index.ts");
			const s = "UserInfoTooltip";
			t.b = Object(n.a)({
				ErrorComponent: () => null,
				getComponent: () => Object(o.a)(() => Promise.all([r.e("AuthorHovercard~Reddit"), r.e("AuthorHovercard")]).then(r.bind(null, "./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/index.tsx"))).then(e => e.default),
				LoadingComponent: () => null
			})
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./src/higherOrderComponents/makeAsync.tsx"),
				a = r("./src/lib/loadWithRetries/index.ts");
			const i = "UserInfoTooltip",
				c = e => e.alwaysShowChildren ? o.a.createElement(o.a.Fragment, null, e.children) : null;
			t.b = Object(s.a)({
				ErrorComponent: c,
				getComponent: () => Object(a.a)(() => Promise.all([r.e("AuthorHovercard~Reddit"), r.e("AuthorHovercard")]).then(r.bind(null, "./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx"))).then(e => e.default),
				LoadingComponent: c
			})
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.m.less": function(e, t, r) {
			e.exports = {
				HoverDiv: "_2mHuuvyV9doV3zwbZPtIPG",
				hoverDiv: "_2mHuuvyV9doV3zwbZPtIPG"
			}
		},
		"./src/reddit/components/Hovercards/HoverDiv/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return O
			})), r.d(t, "b", (function() {
				return y
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./src/lib/lessComponent.tsx"),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				c = r("./src/reddit/actions/profile/index.ts"),
				d = r("./src/reddit/actions/tooltip.ts"),
				l = r("./src/reddit/selectors/tooltip.ts");
			const u = Object(i.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var m = Object(a.b)(u, (e, t) => ({
					onCloseUserDropdown: () => e(Object(d.i)()),
					onOpenUserDropdown: async () => {
						e(Object(d.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && (await e(Object(c.d)(t.authorOrSubredditName)), t.sendHoverEvent(), t.onHover && t.onHover())
					}
				})),
				p = r("./src/reddit/actions/subreddit.ts");
			const b = Object(i.c)({
				dropdownIsOpen: (e, t) => Object(l.b)(t.tooltipId)(e)
			});
			var f = Object(a.b)(b, (e, t) => ({
					onCloseUserDropdown: () => e(Object(d.i)()),
					onOpenUserDropdown: async () => {
						var r;
						e(Object(d.f)({
							tooltipId: t.tooltipId
						})), t.authorOrSubredditName && e(Object(p.u)(t.authorOrSubredditName)), null === (r = t.onShow) || void 0 === r || r.call(t)
					}
				})),
				h = r("./src/reddit/components/Hovercards/HoverDiv/index.m.less"),
				v = r.n(h);
			class g extends o.a.Component {
				constructor() {
					super(...arguments), this.closeHovercardTimeoutId = 0, this.openHovercardTimeoutId = 0, this.isHovering = !1, this.hoverEl = void 0, this.onHoverElMouseEnter = () => {
						this.isHovering = !0
					}, this.onHoverElMouseLeave = () => {
						this.isHovering = !1
					}, this.onMouseEnter = e => {
						this.closeHovercardTimeoutId && clearTimeout(this.closeHovercardTimeoutId), this.openHovercardTimeoutId = window.setTimeout(() => {
							this.isHovering || this.props.dropdownIsOpen || this.props.onOpenUserDropdown()
						}, 500)
					}, this.onMouseLeave = () => {
						this.props.onClick || (this.openHovercardTimeoutId && clearTimeout(this.openHovercardTimeoutId), this.closeHovercardTimeoutId = window.setTimeout(() => {
							this.isHovering || this.props.onCloseUserDropdown()
						}, 300))
					}, this.onClick = e => {
						this.props.onlyLeaveOnClick && (this.isHovering ? clearTimeout(this.openHovercardTimeoutId) : clearTimeout(this.closeHovercardTimeoutId)), this.props.onClick && this.props.onClick(e)
					}
				}
				componentDidMount() {
					const e = document.getElementById(this.props.hoverId);
					e && (this.hoverEl = e, this.addHoverListeners(this.hoverEl))
				}
				componentWillUnmount() {
					this.hoverEl && this.removeHoverListeners(this.hoverEl), this.hoverEl = void 0, this.openHovercardTimeoutId && window.clearTimeout(this.openHovercardTimeoutId)
				}
				addHoverListeners(e) {
					e.addEventListener("mouseenter", this.onHoverElMouseEnter), this.props.onlyLeaveOnClick || e.addEventListener("mouseleave", this.onHoverElMouseLeave)
				}
				removeHoverListeners(e) {
					e.removeEventListener("mouseenter", this.onHoverElMouseEnter), this.props.onlyLeaveOnClick || e.removeEventListener("mouseleave", this.onHoverElMouseLeave)
				}
				render() {
					const {
						children: e,
						className: t
					} = this.props;
					return o.a.createElement("div", {
						className: t,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onClick: this.onClick
					}, e)
				}
			}
			const x = s.a.wrapped(g, "HoverDiv", v.a),
				O = m(x),
				y = f(x)
		},
		"./src/reddit/components/Hovercards/helpers.m.less": function(e, t, r) {
			e.exports = {
				UserActionItem: "_3HFQBVggvR9KDsFzm7jIdr",
				userActionItem: "_3HFQBVggvR9KDsFzm7jIdr"
			}
		},
		"./src/reddit/components/Hovercards/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return c
			}));
			var n = r("./src/lib/lessComponent.tsx"),
				o = r("./src/reddit/layout/row/Inline/index.tsx"),
				s = r("./src/reddit/components/Hovercards/helpers.m.less"),
				a = r.n(s);
			const i = n.a.wrapped(o.a, "UserActionItem", a.a),
				c = e => {
					const {
						author: t,
						itemId: r,
						subredditName: n,
						tooltipIdPrefix: o,
						tooltipType: s
					} = e;
					let a = o;
					return r && (a = `${a}--${r}`), s && (a = `${a}--${s}`), t && (a = `${a}--${t}`), n && (a = `${a}--${n}`), a
				}
		},
		"./src/reddit/components/InfoTextTooltip/Hooked.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/components/InfoTextTooltip/hooked.m.less"),
				i = r.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = o.a.memo((function({
				visible: e,
				...t
			}) {
				const [r, a] = Object(n.useState)(e);
				return Object(n.useEffect)(() => {
					let t = window.setTimeout(() => {
						t = void 0, a(e)
					}, 0);
					return () => {
						t && window.clearTimeout(t), a(!1)
					}
				}, [e]), e ? o.a.createElement("div", c({
					className: Object(s.a)(i.a.tooltip, t.className, {
						[i.a.visible]: r
					})
				}, t.popperProps), t.children, r && o.a.createElement("div", c({
					className: i.a.arrow
				}, t.arrowProps))) : null
			}))
		},
		"./src/reddit/components/InfoTextTooltip/hooked.m.less": function(e, t, r) {
			e.exports = {
				arrow: "_1jsc29CjRXZWjd2tr0Ji0Y",
				tooltip: "_2J_zB4R1FH2EjGMkQjedwc",
				visible: "u6HtAZu8_LKL721-EnKuR"
			}
		},
		"./src/reddit/components/LastAuthorModNoteIcon/index.m.less": function(e, t, r) {
			e.exports = {
				hoverContainer: "_282iT6zlGPTjxs4_wnUw_R",
				showBackground: "RaBr7sOrqehAgubv6f1hE",
				isNightMode: "_1-EjTsf9H83ryPyVjAZp2A"
			}
		},
		"./src/reddit/components/LastAuthorModNoteIcon/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/actions/tooltip.ts"),
				c = r("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx"),
				d = r("./src/reddit/components/Hovercards/helpers.ts"),
				l = r("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				u = r("./src/reddit/helpers/trackers/modNote.ts"),
				m = r("./src/reddit/hooks/useTracking.ts"),
				p = r("./src/reddit/components/ModNoteItem/index.tsx"),
				b = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				f = r("./src/reddit/controls/Dropdown/index.tsx"),
				h = r("./src/reddit/components/LastAuthorModNoteTooltip/index.m.less"),
				v = r.n(h);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const x = Object(b.a)(f.a),
				O = ({
					modNoteData: e,
					isOverlay: t,
					isPost: r,
					isNightMode: s,
					onClick: i,
					subredditId: c
				}) => {
					const d = t && r,
						l = Object(m.a)();
					return Object(n.useEffect)(() => (l(Object(u.v)({
						modNote: e,
						subredditId: c
					})), () => l(Object(u.q)({
						modNote: e,
						subredditId: c
					}))), []), o.a.createElement(o.a.Fragment, null, d && o.a.createElement("div", {
						className: v.a.TopSpacer
					}), o.a.createElement("div", {
						className: v.a.backgroundContrast
					}, o.a.createElement(p.b, {
						className: Object(a.a)(v.a.ModNoteItem, {
							[v.a.isNightMode]: s
						}),
						modNote: e,
						subredditId: c,
						context: p.a.LastAuthorUserNoteTooltip,
						onClick: i
					})), !d && o.a.createElement("div", {
						className: v.a.BottomSpacer
					}))
				},
				y = e => {
					const t = e.isOverlay && e.isPost,
						r = t ? ["center", "bottom"] : ["center", "top"],
						n = t ? ["center", "top"] : ["center", "bottom"];
					return o.a.createElement(x, g({
						className: v.a.dropdown,
						id: e.hoverId,
						isOpen: e.dropdownIsOpen,
						targetPosition: r,
						tooltipPosition: n,
						style: {
							backgroundColor: "transparent",
							border: "none",
							boxShadow: "none"
						}
					}, e), o.a.createElement(O, e))
				};
			y.WrappedComponent = O;
			var j = y,
				_ = r("./src/reddit/components/PostTopMeta/index.tsx"),
				w = r("./src/reddit/helpers/isPost.ts"),
				C = r("./src/reddit/hooks/useIsOverlay.ts"),
				I = r("./src/reddit/icons/fonts/index.tsx"),
				P = r("./src/reddit/models/ModUserNotes/index.ts"),
				k = r("./src/reddit/selectors/modUserNotes.ts"),
				E = r("./src/reddit/selectors/tooltip.ts"),
				A = r("./src/reddit/selectors/user.ts"),
				T = r("./src/reddit/components/LastAuthorModNoteIcon/index.m.less"),
				M = r.n(T);
			t.a = ({
				postOrComment: e,
				className: t
			}) => {
				var r;
				const u = Object(C.a)(),
					m = Object(P.g)(e.id, u),
					p = Object(P.h)(e),
					b = Object(s.e)(A.bb),
					f = Object(s.e)(t => Object(k.a)(t, e.authorId, p)),
					h = Object(s.e)(e => Object(E.a)(e) === m),
					v = Object(s.d)(),
					g = Object(n.useCallback)(() => v(Object(i.h)({
						tooltipId: m
					})), [v, m]),
					x = Object(n.useCallback)(() => v(Object(i.i)()), [v]),
					O = Object(n.useCallback)(() => {
						const t = Object(d.b)({
							author: null == f ? void 0 : f.user.displayName,
							itemId: e.id,
							tooltipIdPrefix: c.a,
							tooltipType: u ? _.c.Lightbox : void 0
						});
						v(Object(i.h)({
							tooltipId: t,
							args: {
								isModNotesView: !0
							}
						}))
					}, [e, f, v, u]);
				if (!f) return null;
				const y = "label" in f && (null == f ? void 0 : f.label) || P.c,
					T = Object(I.b)(P.e[y], {
						isFilled: !0
					}),
					S = `${m}-hover-id`;
				return o.a.createElement(l.a, {
					className: Object(a.a)(t, M.a.hoverContainer, {
						[M.a.isNightMode]: b,
						[M.a.showBackground]: h
					}),
					tooltipId: m,
					authorOrSubredditName: (null === (r = f.operator) || void 0 === r ? void 0 : r.displayName) || "",
					hoverId: S,
					sendHoverEvent: () => {},
					onClick: e => {
						e.stopPropagation(), g()
					}
				}, o.a.createElement(T, {
					style: {
						color: P.d[y],
						fontSize: "12px",
						lineHeight: "12px"
					}
				}), o.a.createElement("div", {
					id: m,
					onMouseLeave: x
				}, o.a.createElement(j, {
					dropdownIsOpen: h,
					hoverId: S,
					modNoteData: f,
					isOverlay: u,
					isPost: Object(w.a)(e.id),
					isNightMode: b,
					subredditId: p,
					tooltipId: m,
					onClick: O
				})))
			}
		},
		"./src/reddit/components/LastAuthorModNoteTooltip/index.m.less": function(e, t, r) {
			e.exports = {
				dropdown: "GPstmeFeO4czqJR2zs1mz",
				backgroundContrast: "_3r14JJj4Xkm_GnndoMhqik",
				ModNoteItem: "BQRl_o5B2PQPF96yT1qZc",
				modNoteItem: "BQRl_o5B2PQPF96yT1qZc",
				isNightMode: "_2NlJQ9MQqeRtsH7eKMyZVd",
				BottomSpacer: "sLQ_5L4_zMOcWEY-pLAkI",
				bottomSpacer: "sLQ_5L4_zMOcWEY-pLAkI",
				TopSpacer: "_2nXhIGpJFqVn_qWacMlFhL",
				topSpacer: "_2nXhIGpJFqVn_qWacMlFhL"
			}
		},
		"./src/reddit/components/ModNoteItem/index.m.less": function(e, t, r) {
			e.exports = {
				modNote: "pGw5f7WKM2dO9R0Aotv_x",
				header: "_3fOY2z5qmhIMTA5pHRw3HR",
				label: "_1s8o7TA7uhyKDAg_gBrROJ",
				labelIcon: "Z6i_tRKSyOfgORihc8AE2",
				note: "_16zfBhiOYAW7fHRK1jNOh",
				noLabel: "_1AvILjWpUTsm2yDYqIToxg",
				metadata: "OtVR2-taBTlpgc-PYOW3y",
				operatorBlock: "_15WP0iKlbJ_q8GgQVkCs0c",
				userIcon: "_399VmO76IeqVl7VMLjAdBG",
				createdDate: "_1wtfZke59yzfGrkBaSwBaO",
				deleteButton: "xqKTVgMXnrQEGC3NlgRNr",
				link: "_2Dl07XZ7LNM7tsrbGG4Ym1"
			}
		},
		"./src/reddit/components/ModNoteItem/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var n, o = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/helpers/trackers/modNote.ts"),
				l = r("./src/reddit/hooks/useTracking.ts"),
				u = r("./src/reddit/components/UserIcon/index.tsx"),
				m = r("./src/reddit/controls/InternalLink/index.tsx"),
				p = r("./src/reddit/hooks/useLocale.ts"),
				b = r("./src/reddit/icons/fonts/index.tsx"),
				f = r("./src/reddit/models/ModUserNotes/index.ts"),
				h = r("./src/reddit/selectors/user.ts"),
				v = r("./src/reddit/components/ModNoteItem/index.m.less"),
				g = r.n(v);
			! function(e) {
				e.LastAuthorUserNoteTooltip = "LastAuthorUserNoteTooltip", e.ModIdCard = "ModIdCard"
			}(n || (n = {}));
			t.b = e => {
				var t, r, n;
				const s = Object(i.e)(h.bb),
					{
						className: v,
						modNote: x,
						onClick: O,
						subredditId: y,
						context: j
					} = e,
					_ = "label" in x && x.label || f.c,
					w = "note" in x ? x.note : void 0,
					C = Object(b.b)(f.e[_ || "bot"], {
						isFilled: !0
					}),
					I = Object(p.a)(),
					P = new Intl.DateTimeFormat(I, {
						month: "short",
						day: "numeric",
						year: "numeric",
						hour: "numeric",
						minute: "numeric"
					}).format(new Date(x.createdAt)),
					k = x.commentInfo,
					{
						postInfo: E
					} = x,
					A = E ? E.permalink : k ? k.permalink : void 0,
					T = Object(b.b)("external_link"),
					M = Object(l.a)();
				return a.a.createElement("div", {
					className: Object(c.a)(v, g.a.modNote),
					onClick: e => {
						e.stopPropagation(), O && O(e), (() => {
							const e = "LastAuthorUserNoteTooltip" === j && d.d || "ModIdCard" === j && d.h;
							e && M(e({
								modNote: x,
								subredditId: y
							}))
						})()
					},
					style: _ ? {
						backgroundColor: s ? f.b[_] : f.a[_]
					} : {}
				}, _ !== f.c && a.a.createElement("div", {
					className: g.a.header
				}, a.a.createElement("div", {
					className: g.a.label
				}, a.a.createElement(C, {
					className: g.a.labelIcon,
					style: {
						color: f.d[_],
						fontSize: "15px",
						lineHeight: "15px"
					}
				}), f.f[_]())), w && a.a.createElement("div", {
					className: Object(c.a)(g.a.note, {
						[g.a.noLabel]: _ === f.c
					})
				}, w), a.a.createElement("div", {
					className: g.a.metadata
				}, a.a.createElement(m.a, {
					className: g.a.operatorBlock,
					onClick: e => {
						e.stopPropagation(), (() => {
							const e = "LastAuthorUserNoteTooltip" === j && d.m || "ModIdCard" === j && d.n;
							e && M(e({
								modNote: x,
								subredditId: y
							}))
						})()
					},
					to: `/user/${null===(t=x.operator)||void 0===t?void 0:t.displayName}/`
				}, a.a.createElement(u.a, {
					className: g.a.userIcon,
					userName: (null === (r = x.operator) || void 0 === r ? void 0 : r.displayName) || "",
					isNSFW: !1
				}), "u/", null === (n = x.operator) || void 0 === n ? void 0 : n.displayName), a.a.createElement("span", {
					className: g.a.createdDate
				}, o.fbt._("on {createdDate}", [o.fbt._param("createdDate", P)], {
					hk: "2VoP7K"
				})), A && a.a.createElement("a", {
					className: g.a.link,
					href: A || "",
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e => {
						e.stopPropagation(), (() => {
							const e = "LastAuthorUserNoteTooltip" === j && d.e || "ModIdCard" === j && d.f;
							e && M(e({
								modNote: x,
								subredditId: y
							}))
						})()
					}
				}, a.a.createElement(T, {
					className: g.a.linkIcon,
					style: {
						color: s ? "white" : "black",
						fontSize: "14px",
						opacity: .3
					}
				}))))
			}
		},
		"./src/reddit/components/ModalStyledComponents/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/ModalStyledComponents/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return p
			})), r.d(t, "e", (function() {
				return b
			})), r.d(t, "n", (function() {
				return f
			})), r.d(t, "p", (function() {
				return h
			})), r.d(t, "o", (function() {
				return v
			})), r.d(t, "f", (function() {
				return g
			})), r.d(t, "m", (function() {
				return x
			})), r.d(t, "h", (function() {
				return O
			})), r.d(t, "j", (function() {
				return y
			})), r.d(t, "k", (function() {
				return j
			})), r.d(t, "g", (function() {
				return _
			})), r.d(t, "i", (function() {
				return w
			})), r.d(t, "q", (function() {
				return C
			})), r.d(t, "d", (function() {
				return I
			})), r.d(t, "l", (function() {
				return P
			})), r.d(t, "t", (function() {
				return k
			})), r.d(t, "u", (function() {
				return E
			})), r.d(t, "r", (function() {
				return A
			})), r.d(t, "a", (function() {
				return T
			})), r.d(t, "s", (function() {
				return M
			})), r.d(t, "c", (function() {
				return S
			}));
			var n = r("./src/lib/classNames/index.ts"),
				o = r("./src/lib/lessComponent.tsx"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				i = r("./src/reddit/controls/Button/index.tsx"),
				c = r("./src/reddit/controls/Input/ModalInput.tsx"),
				d = r("./src/reddit/icons/svgs/Close/index.tsx"),
				l = r("./src/reddit/components/ModalStyledComponents/index.m.less"),
				u = r.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const p = o.a.wrapped(d.a, "CloseIcon", u.a),
				b = o.a.section("ModalBody", u.a),
				f = o.a.section("ModalPostPreview", u.a),
				h = o.a.p("ModalText", u.a),
				v = o.a.div("ModalSmallText", u.a),
				g = o.a.div("ModalDescriptionText", u.a),
				x = o.a.div("ModalMetaText", u.a),
				O = o.a.label("ModalFormItem", u.a),
				y = o.a.wrapped(c.a, "ModalInput", u.a),
				j = o.a.label("ModalInputLabel", u.a),
				_ = o.a.footer("ModalFooter", u.a),
				w = o.a.header("ModalHeader", u.a),
				C = o.a.div("ModalTitle", u.a),
				I = o.a.div("ModalAnnotation", u.a),
				P = o.a.div("ModalMain", u.a),
				k = o.a.textarea("TextArea", u.a),
				E = o.a.wrapped(i.l, "WarningButton", u.a),
				A = o.a.wrapped(i.l, "PrimaryButton", u.a),
				T = o.a.wrapped(i.o, "CancelButton", u.a),
				M = o.a.wrapped(i.r, "RemoveButton", u.a),
				S = ({
					className: e,
					...t
				}) => a.a.createElement(i.t, m({
					kind: i.b.Button,
					priority: i.c.Primary,
					className: Object(n.a)(u.a.ConfirmButton, e)
				}, t))
		},
		"./src/reddit/components/PostTopMeta/index.m.less": function(e, t, r) {
			e.exports = {
				icon: "_2kj4VmBwjxriyYFAErhLcT",
				iconTooltipHoverBox: "FCXb7huCxyBIXH7T23q_k",
				badge: "_2v3rPYFjifVGM7CfOh1dOl",
				container: "_3AStxql1mQsrZuUIFP9xSg",
				adminIcon: "s46mo3ittWDxpPuCSXJ_T",
				contractorIcon: "MMQAY3zdk1u4R9hIKTklf",
				premiumIcon: "_6W0v52Yp6BzEfoWlrczS8",
				crosspostIcon: "_3hh-iGjzOv78L_7t_PUHev",
				userIcon: "_1ra0Iw9wwPoS0QhWWssr-u",
				link: "eQgJJIfdY4JNXam_N622j",
				isDeleted: "_1pHpG_nGDGKayS5oFfQGDX",
				publicWallet: "SxdIdV2SgMWcIFG6Qsk0Q",
				authorLink: "_2tbHP6ZydRpjI44J3syuqC",
				isActionFont: "_1qzCGTSJOhg8noWqRayhmN",
				outboundLink: "_3V0C4FGg6153xIBQjwsycq",
				flairContainer: "NAURX0ARMmhJ5eqxQrlQW",
				externalLink: "_3jOxDPIQ0KaOWpzvSQo-1s",
				sponsored: "_1iAifs5p5MzPoJz5YrErUW",
				text: "_2fCzxBE1dlMh4OFc7B3Dun",
				MetaSeparator: "_3V4xlrklKBP2Hg51ejjjvz",
				metaSeparator: "_3V4xlrklKBP2Hg51ejjjvz",
				powerupBadge: "_22mcWwgVXFmw2-GrK4ZsJd",
				powerupIcon: "_1QXVZCgv3qdc2eb_RSi7qB"
			}
		},
		"./src/reddit/components/PostTopMeta/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return ve
			})), r.d(t, "e", (function() {
				return ge
			})), r.d(t, "a", (function() {
				return xe
			})), r.d(t, "b", (function() {
				return je
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/ads/index.ts"),
				i = r("./src/lib/classNames/index.ts"),
				c = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = r("./src/lib/lessComponent.tsx"),
				u = r("./src/reddit/actions/gold/powerups.ts"),
				m = r("./src/reddit/actions/post.ts"),
				p = r("./src/reddit/actions/profile/index.ts"),
				b = r("./src/reddit/constants/experiments.ts"),
				f = r("./src/reddit/helpers/isCrosspost.ts"),
				h = r("./src/reddit/helpers/trackers/powerups.ts"),
				v = r("./src/reddit/hooks/useInfoTextTooltip.ts"),
				g = r("./src/reddit/hooks/useTracking.ts"),
				x = r("./src/reddit/icons/svgs/Crosspost/index.tsx"),
				O = r("./src/reddit/icons/svgs/Powerup/index.tsx"),
				y = r("./src/reddit/components/AuthorLink/index.tsx"),
				j = r("./node_modules/fbt/lib/FbtPublic.js"),
				_ = r("./src/reddit/models/Audio/index.ts"),
				w = r("./src/reddit/components/Econ/Audio/index.m.less"),
				C = r.n(w);
			var I = ({
					post: e
				}) => {
					const {
						audioRoom: t
					} = e;
					if (!t) return null;
					const {
						recordingStatus: r
					} = t, n = [_.a.NotAvailable, _.a.Removed].includes(null != r ? r : _.a.NotAvailable);
					return !t.isLive && n ? null : o.a.createElement(o.a.Fragment, null, o.a.createElement("span", null, "• "), o.a.createElement("span", {
						"data-testid": "audio-meta-status",
						className: Object(i.a)(C.a.metaStatus, {
							[C.a.isLive]: t.isLive
						})
					}, t.isLive && j.fbt._("Live", null, {
						hk: "1wPVEx"
					}), !t.isLive && r === _.a.Available && j.fbt._("Recording", null, {
						hk: "1bhFSx"
					}), !t.isLive && r === _.a.Processing && j.fbt._("Processing...", null, {
						hk: "2MMuzJ"
					})))
				},
				P = r("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				k = r("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				E = r("./src/reddit/components/Flair/index.tsx"),
				A = r("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				T = r("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				M = r("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				S = r("./src/reddit/components/HumanDate/index.tsx"),
				N = r("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				F = r("./src/reddit/components/JSAPIContainers/index.tsx"),
				L = r("./src/reddit/components/LastAuthorModNoteIcon/index.tsx"),
				B = r("./src/reddit/components/QuarantinedLabel/index.tsx"),
				H = r("./src/reddit/components/SponsoredLabel/index.tsx"),
				D = r("./src/reddit/components/SubredditNameLink/index.tsx"),
				R = r("./src/reddit/constants/posts.ts"),
				U = r("./src/reddit/contexts/InsideOverlay.tsx"),
				G = r("./src/reddit/controls/MetaSeparator/index.tsx"),
				q = r("./src/lib/portal/index.tsx"),
				W = r("./src/reddit/constants/elementIds.ts"),
				z = o.a.memo((function({
					children: e
				}) {
					const [t, r] = Object(n.useState)(!1);
					return Object(n.useEffect)(() => (r(!0), () => r(!1)), []), t ? o.a.createElement(q.a, {
						container: document.getElementById(W.d)
					}, o.a.Children.only(e)) : null
				})),
				V = r("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				K = r("./src/reddit/helpers/styles/smartTextColor.ts"),
				Q = r("./src/reddit/hooks/useClickSourceData.ts"),
				J = r("./src/reddit/icons/fonts/helpers.tsx"),
				Y = r("./src/reddit/icons/fonts/commonStyles.m.less"),
				X = r.n(Y);
			var $ = e => o.a.createElement("i", {
					className: Object(i.a)(Object(J.b)("admin", e.isFilled), X.a.adminIcon, e.className),
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, o.a.createElement(J.a, null, e.desc)),
				Z = (r("./src/reddit/icons/fonts/Premium/index.tsx"), r("./src/reddit/components/UserIcon/index.tsx")),
				ee = r("./src/reddit/constants/postLayout.ts"),
				te = r("./src/reddit/contexts/PageLayer/index.tsx"),
				re = r("./src/reddit/models/Flair/index.ts"),
				ne = r("./src/reddit/models/NewStructuredStyles/index.ts"),
				oe = r("./src/reddit/models/Post/index.ts"),
				se = r("./src/reddit/models/Subreddit/index.ts"),
				ae = r("./src/reddit/selectors/authorFlair.ts"),
				ie = r("./src/reddit/selectors/experiments/adHeaderExperiment.ts"),
				ce = r("./src/reddit/selectors/experiments/econ/index.ts"),
				de = r("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				le = r("./src/reddit/selectors/gold/powerups/index.ts"),
				ue = r("./src/reddit/selectors/platform.ts"),
				me = r("./src/reddit/selectors/userFlair.ts"),
				pe = r("./src/reddit/components/PostTopMeta/index.m.less"),
				be = r.n(pe);
			const {
				fbt: fe
			} = r("./node_modules/fbt/lib/FbtPublic.js"), he = {
				placement: "top"
			};
			var ve;
			! function(e) {
				e.StickyPost = "sticky", e.Lightbox = "lightbox", e.TopAwardedModal = "topAwarded"
			}(ve || (ve = {}));
			const ge = e => Object(K.a)(Object(V.a)(e), ne.a.metaText, ne.b.metaText),
				xe = l.a.wrapped(G.b, "MetaSeparator", be.a),
				Oe = l.a.span("text", be.a),
				ye = Object(te.u)(),
				je = e => {
					const t = Object(v.a)(he),
						r = fe._("Reddit admin, speaking officially", null, {
							hk: "3vg8wE"
						}),
						n = fe._("Reddit contractor", null, {
							hk: "3APwEh"
						}),
						s = !e.isDeleted && e.post.distinguishType === c.G.ADMIN;
					return o.a.createElement(y.a, {
						author: e.post.author,
						className: Object(i.a)(be.a.authorLink, {
							[be.a.isActionFont]: e.showActionFont,
							[be.a.isDeleted]: e.isDeleted
						}),
						"data-click-id": "user",
						forceOpenInNewTab: e.forceOpenInNewTab,
						isAuthorDeleted: e.isDeleted,
						isUnstyled: !0,
						linkProps: {
							"data-testid": "post_author_link"
						},
						onClick: e.onClick,
						style: e.style
					}, `u/${e.post.author}`, s && o.a.createElement(o.a.Fragment, null, o.a.createElement($, {
						className: be.a.adminIcon,
						isFilled: !0,
						desc: r
					}), o.a.createElement("span", {
						className: be.a.iconTooltipHoverBox,
						onMouseOut: t.hide,
						onMouseOver: t.show,
						ref: t.target.ref
					}), o.a.createElement(z, null, o.a.createElement(N.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, r))), e.renderContractorBadge && o.a.createElement(o.a.Fragment, null, o.a.createElement($, {
						className: be.a.contractorIcon,
						isFilled: !0,
						desc: n
					}), o.a.createElement("span", {
						className: be.a.iconTooltipHoverBox,
						onMouseOut: t.hide,
						onMouseOver: t.show,
						ref: t.target.ref
					}), o.a.createElement(z, null, o.a.createElement(N.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, r))), !1)
				},
				_e = o.a.memo((function(e) {
					const {
						className: t,
						forceOpenInNewTab: r,
						isInModNotesExperiment: d,
						isOverlay: l,
						onClickPostAuthor: y,
						onClickPostTimestamp: j,
						pageLayer: w,
						post: C,
						showSub: U = !1,
						showTimestamp: G = !0,
						subredditOrProfile: q,
						tooltipType: W
					} = e, V = Object(s.d)(), K = Object(g.a)(), J = Object(s.e)(ie.a), Y = Object(s.e)(ue.d), X = Object(s.e)(ue.g) || ["popular", "all"].includes(Y || ""), $ = Object(s.e)(de.b), ne = C.isSponsored || Object(a.u)(w), pe = !(!ne || !J || Object(b.vf)(J));
					Object(n.useEffect)(() => {
						pe && V(Object(p.d)(C.author))
					}, []);
					const ve = C.belongsTo.id,
						ye = Object(n.useCallback)(e => Object(ae.a)(e, {
							post: C
						}), [C]),
						_e = Object(s.e)(ye),
						we = Object(Q.a)(),
						Ce = Object(n.useCallback)(e => Object(me.a)(e, {
							subredditId: ve
						}), [ve]),
						Ie = Object(s.e)(Ce),
						Pe = Object(n.useCallback)(e => Object(le.a)(e, {
							subredditId: ve,
							userId: C.authorId
						}), [ve, C.authorId]),
						ke = Object(s.e)(ce.B),
						Ee = Object(s.e)(Pe),
						Ae = Object(n.useCallback)(e => Object(me.e)(e, {
							subredditId: ve
						}), [ve]),
						Te = Object(s.e)(Ae),
						Me = Object(v.a)(he),
						Se = Object(v.a)(he),
						Ne = w && w.meta && w.meta.name === c.Nb.COMMENTS,
						Fe = Object(f.a)(C),
						Le = Te === re.b.Left,
						Be = C.authorIsContractor && !!q && q.type === se.f.EmployeesOnly,
						He = !!q && Ee,
						De = !l && !Ne,
						Re = () => o.a.createElement(xe, {
							className: e.metaSeparatorClassName
						}, "•"),
						Ue = Object(s.e)(e => Object(te.R)(e, {
							pageLayer: w
						})),
						Ge = ee.e[Ue] === ee.d.Card,
						qe = X && Ge || !!Ne,
						We = pe && (X || !!Ne),
						ze = o.a.createElement(o.a.Fragment, null, _e && Le && o.a.createElement("div", {
							className: be.a.flairContainer
						}, o.a.createElement(E.b, {
							disabled: !Ie,
							flair: _e,
							forceSmallEmojis: !0,
							usesCommunityStyles: De
						})), Object(oe.o)(C.author) ? o.a.createElement(je, {
							isDeleted: !0,
							onClick: y,
							post: C,
							renderContractorBadge: Be,
							showActionFont: We,
							style: pe ? {} : {
								color: ge(e)
							}
						}) : o.a.createElement(o.a.Fragment, null, o.a.createElement(P.b, {
							className: be.a.badge,
							subredditId: ve,
							uniqueIdentifier: `${C.id}-${l}`,
							userId: C.authorId
						}), o.a.createElement(T.b, {
							postOrComment: C,
							tooltipType: W
						}, o.a.createElement(k.b, {
							ignore: !!C.distinguishType && C.distinguishType !== c.G.NONE,
							subredditId: ve,
							userId: C.authorId
						}, o.a.createElement(je, {
							forceOpenInNewTab: r,
							onClick: y,
							post: C,
							renderContractorBadge: Be,
							style: pe ? {} : {
								color: ge(e)
							},
							showActionFont: We
						}))), !Object(oe.o)(C.author) && d && o.a.createElement(L.a, {
							postOrComment: C,
							tooltipType: W
						}), He && o.a.createElement(o.a.Fragment, null, o.a.createElement("button", {
							className: be.a.powerupBadge,
							onMouseEnter: Se.show,
							onMouseLeave: Se.hide,
							onClick: () => {
								K(Object(h.J)(W ? "post" : "postlist")), V(Object(u.g)("post_top_supporter_badge"))
							},
							ref: Se.target.ref
						}, o.a.createElement(O.a, {
							className: be.a.powerupIcon
						})), o.a.createElement(z, null, o.a.createElement(N.a, {
							arrowProps: Se.arrowProps,
							popperProps: Se.popperProps,
							visible: Se.visible
						}, fe._("Powerups Top Supporter", null, {
							hk: "1GLWsz"
						}))))), _e && !Le && o.a.createElement("div", {
							className: be.a.flairContainer
						}, o.a.createElement(E.b, {
							disabled: !Ie,
							flair: _e,
							forceSmallEmojis: !0,
							usesCommunityStyles: De
						})), C.belongsTo.type === R.a.SUBREDDIT && !Object(oe.o)(C.author) && o.a.createElement(A.a, {
							className: be.a.publicWallet,
							contentId: C.id,
							metaSeparator: o.a.createElement(Re, null),
							subredditId: ve,
							userId: C.authorId,
							username: C.author
						})),
						Ve = fe._("{=Posted by}{author}", [fe._param("=Posted by", o.a.createElement(Oe, {
							style: {
								color: ge(e)
							}
						}, fe._("Posted by", null, {
							hk: "274iff"
						}))), fe._param("author", ze)], {
							hk: "1abNaj"
						}),
						Ke = o.a.createElement(o.a.Fragment, null, o.a.createElement(x.a, {
							className: be.a.crosspostIcon
						}), fe._("{=Crossposted by}{author}", [fe._param("=Crossposted by", o.a.createElement(Oe, {
							style: {
								color: ge(e)
							}
						}, fe._("Crossposted by", null, {
							hk: "1YnHU8"
						}))), fe._param("author", ze)], {
							hk: "3BfJwk"
						})),
						Qe = () => Fe || pe ? Fe ? Ke : ze : Ve;
					return o.a.createElement("div", {
						className: Object(i.a)(be.a.container, t)
					}, U && q && o.a.createElement(M.a, {
						postId: C.id,
						subredditName: q.name,
						tooltipType: W
					}, o.a.createElement(D.a, {
						"data-click-id": "subreddit",
						to: {
							pathname: q.url,
							state: we
						}
					}, q.displayText)), q && q.isQuarantined && o.a.createElement(B.a, null), U && !Fe && o.a.createElement(Re, null), pe ? o.a.createElement(o.a.Fragment, null, (null == q ? void 0 : q.icon) && qe && o.a.createElement(Z.a, {
						iconUrl: q.icon.url,
						isNSFW: q.isNSFW,
						userName: q.name,
						className: be.a.userIcon,
						omitResponsivePresenceWrapper: !0
					}), Qe(), ne && o.a.createElement(o.a.Fragment, null, o.a.createElement(Re, null), o.a.createElement(H.a, {
						adHeaderVariant: J,
						greyTextColor: ge(e)
					}))) : o.a.createElement(o.a.Fragment, null, ne && o.a.createElement(o.a.Fragment, null, o.a.createElement(H.a, null), o.a.createElement(Re, null)), Qe()), o.a.createElement(F.e, null), G && !pe && o.a.createElement(o.a.Fragment, null, o.a.createElement("a", {
						className: be.a.externalLink,
						"data-testid": "post_timestamp",
						"data-click-id": "timestamp",
						href: C.permalink,
						onMouseEnter: Me.show,
						onMouseLeave: Me.hide,
						ref: Me.target.ref,
						style: {
							color: ge(e)
						},
						target: "_blank",
						rel: "nofollow noopener noreferrer",
						onClick: e => {
							null == j || j(e), $ && (e.preventDefault(), V(Object(m.ab)(C.permalink, C.id)))
						}
					}, o.a.createElement(S.d, {
						seconds: C.created / c.Sb
					})), o.a.createElement(z, null, o.a.createElement(N.a, {
						arrowProps: Me.arrowProps,
						popperProps: Me.popperProps,
						visible: Me.visible
					}, o.a.createElement(S.b, {
						seconds: C.created / c.Sb
					})))), Object(_.b)(C) && ke && o.a.createElement(I, {
						post: C
					}))
				}));
			t.d = ye(Object(U.b)(Object(d.a)(_e)))
		},
		"./src/reddit/components/SponsoredLabel/index.m.less": function(e, t, r) {
			e.exports = {
				Wrapper: "_2oEYZXchPfHwcf9mTMGMg8",
				wrapper: "_2oEYZXchPfHwcf9mTMGMg8",
				isPromotedBlue: "_3NAtxpywJRrKZN5zIU9vwP",
				isPromotedGrey: "V0WjfoF5BV7_qbExmbmeR"
			}
		},
		"./src/reddit/components/SponsoredLabel/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/react/index.js"),
				s = r.n(o),
				a = r("./src/reddit/components/SponsoredLabel/index.m.less"),
				i = r.n(a),
				c = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/lessComponent.tsx"),
				l = r("./src/reddit/constants/experiments.ts");
			const u = d.a.span("Wrapper", i.a);
			t.a = ({
				className: e,
				adHeaderVariant: t,
				greyTextColor: r
			}) => {
				const o = t === l.u.PromotedGrey || t === l.u.NoLockIcon;
				return s.a.createElement(u, {
					className: Object(c.a)(e, {
						[i.a.isPromotedBlue]: t === l.u.PromotedBlue,
						[i.a.isPromotedGrey]: o
					})
				}, s.a.createElement("span", {
					style: o ? {
						color: r
					} : {}
				}, n.fbt._("promoted", null, {
					hk: "1R81m"
				})))
			}
		},
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/actions/modal.ts"),
				c = r("./src/reddit/constants/keycodes.ts"),
				d = r("./src/reddit/controls/Input/index.m.less"),
				l = r.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			class m extends o.a.Component {
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
						...r
					} = this.props;
					return o.a.createElement("input", u({
						className: Object(a.a)(l.a.input, e),
						onKeyDown: this.handleKeyDown
					}, r))
				}
			}
			t.a = Object(s.b)(null, {
				closeModal: i.f
			})(m)
		},
		"./src/reddit/controls/Input/index.m.less": function(e, t, r) {
			e.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
			}
		},
		"./src/reddit/controls/MetaSeparator/index.m.less": function(e, t, r) {
			e.exports = {
				unstyledMetaSeparator: "_3LS4zudUBagjFS7HjWJYxo",
				metaSeparator: "_37gsGHa8DMRAxBmQS-Ppg8"
			}
		},
		"./src/reddit/controls/MetaSeparator/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/controls/MetaSeparator/index.m.less"),
				i = r.n(a);
			const c = e => o.a.createElement("span", {
				className: Object(s.a)(i.a.unstyledMetaSeparator, e.className),
				role: "presentation"
			}, e.isSmall ? "·" : "•");
			t.b = ({
				className: e,
				isSmall: t
			}) => o.a.createElement(c, {
				className: Object(s.a)(i.a.metaSeparator, e),
				isSmall: t
			})
		},
		"./src/reddit/helpers/trackers/communityAwards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "g", (function() {
				return l
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "d", (function() {
				return b
			})), r.d(t, "h", (function() {
				return h
			})), r.d(t, "i", (function() {
				return v
			}));
			var n = r("./src/reddit/models/Gold/Award.ts"),
				o = r("./src/reddit/selectors/telemetry.ts"),
				s = r("./src/reddit/helpers/correlationIdTracker.ts"),
				a = r("./src/reddit/helpers/trackers/gild.ts");
			const i = e => ({
					...o.o(e),
					screen: o.bb(e),
					subreddit: o.jb(e),
					userSubreddit: o.tb(e)
				}),
				c = e => ({
					awardId: e.id,
					awardName: e.name,
					isModAward: e.awardType === n.f.Moderator,
					isTemporatyAward: !!e.endsAt,
					numberCoins: e.coinPrice,
					numberMonths: Math.floor((e.daysOfPremium || 0) / 30),
					numberCoinsToRecipient: e.coinReward || 0,
					numberCoinsToCommunity: e.subredditCoinReward || 0,
					type: Object(a.getAwardTypeFromAward)(e)
				}),
				d = () => e => ({
					...i(e),
					source: "awards",
					action: "click",
					correlationId: Object(s.c)(s.a.AwardCreationFlow),
					noun: "create"
				}),
				l = e => t => ({
					...i(t),
					source: "awards",
					action: "click",
					correlationId: Object(s.c)(s.a.AwardDeletionFlow),
					noun: "delete",
					goldPurchase: e ? c(e) : null,
					media: e ? {
						url: e.icon.url
					} : null
				}),
				u = (e, t, r) => n => ({
					...i(n),
					source: "create_award",
					action: e,
					correlationId: Object(s.c)(s.a.AwardCreationFlow),
					noun: t,
					goldPurchase: r
				}),
				m = (e, t, r, n) => o => ({
					...i(o),
					source: "create_award",
					action: "upload",
					correlationId: Object(s.c)(s.a.AwardCreationFlow),
					noun: "image",
					actionInfo: n ? {
						reason: n
					} : {
						success: !0
					},
					media: t ? {
						fileName: t.file.name,
						height: t.height,
						id: t.id,
						mimetype: t.file.type,
						size: t.file.size,
						type: "image",
						uploadDuration: r,
						url: e,
						width: t.width
					} : null
				}),
				p = (e, t, r) => n => ({
					...i(n),
					source: "create_award",
					action: "click",
					correlationId: Object(s.c)(s.a.AwardCreationFlow),
					noun: "create",
					media: t && e ? {
						fileName: t.file.name,
						height: t.height,
						id: t.id,
						mimetype: t.file.type,
						size: t.file.size,
						type: "image",
						url: e,
						width: t.width
					} : null,
					goldPurchase: r ? c(r) : null
				}),
				b = (e, t, r) => n => ({
					...i(n),
					source: "create_award",
					action: e,
					correlationId: Object(s.c)(s.a.AwardCreationFlow),
					noun: t,
					goldPurchase: r ? c(r) : null
				}),
				f = (e, t, r) => n => ({
					...i(n),
					source: "awards",
					action: "click",
					noun: r,
					goldPurchase: c(e),
					profile: o.T(n, t),
					subreddit: o.kb(n, t)
				}),
				h = (e, t) => f(e, t, "disable_in_community"),
				v = (e, t) => f(e, t, "enable_in_community")
		},
		"./src/reddit/helpers/trackers/gild.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "getAwardTypeFromAward", (function() {
				return d
			})), r.d(t, "clickGildEvent", (function() {
				return m
			})), r.d(t, "clickRpanGiveAward", (function() {
				return p
			})), r.d(t, "clickAddAward", (function() {
				return b
			})), r.d(t, "clickHideAward", (function() {
				return f
			})), r.d(t, "clickConfirmHideAward", (function() {
				return h
			})), r.d(t, "clickCancelHideAward", (function() {
				return v
			})), r.d(t, "clickAwardReportFlow", (function() {
				return x
			})), r.d(t, "clickCancelAwardReportFlow", (function() {
				return O
			})), r.d(t, "clickFlagAwardUsage", (function() {
				return y
			})), r.d(t, "clickCancelFlagAwardUsage", (function() {
				return j
			})), r.d(t, "clickConfirmFlagAwardUsage", (function() {
				return _
			})), r.d(t, "clickReportAward", (function() {
				return w
			})), r.d(t, "clickCancelReportAward", (function() {
				return C
			})), r.d(t, "clickConfirmReportAward", (function() {
				return I
			})), r.d(t, "viewGildModalEvent", (function() {
				return P
			})), r.d(t, "clickSelectAwardEvent", (function() {
				return k
			})), r.d(t, "triggerAnonymousEvent", (function() {
				return E
			})), r.d(t, "clickMessageInputEvent", (function() {
				return A
			})), r.d(t, "typeMessageInputEvent", (function() {
				return T
			})), r.d(t, "clickLearnMoreLinkEvent", (function() {
				return M
			})), r.d(t, "clickQuestionMarkEvent", (function() {
				return S
			})), r.d(t, "clickConfirmAwardEvent", (function() {
				return N
			})), r.d(t, "clickGetPremiumEvent", (function() {
				return F
			})), r.d(t, "clickAddCoinsButtonEvent", (function() {
				return L
			})), r.d(t, "clickNextButtonEvent", (function() {
				return B
			})), r.d(t, "clickCloseGildModalEvent", (function() {
				return H
			})), r.d(t, "viewKarmaSuccessEvent", (function() {
				return D
			})), r.d(t, "clickFilterEvent", (function() {
				return R
			})), r.d(t, "clickNextFiltersEvent", (function() {
				return U
			})), r.d(t, "clickPreviousFiltersEvent", (function() {
				return G
			}));
			var n = r("./src/reddit/models/Gold/Award.ts"),
				o = r("./src/reddit/selectors/telemetry.ts"),
				s = r("./src/telemetry/models/GoldPurchase.ts"),
				a = r("./src/reddit/helpers/correlationIdTracker.ts"),
				i = r("./src/reddit/helpers/isComment.ts"),
				c = r("./src/reddit/selectors/gild.ts");
			const d = e => e.awardType === n.f.Global && e.awardSubType === n.d.Appreciation ? s.GoldPurchaseType.GidAppreciation : e.awardType === n.f.Global && e.awardSubType === n.d.Premium ? s.GoldPurchaseType.GidPremium : e.awardSubType === n.d.Group ? s.GoldPurchaseType.GidGroup : e.awardType === n.f.Community ? s.GoldPurchaseType.GidCommunity : e.awardType === n.f.Moderator ? s.GoldPurchaseType.GidMod : e.awardType === n.f.Global && e.awardSubType === n.d.Global ? s.GoldPurchaseType.GidGlobal : s.GoldPurchaseType.GidUnknown,
				l = (e, t) => ({
					awardId: e.id,
					awardName: e.name,
					isTemporaryAward: !!e.endsAt,
					numberCoinsToRecipient: e.coinReward,
					type: d(e),
					...t
				}),
				u = (e, t) => ({
					...o.o(e),
					comment: t ? o.i(e, t) : void 0,
					correlationId: Object(c.b)(e) || Object(a.e)(a.a.GildingFlow, !1),
					post: t ? o.J(e, t) : void 0,
					screen: o.bb(e),
					subreddit: o.jb(e),
					userSubreddit: o.tb(e)
				}),
				m = e => t => ({
					...u(t, e),
					source: Object(i.a)(e) ? "comment" : "post",
					action: "click",
					noun: "give_gold",
					feed: o.r(t)
				}),
				p = e => t => ({
					...u(t, e),
					source: "stream_player",
					action: "click",
					noun: "give_gold"
				}),
				b = e => t => ({
					...u(t, e),
					source: Object(i.a)(e) ? "comment" : "post",
					action: "click",
					noun: "add_award",
					feed: o.r(t)
				}),
				f = (e, t) => r => ({
					...u(r, t),
					source: Object(i.a)(t) ? "comment" : "post",
					action: "click",
					noun: "hide_award",
					goldPurchase: l(e)
				}),
				h = (e, t) => r => ({
					...u(r, t),
					source: Object(i.a)(t) ? "comment" : "post",
					action: "click",
					noun: "confirm_hide_award",
					goldPurchase: l(e)
				}),
				v = (e, t) => r => ({
					...u(r, t),
					source: Object(i.a)(t) ? "comment" : "post",
					action: "click",
					noun: "cancel_hide_award",
					goldPurchase: l(e)
				}),
				g = e => (t, r) => n => ({
					...u(n, r),
					source: Object(i.a)(r) ? "comment" : "post",
					action: "click",
					noun: e,
					goldPurchase: l(t)
				}),
				x = g("award_hovercard_report"),
				O = g("cancel_award_hovercard_report"),
				y = g("flag_award"),
				j = g("cancel_flag_award"),
				_ = g("confirm_flag_award"),
				w = g("report_community_award"),
				C = g("cancel_report_community_award"),
				I = g("confirm_report_community_award"),
				P = (e, t, r) => n => ({
					...u(n, r),
					source: "give_gold",
					action: "view",
					noun: "page",
					goldPurchase: {
						defaultOption: e,
						defaultAnonymous: t
					}
				}),
				k = (e, t, r) => n => ({
					...u(n, t),
					source: "give_gold",
					action: "click",
					noun: "award",
					goldPurchase: l(e, r)
				}),
				E = (e, t) => r => ({
					...u(r, t),
					source: "give_gold",
					action: e,
					noun: "anonymous"
				}),
				A = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "message_input"
				}),
				T = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "type",
					noun: "message_input"
				}),
				M = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "learn_more"
				}),
				S = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "question"
				}),
				N = (e, t) => r => ({
					...u(r, e),
					source: "give_gold",
					action: "click",
					noun: "confirm",
					goldPurchase: {
						contentType: Object(i.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				F = (e, t) => r => ({
					...u(r, e),
					source: "give_gold",
					action: "click",
					noun: "get_premium",
					goldPurchase: {
						contentType: Object(i.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				L = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "add_coins"
				}),
				B = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "next"
				}),
				H = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "close"
				}),
				D = ({
					award: e,
					awardeeKarmaEarned: t,
					awarderKarmaEarned: r,
					numberCoins: n,
					thingId: o
				}) => s => ({
					...u(s, o),
					source: "give_gold",
					action: "view",
					noun: "karma_success",
					goldPurchase: {
						contentType: Object(i.a)(o) ? "comment" : "post",
						awardeeKarmaEarned: t,
						awarderKarmaEarned: r,
						numberCoins: n,
						...l(e)
					}
				}),
				R = e => t => ({
					...u(t),
					source: "give_gold",
					action: "click",
					noun: "filter",
					goldPurchase: {
						filterId: e.tag,
						filterName: e.content.markdown
					}
				}),
				U = () => e => ({
					...u(e),
					source: "give_gold",
					action: "click",
					noun: "next_filters"
				}),
				G = () => e => ({
					...u(e),
					source: "give_gold",
					action: "click",
					noun: "previous_filters"
				})
		},
		"./src/reddit/helpers/trackers/goldPayment.ts": function(e, t, r) {
			"use strict";
			r.d(t, "h", (function() {
				return f
			})), r.d(t, "b", (function() {
				return h
			})), r.d(t, "f", (function() {
				return v
			})), r.d(t, "d", (function() {
				return g
			})), r.d(t, "e", (function() {
				return x
			})), r.d(t, "c", (function() {
				return O
			})), r.d(t, "a", (function() {
				return y
			})), r.d(t, "g", (function() {
				return j
			})), r.d(t, "i", (function() {
				return _
			})), r.d(t, "j", (function() {
				return w
			}));
			var n = r("./src/lib/constants/index.ts"),
				o = r("./src/reddit/models/Gold/ProductOffer.ts"),
				s = r("./src/reddit/selectors/gold/giveAwards.ts"),
				a = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				i = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				c = r("./src/reddit/selectors/telemetry.ts"),
				d = r("./src/telemetry/models/GoldPurchase.ts"),
				l = r("./src/telemetry/models/Payment.ts"),
				u = r("./src/reddit/helpers/trackers/gild.ts"),
				m = r("./src/reddit/helpers/correlationIdTracker.ts"),
				p = r("./src/reddit/helpers/isComment.ts"),
				b = r("./src/reddit/helpers/trackers/communityAwards.ts");
			const f = (e, t) => {
					const {
						thingId: r,
						packageId: l
					} = t, f = !!r, h = s.b(e), v = h ? Object(u.getAwardTypeFromAward)(h) : null, g = f ? v : i.o(e) ? d.GoldPurchaseType.Premium : d.GoldPurchaseType.Coins, x = r ? Object(p.a)(r) ? "comment" : "post" : void 0, O = l || i.t(e), y = [...Object(a.d)(e), ...Object(a.f)(e)].filter(e => e.mobileId === O)[0], j = t.offerContext || (h && 0 === h.coinPrice ? o.a.StorefrontFreeAward : Object(o.d)(y, f)), _ = y ? Math.round(1e4 * (y.baselinePennies - y.pennies) / y.baselinePennies) / 100 : 0, w = y ? Math.round(1e4 * (y.coins - y.baselineCoins) / y.coins) / 100 : 0, C = y ? y.baselinePennies !== y.pennies ? `${_}_percent_price` : y.baselineCoins !== y.coins ? `${w}_percent_bonus` : void 0 : void 0, I = g === d.GoldPurchaseType.Premium ? n.yb : y ? y.pennies : void 0;
					return {
						...c.o(e),
						comment: r ? c.i(e, r) : null,
						correlationId: i.r(e) || Object(m.e)(m.a.GoldPayment, !1),
						post: r ? c.J(e, r) : null,
						screen: c.bb(e),
						subreddit: r ? c.jb(e) : null,
						goldPurchase: {
							...h ? Object(b.a)(h) : null,
							type: g,
							gildedContent: f,
							contentType: x,
							numberCoins: y ? y.coins : void 0,
							offerContext: j,
							offerType: C
						},
						payment: {
							currency: "USD",
							amountInSmallestDenom: I
						},
						purchase: {
							priceMicros: I
						}
					}
				},
				h = (e, t, r) => n => ({
					...f(n, {
						packageId: t,
						thingId: e,
						offerContext: r
					}),
					source: "gold_payment",
					action: "click",
					noun: "close"
				}),
				v = e => t => ({
					...f(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "paypal"
				}),
				g = e => t => ({
					...f(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "continue_paypal"
				}),
				x = e => t => ({
					...f(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "credit_card"
				}),
				O = e => t => ({
					...f(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "complete_credit_card"
				}),
				y = (e, t) => r => ({
					...f(r, {
						packageId: e,
						offerContext: t
					}),
					source: "gold_payment",
					action: "click",
					noun: "confirm"
				}),
				j = e => t => ({
					...f(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				_ = (e, t, r) => n => {
					const o = f(n, {
						packageId: t,
						thingId: e,
						offerContext: r
					});
					return {
						...o,
						source: "gold_payment",
						action: "view",
						noun: "page",
						payment: {
							...o.payment,
							defaultOption: l.PaymentMethod.Paypal
						},
						goldPurchase: {
							...o.goldPurchase,
							source: e ? d.GiveGold : i.o(n) ? d.PremiumMarketing : d.CoinsMarketing
						}
					}
				},
				w = e => t => {
					var r;
					const n = f(t, {
						thingId: e
					});
					return {
						...n,
						source: "gold_payment",
						action: "view",
						noun: "success",
						payment: {
							...n.payment,
							method: (null === (r = t.platform.currentPage) || void 0 === r ? void 0 : r.queryParams.thanks) ? l.PaymentMethod.Paypal : l.PaymentMethod.CreditCard
						}
					}
				}
		},
		"./src/reddit/helpers/trackers/snoovatar.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return c
			})), r.d(t, "g", (function() {
				return d
			})), r.d(t, "h", (function() {
				return l
			})), r.d(t, "q", (function() {
				return u
			})), r.d(t, "k", (function() {
				return m
			})), r.d(t, "m", (function() {
				return p
			})), r.d(t, "e", (function() {
				return b
			})), r.d(t, "p", (function() {
				return h
			})), r.d(t, "d", (function() {
				return v
			})), r.d(t, "j", (function() {
				return g
			})), r.d(t, "l", (function() {
				return O
			})), r.d(t, "i", (function() {
				return y
			})), r.d(t, "b", (function() {
				return j
			})), r.d(t, "o", (function() {
				return w
			})), r.d(t, "c", (function() {
				return C
			})), r.d(t, "a", (function() {
				return P
			})), r.d(t, "n", (function() {
				return k
			}));
			var n = r("./src/reddit/models/Gold/ProductOffer.ts"),
				o = r("./src/reddit/selectors/avatarMarketing.ts"),
				s = r("./src/reddit/selectors/telemetry.ts"),
				a = r("./src/reddit/selectors/user.ts");
			const i = {
					goldPurchase: {
						offerContext: n.a.AvatarNewGear
					}
				},
				c = e => t => {
					const r = {
						source: e,
						action: "click",
						noun: "edit_snoovatar",
						...s.o(t)
					};
					return Object(o.a)(t) && Object.assign(r, i), r
				},
				d = (e, t) => r => {
					const {
						id: n
					} = Object(a.wb)(r, {
						userName: t
					});
					return {
						source: e,
						action: "click",
						noun: "copy_avatar",
						...s.o(r),
						snoovatar: {
							userGenerated: n
						}
					}
				},
				l = e => ({
					...s.o(e),
					source: "avatar",
					action: "click",
					noun: "try_this_look_post",
					snoovatar: s.hb(e)
				}),
				u = e => ({
					...s.o(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "snoovatar_builder"
					},
					snoovatar: s.hb(e)
				}),
				m = e => ({
					...s.o(e),
					source: "avatar_builder",
					action: "click",
					noun: "close",
					snoovatar: s.hb(e)
				}),
				p = e => ({
					source: "nav",
					action: "view",
					noun: "avatar_marketing",
					...s.o(e),
					...i
				}),
				b = e => t => ({
					...s.o(t),
					source: "snoovatar",
					action: "set_to_profile",
					noun: "snoovatar",
					snoovatar: {
						userGeneratedSource: e
					}
				}),
				f = e => t => r => ({
					source: "avatar",
					action: e,
					noun: "community_spaces",
					...s.o(r),
					snoovatar: s.hb(r),
					actionInfo: {
						paneName: "avatar_community_spaces" + (t ? "_control" : "")
					}
				}),
				h = f("view"),
				v = f("click"),
				g = f("dismiss"),
				x = (e, t, r) => () => n => ({
					source: e,
					action: t,
					noun: r,
					...s.o(n),
					snoovatar: s.hb(n)
				}),
				O = x("anniversary_achievement", "view", "anniversary_achievement"),
				y = x("anniversary_achievement", "click", "close"),
				j = x("anniversary_achievement", "click", "equip"),
				_ = e => () => t => ({
					...s.o(t),
					source: "gold_top_nav",
					action: e,
					noun: "quick_create_cta"
				}),
				w = _("view"),
				C = _("click"),
				I = (e, t, r) => n => ({
					source: e,
					action: t,
					noun: r,
					...s.o(n),
					actionInfo: {
						pageType: "onboarding"
					},
					snoovatar: s.hb(n)
				}),
				P = e => I("onboarding", "click", e),
				k = () => I("avatar", "view", "onboarding")
		},
		"./src/reddit/hooks/useInfoTextTooltip.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/icepick/icepick.js"),
				o = r("./node_modules/react/index.js"),
				s = r("./src/lib/hooks/useTooltip.ts");
			const a = Object(n.freeze)({
				name: "offset",
				options: {
					offset: [0, 6]
				}
			});

			function i(e) {
				const t = Object(o.useMemo)(() => {
					const t = Object(s.a)(e);
					return Object(n.updateIn)(t, ["modifiers"], e => Object(n.push)(e, a))
				}, [e]);
				return Object(s.b)(t)
			}
		},
		"./src/reddit/hooks/useIsOverlay.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./node_modules/react/index.js"),
				o = r("./src/reddit/contexts/InsideOverlay.tsx");

			function s() {
				return Object(n.useContext)(o.a)
			}
		},
		"./src/reddit/icons/fonts/Premium/index.m.less": function(e, t, r) {
			e.exports = {
				PremiumIcon: "dLp3R7pmxclGjLS87yr5S",
				premiumIcon: "dLp3R7pmxclGjLS87yr5S"
			}
		},
		"./src/reddit/icons/fonts/Premium/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./src/reddit/icons/fonts/helpers.tsx"),
				a = r("./src/reddit/icons/fonts/Premium/index.m.less"),
				i = r.n(a);
			const c = r("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				title: e.title,
				className: `${Object(s.b)("premium",e.isFilled)} ${e.className}`
			}), "PremiumIcon", i.a)
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, r) {},
		"./src/reddit/icons/svgs/AddSquare/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n);

			function s(e) {
				return o.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("rect", {
					fill: "transparent",
					height: "18",
					rx: "4.5",
					strokeDasharray: "2 2",
					strokeLinejoin: "round",
					strokeWidth: "1",
					width: "18",
					x: "1",
					y: "1"
				}), o.a.createElement("path", {
					clipRule: "evenodd",
					d: "M13 9H11V7C11 6.7235 10.7765 6.5 10.5 6.5H9.5C9.2235 6.5 9 6.7235 9 7V9H7C6.724 9 6.5 9.2235 6.5 9.5V10.5C6.5 10.7765 6.724 11 7 11H9V13C9 13.2765 9.2235 13.5 9.5 13.5H10.5C10.7765 13.5 11 13.2765 11 13V11H13C13.2765 11 13.5 10.7765 13.5 10.5V9.5C13.5 9.2235 13.2765 9 13 9Z",
					fillRule: "evenodd"
				}))
			}
		},
		"./src/reddit/icons/svgs/Crosspost/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", s({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("path", {
				d: "M9.06,8.64c1.12-1.26,2.2-2.45,4.44-2.6V7.5a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74L15.18,1.7a1,1,0,0,0-1.68.74V4c-3.14.17-4.69,1.88-5.93,3.28C6.58,8.42,6,9,5,9H2a1,1,0,0,0,0,2H5C6.93,11,8,9.82,9.06,8.64Z"
			}), o.a.createElement("path", {
				d: "M15.18,11.76a1,1,0,0,0-1.68.74V14c-2.23-.16-3.29-1.32-4.39-2.56-.21-.24-.43-.48-.66-.72a5.63,5.63,0,0,1-1.77,1.06,13.34,13.34,0,0,1,.94,1A7.85,7.85,0,0,0,13.5,16v1.59a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74Z"
			}))
		},
		"./src/reddit/icons/svgs/Powerup/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 32 32",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && o.a.createElement("title", null, e.title), o.a.createElement("path", {
				d: "M12.249 32c-.4 0-.8-.1-1.2-.25l-.05-.05-5.05-2.6c-1.25-.7-1.75-2.2-1.25-3.5l.05-.1 2.45-5.45-3.15-1.5a2.985 2.985 0 01-1.4-3.55l3.5-12.05C6.649 1.2 8.299 0 10.099 0h7.8c.45 0 .9.1 1.3.3l.15.1 4.85 2.45c1.5.8 2.05 2.55 1.35 4.05l-2.2 4.3 4.45 2.25c.8.45 1.35 1.25 1.45 2.2.1.9-.2 1.8-.9 2.45l-14.15 13.15c-.55.5-1.25.75-1.95.75z",
				fill: "#000"
			}), o.a.createElement("path", {
				d: "M10.648 17l-.85 2.1-4.65-2.2c.1.05.25.1.4.1h5.1zM23.749 13.6l3.1 1.6c.5.3.65 1 .15 1.45L12.849 29.8c-.3.25-.65.3-.95.15l-4.85-2.5c.3.1.65.1.9-.15l14.15-13.15c.5-.45.35-1.15-.15-1.45l1.8.9z",
				fill: "#FF4500"
			}), o.a.createElement("path", {
				d: "M23.75 13.6l3.1 1.6c.5.3.65 1 .15 1.45l-4.9-2.5c.5-.45.35-1.15-.15-1.45l1.8.9z",
				fill: "#FF8717"
			}), o.a.createElement("path", {
				d: "M18.898 3.5c.25-.55.05-1.1-.45-1.4l4.9 2.5c.5.25.7.85.45 1.4l-3.35 6.55h-6.05l4.5-9.05z",
				fill: "#FF4500"
			}), o.a.createElement("path", {
				d: "M18.9 3.5c.25-.55.05-1.1-.45-1.4l4.9 2.5c.5.25.7.85.45 1.4l-4.9-2.5z",
				fill: "#FF8717"
			}), o.a.createElement("path", {
				d: "M21.95 12.65c.5.3.65 1 .15 1.45L7.95 27.3c-.3.25-.65.3-.9.15l-.1-.05a.86.86 0 01-.4-1.05l4.1-9.35h-5.1c-.15 0-.3-.05-.45-.1l-.1-.05c-.4-.25-.65-.75-.5-1.25L8.05 3.55A2.19 2.19 0 0110.15 2h7.8c.15 0 .3.05.45.1l.05.05c.45.25.7.85.45 1.4l-4.5 9.05h7.1c.15 0 .3.05.4.1l.05-.05z",
				fill: "#FFD635"
			}), o.a.createElement("path", {
				d: "M15.599 3.45c.55-.15 1.15-.25 1.7-.45-.6-.1-1.15-.15-1.75-.2-.6-.05-1.15-.05-1.75-.1-1.15-.05-2.25 0-3.4.05-.55 0-1.05.3-1.35.8-.15.3-.15.35-.2.5l-.15.4-.5 1.55c-.35 1.05-.7 2.1-1 3.15-.3 1.05-.65 2.1-.9 3.2-.3 1.05-.6 2.15-.8 3.25.55-1 1-2 1.5-3 .45-1 .9-2 1.35-3.05.4-1 .85-2.05 1.2-3.1l.6-1.55.25-.65h.05c1.15-.1 2.3-.25 3.4-.45.6-.1 1.15-.2 1.75-.35zM20.25 13.35c-1.1-.05-2.2-.05-3.3 0-.55 0-1.1.05-1.65.1-.55.05-1.1.1-1.65.2.55.15 1.1.25 1.6.35.55.1 1.1.2 1.65.25.6.1 1.25.15 1.85.2-.45.45-.9.85-1.3 1.3-.75.75-1.5 1.5-2.25 2.3-.75.8-1.5 1.55-2.2 2.35-.7.8-1.45 1.6-2.1 2.45.9-.65 1.7-1.3 2.55-2 .85-.7 1.65-1.4 2.45-2.1.8-.7 1.6-1.45 2.4-2.15l2.35-2.2c.1-.1.15-.25.2-.4 0-.4-.3-.65-.6-.65z",
				fill: "#fff"
			}))
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.m.less": function(e, t, r) {
			e.exports = {
				left: "_5gAwSCo7K8G413IoE78Ml",
				right: "_2ghjBMFIsORwdO3oh2Kq6g",
				exapndLeftContainer: "_1zTJo0Ndih4fp__5DjbClN"
			}
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/layout/twoCol/ExpandLeft/index.m.less"),
				c = r.n(i);
			t.a = Object(s.a)(e => o.a.createElement("div", {
				className: Object(a.a)(c.a.exapndLeftContainer, e.className)
			}, o.a.createElement("div", {
				className: c.a.left
			}, Array.isArray(e.children) && e.children[0]), o.a.createElement("div", {
				className: c.a.right,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[1])), 2)
		},
		"./src/reddit/models/Audio/index.ts": function(e, t, r) {
			"use strict";
			var n, o;

			function s(e) {
				return Boolean(e.audioRoom)
			}
			r.d(t, "a", (function() {
					return o
				})), r.d(t, "b", (function() {
					return s
				})),
				function(e) {
					e.Unknown = "UNKNOWN", e.Twilio = "TWILIO"
				}(n || (n = {})),
				function(e) {
					e[e.NotAvailable = 0] = "NotAvailable", e[e.Processing = 1] = "Processing", e[e.Available = 2] = "Available", e[e.Removed = 3] = "Removed"
				}(o || (o = {}))
		},
		"./src/reddit/models/ModUserNotes/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return a
			})), r.d(t, "g", (function() {
				return i
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "h", (function() {
				return p
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/reddit/helpers/isPost.ts"),
				s = r("./src/redditGQL/types.ts");
			const a = "DEFAULT_MOD_NOTE",
				i = (e, t) => `LAST_AUTHOR_MOD_NOTE-${e}${t?"-overlay":""}`,
				c = {
					[s.q.BotBan]: "#1717604F",
					[s.q.PermaBan]: "#3E0A514F",
					[s.q.Ban]: "#5B00414F",
					[s.q.AbuseWarning]: "#6D001A4F",
					[s.q.SpamWarning]: "#5423134F",
					[s.q.SpamWatch]: "#3A26194F",
					[s.q.SolidContributor]: "#0044414F",
					[s.q.HelpfulUser]: "#02315C4F",
					[a]: "#242424"
				},
				d = {
					[s.q.BotBan]: "#CCD7FF",
					[s.q.PermaBan]: "#F3CCFF",
					[s.q.Ban]: "#FFC9D2",
					[s.q.AbuseWarning]: "#FFD5AE",
					[s.q.SpamWarning]: "#FFF494",
					[s.q.SpamWatch]: "#EAD5A2",
					[s.q.SolidContributor]: "#CBFD9A",
					[s.q.HelpfulUser]: "#A6EDFF",
					[a]: "#E6E6E6"
				},
				l = {
					[s.q.BotBan]: "ban_fill",
					[s.q.PermaBan]: "bot_fill",
					[s.q.Ban]: "bot_fill",
					[s.q.AbuseWarning]: "spoiler_fill",
					[s.q.SpamWarning]: "spoiler_fill",
					[s.q.SpamWatch]: "nsfw_language_fill",
					[s.q.SolidContributor]: "new_fill",
					[s.q.HelpfulUser]: "peace_fill",
					[a]: "user_note_fill"
				},
				u = {
					[s.q.BotBan]: "#5349DA",
					[s.q.PermaBan]: "#9C3CAC",
					[s.q.Ban]: "#DE107F",
					[s.q.AbuseWarning]: "#FB133A",
					[s.q.SpamWarning]: "#E79800",
					[s.q.SpamWatch]: "#9C6926",
					[s.q.SolidContributor]: "#00A368",
					[s.q.HelpfulUser]: "#006DC6",
					[a]: "#818384"
				},
				m = {
					[s.q.BotBan]: () => n.fbt._("Bot Ban", null, {
						hk: "2kKP5R"
					}),
					[s.q.PermaBan]: () => n.fbt._("Perma Ban", null, {
						hk: "2NKibN"
					}),
					[s.q.Ban]: () => n.fbt._("Ban", null, {
						hk: "4tkpUP"
					}),
					[s.q.AbuseWarning]: () => n.fbt._("Abuse Warning", null, {
						hk: "3yQJ5"
					}),
					[s.q.SpamWarning]: () => n.fbt._("Spam Warning", null, {
						hk: "4sYfYD"
					}),
					[s.q.SpamWatch]: () => n.fbt._("Spam Watch", null, {
						hk: "3CoM4o"
					}),
					[s.q.SolidContributor]: () => n.fbt._("Good Contributor", null, {
						hk: "31uTvb"
					}),
					[s.q.HelpfulUser]: () => n.fbt._("Helpful", null, {
						hk: "1iapJ2"
					})
				},
				p = e => Object(o.a)(e.id) ? e.belongsTo.id : e.subredditId
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, r) {
			"use strict";
			var n, o, s, a;
			r.d(t, "b", (function() {
					return o
				})), r.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(n || (n = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(o || (o = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(s || (s = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(a || (a = {}))
		},
		"./src/reddit/reducers/features/avatar/index.ts": function(e, t, r) {
			"use strict";
			var n, o, s = r("./node_modules/redux/es/redux.js"),
				a = r("./src/reddit/actions/snoovatar.ts");
			! function(e) {
				e.PREMIUM = "PREMIUM"
			}(n || (n = {})),
			function(e) {
				e[e.BACKGROUND = 0] = "BACKGROUND", e[e.ACCESSORY_BACK = 1] = "ACCESSORY_BACK", e[e.HAIR_BACK = 2] = "HAIR_BACK", e[e.BODY_BOTTOM = 3] = "BODY_BOTTOM", e[e.BODY = 4] = "BODY", e[e.ACCESSORY = 5] = "ACCESSORY", e[e.FACE_LOWER = 6] = "FACE_LOWER", e[e.FACE_UPPER = 7] = "FACE_UPPER", e[e.HAIR = 8] = "HAIR", e[e.HEAD_ACCESSORY = 9] = "HEAD_ACCESSORY"
			}(o || (o = {}));
			const i = {
				id: "",
				csrf_token: "",
				snoovatar: null,
				websocketsUrls: {
					renderer: "",
					download: ""
				},
				capabilities: [n.PREMIUM],
				hasActiveClosetSubscription: !1
			};
			var c = (e = i, t) => {
				switch (t.type) {
					case a.b:
						return {
							...t.payload
						};
					default:
						return e
				}
			};
			const d = {
					marketingEvent: {
						active: !1,
						assetUrls: null
					},
					quickCreateV1: {
						id: "-1",
						active: !1,
						text: "",
						min_days_on_reddit: 0,
						should_have_avatar: !1,
						max_event_views: 0,
						min_days_since_last_event_interaction: 0,
						webAssetUrls: []
					}
				},
				l = "avatar_quick_create_event",
				u = "avatar_marketing_event",
				m = "avatar_promo_archived",
				p = e => {
					const t = {};
					return e.forEach(e => {
						if (e.startsWith("targeting:")) {
							const r = e.split(":");
							if (!r.length && r.length < 3) return null;
							try {
								t[r[1]] = JSON.parse(r[2])
							} catch {
								t[r[1]] = r[2]
							}
						}
					}), t
				};
			var b = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				f = r("./src/reddit/actions/modal.ts"),
				h = r("./src/reddit/constants/modals.ts");
			var v = (e = null, t) => {
				var r;
				switch (t.type) {
					case b.s:
						const {
							avatarMarketingEvents: n
						} = t.payload;
						return n ? function(e) {
							if (!e) return d;
							const t = d;
							return e.forEach(e => {
								const {
									startsAt: r,
									endsAt: n,
									webAssetUrls: o,
									tags: s
								} = e, a = r && new Date(r) <= new Date, i = !!n && new Date(n) < new Date, c = !!a && !i, d = s.includes(m);
								if (s && s.includes(l) && !d) {
									const {
										text: r,
										id: n
									} = e, a = o || null, i = p(s);
									t && (t.quickCreateV1 = {
										...i,
										id: n,
										text: r,
										active: c && !!a,
										webAssetUrls: a
									})
								}
								if (s && s.includes(u) && !d) {
									const e = o || null;
									t && (t.marketingEvent = {
										active: c && !!e,
										assetUrls: e
									})
								}
							}), t
						}(n) : d;
					case f.c:
						return (null === (r = t.payload) || void 0 === r ? void 0 : r.id) === h.a.SNOOVATAR_MODAL ? d : e;
					default:
						return e
				}
			};
			var g = (e = null, t) => {
				switch (t.type) {
					case a.a: {
						const {
							image: e,
							accessory_ids: r
						} = t.payload;
						return {
							image: e,
							accessoryIds: r
						}
					}
					default:
						return e
				}
			};
			t.a = Object(s.c)({
				marketing: v,
				avatarUser: c,
				randomAvatar: g
			})
		},
		"./src/reddit/selectors/authorFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return s
			}));
			const n = (e, {
					post: t
				}) => {
					const r = t.belongsTo.id;
					if (!r) return null;
					const n = e.authorFlair.models[r];
					if (!n) return null;
					const o = t.author;
					return o && n[o] || null
				},
				o = (e, {
					subredditId: t
				}) => {
					const r = e.authorFlair && e.authorFlair.inContext && e.authorFlair.inContext.username;
					if (!r) return null;
					if (!t) return null;
					const n = e.authorFlair.models[t];
					return n ? n[r] : null
				},
				s = e => e.authorFlair.inContext
		},
		"./src/reddit/selectors/avatar.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return i
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/features/avatar/index.ts");
			Object(n.a)({
				features: {
					avatar: o.a
				}
			});
			const s = e => {
					var t, r;
					return null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === r ? void 0 : r.avatarUser
				},
				a = e => {
					var t, r;
					return null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === r ? void 0 : r.avatarUser.csrf_token
				},
				i = e => {
					var t, r;
					return (null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === r ? void 0 : r.randomAvatar) || null
				}
		},
		"./src/reddit/selectors/avatarMarketing.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				o = r("./src/lib/initializeClient/installReducer.ts"),
				s = r("./src/reddit/reducers/features/avatar/index.ts"),
				a = r("./src/reddit/selectors/experiments/econ/index.ts");
			Object(o.a)({
				features: {
					avatar: s.a
				}
			});
			const i = e => {
					var t, r;
					return !!(null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === r ? void 0 : r.marketing)
				},
				c = Object(n.a)(a.b, e => {
					var t, r, n;
					const o = null === (n = null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === r ? void 0 : r.marketing) || void 0 === n ? void 0 : n.marketingEvent;
					return (null == o ? void 0 : o.active) ? (null == o ? void 0 : o.assetUrls) && (null == o ? void 0 : o.assetUrls[0]) : null
				}, (e, t) => e ? t : null)
		},
		"./src/reddit/selectors/economics.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return h
			})), r.d(t, "o", (function() {
				return v
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "x", (function() {
				return x
			})), r.d(t, "f", (function() {
				return O
			})), r.d(t, "i", (function() {
				return y
			})), r.d(t, "q", (function() {
				return j
			})), r.d(t, "h", (function() {
				return _
			})), r.d(t, "z", (function() {
				return w
			})), r.d(t, "l", (function() {
				return C
			})), r.d(t, "n", (function() {
				return I
			})), r.d(t, "e", (function() {
				return P
			})), r.d(t, "d", (function() {
				return k
			})), r.d(t, "j", (function() {
				return E
			})), r.d(t, "p", (function() {
				return A
			})), r.d(t, "k", (function() {
				return S
			})), r.d(t, "r", (function() {
				return F
			})), r.d(t, "y", (function() {
				return L
			})), r.d(t, "u", (function() {
				return B
			})), r.d(t, "v", (function() {
				return H
			})), r.d(t, "b", (function() {
				return D
			})), r.d(t, "w", (function() {
				return R
			})), r.d(t, "s", (function() {
				return U
			})), r.d(t, "t", (function() {
				return G
			})), r.d(t, "g", (function() {
				return q
			})), r.d(t, "m", (function() {
				return W
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/reddit/featureFlags/index.ts"),
				o = r("./src/reddit/helpers/economics/sortBadges.ts"),
				s = r("./src/reddit/helpers/richTextJson/index.ts"),
				a = r("./src/reddit/models/Badge/index.ts"),
				i = r("./src/reddit/models/Badge/managementPage.ts"),
				c = r("./src/reddit/models/Payments/index.ts"),
				d = r("./src/reddit/models/Product/index.ts"),
				l = r("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				u = r("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				m = r("./src/reddit/selectors/commentSelector.ts"),
				p = r("./src/reddit/selectors/gold/powerups/index.ts"),
				b = r("./src/reddit/selectors/gold/powerups/benefitSettings.ts");
			const f = [],
				h = (e, t) => {
					const r = e.economics.subredditPremium[t];
					if (r && r.status === u.a.Fetched) {
						const e = r.data.subscription,
							t = e && e.active;
						if (t) {
							let e = Object.keys(t);
							return e.length > 1 && (e = e.filter(e => "provisional_membership" !== e)), t[e[0]] || null
						}
					}
					return null
				},
				v = (e, t) => {
					const r = h(e, t);
					return r && r.endsAt || null
				};
			var g;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(g || (g = {}));
			const x = (e, t) => {
					const r = e.economics.subredditPremium[t];
					if (r && r.status === u.a.Fetched) {
						const r = v(e, t),
							n = Date.now();
						return r && n < r ? g.Subscribed : g.NotSubscribed
					}
					return g.DontKnow
				},
				O = (e, t) => {
					const r = e.user.account,
						n = e.economics.subredditPremium[t];
					if (r && n && n.status === u.a.Fetched) {
						const n = ((e.users.appliedBadges[r.id] || {})[t] || f).map(t => e.badges.models[t]).filter(Boolean);
						if (n) return {
							[i.a.Loyalty]: n.find(e => e.placement === a.a.First),
							[i.a.Achievement]: n.find(e => e.placement === a.a.Second),
							[i.a.Cosmetic]: n.find(e => !e.placement)
						}
					}
					return {
						[i.a.Loyalty]: void 0,
						[i.a.Achievement]: void 0,
						[i.a.Cosmetic]: void 0
					}
				};

			function y(e, t) {
				return (null == e ? void 0 : e.length) ? Object(o.a)(e.map(e => t[e]).filter(Boolean)) : f
			}
			const j = (e, t, r) => {
					var o;
					if (!n.d.spBadges(e)) return f;
					return y(null === (o = e.users.appliedBadges[r]) || void 0 === o ? void 0 : o[t], e.badges.models)
				},
				_ = (e, t) => {
					const r = e.economics.subredditPremium[t.subredditId];
					if (r && r.status === u.a.Fetched) {
						const e = r.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function w(e, t) {
				const r = (e.economics.me.data.specialMemberships || {})[t];
				return !!(r && r.settings && r.settings.optOut)
			}

			function C(e, t) {
				const {
					badge: r,
					subredditId: n
				} = t, o = e.user.account ? e.user.account.id : void 0;
				if (Object(a.e)(r) && r.userId === o) return r;
				const s = e.badges.models,
					i = e.user.ownedBadges[n] || {},
					c = Object(a.e)(r) ? r.type : r.id;
				return Object.keys(i).map(e => s[e]).find(e => e && e.type === c)
			}

			function I(e, t, r, n) {
				const o = e.economics.subredditPremium[t];
				if (o && o.status === u.a.Fetched) {
					if (r === i.a.Loyalty || r === i.a.Achievement) return o.data.collections[r];
					if (r === i.a.Cosmetic && n) return o.data.collections[r][n]
				}
				return f
			}

			function P(e, t) {
				const r = I(e, t, i.a.Loyalty).find(e => "membership" === e.id);
				return r ? [].concat(r.locked, r.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : f
			}

			function k(e, t) {
				const r = e.economics.subredditPremium[t];
				if (r && r.status === u.a.Fetched) {
					const e = r.data.collections[i.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(a.f)
				}
				return f
			}

			function E(e, t) {
				return I(e, t, i.a.Cosmetic, i.c.Gallery).some(e => e.locked.some(e => Object(a.f)(e) || !!e.price))
			}
			const A = e => {
				const t = [],
					r = e.economics.paymentSystems;
				if (r.status === l.a.Fetched && r.data.stripe && r.data.stripe.sources) {
					const e = r.data.stripe.sources;
					for (const r in e) {
						const n = e[r];
						t.push({
							display: `${n.brand} •••• ${n.last4}`,
							id: r,
							type: c.a.SavedStripe
						})
					}
				}
				if (r.status === l.a.Fetched && r.data.braintree && r.data.braintree.sources) {
					const e = r.data.braintree.sources;
					for (const r in e) {
						const n = e[r];
						"PayPal" === n.brand && t.push({
							display: "PayPal",
							id: n.id,
							type: c.a.SavedPayPal
						})
					}
				}
				return t
			};
			var T;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(T || (T = {}));
			const M = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				S = (e, t) => Object.values(e.products.models).filter(e => e.type === d.a.Membership && t && e.subredditId === t),
				N = (e, t) => {
					if (!t) return {};
					const r = M.prices;
					S(e, t).forEach(e => {
						e.price && e.currency && (r[e.currency] = e.price)
					});
					const n = h(e, t);
					return n && n.price && n.currency && (r[n.currency] = n.price), r
				},
				F = (e, t) => {
					var r, n, o, s;
					const a = (null === (s = null === (o = null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.crypto) || void 0 === n ? void 0 : n.points) || void 0 === o ? void 0 : o[t || ""]) || void 0 === s ? void 0 : s.nomenclature) || M;
					return {
						prices: N(e, t),
						member: a.member || M.member,
						memberPlural: a.memberPlural || M.memberPlural,
						memberAlt: a.memberAlt || M.memberAlt,
						memberAltPlural: a.memberAltPlural || M.memberAltPlural,
						membership: a.membership || M.membership,
						membershipAlt: a.membershipAlt || M.membershipAlt
					}
				},
				L = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === l.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				B = (e, t) => {
					const r = e.user.ownedBadges[t] || {};
					return !!Object.keys(r).length
				},
				H = e => {
					const t = e.economics.paymentSystems;
					return t.status === l.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				D = (e, {
					subredditId: t
				}) => {
					if (!t) return;
					return e.economics.emotes[t]
				},
				R = (e, t) => {
					const r = t && e.economics.gifs[t];
					return !!r && r.hasGifProduct
				},
				U = (e, t, r) => {
					if (Object(p.r)(e, {
							subredditId: t
						})) return !0;
					const n = "replyToPost" !== r && Object(m.b)(e, {
						commentId: r
					});
					return !(!n || !Object(s.a)(n))
				},
				G = (e, t, r) => {
					if (!Object(b.b)(e, {
							subredditId: t
						})) return !1;
					if (Object(p.s)(e, {
							subredditId: t
						})) return !0;
					const o = "replyToPost" !== r && Object(m.b)(e, {
						commentId: r
					});
					if (o && Object(s.b)(o)) return !0;
					const a = n.d.spGiphy(e),
						i = R(e, t);
					return !(!a || !i) || a && i
				},
				q = (e, t, r) => {
					if (t) {
						const n = e.economics.banners.dismissedBanners[t];
						if (n && n.data) return !!n.data[r]
					}
				},
				W = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/experiments/adHeaderExperiment.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				o = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts");
			const a = Object(n.a)(e => Object(s.c)(e, {
				experimentName: o.kb,
				experimentEligibilitySelector: s.a
			}), e => e)
		},
		"./src/reddit/selectors/gild.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return n
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "f", (function() {
				return s
			})), r.d(t, "g", (function() {
				return a
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "e", (function() {
				return c
			})), r.d(t, "a", (function() {
				return d
			}));
			const n = e => e.gild.gildModalThingId,
				o = e => e.gild.correlationId || void 0,
				s = e => e.gild.isAnonymous,
				a = e => e.gild.isIframed,
				i = e => e.gild.message,
				c = e => e.gild.api.pending,
				d = e => e.gild.api.error
		},
		"./src/reddit/selectors/gold/awardIcon.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return m
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "a", (function() {
				return b
			})), r.d(t, "e", (function() {
				return f
			})), r.d(t, "d", (function() {
				return h
			}));
			var n = r("./src/lib/objectSelector/index.ts"),
				o = r("./src/reddit/models/Gold/Award.ts"),
				s = r("./src/reddit/selectors/commentSelector.ts"),
				a = r("./src/reddit/selectors/gold/giveAwards.ts"),
				i = r("./src/reddit/selectors/posts.ts"),
				c = r("./src/reddit/selectors/user.ts"),
				d = r("./src/reddit/selectors/userPrefs.ts");
			const l = [32, 48, 64, 128],
				u = (e, t, r) => {
					const n = t ? e[`staticIcon${r}`] : e[`icon${r}`];
					return (null == n ? void 0 : n.url) ? n.url : t ? e.staticIcon.url : e.icon.url
				},
				m = ({
					award: e,
					size: t,
					prefersReducedMotion: r,
					postOrComment: n
				}) => e.awardSubType === o.d.Group ? (({
					award: e,
					size: t,
					prefersReducedMotion: r,
					postOrComment: n
				}) => {
					let o = e;
					if ((null == n ? void 0 : n.awardCountsById) && n.awardCountsById[e.id] && e.tiers) {
						const t = n.awardCountsById[e.id];
						o = e.tiers.reduce((e, r) => t >= r.awardingsRequired ? r : e)
					}
					return u(o, r, t)
				})({
					award: e,
					size: t,
					prefersReducedMotion: r,
					postOrComment: n
				}) : u(e, r, t),
				p = Object(n.a)((e, {
					awards: t,
					minSize: r,
					postOrCommentId: n
				}) => {
					const o = Object(d.c)(e),
						a = l.find(e => e >= r),
						c = n ? Object(i.G)(e, {
							postId: n
						}) || Object(s.b)(e, {
							commentId: n
						}) : void 0;
					return t.reduce((e, t) => (t && (e[t.id] = m({
						award: t,
						size: a,
						prefersReducedMotion: o,
						postOrComment: c
					})), e), {})
				}),
				b = (e, {
					award: t,
					minSize: r,
					postOrCommentId: n
				}) => t ? p(e, {
					awards: [t],
					minSize: r,
					postOrCommentId: n
				})[t.id] : void 0,
				f = (e, {
					minSize: t,
					userName: r
				}) => {
					const n = Object(c.wb)(e, {
						userName: r
					});
					if (n && n.awardedLastMonth && n.awardedLastMonth.topAward) return b(e, {
						award: n.awardedLastMonth.topAward,
						minSize: t
					})
				},
				h = e => {
					const t = Object(a.b)(e),
						r = Object(a.a)(e);
					return b(e, {
						award: t,
						postOrCommentId: r || void 0,
						minSize: 512
					})
				}
		},
		"./src/reddit/selectors/gold/giveAwards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return o
			}));
			const n = e => e.gild.selectedAward,
				o = e => e.gild.gildedThing
		},
		"./src/reddit/selectors/goldPurchaseModals.ts": function(e, t, r) {
			"use strict";
			r.d(t, "q", (function() {
				return a
			})), r.d(t, "s", (function() {
				return i
			})), r.d(t, "r", (function() {
				return c
			})), r.d(t, "u", (function() {
				return d
			})), r.d(t, "t", (function() {
				return l
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "p", (function() {
				return m
			})), r.d(t, "a", (function() {
				return p
			})), r.d(t, "n", (function() {
				return b
			})), r.d(t, "o", (function() {
				return f
			})), r.d(t, "c", (function() {
				return h
			})), r.d(t, "h", (function() {
				return v
			})), r.d(t, "l", (function() {
				return g
			})), r.d(t, "w", (function() {
				return x
			})), r.d(t, "x", (function() {
				return O
			})), r.d(t, "v", (function() {
				return y
			})), r.d(t, "y", (function() {
				return j
			})), r.d(t, "f", (function() {
				return _
			})), r.d(t, "g", (function() {
				return w
			})), r.d(t, "i", (function() {
				return C
			})), r.d(t, "k", (function() {
				return I
			})), r.d(t, "j", (function() {
				return P
			})), r.d(t, "m", (function() {
				return k
			})), r.d(t, "e", (function() {
				return E
			})), r.d(t, "d", (function() {
				return A
			}));
			var n = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				o = r("./src/lib/initializeClient/installReducer.ts"),
				s = r("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(o.a)({
				features: {
					goldPurchase: s.a
				}
			});
			const a = e => e.features.goldPurchase.purchaseModal.activePage,
				i = e => e.features.goldPurchase.purchaseModal.gildThingId || void 0,
				c = e => e.features.goldPurchase.purchaseModal.correlationId || void 0,
				d = e => e.features.goldPurchase.purchaseModal.showModal,
				l = e => e.features.goldPurchase.purchaseModal.packageId,
				u = e => e.features.goldPurchase.packageOfferModal.packageId,
				m = e => e.features.goldPurchase.premiumPurchaseModal.renewInterval,
				p = e => {
					const t = Object(n.l)(e),
						r = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && r && t.find(e => e.mobileId === r) || null
				},
				b = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				f = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				h = e => e.features.goldPurchase.payment.paymentMethod,
				v = e => e.features.goldPurchase.payment.cardName,
				g = e => e.features.goldPurchase.payment.postalCode,
				x = e => e.features.goldPurchase.payment.savedCardsPending,
				O = e => e.features.goldPurchase.payment.savedCards,
				y = e => e.features.goldPurchase.payment.rememberCard,
				j = e => e.features.goldPurchase.payment.useSavedCard,
				_ = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				w = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				C = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				I = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				P = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				k = e => e.features.goldPurchase.payment.stripeToken.pending,
				E = e => e.features.goldPurchase.payment.paypal.passthrough,
				A = e => e.features.goldPurchase.payment.paypal.errorMessage
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~r~4c415e24.ab01f1c7c5a00e060904.js.map