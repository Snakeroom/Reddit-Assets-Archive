// https://www.redditstatic.com/desktop2x/Governance~ModListing~Reddit~Subreddit.f3742ff9d7f90f43e7d9.js
// Retrieved at 1/5/2022, 11:30:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~ModListing~Reddit~Subreddit"], {
		"./src/lib/CSSVariableProvider/withTheme.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/CSSVariableProvider/index.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}

			function c(e) {
				const t = t => s.a.createElement(o.b.Consumer, null, r => s.a.createElement(e, i({
					theme: r
				}, t)));
				return t.displayName = `WithTheme(${e.displayName||e.name})`, t
			}
		},
		"./src/realtime/GQLSubscription/async.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/higherOrderComponents/makeAsync.tsx"),
				s = r("./src/lib/loadWithRetries/index.ts");
			const o = Object(n.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Object(s.a)(() => Promise.all([r.e("vendors~RealtimeGQLSubscriptionAsync"), r.e("RealtimeGQLSubscriptionAsync")]).then(r.bind(null, "./src/realtime/GQLSubscription/index.tsx"))).then(e => e.default)
			});
			t.a = o
		},
		"./src/reddit/actions/embedAndImage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "c", (function() {
				return c
			}));
			var n = r("./src/lib/makeActionCreator/index.ts");
			const s = "EMBEDS__UNLOADABLE",
				o = "EMBEDS__LOADABLE",
				i = Object(n.a)(s),
				c = Object(n.a)(o)
		},
		"./src/reddit/actions/pages/modListing/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return n
			})), r.d(t, "e", (function() {
				return s
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "i", (function() {
				return i
			})), r.d(t, "h", (function() {
				return c
			})), r.d(t, "g", (function() {
				return a
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "a", (function() {
				return l
			})), r.d(t, "l", (function() {
				return b
			})), r.d(t, "k", (function() {
				return m
			})), r.d(t, "j", (function() {
				return f
			}));
			const n = "PAGE__MOD_LISTING_PAGE_PENDING",
				s = "PAGE__MOD_LISTING_PAGE_LOADED",
				o = "PAGE__MOD_LISTING_PAGE_FAILED",
				i = "MOD_LISTING_MORE_POSTS_PENDING",
				c = "MOD_LISTING_MORE_POSTS_LOADED",
				a = "MOD_LISTING_MORE_POSTS_FAILED",
				d = "MOD_LISTING_HIDE_SUBREDDIT_SUCCESS",
				u = "MOD_LISTING_HIDE_SUBREDDIT_PENDING",
				l = "MOD_LISTING_HIDE_SUBREDDIT_FAILED",
				b = "MOD_LISTING_UNHIDE_SUBREDDIT_SUCCESS",
				m = "MOD_LISTING_UNHIDE_SUBREDDIT_PENDING",
				f = "MOD_LISTING_UNHIDE_SUBREDDIT_FAILED"
		},
		"./src/reddit/actions/postList.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return d
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = (r("./src/reddit/actions/embedAndImage.ts"), r("./src/reddit/actions/video.ts"), r("./src/reddit/helpers/trackers/postList.ts"));
			r("./src/reddit/constants/postLayout.ts"), r("./src/reddit/models/Media/index.ts"), r("./src/reddit/selectors/platform.ts"), r("./src/reddit/selectors/posts.ts");
			r("./src/reddit/selectors/video.ts");
			const o = "POSTLIST__MARKED_END",
				i = "POSTLIST__UNMARKED_END",
				c = Object(n.a)(o),
				a = Object(n.a)(i),
				d = (e, t) => async (r, n) => {
					const o = n();
					e in o.listings.postOrder.fetchedTokens ? e in o.listings.postOrder.ids ? r(a({
						listingKey: e
					})) : s.l(o, e) : r(c({
						listingKey: e,
						listingName: t
					}))
				}
		},
		"./src/reddit/actions/subscription/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "h", (function() {
				return i
			})), r.d(t, "i", (function() {
				return c
			})), r.d(t, "g", (function() {
				return a
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "e", (function() {
				return l
			}));
			const n = "SUBSCRIPTION__FETCH_DATA_PENDING",
				s = "SUBSCRIPTION__FETCH_DATA_SUCCESS",
				o = "SUBSCRIPTION__FETCH_DATA_FAILURE",
				i = "SUBSCRIPTION__SUBSCRIPTION_TOGGLED",
				c = "SUBSCRIPTION__SUBSCIPTION_TOGGLE_FAILED",
				a = "SUBSCRIPTION__ORDER_LOADED",
				d = "SUBSCRIPTION__SUBREDDIT_FAVORITE_TOGGLED",
				u = "SUBSCRIPTION__MULTI_FAVORITE_TOGGLED",
				l = "SUBSCRIPTION__MULTI_FOLLOW_TOGGLED"
		},
		"./src/reddit/actions/subscription/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return k
			})), r.d(t, "d", (function() {
				return U
			})), r.d(t, "c", (function() {
				return R
			})), r.d(t, "a", (function() {
				return L
			})), r.d(t, "b", (function() {
				return H
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/linkMatchers/customLinks.ts"),
				c = r("./src/reddit/actions/login.ts"),
				a = r("./src/reddit/actions/modal.ts"),
				d = r("./src/reddit/actions/subscription/constants.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/reddit/constants/posts.ts"),
				b = r("./src/lib/makeApiRequest/index.ts"),
				m = r("./src/lib/omitHeaders/index.ts"),
				f = r("./src/reddit/constants/headers.ts");
			var p = r("./src/reddit/endpoints/subreddit/subscriptions.ts"),
				O = r("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				I = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				h = r("./src/reddit/models/GqlTopLevelField.ts"),
				g = r("./src/reddit/models/User/index.ts");

			function j(e) {
				const t = [],
					r = [],
					n = {},
					s = {},
					{
						followedRedditorsInfo: o
					} = e.identity;
				for (const c of o.edges) {
					if (c.node.__typename !== g.c.AvailableRedditor || !c.node.profile) continue;
					const e = Object(O.a)(c.node.profile);
					n[e.id] = e;
					const {
						isFavorite: r
					} = c.node.profile;
					r && t.push(e.id)
				}
				const {
					subscribedSubreddits: i
				} = e.identity;
				for (const c of i.edges) {
					if (c.node.__typename !== h.a.Subreddit) continue;
					const e = Object(I.a)(c.node);
					s[e.id] = e;
					const {
						isFavorite: t
					} = c.node;
					t && r.push(e.id)
				}
				return {
					favoriteProfileIds: t,
					favoriteSubredditIds: r,
					profiles: n,
					subreddits: s
				}
			}
			var _ = r("./src/reddit/models/Toast/index.ts"),
				v = r("./src/reddit/selectors/profile.ts"),
				S = r("./src/reddit/selectors/subreddit.ts"),
				E = r("./src/reddit/selectors/subscriptions.ts"),
				x = r("./src/reddit/selectors/user.ts");
			const y = () => n.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				C = Object(o.a)(d.c),
				T = Object(o.a)(d.b),
				N = Object(o.a)(d.a),
				P = Object(o.a)(d.h),
				k = (Object(o.a)(d.i), Object(o.a)(d.g), () => async (e, t, {
					gqlContext: r
				}) => {
					const n = t();
					if (!n.user.account || n.subscriptions.api.fetched) return;
					e(T());
					const s = await Object(p.a)(r());
					if (s.ok) {
						const t = j(s.body.data);
						e(C(t))
					} else e(N({
						error: s.error
					}))
				}),
				D = (e, t) => t.type === l.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				U = (e, t, r) => async (o, d, {
					apiContext: b
				}) => {
					let m = e.map(e => e.type === l.a.SUBREDDIT ? {
						id: Object(S.C)(d(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(v.m)(d(), e.name),
						name: `${s.ic}${e.name}`,
						type: e.type
					});
					if (!Object(x.K)(d())) return o(Object(a.k)({
						actionSource: a.a.Subscribe
					})), void o(Object(c.j)());
					const f = Object(x.k)(d());
					if (f) {
						const t = m.length,
							r = e.length;
						if (m = m.filter(e => !D(f, e)), (e = e.filter(e => !D(f, e))).length !== r || m.length !== t) {
							const e = n.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							o(Object(u.f)(Object(u.e)(e, _.b.Error)))
						}
						if (!e.length && !m.length) return
					}
					o(P({
						identifiers: m,
						nameIdentifiers: e,
						profileModels: d().profiles.models,
						subredditModels: d().subreddits.models,
						subscriptionsCount: Object(E.b)(d()),
						userIsSubscriber: t,
						widgetId: r
					}));
					const O = await Object(p.c)(b(), {
						subredditNames: m.map(({
							name: e
						}) => e),
						subscribe: t
					});
					if (O.ok) {
						const r = 1 === e.length ? `${"subreddit"===e[0].type?i.d.subreddit:i.d.profile}${e[0].name}` : n.fbt._({
								"*": "{communities} communities",
								_1: "1 community"
							}, [n.fbt._plural(e.length, "communities")], {
								hk: "IgDzJ"
							}),
							s = n.fbt._("Sucсessfully followed {communityname}", [n.fbt._param("communityname", r)], {
								hk: "1S5AXJ"
							}),
							c = n.fbt._("Sucсessfully unfollowed {communityname}", [n.fbt._param("communityname", r)], {
								hk: "2XWHyB"
							}),
							a = n.fbt._("Sucсessfully joined {communityname}", [n.fbt._param("communityname", r)], {
								hk: "3Al8aF"
							}),
							d = n.fbt._("Sucсessfully left {communityname}", [n.fbt._param("communityname", r)], {
								hk: "2w5JFZ"
							});
						o(Object(u.f)({
							text: 1 === e.length && "profile" === e[0].type ? t ? s : c : t ? a : d
						}))
					} else {
						o(P({
							identifiers: m,
							nameIdentifiers: e,
							profileModels: d().profiles.models,
							subredditModels: d().subreddits.models,
							subscriptionsCount: Object(E.b)(d()),
							userIsSubscriber: !t,
							widgetId: r
						}));
						const s = n.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						o(Object(u.f)(Object(u.e)(s, _.b.Error)))
					}
					return O.ok
				}, w = Object(o.a)(d.f), R = e => async (t, r, {
					apiContext: n
				}) => {
					const s = r(),
						o = Object(S.J)(s, {
							identifier: e
						});
					if (!o) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const i = e.type === l.a.SUBREDDIT ? o.name : `u_${o.name}`,
						c = s.subscriptions.favoriteSubredditOrder || [],
						a = s.subscriptions.favoriteProfileOrder || [],
						d = c.indexOf(e.id),
						b = a.indexOf(e.id),
						m = -1 === d && -1 === b,
						f = s.subreddits.models,
						O = s.profiles.models;
					t(w({
						makeFavorite: m,
						identifier: e,
						subredditModels: f,
						profileModels: O
					}));
					const I = {
							type: e.type,
							name: o.name
						},
						h = () => Object(S.db)(r(), {
							identifier: I
						});
					(h() || (await t(U([I], !0)), h())) && ((await Object(p.b)(n(), i, m)).ok || (t(w({
						makeFavorite: !m,
						identifier: e,
						subredditModels: f,
						profileModels: O
					})), t(Object(u.f)({
						text: y(),
						kind: _.b.Error
					}))))
				}, A = Object(o.a)(d.d), L = e => async (t, r, {
					apiContext: n
				}) => {
					const o = r().multireddits.models,
						i = () => {
							t(Object(u.f)({
								text: y(),
								kind: _.b.Error
							}))
						},
						c = o[e];
					if (!c) return void i();
					const a = !c.isFavorited;
					t(A({
						makeFavorite: a,
						multiredditPath: e,
						multiredditsModelsState: o
					})), (await ((e, t, r) => Object(b.a)(Object(m.a)(e, [f.a]), {
						method: s.jb.POST,
						endpoint: `${e.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: r ? "true" : "false",
							multipath: t,
							api_type: "json"
						}
					}))(n(), e, a)).ok || (t(A({
						makeFavorite: !a,
						multiredditPath: e,
						multiredditsModelsState: o
					})), i())
				}, M = Object(o.a)(d.e), H = e => async (t, r, {
					apiContext: o
				}) => {
					const i = r(),
						c = i.multireddits.models;
					if (!Object(x.K)(i)) return;
					const a = (e = !0) => {
							t(Object(u.f)({
								text: n.fbt._("Sorry, failed to {followAction}", [n.fbt._param("followAction", e ? n.fbt._("follow", null, {
									hk: "2I4uia"
								}) : n.fbt._("unfollow", null, {
									hk: "1ZDqgR"
								}))], {
									hk: "1ufRSl"
								}),
								kind: _.b.Error
							}))
						},
						d = c[e];
					if (!d) return void a();
					const l = !d.isFollowed;
					t(M({
						follow: l,
						multiredditPath: e,
						multiredditsModelsState: c
					})), (await ((e, t, r) => Object(b.a)(Object(m.a)(e, [f.a]), {
						method: s.jb.POST,
						endpoint: `${e.apiUrl}/api/multi/subscribe`,
						data: {
							action: r ? "sub" : "unsub",
							path: t,
							api_type: "json"
						},
						type: "json"
					}))(o(), e, l)).ok || (t(M({
						follow: !l,
						multiredditPath: e,
						multiredditsModelsState: c
					})), a(l))
				}
		},
		"./src/reddit/components/ImageWithFallback/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			r("./node_modules/react/index.js");
			const n = e => new Promise((t, r) => {
				const n = new Image;
				n.onload = () => t(n), n.onerror = r, n.src = e
			})
		},
		"./src/reddit/components/LottieAnimation/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/lottie-web/build/player/lottie.js"),
				s = r.n(n),
				o = r("./node_modules/react/index.js"),
				i = r.n(o),
				c = r("./src/reddit/components/LottieAnimation/util.ts");
			const a = i.a.memo(e => {
				const t = i.a.createRef(),
					{
						assetData: r,
						assetUrl: n,
						className: a,
						hidden: d,
						loop: u,
						useCanvasRenderer: l,
						onClick: b,
						prefersReducedAnimation: m
					} = e,
					[f, p] = Object(o.useState)(r);
				Object(o.useEffect)(() => {
					n ? Object(c.a)(n).then(p) : r && p(r)
				}, [n, r]);
				const [O, I] = Object(o.useState)(null);
				Object(o.useEffect)(() => {
					const e = t.current;
					if (!e || 0 !== e.childElementCount || O || !f) return;
					const r = s.a.loadAnimation({
						autoplay: !1,
						renderer: l ? "canvas" : "svg",
						loop: u,
						container: e,
						animationData: f
					});
					I(r)
				}, [u, t, O, f]), Object(o.useEffect)(() => {
					if (O)
						if (d) O.stop();
						else if (m) {
						const e = O.getDuration(!0);
						O.goToAndPlay(e, !0)
					} else O.goToAndPlay(0)
				}, [d, m, O]);
				const h = Object(o.useCallback)(() => {
					O && O.goToAndPlay(0)
				}, [O]);
				return i.a.createElement("div", {
					className: a,
					style: {
						display: d ? "none" : "block"
					},
					ref: t,
					onClick: b || h
				})
			});
			t.a = a
		},
		"./src/reddit/components/LottieAnimation/util.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			r("./src/reddit/components/ImageWithFallback/index.tsx");
			const n = {};

			function s(e) {
				let t = n[e];
				return t || (t = n[e] = fetch(e, {
					mode: "cors",
					cache: "force-cache"
				}).then(t => (t.ok || function(e) {
					throw new Error(`Unable to download effect asset "${e}"`)
				}(e), t.json()))), t
			}
		},
		"./src/reddit/components/SEOTitle/index.m.less": function(e, t, r) {
			e.exports = {
				Title: "_eYtD2XCVieq6emjKBH3m",
				title: "_eYtD2XCVieq6emjKBH3m"
			}
		},
		"./src/reddit/components/SEOTitle/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var n, s, o = r("./node_modules/react/index.js"),
				i = r.n(o),
				c = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js");
			! function(e) {
				e[e.Collection = 0] = "Collection", e[e.HeaderSelector = 1] = "HeaderSelector", e[e.PostComments = 2] = "PostComments", e[e.PostItem = 3] = "PostItem", e[e.TopicHeader = 4] = "TopicHeader", e[e.Widget = 5] = "Widget"
			}(n || (n = {})),
			function(e) {
				e[e.H1 = 1] = "H1", e[e.H2 = 2] = "H2", e[e.H3 = 3] = "H3", e[e.H4 = 4] = "H4", e[e.H5 = 5] = "H5", e[e.H6 = 6] = "H6"
			}(s || (s = {}));
			var d = r("./src/lib/constants/index.ts"),
				u = r("./src/reddit/helpers/postCollection.ts");
			const l = [d.Mb.COMMENTS, d.Mb.COLLECTION_COMMENTS],
				b = (e, t) => {
					if (!e) return [];
					const r = l.includes(e),
						s = e === d.Mb.COLLECTION_COMMENTS || t && Object(u.a)(t),
						o = d.V.has(e),
						i = d.Cb.has(e),
						c = e === d.Mb.SUBREDDIT,
						a = e === d.Mb.TOPIC;
					let b, m, f;
					return o && !c || i ? b = n.HeaderSelector : s ? b = n.Collection : r ? b = n.PostComments : a && (b = n.TopicHeader), (o || i || s || r) && (m = n.Widget), (o || r) && (f = n.PostItem), [b, m, f]
				};
			var m = r("./src/reddit/contexts/PageLayer/index.tsx"),
				f = r("./src/reddit/selectors/platform.ts"),
				p = r("./src/reddit/components/SEOTitle/index.m.less"),
				O = r.n(p);
			const I = ({
					level: e,
					children: t
				}) => {
					const r = `h${e}`;
					return i.a.createElement(r, {
						className: O.a.Title
					}, t)
				},
				h = Object(m.u)(),
				g = Object(c.b)(() => Object(a.a)((e, {
					pageLayer: t
				}) => t && Object(f.n)(e, {
					page: t
				}), (e, {
					pageLayer: t
				}) => t && t.meta && t.meta.name, (e, {
					type: t
				}) => t, (e, t, r) => ({
					level: b(t, e).indexOf(r) + 1 || void 0
				})));
			class j extends i.a.Component {
				render() {
					const {
						children: e,
						level: t
					} = this.props;
					return t ? i.a.createElement(I, {
						level: t
					}, e) : i.a.createElement(i.a.Fragment, null, e)
				}
			}
			t.b = h(g(j))
		},
		"./src/reddit/components/SubredditIcon/index.m.less": function(e, t, r) {
			e.exports = {
				Image: "_34CfAAowTqdbNDYXz5tBTW",
				image: "_34CfAAowTqdbNDYXz5tBTW",
				UserIcon: "_3-8BEp7zk8HU_Tq2SjmosX",
				userIcon: "_3-8BEp7zk8HU_Tq2SjmosX",
				PlanetIcon: "_2WM2ef3imxyCFqHx0Nx5M4",
				planetIcon: "_2WM2ef3imxyCFqHx0Nx5M4",
				BackupImage: "RK004G8fbNOkGdNLEzm67",
				backupImage: "RK004G8fbNOkGdNLEzm67",
				iconContainer: "_7nyhK_sDI_8i22XNdcMzb",
				editableIcon: "_1AxWRIyg1lV9-r_CmqYj0o",
				flexContainer: "-Mpi2pdgifDBOdpUYX2vh",
				clickableUploadText: "_3H6u2CWhsluIPVF14GpEaA",
				inTopBar: "_1UpdjN7u66BU606z97t4HS",
				emptyUploadButton: "ndkYE2hc8Y-V3NHpSYvxA",
				transition: "_1iA7YdCRjbU9Rd_2VNGvsw",
				emptyEditableIcon: "_1h9JeZaSDxkh67Ns3QVUP2",
				emptyPlusButton: "Dh1qxsy_tIctL9f4LEzv9",
				imageUploader: "JBITiVY1zX1mMDq-sHkru",
				loadingIcon: "_3Dk8QRKhQImYqds2lSF6G4",
				loadingIconInTopBar: "_1U3KLnHX2TdXL5lNrrv4EW",
				emptyEditableIconInTopBar: "_3-i_fdY8zqHIo3CjuVzTYE",
				defaultCommunityIcon: "_1xvdfUtOPDANqHjxzxKX5b",
				mNightmode: "_1TI6C7sqGL9TRdsq1jRks"
			}
		},
		"./src/reddit/components/SubredditIcon/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return S
			}));
			var n = r("./src/config.ts"),
				s = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/react/index.js"),
				i = r.n(o),
				c = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/lessComponent.tsx"),
				u = r("./src/reddit/components/UserIcon/index.tsx"),
				l = r("./src/reddit/constants/colors.ts"),
				b = r("./src/reddit/contexts/PageLayer/index.tsx"),
				m = r("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				f = r("./src/reddit/icons/fonts/index.tsx"),
				p = r("./src/reddit/models/Subreddit/index.ts"),
				O = r("./src/reddit/selectors/user.ts"),
				I = r("./src/reddit/components/SubredditIcon/index.m.less"),
				h = r.n(I);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const j = d.a.wrapped(u.a, "UserIcon", h.a),
				_ = d.a.img("Image", h.a),
				v = ({
					iconColor: e,
					...t
				}) => i.a.createElement(_, g({
					style: {
						backgroundColor: e || ""
					}
				}, t)),
				S = d.a.div("BackupImage", h.a),
				E = Object(b.u)();
			t.b = E(e => {
				const t = Object(c.e)(O.X);
				let r, o, d;
				if (e.subredditOrProfile) {
					const {
						url: t,
						color: n
					} = Object(m.a)({
						shouldHideNsfwIcon: !!e.shouldHideNsfwIcon,
						subredditOrProfile: e.subredditOrProfile
					});
					Object(p.h)(e.subredditOrProfile) ? d = i.a.createElement(j, {
						className: e.className,
						iconUrl: t,
						isNSFW: e.subredditOrProfile.isNSFW,
						userName: e.subredditOrProfile.name
					}) : (r = t, o = n)
				} else r = e.shouldHideNsfwIcon ? `${n.a.assetPath}/img/avatar_over18.png` : e.iconUrl, o = e.primaryColor || l.a.alienblue;
				return r ? d = i.a.createElement(v, {
					alt: s.fbt._("Subreddit Icon", null, {
						hk: "134aM1"
					}),
					className: e.className,
					iconColor: o,
					role: "presentation",
					src: r
				}) : d || (d = i.a.createElement(f.a, {
					name: "community",
					isFilled: !t,
					className: Object(a.a)(e.className, h.a.defaultCommunityIcon, {
						[h.a.mNightmode]: t
					}),
					style: t ? {
						backgroundColor: e.redditStyle ? l.a.alienblue : o
					} : {
						color: e.redditStyle ? l.a.alienblue : o
					}
				})), e.linkTo ? i.a.createElement("a", {
					href: e.linkTo
				}, d) : i.a.createElement(i.a.Fragment, null, d)
			})
		},
		"./src/reddit/components/TrackingHelper/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "c", (function() {
				return b
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/reddit/selectors/telemetry.ts"),
				c = r("./src/telemetry/index.ts");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const d = s.a.createContext(() => {});

			function u({
				children: e
			}) {
				const t = Object(o.f)(),
					r = Object(n.useCallback)(e => {
						{
							const r = t.getState(),
								n = e(r);
							Object(c.a)({
								...i.o(r),
								...n
							})
						}
					}, [t]);
				return s.a.createElement(d.Provider, {
					value: r
				}, e ? s.a.Children.only(e) : null)
			}

			function l() {
				return Object(n.useContext)(d)
			}

			function b(e) {
				function t(t) {
					const r = l();
					return s.a.createElement(e, a({}, t, {
						sendEvent: r
					}))
				}
				const r = e.name || e.displayName;
				return t.displayName = `Tracked(${r})`, t.WrappedComponent = e, t
			}
		},
		"./src/reddit/components/UserIcon/PresenceDot.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/hooks/useIntersectionObserver.ts"),
				c = r("./src/reddit/icons/svgs/PresenceCircle/index.tsx"),
				a = r("./src/reddit/components/UserIcon/UserIcon.m.less"),
				d = r.n(a);
			t.default = e => {
				const {
					showPresence: t,
					onceInViewport: r
				} = e, a = Object(n.useRef)(null), u = Object(n.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t
						} = e;
						t && r && r()
					})
				}, [r]);
				return Object(i.a)(a, u), s.a.createElement(c.a, {
					ref: a,
					className: Object(o.a)(d.a.presenceDot, {
						[d.a.isLit]: t
					}),
					isHighlighted: e.isHighlighted,
					outlineClassName: e.outlineClassName
				})
			}
		},
		"./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				i = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/components/UserIcon/UserIcon.m.less"),
				a = r.n(c);
			t.a = function({
				backgroundClassName: e,
				className: t,
				headshot: r
			}) {
				return o.a.createElement("div", {
					className: Object(i.a)(a.a.snoovatarWrapper, t)
				}, o.a.createElement("div", {
					className: Object(i.a)(a.a.snoovatarBackground, e)
				}), o.a.createElement("div", {
					className: a.a.snoovatarHeadshotContainer
				}, o.a.createElement("img", {
					alt: n.fbt._("User avatar", null, {
						hk: "12gjW8"
					}),
					className: a.a.snoovatarHeadshot,
					src: r
				})))
			}
		},
		"./src/reddit/components/UserIcon/UserIcon.m.less": function(e, t, r) {
			e.exports = {
				currentUserIconWrapper: "efdkOLo3oigH_95whTYCp",
				userIconWrapper: "_2p14AQvJBvTrEEa4csiW9v",
				isProfileIcon: "_1lxVpLf3223Gve3gRhbG-R",
				DefaultUserIcon: "_3utuhrSAkEkzgaswqglvpN",
				defaultUserIcon: "_3utuhrSAkEkzgaswqglvpN",
				UserIcon: "_2TN8dEgAQbSyKntWpSPYM7",
				userIcon: "_2TN8dEgAQbSyKntWpSPYM7",
				mNightmode: "_2aVSEFJsIE0M-4uRE-U24H",
				nftAnimation: "_3fhlcUDP9SJN47QMfuzW_j",
				snoovatarWrapper: "_1cyAeeYDGrx7MPL_jRwKZ",
				snoovatarBackground: "_2_QqG5dG916znjlVV8ZCbw",
				snoovatarHeadshotContainer: "_1XJXnCAngvZLEeLpB3oa4L",
				snoovatarHeadshot: "ScrrUjzznpAqm92uwgnvO",
				presenceDot: "_2dn5Ncenn0BSD4tCSmxQhA",
				isLit: "GpWjjkZl5_kV4yZYWBaT2",
				hasHeadShotWrapper: "_1TENjLYSaj4L4uJMZa3DRe"
			}
		},
		"./src/reddit/components/UserIcon/UserIcon.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return m
			})), r.d(t, "c", (function() {
				return f
			}));
			var n = r("./src/config.ts"),
				s = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/react/index.js"),
				i = r.n(o),
				c = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/icons/svgs/SnooSilhouette/index.tsx"),
				u = r("./src/reddit/selectors/experiments/econ/index.ts"),
				l = r("./src/reddit/components/UserIcon/UserIcon.m.less"),
				b = r.n(l);
			const m = `${n.a.assetPath}/img/avatar_over18_square.png`,
				f = e => !e || e.includes("avatar_default_");
			t.b = e => {
				const {
					className: t,
					iconUrl: r,
					isCurrentUser: n,
					isNightMode: o,
					isNSFW: l,
					nsfwIconUrl: p,
					shouldHideNSFW: O
				} = e;
				if (Object(c.e)(e => {
						f(r) && Object(u.i)(e)
					}), n && f(r) || !n && !r) return i.a.createElement(d.a, {
					className: Object(a.a)(b.a.DefaultUserIcon, t, {
						[b.a.mNightmode]: o
					})
				});
				const I = !n && l && O ? p || m : r;
				return i.a.createElement("img", {
					alt: s.fbt._("User avatar", null, {
						hk: "X43nA"
					}),
					className: Object(a.a)(b.a.UserIcon, t),
					src: I
				})
			}
		},
		"./src/reddit/components/UserIcon/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/classNames/index.ts"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				i = r("./src/config.ts"),
				c = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				d = r("./src/realtime/GQLSubscription/async.tsx"),
				u = r("./src/reddit/helpers/userSnoovatar/index.ts"),
				l = r("./src/reddit/hooks/useIntersectionObserver.ts"),
				b = r("./src/reddit/models/User/index.ts"),
				m = r("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				f = r("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				p = r("./src/reddit/components/UserIcon/UserIcon.tsx"),
				O = r("./src/reddit/selectors/user.ts"),
				I = r("./src/reddit/components/LottieAnimation/index.tsx"),
				h = r("./src/reddit/selectors/experiments/profileAvatarChangeFix.ts"),
				g = r("./src/reddit/components/UserIcon/UserIcon.m.less"),
				j = r.n(g);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const v = () => {},
				S = Object(a.c)({
					currentUser: O.k,
					isNightMode: O.X,
					shouldHideNSFW: O.C,
					user: O.nb,
					isProfileAvatarChangeFixEnabled: h.a
				}),
				E = Object(c.b)(S);
			t.a = E(e => {
				const {
					authorId: t,
					collapsed: r,
					currentUser: c,
					iconUrl: a,
					isCommentAuthorBlocked: O,
					isHighlighted: h,
					isNft: g,
					isNSFW: S,
					shouldUseOnlineOverride: E,
					isOnlineOverrideValue: x,
					isOnlineStatusLoadTest: y,
					isProfileIcon: C,
					omitResponsivePresenceWrapper: T,
					onPresenceIndicatorInViewport: N,
					shouldShowPresenceIndicator: P,
					user: k,
					userName: D,
					isProfileAvatarChangeFixEnabled: U,
					...w
				} = e, R = !!c && Object(b.e)(c) === D, A = R ? c : k, L = A && A.accountIcon || a, M = k ? k.isNSFW : S, H = Object(u.a)(L) && !O, G = H ? o.a.createElement(f.a, {
					headshot: L,
					className: e.className
				}) : o.a.createElement(p.b, _({}, w, {
					iconUrl: O && r ? "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_3.png" : L,
					isCurrentUser: R,
					isNSFW: M
				})), [F, B] = Object(s.useState)(!1), W = Object(s.useMemo)(() => ({
					input: {
						channel: {
							teamOwner: "CONTENT_AND_COMMUNITIES",
							category: "ONLINE_STATUS_INDICATOR",
							userID: t
						}
					}
				}), [t]), q = Object(s.useCallback)(e => {
					const {
						isOnline: t
					} = e.subscribe.data;
					B(t)
				}, []), K = Object(s.useRef)(null), [z, V] = Object(s.useState)(!1), X = Object(s.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t,
							intersectionRatio: r
						} = e, n = 1 !== r;
						t ? V(!0) : n && V(!1)
					})
				}, []), $ = Object(s.useRef)({
					rootMargin: "750px 0px 1000px 0px"
				});
				return Object(l.a)(K, X, $.current), T ? G : o.a.createElement("div", {
					className: Object(n.a)(j.a.userIconWrapper, {
						[j.a.nftUserIcon]: g,
						[j.a.hasHeadShotWrapper]: H,
						[j.a.isProfileIcon]: C && U
					}),
					ref: K
				}, g && o.a.createElement(I.a, {
					className: j.a.nftAnimation,
					assetUrl: `${i.a.assetPath}/img/snoovatars/nft_comment_animation.json`,
					loop: !0
				}), G, P && (F || E && x) && o.a.createElement(m.default, {
					showPresence: !0,
					isHighlighted: h,
					onceInViewport: N
				}), (P || y) && !E && z && o.a.createElement(d.a, {
					variables: W,
					onData: P ? q : v,
					queryKey: "isUserOnline"
				}))
			})
		},
		"./src/reddit/constants/elementClassNames.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "f", (function() {
				return i
			})), r.d(t, "k", (function() {
				return c
			})), r.d(t, "m", (function() {
				return a
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "n", (function() {
				return u
			})), r.d(t, "j", (function() {
				return l
			})), r.d(t, "g", (function() {
				return b
			})), r.d(t, "a", (function() {
				return m
			})), r.d(t, "l", (function() {
				return f
			})), r.d(t, "h", (function() {
				return p
			})), r.d(t, "i", (function() {
				return O
			}));
			const n = "DraftEditor-contentwrapper",
				s = "public-DraftStyleDefault-block",
				o = "data-offset-key",
				i = "hovered",
				c = "scrollerItem",
				a = "threadline",
				d = "header-user-dropdown",
				u = "voteButton",
				l = "RichTextJSON-root",
				b = "ImageBox-image",
				m = "content-type-link",
				f = "styled-outbound-link",
				p = "ListingLayout-backgroundContainer",
				O = "ListingLayout-outerContainer"
		},
		"./src/reddit/contexts/InsideOverlay.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return c
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const i = s.a.createContext(!1);

			function c(e) {
				function t(t) {
					return s.a.createElement(i.Consumer, null, r => s.a.createElement(e, o({}, t, {
						isOverlay: r
					})))
				}
				return t.displayName = `WithOverlay(${e.displayName||e.name})`, t
			}
		},
		"./src/reddit/controls/OutboundLink/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return T
			})), r.d(t, "c", (function() {
				return N
			}));
			var n = r("./node_modules/lodash/omit.js"),
				s = r.n(n),
				o = r("./node_modules/query-string/index.js"),
				i = r.n(o),
				c = r("./node_modules/react/index.js"),
				a = r.n(c),
				d = r("./node_modules/react-redux/es/index.js"),
				u = r("./node_modules/reselect/es/index.js"),
				l = r("./src/lib/addQueryParams/index.ts");
			var b = (e, t) => t ? Object(l.a)(e, {
				user_id: t
			}) : e;
			var m = r("./src/lib/opener/index.ts"),
				f = r("./src/lib/redditId/index.ts"),
				p = r("./src/reddit/actions/post.ts"),
				O = r("./src/reddit/constants/adEvents.ts"),
				I = r("./src/reddit/helpers/getVendorMetadata.ts"),
				h = r("./src/reddit/helpers/pixels.ts"),
				g = r("./src/reddit/helpers/trackers/ads.ts"),
				j = r("./src/reddit/hooks/useOutboundClickTracking.ts"),
				_ = r("./src/reddit/selectors/posts.ts"),
				v = r("./src/reddit/selectors/telemetry.ts"),
				S = r("./src/reddit/selectors/user.ts");

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const x = Object(u.a)(S.a, S.k, (e, {
					isSponsored: t,
					postId: r
				}) => t && r ? Object(_.b)(e, r) : null, _.H, v.d, (e, t, r, n, s) => ({
					allowClickTracking: e,
					basePixelMetadata: r,
					userId: t ? Object(f.a)(t.id) : null,
					post: n,
					pageType: s.pageType
				})),
				y = Object(d.b)(x, e => ({
					fireAdPixelsOfType: (t, r) => e(Object(p.z)(t, r)),
					recordClick: (t, r, n) => {
						const s = t.events.filter(({
							type: e,
							url: t
						}) => e === O.a.Click && Object(h.b)(t));
						Object(h.c)(s), e(Object(p.p)(String(r), {
							postId: t.id,
							vendorMetadata: n
						}))
					}
				})),
				C = (e, t, r, n) => {
					const s = t.outboundUrlExpiration && t.outboundUrlExpiration > Date.now();
					n && t.outboundUrl && s && (e.href = b(t.outboundUrl, r), e.href = function(e) {
						return Object(l.a)(e, {
							web_redirect: "true"
						})
					}(e.href))
				},
				T = (e, t, r) => {
					let n, s = null;
					if (e && t && /^(http|https):\/\/([a-z]+\.)?reddit.com/.test(r)) {
						s = Object(I.a)(e, t, O.a.Click);
						const {
							url: o,
							query: c
						} = i.a.parseUrl(r);
						n = i.a.stringifyUrl({
							url: o,
							query: {
								...c,
								...s
							}
						})
					} else n = r;
					return {
						url: n,
						metadata: s
					}
				},
				N = (e, t, r) => {
					const n = T(t, r, e.href);
					return e.href = n.url, n.metadata
				},
				P = ({
					isSponsored: e,
					source: t
				}) => !!(e && (null == t ? void 0 : t.outboundUrl)),
				k = y(e => {
					const t = Object(c.useRef)(null),
						r = Object(j.a)(),
						{
							allowClickTracking: n,
							basePixelMetadata: o,
							commentId: i,
							fireAdPixelsOfType: d,
							href: u,
							isSponsored: l,
							pageType: b,
							post: f,
							postId: p,
							recordClick: I,
							source: h,
							sourceElement: _,
							userId: v
						} = e;
					let S = s()(e, ["allowClickTracking", "basePixelMetadata", "fireAdPixelsOfType", "isSponsored", "postId", "post", "recordClick", "commentId", "source", "sourceElement", "userId", "pageType"]);
					const x = h && h.outboundUrl && l ? h.outboundUrl : u;
					return S = {
						...S,
						href: x,
						rel: l ? m.b : m.a,
						target: m.d.BLANK
					}, !h || (e => {
						const {
							outboundUrlCreated: t,
							outboundUrlReceived: r
						} = e;
						return !(!t || !r) && (t > r + 3e5 || t < r - 36e5)
					})(h) ? a.a.createElement("a", E({}, S, {
						onClick: () => r(u, _, i, p)
					})) : a.a.createElement("a", E({}, S, {
						onMouseDown: r => {
							if (!P(e)) return !(1 !== r.button && 2 !== r.button && !r.ctrlKey) || void C(r.currentTarget, h, v, n);
							t.current = N(r.currentTarget, p, o)
						},
						onClick: () => {
							f && (P(e) && (I(f, O.a.Click, t.current), Object(g.a)(f, b)), d(f, O.a.Click), r(u, _, i, p))
						},
						onMouseLeave: e => {
							l || ((e, t) => {
								e.href = t
							})(e.currentTarget, x)
						},
						onTouchStart: e => C(e.currentTarget, h, v, n),
						"data-testid": "outbound-link"
					}))
				});
			t.b = k
		},
		"./src/reddit/endpoints/subreddit/subscriptions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			}));
			var n = r("./src/redditGQL/operations/SubscribedSubreddits.json"),
				s = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/makeApiRequest/index.ts"),
				i = r("./src/lib/makeGqlRequest/index.ts"),
				c = r("./src/lib/omitHeaders/index.ts"),
				a = r("./src/reddit/constants/headers.ts"),
				d = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			t.a = e => Object(i.a)(e, n);
			const u = (e, {
					subredditIds: t,
					subredditNames: r,
					subscribe: n
				}) => Object(o.a)(Object(c.a)(e, [a.a]), {
					method: s.jb.POST,
					endpoint: Object(d.a)(`${e.apiUrl}/api/subscribe`),
					data: {
						action: n ? "sub" : "unsub",
						sr: t && t.join(",") || void 0,
						sr_name: r && r.join(",") || void 0,
						api_type: "json"
					}
				}),
				l = (e, t, r) => Object(o.a)(Object(c.a)(e, [a.a]), {
					method: s.jb.POST,
					endpoint: `${e.apiUrl}/api/favorite`,
					data: {
						make_favorite: r ? "true" : "false",
						sr_name: t,
						api_type: "json"
					}
				})
		},
		"./src/reddit/helpers/styles/smartTextColor.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/polished/dist/polished.es.js"),
				s = r("./src/reddit/models/NewStructuredStyles/index.ts");
			const o = e => Object(n.b)(e) < .6;

			function i(e, t = s.a.bodyText, r = s.b.bodyText) {
				return o(e) ? r : t
			}
		},
		"./src/reddit/helpers/trackers/ads.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return c
			}));
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/reddit/helpers/localStorage/index.ts"),
				o = r("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, r) => s => ({
					source: "post",
					action: "view",
					noun: "programmatic_ad",
					...o.o(s),
					subreddit: o.ib(s),
					programmatic: {
						adUnit: null !== e && null !== t ? `DESKTOP ${e}x${t} ${r}` : `DESKTOP ${r}`,
						count: 1,
						type: n.f.SWITCH_HOUSE_AD
					}
				}),
				c = (e, t) => {
					t && (Object(s.zb)(e.postId), Object(s.Hb)(t)), e.impressionIdStr ? Object(s.Ab)(e.impressionIdStr) : e.impressionId && Object(s.Ab)(e.impressionId)
				}
		},
		"./src/reddit/helpers/trackers/screenview.ts": function(e, t, r) {
			"use strict";
			r.d(t, "k", (function() {
				return E
			})), r.d(t, "f", (function() {
				return y
			})), r.d(t, "q", (function() {
				return C
			})), r.d(t, "r", (function() {
				return T
			})), r.d(t, "o", (function() {
				return N
			})), r.d(t, "s", (function() {
				return P
			})), r.d(t, "c", (function() {
				return k
			})), r.d(t, "l", (function() {
				return D
			})), r.d(t, "p", (function() {
				return U
			})), r.d(t, "i", (function() {
				return w
			})), r.d(t, "j", (function() {
				return R
			})), r.d(t, "g", (function() {
				return A
			})), r.d(t, "b", (function() {
				return H
			})), r.d(t, "a", (function() {
				return G
			})), r.d(t, "n", (function() {
				return F
			})), r.d(t, "m", (function() {
				return B
			})), r.d(t, "t", (function() {
				return K
			})), r.d(t, "w", (function() {
				return z
			})), r.d(t, "e", (function() {
				return V
			})), r.d(t, "d", (function() {
				return $
			})), r.d(t, "u", (function() {
				return Y
			})), r.d(t, "v", (function() {
				return Q
			})), r.d(t, "h", (function() {
				return J
			}));
			var n = r("./node_modules/lodash/pick.js"),
				s = r.n(n),
				o = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/makePostDraftPageKey/index.ts"),
				c = r("./src/reddit/constants/parameters.ts"),
				a = r("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				d = r("./src/reddit/helpers/routeKey/index.ts"),
				u = r("./src/reddit/helpers/trackers/postComposer.ts"),
				l = r("./src/reddit/helpers/trackers/profileSettings.ts"),
				b = r("./src/reddit/models/Comment/index.ts"),
				m = r("./src/reddit/models/Post/index.ts"),
				f = r("./src/reddit/routes/subreddit/index.ts"),
				p = r("./src/reddit/selectors/profile.ts"),
				O = r("./src/reddit/selectors/subreddit.ts"),
				I = r("./src/lib/makePostCreationPageKey/index.ts"),
				h = r("./src/lib/makeSearchKey/index.ts"),
				g = r("./src/reddit/helpers/correlationIdTracker.ts"),
				j = r("./src/reddit/helpers/trackers/searchResults.ts"),
				_ = r("./src/reddit/selectors/postDraft.ts"),
				v = r("./src/reddit/selectors/telemetry.ts"),
				S = r("./src/telemetry/index.ts");
			const E = (e, t, r, n, u, p) => {
					const {
						route: O
					} = e, {
						name: g
					} = O.meta;
					if (!g) return;
					const j = t.platform.currentPage;
					switch (g) {
						case o.Mb.COMMENTS: {
							const {
								partialCommentId: s,
								partialPostId: o
							} = e.match.params, i = Object(m.t)(o), c = Object(d.a)(e, t, t.posts.models[i]);
							if (!c) return;
							const u = s && Object(b.h)(s),
								{
									sortToUse: l
								} = Object(a.a)(t, i);
							Object(S.a)(k(c, i, u, r, n, l)(t));
							break
						}
						case o.Mb.INDEX:
						case o.Mb.LISTING:
						case o.Mb.MULTIREDDIT:
						case o.Mb.SUBREDDIT: {
							const s = Object(d.c)(e, t);
							if (!s.listingKey) return;
							const {
								params: i,
								queryParams: c,
								path: a
							} = e.match, {
								sort: u = (s.sort ? s.sort : o.W.HOT)
							} = i, l = c.t, b = a === f.a;
							Object(S.a)(y({
								key: s.listingKey,
								sort: u,
								timerType: r,
								timerMillis: n,
								timeSort: l,
								isPredictionsPage: b
							})(t));
							break
						}
						case o.Mb.TOPIC: {
							const s = Object(d.c)(e, t);
							if (!s.listingKey) return;
							const {
								params: i
							} = e.match, c = s.sort ? s.sort : o.X, {
								sort: a = c
							} = i;
							Object(S.a)(y({
								key: s.listingKey,
								sort: a,
								timerType: r,
								timerMillis: n
							})(t));
							break
						}
						case o.Mb.PROFILE_OVERVIEW: {
							const s = Object(d.d)(e, t);
							if (!s) return;
							const {
								params: i,
								queryParams: c
							} = e.match, {
								sort: a = o.Eb
							} = i, u = c.t;
							Object(S.a)(C(s, a, r, n, u)(t));
							break
						}
						case o.Mb.PROFILE_POSTS: {
							const s = Object(d.d)(e, t);
							if (!s) return;
							const {
								queryParams: i
							} = e.match, {
								sort: c = o.Eb,
								t: a = o.Fb
							} = i;
							Object(S.a)(T(s, c, r, n, a)(t));
							break
						}
						case o.Mb.PROFILE_COMMENTS: {
							const s = Object(d.d)(e, t);
							if (!s) return;
							const {
								queryParams: i
							} = e.match, {
								sort: c = o.Eb,
								t: a = o.Fb
							} = i;
							Object(S.a)(N(s, c, r, n, a)(t));
							break
						}
						case o.Mb.PROFILE_PRIVATE: {
							const s = Object(d.d)(e, t);
							if (!s) return;
							Object(S.a)(P(s)(n, r)(t));
							break
						}
						case o.Mb.FOLLOWERS:
							L(t);
							break;
						case o.Mb.PROFILE_MODERATION:
							p && U(t, !0);
							break;
						case o.Mb.SETTINGS: {
							const s = e;
							Object(S.a)(q(r, n)(t)), s.match.params.page === o.bc.Profile && Object(l.l)(t);
							break
						}
						case o.Mb.POST_CREATION:
							if (p && u) {
								const e = Object(I.a)(u);
								Object(S.a)(D(e, r, n)(t))
							}
							break;
						case o.Mb.POST_DRAFT: {
							const {
								draftId: s
							} = e.match.params, o = Object(i.a)(e.match.params);
							if (!o) return;
							M(t, o, s, r, n);
							break
						}
						case o.Mb.SUBREDDIT_WIKI:
							Object(S.a)(X(r, n)(t));
							break;
						case o.Mb.COINS:
							Object(S.a)(H(r, n)(t)), Object(S.a)(G()(t));
							break;
						case o.Mb.PREMIUM:
							Object(S.a)(F(r, n)(t)), Object(S.a)(B()(t));
							break;
						case o.Mb.APPEAL:
							Object(S.a)(W(r, n)(t));
							break;
						case o.Mb.INBOX_PAGES:
							p && A(t);
							break;
						case o.Mb.MODERATION_PAGES:
							p && w(t, !0, u ? u.subredditName : null, u ? u.profileName : null);
							break;
						case o.Mb.COLLECTION_COMMENTS:
							p && Q(t, !0);
							break;
						case o.Mb.MODQUEUE_PAGES:
							p && R(t, u ? u.subredditName : null, u ? u.profileName : null);
							break;
						case o.Mb.SUBREDDIT_LEADERBOARD:
							p && Object(S.a)(V()(t));
							break;
						case o.Mb.SEARCH_RESULTS:
							if (p) {
								const o = Object(d.e)(e, t);
								if (!o) return;
								Object(S.a)(Y(o, Object(h.e)(s()(j && j.queryParams || {}, c.u)), r, n, j)(t))
							}
							break;
						case o.Mb.PUBLIC_ACCESS_NETWORK:
							p && Object(S.a)(K()(t));
							break;
						case o.Mb.GEOTAGGING:
							p && Object(S.a)($()(t));
							break;
						case o.Mb.SUBREDDIT_CREATION:
							p && Object(S.a)(z()(t));
							break;
						case o.Mb.MOD_LISTING:
							p && J(t, !0)
					}
				},
				x = e => ({
					...v.o(e),
					userPreferences: v.qb(e)
				}),
				y = ({
					key: e,
					sort: t,
					timerType: r,
					timerMillis: n,
					timeSort: s,
					flairTitle: o,
					isPredictionsPage: i
				}) => c => {
					const {
						api: a
					} = c.listings.postOrder, d = !a.error[e] && !a.pending[e], u = i ? {
						paneName: "predictions",
						reason: "predictions_tournament"
					} : {};
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...x(c),
						actionInfo: v.d(c, {
							success: d,
							...u
						}),
						customFeed: v.m(c),
						listing: v.z(c, e, {
							sort: t,
							sortTime: s
						}),
						subreddit: v.ib(c),
						timer: v.ob(r, n),
						userSubreddit: v.rb(c),
						adblock: v.e(c),
						postFlair: {
							title: o
						},
						predictions: i ? Object(v.P)(c) : void 0
					}
				},
				C = (e, t, r, n, s) => o => {
					const i = v.z(o, e);
					i && (i.sort = t, s && (i.sortTime = s));
					const {
						api: c
					} = o.listings.postOrder, a = !c.error[e] && !c.pending[e];
					return {
						listing: i,
						source: "global",
						action: "view",
						noun: "screen",
						...x(o),
						actionInfo: v.d(o, {
							success: a
						}),
						profile: v.R(o),
						snoovatar: v.fb(o),
						subreddit: v.ib(o),
						timer: v.ob(r, n),
						userSubreddit: v.rb(o),
						adblock: v.e(o)
					}
				},
				T = (e, t, r, n, s) => o => {
					const i = v.z(o, e);
					i && (i.sort = t, s && (i.sortTime = s));
					const {
						api: c
					} = o.listings.postOrder, a = !c.error[e] && !c.pending[e];
					return {
						listing: i,
						source: "global",
						action: "view",
						noun: "screen",
						...x(o),
						actionInfo: v.d(o, {
							success: a
						}),
						profile: v.R(o),
						subreddit: v.ib(o),
						timer: v.ob(r, n),
						userSubreddit: v.rb(o),
						adblock: v.e(o)
					}
				},
				N = (e, t, r, n, s) => o => {
					const i = v.U(o, e);
					i && (i.sort = t, s && (i.sortTime = s));
					const {
						api: c
					} = o.profileCommentsPage, a = !c.error[e] && !c.pending[e];
					return {
						listing: i,
						source: "global",
						action: "view",
						noun: "screen",
						...x(o),
						actionInfo: v.d(o, {
							success: a
						}),
						profile: v.R(o),
						subreddit: v.ib(o),
						timer: v.ob(r, n),
						userSubreddit: v.rb(o),
						adblock: v.e(o)
					}
				},
				P = e => (t, r) => n => {
					const s = !n.profilePrivatePage.api.error[e] && !n.profilePrivatePage.api.pending[e];
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...x(n),
						actionInfo: v.d(n, {
							success: s
						}),
						profile: v.R(n),
						subreddit: v.ib(n),
						timer: v.ob(r, t),
						userSubreddit: v.rb(n),
						adblock: v.e(n)
					}
				},
				k = (e, t, r, n, s, o) => i => {
					const {
						api: c
					} = i.pages.comments, a = !c.error[e] && !c.pending[e], d = {
						source: "global",
						action: "view",
						noun: "screen",
						...x(i),
						actionInfo: v.d(i, {
							success: a
						}),
						post: v.I(i, t),
						profile: v.R(i),
						subreddit: v.ib(i),
						timer: v.ob(n, s),
						userSubreddit: v.rb(i),
						adblock: v.e(i),
						postEvent: v.L(i, {
							postId: t
						}),
						postCollection: v.K(i, {
							postId: t
						}),
						listing: v.z(i, void 0, {
							sort: o
						})
					};
					return r && (d.comment = v.j(i, r)), d
				},
				D = (e, t, r) => n => {
					const s = n.creations.api.page.fetched[e],
						o = n.platform.currentPage ? n.platform.currentPage.queryParams.source_id : void 0;
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...x(n),
						actionInfo: v.d(n, {
							success: s
						}),
						post: o ? v.I(n, o) : void 0,
						subreddit: v.ib(n),
						timer: v.ob(t, r),
						userSubreddit: v.rb(n),
						adblock: v.e(n)
					}
				},
				U = (e, t) => {
					Object(S.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...x(e),
						actionInfo: v.d(e, {
							success: t
						})
					})
				},
				w = (e, t, r, n) => {
					Object(S.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...x(e),
						actionInfo: v.d(e, {
							success: t
						}),
						profile: v.S(e, Object(p.m)(e, n)),
						subreddit: v.jb(e, Object(O.C)(e, r)),
						userSubreddit: v.rb(e),
						adblock: v.e(e)
					})
				},
				R = (e, t, r) => {
					Object(S.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...x(e),
						profile: v.S(e, Object(p.m)(e, r)),
						subreddit: v.jb(e, Object(O.C)(e, t)),
						userSubreddit: v.rb(e),
						adblock: v.e(e)
					})
				},
				A = e => {
					Object(S.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...x(e),
						actionInfo: v.d(e)
					})
				},
				L = e => {
					Object(S.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...x(e),
						actionInfo: v.d(e)
					})
				},
				M = (e, t, r, n, s) => {
					const o = e.creations.api.page.pending[t],
						i = !e.creations.api.page.error[t] && !o && !!r,
						c = Object(_.h)(e, r);
					Object(S.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...x(e),
						actionInfo: v.d(e, {
							success: i
						}),
						subreddit: v.ib(e),
						timer: v.ob(n, s),
						userSubreddit: v.rb(e),
						adblock: v.e(e),
						...c ? Object(u.n)(e, c) : {}
					})
				},
				H = (e, t) => r => ({
					source: "coins_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(g.c)(g.a.GoldPayment),
					...x(r),
					timer: v.ob(e, t),
					adblock: v.e(r)
				}),
				G = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...x(e)
				}),
				F = (e, t) => r => ({
					source: "premium_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(g.c)(g.a.GoldPayment),
					...x(r),
					timer: v.ob(e, t),
					adblock: v.e(r)
				}),
				B = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...x(e)
				}),
				W = (e, t) => r => ({
					source: "appeal",
					action: "view",
					noun: "page",
					...x(r),
					timer: v.ob(e, t)
				}),
				q = (e, t) => r => ({
					source: "global",
					action: "view",
					noun: "screen",
					...x(r),
					timer: v.ob(e, t)
				}),
				K = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					subreddit: v.ib(e),
					...x(e)
				}),
				z = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...x(e)
				}),
				V = () => e => ({
					action: "view",
					source: "global",
					noun: "screen",
					...x(e)
				}),
				X = (e, t) => r => ({
					source: "global",
					action: "view",
					noun: "screen",
					...x(r),
					customFeed: v.m(r),
					subreddit: v.ib(r),
					timer: v.ob(e, t),
					userSubreddit: v.rb(r),
					adblock: v.e(r)
				}),
				$ = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...x(e)
				}),
				Y = (e, t, r, n, s, i) => c => {
					let a = !0;
					if (t.type.indexOf(o.ac.Posts) > -1) {
						const {
							api: t
						} = c.listings.listingOrder;
						a = a && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(o.ac.Subreddits) > -1 || t.type.indexOf(o.ac.Users) > -1) {
						const {
							api: t
						} = c.listings.postOrder;
						a = a && !t.error[e] && !t.pending[e]
					}
					const d = v.G(c, s),
						u = v.hb(s),
						l = c.platform.currentPage && c.platform.currentPage.urlParams && c.platform.currentPage.urlParams.subredditName ? v.kb(c, c.platform.currentPage.urlParams.subredditName) : void 0;
					return {
						...j.c(c, t),
						source: "global",
						action: "view",
						noun: "screen",
						...v.o(c),
						actionInfo: v.d(c, {
							success: a,
							paneName: d
						}),
						timer: v.ob(r, n),
						search: {
							...v.bb(c, t, !0, s || void 0),
							...!!i && {
								originElement: i
							},
							structureType: u,
							subredditId: t.restrict_sr && l && l.id ? l.id : void 0,
							subredditName: t.restrict_sr && l && l.name ? l.name : void 0
						},
						...!!i && {
							correlationId: Object(g.c)(g.a.SearchResults)
						},
						userPreferences: {
							...v.qb(c),
							hideNsfw: !c.user.prefs.over18
						}
					}
				},
				Q = (e, t) => {
					Object(S.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...x(e),
						actionInfo: v.d(e, {
							success: t
						})
					})
				},
				J = (e, t) => {
					Object(S.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...x(e),
						actionInfo: v.d(e, {
							success: t
						})
					})
				}
		},
		"./src/reddit/helpers/trackers/searchResults.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return m
			})), r.d(t, "o", (function() {
				return f
			})), r.d(t, "g", (function() {
				return p
			})), r.d(t, "q", (function() {
				return O
			})), r.d(t, "p", (function() {
				return I
			})), r.d(t, "r", (function() {
				return h
			})), r.d(t, "t", (function() {
				return g
			})), r.d(t, "a", (function() {
				return _
			})), r.d(t, "h", (function() {
				return v
			})), r.d(t, "s", (function() {
				return S
			})), r.d(t, "l", (function() {
				return E
			})), r.d(t, "f", (function() {
				return x
			})), r.d(t, "k", (function() {
				return y
			})), r.d(t, "e", (function() {
				return T
			})), r.d(t, "n", (function() {
				return N
			})), r.d(t, "m", (function() {
				return P
			})), r.d(t, "b", (function() {
				return k
			})), r.d(t, "d", (function() {
				return D
			})), r.d(t, "i", (function() {
				return U
			})), r.d(t, "j", (function() {
				return w
			}));
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/reddit/constants/posts.ts"),
				o = r("./src/reddit/constants/tracking.ts"),
				i = r("./src/reddit/helpers/correlationIdTracker.ts"),
				c = r("./src/reddit/models/SearchDiscoveryUnit/index.ts"),
				a = r("./src/reddit/selectors/posts.ts"),
				d = r("./src/reddit/selectors/telemetry.ts");
			const u = {
				SEARCH: "search",
				SEARCH_RESULTS_BEST: "search_results_best"
			};
			var l;
			! function(e) {
				e.SUBREDDIT = "subreddit", e.PEOPLE = "people"
			}(l || (l = {}));
			const b = {
					subreddit: l.SUBREDDIT,
					profile: l.PEOPLE
				},
				m = (e, t) => {
					const r = d.ib(e);
					return {
						screen: d.ab(e),
						subreddit: r && t && t.restrict_sr ? r : null
					}
				},
				f = (e, t, r, n, s) => o => ({
					...x(o, e, t, s, n, r),
					noun: "ad"
				}),
				p = (e, t, r) => s => {
					let i = !0;
					if (t.type.indexOf(n.ac.Posts) > -1) {
						const {
							api: t
						} = s.listings.listingOrder;
						i = i && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(n.ac.Subreddits) > -1 || t.type.indexOf(n.ac.Users) > -1) {
						const {
							api: t
						} = s.listings.postOrder;
						i = i && !t.error[e] && !t.pending[e]
					}
					return {
						...m(s, t),
						source: u.SEARCH,
						action: o.c.VIEW,
						noun: "search_results_post",
						actionInfo: d.d(s, {
							success: i,
							pageType: "search_results_best",
							position: 0
						}),
						discoveryUnit: d.p(r),
						search: d.bb(s, t)
					}
				},
				O = (e, t) => r => ({
					action: o.c.VIEW,
					actionInfo: d.d(r),
					metaSearch: d.D(t),
					noun: e,
					screen: d.ab(r),
					search: d.eb(r, t),
					source: u.SEARCH
				}),
				I = (e, t) => r => ({
					action: o.c.CLICK,
					actionInfo: d.d(r),
					noun: e,
					metaSearch: d.D(t),
					screen: d.ab(r),
					search: d.eb(r, t),
					source: u.SEARCH
				}),
				h = (e, t, r) => n => ({
					source: u.SEARCH,
					action: o.c.CLICK,
					noun: d.b.Recent,
					actionInfo: d.d(n, {
						paneName: "subreddit_dropdown",
						position: r + 1
					}),
					search: {
						query: e,
						originPageType: n.platform.currentPage ? d.v(n.platform.currentPage) : void 0,
						queryId: d.cb(n, i.a.SearchResults)
					},
					...j(n, t)
				}),
				g = (e, t, r, n) => s => {
					const c = n.filter(e => e.id);
					return {
						source: u.SEARCH,
						action: o.c.CLICK,
						noun: d.b.Typeahead,
						actionInfo: d.d(s, {
							position: r + 1
						}),
						search: {
							query: t.displayInfo && t.displayInfo.subredditOrProfileName ? t.displayInfo.subredditOrProfileName : e,
							originPageType: s.platform.currentPage ? d.v(s.platform.currentPage) : void 0,
							queryId: d.cb(s, i.a.SearchResults),
							typeaheadActive: !0,
							subredditIds: c.map(e => e.id),
							numberSubreddits: c.length
						},
						...j(s, t)
					}
				},
				j = (e, t) => {
					const r = t.isSubreddit && t.id ? d.mb(e, t.id) : void 0,
						n = t.isProfile && t.id ? d.V(e, t.id) : void 0,
						s = {
							id: t.id,
							name: t.displayInfo ? t.displayInfo.subredditOrProfileName : void 0
						};
					return {
						subreddit: t.isSubreddit ? r || s : void 0,
						profile: t.isProfile ? n || s : void 0
					}
				};
			var _;
			! function(e) {
				e.TopResults = "tab_top_results", e.Posts = "tab_posts", e.CommunitiesAndUsers = "tab_communities", e.Communities = "tab_communities", e.Authors = "tab_authors"
			}(_ || (_ = {}));
			const v = (e, t) => r => ({
					...m(r, t),
					source: u.SEARCH,
					action: o.c.CLICK,
					noun: e,
					correlationId: Object(i.c)(i.a.SearchResults),
					actionInfo: d.d(r),
					search: d.bb(r, t)
				}),
				S = (e, t) => r => ({
					action: o.c.CLICK,
					correlationId: Object(i.c)(i.a.SearchResults),
					noun: e ? n.Yb.ToSubreddit : n.Yb.ToGlobal,
					search: d.bb(r, t),
					source: u.SEARCH
				}),
				E = (e, t, r, n, s) => o => x(o, e, t, r, n, s),
				x = (e, t, r, n, s, i) => {
					const c = d.G(e, n),
						a = C(e, t, s, i),
						l = d.g(e, r, s, i, c),
						b = null !== a ? l + a : null,
						m = d.hb(n),
						f = {
							...d.bb(e, r, !0, n || void 0),
							structureType: m
						};
					return {
						source: u.SEARCH,
						action: o.c.CLICK,
						noun: "post",
						actionInfo: n ? {
							pageType: d.v(n),
							paneName: c,
							position: b,
							relativePosition: a
						} : d.d(e, {
							paneName: c,
							position: b,
							relativePosition: a
						}),
						search: f,
						post: d.I(e, t),
						userPreferences: {
							hideNsfw: !e.user.prefs.over18
						},
						discoveryUnit: i ? d.p(i) : null
					}
				},
				y = (e, t, r, n, s, o) => i => T(i, e, t, r, n, s, o),
				C = (e, t, r, n) => {
					var s;
					return (null === (s = null == n ? void 0 : n.layout) || void 0 === s ? void 0 : s.viewTypeWeb) === c.b.Hero ? 0 : (null == n ? void 0 : n.postOrder) ? n.postOrder.indexOf(t) >= 0 ? n.postOrder.indexOf(t) : null : r ? d.x(e, t, r) : null
				},
				T = (e, t, r, n, i, c, l) => {
					if (!n) {
						n = Object(a.H)(e, {
							postId: c
						}).belongsTo
					}
					const m = d.G(e, r);
					let f, p;
					if (c) {
						f = C(e, c, i, l);
						const r = d.g(e, t, i, l, m);
						p = null !== f ? r + f : null
					} else {
						f = ((e, t, r, n) => n && n.subredditOrder ? n.subredditOrder.indexOf(t.id) : r ? d.y(e, t, r) : null)(e, n, i, l);
						const t = d.f(e, i, l);
						p = null !== f ? t + f : null
					}
					const O = d.hb(r),
						I = {
							...d.bb(e, t, !0, r || void 0),
							structureType: O
						};
					return {
						source: u.SEARCH,
						action: o.c.CLICK,
						noun: b[n.type],
						search: I,
						subreddit: n.type === s.a.SUBREDDIT ? d.mb(e, n.id) : void 0,
						profile: n.type === s.a.PROFILE ? d.V(e, n.id) : void 0,
						userPreferences: {
							hideNsfw: !e.user.prefs.over18
						},
						discoveryUnit: l ? d.p(l) : null,
						actionInfo: r ? {
							pageType: d.v(r),
							paneName: m,
							position: p,
							relativePosition: f
						} : d.d(e, {
							paneName: m,
							position: p,
							relativePosition: f
						}),
						post: c ? d.I(e, c) : void 0
					}
				},
				N = (e, t, r, n, s) => i => ({
					...x(i, t, r, n, e, s),
					action: o.c.VIEW
				}),
				P = (e, t, r, n) => s => ({
					...m(s, r),
					source: u.SEARCH,
					action: o.c.VIEW,
					noun: "search_results_post",
					correlationId: Object(i.c)(i.a.SearchResults),
					actionInfo: d.d(s, {
						relativePosition: d.x(s, t, e),
						position: d.u(s, t, e)
					}),
					search: {
						...d.bb(s, r),
						...!!n && {
							originElement: n
						}
					},
					post: d.I(s, t)
				}),
				k = (e, t) => r => ({
					...m(r, t),
					source: u.SEARCH,
					action: e,
					noun: "covid_banner",
					correlationId: Object(i.c)(i.a.SearchResults),
					actionInfo: d.d(r),
					search: d.bb(r, t)
				}),
				D = e => ({
					action: o.c.DISABLE,
					noun: "subreddit_search",
					source: u.SEARCH,
					subreddit: {
						id: null == e ? void 0 : e.id,
						name: null == e ? void 0 : e.name,
						nsfw: null == e ? void 0 : e.isNSFW,
						quarantined: null == e ? void 0 : e.isQuarantined
					}
				});

			function U(e, t) {
				return r => ({
					...m(r, t),
					source: u.SEARCH,
					action: o.c.VIEW,
					noun: `no_${e}_results`,
					correlationId: Object(i.c)(i.a.SearchResults),
					actionInfo: d.d(r),
					search: d.bb(r, t)
				})
			}

			function w(e, t) {
				return r => ({
					...m(r),
					source: u.SEARCH,
					action: o.c.CLICK,
					noun: e,
					actionInfo: d.d(r),
					search: d.bb(r, t)
				})
			}
		},
		"./src/reddit/hooks/useIntersectionObserver.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js");
			t.a = function(e, t, r) {
				Object(n.useEffect)(() => {
					const n = e && e.current;
					if (!n || "undefined" == typeof IntersectionObserver) return;
					const s = new IntersectionObserver(t, r);
					return s.observe(n), () => {
						s.unobserve(n)
					}
				}, [e, t, r])
			}
		},
		"./src/reddit/hooks/useOutboundClickTracking.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return m
			}));
			var n = r("./src/reddit/components/TrackingHelper/index.tsx");
			const s = /^https?:\/\/([\w\.\-]+\.)?(reddit(media|static)?\.com|redd\.it)(\/|$)/;
			var o = r("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, r, n) => s => {
				const i = {
					noun: "outbound_link",
					action: "click",
					source: "link",
					...Object(o.o)(s),
					actionInfo: Object(o.d)(s),
					geo: Object(o.t)(s),
					screen: Object(o.ab)(s),
					subreddit: Object(o.ib)(s),
					outbound: Object(o.F)(s, e, t, n, r)
				};
				return r && (i.comment = Object(o.j)(s, r)), n && (i.post = Object(o.I)(s, n)), i
			};
			var c = r("./src/lib/serviceWorker/index.ts"),
				a = r("./node_modules/react-redux/es/index.js"),
				d = r("./src/telemetry/helpers/getSerializedThriftJSON.ts"),
				u = r("./src/telemetry/helpers/getSignatureHeader.ts"),
				l = r("./src/telemetry/models/Event.ts");
			const b = () => {
				const e = Object(a.f)();
				return t => {
					const r = t(e.getState()),
						n = l.g(r),
						s = Object(d.a)(n),
						o = Object(u.b)(s);
					Object(c.b)("sendV2EventsData", {
						data: s,
						headers: o
					})
				}
			};

			function m() {
				const e = Object(n.b)(),
					t = b();
				return (r, n, o, c) => {
					var a, d;
					if (n && function(e) {
							return !e.startsWith("/") && null == e.match(s)
						}(r)) {
						const s = i(r, n, o, c);
						(null === (d = null === (a = null === window || void 0 === window ? void 0 : window.navigator) || void 0 === a ? void 0 : a.serviceWorker) || void 0 === d ? void 0 : d.controller) ? t(s): e(s)
					}
				}
			}
		},
		"./src/reddit/hooks/useTracking.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = n.b
		},
		"./src/reddit/icons/fonts/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return d
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/icons/fonts/helpers.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const a = ({
				className: e,
				isFilled: t,
				name: r,
				...n
			}) => s.a.createElement("i", c({
				className: Object(o.a)(e, Object(i.b)(r, t))
			}, n));
			a.displayName = "Icon";
			const d = (e, t) => r => s.a.createElement(a, c({
				name: e
			}, t, r, {
				isFilled: (null == t ? void 0 : t.isFilled) || (null == r ? void 0 : r.isFilled),
				className: Object(o.a)(null == t ? void 0 : t.className, null == r ? void 0 : r.className)
			}));
			t.a = a
		},
		"./src/reddit/icons/svgs/PresenceCircle/index.m.less": function(e, t, r) {
			e.exports = {
				defaultInactiveState: "_1g3Xfh9mljLHWv24M9A3Rw",
				outline: "_3SlBAJb2MbUHwgBZFH8eL7",
				highlighted: "_1-JQy00VxG8hpTxxdxV32y"
			}
		},
		"./src/reddit/icons/svgs/PresenceCircle/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/icons/svgs/PresenceCircle/index.m.less"),
				c = r.n(i);
			t.a = Object(n.forwardRef)(({
				className: e,
				isHighlighted: t,
				outlineClassName: r
			}, n) => s.a.createElement("svg", {
				className: Object(o.a)(c.a.defaultInactiveState, e),
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				width: "12",
				height: "12",
				ref: n
			}, s.a.createElement("circle", {
				cx: "6",
				cy: "6",
				r: "4"
			}), s.a.createElement("path", {
				className: Object(o.a)(c.a.outline, r, {
					[c.a.highlighted]: t
				}),
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z"
			})))
		},
		"./src/reddit/icons/svgs/SnooSilhouette/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 320 320",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "m124.91 237.79c-53.47 32.9-28.3 109.77-9.81 76.9"
			}), s.a.createElement("path", {
				d: "m115.13 314.7a9.86 9.86 0 0 1 -1.44 3l-.85 1.22c-.34.4-.68.85-1.09 1.28a11.46 11.46 0 0 1 -3 2.34 7.26 7.26 0 0 1 -4.16.82 8.13 8.13 0 0 1 -3.86-1.63 14 14 0 0 1 -2.64-2.62 26.58 26.58 0 0 1 -1.7-2.45c-3.11-5.09-4.59-11.37-5.16-17.65a66.18 66.18 0 0 1 6.12-33.55 69 69 0 0 1 3.7-6.66 68.22 68.22 0 0 1 4.3-5.93 62.51 62.51 0 0 1 9.65-9.4 61.54 61.54 0 0 1 9.62-6.13c-2.15 2.3-5.35 5.36-8.11 8.41s-5.19 6-6.61 7.42a56.91 56.91 0 0 0 -7.33 9.28 58.25 58.25 0 0 0 -5 10 60.67 60.67 0 0 0 -4 20 53 53 0 0 0 2.33 17.65 28.76 28.76 0 0 0 3.32 7.14c1.39 2 3.15 3.76 5.17 4.28a5.79 5.79 0 0 0 3.36-.19 11.09 11.09 0 0 0 3.45-2.14 29.87 29.87 0 0 0 3.93-4.49z"
			}), s.a.createElement("path", {
				d: "m194.69 240.89c45.74 25.85 23.37 107.54 4.1 73.8"
			}), s.a.createElement("path", {
				d: "m198.81 314.67a17 17 0 0 1 2 2.41 16.1 16.1 0 0 0 4.54 4.16 6.1 6.1 0 0 0 3.23.79 5.88 5.88 0 0 0 3-1.15 12.67 12.67 0 0 0 3.58-4.37c2.39-4.65 3.64-10.3 4.24-16a71.58 71.58 0 0 0 -.3-17 66.16 66.16 0 0 0 -9-25.89 54.68 54.68 0 0 0 -15.7-16.28 30.16 30.16 0 0 1 10.19 5 29.29 29.29 0 0 1 7.11 7.13 68.35 68.35 0 0 1 8.62 21.25 81.56 81.56 0 0 1 2 19.91 58.88 58.88 0 0 1 -2.83 17.4 27.36 27.36 0 0 1 -3.67 7.28 13.8 13.8 0 0 1 -2.85 2.86 7.81 7.81 0 0 1 -3.8 1.51 6.82 6.82 0 0 1 -4.21-1 11.92 11.92 0 0 1 -3.25-3 24.69 24.69 0 0 1 -2.9-5.01z"
			}), s.a.createElement("path", {
				d: "m125.46 236.86c32.07-45.32 77.78-13.73 79.92 56.7-.5 46.56-23 35.27-51.14 35.27s-42.05 9.17-44.66-24.83c-1.5-19.46-.66-20.87 3.28-33"
			}), s.a.createElement("path", {
				d: "m112.89 271a23.38 23.38 0 0 1 -.68 2.76c-.41 1.47-1 3.44-1.61 5.81a38.08 38.08 0 0 0 -1.14 8.22c-.12 3.08.07 6.43.29 9.9.51 6.92 1 14.41 3.16 20.71a16.43 16.43 0 0 0 4.9 7.54 13.56 13.56 0 0 0 6.7 2.65 56.37 56.37 0 0 0 11.6-.1c4-.32 8-.71 12.18-.92a124.9 124.9 0 0 1 12.55-.09c4.2.16 8.4.49 12.56.7 2.08.1 4.15.18 6.2.15a40.17 40.17 0 0 0 6.05-.44 22.51 22.51 0 0 0 5.6-1.55 14.89 14.89 0 0 0 4.6-3.17 17.38 17.38 0 0 0 3.27-4.6l.33-.64.29-.67.56-1.34c.3-.93.65-1.84.9-2.79a62.06 62.06 0 0 0 1.9-11.66 108.3 108.3 0 0 0 -.63-20.6 130.55 130.55 0 0 0 -3.86-20 94.18 94.18 0 0 0 -7.15-18.4 59.18 59.18 0 0 0 -11-15.23c-4.38-4.24-9.48-7.58-15-9a27.57 27.57 0 0 0 -16.33.49 39.21 39.21 0 0 0 -13.41 7.9 74.8 74.8 0 0 0 -9.76 10.58 61.55 61.55 0 0 1 8.78-11.74 39.25 39.25 0 0 1 14.45-9.6 31.64 31.64 0 0 1 8.59-1.83h2.12a13 13 0 0 1 2.08.09 28.29 28.29 0 0 1 3.93.63 31.93 31.93 0 0 1 11.28 5.06 50.46 50.46 0 0 1 12 12.46 74.93 74.93 0 0 1 7.89 14.59 117.86 117.86 0 0 1 7.81 30.35c.15 1.25.31 2.5.46 3.75s.22 2.49.32 3.73c.26 2.48.3 5 .43 7.41a34.56 34.56 0 0 1 0 3.67c0 1.22-.07 2.44-.16 3.64s-.14 2.41-.28 3.6-.23 2.38-.43 3.56-.34 2.36-.6 3.52-.51 2.32-.82 3.46a16.49 16.49 0 0 1 -.52 1.69c-.19.56-.36 1.12-.57 1.68a32.08 32.08 0 0 1 -1.48 3.21 19.92 19.92 0 0 1 -4.28 5.58 18.29 18.29 0 0 1 -6 3.5 37.52 37.52 0 0 1 -13.18 1.66c-4.33-.07-8.53-.42-12.65-.67s-8.17-.43-12.14-.36-7.88.29-11.73.58-7.66.61-11.47.63a34.51 34.51 0 0 1 -5.73-.4 17.16 17.16 0 0 1 -5.52-1.82 13.8 13.8 0 0 1 -4.34-3.84 19.11 19.11 0 0 1 -2.64-4.9 44.16 44.16 0 0 1 -2.39-10.24c-.44-3.22-.63-7-.81-11a93.65 93.65 0 0 1 .09-12 37.54 37.54 0 0 1 .92-5.5c.42-1.71.94-3.25 1.4-4.62.96-2.66 1.74-4.74 2.12-5.74z"
			}), s.a.createElement("path", {
				d: "m229 74.81c-1 .47-5.78-2.28-11.24-5.44s-11.7-6.6-15.42-7.94c-3.26-1.22-6.62-2.41-10-3.36a43 43 0 0 0 -4.93-1.07 13.89 13.89 0 0 0 -4.19-.08 3.6 3.6 0 0 0 -1.2.4c-.13.08-.17.17-.27.22s-.12.11-.14.24l-1 1.75c-.42.78-.91 1.53-1.29 2.34-.8 1.58-1.62 3.14-2.3 4.75s-1.34 3.2-2 4.78c-4.19 11.17-6.17 23.06-7.52 34.18s-2.05 21.46-3.05 29.85a36 36 0 0 1 -3.83-6.41 58 58 0 0 1 -2.89-7.72c-1.5-5.24-2.06-10.33-1.53-13a266.73 266.73 0 0 1 7.37-29.3 114.2 114.2 0 0 1 10.81-24.11l.39-.67.2-.33.09-.17.16-.2a8.58 8.58 0 0 1 1.33-1.56l.78-.69.86-.53a9.4 9.4 0 0 1 1.8-.83 15.64 15.64 0 0 1 6.86-.52 44.74 44.74 0 0 1 11.26 3.14 87 87 0 0 1 17.63 9.78c4.93 3.27 11.92 10.94 13.26 12.5z"
			}), s.a.createElement("path", {
				d: "m105.63 128c-43.28-20.15-74.18 36.54-30.75 61.74"
			}), s.a.createElement("path", {
				d: "m74.86 189.75c-.5 0-4.4-2-8.31-5.22-.94-.85-2-1.65-2.88-2.59s-1.82-1.86-2.61-2.82-1.51-1.9-2.15-2.77-1.13-1.7-1.57-2.38a32.77 32.77 0 0 1 -5-17.32 36.58 36.58 0 0 1 1.3-9.37c.22-.76.5-1.49.74-2.24l.39-1.1.47-1.07c.33-.7.62-1.42 1-2.11s.76-1.33 1.13-2a34 34 0 0 1 24.86-16.35 36.14 36.14 0 0 1 13.32.9 42.71 42.71 0 0 1 10.39 4.17c-3.08-.41-7.27-1.42-11.25-1.59a81.76 81.76 0 0 0 -9.48-.06 29.42 29.42 0 0 0 -11 2.08 30.48 30.48 0 0 0 -9.21 5.75 31.36 31.36 0 0 0 -8.27 34 38.69 38.69 0 0 0 7.82 12.76 66.35 66.35 0 0 0 5.7 5.64 36 36 0 0 0 2.84 2.34z"
			}), s.a.createElement("path", {
				d: "m254.61 176.52c30.45-26.89-2.76-71.55-39.71-54.67"
			}), s.a.createElement("path", {
				d: "m214.89 121.83a9.6 9.6 0 0 1 2.48-1.41 20.3 20.3 0 0 1 2.51-1l1.47-.51c.5-.18 1.05-.27 1.59-.42a28.32 28.32 0 0 1 3.37-.69 28.71 28.71 0 0 1 3.38-.39 46.61 46.61 0 0 1 5.63 0 34.21 34.21 0 0 1 15.32 4.6l1.79 1.09c.59.37 1.13.81 1.7 1.22a35.6 35.6 0 0 1 8.53 8.92 32.62 32.62 0 0 1 5.34 12.84 30.43 30.43 0 0 1 -.56 13.24 31.13 31.13 0 0 1 -5.33 10.68 36.88 36.88 0 0 1 -7.12 7c1.37-2.44 3.58-5.54 5.05-8.73.43-.76.7-1.59 1-2.31.16-.38.35-.73.49-1.09l.38-1c.24-.68.53-1.28.72-1.84a13.79 13.79 0 0 1 .52-1.42 26.43 26.43 0 0 0 .49-19 31.61 31.61 0 0 0 -4.13-8 35.33 35.33 0 0 0 -5.79-6.19c-.52-.45-1.08-.83-1.62-1.24a15 15 0 0 0 -1.64-1.14l-1.68-1-1.72-.88-.85-.44c-.28-.13-.58-.24-.87-.36l-1.73-.71c-.58-.21-1.17-.37-1.74-.56a17.9 17.9 0 0 0 -1.73-.5 40.08 40.08 0 0 0 -13.23-.93c-.49.06-1 .1-1.6.14l-1.76.27c-.6.09-1.23.15-1.84.26l-1.81.39c-.59.13-1.17.22-1.7.37l-1.46.41z"
			}), s.a.createElement("path", {
				d: "m159.25 111.23c-48.61-.37-93.95 27.23-96.18 72.22-1.87 83.41 194.24 83.41 192.37 0 0-48.33-44.72-72.22-96.19-72.22z"
			}), s.a.createElement("path", {
				d: "m159.25 111.23c-48.61-.37-93.95 27.23-96.18 72.22-1.87 83.41 194.24 83.41 192.37 0 0-48.33-44.72-72.22-96.19-72.22z",
				fill: "none"
			}), s.a.createElement("path", {
				d: "m159.25 111.2a100.82 100.82 0 0 1 14.86.32 130.39 130.39 0 0 1 30.18 6.06 97.07 97.07 0 0 1 16.43 7.17 78.93 78.93 0 0 1 14.49 10.25 63.78 63.78 0 0 1 16.79 23.82 67.61 67.61 0 0 1 4.45 19.57c.13 1.7.15 3.4.22 5.11v3.89l-.11 1.3-.22 2.61-.42 2.6a23.2 23.2 0 0 1 -.54 2.58c-.22.85-.37 1.72-.67 2.56a49.79 49.79 0 0 1 -4.15 9.79 56.7 56.7 0 0 1 -6.2 8.74 68 68 0 0 1 -7.75 7.43 78.42 78.42 0 0 1 -8.81 6.14c-12.32 7.38-26.19 11.74-40.07 14.24a168.29 168.29 0 0 1 -41.54 2.05 148 148 0 0 1 -34.89-6.69c-11.22-3.67-22-9-31-16.58a56.52 56.52 0 0 1 -11.6-13.16 48.93 48.93 0 0 1 -6.51-16.08 50.29 50.29 0 0 1 -.46-17 66.24 66.24 0 0 1 4.18-16 70.76 70.76 0 0 1 18.09-25.69 90.75 90.75 0 0 1 24.8-15.93 101.47 101.47 0 0 1 13.06-4.78 112.2 112.2 0 0 1 12.93-3c2.12-.41 4.24-.65 6.32-1s4.15-.47 6.2-.57c4.08-.33 8.06-.33 11.91-.29a142.44 142.44 0 0 0 -24.22 3.34 117.79 117.79 0 0 0 -26.52 9.42 92.75 92.75 0 0 0 -21.58 14.9 77.13 77.13 0 0 0 -12.25 14.6 62.07 62.07 0 0 0 -9.53 25.39 45.71 45.71 0 0 0 3.46 25.86 53.67 53.67 0 0 0 16.28 19.83 87.52 87.52 0 0 0 22.14 12.14 129.68 129.68 0 0 0 23.75 6.56 160.17 160.17 0 0 0 23.78 2.47 157.94 157.94 0 0 0 45.17-5.1 113.68 113.68 0 0 0 20.3-7.54 86.22 86.22 0 0 0 9.16-5.19 73.68 73.68 0 0 0 8.22-6.24 52.36 52.36 0 0 0 12.26-15.71l.56-1.09.48-1.13c.3-.76.64-1.5.92-2.26a44.84 44.84 0 0 0 1.41-4.63 46.94 46.94 0 0 0 1.37-9.46c0-1.59.08-3.16 0-4.75s-.07-3.17-.26-4.72l-.21-2.34c-.09-.77-.23-1.54-.34-2.3s-.22-1.54-.37-2.3l-.49-2.25a58.73 58.73 0 0 0 -6.56-16.8 63.59 63.59 0 0 0 -10.77-13.72 74.79 74.79 0 0 0 -13.46-10.24 100.84 100.84 0 0 0 -16.3-7.81 122.86 122.86 0 0 0 -19-5.41 160 160 0 0 0 -27.37-2.98z"
			}), s.a.createElement("circle", {
				cx: "238.47",
				cy: "80.13",
				r: "22.93"
			}), s.a.createElement("path", {
				d: "m261.37 80.13a5.12 5.12 0 0 1 -.27-1.29c-.06-.34-.08-.75-.17-1.2s-.19-1-.3-1.5a23.88 23.88 0 0 0 -3.12-7.61 22.56 22.56 0 0 0 -6.59-6.71 20 20 0 0 0 -7.06-2.93 22.12 22.12 0 0 0 -19.67 5.49 21.36 21.36 0 0 0 -5.7 9 20.88 20.88 0 0 0 -.7 10.29 21.16 21.16 0 0 0 9.47 14.18 21.55 21.55 0 0 0 16.06 2.92 21.77 21.77 0 0 0 12.8-8.08 23.8 23.8 0 0 0 3.39-6.16 26 26 0 0 0 1.32-6.35 19.06 19.06 0 0 1 .12 6.81 21.83 21.83 0 0 1 -8.21 13.51 18.67 18.67 0 0 1 -5.13 2.82 24.34 24.34 0 0 1 -8.2 1.31 24.84 24.84 0 0 1 -7.83-1.26 25.86 25.86 0 0 1 -6.77-3.5 25 25 0 0 1 -5.2-5.16 23.4 23.4 0 0 1 -3.35-6.21 25 25 0 0 1 -1-3.32c-.13-.56-.18-1.12-.28-1.68l-.12-.84c0-.28 0-.56-.05-.84 0-.56 0-1.12-.07-1.68s.05-1.11.08-1.66a11.26 11.26 0 0 1 .17-1.64c.09-.54.15-1.09.26-1.62a25.58 25.58 0 0 1 2.15-6 24.56 24.56 0 0 1 5.71-7.24c.37-.34.79-.62 1.18-.93a11.19 11.19 0 0 1 1.21-.87 23.57 23.57 0 0 1 21.4-2.45 23 23 0 0 1 8.39 5.48 22 22 0 0 1 6.08 14.14c.11 1.26 0 2.29 0 2.78z"
			})))
		},
		"./src/reddit/selectors/experiments/newCommunityProgressV3.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return f
			})), r.d(t, "a", (function() {
				return p
			})), r.d(t, "b", (function() {
				return O
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				s = r("./src/lib/constants/index.ts"),
				o = r("./src/reddit/constants/experiments.ts"),
				i = r("./src/reddit/constants/posts.ts"),
				c = r("./src/reddit/helpers/chooseVariant/index.ts"),
				a = r("./src/reddit/selectors/experiments/index.ts"),
				d = r("./src/reddit/selectors/experiments/utils.ts"),
				u = r("./src/reddit/selectors/moderatorPermissions.ts"),
				l = r("./src/reddit/selectors/platform.ts"),
				b = r("./src/reddit/selectors/subreddit.ts"),
				m = r("./src/reddit/selectors/user.ts");
			const f = e => e.subreddits.progressModule,
				p = e => {
					const t = Object(l.c)(e);
					if (!t) return;
					if (!Object(u.m)(e, {
							subredditId: t
						})) return;
					if (Object(m.H)(e)) return O(e);
					const r = Object(b.F)(e, {
						identifier: {
							id: t,
							type: i.a.SUBREDDIT
						}
					});
					if (!r || !r.created) return;
					const n = r.created;
					return n ? n * s.Rb < 1639443600180 ? void 0 : O(e) : void 0
				},
				O = Object(n.a)(e => Object(c.c)(e, {
					experimentName: o.Nd,
					experimentEligibilitySelector: a.e
				}), d.a)
		},
		"./src/reddit/selectors/experiments/profileAvatarChangeFix.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const o = Object(s.a)(n.s)
		},
		"./src/redditGQL/operations/SubscribedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"13af47cf5fb3"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~ModListing~Reddit~Subreddit.f3742ff9d7f90f43e7d9.js.map