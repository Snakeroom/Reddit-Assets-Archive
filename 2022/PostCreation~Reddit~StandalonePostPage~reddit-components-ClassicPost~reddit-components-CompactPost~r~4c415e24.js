// https://www.redditstatic.com/desktop2x/PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~r~4c415e24.d2beaa976cbddb270514.js
// Retrieved at 1/13/2022, 1:20:04 PM by Reddit Dataminer v1.0.0
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
				return f
			})), r.d(t, "i", (function() {
				return b
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
				f = Object(n.a)(a.h),
				b = Object(n.a)(a.i),
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
				return f
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
				f = Object(n.a)(o("enableAwardinCommunity"))
		},
		"./src/reddit/actions/gold/modals.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return h
			})), r.d(t, "b", (function() {
				return v
			})), r.d(t, "d", (function() {
				return x
			})), r.d(t, "c", (function() {
				return O
			})), r.d(t, "a", (function() {
				return _
			})), r.d(t, "f", (function() {
				return j
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
				f = r("./src/telemetry/index.ts"),
				b = r("./src/reddit/actions/gold/constants.ts");
			const h = Object(n.a)(b.L),
				g = Object(n.a)(b.f),
				v = () => async (e, t) => {
					const n = t();
					e(g()), Object(c.b)(c.a.GiftPremiumFlow);
					const {
						clickCloseModalEvent: o
					} = await r.e("givePremiumTrackers").then(r.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
					Object(f.a)(o()(n))
				}, y = Object(n.a)(b.K), x = ({
					awardId: e,
					correlationId: t,
					thingId: r
				}) => async (n, o) => {
					const i = o(),
						c = e ? Object(u.a)(i, e) : void 0;
					n(y({
						award: c && c.isEnabled ? c : void 0,
						thingId: r,
						correlationId: t
					})), n(Object(l.h)(a.a.GOLD_GILD_MODAL));
					const f = Object(p.H)(i, {
						thingId: r
					});
					let b = null;
					if (f) b = f.id;
					else if (Object(s.a)(r)) {
						const e = Object(m.H)(i, {
							postId: r
						});
						e && (b = e.belongsTo.id)
					}
					b && Object(d.a)(b, r)
				}, w = Object(n.a)(b.e), O = Object(n.a)(b.J), _ = () => async (e, t) => {
					const n = t(),
						s = Object(i.d)(n);
					if (Object(i.g)(n)) {
						const e = "close.gild";
						Object(o.a)({
							type: e
						})
					}
					e(w()), e(Object(l.g)(a.a.GOLD_GILD_MODAL));
					const {
						clickCloseGildModalEvent: d
					} = await Promise.resolve().then(r.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
					Object(f.a)(d(s)(n)), Object(c.b)(c.a.GildingFlow)
				}, j = () => async () => {
					Object(o.a)({
						type: "login.gild"
					})
				}
		},
		"./src/reddit/actions/snoovatar.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return f
			})), r.d(t, "a", (function() {
				return h
			})), r.d(t, "e", (function() {
				return v
			})), r.d(t, "c", (function() {
				return y
			})), r.d(t, "d", (function() {
				return x
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
			const f = "SET_AVATAR_USER",
				b = Object(o.a)(f),
				h = "RANDOM_AVATAR_LOADED",
				g = Object(o.a)(h),
				v = (e, t, r) => async (n, o, {
					apiContext: s
				}) => {
					var u, f, b, h;
					const g = Object(m.b)(o()),
						v = await (async (e, t, r, n, o) => Object(c.a)(Object(d.a)(e, [l.a]), {
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
						}))(s(), e, t, r, g);
					if (!v.ok) throw new Error("User avatar failed to save");
					return n(Object(p.A)(v.body)), {
						accountIcon: null === (f = null === (u = v.body) || void 0 === u ? void 0 : u.avatar) || void 0 === f ? void 0 : f.headshot_image_url,
						fullBodySnoovatar: null === (h = null === (b = v.body) || void 0 === b ? void 0 : b.avatar) || void 0 === h ? void 0 : h.image_url
					}
				}, y = () => async (e, t, {
					apiContext: r
				}) => {
					try {
						const t = await (async e => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${a.a.snoovatarUrl}/api/account`,
							method: i.jb.GET
						}))(r());
						t.ok && e(b(t.body))
					} catch (n) {
						s.c.captureException(n)
					}
				}, x = () => async (e, t, {
					apiContext: r
				}) => {
					try {
						const t = await (async e => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${a.a.snoovatarUrl}/api/snoovatars/random:byId`,
							method: i.jb.GET
						}))(r());
						t.ok && e(g(t.body))
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
					s && Object(d.a)(Object(i.f)(s)(m)), Object(c.J)(m) ? await t(Object(o.h)(a.a.SNOOVATAR_MODAL, {
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
				u = r("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				m = r("./src/reddit/components/AuthorLink/index.m.less"),
				p = r.n(m);
			t.a = e => {
				const t = Object(a.a)(e.className, p.a.authorLinkStyles, {
						[p.a.isLivestreaming]: e.isLivestreaming,
						[p.a.isStrong]: e.isStrong,
						[p.a.isUnstyled]: e.isUnstyled
					}),
					r = Object(l.a)(),
					n = Object(s.d)(),
					m = Object(s.e)(u.b),
					f = t => {
						if (m) {
							const r = e.isExternal || e.isLivestreaming || e.forceOpenInNewTab ? `${i.a.redditUrl}/user/${e.author}` : `/user/${e.author}/`;
							t.preventDefault(), n(Object(c.cb)(r))
						}
					};
				return e.isExternal || e.isLivestreaming || e.forceOpenInNewTab ? o.a.createElement("a", {
					className: t,
					href: `${i.a.redditUrl}/user/${e.author}`,
					rel: "noopener noreferrer",
					target: "_blank",
					onClick: f
				}, e.children) : e.isAuthorDeleted ? o.a.createElement("span", {
					className: Object(a.a)(p.a.deletedAuthorLink, e.className)
				}, e.children) : o.a.createElement(d.a, {
					className: t,
					style: e.style,
					to: {
						pathname: `/user/${e.author}/`,
						state: r
					},
					onClick: f
				}, e.children)
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
				return C
			})), r.d(t, "c", (function() {
				return S
			})), r.d(t, "a", (function() {
				return M
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
				f = r("./src/reddit/featureFlags/index.ts"),
				b = r("./src/reddit/helpers/economics/sortBadges.ts"),
				h = r("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				g = r("./src/reddit/models/Badge/index.ts");
			var v = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("CustomBadgeHovercardTooltip").then(r.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				y = r("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				x = r.n(y);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const O = "add-custom-badge-tooltip",
				_ = 100,
				j = 2 * _,
				P = 24;
			class C extends o.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, _)), this.mouseOverTooltip = e
					}, this.handleMouseLeave = () => {
						clearTimeout(this.exitTimeout), clearTimeout(this.enterTimeout), this.mouseOverTooltip = void 0, this.exitTimeout = window.setTimeout(() => {
							this.mouseOverTooltip || (clearTimeout(this.enterTimeout), this.props.onHideTooltip())
						}, j)
					}
				}
				render() {
					const {
						badges: e
					} = this.props;
					if (this.props.usePlaceholder && !e.length) return o.a.createElement("img", {
						className: Object(c.a)(x.a.image, this.props.className),
						src: `${i.a.assetPath}/img/badges/placeholder.png`
					});
					const t = `${O}-${this.props.uniqueIdentifier}`,
						r = this.props.badgeSize || P;
					return o.a.createElement(n.Fragment, null, this.props.showAddCustom && o.a.createElement("div", {
						className: x.a.wrapper,
						id: t,
						onMouseEnter: () => this.handleMouseEnter(t),
						onMouseLeave: () => this.handleMouseLeave()
					}, o.a.createElement("button", {
						className: x.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, o.a.createElement(h.a, {
						className: x.a.addCustom
					})), o.a.createElement(v, {
						className: x.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: t,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(b.a)(e).map(e => {
						const t = Object(g.d)(r, r, e),
							s = `badges-display-${e.id}-${this.props.uniqueIdentifier}`;
						return o.a.createElement(n.Fragment, {
							key: `badges-fragement-${e.id}`
						}, o.a.createElement("div", {
							className: Object(c.a)(x.a.wrapper, this.props.className),
							key: `wrapper-${e.id}`,
							onMouseEnter: () => this.handleMouseEnter(s),
							onMouseLeave: () => this.handleMouseLeave()
						}, o.a.createElement("img", {
							className: x.a.image,
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
							className: x.a.badgeHovercard,
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
			const k = [],
				I = Object(a.c)({
					badgeIds: (e, {
						subredditId: t,
						userId: r
					}) => {
						var n;
						return (null === (n = e.users.appliedBadges[r]) || void 0 === n ? void 0 : n[t]) || k
					},
					allBadges: e => e.badges.models,
					useHovercard: f.d.spSpecialMemberships
				}),
				E = Object(a.c)({
					badgeIds: (e, {
						subredditId: t
					}) => {
						var r;
						const n = e.user.account;
						return n && (null === (r = e.users.appliedBadges[n.id]) || void 0 === r ? void 0 : r[t]) || k
					},
					allBadges: e => e.badges.models,
					useHovercard: f.d.spSpecialMemberships
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
				return o.a.createElement(C, w({
					badges: s
				}, n))
			}
			const S = Object(s.b)(I, A)(T),
				M = Object(s.b)(E, A)(T)
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
				f = r("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.m.less"),
				b = r.n(f);

			function h(e) {
				var t, r;
				const {
					currentUser: n
				} = Object(m.a)(), s = null !== (t = e.badges) && void 0 !== t ? t : Object(p.i)(e.badgeIds, null !== (r = e.allBadges) && void 0 !== r ? r : {});
				return s.length ? o.a.createElement(l.b, {
					useHovercard: !0,
					badges: s,
					badgeSize: e.badgeSize,
					className: Object(i.a)(e.className, b.a.badge),
					uniqueIdentifier: e.uniqueIdentifier,
					showAddCustom: e.customBadgesEnabled && e.premiumEnabled && e.showAddCustom && s.length < 2 && (null == n ? void 0 : n.id) === e.userId,
					subredditId: e.subredditId,
					userId: e.userId,
					onShowTooltip: e.onShowTooltip,
					onHideTooltip: e.onHideTooltip,
					onOpenUploadDialog: e.onOpenUploadDialog
				}) : null
			}
			const g = [];
			t.b = Object(s.b)(() => Object(a.c)({
				badgeIds: (e, {
					subredditId: t,
					userId: r
				}) => {
					var n;
					return (null === (n = e.users.appliedBadges[r]) || void 0 === n ? void 0 : n[t]) || g
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
				getComponent: () => Object(a.a)(() => r.e("AuthorHovercard").then(r.bind(null, "./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx"))).then(e => e.default),
				LoadingComponent: c
			})
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
				return f
			})), r.d(t, "n", (function() {
				return b
			})), r.d(t, "p", (function() {
				return h
			})), r.d(t, "o", (function() {
				return g
			})), r.d(t, "f", (function() {
				return v
			})), r.d(t, "m", (function() {
				return y
			})), r.d(t, "h", (function() {
				return x
			})), r.d(t, "j", (function() {
				return w
			})), r.d(t, "k", (function() {
				return O
			})), r.d(t, "g", (function() {
				return _
			})), r.d(t, "i", (function() {
				return j
			})), r.d(t, "q", (function() {
				return P
			})), r.d(t, "d", (function() {
				return C
			})), r.d(t, "l", (function() {
				return k
			})), r.d(t, "t", (function() {
				return I
			})), r.d(t, "u", (function() {
				return E
			})), r.d(t, "r", (function() {
				return A
			})), r.d(t, "a", (function() {
				return T
			})), r.d(t, "s", (function() {
				return S
			})), r.d(t, "c", (function() {
				return M
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
				f = o.a.section("ModalBody", u.a),
				b = o.a.section("ModalPostPreview", u.a),
				h = o.a.p("ModalText", u.a),
				g = o.a.div("ModalSmallText", u.a),
				v = o.a.div("ModalDescriptionText", u.a),
				y = o.a.div("ModalMetaText", u.a),
				x = o.a.label("ModalFormItem", u.a),
				w = o.a.wrapped(c.a, "ModalInput", u.a),
				O = o.a.label("ModalInputLabel", u.a),
				_ = o.a.footer("ModalFooter", u.a),
				j = o.a.header("ModalHeader", u.a),
				P = o.a.div("ModalTitle", u.a),
				C = o.a.div("ModalAnnotation", u.a),
				k = o.a.div("ModalMain", u.a),
				I = o.a.textarea("TextArea", u.a),
				E = o.a.wrapped(i.l, "WarningButton", u.a),
				A = o.a.wrapped(i.l, "PrimaryButton", u.a),
				T = o.a.wrapped(i.o, "CancelButton", u.a),
				S = o.a.wrapped(i.r, "RemoveButton", u.a),
				M = ({
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
				return he
			})), r.d(t, "e", (function() {
				return ge
			})), r.d(t, "a", (function() {
				return ve
			})), r.d(t, "b", (function() {
				return we
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
				f = r("./src/reddit/constants/experiments.ts"),
				b = r("./src/reddit/helpers/isCrosspost.ts"),
				h = r("./src/reddit/helpers/trackers/powerups.ts"),
				g = r("./src/reddit/hooks/useInfoTextTooltip.ts"),
				v = r("./src/reddit/hooks/useTracking.ts"),
				y = r("./src/reddit/icons/svgs/Crosspost/index.tsx"),
				x = r("./src/reddit/icons/svgs/Powerup/index.tsx"),
				w = r("./src/reddit/components/AuthorLink/index.tsx"),
				O = r("./node_modules/fbt/lib/FbtPublic.js"),
				_ = r("./src/reddit/models/Audio/index.ts"),
				j = r("./src/reddit/components/Econ/Audio/index.m.less"),
				P = r.n(j);
			var C = ({
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
						className: Object(i.a)(P.a.metaStatus, {
							[P.a.isLive]: t.isLive
						})
					}, t.isLive && O.fbt._("Live", null, {
						hk: "1wPVEx"
					}), !t.isLive && r === _.a.Available && O.fbt._("Recording", null, {
						hk: "1bhFSx"
					}), !t.isLive && r === _.a.Processing && O.fbt._("Processing...", null, {
						hk: "2MMuzJ"
					})))
				},
				k = r("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				I = r("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				E = r("./src/reddit/components/Flair/index.tsx"),
				A = r("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				T = r("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				S = r("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				M = r("./src/reddit/components/HumanDate/index.tsx"),
				F = r("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				N = r("./src/reddit/components/JSAPIContainers/index.tsx"),
				B = r("./src/reddit/components/QuarantinedLabel/index.tsx"),
				L = r("./src/reddit/components/SponsoredLabel/index.tsx"),
				R = r("./src/reddit/components/SubredditNameLink/index.tsx"),
				D = r("./src/reddit/constants/posts.ts"),
				G = r("./src/reddit/contexts/InsideOverlay.tsx"),
				H = r("./src/reddit/controls/MetaSeparator/index.tsx"),
				U = r("./src/lib/portal/index.tsx"),
				z = r("./src/reddit/constants/elementIds.ts"),
				W = o.a.memo((function({
					children: e
				}) {
					const [t, r] = Object(n.useState)(!1);
					return Object(n.useEffect)(() => (r(!0), () => r(!1)), []), t ? o.a.createElement(U.a, {
						container: document.getElementById(z.d)
					}, o.a.Children.only(e)) : null
				})),
				V = r("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				q = r("./src/reddit/helpers/styles/smartTextColor.ts"),
				Y = r("./src/reddit/hooks/useClickSourceData.ts"),
				K = r("./src/reddit/icons/fonts/helpers.tsx"),
				J = r("./src/reddit/icons/fonts/commonStyles.m.less"),
				Q = r.n(J);
			var X = e => o.a.createElement("i", {
					className: Object(i.a)(Object(K.b)("admin", e.isFilled), Q.a.adminIcon, e.className),
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, o.a.createElement(K.a, null, e.desc)),
				Z = (r("./src/reddit/icons/fonts/Premium/index.tsx"), r("./src/reddit/components/UserIcon/index.tsx")),
				$ = r("./src/reddit/constants/postLayout.ts"),
				ee = r("./src/reddit/contexts/PageLayer/index.tsx"),
				te = r("./src/reddit/models/Flair/index.ts"),
				re = r("./src/reddit/models/NewStructuredStyles/index.ts"),
				ne = r("./src/reddit/models/Post/index.ts"),
				oe = r("./src/reddit/models/Subreddit/index.ts"),
				se = r("./src/reddit/selectors/authorFlair.ts"),
				ae = r("./src/reddit/selectors/experiments/adHeaderExperiment.ts"),
				ie = r("./src/reddit/selectors/experiments/econ/index.ts"),
				ce = r("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				de = r("./src/reddit/selectors/gold/powerups/index.ts"),
				le = r("./src/reddit/selectors/platform.ts"),
				ue = r("./src/reddit/selectors/userFlair.ts"),
				me = r("./src/reddit/components/PostTopMeta/index.m.less"),
				pe = r.n(me);
			const {
				fbt: fe
			} = r("./node_modules/fbt/lib/FbtPublic.js"), be = {
				placement: "top"
			};
			var he;
			! function(e) {
				e.StickyPost = "sticky", e.Lightbox = "lightbox", e.TopAwardedModal = "topAwarded"
			}(he || (he = {}));
			const ge = e => Object(q.a)(Object(V.a)(e), re.a.metaText, re.b.metaText),
				ve = l.a.wrapped(H.b, "MetaSeparator", pe.a),
				ye = l.a.span("text", pe.a),
				xe = Object(ee.u)(),
				we = e => {
					const t = Object(g.a)(be),
						r = fe._("Reddit admin, speaking officially", null, {
							hk: "3vg8wE"
						}),
						n = fe._("Reddit contractor", null, {
							hk: "3APwEh"
						}),
						s = !e.isDeleted && e.post.distinguishType === c.G.ADMIN;
					return o.a.createElement(w.a, {
						author: e.post.author,
						className: Object(i.a)(pe.a.authorLink, {
							[pe.a.isActionFont]: e.showActionFont
						}),
						"data-click-id": "user",
						forceOpenInNewTab: e.forceOpenInNewTab,
						isUnstyled: !0,
						style: e.style
					}, `u/${e.post.author}`, s && o.a.createElement(o.a.Fragment, null, o.a.createElement(X, {
						className: pe.a.adminIcon,
						isFilled: !0,
						desc: r
					}), o.a.createElement("span", {
						className: pe.a.iconTooltipHoverBox,
						onMouseOut: t.hide,
						onMouseOver: t.show,
						ref: t.target.ref
					}), o.a.createElement(W, null, o.a.createElement(F.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, r))), e.renderContractorBadge && o.a.createElement(o.a.Fragment, null, o.a.createElement(X, {
						className: pe.a.contractorIcon,
						isFilled: !0,
						desc: n
					}), o.a.createElement("span", {
						className: pe.a.iconTooltipHoverBox,
						onMouseOut: t.hide,
						onMouseOver: t.show,
						ref: t.target.ref
					}), o.a.createElement(W, null, o.a.createElement(F.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, r))), !1)
				},
				Oe = o.a.memo((function(e) {
					const {
						className: t,
						forceOpenInNewTab: r,
						isOverlay: d,
						pageLayer: l,
						post: w,
						showSub: O = !1,
						showTimestamp: j = !0,
						subredditOrProfile: P,
						tooltipType: G
					} = e, H = Object(s.d)(), U = Object(v.a)(), z = Object(s.e)(ae.a), V = Object(s.e)(le.d), q = Object(s.e)(le.g) || ["popular", "all"].includes(V || ""), K = Object(s.e)(ce.b), J = w.isSponsored || Object(a.u)(l), Q = !(!J || !z || Object(f.lf)(z));
					Object(n.useEffect)(() => {
						Q && H(Object(p.d)(w.author))
					}, []);
					const X = w.belongsTo.id,
						re = Object(n.useCallback)(e => Object(se.a)(e, {
							post: w
						}), [w]),
						me = Object(s.e)(re),
						he = Object(Y.a)(),
						xe = Object(n.useCallback)(e => Object(ue.a)(e, {
							subredditId: X
						}), [X]),
						Oe = Object(s.e)(xe),
						_e = Object(n.useCallback)(e => Object(de.a)(e, {
							subredditId: X,
							userId: w.authorId
						}), [X, w.authorId]),
						je = Object(s.e)(ie.B),
						Pe = Object(s.e)(_e),
						Ce = Object(n.useCallback)(e => Object(ue.e)(e, {
							subredditId: X
						}), [X]),
						ke = Object(s.e)(Ce),
						Ie = Object(g.a)(be),
						Ee = Object(g.a)(be),
						Ae = l && l.meta && l.meta.name === c.Mb.COMMENTS,
						Te = Object(b.a)(w),
						Se = ke === te.b.Left,
						Me = w.authorIsContractor && !!P && P.type === oe.f.EmployeesOnly,
						Fe = !!P && Pe,
						Ne = !d && !Ae,
						Be = () => o.a.createElement(ve, {
							className: e.metaSeparatorClassName
						}, "•"),
						Le = Object(s.e)(e => Object(ee.R)(e, {
							pageLayer: l
						})),
						Re = $.e[Le] === $.d.Card,
						De = q && Re || !!Ae,
						Ge = Q && (q || !!Ae),
						He = o.a.createElement(o.a.Fragment, null, me && Se && o.a.createElement("div", {
							className: pe.a.flairContainer
						}, o.a.createElement(E.b, {
							disabled: !Oe,
							flair: me,
							forceSmallEmojis: !0,
							usesCommunityStyles: Ne
						})), Object(ne.o)(w.author) ? o.a.createElement(we, {
							post: w,
							isDeleted: !0,
							renderContractorBadge: Me,
							showActionFont: Ge,
							style: Q ? {} : {
								color: ge(e)
							}
						}) : o.a.createElement(o.a.Fragment, null, o.a.createElement(k.b, {
							className: pe.a.badge,
							subredditId: X,
							uniqueIdentifier: `${w.id}-${d}`,
							userId: w.authorId
						}), o.a.createElement(T.b, {
							postOrComment: w,
							tooltipType: G
						}, o.a.createElement(I.b, {
							ignore: !!w.distinguishType && w.distinguishType !== c.G.NONE,
							subredditId: X,
							userId: w.authorId
						}, o.a.createElement(we, {
							post: w,
							forceOpenInNewTab: r,
							renderContractorBadge: Me,
							style: Q ? {} : {
								color: ge(e)
							},
							showActionFont: Ge
						}))), Fe && o.a.createElement(o.a.Fragment, null, o.a.createElement("button", {
							className: pe.a.powerupBadge,
							onMouseEnter: Ee.show,
							onMouseLeave: Ee.hide,
							onClick: () => {
								U(Object(h.J)(G ? "post" : "postlist")), H(Object(u.g)("post_top_supporter_badge"))
							},
							ref: Ee.target.ref
						}, o.a.createElement(x.a, {
							className: pe.a.powerupIcon
						})), o.a.createElement(W, null, o.a.createElement(F.a, {
							arrowProps: Ee.arrowProps,
							popperProps: Ee.popperProps,
							visible: Ee.visible
						}, fe._("Powerups Top Supporter", null, {
							hk: "1GLWsz"
						}))))), me && !Se && o.a.createElement("div", {
							className: pe.a.flairContainer
						}, o.a.createElement(E.b, {
							disabled: !Oe,
							flair: me,
							forceSmallEmojis: !0,
							usesCommunityStyles: Ne
						})), w.belongsTo.type === D.a.SUBREDDIT && !Object(ne.o)(w.author) && o.a.createElement(A.a, {
							className: pe.a.publicWallet,
							contentId: w.id,
							metaSeparator: o.a.createElement(Be, null),
							subredditId: X,
							userId: w.authorId,
							username: w.author
						})),
						Ue = fe._("{=Posted by}{author}", [fe._param("=Posted by", o.a.createElement(ye, {
							style: {
								color: ge(e)
							}
						}, fe._("Posted by", null, {
							hk: "274iff"
						}))), fe._param("author", He)], {
							hk: "1abNaj"
						}),
						ze = o.a.createElement(o.a.Fragment, null, o.a.createElement(y.a, {
							className: pe.a.crosspostIcon
						}), fe._("{=Crossposted by}{author}", [fe._param("=Crossposted by", o.a.createElement(ye, {
							style: {
								color: ge(e)
							}
						}, fe._("Crossposted by", null, {
							hk: "1YnHU8"
						}))), fe._param("author", He)], {
							hk: "3BfJwk"
						})),
						We = () => Te || Q ? Te ? ze : He : Ue;
					return o.a.createElement("div", {
						className: Object(i.a)(pe.a.container, t)
					}, O && P && o.a.createElement(S.a, {
						postId: w.id,
						subredditName: P.name,
						tooltipType: G
					}, o.a.createElement(R.a, {
						"data-click-id": "subreddit",
						to: {
							pathname: P.url,
							state: he
						}
					}, P.displayText)), P && P.isQuarantined && o.a.createElement(B.a, null), O && !Te && o.a.createElement(Be, null), Q ? o.a.createElement(o.a.Fragment, null, (null == P ? void 0 : P.icon) && De && o.a.createElement(Z.a, {
						iconUrl: P.icon.url,
						isNSFW: P.isNSFW,
						userName: P.name,
						className: pe.a.userIcon,
						omitResponsivePresenceWrapper: !0
					}), We(), J && o.a.createElement(o.a.Fragment, null, o.a.createElement(Be, null), o.a.createElement(L.a, {
						adHeaderVariant: z,
						greyTextColor: ge(e)
					}))) : o.a.createElement(o.a.Fragment, null, J && o.a.createElement(o.a.Fragment, null, o.a.createElement(L.a, null), o.a.createElement(Be, null)), We()), o.a.createElement(N.e, null), j && !Q && o.a.createElement(o.a.Fragment, null, o.a.createElement("a", {
						className: pe.a.externalLink,
						"data-click-id": "timestamp",
						href: w.permalink,
						onMouseEnter: Ie.show,
						onMouseLeave: Ie.hide,
						ref: Ie.target.ref,
						style: {
							color: ge(e)
						},
						target: "_blank",
						rel: "nofollow noopener noreferrer",
						onClick: e => {
							K && (e.preventDefault(), H(Object(m.ab)(w.permalink, w.id)))
						}
					}, o.a.createElement(M.d, {
						seconds: w.created / c.Rb
					})), o.a.createElement(W, null, o.a.createElement(F.a, {
						arrowProps: Ie.arrowProps,
						popperProps: Ie.popperProps,
						visible: Ie.visible
					}, o.a.createElement(M.b, {
						seconds: w.created / c.Rb
					})))), Object(_.b)(w) && je && o.a.createElement(C, {
						post: w
					}))
				}));
			t.d = xe(Object(G.b)(Object(d.a)(Oe)))
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
				return f
			})), r.d(t, "h", (function() {
				return h
			})), r.d(t, "i", (function() {
				return g
			}));
			var n = r("./src/reddit/models/Gold/Award.ts"),
				o = r("./src/reddit/selectors/telemetry.ts"),
				s = r("./src/reddit/helpers/correlationIdTracker.ts"),
				a = r("./src/reddit/helpers/trackers/gild.ts");
			const i = e => ({
					...o.o(e),
					screen: o.ab(e),
					subreddit: o.jb(e),
					userSubreddit: o.sb(e)
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
				f = (e, t, r) => n => ({
					...i(n),
					source: "create_award",
					action: e,
					correlationId: Object(s.c)(s.a.AwardCreationFlow),
					noun: t,
					goldPurchase: r ? c(r) : null
				}),
				b = (e, t, r) => n => ({
					...i(n),
					source: "awards",
					action: "click",
					noun: r,
					goldPurchase: c(e),
					profile: o.S(n, t),
					subreddit: o.kb(n, t)
				}),
				h = (e, t) => b(e, t, "disable_in_community"),
				g = (e, t) => b(e, t, "enable_in_community")
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
				return f
			})), r.d(t, "clickHideAward", (function() {
				return b
			})), r.d(t, "clickConfirmHideAward", (function() {
				return h
			})), r.d(t, "clickCancelHideAward", (function() {
				return g
			})), r.d(t, "clickAwardReportFlow", (function() {
				return y
			})), r.d(t, "clickCancelAwardReportFlow", (function() {
				return x
			})), r.d(t, "clickFlagAwardUsage", (function() {
				return w
			})), r.d(t, "clickCancelFlagAwardUsage", (function() {
				return O
			})), r.d(t, "clickConfirmFlagAwardUsage", (function() {
				return _
			})), r.d(t, "clickReportAward", (function() {
				return j
			})), r.d(t, "clickCancelReportAward", (function() {
				return P
			})), r.d(t, "clickConfirmReportAward", (function() {
				return C
			})), r.d(t, "viewGildModalEvent", (function() {
				return k
			})), r.d(t, "clickSelectAwardEvent", (function() {
				return I
			})), r.d(t, "triggerAnonymousEvent", (function() {
				return E
			})), r.d(t, "clickMessageInputEvent", (function() {
				return A
			})), r.d(t, "typeMessageInputEvent", (function() {
				return T
			})), r.d(t, "clickLearnMoreLinkEvent", (function() {
				return S
			})), r.d(t, "clickQuestionMarkEvent", (function() {
				return M
			})), r.d(t, "clickConfirmAwardEvent", (function() {
				return F
			})), r.d(t, "clickGetPremiumEvent", (function() {
				return N
			})), r.d(t, "clickAddCoinsButtonEvent", (function() {
				return B
			})), r.d(t, "clickNextButtonEvent", (function() {
				return L
			})), r.d(t, "clickCloseGildModalEvent", (function() {
				return R
			})), r.d(t, "viewKarmaSuccessEvent", (function() {
				return D
			})), r.d(t, "clickFilterEvent", (function() {
				return G
			})), r.d(t, "clickNextFiltersEvent", (function() {
				return H
			})), r.d(t, "clickPreviousFiltersEvent", (function() {
				return U
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
					comment: t ? o.j(e, t) : void 0,
					correlationId: Object(c.b)(e) || Object(a.e)(a.a.GildingFlow, !1),
					post: t ? o.I(e, t) : void 0,
					screen: o.ab(e),
					subreddit: o.jb(e),
					userSubreddit: o.sb(e)
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
				f = e => t => ({
					...u(t, e),
					source: Object(i.a)(e) ? "comment" : "post",
					action: "click",
					noun: "add_award",
					feed: o.r(t)
				}),
				b = (e, t) => r => ({
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
				g = (e, t) => r => ({
					...u(r, t),
					source: Object(i.a)(t) ? "comment" : "post",
					action: "click",
					noun: "cancel_hide_award",
					goldPurchase: l(e)
				}),
				v = e => (t, r) => n => ({
					...u(n, r),
					source: Object(i.a)(r) ? "comment" : "post",
					action: "click",
					noun: e,
					goldPurchase: l(t)
				}),
				y = v("award_hovercard_report"),
				x = v("cancel_award_hovercard_report"),
				w = v("flag_award"),
				O = v("cancel_flag_award"),
				_ = v("confirm_flag_award"),
				j = v("report_community_award"),
				P = v("cancel_report_community_award"),
				C = v("confirm_report_community_award"),
				k = (e, t, r) => n => ({
					...u(n, r),
					source: "give_gold",
					action: "view",
					noun: "page",
					goldPurchase: {
						defaultOption: e,
						defaultAnonymous: t
					}
				}),
				I = (e, t, r) => n => ({
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
				S = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "learn_more"
				}),
				M = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "question"
				}),
				F = (e, t) => r => ({
					...u(r, e),
					source: "give_gold",
					action: "click",
					noun: "confirm",
					goldPurchase: {
						contentType: Object(i.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				N = (e, t) => r => ({
					...u(r, e),
					source: "give_gold",
					action: "click",
					noun: "get_premium",
					goldPurchase: {
						contentType: Object(i.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				B = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "add_coins"
				}),
				L = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "next"
				}),
				R = e => t => ({
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
				G = e => t => ({
					...u(t),
					source: "give_gold",
					action: "click",
					noun: "filter",
					goldPurchase: {
						filterId: e.tag,
						filterName: e.content.markdown
					}
				}),
				H = () => e => ({
					...u(e),
					source: "give_gold",
					action: "click",
					noun: "next_filters"
				}),
				U = () => e => ({
					...u(e),
					source: "give_gold",
					action: "click",
					noun: "previous_filters"
				})
		},
		"./src/reddit/helpers/trackers/goldPayment.ts": function(e, t, r) {
			"use strict";
			r.d(t, "g", (function() {
				return b
			})), r.d(t, "b", (function() {
				return h
			})), r.d(t, "e", (function() {
				return g
			})), r.d(t, "d", (function() {
				return v
			})), r.d(t, "c", (function() {
				return y
			})), r.d(t, "a", (function() {
				return x
			})), r.d(t, "f", (function() {
				return w
			})), r.d(t, "h", (function() {
				return O
			})), r.d(t, "i", (function() {
				return _
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
				f = r("./src/reddit/helpers/trackers/communityAwards.ts");
			const b = (e, t) => {
					const {
						thingId: r,
						packageId: l
					} = t, b = !!r, h = s.b(e), g = h ? Object(u.getAwardTypeFromAward)(h) : null, v = b ? g : i.o(e) ? d.GoldPurchaseType.Premium : d.GoldPurchaseType.Coins, y = r ? Object(p.a)(r) ? "comment" : "post" : void 0, x = l || i.t(e), w = [...Object(a.d)(e), ...Object(a.f)(e)].filter(e => e.mobileId === x)[0], O = t.offerContext || (h && 0 === h.coinPrice ? o.a.StorefrontFreeAward : Object(o.d)(w, b)), _ = w ? Math.round(1e4 * (w.baselinePennies - w.pennies) / w.baselinePennies) / 100 : 0, j = w ? Math.round(1e4 * (w.coins - w.baselineCoins) / w.coins) / 100 : 0, P = w ? w.baselinePennies !== w.pennies ? `${_}_percent_price` : w.baselineCoins !== w.coins ? `${j}_percent_bonus` : void 0 : void 0, C = v === d.GoldPurchaseType.Premium ? n.yb : w ? w.pennies : void 0;
					return {
						...c.o(e),
						comment: r ? c.j(e, r) : null,
						correlationId: i.r(e) || Object(m.e)(m.a.GoldPayment, !1),
						post: r ? c.I(e, r) : null,
						screen: c.ab(e),
						subreddit: r ? c.jb(e) : null,
						goldPurchase: {
							...h ? Object(f.a)(h) : null,
							type: v,
							gildedContent: b,
							contentType: y,
							numberCoins: w ? w.coins : void 0,
							offerContext: O,
							offerType: P
						},
						payment: {
							currency: "USD",
							amountInSmallestDenom: C
						},
						purchase: {
							priceMicros: C
						}
					}
				},
				h = (e, t, r) => n => ({
					...b(n, {
						packageId: t,
						thingId: e,
						offerContext: r
					}),
					source: "gold_payment",
					action: "click",
					noun: "close"
				}),
				g = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "paypal"
				}),
				v = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "credit_card"
				}),
				y = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "complete_credit_card"
				}),
				x = (e, t) => r => ({
					...b(r, {
						packageId: e,
						offerContext: t
					}),
					source: "gold_payment",
					action: "click",
					noun: "confirm"
				}),
				w = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				O = (e, t, r) => n => {
					const o = b(n, {
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
				_ = e => t => {
					var r;
					const n = b(t, {
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
				return f
			})), r.d(t, "p", (function() {
				return h
			})), r.d(t, "d", (function() {
				return g
			})), r.d(t, "j", (function() {
				return v
			})), r.d(t, "l", (function() {
				return x
			})), r.d(t, "i", (function() {
				return w
			})), r.d(t, "b", (function() {
				return O
			})), r.d(t, "o", (function() {
				return j
			})), r.d(t, "c", (function() {
				return P
			})), r.d(t, "a", (function() {
				return k
			})), r.d(t, "n", (function() {
				return I
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
					} = Object(a.mb)(r, {
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
				f = e => t => ({
					...s.o(t),
					source: "snoovatar",
					action: "set_to_profile",
					noun: "snoovatar",
					snoovatar: {
						userGeneratedSource: e
					}
				}),
				b = e => t => r => ({
					source: "avatar",
					action: e,
					noun: "community_spaces",
					...s.o(r),
					snoovatar: s.hb(r),
					actionInfo: {
						paneName: "avatar_community_spaces" + (t ? "_control" : "")
					}
				}),
				h = b("view"),
				g = b("click"),
				v = b("dismiss"),
				y = (e, t, r) => () => n => ({
					source: e,
					action: t,
					noun: r,
					...s.o(n),
					snoovatar: s.hb(n)
				}),
				x = y("anniversary_achievement", "view", "anniversary_achievement"),
				w = y("anniversary_achievement", "click", "close"),
				O = y("anniversary_achievement", "click", "equip"),
				_ = e => () => t => ({
					...s.o(t),
					source: "gold_top_nav",
					action: e,
					noun: "quick_create_cta"
				}),
				j = _("view"),
				P = _("click"),
				C = (e, t, r) => n => ({
					source: e,
					action: t,
					noun: r,
					...s.o(n),
					actionInfo: {
						pageType: "onboarding"
					},
					snoovatar: s.hb(n)
				}),
				k = e => C("onboarding", "click", e),
				I = () => C("avatar", "view", "onboarding")
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
		"./src/reddit/models/Gold/ProductOffer.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return n
			})), r.d(t, "e", (function() {
				return s
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "d", (function() {
				return c
			}));
			var n, o = r("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.CoinConversion = "user-coins-in-subreddit", e.Powerups = "powerups", e.Premium = "premium"
			}(n || (n = {}));
			const s = {
				[n.Powerups]: () => o.fbt._("Reddit - Buy Powerups", null, {
					hk: "4sEI31"
				}),
				[n.Premium]: () => o.fbt._("Reddit - Buy Premium", null, {
					hk: "19EtMU"
				})
			};
			var a, i;
			! function(e) {
				e.Month = "MONTH", e.Year = "YEAR"
			}(a || (a = {})),
			function(e) {
				e.GildFlow = "gild_flow", e.LowCoinBalance = "low_coin_balance", e.NewUserTargetedOffer = "new_user_targeted_offer", e.RepeatUserTargetedOffer = "repeat_user_targeted_offer", e.StorefrontFreeAward = "storefront_free_award", e.CoinSale = "coin_sale", e.AvatarNewGear = "avatar_new_gear"
			}(i || (i = {}));
			const c = (e, t) => {
				const r = e && e.dealInfo && e.dealInfo.type,
					n = "low_coin_upsell" === r,
					o = "new_purchaser" === r,
					s = "repeat_purchaser" === r;
				return t ? i.GildFlow : n ? i.LowCoinBalance : o ? i.NewUserTargetedOffer : s ? i.RepeatUserTargetedOffer : void 0
			}
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
			var f = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				b = r("./src/reddit/actions/modal.ts"),
				h = r("./src/reddit/constants/modals.ts");
			var g = (e = null, t) => {
				var r;
				switch (t.type) {
					case f.o:
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
					case b.c:
						return (null === (r = t.payload) || void 0 === r ? void 0 : r.id) === h.a.SNOOVATAR_MODAL ? d : e;
					default:
						return e
				}
			};
			var v = (e = null, t) => {
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
				marketing: g,
				avatarUser: c,
				randomAvatar: v
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
				c = Object(n.a)(a.d, e => {
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
				return g
			})), r.d(t, "a", (function() {
				return v
			})), r.d(t, "x", (function() {
				return y
			})), r.d(t, "f", (function() {
				return x
			})), r.d(t, "i", (function() {
				return w
			})), r.d(t, "q", (function() {
				return O
			})), r.d(t, "h", (function() {
				return _
			})), r.d(t, "z", (function() {
				return j
			})), r.d(t, "l", (function() {
				return P
			})), r.d(t, "n", (function() {
				return C
			})), r.d(t, "e", (function() {
				return k
			})), r.d(t, "d", (function() {
				return I
			})), r.d(t, "j", (function() {
				return E
			})), r.d(t, "p", (function() {
				return A
			})), r.d(t, "k", (function() {
				return M
			})), r.d(t, "r", (function() {
				return N
			})), r.d(t, "y", (function() {
				return B
			})), r.d(t, "u", (function() {
				return L
			})), r.d(t, "v", (function() {
				return R
			})), r.d(t, "b", (function() {
				return D
			})), r.d(t, "w", (function() {
				return G
			})), r.d(t, "s", (function() {
				return H
			})), r.d(t, "t", (function() {
				return U
			})), r.d(t, "g", (function() {
				return z
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
				f = r("./src/reddit/selectors/gold/powerups/benefitSettings.ts");
			const b = [],
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
				g = (e, t) => {
					const r = h(e, t);
					return r && r.endsAt || null
				};
			var v;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(v || (v = {}));
			const y = (e, t) => {
					const r = e.economics.subredditPremium[t];
					if (r && r.status === u.a.Fetched) {
						const r = g(e, t),
							n = Date.now();
						return r && n < r ? v.Subscribed : v.NotSubscribed
					}
					return v.DontKnow
				},
				x = (e, t) => {
					const r = e.user.account,
						n = e.economics.subredditPremium[t];
					if (r && n && n.status === u.a.Fetched) {
						const n = ((e.users.appliedBadges[r.id] || {})[t] || b).map(t => e.badges.models[t]).filter(Boolean);
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

			function w(e, t) {
				return (null == e ? void 0 : e.length) ? Object(o.a)(e.map(e => t[e]).filter(Boolean)) : b
			}
			const O = (e, t, r) => {
					var o;
					if (!n.d.spBadges(e)) return b;
					return w(null === (o = e.users.appliedBadges[r]) || void 0 === o ? void 0 : o[t], e.badges.models)
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

			function j(e, t) {
				const r = (e.economics.me.data.specialMemberships || {})[t];
				return !!(r && r.settings && r.settings.optOut)
			}

			function P(e, t) {
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

			function C(e, t, r, n) {
				const o = e.economics.subredditPremium[t];
				if (o && o.status === u.a.Fetched) {
					if (r === i.a.Loyalty || r === i.a.Achievement) return o.data.collections[r];
					if (r === i.a.Cosmetic && n) return o.data.collections[r][n]
				}
				return b
			}

			function k(e, t) {
				const r = C(e, t, i.a.Loyalty).find(e => "membership" === e.id);
				return r ? [].concat(r.locked, r.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : b
			}

			function I(e, t) {
				const r = e.economics.subredditPremium[t];
				if (r && r.status === u.a.Fetched) {
					const e = r.data.collections[i.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(a.f)
				}
				return b
			}

			function E(e, t) {
				return C(e, t, i.a.Cosmetic, i.c.Gallery).some(e => e.locked.some(e => Object(a.f)(e) || !!e.price))
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
			const S = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				M = (e, t) => Object.values(e.products.models).filter(e => e.type === d.a.Membership && t && e.subredditId === t),
				F = (e, t) => {
					if (!t) return {};
					const r = S.prices;
					M(e, t).forEach(e => {
						e.price && e.currency && (r[e.currency] = e.price)
					});
					const n = h(e, t);
					return n && n.price && n.currency && (r[n.currency] = n.price), r
				},
				N = (e, t) => {
					var r, n, o, s;
					const a = (null === (s = null === (o = null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.crypto) || void 0 === n ? void 0 : n.points) || void 0 === o ? void 0 : o[t || ""]) || void 0 === s ? void 0 : s.nomenclature) || S;
					return {
						prices: F(e, t),
						member: a.member || S.member,
						memberPlural: a.memberPlural || S.memberPlural,
						memberAlt: a.memberAlt || S.memberAlt,
						memberAltPlural: a.memberAltPlural || S.memberAltPlural,
						membership: a.membership || S.membership,
						membershipAlt: a.membershipAlt || S.membershipAlt
					}
				},
				B = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === l.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				L = (e, t) => {
					const r = e.user.ownedBadges[t] || {};
					return !!Object.keys(r).length
				},
				R = e => {
					const t = e.economics.paymentSystems;
					return t.status === l.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				D = (e, {
					subredditId: t
				}) => {
					if (!t) return;
					return e.economics.emotes[t]
				},
				G = (e, t) => {
					const r = t && e.economics.gifs[t];
					return !!r && r.hasGifProduct
				},
				H = (e, t, r) => {
					if (Object(p.r)(e, {
							subredditId: t
						})) return !0;
					const n = "replyToPost" !== r && Object(m.b)(e, {
						commentId: r
					});
					return !(!n || !Object(s.a)(n))
				},
				U = (e, t, r) => {
					if (!Object(f.b)(e, {
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
						i = G(e, t);
					return !(!a || !i) || a && i
				},
				z = (e, t, r) => {
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
				experimentName: o.lb,
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
				return f
			})), r.d(t, "e", (function() {
				return b
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
						c = n ? Object(i.H)(e, {
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
				f = (e, {
					award: t,
					minSize: r,
					postOrCommentId: n
				}) => t ? p(e, {
					awards: [t],
					minSize: r,
					postOrCommentId: n
				})[t.id] : void 0,
				b = (e, {
					minSize: t,
					userName: r
				}) => {
					const n = Object(c.mb)(e, {
						userName: r
					});
					if (n && n.awardedLastMonth && n.awardedLastMonth.topAward) return f(e, {
						award: n.awardedLastMonth.topAward,
						minSize: t
					})
				},
				h = e => {
					const t = Object(a.b)(e),
						r = Object(a.a)(e);
					return f(e, {
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
				return f
			})), r.d(t, "o", (function() {
				return b
			})), r.d(t, "c", (function() {
				return h
			})), r.d(t, "h", (function() {
				return g
			})), r.d(t, "l", (function() {
				return v
			})), r.d(t, "w", (function() {
				return y
			})), r.d(t, "x", (function() {
				return x
			})), r.d(t, "v", (function() {
				return w
			})), r.d(t, "y", (function() {
				return O
			})), r.d(t, "f", (function() {
				return _
			})), r.d(t, "g", (function() {
				return j
			})), r.d(t, "i", (function() {
				return P
			})), r.d(t, "k", (function() {
				return C
			})), r.d(t, "j", (function() {
				return k
			})), r.d(t, "m", (function() {
				return I
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
				f = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				b = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				h = e => e.features.goldPurchase.payment.paymentMethod,
				g = e => e.features.goldPurchase.payment.cardName,
				v = e => e.features.goldPurchase.payment.postalCode,
				y = e => e.features.goldPurchase.payment.savedCardsPending,
				x = e => e.features.goldPurchase.payment.savedCards,
				w = e => e.features.goldPurchase.payment.rememberCard,
				O = e => e.features.goldPurchase.payment.useSavedCard,
				_ = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				j = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				P = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				C = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				k = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				I = e => e.features.goldPurchase.payment.stripeToken.pending,
				E = e => e.features.goldPurchase.payment.paypal.passthrough,
				A = e => e.features.goldPurchase.payment.paypal.errorMessage
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~r~4c415e24.d2beaa976cbddb270514.js.map