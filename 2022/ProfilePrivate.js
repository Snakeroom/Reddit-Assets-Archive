// https://www.redditstatic.com/desktop2x/ProfilePrivate.23843cd57a58b367c943.js
// Retrieved at 9/12/2022, 3:50:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfilePrivate"], {
		"./node_modules/lodash/take.js": function(e, t, s) {
			var i = s("./node_modules/lodash/_baseSlice.js"),
				n = s("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, s) {
				return e && e.length ? (t = s || void 0 === t ? 1 : n(t), i(e, 0, t < 0 ? 0 : t)) : []
			}
		},
		"./src/reddit/actions/pages/profilePrivate/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "privateListingPending", (function() {
				return B
			})), s.d(t, "privateMixedListingLoaded", (function() {
				return G
			})), s.d(t, "privatePostListingLoaded", (function() {
				return U
			})), s.d(t, "privateListingFailed", (function() {
				return W
			})), s.d(t, "profilePrivateRequested", (function() {
				return H
			})), s.d(t, "morePending", (function() {
				return D
			})), s.d(t, "moreMixedLoaded", (function() {
				return K
			})), s.d(t, "morePostLoaded", (function() {
				return q
			})), s.d(t, "moreFailed", (function() {
				return V
			})), s.d(t, "moreProfilePrivateRequested", (function() {
				return Q
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var i = s("./node_modules/react-router-redux/es/index.js"),
				n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/externalAccount.ts"),
				d = s("./src/reddit/actions/pages/profileShared.ts"),
				a = s("./src/reddit/actions/profile/index.ts"),
				l = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/redditGQL/operations/ProfileDownvoted.json"),
				m = s("./src/redditGQL/operations/ProfileGivenGildings.json"),
				u = s("./src/redditGQL/operations/ProfileHidden.json"),
				p = s("./src/redditGQL/operations/ProfileHistoryPosts.json"),
				b = s("./src/redditGQL/operations/ProfileReceivedGildings.json"),
				h = s("./src/redditGQL/operations/ProfileSaved.json"),
				f = s("./src/redditGQL/operations/ProfileUpvoted.json");
			var g = s("./src/reddit/models/Comment/index.ts"),
				y = s("./src/reddit/models/Post/index.ts"),
				v = s("./src/reddit/models/Profile/index.ts"),
				x = s("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				C = s("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				w = s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				E = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				_ = s("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				O = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				I = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				P = s("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts");
			var j = e => {
					const {
						listingType: t,
						rawData: s,
						includeIdentity: i,
						includeModerated: n
					} = e, {
						identity: r
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
						return e !== v.b.Saved && e !== v.b.ReceivedGildings && e !== v.b.GivenGildings || (t.comments = {}), t
					})(t);
					if (!r) return o;
					if (i && (o.account = Object(P.a)(r) || null, o.preferences = Object(_.a)(r.preferences, r.interactions) || null, r.redditor.profile && (o.profiles[r.redditor.profile.id] = Object(O.a)(r.redditor.profile))), n && r.redditor && r.redditor.moderatedSubreddits) {
						const {
							moderatedSubredditIds: e,
							pageInfo: t,
							subreddits: s
						} = Object(O.b)(r.redditor.moderatedSubreddits);
						o.moderatedPageInfo = t, o.moderatedSubredditIds = e, o.subreddits = s
					}
					let d;
					if (t === v.b.History) d = s.postsInfoByIds;
					else {
						const e = ((e, t) => {
							switch (t) {
								case v.b.Downvoted:
									return e.identity.downvotedPosts;
								case v.b.Hidden:
									return e.identity.hiddenPosts;
								case v.b.History:
									return null;
								case v.b.Saved:
									return e.identity.saved;
								case v.b.Upvoted:
									return e.identity.upvotedPosts;
								case v.b.ReceivedGildings:
									return e.identity.receivedGildings;
								case v.b.GivenGildings:
									return e.identity.givenGildings
							}
						})(s, t);
						if (!e) return o;
						d = e.edges, o.pageInfo = e.pageInfo
					}
					if (!d) return o;
					for (const a of d) {
						let e;
						const s = t === v.b.History ? a : a.node;
						if (s.__typename === g.d.Comment) {
							const t = Object(x.a)(s);
							if (o.comments || (o.comments = {}), o.comments[t.id] = t, o.itemIds || (o.itemIds = []), o.itemIds.push(t.id), s.authorFlair && (o.authorFlair[t.subredditId] || (o.authorFlair[t.subredditId] = {}), o.authorFlair[t.subredditId][t.author] = Object(C.a)(s.authorFlair)[0]), e = s.postInfo, s.postInfo) {
								const {
									post: e,
									crosspost: t
								} = Object(E.a)(s.postInfo);
								o.posts[e.id] = e, t && (o.posts[t.id] = t)
							}
						} else e = s, o.itemIds || (o.itemIds = []), o.itemIds.push(e.id);
						if (!e) continue;
						const {
							post: i,
							crosspost: n
						} = e && Object(E.a)(e);
						o.posts[i.id] = i, n && (o.posts[n.id] = n), Object(y.i)(e) || Object(y.j)(e) || (e.authorFlair && (o.authorFlair[i.belongsTo.id] || (o.authorFlair[i.belongsTo.id] = {}), o.authorFlair[i.belongsTo.id][i.author] = Object(C.a)(e.authorFlair)[0]), Object(y.l)(e) ? o.profiles[e.profile.id] || (o.profiles[e.profile.id] = Object(O.a)(e.profile)) : Object(y.n)(e) && (o.subreddits[e.subreddit.id] || (o.subreddits[e.subreddit.id] = Object(I.a)(e.subreddit)), o.postFlair[e.subreddit.id] || (o.postFlair[e.subreddit.id] = Object(w.a)(e.subreddit))))
					}
					return o
				},
				N = s("./src/reddit/helpers/localStorage/index.ts"),
				S = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				k = s("./src/reddit/selectors/experiments/d2xHistoryTab.ts"),
				L = s("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				T = s("./src/lib/initializeClient/installReducer.ts"),
				A = s("./src/reddit/reducers/features/comments/index.ts");
			Object(T.a)({
				features: {
					comments: A.a
				}
			});
			const F = {
					[v.b.Downvoted]: (e, t) => Object(l.a)(e, {
						...c,
						variables: t
					}),
					[v.b.Hidden]: (e, t) => Object(l.a)(e, {
						...u,
						variables: t
					}),
					[v.b.Saved]: (e, t) => Object(l.a)(e, {
						...h,
						variables: t
					}),
					[v.b.Upvoted]: (e, t) => Object(l.a)(e, {
						...f,
						variables: t
					}),
					[v.b.ReceivedGildings]: (e, t) => Object(l.a)(e, {
						...b,
						variables: t
					}),
					[v.b.GivenGildings]: (e, t) => Object(l.a)(e, {
						...m,
						variables: t
					})
				},
				R = (e, t) => {
					switch (e) {
						case v.b.Downvoted:
						case v.b.Hidden:
						case v.b.History:
						case v.b.Saved:
						case v.b.Upvoted:
						case v.b.ReceivedGildings:
						case v.b.GivenGildings:
							return t.body.data
					}
				},
				M = e => {
					switch (e.listingType) {
						case v.b.Downvoted:
						case v.b.Hidden:
						case v.b.History:
						case v.b.Saved:
						case v.b.Upvoted:
						case v.b.ReceivedGildings:
						case v.b.GivenGildings:
							return j(e)
					}
				},
				B = Object(r.a)(L.b),
				G = Object(r.a)(L.c),
				U = Object(r.a)(L.i),
				W = Object(r.a)(L.a),
				H = e => async (t, s, r) => {
					const {
						profileName: c,
						listingType: m
					} = e.params, u = s(), b = Object(S.c)(c.toLowerCase(), m), h = u.profilePrivatePage.ids[b] && u.profilePrivatePage.ids[b].length > 0, f = !!u.profilePrivatePage.api.error[b];
					if (u.profilePrivatePage.api.pending[b] || h && !f) return;
					const {
						account: g
					} = u.user, y = !g, x = !(g && g.displayText && u.profiles.moderated.models[g.displayText.toLowerCase()] && u.profiles.moderated.models[g.displayText.toLowerCase()].length);
					let C;
					if (t(B({
							listingKey: b
						})), m === v.b.History) {
						if (!Object(k.a)(u)) {
							const {
								profileName: s
							} = e.params, r = `/user/${s}/`;
							return t(Object(i.c)(r)), void t(W({
								listingKey: b,
								error: {
									type: n.J.AUTHORIZATION_ERROR
								}
							}))
						}
						const s = {
							includeIdentity: y,
							includeModerated: x,
							recentPostIds: Object(N.O)(null == g ? void 0 : g.id).reverse()
						};
						C = await ((e, t) => Object(l.a)(e, {
							...p,
							variables: t
						}))(r.gqlContext(), s)
					} else {
						const e = {
							includeIdentity: y,
							includeModerated: x,
							first: L.h,
							after: null
						};
						C = await F[m](r.gqlContext(), e)
					}
					if (C.ok && C.body) {
						const e = M({
							rawData: R(m, C),
							listingType: m,
							includeIdentity: y,
							includeModerated: x
						});
						m === v.b.Saved || m === v.b.ReceivedGildings || m === v.b.GivenGildings ? await t(G({
							listingKey: b,
							profileName: c,
							...e
						})) : await t(U({
							listingKey: b,
							profileName: c,
							...e
						})), await Promise.all([t(Object(d.d)(c)), t(Object(o.o)(c)), t(Object(a.d)(c))])
					} else t(W({
						listingKey: b,
						error: C.error
					}))
				}, D = Object(r.a)(L.f), K = Object(r.a)(L.e), q = Object(r.a)(L.g), V = Object(r.a)(L.d), Q = e => async (t, s, i) => {
					const n = s(),
						r = n.user.account && n.user.account.displayText && n.user.account.displayText.toLowerCase();
					if (!r) return;
					const o = Object(S.c)(r, e);
					if (!n.profilePrivatePage.ids[o] || !n.profilePrivatePage.ids[o].length || !n.profilePrivatePage.pageInfo || !n.profilePrivatePage.pageInfo[o].hasNextPage || n.profilePrivatePage.api.error[o] || n.profilePrivatePage.api.pending[o]) return;
					const d = {
						includeIdentity: !1,
						includeModerated: !1,
						after: n.profilePrivatePage.pageInfo[o].endCursor,
						first: L.h
					};
					t(D({
						listingKey: o
					}));
					const a = await F[e](i.gqlContext(), d);
					if (a.ok && a.body) {
						const s = M({
							includeIdentity: !1,
							includeModerated: !1,
							listingType: e,
							rawData: a.body.data
						});
						e === v.b.Saved || e === v.b.ReceivedGildings || e === v.b.GivenGildings ? await t(K({
							listingKey: o,
							profileName: r,
							...s
						})) : await t(q({
							listingKey: o,
							profileName: r,
							...s
						}))
					} else t(V({
						listingKey: o,
						error: a.error
					}))
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
				return b
			})), s.d(t, "d", (function() {
				return h
			})), s.d(t, "a", (function() {
				return x
			}));
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
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
				return r.a.createElement("div", {
					className: Object(d.a)(m.a.Wrapper, s)
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
					profileName: s,
					timeSort: n = o.mc.ALL
				} = e;
				return r.a.createElement(u, {
					className: t
				}, n === o.mc.ALL ? i.fbt._("hmm... {profileName} hasn't commented on anything", [i.fbt._param("profileName", `u/${s}`)], {
					hk: "1MHn3t"
				}) : i.fbt._("hmm... {profileName} hasn't commented recently", [i.fbt._param("profileName", `u/${s}`)], {
					hk: "qN3uL"
				}))
			};
			var b = e => {
				let {
					className: t,
					profileName: s,
					timeSort: n = o.mc.ALL
				} = e;
				return r.a.createElement(u, {
					className: t
				}, n === o.mc.ALL ? i.fbt._("hmm... {profileName} hasn't posted anything", [i.fbt._param("profileName", `u/${s}`)], {
					hk: "28vBEd"
				}) : i.fbt._("hmm... {profileName} hasn't posted recently", [i.fbt._param("profileName", `u/${s}`)], {
					hk: "38GhqN"
				}))
			};
			var h = e => {
					let {
						className: t,
						text: s
					} = e;
					return r.a.createElement(u, {
						className: t
					}, s)
				},
				f = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				g = s("./src/reddit/components/EmptyProfile/forbidden.m.less"),
				y = s.n(g);
			const {
				fbt: v
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var x = () => r.a.createElement("div", {
				className: y.a.container
			}, r.a.createElement(f.a, {
				className: y.a.hideIcon
			}), r.a.createElement("h3", {
				className: y.a.title
			}, v._("You do not have permission to access this resource", null, {
				hk: "10cPyp"
			})), r.a.createElement("p", {
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
				n = s.n(i),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/constants/componentSizes.ts"),
				l = s("./src/reddit/constants/postLayout.ts"),
				c = s("./src/reddit/constants/screenWidths.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less"),
				p = s.n(u),
				b = s("./src/lib/lessComponent.tsx");
			const h = Object(m.u)(),
				f = Object(o.c)({
					layout: m.S
				}),
				g = Object(r.b)(f);
			class y extends n.a.Component {
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
						s = a.g - t,
						i = c.a + s + (this.props.bladeOpen ? a.a : 0);
					return this.props.layout !== l.g.Large ? null : n.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n            @media (min-width: ${i}px) {\n              .${p.a.Component} {\n                left: calc((100% + var(--layoutNavigation-considerateNav-offsetLeft) - ${a.g+a.p+a.q}px) / 2);\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ${a.q}px) / 2);\n              }\n\n              .${p.a.Component}.${p.a["m-consider-sidebar"]} {\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ${a.g+a.p+a.q}px) / 2);\n              }\n            }\n          `
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
			t.a = h(g(b.a.wrapped(y, "Component", p.a)))
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
				n = s.n(i),
				r = s("./src/reddit/components/ClassicPost/index.tsx"),
				o = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/react-redux/es/index.js")),
				d = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/constants/gold.ts"),
				l = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/components/CommentContainer/index.tsx"),
				p = s("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				b = s("./src/reddit/helpers/getClickInfo.ts"),
				h = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				f = s("./src/reddit/selectors/commentSelector.ts"),
				g = s("./src/reddit/selectors/communityAwards.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/components/OverviewChronoComment/index.m.less"),
				x = s.n(v);
			const C = Object(o.b)(() => Object(d.c)({
				comment: f.b,
				isAwarded: (e, t) => {
					const s = Object(f.b)(e, t);
					return !(!s || !s.awardCountsById) && Object.keys(s.awardCountsById).some(t => {
						const s = Object(g.a)(e, t);
						return s && s.coinPrice >= a.g
					})
				},
				isNightmodeOn: y.db
			}), e => ({
				openPost: t => e(Object(m.L)(t))
			}));
			var w = Object(c.a)(C(e => {
					const {
						comment: t,
						commentId: s,
						first: i,
						isAwarded: r,
						isNightmodeOn: o,
						last: d,
						openPost: a,
						showModTools: c
					} = e;
					if (!t) return null;
					return n.a.createElement(u.a, {
						comment: t,
						onClick: (e, t) => {
							a({
								postOrComment: t,
								clickInfo: Object(b.a)(e),
								queryParams: {
									context: 3
								}
							})
						},
						style: {
							background: Object(h.e)(e)
						}
					}, n.a.createElement("div", {
						className: Object(l.a)(x.a.commentOuterWrapper, {
							[x.a.isLast]: d,
							[x.a.isAwarded]: r,
							[x.a.isNightmodeOn]: o
						})
					}, n.a.createElement("div", {
						className: Object(l.a)(x.a.commentWrapper, {
							[x.a.isFirst]: i
						})
					}, n.a.createElement("div", {
						className: x.a.commentSeparator
					}), t.parentId && n.a.createElement("div", {
						className: x.a.commentSeparator
					}), n.a.createElement("div", {
						className: x.a.commentContentWrapper
					}, n.a.createElement(p.a, {
						commentId: s,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: !0,
						showModTools: c,
						isExpanded: !0
					})))))
				})),
				E = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				_ = s("./src/reddit/contexts/PageLayer/index.tsx"),
				O = s("./src/reddit/helpers/isComment.ts"),
				I = s("./src/reddit/components/OverviewChronoList/ListItem.m.less"),
				P = s.n(I),
				j = s("./src/lib/lessComponent.tsx");

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const S = Object(_.u)({
					currentProfileName: _.i,
					isCommentsPage: _.x,
					isCommentPermalink: _.w,
					isProfilePostListing: _.L,
					pageLayer: e => e
				}),
				k = j.a.wrapped(E.a, "OverviewCommentPost", P.a),
				L = j.a.wrapped(r.default, "ClassicPost", P.a);
			t.a = S(e => {
				const {
					itemId: t,
					isFirstInCommentList: s,
					isLastInCommentList: i,
					allowModToolsUnderComments: r,
					height: o,
					width: d,
					...a
				} = e;
				return Object(O.a)(t) ? s ? n.a.createElement(n.a.Fragment, null, n.a.createElement(k, N({}, a, {
					availableWidth: d,
					commentId: t
				})), n.a.createElement(w, {
					commentId: t,
					first: s,
					last: i,
					showModTools: r
				})) : n.a.createElement(w, {
					commentId: t,
					first: s,
					last: i,
					showModTools: r
				}) : n.a.createElement(L, N({}, a, {
					inSubredditOrProfile: !1
				}))
			})
		},
		"./src/reddit/components/ProfileItemList/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var i = s("./node_modules/lodash/last.js"),
				n = s.n(i),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				d = s("./src/lib/constants/index.ts"),
				a = s("./src/lib/opener/index.ts"),
				l = s("./src/reddit/constants/adEvents.ts"),
				c = s("./src/reddit/components/PostList/LoadMore.tsx"),
				m = s("./src/reddit/components/PostList/Placeholder.tsx"),
				u = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				p = s("./src/reddit/components/Scroller/Simple.tsx"),
				b = s("./src/reddit/constants/componentSizes.ts"),
				h = s("./src/reddit/helpers/getClickInfo.ts"),
				f = s("./src/reddit/helpers/isComment.ts"),
				g = s("./src/reddit/contexts/Post/index.tsx"),
				y = s("./src/lib/LRUCache/index.ts"),
				v = s("./src/telemetry/index.ts"),
				x = s("./src/telemetry/models/Timer.ts"),
				C = s("./src/reddit/components/PostList/index.m.less"),
				w = s.n(C);

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
				O = new y.a(_),
				I = new y.a(_),
				P = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				j = (e, t, s, i, n, r) => {
					const o = `entered-${e}-${t}-${s?`last-${i}-${n}`:""}`;
					let d = O.get(o);
					return void 0 === d && (d = () => {
						s && r.onBottomViewed(i, n), r.trackOnPostEnteredViewport(e, t)
					}, O.set(o, d)), d
				},
				N = (e, t) => {
					const s = `click-${e}`;
					let i = I.get(s);
					return void 0 === i && (i = (e, s) => {
						s.isSponsored && t.fireAdPixelsOfType(s, l.a.Click), s.isSponsored && s.source && s.source.outboundUrl ? Object(a.e)(s.source.outboundUrl, a.d.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(h.a)(e)
						})
					}, I.set(s, i)), i
				};
			class S extends o.a.Component {
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
						t = e && n()(e);
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
						...n
					} = e, r = Object.keys(s), o = Object.keys(n);
					return o.length !== r.length || !!o.some(e => s[e] !== n[e])
				}
				scrollChildForItem(e, t, s, i, n, r) {
					const {
						listingKey: d,
						listingName: a,
						postClickEventFactory: l
					} = this.props, c = `post-${r}-${e}-${t}-${s?"last-index":""}-${a}-${d}`;
					let m;
					if (void 0 === (m = this.scrollChildCache.get(c))) {
						const {
							inSubredditOrProfile: t,
							itemIdToPostId: u
						} = this.props, p = u[e], b = `overview-chrono-list-item-[layout: ${r}]-[itemId: ${e}]`, h = j(p, r, s, d, a, this.props), f = {
							key: b,
							eventFactory: l,
							inSubredditOrProfile: t,
							isFirstInCommentList: i,
							isLastInCommentList: n,
							isOverlay: !1,
							itemId: e,
							last: s,
							layout: r,
							onClickPost: N(e, this.props),
							postId: p
						}, y = this.props.itemComponent;
						m = {
							estHeight: this.props.estimateItemHeight(e, r, i),
							id: e,
							isFocusable: !1,
							trackOnEnteredViewport: h,
							render: e => o.a.createElement(g.a, {
								postId: f.postId
							}, o.a.createElement(y, E({}, f, e)))
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
						className: w.a.placeholder
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
						className: w.a.placeholder
					}, o.a.createElement(c.a, {
						isLoading: !!t,
						layout: s,
						countOverride: P[s]
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
						onLoadMore: n
					} = this.props, r = i.map((s, n, r) => {
						const o = n === i.length - 1,
							d = n && i[n - 1],
							a = !o && i[n + 1],
							l = !!Object(f.a)(s) && (!d || !Object(f.a)(d) || e[d].postId !== e[s].postId),
							c = !!Object(f.a)(s) && (!a || !Object(f.a)(a) || e[a].postId !== e[s].postId);
						return this.scrollChildForItem(s, n, o, l, c, t)
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
						onLoadMore: n,
						viewportTopPadding: b.f + b.r
					}, r), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			t.a = S
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
				n = s("./src/lib/fastdom/index.ts"),
				r = s("./node_modules/lodash/isEqual.js"),
				o = s.n(r),
				d = s("./node_modules/lodash/throttle.js"),
				a = s.n(d),
				l = s("./node_modules/react/index.js"),
				c = s.n(l),
				m = s("./node_modules/react-redux/es/index.js"),
				u = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				p = s("./node_modules/reselect/es/index.js"),
				b = s("./src/config.ts"),
				h = s("./src/higherOrderComponents/asTooltip.tsx"),
				f = s("./src/lib/classNames/index.ts"),
				g = s("./src/lib/constants/index.ts"),
				y = s("./src/reddit/actions/tooltip.ts"),
				v = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx"),
				x = s("./src/reddit/constants/componentSizes.ts"),
				C = s("./src/reddit/contexts/PageLayer/index.tsx"),
				w = s("./src/reddit/controls/Dropdown/index.tsx"),
				E = s("./src/reddit/controls/InternalLink/index.tsx"),
				_ = s("./src/reddit/icons/fonts/index.tsx"),
				O = s("./src/reddit/models/Profile/index.ts"),
				I = s("./src/reddit/featureFlags/index.ts"),
				P = s("./src/reddit/selectors/experiments/d2xHistoryTab.ts"),
				j = s("./src/reddit/selectors/tooltip.ts"),
				N = s("./src/reddit/selectors/user.ts"),
				S = s("./src/reddit/selectors/userPrefs.ts"),
				k = s("./src/server/helpers/profileRedirect.ts"),
				L = s("./src/reddit/components/ProfileNavMenu/index.m.less"),
				T = s.n(L);

			function A() {
				return (A = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const F = Object(C.u)({
					routeName: C.Z,
					privateListingType: C.j
				}),
				R = Object(p.c)({
					isDropdownMenuOpen: e => Object(j.a)(e) === B,
					isOwnProfile: (e, t) => Object(N.W)(e, t.profileName),
					isHistoryTabEnabled: P.a,
					isSnoovatar30Enabled: I.d.snoovatar30,
					isSubscriptionsPinned: S.c
				}),
				M = Object(h.a)(w.a),
				B = "profile-nav-menu-tooltip",
				G = x.g + x.q + x.p;
			var U;
			t.a = F(Object(m.b)(R, e => ({
					toggleTooltip: t => e(Object(y.h)({
						tooltipId: t
					}))
				}))(e => {
					let {
						isDropdownMenuOpen: t,
						isHistoryTabEnabled: s,
						isOwnProfile: i,
						privateListingType: r,
						profileName: d,
						routeName: m,
						toggleTooltip: u,
						isSnoovatar30Enabled: p,
						isSubscriptionsPinned: b,
						viewBlockedConsent: h
					} = e;
					const [g, y] = Object(l.useState)(!1), C = Object(l.useRef)(null), [w, E] = Object(l.useState)([]), [O, I] = Object(l.useState)([]);
					return Object(l.useEffect)(() => {
						const e = D({
							isHistoryTabEnabled: s,
							profileName: d,
							isOwnProfile: i,
							routeName: m,
							privateListingType: r,
							isSnoovatar30Enabled: p,
							viewBlockedConsent: h
						});
						E(e.filter(e => e.position === U.MENU));
						const t = [],
							l = a()(() => {
								const s = document.documentElement.clientWidth - 2 * x.p,
									i = s > G ? G : s;
								let n = 42;
								t.forEach(t => {
									n += t.offsetWidth;
									const s = e.find(e => e.text.toString().toLowerCase() === t.text);
									s.position = n > i ? U.DROPDOWN : U.MENU
								});
								const r = e.filter(e => e.position === U.MENU);
								E(e => o()(r, e) ? e : r);
								const d = e.filter(e => e.position === U.DROPDOWN);
								I(e => o()(d, e) ? e : d), y(d.length > 0)
							}, 50);
						return n.a.read(() => {
							const e = C.current;
							e && (e.childNodes.forEach((e, s) => {
								t.push({
									text: e.textContent.toLowerCase(),
									offsetWidth: e.offsetWidth
								})
							}), l())
						}), window.addEventListener("resize", l), () => {
							window.removeEventListener("resize", l)
						}
					}, [s, d, i, m, r, p, h]), c.a.createElement("div", {
						className: T.a.container
					}, c.a.createElement(v.a, {
						bladeOpen: !1,
						offsetLeft: b ? x.t : 0,
						render: () => c.a.createElement(c.a.Fragment, null, c.a.createElement("div", {
							className: T.a.menuContainer,
							ref: C
						}, w.map(e => c.a.createElement(W, A({}, e, {
							key: e.key
						})))), g && c.a.createElement("button", {
							className: Object(f.a)(T.a.mainLink),
							id: B,
							onClick: () => u(B)
						}, c.a.createElement(_.a, {
							name: "overflow_horizontal"
						})), g && c.a.createElement(M, {
							className: T.a.dropdown,
							isOpen: t,
							tooltipId: B
						}, O.map(e => c.a.createElement(H, A({}, e, {
							key: e.key
						})))))
					}))
				})),
				function(e) {
					e.MENU = "menu", e.DROPDOWN = "dropdown"
				}(U || (U = {}));
			const W = e => {
					let {
						isActive: t,
						text: s,
						url: i,
						internal: n
					} = e;
					return n ? c.a.createElement(E.default, {
						className: Object(f.a)(T.a.mainLink, {
							[T.a.isActive]: t
						}),
						to: i
					}, s) : c.a.createElement("a", {
						className: Object(f.a)(T.a.mainLink, {
							[T.a.isActive]: t
						}),
						href: i
					}, s)
				},
				H = e => {
					let {
						isActive: t,
						internal: s,
						url: i,
						text: n
					} = e;
					return s ? c.a.createElement(u.a, {
						className: Object(f.a)(T.a.dropdownLink, {
							[T.a.isActive]: t
						}),
						to: i,
						rel: "nofollow noopener noreferrer",
						role: "listitem"
					}, n) : c.a.createElement("a", {
						className: Object(f.a)(T.a.dropdownLink),
						href: i,
						rel: "nofollow noopener noreferrer",
						role: "listitem",
						target: "_blank"
					}, n)
				},
				D = e => {
					let {
						profileName: t,
						isOwnProfile: s,
						routeName: n,
						privateListingType: r,
						isHistoryTabEnabled: o,
						isSnoovatar30Enabled: d,
						viewBlockedConsent: a
					} = e;
					const l = s ? [{
						internal: !0,
						isActive: n === g.Qb.PROFILE_PRIVATE && r === O.b.Saved,
						key: "profile.mainmenu.saved",
						text: i.fbt._("Saved", null, {
							hk: "2w1YRh"
						}),
						url: `/user/${t}/saved/`,
						position: U.MENU
					}, {
						internal: !0,
						isActive: n === g.Qb.PROFILE_PRIVATE && r === O.b.Hidden,
						key: "profile.mainmenu.hidden",
						text: i.fbt._("Hidden", null, {
							hk: "225tka"
						}),
						url: `/user/${t}/hidden/`,
						position: U.MENU
					}, {
						internal: !0,
						isActive: n === g.Qb.PROFILE_PRIVATE && r === O.b.Upvoted,
						key: "profile.mainmenu.upvoted",
						text: i.fbt._("Upvoted", null, {
							hk: "RKwFZ"
						}),
						url: `/user/${t}/upvoted/`,
						position: U.MENU
					}, {
						internal: !0,
						isActive: n === g.Qb.PROFILE_PRIVATE && r === O.b.Downvoted,
						key: "profile.mainmenu.downvoted",
						text: i.fbt._("Downvoted", null, {
							hk: "2F9IL4"
						}),
						url: `/user/${t}/downvoted/`,
						position: U.MENU
					}] : [];
					s ? (l.push({
						internal: !0,
						isActive: n === g.Qb.PROFILE_PRIVATE && r === O.b.ReceivedGildings,
						key: "profile.mainmenu.receiverGildings",
						text: i.fbt._("Awards received", null, {
							hk: "iwLBV"
						}),
						url: `/user/${t}/gilded/`,
						position: U.MENU
					}), l.push({
						internal: !0,
						isActive: n === g.Qb.PROFILE_PRIVATE && r === O.b.GivenGildings,
						key: "profile.mainmenu.givenGildings",
						text: i.fbt._("Awards given", null, {
							hk: "2UPYZc"
						}),
						url: `/user/${t}/gilded/given/`,
						position: U.MENU
					})) : l.push({
						internal: !1,
						isActive: !1,
						key: "profile.mainmenu.gildedLegacy",
						text: i.fbt._("Awards received (legacy)", null, {
							hk: "1YgfYU"
						}),
						url: `${b.a.oldRedditUrl}/user/${t}/gilded/`,
						position: U.MENU
					});
					const c = o && s ? [{
							internal: !0,
							isActive: n === g.Qb.PROFILE_PRIVATE && r === O.b.History,
							key: "profile.mainmenu.history",
							text: i.fbt._("History", null, {
								hk: "1fv1wp"
							}),
							url: `/user/${t}/history/`,
							position: U.MENU
						}] : [],
						m = d ? [{
							internal: !0,
							isActive: n === g.Qb.PROFILE_SNOOBUILDER,
							key: "profile.mainmenu.snoobuilder",
							text: i.fbt._("Snoobuilder", null, {
								hk: "3SSKff"
							}),
							url: `/user/${t}/snoo/`,
							position: U.MENU
						}] : [],
						u = a ? "?consent=true" : "";
					return [{
						internal: !0,
						isActive: n === g.Qb.PROFILE_OVERVIEW,
						key: "profile.mainmenu.overview",
						text: i.fbt._("Overview", null, {
							hk: "2IBbqy"
						}),
						url: `/user/${t}/${u}`,
						position: U.MENU
					}, {
						internal: !0,
						isActive: n === g.Qb.PROFILE_POSTS,
						key: "profile.mainmenu.posts",
						text: i.fbt._("Posts", null, {
							hk: "a1BoF"
						}),
						url: `${Object(k.a)(t)}/${u}`,
						position: U.MENU
					}, {
						internal: !0,
						isActive: n === g.Qb.PROFILE_COMMENTS,
						key: "profile.mainmenu.comments",
						text: i.fbt._("Comments", null, {
							hk: "2VwjOc"
						}),
						url: `/user/${t}/comments/${u}`,
						position: U.MENU
					}, ...m, ...c, ...l]
				}
		},
		"./src/reddit/components/ProfileSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/reddit/components/SidebarContainer/index.tsx"),
				a = s("./src/reddit/components/SidebarProfileModeratedSubreddits/index.tsx"),
				l = s("./src/reddit/components/SidebarProfileMultireddits/index.tsx"),
				c = s("./src/reddit/components/SidebarProfilePowerupContributions/index.tsx"),
				m = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				u = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				p = s("./src/reddit/components/SidebarTrophyCase/index.tsx"),
				b = s("./src/reddit/components/Widgets/ConnectedAccounts/index.tsx"),
				h = s("./src/reddit/constants/posts.ts"),
				f = s("./src/reddit/selectors/experiments/econ/index.ts");
			const g = Object(i.a)({
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
					const t = Object(o.e)(e => Object(f.j)(e));
					return r.a.createElement(d.a, {
						className: e.className
					}, r.a.createElement(g, {
						profileName: e.profileName,
						isOverlay: e.isOverlay
					}), r.a.createElement(b.a, {
						subredditOrProfile: {
							name: e.profileName,
							type: h.a.PROFILE
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
				n = s("./src/reddit/components/SidebarContainer/index.m.less"),
				r = s.n(n);
			t.a = i.a.div("container", r.a)
		},
		"./src/reddit/components/SidebarExpandableList/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/take.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				d = s.n(o),
				a = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = s("./src/reddit/layout/row/Inline/index.tsx"),
				p = s("./src/reddit/layout/row/RightAlign/index.tsx");
			const b = e => {
				const {
					className: t,
					hasMoreItems: s,
					headerButton: n,
					items: a,
					minimizedLength: b,
					onLoadMore: h,
					pending: f,
					renderItem: g,
					title: y
				} = e, [v, x] = Object(o.useState)(!1), C = a.length > b || s, w = (!C || v ? a : r()(a, b)).map(e => g({
					item: e
				})), E = () => {
					v || x(!0), v && !s && x(!1), s && h && h()
				};
				return d.a.createElement(l.a, {
					className: t,
					headerButton: n,
					title: y
				}, w, d.a.createElement(u.a, null, d.a.createElement(p.a, null, C && (() => {
					const e = !v || s && h ? i.fbt._("View More", null, {
						hk: "1RK8uA"
					}) : i.fbt._("View Less", null, {
						hk: "1M72mK"
					});
					return d.a.createElement(c.r, {
						onClick: E
					}, f ? d.a.createElement(m.a, {
						sizePx: 10
					}) : e)
				})())))
			};
			b.defaultProps = {
				minimizedLength: a.Wb
			}, t.a = b
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
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/profile/index.ts"),
				l = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				c = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				m = s("./src/reddit/models/User/index.ts"),
				u = s("./src/reddit/selectors/profile.ts"),
				p = s("./src/reddit/selectors/subscriptions.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				h = s("./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less"),
				f = s.n(h);
			const g = Object(d.c)({
					currentUser: b.k,
					moderated: u.o,
					subscriptions: p.e,
					hasMoreModerated: u.e,
					loadMorePending: u.b
				}),
				y = Object(o.b)(g, (e, t) => ({
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
			t.a = y(e => {
				const {
					currentUser: t,
					moderated: s,
					profileName: n,
					subscriptions: o,
					hasMoreModerated: d,
					onLoadMore: a,
					loadMorePending: c
				} = e;
				if (0 === s.length) return null;
				const u = t && Object(m.e)(t).toLowerCase() === n.toLowerCase() ? i.fbt._("You're a moderator of these communities", null, {
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
				return r.a.createElement(l.a, {
					className: f.a.container,
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
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./node_modules/reselect/es/index.js"),
				l = s("./src/reddit/actions/profile/index.ts"),
				c = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				m = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				u = s("./src/reddit/selectors/profile.ts"),
				p = s("./src/reddit/components/SidebarProfileMultireddits/index.m.less"),
				b = s.n(p);
			const h = Object(a.c)({
					hasMoreMultireddits: u.f,
					loadMorePending: u.c,
					multireddits: u.p
				}),
				f = Object(o.b)(h, (e, t) => ({
					onLoadMoreMultireddits: () => e(Object(l.i)(t.profileName, !0))
				}), (e, t, s) => ({
					...s,
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
					}, t.subredditCount && i.fbt._({
						"*": "{communities} communities",
						_1: "1 community"
					}, [i.fbt._plural(t.subredditCount, "communities")], {
						hk: "1eyxrS"
					}))))
				};
			t.a = f(e => {
				const {
					hasMoreMultireddits: t,
					loadMorePending: s,
					multireddits: n,
					onLoadMore: o,
					profileName: d
				} = e;
				return n && n.length ? r.a.createElement(m.a, null, r.a.createElement(c.a, {
					hasMoreItems: t,
					items: n,
					onLoadMore: o,
					pending: s,
					renderItem: g,
					title: i.fbt._("Public custom feeds by u/{profileName}", [i.fbt._param("profileName", d)], {
						hk: "16Oicc"
					})
				})) : null
			})
		},
		"./src/reddit/components/SidebarProfilePowerupContributions/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = s("./src/reddit/components/SubredditIcon/index.tsx"),
				c = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				m = s("./src/reddit/selectors/gold/powerups/index.ts"),
				u = s("./src/reddit/selectors/user.ts"),
				p = s("./node_modules/reselect/es/index.js"),
				b = s("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				h = s.n(b);
			const f = Object(p.c)({
				subreddits: function(e, t) {
					let {
						profileName: s
					} = t;
					const i = Object(u.Ab)(e, {
							userName: s
						}),
						n = Object(m.e)(e);
					return (i && n ? n[i.id] : null) || []
				}
			});

			function g(e) {
				let {
					item: t
				} = e;
				const s = t.subredditInfo,
					n = r.a.createElement(l.b, {
						iconUrl: s.styles.icon,
						className: h.a.subredditIcon
					});
				return r.a.createElement(c.a, {
					className: h.a.communityItemContainer,
					key: s.id
				}, r.a.createElement("div", {
					className: h.a.iconContainer
				}, r.a.createElement(d.a, {
					to: s.path
				}, n)), r.a.createElement("div", {
					className: h.a.communityDescription
				}, r.a.createElement("div", {
					className: h.a.communityName
				}, r.a.createElement(d.a, {
					to: s.path
				}, s.prefixedName)), r.a.createElement("div", {
					className: h.a.subscriberCount
				}, i.fbt._({
					"*": "{number} Powerups",
					_1: "1 Powerup"
				}, [i.fbt._plural(t.powerups, "number")], {
					hk: "3fbcDy"
				}))))
			}
			t.a = Object(o.b)(f)(e => {
				let {
					subreddits: t
				} = e;
				return function(e) {
					return e.length > 0 && e.every(e => e.subredditInfo)
				}(t) ? r.a.createElement(a.a, {
					title: i.fbt._("Supports Communities", null, {
						hk: "1vCNdZ"
					}),
					items: t,
					renderItem: g
				}) : null
			})
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
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				l = s("./src/reddit/controls/Typography/index.tsx"),
				c = s("./src/reddit/selectors/telemetry.ts");
			var m = s("./src/reddit/hooks/useTracking.ts"),
				u = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				p = s("./node_modules/lodash/isEqual.js"),
				b = s.n(p);
			const h = Object(d.b)(d.d, b.a);
			var f = s("./src/reddit/selectors/profile.ts"),
				g = s("./src/reddit/components/SidebarTrophyCase/index.m.less"),
				y = s.n(g),
				v = s("./src/lib/lessComponent.tsx"),
				x = s("./src/lib/opener/index.ts");
			const C = Object(d.c)({
				trophyCase: (e, t) => {
					let {
						profileName: s
					} = t;
					return Object(f.s)(e, Object(f.n)(e, s))
				}
			}, h);
			t.a = Object(o.b)(C)(e => {
				let {
					trophyCase: t
				} = e;
				return 0 === t.length ? null : r.a.createElement(a.a, {
					title: i.fbt._("Trophy Case ({trophyCount})", [i.fbt._param("trophyCount", `${t.length}`)], {
						hk: "mzh3V"
					}),
					items: t,
					renderItem: P
				})
			});
			const w = v.a.wrapped(u.a, "TrophyItem", y.a),
				E = v.a.div("TrophyIcon", y.a),
				_ = v.a.h5("TrophyName", y.a),
				O = v.a.div("TrophyContent", y.a),
				I = v.a.wrapped(l.c, "Description", y.a),
				P = e => {
					let {
						item: t
					} = e;
					const s = Object(m.a)(),
						i = r.a.createElement("img", {
							src: t.icon,
							title: t.name
						});
					return r.a.createElement(w, {
						key: t.id
					}, r.a.createElement(E, null, t.url ? r.a.createElement("a", {
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
							profile: c.S(t),
							trophy: e
						}))({
							id: t.id,
							name: t.name
						}))
					}, i) : i), r.a.createElement(O, null, r.a.createElement(_, null, t.name), r.a.createElement(I, null, t.description)))
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
				n = s.n(i),
				r = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/components/SEOTitle/index.tsx"),
				d = s("./src/reddit/components/Widgets/Base/index.m.less"),
				a = s.n(d);
			const l = r.a.div("WidgetBackground", a.a),
				c = r.a.wrapped(e => {
					let {
						children: t,
						...s
					} = e;
					return n.a.createElement("div", s, n.a.createElement(o.b, {
						type: o.a.Widget
					}, t))
				}, "WidgetHeader", a.a);
			t.b = e => n.a.createElement("div", {
				className: e.className
			}, n.a.createElement(l, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return I
			})), s.d(t, "a", (function() {
				return j
			}));
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
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
						onSubscriptionsRequested: () => e(u.e()),
						onUnsubscribe: () => e(u.d([t.identifier], !1, s))
					}
				})(s("./src/reddit/components/SubscribeButton/Base.tsx").a),
				b = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = s("./src/reddit/constants/componentSizes.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				g = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				y = s("./src/reddit/icons/fonts/index.tsx"),
				v = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				x = s("./src/reddit/models/Flair/index.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				w = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				E = s("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				_ = s.n(E);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const I = e => r.a.createElement(b.a, {
					className: Object(l.a)(_.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, r.a.createElement("div", {
					className: _.a.container
				}, e.isLoading ? r.a.createElement(g.a, {
					className: _.a.loadingIcon,
					sizePx: 32
				}) : r.a.createElement(r.a.Fragment, null, e.isError ? r.a.createElement("p", {
					className: _.a.errorMsg
				}, e.errorMsg || i.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : r.a.createElement(r.a.Fragment, null, e.communities.map(t => r.a.createElement(j, O({
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
				})))), e.bottomButtonText && e.onBottomButtonClick && r.a.createElement(f.t, {
					className: _.a.bottomButton,
					kind: f.b.Button,
					priority: f.c.Plain,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				P = Object(a.c)({
					hideNSFWPref: C.F,
					nightmode: C.db
				}),
				j = Object(o.b)(P)(e => r.a.createElement("div", {
					className: Object(l.a)(_.a.communityItemContainer, {
						[_.a.withBottomFlair]: e.isNSFW
					})
				}, r.a.createElement(v.a, {
					className: _.a.communityItemExpandCenter,
					widthRight: h.s
				}, r.a.createElement("div", {
					className: _.a.iconContainer
				}, e.communityIcon || e.iconUrl ? r.a.createElement("img", {
					className: _.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : r.a.createElement(y.a, {
					name: "community",
					isFilled: !e.nightmode,
					className: Object(l.a)(_.a.defaultCommunityIcon, {
						[_.a.mNightmode]: e.nightmode
					})
				})), r.a.createElement("div", {
					className: _.a.communityDescriptionContainer
				}, r.a.createElement(d.a, {
					className: _.a.communityName,
					onClick: e.onCommunityNameClick,
					title: Object(w.b)(e.name, e.type),
					to: Object(w.a)(e.name, e.type)
				}, Object(w.b)(e.name, e.type)), r.a.createElement("div", {
					className: _.a.communityInfoContainer
				}, !!e.subscribers && r.a.createElement("p", {
					className: _.a.subscriberCount
				}, i.fbt._({
					"*": "{number} members",
					_1: "1 member"
				}, [i.fbt._plural(e.subscribers, "number")], {
					hk: "6i1wh"
				})), e.isNSFW && r.a.createElement(c.b, {
					className: _.a.nsfwFlair,
					flair: {
						type: x.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? r.a.createElement(g.a, {
					className: Object(l.a)(_.a.communityCta, _.a.smallLoadingIcon),
					sizePx: 12
				}) : r.a.createElement(f.t, {
					className: _.a.communityCta,
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
					className: _.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return o
			}));
			var i = s("./src/reddit/constants/posts.ts"),
				n = s("./src/reddit/helpers/name/index.ts");

			function r(e, t) {
				return (t === i.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function o(e, t) {
				return t === i.a.PROFILE ? Object(n.e)(e) : Object(n.d)(e)
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
				n = s.n(i),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/components/Widgets/Base/index.tsx"),
				c = s("./src/reddit/constants/posts.ts"),
				m = s("./src/reddit/helpers/trackers/profileSettings.ts"),
				u = s("./src/reddit/models/ExternalAccount/index.ts"),
				p = s("./src/reddit/selectors/externalAccount.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				h = s("./node_modules/fbt/lib/FbtPublic.js"),
				f = s("./src/reddit/controls/OutboundLink/index.tsx"),
				g = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				y = s("./src/reddit/icons/svgs/Twitter/index.tsx"),
				v = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				x = s("./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less"),
				C = s.n(x);
			var w = e => {
					const {
						account: t,
						clickEvent: s,
						provider: i
					} = e;
					let r, o = t.username,
						d = "";
					return i !== u.a.Twitter ? null : (r = n.a.createElement(y.a, {
						className: C.a.twitterLogo
					}), d = h.fbt._("View on Twitter", null, {
						hk: "39S5oy"
					}), o = `@${t.username}`, n.a.createElement(v.a, null, n.a.createElement("span", {
						className: C.a.icon
					}, r), n.a.createElement(f.b, {
						className: C.a.link,
						href: t.link,
						onClick: s
					}, n.a.createElement("div", {
						className: C.a.linkTitle
					}, n.a.createElement("span", {
						className: C.a.name
					}, o), n.a.createElement(g.a, {
						className: C.a.linkIcon
					})), n.a.createElement("div", {
						className: C.a.linkDescription
					}, d))))
				},
				E = s("./src/reddit/components/Widgets/ConnectedAccounts/index.m.less"),
				_ = s.n(E);
			const {
				fbt: O
			} = s("./node_modules/fbt/lib/FbtPublic.js"), I = Object(o.c)({
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
					return s.type === c.a.PROFILE ? Object(b.Ab)(e, {
						userName: s.name
					}) : null
				}
			}), P = Object(r.b)(I, e => ({
				trackTwitterAccountClicked: t => e((e, s) => m.m(s(), t))
			}), (e, t, s) => ({
				...s,
				...e,
				...t,
				onTwitterAccountClicked: () => t.trackTwitterAccountClicked(e.user)
			}));
			t.a = Object(a.c)(P(e => {
				const {
					onTwitterAccountClicked: t,
					twitterAccount: s
				} = e;
				return s ? n.a.createElement(d.a, null, n.a.createElement(l.b, null, n.a.createElement(l.a, null, O._("Connected accounts", null, {
					hk: "1ce9Jz"
				})), s && n.a.createElement("div", {
					className: _.a.account
				}, n.a.createElement(w, {
					provider: u.a.Twitter,
					account: s,
					clickEvent: t
				})))) : null
			}))
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/Twitter/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);

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
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, s) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/layout/row/RightAlign/index.m.less"),
				r = s.n(n);
			t.a = i.a.div("rightAligned", r.a)
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
				n = s.n(i),
				r = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				o = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				a = s.n(d);
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
		"./src/reddit/pages/ProfilePrivate/index.m.less": function(e, t, s) {
			e.exports = {
				mixedList: "_203kLAn6xQ7ktVOvJCzl9p"
			}
		},
		"./src/reddit/pages/ProfilePrivate/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/pages/profilePrivate/index.ts"),
				a = s("./src/reddit/components/EmptyProfile/index.ts"),
				l = s("./src/reddit/components/JumpToContent/index.tsx"),
				c = s("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				m = s("./src/reddit/components/PostList/index.tsx"),
				u = s("./src/reddit/components/ProfileItemList/index.tsx"),
				p = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				b = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				h = s("./node_modules/lodash/noop.js"),
				f = s.n(h),
				g = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				y = s("./src/reddit/actions/post.ts"),
				v = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/components/PostList/Placeholder.tsx"),
				C = s("./src/reddit/actions/postList.ts"),
				w = s("./src/reddit/contexts/PageLayer/index.tsx"),
				E = s("./src/reddit/helpers/isComment.ts"),
				_ = s("./src/reddit/helpers/isPost.ts"),
				O = s("./src/reddit/helpers/trackers/post.ts"),
				I = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/lib/objectSelector/index.ts")),
				P = s("./src/reddit/models/Flair/index.ts"),
				j = s("./src/reddit/models/PostCreationForm/index.ts"),
				N = s("./src/reddit/models/Vote/index.ts");
			const S = {
				t3_1: {
					adSupplementaryText: null,
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
					adSupplementaryText: null,
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
					adSupplementaryText: null,
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
					adSupplementaryText: null,
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
						type: P.f.Text,
						text: "hello world"
					}, {
						type: P.f.Spoiler,
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
					adSupplementaryText: null,
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
						type: P.f.Text,
						text: "hello world"
					}, {
						type: P.f.Spoiler,
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
					adSupplementaryText: null,
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
						type: P.f.Text,
						text: "hello world"
					}, {
						type: P.f.Spoiler,
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
					adSupplementaryText: null,
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
						type: P.f.Text,
						text: "hello world"
					}, {
						type: P.f.Spoiler,
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
			k = {
				authorIsBlocked: !0,
				media: {
					type: "text",
					rteMode: j.i.RICH_TEXT,
					markdownContent: "",
					content: "This is content in a post.",
					obfuscated: null
				}
			}, N.a.notVoted;
			var k;
			const L = function(e) {
					return e[arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "t3_1"]
				}(S),
				T = Object(I.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					const i = e.posts.models;
					return A(e, {
						listingKey: s
					}).filter(e => {
						if (Object(E.a)(e)) return !0; {
							const t = i[e];
							return t && !t.hidden
						}
					})
				}),
				A = Object(I.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					const i = e.pages.profileOverview.chrono.ids[s];
					return i ? [...i] : []
				}),
				F = Object(I.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					return T(e, {
						listingKey: s
					}).reduce((t, s) => {
						const i = Object(E.a)(s) ? e.features.comments.models[s].postId : s;
						return t[s] = i, t
					}, {})
				}),
				R = (Object(I.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					const i = e.posts.models;
					return R(e, {
						listingKey: s
					}).filter(e => {
						const t = i[e];
						return t && !t.hidden
					})
				}), Object(I.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					return T(e, {
						listingKey: s
					}).map(t => Object(E.a)(t) ? e.features.comments.models[t].postId : t)
				})),
				M = Object(I.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					const i = e.posts.models,
						n = R(e, {
							listingKey: s
						}),
						r = {};
					return n.forEach(e => r[e] = i[e]), r
				}),
				B = Object(I.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					const i = e.features.comments.models,
						n = T(e, {
							listingKey: s
						}),
						r = {};
					return n.forEach(e => !!Object(E.a)(e) && (r[e] = i[e])), r
				});
			var G = s("./src/reddit/selectors/subreddit.ts"),
				U = s("./src/reddit/selectors/tracking.ts"),
				W = s("./src/reddit/selectors/user.ts");
			const H = (e, t) => (e, t, s) => Object(E.a)(e) ? 120 : 47,
				D = (Object(w.u)(), {
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
					currentUser: W.k,
					layout: w.S,
					loadMore: (e, t) => {
						let {
							listingKey: s
						} = t;
						return e.pages.profileOverview.chrono.loadMore[s]
					},
					subredditsById: G.cb,
					viewportDataLoaded: U.a,
					commentsById: B,
					itemIds: T,
					itemIdToPostId: F,
					postsById: M,
					estimateItemHeight: H
				}),
				K = Object(o.c)(D);
			Object(r.b)(K, (e, t) => ({
				onBottomViewed: (t, s) => e(C.c(t, s)),
				openPost: t => {
					e(y.L(t))
				},
				trackOnPostEnteredViewport: (t, s) => {
					Object(_.a)(t) && e(y.O(t))
				},
				trackOnPostExitedViewport: (t, s, i) => {
					Object(_.a)(t) && e(y.P(t, i))
				},
				fireAdPixelsOfType: f.a
			}), (e, t, s) => ({
				...e,
				...t,
				...s,
				postClickEventFactory: (e, t) => Object(O.k)(e, t)
			}));
			var q = s("./src/reddit/featureFlags/index.ts"),
				V = s("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				Q = s("./src/reddit/models/Profile/index.ts");
			const z = (e, t) => {
					let {
						listingKey: s
					} = t;
					return e.profilePrivatePage.api.pending[s]
				},
				X = (e, t) => {
					let {
						listingKey: s
					} = t;
					return e.profilePrivatePage.api.error[s]
				},
				$ = Object(I.a)((e, t) => {
					let {
						listingKey: s
					} = t;
					return (e.profilePrivatePage.ids[s] || []).reduce((t, s) => {
						const i = Object(E.a)(s) ? e.features.comments.models[s].postId : s;
						return t[s] = i, t
					}, {})
				}),
				Z = Object(w.u)(),
				Y = Object(w.u)(),
				J = {
					apiError: X,
					apiPending: z,
					layout: w.S,
					loadMore: (e, t) => {
						let {
							listingKey: s
						} = t;
						if (!e.profilePrivatePage.pageInfo || !e.profilePrivatePage.pageInfo[s] || !e.profilePrivatePage.pageInfo[s].hasNextPage) return null;
						const i = e.profilePrivatePage.ids[s];
						return {
							token: i[i.length - 1],
							dist: V.h
						}
					},
					subredditsById: e => e.subreddits.models,
					postsById: e => e.posts.models,
					viewportDataLoaded: (e, t) => !z(e, t) && !X(e, t)
				},
				ee = Object(o.c)({
					...J,
					currentUser: W.k,
					commentsById: e => e.features.comments.models,
					itemIds: (e, t) => {
						let {
							listingKey: s
						} = t;
						return -1 === s.indexOf(Q.b.Saved) && -1 === s.indexOf(Q.b.ReceivedGildings) && -1 === s.indexOf(Q.b.GivenGildings) ? [] : e.profilePrivatePage.ids[s] || []
					},
					itemIdToPostId: $,
					estimateItemHeight: H
				}),
				te = Object(o.c)({
					...J,
					measureScrollFPS: q.d.measureScrollFPS,
					postIds: (e, t) => {
						let {
							listingKey: s
						} = t;
						return s.indexOf(Q.b.Saved) > -1 || s.indexOf(Q.b.ReceivedGildings) > -1 || s.indexOf(Q.b.GivenGildings) > -1 ? [] : e.profilePrivatePage.ids[s] || []
					},
					postListPlaceholderComponent: () => x.a
				}),
				se = e => ({
					onBottomViewed: f.a,
					openPost: t => {
						e(y.L(t))
					},
					trackOnPostEnteredViewport: f.a,
					fireAdPixelsOfType: (t, s) => {
						e(y.z(t, s))
					}
				}),
				ie = Object(r.b)(ee, se, (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(O.k)(e, t)
				})),
				ne = Object(r.b)(te, e => ({
					...se(e),
					onFirstPostChanged: f.a,
					adBrandSafetyStatusReceived: f.a,
					trackOnPostExitedViewport: f.a
				}), (e, t, s) => ({
					...e,
					...t,
					...s,
					postClickEventFactory: (e, t) => Object(O.k)(e, t),
					postComponentForLayout: g.b
				}));
			var re = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				oe = s("./src/reddit/helpers/trackers/screenview.ts"),
				de = s("./src/reddit/layout/page/Listing/index.tsx"),
				ae = s("./src/reddit/pages/ProfilePrivate/index.m.less"),
				le = s.n(ae);
			const ce = Object(o.c)({
					currentUser: W.k
				}),
				me = Object(r.b)(ce, (e, t) => ({
					onLoadMore: () => e(Object(d.moreProfilePrivateRequested)(t.match.params.listingType))
				})),
				ue = (e => Object(v.c)(Z(ie(e))))(u.a),
				pe = (e => Object(v.c)(Y(ne(e))))(m.a);
			class be extends n.a.Component {
				constructor() {
					super(...arguments), this.onLoadMore = () => this.props.onLoadMore()
				}
				renderNoPosts(e) {
					const t = Q.a[e]();
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
								profileName: s
							}
						}
					} = this.props, i = s.toLowerCase(), r = Object(re.c)(i, t);
					return e && e.displayText && e.displayText.toLowerCase() === i ? t === Q.b.Saved || t === Q.b.ReceivedGildings || t === Q.b.GivenGildings ? n.a.createElement(ue, {
						className: le.a.mixedList,
						itemComponent: c.a,
						listingKey: r,
						noPostsComponent: this.renderNoPosts(t),
						listingName: i,
						listingViewed: Object(oe.s)(r),
						onLoadMore: this.onLoadMore
					}) : n.a.createElement(pe, {
						listingKey: r,
						noPostsComponent: this.renderNoPosts(t),
						listingName: i,
						listingViewed: Object(oe.s)(r),
						onLoadMore: this.onLoadMore
					}) : n.a.createElement(a.a, null)
				}
				render() {
					const {
						profileName: e
					} = this.props.match.params;
					return n.a.createElement(de.a, {
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
			t.default = me(be)
		},
		"./src/redditGQL/operations/ProfileDownvoted.json": function(e) {
			e.exports = JSON.parse('{"id":"068695a1b1db"}')
		},
		"./src/redditGQL/operations/ProfileGivenGildings.json": function(e) {
			e.exports = JSON.parse('{"id":"cfce681337a8"}')
		},
		"./src/redditGQL/operations/ProfileHidden.json": function(e) {
			e.exports = JSON.parse('{"id":"675b91e6c043"}')
		},
		"./src/redditGQL/operations/ProfileHistoryPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"7640dff6e2c1"}')
		},
		"./src/redditGQL/operations/ProfileReceivedGildings.json": function(e) {
			e.exports = JSON.parse('{"id":"838de153f96a"}')
		},
		"./src/redditGQL/operations/ProfileSaved.json": function(e) {
			e.exports = JSON.parse('{"id":"94811dbba9e0"}')
		},
		"./src/redditGQL/operations/ProfileUpvoted.json": function(e) {
			e.exports = JSON.parse('{"id":"e8dd5b9bb2b0"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfilePrivate.23843cd57a58b367c943.js.map