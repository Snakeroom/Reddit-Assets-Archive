// https://www.redditstatic.com/desktop2x/ProfilePrivate.cbb9258676d675f12e75.js
// Retrieved at 5/4/2022, 10:10:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfilePrivate"], {
		"./node_modules/lodash/take.js": function(e, t, s) {
			var i = s("./node_modules/lodash/_baseSlice.js"),
				r = s("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, s) {
				return e && e.length ? (t = s || void 0 === t ? 1 : r(t), i(e, 0, t < 0 ? 0 : t)) : []
			}
		},
		"./src/reddit/actions/pages/profilePrivate/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "privateListingPending", (function() {
				return T
			})), s.d(t, "privateMixedListingLoaded", (function() {
				return R
			})), s.d(t, "privatePostListingLoaded", (function() {
				return F
			})), s.d(t, "privateListingFailed", (function() {
				return A
			})), s.d(t, "profilePrivateRequested", (function() {
				return B
			})), s.d(t, "morePending", (function() {
				return M
			})), s.d(t, "moreMixedLoaded", (function() {
				return G
			})), s.d(t, "morePostLoaded", (function() {
				return W
			})), s.d(t, "moreFailed", (function() {
				return U
			})), s.d(t, "moreProfilePrivateRequested", (function() {
				return D
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var i = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/externalAccount.ts"),
				n = s("./src/reddit/actions/pages/profileShared.ts"),
				o = s("./src/reddit/actions/profile/index.ts"),
				d = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/redditGQL/operations/ProfileDownvoted.json"),
				l = s("./src/redditGQL/operations/ProfileGivenGildings.json"),
				c = s("./src/redditGQL/operations/ProfileHidden.json"),
				m = s("./src/redditGQL/operations/ProfileReceivedGildings.json"),
				u = s("./src/redditGQL/operations/ProfileSaved.json"),
				p = s("./src/redditGQL/operations/ProfileUpvoted.json");
			var h = s("./src/reddit/models/Comment/index.ts"),
				b = s("./src/reddit/models/Post/index.ts"),
				g = s("./src/reddit/models/Profile/index.ts"),
				f = s("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				y = s("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				v = s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				x = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				w = s("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				C = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				E = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				_ = s("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts");
			var k = e => {
					const {
						listingType: t,
						rawData: s,
						includeIdentity: i,
						includeModerated: r
					} = e, {
						identity: n
					} = s, o = (e => {
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
						return e !== g.b.Saved && e !== g.b.ReceivedGildings && e !== g.b.GivenGildings || (t.comments = {}), t
					})(t);
					if (!n) return o;
					if (i && (o.account = Object(_.a)(n) || null, o.preferences = Object(w.a)(n.preferences, n.interactions) || null, n.redditor.profile && (o.profiles[n.redditor.profile.id] = Object(C.a)(n.redditor.profile))), r && n.redditor && n.redditor.moderatedSubreddits) {
						const {
							moderatedSubredditIds: e,
							pageInfo: t,
							subreddits: s
						} = Object(C.b)(n.redditor.moderatedSubreddits);
						o.moderatedPageInfo = t, o.moderatedSubredditIds = e, o.subreddits = s
					}
					const d = ((e, t) => {
						switch (t) {
							case g.b.Downvoted:
								return e.identity.downvotedPosts;
							case g.b.Hidden:
								return e.identity.hiddenPosts;
							case g.b.Saved:
								return e.identity.saved;
							case g.b.Upvoted:
								return e.identity.upvotedPosts;
							case g.b.ReceivedGildings:
								return e.identity.receivedGildings;
							case g.b.GivenGildings:
								return e.identity.givenGildings
						}
					})(s, t);
					if (!d) return o;
					o.pageInfo = d.pageInfo;
					for (const {
							node: a
						} of d.edges) {
						let e;
						if (a.__typename === h.d.Comment) {
							const t = Object(f.a)(a);
							if (o.comments || (o.comments = {}), o.comments[t.id] = t, o.itemIds || (o.itemIds = []), o.itemIds.push(t.id), a.authorFlair && (o.authorFlair[t.subredditId] || (o.authorFlair[t.subredditId] = {}), o.authorFlair[t.subredditId][t.author] = Object(y.a)(a.authorFlair)[0]), e = a.postInfo, a.postInfo) {
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
							crosspost: s
						} = e && Object(x.a)(e);
						o.posts[t.id] = t, s && (o.posts[s.id] = s), Object(b.i)(e) || Object(b.j)(e) || (e.authorFlair && (o.authorFlair[t.belongsTo.id] || (o.authorFlair[t.belongsTo.id] = {}), o.authorFlair[t.belongsTo.id][t.author] = Object(y.a)(e.authorFlair)[0]), Object(b.l)(e) ? o.profiles[e.profile.id] || (o.profiles[e.profile.id] = Object(C.a)(e.profile)) : Object(b.n)(e) && (o.subreddits[e.subreddit.id] || (o.subreddits[e.subreddit.id] = Object(E.a)(e.subreddit)), o.postFlair[e.subreddit.id] || (o.postFlair[e.subreddit.id] = Object(v.a)(e.subreddit))))
					}
					return o
				},
				O = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				S = s("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				j = s("./src/lib/initializeClient/installReducer.ts"),
				P = s("./src/reddit/reducers/features/comments/index.ts");
			Object(j.a)({
				features: {
					comments: P.a
				}
			});
			const I = {
					[g.b.Downvoted]: (e, t) => Object(d.a)(e, {
						...a,
						variables: t
					}),
					[g.b.Hidden]: (e, t) => Object(d.a)(e, {
						...c,
						variables: t
					}),
					[g.b.Saved]: (e, t) => Object(d.a)(e, {
						...u,
						variables: t
					}),
					[g.b.Upvoted]: (e, t) => Object(d.a)(e, {
						...p,
						variables: t
					}),
					[g.b.ReceivedGildings]: (e, t) => Object(d.a)(e, {
						...m,
						variables: t
					}),
					[g.b.GivenGildings]: (e, t) => Object(d.a)(e, {
						...l,
						variables: t
					})
				},
				N = (e, t) => {
					switch (e) {
						case g.b.Downvoted:
						case g.b.Hidden:
						case g.b.Saved:
						case g.b.Upvoted:
						case g.b.ReceivedGildings:
						case g.b.GivenGildings:
							return t.body.data
					}
				},
				L = e => {
					switch (e.listingType) {
						case g.b.Downvoted:
						case g.b.Hidden:
						case g.b.Saved:
						case g.b.Upvoted:
						case g.b.ReceivedGildings:
						case g.b.GivenGildings:
							return k(e)
					}
				},
				T = Object(i.a)(S.b),
				R = Object(i.a)(S.c),
				F = Object(i.a)(S.i),
				A = Object(i.a)(S.a),
				B = e => async (t, s, i) => {
					const {
						profileName: d,
						listingType: a
					} = e.params, l = s(), c = Object(O.b)(d.toLowerCase(), a), m = l.profilePrivatePage.ids[c] && l.profilePrivatePage.ids[c].length > 0, u = !!l.profilePrivatePage.api.error[c];
					if (l.profilePrivatePage.api.pending[c] || m && !u) return;
					const {
						account: p
					} = l.user, h = !p, b = !(p && p.displayText && l.profiles.moderated.models[p.displayText.toLowerCase()] && l.profiles.moderated.models[p.displayText.toLowerCase()].length);
					t(T({
						listingKey: c
					}));
					const f = {
							includeIdentity: h,
							includeModerated: b,
							first: S.h,
							after: null
						},
						y = await I[a](i.gqlContext(), f);
					if (y.ok && y.body) {
						const e = L({
							rawData: N(a, y),
							listingType: a,
							includeIdentity: h,
							includeModerated: b
						});
						a === g.b.Saved || a === g.b.ReceivedGildings || a === g.b.GivenGildings ? await t(R({
							listingKey: c,
							profileName: d,
							...e
						})) : await t(F({
							listingKey: c,
							profileName: d,
							...e
						})), await Promise.all([t(Object(n.d)(d)), t(Object(r.o)(d)), t(Object(o.d)(d))])
					} else t(A({
						listingKey: c,
						error: y.error
					}))
				}, M = Object(i.a)(S.f), G = Object(i.a)(S.e), W = Object(i.a)(S.g), U = Object(i.a)(S.d), D = e => async (t, s, i) => {
					const r = s(),
						n = r.user.account && r.user.account.displayText && r.user.account.displayText.toLowerCase();
					if (!n) return;
					const o = Object(O.b)(n, e);
					if (!r.profilePrivatePage.ids[o] || !r.profilePrivatePage.ids[o].length || !r.profilePrivatePage.pageInfo || !r.profilePrivatePage.pageInfo[o].hasNextPage || r.profilePrivatePage.api.error[o] || r.profilePrivatePage.api.pending[o]) return;
					const d = {
						includeIdentity: !1,
						includeModerated: !1,
						after: r.profilePrivatePage.pageInfo[o].endCursor,
						first: S.h
					};
					t(M({
						listingKey: o
					}));
					const a = await I[e](i.gqlContext(), d);
					if (a.ok && a.body) {
						const s = L({
							includeIdentity: !1,
							includeModerated: !1,
							listingType: e,
							rawData: a.body.data
						});
						e === g.b.Saved || e === g.b.ReceivedGildings || e === g.b.GivenGildings ? await t(G({
							listingKey: o,
							profileName: n,
							...s
						})) : await t(W({
							listingKey: o,
							profileName: n,
							...s
						}))
					} else t(U({
						listingKey: o,
						error: a.error
					}))
				}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/EmptyProfile/EmptyListing.m.less": function(e, t, s) {
			e.exports = {
				PrimaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				primaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				BackgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				backgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				Wrapper: "_1aYPXfy_h5ZUIu0k_69eX1",
				wrapper: "_1aYPXfy_h5ZUIu0k_69eX1"
			}
		},
		"./src/reddit/components/EmptyProfile/forbidden.m.less": function(e, t, s) {
			e.exports = {
				container: "_1RecBWgyCRDIwbumVv_1eu",
				hideIcon: "_2ahl77ziD4jsIXBLc18_Hc",
				title: "_1MRoVpNql4popp175MVxl6",
				subtitle: "_3HccUrmIe42WfjCGgNekWK",
				buttons: "_1BrhZvjQw9AWs6w5xlkj2F"
			}
		},
		"./src/reddit/components/EmptyProfile/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return p
			})), s.d(t, "c", (function() {
				return h
			})), s.d(t, "d", (function() {
				return b
			})), s.d(t, "a", (function() {
				return x
			}));
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/PostList/Placeholder.tsx"),
				l = s("./src/reddit/constants/postLayout.ts"),
				c = s("./src/reddit/components/EmptyProfile/EmptyListing.m.less"),
				m = s.n(c);
			var u = e => {
				let {
					children: t,
					className: s
				} = e;
				return n.a.createElement("div", {
					className: Object(d.a)(m.a.Wrapper, s)
				}, n.a.createElement(a.a, {
					className: m.a.BackgroundPlaceholder,
					isLoading: !1,
					layout: l.g.Classic
				}), n.a.createElement("div", {
					className: m.a.PrimaryText
				}, t))
			};
			var p = e => {
				let {
					className: t,
					profileName: s,
					timeSort: r = o.jc.ALL
				} = e;
				return n.a.createElement(u, {
					className: t
				}, r === o.jc.ALL ? i.fbt._("hmm... {profileName} hasn't commented on anything", [i.fbt._param("profileName", `u/${s}`)], {
					hk: "1MHn3t"
				}) : i.fbt._("hmm... {profileName} hasn't commented recently", [i.fbt._param("profileName", `u/${s}`)], {
					hk: "qN3uL"
				}))
			};
			var h = e => {
				let {
					className: t,
					profileName: s,
					timeSort: r = o.jc.ALL
				} = e;
				return n.a.createElement(u, {
					className: t
				}, r === o.jc.ALL ? i.fbt._("hmm... {profileName} hasn't posted anything", [i.fbt._param("profileName", `u/${s}`)], {
					hk: "28vBEd"
				}) : i.fbt._("hmm... {profileName} hasn't posted recently", [i.fbt._param("profileName", `u/${s}`)], {
					hk: "38GhqN"
				}))
			};
			var b = e => {
					let {
						className: t,
						text: s
					} = e;
					return n.a.createElement(u, {
						className: t
					}, s)
				},
				g = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				f = s("./src/reddit/components/EmptyProfile/forbidden.m.less"),
				y = s.n(f);
			const {
				fbt: v
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var x = () => n.a.createElement("div", {
				className: y.a.container
			}, n.a.createElement(g.a, {
				className: y.a.hideIcon
			}), n.a.createElement("h3", {
				className: y.a.title
			}, v._("You do not have permission to access this resource", null, {
				hk: "10cPyp"
			})), n.a.createElement("p", {
				className: y.a.subtitle
			}, v._("You can only look at your own saved posts and comments", null, {
				hk: "3pWGtF"
			})))
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2cB6ysPhgaYtknebHcCXGH",
				container: "_2cB6ysPhgaYtknebHcCXGH",
				Component: "qQD1kUtHq2K4gyBqJrEnF",
				component: "qQD1kUtHq2K4gyBqJrEnF",
				"m-consider-sidebar": "gd0BrpRBoY73xB5YwvDWU",
				mConsiderSidebar: "gd0BrpRBoY73xB5YwvDWU"
			}
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				r = s.n(i),
				n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/constants/componentSizes.ts"),
				l = s("./src/reddit/constants/postLayout.ts"),
				c = s("./src/reddit/constants/screenWidths.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less"),
				p = s.n(u),
				h = s("./src/lib/lessComponent.tsx");
			const b = Object(m.u)(),
				g = Object(o.c)({
					layout: m.S
				}),
				f = Object(n.b)(g);
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
					const e = this.props.offsetLeft + 2 * a.m + a.q + a.r,
						t = c.a - e,
						s = a.g - t,
						i = c.a + s + (this.props.bladeOpen ? a.a : 0);
					return this.props.layout !== l.g.Large ? null : r.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n            @media (min-width: ${i}px) {\n              .${p.a.Component} {\n                left: calc((100% + var(--layoutNavigation-considerateNav-offsetLeft) - ${a.g+a.q+a.r}px) / 2);\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ${a.r}px) / 2);\n              }\n\n              .${p.a.Component}.${p.a["m-consider-sidebar"]} {\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ${a.g+a.q+a.r}px) / 2);\n              }\n            }\n          `
						}
					})
				}
				render() {
					const e = Object(d.a)(this.props.className, p.a.Component, {
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
			t.a = b(f(h.a.wrapped(y, "Component", p.a)))
		},
		"./src/reddit/components/OverviewChronoComment/index.m.less": function(e, t, s) {
			e.exports = {
				commentOuterWrapper: "_1g70Ndz7edo5LA6hie1Gkt",
				commentWrapper: "_324SLny5spJ682AiI73uBO",
				isLast: "_2nq8DZns5TUNKoe0aDsW4K",
				isAwarded: "_3L-s9jSlG2xSayzJ_b7J1t",
				isNightmodeOn: "Cd5iGkxl9fzuGE1cWMHC4",
				isFirst: "q4WgOJAmvFRFKX_yrlG-1",
				commentSeparator: "_3H85Xyyv141qju7KQFQ_d5",
				commentContentWrapper: "_27uDfyCMhkucg8xWyoTLYp"
			}
		},
		"./src/reddit/components/OverviewChronoList/ListItem.m.less": function(e, t, s) {
			e.exports = {
				OverviewCommentPost: "_2mg6JuVCrcHWJkUQvZXFcZ",
				overviewCommentPost: "_2mg6JuVCrcHWJkUQvZXFcZ",
				ClassicPost: "OZOlqlxhdnIVuS5MQ5yMi",
				classicPost: "OZOlqlxhdnIVuS5MQ5yMi"
			}
		},
		"./src/reddit/components/OverviewChronoList/ListItem.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				r = s.n(i),
				n = s("./src/reddit/components/ClassicPost/index.tsx"),
				o = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/react-redux/es/index.js")),
				d = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/constants/gold.ts"),
				l = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/components/CommentContainer/index.tsx"),
				p = s("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				h = s("./src/reddit/helpers/getClickInfo.ts"),
				b = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				g = s("./src/reddit/selectors/commentSelector.ts"),
				f = s("./src/reddit/selectors/communityAwards.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/components/OverviewChronoComment/index.m.less"),
				x = s.n(v);
			const w = Object(o.b)(() => Object(d.c)({
				comment: g.b,
				isAwarded: (e, t) => {
					const s = Object(g.b)(e, t);
					return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
						const s = Object(f.a)(e, t);
						return s && s.coinPrice >= a.g
					})
				},
				isNightmodeOn: y.eb
			}), e => ({
				openPost: t => e(Object(m.L)(t))
			}));
			var C = Object(c.a)(w(e => {
					const {
						comment: t,
						commentId: s,
						first: i,
						isAwarded: n,
						isNightmodeOn: o,
						last: d,
						openPost: a,
						showModTools: c
					} = e;
					if (!t) return null;
					return r.a.createElement(u.a, {
						comment: t,
						onClick: (e, t) => {
							a({
								postOrComment: t,
								clickInfo: Object(h.a)(e),
								queryParams: {
									context: 3
								}
							})
						},
						style: {
							background: Object(b.e)(e)
						}
					}, r.a.createElement("div", {
						className: Object(l.a)(x.a.commentOuterWrapper, {
							[x.a.isLast]: d,
							[x.a.isAwarded]: n,
							[x.a.isNightmodeOn]: o
						})
					}, r.a.createElement("div", {
						className: Object(l.a)(x.a.commentWrapper, {
							[x.a.isFirst]: i
						})
					}, r.a.createElement("div", {
						className: x.a.commentSeparator
					}), t.parentId && r.a.createElement("div", {
						className: x.a.commentSeparator
					}), r.a.createElement("div", {
						className: x.a.commentContentWrapper
					}, r.a.createElement(p.a, {
						commentId: s,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: !0,
						showModTools: c,
						isExpanded: !0
					})))))
				})),
				E = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				_ = s("./src/reddit/contexts/PageLayer/index.tsx"),
				k = s("./src/reddit/helpers/isComment.ts"),
				O = s("./src/reddit/components/OverviewChronoList/ListItem.m.less"),
				S = s.n(O),
				j = s("./src/lib/lessComponent.tsx");

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const I = Object(_.u)({
					currentProfileName: _.i,
					isCommentsPage: _.x,
					isCommentPermalink: _.w,
					isProfilePostListing: _.L,
					pageLayer: e => e
				}),
				N = j.a.wrapped(E.a, "OverviewCommentPost", S.a),
				L = j.a.wrapped(n.default, "ClassicPost", S.a);
			t.a = I(e => {
				const {
					itemId: t,
					isFirstInCommentList: s,
					isLastInCommentList: i,
					allowModToolsUnderComments: n,
					height: o,
					width: d,
					...a
				} = e;
				return Object(k.a)(t) ? s ? r.a.createElement(r.a.Fragment, null, r.a.createElement(N, P({}, a, {
					availableWidth: d,
					commentId: t
				})), r.a.createElement(C, {
					commentId: t,
					first: s,
					last: i,
					showModTools: n
				})) : r.a.createElement(C, {
					commentId: t,
					first: s,
					last: i,
					showModTools: n
				}) : r.a.createElement(L, P({}, a, {
					inSubredditOrProfile: !1
				}))
			})
		},
		"./src/reddit/components/ProfileItemList/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var i = s("./node_modules/lodash/last.js"),
				r = s.n(i),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				d = s("./src/lib/constants/index.ts"),
				a = s("./src/lib/opener/index.ts"),
				l = s("./src/reddit/constants/adEvents.ts"),
				c = s("./src/reddit/components/PostList/LoadMore.tsx"),
				m = s("./src/reddit/components/PostList/Placeholder.tsx"),
				u = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				p = s("./src/reddit/components/Scroller/Simple.tsx"),
				h = s("./src/reddit/constants/componentSizes.ts"),
				b = s("./src/reddit/helpers/getClickInfo.ts"),
				g = s("./src/reddit/helpers/isComment.ts"),
				f = s("./src/reddit/contexts/Post/index.tsx"),
				y = s("./src/lib/LRUCache/index.ts"),
				v = s("./src/telemetry/index.ts"),
				x = s("./src/telemetry/models/Timer.ts"),
				w = s("./src/reddit/components/PostList/index.m.less"),
				C = s.n(w);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = 500,
				k = new y.a(_),
				O = new y.a(_),
				S = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				j = (e, t, s, i, r, n) => {
					const o = `entered-${e}-${t}-${s?`last-${i}-${r}`:""}`;
					let d = k.get(o);
					return void 0 === d && (d = () => {
						s && n.onBottomViewed(i, r), n.trackOnPostEnteredViewport(e, t)
					}, k.set(o, d)), d
				},
				P = (e, t) => {
					const s = `click-${e}`;
					let i = O.get(s);
					return void 0 === i && (i = (e, s) => {
						s.isSponsored && t.fireAdPixelsOfType(s, l.a.Click), s.isSponsored && s.source && s.source.outboundUrl ? Object(a.e)(s.source.outboundUrl, a.d.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(b.a)(e)
						})
					}, O.set(s, i)), i
				};
			class I extends o.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new y.a(_), this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}
				}
				UNSAFE_componentWillMount() {
					this.timerId && v.c.cancel(this.timerId), this.props.itemIds.length && (this.timerId = v.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = v.c.end(this.timerId);
						setTimeout(() => Object(v.b)(d.n.Redesign, {
							type: "mount",
							component: "overviewChronoList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && v.c.cancel(this.timerId), e.itemIds.length && (this.timerId = v.c.start()), (e.listingKey !== this.props.listingKey || e.itemIds.length !== this.props.itemIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (this.checkAndSendScreenview(), this.timerId && v.c.has(this.timerId)) {
						const e = v.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(v.b)(d.n.Redesign, {
							duration: e,
							type: "mount",
							component: "overviewChronoList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && v.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && r()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props;
					return v.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const i = v.c.end(e);
					setTimeout(() => s(t(i, x.TimerType.InApp)), 0)
				}
				showPlaceholder() {
					const {
						apiError: e,
						apiPending: t
					} = this.props;
					return Boolean(e) || !1 !== t
				}
				hasPosts() {
					return this.props.itemIds.length > 0
				}
				isLoadingMore() {
					const {
						loadMore: e,
						itemIds: t
					} = this.props;
					return Boolean(e && e.token) && t.length > 0
				}
				shouldComponentUpdate(e) {
					const {
						itemIds: t,
						...s
					} = this.props, {
						itemIds: i,
						...r
					} = e, n = Object.keys(s), o = Object.keys(r);
					return o.length !== n.length || !!o.some(e => s[e] !== r[e])
				}
				scrollChildForItem(e, t, s, i, r, n) {
					const {
						listingKey: d,
						listingName: a,
						postClickEventFactory: l
					} = this.props, c = `post-${n}-${e}-${t}-${s?"last-index":""}-${a}-${d}`;
					let m;
					if (void 0 === (m = this.scrollChildCache.get(c))) {
						const {
							inSubredditOrProfile: t,
							itemIdToPostId: u
						} = this.props, p = u[e], h = `overview-chrono-list-item-[layout: ${n}]-[itemId: ${e}]`, b = j(p, n, s, d, a, this.props), g = {
							key: h,
							eventFactory: l,
							inSubredditOrProfile: t,
							isFirstInCommentList: i,
							isLastInCommentList: r,
							isOverlay: !1,
							itemId: e,
							last: s,
							layout: n,
							onClickPost: P(e, this.props),
							postId: p
						}, y = this.props.itemComponent;
						m = {
							estHeight: this.props.estimateItemHeight(e, n, i),
							id: e,
							isFocusable: !1,
							trackOnEnteredViewport: b,
							render: e => o.a.createElement(f.a, {
								postId: g.postId
							}, o.a.createElement(y, E({}, g, e)))
						}, this.scrollChildCache.set(c, m)
					}
					return m
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return o.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						layout: s,
						onTryAgain: i
					} = this.props;
					return o.a.createElement("div", {
						className: C.a.placeholder
					}, o.a.createElement(m.a, {
						className: t,
						isLoading: !e,
						layout: s
					}), !!e && o.a.createElement(u.a, {
						apiError: e,
						onTryAgain: i
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						layout: s,
						onLoadMore: i
					} = this.props;
					return o.a.createElement("div", {
						className: C.a.placeholder
					}, o.a.createElement(c.a, {
						isLoading: !!t,
						layout: s,
						countOverride: S[s]
					}), !!e && o.a.createElement(u.a, {
						apiError: e,
						onTryAgain: i
					}))
				}
				renderList() {
					const {
						commentsById: e,
						layout: t,
						loadMore: s,
						itemIds: i,
						onLoadMore: r
					} = this.props, n = i.map((s, r, n) => {
						const o = r === i.length - 1,
							d = r && i[r - 1],
							a = !o && i[r + 1],
							l = !!Object(g.a)(s) && (!d || !Object(g.a)(d) || e[d].postId !== e[s].postId),
							c = !!Object(g.a)(s) && (!a || !Object(g.a)(a) || e[a].postId !== e[s].postId);
						return this.scrollChildForItem(s, r, o, l, c, t)
					});
					return o.a.createElement("div", null, o.a.createElement(p.b, {
						innerRef: this.updateScrollerRef,
						className: this.props.className,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						enableElementHiding: !0,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: s && s.token ? s.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: r,
						viewportTopPadding: h.f + h.s
					}, n), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			t.a = I
		},
		"./src/reddit/components/ProfileNavMenu/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2vH__bwuub4wzWRqcvhh3m",
				menuContainer: "LSvZ4rzt8zI_VpizIGPDF",
				dropdown: "_3ulncTe6l8jRF_TM6HZZFk",
				mainLink: "_1JNzvBgvzSnX27gUBKqqmJ",
				isActive: "Zvl1svdkcyUlRhf5RHGKc",
				dropdownLink: "_3FXf9zUWKXtpapv4rBHh1L"
			}
		},
		"./src/reddit/components/ProfileNavMenu/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/fastdom/index.ts"),
				n = s("./node_modules/lodash/isEqual.js"),
				o = s.n(n),
				d = s("./node_modules/lodash/throttle.js"),
				a = s.n(d),
				l = s("./node_modules/react/index.js"),
				c = s.n(l),
				m = s("./node_modules/react-redux/es/index.js"),
				u = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				p = s("./node_modules/reselect/es/index.js"),
				h = s("./src/config.ts"),
				b = s("./src/higherOrderComponents/asTooltip.tsx"),
				g = s("./src/lib/classNames/index.ts"),
				f = s("./src/lib/constants/index.ts"),
				y = s("./src/reddit/actions/tooltip.ts"),
				v = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx"),
				x = s("./src/reddit/constants/componentSizes.ts"),
				w = s("./src/reddit/contexts/PageLayer/index.tsx"),
				C = s("./src/reddit/controls/Dropdown/index.tsx"),
				E = s("./src/reddit/controls/InternalLink/index.tsx"),
				_ = s("./src/reddit/icons/fonts/index.tsx"),
				k = s("./src/reddit/models/Profile/index.ts"),
				O = s("./src/reddit/featureFlags/index.ts"),
				S = s("./src/reddit/selectors/tooltip.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				P = s("./src/reddit/selectors/userPrefs.ts"),
				I = s("./src/reddit/components/ProfileNavMenu/index.m.less"),
				N = s.n(I);

			function L() {
				return (L = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const T = Object(w.u)({
					routeName: w.Z,
					privateListingType: w.j
				}),
				R = Object(p.c)({
					isDropdownMenuOpen: e => Object(S.a)(e) === A,
					isOwnProfile: (e, t) => Object(j.X)(e, t.profileName),
					isSnoovatar30Enabled: O.d.snoovatar30,
					isSubscriptionsPinned: P.b
				}),
				F = Object(b.a)(C.a),
				A = "profile-nav-menu-tooltip",
				B = x.g + x.r + x.q;
			var M;
			t.a = T(Object(m.b)(R, e => ({
					toggleTooltip: t => e(Object(y.h)({
						tooltipId: t
					}))
				}))(e => {
					let {
						isDropdownMenuOpen: t,
						isOwnProfile: s,
						privateListingType: i,
						profileName: n,
						routeName: d,
						toggleTooltip: m,
						isSnoovatar30Enabled: u,
						isSubscriptionsPinned: p,
						viewBlockedConsent: h
					} = e;
					const [b, f] = Object(l.useState)(!1), y = Object(l.useRef)(null), [w, C] = Object(l.useState)([]), [E, k] = Object(l.useState)([]);
					return Object(l.useEffect)(() => {
						const e = U({
							profileName: n,
							isOwnProfile: s,
							routeName: d,
							privateListingType: i,
							isSnoovatar30Enabled: u,
							viewBlockedConsent: h
						});
						C(e.filter(e => e.position === M.MENU));
						const t = [],
							l = a()(() => {
								const s = document.documentElement.clientWidth - 2 * x.q,
									i = s > B ? B : s;
								let r = 42;
								t.forEach(t => {
									r += t.offsetWidth;
									const s = e.find(e => e.text.toString().toLowerCase() === t.text);
									s.position = r > i ? M.DROPDOWN : M.MENU
								});
								const n = e.filter(e => e.position === M.MENU);
								C(e => o()(n, e) ? e : n);
								const d = e.filter(e => e.position === M.DROPDOWN);
								k(e => o()(d, e) ? e : d), f(d.length > 0)
							}, 50);
						return r.a.read(() => {
							const e = y.current;
							e && (e.childNodes.forEach((e, s) => {
								t.push({
									text: e.textContent.toLowerCase(),
									offsetWidth: e.offsetWidth
								})
							}), l())
						}), window.addEventListener("resize", l), () => {
							window.removeEventListener("resize", l)
						}
					}, [n, s, d, i, u, h]), c.a.createElement("div", {
						className: N.a.container
					}, c.a.createElement(v.a, {
						bladeOpen: !1,
						offsetLeft: p ? x.u : 0,
						render: () => c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
							className: N.a.menuContainer,
							ref: y
						}, w.map(e => c.a.createElement(G, L({}, e, {
							key: e.key
						})))), b && c.a.createElement("button", {
							className: Object(g.a)(N.a.mainLink),
							id: A,
							onClick: () => m(A)
						}, c.a.createElement(_.a, {
							name: "overflow_horizontal"
						})), b && c.a.createElement(F, {
							className: N.a.dropdown,
							isOpen: t,
							tooltipId: A
						}, E.map(e => c.a.createElement(W, L({}, e, {
							key: e.key
						})))))
					}))
				})),
				function(e) {
					e.MENU = "menu", e.DROPDOWN = "dropdown"
				}(M || (M = {}));
			const G = e => {
					let {
						isActive: t,
						text: s,
						url: i,
						internal: r
					} = e;
					return r ? c.a.createElement(E.a, {
						className: Object(g.a)(N.a.mainLink, {
							[N.a.isActive]: t
						}),
						to: i
					}, s) : c.a.createElement("a", {
						className: Object(g.a)(N.a.mainLink, {
							[N.a.isActive]: t
						}),
						href: i
					}, s)
				},
				W = e => {
					let {
						isActive: t,
						internal: s,
						url: i,
						text: r
					} = e;
					return s ? c.a.createElement(u.a, {
						className: Object(g.a)(N.a.dropdownLink, {
							[N.a.isActive]: t
						}),
						to: i,
						rel: "nofollow noopener noreferrer",
						role: "listitem"
					}, r) : c.a.createElement("a", {
						className: Object(g.a)(N.a.dropdownLink),
						href: i,
						rel: "nofollow noopener noreferrer",
						role: "listitem",
						target: "_blank"
					}, r)
				},
				U = e => {
					let {
						profileName: t,
						isOwnProfile: s,
						routeName: r,
						privateListingType: n,
						isSnoovatar30Enabled: o,
						viewBlockedConsent: d
					} = e;
					const a = s ? [{
						internal: !0,
						isActive: r === f.Ob.PROFILE_PRIVATE && n === k.b.Saved,
						key: "profile.mainmenu.saved",
						text: i.fbt._("Saved", null, {
							hk: "2w1YRh"
						}),
						url: `/user/${t}/saved/`,
						position: M.MENU
					}, {
						internal: !0,
						isActive: r === f.Ob.PROFILE_PRIVATE && n === k.b.Hidden,
						key: "profile.mainmenu.hidden",
						text: i.fbt._("Hidden", null, {
							hk: "225tka"
						}),
						url: `/user/${t}/hidden/`,
						position: M.MENU
					}, {
						internal: !0,
						isActive: r === f.Ob.PROFILE_PRIVATE && n === k.b.Upvoted,
						key: "profile.mainmenu.upvoted",
						text: i.fbt._("Upvoted", null, {
							hk: "RKwFZ"
						}),
						url: `/user/${t}/upvoted/`,
						position: M.MENU
					}, {
						internal: !0,
						isActive: r === f.Ob.PROFILE_PRIVATE && n === k.b.Downvoted,
						key: "profile.mainmenu.downvoted",
						text: i.fbt._("Downvoted", null, {
							hk: "2F9IL4"
						}),
						url: `/user/${t}/downvoted/`,
						position: M.MENU
					}] : [];
					s ? (a.push({
						internal: !0,
						isActive: r === f.Ob.PROFILE_PRIVATE && n === k.b.ReceivedGildings,
						key: "profile.mainmenu.receiverGildings",
						text: i.fbt._("Awards received", null, {
							hk: "iwLBV"
						}),
						url: `/user/${t}/gilded/`,
						position: M.MENU
					}), a.push({
						internal: !0,
						isActive: r === f.Ob.PROFILE_PRIVATE && n === k.b.GivenGildings,
						key: "profile.mainmenu.givenGildings",
						text: i.fbt._("Awards given", null, {
							hk: "2UPYZc"
						}),
						url: `/user/${t}/gilded/given/`,
						position: M.MENU
					})) : a.push({
						internal: !1,
						isActive: !1,
						key: "profile.mainmenu.gildedLegacy",
						text: i.fbt._("Awards received (legacy)", null, {
							hk: "1YgfYU"
						}),
						url: `${h.a.oldRedditUrl}/user/${t}/gilded/`,
						position: M.MENU
					});
					const l = o ? [{
							internal: !0,
							isActive: r === f.Ob.PROFILE_SNOOBUILDER,
							key: "profile.mainmenu.snoobuilder",
							text: i.fbt._("Snoobuilder", null, {
								hk: "3SSKff"
							}),
							url: `/user/${t}/snoo/`,
							position: M.MENU
						}] : [],
						c = d ? "?consent=true" : "";
					return [{
						internal: !0,
						isActive: r === f.Ob.PROFILE_OVERVIEW,
						key: "profile.mainmenu.overview",
						text: i.fbt._("Overview", null, {
							hk: "2IBbqy"
						}),
						url: `/user/${t}/${c}`,
						position: M.MENU
					}, {
						internal: !0,
						isActive: r === f.Ob.PROFILE_POSTS,
						key: "profile.mainmenu.posts",
						text: i.fbt._("Posts", null, {
							hk: "a1BoF"
						}),
						url: `/user/${t}/posts/${c}`,
						position: M.MENU
					}, {
						internal: !0,
						isActive: r === f.Ob.PROFILE_COMMENTS,
						key: "profile.mainmenu.comments",
						text: i.fbt._("Comments", null, {
							hk: "2VwjOc"
						}),
						url: `/user/${t}/comments/${c}`,
						position: M.MENU
					}, ...l, ...a]
				}
		},
		"./src/reddit/components/ProfileSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/reddit/components/SidebarContainer/index.tsx"),
				a = s("./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx"),
				l = s("./src/reddit/components/SidebarProfileMultireddits/index.tsx"),
				c = s("./src/reddit/components/SidebarProfilePowerupContributions/index.tsx"),
				m = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				u = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				p = s("./src/reddit/components/SidebarTrophyCase/index.tsx"),
				h = s("./src/reddit/components/Widgets/ConnectedAccounts/index.tsx"),
				b = s("./src/reddit/constants/posts.ts"),
				g = s("./src/reddit/selectors/experiments/econ/index.ts");
			const f = Object(i.a)({
					resolved: {},
					chunkName: () => "reddit-components-ProfileIdCard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-ProfileIdCard").then(s.bind(null, "./src/reddit/components/ProfileIdCard/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ProfileIdCard/index.tsx"
					}
				}),
				y = e => {
					const t = Object(o.e)(e => Object(g.j)(e));
					return n.a.createElement(d.a, {
						className: e.className
					}, n.a.createElement(f, {
						profileName: e.profileName,
						isOverlay: e.isOverlay
					}), n.a.createElement(h.a, {
						subredditOrProfile: {
							name: e.profileName,
							type: b.a.PROFILE
						}
					}), n.a.createElement(a.a, {
						profileName: e.profileName
					}), n.a.createElement(l.a, {
						profileName: e.profileName
					}), !t && n.a.createElement(m.a, null, n.a.createElement(c.a, {
						profileName: e.profileName
					})), n.a.createElement(m.a, null, n.a.createElement(p.a, {
						profileName: e.profileName
					})), n.a.createElement(u.a, {
						hideBackToTop: e.hideBackToTop
					}))
				};
			y.defaultProps = {
				isOverlay: !1
			}, t.a = y
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/SidebarContainer/index.m.less"),
				n = s.n(r);
			t.a = i.a.div("container", n.a)
		},
		"./src/reddit/components/SidebarExpandableList/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/take.js"),
				n = s.n(r),
				o = s("./node_modules/react/index.js"),
				d = s.n(o),
				a = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = s("./src/reddit/layout/row/Inline/index.tsx"),
				p = s("./src/reddit/layout/row/RightAlign/index.tsx");
			const h = e => {
				const {
					className: t,
					hasMoreItems: s,
					headerButton: r,
					items: a,
					minimizedLength: h,
					onLoadMore: b,
					pending: g,
					renderItem: f,
					title: y
				} = e, [v, x] = Object(o.useState)(!1), w = a.length > h || s, C = (!w || v ? a : n()(a, h)).map(e => f({
					item: e
				})), E = () => {
					v || x(!0), v && !s && x(!1), s && b && b()
				};
				return d.a.createElement(l.a, {
					className: t,
					headerButton: r,
					title: y
				}, C, d.a.createElement(u.a, null, d.a.createElement(p.a, null, w && (() => {
					const e = !v || s && b ? i.fbt._("View More", null, {
						hk: "1RK8uA"
					}) : i.fbt._("View Less", null, {
						hk: "1M72mK"
					});
					return d.a.createElement(c.r, {
						onClick: E
					}, g ? d.a.createElement(m.a, {
						sizePx: 10
					}) : e)
				})())))
			};
			h.defaultProps = {
				minimizedLength: a.Ub
			}, t.a = h
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				r = s.n(i),
				n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				a = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				m = s("./src/reddit/constants/experiments.ts"),
				u = s("./src/reddit/constants/location.ts"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/helpers/getReredditLinkWithYear/index.ts"),
				b = s("./src/reddit/helpers/trackers/navigation.ts"),
				g = s("./src/reddit/selectors/experiments/countrySites.ts"),
				f = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				y = s("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				v = s("./src/reddit/selectors/meta.ts"),
				x = s("./src/reddit/components/SidebarFooter/index.m.less"),
				w = s.n(x);
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js"), E = a.a.a("Link", w.a), _ = Object(o.c)({
				countryCode: v.b,
				d2xPdpSideRailRecsVariant: f.a,
				isCountrySitesEnabled: g.b,
				isD2xPdpSideRailRecsEnabled: f.b,
				isNavbarLikeMwebEnabled: y.a
			}), k = Object(n.b)(_), O = Object(p.u)({
				isFrontpage: p.A,
				isCountrySitePage: p.y
			}), S = e => {
				let {
					countryCode: t,
					reredditContent: s
				} = e;
				return r.a.createElement("div", {
					className: w.a.GreyRereddit
				}, s, r.a.createElement(E, {
					href: "https://www.reddithelp.com"
				}, C._("help", null, {
					hk: "4lyYaD"
				})), r.a.createElement(E, {
					href: "https://www.reddit.com/coins"
				}, C._("Reddit coins", null, {
					hk: "32iMaN"
				})), r.a.createElement(E, {
					href: "https://www.reddit.com/premium"
				}, C._("Reddit premium", null, {
					hk: "RuO3A"
				})), !!u.c[t] && r.a.createElement(r.a.Fragment, null, r.a.createElement(E, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, C._("Impressum", null, {
					hk: "4cKXSI"
				})), r.a.createElement(E, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, C._("Transparency report", null, {
					hk: "3CgBdG"
				})), r.a.createElement(E, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: w.a.NoneCapitalizeLink
				}, C._("Report NetzDG Content", null, {
					hk: "1nszCF"
				}))), r.a.createElement(E, {
					href: "https://www.redditinc.com/"
				}, C._("about", null, {
					hk: "1sqJKs"
				})), r.a.createElement(E, {
					href: "https://www.redditinc.com/careers"
				}, C._("careers", null, {
					hk: "26ABvc"
				})), r.a.createElement(E, {
					href: "https://www.redditinc.com/press"
				}, C._("press", null, {
					hk: "2Qmgdz"
				})), r.a.createElement(E, {
					href: "https://www.redditinc.com/advertising"
				}, C._("advertise", null, {
					hk: "Mt40U"
				})), r.a.createElement(E, {
					href: "http://www.redditblog.com/"
				}, C._("blog", null, {
					hk: "46IQJw"
				})), r.a.createElement(E, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, C._("Terms", null, {
					hk: "4qRzfE"
				})), r.a.createElement(E, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, C._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(E, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, C._("Privacy policy", null, {
					hk: "10K04G"
				})), r.a.createElement(E, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, C._("Mod policy", null, {
					hk: "2gYc2T"
				})), r.a.createElement("div", {
					className: w.a.Copyright
				}, C._("Reddit Inc © {year}. All rights reserved", [C._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			};
			t.a = O(k(Object(l.c)(e => {
				const t = Object(n.f)().getState(),
					s = Object(g.a)(t, Object(d.c)());
				if (e.isNavbarLikeMwebEnabled) return e.isFrontpage ? r.a.createElement(c.a, {
					className: w.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, r.a.createElement("div", {
					className: w.a.LinkContainer
				}, r.a.createElement("div", {
					className: w.a.Column
				}, r.a.createElement(E, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, C._("User Agreement", null, {
					hk: "2RA6JL"
				})), r.a.createElement(E, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, C._("Privacy policy", null, {
					hk: "10K04G"
				}))), r.a.createElement("div", {
					className: w.a.Column
				}, r.a.createElement(E, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, C._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(E, {
					href: "https://www.redditinc.com/policies/moderator-guidelines"
				}, C._("Moderator Guidelines", null, {
					hk: "2O9otm"
				})))), r.a.createElement("div", {
					className: w.a.Copyright
				}, C._("© {year} Reddit, Inc. All rights reserved.", [C._param("year", (new Date).getFullYear().toString())], {
					hk: "sR7zP"
				}))) : null;
				const i = t => {
					const i = {
						de: "Deutsch",
						fr: "Français",
						es: "Español",
						en: "USA/Global",
						it: "Italiano"
					};
					return s.includes(t) || "en" === t ? r.a.createElement(E, {
						href: "en" === t ? "/" : `/${t}/`,
						onClick: () => e.sendEvent(Object(b.a)(t))
					}, i[t]) : null
				};
				if (e.isD2xPdpSideRailRecsEnabled) {
					const t = e.d2xPdpSideRailRecsVariant === m.yc.GreyRereddit ? e.reredditButtons : [];
					return r.a.createElement(S, {
						reredditContent: t,
						countryCode: e.countryCode
					})
				}
				return r.a.createElement(c.a, {
					className: w.a.Widget,
					redditStyle: e.redditStyle,
					contentOnly: !0
				}, r.a.createElement("div", {
					className: w.a.LinkContainer
				}, r.a.createElement("div", {
					className: w.a.Column
				}, r.a.createElement(E, {
					href: "https://www.reddithelp.com"
				}, C._("help", null, {
					hk: "4lyYaD"
				})), r.a.createElement(E, {
					href: "https://www.reddit.com/coins"
				}, C._("Reddit coins", null, {
					hk: "32iMaN"
				})), r.a.createElement(E, {
					href: "https://www.reddit.com/premium"
				}, C._("Reddit premium", null, {
					hk: "RuO3A"
				})), e.isFrontpage && r.a.createElement(r.a.Fragment, null, r.a.createElement(E, {
					href: "https://www.reddit.com/subreddits/a-1/"
				}, C._("Communities", null, {
					hk: "3CJu37"
				})), r.a.createElement(E, {
					href: `https://www.reddit.com${Object(h.a)()}`
				}, C._("Rereddit", null, {
					hk: "1z3k7C"
				})), r.a.createElement(E, {
					href: "https://www.reddit.com/topics/a-1/"
				}, C._("Topics", null, {
					hk: "349RFt"
				}))), !!u.c[e.countryCode] && r.a.createElement(r.a.Fragment, null, r.a.createElement(E, {
					href: "https://www.redditinc.com/de/policies/user-agreement"
				}, C._("Impressum", null, {
					hk: "4cKXSI"
				})), r.a.createElement(E, {
					href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
				}, C._("Transparency report", null, {
					hk: "3CgBdG"
				})), r.a.createElement(E, {
					href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
					className: w.a.NoneCapitalizeLink
				}, C._("Report NetzDG Content", null, {
					hk: "1nszCF"
				})))), r.a.createElement("div", {
					className: w.a.Column
				}, r.a.createElement(E, {
					href: "https://www.redditinc.com/"
				}, C._("about", null, {
					hk: "1sqJKs"
				})), r.a.createElement(E, {
					href: "https://www.redditinc.com/careers"
				}, C._("careers", null, {
					hk: "26ABvc"
				})), r.a.createElement(E, {
					href: "https://www.redditinc.com/press"
				}, C._("press", null, {
					hk: "2Qmgdz"
				})), r.a.createElement(E, {
					href: "https://www.redditinc.com/advertising"
				}, C._("advertise", null, {
					hk: "Mt40U"
				})), r.a.createElement(E, {
					href: "http://www.redditblog.com/"
				}, C._("blog", null, {
					hk: "46IQJw"
				})), r.a.createElement(E, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, C._("Terms", null, {
					hk: "4qRzfE"
				})), r.a.createElement(E, {
					href: "https://www.redditinc.com/policies/content-policy"
				}, C._("Content policy", null, {
					hk: "1DyxZS"
				})), r.a.createElement(E, {
					href: "https://www.redditinc.com/policies/privacy-policy"
				}, C._("Privacy policy", null, {
					hk: "10K04G"
				})), r.a.createElement(E, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, C._("Mod policy", null, {
					hk: "2gYc2T"
				})))), (e.isCountrySitePage || e.isFrontpage && e.isCountrySitesEnabled) && r.a.createElement("div", {
					className: w.a.CountryLinkContainer
				}, r.a.createElement("div", {
					className: w.a.Column
				}, i("en"), i("fr"), i("it")), r.a.createElement("div", {
					className: w.a.Column
				}, i("de"), i("es"))), r.a.createElement("div", {
					className: w.a.Copyright
				}, C._("Reddit Inc © {year}. All rights reserved", [C._param("year", (new Date).getFullYear().toString())], {
					hk: "4BrCkA"
				})))
			})))
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3thndRe559UZy14xE1gZ_"
			}
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/profile/index.ts"),
				l = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				c = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				m = s("./src/reddit/models/User/index.ts"),
				u = s("./src/reddit/selectors/profile.ts"),
				p = s("./src/reddit/selectors/subscriptions.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				b = s("./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less"),
				g = s.n(b);
			const f = Object(d.c)({
					currentUser: h.l,
					moderated: u.n,
					subscriptions: p.e,
					hasMoreModerated: u.d,
					loadMorePending: u.a
				}),
				y = Object(o.b)(f, (e, t) => ({
					onLoadMoreGqlModeratedSubreddits: () => e(Object(a.c)(t.profileName))
				}), (e, t, s) => ({
					...s,
					...e,
					...t,
					onLoadMore: () => {
						e.hasMoreModerated && t.onLoadMoreGqlModeratedSubreddits()
					}
				})),
				v = e => {
					let {
						item: t
					} = e;
					return n.a.createElement(c.a, {
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
					moderated: s,
					profileName: r,
					subscriptions: o,
					hasMoreModerated: d,
					onLoadMore: a,
					loadMorePending: c
				} = e;
				if (0 === s.length) return null;
				const u = t && Object(m.e)(t).toLowerCase() === r.toLowerCase() ? i.fbt._("You're a moderator of these communities", null, {
						hk: "2YoCxy"
					}) : i.fbt._("Moderator of these communities", null, {
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
					}(s, new Set(o));
				return n.a.createElement(l.a, {
					className: g.a.container,
					title: u,
					items: p,
					renderItem: v,
					hasMoreItems: d,
					onLoadMore: a,
					pending: c
				})
			})
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.m.less": function(e, t, s) {
			e.exports = {
				listItem: "_3lbnTBPV5H4wHdRz5ATVc9",
				icon: "Vm0_pCIi1Z6JWa0EVf6jK",
				description: "_2xcc4c-4TOL7KOsJidXtl",
				name: "_3nt8_GidTIn88UciXx27E7",
				meta: "_3iC0Hyv57ON8dAtU94HFE_"
			}
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./node_modules/reselect/es/index.js"),
				l = s("./src/reddit/actions/profile/index.ts"),
				c = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				m = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				u = s("./src/reddit/selectors/profile.ts"),
				p = s("./src/reddit/components/SidebarProfileMultireddits/index.m.less"),
				h = s.n(p);
			const b = Object(a.c)({
					hasMoreMultireddits: u.e,
					loadMorePending: u.b,
					multireddits: u.o
				}),
				g = Object(o.b)(b, (e, t) => ({
					onLoadMoreMultireddits: () => e(Object(l.g)(t.profileName, !0))
				}), (e, t, s) => ({
					...s,
					...e,
					...t,
					onLoadMore: () => {
						e.hasMoreMultireddits && t.onLoadMoreMultireddits()
					}
				})),
				f = e => {
					let {
						item: t
					} = e;
					return n.a.createElement("div", {
						className: h.a.listItem,
						key: t.url
					}, n.a.createElement("img", {
						className: h.a.icon,
						src: t.icon
					}), n.a.createElement("div", {
						className: h.a.description
					}, n.a.createElement(d.a, {
						className: h.a.name,
						to: t.url
					}, t.displayText), n.a.createElement("div", {
						className: h.a.meta
					}, i.fbt._({
						"*": "{communities} communities",
						_1: "1 community"
					}, [i.fbt._plural(t.subredditCount, "communities")], {
						hk: "1eyxrS"
					}))))
				};
			t.a = g(e => {
				const {
					hasMoreMultireddits: t,
					loadMorePending: s,
					multireddits: r,
					onLoadMore: o,
					profileName: d
				} = e;
				return r && r.length ? n.a.createElement(m.a, null, n.a.createElement(c.a, {
					hasMoreItems: t,
					items: r,
					onLoadMore: o,
					pending: s,
					renderItem: f,
					title: i.fbt._("Public custom feeds by u/{profileName}", [i.fbt._param("profileName", d)], {
						hk: "16Oicc"
					})
				})) : null
			})
		},
		"./src/reddit/components/SidebarProfilePowerupContributions/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = s("./src/reddit/components/SubredditIcon/index.tsx"),
				c = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				m = s("./src/reddit/selectors/gold/powerups/index.ts"),
				u = s("./src/reddit/selectors/user.ts"),
				p = s("./node_modules/reselect/es/index.js"),
				h = s("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				b = s.n(h);
			const g = Object(p.c)({
				subreddits: function(e, t) {
					let {
						profileName: s
					} = t;
					const i = Object(u.Bb)(e, {
							userName: s
						}),
						r = Object(m.f)(e);
					return (i && r ? r[i.id] : null) || []
				}
			});

			function f(e) {
				let {
					item: t
				} = e;
				const s = t.subredditInfo,
					r = n.a.createElement(l.b, {
						iconUrl: s.styles.icon,
						className: b.a.subredditIcon
					});
				return n.a.createElement(c.a, {
					className: b.a.communityItemContainer,
					key: s.id
				}, n.a.createElement("div", {
					className: b.a.iconContainer
				}, n.a.createElement(d.a, {
					to: s.path
				}, r)), n.a.createElement("div", {
					className: b.a.communityDescription
				}, n.a.createElement("div", {
					className: b.a.communityName
				}, n.a.createElement(d.a, {
					to: s.path
				}, s.prefixedName)), n.a.createElement("div", {
					className: b.a.subscriberCount
				}, i.fbt._({
					"*": "{number} Powerups",
					_1: "1 Powerup"
				}, [i.fbt._plural(t.powerups, "number")], {
					hk: "3fbcDy"
				}))))
			}
			t.a = Object(o.b)(g)(e => {
				let {
					subreddits: t
				} = e;
				return function(e) {
					return e.length > 0 && e.every(e => e.subredditInfo)
				}(t) ? n.a.createElement(a.a, {
					title: i.fbt._("Supports Communities", null, {
						hk: "1vCNdZ"
					}),
					items: t,
					renderItem: f
				}) : null
			})
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./src/reddit/components/SidebarSpacer/index.m.less"),
				r = s.n(i),
				n = s("./src/lib/lessComponent.tsx");
			t.a = n.a.div("Component", r.a)
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/lodash/throttle.js"),
				n = s.n(r),
				o = s("./node_modules/react/index.js"),
				d = s.n(o),
				a = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/constants/elementIds.ts"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/components/BackToTop/index.m.less"),
				u = s.n(m);
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js"), h = e => {
				if (e) {
					const e = document.getElementById(l.e);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			var b = e => {
					let {
						className: t,
						isOverlay: s,
						style: r
					} = e;
					return d.a.createElement("div", {
						className: Object(i.a)(t, u.a.container),
						style: r
					}, d.a.createElement(c.l, {
						className: u.a.button,
						onClick: () => h(s)
					}, p._("Back to Top", null, {
						hk: "YjBtV"
					})))
				},
				g = s("./src/reddit/components/SidebarFooter/index.tsx"),
				f = s("./src/reddit/constants/componentSizes.ts"),
				y = s("./src/reddit/contexts/PageLayer/index.tsx"),
				v = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				x = s.n(v),
				w = s("./src/lib/lessComponent.tsx");

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const E = a.e[1] + 24,
				_ = f.f + 8,
				k = _ + 152 + 16,
				O = k + E + 8,
				S = w.a.div("Container", x.a),
				j = w.a.wrapped(e => {
					let {
						className: t,
						isOverlay: s,
						...i
					} = e;
					return d.a.createElement(b, C({
						className: t,
						isOverlay: s,
						style: {
							top: `calc(100vh - ${s?_:8}px)`
						}
					}, i))
				}, "BackToTop", x.a),
				P = e => {
					let {
						children: t,
						className: s,
						isFakeOverlay: r,
						isSticky: n
					} = e;
					return d.a.createElement("div", {
						className: Object(i.a)(s, {
							[x.a.StickyStyles]: n && !r,
							[x.a.StickyStylesFakeOverlay]: !!r
						})
					}, t)
				};
			class I extends o.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > O,
						shouldFooterSticky: this.windowHeight > k
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
					}, this.handleResize = n()(() => {
						this.updateMeasurements(), this.updateState()
					}, a.L), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
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
							adComponentOnFakeOverlay: s,
							children: i,
							className: r,
							hideFooter: n,
							pageLayer: o,
							reredditButtons: a
						}
					} = this, l = this.state.isAdSticky && !(!t && !i);
					return d.a.createElement(S, {
						className: r,
						innerRef: this.setWrapperRef
					}, d.a.createElement(P, {
						isFakeOverlay: s,
						isSticky: l
					}, t, i, !n && d.a.createElement(g.a, {
						reredditButtons: a
					})), !this.props.hideBackToTop && d.a.createElement(j, {
						isOverlay: !!(null === (e = null == o ? void 0 : o.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const N = Object(y.u)();
			t.a = N(I)
		},
		"./src/reddit/components/SidebarTrophyCase/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/SidebarTrophyCase/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = s("./src/reddit/controls/Typography/index.tsx"),
				c = s("./src/reddit/selectors/telemetry.ts");
			var m = s("./src/reddit/hooks/useTracking.ts"),
				u = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				p = s("./node_modules/lodash/isEqual.js"),
				h = s.n(p);
			const b = Object(d.b)(d.d, h.a);
			var g = s("./src/reddit/selectors/profile.ts"),
				f = s("./src/reddit/components/SidebarTrophyCase/index.m.less"),
				y = s.n(f),
				v = s("./src/lib/lessComponent.tsx"),
				x = s("./src/lib/opener/index.ts");
			const w = Object(d.c)({
				trophyCase: (e, t) => {
					let {
						profileName: s
					} = t;
					return Object(g.r)(e, Object(g.m)(e, s))
				}
			}, b);
			t.a = Object(o.b)(w)(e => {
				let {
					trophyCase: t
				} = e;
				return 0 === t.length ? null : n.a.createElement(a.a, {
					title: i.fbt._("Trophy Case ({trophyCount})", [i.fbt._param("trophyCount", `${t.length}`)], {
						hk: "mzh3V"
					}),
					items: t,
					renderItem: S
				})
			});
			const C = v.a.wrapped(u.a, "TrophyItem", y.a),
				E = v.a.div("TrophyIcon", y.a),
				_ = v.a.h5("TrophyName", y.a),
				k = v.a.div("TrophyContent", y.a),
				O = v.a.wrapped(l.c, "Description", y.a),
				S = e => {
					let {
						item: t
					} = e;
					const s = Object(m.a)(),
						i = n.a.createElement("img", {
							src: t.icon,
							title: t.name
						});
					return n.a.createElement(C, {
						key: t.id
					}, n.a.createElement(E, null, t.url ? n.a.createElement("a", {
						target: x.d.BLANK,
						rel: x.c,
						href: t.url,
						onClick: () => s((e => t => ({
							source: "trophy",
							action: "click",
							noun: "trophy",
							...c.n(t),
							actionInfo: Object(c.d)(t, {
								paneName: "profile_about"
							}),
							profile: c.Q(t),
							trophy: e
						}))({
							id: t.id,
							name: t.name
						}))
					}, i) : i), n.a.createElement(k, null, n.a.createElement(_, null, t.name), n.a.createElement(O, null, t.description)))
				}
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var i = s("./node_modules/react/index.js"),
				r = s.n(i),
				n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/components/SEOTitle/index.tsx"),
				d = s("./src/reddit/components/Widgets/Base/index.m.less"),
				a = s.n(d);
			const l = n.a.div("WidgetBackground", a.a),
				c = n.a.wrapped(e => {
					let {
						children: t,
						...s
					} = e;
					return r.a.createElement("div", s, r.a.createElement(o.b, {
						type: o.a.Widget
					}, t))
				}, "WidgetHeader", a.a);
			t.b = e => r.a.createElement("div", {
				className: e.className
			}, r.a.createElement(l, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return O
			})), s.d(t, "a", (function() {
				return j
			}));
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/Flair/index.tsx"),
				m = s("./src/reddit/components/SubscribeButton/index.tsx"),
				u = s("./src/reddit/actions/subscription/index.ts");
			var p = Object(o.b)(null, (e, t) => {
					const s = t.widget.id || void 0;
					return {
						onSubscribe: () => e(u.d([t.identifier], !0, s)),
						onSubscriptionsRequested: () => e(u.f()),
						onUnsubscribe: () => e(u.d([t.identifier], !1, s))
					}
				})(s("./src/reddit/components/SubscribeButton/Base.tsx").a),
				h = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = s("./src/reddit/constants/componentSizes.ts"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				y = s("./src/reddit/icons/fonts/index.tsx"),
				v = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				x = s("./src/reddit/models/Flair/index.ts"),
				w = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				E = s("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				_ = s.n(E);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const O = e => n.a.createElement(h.a, {
					className: Object(l.a)(_.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, n.a.createElement("div", {
					className: _.a.container
				}, e.isLoading ? n.a.createElement(f.a, {
					className: _.a.loadingIcon,
					sizePx: 32
				}) : n.a.createElement(n.a.Fragment, null, e.isError ? n.a.createElement("p", {
					className: _.a.errorMsg
				}, e.errorMsg || i.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : n.a.createElement(n.a.Fragment, null, e.communities.map(t => n.a.createElement(j, k({
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
				})))), e.bottomButtonText && e.onBottomButtonClick && n.a.createElement(g.t, {
					className: _.a.bottomButton,
					kind: g.b.Button,
					priority: g.c.Plain,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				S = Object(a.c)({
					hideNSFWPref: w.G,
					nightmode: w.eb
				}),
				j = Object(o.b)(S)(e => n.a.createElement("div", {
					className: Object(l.a)(_.a.communityItemContainer, {
						[_.a.withBottomFlair]: e.isNSFW
					})
				}, n.a.createElement(v.a, {
					className: _.a.communityItemExpandCenter,
					widthRight: b.t
				}, n.a.createElement("div", {
					className: _.a.iconContainer
				}, e.communityIcon || e.iconUrl ? n.a.createElement("img", {
					className: _.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : n.a.createElement(y.a, {
					name: "community",
					isFilled: !e.nightmode,
					className: Object(l.a)(_.a.defaultCommunityIcon, {
						[_.a.mNightmode]: e.nightmode
					})
				})), n.a.createElement("div", {
					className: _.a.communityDescriptionContainer
				}, n.a.createElement(d.a, {
					className: _.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(C.b)(e.name, e.type),
					to: Object(C.a)(e.name, e.type)
				}, Object(C.b)(e.name, e.type)), n.a.createElement("div", {
					className: _.a.communityInfoContainer
				}, !!e.subscribers && n.a.createElement("p", {
					className: _.a.subscriberCount
				}, i.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [i.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && n.a.createElement(c.b, {
					className: _.a.nsfwFlair,
					flair: {
						type: x.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? n.a.createElement(f.a, {
					className: Object(l.a)(_.a.communityCta, _.a.smallLoadingIcon),
					sizePx: 12
				}) : n.a.createElement(g.t, {
					className: _.a.communityCta,
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? n.a.createElement(p, {
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
				}) : n.a.createElement(m.a, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					small: !0
				})), !!e.description && n.a.createElement("p", {
					title: e.description,
					className: _.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			}));
			var i = s("./src/reddit/constants/posts.ts"),
				r = s("./src/reddit/helpers/name/index.ts");

			function n(e, t) {
				return (t === i.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function o(e, t) {
				return t === i.a.PROFILE ? Object(r.d)(e) : Object(r.c)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Widgets/ConnectedAccounts/index.m.less": function(e, t, s) {
			e.exports = {
				account: "_25M-5tlJjQOChCI8sg84QU"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				r = s.n(i),
				n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/components/Widgets/Base/index.tsx"),
				c = s("./src/reddit/constants/posts.ts"),
				m = s("./src/reddit/helpers/trackers/profileSettings.ts"),
				u = s("./src/reddit/models/ExternalAccount/index.ts"),
				p = s("./src/reddit/selectors/externalAccount.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				b = s("./node_modules/fbt/lib/FbtPublic.js"),
				g = s("./src/reddit/controls/OutboundLink/index.tsx"),
				f = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				y = s("./src/reddit/icons/svgs/Twitter/index.tsx"),
				v = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				x = s("./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less"),
				w = s.n(x);
			var C = e => {
					const {
						account: t,
						clickEvent: s,
						provider: i
					} = e;
					let n, o = t.username,
						d = "";
					return i !== u.a.Twitter ? null : (n = r.a.createElement(y.a, {
						className: w.a.twitterLogo
					}), d = b.fbt._("View on Twitter", null, {
						hk: "39S5oy"
					}), o = `@${t.username}`, r.a.createElement(v.a, null, r.a.createElement("span", {
						className: w.a.icon
					}, n), r.a.createElement(g.b, {
						className: w.a.link,
						href: t.link,
						onClick: s
					}, r.a.createElement("div", {
						className: w.a.linkTitle
					}, r.a.createElement("span", {
						className: w.a.name
					}, o), r.a.createElement(f.a, {
						className: w.a.linkIcon
					})), r.a.createElement("div", {
						className: w.a.linkDescription
					}, d))))
				},
				E = s("./src/reddit/components/Widgets/ConnectedAccounts/index.m.less"),
				_ = s.n(E);
			const {
				fbt: k
			} = s("./node_modules/fbt/lib/FbtPublic.js"), O = Object(o.c)({
				twitterAccount: (e, t) => {
					let {
						subredditOrProfile: s
					} = t;
					return s.type === c.a.PROFILE ? Object(p.c)(e, {
						profileName: s.name
					}) : null
				},
				user: (e, t) => {
					let {
						subredditOrProfile: s
					} = t;
					return s.type === c.a.PROFILE ? Object(h.Bb)(e, {
						userName: s.name
					}) : null
				}
			}), S = Object(n.b)(O, e => ({
				trackTwitterAccountClicked: t => e((e, s) => m.m(s(), t))
			}), (e, t, s) => ({
				...s,
				...e,
				...t,
				onTwitterAccountClicked: () => t.trackTwitterAccountClicked(e.user)
			}));
			t.a = Object(a.c)(S(e => {
				const {
					onTwitterAccountClicked: t,
					twitterAccount: s
				} = e;
				return s ? r.a.createElement(d.a, null, r.a.createElement(l.b, null, r.a.createElement(l.a, null, k._("Connected accounts", null, {
					hk: "1ce9Jz"
				})), s && r.a.createElement("div", {
					className: _.a.account
				}, r.a.createElement(C, {
					provider: u.a.Twitter,
					account: s,
					clickEvent: t
				})))) : null
			}))
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				r = s.n(i),
				n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/reddit/components/SEOTitle/index.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/trackers/widgets.ts"),
				h = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				b = s("./src/reddit/selectors/experiments/topPosts.ts"),
				g = s("./src/reddit/selectors/structuredStyles.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				y = s("./src/reddit/models/Theme/index.ts"),
				v = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const x = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(v.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				w = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(v.a)(e).widgetColors.sidebarWidgetHeaderColor,
				C = e => {
					const t = x(e);
					return Object(y.f)(t)
				},
				E = e => {
					const t = w(e);
					return Object(y.f)(t)
				};
			var _ = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				k = s.n(_);
			const {
				fbt: O
			} = s("./node_modules/fbt/lib/FbtPublic.js"), S = Object(m.u)(), j = Object(n.b)(() => Object(o.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(m.n)(e, t) || void 0,
						i = t.redditStyle || Object(g.l)(e, {
							subredditId: s
						}),
						r = Object(f.eb)(e);
					return i || r
				},
				nigtmode: f.eb,
				subredditId: m.n,
				topPostVariant: b.d
			}));
			class P extends r.a.Component {
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
					return e.backgroundColor = x(this.props), e.borderColor = Object(h.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = C(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = w(this.props), e.color = e.fill = E(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: i,
						headerButton: n,
						id: o,
						onClick: a,
						onHeaderClick: c,
						title: m,
						titleClassName: p,
						truncateThreshold: h
					} = this.props, b = s ? k.a.widgetContentOnly : k.a.widgetContent, g = !i && this.props.styles, f = g ? this.getWidgetBackgroundStyles() : {}, y = g ? this.getWidgetHeaderStyles() : {};
					return r.a.createElement("div", {
						className: Object(d.a)(t, k.a.widgetBackground, {
							[k.a.redditStyle]: i,
							[k.a.clickable]: !!a,
							[k.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": i,
						onClick: a,
						style: f
					}, m && r.a.createElement("div", {
						className: Object(d.a)(k.a.widgetHeader, {
							[k.a.clickable]: !!c
						}),
						id: o,
						style: y,
						onClick: c
					}, r.a.createElement("div", {
						className: Object(d.a)(k.a.widgetTitle, p)
					}, r.a.createElement(l.b, {
						type: l.a.Widget
					}, m)), n), r.a.createElement("div", {
						className: Object(d.a)(b, {
							[k.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? h : "none"
						}
					}, e), this.state.isTruncated && r.a.createElement(u.r, {
						className: k.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, O._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = S(j(Object(a.a)(Object(c.c)(P))))
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "c", (function() {
				return c
			}));
			var i, r, n = s("./src/reddit/constants/tracking.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(i || (i = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(r || (r = {}));
			const d = (e, t) => s => ({
					source: r.COMMUNITY_WIDGETS,
					action: n.c.CLICK,
					noun: i.SEE_MORE,
					widget: Object(o.ub)(s, {
						subredditId: e,
						widgetKind: t
					}),
					...o.n
				}),
				a = (e, t) => s => ({
					source: r.POST,
					action: n.c.CLICK,
					noun: i.REREDDIT_PROMO,
					post: o.H(s, e),
					subreddit: o.gb(s),
					...t && {
						banner: {
							buttonText: t,
							id: i.REREDDIT_PROMO
						}
					},
					...o.n(s)
				}),
				l = () => e => ({
					source: r.SIDEBAR,
					action: n.c.VIEW,
					noun: i.TOPICS_WIDGET,
					...o.n(e)
				}),
				c = e => t => ({
					source: r.TOPICS_WIDGET,
					action: n.c.CLICK,
					noun: i.TOPIC,
					...o.n(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				r = s.n(i);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/Twitter/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var i = s("./node_modules/react/index.js"),
				r = s.n(i);

			function n(e) {
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
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, s) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/layout/row/RightAlign/index.m.less"),
				n = s.n(r);
			t.a = i.a.div("rightAligned", n.a)
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, s) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				r = s.n(i),
				n = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				o = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				a = s.n(d);
			t.a = Object(n.a)(e => r.a.createElement("div", {
				className: Object(o.a)(a.a.expandedCenterContainer, e.className)
			}, r.a.createElement("div", {
				className: a.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), r.a.createElement("div", {
				className: a.a.center
			}, Array.isArray(e.children) && e.children[1]), r.a.createElement("div", {
				className: a.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/pages/ProfilePrivate/index.m.less": function(e, t, s) {
			e.exports = {
				mixedList: "_203kLAn6xQ7ktVOvJCzl9p"
			}
		},
		"./src/reddit/pages/ProfilePrivate/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var i = s("./node_modules/react/index.js"),
				r = s.n(i),
				n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/pages/profilePrivate/index.ts"),
				a = s("./src/reddit/components/EmptyProfile/index.ts"),
				l = s("./src/reddit/components/JumpToContent/index.tsx"),
				c = s("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				m = s("./src/reddit/components/PostList/index.tsx"),
				u = s("./src/reddit/components/ProfileItemList/index.tsx"),
				p = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				h = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				b = s("./node_modules/lodash/noop.js"),
				g = s.n(b),
				f = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				y = s("./src/reddit/actions/post.ts"),
				v = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/components/PostList/Placeholder.tsx"),
				w = s("./src/reddit/actions/postList.ts"),
				C = s("./src/reddit/contexts/PageLayer/index.tsx"),
				E = s("./src/reddit/helpers/isComment.ts"),
				_ = s("./src/reddit/helpers/isPost.ts"),
				k = s("./src/reddit/helpers/trackers/post.ts"),
				O = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/lib/objectSelector/index.ts")),
				S = s("./src/reddit/models/Flair/index.ts"),
				j = s("./src/reddit/models/PostCreationForm/index.ts"),
				P = s("./src/reddit/models/Vote/index.ts");
			const I = {
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
					isEligibleForLinkedPosts: !1,
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
					isEligibleForLinkedPosts: !1,
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
					isEligibleForLinkedPosts: !1,
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
						type: S.f.Text,
						text: "hello world"
					}, {
						type: S.f.Spoiler,
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
					isEligibleForLinkedPosts: !1,
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
						type: S.f.Text,
						text: "hello world"
					}, {
						type: S.f.Spoiler,
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
					isEligibleForLinkedPosts: !1,
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
						rteMode: j.i.RICH_TEXT,
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
						type: S.f.Text,
						text: "hello world"
					}, {
						type: S.f.Spoiler,
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
					isEligibleForLinkedPosts: !1,
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
						rteMode: j.i.RICH_TEXT,
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
						type: S.f.Text,
						text: "hello world"
					}, {
						type: S.f.Spoiler,
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
					isEligibleForLinkedPosts: !1,
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
						rteMode: j.i.RICH_TEXT,
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
			N = {
				authorIsBlocked: !0,
				media: {
					type: "text",
					rteMode: j.i.RICH_TEXT,
					markdownContent: "",
					content: "This is content in a post.",
					obfuscated: null
				}
			}, P.a.notVoted;
			var N;
			const L = Object(O.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					const i = e.posts.models;
					return T(e, {
						listingKey: s
					}).filter(e => {
						if (Object(E.a)(e)) return !0; {
							const t = i[e];
							return t && !t.hidden
						}
					})
				}),
				T = Object(O.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					const i = e.pages.profileOverview.chrono.ids[s];
					return i ? [...i] : []
				}),
				R = Object(O.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					return L(e, {
						listingKey: s
					}).reduce((t, s) => {
						const i = Object(E.a)(s) ? e.features.comments.models[s].postId : s;
						return t[s] = i, t
					}, {})
				}),
				F = (Object(O.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					const i = e.posts.models;
					return F(e, {
						listingKey: s
					}).filter(e => {
						const t = i[e];
						return t && !t.hidden
					})
				}), Object(O.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					return L(e, {
						listingKey: s
					}).map(t => Object(E.a)(t) ? e.features.comments.models[t].postId : t)
				})),
				A = Object(O.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					const i = e.posts.models,
						r = F(e, {
							listingKey: s
						}),
						n = {};
					return r.forEach(e => n[e] = i[e]), n
				}),
				B = Object(O.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					const i = e.features.comments.models,
						r = L(e, {
							listingKey: s
						}),
						n = {};
					return r.forEach(e => !!Object(E.a)(e) && (n[e] = i[e])), n
				});
			var M = s("./src/reddit/selectors/subreddit.ts"),
				G = s("./src/reddit/selectors/tracking.ts"),
				W = s("./src/reddit/selectors/user.ts");
			const U = (e, t) => (e, t, s) => Object(E.a)(e) ? 120 : 47,
				D = (Object(C.u)(), {
					apiError: (e, t) => {
						let {
							listingKey: s
						} = t;
						return e.pages.profileOverview.chrono.api.error[s]
					},
					apiPending: (e, t) => {
						let {
							listingKey: s
						} = t;
						return e.pages.profileOverview.chrono.api.pending[s]
					},
					currentUser: W.l,
					layout: C.S,
					loadMore: (e, t) => {
						let {
							listingKey: s
						} = t;
						return e.pages.profileOverview.chrono.loadMore[s]
					},
					subredditsById: M.bb,
					viewportDataLoaded: G.a,
					commentsById: B,
					itemIds: L,
					itemIdToPostId: R,
					postsById: A,
					estimateItemHeight: U
				}),
				H = Object(o.c)(D);
			Object(n.b)(H, (e, t) => ({
				onBottomViewed: (t, s) => e(w.c(t, s)),
				openPost: t => {
					e(y.L(t))
				},
				trackOnPostEnteredViewport: (t, s) => {
					Object(_.a)(t) && e(y.O(t))
				},
				trackOnPostExitedViewport: (t, s, i) => {
					Object(_.a)(t) && e(y.P(t, i))
				},
				fireAdPixelsOfType: g.a
			}), (e, t, s) => ({
				...e,
				...t,
				...s,
				postClickEventFactory: (e, t) => Object(k.h)(e, t)
			}));
			var K = s("./src/reddit/featureFlags/index.ts"),
				z = s("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				q = s("./src/reddit/models/Profile/index.ts");
			const V = (e, t) => {
					let {
						listingKey: s
					} = t;
					return e.profilePrivatePage.api.pending[s]
				},
				Q = (e, t) => {
					let {
						listingKey: s
					} = t;
					return e.profilePrivatePage.api.error[s]
				},
				X = Object(O.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					return (e.profilePrivatePage.ids[s] || []).reduce((t, s) => {
						const i = Object(E.a)(s) ? e.features.comments.models[s].postId : s;
						return t[s] = i, t
					}, {})
				}),
				Z = Object(C.u)(),
				Y = Object(C.u)(),
				J = {
					apiError: Q,
					apiPending: V,
					layout: C.S,
					loadMore: (e, t) => {
						let {
							listingKey: s
						} = t;
						if (!e.profilePrivatePage.pageInfo || !e.profilePrivatePage.pageInfo[s] || !e.profilePrivatePage.pageInfo[s].hasNextPage) return null;
						const i = e.profilePrivatePage.ids[s];
						return {
							token: i[i.length - 1],
							dist: z.h
						}
					},
					subredditsById: e => e.subreddits.models,
					postsById: e => e.posts.models,
					viewportDataLoaded: (e, t) => !V(e, t) && !Q(e, t)
				},
				$ = Object(o.c)({
					...J,
					currentUser: W.l,
					commentsById: e => e.features.comments.models,
					itemIds: (e, t) => {
						let {
							listingKey: s
						} = t;
						return -1 === s.indexOf(q.b.Saved) && -1 === s.indexOf(q.b.ReceivedGildings) && -1 === s.indexOf(q.b.GivenGildings) ? [] : e.profilePrivatePage.ids[s] || []
					},
					itemIdToPostId: X,
					estimateItemHeight: U
				}),
				ee = Object(o.c)({
					...J,
					measureScrollFPS: K.d.measureScrollFPS,
					postIds: (e, t) => {
						let {
							listingKey: s
						} = t;
						return s.indexOf(q.b.Saved) > -1 || s.indexOf(q.b.ReceivedGildings) > -1 || s.indexOf(q.b.GivenGildings) > -1 ? [] : e.profilePrivatePage.ids[s] || []
					},
					postListPlaceholderComponent: () => x.a
				}),
				te = e => ({
					onBottomViewed: g.a,
					openPost: t => {
						e(y.L(t))
					},
					trackOnPostEnteredViewport: g.a,
					fireAdPixelsOfType: (t, s) => {
						e(y.z(t, s))
					}
				}),
				se = Object(n.b)($, te, (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(k.h)(e, t)
				})),
				ie = Object(n.b)(ee, e => ({
					...te(e),
					onFirstPostChanged: g.a,
					adBrandSafetyStatusReceived: g.a,
					trackOnPostExitedViewport: g.a
				}), (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(k.h)(e, t),
					postComponentForLayout: f.b
				}));
			var re = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				ne = s("./src/reddit/helpers/trackers/screenview.ts"),
				oe = s("./src/reddit/layout/page/Listing/index.tsx"),
				de = s("./src/reddit/pages/ProfilePrivate/index.m.less"),
				ae = s.n(de);
			const le = Object(o.c)({
					currentUser: W.l
				}),
				ce = Object(n.b)(le, (e, t) => ({
					onLoadMore: () => e(Object(d.moreProfilePrivateRequested)(t.match.params.listingType))
				})),
				me = (e => Object(v.c)(Z(se(e))))(u.a),
				ue = (e => Object(v.c)(Y(ie(e))))(m.a);
			class pe extends r.a.Component {
				constructor() {
					super(...arguments), this.onLoadMore = () => this.props.onLoadMore()
				}
				renderNoPosts(e) {
					const t = q.a[e]();
					return () => r.a.createElement(a.d, {
						text: t
					})
				}
				renderContent() {
					const {
						currentUser: e,
						match: {
							params: {
								listingType: t,
								profileName: s
							}
						}
					} = this.props, i = s.toLowerCase(), n = Object(re.b)(i, t);
					return e && e.displayText && e.displayText.toLowerCase() === i ? t === q.b.Saved || t === q.b.ReceivedGildings || t === q.b.GivenGildings ? r.a.createElement(me, {
						className: ae.a.mixedList,
						itemComponent: c.a,
						listingKey: n,
						noPostsComponent: this.renderNoPosts(t),
						listingName: i,
						listingViewed: Object(ne.s)(n),
						onLoadMore: this.onLoadMore
					}) : r.a.createElement(ue, {
						listingKey: n,
						noPostsComponent: this.renderNoPosts(t),
						listingName: i,
						listingViewed: Object(ne.s)(n),
						onLoadMore: this.onLoadMore
					}) : r.a.createElement(a.a, null)
				}
				render() {
					const {
						profileName: e
					} = this.props.match.params;
					return r.a.createElement(oe.a, {
						fitPageToContent: !0,
						contentNavBar: r.a.createElement(p.a, {
							profileName: e
						}),
						content: r.a.createElement(r.a.Fragment, null, r.a.createElement(l.a, null), this.renderContent()),
						sidebar: r.a.createElement(h.a, {
							profileName: e
						})
					})
				}
			}
			t.default = ce(pe)
		},
		"./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "b", (function() {
				return u
			}));
			var i = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				n = s("./src/reddit/selectors/experiments/index.ts"),
				o = s("./src/reddit/selectors/experiments/utils.ts"),
				d = s("./src/reddit/selectors/meta.ts"),
				a = s("./node_modules/reselect/es/index.js");
			const l = Object(a.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => Object(d.g)(e) && Object(n.f)(e),
					experimentName: i.ac
				}), o.a),
				c = Object(a.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => !Object(d.g)(e) && Object(n.f)(e),
					experimentName: i.Zb
				}), o.a),
				m = Object(a.a)(l, c, (e, t) => e || t),
				u = Object(a.a)(l, c, (e, t) => !(!e && !t))
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			const i = (e, t) => {
				let {
					listingKey: s
				} = t;
				return e.tracking.viewportDataLoaded[s]
			}
		},
		"./src/redditGQL/operations/ProfileDownvoted.json": function(e) {
			e.exports = JSON.parse('{"id":"4acc506c916a"}')
		},
		"./src/redditGQL/operations/ProfileGivenGildings.json": function(e) {
			e.exports = JSON.parse('{"id":"16c3911bf5c7"}')
		},
		"./src/redditGQL/operations/ProfileHidden.json": function(e) {
			e.exports = JSON.parse('{"id":"9446fd0182a5"}')
		},
		"./src/redditGQL/operations/ProfileReceivedGildings.json": function(e) {
			e.exports = JSON.parse('{"id":"5a06049221d4"}')
		},
		"./src/redditGQL/operations/ProfileSaved.json": function(e) {
			e.exports = JSON.parse('{"id":"250fe7c0a7e1"}')
		},
		"./src/redditGQL/operations/ProfileUpvoted.json": function(e) {
			e.exports = JSON.parse('{"id":"4450c1a22029"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfilePrivate.cbb9258676d675f12e75.js.map