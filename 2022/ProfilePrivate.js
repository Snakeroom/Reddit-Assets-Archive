// https://www.redditstatic.com/desktop2x/ProfilePrivate.2665ea2323178884bead.js
// Retrieved at 7/18/2022, 3:20:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfilePrivate"], {
		"./node_modules/lodash/take.js": function(e, t, i) {
			var s = i("./node_modules/lodash/_baseSlice.js"),
				n = i("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, i) {
				return e && e.length ? (t = i || void 0 === t ? 1 : n(t), s(e, 0, t < 0 ? 0 : t)) : []
			}
		},
		"./src/reddit/actions/pages/profilePrivate/index.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "privateListingPending", (function() {
				return T
			})), i.d(t, "privateMixedListingLoaded", (function() {
				return A
			})), i.d(t, "privatePostListingLoaded", (function() {
				return F
			})), i.d(t, "privateListingFailed", (function() {
				return B
			})), i.d(t, "profilePrivateRequested", (function() {
				return R
			})), i.d(t, "morePending", (function() {
				return M
			})), i.d(t, "moreMixedLoaded", (function() {
				return G
			})), i.d(t, "morePostLoaded", (function() {
				return U
			})), i.d(t, "moreFailed", (function() {
				return W
			})), i.d(t, "moreProfilePrivateRequested", (function() {
				return D
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = i("./src/lib/makeActionCreator/index.ts"),
				n = i("./src/reddit/actions/externalAccount.ts"),
				r = i("./src/reddit/actions/pages/profileShared.ts"),
				o = i("./src/reddit/actions/profile/index.ts"),
				d = i("./src/lib/makeGqlRequest/index.ts"),
				a = i("./src/redditGQL/operations/ProfileDownvoted.json"),
				l = i("./src/redditGQL/operations/ProfileGivenGildings.json"),
				c = i("./src/redditGQL/operations/ProfileHidden.json"),
				m = i("./src/redditGQL/operations/ProfileReceivedGildings.json"),
				u = i("./src/redditGQL/operations/ProfileSaved.json"),
				p = i("./src/redditGQL/operations/ProfileUpvoted.json");
			var b = i("./src/reddit/models/Comment/index.ts"),
				f = i("./src/reddit/models/Post/index.ts"),
				h = i("./src/reddit/models/Profile/index.ts"),
				g = i("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				v = i("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				y = i("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				x = i("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				_ = i("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				C = i("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				w = i("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				N = i("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts");
			var E = e => {
					const {
						listingType: t,
						rawData: i,
						includeIdentity: s,
						includeModerated: n
					} = e, {
						identity: r
					} = i, o = (e => {
						const t = {
							account: null,
							authorFlair: {},
							moderatedPageInfo: void 0,
							moderatedSubredditIds: void 0,
							postFlair: {},
							posts: {},
							preferences: void 0,
							profiles: {},
							pageInfo: void 0,
							subreddits: {},
							itemIds: []
						};
						return e !== h.b.Saved && e !== h.b.ReceivedGildings && e !== h.b.GivenGildings || (t.comments = {}), t
					})(t);
					if (!r) return o;
					if (s && (o.account = Object(N.a)(r) || null, o.preferences = Object(_.a)(r.preferences, r.interactions) || null, r.redditor.profile && (o.profiles[r.redditor.profile.id] = Object(C.a)(r.redditor.profile))), n && r.redditor && r.redditor.moderatedSubreddits) {
						const {
							moderatedSubredditIds: e,
							pageInfo: t,
							subreddits: i
						} = Object(C.b)(r.redditor.moderatedSubreddits);
						o.moderatedPageInfo = t, o.moderatedSubredditIds = e, o.subreddits = i
					}
					const d = ((e, t) => {
						switch (t) {
							case h.b.Downvoted:
								return e.identity.downvotedPosts;
							case h.b.Hidden:
								return e.identity.hiddenPosts;
							case h.b.Saved:
								return e.identity.saved;
							case h.b.Upvoted:
								return e.identity.upvotedPosts;
							case h.b.ReceivedGildings:
								return e.identity.receivedGildings;
							case h.b.GivenGildings:
								return e.identity.givenGildings
						}
					})(i, t);
					if (!d) return o;
					o.pageInfo = d.pageInfo;
					for (const {
							node: a
						} of d.edges) {
						let e;
						if (a.__typename === b.d.Comment) {
							const t = Object(g.a)(a);
							if (o.comments || (o.comments = {}), o.comments[t.id] = t, o.itemIds || (o.itemIds = []), o.itemIds.push(t.id), a.authorFlair && (o.authorFlair[t.subredditId] || (o.authorFlair[t.subredditId] = {}), o.authorFlair[t.subredditId][t.author] = Object(v.a)(a.authorFlair)[0]), e = a.postInfo, a.postInfo) {
								const {
									post: e,
									crosspost: t
								} = Object(x.a)(a.postInfo);
								o.posts[e.id] = e, t && (o.posts[t.id] = t)
							}
						} else e = a, o.itemIds || (o.itemIds = []), o.itemIds.push(e.id);
						if (!e) continue;
						const {
							post: t,
							crosspost: i
						} = e && Object(x.a)(e);
						o.posts[t.id] = t, i && (o.posts[i.id] = i), Object(f.i)(e) || Object(f.j)(e) || (e.authorFlair && (o.authorFlair[t.belongsTo.id] || (o.authorFlair[t.belongsTo.id] = {}), o.authorFlair[t.belongsTo.id][t.author] = Object(v.a)(e.authorFlair)[0]), Object(f.l)(e) ? o.profiles[e.profile.id] || (o.profiles[e.profile.id] = Object(C.a)(e.profile)) : Object(f.n)(e) && (o.subreddits[e.subreddit.id] || (o.subreddits[e.subreddit.id] = Object(w.a)(e.subreddit)), o.postFlair[e.subreddit.id] || (o.postFlair[e.subreddit.id] = Object(y.a)(e.subreddit))))
					}
					return o
				},
				j = i("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				O = i("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				P = i("./src/lib/initializeClient/installReducer.ts"),
				I = i("./src/reddit/reducers/features/comments/index.ts");
			Object(P.a)({
				features: {
					comments: I.a
				}
			});
			const k = {
					[h.b.Downvoted]: (e, t) => Object(d.a)(e, {
						...a,
						variables: t
					}),
					[h.b.Hidden]: (e, t) => Object(d.a)(e, {
						...c,
						variables: t
					}),
					[h.b.Saved]: (e, t) => Object(d.a)(e, {
						...u,
						variables: t
					}),
					[h.b.Upvoted]: (e, t) => Object(d.a)(e, {
						...p,
						variables: t
					}),
					[h.b.ReceivedGildings]: (e, t) => Object(d.a)(e, {
						...m,
						variables: t
					}),
					[h.b.GivenGildings]: (e, t) => Object(d.a)(e, {
						...l,
						variables: t
					})
				},
				S = (e, t) => {
					switch (e) {
						case h.b.Downvoted:
						case h.b.Hidden:
						case h.b.Saved:
						case h.b.Upvoted:
						case h.b.ReceivedGildings:
						case h.b.GivenGildings:
							return t.body.data
					}
				},
				L = e => {
					switch (e.listingType) {
						case h.b.Downvoted:
						case h.b.Hidden:
						case h.b.Saved:
						case h.b.Upvoted:
						case h.b.ReceivedGildings:
						case h.b.GivenGildings:
							return E(e)
					}
				},
				T = Object(s.a)(O.b),
				A = Object(s.a)(O.c),
				F = Object(s.a)(O.i),
				B = Object(s.a)(O.a),
				R = e => async (t, i, s) => {
					const {
						profileName: d,
						listingType: a
					} = e.params, l = i(), c = Object(j.c)(d.toLowerCase(), a), m = l.profilePrivatePage.ids[c] && l.profilePrivatePage.ids[c].length > 0, u = !!l.profilePrivatePage.api.error[c];
					if (l.profilePrivatePage.api.pending[c] || m && !u) return;
					const {
						account: p
					} = l.user, b = !p, f = !(p && p.displayText && l.profiles.moderated.models[p.displayText.toLowerCase()] && l.profiles.moderated.models[p.displayText.toLowerCase()].length);
					t(T({
						listingKey: c
					}));
					const g = {
							includeIdentity: b,
							includeModerated: f,
							first: O.h,
							after: null
						},
						v = await k[a](s.gqlContext(), g);
					if (v.ok && v.body) {
						const e = L({
							rawData: S(a, v),
							listingType: a,
							includeIdentity: b,
							includeModerated: f
						});
						a === h.b.Saved || a === h.b.ReceivedGildings || a === h.b.GivenGildings ? await t(A({
							listingKey: c,
							profileName: d,
							...e
						})) : await t(F({
							listingKey: c,
							profileName: d,
							...e
						})), await Promise.all([t(Object(r.d)(d)), t(Object(n.o)(d)), t(Object(o.d)(d))])
					} else t(B({
						listingKey: c,
						error: v.error
					}))
				}, M = Object(s.a)(O.f), G = Object(s.a)(O.e), U = Object(s.a)(O.g), W = Object(s.a)(O.d), D = e => async (t, i, s) => {
					const n = i(),
						r = n.user.account && n.user.account.displayText && n.user.account.displayText.toLowerCase();
					if (!r) return;
					const o = Object(j.c)(r, e);
					if (!n.profilePrivatePage.ids[o] || !n.profilePrivatePage.ids[o].length || !n.profilePrivatePage.pageInfo || !n.profilePrivatePage.pageInfo[o].hasNextPage || n.profilePrivatePage.api.error[o] || n.profilePrivatePage.api.pending[o]) return;
					const d = {
						includeIdentity: !1,
						includeModerated: !1,
						after: n.profilePrivatePage.pageInfo[o].endCursor,
						first: O.h
					};
					t(M({
						listingKey: o
					}));
					const a = await k[e](s.gqlContext(), d);
					if (a.ok && a.body) {
						const i = L({
							includeIdentity: !1,
							includeModerated: !1,
							listingType: e,
							rawData: a.body.data
						});
						e === h.b.Saved || e === h.b.ReceivedGildings || e === h.b.GivenGildings ? await t(G({
							listingKey: o,
							profileName: r,
							...i
						})) : await t(U({
							listingKey: o,
							profileName: r,
							...i
						}))
					} else t(W({
						listingKey: o,
						error: a.error
					}))
				}
		},
		"./src/reddit/components/EmptyProfile/EmptyListing.m.less": function(e, t, i) {
			e.exports = {
				PrimaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				primaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				BackgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				backgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				Wrapper: "_1aYPXfy_h5ZUIu0k_69eX1",
				wrapper: "_1aYPXfy_h5ZUIu0k_69eX1"
			}
		},
		"./src/reddit/components/EmptyProfile/forbidden.m.less": function(e, t, i) {
			e.exports = {
				container: "_1RecBWgyCRDIwbumVv_1eu",
				hideIcon: "_2ahl77ziD4jsIXBLc18_Hc",
				title: "_1MRoVpNql4popp175MVxl6",
				subtitle: "_3HccUrmIe42WfjCGgNekWK",
				buttons: "_1BrhZvjQw9AWs6w5xlkj2F"
			}
		},
		"./src/reddit/components/EmptyProfile/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return p
			})), i.d(t, "c", (function() {
				return b
			})), i.d(t, "d", (function() {
				return f
			})), i.d(t, "a", (function() {
				return x
			}));
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./node_modules/react/index.js"),
				r = i.n(n),
				o = i("./src/lib/constants/index.ts"),
				d = i("./src/lib/classNames/index.ts"),
				a = i("./src/reddit/components/PostList/Placeholder.tsx"),
				l = i("./src/reddit/constants/postLayout.ts"),
				c = i("./src/reddit/components/EmptyProfile/EmptyListing.m.less"),
				m = i.n(c);
			var u = e => {
				let {
					children: t,
					className: i
				} = e;
				return r.a.createElement("div", {
					className: Object(d.a)(m.a.Wrapper, i)
				}, r.a.createElement(a.a, {
					className: m.a.BackgroundPlaceholder,
					isLoading: !1,
					layout: l.g.Classic
				}), r.a.createElement("div", {
					className: m.a.PrimaryText
				}, t))
			};
			var p = e => {
				let {
					className: t,
					profileName: i,
					timeSort: n = o.ic.ALL
				} = e;
				return r.a.createElement(u, {
					className: t
				}, n === o.ic.ALL ? s.fbt._("hmm... {profileName} hasn't commented on anything", [s.fbt._param("profileName", `u/${i}`)], {
					hk: "1MHn3t"
				}) : s.fbt._("hmm... {profileName} hasn't commented recently", [s.fbt._param("profileName", `u/${i}`)], {
					hk: "qN3uL"
				}))
			};
			var b = e => {
				let {
					className: t,
					profileName: i,
					timeSort: n = o.ic.ALL
				} = e;
				return r.a.createElement(u, {
					className: t
				}, n === o.ic.ALL ? s.fbt._("hmm... {profileName} hasn't posted anything", [s.fbt._param("profileName", `u/${i}`)], {
					hk: "28vBEd"
				}) : s.fbt._("hmm... {profileName} hasn't posted recently", [s.fbt._param("profileName", `u/${i}`)], {
					hk: "38GhqN"
				}))
			};
			var f = e => {
					let {
						className: t,
						text: i
					} = e;
					return r.a.createElement(u, {
						className: t
					}, i)
				},
				h = i("./src/reddit/icons/svgs/Hide/index.tsx"),
				g = i("./src/reddit/components/EmptyProfile/forbidden.m.less"),
				v = i.n(g);
			const {
				fbt: y
			} = i("./node_modules/fbt/lib/FbtPublic.js");
			var x = () => r.a.createElement("div", {
				className: v.a.container
			}, r.a.createElement(h.a, {
				className: v.a.hideIcon
			}), r.a.createElement("h3", {
				className: v.a.title
			}, y._("You do not have permission to access this resource", null, {
				hk: "10cPyp"
			})), r.a.createElement("p", {
				className: v.a.subtitle
			}, y._("You can only look at your own saved posts and comments", null, {
				hk: "3pWGtF"
			})))
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less": function(e, t, i) {
			e.exports = {
				Container: "_2cB6ysPhgaYtknebHcCXGH",
				container: "_2cB6ysPhgaYtknebHcCXGH",
				Component: "qQD1kUtHq2K4gyBqJrEnF",
				component: "qQD1kUtHq2K4gyBqJrEnF",
				"m-consider-sidebar": "gd0BrpRBoY73xB5YwvDWU",
				mConsiderSidebar: "gd0BrpRBoY73xB5YwvDWU"
			}
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				n = i.n(s),
				r = i("./node_modules/react-redux/es/index.js"),
				o = i("./node_modules/reselect/es/index.js"),
				d = i("./src/lib/classNames/index.ts"),
				a = i("./src/reddit/constants/componentSizes.ts"),
				l = i("./src/reddit/constants/postLayout.ts"),
				c = i("./src/reddit/constants/screenWidths.ts"),
				m = i("./src/reddit/contexts/PageLayer/index.tsx"),
				u = i("./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less"),
				p = i.n(u),
				b = i("./src/lib/lessComponent.tsx");
			const f = Object(m.u)(),
				h = Object(o.c)({
					layout: m.S
				}),
				g = Object(r.b)(h);
			class v extends n.a.Component {
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
					return n.a.createElement(n.a.Fragment, null, n.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n          .${p.a.Component} {\n            --layoutNavigation-considerateNav-offsetLeft: ${this.props.offsetLeft}px;\n          }\n        `
						}
					}), this.getLargeLayoutStyle())
				}
				getLargeLayoutStyle() {
					const e = this.props.offsetLeft + 2 * a.l + a.p + a.q,
						t = c.a - e,
						i = a.g - t,
						s = c.a + i + (this.props.bladeOpen ? a.a : 0);
					return this.props.layout !== l.g.Large ? null : n.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n            @media (min-width: ${s}px) {\n              .${p.a.Component} {\n                left: calc((100% + var(--layoutNavigation-considerateNav-offsetLeft) - ${a.g+a.p+a.q}px) / 2);\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ${a.q}px) / 2);\n              }\n\n              .${p.a.Component}.${p.a["m-consider-sidebar"]} {\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ${a.g+a.p+a.q}px) / 2);\n              }\n            }\n          `
						}
					})
				}
				render() {
					const e = Object(d.a)(this.props.className, p.a.Component, {
						[p.a["m-consider-sidebar"]]: this.props.considerSidebar
					});
					return n.a.createElement("div", {
						className: p.a.Container
					}, n.a.createElement("div", {
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
			t.a = f(g(b.a.wrapped(v, "Component", p.a)))
		},
		"./src/reddit/components/ProfileNavMenu/index.m.less": function(e, t, i) {
			e.exports = {
				container: "_2vH__bwuub4wzWRqcvhh3m",
				menuContainer: "LSvZ4rzt8zI_VpizIGPDF",
				dropdown: "_3ulncTe6l8jRF_TM6HZZFk",
				mainLink: "_1JNzvBgvzSnX27gUBKqqmJ",
				isActive: "Zvl1svdkcyUlRhf5RHGKc",
				dropdownLink: "_3FXf9zUWKXtpapv4rBHh1L"
			}
		},
		"./src/reddit/components/ProfileNavMenu/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./src/lib/fastdom/index.ts"),
				r = i("./node_modules/lodash/isEqual.js"),
				o = i.n(r),
				d = i("./node_modules/lodash/throttle.js"),
				a = i.n(d),
				l = i("./node_modules/react/index.js"),
				c = i.n(l),
				m = i("./node_modules/react-redux/es/index.js"),
				u = i("./node_modules/react-router-dom/esm/react-router-dom.js"),
				p = i("./node_modules/reselect/es/index.js"),
				b = i("./src/config.ts"),
				f = i("./src/higherOrderComponents/asTooltip.tsx"),
				h = i("./src/lib/classNames/index.ts"),
				g = i("./src/lib/constants/index.ts"),
				v = i("./src/reddit/actions/tooltip.ts"),
				y = i("./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx"),
				x = i("./src/reddit/constants/componentSizes.ts"),
				_ = i("./src/reddit/contexts/PageLayer/index.tsx"),
				C = i("./src/reddit/controls/Dropdown/index.tsx"),
				w = i("./src/reddit/controls/InternalLink/index.tsx"),
				N = i("./src/reddit/icons/fonts/index.tsx"),
				E = i("./src/reddit/models/Profile/index.ts"),
				j = i("./src/reddit/featureFlags/index.ts"),
				O = i("./src/reddit/selectors/tooltip.ts"),
				P = i("./src/reddit/selectors/user.ts"),
				I = i("./src/reddit/selectors/userPrefs.ts"),
				k = i("./src/server/helpers/profileRedirect.ts"),
				S = i("./src/reddit/components/ProfileNavMenu/index.m.less"),
				L = i.n(S);

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			const A = Object(_.u)({
					routeName: _.Z,
					privateListingType: _.j
				}),
				F = Object(p.c)({
					isDropdownMenuOpen: e => Object(O.a)(e) === R,
					isOwnProfile: (e, t) => Object(P.W)(e, t.profileName),
					isSnoovatar30Enabled: j.d.snoovatar30,
					isSubscriptionsPinned: I.b
				}),
				B = Object(f.a)(C.a),
				R = "profile-nav-menu-tooltip",
				M = x.g + x.q + x.p;
			var G;
			t.a = A(Object(m.b)(F, e => ({
					toggleTooltip: t => e(Object(v.h)({
						tooltipId: t
					}))
				}))(e => {
					let {
						isDropdownMenuOpen: t,
						isOwnProfile: i,
						privateListingType: s,
						profileName: r,
						routeName: d,
						toggleTooltip: m,
						isSnoovatar30Enabled: u,
						isSubscriptionsPinned: p,
						viewBlockedConsent: b
					} = e;
					const [f, g] = Object(l.useState)(!1), v = Object(l.useRef)(null), [_, C] = Object(l.useState)([]), [w, E] = Object(l.useState)([]);
					return Object(l.useEffect)(() => {
						const e = D({
							profileName: r,
							isOwnProfile: i,
							routeName: d,
							privateListingType: s,
							isSnoovatar30Enabled: u,
							viewBlockedConsent: b
						});
						C(e.filter(e => e.position === G.MENU));
						const t = [],
							l = a()(() => {
								const i = document.documentElement.clientWidth - 2 * x.p,
									s = i > M ? M : i;
								let n = 42;
								t.forEach(t => {
									n += t.offsetWidth;
									const i = e.find(e => e.text.toString().toLowerCase() === t.text);
									i.position = n > s ? G.DROPDOWN : G.MENU
								});
								const r = e.filter(e => e.position === G.MENU);
								C(e => o()(r, e) ? e : r);
								const d = e.filter(e => e.position === G.DROPDOWN);
								E(e => o()(d, e) ? e : d), g(d.length > 0)
							}, 50);
						return n.a.read(() => {
							const e = v.current;
							e && (e.childNodes.forEach((e, i) => {
								t.push({
									text: e.textContent.toLowerCase(),
									offsetWidth: e.offsetWidth
								})
							}), l())
						}), window.addEventListener("resize", l), () => {
							window.removeEventListener("resize", l)
						}
					}, [r, i, d, s, u, b]), c.a.createElement("div", {
						className: L.a.container
					}, c.a.createElement(y.a, {
						bladeOpen: !1,
						offsetLeft: p ? x.t : 0,
						render: () => c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
							className: L.a.menuContainer,
							ref: v
						}, _.map(e => c.a.createElement(U, T({}, e, {
							key: e.key
						})))), f && c.a.createElement("button", {
							className: Object(h.a)(L.a.mainLink),
							id: R,
							onClick: () => m(R)
						}, c.a.createElement(N.a, {
							name: "overflow_horizontal"
						})), f && c.a.createElement(B, {
							className: L.a.dropdown,
							isOpen: t,
							tooltipId: R
						}, w.map(e => c.a.createElement(W, T({}, e, {
							key: e.key
						})))))
					}))
				})),
				function(e) {
					e.MENU = "menu", e.DROPDOWN = "dropdown"
				}(G || (G = {}));
			const U = e => {
					let {
						isActive: t,
						text: i,
						url: s,
						internal: n
					} = e;
					return n ? c.a.createElement(w.default, {
						className: Object(h.a)(L.a.mainLink, {
							[L.a.isActive]: t
						}),
						to: s
					}, i) : c.a.createElement("a", {
						className: Object(h.a)(L.a.mainLink, {
							[L.a.isActive]: t
						}),
						href: s
					}, i)
				},
				W = e => {
					let {
						isActive: t,
						internal: i,
						url: s,
						text: n
					} = e;
					return i ? c.a.createElement(u.a, {
						className: Object(h.a)(L.a.dropdownLink, {
							[L.a.isActive]: t
						}),
						to: s,
						rel: "nofollow noopener noreferrer",
						role: "listitem"
					}, n) : c.a.createElement("a", {
						className: Object(h.a)(L.a.dropdownLink),
						href: s,
						rel: "nofollow noopener noreferrer",
						role: "listitem",
						target: "_blank"
					}, n)
				},
				D = e => {
					let {
						profileName: t,
						isOwnProfile: i,
						routeName: n,
						privateListingType: r,
						isSnoovatar30Enabled: o,
						viewBlockedConsent: d
					} = e;
					const a = i ? [{
						internal: !0,
						isActive: n === g.Nb.PROFILE_PRIVATE && r === E.b.Saved,
						key: "profile.mainmenu.saved",
						text: s.fbt._("Saved", null, {
							hk: "2w1YRh"
						}),
						url: `/user/${t}/saved/`,
						position: G.MENU
					}, {
						internal: !0,
						isActive: n === g.Nb.PROFILE_PRIVATE && r === E.b.Hidden,
						key: "profile.mainmenu.hidden",
						text: s.fbt._("Hidden", null, {
							hk: "225tka"
						}),
						url: `/user/${t}/hidden/`,
						position: G.MENU
					}, {
						internal: !0,
						isActive: n === g.Nb.PROFILE_PRIVATE && r === E.b.Upvoted,
						key: "profile.mainmenu.upvoted",
						text: s.fbt._("Upvoted", null, {
							hk: "RKwFZ"
						}),
						url: `/user/${t}/upvoted/`,
						position: G.MENU
					}, {
						internal: !0,
						isActive: n === g.Nb.PROFILE_PRIVATE && r === E.b.Downvoted,
						key: "profile.mainmenu.downvoted",
						text: s.fbt._("Downvoted", null, {
							hk: "2F9IL4"
						}),
						url: `/user/${t}/downvoted/`,
						position: G.MENU
					}] : [];
					i ? (a.push({
						internal: !0,
						isActive: n === g.Nb.PROFILE_PRIVATE && r === E.b.ReceivedGildings,
						key: "profile.mainmenu.receiverGildings",
						text: s.fbt._("Awards received", null, {
							hk: "iwLBV"
						}),
						url: `/user/${t}/gilded/`,
						position: G.MENU
					}), a.push({
						internal: !0,
						isActive: n === g.Nb.PROFILE_PRIVATE && r === E.b.GivenGildings,
						key: "profile.mainmenu.givenGildings",
						text: s.fbt._("Awards given", null, {
							hk: "2UPYZc"
						}),
						url: `/user/${t}/gilded/given/`,
						position: G.MENU
					})) : a.push({
						internal: !1,
						isActive: !1,
						key: "profile.mainmenu.gildedLegacy",
						text: s.fbt._("Awards received (legacy)", null, {
							hk: "1YgfYU"
						}),
						url: `${b.a.oldRedditUrl}/user/${t}/gilded/`,
						position: G.MENU
					});
					const l = o ? [{
							internal: !0,
							isActive: n === g.Nb.PROFILE_SNOOBUILDER,
							key: "profile.mainmenu.snoobuilder",
							text: s.fbt._("Snoobuilder", null, {
								hk: "3SSKff"
							}),
							url: `/user/${t}/snoo/`,
							position: G.MENU
						}] : [],
						c = d ? "?consent=true" : "";
					return [{
						internal: !0,
						isActive: n === g.Nb.PROFILE_OVERVIEW,
						key: "profile.mainmenu.overview",
						text: s.fbt._("Overview", null, {
							hk: "2IBbqy"
						}),
						url: `/user/${t}/${c}`,
						position: G.MENU
					}, {
						internal: !0,
						isActive: n === g.Nb.PROFILE_POSTS,
						key: "profile.mainmenu.posts",
						text: s.fbt._("Posts", null, {
							hk: "a1BoF"
						}),
						url: `${Object(k.a)(t)}/${c}`,
						position: G.MENU
					}, {
						internal: !0,
						isActive: n === g.Nb.PROFILE_COMMENTS,
						key: "profile.mainmenu.comments",
						text: s.fbt._("Comments", null, {
							hk: "2VwjOc"
						}),
						url: `/user/${t}/comments/${c}`,
						position: G.MENU
					}, ...l, ...a]
				}
		},
		"./src/reddit/components/ProfileSidebar/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = i("./node_modules/react/index.js"),
				r = i.n(n),
				o = i("./node_modules/react-redux/es/index.js"),
				d = i("./src/reddit/components/SidebarContainer/index.tsx"),
				a = i("./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx"),
				l = i("./src/reddit/components/SidebarProfileMultireddits/index.tsx"),
				c = i("./src/reddit/components/SidebarProfilePowerupContributions/index.tsx"),
				m = i("./src/reddit/components/SidebarSpacer/index.tsx"),
				u = i("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				p = i("./src/reddit/components/SidebarTrophyCase/index.tsx"),
				b = i("./src/reddit/components/Widgets/ConnectedAccounts/index.tsx"),
				f = i("./src/reddit/constants/posts.ts"),
				h = i("./src/reddit/selectors/experiments/econ/index.ts");
			const g = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-ProfileIdCard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!i.m[t]
					},
					importAsync: () => i.e("reddit-components-ProfileIdCard").then(i.bind(null, "./src/reddit/components/ProfileIdCard/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return i(t)
					},
					resolve() {
						return "./src/reddit/components/ProfileIdCard/index.tsx"
					}
				}),
				v = e => {
					const t = Object(o.e)(e => Object(h.h)(e));
					return r.a.createElement(d.a, {
						className: e.className
					}, r.a.createElement(g, {
						profileName: e.profileName,
						isOverlay: e.isOverlay
					}), r.a.createElement(b.a, {
						subredditOrProfile: {
							name: e.profileName,
							type: f.a.PROFILE
						}
					}), r.a.createElement(a.a, {
						profileName: e.profileName
					}), r.a.createElement(l.a, {
						profileName: e.profileName
					}), !t && r.a.createElement(m.a, null, r.a.createElement(c.a, {
						profileName: e.profileName
					})), r.a.createElement(m.a, null, r.a.createElement(p.a, {
						profileName: e.profileName
					})), r.a.createElement(u.a, {
						hideBackToTop: e.hideBackToTop
					}))
				};
			v.defaultProps = {
				isOverlay: !1
			}, t.a = v
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, i) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./src/lib/lessComponent.tsx"),
				n = i("./src/reddit/components/SidebarContainer/index.m.less"),
				r = i.n(n);
			t.a = s.a.div("container", r.a)
		},
		"./src/reddit/components/SidebarExpandableList/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./node_modules/lodash/take.js"),
				r = i.n(n),
				o = i("./node_modules/react/index.js"),
				d = i.n(o),
				a = i("./src/lib/constants/index.ts"),
				l = i("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = i("./src/reddit/controls/Button/index.tsx"),
				m = i("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = i("./src/reddit/layout/row/Inline/index.tsx"),
				p = i("./src/reddit/layout/row/RightAlign/index.tsx");
			const b = e => {
				const {
					className: t,
					hasMoreItems: i,
					headerButton: n,
					items: a,
					minimizedLength: b,
					onLoadMore: f,
					pending: h,
					renderItem: g,
					title: v
				} = e, [y, x] = Object(o.useState)(!1), _ = a.length > b || i, C = (!_ || y ? a : r()(a, b)).map(e => g({
					item: e
				})), w = () => {
					y || x(!0), y && !i && x(!1), i && f && f()
				};
				return d.a.createElement(l.a, {
					className: t,
					headerButton: n,
					title: v
				}, C, d.a.createElement(u.a, null, d.a.createElement(p.a, null, _ && (() => {
					const e = !y || i && f ? s.fbt._("View More", null, {
						hk: "1RK8uA"
					}) : s.fbt._("View Less", null, {
						hk: "1M72mK"
					});
					return d.a.createElement(c.r, {
						onClick: w
					}, h ? d.a.createElement(m.a, {
						sizePx: 10
					}) : e)
				})())))
			};
			b.defaultProps = {
				minimizedLength: a.Tb
			}, t.a = b
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less": function(e, t, i) {
			e.exports = {
				container: "_3thndRe559UZy14xE1gZ_"
			}
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx": function(e, t, i) {
			"use strict";
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./node_modules/react/index.js"),
				r = i.n(n),
				o = i("./node_modules/react-redux/es/index.js"),
				d = i("./node_modules/reselect/es/index.js"),
				a = i("./src/reddit/actions/profile/index.ts"),
				l = i("./src/reddit/components/SidebarExpandableList/index.tsx"),
				c = i("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				m = i("./src/reddit/models/User/index.ts"),
				u = i("./src/reddit/selectors/profile.ts"),
				p = i("./src/reddit/selectors/subscriptions.ts"),
				b = i("./src/reddit/selectors/user.ts"),
				f = i("./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less"),
				h = i.n(f);
			const g = Object(d.c)({
					currentUser: b.k,
					moderated: u.n,
					subscriptions: p.e,
					hasMoreModerated: u.d,
					loadMorePending: u.a
				}),
				v = Object(o.b)(g, (e, t) => ({
					onLoadMoreGqlModeratedSubreddits: () => e(Object(a.c)(t.profileName))
				}), (e, t, i) => ({
					...i,
					...e,
					...t,
					onLoadMore: () => {
						e.hasMoreModerated && t.onLoadMoreGqlModeratedSubreddits()
					}
				})),
				y = e => {
					let {
						item: t
					} = e;
					return r.a.createElement(c.a, {
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
			t.a = v(e => {
				const {
					currentUser: t,
					moderated: i,
					profileName: n,
					subscriptions: o,
					hasMoreModerated: d,
					onLoadMore: a,
					loadMorePending: c
				} = e;
				if (0 === i.length) return null;
				const u = t && Object(m.e)(t).toLowerCase() === n.toLowerCase() ? s.fbt._("You're a moderator of these communities", null, {
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
					}(i, new Set(o));
				return r.a.createElement(l.a, {
					className: h.a.container,
					title: u,
					items: p,
					renderItem: y,
					hasMoreItems: d,
					onLoadMore: a,
					pending: c
				})
			})
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.m.less": function(e, t, i) {
			e.exports = {
				listItem: "_3lbnTBPV5H4wHdRz5ATVc9",
				icon: "Vm0_pCIi1Z6JWa0EVf6jK",
				description: "_2xcc4c-4TOL7KOsJidXtl",
				name: "_3nt8_GidTIn88UciXx27E7",
				meta: "_3iC0Hyv57ON8dAtU94HFE_"
			}
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./node_modules/react/index.js"),
				r = i.n(n),
				o = i("./node_modules/react-redux/es/index.js"),
				d = i("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = i("./node_modules/reselect/es/index.js"),
				l = i("./src/reddit/actions/profile/index.ts"),
				c = i("./src/reddit/components/SidebarExpandableList/index.tsx"),
				m = i("./src/reddit/components/SidebarSpacer/index.tsx"),
				u = i("./src/reddit/selectors/profile.ts"),
				p = i("./src/reddit/components/SidebarProfileMultireddits/index.m.less"),
				b = i.n(p);
			const f = Object(a.c)({
					hasMoreMultireddits: u.e,
					loadMorePending: u.b,
					multireddits: u.o
				}),
				h = Object(o.b)(f, (e, t) => ({
					onLoadMoreMultireddits: () => e(Object(l.i)(t.profileName, !0))
				}), (e, t, i) => ({
					...i,
					...e,
					...t,
					onLoadMore: () => {
						e.hasMoreMultireddits && t.onLoadMoreMultireddits()
					}
				})),
				g = e => {
					let {
						item: t
					} = e;
					return r.a.createElement("div", {
						className: b.a.listItem,
						key: t.url
					}, r.a.createElement("img", {
						className: b.a.icon,
						src: t.icon
					}), r.a.createElement("div", {
						className: b.a.description
					}, r.a.createElement(d.a, {
						className: b.a.name,
						to: t.url
					}, t.displayText), r.a.createElement("div", {
						className: b.a.meta
					}, s.fbt._({
						"*": "{communities} communities",
						_1: "1 community"
					}, [s.fbt._plural(t.subredditCount, "communities")], {
						hk: "1eyxrS"
					}))))
				};
			t.a = h(e => {
				const {
					hasMoreMultireddits: t,
					loadMorePending: i,
					multireddits: n,
					onLoadMore: o,
					profileName: d
				} = e;
				return n && n.length ? r.a.createElement(m.a, null, r.a.createElement(c.a, {
					hasMoreItems: t,
					items: n,
					onLoadMore: o,
					pending: i,
					renderItem: g,
					title: s.fbt._("Public custom feeds by u/{profileName}", [s.fbt._param("profileName", d)], {
						hk: "16Oicc"
					})
				})) : null
			})
		},
		"./src/reddit/components/SidebarProfilePowerupContributions/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./node_modules/react/index.js"),
				r = i.n(n),
				o = i("./node_modules/react-redux/es/index.js"),
				d = i("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = i("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = i("./src/reddit/components/SubredditIcon/index.tsx"),
				c = i("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				m = i("./src/reddit/selectors/gold/powerups/index.ts"),
				u = i("./src/reddit/selectors/user.ts"),
				p = i("./node_modules/reselect/es/index.js"),
				b = i("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				f = i.n(b);
			const h = Object(p.c)({
				subreddits: function(e, t) {
					let {
						profileName: i
					} = t;
					const s = Object(u.Ab)(e, {
							userName: i
						}),
						n = Object(m.e)(e);
					return (s && n ? n[s.id] : null) || []
				}
			});

			function g(e) {
				let {
					item: t
				} = e;
				const i = t.subredditInfo,
					n = r.a.createElement(l.b, {
						iconUrl: i.styles.icon,
						className: f.a.subredditIcon
					});
				return r.a.createElement(c.a, {
					className: f.a.communityItemContainer,
					key: i.id
				}, r.a.createElement("div", {
					className: f.a.iconContainer
				}, r.a.createElement(d.a, {
					to: i.path
				}, n)), r.a.createElement("div", {
					className: f.a.communityDescription
				}, r.a.createElement("div", {
					className: f.a.communityName
				}, r.a.createElement(d.a, {
					to: i.path
				}, i.prefixedName)), r.a.createElement("div", {
					className: f.a.subscriberCount
				}, s.fbt._({
					"*": "{number} Powerups",
					_1: "1 Powerup"
				}, [s.fbt._plural(t.powerups, "number")], {
					hk: "3fbcDy"
				}))))
			}
			t.a = Object(o.b)(h)(e => {
				let {
					subreddits: t
				} = e;
				return function(e) {
					return e.length > 0 && e.every(e => e.subredditInfo)
				}(t) ? r.a.createElement(a.a, {
					title: s.fbt._("Supports Communities", null, {
						hk: "1vCNdZ"
					}),
					items: t,
					renderItem: g
				}) : null
			})
		},
		"./src/reddit/components/SidebarTrophyCase/index.m.less": function(e, t, i) {
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
		"./src/reddit/components/SidebarTrophyCase/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./node_modules/react/index.js"),
				r = i.n(n),
				o = i("./node_modules/react-redux/es/index.js"),
				d = i("./node_modules/reselect/es/index.js"),
				a = i("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = i("./src/reddit/controls/Typography/index.tsx"),
				c = i("./src/reddit/selectors/telemetry.ts");
			var m = i("./src/reddit/hooks/useTracking.ts"),
				u = i("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				p = i("./node_modules/lodash/isEqual.js"),
				b = i.n(p);
			const f = Object(d.b)(d.d, b.a);
			var h = i("./src/reddit/selectors/profile.ts"),
				g = i("./src/reddit/components/SidebarTrophyCase/index.m.less"),
				v = i.n(g),
				y = i("./src/lib/lessComponent.tsx"),
				x = i("./src/lib/opener/index.ts");
			const _ = Object(d.c)({
				trophyCase: (e, t) => {
					let {
						profileName: i
					} = t;
					return Object(h.r)(e, Object(h.m)(e, i))
				}
			}, f);
			t.a = Object(o.b)(_)(e => {
				let {
					trophyCase: t
				} = e;
				return 0 === t.length ? null : r.a.createElement(a.a, {
					title: s.fbt._("Trophy Case ({trophyCount})", [s.fbt._param("trophyCount", `${t.length}`)], {
						hk: "mzh3V"
					}),
					items: t,
					renderItem: O
				})
			});
			const C = y.a.wrapped(u.a, "TrophyItem", v.a),
				w = y.a.div("TrophyIcon", v.a),
				N = y.a.h5("TrophyName", v.a),
				E = y.a.div("TrophyContent", v.a),
				j = y.a.wrapped(l.c, "Description", v.a),
				O = e => {
					let {
						item: t
					} = e;
					const i = Object(m.a)(),
						s = r.a.createElement("img", {
							src: t.icon,
							title: t.name
						});
					return r.a.createElement(C, {
						key: t.id
					}, r.a.createElement(w, null, t.url ? r.a.createElement("a", {
						target: x.d.BLANK,
						rel: x.c,
						href: t.url,
						onClick: () => i((e => t => ({
							source: "trophy",
							action: "click",
							noun: "trophy",
							...c.n(t),
							actionInfo: Object(c.d)(t, {
								paneName: "profile_about"
							}),
							profile: c.R(t),
							trophy: e
						}))({
							id: t.id,
							name: t.name
						}))
					}, s) : s), r.a.createElement(E, null, r.a.createElement(N, null, t.name), r.a.createElement(j, null, t.description)))
				}
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, i) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return c
			}));
			var s = i("./node_modules/react/index.js"),
				n = i.n(s),
				r = i("./src/lib/lessComponent.tsx"),
				o = i("./src/reddit/components/SEOTitle/index.tsx"),
				d = i("./src/reddit/components/Widgets/Base/index.m.less"),
				a = i.n(d);
			const l = r.a.div("WidgetBackground", a.a),
				c = r.a.wrapped(e => {
					let {
						children: t,
						...i
					} = e;
					return n.a.createElement("div", i, n.a.createElement(o.b, {
						type: o.a.Widget
					}, t))
				}, "WidgetHeader", a.a);
			t.b = e => n.a.createElement("div", {
				className: e.className
			}, n.a.createElement(l, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return j
			})), i.d(t, "a", (function() {
				return P
			}));
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./node_modules/react/index.js"),
				r = i.n(n),
				o = i("./node_modules/react-redux/es/index.js"),
				d = i("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = i("./node_modules/reselect/es/index.js"),
				l = i("./src/lib/classNames/index.ts"),
				c = i("./src/reddit/components/Flair/index.tsx"),
				m = i("./src/reddit/components/SubscribeButton/index.tsx"),
				u = i("./src/reddit/actions/subscription/index.ts");
			var p = Object(o.b)(null, (e, t) => {
					const i = t.widget.id || void 0;
					return {
						onSubscribe: () => e(u.d([t.identifier], !0, i)),
						onSubscriptionsRequested: () => e(u.e()),
						onUnsubscribe: () => e(u.d([t.identifier], !1, i))
					}
				})(i("./src/reddit/components/SubscribeButton/Base.tsx").a),
				b = i("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				f = i("./src/reddit/constants/componentSizes.ts"),
				h = i("./src/reddit/controls/Button/index.tsx"),
				g = i("./src/reddit/controls/LoadingIcon/index.tsx"),
				v = i("./src/reddit/icons/fonts/index.tsx"),
				y = i("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				x = i("./src/reddit/models/Flair/index.ts"),
				_ = i("./src/reddit/selectors/user.ts"),
				C = i("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				w = i("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				N = i.n(w);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			const j = e => r.a.createElement(b.a, {
					className: Object(l.a)(N.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, r.a.createElement("div", {
					className: N.a.container
				}, e.isLoading ? r.a.createElement(g.a, {
					className: N.a.loadingIcon,
					sizePx: 32
				}) : r.a.createElement(r.a.Fragment, null, e.isError ? r.a.createElement("p", {
					className: N.a.errorMsg
				}, e.errorMsg || s.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : r.a.createElement(r.a.Fragment, null, e.communities.map(t => r.a.createElement(P, E({
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
				})))), e.bottomButtonText && e.onBottomButtonClick && r.a.createElement(h.t, {
					className: N.a.bottomButton,
					kind: h.b.Button,
					priority: h.c.Plain,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				O = Object(a.c)({
					hideNSFWPref: _.F,
					nightmode: _.db
				}),
				P = Object(o.b)(O)(e => r.a.createElement("div", {
					className: Object(l.a)(N.a.communityItemContainer, {
						[N.a.withBottomFlair]: e.isNSFW
					})
				}, r.a.createElement(y.a, {
					className: N.a.communityItemExpandCenter,
					widthRight: f.s
				}, r.a.createElement("div", {
					className: N.a.iconContainer
				}, e.communityIcon || e.iconUrl ? r.a.createElement("img", {
					className: N.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : r.a.createElement(v.a, {
					name: "community",
					isFilled: !e.nightmode,
					className: Object(l.a)(N.a.defaultCommunityIcon, {
						[N.a.mNightmode]: e.nightmode
					})
				})), r.a.createElement("div", {
					className: N.a.communityDescriptionContainer
				}, r.a.createElement(d.a, {
					className: N.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(C.b)(e.name, e.type),
					to: Object(C.a)(e.name, e.type)
				}, Object(C.b)(e.name, e.type)), r.a.createElement("div", {
					className: N.a.communityInfoContainer
				}, !!e.subscribers && r.a.createElement("p", {
					className: N.a.subscriberCount
				}, s.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [s.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && r.a.createElement(c.b, {
					className: N.a.nsfwFlair,
					flair: {
						type: x.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? r.a.createElement(g.a, {
					className: Object(l.a)(N.a.communityCta, N.a.smallLoadingIcon),
					sizePx: 12
				}) : r.a.createElement(h.t, {
					className: N.a.communityCta,
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? r.a.createElement(p, {
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
				}) : r.a.createElement(m.a, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					small: !0
				})), !!e.description && r.a.createElement("p", {
					title: e.description,
					className: N.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return r
			})), i.d(t, "b", (function() {
				return o
			}));
			var s = i("./src/reddit/constants/posts.ts"),
				n = i("./src/reddit/helpers/name/index.ts");

			function r(e, t) {
				return (t === s.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function o(e, t) {
				return t === s.a.PROFILE ? Object(n.d)(e) : Object(n.c)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, i) {
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
		"./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less": function(e, t, i) {
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
		"./src/reddit/components/Widgets/ConnectedAccounts/index.m.less": function(e, t, i) {
			e.exports = {
				account: "_25M-5tlJjQOChCI8sg84QU"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				n = i.n(s),
				r = i("./node_modules/react-redux/es/index.js"),
				o = i("./node_modules/reselect/es/index.js"),
				d = i("./src/reddit/components/SidebarSpacer/index.tsx"),
				a = i("./src/reddit/components/TrackingHelper/index.tsx"),
				l = i("./src/reddit/components/Widgets/Base/index.tsx"),
				c = i("./src/reddit/constants/posts.ts"),
				m = i("./src/reddit/helpers/trackers/profileSettings.ts"),
				u = i("./src/reddit/models/ExternalAccount/index.ts"),
				p = i("./src/reddit/selectors/externalAccount.ts"),
				b = i("./src/reddit/selectors/user.ts"),
				f = i("./node_modules/fbt/lib/FbtPublic.js"),
				h = i("./src/reddit/controls/OutboundLink/index.tsx"),
				g = i("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				v = i("./src/reddit/icons/svgs/Twitter/index.tsx"),
				y = i("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				x = i("./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less"),
				_ = i.n(x);
			var C = e => {
					const {
						account: t,
						clickEvent: i,
						provider: s
					} = e;
					let r, o = t.username,
						d = "";
					return s !== u.a.Twitter ? null : (r = n.a.createElement(v.a, {
						className: _.a.twitterLogo
					}), d = f.fbt._("View on Twitter", null, {
						hk: "39S5oy"
					}), o = `@${t.username}`, n.a.createElement(y.a, null, n.a.createElement("span", {
						className: _.a.icon
					}, r), n.a.createElement(h.b, {
						className: _.a.link,
						href: t.link,
						onClick: i
					}, n.a.createElement("div", {
						className: _.a.linkTitle
					}, n.a.createElement("span", {
						className: _.a.name
					}, o), n.a.createElement(g.a, {
						className: _.a.linkIcon
					})), n.a.createElement("div", {
						className: _.a.linkDescription
					}, d))))
				},
				w = i("./src/reddit/components/Widgets/ConnectedAccounts/index.m.less"),
				N = i.n(w);
			const {
				fbt: E
			} = i("./node_modules/fbt/lib/FbtPublic.js"), j = Object(o.c)({
				twitterAccount: (e, t) => {
					let {
						subredditOrProfile: i
					} = t;
					return i.type === c.a.PROFILE ? Object(p.c)(e, {
						profileName: i.name
					}) : null
				},
				user: (e, t) => {
					let {
						subredditOrProfile: i
					} = t;
					return i.type === c.a.PROFILE ? Object(b.Ab)(e, {
						userName: i.name
					}) : null
				}
			}), O = Object(r.b)(j, e => ({
				trackTwitterAccountClicked: t => e((e, i) => m.m(i(), t))
			}), (e, t, i) => ({
				...i,
				...e,
				...t,
				onTwitterAccountClicked: () => t.trackTwitterAccountClicked(e.user)
			}));
			t.a = Object(a.c)(O(e => {
				const {
					onTwitterAccountClicked: t,
					twitterAccount: i
				} = e;
				return i ? n.a.createElement(d.a, null, n.a.createElement(l.b, null, n.a.createElement(l.a, null, E._("Connected accounts", null, {
					hk: "1ce9Jz"
				})), i && n.a.createElement("div", {
					className: N.a.account
				}, n.a.createElement(C, {
					provider: u.a.Twitter,
					account: i,
					clickEvent: t
				})))) : null
			}))
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				n = i.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/Twitter/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return r
			}));
			var s = i("./node_modules/react/index.js"),
				n = i.n(s);

			function r(e) {
				return n.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 400 400",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					fill: "inherit",
					d: "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"
				}))
			}
		},
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, i) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./src/lib/lessComponent.tsx"),
				n = i("./src/reddit/layout/row/RightAlign/index.m.less"),
				r = i.n(n);
			t.a = s.a.div("rightAligned", r.a)
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, i) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				n = i.n(s),
				r = i("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				o = i("./src/lib/classNames/index.ts"),
				d = i("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				a = i.n(d);
			t.a = Object(r.a)(e => n.a.createElement("div", {
				className: Object(o.a)(a.a.expandedCenterContainer, e.className)
			}, n.a.createElement("div", {
				className: a.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), n.a.createElement("div", {
				className: a.a.center
			}, Array.isArray(e.children) && e.children[1]), n.a.createElement("div", {
				className: a.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/pages/ProfilePrivate/index.m.less": function(e, t, i) {
			e.exports = {
				mixedList: "_203kLAn6xQ7ktVOvJCzl9p"
			}
		},
		"./src/reddit/pages/ProfilePrivate/index.tsx": function(e, t, i) {
			"use strict";
			i.r(t);
			var s = i("./node_modules/react/index.js"),
				n = i.n(s),
				r = i("./node_modules/react-redux/es/index.js"),
				o = i("./node_modules/reselect/es/index.js"),
				d = i("./src/reddit/actions/pages/profilePrivate/index.ts"),
				a = i("./src/reddit/components/EmptyProfile/index.ts"),
				l = i("./src/reddit/components/JumpToContent/index.tsx"),
				c = i("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				m = i("./src/reddit/components/PostList/index.tsx"),
				u = i("./src/reddit/components/ProfileItemList/index.tsx"),
				p = i("./src/reddit/components/ProfileNavMenu/index.tsx"),
				b = i("./src/reddit/components/ProfileSidebar/index.tsx"),
				f = i("./node_modules/lodash/noop.js"),
				h = i.n(f),
				g = i("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				v = i("./src/reddit/actions/post.ts"),
				y = i("./src/reddit/components/TrackingHelper/index.tsx"),
				x = i("./src/reddit/components/PostList/Placeholder.tsx"),
				_ = i("./src/reddit/actions/postList.ts"),
				C = i("./src/reddit/contexts/PageLayer/index.tsx"),
				w = i("./src/reddit/helpers/isComment.ts"),
				N = i("./src/reddit/helpers/isPost.ts"),
				E = i("./src/reddit/helpers/trackers/post.ts"),
				j = (i("./node_modules/core-js/modules/web.dom.iterable.js"), i("./src/lib/objectSelector/index.ts")),
				O = i("./src/reddit/models/Flair/index.ts"),
				P = i("./src/reddit/models/PostCreationForm/index.ts"),
				I = i("./src/reddit/models/Vote/index.ts");
			const k = {
				t3_1: {
					approvedAtUTC: null,
					approvedBy: null,
					author: "that_one_guy",
					authorId: "t2_1234",
					authorIsBlocked: !1,
					awardCountsById: {},
					id: "t3_1",
					bannedAtUTC: null,
					bannedBy: null,
					belongsTo: {
						id: "t5_1",
						type: "subreddit"
					},
					contestMode: !1,
					created: 1492205391e4,
					crosspostParentId: null,
					crosspostRootId: null,
					discussionType: null,
					distinguishType: null,
					domain: "i.redd.it",
					events: [],
					flair: [],
					ignoreReports: !1,
					impressionId: null,
					impressionIdStr: null,
					isArchived: !1,
					isApproved: !1,
					isAuthorPremium: !1,
					isBlank: !1,
					isCreatedFromAdsUi: !1,
					isCrosspostable: !0,
					isEligibleForQASchema: !1,
					isFollowed: !1,
					isGildable: !0,
					isLocked: !1,
					isMediaOnly: !1,
					isMeta: !1,
					isNSFW: !1,
					isOriginalContent: !1,
					isPinned: !1,
					isRemoved: !1,
					isSpam: !1,
					isSpoiler: !1,
					isSponsored: !1,
					isSurveyAd: !1,
					isStickied: !1,
					liveCommentsWebsocket: "wss://reddit.com/live/1",
					isReactAllowed: !1,
					attributionInfo: null,
					reactedFrom: null,
					media: {
						type: "image",
						content: "https://i.redd.it/iap6jbwjlosy.jpg",
						width: 100,
						height: 100,
						obfuscated: null,
						resolutions: []
					},
					modReports: [],
					numComments: 5,
					numCrossposts: 0,
					numReports: null,
					permalink: "https://www.reddit.com/r/listentothis/comments/6k2dyk/kerrin_connolly_nevermind_indieacousticpop_2017/",
					postCategories: [{
						categoryId: "c1009",
						categoryName: "News"
					}],
					preview: {
						url: "https://i.redditmedia.com/msdj41xc-LgU8OfIuLDP52FtgyyahbFAizi9mp-aBoI.jpg?s=931d28c1922e12dbf6a06a357cdf3ceb",
						width: 480,
						height: 360
					},
					previewComments: [{
						id: "t1_1",
						type: "top"
					}],
					postId: "t3_1",
					removedBy: null,
					removedByCategory: null,
					score: 23,
					isScoreHidden: !1,
					sendReplies: !1,
					source: null,
					suggestedSort: null,
					thumbnail: {
						url: "https://b.thumbs.redditmedia.com/KNGvoTjCbwN1iYV5lkb4TfZGXX22k--3WfeijolEreo.jpg",
						width: null,
						height: null
					},
					title: "A plain post",
					upvoteRatio: .1,
					userReports: [],
					viewCount: 1,
					voteState: 0
				},
				t3_2: {
					approvedAtUTC: null,
					approvedBy: null,
					author: "that_other_chick",
					authorId: "t2_1235",
					authorIsBlocked: !1,
					awardCountsById: {},
					id: "t3_2",
					bannedAtUTC: null,
					bannedBy: null,
					belongsTo: {
						id: "t5_100",
						type: "profile"
					},
					contestMode: !1,
					created: 1492205391e4,
					crosspostParentId: null,
					crosspostRootId: null,
					discussionType: null,
					distinguishType: null,
					domain: "i.redd.it",
					events: [],
					flair: [],
					ignoreReports: !1,
					impressionId: null,
					impressionIdStr: null,
					isArchived: !1,
					isApproved: !1,
					isAuthorPremium: !1,
					isBlank: !1,
					isCreatedFromAdsUi: !1,
					isCrosspostable: !0,
					isEligibleForQASchema: !1,
					isFollowed: !1,
					isGildable: !0,
					isLocked: !1,
					isMediaOnly: !1,
					isMeta: !1,
					isNSFW: !1,
					isOriginalContent: !1,
					isPinned: !1,
					isRemoved: !1,
					isSpam: !1,
					isSpoiler: !1,
					isSponsored: !1,
					isSurveyAd: !1,
					isStickied: !1,
					isReactAllowed: !1,
					attributionInfo: null,
					reactedFrom: null,
					liveCommentsWebsocket: "wss://reddit.com/live/2",
					media: {
						content: "https://i.redd.it/d43skac7fqsy.jpg",
						type: "image",
						width: 100,
						height: 100,
						obfuscated: null,
						resolutions: []
					},
					modReports: [],
					numComments: 5,
					numCrossposts: 0,
					numReports: null,
					permalink: "https://www.reddit.com/r/listentothis/comments/6k2dyk/kerrin_connolly_nevermind_indieacousticpop_2017/",
					postCategories: [{
						categoryId: "c1009",
						categoryName: "News"
					}],
					previewComments: [{
						id: "t1_1",
						type: "top"
					}],
					postId: "t3_2",
					removedBy: null,
					removedByCategory: null,
					score: 23,
					isScoreHidden: !1,
					sendReplies: !1,
					source: null,
					suggestedSort: null,
					thumbnail: {
						url: "https://b.thumbs.redditmedia.com/KNGvoTjCbwN1iYV5lkb4TfZGXX22k--3WfeijolEreo.jpg",
						width: null,
						height: null
					},
					title: "Another not so plain post here.",
					upvoteRatio: .1,
					userReports: [],
					viewCount: 1,
					voteState: 1
				},
				t3_3: {
					approvedAtUTC: null,
					approvedBy: null,
					author: "person_number_three",
					authorId: "t2_1236",
					authorIsBlocked: !1,
					awardCountsById: {},
					id: "t3_3",
					bannedAtUTC: null,
					bannedBy: null,
					belongsTo: {
						id: "t5_1",
						type: "subreddit"
					},
					contestMode: !1,
					created: 1492205391e4,
					crosspostParentId: null,
					crosspostRootId: null,
					discussionType: null,
					distinguishType: null,
					domain: "i.redd.it",
					events: [],
					flair: [],
					ignoreReports: !1,
					impressionId: null,
					impressionIdStr: null,
					isArchived: !1,
					isApproved: !1,
					isAuthorPremium: !1,
					isBlank: !1,
					isCreatedFromAdsUi: !1,
					isCrosspostable: !0,
					isEligibleForQASchema: !1,
					isFollowed: !1,
					isGildable: !0,
					isLocked: !1,
					isMediaOnly: !1,
					isMeta: !1,
					isNSFW: !1,
					isOriginalContent: !1,
					isPinned: !1,
					isRemoved: !1,
					isSpam: !1,
					isSpoiler: !1,
					isSponsored: !1,
					isSurveyAd: !1,
					isStickied: !1,
					isReactAllowed: !1,
					attributionInfo: null,
					reactedFrom: null,
					liveCommentsWebsocket: "wss://reddit.com/live/3",
					media: {
						content: "https://i.redd.it/d43skac7fqsy.jpg",
						type: "image",
						width: 100,
						height: 100,
						obfuscated: null,
						resolutions: []
					},
					modReports: [],
					numComments: 5,
					numCrossposts: 0,
					numReports: null,
					permalink: "https://www.reddit.com/r/listentothis/comments/6k2dyk/kerrin_connolly_nevermind_indieacousticpop_2017/",
					postCategories: [{
						categoryId: "c1009",
						categoryName: "News"
					}],
					preview: {
						url: "https://i.redditmedia.com/msdj41xc-LgU8OfIuLDP52FtgyyahbFAizi9mp-aBoI.jpg?s=931d28c1922e12dbf6a06a357cdf3ceb",
						width: 480,
						height: 360
					},
					previewComments: [{
						id: "t1_1",
						type: "top"
					}],
					postId: "t3_3",
					removedBy: null,
					removedByCategory: null,
					score: 23,
					isScoreHidden: !1,
					sendReplies: !1,
					source: null,
					suggestedSort: null,
					thumbnail: {
						url: "https://b.thumbs.redditmedia.com/KNGvoTjCbwN1iYV5lkb4TfZGXX22k--3WfeijolEreo.jpg",
						width: null,
						height: null
					},
					title: "Another plain post here.",
					upvoteRatio: .1,
					userReports: [],
					viewCount: 1,
					voteState: 1
				},
				t3_4: {
					approvedAtUTC: null,
					approvedBy: null,
					author: "this_user_is_the_best",
					authorId: "t2_1237",
					authorIsBlocked: !1,
					awardCountsById: {},
					id: "t3_4",
					bannedAtUTC: null,
					bannedBy: null,
					belongsTo: {
						id: "t5_100",
						type: "profile"
					},
					contestMode: !1,
					created: 1492205391e4,
					crosspostParentId: null,
					crosspostRootId: null,
					discussionType: null,
					distinguishType: null,
					domain: "i.redditmedia.com",
					events: [],
					flair: [{
						type: O.f.Text,
						text: "hello world"
					}, {
						type: O.f.Spoiler,
						text: "spoiler"
					}],
					ignoreReports: !1,
					impressionId: null,
					impressionIdStr: null,
					isArchived: !1,
					isApproved: !1,
					isAuthorPremium: !1,
					isBlank: !1,
					isCreatedFromAdsUi: !1,
					isCrosspostable: !0,
					isEligibleForQASchema: !1,
					isFollowed: !1,
					isGildable: !0,
					isLocked: !1,
					isMediaOnly: !1,
					isMeta: !1,
					isNSFW: !1,
					isOriginalContent: !1,
					isPinned: !1,
					isRemoved: !1,
					isSpam: !1,
					isSpoiler: !1,
					isSponsored: !1,
					isSurveyAd: !1,
					isStickied: !1,
					isReactAllowed: !1,
					attributionInfo: null,
					reactedFrom: null,
					liveCommentsWebsocket: "wss://reddit.com/live/4",
					media: null,
					modReports: [],
					numComments: 5,
					numCrossposts: 0,
					numReports: null,
					permalink: "https://www.reddit.com/r/listentothis/comments/6k2dyk/kerrin_connolly_nevermind_indieacousticpop_2017/",
					postCategories: [{
						categoryId: "c1009",
						categoryName: "News"
					}],
					preview: {
						url: "https://i.redditmedia.com/msdj41xc-LgU8OfIuLDP52FtgyyahbFAizi9mp-aBoI.jpg?s=931d28c1922e12dbf6a06a357cdf3ceb",
						width: 480,
						height: 360
					},
					previewComments: [{
						id: "t1_1",
						type: "top"
					}],
					postId: "t3_4",
					removedBy: null,
					removedByCategory: null,
					score: 300,
					isScoreHidden: !1,
					sendReplies: !1,
					source: {
						displayText: "foobar.com",
						url: "http://foobar.com",
						outboundUrl: "http://foobar.com/foobar"
					},
					suggestedSort: null,
					thumbnail: {
						url: "https://b.thumbs.redditmedia.com/KNGvoTjCbwN1iYV5lkb4TfZGXX22k--3WfeijolEreo.jpg",
						width: null,
						height: null
					},
					title: "Hello world one two three four five six seven eight. See? I can count!",
					upvoteRatio: .1,
					userReports: [],
					viewCount: 1,
					voteState: 0
				},
				t3_5: {
					approvedAtUTC: null,
					approvedBy: null,
					author: "yet_another_cool_dude",
					authorId: "t2_1238",
					authorIsBlocked: !1,
					awardCountsById: {},
					id: "t3_5",
					bannedAtUTC: null,
					bannedBy: null,
					belongsTo: {
						id: "t5_1",
						type: "subreddit"
					},
					contestMode: !1,
					created: 1492205391e4,
					crosspostParentId: null,
					crosspostRootId: null,
					discussionType: null,
					distinguishType: null,
					domain: "self.listentothis",
					events: [],
					flair: [{
						type: O.f.Text,
						text: "hello world"
					}, {
						type: O.f.Spoiler,
						text: "spoiler"
					}],
					ignoreReports: !1,
					impressionId: null,
					impressionIdStr: null,
					isArchived: !1,
					isApproved: !1,
					isAuthorPremium: !1,
					isBlank: !1,
					isCreatedFromAdsUi: !1,
					isCrosspostable: !0,
					isEligibleForQASchema: !1,
					isFollowed: !1,
					isGildable: !0,
					isLocked: !1,
					isMediaOnly: !1,
					isMeta: !1,
					isNSFW: !1,
					isOriginalContent: !1,
					isPinned: !1,
					isRemoved: !1,
					isSpam: !1,
					isSpoiler: !1,
					isSponsored: !1,
					isSurveyAd: !1,
					isStickied: !1,
					isReactAllowed: !1,
					attributionInfo: null,
					reactedFrom: null,
					liveCommentsWebsocket: "wss://reddit.com/live/5",
					media: {
						type: "text",
						rteMode: P.i.RICH_TEXT,
						markdownContent: "",
						content: "",
						obfuscated: null
					},
					modReports: [],
					numComments: 5,
					numCrossposts: 0,
					numReports: null,
					permalink: "https://www.reddit.com/r/listentothis/comments/6k2dyk/kerrin_connolly_nevermind_indieacousticpop_2017/",
					preview: {
						url: "https://i.redditmedia.com/msdj41xc-LgU8OfIuLDP52FtgyyahbFAizi9mp-aBoI.jpg?s=931d28c1922e12dbf6a06a357cdf3ceb",
						width: 480,
						height: 360
					},
					postCategories: [{
						categoryId: "c1009",
						categoryName: "News"
					}],
					previewComments: [{
						id: "t1_1",
						type: "top"
					}],
					postId: "t3_5",
					removedBy: null,
					removedByCategory: null,
					score: 300,
					isScoreHidden: !1,
					sendReplies: !1,
					source: null,
					suggestedSort: null,
					thumbnail: {
						url: "https://b.thumbs.redditmedia.com/KNGvoTjCbwN1iYV5lkb4TfZGXX22k--3WfeijolEreo.jpg",
						width: null,
						height: null
					},
					title: "This is an interesting post title",
					upvoteRatio: .1,
					userReports: [],
					viewCount: 1,
					voteState: 0
				},
				t3_6: {
					approvedAtUTC: null,
					approvedBy: null,
					author: "spez",
					authorId: "t2_1239",
					authorIsBlocked: !1,
					awardCountsById: {},
					id: "t3_6",
					bannedAtUTC: null,
					bannedBy: null,
					belongsTo: {
						id: "t5_100",
						type: "profile"
					},
					contestMode: !1,
					created: 1492205391e4,
					crosspostParentId: null,
					crosspostRootId: null,
					discussionType: null,
					distinguishType: null,
					domain: "self.listentothis",
					events: [],
					flair: [{
						type: O.f.Text,
						text: "hello world"
					}, {
						type: O.f.Spoiler,
						text: "spoiler"
					}],
					ignoreReports: !1,
					impressionId: null,
					impressionIdStr: null,
					isArchived: !1,
					isApproved: !1,
					isAuthorPremium: !1,
					isBlank: !1,
					isCreatedFromAdsUi: !1,
					isCrosspostable: !0,
					isEligibleForQASchema: !1,
					isFollowed: !1,
					isGildable: !0,
					isLocked: !1,
					isMediaOnly: !1,
					isMeta: !1,
					isNSFW: !1,
					isOriginalContent: !1,
					isPinned: !1,
					isRemoved: !1,
					isSpam: !1,
					isSpoiler: !1,
					isSponsored: !1,
					isSurveyAd: !1,
					isReactAllowed: !1,
					attributionInfo: null,
					reactedFrom: null,
					isStickied: !1,
					liveCommentsWebsocket: "wss://reddit.com/live/6",
					media: {
						type: "text",
						rteMode: P.i.RICH_TEXT,
						markdownContent: "",
						content: "",
						obfuscated: null
					},
					modReports: [],
					numComments: 5,
					numCrossposts: 0,
					numReports: null,
					permalink: "https://www.reddit.com/r/listentothis/comments/6k2dyk/kerrin_connolly_nevermind_indieacousticpop_2017/",
					postCategories: [{
						categoryId: "c1009",
						categoryName: "News"
					}],
					preview: {
						url: "https://i.redditmedia.com/msdj41xc-LgU8OfIuLDP52FtgyyahbFAizi9mp-aBoI.jpg?s=931d28c1922e12dbf6a06a357cdf3ceb",
						width: 480,
						height: 360
					},
					previewComments: [{
						id: "t1_1",
						type: "top"
					}],
					postId: "t3_6",
					removedBy: null,
					removedByCategory: null,
					score: 300,
					isScoreHidden: !1,
					sendReplies: !1,
					source: null,
					suggestedSort: null,
					thumbnail: {
						url: "https://b.thumbs.redditmedia.com/KNGvoTjCbwN1iYV5lkb4TfZGXX22k--3WfeijolEreo.jpg",
						width: null,
						height: null
					},
					title: "This is an extremely interesting post title",
					upvoteRatio: .1,
					userReports: [],
					viewCount: 1,
					voteState: 0
				},
				abc12345: {
					approvedAtUTC: null,
					approvedBy: null,
					author: "spez",
					authorId: "t2_1240",
					authorIsBlocked: !1,
					awardCountsById: {},
					id: "t3_6",
					bannedAtUTC: null,
					bannedBy: null,
					belongsTo: {
						id: "t5_100",
						type: "profile"
					},
					contestMode: !1,
					created: 1492205391e4,
					crosspostParentId: null,
					crosspostRootId: null,
					discussionType: null,
					distinguishType: null,
					domain: "i.redditmedia.com",
					events: [{
						type: 1,
						url: "https://www.reddit.com/i.gif"
					}],
					flair: [{
						type: O.f.Text,
						text: "hello world"
					}, {
						type: O.f.Spoiler,
						text: "spoiler"
					}],
					ignoreReports: !1,
					impressionId: null,
					impressionIdStr: null,
					isArchived: !1,
					isApproved: !1,
					isAuthorPremium: !1,
					isBlank: !0,
					isCreatedFromAdsUi: !1,
					isCrosspostable: !0,
					isEligibleForQASchema: !1,
					isFollowed: !1,
					isGildable: !0,
					isLocked: !1,
					isMediaOnly: !1,
					isMeta: !1,
					isNSFW: !1,
					isOriginalContent: !1,
					isPinned: !1,
					isRemoved: !1,
					isSpam: !1,
					isSpoiler: !1,
					isSponsored: !1,
					isSurveyAd: !1,
					isStickied: !1,
					isReactAllowed: !1,
					attributionInfo: null,
					reactedFrom: null,
					liveCommentsWebsocket: "wss://reddit.com/live/6",
					media: {
						type: "text",
						rteMode: P.i.RICH_TEXT,
						markdownContent: "",
						content: "",
						obfuscated: null
					},
					modReports: [],
					numComments: 5,
					numCrossposts: 0,
					numReports: null,
					permalink: "https://www.reddit.com/r/listentothis/comments/6k2dyk/kerrin_connolly_nevermind_indieacousticpop_2017/",
					postCategories: [{
						categoryId: "c1009",
						categoryName: "News"
					}],
					preview: {
						url: "https://i.redditmedia.com/msdj41xc-LgU8OfIuLDP52FtgyyahbFAizi9mp-aBoI.jpg?s=931d28c1922e12dbf6a06a357cdf3ceb",
						width: 480,
						height: 360
					},
					previewComments: [{
						id: "t1_1",
						type: "top"
					}],
					postId: "t3_3",
					removedBy: null,
					removedByCategory: null,
					score: 300,
					isScoreHidden: !1,
					sendReplies: !1,
					source: null,
					suggestedSort: null,
					thumbnail: {
						url: "https://b.thumbs.redditmedia.com/KNGvoTjCbwN1iYV5lkb4TfZGXX22k--3WfeijolEreo.jpg",
						width: null,
						height: null
					},
					title: "This is an extremely interesting post title",
					upvoteRatio: .1,
					userReports: [],
					viewCount: 1,
					voteState: 0
				}
			};
			S = {
				authorIsBlocked: !0,
				media: {
					type: "text",
					rteMode: P.i.RICH_TEXT,
					markdownContent: "",
					content: "This is content in a post.",
					obfuscated: null
				}
			}, I.a.notVoted;
			var S;
			const L = Object(j.a)((e, t) => {
					let {
						listingKey: i
					} = t;
					const s = e.posts.models;
					return T(e, {
						listingKey: i
					}).filter(e => {
						if (Object(w.a)(e)) return !0; {
							const t = s[e];
							return t && !t.hidden
						}
					})
				}),
				T = Object(j.a)((e, t) => {
					let {
						listingKey: i
					} = t;
					const s = e.pages.profileOverview.chrono.ids[i];
					return s ? [...s] : []
				}),
				A = Object(j.a)((e, t) => {
					let {
						listingKey: i
					} = t;
					return L(e, {
						listingKey: i
					}).reduce((t, i) => {
						const s = Object(w.a)(i) ? e.features.comments.models[i].postId : i;
						return t[i] = s, t
					}, {})
				}),
				F = (Object(j.a)((e, t) => {
					let {
						listingKey: i
					} = t;
					const s = e.posts.models;
					return F(e, {
						listingKey: i
					}).filter(e => {
						const t = s[e];
						return t && !t.hidden
					})
				}), Object(j.a)((e, t) => {
					let {
						listingKey: i
					} = t;
					return L(e, {
						listingKey: i
					}).map(t => Object(w.a)(t) ? e.features.comments.models[t].postId : t)
				})),
				B = Object(j.a)((e, t) => {
					let {
						listingKey: i
					} = t;
					const s = e.posts.models,
						n = F(e, {
							listingKey: i
						}),
						r = {};
					return n.forEach(e => r[e] = s[e]), r
				}),
				R = Object(j.a)((e, t) => {
					let {
						listingKey: i
					} = t;
					const s = e.features.comments.models,
						n = L(e, {
							listingKey: i
						}),
						r = {};
					return n.forEach(e => !!Object(w.a)(e) && (r[e] = s[e])), r
				});
			var M = i("./src/reddit/selectors/subreddit.ts"),
				G = i("./src/reddit/selectors/tracking.ts"),
				U = i("./src/reddit/selectors/user.ts");
			const W = (e, t) => (e, t, i) => Object(w.a)(e) ? 120 : 47,
				D = (Object(C.u)(), {
					apiError: (e, t) => {
						let {
							listingKey: i
						} = t;
						return e.pages.profileOverview.chrono.api.error[i]
					},
					apiPending: (e, t) => {
						let {
							listingKey: i
						} = t;
						return e.pages.profileOverview.chrono.api.pending[i]
					},
					currentUser: U.k,
					layout: C.S,
					loadMore: (e, t) => {
						let {
							listingKey: i
						} = t;
						return e.pages.profileOverview.chrono.loadMore[i]
					},
					subredditsById: M.bb,
					viewportDataLoaded: G.a,
					commentsById: R,
					itemIds: L,
					itemIdToPostId: A,
					postsById: B,
					estimateItemHeight: W
				}),
				H = Object(o.c)(D);
			Object(r.b)(H, (e, t) => ({
				onBottomViewed: (t, i) => e(_.c(t, i)),
				openPost: t => {
					e(v.L(t))
				},
				trackOnPostEnteredViewport: (t, i) => {
					Object(N.a)(t) && e(v.O(t))
				},
				trackOnPostExitedViewport: (t, i, s) => {
					Object(N.a)(t) && e(v.P(t, s))
				},
				fireAdPixelsOfType: h.a
			}), (e, t, i) => ({
				...e,
				...t,
				...i,
				postClickEventFactory: (e, t) => Object(E.k)(e, t)
			}));
			var q = i("./src/reddit/featureFlags/index.ts"),
				K = i("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				z = i("./src/reddit/models/Profile/index.ts");
			const V = (e, t) => {
					let {
						listingKey: i
					} = t;
					return e.profilePrivatePage.api.pending[i]
				},
				Q = (e, t) => {
					let {
						listingKey: i
					} = t;
					return e.profilePrivatePage.api.error[i]
				},
				X = Object(j.a)((e, t) => {
					let {
						listingKey: i
					} = t;
					return (e.profilePrivatePage.ids[i] || []).reduce((t, i) => {
						const s = Object(w.a)(i) ? e.features.comments.models[i].postId : i;
						return t[i] = s, t
					}, {})
				}),
				Y = Object(C.u)(),
				Z = Object(C.u)(),
				$ = {
					apiError: Q,
					apiPending: V,
					layout: C.S,
					loadMore: (e, t) => {
						let {
							listingKey: i
						} = t;
						if (!e.profilePrivatePage.pageInfo || !e.profilePrivatePage.pageInfo[i] || !e.profilePrivatePage.pageInfo[i].hasNextPage) return null;
						const s = e.profilePrivatePage.ids[i];
						return {
							token: s[s.length - 1],
							dist: K.h
						}
					},
					subredditsById: e => e.subreddits.models,
					postsById: e => e.posts.models,
					viewportDataLoaded: (e, t) => !V(e, t) && !Q(e, t)
				},
				J = Object(o.c)({
					...$,
					currentUser: U.k,
					commentsById: e => e.features.comments.models,
					itemIds: (e, t) => {
						let {
							listingKey: i
						} = t;
						return -1 === i.indexOf(z.b.Saved) && -1 === i.indexOf(z.b.ReceivedGildings) && -1 === i.indexOf(z.b.GivenGildings) ? [] : e.profilePrivatePage.ids[i] || []
					},
					itemIdToPostId: X,
					estimateItemHeight: W
				}),
				ee = Object(o.c)({
					...$,
					measureScrollFPS: q.d.measureScrollFPS,
					postIds: (e, t) => {
						let {
							listingKey: i
						} = t;
						return i.indexOf(z.b.Saved) > -1 || i.indexOf(z.b.ReceivedGildings) > -1 || i.indexOf(z.b.GivenGildings) > -1 ? [] : e.profilePrivatePage.ids[i] || []
					},
					postListPlaceholderComponent: () => x.a
				}),
				te = e => ({
					onBottomViewed: h.a,
					openPost: t => {
						e(v.L(t))
					},
					trackOnPostEnteredViewport: h.a,
					fireAdPixelsOfType: (t, i) => {
						e(v.z(t, i))
					}
				}),
				ie = Object(r.b)(J, te, (e, t, i) => ({
					...e,
					...t,
					...i,
					postClickEventFactory: (e, t) => Object(E.k)(e, t)
				})),
				se = Object(r.b)(ee, e => ({
					...te(e),
					onFirstPostChanged: h.a,
					adBrandSafetyStatusReceived: h.a,
					trackOnPostExitedViewport: h.a
				}), (e, t, i) => ({
					...e,
					...t,
					...i,
					postClickEventFactory: (e, t) => Object(E.k)(e, t),
					postComponentForLayout: g.b
				}));
			var ne = i("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				re = i("./src/reddit/helpers/trackers/screenview.ts"),
				oe = i("./src/reddit/layout/page/Listing/index.tsx"),
				de = i("./src/reddit/pages/ProfilePrivate/index.m.less"),
				ae = i.n(de);
			const le = Object(o.c)({
					currentUser: U.k
				}),
				ce = Object(r.b)(le, (e, t) => ({
					onLoadMore: () => e(Object(d.moreProfilePrivateRequested)(t.match.params.listingType))
				})),
				me = (e => Object(y.c)(Y(ie(e))))(u.a),
				ue = (e => Object(y.c)(Z(se(e))))(m.a);
			class pe extends n.a.Component {
				constructor() {
					super(...arguments), this.onLoadMore = () => this.props.onLoadMore()
				}
				renderNoPosts(e) {
					const t = z.a[e]();
					return () => n.a.createElement(a.d, {
						text: t
					})
				}
				renderContent() {
					const {
						currentUser: e,
						match: {
							params: {
								listingType: t,
								profileName: i
							}
						}
					} = this.props, s = i.toLowerCase(), r = Object(ne.c)(s, t);
					return e && e.displayText && e.displayText.toLowerCase() === s ? t === z.b.Saved || t === z.b.ReceivedGildings || t === z.b.GivenGildings ? n.a.createElement(me, {
						className: ae.a.mixedList,
						itemComponent: c.a,
						listingKey: r,
						noPostsComponent: this.renderNoPosts(t),
						listingName: s,
						listingViewed: Object(re.s)(r),
						onLoadMore: this.onLoadMore
					}) : n.a.createElement(ue, {
						listingKey: r,
						noPostsComponent: this.renderNoPosts(t),
						listingName: s,
						listingViewed: Object(re.s)(r),
						onLoadMore: this.onLoadMore
					}) : n.a.createElement(a.a, null)
				}
				render() {
					const {
						profileName: e
					} = this.props.match.params;
					return n.a.createElement(oe.a, {
						fitPageToContent: !0,
						contentNavBar: n.a.createElement(p.a, {
							profileName: e
						}),
						content: n.a.createElement(n.a.Fragment, null, n.a.createElement(l.a, null), this.renderContent()),
						sidebar: n.a.createElement(b.a, {
							profileName: e
						})
					})
				}
			}
			t.default = ce(pe)
		},
		"./src/redditGQL/operations/ProfileDownvoted.json": function(e) {
			e.exports = JSON.parse('{"id":"4acc506c916a"}')
		},
		"./src/redditGQL/operations/ProfileGivenGildings.json": function(e) {
			e.exports = JSON.parse('{"id":"f649d259b459"}')
		},
		"./src/redditGQL/operations/ProfileHidden.json": function(e) {
			e.exports = JSON.parse('{"id":"9446fd0182a5"}')
		},
		"./src/redditGQL/operations/ProfileReceivedGildings.json": function(e) {
			e.exports = JSON.parse('{"id":"a50776ef134a"}')
		},
		"./src/redditGQL/operations/ProfileSaved.json": function(e) {
			e.exports = JSON.parse('{"id":"298208a63798"}')
		},
		"./src/redditGQL/operations/ProfileUpvoted.json": function(e) {
			e.exports = JSON.parse('{"id":"4450c1a22029"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfilePrivate.2665ea2323178884bead.js.map