// https://www.redditstatic.com/desktop2x/ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate~ProfileSnoobuilder.2f51daca223bc170a463.js
// Retrieved at 5/18/2022, 1:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate~ProfileSnoobuilder"], {
		"./node_modules/lodash/take.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseSlice.js"),
				r = n("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, n) {
				return e && e.length ? (t = n || void 0 === t ? 1 : r(t), s(e, 0, t < 0 ? 0 : t)) : []
			}
		},
		"./src/reddit/actions/socialLinks/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return v
			})), n.d(t, "a", (function() {
				return S
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "d", (function() {
				return O
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/components/SocialLinks/constants.ts"),
				i = n("./src/reddit/components/SocialLinks/helpers.ts"),
				o = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/DeleteSocialLinks.json"),
				c = n("./src/redditGQL/operations/SetSocialLinks.json"),
				d = n("./src/redditGQL/operations/SocialLinks.json"),
				l = n("./src/redditGQL/operations/UpdateSocialLinks.json");
			var u = n("./src/reddit/helpers/name/index.ts"),
				m = n("./src/reddit/helpers/structuredStyles/validators.ts"),
				p = n("./src/reddit/selectors/socialLinks.ts"),
				b = n("./src/redditGQL/types.ts"),
				h = n("./src/reddit/actions/socialLinks/constants.ts"),
				f = n("./src/lib/initializeClient/installReducer.ts"),
				x = n("./src/reddit/reducers/features/socialLinks/index.ts");
			Object(f.a)({
				features: {
					socialLinks: x.a
				}
			});
			const y = Object(s.a)(h.a),
				k = Object(s.a)(h.b),
				g = Object(s.a)(h.c),
				E = Object(s.a)(h.d),
				_ = Object(s.a)(h.e),
				v = e => {
					let {
						username: t
					} = e;
					return async (e, n, s) => {
						let {
							gqlContext: r
						} = s;
						const i = n();
						if (!!Object(p.c)(i, t)) return;
						e(k());
						const a = await (async (e, t) => {
							return await Object(o.a)(e, {
								...d,
								variables: t
							})
						})(r(), {
							username: t
						});
						if (a.ok && a.body) {
							const {
								data: n
							} = a.body, s = ((e, t) => {
								var n;
								const s = {},
									{
										redditorInfoByName: r
									} = t;
								if ("Redditor" !== (null == r ? void 0 : r.__typename)) return;
								const i = e.toLowerCase(),
									o = (null === (n = r.profile) || void 0 === n ? void 0 : n.socialLinks) || [];
								return s[i] = o, s
							})(t, n);
							s && e(y(s))
						}
					}
				},
				w = e => {
					let t, n, s, {
						socialLinkOption: i,
						rawHandle: o,
						rawTitle: a,
						url: c
					} = e;
					if (i.placeholderUrl) {
						const e = null == c ? void 0 : c.trim();
						if (!(e && Object(m.g)(e) === m.d.Valid)) throw new Error(r.f);
						t = e, n = null == a ? void 0 : a.trim()
					} else if (i.socialLinkType === b.x.Reddit) {
						const e = null == o ? void 0 : o.trim();
						if (!(e && Object(u.e)(e) && e && e.length >= r.h && !/\s/.test(e))) throw new Error(r.e);
						s = e
					} else s = null == o ? void 0 : o.trim();
					return {
						outboundUrl: t,
						title: n,
						handle: s,
						type: i.socialLinkType
					}
				},
				S = (e, t) => async (n, s, a) => {
					let {
						gqlContext: d
					} = a;
					const l = s(),
						{
							socialLinkOption: u,
							rawHandle: m,
							rawTitle: b,
							url: h
						} = t;
					if (!Object(p.a)(l, e)) return;
					const f = w({
							socialLinkOption: u,
							rawHandle: m,
							rawTitle: b,
							url: h
						}),
						x = await (async (e, t) => {
							return await Object(o.a)(e, {
								...c,
								variables: t
							})
						})(d(), {
							input: {
								socialLinks: [f]
							}
						});
					if (x.ok && x.body) {
						const {
							data: t
						} = x.body, {
							errors: s,
							ok: o,
							socialLinks: a
						} = t.setSocialLinks;
						if (o && !s) {
							const t = ((e, t) => {
								if (0 === e.length) return;
								return {
									username: t.toLowerCase(),
									addedSocialLink: e[e.length - 1]
								}
							})(a, e);
							if (!t) throw new Error(r.b);
							n(g(t))
						} else Object(i.f)(s)
					} else {
						const {
							errors: e
						} = x.body;
						Object(i.f)(e)
					}
				}, C = (e, t) => async (n, s, r) => {
					let {
						gqlContext: i
					} = r;
					const c = s();
					if (!Object(p.a)(c, t)) return;
					const d = await (async (e, t) => {
						return await Object(o.a)(e, {
							...a,
							variables: t
						})
					})(i(), {
						input: {
							socialLinkIds: [e]
						}
					});
					if (d.ok && d.body) {
						const s = ((e, t) => {
							return {
								username: e.toLowerCase(),
								removedSocialLinkId: t
							}
						})(t, e);
						n(E(s))
					}
				}, O = (e, t, n) => async (s, a, c) => {
					let {
						gqlContext: d
					} = c;
					const u = a(),
						{
							socialLinkOption: m,
							rawHandle: b,
							rawTitle: h,
							url: f
						} = n;
					if (!Object(p.a)(u, t)) return;
					const x = {
							...w({
								socialLinkOption: m,
								rawHandle: b,
								rawTitle: h,
								url: f
							}),
							id: e
						},
						y = await (async (e, t) => {
							return await Object(o.a)(e, {
								...l,
								variables: t
							})
						})(d(), {
							input: {
								socialLinks: [x]
							}
						});
					if (y.ok && y.body) {
						const {
							data: n
						} = y.body, {
							errors: o,
							ok: a,
							socialLinks: c
						} = n.updateSocialLinks;
						if (a && !o) {
							const n = ((e, t, n) => {
								const s = t.find(t => t.id === e);
								if (s) return {
									username: n.toLowerCase(),
									updatedSocialLink: s
								}
							})(e, c, t);
							if (!n) throw new Error(r.b);
							s(_(n))
						} else Object(i.f)(o)
					} else {
						const {
							errors: e
						} = y.body;
						Object(i.f)(e)
					}
				}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less": function(e, t, n) {
			e.exports = {
				Container: "_2cB6ysPhgaYtknebHcCXGH",
				container: "_2cB6ysPhgaYtknebHcCXGH",
				Component: "qQD1kUtHq2K4gyBqJrEnF",
				component: "qQD1kUtHq2K4gyBqJrEnF",
				"m-consider-sidebar": "gd0BrpRBoY73xB5YwvDWU",
				mConsiderSidebar: "gd0BrpRBoY73xB5YwvDWU"
			}
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/componentSizes.ts"),
				d = n("./src/reddit/constants/postLayout.ts"),
				l = n("./src/reddit/constants/screenWidths.ts"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less"),
				p = n.n(m),
				b = n("./src/lib/lessComponent.tsx");
			const h = Object(u.u)(),
				f = Object(o.c)({
					layout: u.R
				}),
				x = Object(i.b)(f);
			class y extends r.a.Component {
				constructor(e) {
					super(e), this.onClickIcon = e => {
						if (void 0 === this.state.left) {
							const e = this.ref.offsetLeft;
							this.setState({
								left: e
							})
						}
					}, this.onMouseEnter = () => {
						this.state.mouseInside || this.setState({
							mouseInside: !0
						})
					}, this.onMouseLeave = () => {
						this.state.mouseInside && this.setState({
							left: void 0,
							mouseInside: !1
						})
					}, this.ref = null, this.state = {
						left: void 0,
						mouseInside: !1
					}
				}
				componentWillReceiveProps(e) {
					0 !== e.offsetLeft - this.props.offsetLeft && (this.noTransition = !0)
				}
				componentDidUpdate() {
					this.noTransition && (this.noTransition = !1)
				}
				getDynamicStyleTags() {
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n          .${p.a.Component} {\n            --layoutNavigation-considerateNav-offsetLeft: ${this.props.offsetLeft}px;\n          }\n        `
						}
					}), this.getLargeLayoutStyle())
				}
				getLargeLayoutStyle() {
					const e = this.props.offsetLeft + 2 * c.m + c.q + c.r,
						t = l.a - e,
						n = c.g - t,
						s = l.a + n + (this.props.bladeOpen ? c.a : 0);
					return this.props.layout !== d.g.Large ? null : r.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n            @media (min-width: ${s}px) {\n              .${p.a.Component} {\n                left: calc((100% + var(--layoutNavigation-considerateNav-offsetLeft) - ${c.g+c.q+c.r}px) / 2);\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ${c.r}px) / 2);\n              }\n\n              .${p.a.Component}.${p.a["m-consider-sidebar"]} {\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ${c.g+c.q+c.r}px) / 2);\n              }\n            }\n          `
						}
					})
				}
				render() {
					const e = Object(a.a)(this.props.className, p.a.Component, {
						[p.a["m-consider-sidebar"]]: this.props.considerSidebar
					});
					return r.a.createElement("div", {
						className: p.a.Container
					}, r.a.createElement("div", {
						className: e,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseEnter,
						ref: e => this.ref = e,
						style: {
							left: this.state.left || void 0,
							transition: this.noTransition ? "initial" : void 0
						}
					}, this.getDynamicStyleTags(), this.props.render(this.onClickIcon)))
				}
			}
			t.a = h(x(b.a.wrapped(y, "Component", p.a)))
		},
		"./src/reddit/components/ProfileNavMenu/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2vH__bwuub4wzWRqcvhh3m",
				menuContainer: "LSvZ4rzt8zI_VpizIGPDF",
				dropdown: "_3ulncTe6l8jRF_TM6HZZFk",
				mainLink: "_1JNzvBgvzSnX27gUBKqqmJ",
				isActive: "Zvl1svdkcyUlRhf5RHGKc",
				dropdownLink: "_3FXf9zUWKXtpapv4rBHh1L"
			}
		},
		"./src/reddit/components/ProfileNavMenu/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/fastdom/index.ts"),
				i = n("./node_modules/lodash/isEqual.js"),
				o = n.n(i),
				a = n("./node_modules/lodash/throttle.js"),
				c = n.n(a),
				d = n("./node_modules/react/index.js"),
				l = n.n(d),
				u = n("./node_modules/react-redux/es/index.js"),
				m = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				p = n("./node_modules/reselect/es/index.js"),
				b = n("./src/config.ts"),
				h = n("./src/higherOrderComponents/asTooltip.tsx"),
				f = n("./src/lib/classNames/index.ts"),
				x = n("./src/lib/constants/index.ts"),
				y = n("./src/reddit/actions/tooltip.ts"),
				k = n("./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx"),
				g = n("./src/reddit/constants/componentSizes.ts"),
				E = n("./src/reddit/contexts/PageLayer/index.tsx"),
				_ = n("./src/reddit/controls/Dropdown/index.tsx"),
				v = n("./src/reddit/controls/InternalLink/index.tsx"),
				w = n("./src/reddit/icons/fonts/index.tsx"),
				S = n("./src/reddit/models/Profile/index.ts"),
				C = n("./src/reddit/featureFlags/index.ts"),
				O = n("./src/reddit/selectors/tooltip.ts"),
				N = n("./src/reddit/selectors/user.ts"),
				L = n("./src/reddit/selectors/userPrefs.ts"),
				j = n("./src/reddit/components/ProfileNavMenu/index.m.less"),
				T = n.n(j);

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const I = Object(E.u)({
					routeName: E.Y,
					privateListingType: E.j
				}),
				R = Object(p.c)({
					isDropdownMenuOpen: e => Object(O.a)(e) === B,
					isOwnProfile: (e, t) => Object(N.V)(e, t.profileName),
					isSnoovatar30Enabled: C.d.snoovatar30,
					isSubscriptionsPinned: L.b
				}),
				M = Object(h.a)(_.a),
				B = "profile-nav-menu-tooltip",
				F = g.g + g.r + g.q;
			var A;
			t.a = I(Object(u.b)(R, e => ({
					toggleTooltip: t => e(Object(y.h)({
						tooltipId: t
					}))
				}))(e => {
					let {
						isDropdownMenuOpen: t,
						isOwnProfile: n,
						privateListingType: s,
						profileName: i,
						routeName: a,
						toggleTooltip: u,
						isSnoovatar30Enabled: m,
						isSubscriptionsPinned: p,
						viewBlockedConsent: b
					} = e;
					const [h, x] = Object(d.useState)(!1), y = Object(d.useRef)(null), [E, _] = Object(d.useState)([]), [v, S] = Object(d.useState)([]);
					return Object(d.useEffect)(() => {
						const e = U({
							profileName: i,
							isOwnProfile: n,
							routeName: a,
							privateListingType: s,
							isSnoovatar30Enabled: m,
							viewBlockedConsent: b
						});
						_(e.filter(e => e.position === A.MENU));
						const t = [],
							d = c()(() => {
								const n = document.documentElement.clientWidth - 2 * g.q,
									s = n > F ? F : n;
								let r = 42;
								t.forEach(t => {
									r += t.offsetWidth;
									const n = e.find(e => e.text.toString().toLowerCase() === t.text);
									n.position = r > s ? A.DROPDOWN : A.MENU
								});
								const i = e.filter(e => e.position === A.MENU);
								_(e => o()(i, e) ? e : i);
								const a = e.filter(e => e.position === A.DROPDOWN);
								S(e => o()(a, e) ? e : a), x(a.length > 0)
							}, 50);
						return r.a.read(() => {
							const e = y.current;
							e && (e.childNodes.forEach((e, n) => {
								t.push({
									text: e.textContent.toLowerCase(),
									offsetWidth: e.offsetWidth
								})
							}), d())
						}), window.addEventListener("resize", d), () => {
							window.removeEventListener("resize", d)
						}
					}, [i, n, a, s, m, b]), l.a.createElement("div", {
						className: T.a.container
					}, l.a.createElement(k.a, {
						bladeOpen: !1,
						offsetLeft: p ? g.u : 0,
						render: () => l.a.createElement(l.a.Fragment, null, l.a.createElement("div", {
							className: T.a.menuContainer,
							ref: y
						}, E.map(e => l.a.createElement(D, P({}, e, {
							key: e.key
						})))), h && l.a.createElement("button", {
							className: Object(f.a)(T.a.mainLink),
							id: B,
							onClick: () => u(B)
						}, l.a.createElement(w.a, {
							name: "overflow_horizontal"
						})), h && l.a.createElement(M, {
							className: T.a.dropdown,
							isOpen: t,
							tooltipId: B
						}, v.map(e => l.a.createElement(W, P({}, e, {
							key: e.key
						})))))
					}))
				})),
				function(e) {
					e.MENU = "menu", e.DROPDOWN = "dropdown"
				}(A || (A = {}));
			const D = e => {
					let {
						isActive: t,
						text: n,
						url: s,
						internal: r
					} = e;
					return r ? l.a.createElement(v.default, {
						className: Object(f.a)(T.a.mainLink, {
							[T.a.isActive]: t
						}),
						to: s
					}, n) : l.a.createElement("a", {
						className: Object(f.a)(T.a.mainLink, {
							[T.a.isActive]: t
						}),
						href: s
					}, n)
				},
				W = e => {
					let {
						isActive: t,
						internal: n,
						url: s,
						text: r
					} = e;
					return n ? l.a.createElement(m.a, {
						className: Object(f.a)(T.a.dropdownLink, {
							[T.a.isActive]: t
						}),
						to: s,
						rel: "nofollow noopener noreferrer",
						role: "listitem"
					}, r) : l.a.createElement("a", {
						className: Object(f.a)(T.a.dropdownLink),
						href: s,
						rel: "nofollow noopener noreferrer",
						role: "listitem",
						target: "_blank"
					}, r)
				},
				U = e => {
					let {
						profileName: t,
						isOwnProfile: n,
						routeName: r,
						privateListingType: i,
						isSnoovatar30Enabled: o,
						viewBlockedConsent: a
					} = e;
					const c = n ? [{
						internal: !0,
						isActive: r === x.Nb.PROFILE_PRIVATE && i === S.b.Saved,
						key: "profile.mainmenu.saved",
						text: s.fbt._("Saved", null, {
							hk: "2w1YRh"
						}),
						url: `/user/${t}/saved/`,
						position: A.MENU
					}, {
						internal: !0,
						isActive: r === x.Nb.PROFILE_PRIVATE && i === S.b.Hidden,
						key: "profile.mainmenu.hidden",
						text: s.fbt._("Hidden", null, {
							hk: "225tka"
						}),
						url: `/user/${t}/hidden/`,
						position: A.MENU
					}, {
						internal: !0,
						isActive: r === x.Nb.PROFILE_PRIVATE && i === S.b.Upvoted,
						key: "profile.mainmenu.upvoted",
						text: s.fbt._("Upvoted", null, {
							hk: "RKwFZ"
						}),
						url: `/user/${t}/upvoted/`,
						position: A.MENU
					}, {
						internal: !0,
						isActive: r === x.Nb.PROFILE_PRIVATE && i === S.b.Downvoted,
						key: "profile.mainmenu.downvoted",
						text: s.fbt._("Downvoted", null, {
							hk: "2F9IL4"
						}),
						url: `/user/${t}/downvoted/`,
						position: A.MENU
					}] : [];
					n ? (c.push({
						internal: !0,
						isActive: r === x.Nb.PROFILE_PRIVATE && i === S.b.ReceivedGildings,
						key: "profile.mainmenu.receiverGildings",
						text: s.fbt._("Awards received", null, {
							hk: "iwLBV"
						}),
						url: `/user/${t}/gilded/`,
						position: A.MENU
					}), c.push({
						internal: !0,
						isActive: r === x.Nb.PROFILE_PRIVATE && i === S.b.GivenGildings,
						key: "profile.mainmenu.givenGildings",
						text: s.fbt._("Awards given", null, {
							hk: "2UPYZc"
						}),
						url: `/user/${t}/gilded/given/`,
						position: A.MENU
					})) : c.push({
						internal: !1,
						isActive: !1,
						key: "profile.mainmenu.gildedLegacy",
						text: s.fbt._("Awards received (legacy)", null, {
							hk: "1YgfYU"
						}),
						url: `${b.a.oldRedditUrl}/user/${t}/gilded/`,
						position: A.MENU
					});
					const d = o ? [{
							internal: !0,
							isActive: r === x.Nb.PROFILE_SNOOBUILDER,
							key: "profile.mainmenu.snoobuilder",
							text: s.fbt._("Snoobuilder", null, {
								hk: "3SSKff"
							}),
							url: `/user/${t}/snoo/`,
							position: A.MENU
						}] : [],
						l = a ? "?consent=true" : "";
					return [{
						internal: !0,
						isActive: r === x.Nb.PROFILE_OVERVIEW,
						key: "profile.mainmenu.overview",
						text: s.fbt._("Overview", null, {
							hk: "2IBbqy"
						}),
						url: `/user/${t}/${l}`,
						position: A.MENU
					}, {
						internal: !0,
						isActive: r === x.Nb.PROFILE_POSTS,
						key: "profile.mainmenu.posts",
						text: s.fbt._("Posts", null, {
							hk: "a1BoF"
						}),
						url: `/user/${t}/posts/${l}`,
						position: A.MENU
					}, {
						internal: !0,
						isActive: r === x.Nb.PROFILE_COMMENTS,
						key: "profile.mainmenu.comments",
						text: s.fbt._("Comments", null, {
							hk: "2VwjOc"
						}),
						url: `/user/${t}/comments/${l}`,
						position: A.MENU
					}, ...d, ...c]
				}
		},
		"./src/reddit/components/ProfileSidebar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/actions/socialLinks/index.ts"),
				c = n("./src/reddit/components/SidebarContainer/index.tsx"),
				d = n("./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx"),
				l = n("./src/reddit/components/SidebarProfileMultireddits/index.tsx"),
				u = n("./src/reddit/components/SidebarProfilePowerupContributions/index.tsx"),
				m = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				p = n("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				b = n("./src/reddit/components/SidebarTrophyCase/index.tsx"),
				h = n("./src/reddit/components/Widgets/ConnectedAccounts/index.tsx"),
				f = n("./src/reddit/constants/posts.ts"),
				x = n("./src/reddit/selectors/experiments/econ/index.ts");
			const y = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-ProfileIdCard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("reddit-components-ProfileIdCard").then(n.bind(null, "./src/reddit/components/ProfileIdCard/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/ProfileIdCard/index.tsx"
					}
				}),
				k = e => {
					const t = Object(o.e)(e => Object(x.j)(e)),
						n = Object(o.d)();
					return Object(r.useEffect)(() => {
						n(Object(a.c)({
							username: e.profileName
						}))
					}, [n, e.profileName]), i.a.createElement(c.a, {
						className: e.className
					}, i.a.createElement(y, {
						profileName: e.profileName,
						isOverlay: e.isOverlay
					}), i.a.createElement(h.a, {
						subredditOrProfile: {
							name: e.profileName,
							type: f.a.PROFILE
						}
					}), i.a.createElement(d.a, {
						profileName: e.profileName
					}), i.a.createElement(l.a, {
						profileName: e.profileName
					}), !t && i.a.createElement(m.a, null, i.a.createElement(u.a, {
						profileName: e.profileName
					})), i.a.createElement(m.a, null, i.a.createElement(b.a, {
						profileName: e.profileName
					})), i.a.createElement(p.a, {
						hideBackToTop: e.hideBackToTop
					}))
				};
			k.defaultProps = {
				isOverlay: !1
			}, t.a = k
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/SidebarContainer/index.m.less"),
				i = n.n(r);
			t.a = s.a.div("container", i.a)
		},
		"./src/reddit/components/SidebarExpandableList/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/take.js"),
				i = n.n(r),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				c = n("./src/lib/constants/index.ts"),
				d = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				m = n("./src/reddit/layout/row/Inline/index.tsx"),
				p = n("./src/reddit/layout/row/RightAlign/index.tsx");
			const b = e => {
				const {
					className: t,
					hasMoreItems: n,
					headerButton: r,
					items: c,
					minimizedLength: b,
					onLoadMore: h,
					pending: f,
					renderItem: x,
					title: y
				} = e, [k, g] = Object(o.useState)(!1), E = c.length > b || n, _ = (!E || k ? c : i()(c, b)).map(e => x({
					item: e
				})), v = () => {
					k || g(!0), k && !n && g(!1), n && h && h()
				};
				return a.a.createElement(d.a, {
					className: t,
					headerButton: r,
					title: y
				}, _, a.a.createElement(m.a, null, a.a.createElement(p.a, null, E && (() => {
					const e = !k || n && h ? s.fbt._("View More", null, {
						hk: "1RK8uA"
					}) : s.fbt._("View Less", null, {
						hk: "1M72mK"
					});
					return a.a.createElement(l.r, {
						onClick: v
					}, f ? a.a.createElement(u.a, {
						sizePx: 10
					}) : e)
				})())))
			};
			b.defaultProps = {
				minimizedLength: c.Tb
			}, t.a = b
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, n) {
			e.exports = {
				GreyRereddit: "_3Y8af3R9_DE3lpXa6Hq5Ab",
				greyRereddit: "_3Y8af3R9_DE3lpXa6Hq5Ab",
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				NoneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				noneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				CountryLinkContainer: "_2G12SFsZiv6I_UJCbuf7qR",
				countryLinkContainer: "_2G12SFsZiv6I_UJCbuf7qR"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				u = n("./src/reddit/constants/experiments.ts"),
				m = n("./src/reddit/constants/location.ts"),
				p = n("./src/reddit/contexts/PageLayer/index.tsx"),
				b = n("./src/reddit/helpers/getReredditLinkWithYear/index.ts"),
				h = n("./src/reddit/helpers/trackers/navigation.ts"),
				f = n("./src/reddit/selectors/experiments/countrySites.ts"),
				x = n("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				y = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				k = n("./src/reddit/selectors/meta.ts"),
				g = n("./src/reddit/components/SidebarFooter/index.m.less"),
				E = n.n(g);
			const {
				fbt: _
			} = n("./node_modules/fbt/lib/FbtPublic.js"), v = c.a.a("Link", E.a), w = Object(o.c)({
				countryCode: k.b,
				d2xPdpSideRailRecsVariant: x.a,
				isCountrySitesEnabled: f.b,
				isD2xPdpSideRailRecsEnabled: x.b,
				isNavbarLikeMwebEnabled: y.a
			}), S = Object(i.b)(w), C = Object(p.u)({
				isFrontpage: p.A,
				isCountrySitePage: p.y
			}), O = e => {
				let {
					countryCode: t,
					reredditContent: n
				} = e;
				return r.a.createElement("div", {
					className: E.a.GreyRereddit
				}, n, r.a.createElement(v, {
					href: "https://www.reddithelp.com"
				}, _._("help", null, {
					hk: "4lyYaD"
				})), r.a.createElement(v, {
					href: "https://www.reddit.com/coins"
				}, _._("Reddit coins", null, {
					hk: "32iMaN"
				})), r.a.createElement(v, {
					href: "https://www.reddit.com/premium"
				}, _._("Reddit premium", null, {
					hk: "RuO3A"
				})), !!m.c[t] && r.a.createElement(r.a.Fragment, null, r.a.createElement(v, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, _._("Impressum", null, {
					hk: "4cKXSI"
				})), r.a.createElement(v, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, _._("Transparency report", null, {
					hk: "3CgBdG"
				})), r.a.createElement(v, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: E.a.NoneCapitalizeLink
				}, _._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), r.a.createElement(v, {
					href: "https://www.redditinc.com/"
				}, _._("about", null, {
					hk: "1sqJKs"
				})), r.a.createElement(v, {
					href: "https://www.redditinc.com/careers"
				}, _._("careers", null, {
					hk: "26ABvc"
				})), r.a.createElement(v, {
					href: "https://www.redditinc.com/press"
				}, _._("press", null, {
					hk: "2Qmgdz"
				})), r.a.createElement(v, {
					href: "https://www.redditinc.com/advertising"
				}, _._("advertise", null, {
					hk: "Mt40U"
				})), r.a.createElement(v, {
					href: "http://www.redditblog.com/"
				}, _._("blog", null, {
					hk: "46IQJw"
				})), r.a.createElement(v, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, _._("Terms", null, {
					hk: "4qRzfE"
				})), r.a.createElement(v, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, _._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(v, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, _._("Privacy policy", null, {
					hk: "10K04G"
				})), r.a.createElement(v, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, _._("Mod policy", null, {
					hk: "2gYc2T"
				})), r.a.createElement("div", {
					className: E.a.Copyright
				}, _._("Reddit Inc © {year}. All rights reserved", [_._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			};
			t.a = C(S(Object(d.c)(e => {
				const t = Object(i.f)().getState(),
					n = Object(f.a)(t, Object(a.c)());
				if (e.isNavbarLikeMwebEnabled) return e.isFrontpage ? r.a.createElement(l.a, {
					className: E.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, r.a.createElement("div", {
					className: E.a.LinkContainer
				}, r.a.createElement("div", {
					className: E.a.Column
				}, r.a.createElement(v, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, _._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(v, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, _._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: E.a.Column
				}, r.a.createElement(v, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, _._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(v, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, _._("Moderator Guidelines", null, {
					hk: "2O9otm"
				})))), r.a.createElement("div", {
					className: E.a.Copyright
				}, _._("© {year} Reddit, Inc. All rights reserved.", [_._param("year", (new Date).getFullYear().toString())], {
					hk: "sR7zP"
				}))) : null;
				const s = t => {
					const s = {
						de: "Deutsch",
						fr: "Français",
						es: "Español",
						en: "USA/Global",
						it: "Italiano"
					};
					return n.includes(t) || "en" === t ? r.a.createElement(v, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(h.a)(t))
					}, s[t]) : null
				};
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === u.yc.GreyRereddit ? e.reredditButtons : [];
					return r.a.createElement(O, {
						reredditContent: t,
						countryCode: e.countryCode
					})
				}
				return r.a.createElement(l.a, {
					className: E.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, r.a.createElement("div", {
					className: E.a.LinkContainer
				}, r.a.createElement("div", {
					className: E.a.Column
				}, r.a.createElement(v, {
					href: "https://www.reddithelp.com"
				}, _._("help", null, {
					hk: "4lyYaD"
				})), r.a.createElement(v, {
					href: "https://www.reddit.com/coins"
				}, _._("Reddit coins", null, {
					hk: "32iMaN"
				})), r.a.createElement(v, {
					href: "https://www.reddit.com/premium"
				}, _._("Reddit premium", null, {
					hk: "RuO3A"
				})), e.isFrontpage && r.a.createElement(r.a.Fragment, null, r.a.createElement(v, {
					href: "https://www.reddit.com/subreddits/a-1/"
				}, _._("Communities", null, {
					hk: "3CJu37"
				})), r.a.createElement(v, {
					href: `https://www.reddit.com${Object(b.a)()}`
				}, _._("Rereddit", null, {
					hk: "1z3k7C"
				})), r.a.createElement(v, {
					href: "https://www.reddit.com/topics/a-1/"
				}, _._("Topics", null, {
					hk: "349RFt"
				}))), !!m.c[e.countryCode] && r.a.createElement(r.a.Fragment, null, r.a.createElement(v, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, _._("Impressum", null, {
					hk: "4cKXSI"
				})), r.a.createElement(v, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, _._("Transparency report", null, {
					hk: "3CgBdG"
				})), r.a.createElement(v, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: E.a.NoneCapitalizeLink
				}, _._("Report NetzDG Content", null, {
					hk: "1nszCF"
				})))), r.a.createElement("div", {
					className: E.a.Column
				}, r.a.createElement(v, {
					href: "https://www.redditinc.com/"
				}, _._("about", null, {
					hk: "1sqJKs"
				})), r.a.createElement(v, {
					href: "https://www.redditinc.com/careers"
				}, _._("careers", null, {
					hk: "26ABvc"
				})), r.a.createElement(v, {
					href: "https://www.redditinc.com/press"
				}, _._("press", null, {
					hk: "2Qmgdz"
				})), r.a.createElement(v, {
					href: "https://www.redditinc.com/advertising"
				}, _._("advertise", null, {
					hk: "Mt40U"
				})), r.a.createElement(v, {
					href: "http://www.redditblog.com/"
				}, _._("blog", null, {
					hk: "46IQJw"
				})), r.a.createElement(v, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, _._("Terms", null, {
					hk: "4qRzfE"
				})), r.a.createElement(v, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, _._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(v, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, _._("Privacy policy", null, {
					hk: "10K04G"
				})), r.a.createElement(v, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, _._("Mod policy", null, {
					hk: "2gYc2T"
				})))), (e.isCountrySitePage || e.isFrontpage && e.isCountrySitesEnabled) && r.a.createElement("div", {
					className: E.a.CountryLinkContainer
				}, r.a.createElement("div", {
					className: E.a.Column
				}, s("en"), s("fr"), s("it")), r.a.createElement("div", {
					className: E.a.Column
				}, s("de"), s("es"))), r.a.createElement("div", {
					className: E.a.Copyright
				}, _._("Reddit Inc © {year}. All rights reserved", [_._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			})))
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3thndRe559UZy14xE1gZ_"
			}
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/profile/index.ts"),
				d = n("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				u = n("./src/reddit/models/User/index.ts"),
				m = n("./src/reddit/selectors/profile.ts"),
				p = n("./src/reddit/selectors/subscriptions.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less"),
				f = n.n(h);
			const x = Object(a.c)({
					currentUser: b.k,
					moderated: m.n,
					subscriptions: p.e,
					hasMoreModerated: m.d,
					loadMorePending: m.a
				}),
				y = Object(o.b)(x, (e, t) => ({
					onLoadMoreGqlModeratedSubreddits: () => e(Object(c.c)(t.profileName))
				}), (e, t, n) => ({
					...n,
					...e,
					...t,
					onLoadMore: () => {
						e.hasMoreModerated && t.onLoadMoreGqlModeratedSubreddits()
					}
				})),
				k = e => {
					let {
						item: t
					} = e;
					return i.a.createElement(l.a, {
						id: t.id,
						iconUrl: t.iconUrl,
						isNSFW: t.isNSFW,
						key: `${t.type}-${t.name}`,
						name: t.name,
						subscribers: t.subscribers,
						isSubscribed: t.isSubscribed,
						widget: void 0,
						sendEvent: () => void 0,
						type: t.type
					})
				};
			t.a = y(e => {
				const {
					currentUser: t,
					moderated: n,
					profileName: r,
					subscriptions: o,
					hasMoreModerated: a,
					onLoadMore: c,
					loadMorePending: l
				} = e;
				if (0 === n.length) return null;
				const m = t && Object(u.e)(t).toLowerCase() === r.toLowerCase() ? s.fbt._("You're a moderator of these communities", null, {
						hk: "2YoCxy"
					}) : s.fbt._("Moderator of these communities", null, {
						hk: "msvzk"
					}),
					p = function(e, t) {
						return e.map(e => ({
							name: e.name,
							subscribers: e.subscribers,
							iconUrl: e.icon.url,
							isNSFW: e.isNSFW,
							isSubscribed: t.has(e.id),
							type: "user" === e.type ? "profile" : "subreddit",
							sendEvent: () => void 0
						}))
					}(n, new Set(o));
				return i.a.createElement(d.a, {
					className: f.a.container,
					title: m,
					items: p,
					renderItem: k,
					hasMoreItems: a,
					onLoadMore: c,
					pending: l
				})
			})
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.m.less": function(e, t, n) {
			e.exports = {
				listItem: "_3lbnTBPV5H4wHdRz5ATVc9",
				icon: "Vm0_pCIi1Z6JWa0EVf6jK",
				description: "_2xcc4c-4TOL7KOsJidXtl",
				name: "_3nt8_GidTIn88UciXx27E7",
				meta: "_3iC0Hyv57ON8dAtU94HFE_"
			}
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/actions/profile/index.ts"),
				l = n("./src/reddit/components/SidebarExpandableList/index.tsx"),
				u = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				m = n("./src/reddit/selectors/profile.ts"),
				p = n("./src/reddit/components/SidebarProfileMultireddits/index.m.less"),
				b = n.n(p);
			const h = Object(c.c)({
					hasMoreMultireddits: m.e,
					loadMorePending: m.b,
					multireddits: m.o
				}),
				f = Object(o.b)(h, (e, t) => ({
					onLoadMoreMultireddits: () => e(Object(d.g)(t.profileName, !0))
				}), (e, t, n) => ({
					...n,
					...e,
					...t,
					onLoadMore: () => {
						e.hasMoreMultireddits && t.onLoadMoreMultireddits()
					}
				})),
				x = e => {
					let {
						item: t
					} = e;
					return i.a.createElement("div", {
						className: b.a.listItem,
						key: t.url
					}, i.a.createElement("img", {
						className: b.a.icon,
						src: t.icon
					}), i.a.createElement("div", {
						className: b.a.description
					}, i.a.createElement(a.a, {
						className: b.a.name,
						to: t.url
					}, t.displayText), i.a.createElement("div", {
						className: b.a.meta
					}, s.fbt._({
						"*": "{communities} communities",
						_1: "1 community"
					}, [s.fbt._plural(t.subredditCount, "communities")], {
						hk: "1eyxrS"
					}))))
				};
			t.a = f(e => {
				const {
					hasMoreMultireddits: t,
					loadMorePending: n,
					multireddits: r,
					onLoadMore: o,
					profileName: a
				} = e;
				return r && r.length ? i.a.createElement(u.a, null, i.a.createElement(l.a, {
					hasMoreItems: t,
					items: r,
					onLoadMore: o,
					pending: n,
					renderItem: x,
					title: s.fbt._("Public custom feeds by u/{profileName}", [s.fbt._param("profileName", a)], {
						hk: "16Oicc"
					})
				})) : null
			})
		},
		"./src/reddit/components/SidebarProfilePowerupContributions/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./src/reddit/components/SidebarExpandableList/index.tsx"),
				d = n("./src/reddit/components/SubredditIcon/index.tsx"),
				l = n("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				u = n("./src/reddit/selectors/gold/powerups/index.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				p = n("./node_modules/reselect/es/index.js"),
				b = n("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				h = n.n(b);
			const f = Object(p.c)({
				subreddits: function(e, t) {
					let {
						profileName: n
					} = t;
					const s = Object(m.zb)(e, {
							userName: n
						}),
						r = Object(u.f)(e);
					return (s && r ? r[s.id] : null) || []
				}
			});

			function x(e) {
				let {
					item: t
				} = e;
				const n = t.subredditInfo,
					r = i.a.createElement(d.b, {
						iconUrl: n.styles.icon,
						className: h.a.subredditIcon
					});
				return i.a.createElement(l.a, {
					className: h.a.communityItemContainer,
					key: n.id
				}, i.a.createElement("div", {
					className: h.a.iconContainer
				}, i.a.createElement(a.a, {
					to: n.path
				}, r)), i.a.createElement("div", {
					className: h.a.communityDescription
				}, i.a.createElement("div", {
					className: h.a.communityName
				}, i.a.createElement(a.a, {
					to: n.path
				}, n.prefixedName)), i.a.createElement("div", {
					className: h.a.subscriberCount
				}, s.fbt._({
					"*": "{number} Powerups",
					_1: "1 Powerup"
				}, [s.fbt._plural(t.powerups, "number")], {
					hk: "3fbcDy"
				}))))
			}
			t.a = Object(o.b)(f)(e => {
				let {
					subreddits: t
				} = e;
				return function(e) {
					return e.length > 0 && e.every(e => e.subredditInfo)
				}(t) ? i.a.createElement(c.a, {
					title: s.fbt._("Supports Communities", null, {
						hk: "1vCNdZ"
					}),
					items: t,
					renderItem: x
				}) : null
			})
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/SidebarSpacer/index.m.less"),
				r = n.n(s),
				i = n("./src/lib/lessComponent.tsx");
			t.a = i.a.div("Component", r.a)
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1oRQu-aolgpPPJDblUGTw5",
				container: "_1oRQu-aolgpPPJDblUGTw5",
				BackToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				backToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				BottomStickyStyles: "xTKAJNhaO7iI3cnAQ1PpJ",
				bottomStickyStyles: "xTKAJNhaO7iI3cnAQ1PpJ",
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
			var s = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/lodash/throttle.js"),
				i = n.n(r),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				c = n("./src/lib/constants/index.ts"),
				d = n("./src/reddit/constants/elementIds.ts"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/components/BackToTop/index.m.less"),
				m = n.n(u);
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js"), b = e => {
				if (e) {
					const e = document.getElementById(d.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			var h = e => {
					let {
						className: t,
						isOverlay: n,
						style: r
					} = e;
					return a.a.createElement("div", {
						className: Object(s.a)(t, m.a.container),
						style: r
					}, a.a.createElement(l.l, {
						className: m.a.button,
						onClick: () => b(n)
					}, p._("Back to Top", null, {
						hk: "YjBtV"
					})))
				},
				f = n("./src/reddit/components/SidebarFooter/index.tsx"),
				x = n("./src/reddit/constants/componentSizes.ts"),
				y = n("./src/reddit/contexts/PageLayer/index.tsx"),
				k = n("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				g = n.n(k),
				E = n("./src/lib/lessComponent.tsx");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const v = c.e[1] + 24,
				w = x.f + 8,
				S = w + 152 + 16,
				C = S + v + 8,
				O = E.a.div("Container", g.a),
				N = E.a.wrapped(e => {
					let {
						className: t,
						isOverlay: n,
						...s
					} = e;
					return a.a.createElement(h, _({
						className: t,
						isOverlay: n,
						style: {
							top: `calc(100vh - ${n?w:8}px)`
						}
					}, s))
				}, "BackToTop", g.a),
				L = e => {
					let {
						children: t,
						className: n,
						isFakeOverlay: r,
						isSticky: i,
						shouldStickToBottom: o
					} = e;
					return a.a.createElement("div", {
						className: Object(s.a)(n, {
							[g.a.BottomStickyStyles]: o,
							[g.a.StickyStyles]: !o && i && !r,
							[g.a.StickyStylesFakeOverlay]: !o && !!r
						})
					}, t)
				};
			class j extends o.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > C,
						shouldFooterSticky: this.windowHeight > S
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
					}, this.handleResize = i()(() => {
						this.updateMeasurements(), this.updateState()
					}, c.K), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
						isAdSticky: !0,
						isBottomSticky: !1,
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
							children: s,
							className: r,
							hideFooter: i,
							pageLayer: o,
							recommendationsComponent: c,
							reredditButtons: d
						}
					} = this, l = this.state.isAdSticky && !(!t && !s), u = this.state.isBottomSticky;
					return a.a.createElement(O, {
						className: r,
						innerRef: this.setWrapperRef
					}, a.a.createElement(L, {
						isFakeOverlay: n,
						isSticky: l,
						shouldStickToBottom: u
					}, t, s, c, !i && a.a.createElement(f.a, {
						reredditButtons: d
					})), !c && !this.props.hideBackToTop && a.a.createElement(N, {
						isOverlay: !!(null === (e = null == o ? void 0 : o.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const T = Object(y.u)();
			t.a = T(j)
		},
		"./src/reddit/components/SidebarTrophyCase/index.m.less": function(e, t, n) {
			e.exports = {
				TrophyIcon: "_2QZW3qVaM5fa8vo4uwbT42",
				trophyIcon: "_2QZW3qVaM5fa8vo4uwbT42",
				TrophyContent: "_3xkLQuKJQtF5YjN4IsD-iU",
				trophyContent: "_3xkLQuKJQtF5YjN4IsD-iU",
				TrophyItem: "QY_PhyoOHbRd-_92ivr-m",
				trophyItem: "QY_PhyoOHbRd-_92ivr-m",
				TrophyName: "_3lNmiqeZrNM0E_H2ZCIpN_",
				trophyName: "_3lNmiqeZrNM0E_H2ZCIpN_",
				Description: "_3n5-aYyk15dtyt-boqlDrq",
				description: "_3n5-aYyk15dtyt-boqlDrq"
			}
		},
		"./src/reddit/components/SidebarTrophyCase/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/components/SidebarExpandableList/index.tsx"),
				d = n("./src/reddit/controls/Typography/index.tsx"),
				l = n("./src/reddit/selectors/telemetry.ts");
			var u = n("./src/reddit/hooks/useTracking.ts"),
				m = n("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				p = n("./node_modules/lodash/isEqual.js"),
				b = n.n(p);
			const h = Object(a.b)(a.d, b.a);
			var f = n("./src/reddit/selectors/profile.ts"),
				x = n("./src/reddit/components/SidebarTrophyCase/index.m.less"),
				y = n.n(x),
				k = n("./src/lib/lessComponent.tsx"),
				g = n("./src/lib/opener/index.ts");
			const E = Object(a.c)({
				trophyCase: (e, t) => {
					let {
						profileName: n
					} = t;
					return Object(f.r)(e, Object(f.m)(e, n))
				}
			}, h);
			t.a = Object(o.b)(E)(e => {
				let {
					trophyCase: t
				} = e;
				return 0 === t.length ? null : i.a.createElement(c.a, {
					title: s.fbt._("Trophy Case ({trophyCount})", [s.fbt._param("trophyCount", `${t.length}`)], {
						hk: "mzh3V"
					}),
					items: t,
					renderItem: O
				})
			});
			const _ = k.a.wrapped(m.a, "TrophyItem", y.a),
				v = k.a.div("TrophyIcon", y.a),
				w = k.a.h5("TrophyName", y.a),
				S = k.a.div("TrophyContent", y.a),
				C = k.a.wrapped(d.c, "Description", y.a),
				O = e => {
					let {
						item: t
					} = e;
					const n = Object(u.a)(),
						s = i.a.createElement("img", {
							src: t.icon,
							title: t.name
						});
					return i.a.createElement(_, {
						key: t.id
					}, i.a.createElement(v, null, t.url ? i.a.createElement("a", {
						target: g.d.BLANK,
						rel: g.c,
						href: t.url,
						onClick: () => n((e => t => ({
							source: "trophy",
							action: "click",
							noun: "trophy",
							...l.n(t),
							actionInfo: Object(l.d)(t, {
								paneName: "profile_about"
							}),
							profile: l.Q(t),
							trophy: e
						}))({
							id: t.id,
							name: t.name
						}))
					}, s) : s), i.a.createElement(S, null, i.a.createElement(w, null, t.name), i.a.createElement(C, null, t.description)))
				}
		},
		"./src/reddit/components/SocialLinks/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return i
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "i", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/config.ts");
			const i = 5,
				o = "add_social_link_modal_id",
				a = `${r.a.assetPath}/img/social-links/`,
				c = s.fbt._("@username", null, {
					hk: "3HC3Kd"
				}),
				d = s.fbt._("Display text", null, {
					hk: "1SlS6x"
				}),
				l = s.fbt._("Looks like this isn’t a valid URL. Double-check your spelling.", null, {
					hk: "1vKDvL"
				}),
				u = s.fbt._("This community or user doesn’t exist. Double-check your spelling.", null, {
					hk: "tKrv9"
				}),
				m = s.fbt._("There was a problem updating your account. Please try again.", null, {
					hk: "1i5tn1"
				}),
				p = 5
		},
		"./src/reddit/components/SocialLinks/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/redditGQL/types.ts"),
				r = n("./src/reddit/components/SocialLinks/constants.ts");
			const {
				fbt: i
			} = n("./node_modules/fbt/lib/FbtPublic.js"), o = (e, t) => {
				let n, o = i._("{name of social link type}", [i._param("name of social link type", e)], {
						hk: "2ivfx8"
					}),
					a = r.i;
				switch (t) {
					case s.x.BuyMeACoffee:
						o = i._("Buy Me a Coffee", null, {
							hk: "ZTbP7"
						});
						break;
					case s.x.CashApp:
						o = i._("Cash App", null, {
							hk: "1aorWN"
						});
						break;
					case s.x.Custom:
						o = i._("Custom URL", null, {
							hk: "2gveOb"
						}), a = r.c, n = i._("https://website.com", null, {
							hk: "1Kp5fF"
						});
						break;
					case s.x.Reddit:
						a = i._("r/community, u/user", null, {
							hk: "45oRo"
						});
						break;
					case s.x.Discord:
						a = r.c, n = i._("https://discord.com", null, {
							hk: "6gcLP"
						});
						break;
					case s.x.Facebook:
						a = r.c, n = i._("https://facebook.com", null, {
							hk: "2v99jB"
						});
						break;
					case s.x.Kickstarter:
						a = r.c, n = i._("https://kickstarter.com", null, {
							hk: "132LC7"
						});
						break;
					case s.x.Shopify:
						a = r.c, n = i._("https://shopify.com", null, {
							hk: "2X1G4f"
						});
						break;
					case s.x.Spotify:
						a = r.c, n = i._("https://spotify.com", null, {
							hk: "3dZORp"
						});
						break;
					case s.x.Substack:
						a = r.c, n = i._("https://substack.com", null, {
							hk: "1zQgL1"
						});
						break;
					case s.x.Youtube:
						o = i._("YouTube", null, {
							hk: "12AQG6"
						}), a = r.c, n = i._("https://youtube.com", null, {
							hk: "4FZQ2O"
						});
						break;
					case s.x.Onlyfans:
						o = i._("OnlyFans", null, {
							hk: "1JRN4C"
						});
						break;
					case s.x.Paypal:
						o = i._("PayPal", null, {
							hk: "3n7Il"
						});
						break;
					case s.x.Soundcloud:
						o = i._("SoundCloud", null, {
							hk: "34Xo4u"
						});
						break;
					case s.x.Tiktok:
						o = i._("TikTok", null, {
							hk: "tajib"
						})
				}
				return {
					name: o,
					placeholderDisplayText: a,
					placeholderUrl: n,
					socialLinkType: t
				}
			}, a = () => {
				return Object.keys(s.x).map(e => {
					const t = s.x[e];
					return o(e, t)
				}).filter(e => e.socialLinkType !== s.x.Indiegogo)
			}, c = e => {
				const t = e.toLowerCase();
				return `${r.d}${t}.png`
			}, d = e => {
				for (const t in s.x)
					if (s.x[t] === e) return t;
				return ""
			}, l = e => {
				let t = r.b;
				throw e && e.length > 0 && (t = e[0].message), new Error(t)
			}, u = e => e && e.startsWith("@") ? e.slice(1) : e
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, n) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/SEOTitle/index.tsx"),
				a = n("./src/reddit/components/Widgets/Base/index.m.less"),
				c = n.n(a);
			const d = i.a.div("WidgetBackground", c.a),
				l = i.a.wrapped(e => {
					let {
						children: t,
						...n
					} = e;
					return r.a.createElement("div", n, r.a.createElement(o.b, {
						type: o.a.Widget
					}, t))
				}, "WidgetHeader", c.a);
			t.b = e => r.a.createElement("div", {
				className: e.className
			}, r.a.createElement(d, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return C
			})), n.d(t, "a", (function() {
				return N
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/Flair/index.tsx"),
				u = n("./src/reddit/components/SubscribeButton/index.tsx"),
				m = n("./src/reddit/actions/subscription/index.ts");
			var p = Object(o.b)(null, (e, t) => {
					const n = t.widget.id || void 0;
					return {
						onSubscribe: () => e(m.d([t.identifier], !0, n)),
						onSubscriptionsRequested: () => e(m.f()),
						onUnsubscribe: () => e(m.d([t.identifier], !1, n))
					}
				})(n("./src/reddit/components/SubscribeButton/Base.tsx").a),
				b = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = n("./src/reddit/constants/componentSizes.ts"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				x = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				y = n("./src/reddit/icons/fonts/index.tsx"),
				k = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				g = n("./src/reddit/models/Flair/index.ts"),
				E = n("./src/reddit/selectors/user.ts"),
				_ = n("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				v = n("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				w = n.n(v);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const C = e => i.a.createElement(b.a, {
					className: Object(d.a)(w.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, i.a.createElement("div", {
					className: w.a.container
				}, e.isLoading ? i.a.createElement(x.a, {
					className: w.a.loadingIcon,
					sizePx: 32
				}) : i.a.createElement(i.a.Fragment, null, e.isError ? i.a.createElement("p", {
					className: w.a.errorMsg
				}, e.errorMsg || s.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : i.a.createElement(i.a.Fragment, null, e.communities.map(t => i.a.createElement(N, S({
					key: t.name
				}, t, {
					getSubscribeEventFactory: e.getSubscribeEventFactoryHandler ? e.getSubscribeEventFactoryHandler(t) : void 0,
					widget: e.widget,
					sendEvent: e.sendEvent,
					type: t.type || "subreddit",
					buttonDisabled: e.itemButtonDisabled,
					isLoading: e.loadingItemName && e.loadingItemName.toLowerCase() === t.name.toLowerCase() || !1,
					isNSFW: t.isNSFW,
					onCommunityNameClick: e.getClickEventFactory ? () => e.sendEvent(e.getClickEventFactory(t)) : void 0,
					tertiaryButtonText: e.tertiaryButtonText,
					useTertiaryButton: e.useTertiaryButton,
					showTertiaryButtonOnHover: e.showTertiaryButtonOnHover,
					onTertiaryButtonClick: e.onTertiaryButtonClick
				})))), e.bottomButtonText && e.onBottomButtonClick && i.a.createElement(f.t, {
					className: w.a.bottomButton,
					kind: f.b.Button,
					priority: f.c.Plain,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				O = Object(c.c)({
					hideNSFWPref: E.F,
					nightmode: E.cb
				}),
				N = Object(o.b)(O)(e => i.a.createElement("div", {
					className: Object(d.a)(w.a.communityItemContainer, {
						[w.a.withBottomFlair]: e.isNSFW
					})
				}, i.a.createElement(k.a, {
					className: w.a.communityItemExpandCenter,
					widthRight: h.t
				}, i.a.createElement("div", {
					className: w.a.iconContainer
				}, e.communityIcon || e.iconUrl ? i.a.createElement("img", {
					className: w.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : i.a.createElement(y.a, {
					name: "community",
					isFilled: !e.nightmode,
					className: Object(d.a)(w.a.defaultCommunityIcon, {
						[w.a.mNightmode]: e.nightmode
					})
				})), i.a.createElement("div", {
					className: w.a.communityDescriptionContainer
				}, i.a.createElement(a.a, {
					className: w.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(_.b)(e.name, e.type),
					to: Object(_.a)(e.name, e.type)
				}, Object(_.b)(e.name, e.type)), i.a.createElement("div", {
					className: w.a.communityInfoContainer
				}, !!e.subscribers && i.a.createElement("p", {
					className: w.a.subscriberCount
				}, s.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [s.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && i.a.createElement(l.b, {
					className: w.a.nsfwFlair,
					flair: {
						type: g.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? i.a.createElement(x.a, {
					className: Object(d.a)(w.a.communityCta, w.a.smallLoadingIcon),
					sizePx: 12
				}) : i.a.createElement(f.t, {
					className: w.a.communityCta,
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? i.a.createElement(p, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					sendEvent: e.sendEvent,
					small: !0,
					userIsSubscriber: !!e.isSubscribed,
					widget: e.widget
				}) : i.a.createElement(u.a, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					small: !0
				})), !!e.description && i.a.createElement("p", {
					title: e.description,
					className: w.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/posts.ts"),
				r = n("./src/reddit/helpers/name/index.ts");

			function i(e, t) {
				return (t === s.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function o(e, t) {
				return t === s.a.PROFILE ? Object(r.d)(e) : Object(r.c)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, n) {
			e.exports = {
				communityItemContainer: "_3NFddqqrzfM8noBES52Qcy",
				communityCta: "_1edkK552-3m7bXOdDxtLx_",
				smallLoadingIcon: "_32ZA09sNmrGEXkOPMOCLst",
				communityItemExpandCenter: "oP8RhN61VEXVL8e6SIxK_",
				communityDescriptionContainer: "_3jEbHrUmHtMsZcfN-z_GpD",
				communityDescription: "_2IANzA2n-6eA5T8Tz0TEVE",
				withBottomFlair: "_14n0HZvxiP1OqS51zI7Sy3",
				communityName: "_3BFvyrImF3et_ZF21Xd8SC",
				container: "_3-1jy8hD77zNJUdEMxDrXC",
				isTruncated: "_3idiZ5DFVkbhhKjDBTQeq-",
				nsfwFlair: "_3wQmfxeBovEB3M5pcwt-pv",
				iconContainer: "_19EKcu4yel161081OGs8w9",
				iconStyles: "_9p_iPxnOh7HnkcLhtSCDs",
				planetIcon: "_3GFjQrq7t7DpW__ZFpU7xf",
				secondaryLinkButton: "_1Yi_hbFvk7YS9Op3tGVQq9",
				subredditIcon: "_2BR7Oy0CAj5EiSDYQ--CAE",
				subscriberCount: "e0X82913OdCTkFf2HU-WL",
				textArea: "_3X2QmclgxJpDGOG7vui_8z",
				textButton: "_3k6fSIkIt6-LCDmLz7Didp",
				trashIcon: "_3T0iddL64wHJU4Ri4QU80I",
				loadingIcon: "_1S__kHcDfbOdA2sCV8sn9U",
				errorMsg: "_2AlaL9JsHLdMUnGFOPta5H",
				bottomButton: "_1aWHRawTuRl2HMpanJbrrb",
				leftAligned: "T4XQNeAXcz6U72tv0Z5Z6",
				defaultCommunityIcon: "_1yiD4Wxo0icHUUftoUrBiM",
				mNightmode: "_1yugRWTZEox55lEcLyzzAo"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1zLylbOLqdzG2C4JhdkEVQ",
				twitterLogo: "_1N1dJvzR-m3nNoVl8cxHul",
				link: "JqNsQRTEcAPCq8_G0O5mO",
				linkDescription: "_2Y1Xv08xrWbsDZuEvIuRKo",
				name: "_28fbIV1TS_oSVjfzjWnM0f",
				linkTitle: "elMVR2YfkbHdFTihhlUK4",
				linkIcon: "oi2L0mBSRAULcOPEtjXSh",
				description: "KKNu_jB7N6A-PuBrW0WoR",
				visitButton: "NBL39n3gjYvG4c9qlXJIk"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/index.m.less": function(e, t, n) {
			e.exports = {
				account: "_25M-5tlJjQOChCI8sg84QU"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/components/Widgets/Base/index.tsx"),
				l = n("./src/reddit/constants/posts.ts"),
				u = n("./src/reddit/helpers/trackers/profileSettings.ts"),
				m = n("./src/reddit/models/ExternalAccount/index.ts"),
				p = n("./src/reddit/selectors/externalAccount.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				h = n("./node_modules/fbt/lib/FbtPublic.js"),
				f = n("./src/reddit/controls/OutboundLink/index.tsx"),
				x = n("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				y = n("./src/reddit/icons/svgs/Twitter/index.tsx"),
				k = n("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				g = n("./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less"),
				E = n.n(g);
			var _ = e => {
					const {
						account: t,
						clickEvent: n,
						provider: s
					} = e;
					let i, o = t.username,
						a = "";
					return s !== m.a.Twitter ? null : (i = r.a.createElement(y.a, {
						className: E.a.twitterLogo
					}), a = h.fbt._("View on Twitter", null, {
						hk: "39S5oy"
					}), o = `@${t.username}`, r.a.createElement(k.a, null, r.a.createElement("span", {
						className: E.a.icon
					}, i), r.a.createElement(f.b, {
						className: E.a.link,
						href: t.link,
						onClick: n
					}, r.a.createElement("div", {
						className: E.a.linkTitle
					}, r.a.createElement("span", {
						className: E.a.name
					}, o), r.a.createElement(x.a, {
						className: E.a.linkIcon
					})), r.a.createElement("div", {
						className: E.a.linkDescription
					}, a))))
				},
				v = n("./src/reddit/components/Widgets/ConnectedAccounts/index.m.less"),
				w = n.n(v);
			const {
				fbt: S
			} = n("./node_modules/fbt/lib/FbtPublic.js"), C = Object(o.c)({
				twitterAccount: (e, t) => {
					let {
						subredditOrProfile: n
					} = t;
					return n.type === l.a.PROFILE ? Object(p.c)(e, {
						profileName: n.name
					}) : null
				},
				user: (e, t) => {
					let {
						subredditOrProfile: n
					} = t;
					return n.type === l.a.PROFILE ? Object(b.zb)(e, {
						userName: n.name
					}) : null
				}
			}), O = Object(i.b)(C, e => ({
				trackTwitterAccountClicked: t => e((e, n) => u.m(n(), t))
			}), (e, t, n) => ({
				...n,
				...e,
				...t,
				onTwitterAccountClicked: () => t.trackTwitterAccountClicked(e.user)
			}));
			t.a = Object(c.c)(O(e => {
				const {
					onTwitterAccountClicked: t,
					twitterAccount: n
				} = e;
				return n ? r.a.createElement(a.a, null, r.a.createElement(d.b, null, r.a.createElement(d.a, null, S._("Connected accounts", null, {
					hk: "1ce9Jz"
				})), n && r.a.createElement("div", {
					className: w.a.account
				}, r.a.createElement(_, {
					provider: m.a.Twitter,
					account: n,
					clickEvent: t
				})))) : null
			}))
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, n) {
			e.exports = {
				widgetBackground: "_1G4yU68P50vRZ4USXfaceV",
				clickable: "_2mtWlchu4uQf339v56bSha",
				redditStyle: "_2QeqBqfT5UbHBoViZUt-wX",
				truncatedGradient: "_1lvCNVth3dt5y8lu3vT95L",
				widgetHeader: "_ZhON3a3vplThB8NFwuJn",
				widgetTitle: "_2sggAEfRQLyoAl4J__5twU",
				widgetContent: "TmgZY6tDcdErbE5d7E0HJ",
				widgetContentOnly: "_3RPJ8hHnfFohktLZca18J6",
				truncated: "r5dzQq7dgZyAmve8abbbt",
				seeMore: "_3dbp6Cm9uKkkIBr9EsU-qS"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/reddit/components/SEOTitle/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/trackers/widgets.ts"),
				b = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				h = n("./src/reddit/selectors/experiments/topPosts.ts"),
				f = n("./src/reddit/selectors/structuredStyles.ts"),
				x = n("./src/reddit/selectors/user.ts"),
				y = n("./src/reddit/models/Theme/index.ts"),
				k = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const g = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(k.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				E = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(k.a)(e).widgetColors.sidebarWidgetHeaderColor,
				_ = e => {
					const t = g(e);
					return Object(y.f)(t)
				},
				v = e => {
					const t = E(e);
					return Object(y.f)(t)
				};
			var w = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				S = n.n(w);
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js"), O = Object(u.u)(), N = Object(i.b)(() => Object(o.c)({
				forceRedditStyle: (e, t) => {
					const n = Object(u.n)(e, t) || void 0,
						s = t.redditStyle || Object(f.l)(e, {
							subredditId: n
						}),
						r = Object(x.cb)(e);
					return s || r
				},
				nigtmode: x.cb,
				subredditId: u.n,
				topPostVariant: h.d
			}));
			class L extends r.a.Component {
				constructor() {
					super(...arguments), this.contentRef = r.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(Object(p.b)(e, t)), this.setState({
							isTruncated: !1
						})
					}
				}
				componentDidMount() {
					const e = this.contentRef.current,
						t = e && e.offsetHeight;
					this.props.truncateThreshold && t && t > this.props.truncateThreshold && this.setState({
						isTruncated: !0
					})
				}
				getWidgetBackgroundStyles() {
					const e = {};
					return e.backgroundColor = g(this.props), e.borderColor = Object(b.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = _(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = E(this.props), e.color = e.fill = v(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: n,
						forceRedditStyle: s,
						headerButton: i,
						id: o,
						onClick: c,
						onHeaderClick: l,
						title: u,
						titleClassName: p,
						truncateThreshold: b
					} = this.props, h = n ? S.a.widgetContentOnly : S.a.widgetContent, f = !s && this.props.styles, x = f ? this.getWidgetBackgroundStyles() : {}, y = f ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(a.a)(t, S.a.widgetBackground, {
							[S.a.redditStyle]: s,
							[S.a.clickable]: !!c,
							[S.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": s,
						onClick: c,
						style: x
					}, u && r.a.createElement("div", {
						className: Object(a.a)(S.a.widgetHeader, {
							[S.a.clickable]: !!l
						}),
						id: o,
						style: y,
						onClick: l
					}, r.a.createElement("div", {
						className: Object(a.a)(S.a.widgetTitle, p)
					}, r.a.createElement(d.b, {
						type: d.a.Widget
					}, u)), i), r.a.createElement("div", {
						className: Object(a.a)(h, {
							[S.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? b : "none"
						}
					}, e), this.state.isTruncated && r.a.createElement(m.r, {
						className: S.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, C._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = O(N(Object(c.a)(Object(l.c)(L))))
		},
		"./src/reddit/helpers/structuredStyles/validators.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return r
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "e", (function() {
				return l
			}));
			var s = n("./src/lib/linkMatchers/index.ts");
			var r;
			! function(e) {
				e[e.Valid = 0] = "Valid", e[e.NoUrl = 1] = "NoUrl", e[e.TooShort = 2] = "TooShort", e[e.Invalid = 3] = "Invalid"
			}(r || (r = {}));
			const i = e => {
					if (!e) return r.NoUrl;
					if (e.length < 4) return r.TooShort;
					const t = Object(s.h)(s.f, e);
					return t ? "ftp:" === t.schema ? r.Invalid : "mailto:" === t.schema ? r.Invalid : r.Valid : r.Invalid
				},
				o = 20;
			var a;
			! function(e) {
				e[e.Valid = 0] = "Valid", e[e.TooShort = 1] = "TooShort", e[e.TooLong = 2] = "TooLong"
			}(a || (a = {}));
			const c = e => e ? e.length > o ? a.TooLong : a.Valid : a.TooShort;
			var d;
			! function(e) {
				e[e.Valid = 0] = "Valid", e[e.TooShort = 1] = "TooShort"
			}(d || (d = {}));
			const l = e => e.length ? d.Valid : d.TooShort
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			}));
			var s, r, i = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(s || (s = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(r || (r = {}));
			const a = (e, t) => n => ({
					source: r.COMMUNITY_WIDGETS,
					action: i.c.CLICK,
					noun: s.SEE_MORE,
					widget: Object(o.ub)(n, {
						subredditId: e,
						widgetKind: t
					}),
					...o.n
				}),
				c = (e, t) => n => ({
					source: r.POST,
					action: i.c.CLICK,
					noun: s.REREDDIT_PROMO,
					post: o.H(n, e),
					subreddit: o.gb(n),
					...t && {
						banner: {
							buttonText: t,
							id: s.REREDDIT_PROMO
						}
					},
					...o.n(n)
				}),
				d = () => e => ({
					source: r.SIDEBAR,
					action: i.c.VIEW,
					noun: s.TOPICS_WIDGET,
					...o.n(e)
				}),
				l = e => t => ({
					source: r.TOPICS_WIDGET,
					action: i.c.CLICK,
					noun: s.TOPIC,
					...o.n(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/icons/svgs/Twitter/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function i(e) {
				return r.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 400 400",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					fill: "inherit",
					d: "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"
				}))
			}
		},
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, n) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/layout/row/RightAlign/index.m.less"),
				i = n.n(r);
			t.a = s.a.div("rightAligned", i.a)
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, n) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				c = n.n(a);
			t.a = Object(i.a)(e => r.a.createElement("div", {
				className: Object(o.a)(c.a.expandedCenterContainer, e.className)
			}, r.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), r.a.createElement("div", {
				className: c.a.center
			}, Array.isArray(e.children) && e.children[1]), r.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/experiments/index.ts"),
				o = n("./src/reddit/selectors/experiments/utils.ts"),
				a = n("./src/reddit/selectors/meta.ts"),
				c = n("./node_modules/reselect/es/index.js");
			const d = Object(c.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => Object(a.g)(e) && Object(i.f)(e),
					experimentName: s.cc
				}), o.a),
				l = Object(c.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => !Object(a.g)(e) && Object(i.f)(e),
					experimentName: s.bc
				}), o.a),
				u = Object(c.a)(d, l, (e, t) => e || t),
				m = Object(c.a)(d, l, (e, t) => !(!e && !t))
		},
		"./src/redditGQL/operations/DeleteSocialLinks.json": function(e) {
			e.exports = JSON.parse('{"id":"7eb2600cd927"}')
		},
		"./src/redditGQL/operations/SetSocialLinks.json": function(e) {
			e.exports = JSON.parse('{"id":"5064afb1fbe2"}')
		},
		"./src/redditGQL/operations/SocialLinks.json": function(e) {
			e.exports = JSON.parse('{"id":"11a239b07f86"}')
		},
		"./src/redditGQL/operations/UpdateSocialLinks.json": function(e) {
			e.exports = JSON.parse('{"id":"c558e604581f"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileComments~ProfileOverview~ProfilePosts~ProfilePrivate~ProfileSnoobuilder.2f51daca223bc170a463.js.map