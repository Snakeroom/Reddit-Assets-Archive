// https://www.redditstatic.com/desktop2x/SearchResults.d362eb9fc0213842e1ee.js
// Retrieved at 9/22/2022, 10:00:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SearchResults"], {
		"./src/devPlatform/components/ContextActions/ContextActionsLoader.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				c = s("./src/reddit/selectors/experiments/devPlatform.ts");
			const i = Object(a.a)({
				resolved: {},
				chunkName: () => "devPlatform-components-ContextActions",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("vendors~devPlatform-components-AdminPanel-Utilities-DevPlatformConfig~devPlatform-components-ContextActions"), s.e("devPlatform-components-ContextActions")]).then(s.bind(null, "./src/devPlatform/components/ContextActions/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/devPlatform/components/ContextActions/index.tsx"
				}
			}, {
				ssr: !1
			});

			function d(e) {
				return Object(o.e)(e => Object(c.a)(e)) ? r.a.createElement(i, {
					contextType: e.contextType,
					contextData: e.contextData,
					moderator: e.moderator
				}) : null
			}
		},
		"./src/devPlatform/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "e", (function() {
				return a
			})), s.d(t, "a", (function() {
				return c
			}));
			const n = "devvit-gateway-url",
				r = "devvit-mock-metadata",
				o = "devvit-debug-logging",
				a = "DEV_PLAT__OPEN_USER_INPUT_MODAL";
			var c;
			! function(e) {
				e[e.POST = 0] = "POST", e[e.COMMENT = 1] = "COMMENT", e[e.SUBREDDIT = 2] = "SUBREDDIT", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
			}(c || (c = {}))
		},
		"./src/lib/unicodeUtils/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			}));
			const n = e => {
					let t = 0,
						s = 0;
					const n = [0];
					for (const r of e) t++, s += r.length, n[t] = s;
					return n
				},
				r = e => {
					let t = 0,
						s = 0;
					const n = [];
					for (const r of e) {
						for (let e = 0; e < r.length; e++) n[s] = t, s++;
						t++
					}
					return n[s] = t, n
				}
		},
		"./src/reddit/actions/pages/search/searchResultsRequested.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "searchResultsRequested", (function() {
				return v
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/pick.js"),
				o = s.n(r),
				a = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/makeSearchKey/index.ts"),
				i = s("./src/lib/pageTitle/index.ts"),
				d = s("./node_modules/lodash/isEqual.js"),
				l = s.n(d),
				u = s("./src/reddit/actions/pages/search/index.ts"),
				m = s("./src/reddit/actions/platform.ts"),
				p = s("./src/reddit/constants/parameters.ts"),
				b = s("./src/reddit/models/Multireddit/index.ts"),
				h = s("./src/reddit/constants/experiments.ts"),
				x = s("./src/reddit/helpers/chooseVariant/index.ts"),
				f = s("./node_modules/reselect/es/index.js");
			const O = Object(f.a)(e => Object(x.c)(e, {
					experimentEligibilitySelector: x.a,
					experimentName: h.Bb
				}), e => e === h.Jd),
				j = e => n.fbt._("reddit.com: search results - {query}", [n.fbt._param("query", e || "None")], {
					hk: "1XOKAg"
				}),
				v = e => async (t, s) => {
					const n = s(),
						r = Object(c.e)(o()(e.queryParams, p.t)),
						{
							multiredditName: d,
							subredditName: h,
							username: x
						} = e.params;
					let f;
					x && d && (f = Object(b.h)(x, d));
					const v = Object(c.b)(h || d, x, r);
					!O(n) || r.type.length && !l()(r.type, [a.gc.Posts, a.gc.Subreddits, a.gc.Users]) || t(Object(u.d)(v, {
						...r,
						type: [a.gc.Comments]
					}, h, x, f, !0)), await t(Object(u.d)(v, r, h, x, f));
					let g = !1;
					const {
						type: y = []
					} = r, E = y.indexOf(a.gc.Posts) > -1, C = y.indexOf(a.gc.Users) > -1, _ = y.indexOf(a.gc.Subreddits) > -1;
					E && n.listings.postOrder.api.error[v] && (g = !0), C && n.listings.authorOrder.api.error[v] && (g = !0), _ && n.listings.communityOrder.api.error[v] && (g = !0), t(g ? m.m({
						title: Object(i.e)()
					}) : m.m({
						title: j(r.q)
					}))
				}
		},
		"./src/reddit/actions/publicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return m
			})), s.d(t, "a", (function() {
				return j
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "d", (function() {
				return g
			})), s.d(t, "e", (function() {
				return y
			})), s.d(t, "f", (function() {
				return C
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/query-string/index.js"),
				r = s.n(n),
				o = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				c = s("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				i = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				d = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				l = s("./src/reddit/selectors/subreddit.ts");
			const u = new Set(["home", "r/popular"]),
				m = e => {
					const t = location && location.search || "",
						s = r.a.parse(t);
					u.has(e) && (s.related = e);
					const n = r.a.stringify(s);
					return n ? `?${n}` : ""
				},
				p = Object(o.a)(a.N),
				b = Object(o.a)(a.y),
				h = Object(o.a)(a.O),
				x = Object(o.a)(a.z),
				f = Object(o.a)(a.M),
				O = Object(o.a)(a.L),
				j = Object(o.a)(a.t),
				v = Object(o.a)(a.u),
				g = e => async (t, s, n) => {
					let {
						gqlContext: r
					} = n;
					const o = Object(i.g)(e),
						a = s();
					if (Object(d.d)(a, o)) return;
					t(p(o));
					const l = await Object(c.e)(r(), o),
						u = Date.now();
					if (l.ok && l.body && l.body.data) {
						const e = l.body.data;
						t(b({
							model: e,
							utcTimeStamp: u
						}))
					} else t(S({
						streamId: o,
						error: l.error,
						utcTimeStamp: u
					}))
				}, y = (e, t) => async (s, n) => s(E(e, t)), E = (e, t) => async (s, n, r) => {
					let {
						gqlContext: o
					} = r;
					const a = n();
					if (Object(d.f)(a)) return;
					s(h());
					const i = await Object(c.f)(o(), e, t),
						l = Date.now();
					if (i.ok && i.body && i.body.data) {
						const t = i.body.data;
						s(x({
							listingName: e,
							models: t,
							utcTimeStamp: l
						}))
					} else s(k({
						error: i.error,
						utcTimeStamp: l
					}))
				}, C = (e, t) => async (s, n) => s(_(e, t)), _ = (e, t) => async (s, n, r) => {
					let {
						gqlContext: o
					} = r;
					const a = n();
					if (Object(d.f)(a)) return;
					s(h());
					const i = Date.now(),
						u = e.replace("r/", ""),
						m = Object(l.G)(a, u),
						p = await Object(c.b)(o(), {
							subredditId: m,
							options: t
						}),
						b = p.body;
					p.ok && b && b.data || s(k({
						error: p.error,
						utcTimeStamp: i
					}));
					const f = b.data.liveVideoFeed.posts.edges.map(e => (async (e, t) => {
							const s = await Object(c.e)(e, t),
								n = Date.now(),
								r = s.body;
							return r && r.data ? r.data : void S({
								streamId: t,
								error: s.error,
								utcTimeStamp: n
							})
						})(o(), e.node.id)),
						O = (await Promise.all(f)).filter(e => void 0 !== typeof e);
					s(x({
						listingName: e,
						models: O,
						utcTimeStamp: i
					}))
				}, S = e => async t => {
					t(f(e))
				}, k = e => async t => {
					t(O(e))
				}
		},
		"./src/reddit/actions/reportFlow/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/lib/loadableAction/index.ts");
			const r = Object(n.a)(() => Promise.all([s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				o = Object(n.a)(() => Promise.all([s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				a = Object(n.a)(() => Promise.all([s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				o = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				a = s.n(o);
			const c = n.a.wrapped(r.c, "RestrictedButton", a.a);
			t.a = c
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less": function(e, t, s) {
			e.exports = {
				RestrictedButton: "_1HjNIJegwQhOyUoxHZNWnm",
				restrictedButton: "_1HjNIJegwQhOyUoxHZNWnm",
				Show: "YoaDbMbI8PpFFWQbD_Uwq",
				show: "YoaDbMbI8PpFFWQbD_Uwq",
				CommentModToolsFlatlist: "_3cJNzWW-kTTUFiqoBkRMRk",
				commentModToolsFlatlist: "_3cJNzWW-kTTUFiqoBkRMRk"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, s) {
			e.exports = {
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/constants/modals.ts"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/helpers/trackers/subredditCreation.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/components/CreateCommunityButton/index.m.less"),
				f = s.n(x),
				O = s("./src/lib/lessComponent.tsx");
			const j = "create-community-button",
				v = O.a.wrapped(l.c, "StyledTooltip", f.a),
				g = Object(c.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.pb)(e),
					userIsSuspended: h.X
				});
			t.a = Object(a.b)(g, (e, t) => {
				let {
					eventSource: s
				} = t;
				return {
					openCommunityCreation: t => {
						t(Object(b.c)(s)), e(Object(i.h)(m.a.SUBREDDIT_CREATION_MODAL_ID))
					},
					onShowTooltip: () => e(Object(d.f)({
						tooltipId: j
					})),
					onHideTooltip: () => e(Object(d.i)())
				}
			})(Object(u.c)(e => {
				let {
					className: t,
					eventSource: s,
					onShowTooltip: r,
					onHideTooltip: a,
					openCommunityCreation: c,
					sendEvent: i,
					userDoesNotHaveEnoughExpToCreateCommunity: d,
					userIsSuspended: l,
					onClick: u
				} = e;
				return o.a.createElement(p.t, {
					className: t,
					disabled: l || d,
					onClick: e => {
						u && u(e), c(i)
					},
					onMouseEnter: r,
					onMouseLeave: a,
					priority: p.c.Secondary,
					id: j,
					isFullWidth: !0
				}, n.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), d ? o.a.createElement(v, {
					caretOnTop: !0,
					tooltipId: j,
					text: n.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : l ? o.a.createElement(v, {
					caretOnTop: !0,
					tooltipId: j,
					text: n.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		},
		"./src/reddit/components/CreateCommunitySidebar/index.m.less": function(e, t, s) {
			e.exports = {
				BannerImg: "_2ddpn_fVcA1SYZzLivK-SD",
				bannerImg: "_2ddpn_fVcA1SYZzLivK-SD",
				ButtonContainer: "_2ymEyPXQM0ccuwfvIOMpnZ",
				buttonContainer: "_2ymEyPXQM0ccuwfvIOMpnZ",
				Button: "_1vv6LrKIsjHuIJCCgIntnC",
				button: "_1vv6LrKIsjHuIJCCgIntnC",
				CommunityText: "_9jODC2-h7cM9Y6Duqs_W4",
				communityText: "_9jODC2-h7cM9Y6Duqs_W4",
				Container: "_3lfTEmyI7x9ib1wz4e8RWP",
				container: "_3lfTEmyI7x9ib1wz4e8RWP",
				SnooImg: "_20axzOalQqYkHj-7Idfqun",
				snooImg: "_20axzOalQqYkHj-7Idfqun"
			}
		},
		"./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.m.less": function(e, t, s) {
			e.exports = {
				img: "_2j4blQAaYrPKIhe5jBJ9c8"
			}
		},
		"./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.m.less"),
				i = s.n(c),
				d = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				l = s("./src/reddit/selectors/gold/awardIcon.ts"),
				u = s("./src/reddit/selectors/gold/purchaseCatalog.ts");
			t.a = e => {
				const t = Object(o.e)(u.b),
					s = Object(o.e)(e => Object(l.a)(e, {
						award: t,
						minSize: 32
					}));
				return t && s ? r.a.createElement("img", {
					alt: t.name,
					className: Object(a.a)(i.a.img, e.className),
					id: e.id,
					src: s
				}) : r.a.createElement(d.a, e)
			}
		},
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./src/reddit/featureFlags/component.tsx");
			const o = Object(n.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("CryptoVault").then(s.bind(null, "./src/reddit/components/Governance/VaultActionLink/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/index.tsx"
					}
				}, {
					ssr: !1
				}),
				a = Object(r.a)("spBurnLinks", Object(n.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("CryptoVault").then(s.bind(null, "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx"
					}
				}, {
					ssr: !1
				}))
		},
		"./src/reddit/components/Media/BlurredContent.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/reddit/components/Media/index.m.less"),
				c = s.n(a);
			const i = (e, t) => e && t ? n.fbt._("Click to see nsfw spoiler", null, {
					hk: "4EdPWu"
				}) : e ? n.fbt._("Click to see nsfw", null, {
					hk: "4CErse"
				}) : t ? n.fbt._("Click to see spoiler", null, {
					hk: "1x3iUE"
				}) : void 0,
				d = e => {
					let {
						isNSFW: t,
						isSpoiler: s
					} = e;
					return o.a.createElement("div", {
						className: c.a.unblurButtonContainer
					}, o.a.createElement("button", {
						className: c.a.unblurButton
					}, i(t, s)))
				}
		},
		"./src/reddit/components/Media/EmbedBox/index.m.less": function(e, t, s) {
			e.exports = {
				embedBox: "_3K6DCjWs2dQ93YYZDOHjib"
			}
		},
		"./src/reddit/components/Media/EmbedBox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/addQueryParams/index.ts"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/forceHttps/index.ts"),
				l = s("./src/reddit/constants/tracking.ts"),
				u = s("./src/reddit/models/Media/index.ts"),
				m = s("./src/reddit/selectors/user.ts"),
				p = s("./src/reddit/components/Media/EmbedBox/index.m.less"),
				b = s.n(p);
			const h = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				x = Object(o.b)(() => Object(a.c)({
					isNightmodeOn: m.db
				}));
			t.a = x(e => {
				const t = {
						responsive: "true",
						is_nightmode: e.isNightmodeOn
					},
					s = e.isResponsive ? Object(c.a)(Object(d.a)(e.source), t) : Object(d.a)(e.source),
					n = {
						overflow: "hidden"
					};
				return n.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (n.margin = "0 auto"), e.isListing || (n.maxHeight = `${u.e}px`), void 0 !== e.maxHeight && (n.maxHeight = e.maxHeight || void 0), e.isTweet || (n.height = "100%"), r.a.createElement("iframe", {
					className: Object(i.a)(l.a, b.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: h,
					scrolling: "no",
					src: s,
					style: n,
					allowFullScreen: !0
				})
			})
		},
		"./src/reddit/components/Media/ImageBox/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3Oa0THmZ3f5iZXAQ0hBJ0k",
				alignLeft: "WjuR4W-BBrvdtABBeKUMx",
				image: "_2_tDEnGMLxpM6uOa2kaDB3",
				mShowCentered: "_1XWObl-3b9tPy64oaG6fax",
				mShowBlurred: "_3oBPn1sFwq76ZAxXgwRhhn",
				renderSmallMedia: "vgwLfcw0MneE2ejmdh_l9",
				seeMore: "_3hUbl08LBz2mbXjy0iYhOS",
				imageLink: "_3m20hIKOhTTeMgPnfMbVNN"
			}
		},
		"./src/reddit/components/Media/ImageBox/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return N
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/forceHttps/index.ts"),
				u = s("./src/lib/opener/index.ts"),
				m = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				p = s("./src/reddit/components/Media/BlurredContent.tsx"),
				b = s("./src/reddit/components/PlayButton/index.tsx"),
				h = s("./src/reddit/constants/elementClassNames.ts"),
				x = s("./src/reddit/controls/OutboundLink/index.tsx"),
				f = s("./src/reddit/helpers/trackers/ads.ts"),
				O = s("./src/reddit/hooks/useClickSourceData.ts"),
				j = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				v = s("./src/reddit/models/Media/index.ts"),
				g = s("./src/reddit/selectors/posts.ts"),
				y = s("./src/reddit/selectors/telemetry.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/constants/tracking.ts"),
				_ = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				S = s("./src/reddit/components/Media/ImageBox/index.m.less"),
				k = s.n(S);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const N = e => e > 2 * v.e,
				T = e => o.a.createElement("img", {
					alt: e.altText || n.fbt._("Comment image", null, {
						hk: "1DiDxV"
					}),
					className: Object(d.a)(e.className, {
						[k.a.renderSmallMedia]: e.renderSmallMedia
					}),
					src: e.src
				}),
				I = e => {
					const t = Object(d.a)(k.a.image, h.g, e.className, {
							[k.a.mShowCentered]: e.showCentered,
							[k.a.mShowBlurred]: e.shouldBlur
						}),
						s = {};
					e.showFull || e.isTall || (s.maxHeight = `${v.j}px`), e.isListing || e.isTall && N(e.height) || (s.maxHeight = `${v.e}px`), e.isExpando && e.maxHeight && (s.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (s.maxWidth = `${e.maxWidth}px`);
					const a = Object(r.useRef)(null),
						[c, i] = Object(r.useState)(!1),
						l = Object(r.useCallback)(e => {
							e.forEach(e => {
								const {
									isIntersecting: t
								} = e;
								!c && t && i(!0)
							})
						}, [c]),
						u = Object(r.useRef)({
							rootMargin: "750px 0px 750px 0px"
						});
					Object(j.a)(a, l, u.current);
					const {
						width: m,
						height: p
					} = e;
					let b = 240;
					if (m / p > 1)
						if (m < 240) b = p;
						else {
							(b = p * (240 / m)) < 20 && (b = 20)
						}
					else b = Math.min(b, p);
					const x = Object(r.useRef)({
						height: b
					});
					return e.renderSmallMedia ? o.a.createElement("div", {
						ref: a,
						style: x.current
					}, c ? o.a.createElement(T, w({}, e, {
						className: t
					})) : o.a.createElement("noscript", null, o.a.createElement(T, w({}, e, {
						className: t
					})))) : o.a.createElement("img", {
						alt: e.altText || n.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: s
					})
				},
				P = e => {
					const t = {};
					return (!e.showFull && Object(v.L)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${v.j}px`, e.shouldBlur && (t.maxWidth = Object(v.L)(e.height, e.width) ? `${v.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), o.a.createElement("div", {
						className: Object(d.a)(k.a.container, e.className, {
							[k.a.alignLeft]: e.alignLeft
						}),
						style: t
					}, e.children)
				},
				R = Object(a.b)(() => Object(i.a)(g.F, E.jb, (e, t) => {
					let {
						isSponsored: s,
						postId: n
					} = t;
					return s && n ? Object(g.b)(e, n) : null
				}, y.d, g.G, (e, t, s, n, r) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: s,
					pageType: n.pageType,
					post: r
				})));
			t.a = R(e => {
				const t = Object(O.a)();
				return e.outboundUrl && !e.shouldBlur ? o.a.createElement("a", {
					"data-adclicklocation": _.a.MEDIA,
					href: e.outboundUrl,
					target: "_blank",
					rel: u.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(x.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					},
					onClick: () => {
						e.isSponsored && e.post.postId && Object(f.a)(e.post, e.pageType)
					}
				}, L(e)) : e.isListing && e.postPermalink ? o.a.createElement(c.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: Object(m.a)(e.postPermalink, void 0, t),
					onClick: e.onPostMediaClick
				}, L(e)) : L(e)
			});
			const M = (e, t) => o.a.createElement(I, {
					altText: t.altText,
					className: Object(d.a)(t.imageClassName, {
						[C.a]: !e
					}),
					height: t.height,
					isExpando: !!t.isExpando,
					isListing: t.isListing,
					isTall: e,
					maxHeight: t.maxHeight,
					maxWidth: t.maxWidth,
					shouldBlur: t.shouldBlur,
					showCentered: t.showCentered,
					showFull: t.showFull,
					src: Object(l.a)(t.source),
					width: t.width,
					renderSmallMedia: t.renderSmallMedia
				}),
				L = e => {
					let {
						onClick: t,
						...s
					} = e;
					const r = Object(v.L)(s.height, s.width),
						a = N(s.height) && r;
					return o.a.createElement(P, w({}, s, {
						className: `${r?`${C.a} `:""}${s.className||""}`
					}), s.isListing ? o.a.createElement("div", {
						className: s.contentImageClassName
					}, M(r, s)) : o.a.createElement("a", {
						href: s.originalSource,
						onClick: t,
						style: a ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.c,
						className: k.a.imageLink
					}, M(r, s), s.shouldBlur && !s.isVideoThumbnail && !s.isNsfwBlockingModalEligible && o.a.createElement(p.a, {
						isNSFW: !!s.isNSFW,
						isSpoiler: !!s.isSpoiler
					})), s.isListing && !s.showFull && s.height > v.j && Object(v.L)(s.height, s.width) && o.a.createElement("div", {
						className: k.a.seeMore
					}, n.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), s.isVideoThumbnail && o.a.createElement(b.a, {
						onClick: t
					}))
				}
		},
		"./src/reddit/components/Media/MediaContainer/index.m.less": function(e, t, s) {
			e.exports = {
				blur: "_2iaYXFpGyyEGq1rp02cl5w",
				container: "m3aNC6yp8RrNM_-a0rrfa",
				isGalleryTileLayout: "_1fptM9wVD8i598KW_RjLWO",
				video: "_3PIKVMCKdveCEcyiKr43sU",
				spacer: "_3gBRFDB5C34UWyxEe_U6mD",
				wrapper: "_3JgI-GOrkmyIeDeyzXdyUD",
				mColoredBackground: "_2CSlKHjH7lsjx0IpjORx14"
			}
		},
		"./src/reddit/components/Media/MediaContainer/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/forceHttps/index.ts"),
				c = s("./src/reddit/models/Media/index.ts"),
				i = s("./src/reddit/components/Media/MediaContainer/index.m.less"),
				d = s.n(i);
			const l = e => {
				let t = null;
				(e.showFull || e.height < c.j) && (t = e.height), e.maxGalleryHeight && (t = e.maxGalleryHeight);
				const s = {
						...t ? {
							maxHeight: `${t}px`
						} : {},
						...e.showFull && !e.showCentered ? {
							maxWidth: `${e.width}px`
						} : {},
						...e.blurSrc ? {
							overflow: "hidden"
						} : {}
					},
					n = e.blurSrc ? r.a.createElement("img", {
						className: d.a.blur,
						src: Object(a.a)(e.blurSrc)
					}) : null,
					i = Object(c.B)(e.height, e.width, e.forceAspectRatio);
				return r.a.createElement("div", {
					className: Object(o.a)(d.a.container, e.className, {
						[d.a.video]: e.isVideo,
						[d.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					}),
					"data-click-id": "media",
					style: e.isGalleryTileLayout ? void 0 : s
				}, n, !e.isGalleryTileLayout && r.a.createElement("div", {
					className: d.a.spacer,
					style: {
						paddingBottom: `${i}%`
					}
				}), r.a.createElement("div", {
					className: Object(o.a)(d.a.wrapper, {
						[d.a.mColoredBackground]: !e.blurSrc,
						[d.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					})
				}, e.children))
			};
			class u extends r.a.Component {
				render() {
					if (!this.props.isListing && !this.props.alwaysWrapMedia || this.props.isExpando) {
						return r.a.Children.only(this.props.children) || r.a.createElement("div", null)
					}
					return r.a.createElement(l, this.props)
				}
			}
		},
		"./src/reddit/components/Media/VideoBox/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3spkFGVnKMHZ83pDAhW3Mx",
				centered: "_2b68Lt6xHaLir5082LDDA9",
				styledVideo: "tErWI93xEKrI2OkozPs7J"
			}
		},
		"./src/reddit/components/Media/VideoBox/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return _
			}));
			var n = s("./node_modules/lodash/throttle.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				c = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./node_modules/@reddit/adblock-detection/browser.js"),
				l = s("./src/lib/classNames/index.ts"),
				u = s("./src/reddit/actions/video.ts"),
				m = s("./src/reddit/constants/tracking.ts"),
				p = s("./src/reddit/models/Media/index.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				h = s("./src/reddit/selectors/video.ts");
			const x = 100,
				f = x / 2 / 1e3;
			var O = s("./src/lib/forceHttps/index.ts"),
				j = s("./src/lib/hooks/usePrevious.ts");

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function g(e) {
				let {
					autoplay: t,
					isListing: s,
					isNotCardView: n,
					onBufferingChange: r,
					shouldLoad: c,
					shouldPause: i,
					showCentered: d,
					showFull: l,
					source: u,
					...m
				} = e;
				const p = Object(o.useRef)(),
					b = Object(o.useRef)(),
					h = Object(j.a)(i);

				function g(e) {
					if (e) {
						const e = null === (t = null == b ? void 0 : b.current) || void 0 === t ? void 0 : t.play();
						e && e.catch && e.catch(() => {})
					} else ! function() {
						var e;
						null === (e = null == b ? void 0 : b.current) || void 0 === e || e.pause()
					}();
					var t
				}
				return Object(o.useEffect)(() => {
					if (g(!i && (t || n)), b.current && r) return p.current = function(e, t) {
						let s = !1,
							n = !1;
						const r = () => s = !0,
							o = () => n = !0;
						e.addEventListener("loadeddata", r), e.addEventListener("play", o), e.addEventListener("playing", o);
						let a = !1,
							c = 0,
							i = 0;
						const d = window.setInterval(() => {
							if (i = e.currentTime, n) return n = !1, void(c = i);
							if (e.paused || e.seeking || !s) return void(c = i);
							const r = a;
							4 === e.readyState ? a = !1 : !a && i >= c && i < c + f ? a = !0 : a && i >= c && i > c + f && (a = !1), c = i, r !== a && t(a)
						}, x);
						return () => {
							clearInterval(d), e.removeEventListener("playing", o), e.removeEventListener("play", o), e.removeEventListener("loadeddata", r)
						}
					}(b.current, r), () => {
						p.current && p.current()
					}
				}, []), Object(o.useEffect)(() => {
					h !== i && g(!i && (t || n))
				}, [h, i, t, n]), a.a.createElement("video", v({}, m, {
					ref: e => b.current = e,
					muted: !0
				}), a.a.createElement("source", {
					src: Object(O.a)(u || "")
				}))
			}
			var y = s("./src/reddit/components/Media/VideoBox/index.m.less"),
				E = s.n(y);
			const C = Object(i.c)({
				autoplayPref: b.b,
				consumed: h.a,
				loadTimes: h.f,
				metadata: h.h,
				started: h.k
			});

			function _(e) {
				const {
					autoplayPref: t,
					consumed: s,
					loadTimes: n,
					metadata: o,
					started: i
				} = Object(c.e)(t => C(t, e)), {
					postId: b,
					shouldLoad: h,
					source: x,
					height: f,
					isNotCardView: O,
					showFull: j,
					shouldPause: v,
					width: y,
					isListing: _,
					className: S,
					showCentered: k,
					originalSource: w,
					isPromoted: N
				} = e, T = t && !(N && Object(d.hasAcceptableAds)()), I = Object(c.d)();

				function P(e) {
					I(e ? Object(u.r)(b) : Object(u.E)(b))
				}

				function R() {
					return I(Object(u.z)({
						postId: b
					}))
				}
				const M = r()(e => {
					if (s) return;
					const {
						target: t
					} = e;
					t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && I(Object(u.s)(b))
				}, 200);

				function L(e) {
					e.persist(), M(e)
				}

				function B(e) {
					var t;
					(o || A(e), i) || (t = e.timeStamp, I(Object(u.A)(b, t)))
				}

				function F(e) {
					I(Object(u.q)(b, e.timeStamp))
				}

				function A(e) {
					! function(e) {
						I(Object(u.D)({
							metadata: e,
							postId: b
						}))
					}({
						id: b,
						length: 1e3 * e.target.duration,
						originalHeight: e.target.videoHeight,
						originalWidth: e.target.videoWidth
					})
				}

				function D(e) {
					n || B(e), o || A(e), I(Object(u.C)(b))
				}

				function U() {
					const e = {};
					return k && (e.margin = "0 auto"), _ || (e.maxHeight = `${p.e}px`), a.a.createElement(g, {
						autoplay: T,
						className: Object(l.a)(m.a, E.a.styledVideo),
						height: f,
						isListing: _,
						isNotCardView: O,
						key: b,
						loop: !0,
						onBufferingChange: P,
						onLoadStart: F,
						onLoadedData: B,
						onLoadedMetadata: A,
						onPause: R,
						onPlaying: D,
						onTimeUpdate: L,
						shouldLoad: h,
						shouldPause: v,
						showCentered: k,
						showFull: j,
						source: x,
						style: e,
						width: y
					})
				}
				return _ ? U() : a.a.createElement("div", {
					className: Object(l.a)(E.a.container, S, {
						[E.a.centered]: k
					})
				}, a.a.createElement("a", {
					href: w,
					target: "_blank",
					rel: "noopener noreferrer"
				}, U()))
			}
		},
		"./src/reddit/components/Media/index.m.less": function(e, t, s) {
			e.exports = {
				hiddenLink: "_3dhFVFchWAAFXfLFTa94n9",
				visibilityWrapper: "_1NSbknF8ucHV2abfCZw2Z1",
				displayNone: "_1Q2mF3u7v9hBVu_4bkC7R4",
				galleryMediaContainer: "_3ozFpM1W8BRdrzkr_ssGxZ",
				miniCardVideo: "_18_METUBD2i2iqGBz4ofw1",
				unblurButtonContainer: "_3jrT7JqZwfGWyxKf4SYuRj",
				unblurButton: "_2bcjL-4RRFQN5OUQMrcioo"
			}
		},
		"./src/reddit/components/ModActionsMenu/index.m.less": function(e, t, s) {
			e.exports = {
				ModActionsMenu: "_28noJDp6DzFWESejYQdpcD",
				modActionsMenu: "_28noJDp6DzFWESejYQdpcD"
			}
		},
		"./src/reddit/components/ModActionsMenu/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/tooltip.ts"),
				i = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				d = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				l = s("./src/reddit/selectors/tooltip.ts"),
				u = s("./src/reddit/components/ModActionsMenu/index.m.less"),
				m = s.n(u);
			const p = Object(a.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(l.b)(s)(e)
					}
				}),
				b = Object(o.b)(p, (e, t) => {
					let {
						dropdownId: s
					} = t;
					return {
						toggleDropdown: () => e(Object(c.h)({
							tooltipId: s
						}))
					}
				}),
				h = () => null;
			t.a = b(e => r.a.createElement("div", {
				className: m.a.ModActionsMenu,
				id: e.dropdownId,
				onClick: e.dropdownIsOpen ? h : e.onClick
			}, e.inCommentFlatlist ? r.a.createElement(i.a, {
				className: e.className,
				onClick: e.toggleDropdown
			}, e.children) : r.a.createElement(d.c, {
				className: e.className,
				onClick: e.toggleDropdown
			}, e.children)))
		},
		"./src/reddit/components/ModModeReports/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return o
			}));
			const n = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				r = e => {
					if (e.numReports && e.numReports > 0) return e.numReports;
					return (e.modReportsDismissed && e.modReportsDismissed.length || 0) + (e.userReportsDismissed && e.userReportsDismissed.length || 0)
				},
				o = e => (e.numReports || 0) > 0
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return y
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = s("./src/reddit/controls/Dropdown/index.tsx"),
				p = s("./src/reddit/controls/Dropdown/Row.tsx"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				h = s("./src/reddit/selectors/tooltip.ts"),
				x = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				f = s("./src/reddit/components/OverflowMenu/index.m.less"),
				O = s.n(f);
			const j = d.a.wrapped(m.a, "_Dropdown", O.a),
				v = Object(u.a)(j),
				g = d.a.button("MenuButton", O.a),
				y = d.a.wrapped(p.b, "DropdownRow", O.a),
				E = Object(c.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(h.b)(s)(e)
					}
				}),
				C = Object(a.b)(E, (e, t) => {
					let {
						dropdownId: s
					} = t;
					return {
						toggleDropdown: () => e(Object(l.h)({
							tooltipId: s
						}))
					}
				}),
				_ = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = C(e => o.a.createElement(g, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": n.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(i.a)(e.className, {
					[O.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: _(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId,
				"data-adclicklocation": x.b.OVERFLOW_MENU
			}, e.icon ? e.icon : o.a.createElement(b.a, {
				name: "overflow_horizontal",
				className: O.a.MenuIcon
			}), o.a.createElement(v, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition,
				style: e.style
			}, e.children)))
		},
		"./src/reddit/components/Pill/PillButton/index.m.less": function(e, t, s) {
			e.exports = {
				primaryButton: "cmR5BF4NpBUm3DBMZCmJS",
				active: "_2dj14FxV-bfkwopj1jV_fF",
				redditStyle: "C64b9palJF2n26mG_1q3D",
				DangerButtonColors: "_1aqI4zAQaNw-k6Jp5j3WJz",
				dangerButtonColors: "_1aqI4zAQaNw-k6Jp5j3WJz",
				GoldButtonColors: "Vi9jnbb9vJd6ugulSJIAD",
				goldButtonColors: "Vi9jnbb9vJd6ugulSJIAD",
				PremiumButtonColors: "ntawTzO-ZquMyaWgqE0je",
				premiumButtonColors: "ntawTzO-ZquMyaWgqE0je",
				Icon: "_1V9TNuAloX-Z3moRIXc8tO",
				icon: "_1V9TNuAloX-Z3moRIXc8tO",
				isLeft: "HjpiNF5rj_I6fiMfmW-X7",
				isRight: "_1A_npZJAxjfyiijZ14jtzh",
				tabGroup: "_2jNQT-6WbFOjX2hdDWV56w",
				inactive: "_1g3g98ViMb36cM-peU17Jk"
			}
		},
		"./src/reddit/components/Pill/PillButton/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return m
			}));
			var n, r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/Pill/PillButton/index.m.less"),
				i = s.n(c);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e.BUTTON = "BUTTON", e.TAB_GROUP = "TAB_GROUP"
			}(n || (n = {}));
			const l = {
					[n.BUTTON]: void 0,
					[n.TAB_GROUP]: i.a.tabGroup
				},
				u = (e, t) => {
					if (t !== n.BUTTON) return e ? i.a.active : i.a.inactive
				},
				m = e => {
					let {
						active: t = !0,
						children: s,
						className: n,
						disabled: r = !1,
						variant: c,
						...m
					} = e;
					return o.a.createElement("button", d({}, m, {
						className: Object(a.a)(i.a.primaryButton, l[c], u(t, c), n),
						disabled: r
					}), s)
				}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				i = s("./src/higherOrderComponents/withAdClickLocation/index.tsx"),
				d = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				l = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				u = s.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(i.a)(Object(a.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: n,
					onClick: a,
					post: i,
					redditStyle: l,
					theme: p,
					...b
				} = e;
				return r.a.createElement("div", m({
					className: Object(o.a)(u.a.backgroundWrapper, s),
					style: Object(c.c)(n, e),
					onClick: a,
					"data-adclicklocation": d.a.BACKGROUND
				}, b), t)
			}))
		},
		"./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			const o = Object(n.createContext)({
					currentTime: 0,
					setCurrentTime: () => {},
					isLive: !1,
					setIsLive: () => {},
					totalTime: 0,
					setTotalTime: () => {}
				}),
				a = e => {
					let {
						children: t
					} = e;
					const [s, a] = Object(n.useState)(0), [c, i] = Object(n.useState)(!1), [d, l] = Object(n.useState)(0), u = {
						currentTime: s,
						setCurrentTime: a,
						isLive: c,
						setIsLive: i,
						totalTime: d,
						setTotalTime: l
					};
					return r.a.createElement(o.Provider, {
						value: u
					}, t)
				}
		},
		"./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/Loader.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = e => `PublicAccessNetwork--VideoShare--Modal-${e}`,
				o = Object(n.a)({
					resolved: {},
					chunkName: () => "VideoShareModal",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("VideoShareModal").then(s.bind(null, "./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/VideoShareModal.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/VideoShareModal.tsx"
					}
				}, {
					ssr: !1
				});
			t.b = o
		},
		"./src/reddit/components/ReportFlow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./src/reddit/constants/colors.ts");
			const o = {
				backgroundColor: r.a.overlayReportFlow
			};
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "ReportFlow",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlow.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ReportFlow/_ReportFlow.tsx"
				}
			})
		},
		"./src/reddit/components/ReportFlow/new.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./src/reddit/constants/colors.ts");
			const o = {
					backgroundColor: r.a.overlayReportFlow
				},
				a = Object(n.a)({
					resolved: {},
					chunkName: () => "ReportFlow",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx"
					}
				}),
				c = Object(n.a)({
					resolved: {},
					chunkName: () => "ReportFlowNew",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("ReportFlowNew").then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlowNew.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ReportFlow/_ReportFlowNew.tsx"
					}
				});
			t.b = c
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.m.less": function(e, t, s) {
			e.exports = {
				removalReasonButton: "_3IEDcFIIs_TeXsZtKZGzUd",
				TextWrapper: "smOzqVIOoNqmSJcyBX2N6",
				textWrapper: "smOzqVIOoNqmSJcyBX2N6",
				Button: "_1rNBkuuOkN2SorEXyRkYjB",
				button: "_1rNBkuuOkN2SorEXyRkYjB",
				ApproveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				approveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				RemoveButton: "_2OvUr_pd3kddsNP_f35S28",
				removeButton: "_2OvUr_pd3kddsNP_f35S28"
			}
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				i = s.n(c);
			const d = e => r.a.createElement("button", {
					className: Object(o.a)(i.a.Button, e.className),
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, e.children, e.text && r.a.createElement("span", {
					className: Object(o.a)(i.a.TextWrapper, e.textClassName)
				}, e.text, " ")),
				l = a.a.wrapped(d, "ApproveButton", i.a),
				u = a.a.wrapped(d, "RemoveButton", i.a),
				m = e => r.a.createElement("button", {
					className: Object(o.a)(i.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
		},
		"./src/reddit/components/RichTextJson/Emote/index.m.less": function(e, t, s) {
			e.exports = {
				container: "JnJcJlA7hHeajn8Um_Bh5"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.m.less": function(e, t, s) {
			e.exports = {
				InnerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				innerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				TooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				tooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				SpoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				spoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				isOpen: "_15VS32zBYFUDI5ssldQhEK",
				Component: "_3CBmNG6xIaLHHh1ts_10tN",
				component: "_3CBmNG6xIaLHHh1ts_10tN"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				i = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = s("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				u = s.n(l),
				m = s("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const b = ["left", "top"],
				h = ["left", "bottom"],
				x = m.a.span("InnerSpan", u.a),
				f = m.a.span("TooltipTarget", u.a),
				O = m.a.span("SpoilerWrapper", u.a),
				j = m.a.wrapped(e => {
					let {
						className: t,
						isOpen: s,
						...n
					} = e;
					return o.a.createElement(O, p({}, n, {
						className: Object(a.a)(t, {
							[u.a.isOpen]: s
						})
					}))
				}, "SpoilerWrapper", u.a),
				v = Object(d.a)(m.a.wrapped(i.b, "Component", u.a), [c.a.Click, c.a.Keydown]);
			class g extends o.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.onClick = e => {
						const {
							isOpen: t
						} = this.state, {
							onClickReveal: s
						} = this.props;
						t || (e.preventDefault(), e.stopPropagation(), this.setState({
							isOpen: !0
						}), null == s || s(e))
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.state.isOpen || this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						isOpen: !1,
						showTooltip: !1
					}
				}
				render() {
					const {
						isOpen: e,
						showTooltip: t
					} = this.state;
					return o.a.createElement(j, {
						isOpen: e,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						onClick: this.onClick
					}, o.a.createElement(x, null, o.a.createElement(f, {
						innerRef: this.setTooltipTargetRef
					}), o.a.createElement(v, {
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						text: n.fbt._("Reveal spoiler", null, {
							hk: "271xYi"
						}),
						targetPosition: b,
						tooltipPosition: h
					}), this.props.children))
				}
			}
			t.a = g
		},
		"./src/reddit/components/RichTextJson/elements.m.less": function(e, t, s) {
			e.exports = {
				H1: "_7T4UafM1PdBGycd5na9nF",
				h1: "_7T4UafM1PdBGycd5na9nF",
				H2: "_1WODZhR-x-fbMu3MOL9cH1",
				h2: "_1WODZhR-x-fbMu3MOL9cH1",
				H3: "WFFrvt6_3z5B7MBcYKr8U",
				h3: "WFFrvt6_3z5B7MBcYKr8U",
				H4: "_2UlSUuiYR4BRv_FiLxCcu9",
				h4: "_2UlSUuiYR4BRv_FiLxCcu9",
				H5: "hnYPKCNkyo9X6QpCXHj1I",
				h5: "hnYPKCNkyo9X6QpCXHj1I",
				H6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				h6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				Hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				M: "_34q3PgLsx9zIU5BiSOjFoM",
				m: "_34q3PgLsx9zIU5BiSOjFoM",
				Pre: "_3GnarIQX9tD_qsgXkfSDz1",
				pre: "_3GnarIQX9tD_qsgXkfSDz1",
				Blockquote: "_28lDeogZhLGXvE95QRPeDL",
				blockquote: "_28lDeogZhLGXvE95QRPeDL",
				P: "_1qeIAgB0cPwnLhDF9XSiJM",
				p: "_1qeIAgB0cPwnLhDF9XSiJM",
				Li: "_3gqTEjt4x9UIIpWiro7YXz",
				li: "_3gqTEjt4x9UIIpWiro7YXz",
				Ul: "_33MEMislY0GAlB78wL1_CR",
				ul: "_33MEMislY0GAlB78wL1_CR",
				Ol: "_1eJr7K139jnMstd4HajqYP",
				ol: "_1eJr7K139jnMstd4HajqYP",
				B: "_12FoOEddL7j_RgMQN0SNeU",
				b: "_12FoOEddL7j_RgMQN0SNeU",
				I: "_7s4syPYtk5hfUIjySXcRE",
				i: "_7s4syPYtk5hfUIjySXcRE",
				U: "HoWuCifWxDx-PnwllGmZd",
				u: "HoWuCifWxDx-PnwllGmZd",
				Sub: "_2aQztsTwdz2uTN4arsyBD6",
				sub: "_2aQztsTwdz2uTN4arsyBD6",
				Sup: "_1jsgSPRO0cMQfs1UZrSovE",
				sup: "_1jsgSPRO0cMQfs1UZrSovE",
				Table: "MRH-njmSb5ZTkfb1o4dqv",
				table: "MRH-njmSb5ZTkfb1o4dqv",
				Tr: "s6JZe6869f81l9E_5G7Q9",
				tr: "s6JZe6869f81l9E_5G7Q9",
				Tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				Tdc: "_1LHijgw3WoeCUe8AUewfUB",
				tdc: "_1LHijgw3WoeCUe8AUewfUB",
				Tdr: "_3DqGFKR55y45L5IxBTgsFz",
				tdr: "_3DqGFKR55y45L5IxBTgsFz",
				Thl: "_4uv59XIILEFm6V3BmtSuR",
				thl: "_4uv59XIILEFm6V3BmtSuR",
				Thc: "_3TNkDptlyGOiWXvdX_acOB",
				thc: "_3TNkDptlyGOiWXvdX_acOB",
				Thr: "_1AUCpXmm3maPuEbUSe90Y8",
				thr: "_1AUCpXmm3maPuEbUSe90Y8",
				A: "_3t5uN8xUmg0TOwRCOGQEcU",
				a: "_3t5uN8xUmg0TOwRCOGQEcU"
			}
		},
		"./src/reddit/components/RichTextJson/elements.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "x", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "h", (function() {
				return m
			})), s.d(t, "k", (function() {
				return p
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "j", (function() {
				return h
			})), s.d(t, "g", (function() {
				return x
			})), s.d(t, "v", (function() {
				return f
			})), s.d(t, "i", (function() {
				return O
			})), s.d(t, "b", (function() {
				return j
			})), s.d(t, "f", (function() {
				return v
			})), s.d(t, "u", (function() {
				return g
			})), s.d(t, "d", (function() {
				return y
			})), s.d(t, "l", (function() {
				return E
			})), s.d(t, "m", (function() {
				return C
			})), s.d(t, "n", (function() {
				return _
			})), s.d(t, "t", (function() {
				return S
			})), s.d(t, "p", (function() {
				return k
			})), s.d(t, "o", (function() {
				return w
			})), s.d(t, "q", (function() {
				return N
			})), s.d(t, "s", (function() {
				return T
			})), s.d(t, "r", (function() {
				return I
			})), s.d(t, "a", (function() {
				return P
			})), s.d(t, "w", (function() {
				return R
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/controls/OutboundLink/index.tsx"),
				a = s("./src/reddit/components/RichTextJson/elements.m.less"),
				c = s.n(a),
				i = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/Governance/VaultActionLink/async.ts");
			const l = [i.a.div("H1", c.a), i.a.div("H2", c.a), i.a.div("H3", c.a), i.a.div("H4", c.a), i.a.div("H5", c.a), i.a.div("H6", c.a)],
				u = i.a.hr("Hr", c.a),
				m = i.a.code("M", c.a),
				p = i.a.pre("Pre", c.a),
				b = i.a.blockquote("Blockquote", c.a),
				h = i.a.p("P", c.a),
				x = i.a.li("Li", c.a),
				f = i.a.ul("Ul", c.a),
				O = i.a.ol("Ol", c.a),
				j = i.a.strong("B", c.a),
				v = i.a.em("I", c.a),
				g = i.a.span("U", c.a),
				y = e => r.a.createElement("del", e),
				E = i.a.sub("Sub", c.a),
				C = i.a.sup("Sup", c.a),
				_ = i.a.table("Table", c.a),
				S = i.a.tr("Tr", c.a),
				k = i.a.td("Tdl", c.a),
				w = i.a.td("Tdc", c.a),
				N = i.a.td("Tdr", c.a),
				T = i.a.th("Thl", c.a),
				I = i.a.th("Thc", c.a),
				P = (i.a.th("Thr", c.a), i.a.wrapped(e => r.a.createElement(o.b, e), "A", c.a)),
				R = i.a.wrapped(d.a, "A", c.a)
		},
		"./src/reddit/components/RichTextJson/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_292iotee39Lmt0MkQZ2hPV",
				container: "_292iotee39Lmt0MkQZ2hPV",
				unblurButtonContainer: "YCBAlwtFjC7cDSMdBeA2W",
				unblurButton: "gCpM4Pkvf_Xth42z4uIrQ",
				Component: "_1GPL7pYOAn5YHfoARxZ8-F",
				component: "_1GPL7pYOAn5YHfoARxZ8-F"
			}
		},
		"./src/reddit/components/RichTextJson/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return g
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "a", (function() {
				return E
			})), s.d(t, "b", (function() {
				return C
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/findLastIndex.js"),
				o = s.n(r),
				a = s("./node_modules/react/index.js"),
				c = s.n(a),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/lib/sentry/index.ts"),
				u = s("./src/reddit/components/Media/BlurredContent.tsx"),
				m = s("./src/reddit/constants/elementClassNames.ts"),
				p = s("./src/reddit/models/RichTextJson/index.ts"),
				b = s("./src/reddit/components/RichTextJson/media.tsx"),
				h = s("./src/reddit/components/RichTextJson/renderers.tsx"),
				x = s("./src/reddit/components/RichTextJson/index.m.less"),
				f = s.n(x);
			const O = s("./src/lib/lessComponent.tsx").a.div("Container", f.a),
				j = Object(d.a)(e => {
					let {
						flairStyleTemplate: t,
						theme: s,
						...n
					} = e;
					return c.a.createElement(O, n)
				}),
				v = e => e.e === p.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== p.u || !!e.c && !e.c.every(e => e.e === p.A && !e.t),
				g = e => o()(e, v),
				y = e => e.findIndex(v),
				E = e => {
					const {
						altText: t,
						className: s,
						content: n,
						isListing: r,
						isNSFW: o,
						isNsfwBlockingModalEligible: a,
						isSpoiler: d,
						onClickRevealBlurred: l,
						postId: x,
						renderMediaAsLinks: v,
						rtJsonElementProps: E,
						useExplicitTextColor: C,
						shouldBlur: _,
						onClickRevealSpoilerText: S,
						mediaProps: k
					} = e, w = n.document, N = [], T = e.mediaMetadata || null, I = y(w), P = g(w);
					if (_ && !r && !a) return c.a.createElement(O, {
						className: Object(i.a)(m.j, s)
					}, c.a.createElement("div", {
						className: f.a.unblurButtonContainer
					}, c.a.createElement("button", {
						className: f.a.unblurButton,
						onClick: l
					}, Object(u.b)(!!o, !!d))));
					if (-1 !== I)
						for (let c = I; c <= P; c++) {
							const e = w[c];
							switch (e.e) {
								case p.k:
									N.push(h.c(e, E, c));
									break;
								case p.l:
									N.push(h.d(c));
									break;
								case p.b:
									N.push(h.a(e, T, E, c));
									break;
								case p.c:
									N.push(h.b(e, c));
									break;
								case p.p:
									N.push(h.f(e, T, E, c, S));
									break;
								case p.z:
									N.push(h.h(e, T, E, c, S));
									break;
								case p.u:
									N.push(h.g(e, T, E, c, S));
									break;
								case p.h:
									N.push(Object(b.a)(e, c));
									break;
								case p.m:
								case p.a:
								case p.D:
									N.push(...Object(b.b)(e, c, E, T, v, x, t, k))
							}
						}
					return C ? c.a.createElement(O, {
						className: Object(i.a)(m.j, s)
					}, N) : c.a.createElement(j, {
						className: Object(i.a)(m.j, s),
						flairStyleTemplate: e.flairStyleTemplate,
						redditStyle: e.redditStyle
					}, N)
				};
			class C extends c.a.Component {
				constructor() {
					super(...arguments), this.hasError = !1, this.state = {
						hasError: !1
					}, this.renderDefaultFallback = () => n.fbt._("Something went wrong while trying to render this", null, {
						hk: "2UcBL3"
					})
				}
				componentDidCatch(e) {
					this.setState({
						hasError: !0
					}), this.logError(e)
				}
				logError(e) {
					l.c.withScope(t => {
						t.setExtra("objectInfo", this.props.rtJsonElementProps.renderingObjectInfo), t.setTag("rtjson", "rendering"), l.c.captureException(e)
					})
				}
				render() {
					const {
						renderFallback: e = this.renderDefaultFallback,
						...t
					} = this.props;
					if (this.hasError || this.state.hasError) return e();
					try {
						return E(t)
					} catch (s) {
						return this.hasError = !0, this.logError(s), e()
					}
				}
			}
		},
		"./src/reddit/components/RichTextJson/media.m.less": function(e, t, s) {
			e.exports = {
				A: "_1PlxnYkerei9iGJsL9JyrP",
				a: "_1PlxnYkerei9iGJsL9JyrP",
				ImageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				imageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				MediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mHasCaption: "c1cmiB1jfdq4sxidlPDAx",
				hasSmallMedia: "_1yyTGHoIL7vZ6fNJ2-s3dL",
				CommentGifWrapper: "FyBv9YqsilS7j6RNlD9id",
				commentGifWrapper: "FyBv9YqsilS7j6RNlD9id",
				Caption: "FJNSiirwoPtG58aeGw2Jx",
				caption: "FJNSiirwoPtG58aeGw2Jx",
				Placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				renderSmallMedia: "_18dflNtNlz_sHfoBK19VZn",
				reload: "_2O6ZaJBTx6OGys4GI6Egy-",
				Giphy: "_3YoP8vEuPSoGYyKJc1eUli",
				giphy: "_3YoP8vEuPSoGYyKJc1eUli",
				GiphyLogo: "_3R8qf79yqt1VjL8vHhrdMt",
				giphyLogo: "_3R8qf79yqt1VjL8vHhrdMt"
			}
		},
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return I
			})), s.d(t, "b", (function() {
				return R
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/config.ts"),
				i = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				d = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = s("./src/reddit/components/Media/ImageBox/index.tsx"),
				u = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				m = s("./src/reddit/components/Media/VideoBox/index.tsx"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/helpers/isComment.ts"),
				h = s("./src/reddit/helpers/richTextJson/index.ts"),
				x = s("./src/reddit/icons/fonts/index.tsx"),
				f = s("./src/reddit/models/RichTextJson/index.ts");
			var O = e => o.a.createElement("svg", {
					width: "20",
					height: "20",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					className: e.className
				}, o.a.createElement("path", {
					d: "M2 1.714h2.286v16.571H2V1.714z",
					fill: "#04FF8E"
				}), o.a.createElement("path", {
					d: "M15.715 6.286H18v12h-2.285v-12z",
					fill: "#8E2EFF"
				}), o.a.createElement("path", {
					d: "M2 17.714h16V20H2v-2.286z",
					fill: "#00C5FF"
				}), o.a.createElement("path", {
					d: "M2 0h9.143v2.286H2V0z",
					fill: "#FFF152"
				}), o.a.createElement("path", {
					d: "M15.714 4.571V2.286h-2.286V0h-2.285v6.857H18V4.571",
					fill: "#FF5B5B"
				}), o.a.createElement("path", {
					d: "M15.715 9.143V6.857H18",
					fill: "#551C99"
				}), o.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M11.143 0v2.286H8.857",
					fill: "#999131"
				})),
				j = s("./src/reddit/components/RichTextJson/elements.tsx"),
				v = s("./src/reddit/components/RichTextJson/media.m.less"),
				g = s.n(v),
				y = s("./src/lib/lessComponent.tsx"),
				E = s("./src/reddit/helpers/media/index.ts");

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = /\/(\w+)\/asset\/(\w+)\//,
				S = y.a.wrapped(j.a, "A", g.a),
				k = y.a.wrapped(l.a, "ImageBox", g.a),
				w = y.a.wrapped(e => o.a.createElement("p", e), "Caption", g.a),
				N = y.a.div("Placeholder", g.a),
				T = y.a.wrapped(e => {
					let {
						className: t,
						e: s,
						renderSmallMedia: c,
						onReload: i,
						...d
					} = e;
					const l = s === f.D ? n.fbt._("Processing video...", null, {
							hk: "3SXDRi"
						}) : n.fbt._("Processing image...", null, {
							hk: "1qwmbc"
						}),
						[u, m] = Object(r.useState)(!1);
					return Object(r.useEffect)(() => {
						i && setTimeout(() => {
							m(!0)
						}, 1500)
					}), o.a.createElement(N, C({
						className: Object(a.a)(t, {
							[g.a.renderSmallMedia]: c,
							[g.a.reload]: !!i
						}),
						style: {
							"--placeholder-content-text": `'${l}'`
						}
					}, d), !!i && u && o.a.createElement(p.t, {
						priority: p.c.Plain,
						className: g.a.ModalTopicsErrorButton,
						Icon: Object(x.b)("refresh"),
						text: n.fbt._("Reload", null, {
							hk: "3Yt2Hl"
						}),
						onClick: i
					}))
				}, "Placeholder", g.a),
				I = (e, t) => {
					let {
						c: s,
						x: n,
						y: r
					} = e;
					return o.a.createElement("div", {
						className: g.a.MediaWrapper
					}, o.a.createElement(u.a, {
						height: r,
						isListing: !1,
						key: t,
						showCentered: !0,
						showFull: !0,
						width: n
					}, o.a.createElement(d.a, {
						isListing: !1,
						source: s,
						height: r,
						width: n,
						showCentered: !0,
						showFull: !0
					})))
				},
				P = (e, t, s) => {
					const n = e.c;
					let r = "";
					return s && (s.e === f.s ? r = s.s.u : s.e === f.r ? r = s.s.gif : s.e === f.t && (r = (e => {
						const t = _.exec(e);
						return t ? `${c.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(s.dashUrl))), r ? o.a.createElement(S, {
						href: r,
						key: t,
						title: n
					}, n || r) : null
				},
				R = (e, t, s, n, r, c, d, l) => {
					const p = f.E(n, e.id);
					if (r) return [P(e, t, p)];
					const x = [];
					return !p || p.e === f.s && null === p.s.x && null === p.s.y ? x.push(((e, t, s, n) => o.a.createElement(T, {
						e,
						key: t,
						renderSmallMedia: s,
						onReload: n
					}))(e.e, t, null == l ? void 0 : l.renderSmallMedia, null == l ? void 0 : l.onReload)) : p.e === f.s ? x.push(((e, t, s, n, r) => {
						let {
							id: c,
							s: i,
							p: d
						} = e;
						const {
							alignLeft: l,
							renderSmallMedia: m
						} = r || {};
						let p = i;
						return m && (p = Object(E.i)(240, 20, i, d)), o.a.createElement("div", {
							className: Object(a.a)(g.a.MediaWrapper, {
								[g.a.mHasCaption]: s,
								[g.a.hasSmallMedia]: m
							})
						}, o.a.createElement(u.a, {
							height: p.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: p.x
						}, o.a.createElement(k, {
							altText: n,
							originalSource: p.u,
							postId: c,
							source: p.u,
							height: p.y,
							width: p.x,
							shouldBlur: !1,
							showCentered: !0,
							showFull: !0,
							isListing: !1,
							alignLeft: l,
							renderSmallMedia: m
						})))
					})(p, t, !!e.c, d, l)) : p.e === f.r ? x.push(((e, t, s, n) => {
						let {
							id: r,
							ext: c,
							s: i
						} = e;
						if (Object(h.h)(r)) {
							const e = n.renderingObjectInfo,
								d = !!e && Object(b.b)(e),
								l = c || Object(h.g)(r);
							return o.a.createElement("div", {
								className: Object(a.a)({
									[g.a.MediaWrapper]: !d,
									[g.a.CommentGifWrapper]: d,
									[g.a.mHasCaption]: s
								})
							}, o.a.createElement(S, {
								href: l,
								key: t,
								target: "_blank"
							}, i.mp4 ? o.a.createElement("video", {
								className: g.a.Giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0
							}, o.a.createElement("source", {
								src: i.mp4
							})) : l), o.a.createElement(O, {
								className: g.a.GiphyLogo
							}))
						}
						return o.a.createElement("div", {
							className: Object(a.a)(g.a.MediaWrapper, {
								[g.a.mHasCaption]: s
							})
						}, o.a.createElement(u.a, {
							height: i.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: i.x
						}, o.a.createElement(m.a, {
							height: i.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: i.mp4,
							width: i.x,
							postId: r,
							source: i.mp4,
							shouldPause: !1,
							showCentered: !0,
							shouldLoad: !0,
							showFull: !0
						})))
					})(p, t, !!e.c, s)) : p.e === f.t && x.push(((e, t, s, n) => {
						let {
							hlsUrl: r,
							dashUrl: c,
							x: d,
							y: l,
							isGif: m
						} = e;
						return o.a.createElement("div", {
							className: Object(a.a)(g.a.MediaWrapper, {
								[g.a.mHasCaption]: s
							})
						}, o.a.createElement(u.a, {
							height: l,
							isListing: !1,
							isVideo: !0,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: d
						}, o.a.createElement(i.b, {
							shouldLoad: !0,
							shouldPause: !0,
							shouldCreateFakeThumbnail: !0,
							autoPlay: m,
							hlsSource: r,
							mpegDashSource: c,
							postId: n,
							isGif: m
						})))
					})(p, t, !!e.c, c)), e.c && x.push(((e, t) => o.a.createElement(w, {
						key: t
					}, e))(e.c, `caption${t}`)), x
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return I
			})), s.d(t, "d", (function() {
				return P
			})), s.d(t, "a", (function() {
				return R
			})), s.d(t, "b", (function() {
				return M
			})), s.d(t, "f", (function() {
				return L
			})), s.d(t, "h", (function() {
				return F
			})), s.d(t, "g", (function() {
				return A
			})), s.d(t, "i", (function() {
				return D
			})), s.d(t, "e", (function() {
				return U
			}));
			var n = s("./src/lib/unicodeUtils/index.ts"),
				r = s("./node_modules/lodash/reduce.js"),
				o = s.n(r),
				a = s("./node_modules/react/index.js"),
				c = s.n(a),
				i = s("./src/reddit/components/RichTextJson/elements.tsx"),
				d = s("./node_modules/uuid/dist/esm-browser/v4.js"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/models/Product/index.ts"),
				m = s("./src/reddit/models/RichTextJson/index.ts"),
				p = s("./src/reddit/selectors/telemetry.ts"),
				b = s("./src/higherOrderComponents/makeAsync.tsx");
			var h = Object(b.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("RichTextJsonEmoteTooltip").then(s.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				x = s("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				f = s.n(x);
			const O = 1e3,
				j = 1e3;
			var v;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(v || (v = {}));
			class g extends c.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = v.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = v.Inside, setTimeout(() => {
							this.mouseLocation === v.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, O)
					}, this.onMouseOut = () => {
						this.mouseLocation = v.Outside, setTimeout(() => {
							this.mouseLocation !== v.Inside && this.setState({
								tooltipOpen: !1
							})
						}, j)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const s = p.o(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...s,
								actionInfo: {
									...s.actionInfo,
									reason: this.props.node.id
								},
								subreddit: p.jb(t)
							}
						})
					}
				}
				render() {
					const {
						node: e,
						media: t
					} = this.props;
					let s, n, r;
					t.e === m.s ? (s = t.s.x, n = t.s.y, r = t.s.u) : t.e === m.r && (s = t.s.x, n = t.s.y, r = t.s.gif);
					const o = this.state.tooltipOpen ? Object(d.a)() : void 0;
					return r ? c.a.createElement("div", {
						className: f.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, c.a.createElement("img", {
						id: o,
						src: r,
						width: s,
						height: n,
						title: `:${Object(u.b)(e.id)}:`
					}), this.state.tooltipOpen && c.a.createElement(h, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: `${o}`,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var y = Object(l.c)(g),
				E = s("./src/reddit/components/RichTextJson/media.tsx"),
				C = s("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				_ = s("./src/reddit/components/SubredditMention/index.tsx"),
				S = s("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				k = s("./src/reddit/helpers/isComment.ts"),
				w = s("./src/reddit/helpers/isPost.ts"),
				N = s("./src/reddit/helpers/richTextJson/index.ts"),
				T = s("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const I = (e, t, s) => {
					const n = e.c || [],
						r = e.l,
						o = [],
						a = n.length;
					for (let c = 0; c < a; c++) {
						const e = n[c];
						o.push(e.e === m.w ? e.t : U(e, t, c))
					}
					const d = i.x[r - 1];
					return c.a.createElement(d, {
						key: s
					}, o)
				},
				P = e => c.a.createElement(i.e, {
					key: e
				}),
				R = (e, t, s, n, r) => {
					const o = e.c;
					if (!o) return;
					const a = o.length,
						d = [];
					for (let c = 0; c < a; c++) d.push(B(o[c], t, s, c, r));
					return c.a.createElement(i.c, {
						key: n
					}, d)
				},
				M = (e, t) => {
					const s = e.c;
					return c.a.createElement(i.k, {
						key: t
					}, c.a.createElement(i.h, null, s.reduce((e, t, s, n) => e += t.t + (s < n.length ? "\n" : ""), "")))
				},
				L = (e, t, s, n, r) => {
					const o = e.c,
						a = [],
						d = o.length;
					for (let u = 0; u < d; u++) {
						const e = o[u].c;
						e && e.length && a.push(c.a.createElement(i.g, {
							key: u
						}, e.map((e, n) => B(e, t, s, n, r))))
					}
					const l = e.o ? i.i : i.v;
					return c.a.createElement(l, {
						key: n
					}, a)
				},
				B = (e, t, s, n, r) => {
					switch (e.e) {
						case m.b:
							return R(e, t, s, n, r);
						case m.c:
							return M(e, n);
						case m.k:
							return I(e, s, n);
						case m.l:
							return P(n);
						case m.p:
							return L(e, t, s, n, r);
						case m.u:
							return A(e, t, s, n, r);
						case m.z:
							return F(e, t, s, n, r)
					}
				},
				F = (e, t, s, n, r) => {
					const o = e.c,
						a = e.h,
						d = o.length,
						l = a.length,
						u = [],
						m = [],
						p = [];
					for (let i = 0; i < l; i++) {
						const e = a[i],
							{
								H: n,
								D: o
							} = G(e.a),
							{
								c: d = []
							} = e;
						u.push(c.a.createElement(n, {
							key: i
						}, D(d, t, s, r))), p[i] = o
					}
					for (let b = 0; b < d; b++) {
						const e = o[b],
							n = e.length,
							a = [];
						for (let o = 0; o < n; o++) {
							const n = p[o],
								{
									c: i = []
								} = e[o];
							a.push(c.a.createElement(n, {
								key: o
							}, D(i, t, s, r)))
						}
						m.push(c.a.createElement(i.t, {
							key: b
						}, a))
					}
					return c.a.createElement(i.n, {
						key: n
					}, c.a.createElement("thead", null, c.a.createElement(i.t, null, u)), c.a.createElement("tbody", null, m))
				},
				A = (e, t, s, n, r) => {
					if (!e.c || !e.c.length) return (e => c.a.createElement(i.j, {
						key: e
					}, c.a.createElement("br", null)))(n);
					const o = e.c[0];
					return o.e !== m.m && o.e !== m.a || !Object(N.h)(o.id) ? c.a.createElement(i.j, {
						key: n
					}, D(e.c, t, s, r)) : Object(E.b)(o, n, s, t)
				},
				D = (e, t, s, n) => {
					const r = [],
						o = e.length;
					for (let a = 0; a < o; a++) {
						const o = e[a];
						if (o.e === m.A) r.push(H(o, a));
						else if (o.e === m.x) r.push(c.a.createElement(C.a, {
							key: a,
							onClickReveal: n
						}, D(o.c, t, s, n)));
						else if (o.e === m.n) r.push(c.a.createElement("br", {
							key: a
						}));
						else if (o.e === m.m || o.e === m.a) {
							if (o.id.startsWith("emote|")) {
								const e = m.E(t, o.id);
								e && r.push(c.a.createElement(y, {
									key: a,
									node: o,
									media: e
								}))
							}
						} else r.push(U(o, s, a))
					}
					return r
				},
				U = (e, t, s) => {
					switch (e.e) {
						case m.o:
							const n = H({
								t: e.t,
								f: e.f
							}, 0);
							if (Object(S.b)(e.u)) return c.a.createElement(i.w, {
								to: e.u,
								key: s,
								title: e.a
							}, n);
							let r, o;
							const a = Object(T.a)(t),
								d = t.renderingObjectInfo;
							return d && Object(w.b)(d) && (r = d.postId), d && Object(k.b)(d) && (o = d.id, r = d.postId), c.a.createElement(i.a, {
								href: e.u,
								key: s,
								title: e.a,
								sourceElement: a,
								postId: r,
								commentId: o
							}, n);
						case m.y:
							return c.a.createElement(_.b, {
								key: s,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case m.B:
						case m.C:
							return c.a.createElement(i.a, {
								href: `/u/${e.t}/`,
								key: s
							}, `${e.l?"/":""}u/${e.t}`);
						case m.g:
						case m.v:
							return c.a.createElement(i.a, {
								href: e.t,
								key: s
							}, e.t)
					}
				},
				H = (e, t) => {
					const {
						f: s,
						t: r
					} = e, o = [];
					if (!s) return V(0, r, t);
					const a = Object(n.a)(r);
					let c = 0,
						i = 0;
					const d = s.length;
					for (; c < d; c++) {
						const [e, t, n] = s[c], d = t + n, l = a[t], u = a[d] - l;
						l > i && o.push(V(0, r.substr(i, l - i), `between${c}`)), o.push(V(e, r.substr(l, u), c)), i = l + u
					}
					return i < r.length && o.push(V(0, r.substr(i), `remaining${c}`)), o
				},
				W = {
					[m.j.monospace]: i.h,
					[m.j.bold]: i.b,
					[m.j.italic]: i.f,
					[m.j.underline]: i.u,
					[m.j.strikethrough]: i.d,
					[m.j.subscript]: i.l,
					[m.j.superscript]: i.m
				},
				V = (e, t, s) => {
					let n = t;
					return n = o()(W, (t, n, r) => e & parseInt(r, 10) ? c.a.createElement(n, {
						key: s
					}, t) : t, n)
				},
				G = e => {
					switch (e) {
						case m.f:
							return {
								H: i.r, D: i.q
							};
						case m.d:
							return {
								H: i.r, D: i.o
							};
						case m.e:
						default:
							return {
								H: i.r, D: i.p
							}
					}
				}
		},
		"./src/reddit/components/SearchDiscoveryUnits/HeroUnit/index.m.less": function(e, t, s) {
			e.exports = {
				postContainer: "_3W4fKI_ey_jDfiIO7ElMuP",
				eventMeta: "_2IeaiLn4GyfAXKD1TLrIS1",
				postContent: "_3zoWB97jg8GAUJCl4XA57a",
				postItemMetaContainer: "_3xctgCPJ_3knmtE3O9TQzE",
				postItemTitleContainer: "_3CAq9fn45Es59QdDzgtbhZ",
				postItemFlatlistContainer: "oNxebZMPvUlTJIOtprxhP",
				mediaWrapper: "_1eIKxpeFNBTQ699qAcQRbd",
				marginCancel: "_3IElQYxAJq_0qRyeyMDc_K",
				twitterEmbed: "Tzfi4PWE-V9cQ78MJ3GkX",
				promotedTrend: "_1yoxdnJLJUmMiTSTn_QkNJ",
				mediaContent: "_1zcwL6v8t8G0OHvf5D4WW-",
				textMediaWrapper: "_2ZlSdmjvWREfUPvdtzIAN_",
				textMedia: "_2dnz6aKPWeFF1opQ_XsTYW",
				seeMore: "_2oliTAoFFxS1mse-sOZinV",
				adLinkWrapper: "p35vRG-PK5zfK-G5gjGAr",
				outboundLink: "_16eWoJfxv365opQYh3dOAJ",
				ctaExperiment: "_1fSEjc0jhvt02_0z07145y",
				adCallToAction: "BMx4T197BjzZgmRjegR7y",
				active: "_28VWbryTIGJPb62Ey50lm8",
				redditStyle: "n1f3mSINfKiMWmz1fdi1o"
			}
		},
		"./src/reddit/components/SearchNSFWToggle/SearchNSFWToggle.m.less": function(e, t, s) {
			e.exports = {
				searchNSFWToggle: "S53DUJItOf0GhJnniZ_fP",
				searchNsfwToggle: "S53DUJItOf0GhJnniZ_fP",
				searchNSFWToggleLabel: "_21fWc_5nZQR--Hc7UhjtY9",
				searchNsfwToggleLabel: "_21fWc_5nZQR--Hc7UhjtY9"
			}
		},
		"./src/reddit/components/SearchPost/index.m.less": function(e, t, s) {
			e.exports = {
				postContainer: "_2dkUkgRYbhbpU_2O2Wc5am",
				mFirst: "_28efb5XEIggTEMzT5v9i61",
				eventMeta: "_1rd6n9Xvtg4-5Vw7E3NhEh",
				postContent: "_2i5O0KNpb9tDq0bsNOZB_Q",
				postItemMetaContainer: "_37TF67KpZQl9SHbiAhz3mf",
				postItemWarningContainer: "_1nfcZWg35_OmccxqivQ1EN",
				postItemTitleContainer: "_19FzInkloQSdrf0rh3Omen",
				postItemFlatlistContainer: "HNL__wz5plDpzJe5Lnn",
				outboundLink: "a6Bzb7gqvN3mqBOAEyFIv",
				thumbnail: "_2r9BZFotuBbLYnijAaskeZ",
				thumbnailContainer: "Gk-MlLujgqsaX1n-sGa_O",
				syntaxHighlight: "_1Nh8xLEUG3orjY1k1aijj",
				paddingSide: "_2n04GrCyhhQf-Kshn7akmH"
			}
		},
		"./src/reddit/components/SearchPost/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return Y
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/getShortenedLink.ts"),
				i = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				d = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				u = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				m = s("./src/reddit/components/ModModeReports/index.tsx"),
				p = s("./src/reddit/components/ModModeReports/helpers.ts"),
				b = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				h = s("./src/reddit/components/PostContainer/index.tsx"),
				x = s("./src/reddit/components/PostTitle/index.tsx"),
				f = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				O = s("./src/reddit/components/SearchPostFlatlist/index.tsx"),
				j = s("./src/reddit/components/SearchPostMeta/index.tsx"),
				v = s("./src/reddit/icons/fonts/index.tsx"),
				g = s("./src/reddit/components/SearchPostWarnings/index.m.less"),
				y = s.n(g);
			const {
				fbt: E
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function C(e) {
				let {
					className: t,
					post: s,
					subredditOrProfile: n
				} = e;
				return r.a.createElement("div", {
					className: t
				}, (null == n ? void 0 : n.isQuarantined) ? r.a.createElement("span", {
					className: Object(o.a)(y.a.warningText, y.a.quarantineWarning)
				}, r.a.createElement(v.a, {
					name: "quarantined_fill",
					className: Object(o.a)(y.a.warningIcon)
				}), E._("quarantined", null, {
					hk: "1j7soK"
				})) : null, s.isNSFW ? r.a.createElement("span", {
					className: Object(o.a)(y.a.warningText, y.a.nsfwWarning)
				}, r.a.createElement(v.a, {
					name: "nsfw_fill",
					className: Object(o.a)(y.a.warningIcon)
				}), E._("nsfw", null, {
					hk: "2IetSA"
				})) : null, s.isSpoiler ? r.a.createElement("span", {
					className: Object(o.a)(y.a.warningText, y.a.spoilerWarning)
				}, r.a.createElement(v.a, {
					name: "spoiler_fill",
					className: Object(o.a)(y.a.warningIcon)
				}), E._("spoiler", null, {
					hk: "3SHbs3"
				})) : null)
			}
			var _ = s("./src/reddit/components/Thumbnail/index.tsx"),
				S = s("./node_modules/react-redux/es/index.js"),
				k = s("./node_modules/reselect/es/index.js"),
				w = s("./src/reddit/actions/post.ts"),
				N = s("./src/reddit/contexts/PageLayer/index.tsx"),
				T = s("./src/reddit/selectors/moderatorPermissions.ts"),
				I = s("./src/reddit/selectors/poll/index.ts"),
				P = s("./src/reddit/selectors/postFlair.ts"),
				R = s("./src/reddit/selectors/posts.ts"),
				M = s("./src/reddit/selectors/user.ts");
			const L = {
					crosspost: R.d,
					isActive: R.j,
					isLoggedIn: M.Q,
					moderatorPermissions: T.m,
					modModeEnabled: N.U,
					poll: I.e,
					showEditFlair: P.a,
					flairStyleTemplate: N.W
				},
				B = () => Object(k.c)(L);
			var F = s("./src/reddit/contexts/Post/index.tsx"),
				A = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				D = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				U = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				H = s("./src/reddit/models/Media/index.ts"),
				W = s("./src/lib/isUrl/index.ts");
			const V = new(s("./src/lib/LRUCache/index.ts").a)(250);
			var G = s("./src/reddit/components/SearchPost/index.m.less"),
				K = s.n(G);

			function q() {
				return (q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const J = Object(a.a)(e => {
					const {
						className: t,
						crosspost: s,
						eventFactory: a,
						first: v,
						flairStyleTemplate: g,
						isLoggedIn: y,
						isOverlay: E,
						moderatorPermissions: S,
						modModeEnabled: k,
						onClickPost: w,
						onClickPostAuthor: N,
						onClickPostCommunity: T,
						onIgnoreReports: I,
						poll: P,
						post: R,
						redditStyle: M,
						searchQuery: L,
						showBulkActionCheckbox: B,
						subredditOrProfile: F,
						title: G
					} = e, J = M ? void 0 : g, Y = s || void 0, z = Object(D.a)(S), X = Object(u.a)(R), Z = Object(p.c)(R), Q = Object(_.b)({
						crosspost: s,
						post: R,
						url: void 0,
						usePreview: !1
					}), $ = Q && Object(W.a)(Q), ee = !!R.media && Object(H.H)(R.media), te = !y, se = Object(n.useMemo)(() => G ? void 0 : ((e, t, s) => {
						const n = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
						return e => {
							const o = `${e.id}-${n}`;
							let a = V.get(o);
							if (void 0 === a) {
								const c = new RegExp(`(\\b${n}\\b)`, "gi"),
									i = e.title.split(c);
								a = s(r.a.createElement(r.a.Fragment, null, r.a.Children.toArray(i.map((e, s) => s % 2 != 0 ? t(e) : e)))), V.set(o, a)
							}
							return a
						}
					})(L, e => r.a.createElement("span", {
						className: Object(o.a)(K.a.syntaxHighlight)
					}, e), e => e), [G, L]), ne = {
						flairStyleTemplate: J,
						isOverlay: E,
						onClickPostAuthor: N,
						onClickPostCommunity: T,
						post: R,
						shouldShowSubscribeButton: te,
						subredditOrProfile: F
					}, re = null != G ? G : r.a.createElement("div", {
						className: Object(o.a)(K.a.paddingSide, K.a.postItemTitleContainer)
					}, r.a.createElement("div", null, r.a.createElement(x.c, {
						format: se,
						hideSourceLink: !0,
						poll: P,
						post: R,
						redditStyle: !0,
						size: x.b.Medium,
						isOverlay: E,
						hideNSFWSpoilerFlair: !0
					}), R.source && !Y && r.a.createElement(A.a, {
						className: K.a.outboundLink,
						href: R.source.url,
						isSponsored: R.isSponsored,
						postId: R.id,
						source: R.source
					}, Object(c.a)(R))), $ && r.a.createElement("div", {
						className: K.a.thumbnailContainer
					}, r.a.createElement(_.a, {
						className: K.a.thumbnail,
						crosspost: Y && R,
						isMeta: R.isMeta,
						post: Y || R,
						redditStyle: M,
						templatePlaceholderImage: J && J.postPlaceholderImage,
						removeLink: ee
					}))), oe = r.a.createElement(h.a, {
						className: Object(o.a)(K.a.postContainer, Object(U.a)(e), v ? K.a.mFirst : void 0, t),
						eventFactory: a,
						isOverlay: E,
						onClick: w,
						post: R,
						style: {
							...Object(U.d)(e),
							...Object(U.b)(J)
						}
					}, r.a.createElement(b.a, {
						"data-click-id": "background",
						flairStyleTemplate: J,
						redditStyle: !0
					}, r.a.createElement(i.a, {
						className: K.a.eventMeta,
						post: R
					}), r.a.createElement("div", {
						className: Object(o.a)(K.a.postContent, {
							[K.a.showBulkActionCheckbox]: B
						}),
						"data-click-id": "body"
					}, r.a.createElement(j.a, q({
						className: Object(o.a)(K.a.paddingSide, K.a.postItemMetaContainer),
						key: "PostMeta"
					}, ne)), r.a.createElement(C, {
						className: Object(o.a)(K.a.paddingSide, K.a.postItemWarningContainer),
						post: R,
						subredditOrProfile: F
					}), re, k && z && X && r.a.createElement(l.a, {
						thing: R
					}), k && z && Z && r.a.createElement(m.a, {
						onIgnoreReports: I,
						reportable: R
					}), r.a.createElement(O.c, {
						className: Object(o.a)(K.a.paddingSide, K.a.postItemFlatlistContainer),
						post: R
					}), r.a.createElement(d.d, null))));
					return r.a.createElement(f.b, null, oe)
				}),
				Y = Object(F.b)((e => t => {
					const s = Object(N.eb)(),
						n = ((e, t) => {
							let {
								postId: s
							} = t;
							return {
								onIgnoreReports: () => e(Object(w.gb)(s))
							}
						})(Object(S.d)(), {
							...t
						}),
						o = Object(N.ab)(s),
						a = Object(S.e)(B),
						c = {
							...t,
							...a,
							...n,
							searchQuery: o
						};
					return r.a.createElement(e, c)
				})(J))
		},
		"./src/reddit/components/SearchPostFlatlist/index.m.less": function(e, t, s) {
			e.exports = {
				flatlistContainer: "_2IpBiHtzKzIxk2fKI4UOv1",
				flatlistItem: "_vaFo96phV6L5Hltvwcox"
			}
		},
		"./src/reddit/components/SearchPostFlatlist/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return l
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "a", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/prettyPrintNumber/index.ts"),
				i = s("./src/reddit/components/SearchPostFlatlist/index.m.less"),
				d = s.n(i);
			const l = e => {
					let {
						children: t,
						className: s
					} = e;
					return o.a.createElement("div", {
						className: Object(a.a)(d.a.flatlistContainer, s)
					}, t)
				},
				u = e => {
					let {
						score: t
					} = e;
					return o.a.createElement("span", {
						className: Object(a.a)(d.a.flatlistItem)
					}, n.fbt._({
						"*": "{upvotesCount} upvotes",
						_1: "{upvotesCount} upvote"
					}, [n.fbt._param("upvotesCount", Object(c.b)(t)), n.fbt._plural(t)], {
						hk: "4rxl9Z"
					}))
				},
				m = e => {
					let {
						awardCountsById: t
					} = e;
					const s = Object.values(t || {}).reduce((e, t) => e += t, 0);
					return o.a.createElement("span", {
						className: Object(a.a)(d.a.flatlistItem)
					}, n.fbt._({
						"*": "{awardsCount} awards",
						_1: "{awardsCount} award"
					}, [n.fbt._param("awardsCount", Object(c.b)(s)), n.fbt._plural(s)], {
						hk: "1jrEck"
					}))
				};

			function p(e) {
				let {
					post: t,
					className: s
				} = e;
				return o.a.createElement(l, {
					className: s
				}, o.a.createElement(u, {
					score: t.score
				}), o.a.createElement("span", {
					className: Object(a.a)(d.a.flatlistItem)
				}, n.fbt._({
					"*": "{commentsCount} comments",
					_1: "{commentsCount} comment"
				}, [n.fbt._param("commentsCount", Object(c.b)(t.numComments)), n.fbt._plural(t.numComments)], {
					hk: "4uhYwJ"
				})), o.a.createElement(m, {
					awardCountsById: t.awardCountsById
				}))
			}
		},
		"./src/reddit/components/SearchPostMeta/index.m.less": function(e, t, s) {
			e.exports = {
				hovercardContainer: "_3Wz607wX-KXslTUjYvTZWi",
				metaContainer: "_3xeOZ4NlqvpwzbB5E8QC6r",
				postTopMeta: "_1wxi9M8fCejzbsH0YGSer2",
				subredditName: "_305seOZmrgus3clHOXCmfs",
				enlargedSubredditName: "_2QZLJe3l7lBGN9JNI51gn9",
				subredditIcon: "id5ExZR7GqiUypGICnSYs",
				enlargedSubredditIcon: "_3dUPuwEf-ssCOozUxvm-HX",
				SubscribeButton: "_2vYQV4h1KDa5M62EoOG3t-",
				subscribeButton: "_2vYQV4h1KDa5M62EoOG3t-"
			}
		},
		"./src/reddit/components/SearchPostMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				i = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				d = s("./src/reddit/components/PostTopMeta/index.tsx"),
				l = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				u = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				m = s("./src/reddit/hooks/useClickSourceData.ts"),
				p = s("./src/reddit/selectors/experiments/searchSubDiscovery.ts"),
				b = s("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				h = s("./src/reddit/components/SearchPostMeta/index.m.less"),
				x = s.n(h);
			t.a = e => {
				const {
					className: t,
					flairStyleTemplate: s,
					onClickPostAuthor: r,
					onClickPostCommunity: h,
					post: f,
					subredditOrProfile: O,
					tooltipType: j
				} = e, v = Object(m.a)(), {
					isSubEnlarged: g
				} = Object(a.e)(p.a);
				return o.a.createElement("div", {
					className: Object(n.a)(t, x.a.metaContainer)
				}, !f.isSponsored && O && o.a.createElement(c.a, {
					className: Object(n.a)(x.a.hovercardContainer, x.a.hovercardContainer),
					postId: f.id,
					subredditName: O.name
				}, o.a.createElement(b.b, {
					className: Object(n.a)(x.a.subredditIcon, g && x.a.enlargedSubredditIcon),
					linkTo: O.url,
					linkProps: h ? {
						"data-testid": "subreddit_icon_link",
						onClick: h
					} : void 0,
					subredditOrProfile: O
				}), o.a.createElement(l.a, {
					className: Object(n.a)(x.a.subredditName, g && x.a.enlargedSubredditName),
					"data-testid": "subreddit-name",
					"data-click-id": "subreddit",
					onClick: h,
					to: {
						pathname: O.url,
						state: v
					}
				}, O.displayText)), !f.isSponsored && o.a.createElement(o.a.Fragment, null, o.a.createElement(u.b, null), o.a.createElement(i.h, {
					type: f.belongsTo.type,
					id: f.belongsTo.id
				})), o.a.createElement(d.d, {
					className: x.a.postTopMeta,
					flairStyleTemplate: s,
					onClickPostAuthor: r,
					post: f,
					tooltipType: j
				}))
			}
		},
		"./src/reddit/components/SearchPostWarnings/index.m.less": function(e, t, s) {
			e.exports = {
				warningText: "_3C_h7N-1FV_Tj4YnJCgzH8",
				warningIcon: "_3aetAYa8qp50wqScD1enz5",
				quarantineWarning: "_3sd00luQLrO6xvEnYk25bF",
				nsfwWarning: "HRl6KlvsitYdcGQiiZoLn",
				spoilerWarning: "_2l5VK2M8iq-3ux5SwW1fAt"
			}
		},
		"./src/reddit/components/SearchResultsContent/Comment/index.m.less": function(e, t, s) {
			e.exports = {
				commentContainer: "_2lwxooVpRNqH_bjx-Nm4m4",
				postTitleContainer: "_1nhxJR41hD8jXWqUVy3wTT",
				postTitle: "_1HsM08P8HBGOIPATQsthMA",
				commentContent: "_1i_lg5WToFS_KM8bSao5FB",
				commentAuthor: "q6Rzyt18sGpgOFFoG9gUg",
				commentFlatlist: "_3bkDvRYnc0SodO59dk5n3p",
				goToThreadLinkButton: "_3Yys9Taiw4B3XiXhmbLrra",
				mediaIcon: "_14gjyiBw0XSVan9XLN7ER-"
			}
		},
		"./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.m.less": function(e, t, s) {
			e.exports = {
				postContainer: "_2u_haOaI877DTCSOfFouuF",
				commentContainer: "_2Uv1IcU4LjDH6OqbNZ0BwO",
				comment: "yNjWq2s_3V0N5m9u-Bx-D",
				link: "-fCtQc5X_zwd1tnX_0s4W",
				linkContainer: "tSwYm_NW9-rD1G91vZi4d"
			}
		},
		"./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				c = s("./src/reddit/components/SearchPost/placeholder.m.less"),
				i = s.n(c),
				d = s("./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.m.less"),
				l = s.n(d);
			const u = e => r.a.createElement("div", {
				className: Object(o.a)(e.className, l.a.postContainer),
				"data-testid": "comment-placeholder"
			}, r.a.createElement("div", {
				className: i.a.postContent
			}, r.a.createElement("div", {
				className: i.a.postItemMetaContainer
			}, r.a.createElement("div", {
				className: Object(o.a)(i.a.subredditName, Object(a.b)(e))
			}), r.a.createElement("div", {
				className: Object(o.a)(i.a.author, Object(a.b)(e))
			})), r.a.createElement("div", {
				className: Object(o.a)(i.a.title, Object(a.b)(e))
			}), r.a.createElement("div", {
				className: l.a.commentContainer
			}, r.a.createElement("div", {
				className: Object(o.a)(l.a.comment, Object(a.b)(e))
			})), r.a.createElement("div", {
				className: l.a.linkContainer
			}, r.a.createElement("div", {
				className: Object(o.a)(l.a.link, Object(a.b)(e))
			})), r.a.createElement("div", {
				className: i.a.flatlist
			}, r.a.createElement("div", {
				className: Object(o.a)(i.a.flatListItem, Object(a.b)(e))
			}), r.a.createElement("div", {
				className: Object(o.a)(i.a.flatListItem, Object(a.b)(e))
			}), r.a.createElement("div", {
				className: Object(o.a)(i.a.flatListItem, Object(a.b)(e))
			}))))
		},
		"./src/reddit/components/SearchResultsContent/Communities/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2mO8vClBdPxiJ30y_C6od2",
				title: "_1hYBlRBooHG-eY5iAHen-R",
				separator: "_1LvQXvsxpSVi-JRudk3e4e",
				previewCommunityStyles: "_3MfNPE_vLKliHPkiYMAtZm",
				loadMoreItem: "_1mLDB-TFHMY0SRGTRD-ipK",
				viewMore: "DMHO9Pay4I5LSwZTtE4TY"
			}
		},
		"./src/reddit/components/SearchResultsContent/Community/index.m.less": function(e, t, s) {
			e.exports = {
				link: "_3BWq3z8_9gA3oThgYXnngR",
				sidebar: "iwmtpuJa21jtA4y_LuOVI",
				mFirst: "YLZe4_XS9hOtObp1VjEF-",
				container: "ei8_Bq_te0jjwNIqmk8Tw",
				subredditIcon: "_2YBzxh6YUsSdcmbcJ-kE5L",
				contentContainer: "_1Nla8vW02K39sy0E826Iug",
				subredditInfo: "_1nTSkRaTteYjCY91DwVEF3",
				title: "_2torGbn_fNOMbGw3UAasPl",
				subtitle: "_3CUjJH8t2eFynKUAv1ER7C",
				flair: "_3sOM1thDS-RiUzmUb8yzxN",
				description: "_3JYXhJlwZCvjZTBplEncbq",
				buttonContainer: "_3llSmEBMCJTcO537oPxHIH"
			}
		},
		"./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.m.less": function(e, t, s) {
			e.exports = {
				communityContainer: "_2-tXnoxd32Utasnz79k34",
				sidebar: "_2PlcVxaNCQS2-GyaX_mhOA",
				subreddtiIcon: "_3yGdKsP-cHl-Cb_SH-PyXp",
				contentContainer: "Lsafh1CsbqQ8tiuBPTucl",
				subredditInfo: "_1TKuN8SZONE4tjAoEul8sp",
				title: "_11V3zVIqp59I7JvzWnky0w",
				author: "_2GNPL8YTca77gPEWlF9nDb",
				description: "_3C8z4MmIB_gou30f3ojB0V",
				buttonContainer: "_14X6ixd8jgBYsNSxRPXTbL"
			}
		},
		"./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				c = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.m.less"),
				i = s.n(c);
			const d = e => r.a.createElement("div", {
				className: Object(o.a)(i.a.communityContainer, e.sidebar && i.a.sidebar),
				"data-testid": "community-placeholder"
			}, r.a.createElement("div", {
				className: Object(o.a)(i.a.subreddtiIcon, Object(a.a)(e))
			}), r.a.createElement("div", {
				className: i.a.contentContainer
			}, r.a.createElement("div", {
				className: Object(o.a)(i.a.subredditInfo, e.sidebar && i.a.sidebar)
			}, r.a.createElement("div", {
				className: Object(o.a)(i.a.title, Object(a.b)(e))
			}), r.a.createElement("div", {
				className: Object(o.a)(i.a.author, Object(a.b)(e))
			})), !e.sidebar && r.a.createElement("div", {
				className: Object(o.a)(i.a.description, Object(a.b)(e))
			})), r.a.createElement("div", {
				className: Object(o.a)(i.a.buttonContainer, Object(a.a)(e))
			}))
		},
		"./src/reddit/components/SearchResultsContent/NoResults/index.m.less": function(e, t, s) {
			e.exports = {
				noResults: "_1VDJFxZ-XJSB8yo1UyJzsi",
				withSidebar: "_3C2YoevK_DDUuAyafjSuUs",
				header: "kKE_PXkpQNWEX-RiwWuTA",
				text: "_1tEoY-vmgG3yWH6hCdgy3p",
				image: "e6PSfRI3_H3v8fgbIqj-x",
				button: "_3FKXXAcRW_DvCNr6yMbF73"
			}
		},
		"./src/reddit/components/SearchResultsContent/SearchResultsList/index.m.less": function(e, t, s) {
			e.exports = {
				separatedCommunity: "_2kqt-kRLvKQ1Kqi8OjMEa7"
			}
		},
		"./src/reddit/components/SearchResultsContent/SearchResultsList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return ge
			})), s.d(t, "b", (function() {
				return Se
			}));
			var n = s("./node_modules/lodash/times.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				c = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/hooks/usePrevious.ts"),
				u = s("./src/lib/LRUCache/index.ts"),
				m = s("./src/reddit/actions/search.ts"),
				p = s("./src/reddit/components/Scroller/Simple.tsx"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/helpers/trackers/screenview.ts"),
				f = s("./src/reddit/selectors/searchResults.ts"),
				O = s("./src/reddit/selectors/tracking.ts"),
				j = s("./src/telemetry/index.ts"),
				v = s("./src/telemetry/models/Timer.ts"),
				g = s("./node_modules/fbt/lib/FbtPublic.js"),
				y = s("./node_modules/lodash/noop.js"),
				E = s.n(y),
				C = s("./node_modules/react-router-redux/es/index.js"),
				_ = s("./src/lib/classNames/index.ts"),
				S = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				k = s("./src/reddit/components/Comments/Comment/index.tsx"),
				w = s("./src/reddit/components/PostList/index.tsx"),
				N = s("./src/reddit/components/PostTitle/index.tsx"),
				T = s("./src/reddit/components/SearchPost/index.tsx"),
				I = s("./src/reddit/connectors/PostList/index.ts"),
				P = s("./src/reddit/contexts/Visibility.tsx"),
				R = s("./src/reddit/controls/Button/index.tsx"),
				M = s("./src/reddit/controls/Button/index.m.less"),
				L = s.n(M),
				B = s("./src/reddit/helpers/trackers/searchResults.ts"),
				F = s("./src/reddit/hooks/useClickSourceData.ts"),
				A = s("./src/reddit/hooks/useTracking.ts"),
				D = s("./src/reddit/selectors/comments.ts"),
				U = s("./src/reddit/selectors/commentSelector.ts"),
				H = s("./src/reddit/selectors/posts.ts"),
				W = s("./src/reddit/components/SearchPostFlatlist/index.tsx");

			function V(e) {
				let {
					className: t,
					comment: s
				} = e;
				return a.a.createElement(W.b, {
					className: t
				}, a.a.createElement(W.d, {
					score: s.score
				}), a.a.createElement(W.a, {
					awardCountsById: s.awardCountsById
				}))
			}
			var G = s("./src/reddit/components/SearchResultsContent/Comment/index.m.less"),
				K = s.n(G);
			var q;
			! function(e) {
				e.COMMENT = "comment", e.COMMENT_AUTHOR = "comment_author", e.COMMENT_TIMESTAMP = "comment_timestamp", e.GO_TO_COMMENT_LINK = "go_to_comment_link", e.POST = "post", e.POST_AUTHOR = "post_author", e.POST_COMMUNITY = "post_community"
			}(q || (q = {}));
			var J = s("./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.tsx"),
				Y = s("./src/lib/truncateText/index.ts"),
				z = s("./src/reddit/selectors/experiments/searchSubDiscovery.ts"),
				X = s("./src/reddit/actions/post.ts"),
				Z = s("./src/reddit/components/Flair/index.tsx"),
				Q = s("./src/lib/prettyPrintNumber/index.ts"),
				$ = s("./src/reddit/components/SubscribeButton/index.tsx"),
				ee = s("./src/reddit/helpers/karma.ts");
			var te = s("./src/reddit/constants/tracking.ts"),
				se = s("./src/reddit/helpers/correlationIdTracker.ts"),
				ne = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				re = s("./src/reddit/selectors/telemetry.ts");
			var oe = s("./src/reddit/components/SubredditIcon/index.tsx"),
				ae = s("./src/reddit/constants/posts.ts"),
				ce = s("./src/reddit/controls/InternalLink/index.tsx"),
				ie = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				de = s("./src/reddit/models/Flair/index.ts"),
				le = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				ue = s("./src/reddit/selectors/subreddit.ts"),
				me = s("./src/reddit/selectors/user.ts"),
				pe = s("./src/reddit/components/SearchResultsContent/Community/index.m.less"),
				be = s.n(pe);
			const he = Object(i.c)({
					isBlockingInterstitialEnabled: le.b,
					isBlockingInterstitialV2Enabled: le.c,
					hideNSFWPref: me.F,
					subredditOrProfile: ue.O,
					subredditOrProfileAboutInfo: ue.K,
					userIsSubscriber: ue.ib
				}),
				xe = e => {
					const {
						className: t,
						first: s,
						identifier: n,
						listingKey: r,
						searchOptions: i,
						sidebar: d
					} = e, l = Object(h.eb)(), u = Object(A.a)(), m = Object(F.a)(), {
						isBlockingInterstitialEnabled: p,
						isBlockingInterstitialV2Enabled: b,
						hideNSFWPref: x,
						subredditOrProfile: f,
						subredditOrProfileAboutInfo: O
					} = Object(c.e)(t => he(t, e)), {
						withCommunityDescription: j
					} = Object(c.e)(z.a), v = d && j, y = Object(c.d)(), E = Object(o.useCallback)(e => {
						f && n.type === ae.a.PROFILE && (p || b) && (e.preventDefault(), y(Object(X.db)(f.url))), u(Object(B.r)(i, l, n, r))
					}, [u, i, l, r, n, p, b, y, f]);
					if (!f) return null;
					const C = f.displayText,
						S = O.publicDescription,
						k = ((e, t) => {
							if ("subreddit" !== e) {
								const e = t,
									s = Object(ee.a)(e),
									n = Object(Q.b)(s);
								return g.fbt._({
									"*": "{karma count} Karma",
									_1: "1 Karma"
								}, [g.fbt._plural(s, "karma count", n)], {
									hk: "4r0tyT"
								})
							}
							const s = t;
							return "number" == typeof s.subscribers ? g.fbt._({
								"*": "{number of subscribers} Members",
								_1: "1 Member"
							}, [g.fbt._plural(s.subscribers, "number of subscribers", Object(Q.b)(s.subscribers))], {
								hk: "vb11y"
							}) : null
						})(n.type, O),
						w = (e => {
							let {
								identifierType: t,
								subredditOrProfile: s,
								subredditOrProfileAboutInfo: n,
								onSubscribeButtonClick: r,
								subscribeEventFactory: o,
								priority: c
							} = e;
							if ("subreddit" !== t) return s.acceptFollowers ? a.a.createElement($.a, {
								getEventFactory: o,
								identifier: {
									name: s.name,
									type: "profile"
								},
								onClick: r,
								priority: c,
								small: !0
							}) : null;
							return "number" == typeof n.subscribers ? a.a.createElement($.a, {
								getEventFactory: o,
								identifier: {
									name: s.name,
									type: "subreddit"
								},
								onClick: r,
								priority: c,
								small: !0
							}) : null
						})({
							identifierType: n.type,
							subredditOrProfile: f,
							subredditOrProfileAboutInfo: O,
							onSubscribeButtonClick: e => {
								e.preventDefault(), e.stopPropagation()
							},
							subscribeEventFactory: e => {
								return ((e, t, s) => n => {
									const r = re.H(n, void 0);
									return {
										source: B.c.SEARCH,
										action: te.c.CLICK,
										noun: `${s}_${B.d[e.type]}`,
										actionInfo: Object(B.l)(n, void 0, r, void 0),
										correlationId: Object(se.c)(se.a.SearchResults),
										profile: "profile" === e.type ? re.X(n, e.id) : void 0,
										search: re.cb(n, t, ne.a.SERP),
										subreddit: "subreddit" === e.type ? re.nb(n, e.id) : void 0
									}
								})(n, i, e ? "unsubscribe" : "subscribe")
							},
							priority: R.c.Tertiary
						});
					return a.a.createElement(ce.default, {
						"data-testid": `${n.type}-link`,
						className: Object(_.a)(be.a.link, d && be.a.sidebar, s ? be.a.mFirst : void 0, t),
						onClick: E,
						to: {
							pathname: f.url,
							state: m
						}
					}, a.a.createElement("div", {
						className: be.a.container
					}, a.a.createElement(oe.b, {
						className: Object(_.a)(be.a.subredditIcon, v && be.a.sidebar),
						shouldHideNsfwIcon: x,
						subredditOrProfile: f
					}), a.a.createElement("div", {
						className: be.a.contentContainer
					}, a.a.createElement("div", {
						className: Object(_.a)(be.a.subredditInfo, d && be.a.sidebar)
					}, a.a.createElement("h6", {
						className: be.a.title
					}, C), f.isNSFW && a.a.createElement(Z.b, {
						className: be.a.flair,
						flair: {
							type: de.f.Nsfw,
							text: g.fbt._("nsfw", null, {
								hk: "2nrY5X"
							})
						}
					}), k && a.a.createElement(a.a.Fragment, null, a.a.createElement("p", {
						className: be.a.subtitle
					}, !d && a.a.createElement(ie.b, null), k))), !d && a.a.createElement("p", {
						className: be.a.description
					}, Object(Y.a)(S, 150, "..."))), a.a.createElement("div", {
						className: be.a.buttonContainer
					}, w)), v && n.type !== ae.a.PROFILE && a.a.createElement("p", {
						className: Object(_.a)(be.a.description, d && be.a.sidebar)
					}, Object(Y.a)(S, 75, "...")))
				};
			var fe = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx"),
				Oe = s("./src/reddit/components/SearchResultsContent/helpers/viewSearchThingTracker.ts"),
				je = s("./src/reddit/components/SearchResultsContent/SearchResultsList/index.m.less"),
				ve = s.n(je);
			const ge = 5,
				ye = Object(i.c)({
					apiError: f.b,
					apiPending: f.c,
					loadMore: f.s,
					viewportDataLoaded: O.a
				}),
				Ee = Object(i.c)({
					apiError: f.e,
					apiPending: f.f,
					loadMore: f.t,
					viewportDataLoaded: O.a
				}),
				Ce = Object(i.c)({
					apiError: f.h,
					apiPending: f.i,
					loadMore: f.u,
					viewportDataLoaded: O.a
				}),
				_e = {
					[d.fc.Comments]: {
						cacheName: "comment",
						Component: e => {
							let {
								identifier: t,
								listingKey: s,
								searchOptions: n
							} = e;
							const r = Object(h.eb)(),
								o = Object(A.a)(),
								i = Object(c.d)(),
								d = Object(c.e)(e => Object(U.b)(e, {
									commentId: t
								})),
								l = Object(c.e)(e => Object(D.m)(e, {
									commentId: t
								})),
								u = Object(c.e)(e => (null == d ? void 0 : d.postId) ? Object(H.G)(e, {
									postId: null == d ? void 0 : d.postId
								}) : void 0),
								m = Object(c.e)(e => (null == d ? void 0 : d.postId) && Object(H.F)(e, {
									postId: null == d ? void 0 : d.postId
								})),
								p = Object(c.e)(e => e.search.searchQuery),
								b = Object(F.a)();
							if (!(null == d ? void 0 : d.postId) || !m) return null;
							const x = Object(I.b)(i),
								f = function(e) {
									let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E.a;
									return function() {
										o(Object(B.q)({
											comment: d,
											key: s,
											originElement: e,
											pageLayer: r,
											searchOptions: n
										})), t(...arguments)
									}
								},
								O = Object(w.b)(d.postId, x),
								j = e => f(e);
							return a.a.createElement(T.a, {
								crosspost: void 0,
								isActive: !1,
								isLoggedIn: !1,
								modModeEnabled: !1,
								moderatorPermissions: void 0,
								onClickPost: f(q.POST, null != O ? O : E.a),
								onClickPostAuthor: j(q.POST_AUTHOR),
								onClickPostCommunity: j(q.POST_COMMUNITY),
								onIgnoreReports: E.a,
								postId: d.postId,
								searchQuery: p,
								showEditFlair: !1,
								title: a.a.createElement(P.a, null, a.a.createElement("div", {
									className: K.a.commentContainer,
									"data-testid": "search_comment_container"
								}, a.a.createElement("div", {
									className: K.a.postTitleContainer,
									"data-testid": "search_comment_post_title_container",
									onClick: j(q.POST)
								}, u && a.a.createElement(N.c, {
									className: K.a.postTitle,
									hideSourceLink: !0,
									post: u,
									redditStyle: !0,
									disableFlair: !0,
									size: N.b.Metadata
								})), a.a.createElement("div", {
									className: K.a.commentContent,
									"data-testid": "search_comment",
									onClick: f(q.COMMENT, e => {
										e.stopPropagation(), i(Object(C.b)(Object(S.a)(l, !0, b)))
									})
								}, a.a.createElement(k.a, {
									clearHovered: E.a,
									commentId: t,
									commentsPageKey: "",
									flatlist: a.a.createElement(V, {
										className: K.a.commentFlatlist,
										comment: d
									}),
									hasAwardGradient: !1,
									highlightTreatment: null,
									index: 0,
									isHighlighted: !1,
									isFirstInList: !0,
									isActive: !1,
									noFocus: !0,
									noSpacing: !0,
									onLineMouseOver: E.a,
									onCommentAuthorClick: e => (e.stopPropagation(), j(q.COMMENT_AUTHOR)(e)),
									onCommentTimestampClick: e => (e.stopPropagation(), j(q.COMMENT_TIMESTAMP)(e)),
									postId: d.postId,
									renderedInOverlay: !1,
									restrictHeight: !0,
									rtJSONRedditStyle: !0,
									scrollToAndRemeasure: E.a,
									showBlockingInterstitial: E.a,
									userIconSmall: !0,
									onClickRevealSpoilerText: () => {
										o(Object(B.t)(n, d, s, r))
									}
								})), a.a.createElement(R.t, {
									kind: R.b.InternalLink,
									priority: R.c.PlainLink,
									className: Object(_.a)(K.a.goToThreadLinkButton, L.a.PlainLinkButton),
									"data-testid": "go_to_thread_link",
									onClick: f(q.GO_TO_COMMENT_LINK, e => {
										e.stopPropagation()
									}),
									to: Object(S.a)(m, !0, b)
								}, g.fbt._("Go to thread", null, {
									hk: "npBX6"
								}))))
							})
						},
						moreResultsTypes: [d.gc.Comments],
						Placeholder: J.a,
						selector: Ee,
						telemetryComponentName: "commentSearchResults",
						telemetryViewEvent: Oe.c
					},
					[d.fc.Subreddits]: {
						cacheName: "community",
						Component: xe,
						moreResultsTypes: [d.gc.Subreddits],
						Placeholder: fe.a,
						selector: Ce,
						telemetryComponentName: "communitySearchResults",
						telemetryViewEvent: Oe.d
					},
					[d.fc.Users]: {
						cacheName: "author",
						Component: xe,
						moreResultsTypes: [d.gc.Users],
						Placeholder: fe.a,
						selector: ye,
						telemetryComponentName: "authorSearchResults",
						telemetryViewEvent: Oe.d
					}
				};
			const Se = e => {
				const t = Object(o.useRef)(!1);
				let s = !1,
					n = !1;
				const i = new u.a(250),
					f = Object(o.useRef)(),
					O = Object(o.useRef)(null),
					g = Object(o.useRef)(!1),
					y = Object(h.eb)(),
					E = Object(b.b)(),
					C = Object(c.d)(),
					{
						identifiers: _,
						listingKey: S,
						searchOptions: k,
						componentType: w,
						sidebar: N
					} = e,
					{
						cacheName: T,
						Component: I,
						moreResultsTypes: P,
						Placeholder: R,
						selector: M,
						telemetryComponentName: L,
						telemetryViewEvent: B
					} = _e[w],
					{
						apiError: F,
						apiPending: A,
						loadMore: D,
						viewportDataLoaded: U
					} = Object(c.e)(t => M(t, e)),
					H = N ? ge : _.length,
					W = N ? ge : 10,
					V = () => {
						if (!Y()) return;
						const e = j.c.end(S);
						E(Object(x.v)(S, k, v.TimerType.InApp, e, y)), g.current = !0
					},
					G = () => {
						const e = f.current && Array.from(f.current.children),
							t = e && e.pop();
						return t && t.getBoundingClientRect().bottom > window.innerHeight
					};
				Object(o.useEffect)(() => {
					V(), O.current && Object(j.b)(d.n.Redesign, {
						type: "mount",
						component: L,
						duration: j.c.end(O.current)
					})
				}, []), Object(o.useEffect)(() => {
					if (V(), O.current && j.c.has(O.current)) {
						const e = j.c.end(O.current);
						if (e < 10) return;
						Object(j.b)(d.n.Redesign, {
							duration: e,
							type: "mount",
							component: L
						})
					}
				});
				const K = Object(l.a)(S),
					q = Object(l.a)(_.length);
				Object(o.useEffect)(() => {
					O.current && j.c.cancel(O.current), _.length && (O.current = j.c.start()), (S !== K || !G() && _.length !== q) && (t.current = !1)
				}, [O, S, _.length, K, q, t]), Object(o.useEffect)(() => () => {
					O.current && j.c.cancel(O.current), f.current = void 0, t.current = !1
				});
				const J = () => {
						t.current = !0, V()
					},
					Y = () => {
						const e = G();
						return (j.c.has(S) || !g.current) && (F || !n && (s || t && (e || U)))
					},
					z = e => {
						f.current = e instanceof Element ? e : void 0
					},
					X = () => {
						const e = _.slice(0, H).map((e, t) => ((e, t) => {
							let s, n = k;
							! function(e) {
								return void 0 !== e.type
							}(e) ? s = e: (s = e.id, n = {
								...k,
								id: e.id,
								eventType: e.type
							});
							const r = `${T}-search-${t}-${S}`,
								o = Object(Oe.b)(s, S, () => B(E, n, e, S, y));
							let c;
							if (void 0 === (c = i.get(r))) {
								const n = `${T}-search-item-[id:${s}]`;
								c = {
									estHeight: 32,
									trackOnEnteredViewport: o,
									id: s,
									render: () => a.a.createElement(I, {
										className: ve.a.separatedCommunity,
										first: 0 === t,
										identifier: e,
										key: n,
										listingKey: S,
										searchOptions: k,
										sidebar: N
									})
								}
							}
							return i.set(r, c), c
						})(e, t));
						return a.a.createElement(p.b, {
							key: S,
							innerRef: z,
							loadMoreToken: D && D.token ? D.token : void 0,
							onLastVisibleChildRendered: J,
							onLoadMore: () => {
								C(Object(m.n)(P))
							}
						}, e)
					};
				return (() => _.length > 0)() ? (s = !1, n = !1, X()) : (() => Boolean(F) || !1 === A)() ? (s = !0, n = !1, X()) : (s = !1, n = !0, (() => {
					const e = !F;
					return a.a.createElement("div", {
						"data-testid": `${w}-list-placeholder`
					}, r()(W, t => a.a.createElement(R, {
						key: t,
						isLoading: e,
						sidebar: !1
					})))
				})())
			}
		},
		"./src/reddit/components/SearchResultsContent/helpers/viewSearchThingTracker.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			}));
			var n = s("./src/lib/LRUCache/index.ts"),
				r = s("./src/reddit/constants/tracking.ts"),
				o = s("./src/reddit/helpers/trackers/searchResults.ts"),
				a = s("./src/reddit/selectors/commentSelector.ts");
			const c = new n.a(250),
				i = (e, t, s) => {
					const n = `entered-${e}-${`last-${t}`}`;
					let r = c.get(n);
					return void 0 === r && (r = s, c.set(n, r)), r
				},
				d = (e, t, s, n, a) => e(e => Object(o.k)({
					action: r.c.VIEW,
					state: e,
					searchOptions: t,
					pageLayer: a,
					subredditOrProfileIdentifier: s,
					key: n
				})),
				l = (e, t, s, n, c) => e(e => {
					const i = Object(a.b)(e, {
						commentId: s
					});
					return Object(o.j)({
						action: r.c.VIEW,
						state: e,
						searchOptions: t,
						pageLayer: c,
						comment: i,
						key: n
					})
				})
		},
		"./src/reddit/components/SearchResultsContent/index.m.less": function(e, t, s) {
			e.exports = {
				resultsContainer: "_1MTbwSHIISfMYM16YhZ8kN"
			}
		},
		"./src/reddit/components/SearchResultsContent/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return lt
			}));
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/lodash/isEmpty.js")),
				i = s.n(c),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/hooks/usePrevious.ts"),
				u = s("./src/lib/search/index.ts"),
				m = s("./src/reddit/actions/search.ts"),
				p = s("./src/config.ts"),
				b = s("./src/lib/intersectionObserver/index.ts"),
				h = s("./src/lib/isUrl/index.ts"),
				x = s("./src/lib/opener/index.ts"),
				f = s("./src/reddit/actions/post.ts"),
				O = s("./src/reddit/components/BlankPost/index.tsx"),
				j = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				v = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				g = s("./src/reddit/components/Media/index.tsx"),
				y = s("./src/reddit/components/PostContainer/index.tsx"),
				E = s("./src/reddit/components/Thumbnail/index.tsx"),
				C = s("./src/reddit/components/TrackingHelper/index.tsx"),
				_ = s("./src/reddit/constants/adEvents.ts"),
				S = s("./src/reddit/contexts/PageLayer/index.tsx"),
				k = s("./src/reddit/contexts/Post/index.tsx"),
				w = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				N = s("./src/reddit/helpers/clickSourceData/index.ts"),
				T = s("./src/reddit/helpers/overlay/index.ts"),
				I = s("./src/reddit/helpers/path/index.ts"),
				P = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				R = s("./src/reddit/helpers/trackers/searchResults.ts"),
				M = s("./src/reddit/models/Media/index.ts"),
				L = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				B = s("./src/reddit/selectors/posts.ts"),
				F = s("./src/reddit/selectors/showPromotedCTA.ts"),
				A = s("./src/reddit/selectors/user.ts"),
				D = s("./node_modules/reselect/es/index.js"),
				U = s("./src/lib/getShortenedLink.ts"),
				H = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				W = s("./src/reddit/components/PostTitle/index.tsx"),
				V = s("./src/reddit/components/SearchPostFlatlist/index.tsx"),
				G = s("./src/reddit/components/SearchPostMeta/index.tsx"),
				K = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				q = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				J = s("./src/reddit/components/CallToActionButton/index.tsx"),
				Y = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				z = s("./src/reddit/hooks/useTheme.ts"),
				X = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Z = s("./src/reddit/components/SearchDiscoveryUnits/HeroUnit/index.m.less"),
				Q = s.n(Z);
			const {
				fbt: $
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ee = `${p.a.assetPath}/img/link-placeholder.png`, te = Object(D.c)({
				autoplayPref: A.b,
				showPromotedCTA: F.a,
				flairStyleTemplate: S.W,
				showCTAExperiment: L.a
			});

			function se(e) {
				var t;
				const {
					postId: s,
					listingKey: c,
					searchOptions: i,
					discoveryUnit: d
				} = e, l = Object(r.useRef)(), u = Object(r.useRef)(), {
					autoplayPref: m,
					flairStyleTemplate: L,
					showPromotedCTA: F,
					showCTAExperiment: A
				} = Object(a.e)(t => te(t, e)), D = Object(a.e)(e => Object(B.d)(e, {
					postId: s
				})), Z = Object(a.e)(X.b), se = Object(a.e)(X.c), ne = Object(S.eb)(), re = Object(C.b)(), oe = Object(a.d)(), ae = Object(z.a)(), {
					post: ce,
					subredditOrProfile: ie
				} = Object(k.d)(s), de = Object(r.useCallback)((e, t) => {
					oe(Object(f.Q)(e, t))
				}, [oe]), le = !!ce.source && !D;
				if (Object(r.useEffect)(() => (l.current && Object(b.a)(l.current, (e, t) => {
						u.current && (t ? u.current.focusContent() : u.current.pauseContent())
					}), Object(R.x)(c, ce.id, i, ne, d), () => {
						l.current && Object(b.b)(l.current), u.current && u.current.stopContent(), l.current = null, u.current = null
					}), []), !ce) return null;
				const {
					media: ue
				} = D || ce || {}, me = (null == ue ? void 0 : ue.type) === M.o.EMBED && (null == ue ? void 0 : ue.provider) === M.v.Twitter, pe = (null == ue ? void 0 : ue.type) === M.o.VIDEO || (null == ue ? void 0 : ue.type) === M.o.GIFVIDEO;

				function be(e) {
					e.stopPropagation(), e.preventDefault(), ce.isSponsored ? (oe(Object(f.z)(ce, _.a.Click)), ce.source ? ce.source.outboundUrl ? Object(x.e)(ce.source.outboundUrl, x.d.BLANK) : Object(x.e)(ce.source.url, x.d.BLANK) : Object(x.e)(ce.permalink, x.d.BLANK)) : oe(Z || se ? Object(f.bb)(Object(I.b)(ce.permalink), ce.id) : Object(T.a)({
						pathname: Object(I.b)(ce.permalink),
						state: Object(N.b)(ne)
					}))
				}

				function he(e) {
					ce.isSponsored && pe || be(e), ce.isSponsored && function(e) {
						pe || (e.stopPropagation(), e.preventDefault()), re(Object(R.y)(ce.id, i, d, c, ne))
					}(e)
				}
				return ce.isBlank ? o.a.createElement(O.BlankPost, {
					onPostViewable: de,
					post: ce,
					postId: ce.id
				}) : o.a.createElement(k.a, {
					postId: s
				}, o.a.createElement(y.a, {
					className: Q.a.postContainer,
					eventFactory: function(e, t) {
						var s;
						let n = null,
							r = P.x;
						return ce.isSponsored || (r = P.z, n = null !== (s = R.E[t]) && void 0 !== s ? s : R.e.POST), r(i, ne, n, c, d)(e)
					},
					onClick: be,
					post: ce,
					"data-click-id": "hero_unit",
					style: {
						...Object(Y.d)({
							theme: ae,
							flairStyleTemplate: L,
							redditStyle: !1
						}),
						...Object(Y.b)(L)
					}
				}, o.a.createElement(H.a, {
					"data-click-id": "background"
				}, o.a.createElement(j.a, {
					className: Q.a.eventMeta,
					post: ce
				}), o.a.createElement("div", {
					className: Object(n.a)(Q.a.postContent, {}),
					"data-click-id": "body"
				}, o.a.createElement(G.a, {
					className: Q.a.postItemMetaContainer,
					key: "PostMeta",
					shouldShowSubscribeButton: !1,
					post: ce,
					subredditOrProfile: ie
				}), o.a.createElement("div", {
					className: Q.a.postItemTitleContainer
				}, o.a.createElement(W.c, {
					hideSourceLink: !0,
					post: ce,
					size: W.b.Medium,
					isOverlay: !1
				}), !F && le && o.a.createElement(K.a, {
					className: Q.a.outboundLink,
					href: (null === (t = null == ce ? void 0 : ce.source) || void 0 === t ? void 0 : t.url) || "",
					isSponsored: ce.isSponsored,
					postId: ce.id,
					source: ce.source
				}, Object(U.a)(ce))), function() {
					let e = o.a.createElement(o.a.Fragment, null);
					const t = !!ce.source && Object(h.a)(ce.source.url) || !!ce.thumbnail && Object(h.a)(ce.thumbnail.url),
						s = !(null == ue ? void 0 : ue.type) && t,
						r = Object(n.a)(Q.a.mediaWrapper, {
							[Q.a.marginCancel]: F && !!ce.source,
							[Q.a.promotedTrend]: ce.isSponsored
						});
					if (s) e = o.a.createElement("div", {
						className: r
					}, o.a.createElement(E.a, {
						className: Q.a.thumbnail,
						post: ce,
						templatePlaceholderImage: ee,
						usePreview: !0
					}));
					else if (ue)
						if (ue.type !== M.o.RTJSON && ue.type !== M.o.TEXT) e = o.a.createElement("div", {
							className: Object(n.a)(r, me && Q.a.twitterEmbed),
							onClickCapture: he,
							ref: e => l.current = e
						}, o.a.createElement(g.a, {
							className: Q.a.mediaContent,
							autoplayPref: m,
							isListing: !1,
							isMiniCard: !1,
							isNotCardView: !0,
							isPromotedTrend: ce.isSponsored,
							post: D || ce,
							primaryContent: !0,
							scrollerItemRef: e => u.current = e,
							shouldLoad: !0,
							shouldPause: !0,
							showCentered: !0,
							showFull: !0
						}));
						else {
							e = o.a.createElement("div", {
								className: Q.a.mediaPlaceholder
							}), (ue.type === M.o.RTJSON && ue.richtextContent || ue.type === M.o.TEXT && ue.content) && Object(w.a)(ce, null == ae ? void 0 : ae.subredditContext) && (e = o.a.createElement("div", {
								className: r,
								onClickCapture: be,
								ref: e => l.current = e
							}, o.a.createElement(g.a, {
								autoplayPref: m,
								className: Q.a.textMedia,
								isListing: !1,
								isMiniCard: !1,
								isNotCardView: !1,
								post: D || ce,
								shouldPause: !0,
								shouldLoad: !0,
								showCentered: !0,
								showFull: !0
							}), o.a.createElement("div", {
								className: Q.a.seeMore
							}, $._("More", null, {
								hk: "362mDE"
							}))))
						} return e
				}(), F && ce.source && o.a.createElement(q.a, {
					className: Q.a.adLinkWrapper,
					ctaExperimentDesign: A && "card"
				}, o.a.createElement(K.a, {
					className: Object(n.a)(Q.a.outboundLink, {
						[Q.a.ctaExperiment]: A
					}),
					href: ce.source.url.replace(p.a.redditUrl, ""),
					isSponsored: ce.isSponsored,
					postId: ce.id,
					source: ce.source
				}, ce.source.displayText), ce.callToAction && o.a.createElement(J.a, {
					className: Q.a.adCallToAction,
					href: ce.source.url.replace(p.a.redditUrl, ""),
					isSponsored: ce.isSponsored,
					postId: ce.id,
					source: ce.source,
					showCTAExperiment: A
				}, ce.callToAction)), !ce.isSponsored && o.a.createElement(V.c, {
					className: Object(n.a)(Q.a.postItemFlatlistContainer),
					post: ce
				}), o.a.createElement(v.d, null)))))
			}
			var ne = s("./src/lib/LRUCache/index.ts"),
				re = s("./src/reddit/components/Scroller/Simple.tsx"),
				oe = s("./src/reddit/components/SearchResultsContent/helpers/viewSearchThingTracker.ts"),
				ae = s("./src/reddit/hooks/usePageLayer.ts"),
				ce = s("./src/reddit/models/SearchDiscoveryUnit/index.ts");
			const ie = 376,
				de = new ne.a(1);

			function le(e) {
				let {
					discoveryUnit: t,
					listingKey: s,
					searchOptions: n,
					postId: r,
					children: c
				} = e;
				const i = Object(a.d)(),
					d = Object(ae.a)();
				if (!t || !r) return null;
				const l = () => {
					const e = `entered-hero-unit-${r}`;
					let o = oe.a.get(e);
					if (void 0 === o) {
						const a = t.layout.viewTypeWeb === ce.b.PromotedTrendHero;
						o = () => {
							i((e, o) => Object(P.A)(o(), t, r, n, d, s, a))
						}, oe.a.set(e, o)
					}
					return o
				};
				return o.a.createElement(re.b, null, (() => {
					const e = `hero-unit-search-${s}`;
					let n;
					return void 0 === (n = de.get(e)) && (n = {
						estHeight: ie,
						trackOnEnteredViewport: l(),
						id: t.id,
						render: () => c
					}), de.set(e, n), [n]
				})())
			}
			var ue = s("./src/reddit/constants/page.ts"),
				me = s("./src/reddit/helpers/trackers/screenview.ts"),
				pe = s("./src/reddit/hooks/useTracking.ts"),
				be = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				he = s("./src/reddit/selectors/listings.ts"),
				xe = s("./src/reddit/selectors/platform.ts");
			const fe = e => {
				const t = e.listings.activeKey,
					s = e.searchDiscoveryUnits.models[t];
				return s || {}
			};
			var Oe = s("./src/reddit/selectors/searchFix.ts"),
				je = s("./src/reddit/selectors/searchResults.ts"),
				ve = s("./src/telemetry/index.ts"),
				ge = s("./src/telemetry/models/Timer.ts");
			const {
				Hero: ye,
				PromotedTrendHero: Ee
			} = ce.b;

			function Ce(e) {
				const t = Object.values(e).find(e => e.layout.viewTypeWeb === ye || e.layout.viewTypeWeb === Ee);
				if (null == t ? void 0 : t.postOrder) return t.postOrder[0]
			}
			var _e = s("./src/reddit/helpers/search/searchClickSearchBarOriginElement.ts"),
				Se = s("./src/reddit/pages/SearchResults/index.tsx"),
				ke = s("./src/reddit/components/SearchResultsContent/NoResults/index.m.less"),
				we = s.n(ke);
			const {
				fbt: Ne
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Te = `${p.a.assetPath}/img/telescope-snoo.png`;
			var Ie;

			function Pe(e) {
				let {
					query: t,
					type: s,
					searchOptions: a,
					tab: c
				} = e;
				const i = Object(pe.a)();
				Object(r.useEffect)(() => {
					i(Object(R.o)(s, a))
				}, [s]);
				const d = a.restrict_sr || Se.pageConfig[c].sidebar;
				return o.a.createElement("div", {
					className: Object(n.a)(we.a.noResults, d && we.a.withSidebar),
					"data-testid": "no-results"
				}, o.a.createElement("img", {
					alt: Ne._("No results image", null, {
						hk: "1BoGUJ"
					}),
					src: Te,
					className: we.a.image
				}), o.a.createElement("h2", {
					className: we.a.header
				}, Ne._("Hm... we couldn’t find any results for “", null, {
					hk: "4fFM7J"
				}), Ne._("{search query}", [Ne._param("search query", t)], {
					hk: "4vP3YT"
				}), "”"), o.a.createElement("p", {
					className: we.a.text
				}, Ne._("Double-check your spelling or try different keywords to {=adjust your search}", [Ne._param("=adjust your search", o.a.createElement("button", {
					className: we.a.button,
					onClick: () => {
						const e = document.querySelector('input[type="search"]');
						_e.b.set(_e.a.ADJUST_SEARCH_BUTTON), null == e || e.focus()
					}
				}, Ne._("adjust your search", null, {
					hk: "1pUIox"
				})))], {
					hk: "33XStx"
				})))
			}! function(e) {
				e.Comments = "comments", e.Communities = "communities", e.People = "people", e.Posts = "posts"
			}(Ie || (Ie = {}));
			var Re = s("./src/reddit/components/PostList/index.tsx"),
				Me = s("./src/reddit/components/SearchPost/index.tsx"),
				Le = s("./src/reddit/constants/postLayout.ts"),
				Be = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				Fe = s("./src/reddit/helpers/trackers/post.ts"),
				Ae = s("./src/reddit/selectors/tracking.ts"),
				De = s("./src/reddit/connectors/PostList/index.ts");
			const Ue = Object(De.c)(),
				He = Object(D.c)({
					...De.d,
					layout: () => Le.g.Search,
					viewportDataLoaded: Ae.a,
					postIds: (e, t) => {
						let {
							heroPostId: s,
							listingKey: n,
							listingName: r,
							inSubredditOrProfile: o,
							searchDiscoveryUnit: a
						} = t;
						const c = a && a.postOrder,
							i = Ce(fe(e));
						if (c && c.length > 0) {
							if (s) {
								const t = c.indexOf(s);
								if (t > -1) return c.splice(t, 1), Object(B.X)(e, c)
							}
							return Object(B.X)(e, c)
						}
						const {
							models: d
						} = e.posts;
						return Object(B.D)(e, n, r, !!o).filter(e => d && d[e] && !d[e].isSponsored && i !== e)
					}
				}),
				We = (e, t, s, n) => {
					if (s) return Object(Fe.k)(e, t);
					const {
						listingKey: r,
						searchOptions: o,
						pageLayer: a,
						searchDiscoveryUnit: c,
						sendEvent: i
					} = n;
					return i(Object(R.s)(e, {
						...o,
						id: e,
						eventType: "post"
					}, a, R.E[t], r, c)), Object(Fe.k)(e, t)
				},
				Ve = Object(a.b)(He, (e, t) => ({
					...Object(De.b)(e),
					trackOnPostEnteredViewport: e => {
						t.sendEvent(Object(R.x)(t.listingKey, e, {
							...t.searchOptions,
							id: e,
							eventType: "post"
						}, t.pageLayer, t.searchDiscoveryUnit))
					}
				}), (e, t, s) => ({
					...e,
					...t,
					...s,
					openPost: e => t.openPost(e),
					postClickEventFactory: We,
					postComponentForLayout: e => {
						let {
							post: t
						} = e;
						return t.isBlank ? Be.a : Me.a
					}
				}));
			const Ge = (e => Object(C.c)(Ue(Ve(e))))(Re.a),
				Ke = () => null,
				qe = Object(D.c)({
					viewTreatment: je.x,
					searchDiscoveryUnitsModels: fe,
					hasPostResults: je.o,
					apiPending: he.d,
					postIds: B.z,
					posts: B.y,
					loadMore: he.g,
					isOverlayOpen: xe.i
				});

			function Je(e) {
				const {
					listingKey: t,
					listingName: s,
					location: n,
					searchOptions: c
				} = e, p = Object(ae.a)(), b = Object(pe.a)(), h = Object(a.d)(), {
					viewTreatment: x,
					searchDiscoveryUnitsModels: f,
					hasPostResults: O,
					postIds: j,
					isOverlayOpen: v,
					apiPending: g
				} = Object(a.e)(t => qe(t, e)), y = Object(l.a)(v), E = Object(r.useRef)(!1), C = void 0 === g || g, _ = (e, s) => b(Object(me.v)(t, c, s, e, p, Object(Oe.b)({
					pageLayer: p
				})));
				let S;
				Object(r.useEffect)(() => {
					O && !i()(j) && T()
				}, [O, j]), Object(r.useEffect)(() => {
					y && !v && T()
				}, [v, y]), x === ce.c.Trending && (S = Ce(f));
				const k = Object(u.a)(c.q || ""),
					w = Object(r.useMemo)(() => Object.values(f).find(e => e.name === be.l || e.name === be.f), [f]),
					N = S && w;

				function T() {
					if (ve.c.has(t) || !E.current) {
						E.current = !0;
						const e = ve.c.end(t);
						_(e, ge.TimerType.InApp)
					}
				}
				return O || N || C ? o.a.createElement(o.a.Fragment, null, N && o.a.createElement(le, {
					key: S,
					postId: S,
					discoveryUnit: w,
					searchOptions: c,
					listingKey: t
				}, o.a.createElement(se, {
					key: S,
					discoveryUnit: w,
					postId: S,
					listingKey: t,
					searchOptions: c
				})), (O || C) && o.a.createElement(Ge, {
					key: "posts",
					listingKey: t,
					listingName: s,
					location: n,
					inSubredditOrProfile: !1,
					noPostsComponent: Ke,
					onLoadMore: function() {
						h(Object(m.n)([d.gc.Posts]))
					},
					searchOptions: c
				})) : o.a.createElement(Pe, {
					query: k,
					type: Ie.Posts,
					searchOptions: c,
					tab: ue.h.Posts
				})
			}
			var Ye = s("./node_modules/lodash/constant.js"),
				ze = s.n(Ye),
				Xe = s("./node_modules/lodash/times.js"),
				Ze = s.n(Xe),
				Qe = s("./src/reddit/components/SearchResultsContent/SearchResultsList/index.tsx"),
				$e = s("./src/reddit/components/SearchResultsContent/CommentPlaceholder/index.tsx"),
				et = s("./src/reddit/components/SearchResultsContent/Communities/index.m.less"),
				tt = s.n(et);
			const st = e => {
				const {
					listingKey: t,
					searchOptions: s
				} = e, n = Object(a.e)(e => Object(je.d)(e, {
					listingKey: t
				})), r = Object(a.e)(e => Object(je.t)(e, {
					listingKey: t
				})), c = Boolean(r && r.token) && n.length > 0;
				return o.a.createElement("div", {
					className: tt.a.container,
					"data-testid": "comments-list"
				}, o.a.createElement(Qe.b, {
					identifiers: n,
					listingKey: t,
					searchOptions: s,
					componentType: d.fc.Comments
				}), c && o.a.Children.toArray(Ze()(3, ze()(o.a.createElement($e.a, {
					className: tt.a.loadMoreItem,
					isLoading: !0
				})))))
			};
			var nt = s("./src/reddit/components/SearchResultsContent/CommunityPlaceholder/index.tsx");
			const rt = (e, t) => Boolean(t && t.token) && e.length > 0,
				ot = e => {
					const {
						listingKey: t,
						searchOptions: s
					} = e, n = Object(a.e)(e => Object(je.g)(e, {
						listingKey: t
					})), r = Object(a.e)(e => Object(je.u)(e, {
						listingKey: t
					}));
					return o.a.createElement("div", {
						className: tt.a.container,
						"data-testid": "communities-list"
					}, !s.is_multi && o.a.createElement(Qe.b, {
						identifiers: n,
						listingKey: t,
						searchOptions: s,
						componentType: d.fc.Subreddits
					}), rt(n, r) && o.a.Children.toArray(Ze()(3, ze()(o.a.createElement(nt.a, {
						className: tt.a.loadMoreItem,
						isLoading: !0
					})))))
				};
			var at = s("./src/reddit/components/SearchResultsContent/index.m.less"),
				ct = s.n(at);
			const it = e => {
				const {
					listingKey: t,
					searchOptions: s
				} = e, n = Object(a.e)(e => Object(je.a)(e, {
					listingKey: t
				})), r = Object(a.e)(e => Object(je.s)(e, {
					listingKey: t
				}));
				return o.a.createElement("div", {
					className: tt.a.container,
					"data-testid": "people-list"
				}, !s.is_multi && o.a.createElement(Qe.b, {
					identifiers: n,
					listingKey: t,
					searchOptions: s,
					componentType: d.fc.Users
				}), rt(n, r) && o.a.Children.toArray(Ze()(3, ze()(o.a.createElement(nt.a, {
					className: tt.a.loadMoreItem,
					isLoading: !0
				})))))
			};

			function dt(e) {
				const {
					hasResults: t,
					searchOptions: s,
					noResultsType: n,
					searchResultsTab: r,
					pendingSelector: c
				} = e, i = Object(u.a)(s.q || ""), d = Object(a.e)(t => c(t, e)), l = void 0 === d || d;
				return o.a.createElement(o.a.Fragment, null, t || l ? e.children : o.a.createElement(Pe, {
					searchOptions: s,
					query: i,
					type: n,
					tab: r
				}))
			}

			function lt(e) {
				const {
					listingKey: t,
					listingName: s,
					location: r,
					searchOptions: c,
					tab: i
				} = e, d = Object(a.e)(e => Object(je.n)(e, {
					listingKey: t
				})), l = Object(a.e)(e => Object(je.l)(e, {
					listingKey: t
				})), u = Object(a.e)(e => Object(je.m)(e, {
					listingKey: t
				}));
				return o.a.createElement("div", {
					className: Object(n.a)(ct.a.resultsContainer)
				}, i === ue.h.Listings ? o.a.createElement(dt, {
					hasResults: d,
					searchOptions: c,
					noResultsType: Ie.Communities,
					searchResultsTab: ue.h.Listings,
					listingKey: t,
					pendingSelector: je.i
				}, o.a.createElement(ot, {
					listingKey: t,
					searchOptions: c,
					key: ue.h.Listings
				})) : i === ue.h.People ? o.a.createElement(dt, {
					hasResults: l,
					searchOptions: c,
					noResultsType: Ie.People,
					searchResultsTab: ue.h.People,
					listingKey: t,
					pendingSelector: je.c
				}, o.a.createElement(it, {
					listingKey: t,
					searchOptions: c,
					key: ue.h.People
				})) : i === ue.h.Comments ? o.a.createElement(dt, {
					hasResults: u,
					searchOptions: c,
					noResultsType: Ie.Comments,
					searchResultsTab: ue.h.Comments,
					listingKey: t,
					pendingSelector: je.f
				}, o.a.createElement(st, {
					listingKey: t,
					searchOptions: c,
					key: ue.h.Comments
				})) : o.a.createElement(Je, {
					key: t,
					listingKey: t,
					listingName: s,
					location: r,
					searchOptions: c
				}))
			}
		},
		"./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/selectors.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/selectors/searchFix.ts"),
				r = s("./src/reddit/selectors/subreddit.ts");
			const o = (e, t) => {
				const s = Object(n.a)(e, t);
				return s ? Object(r.A)(e, {
					subredditName: s
				}) : null
			}
		},
		"./src/reddit/components/SearchResultsNav/index.m.less": function(e, t, s) {
			e.exports = {
				searchResultsNav: "_21H_PIzpqfpibB_EcUDwpj",
				pillRow: "_3XkfKrHLCXvnVsLyBJXzzv",
				pillElement: "_1gui9gwvmz0Ta6TaySS6jf",
				nsfwToggleContainer: "_1nT46ChOZ3tgGqgs2CyMeJ",
				searchSwitcherContainer: "_10JrVcY3xBcUNO7dNh0Js2"
			}
		},
		"./src/reddit/components/SearchResultsNav/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return K
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/noop.js"),
				o = s.n(r),
				a = s("./node_modules/react/index.js"),
				c = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/constants/colors.ts"),
				u = s("./src/lib/makeSearchKey/index.ts"),
				m = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				p = s("./src/reddit/helpers/localStorage/index.ts"),
				b = s("./src/reddit/constants/experiments.ts"),
				h = s("./src/reddit/helpers/chooseVariant/index.ts"),
				x = s("./node_modules/reselect/es/index.js");
			const f = Object(x.a)(e => Object(h.c)(e, {
					experimentEligibilitySelector: h.a,
					experimentName: b.Fc
				}), e => e === b.Jd),
				O = () => {
					const e = Object(i.e)(f),
						[t, s] = Object(a.useState)(!1);
					return Object(a.useEffect)(() => {
						var t;
						if (e) {
							const e = null !== (t = Object(p.B)("should-show-comment-tab-tooltip")) && void 0 !== t ? t : 2;
							s(Boolean(e)), 2 === e ? Object(p.Hb)("should-show-comment-tab-tooltip", 1) : 1 === e && Object(p.Hb)("should-show-comment-tab-tooltip", !1)
						}
					}, []), {
						get shouldShowCommentTabTooltip() {
							return e && t
						},
						resetShowCommentTabTooltip() {
							e && t && s(!1)
						}
					}
				};
			var j = s("./src/reddit/constants/page.ts"),
				v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/controls/InternalLink/index.tsx"),
				y = s("./src/reddit/helpers/search/searchResultsTabTo.ts"),
				E = s("./src/reddit/helpers/trackers/searchResults.ts"),
				C = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				_ = s("./src/reddit/hooks/useTracking.ts"),
				S = s("./src/reddit/models/SearchDiscoveryUnit/index.ts"),
				k = s("./src/reddit/selectors/searchResults.ts"),
				w = s("./src/reddit/selectors/user.ts"),
				N = s("./src/reddit/components/Pill/PillButton/index.tsx"),
				T = s("./node_modules/history/esm/history.js"),
				I = s("./node_modules/react-router-redux/es/index.js"),
				P = s("./src/lib/addQueryParams/index.ts"),
				R = s("./src/lib/classNames/index.ts"),
				M = s("./src/lib/colors/constants.ts"),
				L = s("./src/reddit/constants/parameters.ts"),
				B = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				F = s("./src/reddit/hooks/usePageLayer.ts"),
				A = s("./src/reddit/components/SearchNSFWToggle/hooks.ts"),
				D = s("./src/reddit/components/SearchNSFWToggle/SearchNSFWToggle.m.less"),
				U = s.n(D);
			const H = "safe-search-toggle";

			function W(e) {
				let {
					searchOptions: t
				} = e;
				const s = Object(_.a)(),
					[r, o] = c.a.useState(!0);
				Object(a.useEffect)(() => {
					var e;
					o(null), p(!!(null === (e = null == x ? void 0 : x.queryParams) || void 0 === e ? void 0 : e.include_over_18))
				}, []);
				const d = Object(C.a)({}),
					{
						nsfwSessionSetting: u,
						setNsfwSessionSetting: p
					} = Object(A.b)(),
					{
						shouldShowTooltip: b,
						resetShowTooltip: h
					} = Object(A.c)(!u);
				Object(a.useEffect)(() => {
					if (b) return window.addEventListener("click", h), () => {
						window.removeEventListener("click", h)
					}
				}, [b]);
				const x = Object(F.a)(),
					f = Object(i.d)();
				d.arrowProps.style = {
					...d.arrowProps.style,
					borderBottom: `3px solid ${l.a.alien600}`
				}, d.popperProps.style = {
					...d.popperProps.style,
					backgroundColor: l.a.alien600,
					top: "4px",
					maxWidth: "360px",
					textAlign: "center"
				};
				const O = null != r ? r : !u;
				return c.a.createElement("div", {
					className: Object(R.a)(U.a.searchNSFWToggle),
					"data-testid": H,
					onMouseEnter: d.show,
					onMouseLeave: d.hide
				}, c.a.createElement("label", {
					htmlFor: H,
					className: Object(R.a)(U.a.searchNSFWToggleLabel)
				}, n.fbt._("Safe Search", null, {
					hk: "x1C2Y"
				})), c.a.createElement(B.a, {
					activeColorOverride: M.a,
					id: H,
					onToggle: function() {
						var e;
						s(Object(E.i)(!O, t, x));
						const n = !u;
						p(n);
						const {
							include_over_18: r,
							...o
						} = (null == x ? void 0 : x.queryParams) || {}, a = (null === (e = null == x ? void 0 : x.routeMatch) || void 0 === e ? void 0 : e.match.url) || y.a, c = {
							...o,
							...n && {
								[L.h]: "1"
							}
						}, i = {
							pathname: a,
							search: Object(P.a)("", {
								...c
							})
						};
						f(Object(I.b)(Object(T.c)(i)))
					},
					on: O,
					redditStyle: !0,
					ref: d.target.ref
				}), c.a.createElement(m.a, {
					visible: b || d.visible,
					arrowProps: d.arrowProps,
					popperProps: d.popperProps
				}, O ? n.fbt._("You won’t see adult or Not Safe for Work (NSFW) search results unless you turn Safe Search off", null, {
					hk: "tefl0"
				}) : n.fbt._("You’ll see adult and Not Safe for Work (NSFW) search results unless you turn Safe Search on", null, {
					hk: "1SDOFf"
				})))
			}
			var V = s("./src/reddit/components/SearchResultsNav/index.m.less"),
				G = s.n(V);

			function K(e) {
				let {
					activeTab: t,
					searchOptions: s,
					searchSwitcher: r
				} = e;
				const p = Object(_.a)(),
					b = Object(i.e)(w.kb),
					h = Object(i.e)(k.x),
					x = Object(v.eb)(),
					f = h === S.c.Trending,
					T = Object(C.a)({}),
					{
						shouldShowCommentTabTooltip: I,
						resetShowCommentTabTooltip: P
					} = O();
				T.arrowProps.style = {
					...T.arrowProps.style,
					borderLeft: "4px solid transparent",
					borderRight: "4px solid transparent",
					top: "-3px",
					left: "50%",
					transform: "translateX(-50%)",
					borderBottom: `3px solid ${l.a.alien600}`
				}, T.popperProps.style = {
					...T.popperProps.style,
					backgroundColor: l.a.alien600,
					top: "100%",
					left: "50%",
					transform: "translateX(-50%)",
					whiteSpace: "nowrap"
				}, Object(a.useEffect)(() => {
					if (I) return window.addEventListener("click", P), () => {
						window.removeEventListener("click", P)
					}
				}, [I]);
				const R = {
						condition: !0,
						active: t === j.h.Posts,
						target: E.b.Posts,
						contentType: d.gc.Posts,
						text: n.fbt._("Posts", null, {
							hk: "vNVpl"
						})
					},
					M = {
						condition: !s.is_multi && !s.restrict_sr,
						active: t === j.h.Listings,
						target: E.b.Communities,
						contentType: d.gc.Subreddits,
						text: n.fbt._("Communities", null, {
							hk: "45NgGC"
						})
					},
					L = {
						condition: !s.is_multi && !s.restrict_sr,
						active: t === j.h.People,
						target: E.b.People,
						contentType: d.gc.Users,
						text: n.fbt._("People", null, {
							hk: "Ttxbf"
						})
					},
					B = [R, {
						condition: !(s.source === u.a.Trending || s.source === u.a.PromotedTrend),
						active: t === j.h.Comments,
						target: E.b.Comments,
						contentType: d.gc.Comments,
						text: n.fbt._("Comments", null, {
							hk: "z0DGA"
						}),
						showTooltip: !0
					}, M, L],
					F = b && !f && "1" !== s.sr_nsfw;
				return c.a.createElement("div", {
					"data-testid": "search-results-nav",
					className: G.a.searchResultsNav
				}, c.a.createElement("div", {
					className: G.a.pillRow,
					role: "tablist"
				}, B.filter(e => e.condition).map(e => {
					const {
						active: t,
						target: r,
						text: a,
						contentType: i
					} = e;
					return c.a.createElement(g.default, {
						key: r,
						"data-testid": r,
						to: Object(y.b)({
							searchType: i,
							pageLayer: x
						}),
						"aria-selected": t,
						role: "tab",
						className: G.a.pillElement,
						onClick: () => (e => {
							e.active || p(Object(E.n)(e.target, s))
						})(e)
					}, c.a.createElement(m.a, {
						visible: Boolean(e.showTooltip) && I,
						arrowProps: T.arrowProps,
						popperProps: T.popperProps
					}, n.fbt._("Now you can search comments!", null, {
						hk: "LePo6"
					})), c.a.createElement(N.a, {
						active: t,
						onClick: o.a,
						variant: N.b.TAB_GROUP
					}, a))
				})), r && c.a.createElement("div", {
					className: G.a.searchSwitcherContainer
				}, r), F && c.a.createElement("div", {
					className: G.a.nsfwToggleContainer
				}, c.a.createElement(W, {
					searchOptions: s
				})))
			}
		},
		"./src/reddit/components/SearchResultsSidebar/index.m.less": function(e, t, s) {
			e.exports = {
				container: "DpriHZnFiOfa0afZpg8vf",
				header: "_3n4VKjpr-iVnAmYcon-YbI",
				link: "_2tLIUcp3fYt74ZlVikNlz5",
				noResults: "YoadDFUejEmzEbJmjTvHn"
			}
		},
		"./src/reddit/components/SearchResultsSidebar/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return D
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/constants/index.ts"),
				d = s("./src/config.ts"),
				l = s("./src/reddit/components/CreateCommunityButton/index.tsx"),
				u = s("./src/reddit/components/CreateCommunitySidebar/index.m.less"),
				m = s.n(u),
				p = s("./src/lib/lessComponent.tsx");
			const {
				fbt: b
			} = s("./node_modules/fbt/lib/FbtPublic.js"), h = p.a.div("ButtonContainer", m.a), x = p.a.div("Container", m.a), f = p.a.img("BannerImg", m.a), O = p.a.img("SnooImg", m.a), j = p.a.div("CommunityText", m.a);
			var v = () => o.a.createElement(x, null, o.a.createElement(f, {
					src: `${d.a.assetPath}/img/search-results-community-banner.png`
				}), o.a.createElement(O, {
					src: `${d.a.assetPath}/img/snoo-thinking.png`
				}), o.a.createElement(j, null, b._("Have an idea for a new community?", null, {
					hk: "LfgUP"
				})), o.a.createElement(h, null, o.a.createElement(l.a, {
					className: m.a.Button,
					eventSource: "sidebar"
				}))),
				g = s("./src/reddit/components/IdCard/async.tsx"),
				y = s("./src/reddit/components/SearchResultsContent/SearchResultsList/index.tsx"),
				E = s("./src/reddit/components/SidebarContainer/index.tsx"),
				C = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				_ = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				S = s("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				k = s("./src/reddit/controls/InternalLink/index.tsx"),
				w = s("./src/reddit/helpers/search/searchResultsTabTo.ts"),
				N = s("./src/reddit/hooks/usePageLayer.ts"),
				T = s("./src/reddit/selectors/platform.ts"),
				I = s("./src/reddit/selectors/searchResults.ts"),
				P = s("./src/reddit/selectors/subreddit.ts"),
				R = s("./src/reddit/selectors/user.ts"),
				M = s("./src/reddit/selectors/widgets.ts"),
				L = s("./src/reddit/components/SearchResultsSidebar/index.m.less"),
				B = s.n(L);
			const F = Object(c.c)({
					authorIdentifiers: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(I.a)(e, {
							listingKey: s
						})
					},
					authorLoadMore: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(I.s)(e, {
							listingKey: s
						})
					},
					communityIdentifiers: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(I.g)(e, {
							listingKey: s
						})
					},
					communitiesLoadMore: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(I.u)(e, {
							listingKey: s
						})
					},
					currentSubreddit: T.e,
					isLoggedIn: R.Q,
					hasCommunityResults: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(I.n)(e, {
							listingKey: s
						})
					},
					hasAuthorResults: (e, t) => {
						let {
							listingKey: s
						} = t;
						return Object(I.l)(e, {
							listingKey: s
						})
					},
					subredditId: (e, t) => {
						let {
							listingName: s
						} = t;
						return Object(P.G)(e, s)
					},
					postFlairWidgets: (e, t) => {
						let {
							listingName: s
						} = t;
						const n = Object(P.G)(e, s);
						return Object(M.g)(e, {
							subredditId: n
						})
					},
					idCardWidget: (e, t) => {
						let {
							listingName: s
						} = t;
						return Object(M.d)(e, {
							subredditName: s
						})
					}
				}),
				A = e => {
					let {
						authorIdentifiers: t,
						authorLoadMore: s,
						className: r,
						communityIdentifiers: a,
						communitiesLoadMore: c,
						hasAuthorResults: d,
						hasCommunityResults: l,
						listingKey: u,
						listingName: m,
						idCardWidget: p,
						isLoggedIn: b,
						postFlairWidgets: h,
						searchOptions: x,
						currentSubreddit: f
					} = e;
					const O = Boolean(f && m === f.name && x.restrict_sr),
						j = !!x.is_multi,
						T = a.length > y.a || !!c,
						I = t.length > y.a || !!s;
					let P;
					const R = Object(N.a)();
					return O ? P = o.a.createElement(o.a.Fragment, null, p && o.a.createElement(g.a, {
						listingName: m
					}), h && h.map((e, t) => o.a.createElement(C.a, {
						key: `widgetSpacer-${t}`
					}, o.a.createElement(S.a, {
						subredditName: m,
						widget: e
					})))) : j || (P = o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: B.a.container,
						"data-testid": "communities-list"
					}, o.a.createElement("h4", {
						className: B.a.header
					}, n.fbt._("Communities", null, {
						hk: "3cMR66"
					})), l ? o.a.createElement(o.a.Fragment, null, !x.is_multi && o.a.createElement(y.b, {
						componentType: i.fc.Subreddits,
						identifiers: a,
						listingKey: u,
						searchOptions: x,
						sidebar: !0
					}), T && o.a.createElement(k.default, {
						to: Object(w.b)({
							searchType: i.gc.Subreddits,
							pageLayer: R
						})
					}, o.a.createElement("p", {
						className: B.a.link
					}, n.fbt._("See more communities", null, {
						hk: "2VoaHj"
					})))) : o.a.createElement("p", {
						className: B.a.noResults
					}, n.fbt._("No results", null, {
						hk: "3feoKq"
					}))), o.a.createElement("div", {
						className: B.a.container,
						"data-testid": "authors-list"
					}, o.a.createElement("h4", {
						className: B.a.header
					}, n.fbt._("People", null, {
						hk: "2M8TqB"
					})), d ? o.a.createElement(o.a.Fragment, null, !x.is_multi && o.a.createElement(y.b, {
						componentType: i.fc.Users,
						identifiers: t,
						listingKey: u,
						searchOptions: x,
						sidebar: !0
					}), I && o.a.createElement(k.default, {
						to: Object(w.b)({
							searchType: i.gc.Users,
							pageLayer: R
						})
					}, o.a.createElement("p", {
						className: B.a.link
					}, n.fbt._("See more people", null, {
						hk: "yjtZU"
					})))) : o.a.createElement("p", {
						className: B.a.noResults
					}, n.fbt._("No results", null, {
						hk: "3qx6oy"
					}))), b && o.a.createElement("div", {
						className: B.a.container
					}, o.a.createElement(v, null)))), o.a.createElement(E.a, {
						"data-testid": "search-results-sidebar",
						className: r
					}, P, o.a.createElement(_.a, null))
				},
				D = e => {
					const t = Object(a.e)(t => F(t, e)),
						s = {
							...e,
							...t
						};
					return o.a.createElement(A, s)
				}
		},
		"./src/reddit/components/SearchResultsSubNav/GlobalSearchResultsLink/index.m.less": function(e, t, s) {
			e.exports = {
				TertiaryButton: "_3t6mNXBt6sQ7oZpTvfpI-D",
				tertiaryButton: "_3t6mNXBt6sQ7oZpTvfpI-D",
				AllRedditResultsButton: "_3DJNcKXVcC9fp5NF4suS_j",
				allRedditResultsButton: "_3DJNcKXVcC9fp5NF4suS_j"
			}
		},
		"./src/reddit/components/SearchResultsSubNav/Select/SelectOption/index.m.less": function(e, t, s) {
			e.exports = {
				SelectOption: "_iuAkxGWujgYETf2Xyv89",
				selectOption: "_iuAkxGWujgYETf2Xyv89",
				mIsSelected: "hxyadGitKiIMfl81IVThw"
			}
		},
		"./src/reddit/components/SearchResultsSubNav/Select/index.m.less": function(e, t, s) {
			e.exports = {
				caret: "OGoNN0lGfOACQsVwIa1wo",
				Wrapper: "_3yqn7UgWZCfM22Sk-rcBbs",
				wrapper: "_3yqn7UgWZCfM22Sk-rcBbs",
				caretOpen: "_1ILOkGbdwmhXOmzBDCYXFT",
				filterButton: "BZDMD8yWu5imupa73nqYE",
				hasValue: "_1HyZhQLyitFqci_zC5jGCy",
				Dropdown: "_3RwR0q62tl_HktsM6eNnOn",
				dropdown: "_3RwR0q62tl_HktsM6eNnOn"
			}
		},
		"./src/reddit/components/SearchResultsSubNav/index.m.less": function(e, t, s) {
			e.exports = {
				RightLink: "_3AmQ4JXJufVLUdOsC6v61i",
				rightLink: "_3AmQ4JXJufVLUdOsC6v61i",
				ArrowRight: "FGX7ywlMTix8BeUr5G7TE",
				arrowRight: "FGX7ywlMTix8BeUr5G7TE",
				Component: "_1fPZw9wLFaCEzhzp2Hkx18",
				component: "_1fPZw9wLFaCEzhzp2Hkx18",
				ComponentRedesign: "_26jxFFm8Z3TxPyZxoddAGy",
				componentRedesign: "_26jxFFm8Z3TxPyZxoddAGy"
			}
		},
		"./src/reddit/components/SearchResultsSubNav/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return be
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/layout/row/Inline/index.tsx"),
				l = s("./src/reddit/selectors/subreddit.ts"),
				u = s("./src/lib/constants/index.ts"),
				m = s("./node_modules/fbt/lib/FbtPublic.js"),
				p = s("./src/reddit/constants/parameters.ts"),
				b = s("./src/reddit/selectors/searchResults.ts"),
				h = s("./src/lib/addQueryParams/index.ts");
			const x = (e, t, s, n, r, o) => {
				const a = e && e[s],
					c = {};
				let i = Object(h.a)(t, {
					[s]: r
				});
				const d = [];
				for (const l of n) {
					const e = Object(h.a)(t, {
						[s]: l
					});
					c[e] = o[l](), d.push(e), a === l && (i = e)
				}
				return {
					optionLabels: c,
					options: d,
					value: i
				}
			};
			var f = s("./src/higherOrderComponents/asTooltip.tsx"),
				O = s("./src/reddit/components/Pill/PillButton/index.tsx"),
				j = s("./src/reddit/controls/Dropdown/index.tsx"),
				v = s("./src/reddit/icons/fonts/index.tsx"),
				g = s("./src/reddit/actions/tooltip.ts"),
				y = s("./src/reddit/selectors/tooltip.ts");
			const E = Object(a.c)({
				isOpen: (e, t) => {
					let {
						tooltipId: s
					} = t;
					return Object(y.b)(s)(e)
				}
			});
			var C = s("./src/reddit/components/SearchResultsSubNav/Select/index.m.less"),
				_ = s.n(C),
				S = s("./node_modules/query-string/index.js"),
				k = s.n(S),
				w = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				N = s("./src/reddit/components/TrackingHelper/index.tsx"),
				T = s("./src/reddit/constants/history.ts"),
				I = s("./src/reddit/controls/Dropdown/Row.tsx"),
				P = s("./src/reddit/helpers/history/index.ts"),
				R = s("./node_modules/lodash/fromPairs.js"),
				M = s.n(R),
				L = s("./src/lib/extractQueryParams/index.ts"),
				B = s("./src/reddit/helpers/correlationIdTracker.ts"),
				F = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				A = s("./src/reddit/helpers/trackers/searchResults.ts"),
				D = s("./src/reddit/selectors/telemetry.ts");
			const U = (e, t) => {
					const s = M()([...Object(L.a)(e)]);
					return Object(u.xc)(s.sort) && (t.sort = s.sort), Object(u.yc)(s.t) && (t.t = s.t), t
				},
				H = (e, t, s, n) => () => e(e => ({
					...Object(A.g)(e),
					source: "search",
					action: "click",
					noun: t,
					correlationId: Object(B.c)(B.a.SearchResults),
					actionInfo: D.d(e),
					search: D.cb(e, U(s, n), F.a.SERP)
				})),
				W = e => {
					let {
						isSelected: t,
						option: s,
						searchOptions: n,
						type: o,
						styles: a,
						displayText: i
					} = e;
					const d = Object(N.b)();
					return r.a.createElement(w.a, {
						key: s,
						to: {
							pathname: k.a.parseUrl(s).url,
							state: {
								[T.b.SearchOriginPage]: Object(P.b)(T.b.SearchOriginPage)
							},
							search: s.replace(k.a.parseUrl(s).url + "?", "")
						},
						onClick: H(d, o, s, n)
					}, r.a.createElement(I.b, {
						className: Object(c.a)(a.SelectOption, t && a.mIsSelected),
						displayText: i,
						isSelected: t
					}))
				};
			var V = s("./src/reddit/components/SearchResultsSubNav/Select/SelectOption/index.m.less"),
				G = s.n(V);

			function K() {
				return (K = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const q = Object(f.a)(e => r.a.createElement(j.a, K({
					className: _.a.Component
				}, e))),
				J = e => {
					let {
						active: t,
						label: s,
						options: n,
						optionLabels: a,
						searchOptions: i,
						tooltipId: d,
						type: l,
						value: u,
						...m
					} = e;
					const {
						isOpen: p,
						onClick: b
					} = (e => {
						const {
							isOpen: t
						} = Object(o.e)(t => E(t, {
							tooltipId: e
						})), s = Object(o.d)();
						return {
							isOpen: t,
							onClick: t ? () => s(Object(g.i)()) : () => s(Object(g.f)({
								tooltipId: e
							}))
						}
					})(d);
					return r.a.createElement("div", {
						className: _.a.Wrapper
					}, r.a.createElement(O.a, K({}, m, {
						active: p,
						className: Object(c.a)(_.a.filterButton, t && _.a.hasValue),
						onClick: b,
						variant: O.b.TAB_GROUP
					}), s, r.a.createElement(v.a, {
						name: "caret_down",
						className: Object(c.a)(_.a.caret, p && _.a.caretOpen)
					})), r.a.createElement("div", {
						id: d
					}, r.a.createElement(q, {
						className: _.a.Dropdown,
						isOpen: p,
						tooltipId: d
					}, n.map((e, t) => r.a.createElement(W, {
						displayText: a[e],
						key: t,
						isSelected: e === u,
						option: e,
						searchOptions: i,
						styles: {
							mIsSelected: G.a.mIsSelected,
							SelectOption: G.a.SelectOption
						},
						type: l
					})))))
				},
				Y = [u.dc.Relevance, u.dc.Hot, u.dc.Top, u.dc.New, u.dc.Comments],
				z = {
					[u.dc.Hot]: () => m.fbt._("Hot", null, {
						hk: "3c99Ga"
					}),
					[u.dc.Relevance]: () => m.fbt._("Relevance", null, {
						hk: "LvJkD"
					}),
					[u.dc.Top]: () => m.fbt._("Top", null, {
						hk: "bijGV"
					}),
					[u.dc.New]: () => m.fbt._("New", null, {
						hk: "23egpt"
					}),
					[u.dc.Comments]: () => m.fbt._("Most Comments", null, {
						hk: "4k1FoM"
					})
				};

			function X() {
				return (X = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Z = [u.mc.HOUR, u.mc.DAY, u.mc.WEEK, u.mc.MONTH, u.mc.YEAR, u.mc.ALL],
				Q = {
					[u.mc.HOUR]: () => m.fbt._("Past Hour", null, {
						hk: "4qCarL"
					}),
					[u.mc.DAY]: () => m.fbt._("Past 24 Hours", null, {
						hk: "GI5qN"
					}),
					[u.mc.WEEK]: () => m.fbt._("Past Week", null, {
						hk: "3jQHYQ"
					}),
					[u.mc.MONTH]: () => m.fbt._("Past Month", null, {
						hk: "11eVJy"
					}),
					[u.mc.YEAR]: () => m.fbt._("Past Year", null, {
						hk: "38MavC"
					}),
					[u.mc.ALL]: () => m.fbt._("All Time", null, {
						hk: "2buTB7"
					})
				};

			function $() {
				return ($ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ee = [u.cc.Sort, u.cc.Time],
				te = {
					[u.cc.Sort]: e => {
						let t = Object(o.e)(b.w);
						t = t !== u.Tb ? t : void 0;
						const {
							options: s,
							optionLabels: n,
							value: a
						} = x(e.queryParams, e.url, p.y, Y, t || u.Tb, z), c = {
							"data-testid": "search-results-filter-sort",
							options: s,
							optionLabels: n,
							searchOptions: e.searchOptions,
							tooltipId: "search-results-sort",
							value: a
						}, i = Boolean(e.queryParams[p.y] || t);
						return r.a.createElement(J, X({}, c, {
							active: i,
							label: i ? n[a] : m.fbt._("Sort", null, {
								hk: "2COMme"
							}),
							type: u.cc.Sort
						}))
					},
					[u.cc.Time]: e => {
						const t = Object(o.e)(b.w),
							{
								options: s,
								optionLabels: n,
								value: a
							} = x(e.queryParams, e.url, p.C, Z.slice().reverse(), u.Ub, Q);
						if (!e.searchOptions || e.searchOptions.sort === u.Z.NEW || e.searchOptions.sort === u.Z.HOT || t === u.Z.NEW || t === u.Z.HOT) return null;
						const c = {
							"data-testid": "search-results-filter-time",
							options: s,
							optionLabels: n,
							searchOptions: e.searchOptions,
							tooltipId: "search-results-time",
							value: a
						};
						return r.a.createElement(J, $({}, c, {
							active: Boolean(e.queryParams[p.C]),
							label: e.queryParams[p.C] ? n[a] : m.fbt._("Time", null, {
								hk: "3hL0P3"
							}),
							type: u.cc.Filter
						}))
					}
				};
			var se = s("./src/lib/lessComponent.tsx"),
				ne = s("./src/reddit/controls/Button/index.tsx"),
				re = s("./src/reddit/helpers/search/switchSearchScope.ts"),
				oe = s("./src/reddit/components/SearchResultsSubNav/GlobalSearchResultsLink/index.m.less"),
				ae = s.n(oe);
			const {
				fbt: ce
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ie = se.a.wrapped(ne.r, "TertiaryButton", ae.a), de = se.a.wrapped(ie, "AllRedditResultsButton", ae.a), le = e => {
				const t = Object(N.b)();
				return r.a.createElement(w.a, {
					to: Object(re.a)(e.queryParams)
				}, r.a.createElement(de, {
					onClick: () => {
						t(t => ({
							...Object(A.g)(t, e.searchOptions),
							action: "click",
							noun: "unrestrict_to_subreddit",
							source: "search_results"
						}))
					},
					"data-redditstyle": !0
				}, ce._("All reddit results", null, {
					hk: "2IBCsX"
				}), r.a.createElement(v.a, {
					name: "forward"
				})))
			};
			var ue = s("./src/reddit/components/SearchResultsSubNav/index.m.less"),
				me = s.n(ue);
			const pe = Object(a.c)({
					subreddit: l.A
				}),
				be = e => {
					const {
						subreddit: t
					} = Object(o.e)(t => pe(t, e)), s = Object(i.eb)(), n = Object(i.X)(s), a = Object(i.db)(s), l = t && !!e.searchOptions.restrict_sr && !e.shouldHideGlobalSearchLink;
					return r.a.createElement(d.a, {
						className: Object(c.a)(me.a.ComponentRedesign),
						"data-testid": "search-results-subnav"
					}, ee.map((t, s) => {
						const o = te[t];
						return r.a.createElement(o, {
							key: s,
							queryParams: n,
							searchOptions: e.searchOptions,
							tab: e.tab,
							url: a
						})
					}), l && r.a.createElement(le, {
						queryParams: n,
						searchOptions: e.searchOptions
					}))
				}
		},
		"./src/reddit/components/SearchSwitcher/index.m.less": function(e, t, s) {
			e.exports = {
				searchSwitcher: "_1i7CStyaaHQU2aiG0GdpSA",
				mSr: "_3-pePLWUAV_CAVhht1dfup",
				redesign: "_3Tphf4AA5J39saIlrB1SYD",
				subredditIcon: "_3swS56fqtrGcixPfTzK_Cl",
				searchSwitcherText: "-V0kqUlRHvLoNRUAUmCy9",
				arrowIcon: "N0zmIZbfRSCGk2rUOGHSS"
			}
		},
		"./src/reddit/components/SearchSwitcher/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				a = s.n(o),
				c = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/components/SubredditIcon/index.tsx"),
				l = s("./src/reddit/components/ThemeProvider/index.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/constants/history.ts"),
				p = s("./src/reddit/controls/InternalLink/index.tsx"),
				b = s("./src/reddit/helpers/history/index.ts"),
				h = s("./src/reddit/helpers/trackers/searchResults.ts"),
				x = s("./src/reddit/icons/fonts/index.tsx"),
				f = s("./src/reddit/components/SearchSwitcher/index.m.less"),
				O = s.n(f);
			const {
				fbt: j
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class v extends r.a.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						const {
							searchOptions: e,
							sendEvent: t,
							subreddit: s
						} = this.props;
						t(Object(h.C)(!!s, e))
					}
				}
				render() {
					const {
						redesign: e,
						subreddit: t,
						url: s
					} = this.props, n = {
						[O.a.mSr]: !!t
					}, {
						pathname: o,
						search: l
					} = a.a.parse(s), u = t ? i.ec.ToSubreddit : i.ec.ToGlobal, h = t ? r.a.createElement(r.a.Fragment, null, r.a.createElement("span", null, j._("Show results from", null, {
						hk: "3aVDvz"
					})), r.a.createElement(d.b, {
						className: O.a.subredditIcon,
						subredditOrProfile: t
					}), r.a.createElement("p", {
						className: Object(c.a)(O.a.searchSwitcherText, n)
					}, t.displayText)) : r.a.createElement(r.a.Fragment, null, j._("{=Show results from}{=all of Reddit}", [j._param("=Show results from", r.a.createElement("span", null, j._("Show results from", null, {
						hk: "4l8fSw"
					}))), j._param("=all of Reddit", r.a.createElement("p", {
						className: Object(c.a)(O.a.searchSwitcherText, n)
					}, j._("all of Reddit", null, {
						hk: "rc9dH"
					})))], {
						hk: "2NDUqb"
					}));
					return r.a.createElement(p.default, {
						className: Object(c.a)(O.a.searchSwitcher, e && O.a.redesign, n),
						"data-testid": "search-switcher-link",
						onClick: this.onClick,
						to: {
							pathname: o,
							search: l,
							state: {
								searchSwitcherType: u,
								[m.b.SearchOriginPage]: Object(b.b)(m.b.SearchOriginPage)
							}
						}
					}, h, r.a.createElement(x.a, {
						name: "forward",
						className: Object(c.a)(O.a.arrowIcon, n)
					}))
				}
			}
			t.a = Object(u.c)(e => e.subreddit ? r.a.createElement(l.b, {
				subredditName: e.subreddit.name
			}, r.a.createElement(v, e)) : r.a.createElement(v, e))
		},
		"./src/reddit/components/ShareMenu/index.m.less": function(e, t, s) {
			e.exports = {
				dropdown: "PWY92ySDjTYrTAiutq4ty",
				dropdownRow: "_2snJGyyGyyH38duHobOUKE",
				linkIcon: "_1GObrri0j7y_9IWiGUfPjp",
				chatIcon: "_1PhtucoKocd-ADJ-JDEoiC",
				crosspostIcon: "_1m76BHzDzRsM1te7HBxUqd",
				embedIcon: "_3MSdPVJwGxrpakz-e1MQhO",
				modalBody: "T4VmKX-IOkP4UG-B4jUR-"
			}
		},
		"./src/reddit/components/ShareMenu/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/uuid/dist/esm-browser/v4.js"),
				i = s("./src/config.ts"),
				d = s("./src/lib/addQueryParams/index.ts"),
				l = s("./src/reddit/actions/chat/toggle.ts"),
				u = s("./src/reddit/actions/modal.ts"),
				m = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				b = s("./src/reddit/actions/tooltip.ts"),
				h = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				x = s("./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/Loader.tsx"),
				f = s("./src/reddit/constants/parameters.ts"),
				O = s("./src/reddit/controls/Dropdown/index.tsx"),
				j = s("./src/reddit/controls/Dropdown/Row.tsx"),
				v = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				g = s("./src/reddit/helpers/trackers/shareToChat.ts"),
				y = s("./src/reddit/hooks/useTracking.ts"),
				E = s("./src/reddit/icons/fonts/index.tsx"),
				C = s("./src/reddit/models/Post/index.ts"),
				_ = s("./src/reddit/models/Subreddit/index.ts"),
				S = s("./src/reddit/routes/postCreation/constants.ts"),
				k = s("./src/reddit/selectors/activeModalId.ts"),
				w = s("./src/reddit/selectors/tooltip.ts"),
				N = s("./src/reddit/components/ShareMenu/index.m.less"),
				T = s.n(N);
			const I = Object(h.a)(O.a),
				P = Object(c.a)(),
				R = e => {
					let {
						permalink: t,
						onShare: s
					} = e;
					return o.a.createElement(j.b, {
						id: "shareToChat",
						className: T.a.dropdownRow,
						displayText: n.fbt._("share to chat", null, {
							hk: "3EuIWT"
						}),
						onClick: () => {
							const e = Object(d.a)(t, {
								utm_source: "share",
								utm_medium: "web2x",
								context: 3
							});
							s(e)
						}
					}, o.a.createElement(E.a, {
						name: "chat",
						className: T.a.chatIcon
					}))
				},
				M = e => {
					let {
						permalink: t,
						sendEventWithName: s
					} = e;
					return o.a.createElement(j.b, {
						className: T.a.dropdownRow,
						displayText: n.fbt._("Embed", null, {
							hk: "2CcsuC"
						}),
						onClick: () => {
							s("share_embed"), window.open(`${i.a.rebedMediaUrl}/embed?url=${t}`, "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
						}
					}, o.a.createElement(E.a, {
						name: "embed",
						className: T.a.embedIcon
					}))
				},
				L = e => {
					let {
						onCrosspost: t
					} = e;
					return o.a.createElement(j.b, {
						className: T.a.dropdownRow,
						displayText: n.fbt._("crosspost", null, {
							hk: "23zSN6"
						}),
						onClick: t
					}, o.a.createElement(E.a, {
						name: "crosspost",
						className: T.a.crosspostIcon
					}))
				},
				B = o.a.memo(e => {
					const t = Object(a.d)(),
						s = Object(y.a)(),
						c = Object(a.e)(t => Object(w.b)(e.dropdownId)(t)),
						i = Object(a.e)(t => Object(k.b)(Object(x.a)(e.dropdownId))(t)),
						h = Object(r.useCallback)(() => {
							t(Object(b.h)({
								tooltipId: e.dropdownId
							}))
						}, [t, e.dropdownId]),
						O = e => t(Object(m.D)(e)),
						N = Object(r.useCallback)(() => {
							e.post && (t(Object(p.d)(e.post.id)), t(Object(u.i)(Object(x.a)(e.post.id))))
						}, [t, e.post]),
						B = !e.subredditType || e.subredditType === _.f.Public,
						F = !!e.post && e.post.isCrosspostable && !e.post.isSponsored,
						A = Object(r.useCallback)(e => {
							t(Object(l.e)(e)), s(Object(g.a)())
						}, [t, s]);
					return o.a.createElement("div", {
						className: e.className,
						onClick: h,
						id: e.dropdownId
					}, e.children, o.a.createElement(I, {
						className: T.a.dropdown,
						isOpen: c,
						tooltipId: e.dropdownId
					}, o.a.createElement(j.b, {
						className: T.a.dropdownRow,
						displayText: n.fbt._("Copy link", null, {
							hk: "1tCqox"
						}),
						onClick: () => {
							const {
								permalink: t,
								post: s
							} = e;
							if (s && Object(C.q)(s)) e.sendEventWithName("share_copy", {
								referralId: P
							}), N();
							else {
								const s = Object(d.a)(t, {
									utm_source: "share",
									utm_medium: "web2x",
									context: 3
								});
								e.sendEventWithName("share_copy"), O(s)
							}
						}
					}, o.a.createElement(E.a, {
						name: "link_post",
						className: T.a.linkIcon
					})), F && o.a.createElement(L, {
						onCrosspost: () => {
							e.sendEventWithName("share_crosspost"), e.post && window.open(`${S.b}?source_id=${e.post.id}`, "_blank")
						}
					}), B && o.a.createElement(M, {
						permalink: e.permalink,
						sendEventWithName: e.sendEventWithName
					}), o.a.createElement(R, {
						permalink: e.permalink,
						onShare: A
					})), i && e.post && o.a.createElement(x.b, {
						className: T.a.modalBody,
						onClose: t => {
							t && (e.sendEventWithName("copy_link", {
								referralId: P
							}), O(t)), N()
						},
						url: Object(d.a)(Object(v.a)(e.post.id), {
							[f.q]: P,
							utm_source: "share",
							utm_medium: "web2x",
							utm_content: "rpan_stream"
						})
					}))
				});
			t.a = B
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/SidebarContainer/index.m.less"),
				o = s.n(r);
			t.a = n.a.div("container", o.a)
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.m.less": function(e, t, s) {
			e.exports = {
				S: "Zwo7CZoszMU6kBYhWyIC7",
				s: "Zwo7CZoszMU6kBYhWyIC7",
				SubredditIcon: "_33bYVIxJlbFcqiiYlexnqp",
				subredditIcon: "_33bYVIxJlbFcqiiYlexnqp"
			}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/SubredditIcon/index.tsx"),
				c = s("./src/reddit/controls/OutboundLink/index.tsx"),
				i = s("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				d = s.n(i);
			const l = o.a.wrapped(a.b, "SubredditIcon", d.a),
				u = o.a.wrapped(e => r.a.createElement(c.b, e), "S", d.a)
		},
		"./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less": function(e, t, s) {
			e.exports = {
				topPostsTitle: "_2Pw8j7a2DYkjTDOFbIdODA",
				hovercardStyle: "_2ktYI4-r7C-HaMk9ulbwog",
				top: "_3rKUrAbYNFvE7-nMDs6lwZ",
				subredditMentionContainer: "_1e2szH8g0XMMM_EuCN8Olk",
				subredditIconContainer: "_3kpwADnYG-SH40aaSdX3ZE"
			}
		},
		"./src/reddit/components/SubredditMention/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return y
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/components/RichTextJson/elements.tsx"),
				i = s("./src/higherOrderComponents/makeAsync.tsx"),
				d = s("./src/lib/loadWithRetries/index.ts"),
				l = s("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				u = s("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				m = s.n(u);
			var p = Object(i.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(d.a)(() => s.e("SubredditMentionWithIcon").then(s.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent(e) {
						let {
							subredditName: t
						} = e;
						return r.a.createElement("span", {
							className: m.a.subredditMentionContainer
						}, r.a.createElement(l.a, {
							href: `/r/${t}/`
						}, r.a.createElement("span", {
							className: m.a.subredditIconContainer
						}, r.a.createElement(l.b, null)), `r/${t}`))
					}
				}),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/constants/experiments.ts"),
				x = s("./src/reddit/helpers/trackers/subredditMentions.ts"),
				f = s("./src/reddit/selectors/subredditMention.ts");
			class O extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.handleOnClick = () => {
						const {
							rtJsonElementProps: e,
							sendEvent: t,
							subredditName: s
						} = this.props;
						t(Object(x.a)({
							...e,
							subredditName: s
						}))
					}
				}
				render() {
					const {
						subredditName: e
					} = this.props;
					return r.a.createElement(c.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const j = Object(b.c)(O),
				v = Object(a.c)({
					isFeatureFlagEnabled: f.b,
					isUserInTreatment: f.e,
					userVariant: f.a
				}),
				g = Object(o.b)(v),
				y = e => {
					let {
						isFeatureFlagEnabled: t,
						isUserInTreatment: s,
						subredditName: n,
						userVariant: o,
						rtJsonElementProps: a
					} = e;
					if (!s || !t) return r.a.createElement(j, {
						subredditName: n,
						rtJsonElementProps: a
					});
					switch (o) {
						case h.Qf.SmIcon:
							return r.a.createElement(p, {
								subredditName: n,
								rtJsonElementProps: a
							});
						case h.Qf.SmIconHc:
							return r.a.createElement(p, {
								subredditName: n,
								isHoverable: !0,
								rtJsonElementProps: a
							});
						default:
							return r.a.createElement(j, {
								subredditName: n,
								rtJsonElementProps: a
							})
					}
				};
			t.b = g(y)
		},
		"./src/reddit/components/ViewReportsDropdown/Loader.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-ViewReportsDropdown-index",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-ViewReportsDropdown-index").then(s.bind(null, "./src/reddit/components/ViewReportsDropdown/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ViewReportsDropdown/index.tsx"
				}
			})
		},
		"./src/reddit/constants/componentTestIds.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "e", (function() {
				return c
			}));
			const n = "comment",
				r = "comment-submission-form-markdown",
				o = "comment-submission-form-richtext",
				a = "comments-page-link-num-comments",
				c = "post-content"
		},
		"./src/reddit/controls/CheckboxMenuItem/index.m.less": function(e, t, s) {
			e.exports = {
				checkboxIcon: "_3Ebr0mkLD0A7HiowzExNW-",
				checkboxMenuItem: "_2eawLPCtwzvTZhWKtaUgZQ",
				expandRight: "_34Odk7t6y-rCPxPcYJa4Nw",
				postCheckboxMenuItem: "_3LyKu57c-QkPvlFvAgWop5"
			}
		},
		"./src/reddit/controls/CheckboxMenuItem/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/index.tsx"),
				c = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				i = s("./src/reddit/controls/CheckboxMenuItem/index.m.less"),
				d = s.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const u = e => r.a.createElement("div", {
					className: Object(o.a)(d.a.checkboxMenuItem, e.className),
					onClick: e.onClick
				}, r.a.createElement(c.a, {
					className: d.a.expandRight
				}, r.a.createElement(a.a, {
					name: "checkbox",
					isFilled: e.isSelected,
					className: d.a.checkboxIcon
				}), e.text)),
				m = e => {
					let {
						className: t,
						...s
					} = e;
					return r.a.createElement(u, l({
						className: Object(o.a)(d.a.postCheckboxMenuItem, t)
					}, s))
				}
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return v
			})), s.d(t, "c", (function() {
				return g
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/uniqueId.js"),
				o = s.n(r),
				a = s("./node_modules/raf/index.js"),
				c = s.n(a),
				i = s("./node_modules/react/index.js"),
				d = s.n(i),
				l = s("./src/lib/classNames/index.ts"),
				u = s("./src/higherOrderComponents/asModal/index.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/layout/row/Inline/index.tsx"),
				b = s("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				h = s.n(b);
			var x = Object(u.a)(e => {
					const {
						children: t,
						title: s
					} = e;
					return d.a.createElement("div", {
						className: h.a.wrapper
					}, d.a.createElement(p.a, {
						className: h.a.titleRow
					}, s), d.a.createElement("div", {
						className: h.a.detailsContainer
					}, t), d.a.createElement(p.a, {
						className: h.a.buttonRow
					}, d.a.createElement(m.l, {
						className: h.a.confirmButton,
						onClick: e.onConfirmed
					}, n.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				f = s("./src/reddit/controls/ErrorText/index.m.less"),
				O = s.n(f);
			class j extends d.a.Component {
				constructor(e) {
					super(e), this.spanRef = d.a.createRef(), this.toggleModal = () => {
						this.setState({
							isModalOpen: !this.state.isModalOpen
						})
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${o()()}`,
						isModalOpen: !1
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					c()(() => {
						const e = this.spanRef.current;
						if (!e) return;
						const t = e.scrollWidth > e.clientWidth;
						this.setState(e => e.textHasOverflowed !== t ? {
							textHasOverflowed: t
						} : null)
					})
				}
				render() {
					const {
						children: e,
						className: t,
						errorModalBody: s,
						errorModalTitle: r = n.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: o = n.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: a,
						isModalOpen: c
					} = this.state;
					return d.a.createElement("div", {
						className: Object(l.a)(O.a.wrapper, t)
					}, d.a.createElement("span", {
						className: O.a.description,
						ref: this.spanRef
					}, e), a && d.a.createElement("span", {
						className: O.a.moreText,
						onClick: this.toggleModal
					}, o), c && d.a.createElement(x, {
						onConfirmed: this.toggleModal,
						title: r
					}, s || e))
				}
			}
			const v = e => {
					const {
						className: t,
						errorClassName: s,
						errorModalTitle: n,
						fallbackMessage: r,
						messages: o = []
					} = e, a = o.length ? o : r ? [r] : [];
					return a.length ? d.a.createElement("div", {
						className: t
					}, a.map((e, t) => d.a.createElement(j, {
						className: s,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				g = e => d.a.createElement(v, {
					fallbackMessage: n.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = j
		},
		"./src/reddit/helpers/hasModPostPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.posts
		},
		"./src/reddit/helpers/isRemoved.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e.bannedBy && !e.isSpam
		},
		"./src/reddit/helpers/modTooltipTemplates/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "d", (function() {
				return i
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/humanizeUTCDate/index.tsx");
			const o = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? n.fbt._("Approved by {username} at {time}", [n.fbt._param("username", e.approvedBy), n.fbt._param("time", Object(r.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : n.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				a = e => {
					let t = e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? n.fbt._("Removed by {username} at {time}", [n.fbt._param("username", e.bannedBy), n.fbt._param("time", Object(r.a)(e.bannedAtUTC))], {
						hk: "2Ey569"
					}) : n.fbt._("Removed", null, {
						hk: "238xK9"
					});
					return e.modReasonBy && e.modRemovalReason && (t = t + "\n" + n.fbt._("Reason by {username}:", [n.fbt._param("username", `u/${e.bannedBy}`)], {
						hk: "3qLdNZ"
					}) + e.modRemovalReason), e.modNote && (t = t + "\n" + n.fbt._("Note:", null, {
						hk: "2LD4vO"
					}) + e.modNote), t
				},
				c = e => n.fbt._({
					"*": "{number} Reports",
					_1: "1 Report"
				}, [n.fbt._plural(e, "number")], {
					hk: "3S0yx6"
				}),
				i = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? n.fbt._("Removed as spam by {username} at {time}", [n.fbt._param("username", e.bannedBy), n.fbt._param("time", Object(r.a)(e.bannedAtUTC))], {
					hk: "2uutjk"
				}) : n.fbt._("Removed as spam", null, {
					hk: "1hD9G0"
				})
		},
		"./src/reddit/helpers/search/searchResultsTabTo.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return c
			}));
			var n = s("./src/lib/addQueryParams/index.ts"),
				r = s("./src/reddit/constants/history.ts"),
				o = s("./src/reddit/helpers/history/index.ts");
			const a = "/search/",
				c = e => {
					let {
						searchType: t,
						pageLayer: s
					} = e;
					var c;
					const {
						type: i,
						...d
					} = (null == s ? void 0 : s.queryParams) || {}, l = {
						...d,
						type: t
					};
					return {
						pathname: (null === (c = null == s ? void 0 : s.routeMatch) || void 0 === c ? void 0 : c.match.url) || a,
						search: Object(n.a)("", {
							...l
						}),
						state: {
							[r.b.SearchOriginPage]: Object(o.b)(r.b.SearchOriginPage)
						}
					}
				}
		},
		"./src/reddit/helpers/search/searchTabType.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/constants/page.ts");
			const o = (e, t) => e.includes(n.gc.Comments) ? r.h.Comments : t || e.includes(n.gc.Posts) ? r.h.Posts : e.includes(n.gc.Users) && !e.includes(n.gc.Subreddits) ? r.h.People : r.h.Listings
		},
		"./src/reddit/helpers/search/switchSearchScope.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/lib/addQueryParams/index.ts"),
				r = s("./src/reddit/constants/parameters.ts");

			function o(e, t) {
				let s = "/search/",
					o = "",
					a = e && e[r.p] || "";
				return t ? (a = a.replace("flair:", "flair_name:"), s = `/r/${t}/search`, o = "1", Object(n.a)(s, {
					[r.p]: a,
					[r.s]: o
				})) : (a = a.replace("flair_name:", "flair:"), Object(n.a)(s, {
					[r.p]: a
				}))
			}
		},
		"./src/reddit/helpers/showReportIndicator/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !e.ignoreReports && (e.numReports || 0) > 0
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "a", (function() {
				return x
			})), s.d(t, "d", (function() {
				return f
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				o = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				a = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				c = s("./src/reddit/models/Theme/index.ts"),
				i = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(d);
			const u = {},
				m = e => Object(c.g)(Object(i.a)(e).post, Object(i.a)(e).backgroundImage, Object(i.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(c.g)(e.postBackgroundColor || Object(i.a)(t).post, e.postBackgroundImage, Object(i.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(c.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: m(t)
					}
				},
				b = e => Object(n.k)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				x = e => e.isActive ? l.a.mIsActive : void 0,
				f = e => {
					const t = Object(o.a)(Object(r.a)(e), a.a.actionIcon, a.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/getRichTextSourceElement.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./src/reddit/contexts/PageLayer/index.tsx"),
				r = s("./src/reddit/helpers/isComment.ts"),
				o = s("./src/reddit/helpers/isPost.ts"),
				a = s("./src/telemetry/models/Outbound.ts");
			const c = e => {
				let {
					renderingObjectInfo: t,
					pageLayer: s
				} = e;
				if (t && (Object(r.b)(t) || Object(o.b)(t))) return Object(r.b)(t) ? a.SourceElement.Comment : Object(n.x)(s) ? a.SourceElement.PostDetail : Object(n.H)(s) ? a.SourceElement.ListingPostDetail : void 0
			}
		},
		"./src/reddit/helpers/trackers/postCollection.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "h", (function() {
				return d
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "o", (function() {
				return u
			})), s.d(t, "f", (function() {
				return p
			})), s.d(t, "e", (function() {
				return b
			})), s.d(t, "n", (function() {
				return h
			})), s.d(t, "m", (function() {
				return x
			})), s.d(t, "b", (function() {
				return O
			})), s.d(t, "p", (function() {
				return j
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "j", (function() {
				return g
			})), s.d(t, "q", (function() {
				return y
			})), s.d(t, "k", (function() {
				return E
			})), s.d(t, "l", (function() {
				return C
			})), s.d(t, "i", (function() {
				return _
			})), s.d(t, "d", (function() {
				return S
			}));
			var n, r, o = s("./src/reddit/constants/tracking.ts"),
				a = s("./src/reddit/helpers/trackers/postEvent.ts"),
				c = s("./src/reddit/selectors/platform.ts"),
				i = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.collection = "collection", e.collectionComposer = "collection_composer", e.postComposer = "post_composer", e.postOverflowMenu = "post_overflow_menu"
			}(n || (n = {})),
			function(e) {
				e.post = "post", e.follow = "follow", e.unfollow = "unfollow", e.screen = "screen", e.eventEducation = "event_education", e.eventEducationGotIt = "event_education_got_it", e.collectionEducation = "collection_education", e.collectionEducationGotIt = "collection_education_got_it", e.collectionCancel = "cancel", e.collectionCreate = "collection_create", e.collectionSelect = "collection_select", e.collectionDelete = "collection_delete", e.collectionEdit = "collection_edit", e.collectionAddPost = "collection_add_post", e.collectionRemovePost = "remove_post_from_collection", e.startEvent = "start_event"
			}(r || (r = {}));
			const d = e => t => ({
					source: n.collection,
					noun: r.post,
					...m(t, e)
				}),
				l = e => {
					let {
						postId: t,
						isFollowed: s
					} = e;
					return e => ({
						source: n.collection,
						noun: s ? r.unfollow : r.follow,
						...m(e, t)
					})
				},
				u = e => {
					let {
						postId: t,
						isFollowed: s
					} = e;
					return e => ({
						source: a.a.postEvent,
						noun: s ? r.unfollow : r.follow,
						...m(e, t)
					})
				},
				m = (e, t) => {
					const s = {
						...i.o(e),
						action: o.c.CLICK,
						subreddit: i.jb(e)
					};
					return void 0 === t ? s : {
						...s,
						post: i.K(e, t),
						postCollection: i.M(e, {
							postId: t
						}),
						postEvent: i.N(e, {
							postId: t
						})
					}
				},
				p = e => ({
					...f(e),
					action: o.c.VIEW,
					noun: r.collectionEducation
				}),
				b = e => ({
					...f(e),
					action: o.c.CLICK,
					noun: r.collectionEducationGotIt
				}),
				h = e => ({
					...f(e),
					action: o.c.VIEW,
					noun: r.eventEducation
				}),
				x = e => ({
					...f(e),
					action: o.c.CLICK,
					noun: r.eventEducationGotIt
				}),
				f = e => ({
					...i.o(e),
					subreddit: i.jb(e),
					source: n.postComposer
				}),
				O = (e, t) => s => ({
					...m(s, e),
					source: t || n.postOverflowMenu,
					noun: r.collectionAddPost
				}),
				j = e => t => ({
					...m(t, e),
					source: n.collectionComposer,
					noun: r.collectionRemovePost
				}),
				v = () => e => ({
					...m(e),
					source: n.collectionComposer,
					noun: r.collectionCancel
				}),
				g = () => e => {
					const t = Object(c.o)(e) || void 0;
					return {
						...m(e, t),
						source: n.collectionComposer,
						noun: r.collectionCreate
					}
				},
				y = () => e => ({
					...m(e),
					source: n.collectionComposer,
					noun: r.collectionSelect
				}),
				E = e => t => ({
					...i.o(t),
					subreddit: i.jb(t),
					source: n.collectionComposer,
					action: o.c.CLICK,
					noun: r.collectionDelete,
					postCollection: i.L(t, {
						collectionId: e
					})
				}),
				C = e => t => ({
					...m(t),
					source: n.collectionComposer,
					noun: r.collectionEdit,
					postCollection: i.L(t, {
						collectionId: e
					})
				}),
				_ = e => t => ({
					...m(t, e),
					source: n.collectionComposer,
					noun: r.startEvent
				}),
				S = () => e => {
					const t = Object(c.o)(e) || void 0;
					return {
						...m(e, t),
						source: n.collectionComposer,
						action: o.c.VIEW,
						noun: r.screen
					}
				}
		},
		"./src/reddit/helpers/trackers/postEvent.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "f", (function() {
				return b
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "d", (function() {
				return j
			}));
			var n, r = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/eventTools/index.ts"),
				a = s("./src/lib/timezone/index.ts"),
				c = s("./src/reddit/constants/tracking.ts"),
				i = s("./src/reddit/models/PostCreationForm/index.ts"),
				d = s("./src/reddit/selectors/platform.ts"),
				l = s("./src/reddit/selectors/postCreations.ts"),
				u = s("./src/reddit/selectors/telemetry.ts"),
				m = s("./src/telemetry/index.ts");
			! function(e) {
				e.postEvent = "post_event", e.postComposer = "post_composer", e.eventComposer = "event_composer"
			}(n || (n = {}));
			const p = e => u.d(e, {
					pageType: "event_submit"
				}),
				b = e => {
					Object(m.a)({
						...u.o(e),
						source: n.postComposer,
						action: c.c.CLICK,
						noun: "event_create",
						subreddit: u.jb(e)
					})
				},
				h = e => {
					Object(m.a)({
						...u.o(e),
						source: n.postComposer,
						action: c.c.CLICK,
						noun: "event_edit",
						subreddit: u.jb(e),
						postEvent: v(e),
						postComposer: g(e)
					})
				},
				x = () => e => ({
					source: n.eventComposer,
					action: c.c.VIEW,
					noun: c.b.SCREEN,
					actionInfo: p(e),
					postEvent: v(e)
				}),
				f = e => t => ({
					...C(t, Object(d.o)(t)),
					source: n.postComposer,
					noun: "apply",
					postComposer: y(e)
				}),
				O = () => e => ({
					...C(e, Object(d.o)(e)),
					noun: "cancel",
					actionInfo: p(e)
				}),
				j = e => t => ({
					...C(t, Object(d.o)(t)),
					noun: "delete",
					actionInfo: p(t),
					postComposer: g(t),
					postEvent: E(e)
				}),
				v = e => {
					const t = Object(l.p)(e);
					return t && E(t)
				},
				g = e => y(Object(l.p)(e)),
				y = e => {
					return {
						postScheduled: !!e,
						submitScheduledTime: e && e.submitTime === i.j.AtEventTime ? Object(a.f)(e.startDate).getTime() / r.Vb : void 0
					}
				},
				E = e => {
					const t = Object(a.f)(e.startDate).getTime() / r.Vb,
						s = Object(a.f)(e.endDate).getTime() / r.Vb;
					return {
						eventStartTimestamp: t,
						eventEndTimestamp: s,
						eventState: Object(o.e)(t, s)
					}
				},
				C = (e, t) => {
					const s = {
						source: n.eventComposer,
						action: c.c.CLICK,
						subreddit: u.jb(e)
					};
					return t ? {
						...s,
						post: u.K(e, t),
						postEvent: u.N(e, {
							postId: t
						}),
						postCollection: u.M(e, {
							postId: t
						})
					} : s
				}
		},
		"./src/reddit/helpers/trackers/shareToChat.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const o = () => e => ({
				...Object(r.o)(e),
				source: "post",
				action: n.c.CLICK,
				noun: "share_chat",
				subreddit: Object(r.jb)(e)
			})
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			})), s.d(t, "f", (function() {
				return f
			})), s.d(t, "g", (function() {
				return O
			})), s.d(t, "b", (function() {
				return j
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "d", (function() {
				return g
			})), s.d(t, "e", (function() {
				return y
			}));
			var n, r, o = s("./src/reddit/constants/tracking.ts"),
				a = s("./src/reddit/helpers/isComment.ts"),
				c = s("./src/reddit/helpers/isPost.ts"),
				i = s("./src/reddit/helpers/trackers/getRichTextSourceElement.ts"),
				d = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = s("./src/reddit/selectors/subreddit.ts"),
				u = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(n || (n = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(r || (r = {}));
			const m = e => ({
					...u.o(e),
					source: r.LINK,
					action: o.c.CLICK,
					noun: n.INTERNAL_LINK
				}),
				p = e => ({
					...u.o(e),
					source: r,
					screen: u.bb(e),
					discoveryUnit: {
						id: "xd_100",
						name: n.SUBREDDIT_HOVERCARD,
						type: d.e.Listing,
						title: n.SUBREDDIT_HOVERCARD
					}
				}),
				b = (e, t) => {
					const {
						renderingObjectInfo: s,
						subredditName: n
					} = t;
					if (!s || !Object(c.b)(s) && !Object(a.b)(s)) return {
						outbound: void 0
					};
					const r = Object(c.b)(s) ? "postId" : "commentId",
						o = {
							url: `/r/${n}/`,
							sourceElement: Object(i.a)(t),
							subredditName: n,
							[r]: s.id
						},
						d = Object(l.A)(e, {
							subredditName: n
						});
					return d ? {
						outbound: {
							...o,
							url: d.url,
							subredditId: d.id
						}
					} : {
						outbound: {
							...o
						}
					}
				},
				h = (e, t) => {
					const {
						renderingObjectInfo: s
					} = t;
					if (!s || !Object(c.b)(s) && !Object(a.b)(s)) return {};
					const n = Object(c.b)(s) ? s.belongsTo.id : s.subredditId;
					return {
						post: u.K(e, s.id),
						subreddit: u.kb(e, n),
						...b(e, t)
					}
				},
				x = e => t => ({
					...m(t),
					...h(t, e)
				}),
				f = e => t => ({
					...p(t),
					source: "global",
					action: o.c.VIEW,
					noun: n.SUBREDDIT_HOVERCARD,
					subreddit: u.lb(t, e),
					screen: u.bb(t)
				}),
				O = (e, t) => s => ({
					...p(s),
					source: r.DISCOVERY_UNIT,
					action: o.c.VIEW,
					noun: n.ITEM_POST,
					post: u.K(s, t),
					subreddit: u.lb(s, e),
					screen: u.bb(s)
				}),
				j = (e, t) => s => ({
					...p(s),
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.ITEM_POST,
					post: u.K(s, t),
					subreddit: u.lb(s, e),
					screen: u.bb(s)
				}),
				v = e => t => ({
					...p(t),
					subreddit: u.kb(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.HEADER_SUBREDDIT
				}),
				g = e => t => ({
					...p(t),
					subreddit: u.kb(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				y = e => t => ({
					...p(t),
					subreddit: u.kb(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = s.n(c);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("approve", e.isFilled), i.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Comment/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = s.n(c);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					className: t,
					...s
				} = e;
				return r.a.createElement("i", d({
					className: Object(o.a)(Object(a.b)("comment", s.isFilled), i.a.commentIcon, t)
				}, s))
			}
		},
		"./src/reddit/icons/fonts/Gift/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/index.tsx");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement(o.a, a({
				name: "award"
			}, e))
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = s.n(c);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("lock", e.isFilled), i.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/ModActions/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = s.n(c);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("i", d({}, e, {
				className: Object(o.a)(Object(a.b)("mod", e.isFilled), i.a.modActions, e.className)
			}))
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = s.n(c);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("remove", e.isFilled), i.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = s.n(c);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("report", e.isFilled), i.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = s.n(c);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("spam", e.isFilled), i.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Tag/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(o.b)("tag",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, s) {},
		"./src/reddit/icons/svgs/Crosspost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("path", {
				d: "M9.06,8.64c1.12-1.26,2.2-2.45,4.44-2.6V7.5a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74L15.18,1.7a1,1,0,0,0-1.68.74V4c-3.14.17-4.69,1.88-5.93,3.28C6.58,8.42,6,9,5,9H2a1,1,0,0,0,0,2H5C6.93,11,8,9.82,9.06,8.64Z"
			}), r.a.createElement("path", {
				d: "M15.18,11.76a1,1,0,0,0-1.68.74V14c-2.23-.16-3.29-1.32-4.39-2.56-.21-.24-.43-.48-.66-.72a5.63,5.63,0,0,1-1.77,1.06,13.34,13.34,0,0,1,.94,1A7.85,7.85,0,0,0,13.5,16v1.59a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74Z"
			}))
		},
		"./src/reddit/layout/page/SearchResults/index.m.less": function(e, t, s) {
			e.exports = {
				bodyContainer: "eZLYleuk3b8ykGiskfpo3",
				contentContainer: "_3Up38k81YNBWQoW1ovMU88",
				content: "_2lzCpzHH0OvyFsvuESLurr",
				mainContent: "_1BJGsKulUQfhJyO19XsBph",
				withSidebar: "_3SktesklDBwXt2pEl0sHY8",
				sidebarContent: "_2iRJ8DI-3RTbsXRSDXE5ZG"
			}
		},
		"./src/reddit/layout/page/SearchResults/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/StructuredStyles/BladeManager/index.tsx"),
				c = s("./src/reddit/constants/elementClassNames.ts"),
				i = s("./src/reddit/contexts/NavbarExp.ts"),
				d = s("./src/reddit/layout/page/Listing/BackgroundContainer.tsx"),
				l = s("./src/reddit/layout/page/Listing/index.m.less"),
				u = s.n(l),
				m = s("./src/reddit/layout/page/SearchResults/index.m.less"),
				p = s.n(m);
			t.a = e => {
				let {
					backgroundColor: t,
					className: s,
					containerRef: l,
					content: m,
					navBar: b,
					redditStyle: h,
					sidebar: x,
					subredditId: f
				} = e;
				const O = Object(n.useContext)(i.a),
					j = Boolean(x);
				return r.a.createElement(a.a, {
					subredditId: f
				}, r.a.createElement("div", {
					className: Object(o.a)(u.a.outerContainer, c.i, s, {
						[u.a.outerContainerExp]: O
					}),
					ref: l
				}, r.a.createElement(d.a, {
					className: c.h,
					redditStyle: h,
					backgroundColor: t
				}), r.a.createElement("div", {
					className: u.a.innerContainer
				}, r.a.createElement("div", {
					className: p.a.bodyContainer
				}, r.a.createElement("div", {
					className: p.a.contentContainer
				}, r.a.createElement("div", {
					className: p.a.navContent
				}, b), r.a.createElement("div", {
					className: Object(o.a)(p.a.content, j && p.a.withSidebar)
				}, r.a.createElement("div", {
					className: Object(o.a)(p.a.mainContent, j && p.a.withSidebar)
				}, m), j && r.a.createElement("div", {
					className: p.a.sidebarContent
				}, x)))))))
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, s) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				i = s.n(c);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(o.a)(e => {
				const {
					className: t,
					children: s,
					heightLeft: n,
					widthLeft: o,
					gutter: c,
					...l
				} = e;
				return r.a.createElement("div", d({
					className: Object(a.a)(i.a.expandRightContainer, t)
				}, l), r.a.createElement("div", {
					className: i.a.left,
					style: {
						flexBasis: o,
						height: n,
						marginRight: c
					}
				}, Array.isArray(s) && s[0]), r.a.createElement("div", {
					className: i.a.right
				}, Array.isArray(s) && s[1]))
			}, 2)
		},
		"./src/reddit/pages/SearchResults/index.m.less": function(e, t, s) {
			e.exports = {
				sidebar: "_35ky2Wm3TP6kFdIh-DOxmA",
				announcement: "_38miRaQjZDUy2B55AHWYlg",
				searchSwitcherContainer: "_79QamRjUfUQIFHxCnTvSZ"
			}
		},
		"./src/reddit/pages/SearchResults/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "pageConfig", (function() {
				return z
			})), s.d(t, "default", (function() {
				return X
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/lodash/pick.js"),
				o = s.n(r),
				a = s("./node_modules/react/index.js"),
				c = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/hooks/usePrevious.ts"),
				u = s("./src/lib/makeSearchKey/index.ts"),
				m = s("./node_modules/lodash/isEqual.js"),
				p = s.n(m),
				b = s("./src/reddit/actions/searchQueryId/index.tsx"),
				h = s("./src/reddit/actions/survey/index.ts"),
				x = s("./src/reddit/components/JumpToContent/index.tsx"),
				f = s("./src/reddit/components/SearchResultsContent/index.tsx"),
				O = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/selectors.ts"),
				j = s("./src/reddit/components/SearchResultsNav/index.tsx"),
				v = s("./src/reddit/components/SearchResultsSidebar/index.tsx"),
				g = s("./src/reddit/components/SearchResultsSubNav/index.tsx"),
				y = s("./src/reddit/components/SearchSwitcher/index.tsx"),
				E = s("./src/reddit/components/TrackingHelper/index.tsx"),
				C = s("./src/reddit/constants/covid.ts"),
				_ = s("./src/reddit/constants/page.ts"),
				S = s("./src/reddit/constants/parameters.ts"),
				k = s("./src/reddit/contexts/PageLayer/index.tsx"),
				w = s("./src/reddit/helpers/correlationIdTracker.ts"),
				N = s("./src/reddit/helpers/search/searchImpressionId.ts"),
				T = s("./src/reddit/helpers/search/searchQueryId.ts"),
				I = s("./src/reddit/helpers/search/searchTabType.ts"),
				P = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				R = s("./src/reddit/helpers/search/switchSearchScope.ts"),
				M = s("./src/reddit/helpers/trackers/searchResults.ts"),
				L = s("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				B = s("./src/reddit/hooks/useTheme.ts"),
				F = s("./src/reddit/layout/page/SearchResults/index.tsx"),
				A = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				D = s("./src/reddit/selectors/searchFix.ts"),
				U = s("./src/reddit/selectors/searchQueryId.ts"),
				H = s("./src/reddit/selectors/subreddit.ts"),
				W = s("./node_modules/lodash/isEmpty.js"),
				V = s.n(W),
				G = s("./src/reddit/pages/SearchResults/index.m.less"),
				K = s.n(G);

			function q() {
				return (q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const J = 3e3,
				Y = Object(n.a)({
					resolved: {},
					chunkName: () => "FeaturedLiveEntrypointLegacyAnnouncement",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("FeaturedLiveEntrypointLegacyAnnouncement").then(s.bind(null, "./src/reddit/components/FeaturedLiveEntrypoint/LegacyAnnouncement/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/FeaturedLiveEntrypoint/LegacyAnnouncement/index.tsx"
					}
				}),
				z = {
					[_.h.Listings]: {
						tab: _.h.Listings,
						sidebar: !1,
						filterNav: !1
					},
					[_.h.People]: {
						tab: _.h.People,
						sidebar: !1,
						filterNav: !1
					},
					[_.h.Posts]: {
						tab: _.h.Posts,
						sidebar: !0,
						filterNav: !0
					},
					[_.h.Comments]: {
						tab: _.h.Comments,
						sidebar: !1,
						filterNav: !1
					}
				};

			function X(e) {
				let {
					location: t,
					match: s
				} = e;
				const n = Object(i.d)(),
					r = Object(k.eb)(),
					m = Object(E.b)(),
					W = Object(B.a)(),
					G = Object(a.useRef)(!1),
					X = Object(a.useRef)(!1),
					Z = Object(i.e)(e => Object(H.A)(e, {
						subredditName: s.params.subredditName
					})),
					Q = Object(i.e)(e => Object(O.a)(e, {
						pageLayer: r
					})),
					$ = Object(i.e)(e => Object(D.c)(e, {
						pageLayer: r
					})),
					{
						searchQueryId: ee
					} = Object(i.e)(e => Object(U.a)(e)),
					te = Object(k.X)(r),
					se = Object(k.bb)(r),
					[ne, re] = Object(a.useState)(!1),
					oe = Object(l.a)(te) || null;
				Object(L.c)(), Object(a.useEffect)((function() {
					return () => {
						N.a.clear(P.a.SERP)
					}
				}), []), Object(a.useEffect)(() => {
					let e = 0;
					return e = window.setTimeout(() => n(Object(h.j)()), J), () => {
						Object(w.b)(w.a.SearchResults), window.clearTimeout(e)
					}
				}, []), Object(a.useEffect)(() => {
					te !== oe && (G.current = !1, re(!1)), te && oe && te[S.p] !== oe[S.p] && (Object(w.b)(w.a.SearchResults), Object(w.d)(w.a.SearchResults))
				}, [te, oe]), Object(a.useEffect)(() => {
					const e = {
							...te,
							type: void 0
						},
						t = {
							...oe,
							type: void 0
						};
					!p()(e, t) && !V()(oe) && N.a.update(P.a.SERP)
				}, [te, oe]);
				const ae = s.params.multiredditName,
					ce = s.params.subredditName || ae || "",
					ie = s.params.username,
					de = Object(u.e)(o()(te || {}, S.t)),
					le = Object(u.b)(ce, ie, de);
				ee && (T.a.set(P.a.SERP, le, ee), n(Object(b.c)()));
				const ue = Z && de.restrict_sr,
					me = Object(I.a)(de.type, ue),
					pe = {
						...de,
						type: [d.gc.Posts, d.gc.Subreddits, d.gc.Users]
					},
					be = Object(u.b)(ce, ie, pe),
					he = {
						redesign: !0,
						searchOptions: de
					};
				let xe;
				Object(k.Q)(r) || Object(k.C)(r) ? xe = c.a.createElement(y.a, q({}, he, {
					url: Object(R.a)(te)
				})) : Q && $ && (xe = c.a.createElement(y.a, q({}, he, {
					subreddit: Q,
					url: Object(R.a)(te, Q.name)
				})));
				const fe = z[me].tab,
					Oe = Boolean(ue) || z[me].sidebar && !ae,
					je = z[me].filterNav,
					ve = Object(A.a)({
						redditStyle: !0,
						theme: W
					});
				return Object(a.useEffect)(() => {
					if (fe === _.h.Comments && !X.current) {
						let e = 0;
						return e = window.setTimeout(() => {
							X.current = !0, n(Object(h.i)())
						}, J), () => {
							window.clearTimeout(e)
						}
					}
				}, [fe]), c.a.createElement(F.a, {
					backgroundColor: ve.canvas,
					content: c.a.createElement(c.a.Fragment, null, c.a.createElement(x.a, null), se && !ne && (() => {
						const e = e => m(Object(M.f)(e, Object(u.e)(o()(te || {}, S.t))));
						return G.current || (e("view"), G.current = !0), c.a.createElement(Y, {
							announcement: C.a,
							className: K.a.announcement,
							onBtnClick: () => e("click"),
							onClose: () => {
								e("dismiss"), re(!0)
							}
						})
					})(), c.a.createElement(f.a, {
						listingKey: le,
						listingName: ce,
						location: t,
						searchOptions: de,
						tab: fe
					})),
					navBar: c.a.createElement(c.a.Fragment, null, c.a.createElement(j.a, {
						activeTab: fe,
						searchOptions: de,
						searchSwitcher: xe
					}), je && c.a.createElement(g.a, {
						key: "subNav",
						searchOptions: de,
						shouldHideGlobalSearchLink: !0,
						subredditName: ce,
						tab: fe
					}), xe && c.a.createElement("div", {
						className: K.a.searchSwitcherContainer
					}, xe)),
					sidebar: Oe && c.a.createElement(v.a, {
						className: K.a.sidebar,
						listingKey: be,
						listingName: ce || _.c,
						searchOptions: pe,
						tab: fe
					})
				})
			}
		},
		"./src/reddit/selectors/experiments/reportingRevampDesktop.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/runTimeEnvVars.ts"),
				a = s("./src/reddit/selectors/user.ts");
			const c = e => !!Object(o.b)(e) || Object(r.c)(e, {
				experimentEligibilitySelector: a.Q,
				experimentName: n.n
			}) === n.g.Enabled
		},
		"./src/reddit/selectors/experiments/searchSubDiscovery.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./node_modules/reselect/es/index.js");
			const a = Object(o.a)(e => Object(r.c)(e, {
				experimentEligibilitySelector: r.a,
				experimentName: n.Af
			}), e => ({
				isSubEnlarged: e === n.Of.Variant1 || e === n.Of.Variant3,
				withCommunityDescription: e === n.Of.Variant2 || e === n.Of.Variant3
			}))
		},
		"./src/reddit/selectors/experiments/web2x_cta.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts");
			const a = Object(n.a)(e => Object(o.c)(e, {
					experimentName: r.fg,
					experimentEligibilitySelector: o.a
				}), e => e),
				c = Object(n.a)(a, e => e === r.Wf)
		},
		"./src/reddit/selectors/searchQueryId.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = e => e.searchQueryId
		},
		"./src/reddit/selectors/subredditMention.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return c
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "f", (function() {
				return m
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/featureFlags/index.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				a = s("./src/reddit/selectors/subreddit.ts");
			const c = e => r.d.subredditMentionD2xExperiment(e),
				i = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: c,
						experimentName: n.Jf
					}) || ""
				},
				d = e => {
					const t = i(e);
					return t === n.Qf.SmIcon || t === n.Qf.SmIconHc
				},
				l = (e, t) => {
					let {
						subredditName: s
					} = t;
					return !!e.subreddits.api.models.pending[s]
				},
				u = (e, t) => {
					let {
						subredditName: s
					} = t;
					return !!e.subreddits.api.models.error[s]
				},
				m = (e, t) => {
					let {
						subredditName: s
					} = t;
					const n = Object(a.ab)(e, {
						subredditName: s
					});
					return (n && n.postIds || []).slice(0, 2)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SearchResults.d362eb9fc0213842e1ee.js.map