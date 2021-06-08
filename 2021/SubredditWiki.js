// https://www.redditstatic.com/desktop2x/SubredditWiki.0374127486aea81301a2.js
// Retrieved at 6/8/2021, 4:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditWiki"], {
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var i = Math.ceil,
				s = Math.max;
			e.exports = function(e, t, n, r) {
				for (var a = -1, o = s(i((t - e) / (n || 1)), 0), d = Array(o); o--;) d[r ? o : ++a] = e, e += n;
				return d
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, i) {
			var s = i("./node_modules/lodash/_baseRange.js"),
				n = i("./node_modules/lodash/_isIterateeCall.js"),
				r = i("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, i, a) {
					return a && "number" != typeof a && n(t, i, a) && (i = a = void 0), t = r(t), void 0 === i ? (i = t, t = 0) : i = r(i), a = void 0 === a ? t < i ? 1 : -1 : r(a), s(t, i, a, e)
				}
			}
		},
		"./node_modules/lodash/range.js": function(e, t, i) {
			var s = i("./node_modules/lodash/_createRange.js")();
			e.exports = s
		},
		"./node_modules/lodash/times.js": function(e, t, i) {
			var s = i("./node_modules/lodash/_baseTimes.js"),
				n = i("./node_modules/lodash/_castFunction.js"),
				r = i("./node_modules/lodash/toInteger.js"),
				a = 9007199254740991,
				o = 4294967295,
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = r(e)) < 1 || e > a) return [];
				var i = o,
					c = d(e, o);
				t = n(t), e -= o;
				for (var u = s(c, t); ++i < e;) t(i);
				return u
			}
		},
		"./src/graphql/operations/SubredditWiki.json": function(e) {
			e.exports = JSON.parse('{"id":"5834be60ee7a"}')
		},
		"./src/graphql/operations/SubredditWikiBannedContributors.json": function(e) {
			e.exports = JSON.parse('{"id":"9b728f1ed735"}')
		},
		"./src/graphql/operations/SubredditWikiContributors.json": function(e) {
			e.exports = JSON.parse('{"id":"6ff60c2af7f1"}')
		},
		"./src/graphql/operations/SubredditWikiPageSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"03acb455993d"}')
		},
		"./src/graphql/operations/WikiComparisonDiff.json": function(e) {
			e.exports = JSON.parse('{"id":"37afdc03bbf6"}')
		},
		"./src/graphql/operations/WikiRevisions.json": function(e) {
			e.exports = JSON.parse('{"id":"83e11ebf7cbf"}')
		},
		"./src/reddit/actions/pages/subredditWiki/index.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "subredditWikiDataPending", (function() {
				return Ge
			})), i.d(t, "subredditWikiDataLoaded", (function() {
				return He
			})), i.d(t, "subredditWikiDataFailed", (function() {
				return Ve
			})), i.d(t, "fetchSubredditWikiData", (function() {
				return Xe
			})), i.d(t, "handleWikiRedirects", (function() {
				return ze
			})), i.d(t, "subredditWikDataRequested", (function() {
				return Ye
			})), i.d(t, "subredditWikiPageRequested", (function() {
				return Qe
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./node_modules/lodash/isEmpty.js"),
				r = i.n(n),
				a = i("./node_modules/react-router-redux/es/index.js"),
				o = i("./src/lib/constants/index.ts"),
				d = i("./src/lib/makeActionCreator/index.ts"),
				c = i("./src/lib/makeListingKey/index.ts"),
				u = i("./src/config.ts"),
				l = i("./src/reddit/actions/platform.ts"),
				b = i("./src/reddit/helpers/path/index.ts");
			var m = i("./src/reddit/actions/ads/index.ts"),
				p = i("./src/reddit/actions/pages/subreddit.ts"),
				k = i("./src/reddit/actions/pages/subredditWiki/constants.ts"),
				g = i("./src/reddit/actions/toaster.ts"),
				f = i("./src/reddit/actions/wiki/wikiBannedContributors/index.ts"),
				h = i("./src/reddit/actions/wiki/wikiContributors/index.ts"),
				w = i("./src/lib/makeGqlRequest/index.ts"),
				O = i("./src/graphql/operations/WikiComparisonDiff.json"),
				y = i("./src/reddit/helpers/wiki/wikiRevision.ts");
			var x = i("./src/reddit/helpers/wiki/makeComparisonDiffKey.ts"),
				_ = i("./src/reddit/selectors/subredditWiki.ts");
			const N = Object(d.a)("WIKI_DIFF_PENDING"),
				C = Object(d.a)("WIKI_DIFF_LOADED"),
				j = Object(d.a)("WIKI_DIFF_FAILED"),
				E = e => async (t, i, s) => {
					const n = i(),
						r = Object(x.a)(e),
						a = Object(_.i)(n, {
							key: r
						});
					if (a && (a.pending || !a.error)) return !0;
					const d = {
						key: r
					};
					t(N(d));
					const c = await ((e, t) => Object(w.a)(e, {
						...O,
						variables: {
							...t,
							comparisonRevisionId: Object(y.b)(t.comparisonRevisionId),
							revisionId: Object(y.b)(t.revisionId)
						}
					}))(s.gqlContext(), e);
					let u = null,
						l = "";
					if (c.ok) {
						const e = c.body,
							t = e.data.subreddit && e.data.subreddit.wiki,
							i = t && t.page && t.page.revisionComparisonDiffHtml;
						i ? l = i : u = {
							type: o.F.NOT_FOUND_ERROR
						}
					} else u = c.error || {
						type: o.F.UNKNOWN_ERROR
					};
					return t(u ? j({
						...d,
						error: u
					}) : C({
						...d,
						htmlDiff: l
					})), !u
				};
			var v = i("./src/reddit/actions/wiki/wikiPageSettings/index.tsx"),
				I = i("./src/reddit/actions/wiki/wikiRevisions/index.ts"),
				S = i("./src/reddit/constants/parameters.ts"),
				R = i("./src/reddit/constants/wiki.ts"),
				T = i("./src/reddit/endpoints/page/subredditWiki.ts"),
				P = i("./src/reddit/helpers/brandSafety/index.ts"),
				W = i("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				D = i("./src/reddit/models/Toast/index.ts"),
				L = i("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				A = i("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts"),
				B = i("./src/reddit/selectors/subreddit.ts"),
				M = i("./src/lib/initializeClient/installReducer.ts"),
				K = i("./node_modules/redux/es/redux.js");
			const F = {};
			var U = (e = F, t) => {
				switch (t.type) {
					case "WIKI_DIFF_LOADED": {
						const {
							key: i,
							htmlDiff: s
						} = t.payload;
						return {
							...e,
							[i]: {
								htmlDiff: s
							}
						}
					}
					case "WIKI_DIFF_PENDING": {
						const {
							key: i
						} = t.payload;
						return {
							...e,
							[i]: {
								...e[i],
								pending: !0
							}
						}
					}
					case "WIKI_DIFF_FAILED": {
						const {
							key: i,
							error: s
						} = t.payload;
						return {
							...e,
							[i]: {
								...e[i],
								pending: !1,
								error: s
							}
						}
					}
					default:
						return e
				}
			};
			const q = {};
			var G = (e = q, t) => {
					switch (t.type) {
						case k.b:
							const i = t.payload,
								{
									subredditWiki: s,
									options: n
								} = i,
								r = s && s.directory;
							if (!r) return e;
							const {
								subredditName: a
							} = n;
							return {
								...e, [a.toLowerCase()]: r
							};
						default:
							return e
					}
				},
				H = i("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
			const V = {};
			var $ = (e = V, t) => {
					switch (t.type) {
						case k.b: {
							const {
								subredditWiki: i,
								pageKey: s
							} = t.payload, {
								page: n
							} = i;
							return s && n ? {
								...e,
								[s]: n
							} : e
						}
						case H.a: {
							const {
								pageKey: i,
								page: s
							} = t.payload;
							return {
								...e,
								[i]: s
							}
						}
						default:
							return e
					}
				},
				X = i("./src/reddit/actions/wiki/wikiPageSettings/constants.ts");
			const z = {};
			var Y = (e = z, t) => {
					switch (t.type) {
						case X.c: {
							const {
								settings: i,
								pageKey: s
							} = t.payload;
							return i ? {
								...e,
								[s]: i
							} : e
						}
						case X.d: {
							const {
								isVisible: i,
								editPermissions: s,
								pageKey: n
							} = t.payload, r = e[n];
							return r ? {
								...e,
								[n]: {
									...r,
									isVisible: i,
									editPermissions: s
								}
							} : e
						}
						case X.b: {
							const {
								editorsInfo: i,
								afterToken: s,
								pageKey: n
							} = t.payload, r = e[n];
							if (!r) return e;
							const a = [...r.editorsInfo, ...i];
							return {
								...e,
								[n]: {
									...r,
									editorsInfo: a,
									afterToken: s
								}
							}
						}
						case X.a: {
							const {
								username: i,
								pageKey: s
							} = t.payload, n = e[s];
							if (!n) return e;
							const r = n.editorsInfo.filter(e => e.username !== i);
							return {
								...e,
								[s]: {
									...n,
									editorsInfo: r
								}
							}
						}
						default:
							return e
					}
				},
				Q = i("./src/lib/omitKey/index.ts");
			const J = {};
			var Z = (e = J, t) => {
				switch (t.type) {
					case H.b: {
						const {
							key: i,
							error: s
						} = t.payload;
						return {
							...e,
							[i]: s
						}
					}
					case H.d:
					case H.c: {
						const {
							key: i
						} = t.payload;
						return Object(Q.a)(e, i)
					}
					default:
						return e
				}
			};
			const ee = {};
			var te = (e = ee, t) => {
					switch (t.type) {
						case H.d:
						case H.b:
						case H.c: {
							const {
								key: i
							} = t.payload, s = t.type === H.d;
							return {
								...e,
								[i]: s
							}
						}
						default:
							return e
					}
				},
				ie = Object(K.c)({
					error: Z,
					pending: te
				}),
				se = i("./src/reddit/actions/wiki/wikiEditing/constants.ts");
			const ne = {};
			var re = (e = ne, t) => {
				switch (t.type) {
					case H.c: {
						const {
							key: i,
							options: s,
							pageInfo: n,
							revisionsIds: r
						} = t.payload, a = e[i], o = s.after && a ? [...a.ids, ...r] : r;
						return {
							...e,
							[i]: {
								ids: o,
								pageInfo: n
							}
						}
					}
					case H.a: {
						const {
							page: {
								revision: i
							},
							pageRevisionsListingKey: s,
							recentRevisionsListingKey: n
						} = t.payload, r = e[s];
						return r && i ? {
							...Object(Q.a)(e, n),
							[s]: {
								...r,
								ids: [i.id, ...r.ids]
							}
						} : e
					}
					case se.a: {
						const {
							pageRevisionsListingKey: i,
							recentRevisionsListingKey: s
						} = t.payload, n = {
							...e
						};
						return delete n[i], delete n[s], n
					}
					default:
						return e
				}
			};
			const ae = {};
			var oe = (e = ae, t) => {
					switch (t.type) {
						case k.b: {
							const {
								subredditWiki: {
									page: i
								}
							} = t.payload, s = i && i.revision;
							return s && !e[s.id] ? {
								...e,
								[s.id]: s
							} : e
						}
						case H.c: {
							const {
								revisions: i
							} = t.payload;
							return {
								...e,
								...i
							}
						}
						case H.a: {
							const {
								page: i
							} = t.payload, s = i.revision;
							return s ? {
								...e,
								[s.id]: s
							} : e
						}
						case H.e: {
							const {
								revisionId: i,
								isHidden: s
							} = t.payload, n = e[i];
							return n ? {
								...e,
								[i]: {
									...n,
									isHidden: s
								}
							} : e
						}
						default:
							return e
					}
				},
				de = Object(K.c)({
					api: ie,
					listings: re,
					models: oe
				}),
				ce = i("./src/reddit/actions/wiki/wikiBannedContributors/constants.ts");
			const ue = {};
			var le = (e = ue, t) => {
				switch (t.type) {
					case ce.c:
					case ce.a: {
						const {
							subredditName: i,
							afterToken: s
						} = t.payload;
						return {
							...e,
							[i]: s
						}
					}
					default:
						return e
				}
			};
			const be = {};
			var me = (e = be, t) => {
				switch (t.type) {
					case ce.b: {
						const {
							subredditName: i,
							error: s
						} = t.payload;
						return {
							...e,
							[i]: s
						}
					}
					case ce.d:
					case ce.c: {
						const {
							subredditName: i
						} = t.payload;
						return Object(Q.a)(e, i)
					}
					default:
						return e
				}
			};
			const pe = {};
			var ke = (e = pe, t) => {
					switch (t.type) {
						case ce.d:
						case ce.c:
						case ce.b: {
							const {
								subredditName: i
							} = t.payload, s = t.type === ce.d;
							return {
								...e,
								[i]: s
							}
						}
						default:
							return e
					}
				},
				ge = Object(K.c)({
					error: me,
					pending: ke
				});
			const fe = {};
			var he = (e = fe, t) => {
					switch (t.type) {
						case ce.c:
						case ce.a: {
							const {
								subredditName: i,
								bannedContributors: s
							} = t.payload;
							return {
								...e,
								[i]: {
									...e[i],
									...s
								}
							}
						}
						case ce.e: {
							const {
								subredditName: i,
								bannedContributor: s
							} = t.payload;
							return {
								...e,
								[i]: {
									...e[i],
									...s
								}
							}
						}
						case ce.f: {
							const {
								subredditName: i,
								userId: s
							} = t.payload, n = Object(Q.a)(e[i], s);
							return {
								...e,
								[i]: n
							}
						}
						default:
							return e
					}
				},
				we = i("./node_modules/lodash/uniq.js"),
				Oe = i.n(we);
			const ye = {};
			var xe = (e = ye, t) => {
					switch (t.type) {
						case ce.c:
						case ce.a: {
							const {
								subredditName: i,
								userOrder: s
							} = t.payload;
							return {
								...e,
								[i]: Oe()([...e[i] || [], ...s])
							}
						}
						case ce.e: {
							const {
								subredditName: i,
								userOrder: s
							} = t.payload;
							return {
								...e,
								[i]: Oe()([...s, ...e[i] || []])
							}
						}
						case ce.f: {
							const {
								subredditName: i,
								userId: s
							} = t.payload;
							return {
								...e,
								[i]: (e[i] || []).filter(e => e !== s)
							}
						}
						default:
							return e
					}
				},
				_e = Object(K.c)({
					afterToken: le,
					api: ge,
					models: he,
					userOrder: xe
				});
			const Ne = {};
			var Ce = (e = Ne, t) => {
					switch (t.type) {
						case ce.g: {
							const {
								subredditName: i,
								bannedContributor: s
							} = t.payload;
							return {
								...e,
								[i]: s
							}
						}
						default:
							return e
					}
				},
				je = Object(K.c)({
					listing: _e,
					search: Ce
				}),
				Ee = i("./src/reddit/actions/wiki/wikiContributors/constants.ts");
			const ve = {};
			var Ie = (e = ve, t) => {
				switch (t.type) {
					case Ee.c:
					case Ee.a: {
						const {
							subredditName: i,
							afterToken: s
						} = t.payload;
						return {
							...e,
							[i]: s
						}
					}
					default:
						return e
				}
			};
			const Se = {};
			var Re = (e = Se, t) => {
				switch (t.type) {
					case Ee.b: {
						const {
							subredditName: i,
							error: s
						} = t.payload;
						return {
							...e,
							[i]: s
						}
					}
					case Ee.d:
					case Ee.c: {
						const {
							subredditName: i
						} = t.payload;
						return Object(Q.a)(e, i)
					}
					default:
						return e
				}
			};
			const Te = {};
			var Pe = (e = Te, t) => {
					switch (t.type) {
						case Ee.d:
						case Ee.c:
						case Ee.b: {
							const {
								subredditName: i
							} = t.payload, s = t.type === Ee.d;
							return {
								...e,
								[i]: s
							}
						}
						default:
							return e
					}
				},
				We = Object(K.c)({
					error: Re,
					pending: Pe
				});
			const De = {};
			var Le = (e = De, t) => {
				switch (t.type) {
					case Ee.c:
					case Ee.a: {
						const {
							subredditName: i,
							contributors: s
						} = t.payload;
						return {
							...e,
							[i]: {
								...e[i],
								...s
							}
						}
					}
					case Ee.e: {
						const {
							subredditName: i,
							contributor: s
						} = t.payload;
						return {
							...e,
							[i]: {
								...e[i],
								...s
							}
						}
					}
					case Ee.f: {
						const {
							subredditName: i,
							userId: s
						} = t.payload, n = Object(Q.a)(e[i], s);
						return {
							...e,
							newState: n
						}
					}
					default:
						return e
				}
			};
			const Ae = {};
			var Be = (e = Ae, t) => {
					switch (t.type) {
						case Ee.c:
						case Ee.a: {
							const {
								subredditName: i,
								userOrder: s
							} = t.payload;
							return {
								...e,
								[i]: Oe()([...e[i] || [], ...s])
							}
						}
						case Ee.e: {
							const {
								subredditName: i,
								userOrder: s
							} = t.payload;
							return {
								...e,
								[i]: [...s, ...e[i] || []]
							}
						}
						case Ee.f: {
							const {
								subredditName: i,
								userId: s
							} = t.payload;
							return {
								...e,
								[i]: (e[i] || []).filter(e => e !== s)
							}
						}
						default:
							return e
					}
				},
				Me = Object(K.c)({
					afterToken: Ie,
					api: We,
					models: Le,
					userOrder: Be
				});
			const Ke = {};
			var Fe = (e = Ke, t) => {
					switch (t.type) {
						case Ee.g: {
							const {
								subredditName: i,
								contributor: s
							} = t.payload;
							return {
								...e,
								[i]: s
							}
						}
						default:
							return e
					}
				},
				Ue = Object(K.c)({
					listing: Me,
					search: Fe
				}),
				qe = Object(K.c)({
					diff: U,
					directory: G,
					pages: $,
					pageSettings: Y,
					revisions: de,
					wikiBannedContributors: je,
					wikiContributors: Ue
				});
			Object(M.a)({
				pages: {
					subredditWiki: qe
				}
			});
			const Ge = Object(d.a)(k.c),
				He = Object(d.a)(k.b),
				Ve = Object(d.a)(k.a),
				$e = (e, t) => !!Object(_.b)(e, {
					subredditName: t
				}),
				Xe = e => async (t, i, n) => {
					const {
						canShowFailToast: a,
						wikiPageName: d
					} = e, c = d === R.j, u = {
						...e,
						includePageData: e.includePageData && !c
					}, l = d ? Object(W.a)({
						...e,
						wikiPageName: d
					}) : void 0;
					t(Ge({
						options: u,
						pageKey: l
					}));
					const b = await Object(T.a)(n.gqlContext(), u),
						m = b.body,
						p = b.ok ? m.data && m.data.subreddit && m.data.subreddit.wiki : null;
					return b.ok && p ? t(He({
						options: u,
						pageKey: l,
						subredditWiki: p
					})) : (t(Ve({
						options: u,
						pageKey: l,
						error: b.error || {
							type: o.F.NOT_FOUND_ERROR
						}
					})), a && t(Object(g.f)({
						id: "SUBREDDIT_WIKI_DATA_ERROR_TOAST",
						kind: D.b.Error,
						text: s.fbt._("Something went wrong loading this page. Try again?", null, {
							hk: "wZxm"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "mgOpG"
						}),
						buttonAction: Xe(e)
					}))), !(!b.ok || !r()(m.data.subreddit)) || !(!b.ok || !p)
				}, ze = e => async (t, i) => {
					const {
						params: s,
						url: n
					} = e, {
						wikiPageName: r
					} = s, o = Object(A.a)(n, s);
					let d = !1;
					return R.l.includes(r || "") ? (await (async (e, t) => {
						const i = `${u.a.oldRedditUrl}${Object(b.b)(e)}`;
						window.location.href = i
					})(e.url), d = !0) : n !== o && (await t(Object(a.c)(o)), d = !0), d
				}, Ye = (e, t, i = !1) => async (n, r, a) => {
					const {
						subredditName: d = R.e,
						wikiPageName: u,
						wikiSubRoute: l
					} = e, b = t[S.A], m = t[S.B], k = b ? Object(y.a)(b) : void 0, w = m ? Object(y.a)(m) : void 0, O = u === R.j, x = l === R.m.Revisions;
					let N = !1,
						C = !1;
					if (i) {
						const {
							pageName: t
						} = e;
						N = t === o.Yb.WikiContributors, C = t === o.Yb.WikiBanned
					}
					const j = r(),
						T = (O || i) && !$e(j, d),
						P = !!u && !((e, t, i, s) => {
							return i === R.j ? $e(e, t) : !!Object(_.c)(e, {
								subredditName: t,
								wikiPageName: i,
								revisionId: s
							})
						})(j, d, u, k),
						W = [];
					W.push(n(((e, t = !1) => async (i, s) => {
						const n = s(),
							r = {
								sort: o.T.HOT
							},
							a = Object(c.a)(e, r.sort),
							d = n.listings.postOrder.api.error[a],
							u = n.listings.postOrder.api.pending[a],
							l = !!n.listings.postOrder.ids[a];
						return !!(u || l && !d) || (await i(Object(p.subredditDataRequested)(a, e, r, t)), !s().listings.postOrder.api.error[a])
					})(d))), (T || P) && W.push(n(Xe({
						includeDirectory: T,
						includePageData: P,
						revisionId: k,
						subredditName: d,
						wikiPageName: u
					}))), l === R.m.Settings && u && W.push(n(Object(v.c)(d, u))), u && k && w && W.push(n(E({
						comparisonRevisionId: w,
						revisionId: k,
						subredditName: d,
						wikiPageName: u
					}))), x && W.push(n(Object(I.c)({
						isRecent: !u,
						wikiPageName: u,
						subredditName: d
					}))), N && W.push(n(Object(h.e)(d))), C && W.push(n(Object(f.e)(d))), (await Promise.all(W)).every(Boolean) || n(Object(g.f)({
						kind: D.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "3UWos1"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "mgOpG"
						}),
						buttonAction: Ye(e, t, i)
					}))
				}, Qe = e => async (t, i) => {
					if (await t(ze(e))) return;
					const {
						params: s,
						queryParams: n
					} = e, r = s.subredditName || R.e;
					t(l.l({
						title: s.wikiPageName ? `${s.wikiPageName} - ${r}` : `wiki - ${r}`
					})), await t(Ye(s, n));
					const a = Object(B.A)(i(), {
							subredditName: r
						}),
						o = i();
					a && (o.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
						t(Object(m.b)(L.a.SUBREDDIT))
					}), t(Object(m.d)({
						isViewSafe: Object(P.a)([], [a])
					})))
				}
		},
		"./src/reddit/actions/wiki/wikiBannedContributors/constants.ts": function(e, t, i) {
			"use strict";
			i.d(t, "d", (function() {
				return s
			})), i.d(t, "c", (function() {
				return n
			})), i.d(t, "b", (function() {
				return r
			})), i.d(t, "a", (function() {
				return a
			})), i.d(t, "e", (function() {
				return o
			})), i.d(t, "f", (function() {
				return d
			})), i.d(t, "g", (function() {
				return c
			}));
			const s = "WIKI_BANNED_CONTRIBUTORS_PENDING",
				n = "WIKI_BANNED_CONTRIBUTORS_LOADED",
				r = "WIKI_BANNED_CONTRIBUTORS_FAILED",
				a = "MORE_WIKI_BANNED_CONTRIBUTORS_LOADED",
				o = "WIKI_BANNED_CONTRIBUTOR_ADDED",
				d = "WIKI_BANNED_CONTRIBUTOR_REMOVED",
				c = "WIKI_BANNED_CONTRIBUTOR_SEARCH_LOADED"
		},
		"./src/reddit/actions/wiki/wikiBannedContributors/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "e", (function() {
				return w
			})), i.d(t, "b", (function() {
				return y
			})), i.d(t, "a", (function() {
				return _
			})), i.d(t, "c", (function() {
				return C
			})), i.d(t, "d", (function() {
				return E
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./src/lib/constants/index.ts"),
				r = i("./src/lib/makeActionCreator/index.ts"),
				a = i("./src/reddit/actions/toaster.ts"),
				o = i("./src/lib/makeApiRequest/index.ts"),
				d = i("./src/lib/makeGqlRequest/index.ts"),
				c = i("./src/lib/omitHeaders/index.ts"),
				u = i("./src/graphql/operations/SubredditWikiBannedContributors.json"),
				l = i("./src/reddit/constants/headers.ts");
			const b = (e, t) => Object(d.a)(e, {
				...u,
				variables: t
			});
			var m = e => {
					const {
						bannedMembersInfo: t
					} = e, {
						edges: i,
						pageInfo: s
					} = t, n = [], r = {};
					return i.forEach(e => {
						const {
							date: t,
							redditor: i,
							editWikiBanInfo: s
						} = e.node;
						i.id && i.name && i.icon && (r[i.id] = {
							id: i.id,
							username: i.name,
							iconUrl: i.icon.url,
							date: t,
							daysRemaining: s.daysRemaining,
							note: s.note
						}, n.push(i.id))
					}), {
						afterToken: s.hasNextPage ? s.endCursor : null,
						bannedContributors: r,
						userOrder: n
					}
				},
				p = i("./src/reddit/models/Toast/index.ts"),
				k = i("./src/reddit/actions/wiki/wikiBannedContributors/constants.ts");
			const g = Object(r.a)(k.d),
				f = Object(r.a)(k.c),
				h = Object(r.a)(k.b),
				w = e => async (t, i, s) => {
					t(g({
						subredditName: e
					}));
					const r = {
							subredditName: e
						},
						a = await b(s.gqlContext(), r);
					if (a.ok) {
						const i = a.body,
							s = i.data.subreddit && i.data.subreddit.wiki;
						if (s) {
							const i = m(s);
							t(f({
								...i,
								subredditName: e.toLowerCase()
							}))
						}
					} else {
						const i = a.error || {
							type: n.F.UNKNOWN_ERROR
						};
						t(h({
							error: i,
							subredditName: e.toLowerCase()
						}))
					}
					return a.ok
				}, O = Object(r.a)(k.a), y = (e, t) => async (i, n, r) => {
					const o = {
							subredditName: e,
							after: t
						},
						d = await b(r.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const s = m(t.data.subreddit.wiki);
							i(O({
								...s,
								subredditName: e.toLowerCase()
							}))
						}
					} else i(Object(a.f)({
						kind: p.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2EIEjY"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: y(e, t)
					}));
					return d.ok
				}, x = Object(r.a)(k.e), _ = (e, t) => async (i, r, d) => {
					const u = await ((e, t, i) => Object(o.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/friend`,
						method: n.gb.POST,
						data: {
							api_type: "json",
							name: i.username,
							type: "wikibanned",
							duration: i.duration,
							ban_reason: i.banReason,
							note: i.note
						}
					}))(d.apiContext(), e, t);
					if (u.ok) {
						i(Object(a.f)({
							kind: p.b.SuccessMod,
							text: s.fbt._("Successfully banned user", null, {
								hk: "1VcdP9"
							})
						}));
						const n = {
								subredditName: e,
								username: t.username
							},
							r = (await b(d.gqlContext(), n)).body;
						if (r.data.subreddit.wiki) {
							const t = m(r.data.subreddit.wiki);
							i(x({
								bannedContributor: t.bannedContributors,
								subredditName: e.toLowerCase(),
								userOrder: t.userOrder
							}))
						}
					} else if (u.error) {
						let e;
						u.error.type === n.F.USER_DOESNT_EXIST && (e = s.fbt._("That user doesn't exist", null, {
							hk: "1AFgzG"
						})), i(Object(a.f)({
							kind: p.b.Error,
							text: e || s.fbt._("Something went wrong", null, {
								hk: "14O55Y"
							})
						}))
					}
					return u.ok
				}, N = Object(r.a)(k.f), C = (e, t) => async (i, r, d) => {
					const u = await ((e, t, i) => Object(o.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/unfriend`,
						method: n.gb.POST,
						data: {
							api_type: "json",
							id: i,
							type: "wikibanned"
						}
					}))(d.apiContext(), e, t);
					return u.ok ? (i(Object(a.f)({
						kind: p.b.SuccessMod,
						text: s.fbt._("User has been successfully removed", null, {
							hk: "381leB"
						})
					})), i(N({
						subredditName: e.toLowerCase(),
						userId: t
					}))) : i(Object(a.f)({
						kind: p.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "4lHXgg"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: C(e, t)
					})), u.ok
				}, j = Object(r.a)(k.g), E = (e, t) => async (i, n, r) => {
					const o = {
							subredditName: e,
							username: t
						},
						d = await b(r.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const s = m(t.data.subreddit.wiki),
								n = Object.keys(s.bannedContributors)[0];
							i(j({
								subredditName: e.toLowerCase(),
								bannedContributor: s.bannedContributors[n]
							}))
						}
					} else i(Object(a.f)({
						kind: p.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2iRQ4u"
						})
					}));
					return d.ok
				}
		},
		"./src/reddit/actions/wiki/wikiContributors/constants.ts": function(e, t, i) {
			"use strict";
			i.d(t, "d", (function() {
				return s
			})), i.d(t, "c", (function() {
				return n
			})), i.d(t, "b", (function() {
				return r
			})), i.d(t, "a", (function() {
				return a
			})), i.d(t, "e", (function() {
				return o
			})), i.d(t, "f", (function() {
				return d
			})), i.d(t, "g", (function() {
				return c
			}));
			const s = "WIKI_CONTRIBUTORS_PENDING",
				n = "WIKI_CONTRIBUTORS_LOADED",
				r = "WIKI_CONTRIBUTORS_FAILED",
				a = "MORE_WIKI_CONTRIBUTORS_LOADED",
				o = "WIKI_CONTRIBUTOR_ADDED",
				d = "WIKI_CONTRIBUTOR_REMOVED",
				c = "WIKI_CONTRIBUTOR_SEARCH_LOADED"
		},
		"./src/reddit/actions/wiki/wikiContributors/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "e", (function() {
				return w
			})), i.d(t, "b", (function() {
				return y
			})), i.d(t, "a", (function() {
				return _
			})), i.d(t, "c", (function() {
				return C
			})), i.d(t, "d", (function() {
				return E
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./src/lib/constants/index.ts"),
				r = i("./src/lib/makeActionCreator/index.ts"),
				a = i("./src/reddit/actions/toaster.ts"),
				o = i("./src/lib/makeApiRequest/index.ts"),
				d = i("./src/lib/makeGqlRequest/index.ts"),
				c = i("./src/lib/omitHeaders/index.ts"),
				u = i("./src/graphql/operations/SubredditWikiContributors.json"),
				l = i("./src/reddit/constants/headers.ts");
			const b = (e, t) => Object(d.a)(e, {
				...u,
				variables: t
			});
			var m = e => {
					const {
						contributorsInfo: t
					} = e, {
						edges: i,
						pageInfo: s
					} = t, n = [], r = {};
					return i.forEach(e => {
						const {
							date: t,
							redditor: i
						} = e.node;
						i.id && i.name && i.icon && (r[i.id] = {
							id: i.id,
							username: i.name,
							iconUrl: i.icon.url,
							date: t
						}, n.push(i.id))
					}), {
						afterToken: s.hasNextPage ? s.endCursor : null,
						contributors: r,
						userOrder: n
					}
				},
				p = i("./src/reddit/models/Toast/index.ts"),
				k = i("./src/reddit/actions/wiki/wikiContributors/constants.ts");
			const g = Object(r.a)(k.d),
				f = Object(r.a)(k.c),
				h = Object(r.a)(k.b),
				w = e => async (t, i, s) => {
					t(g({
						subredditName: e
					}));
					const r = {
							subredditName: e
						},
						a = await b(s.gqlContext(), r);
					if (a.ok) {
						const i = a.body,
							s = i.data.subreddit && i.data.subreddit.wiki;
						if (s) {
							const i = m(s);
							t(f({
								...i,
								subredditName: e.toLowerCase()
							}))
						}
					} else {
						const i = a.error || {
							type: n.F.UNKNOWN_ERROR
						};
						t(h({
							error: i,
							subredditName: e.toLowerCase()
						}))
					}
					return a.ok
				}, O = Object(r.a)(k.a), y = (e, t) => async (i, n, r) => {
					const o = {
							subredditName: e,
							after: t
						},
						d = await b(r.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const s = m(t.data.subreddit.wiki);
							i(O({
								...s,
								subredditName: e.toLowerCase()
							}))
						}
					} else i(Object(a.f)({
						kind: p.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "P9mov"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: y(e, t)
					}));
					return d.ok
				}, x = Object(r.a)(k.e), _ = (e, t) => async (i, r, d) => {
					const u = await ((e, t, i) => Object(o.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/friend`,
						method: n.gb.POST,
						data: {
							api_type: "json",
							name: i,
							type: "wikicontributor"
						}
					}))(d.apiContext(), e, t);
					if (u.ok) {
						i(Object(a.f)({
							kind: p.b.SuccessMod,
							text: s.fbt._("User has been successfully added", null, {
								hk: "3mt5Vr"
							})
						}));
						const n = {
								subredditName: e,
								username: t
							},
							o = (await b(d.gqlContext(), n)).body;
						if (o.data.subreddit.wiki) {
							const t = m(o.data.subreddit.wiki),
								s = Object.keys(t.contributors)[0];
							!!r().pages.subredditWiki.wikiContributors.listing.models[e.toLowerCase()][s] || i(x({
								contributor: t.contributors,
								subredditName: e.toLowerCase(),
								userOrder: t.userOrder
							}))
						}
					} else if (u.error) {
						let e;
						const t = u.error.type;
						t === n.F.USER_DOESNT_EXIST ? e = s.fbt._("That user doesn't exist", null, {
							hk: "1OHcCX"
						}) : t === n.F.BANNED_FROM_SUBREDDIT && (e = s.fbt._("That user is banned from the subreddit", null, {
							hk: "4eZcXp"
						})), i(Object(a.f)({
							kind: p.b.Error,
							text: e || s.fbt._("Something went wrong", null, {
								hk: "3VCQr6"
							})
						}))
					}
					return u.ok
				}, N = Object(r.a)(k.f), C = (e, t) => async (i, r, d) => {
					const u = await ((e, t, i) => Object(o.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/r/${t}/api/unfriend`,
						method: n.gb.POST,
						data: {
							api_type: "json",
							id: i,
							type: "wikicontributor"
						}
					}))(d.apiContext(), e, t);
					return u.ok ? (i(Object(a.f)({
						kind: p.b.SuccessMod,
						text: s.fbt._("User has been successfully removed", null, {
							hk: "2OevWA"
						})
					})), i(N({
						subredditName: e.toLowerCase(),
						userId: t
					}))) : i(Object(a.f)({
						kind: p.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "1zUdz2"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: C(e, t)
					})), u.ok
				}, j = Object(r.a)(k.g), E = (e, t) => async (i, n, r) => {
					const o = {
							subredditName: e,
							username: t
						},
						d = await b(r.gqlContext(), o);
					if (d.ok) {
						const t = d.body;
						if (t.data.subreddit.wiki) {
							const s = m(t.data.subreddit.wiki),
								n = Object.keys(s.contributors)[0];
							i(j({
								subredditName: e.toLowerCase(),
								contributor: s.contributors[n]
							}))
						}
					} else i(Object(a.f)({
						kind: p.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2s4L9n"
						})
					}));
					return d.ok
				}
		},
		"./src/reddit/actions/wiki/wikiEditing/constants.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return s
			}));
			const s = "WIKI_PAGE_SAVE_SUCCESS"
		},
		"./src/reddit/actions/wiki/wikiPageSettings/constants.ts": function(e, t, i) {
			"use strict";
			i.d(t, "c", (function() {
				return s
			})), i.d(t, "d", (function() {
				return n
			})), i.d(t, "a", (function() {
				return r
			})), i.d(t, "b", (function() {
				return a
			}));
			const s = "PAGE__SUBREDDIT_WIKI_PAGE_SETTINGS_LOADED",
				n = "SUBREDDIT_WIKI_PAGE_SETTINGS_UPDATED",
				r = "SUBREDDIT_WIKI_PAGE_CONTRIBUTOR_REOVED",
				a = "SUBREDDIT_WIKI_PAGE_MORE_CONTRIBUTORS_LOADED"
		},
		"./src/reddit/actions/wiki/wikiPageSettings/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "c", (function() {
				return x
			})), i.d(t, "b", (function() {
				return N
			})), i.d(t, "e", (function() {
				return j
			})), i.d(t, "a", (function() {
				return E
			})), i.d(t, "d", (function() {
				return I
			}));
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./src/lib/constants/index.ts"),
				r = i("./src/lib/makeActionCreator/index.ts"),
				a = i("./src/reddit/actions/subredditSettings.ts"),
				o = i("./src/reddit/actions/toaster.ts"),
				d = i("./src/lib/makeApiRequest/index.ts"),
				c = i("./src/lib/makeGqlRequest/index.ts"),
				u = i("./src/lib/omitHeaders/index.ts"),
				l = i("./src/reddit/constants/headers.ts"),
				b = i("./src/graphql/operations/SubredditWikiPageSettings.json"),
				m = i("./src/reddit/models/SubredditWikiPage/index.ts");
			const p = (e, t) => Object(c.a)(e, {
					...b,
					variables: t
				}),
				k = {
					[m.a.Inherit]: "0",
					[m.a.Contributors]: "1",
					[m.a.Mods]: "2"
				};
			var g = e => {
					const {
						editPermissions: t,
						editorsInfo: i,
						isVisible: s
					} = e, {
						edges: n,
						pageInfo: r
					} = i, a = [];
					return n.forEach(e => {
						e.node.name && e.node.icon && a.push({
							username: e.node.name,
							iconUrl: e.node.icon.url
						})
					}), {
						editPermissions: t,
						editorsInfo: a,
						isVisible: s,
						afterToken: r.hasNextPage ? r.endCursor : null
					}
				},
				f = i("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				h = i("./src/reddit/models/Toast/index.ts"),
				w = i("./src/reddit/selectors/subreddit.ts"),
				O = i("./src/reddit/actions/wiki/wikiPageSettings/constants.ts");
			const y = Object(r.a)(O.c),
				x = (e, t) => async (i, s, n) => {
					const r = {
							subredditName: e,
							wikiPageName: t
						},
						o = await p(n.gqlContext(), r),
						d = Object(w.F)(s(), e);
					if (Object(w.W)(s(), d) || await i(Object(a.h)(e, d)), o.ok) {
						const e = o.body,
							t = e.data.subreddit && e.data.subreddit.wiki;
						if (t && t.page) {
							const e = g(t.page.settings);
							i(y({
								pageKey: Object(f.a)(r),
								settings: e
							}))
						}
					}
					return o.ok
				}, _ = Object(r.a)(O.b), N = (e, t, i) => async (n, r, a) => {
					const d = {
							subredditName: e,
							wikiPageName: t,
							after: i
						},
						c = await p(a.gqlContext(), d);
					if (c.ok) {
						const i = c.body,
							s = i.data.subreddit && i.data.subreddit.wiki;
						if (s && s.page) {
							const i = g(s.page.settings),
								{
									editorsInfo: r,
									afterToken: a
								} = i;
							n(_({
								editorsInfo: r,
								afterToken: a,
								pageKey: Object(f.a)({
									wikiPageName: t,
									subredditName: e
								})
							}))
						}
					} else n(Object(o.f)({
						kind: h.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "P9mov"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: N(e, t, i)
					}));
					return c.ok
				}, C = Object(r.a)(O.d), j = ({
					editPermissions: e,
					isVisible: t,
					wikiPageName: i,
					subredditName: s
				}) => async (r, a, o) => {
					const c = await (e => Object(d.a)(Object(u.a)(e.context, [l.a]), {
						endpoint: `${e.context.apiUrl}/r/${e.subredditName}/wiki/settings/${e.wikiPageName}`,
						method: n.gb.POST,
						data: {
							permlevel: k[e.editPermissions],
							listed: e.isVisible ? "on" : void 0
						}
					}))({
						context: o.apiContext(),
						editPermissions: e,
						isVisible: t,
						wikiPageName: i,
						subredditName: s
					});
					return c.ok && r(C({
						editPermissions: e,
						isVisible: t,
						pageKey: Object(f.a)({
							wikiPageName: i,
							subredditName: s
						})
					})), c.ok
				}, E = ({
					subredditName: e,
					username: t,
					wikiPageName: i
				}) => async (r, a, c) => {
					const b = await (e => Object(d.a)(Object(u.a)(e.context, [l.a]), {
						endpoint: `${e.context.apiUrl}/r/${e.subredditName}/api/wiki/alloweditor/add`,
						method: n.gb.POST,
						data: {
							page: e.wikiPageName,
							username: e.username
						}
					}))({
						context: c.apiContext(),
						wikiPageName: i,
						subredditName: e,
						username: t
					});
					if (b.ok) r(Object(o.f)({
						kind: h.b.SuccessCommunity,
						text: "User successfully added"
					})), await r(x(e, i));
					else if (b.error) {
						const e = b.error.type;
						let t = s.fbt._("Something went wrong", null, {
							hk: "8AkV3"
						});
						e === n.F.NOT_FOUND_ERROR && (t = s.fbt._("That user does not exist", null, {
							hk: "XDM7X"
						})), r(Object(o.f)({
							kind: h.b.Error,
							text: t
						}))
					}
					return b.ok
				}, v = Object(r.a)(O.a), I = ({
					subredditName: e,
					username: t,
					wikiPageName: i
				}) => async (s, r, a) => {
					const c = await (e => Object(d.a)(Object(u.a)(e.context, [l.a]), {
						endpoint: `${e.context.apiUrl}/r/${e.subredditName}/api/wiki/alloweditor/del`,
						method: n.gb.POST,
						data: {
							page: e.wikiPageName,
							username: e.username
						}
					}))({
						context: a.apiContext(),
						wikiPageName: i,
						subredditName: e,
						username: t
					});
					return c.ok && (s(Object(o.f)({
						kind: h.b.SuccessCommunity,
						text: "User has been successfully removed"
					})), s(v({
						username: t,
						pageKey: Object(f.a)({
							wikiPageName: i,
							subredditName: e
						})
					}))), c.ok
				}
		},
		"./src/reddit/actions/wiki/wikiRevisions/constants.ts": function(e, t, i) {
			"use strict";
			i.d(t, "d", (function() {
				return s
			})), i.d(t, "c", (function() {
				return n
			})), i.d(t, "b", (function() {
				return r
			})), i.d(t, "a", (function() {
				return a
			})), i.d(t, "e", (function() {
				return o
			}));
			const s = "WIKI_REVISIONS_PENDING",
				n = "WIKI_REVISIONS_LOADED",
				r = "WIKI_REVISIONS_FAILED",
				a = "WIKI_PAGE_REVERT_SUCCESS",
				o = "WIKI_REVISION_TOGGLE_VISIBILITY"
		},
		"./src/reddit/actions/wiki/wikiRevisions/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "c", (function() {
				return C
			})), i.d(t, "a", (function() {
				return E
			})), i.d(t, "b", (function() {
				return I
			}));
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./src/lib/constants/index.ts"),
				r = i("./src/lib/makeActionCreator/index.ts"),
				a = i("./src/reddit/actions/toaster.ts"),
				o = i("./src/reddit/endpoints/page/subredditWiki.ts"),
				d = i("./src/lib/makeGqlRequest/index.ts"),
				c = i("./src/graphql/operations/WikiRevisions.json");
			var u = i("./src/lib/makeApiRequest/index.ts"),
				l = i("./src/lib/omitHeaders/index.ts"),
				b = i("./src/reddit/constants/headers.ts"),
				m = i("./src/reddit/helpers/wiki/wikiRevision.ts");
			var p = (e, t) => Object(u.a)(Object(l.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/r/${t.subredditName}/api/wiki/hide`,
				method: n.gb.POST,
				data: {
					page: t.wikiPageName,
					revision: Object(m.b)(t.revisionId)
				}
			});
			var k = (e, t) => Object(u.a)(Object(l.a)(e, [b.a]), {
				endpoint: `${e.apiUrl}/r/${t.subredditName}/api/wiki/revert`,
				method: n.gb.POST,
				data: {
					page: t.wikiPageName,
					revision: Object(m.b)(t.revisionId)
				}
			});
			var g = e => {
					const t = e.subreddit && e.subreddit.wiki || {},
						i = t.pageRevisions && t.pageRevisions.revisions || t.recentRevisions;
					if (!i) throw new Error("Invalid response");
					return (e => {
						const t = {},
							i = [];
						return e.edges.forEach(e => {
							const s = e.node;
							t[s.id] = s, i.push(s.id)
						}), {
							pageInfo: e.pageInfo,
							revisions: t,
							revisionsIds: i
						}
					})(i)
				},
				f = i("./src/reddit/helpers/wiki/makeRevisionsListingKey.ts"),
				h = i("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				w = i("./src/reddit/models/Toast/index.ts"),
				O = i("./src/reddit/selectors/subredditWiki.ts"),
				y = i("./src/reddit/actions/wiki/wikiRevisions/constants.ts");
			const x = Object(r.a)(y.d),
				_ = Object(r.a)(y.c),
				N = Object(r.a)(y.b),
				C = e => async (t, i, r) => {
					const {
						canLoadMore: o = !1,
						canShowFailToast: u = !1,
						isRecent: l,
						subredditName: b,
						wikiPageName: m
					} = e, p = i(), k = Object(f.a)(e), h = Object(O.p)(p, {
						listingKey: k
					});
					if (!o && !!h) return !0;
					const y = h && h.pageInfo.endCursor || void 0;
					if (!(!h || h.pageInfo.hasNextPage)) return !0;
					const j = {
							after: y,
							isRecent: l,
							subredditName: b,
							wikiPageName: m
						},
						E = {
							key: k,
							options: j
						};
					t(x(E));
					const v = await ((e, t) => Object(d.a)(e, {
						...c,
						variables: t
					}))(r.gqlContext(), j);
					if (v.ok) {
						const e = v.body;
						if (e.data.subreddit) {
							const i = g(e.data);
							t(_({
								...E,
								...i
							}))
						}
					} else {
						const i = v.error || {
							type: n.F.UNKNOWN_ERROR
						};
						t(N({
							...E,
							error: i
						})), u && t(Object(a.f)({
							kind: w.b.Error,
							text: s.fbt._("Something went wrong", null, {
								hk: "1e4Swa"
							}),
							buttonText: s.fbt._("Retry", null, {
								hk: "1QXiG6"
							}),
							buttonAction: C(e)
						}))
					}
					return v.ok
				}, j = Object(r.a)(y.a), E = e => async (t, i, n) => {
					const {
						subredditName: r,
						wikiPageName: d
					} = e, c = Object(h.a)({
						...e,
						revisionId: void 0
					}), u = Object(f.a)({
						...e,
						isRecent: !1
					}), l = Object(f.a)({
						...e,
						isRecent: !0
					}), b = Object(O.p)(i(), {
						listingKey: u
					}), m = b && b.ids[0];
					if ((await k(n.apiContext(), e)).ok) {
						const e = (await Object(o.a)(n.gqlContext(), {
								includePageData: !0,
								subredditName: r,
								wikiPageName: d
							})).body,
							i = e.data.subreddit && e.data.subreddit.wiki,
							b = i && i.page;
						if (!b || !b.revision) return;
						if (b.revision.id === m) return void t(Object(a.f)({
							kind: w.b.SuccessCommunityGreen,
							text: s.fbt._("Wiki page is already at selected revision!", null, {
								hk: "46i9jx"
							})
						}));
						t(j({
							page: b,
							pageKey: c,
							pageRevisionsListingKey: u,
							recentRevisionsListingKey: l,
							subredditName: r,
							wikiPageName: d
						}))
					} else t(Object(a.f)({
						kind: w.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2L5ytY"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: E(e)
					}))
				}, v = Object(r.a)(y.e), I = e => async (t, i, n) => {
					const r = await p(n.apiContext(), e);
					if (r.ok) {
						const i = r.body.status;
						t(v({
							revisionId: e.revisionId,
							isHidden: i
						}))
					} else t(Object(a.f)({
						kind: w.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "2gGq8w"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: E(e)
					}))
				}
		},
		"./src/reddit/components/AuthorLink/index.m.less": function(e, t, i) {
			e.exports = {
				authorLinkStyles: "_23wugcdiaj44hdfugIAlnX",
				isUnstyled: "oQctV4n0yUb0uiHDdGnmE",
				isAdmin: "_1-wk-QXxJ0S4snrasETuaA",
				isAdminEmeritus: "sKTYSQHxlRLbA-0pCpguU",
				isMod: "_1VChcviPF84MLFsL2xfBCP",
				isOp: "_1uBAPhkb8ZOA-9p_B6inAR",
				isStrong: "_2YPMtQeUrWhVZuFXPpgmXz",
				isLivestreaming: "_3otDgT22VIln-JT-1XwFbr",
				deletedAuthorLink: "lizQBHVukyun2S2babj-l"
			}
		},
		"./src/reddit/components/AuthorLink/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				n = i.n(s),
				r = i("./src/lib/classNames/index.ts"),
				a = i("./src/config.ts"),
				o = i("./src/reddit/controls/InternalLink/index.tsx"),
				d = i("./src/reddit/hooks/useClickSourceData.ts"),
				c = i("./src/reddit/components/AuthorLink/index.m.less"),
				u = i.n(c);
			t.a = e => {
				const t = Object(r.a)(e.className, u.a.authorLinkStyles, {
						[u.a.isAdmin]: e.isAdmin,
						[u.a.isAdminEmeritus]: e.isAdminEmeritus,
						[u.a.isLivestreaming]: e.isLivestreaming,
						[u.a.isMod]: e.isMod,
						[u.a.isOp]: e.isOp,
						[u.a.isStrong]: e.isStrong,
						[u.a.isUnstyled]: e.isUnstyled
					}),
					i = Object(d.a)();
				return e.isExternal || e.isLivestreaming || e.forceOpenInNewTab ? n.a.createElement("a", {
					className: t,
					href: `${a.a.redditUrl}/user/${e.author}`,
					rel: "noopener noreferrer",
					target: "_blank"
				}, e.children) : e.isAuthorDeleted ? n.a.createElement("span", {
					className: Object(r.a)(u.a.deletedAuthorLink, e.className)
				}, e.children) : n.a.createElement(o.a, {
					className: t,
					style: e.style,
					to: {
						pathname: `/user/${e.author}/`,
						state: i
					}
				}, e.children)
			}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, i) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, i) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./node_modules/react/index.js"),
				r = i.n(n),
				a = i("./src/higherOrderComponents/asModal/index.tsx"),
				o = i("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = i("./src/reddit/controls/TextButton/index.tsx"),
				c = i("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				u = i("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				l = i.n(u);
			const b = e => e.preventDefault();
			t.a = Object(a.a)(e => r.a.createElement(o.d, null, r.a.createElement(o.h, null, r.a.createElement(c.a, null, r.a.createElement(o.p, null, e.headerText || s.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), r.a.createElement(d.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, r.a.createElement(o.b, null)))), r.a.createElement(o.k, null, r.a.createElement(o.o, {
				className: l.a.ModalText
			}, e.modalText)), r.a.createElement(o.f, null, !e.hideCancelButton && r.a.createElement(o.a, {
				className: l.a.buttonWidth,
				onMouseDown: b,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || s.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), r.a.createElement(o.t, {
				className: l.a.buttonWidth,
				onMouseDown: b,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.actionText))))
		},
		"./src/reddit/components/ModHub/InfoTooltip/index.m.less": function(e, t, i) {
			e.exports = {
				iconContainer: "_39qwCVfS_zadCI7gaPX3MI",
				textTooltip: "_1yEjLpHWBPakuE9kTnIp_w"
			}
		},
		"./src/reddit/components/ModHub/InfoTooltip/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				n = i.n(s),
				r = i("./src/higherOrderComponents/asTooltip.tsx"),
				a = i("./src/lib/classNames/index.ts"),
				o = i("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = i("./src/reddit/icons/fonts/Info/index.tsx"),
				c = i("./src/reddit/components/ModHub/InfoTooltip/index.m.less"),
				u = i.n(c);
			const l = Object(r.a)(o.a),
				b = ["center", "bottom"],
				m = ["center", "top"];
			class p extends n.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						showTooltip: !1
					}
				}
				render() {
					const {
						props: e
					} = this;
					return n.a.createElement("span", {
						className: u.a.iconContainer,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						ref: this.setTooltipTargetRef
					}, n.a.createElement(d.a, null), n.a.createElement(l, {
						className: Object(a.a)(e.className, u.a.textTooltip),
						children: e.children,
						isOpen: this.state.showTooltip,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: b,
						text: e.text,
						tooltipPosition: m
					}))
				}
			}
			t.a = p
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, i) {
			e.exports = {
				_Dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				MenuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				menuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				mIsEnabled: "uMPgOFYlCc5uvpa2Lbteu",
				MenuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				menuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				DropdownRow: "_2DO72U0b_6CUw3msKGrnnT",
				dropdownRow: "_2DO72U0b_6CUw3msKGrnnT"
			}
		},
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return y
			}));
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./node_modules/react/index.js"),
				r = i.n(n),
				a = i("./node_modules/react-redux/es/index.js"),
				o = i("./node_modules/reselect/es/index.js"),
				d = i("./src/lib/classNames/index.ts"),
				c = i("./src/lib/lessComponent.tsx"),
				u = i("./src/reddit/actions/tooltip.ts"),
				l = i("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				b = i("./src/reddit/controls/Dropdown/index.tsx"),
				m = i("./src/reddit/controls/Dropdown/Row.tsx"),
				p = i("./src/reddit/icons/fonts/index.tsx"),
				k = i("./src/reddit/selectors/tooltip.ts"),
				g = i("./src/reddit/components/OverflowMenu/index.m.less"),
				f = i.n(g);
			const h = c.a.wrapped(b.a, "_Dropdown", f.a),
				w = Object(l.a)(h),
				O = c.a.button("MenuButton", f.a),
				y = c.a.wrapped(m.b, "DropdownRow", f.a),
				x = Object(o.c)({
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(k.b)(t)(e)
				}),
				_ = Object(a.b)(x, (e, {
					dropdownId: t
				}) => ({
					toggleDropdown: () => e(Object(u.h)({
						tooltipId: t
					}))
				})),
				N = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = _(e => r.a.createElement(O, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": s.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(d.a)(e.className, {
					[f.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: N(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : r.a.createElement(p.a, {
				name: "overflow_horizontal"
			}), r.a.createElement(w, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition,
				style: e.style
			}, e.children)))
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
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, i) {
			e.exports = {
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				n = i.n(s),
				r = i("./src/lib/lessComponent.tsx"),
				a = i("./node_modules/react-redux/es/index.js"),
				o = i("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				d = i("./src/reddit/contexts/PageLayer/index.tsx"),
				c = i("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				u = i("./node_modules/reselect/es/index.js"),
				l = i("./src/reddit/components/SidebarFooter/index.m.less"),
				b = i.n(l);
			const {
				fbt: m
			} = i("./node_modules/fbt/lib/FbtPublic.js"), p = r.a.a("Link", b.a), k = Object(u.c)({
				isNavbarLikeMwebEnabled: c.a
			}), g = Object(a.b)(k), f = Object(d.t)({
				isFrontpage: d.y
			});
			t.a = f(g(e => e.isNavbarLikeMwebEnabled ? e.isFrontpage ? n.a.createElement(o.a, {
				className: b.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, n.a.createElement("div", {
				className: b.a.LinkContainer
			}, n.a.createElement("div", {
				className: b.a.Column
			}, n.a.createElement(p, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, m._("User Agreement", null, {
				hk: "2RA6JL"
			})), n.a.createElement(p, {
				href: "https://www.redditinc.com/policies/privacy-policy"
			}, m._("Privacy policy", null, {
				hk: "10K04G"
			}))), n.a.createElement("div", {
				className: b.a.Column
			}, n.a.createElement(p, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, m._("Content policy", null, {
				hk: "1DyxZS"
			})), n.a.createElement(p, {
				href: "https://www.redditinc.com/policies/moderator-guidelines"
			}, m._("Moderator Guidelines", null, {
				hk: "2O9otm"
			})))), n.a.createElement("div", {
				className: b.a.Copyright
			}, m._("© {year} Reddit, Inc. All rights reserved.", [m._param("year", (new Date).getFullYear().toString())], {
				hk: "sR7zP"
			}))) : null : n.a.createElement(o.a, {
				className: b.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, n.a.createElement("div", {
				className: b.a.LinkContainer
			}, n.a.createElement("div", {
				className: b.a.Column
			}, n.a.createElement(p, {
				href: "https://www.reddithelp.com"
			}, m._("help", null, {
				hk: "4lyYaD"
			})), n.a.createElement(p, {
				href: "https://www.reddit.com/mobile/download"
			}, m._("Reddit App", null, {
				hk: "1ehrjP"
			})), n.a.createElement(p, {
				href: "https://www.reddit.com/coins"
			}, m._("Reddit coins", null, {
				hk: "32iMaN"
			})), n.a.createElement(p, {
				href: "https://www.reddit.com/premium"
			}, m._("Reddit premium", null, {
				hk: "RuO3A"
			})), n.a.createElement(p, {
				href: "https://redditgifts.com/"
			}, m._("Reddit gifts", null, {
				hk: "2XziRN"
			})), e.isFrontpage && n.a.createElement(n.a.Fragment, null, n.a.createElement(p, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, m._("Communities", null, {
				hk: "3CJu37"
			})), n.a.createElement(p, {
				href: "https://www.reddit.com/posts/2020/"
			}, m._("Rereddit", null, {
				hk: "1z3k7C"
			})), n.a.createElement(p, {
				href: "https://www.reddit.com/topics/a-1/"
			}, m._("Topics", null, {
				hk: "349RFt"
			})))), n.a.createElement("div", {
				className: b.a.Column
			}, n.a.createElement(p, {
				href: "https://about.reddit.com"
			}, m._("about", null, {
				hk: "1sqJKs"
			})), n.a.createElement(p, {
				href: "https://about.reddit.com/careers/"
			}, m._("careers", null, {
				hk: "26ABvc"
			})), n.a.createElement(p, {
				href: "https://about.reddit.com/press/"
			}, m._("press", null, {
				hk: "2Qmgdz"
			})), n.a.createElement(p, {
				href: "https://www.redditinc.com/advertising"
			}, m._("advertise", null, {
				hk: "Mt40U"
			})), n.a.createElement(p, {
				href: "http://www.redditblog.com/"
			}, m._("blog", null, {
				hk: "46IQJw"
			})), n.a.createElement(p, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, m._("Terms", null, {
				hk: "4qRzfE"
			})), n.a.createElement(p, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, m._("Content policy", null, {
				hk: "1DyxZS"
			})), n.a.createElement(p, {
				href: "https://www.redditinc.com/policies/privacy-policy"
			}, m._("Privacy policy", null, {
				hk: "10K04G"
			})), n.a.createElement(p, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, m._("Mod policy", null, {
				hk: "2gYc2T"
			})))), n.a.createElement("div", {
				className: b.a.Copyright
			}, m._("Reddit Inc © {year} . All rights reserved", [m._param("year", (new Date).getFullYear().toString())], {
				hk: "3nJUt5"
			})))))
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, i) {
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
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./src/lib/classNames/index.ts"),
				n = i("./node_modules/lodash/throttle.js"),
				r = i.n(n),
				a = i("./node_modules/react/index.js"),
				o = i.n(a),
				d = i("./src/lib/constants/index.ts"),
				c = i("./src/reddit/controls/Button/index.tsx"),
				u = i("./src/reddit/components/BackToTop/index.m.less"),
				l = i.n(u);
			const {
				fbt: b
			} = i("./node_modules/fbt/lib/FbtPublic.js");
			var m = e => o.a.createElement("div", {
					className: Object(s.a)(e.className, l.a.container),
					style: e.style
				}, o.a.createElement(c.i, {
					className: l.a.button,
					onClick: () => window.scroll(0, 0)
				}, b._("Back to Top", null, {
					hk: "YjBtV"
				}))),
				p = i("./src/reddit/components/SidebarFooter/index.tsx"),
				k = i("./src/reddit/constants/componentSizes.ts"),
				g = i("./src/reddit/contexts/PageLayer/index.tsx"),
				f = i("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				h = i.n(f),
				w = i("./src/lib/lessComponent.tsx");

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			const y = d.e[1] + 24,
				x = k.f + 8 + 152 + 16,
				_ = x + y + 8,
				N = w.a.div("Container", h.a),
				C = w.a.wrapped(({
					className: e,
					...t
				}) => o.a.createElement(m, O({
					className: e,
					style: {
						top: "calc(100vh - 8px)"
					}
				}, t)), "BackToTop", h.a),
				j = ({
					children: e,
					className: t,
					isFakeOverlay: i,
					isSticky: n
				}) => o.a.createElement("div", {
					className: Object(s.a)(t, {
						[h.a.StickyStyles]: n && !i,
						[h.a.StickyStylesFakeOverlay]: !!i
					})
				}, e);
			class E extends a.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > _,
						shouldFooterSticky: this.windowHeight > x
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
					}, this.handleResize = r()(() => {
						this.updateMeasurements(), this.updateState()
					}, d.H), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
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
					const {
						props: {
							adComponent: e,
							adComponentOnFakeOverlay: t,
							children: i,
							className: s,
							hideFooter: n
						}
					} = this, r = this.state.isAdSticky && !(!e && !i);
					return o.a.createElement(N, {
						className: s,
						innerRef: this.setWrapperRef
					}, o.a.createElement(j, {
						isFakeOverlay: t,
						isSticky: r
					}, e, i, !n && o.a.createElement(p.a, null)), !this.props.hideBackToTop && o.a.createElement(C, null))
				}
			}
			const v = Object(g.t)();
			t.a = v(E)
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, i) {
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
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				n = i.n(s),
				r = i("./node_modules/react-redux/es/index.js"),
				a = i("./node_modules/reselect/es/index.js"),
				o = i("./src/lib/classNames/index.ts"),
				d = i("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = i("./src/reddit/components/SEOTitle/index.tsx"),
				u = i("./src/reddit/components/TrackingHelper/index.tsx"),
				l = i("./src/reddit/contexts/PageLayer/index.tsx"),
				b = i("./src/reddit/controls/Button/index.tsx"),
				m = i("./src/reddit/helpers/trackers/widgets.ts"),
				p = i("./src/reddit/models/NewStructuredStyles/index.ts"),
				k = i("./src/reddit/selectors/experiments/topPosts.ts"),
				g = i("./src/reddit/selectors/structuredStyles.ts"),
				f = i("./src/reddit/selectors/user.ts"),
				h = i("./src/reddit/models/Theme/index.ts"),
				w = i("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const O = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(w.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				y = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(w.a)(e).widgetColors.sidebarWidgetHeaderColor,
				x = e => {
					const t = O(e);
					return Object(h.f)(t)
				},
				_ = e => {
					const t = y(e);
					return Object(h.f)(t)
				};
			var N = i("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				C = i.n(N);
			const {
				fbt: j
			} = i("./node_modules/fbt/lib/FbtPublic.js"), E = Object(l.t)(), v = Object(r.b)(() => Object(a.c)({
				forceRedditStyle: (e, t) => {
					const i = Object(l.m)(e, t) || void 0,
						s = t.redditStyle || Object(g.l)(e, {
							subredditId: i
						}),
						n = Object(f.W)(e);
					return s || n
				},
				nigtmode: f.W,
				subredditId: l.m,
				topPostVariant: k.d
			}));
			class I extends n.a.Component {
				constructor() {
					super(...arguments), this.contentRef = n.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(Object(m.b)(e, t)), this.setState({
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
					return e.backgroundColor = O(this.props), e.borderColor = Object(p.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = x(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = y(this.props), e.color = e.fill = _(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: i,
						forceRedditStyle: s,
						headerButton: r,
						onClick: a,
						title: d,
						titleClassName: u,
						truncateThreshold: l
					} = this.props, m = i ? C.a.widgetContentOnly : C.a.widgetContent, p = !s && this.props.styles, k = p ? this.getWidgetBackgroundStyles() : {}, g = p ? this.getWidgetHeaderStyles() : {};
					return n.a.createElement("div", {
						className: Object(o.a)(t, C.a.widgetBackground, {
							[C.a.redditStyle]: s,
							[C.a.clickable]: !!a,
							[C.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": s,
						onClick: a,
						style: k
					}, d && n.a.createElement("div", {
						className: C.a.widgetHeader,
						style: g
					}, n.a.createElement("div", {
						className: Object(o.a)(C.a.widgetTitle, u)
					}, n.a.createElement(c.b, {
						type: c.a.Widget
					}, d)), r), n.a.createElement("div", {
						className: Object(o.a)(m, {
							[C.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? l : "none"
						}
					}, e), this.state.isTruncated && n.a.createElement(b.o, {
						className: C.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, j._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = E(v(Object(d.a)(Object(u.c)(I))))
		},
		"./src/reddit/components/Wiki/CommunityWikiManagement/CommunityWikiPage/index.m.less": function(e, t, i) {
			e.exports = {
				topBar: "_3kk9JdhNiGLp6Q4tGsrqLR"
			}
		},
		"./src/reddit/components/Wiki/CommunityWikiManagement/index.m.less": function(e, t, i) {
			e.exports = {
				communityWikiTopBar: "_2XDZHbiDksRCrTtd194Wf2",
				wikiPageEditorContent: "_3GDwuTIITQZO6fapgaJpFD"
			}
		},
		"./src/reddit/endpoints/page/subredditWiki.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return r
			}));
			var s = i("./src/lib/makeGqlRequest/index.ts"),
				n = i("./src/graphql/operations/SubredditWiki.json");
			const r = (e, t) => Object(s.a)(e, {
				...n,
				variables: t
			})
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, i) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return a
			})), i.d(t, "b", (function() {
				return o
			}));
			var s = i("./src/lib/classNames/index.ts"),
				n = i("./src/reddit/helpers/styles/mixins/loading.m.less"),
				r = i.n(n);
			const a = ({
					isLoading: e
				}) => Object(s.a)(r.a.loadingBackground, {
					[r.a["m-loading"]]: e
				}),
				o = e => Object(s.a)(r.a.loadingBar, a(e))
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return o
			})), i.d(t, "a", (function() {
				return d
			})), i.d(t, "d", (function() {
				return c
			})), i.d(t, "c", (function() {
				return u
			}));
			var s, n, r = i("./src/reddit/constants/tracking.ts"),
				a = i("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(s || (s = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(n || (n = {}));
			const o = (e, t) => i => ({
					source: n.COMMUNITY_WIDGETS,
					action: r.c.CLICK,
					noun: s.SEE_MORE,
					widget: Object(a.widget)(i, {
						subredditId: e,
						widgetKind: t
					}),
					...a.defaults
				}),
				d = (e, t) => i => ({
					source: n.POST,
					action: r.c.CLICK,
					noun: s.REREDDIT_PROMO,
					post: a.post(i, e),
					subreddit: a.subreddit(i),
					...t && {
						banner: {
							buttonText: t,
							id: s.REREDDIT_PROMO
						}
					},
					...a.defaults(i)
				}),
				c = () => e => ({
					source: n.SIDEBAR,
					action: r.c.VIEW,
					noun: s.TOPICS_WIDGET,
					...a.defaults(e)
				}),
				u = e => t => ({
					source: n.TOPICS_WIDGET,
					action: r.c.CLICK,
					noun: s.TOPIC,
					...a.defaults(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/helpers/wiki/buildWikiPagesTree.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return a
			}));
			i("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = i("./node_modules/lodash/sortBy.js"),
				n = i.n(s),
				r = i("./src/reddit/constants/wiki.ts");
			const a = e => {
				return n()(e, e => `${e.path}/`.startsWith(`${r.i}/`) ? `\0${e.path}` : e.path).filter(e => !r.l.includes(e.path))
			};
			t.a = e => {
				const t = new Map,
					i = [];
				return a(e).forEach(e => {
					const s = {
							...e,
							children: []
						},
						n = s.parent ? t.get(s.parent) : null;
					n ? n.children.push(s) : i.push(s), t.set(s.path, s)
				}), i
			}
		},
		"./src/reddit/helpers/wiki/makeComparisonDiffKey.ts": function(e, t, i) {
			"use strict";
			t.a = e => {
				const {
					comparisonRevisionId: t,
					revisionId: i,
					subredditName: s,
					wikiPageName: n
				} = e;
				return `[${s}]--[${n}]--[rev1:${i}]--[rev2:${t}]`.toLowerCase()
			}
		},
		"./src/reddit/helpers/wiki/makeRevisionsListingKey.ts": function(e, t, i) {
			"use strict";
			t.a = e => {
				const t = e.isRecent ? "(recent)" : e.wikiPageName;
				return `[${e.subredditName}]--[${t}]`.toLowerCase()
			}
		},
		"./src/reddit/helpers/wiki/makeWikiPageKey.ts": function(e, t, i) {
			"use strict";
			t.a = e => {
				let t = `[${e.subredditName}]--[${e.wikiPageName}]`;
				return e.revisionId && (t += `--[rev:${e.revisionId}]`), t.toLowerCase()
			}
		},
		"./src/reddit/helpers/wiki/validatePageName.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return a
			})), i.d(t, "c", (function() {
				return o
			})), i.d(t, "b", (function() {
				return d
			}));
			var s = i("./src/reddit/constants/wiki.ts");
			const n = new RegExp(`^[-\\w]+(?:\\/[-\\w]+){0,${s.c}}$`),
				r = /^[-\w]+$/;
			var a;
			! function(e) {
				e[e.InvalidPageName = 1] = "InvalidPageName", e[e.RestrictedPageName = 2] = "RestrictedPageName", e[e.MaxLengthExceed = 3] = "MaxLengthExceed", e[e.PageAlreadyExists = 4] = "PageAlreadyExists"
			}(a || (a = {}));
			const o = e => {
					if (!r.test(e.toLowerCase())) return a.InvalidPageName
				},
				d = (e, t) => {
					const i = e.toLowerCase(),
						r = i.split("/")[0],
						o = s.b.has(r),
						d = s.f.has(r) && i !== s.h && i !== s.k;
					if (o || d) return a.RestrictedPageName;
					if (!n.test(i)) return a.InvalidPageName;
					if (t) {
						if (t.some(e => e.path.toLowerCase() === i)) return a.PageAlreadyExists
					}
					return i.length > s.d ? a.MaxLengthExceed : void 0
				}
		},
		"./src/reddit/helpers/wiki/wikiRevision.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return s
			})), i.d(t, "b", (function() {
				return n
			}));
			const s = e => e.startsWith("WikiRevision_") ? e : "WikiRevision_" + e,
				n = e => e.startsWith("WikiRevision_") ? e.slice("WikiRevision_".length) : e
		},
		"./src/reddit/pages/SubredditWiki/index.tsx": function(e, t, i) {
			"use strict";
			i.r(t);
			var s = i("./node_modules/react/index.js"),
				n = i.n(s),
				r = i("./node_modules/react-redux/es/index.js"),
				a = i("./node_modules/reselect/es/index.js"),
				o = i("./src/reddit/actions/pages/shared.ts"),
				d = i("./src/reddit/components/CommunityIdTopBar/index.tsx"),
				c = i("./src/reddit/components/ContentGate/index.tsx"),
				u = i("./src/reddit/components/HeaderImage/index.tsx"),
				l = i("./src/lib/constants/index.ts"),
				b = i("./src/lib/makeListingKey/index.ts"),
				m = i("./src/reddit/components/SubredditSidebar/index.tsx");
			var p = e => {
					const {
						subreddit: t,
						subredditName: i
					} = e, s = Object(b.a)(i, l.T.HOT, {});
					return n.a.createElement(m.a, {
						listingKey: s,
						listingName: i.toLowerCase(),
						subredditId: t.id,
						subredditName: i
					})
				},
				k = i("./src/reddit/components/Wiki/WikiPageDiff/index.tsx"),
				g = i("./src/reddit/components/Wiki/WikiPageEditor/index.tsx"),
				f = i("./src/reddit/components/Wiki/WikiPageSource/index.tsx"),
				h = i("./src/reddit/constants/parameters.ts"),
				w = i("./src/reddit/constants/wiki.ts"),
				O = i("./src/reddit/contexts/PageLayer/index.tsx"),
				y = i("./src/reddit/helpers/wiki/wikiRevision.ts"),
				x = i("./src/reddit/components/Wiki/RevisionsHistory/index.tsx"),
				_ = i("./src/reddit/components/JumpToContent/index.tsx"),
				N = i("./src/reddit/components/Wiki/WikiPageContent/index.tsx"),
				C = i("./src/reddit/components/Wiki/WikiPageTopBar/index.tsx"),
				j = i("./src/reddit/components/Wiki/CommunityWikiManagement/CommunityWikiPage/index.m.less"),
				E = i.n(j);

			function v(e) {
				const {
					wikiPageName: t,
					subredditName: i
				} = e;
				return s.createElement(s.Fragment, null, s.createElement(_.a, null), s.createElement(C.a, {
					isModHub: !1,
					className: E.a.topBar,
					wikiPageName: t,
					subredditName: i
				}), s.createElement(N.a, {
					showRevisionInfo: !0,
					subredditName: i,
					wikiPageName: t
				}))
			}
			var I = i("./src/reddit/components/Wiki/CommunityWikiManagement/index.m.less"),
				S = i.n(I);
			class R extends n.a.Component {
				render() {
					const {
						pageLayer: e,
						subredditName: t
					} = this.props;
					if (!e) return null;
					const {
						urlParams: i,
						queryParams: s
					} = e, {
						wikiSubRoute: r,
						wikiPageName: a
					} = i, o = s[h.A], d = s[h.B], c = h.C in s;
					switch (r) {
						case w.m.Create:
						case w.m.Edit:
							return n.a.createElement(g.a, {
								contentClassName: S.a.wikiPageEditorContent,
								isCreation: r === w.m.Create,
								subredditName: t,
								topBarClassName: S.a.communityWikiTopBar,
								wikiPageName: a
							});
						case w.m.Revisions:
							return n.a.createElement(x.a, {
								key: a,
								isRecentRevisionsMode: !a,
								subredditName: t,
								wikiPageName: a
							});
						default:
							return a && o && d ? n.a.createElement(k.a, {
								comparisonRevisionId: Object(y.a)(d),
								revisionId: Object(y.a)(o),
								subredditName: t,
								wikiPageName: a
							}) : a && (o || c) ? n.a.createElement(f.a, {
								revisionId: o ? Object(y.a)(o) : void 0,
								subredditName: t,
								wikiPageName: a
							}) : a ? n.a.createElement(v, {
								wikiPageName: a,
								subredditName: t
							}) : null
					}
				}
			}
			var T = Object(O.t)()(R),
				P = i("./src/reddit/constants/componentSizes.ts"),
				W = i("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				D = i("./src/reddit/layout/page/Listing/index.tsx"),
				L = i("./src/reddit/selectors/subreddit.ts"),
				A = i("./src/reddit/selectors/user.ts");
			const B = Object(O.t)(),
				M = Object(r.b)(() => Object(a.c)({
					contentGateInfo: (e, {
						match: t
					}) => Object(A.e)(e, t.params.subredditName),
					layout: O.O,
					over18Pref: A.db,
					subreddit: (e, {
						match: t
					}) => Object(L.A)(e, {
						subredditName: t.params.subredditName || w.e
					}),
					subredditName: (e, {
						match: t
					}) => t.params.subredditName || w.e,
					wikiPageName: (e, {
						match: t
					}) => t.params.wikiPageName || w.i
				}), e => ({
					onPageViewed: () => e(Object(o.a)())
				}));
			class K extends n.a.PureComponent {
				componentDidMount() {
					this.props.onPageViewed()
				}
				render() {
					const {
						className: e,
						contentGateInfo: t,
						subreddit: i,
						subredditName: s
					} = this.props, r = !!i && i.isNSFW && !A.db, a = Object(W.a)(t, r, s);
					if (a) return n.a.createElement(c.default, a);
					const o = `/r/${s}/`;
					return n.a.createElement(D.a, {
						className: e,
						disableFullscreen: !0,
						maxWidth: P.i,
						navBar: n.a.createElement(n.a.Fragment, null, n.a.createElement(u.a, {
							disableFullscreen: !0,
							headerText: i ? i.name : s,
							maxWidth: P.i,
							subredditOrProfile: i,
							url: o
						}), n.a.createElement(d.a, {
							subreddit: i || void 0,
							subredditId: i ? i.id : void 0,
							subredditName: s,
							subredditUrl: o
						})),
						content: n.a.createElement(T, {
							subredditName: s
						}),
						sidebar: i && n.a.createElement(p, {
							subreddit: i,
							subredditName: s
						})
					})
				}
			}
			t.default = B(M(K))
		},
		"./src/reddit/selectors/subredditWiki.ts": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return a
			})), i.d(t, "a", (function() {
				return o
			})), i.d(t, "c", (function() {
				return d
			})), i.d(t, "p", (function() {
				return c
			})), i.d(t, "q", (function() {
				return u
			})), i.d(t, "o", (function() {
				return l
			})), i.d(t, "n", (function() {
				return b
			})), i.d(t, "i", (function() {
				return m
			})), i.d(t, "d", (function() {
				return p
			})), i.d(t, "j", (function() {
				return k
			})), i.d(t, "m", (function() {
				return g
			})), i.d(t, "k", (function() {
				return f
			})), i.d(t, "l", (function() {
				return h
			})), i.d(t, "e", (function() {
				return w
			})), i.d(t, "h", (function() {
				return O
			})), i.d(t, "f", (function() {
				return y
			})), i.d(t, "g", (function() {
				return x
			}));
			var s = i("./src/lib/objectSelector/index.ts"),
				n = i("./src/reddit/helpers/wiki/makeWikiPageKey.ts");
			const r = [],
				a = (e, t) => {
					var i;
					const {
						subredditName: s
					} = t;
					if (null === (i = e.pages) || void 0 === i ? void 0 : i.subredditWiki) return e.pages.subredditWiki.directory[s.toLowerCase()]
				},
				o = (e, t) => {
					const {
						subredditName: i
					} = t;
					return !!e.subreddits.api.wiki.pending[i.toLowerCase()]
				},
				d = (e, t) => {
					var i;
					const s = Object(n.a)(t);
					if (null === (i = e.pages) || void 0 === i ? void 0 : i.subredditWiki) return e.pages.subredditWiki.pages[s]
				},
				c = (e, {
					listingKey: t
				}) => e.pages.subredditWiki.revisions.listings[t],
				u = (e, {
					listingKey: t
				}) => !!e.pages.subredditWiki.revisions.api.pending[t],
				l = (e, {
					listingKey: t
				}) => !!e.pages.subredditWiki.revisions.api.error[t],
				b = (e, t) => {
					return (e => e.pages.subredditWiki.revisions.models)(e)[t.revisionId]
				},
				m = (e, {
					key: t
				}) => e.pages.subredditWiki.diff[t],
				p = (e, t) => {
					const i = Object(n.a)(t);
					return e.pages.subredditWiki.pageSettings[i]
				},
				k = (e, t) => {
					const {
						subredditName: i
					} = t;
					return !!e.pages.subredditWiki.wikiContributors.listing.api.pending[i.toLowerCase()]
				},
				g = Object(s.a)((e, {
					subredditName: t
				}) => {
					const i = t.toLowerCase(),
						s = e.pages.subredditWiki.wikiContributors.listing,
						n = s.userOrder[i],
						a = s.models[i];
					return n ? n.map(e => a[e]) : r
				}),
				f = (e, t) => {
					const {
						subredditName: i
					} = t;
					return e.pages.subredditWiki.wikiContributors.listing.afterToken[i.toLowerCase()]
				},
				h = (e, t) => {
					const {
						subredditName: i
					} = t;
					return e.pages.subredditWiki.wikiContributors.search[i.toLowerCase()]
				},
				w = (e, t) => {
					const {
						subredditName: i
					} = t;
					return !!e.pages.subredditWiki.wikiBannedContributors.listing.api.pending[i.toLowerCase()]
				},
				O = Object(s.a)((e, {
					subredditName: t
				}) => {
					const i = t.toLowerCase(),
						s = e.pages.subredditWiki.wikiBannedContributors.listing,
						n = s.userOrder[i],
						a = s.models[i];
					return n ? n.map(e => a[e]) : r
				}),
				y = (e, t) => {
					const {
						subredditName: i
					} = t;
					return e.pages.subredditWiki.wikiBannedContributors.listing.afterToken[i.toLowerCase()]
				},
				x = (e, t) => {
					const {
						subredditName: i
					} = t;
					return e.pages.subredditWiki.wikiBannedContributors.search[i.toLowerCase()]
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditWiki.0374127486aea81301a2.js.map