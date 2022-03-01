// https://www.redditstatic.com/desktop2x/SubredditLeaderboard.09212163a0583831a757.js
// Retrieved at 3/1/2022, 1:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditLeaderboard"], {
		"./src/reddit/actions/category/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return f
			})), r.d(t, "b", (function() {
				return x
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				s = r("./src/reddit/reducers/features/categories/index.ts"),
				a = (r("./node_modules/lodash/isEmpty.js"), r("./node_modules/react-router-redux/es/index.js"), r("./src/lib/makeActionCreator/index.ts")),
				i = r("./src/reddit/constants/categories.tsx"),
				o = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/makeApiRequest/index.ts"),
				c = r("./src/lib/omitHeaders/index.ts"),
				l = r("./src/reddit/constants/headers.ts"),
				u = r("./src/reddit/constants/experiments.ts");
			r("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts"), r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			var m = r("./src/reddit/helpers/localStorage/index.ts"),
				b = r("./src/reddit/selectors/category.ts"),
				g = r("./src/reddit/actions/category/constants.ts");
			Object(n.a)({
				features: {
					categories: s.a
				}
			});
			const p = Object(a.a)(g.c),
				h = Object(a.a)(g.b),
				y = Object(a.a)(g.a),
				f = () => async (e, t, {
					apiContext: r
				}) => {
					const n = t(),
						s = Object(b.h)(n),
						a = Object(b.g)(n);
					if (s || a) return;
					e(p());
					const m = await (e => Object(d.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/api/available_subreddit_categories.json?use_extended_categories=true`,
						method: o.jb.GET
					}))(r());
					if (m.ok) {
						const {
							categories: t,
							categoryIds: r
						} = (e => {
							const t = {},
								r = [];
							return e.forEach((e, n) => {
								const s = {
									attr: e.category_attr,
									color: e.category_color || i.a[n % i.a.length],
									icon: e.category_icon,
									id: e.category_id,
									name: e.category_name,
									displayText: Object(u.wf)(e.category_name)
								};
								r.push(s.id), t[s.id] = s
							}), {
								categories: t,
								categoryIds: r
							}
						})(m.body);
						e(h({
							categories: t,
							categoryIds: r
						}))
					} else e(y(m.error))
				}, k = (Object(a.a)(g.g), Object(a.a)(g.f), Object(a.a)(g.e), Object(a.a)(g.d)), x = e => async (t, r) => {
					const n = Object(b.j)(r(), {
						id: e
					});
					t(k({
						categoryId: e,
						rank: n + 1
					})), Object(m.mb)(Object(b.d)(r()))
				}
		},
		"./src/reddit/actions/pages/subredditLeaderboard.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "checkIsModCategory", (function() {
				return h
			})), r.d(t, "subredditLeaderboardPageRequested", (function() {
				return y
			})), r.d(t, "subredditLeaderboardPageDataRequested", (function() {
				return f
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/lib/pageTitle/index.ts"),
				s = r("./src/reddit/actions/category/index.ts"),
				a = r("./src/reddit/actions/modal.ts"),
				i = r("./src/reddit/actions/platform.ts"),
				o = r("./src/reddit/actions/subreddit/topSubreddits.ts"),
				d = r("./src/reddit/actions/users.ts"),
				c = r("./src/reddit/constants/listings.ts"),
				l = r("./src/reddit/constants/subredditLeaderboard.ts"),
				u = r("./src/reddit/helpers/categoryPickerWidget/index.ts"),
				m = r("./src/reddit/models/GoodContent/index.ts"),
				b = r("./src/reddit/selectors/category.ts"),
				g = r("./src/reddit/selectors/subredditLeaderboard.ts"),
				p = r("./src/reddit/selectors/user.ts");
			const h = (e, t) => t && e === l.q,
				y = e => async (t, r) => {
					t(Object(a.k)({
						actionSource: a.a.SubredditLeaderboard,
						redirectUrl: c.c[c.b.SubredditLeaderboard]
					})), t(i.m({
						title: Object(n.n)()
					}));
					const s = e.params && e.params.categoryName,
						o = s && Object(u.b)(s);
					await t(f(o))
				}, f = e => async (t, r) => {
					await t(Object(s.a)());
					const n = r(),
						a = Object(p.P)(n);
					if (Object(g.a)(n, e)) return;
					const i = e && Object(b.e)(n, {
							categoryName: e
						}),
						c = e === l.m ? l.l : i && i.id || l.f,
						u = ((e, t) => ({
							categoryId: e,
							filter: m.a,
							isOnlyModIncluded: t
						}))(c, h(e, a)),
						y = Object(g.d)(c, e);
					await Promise.all([t(Object(o.b)(u, y)), t(Object(d.t)())])
				}
		},
		"./src/reddit/actions/subreddit/topSubreddits.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return m
			})), r.d(t, "b", (function() {
				return p
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/actions/subreddit/constants.ts"),
				a = r("./src/reddit/constants/subredditLeaderboard.ts"),
				i = r("./src/reddit/endpoints/subreddit/local.ts"),
				o = r("./src/reddit/endpoints/subreddit/topSubreddits.ts"),
				d = r("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts");
			const c = Object(n.a)(s.m),
				l = Object(n.a)(s.l),
				u = Object(n.a)(s.k),
				m = Object(n.a)(s.a),
				b = Object(n.a)(s.b),
				g = Object(n.a)(s.c),
				p = (e, t) => async (r, n, {
					gqlContext: s
				}) => {
					r(c());
					const p = t === a.l ? async function() {
						const t = await Object(i.a)(s(), e);
						if (!t.ok) {
							const e = t.error;
							return r(u({
								error: e
							})), null
						}
						const n = t.body,
							a = n && n.data && n.data.nearbySubreddits;
						return Object(d.a)(a)
					}: async function() {
						const t = await Object(o.a)(s(), e);
						if (!t.ok) {
							const e = t.error;
							return void r(u({
								error: e
							}))
						}
						const n = t.body,
							a = n && n.data && n.data.subredditLeaderboard;
						return Object(d.b)(a)
					}, h = await p();
					if (!h) return;
					const {
						pageInfo: y,
						rankings: f,
						subreddits: k
					} = h;
					r(m({
						subreddits: k
					})), r(b({
						categoryRankingsKey: t,
						rankings: f
					})), r(g({
						categoryRankingsKey: t,
						pageInfo: y
					})), r(l())
				}
		},
		"./src/reddit/components/CategoryPickerWidget/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_1Le71sZe40-ak2-JlezTO9",
				header: "_1xEfG7rp7vrKfyvMhw4d7B",
				categoryList: "_2TokM04UC_UEG0cmYY5zqV",
				expanded: "H2nL15newZjevdZ9kmsw6",
				categoryLink: "_3p0xqZowgYYjYMOdinU151",
				active: "_1eQr_TkUOm6M6XqM8GTZqp",
				button: "_36EQoGTqXwZI27n50gESaC"
			}
		},
		"./src/reddit/components/CommunitiesDirectoryWidget/index.m.less": function(e, t, r) {
			e.exports = {
				Widget: "_36_8mPRaeDNCpkQ5-w8TS9",
				widget: "_36_8mPRaeDNCpkQ5-w8TS9",
				LinkContainer: "_65zQcMEUkFZAyLyrKPlA0",
				linkContainer: "_65zQcMEUkFZAyLyrKPlA0",
				Title: "oaSSd7FLyCKYFcVrHeOpC",
				title: "oaSSd7FLyCKYFcVrHeOpC",
				Link: "_1EnYMKlnIu6EN56KYszO66",
				link: "_1EnYMKlnIu6EN56KYszO66"
			}
		},
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less": function(e, t, r) {
			e.exports = {
				BladeContainer: "_1PH-hjTIYFk3bzQxse2VdL",
				bladeContainer: "_1PH-hjTIYFk3bzQxse2VdL",
				Container: "_2lnfWQQ2rf3LByOAo0AIxK",
				container: "_2lnfWQQ2rf3LByOAo0AIxK",
				isSubscriptionPinned: "_3VGAuEF6xANTry3OLdIkY-",
				CloseIcon: "_1EMP4yQCIbCfJxoP0mzVJj",
				closeIcon: "_1EMP4yQCIbCfJxoP0mzVJj",
				LoadingTitleContainer: "_1RpN3Nafg2vwgowMWy9NWJ",
				loadingTitleContainer: "_1RpN3Nafg2vwgowMWy9NWJ",
				loading: "ZKk731y0xKgZOe9Tjjniq",
				gradientAnimation: "U7_QESggl5iLUzCuBiLcO",
				LoadingTitle: "XP9o26f6xTYlWRW8E4xg",
				loadingTitle: "XP9o26f6xTYlWRW8E4xg",
				LoadingNavContainer: "_1-eo_nxzRLW0qdLtGlf7Og",
				loadingNavContainer: "_1-eo_nxzRLW0qdLtGlf7Og",
				LoadingNav: "d_FNVnkwlJQP-PeAkIXj_",
				loadingNav: "d_FNVnkwlJQP-PeAkIXj_",
				ShortLoadingNav: "_237lkQ2Y2seTfge8gEh5db",
				shortLoadingNav: "_237lkQ2Y2seTfge8gEh5db",
				ThemedChevron: "_3yekFtL72Ta99kZASWWCIh",
				themedChevron: "_3yekFtL72Ta99kZASWWCIh"
			}
		},
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/lodash/values.js"),
				s = r.n(n),
				a = r("./node_modules/react/index.js"),
				i = r.n(a),
				o = r("./node_modules/react-redux/es/index.js"),
				d = r("./node_modules/reselect/es/index.js"),
				c = r("./src/higherOrderComponents/makeAsync.tsx"),
				l = r("./src/lib/classNames/index.ts"),
				u = r("./src/lib/lessComponent.tsx"),
				m = r("./src/lib/loadWithRetries/index.ts"),
				b = r("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				g = r("./src/reddit/icons/svgs/Chevron/index.tsx"),
				p = r("./src/reddit/icons/svgs/Close/index.tsx"),
				h = r("./src/reddit/selectors/moderatorPermissions.ts"),
				y = r("./src/reddit/selectors/structuredStyles.ts"),
				f = r("./src/reddit/selectors/userPrefs.ts"),
				k = r("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				x = r.n(k);
			const {
				fbt: E
			} = r("./node_modules/fbt/lib/FbtPublic.js"), _ = u.a.div("BladeContainer", x.a), C = u.a.wrapped(p.a, "CloseIcon", x.a), S = u.a.div("LoadingTitleContainer", x.a), v = u.a.div("LoadingNavContainer", x.a), N = u.a.div("ShortLoadingNav", x.a), O = u.a.wrapped(g.a, "ThemedChevron", x.a), j = ({
				...e
			}) => i.a.createElement(_, null, i.a.createElement(C, null), i.a.createElement(b.k, null, i.a.createElement(b.p, null, E._("Back to mod tools", null, {
				hk: "1YCI0W"
			})), i.a.createElement(b.o, null, i.a.createElement(S, null, i.a.createElement("div", {
				className: Object(l.a)(x.a.LoadingTitle, e.isLoading && x.a.loading)
			})), i.a.createElement(v, null, i.a.createElement("div", {
				className: Object(l.a)(x.a.LoadingNav, e.isLoading && x.a.loading)
			}), i.a.createElement(O, null)), i.a.createElement(v, null, i.a.createElement(N, null), i.a.createElement(O, null)), i.a.createElement(v, null, i.a.createElement("div", {
				className: Object(l.a)(x.a.LoadingNav, e.isLoading && x.a.loading)
			}), i.a.createElement(O, null)), i.a.createElement(v, null, i.a.createElement(N, null), i.a.createElement(O, null)), i.a.createElement(v, null, i.a.createElement("div", {
				className: Object(l.a)(x.a.LoadingNav, e.isLoading && x.a.loading)
			}), i.a.createElement(O, null))))), T = Object(c.a)({
				getComponent: () => Object(m.a)(() => Promise.all([r.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), r.e("StructuredStyles")]).then(r.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => i.a.createElement(j, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => i.a.createElement(j, {
					gradientType: "posts",
					isLoading: !0
				})
			}), L = Object(d.c)({
				isEditing: y.i,
				isSubscriptionsPinned: f.b,
				moderatorPermissions: h.m
			});
			t.a = Object(o.b)(L)(e => {
				const t = e.moderatorPermissions && s()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? i.a.createElement("div", {
					className: Object(l.a)(x.a.Container, e.isSubscriptionsPinned && x.a.isSubscriptionPinned)
				}, e.children, i.a.createElement(T, {
					subredditId: e.subredditId
				})) : i.a.createElement(a.Fragment, null, e.children)
			})
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, r) {
			e.exports = {
				FormPage: "_9ZuQyDXhFth1qKJF4KNm8",
				formPage: "_9ZuQyDXhFth1qKJF4KNm8",
				HomePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				homePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				HomePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				homePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				breadcrumbTitle: "_24r4TaTKqNLBGA3VgswFrN",
				HomePageGroup: "_306gA2lxjCHX44ssikUp3O",
				homePageGroup: "_306gA2lxjCHX44ssikUp3O",
				FormPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				formPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				FormPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				formPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				FormGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				formGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				FormGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				formGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				FormElement: "c5RWd-O3CYE-XSLdTyjtI",
				formElement: "c5RWd-O3CYE-XSLdTyjtI",
				FormGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				formGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				FormItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				formItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				FormElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				formElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				FormElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				formElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				FormElementError: "horIoLCod23xkzt7MmTpC",
				formElementError: "horIoLCod23xkzt7MmTpC",
				FormElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				formElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				FormListItem: "_2M7LQbQxH40ingJ9h9RslL",
				formListItem: "_2M7LQbQxH40ingJ9h9RslL"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, r) {
			"use strict";
			r.d(t, "k", (function() {
				return i
			})), r.d(t, "p", (function() {
				return o
			})), r.d(t, "n", (function() {
				return d
			})), r.d(t, "o", (function() {
				return c
			})), r.d(t, "m", (function() {
				return l
			})), r.d(t, "l", (function() {
				return u
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "h", (function() {
				return b
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "g", (function() {
				return p
			})), r.d(t, "i", (function() {
				return h
			})), r.d(t, "e", (function() {
				return y
			})), r.d(t, "b", (function() {
				return f
			})), r.d(t, "c", (function() {
				return k
			})), r.d(t, "d", (function() {
				return x
			})), r.d(t, "j", (function() {
				return E
			}));
			var n = r("./src/lib/lessComponent.tsx"),
				s = r("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				a = r.n(s);
			const i = n.a.section("FormPage", a.a),
				o = n.a.h1("HomePageTitle", a.a),
				d = n.a.button("HomePageBreadcrumb", a.a),
				c = n.a.div("HomePageGroup", a.a),
				l = n.a.h1("FormPageTitle", a.a),
				u = n.a.div("FormPageSection", a.a),
				m = n.a.div("FormGroup", a.a),
				b = n.a.h2("FormGroupTitle", a.a),
				g = n.a.div("FormElement", a.a),
				p = n.a.div("FormGroupDescription", a.a),
				h = n.a.div("FormItem", a.a),
				y = n.a.h3("FormElementTitle", a.a),
				f = n.a.div("FormElementDescription", a.a),
				k = n.a.div("FormElementError", a.a),
				x = n.a.div("FormElementSubGroup", a.a),
				E = n.a.li("FormListItem", a.a)
		},
		"./src/reddit/components/SubscribeButton/Inline.m.less": function(e, t, r) {
			e.exports = {
				ButtonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				buttonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				Checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				Plus: "_2zcGm9WDxG67GYyNNvHzlA",
				plus: "_2zcGm9WDxG67GYyNNvHzlA"
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/reddit/components/TrackingHelper/index.tsx"),
				i = r("./src/reddit/connectors/SubscribeButton/index.ts"),
				o = r("./src/reddit/controls/Button/index.tsx"),
				d = r("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				c = r("./src/reddit/components/SubscribeButton/Inline.m.less"),
				l = r.n(c);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const m = r("./src/lib/lessComponent.tsx").a.div("ButtonSpacer", l.a);
			class b extends s.a.Component {
				constructor(e) {
					super(e), this.onMouseEnter = () => {
						this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						this.setState({
							isHovered: !1
						})
					}, this.onClick = e => {
						const {
							props: t
						} = this;
						if (t.userIsSubscriber ? t.onUnsubscribe() : (this.setState({
								hasJustSubscribed: !0
							}), t.onSubscribe()), t.onClick && t.onClick(e), t.getEventFactory) {
							const e = t.getEventFactory(t.userIsSubscriber);
							e && t.sendEvent(e)
						}
					}, this.renderUnsubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: r,
							onUnsubscribe: n,
							postId: a,
							sendEvent: i,
							size: c,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: m,
							getEventFactory: b,
							onSubscriptionsRequested: g,
							...p
						} = this.props, h = this.state.isHovered, y = Object(d.a)({
							type: t.type,
							key: h ? "unsubscribe" : "subscribed"
						});
						return s.a.createElement(o.t, u({
							className: e,
							priority: p.shouldReverseColor ? o.c.Primary : o.c.Secondary,
							text: y,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: o.d.XSP
						}, p))
					}, this.renderSubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: r,
							onUnsubscribe: n,
							postId: a,
							sendEvent: i,
							size: c,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: m,
							getEventFactory: b,
							onSubscriptionsRequested: g,
							...p
						} = this.props, h = Object(d.a)({
							type: t.type,
							key: "subscribe"
						});
						return s.a.createElement(o.t, u({
							className: e,
							priority: p.shouldReverseColor ? o.c.Secondary : o.c.Primary,
							size: o.d.XSP,
							text: h,
							onClick: this.onClick
						}, p, {
							id: `subscribe-button-${a}`,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave
						}))
					}, this.state = {
						hasJustSubscribed: !1,
						isHovered: !1
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						small: e = !1,
						userIsSubscriber: t,
						doNotHideOtherSubscribeButtons: r
					} = this.props;
					return t ? this.state.hasJustSubscribed || r ? this.renderUnsubscribeButton() : e ? null : s.a.createElement(m, null) : this.renderSubscribeButton()
				}
			}
			t.a = Object(i.a)(Object(a.c)(b))
		},
		"./src/reddit/components/TopSubredditsWidget/Container.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				o = r("./src/reddit/actions/subreddit/topSubreddits.ts"),
				d = r("./src/reddit/components/TopSubredditsWidget/index.tsx"),
				c = r("./src/reddit/components/TrackingHelper/index.tsx"),
				l = r("./src/reddit/constants/subredditLeaderboard.ts"),
				u = r("./src/reddit/contexts/ApiContext.tsx"),
				m = r("./src/reddit/endpoints/subreddit/local.ts"),
				b = r("./src/reddit/endpoints/subreddit/topSubreddits.ts"),
				g = r("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts"),
				p = r("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				h = r("./src/reddit/models/GoodContent/index.ts"),
				y = r("./src/reddit/selectors/platform.ts");

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const k = Object(i.c)({
					isOnLeaderboardPage: e => !!Object(y.h)(e),
					isOnFrontpage: e => !!Object(y.g)(e)
				}),
				x = Object(a.b)(k, e => ({
					updateSubredditModels: t => e(Object(o.a)({
						subreddits: t
					}))
				})),
				E = async (e, t) => {
					const r = await Object(b.a)(e, t);
					if (r && r.ok) {
						const e = r.body,
							t = e && e.data && e.data.subredditLeaderboard;
						return Object(g.c)(t)
					}
				};
			class _ extends s.a.Component {
				constructor(e) {
					super(e), this.sendEventClick = (e, t, r, n) => {
						this.props.sendEvent(Object(p.c)(e, t, r, n)), this.props.onSendEventClick && this.props.onSendEventClick(e, t, r, n)
					}, this.state = {}
				}
				componentDidMount() {
					this.fetchTopSubreddits()
				}
				componentDidUpdate(e) {
					const t = e.category && e.category.id,
						r = this.props && this.props.category && this.props.category.id,
						n = this.props.category && this.props.category.name;
					t !== r && n && !this.state[n] && this.fetchTopSubreddits()
				}
				async fetchTopSubreddits() {
					const {
						category: e,
						first: t
					} = this.props, r = e && e.id;
					if (r === l.l) {
						const e = await Object(m.b)(this.props.gqlContext(), {
							first: t
						});
						if (!e) return;
						const {
							rankings: r,
							subreddits: n
						} = e;
						return this.props.updateSubredditModels(n), void this.setState(e => ({
							...e,
							[l.m]: {
								rankings: r,
								subreddits: n
							}
						}))
					}(r || r === l.f) && E(this.props.gqlContext(), {
						categoryId: r,
						filter: h.a,
						first: t
					}).then(e => {
						const t = e && e.rankings,
							r = e && e.subreddits;
						r && this.props.updateSubredditModels(r);
						const n = this.props.category && this.props.category.name || l.c;
						t && r && this.setState(e => ({
							...e,
							[n]: {
								rankings: t,
								subreddits: r
							}
						}))
					}).catch(e => console.error("Error >>>", e))
				}
				render() {
					const {
						category: e
					} = this.props, t = e && e.name, r = e && e.displayText, n = t || l.c, a = this.state[n], i = a ? a.rankings : [], o = a ? a.subreddits : {}, c = i && i[0] && i[0].id, u = o && o[c], m = !(u && u.isNSFW) || this.props.isOver18;
					return s.a.createElement(d.b, f({
						categoryName: t,
						categoryDisplayText: r,
						onSendEventClick: this.sendEventClick,
						rankings: i,
						shouldDisplayBannerImg: m,
						shouldDisplayDelta: this.props.shouldDisplayDelta,
						subreddits: o
					}, this.props))
				}
			}
			t.a = x(Object(u.b)(Object(c.c)(_)))
		},
		"./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return k
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				i = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/prettyPrintNumber/index.ts"),
				c = r("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = r("./src/reddit/components/SubredditIcon/index.tsx"),
				u = r("./src/reddit/components/SubscribeButton/Inline.tsx"),
				m = r("./src/reddit/constants/posts.ts"),
				b = r("./src/reddit/controls/Button/index.tsx"),
				g = r("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				p = r("./src/reddit/icons/fonts/index.tsx"),
				h = r("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				y = r.n(h);
			const f = e => a.a.createElement(a.a.Fragment, null, a.a.createElement(l.b, {
					className: y.a.subredditIcon,
					subredditOrProfile: e.subreddit
				}), a.a.createElement("span", {
					className: Object(o.a)(y.a.subredditDetailsContainer, {
						[y.a.handleOverflow]: e.shouldShowJoinButton
					})
				}, e.large ? a.a.createElement(c.a, {
					subredditName: e.subreddit.name
				}, a.a.createElement("span", {
					className: y.a.regularText
				}, e.subreddit.displayText)) : a.a.createElement("span", {
					className: y.a.regularText
				}, e.subreddit.displayText), null === e.rank && a.a.createElement("span", {
					className: y.a.smallText
				}, n.fbt._("This community hasn't been ranked yet.", null, {
					hk: "4CmlZJ"
				})))),
				k = e => {
					const t = Object(o.a)(y.a.subredditRankItem, e.large && y.a.large),
						r = e.delta && e.delta > 0,
						n = null === e.rank || void 0 === e.rank ? "--" : (e => {
							const t = Object(d.b)(e);
							if (t.length > 3) {
								return `${t.split(".")[0]}k`
							}
							return t
						})(e.rank + 1),
						s = e.delta ? r ? "#46D160" : "#EA0027" : "transparent",
						c = e.isOnLeaderboardPage && e.large;
					return a.a.createElement("li", {
						className: y.a.listItem,
						key: `${e.subreddit.displayText}-${e.large}`
					}, a.a.createElement(i.a, {
						className: t,
						onMouseDown: e.onItemClick,
						rel: "noopener",
						target: "_blank",
						to: e.subreddit.url
					}, a.a.createElement("div", {
						className: y.a.subredditRankItemColumn
					}, !e.hasTagline && a.a.createElement("span", {
						className: y.a.rankText
					}, n), !e.hasTagline && a.a.createElement(p.a, {
						className: y.a.arrow,
						name: r ? "caret_up" : "caret_down",
						isFilled: !0,
						style: {
							color: s
						}
					}), a.a.createElement(f, {
						large: e.large,
						rank: e.rank,
						subreddit: e.subreddit,
						shouldShowJoinButton: (c || e.isOnFrontpage) && !e.subreddit.isSubscribed && !e.large
					})), e.shouldDisplayDelta && a.a.createElement("span", {
						className: y.a.regularText
					}, e.delta ? Object(d.b)(Math.abs(e.delta)) : 0)), (c || e.isOnFrontpage) && a.a.createElement("div", {
						className: Object(o.a)(e.large ? y.a.LeaderboardSubscribeButton : y.a.WidgetSubscribeButton, {
							[y.a.noDelta]: !e.shouldDisplayDelta
						})
					}, a.a.createElement(u.a, {
						getEventFactory: t => e.large ? Object(g.g)(e.subreddit.name, t) : Object(g.d)(e.subreddit.name, t),
						identifier: {
							name: e.subreddit.name,
							type: m.a.SUBREDDIT
						},
						size: b.d.XSP
					})))
				}
		},
		"./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				o = r.n(i);
			const d = e => s.a.createElement("div", {
				className: Object(a.a)(o.a.placeholderWrapper, e.fullWidth && o.a.fullWidth, e.large && o.a.large)
			}, s.a.createElement("span", {
				className: o.a.subredditIconLoading
			}), s.a.createElement("span", {
				className: o.a.subredditNameLoading
			}))
		},
		"./src/reddit/components/TopSubredditsWidget/index.m.less": function(e, t, r) {
			e.exports = {
				communityBanner: "_2-aCCpAklEV0DkVWrpodjE",
				communityBannerText: "_3t8QC0In-G5By0nAIZqfAZ",
				communityBannerCategoryName: "_3tu4wA7qDe2qAPwXNSHPo8",
				taglineBanner: "_1WuTyzo7KQobFlIJHW6Pik",
				taglineBannerBackground: "_34L_D1LSVWJ0ZjeqwrFnPj",
				taglineBannerImage: "pa_89rxjdi45gbVf0w9QR",
				taglineBannerText: "rpzag8Jvbaz6Pji3oRkWZ",
				footer: "_3fyECztJ8AQeIuhZWW-tNU",
				linkButton: "_1Q1oKEA1qDipo5Tk0b_YlY",
				categoryPicker: "_1O_evNy72kVXzYqUj80m_n",
				chipWrapper: "_1ZBD49ybfD0rTPX_Tp3Uz3",
				chip: "_3VVeutMKl2leQEGhurm7YN",
				taglineChip: "_2HZPVURuk0Na0mbosSZJDP",
				listItem: "_267lcOmg8VvXcoj9O0Q1TB",
				subredditRankItem: "_2ARwkAW45Urhf_fMfAMi5_",
				large: "_3WPeZCt6k7JXmTo4Kcf1vQ",
				regularText: "_3A9bf_kZ6VBA2VBRND5gvf",
				subredditIcon: "_3XIp3RTd4tSLZOvILNQorh",
				delta: "b8PFL61jVtugGDJnIQfBO",
				subredditRankItemColumn: "_2NS1CWm-CUQYu57CmZ05ep",
				subredditDetailsContainer: "_1XUTmupLRN-FTmJ6PQB7kO",
				handleOverflow: "_1mEfDz-ZrTiw9KxnSpAXBy",
				categoryLink: "_25MytV8CK2IS_fK867Q3qH",
				rankText: "_2B-BDgM13P2SLJX-GZrxHV",
				smallText: "_3BO4rLcAUZY_jK4h2rZj7y",
				arrow: "ztLeQJcDYVKbL9h94QtI_",
				negative: "_3dHwI98vF7PVi8MmZFpeXj",
				communityBannerPlaceholder: "_2-cUhM9bP2B5FPfQsDLJGR",
				glimmer: "NJdRTjquS3Maw_lWbQTkw",
				placeholderWrapper: "_2jtVdXcFC3Ioe3B_hXF5Eh",
				subredditIconLoading: "_1F-hYShaC9dYxEEe3_TCGR",
				subredditNameLoading: "_YedzkdLjjcYoXUE26Cyb",
				fullWidth: "_1MG43W0qN1RYkFlwxoV_tQ",
				LeaderboardSubscribeButton: "_3wMZok1UIz3pr0AAF2ZOTy",
				leaderboardSubscribeButton: "_3wMZok1UIz3pr0AAF2ZOTy",
				noDelta: "-i9ZUMkweo4ZSITdQHUmw",
				WidgetSubscribeButton: "yPMIo9D78wpfNZYMbQXM8",
				widgetSubscribeButton: "yPMIo9D78wpfNZYMbQXM8"
			}
		},
		"./src/reddit/components/TopSubredditsWidget/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return S
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/first.js"),
				a = r.n(s),
				i = r("./node_modules/lodash/times.js"),
				o = r.n(i),
				d = r("./node_modules/react/index.js"),
				c = r.n(d),
				l = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				u = r("./src/config.ts"),
				m = r("./src/lib/classNames/index.ts"),
				b = r("./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx"),
				g = r("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx"),
				p = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = r("./src/reddit/constants/subredditLeaderboard.ts"),
				y = r("./src/reddit/controls/Button/index.tsx"),
				f = r("./src/reddit/controls/Chip/index.tsx"),
				k = r("./src/reddit/helpers/name/index.ts"),
				x = r("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				E = r("./src/reddit/hooks/useTracking.ts"),
				_ = r("./src/reddit/components/TopSubredditsWidget/index.m.less"),
				C = r.n(_);
			const S = e => {
					const t = !(!e.rankings || !e.rankings.length),
						r = !t && C.a.communityBannerPlaceholder,
						s = e.bannerBackgroundImage && e.shouldDisplayBannerImg ? {
							backgroundImage: `url(${e.bannerBackgroundImage})`
						} : void 0,
						a = e.categoryName === h.m && h.j.path ? h.j.path : h.g;
					return c.a.createElement("div", {
						className: Object(m.a)(e.className, C.a.communityBanner, r),
						style: s
					}, t && c.a.createElement("h2", {
						className: C.a.communityBannerText
					}, c.a.createElement(l.a, {
						onMouseDown: () => e.onSendEventClick("banner", e.categoryName || h.e),
						to: a
					}, e.categoryName ? ((e, t) => e === h.m ? n.fbt._("Communities Near You", null, {
						hk: "ZMVOK"
					}) : n.fbt._("Top {categoryName} Communities", [n.fbt._param("categoryName", c.a.createElement("span", {
						className: C.a.categoryName
					}, " ", t || e, " "))], {
						hk: "X3A9z"
					}))(e.categoryName, e.categoryDisplayText) : n.fbt._("Today's Top Growing Communities", null, {
						hk: "2U7TDT"
					}))))
				},
				v = e => {
					const {
						category: t
					} = e, {
						gradients: r
					} = t, s = !!(!e.rankings || !e.rankings.length) && C.a.communityBannerPlaceholder, a = r && Array.isArray(r) && 2 === r.length ? {
						background: `linear-gradient(246.35deg, ${r[0]} 0%, ${r[1]} 100%)`
					} : void 0, i = t.path ? t.path : h.g, o = t.image ? `${t.image}.png` : "magnifying-glass-snoo.png";
					return c.a.createElement("div", {
						className: Object(m.a)(e.className, C.a.taglineBanner, s)
					}, c.a.createElement("div", {
						className: C.a.taglineBannerBackground,
						style: a
					}, c.a.createElement(l.a, {
						onMouseDown: () => e.onSendEventClick("banner", t.name || h.e),
						to: i
					}, c.a.createElement("h2", {
						className: C.a.taglineBannerText
					}, c.a.createElement("img", {
						className: C.a.taglineBannerImage,
						src: `${u.a.assetPath}/img/discovery/${o}`
					}), t.tagline ? (e => c.a.createElement("span", {
						className: C.a.categoryName
					}, n.fbt._("{tagline}", [n.fbt._param("tagline", e)], {
						hk: "3QDJDU"
					})))(t.tagline) : n.fbt._("Today's Top Growing Communities", null, {
						hk: "2U7TDT"
					})))))
				},
				N = e => c.a.createElement("ol", null, e.rankings && e.rankings.map((t, r) => {
					const n = e.subreddits[t.id];
					return c.a.createElement(b.a, {
						delta: t.rankDelta,
						hasTagline: e.hasTagline,
						key: t.id,
						large: e.large,
						onItemClick: () => e.onSendEventClick("subreddit", e.categoryName || h.e, n.name),
						rank: r,
						shouldDisplayDelta: e.shouldDisplayDelta,
						subreddit: n,
						isOnLeaderboardPage: e.isOnLeaderboardPage,
						isOnFrontpage: e.isOnFrontpage
					})
				}), !e.rankings.length && O),
				O = c.a.createElement(c.a.Fragment, null, o()(5, e => c.a.createElement(g.a, {
					key: e
				}))),
				j = e => {
					const t = e.isSecondaryButton ? y.q : y.n,
						r = e.linkColor ? {
							backgroundColor: e.linkColor,
							color: "white"
						} : void 0,
						s = e.isSecondaryButton ? e.categoryDisplayText ? n.fbt._("See All {categoryName}", [n.fbt._param("categoryName", e.categoryDisplayText)], {
							hk: "3mjiTN"
						}) : e.categoryName ? n.fbt._("See All {categoryName}", [n.fbt._param("categoryName", e.categoryName)], {
							hk: "3mjiTN"
						}) : n.fbt._("See All", null, {
							hk: "2OZax8"
						}) : n.fbt._("View All", null, {
							hk: "4vfmcB"
						});
					return c.a.createElement("div", {
						className: C.a.footer
					}, c.a.createElement(t, {
						className: C.a.linkButton,
						onMouseDown: () => e.onSendEventClick("button_cta", e.categoryName || h.e),
						to: e.to || "",
						style: r
					}, s))
				};

			function T(e, t) {
				return t || `${h.g}${Object(k.g)(e)}/`
			}
			const L = e => {
				return c.a.createElement("div", {
					className: C.a.categoryPicker
				}, e.categories && e.categories.map((t, r) => e.activeCategoryName === t.name ? null : c.a.createElement("span", {
					className: C.a.chipWrapper,
					key: t.name,
					onMouseDown: () => ((t, r) => e.onSendEventClick("bottom_leaderboards", t || h.e, void 0, r))(t.name, r + 1)
				}, c.a.createElement(f.a, {
					className: e.hasTagline ? C.a.taglineChip : C.a.chip,
					key: t.name,
					to: T(t.name, t.path),
					wide: t.name === h.m
				}, t.name ? t.name === h.m ? h.k : t.displayText || t.name : n.fbt._("Top", null, {
					hk: "2rw7Gx"
				})))))
			};
			t.b = e => {
				const {
					subreddits: t,
					rankings: r,
					categoryName: n,
					categoryDisplayText: s,
					category: i,
					categories: o
				} = e, l = Object(E.a)();
				Object(d.useEffect)(() => {
					l(Object(x.e)(n || h.e))
				}, []);
				const m = a()(r),
					b = t && m && t[m.id],
					g = `${u.a.assetPath}/img/leaderboard/banner-background.png`,
					y = b ? b.bannerBackgroundImage || g : void 0,
					f = e.to || n && T(n, i.path),
					k = i && i.tagline,
					_ = i && i.gradients && Array.isArray(i.gradients) && 2 === i.gradients.length ? i.gradients[1] : void 0;
				return c.a.createElement(p.a, {
					className: e.className,
					contentOnly: !0
				}, k && c.a.createElement(v, {
					category: i,
					onSendEventClick: e.onSendEventClick,
					rankings: r
				}), !k && c.a.createElement(S, {
					bannerBackgroundImage: y,
					categoryName: n,
					categoryDisplayText: s,
					onSendEventClick: e.onSendEventClick,
					rankings: r,
					shouldDisplayBannerImg: e.shouldDisplayBannerImg
				}), c.a.createElement(N, {
					categoryName: n,
					hasTagline: !!k,
					large: e.large,
					onSendEventClick: e.onSendEventClick,
					rankings: r,
					shouldDisplayDelta: !1,
					subreddits: t,
					isOnLeaderboardPage: e.isOnLeaderboardPage,
					isOnFrontpage: e.isOnFrontpage
				}), c.a.createElement(j, {
					categoryName: n,
					categoryDisplayText: s,
					isSecondaryButton: e.isSecondaryButton,
					linkColor: _,
					onSendEventClick: e.onSendEventClick,
					to: f
				}), o && c.a.createElement(L, {
					activeCategoryName: n,
					categories: o,
					hasTagline: !!k,
					onSendEventClick: e.onSendEventClick
				}))
			}
		},
		"./src/reddit/constants/subredditLeaderboard.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "f", (function() {
				return a
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "p", (function() {
				return c
			})), r.d(t, "q", (function() {
				return l
			})), r.d(t, "o", (function() {
				return u
			})), r.d(t, "l", (function() {
				return m
			})), r.d(t, "m", (function() {
				return b
			})), r.d(t, "k", (function() {
				return g
			})), r.d(t, "g", (function() {
				return p
			})), r.d(t, "t", (function() {
				return h
			})), r.d(t, "j", (function() {
				return y
			})), r.d(t, "r", (function() {
				return f
			})), r.d(t, "u", (function() {
				return k
			})), r.d(t, "n", (function() {
				return x
			})), r.d(t, "s", (function() {
				return E
			})), r.d(t, "h", (function() {
				return _
			})), r.d(t, "a", (function() {
				return C
			})), r.d(t, "i", (function() {
				return S
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js");
			const s = "DEFAULT",
				a = "",
				i = "All Communities",
				o = n.fbt._("All Communities", null, {
					hk: "1dfdfL"
				}),
				d = "top",
				c = "MOD",
				l = "moderating",
				u = n.fbt._("moderating", null, {
					hk: "34Ccgk"
				}),
				m = "LOCAL_COMMUNITIES",
				b = "near-you",
				g = n.fbt._("Near You", null, {
					hk: "2QTSPX"
				}),
				p = "/subreddits/leaderboard/",
				h = {
					id: a,
					name: a,
					path: `${p}`
				},
				y = {
					id: m,
					name: b,
					path: `${p}${b}/`
				},
				f = [{
					name: "Sports",
					displayText: n.fbt._("Sports", null, {
						hk: "41sK5Y"
					}),
					id: "c1015",
					path: `${p}sports/`
				}, {
					name: "News",
					displayText: n.fbt._("News", null, {
						hk: "5WND6"
					}),
					id: "c1009",
					path: `${p}news/`
				}, {
					name: "Gaming",
					displayText: n.fbt._("Gaming", null, {
						hk: "4qweUx"
					}),
					id: "c1019",
					path: `${p}gaming/`
				}, {
					name: "Aww",
					displayText: n.fbt._("Aww", null, {
						hk: "3qJjbL"
					}),
					id: "c1000",
					path: `${p}aww/`
				}],
				k = {
					id: a,
					name: a,
					path: `${p}`,
					image: "popcorn-snoo",
					tagline: n.fbt._("Trending communities are so hot right now", null, {
						hk: "1yqJn4"
					}),
					gradients: ["#63D4C3", "#3A8CEB"]
				},
				x = {
					id: m,
					name: b,
					path: `${p}${b}/`,
					image: "magnifying-glass-snoo",
					tagline: n.fbt._("Local communities — See what’s near you", null, {
						hk: "s70l7"
					}),
					gradients: ["#63D4C3", "#3A8CEB"]
				},
				E = [{
					name: "Sports",
					displayText: n.fbt._("Sports", null, {
						hk: "11CI4F"
					}),
					id: "c1015",
					path: `${p}sports/`,
					image: "basketball-snoo",
					tagline: n.fbt._("Sports communities are the real MVP", null, {
						hk: "1zKdF8"
					}),
					gradients: ["#EF839E", "#7795F8"]
				}, {
					name: "News",
					displayText: n.fbt._("News", null, {
						hk: "17cLQ8"
					}),
					id: "c1009",
					path: `${p}news/`,
					image: "newsie-snoo",
					tagline: n.fbt._("News communities to keep you informed", null, {
						hk: "4pGDSm"
					}),
					gradients: ["#D72E33", "#A82455"]
				}, {
					name: "Gaming",
					displayText: n.fbt._("Gaming", null, {
						hk: "2aDSZz"
					}),
					id: "c1019",
					path: `${p}gaming/`,
					image: "esports-snoo",
					tagline: n.fbt._("Gaming communities taking it to the next level", null, {
						hk: "2zM7JE"
					}),
					gradients: ["#F08C3A", "#D72E33"]
				}, {
					name: "Aww",
					displayText: n.fbt._("Aww", null, {
						hk: "3ecS9m"
					}),
					id: "c1000",
					path: `${p}aww/`,
					image: "cat-snoo",
					tagline: n.fbt._("Aww communities — get in on this cuteness", null, {
						hk: "1uAb8e"
					}),
					gradients: ["#F3B54F", "#EC5428"]
				}],
				_ = [{
					name: "E3 Gaming",
					displayText: n.fbt._("E3 Gaming", null, {
						hk: "289tR6"
					}),
					id: "c1034",
					path: `${p}e3/`
				}],
				C = [{
					name: "Beauty",
					displayText: n.fbt._("Beauty", null, {
						hk: "4mzjuL"
					}),
					id: "c1023",
					path: `${p}beauty/`,
					image: "makeup-snoo",
					tagline: n.fbt._("Beauty communities make us all look good", null, {
						hk: "2z1nzQ"
					}),
					gradients: ["#63D4C3", "#3A8CEB"]
				}, {
					name: "Fashion",
					displayText: n.fbt._("Fashion", null, {
						hk: "22tnM2"
					}),
					id: "c1002",
					path: `${p}fashion/`,
					image: "90s-nostalgia-snoo",
					tagline: n.fbt._("Fashion communities are always in style", null, {
						hk: "4pNEnH"
					}),
					gradients: ["#EF839E", "#7795F8"]
				}, {
					name: "Food",
					displayText: n.fbt._("Food", null, {
						hk: "2Bq28v"
					}),
					id: "c1003",
					path: `${p}food/`,
					image: "cookbooks-snoo",
					tagline: n.fbt._("Food communities to make you go mmmm", null, {
						hk: "3OGpOa"
					}),
					gradients: ["#D72E33", "#A82455"]
				}, {
					name: "Fitness",
					displayText: n.fbt._("Fitness", null, {
						hk: "4ruQRK"
					}),
					id: "c1006",
					path: `${p}health_and_fitness/`,
					image: "yoga-snoo",
					tagline: n.fbt._("Fitness communities that know how to work it", null, {
						hk: "3Ow48z"
					}),
					gradients: ["#63D4C3", "#3A8CEB"]
				}, {
					name: "Outdoors",
					displayText: n.fbt._("Outdoors", null, {
						hk: "1Can0U"
					}),
					id: "c1010",
					path: `${p}outdoors/`,
					image: "telescope-snoo",
					tagline: n.fbt._("Outdoor communities — they’re really out there", null, {
						hk: "1sfigF"
					}),
					gradients: ["#F08C3A", "#D72E33"]
				}, {
					name: "Relationships",
					displayText: n.fbt._("Relationships", null, {
						hk: "QnBO3"
					}),
					id: "c1013",
					path: `${p}relationships/`,
					image: "childrensbooks-snoo",
					tagline: n.fbt._("Relationship communities understand all the feels", null, {
						hk: "27KPX"
					}),
					gradients: ["#F08C3A", "#D72E33"]
				}],
				S = ["Sports", "Gaming", "News", "TV", "Aww", "Memes", "Pics & Gifs", "Travel", "Tech", "Music"]
		},
		"./src/reddit/controls/Chip/index.m.less": function(e, t, r) {
			e.exports = {
				Chip: "yO1xBdgBCFQNZudOlok9d",
				chip: "yO1xBdgBCFQNZudOlok9d",
				isWide: "_1lxXIK3bbUOKz-5A-FRakQ",
				active: "PrkN-68SZ_ce-8V-W4ciS"
			}
		},
		"./src/reddit/controls/Chip/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/controls/Button/index.tsx"),
				o = r("./src/reddit/controls/Chip/index.m.less"),
				d = r.n(o);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				const t = e.to ? {
					kind: i.b.InternalLink,
					to: e.to
				} : {};
				return s.a.createElement(i.t, c({
					className: Object(a.a)(d.a.Chip, {
						[d.a.isWide]: e.wide
					}),
					onClick: e.onClick,
					priority: i.c.Tertiary,
					size: i.d.XS,
					text: e.children
				}, t))
			}
		},
		"./src/reddit/endpoints/subreddit/local.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			}));
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				s = r("./src/redditGQL/operations/GetNearbySubreddits.json"),
				a = r("./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts");
			const i = (e, t) => Object(n.a)(e, {
				...s,
				variables: t
			});
			async function o(e, t) {
				const r = await i(e, t);
				if (r && r.ok) {
					const e = r.body,
						t = e && e.data && e.data.nearbySubreddits;
					return Object(a.a)(t)
				}
			}
			t.a = i
		},
		"./src/reddit/endpoints/subreddit/topSubreddits.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				s = r("./src/redditGQL/operations/TopSubreddits.json");
			t.a = (e, t) => Object(n.a)(e, {
				...s,
				variables: t
			})
		},
		"./src/reddit/helpers/categoryPickerWidget/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return a
			}));
			var n = r("./src/reddit/helpers/name/index.ts");
			const s = (e, t) => t.map(t => {
					const r = Object(n.g)(t.name),
						s = r.split(" & ").join("_and_");
					return {
						...t,
						name: r,
						path: t.path || `${e}${s}/`
					}
				}),
				a = e => Object(n.g)(e).split("_and_").join(" & ")
		},
		"./src/reddit/helpers/graphql/normalizeTopSubredditsFromGql/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "a", (function() {
				return i
			}));
			r("./node_modules/lodash/isEmpty.js");
			var n = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const s = ({
					edges: e,
					pageInfo: t
				}) => {
					const r = {},
						s = [];
					for (const {
							node: a,
							...i
						} of e) {
						const e = Object(n.a)(a);
						r[e.id] = e, s.push(i)
					}
					return {
						pageInfo: t,
						rankings: s,
						subreddits: r
					}
				},
				a = ({
					edges: e
				}) => {
					const t = {},
						r = [];
					for (const {
							node: s,
							...a
						} of e) {
						const e = Object(n.a)(s);
						t[e.id] = {
							...e,
							bannerBackgroundImage: s && s.styles && s.styles.bannerBackgroundImage
						}, r.push(a)
					}
					return {
						rankings: r,
						subreddits: t
					}
				},
				i = ({
					edges: e,
					pageInfo: t
				}) => {
					const r = {},
						s = [];
					let a = 0;
					for (const {
							node: i
						} of e) {
						const e = Object(n.a)(i);
						r[e.id] = {
							...e,
							publicDescription: null == i ? void 0 : i.publicDescriptionText,
							bannerBackgroundImage: i && i.styles && i.styles.bannerBackgroundImage
						}, s.push({
							id: e.id,
							rank: a
						}), a += 1
					}
					return {
						rankings: s,
						subreddits: r,
						pageInfo: t
					}
				}
		},
		"./src/reddit/helpers/trackers/subredditLeaderboard.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "f", (function() {
				return o
			})), r.d(t, "g", (function() {
				return d
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "d", (function() {
				return u
			}));
			var n = r("./src/reddit/constants/categories.tsx"),
				s = r("./src/reddit/selectors/telemetry.ts");
			const a = e => t => ({
					...s.o(t),
					action: "click",
					noun: Object(n.d)(e),
					source: "leaderboard_category"
				}),
				i = (e, t, r) => a => ({
					...s.o(a),
					action: "click",
					noun: e,
					source: "leaderboard_featured_category",
					subreddit: {
						categoryName: Object(n.d)(t),
						name: r && r.toLowerCase()
					}
				}),
				o = (e, t) => r => ({
					...s.o(r),
					action: "click",
					noun: "subreddit",
					source: "leaderboard_subreddit",
					subreddit: {
						categoryName: Object(n.d)(t),
						id: e.id,
						name: e.name.toLowerCase()
					}
				}),
				d = (e, t) => r => ({
					...s.o(r),
					action: "click",
					source: "leaderboard_subreddit",
					noun: t ? "unsubscribe" : "subscribe",
					subreddit: {
						name: e && e.toLowerCase()
					}
				}),
				c = (e, t, r, a) => i => ({
					...s.o(i),
					action: "click",
					actionInfo: {
						...s.d(i),
						position: a && a
					},
					noun: e,
					source: "leaderboard_right_rail",
					subreddit: {
						categoryName: Object(n.d)(t),
						name: r && r.toLowerCase()
					}
				}),
				l = (e, t) => r => ({
					...s.o(r),
					action: "view",
					noun: "leaderboard_right_rail",
					source: "leaderboard_right_rail",
					subreddit: {
						categoryName: Object(n.d)(e),
						name: t && t.toLowerCase()
					}
				}),
				u = (e, t) => r => ({
					...s.o(r),
					action: "click",
					source: "leaderboard_right_rail",
					noun: t ? "unsubscribe" : "subscribe",
					subreddit: {
						name: e && e.toLowerCase()
					}
				})
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, r) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/icons/svgs/Chevron/index.m.less"),
				o = r.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(a.a)(o.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, s.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), s.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/reddit/constants/colors.ts");
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.desc && s.a.createElement("desc", null, e.desc), s.a.createElement("path", {
				d: "M1.88,3.32V9a11.53,11.53,0,0,0,8,11L10,20l.08,0a11.53,11.53,0,0,0,8-11V3.32A11.57,11.57,0,0,1,10,0,11.57,11.57,0,0,1,1.88,3.32"
			}), s.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "5",
				fill: e.isUnread ? "white" : "none"
			}), s.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "4",
				fill: e.isUnread ? a.a.orangered : "none"
			}))
		},
		"./src/reddit/models/GoodContent/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return s
			}));
			const n = {
					G: "G",
					NC17: "NC17",
					NOT_SHOWN_IN_THEATERS: "NOT_SHOWN_IN_THEATERS",
					PG: "PG",
					PG13: "PG13",
					R: "R"
				},
				s = {
					isBlacklistedSubredditsExcluded: !0,
					isNsfwExcluded: !0,
					maxRating: n.R
				}
		},
		"./src/reddit/pages/SubredditLeaderboard/index.m.less": function(e, t, r) {
			e.exports = {
				SidebarLeft: "_2TB9TZ4gV-vIStjv6ocuVU",
				sidebarLeft: "_2TB9TZ4gV-vIStjv6ocuVU",
				SidebarRight: "_3J5RkbDcTmj01rM7fNcvO7",
				sidebarRight: "_3J5RkbDcTmj01rM7fNcvO7",
				bannerBackground: "_1xtP5WlAH3pNEC6rHXHeXD",
				bannerContentContainer: "_3cH0x5dE0jolJn0db5DqCT",
				bannerHeader: "_2N_HhXeWtDPq6aBy9lSnQK",
				bannerDescription: "_28W4vqZux6r8Ji5kDHIH2g",
				mainContent: "_3GPSAJ3Tfj_PbjPQbBl707",
				mainContentHeader: "HDnd1PwEGlAuS4a0n11JH",
				mainContentHeaderText: "_FryWXes2c2GhZzBHd7Rz",
				mainContentRankChangeText: "NF1HHniDqzG-0fox1nFBs",
				subredditRankingsList: "UGHNtX0DV78XSU_nT_p_l"
			}
		},
		"./src/reddit/pages/SubredditLeaderboard/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/lodash/shuffle.js"),
				s = r.n(n),
				a = r("./node_modules/react/index.js"),
				i = r.n(a),
				o = r("./node_modules/react-redux/es/index.js"),
				d = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
				l = r("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				u = r("./src/reddit/components/TrackingHelper/index.tsx"),
				m = r("./src/reddit/constants/experiments.ts"),
				b = r("./src/reddit/constants/subredditLeaderboard.ts"),
				g = r("./src/reddit/contexts/PageLayer/index.tsx"),
				p = r("./src/reddit/helpers/categoryPickerWidget/index.ts"),
				h = r("./src/reddit/helpers/trackers/screenview.ts"),
				y = r("./src/reddit/helpers/trackers/subredditLeaderboard.ts"),
				f = r("./src/reddit/icons/svgs/Moderate/index.tsx"),
				k = r("./src/reddit/layout/page/Listing/index.tsx"),
				x = r("./node_modules/fbt/lib/FbtPublic.js"),
				E = r("./src/reddit/pages/SubredditLeaderboard/index.m.less"),
				_ = r.n(E);
			const C = () => i.a.createElement("div", {
				className: _.a.bannerBackground
			}, i.a.createElement("div", {
				className: _.a.bannerContentContainer
			}, i.a.createElement("h1", {
				className: _.a.bannerHeader
			}, x.fbt._("Today's Top Growing Communities", null, {
				hk: "1J28A5"
			})), i.a.createElement("span", {
				className: _.a.bannerDescription
			}, x.fbt._("Browse Reddit's top growing communities. Find the top communities in your favorite category.", null, {
				hk: "4w2yrj"
			}))));
			var S = r("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				v = r("./node_modules/lodash/last.js"),
				N = r.n(v),
				O = r("./node_modules/lodash/times.js"),
				j = r.n(O),
				T = r("./node_modules/lodash/upperFirst.js"),
				L = r.n(T),
				w = r("./src/reddit/actions/pages/subredditLeaderboard.ts"),
				P = r("./src/reddit/actions/subreddit/topSubreddits.ts"),
				I = r("./src/reddit/components/TopSubredditsWidget/SubredditRankItem.tsx"),
				F = r("./src/reddit/components/TopSubredditsWidget/SubredditRankItemPlaceholder.tsx"),
				B = r("./src/reddit/models/GoodContent/index.ts"),
				D = r("./src/reddit/selectors/platform.ts"),
				M = r("./src/reddit/selectors/subreddit.ts"),
				W = r("./src/reddit/selectors/subredditLeaderboard.ts"),
				A = r("./src/reddit/selectors/user.ts");
			const G = 25,
				R = .5,
				H = Object(d.c)({
					hasPreviousPage: (e, {
						categoryId: t
					}) => Object(W.c)(e, t),
					hasNextPage: (e, {
						categoryId: t
					}) => Object(W.b)(e, t),
					isMod: A.P,
					rankings: (e, {
						categoryId: t
					}) => Object(M.N)(e, t),
					subreddits: M.Z,
					isOnLeaderboardPage: e => !!Object(D.h)(e),
					isOnFrontpage: e => !!Object(D.g)(e)
				}),
				Q = Object(o.b)(H, e => ({
					fetchMoreSubreddits: (t, r) => e(Object(P.b)(t, r))
				}));
			class q extends i.a.Component {
				constructor() {
					super(...arguments), this.fetchMoreSubreddits = e => {
						const t = this.makeFetchVariables(),
							r = Object(W.d)(this.props.categoryId, this.props.categoryName);
						e.isIntersecting && t.after && this.props.fetchMoreSubreddits(t, r)
					}, this.sendLeaderboardSubredditEventClick = e => this.props.sendEvent(Object(y.f)(e, this.props.categoryName || b.e)), this.renderSubredditRankItemPlaceholders = () => i.a.createElement(i.a.Fragment, null, j()(5, e => i.a.createElement(F.a, {
						key: e,
						large: !0
					}))), this.renderSubredditRankItems = e => this.props.rankings.map((t, r) => {
						const n = this.props.subreddits[t.id];
						return i.a.createElement(I.a, {
							delta: t.rankDelta,
							key: n.id,
							large: !0,
							onItemClick: () => this.sendLeaderboardSubredditEventClick(n),
							rank: r,
							shouldDisplayDelta: e,
							subreddit: n,
							isOnLeaderboardPage: this.props.isOnLeaderboardPage,
							isOnFrontpage: this.props.isOnFrontpage
						})
					})
				}
				makeFetchVariables() {
					const {
						categoryId: e,
						categoryName: t,
						isMod: r,
						rankings: n
					} = this.props, s = N()(n), a = s && s.cursor, i = Object(w.checkIsModCategory)(t, r);
					return {
						after: a,
						categoryId: e === b.c ? b.f : e,
						filter: B.a,
						first: G,
						isOnlyModIncluded: i
					}
				}
				render() {
					const {
						categoryName: e,
						hasNextPage: t,
						hasPreviousPage: r,
						isMod: n,
						rankings: s,
						categoryDisplayText: a
					} = this.props, o = t || r, d = e === b.m, c = n && !d;
					return i.a.createElement("div", {
						className: _.a.mainContent
					}, i.a.createElement("div", {
						className: _.a.mainContentHeader
					}, i.a.createElement("h2", null, i.a.createElement("span", {
						className: _.a.mainContentHeaderText
					}, e ? d ? x.fbt._("Local Communities Near You", null, {
						hk: "2PsgJz"
					}) : x.fbt._("Today's Top Growing in {categoryName}", [x.fbt._param("categoryName", L()(a || e))], {
						hk: "4pneAv"
					}) : x.fbt._("Today's Top Growing Communities", null, {
						hk: "6LoyD"
					}))), c && i.a.createElement("span", {
						className: _.a.mainContentRankChangeText
					}, x.fbt._("Rank Change", null, {
						hk: "1DVGfi"
					}))), i.a.createElement("ol", {
						className: _.a.subredditRankingsList
					}, s ? this.renderSubredditRankItems(c) : this.renderSubredditRankItemPlaceholders(), o && i.a.createElement(S.a, {
						onChange: this.fetchMoreSubreddits,
						threshold: R,
						rootMargin: "0px 0px 0px 0px"
					}, i.a.createElement("li", null, i.a.createElement(F.a, {
						large: !0
					})))))
				}
			}
			var z = Object(u.c)(Q(q)),
				J = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				U = r("./src/reddit/components/CategoryPickerWidget/index.m.less"),
				Z = r.n(U);

			function K() {
				return (K = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const X = e => {
				const {
					category: t,
					children: r,
					className: n,
					isActive: s,
					tabIndex: a
				} = e, o = Object(c.a)(Z.a.categoryLink, s && Z.a.active, n);
				return i.a.createElement("li", null, i.a.createElement(J.a, K({}, t.anchorProps, {
					className: o,
					"data-active": s,
					onMouseDown: () => e.onSendEventClick(t.name),
					tabIndex: a,
					to: t.path || ""
				}), r, t.customIcon))
			};
			var V = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				Y = r("./src/reddit/controls/Button/index.tsx"),
				$ = r("./src/reddit/helpers/name/index.ts");
			const {
				fbt: ee
			} = r("./node_modules/fbt/lib/FbtPublic.js"), te = 36;
			class re extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isExpanded: !1
					}, this.shouldAutoExpand = () => {
						const {
							categories: e,
							currentCategoryName: t,
							initialNumberOfCategories: r
						} = this.props, {
							isExpanded: n
						} = this.state;
						if (!t || n || !r) return;
						return r < e.findIndex(e => e.name === t) + 1
					}, this.toggleExpanded = () => {
						this.setState(e => ({
							isExpanded: !e.isExpanded
						}), this.props.onMoreLessClick)
					}
				}
				componentDidMount() {
					this.shouldAutoExpand() && this.toggleExpanded()
				}
				componentDidUpdate() {
					this.shouldAutoExpand() && this.toggleExpanded()
				}
				renderCategoryList() {
					const {
						categories: e,
						categoryItemClassName: t,
						categoryItemHeight: r = te,
						categoryListContainerClassName: n,
						children: s,
						childrenOffset: a = 0,
						currentCategoryName: o,
						initialNumberOfCategories: d,
						onItemClick: l
					} = this.props, {
						isExpanded: u
					} = this.state, m = !u && d && r * d, g = a + (e ? r * e.length : 0), p = Object(c.a)(Z.a.categoryList, u && Z.a.expanded), h = e => !(!o || o !== Object($.g)(e)), y = i.a.createElement("ul", {
						className: p,
						style: {
							height: m || g
						}
					}, s, e && e.map((e, n) => {
						const s = a + n * r;
						return i.a.createElement(X, {
							category: e,
							className: t,
							isActive: h(e.name),
							key: e.id,
							onSendEventClick: l,
							tabIndex: m && s >= m ? -1 : 0
						}, e.name === b.m ? b.k : e.displayText || e.name)
					}));
					return i.a.createElement("div", {
						className: Object(c.a)(Z.a.categoryListContainer, n)
					}, y)
				}
				render() {
					const {
						buttonClassName: e,
						categories: t,
						className: r,
						header: n,
						headerClassName: s,
						initialNumberOfCategories: a
					} = this.props, o = t && a && t.length > a, d = Object(c.a)(r, Z.a.container);
					return i.a.createElement(V.a, {
						className: d,
						contentOnly: !0
					}, i.a.createElement("div", {
						className: Object(c.a)(Z.a.header, s)
					}, i.a.createElement("h2", null, n || ee._("Categories", null, {
						hk: "46zLMb"
					}))), this.renderCategoryList(), o && i.a.createElement(Y.r, {
						className: Object(c.a)(Z.a.button, e),
						onClick: this.toggleExpanded
					}, o && !this.state.isExpanded ? ee._("Show More", null, {
						hk: "1pCiqD"
					}) : ee._("Show Less", null, {
						hk: "2qT4h7"
					})))
				}
			}
			var ne = re,
				se = r("./src/lib/lessComponent.tsx"),
				ae = r("./src/reddit/components/CommunitiesDirectoryWidget/index.m.less"),
				ie = r.n(ae);
			const {
				fbt: oe
			} = r("./node_modules/fbt/lib/FbtPublic.js"), de = se.a.a("Link", ie.a), ce = e => {
				const t = "#" === e ? "0" : e.toLowerCase();
				return i.a.createElement(de, {
					href: `/subreddits/${t}-1`,
					key: e
				}, e)
			};
			var le = e => i.a.createElement(V.a, {
					className: ie.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, i.a.createElement("div", {
					className: ie.a.Title
				}, oe._("Browse Communities A-Z", null, {
					hk: "49KPIR"
				})), i.a.createElement("div", {
					className: ie.a.LinkContainer
				}, Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ#").map(ce))),
				ue = r("./src/reddit/components/SidebarContainer/index.tsx"),
				me = r("./src/reddit/components/SidebarSpacer/index.tsx"),
				be = r("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				ge = r("./src/reddit/components/TopSubredditsWidget/Container.tsx");
			const pe = e => {
					const t = e.categoryName && Object($.g)(e.categoryName);
					return i.a.createElement("div", {
						className: _.a.SidebarLeft
					}, i.a.createElement(ue.a, null, i.a.createElement(ne, {
						categories: e.categories,
						currentCategoryName: t,
						initialNumberOfCategories: 12,
						onItemClick: e.onSendEventClick
					})))
				},
				he = e => {
					const t = e.widgetCategories[0],
						r = e.widgetCategories[1];
					return i.a.createElement("div", {
						className: _.a.SidebarRight
					}, i.a.createElement(ue.a, null, i.a.createElement(ge.a, {
						category: t,
						first: 5,
						isSecondaryButton: !0,
						onSendEventClick: e.onSendEventClick
					}), i.a.createElement(me.a, null), i.a.createElement(be.a, null, i.a.createElement(ge.a, {
						category: r,
						className: _.a.stickyWidget,
						first: 5,
						isSecondaryButton: !0,
						onSendEventClick: e.onSendEventClick
					}), i.a.createElement(le, null))))
				};
			var ye = r("./src/reddit/selectors/category.ts"),
				fe = r("./src/reddit/selectors/moderatorPermissions.ts");
			const ke = Object(g.u)(),
				xe = (e, {
					match: t
				}) => Object(p.b)(t.params.categoryName || ""),
				Ee = Object(m.vf)(b.i),
				_e = Object(d.c)({
					categories: e => Object(ye.b)(e, {
						categoriesOrder: Ee
					}),
					categoryId: (e, t) => {
						const r = xe(0, t);
						return r === b.m ? b.l : r ? Object(ye.f)(e, {
							categoryName: r
						}) : b.c
					},
					categoryName: xe,
					isMod: fe.j,
					shouldShowLocalRecommendations: e => !1 !== e.user.prefs.showLocationBasedRecommendations
				}),
				Ce = Object(o.b)(_e),
				Se = {
					id: b.c,
					name: b.d,
					path: b.g,
					displayText: b.b
				},
				ve = {
					customIcon: i.a.createElement(f.a, null),
					id: b.p,
					name: b.q,
					displayText: b.o
				};
			class Ne extends i.a.Component {
				constructor(e) {
					super(e), this.getWidgetCategories = () => {
						const {
							categories: e
						} = this.props, t = e.filter(this.filterActiveCategory);
						return s()(t).slice(0, 2)
					}, this.updateWidgetCategories = e => {
						const {
							categories: t,
							categoryName: r
						} = this.props;
						if (e.categoryName !== r || e.categories.length !== t.length) {
							const e = this.getWidgetCategories();
							this.setWidgetCategories(e)
						}
					}, this.setWidgetCategories = e => this.setState({
						widgetCategories: e
					}), this.filterCategories = e => this.filterActiveCategory(e), this.filterActiveCategory = e => e.name !== this.props.categoryName, this.resetScrollPosition = () => {
						window.scrollTo(0, 0)
					}, this.sendCategoryWidgetEventClick = e => this.props.sendEvent(Object(y.a)(e)), this.sendFeaturedCategoryEventClick = (e, t, r) => this.props.sendEvent(Object(y.b)(e, t, r)), this.state = {
						widgetCategories: []
					}
				}
				componentDidMount() {
					const e = this.getWidgetCategories();
					this.setWidgetCategories(e), this.props.sendEvent(Object(h.e)())
				}
				componentDidUpdate(e) {
					this.resetScrollPosition(), this.updateWidgetCategories(e)
				}
				render() {
					var e;
					const {
						className: t,
						isMod: r,
						shouldShowLocalRecommendations: n
					} = this.props, s = [Se, ...n ? [b.j] : [], ...this.props.categories];
					r && s.unshift(ve);
					const a = Object(p.a)(b.g, s),
						o = r && this.props.categoryName === b.q,
						d = this.props.categoryId ? this.props.categoryName : o ? b.q : void 0,
						u = this.props.categoryId ? this.props.categoryId : o ? b.p : b.c,
						m = (null === (e = a.find(e => e.id === u)) || void 0 === e ? void 0 : e.displayText) || "";
					return i.a.createElement(l.a, null, i.a.createElement(k.a, {
						className: Object(c.a)(t, _.a.mainContent),
						content: i.a.createElement(z, {
							categoryId: u,
							categoryName: d,
							categoryDisplayText: m
						}),
						disableFullscreen: !0,
						navBar: i.a.createElement(C, null),
						sidebars: [i.a.createElement(pe, {
							key: "left",
							categories: a,
							categoryName: d || b.d,
							onSendEventClick: this.sendCategoryWidgetEventClick
						}), i.a.createElement(he, {
							key: "right",
							widgetCategories: this.state.widgetCategories,
							onSendEventClick: this.sendFeaturedCategoryEventClick
						})]
					}))
				}
			}
			t.default = ke(Ce(Object(u.c)(Ne)))
		},
		"./src/reddit/selectors/subredditLeaderboard.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return a
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "a", (function() {
				return d
			}));
			var n = r("./src/reddit/constants/subredditLeaderboard.ts"),
				s = r("./src/reddit/selectors/category.ts");
			const a = (e, t) => e.subreddits.rankingsPageInfo && e.subreddits.rankingsPageInfo[t] && e.subreddits.rankingsPageInfo[t].hasPreviousPage,
				i = (e, t) => e.subreddits.rankingsPageInfo && e.subreddits.rankingsPageInfo[t] && e.subreddits.rankingsPageInfo[t].hasNextPage,
				o = (e, t) => t === n.q ? n.p : t === n.m ? n.l : e || n.c,
				d = (e, t) => {
					const r = e.subreddits.rankings,
						n = t && Object(s.e)(e, {
							categoryName: t
						}),
						a = r[o(n && n.id || null, t)];
					return !(!a || !a.length)
				}
		},
		"./src/redditGQL/operations/GetNearbySubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"aff6d12aa0c2"}')
		},
		"./src/redditGQL/operations/TopSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"6104afd3cdeb"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditLeaderboard.09212163a0583831a757.js.map