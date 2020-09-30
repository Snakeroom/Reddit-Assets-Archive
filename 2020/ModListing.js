// https://www.redditstatic.com/desktop2x/ModListing.ac594cd493363624d153.js
// Retrieved at 9/30/2020, 6:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModListing"], {
		"./src/reddit/components/EmptySubreddit.m.less": function(e, t, s) {
			e.exports = {
				PrimaryText: "_11KlaBYJq9fbo0p9We9Q-X",
				primaryText: "_11KlaBYJq9fbo0p9We9Q-X",
				SecondaryText: "_1mDuZKKi5R1yARCN4kbfb8",
				secondaryText: "_1mDuZKKi5R1yARCN4kbfb8",
				MainContentWrapper: "_3rhMc0U_KMJO_5-yIKPke3",
				mainContentWrapper: "_3rhMc0U_KMJO_5-yIKPke3",
				MainContent: "_3Tl09Mc2pqGPdIu3beZW4b",
				mainContent: "_3Tl09Mc2pqGPdIu3beZW4b",
				BackgroundPlaceholder: "_3-P94khWh-8LNZgpznmZm5",
				backgroundPlaceholder: "_3-P94khWh-8LNZgpznmZm5",
				SubmitLink: "_2lrHxBsyZpA36hEKC_alta",
				submitLink: "_2lrHxBsyZpA36hEKC_alta",
				SnooImg: "_3-gJfiulV3xKAI7pwX0Cq-",
				snooImg: "_3-gJfiulV3xKAI7pwX0Cq-",
				Component: "_2_C857z2MF49YnHj6VQteT",
				component: "_2_C857z2MF49YnHj6VQteT",
				EmptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg",
				emptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg"
			}
		},
		"./src/reddit/components/EmptySubreddit.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/upperFirst.js"),
				i = s.n(n),
				o = s("./node_modules/react/index.js"),
				d = s.n(o),
				a = s("./src/config.ts"),
				l = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/isFakeSubreddit/index.ts"),
				u = s("./src/reddit/constants/postLayout.ts"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/components/PostList/Placeholder.tsx"),
				p = s("./src/reddit/components/EmptySubreddit.m.less"),
				h = s.n(p),
				x = s("./src/lib/lessComponent.tsx");
			const g = x.a.div("PrimaryText", h.a),
				f = x.a.div("SecondaryText", h.a),
				_ = x.a.div("MainContentWrapper", h.a),
				E = x.a.div("MainContent", h.a),
				S = x.a.wrapped(b.a, "BackgroundPlaceholder", h.a),
				O = x.a.wrapped(m.k, "SubmitLink", h.a),
				y = x.a.img("SnooImg", h.a),
				C = x.a.div("EmptyHomepage", h.a),
				P = e => {
					switch (e) {
						case l.O.RISING:
							return r.fbt._("Create a new post and take all the glory", null, {
								hk: "1NhXUe"
							});
						case l.O.TOP:
						case l.O.CONTROVERSIAL:
							return null;
						default:
							return r.fbt._("Be the first to till this fertile land.", null, {
								hk: "VYQD0"
							})
					}
				},
				M = e => {
					let {
						listingName: t,
						sort: s
					} = e;
					const n = P(s);
					return d.a.createElement(E, null, d.a.createElement(g, null, (e => {
						switch (e) {
							case l.O.RISING:
								return r.fbt._("Looks like nothing is rising fast enough in this subreddit", null, {
									hk: "kJ3Te"
								});
							case l.O.TOP:
							case l.O.CONTROVERSIAL:
								return r.fbt._("No posts were found using the {listing sort option} sort. Try changing the sort.", [r.fbt._param("listing sort option", i()(e))], {
									hk: "48BeCW"
								});
							default:
								return r.fbt._("There are no posts in this subreddit", null, {
									hk: "5mVkT"
								})
						}
					})(s)), t && !Object(c.a)(t) && !!n && d.a.createElement(d.a.Fragment, null, d.a.createElement(f, null, P(s)), d.a.createElement(O, {
						to: "/r/".concat(t, "/submit")
					}, r.fbt._("Add a post", null, {
						hk: "1vnCSW"
					}))))
				},
				j = () => d.a.createElement(E, null, d.a.createElement(y, {
					src: "".concat(a.a.assetPath, "/img/snoo_discovery@1x.png")
				}), d.a.createElement(g, null, r.fbt._("Reddit gets better when you join communities, so find some that you’ll love!", null, {
					hk: "7B6oq"
				})), d.a.createElement(O, {
					to: "/r/popular"
				}, r.fbt._("Browse Popular Posts", null, {
					hk: "2zfgXv"
				})));
			t.a = x.a.wrapped(e => d.a.createElement(C, null, d.a.createElement(S, {
				isLoading: !1,
				layout: u.g.Classic
			}), d.a.createElement(_, null, e.subreddit ? d.a.createElement(M, e) : d.a.createElement(j, null))), "Component", h.a)
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/reddit/components/PostList/index.tsx"),
				n = s("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(n.a)(r.a)
		},
		"./src/reddit/components/ModHub/Content/NoPermissions.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/config.ts"),
				n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				d = s("./src/reddit/components/ModHub/Content/index.m.less"),
				a = s.n(d);
			t.a = e => o.a.createElement("div", {
				className: a.a.noPermissions
			}, o.a.createElement("img", {
				className: a.a.rememberTheHuman,
				src: "".concat(r.a.assetPath, "/img/content-gate-icons/remember-the-human.png")
			}), e.isModerator ? n.fbt._("Sorry, you do not have the moderator permissions needed to view this page", null, {
				hk: "4wUDIF"
			}) : n.fbt._("Sorry, this is a moderator-only page", null, {
				hk: "2BZEIA"
			}), o.a.createElement("div", {
				className: a.a.noPermissionsSmallText
			}, e.isModerator ? n.fbt._("You need to change your mod permissions to view this page", null, {
				hk: "RS9sd"
			}) : e.subredditDisplayText ? n.fbt._("You must be a moderator of {subredditName} to view this page", [n.fbt._param("subredditName", e.subredditDisplayText)], {
				hk: "8eU68"
			}) : n.fbt._("You must be a moderator to view this page", null, {
				hk: "2N7TXH"
			})))
		},
		"./src/reddit/components/ModHub/Content/index.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "CgYEK3BSwEitV3N5dS53Y",
				titleFontH2: "WtxSi4x3A6EHSYOlNO6dC",
				titleFontH3: "_1s8gRCw9ZEGeZdDLi4SjEs",
				titleFontH4: "iJgEN-DVO9xH1ING9PGia",
				titleFontH5: "_1Pk2HmstIcHsVCyXL0s7WR",
				titleFontH6: "_27G51xRMOXRk6p8hF2iFF4",
				metadataFont: "_3qFnOmsyfNVU4dOg-nT7AH",
				flairFont: "IHVtmv3d9vjFTy7sOv4nb",
				labelsFont: "_3veeqeCCuB-y_5Uz7aZwNo",
				actionFont: "_2GGs_1qJNsgRTBkJjB3JyV",
				smallButtonFont: "_1wMkSw4TKFwpURuJjoijc8",
				largeButtonFont: "_37n4mei_IKI2b0S9cUN6kj",
				tabFont: "_2uzD_ZiaRuda1gPntdeFV-",
				strongTextFont: "_3iiIycx9Jvd-wtbZRRlyrS",
				buttonFontXS: "X1zM6CuE0STTL567u2KEr",
				buttonFontXs: "X1zM6CuE0STTL567u2KEr",
				buttonFontS: "_35xxostuR-t_KnCQpTxb0F",
				buttonFontM: "_1siVd6fOXNWDs8SbSH_HQ5",
				buttonFontL: "_1mAbhFs88EE9k-jaJMzlbM",
				buttonFontXL: "FxQ8KBPxEROiwB1EG0sLr",
				buttonFontXl: "FxQ8KBPxEROiwB1EG0sLr",
				bodyFontH1: "_18F7ywSczMXfDxvUzIkKou",
				bodyFontH2: "_2gpSS7qXgM9-crN9KgQr_O",
				bodyFontH3: "-JM-6-h-SOMTCi9a5ZG0g",
				bodyFontH4: "_3ZVYgWzZxJjL_cahDG32l",
				bodyFontH5: "_15iJEJUM-il2Ud09a9yqhY",
				bodyFontH6: "_2kFIrTxjdWaprwQ9leev5x",
				bodyFont: "_38q9ZzND20FKMoX8BeB0u8",
				bodyFontSmall: "_1tFfFAHeLftmld2a2M4yIs",
				bodyFontMono: "_1N1SJCd40K_9LeW3MSWULf",
				rememberTheHuman: "_2S6IM2TPtTriI4r_2Op1Od",
				noPermissions: "_3jaCG74Q3u55JqGJy3u664",
				noPermissionsSmallText: "_1Kxv5kLQoEOhRatEhltXrQ",
				container: "_3gsyCuYXsGWEEgPSTuX9aw",
				isLargePostLayout: "_1WGjuBpIEjcQC-x3_lE_Nu"
			}
		},
		"./src/reddit/components/ModListingSidebar/FeedDetails/index.m.less": function(e, t, s) {
			e.exports = {
				modalMain: "_3TbrCaPQ_Ciq0W4JtRYgHR",
				modIcon: "_3QZVX2_MD7fnyaRbQVH7LG",
				modalBody: "IdgjnohCE075Y2bzY7kGD",
				modalTitle: "_1uJCbZDn510LJ80M7oIUiM",
				modalDescription: "_2txvYfpiVxk7MM45Ybezvj",
				feedDetailsHeader: "_1oHK5eWnpY1WTbgUlHAPGn",
				feedDetailsTitle: "r07hBWYi9sVEcAGnnrnbt",
				feedDetailsDescription: "_3od74XOi7ZCYUaElRDtJY4",
				loadingBar: "oMm7a2SmYiOmS3c_HeyVY",
				gradientAnimation: "_2TjoHmGKn7BjeBAEpBRL3T"
			}
		},
		"./src/reddit/components/ModListingSidebar/HideCommunities/HideInput/index.m.less": function(e, t, s) {
			e.exports = {
				input: "_3w9CCp15Dn8xjuhR8VUE5n",
				hideButton: "_34rIurg3vPxO_tswAxt4wf",
				errorText: "dHzfi1tqA9d2uJEemybvK"
			}
		},
		"./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/SubredditsListRow/index.m.less": function(e, t, s) {
			e.exports = {
				row: "_3iC2jdvm0i0Q7HlrFJVoTC",
				iconStyles: "_9A1gbtA8zl5gRftEuuKPP",
				subredditIcon: "_327j3YarD5xmiCuu19J-XN",
				planetIcon: "_3RdGW7gz6XoGZ6oEgqKAVr",
				label: "_36BB5D1byWMjvVdrjUdv2",
				unhideButton: "iV4R5u2BbUz2dioFJNTAz",
				SubredditIcon: "_327j3YarD5xmiCuu19J-XN"
			}
		},
		"./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/index.m.less": function(e, t, s) {
			e.exports = {
				rows: "_1q1k1QSwlFELkqmvELqzPI",
				noRows: "_2bMntgRcO2XGi6Tfep4QfV"
			}
		},
		"./src/reddit/components/ModListingSidebar/HideCommunities/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_25Nja5fbb_ZBbGBf8Bm2jO",
				hideCommunitiesHeader: "_2UuftU5L-0PE5_qTvLLSuB",
				inputContainer: "_16VxD_GKhjj0Mvr4ayqcAO",
				tertiaryButton: "_3KQk5TlvMCuZJm3Xc1Mk6L"
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditOrProfileRow.m.less": function(e, t, s) {
			e.exports = {
				SubredditIcon: "YsExfuojv3MEBi8M0sQGM",
				subredditIcon: "YsExfuojv3MEBi8M0sQGM",
				Label: "-KyE0niKrEy2RqEuYXENt",
				label: "-KyE0niKrEy2RqEuYXENt"
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less": function(e, t, s) {
			e.exports = {
				CommunityCount: "_2FGPtEJLumoHbu-QFFxout",
				communityCount: "_2FGPtEJLumoHbu-QFFxout",
				SubredditsOrProfiles: "cudiOrfzGvVKhNqnO0IQV",
				subredditsOrProfiles: "cudiOrfzGvVKhNqnO0IQV",
				SidebarSubreddit: "FiA5buYZ1_VQqBGMe3x-Y",
				sidebarSubreddit: "FiA5buYZ1_VQqBGMe3x-Y",
				ModalSubreddit: "_1vSC-5fjGLI-J_eqCRICfq",
				modalSubreddit: "_1vSC-5fjGLI-J_eqCRICfq"
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
				o = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				a = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/components/SubredditIcon/index.tsx"),
				u = s("./src/reddit/selectors/subreddit.ts"),
				m = s("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditOrProfileRow.m.less"),
				b = s.n(m),
				p = s("./src/lib/lessComponent.tsx");
			const h = p.a.wrapped(c.b, "SubredditIcon", b.a),
				x = p.a.span("Label", b.a),
				g = Object(l.c)({
					subredditOrProfile: u.M
				});
			var f = Object(a.b)(g)(e => {
				let {
					children: t,
					subredditOrProfile: s
				} = e;
				return t(s, i.a.createElement(i.a.Fragment, null, i.a.createElement(h, {
					subredditOrProfile: s
				}), i.a.createElement(x, null, s.displayText)))
			});
			var _ = e => {
					let {
						children: t,
						className: s,
						subredditsOrProfilesIds: r
					} = e;
					const n = r.map(e => i.a.createElement(f, {
						children: t,
						key: e.id,
						identifier: e
					}));
					return i.a.createElement("div", {
						className: s
					}, n)
				},
				E = s("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less"),
				S = s.n(E);
			const O = p.a.div("CommunityCount", S.a),
				y = p.a.wrapped(_, "SubredditsOrProfiles", S.a),
				C = p.a.wrapped(o.a, "SidebarSubreddit", S.a),
				P = p.a.wrapped(o.a, "ModalSubreddit", S.a);
			var M;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Sidebar = 1] = "Sidebar"
			}(M || (M = {}));
			t.b = e => {
				const {
					isSidebar: t,
					subredditsOrProfilesIds: s,
					onSeeMoreDetails: n,
					subredditCategory: o = {
						name: r.fbt._("multi", null, {
							hk: "28Z7Rp"
						})
					}
				} = e, a = t ? C : P, l = s.length, c = t && s.length > 4;
				return i.a.createElement(i.a.Fragment, null, i.a.createElement(O, null, r.fbt._({
					"*": "There are {number} communities in this {category}",
					_1: "There are 1 community in this {category}"
				}, [r.fbt._plural(l, "number"), r.fbt._param("category", o.name)], {
					hk: "33iWe4"
				})), l > 0 && i.a.createElement(y, {
					subredditsOrProfilesIds: t ? s.slice(0, 4) : s
				}, (t, s) => i.a.createElement(a, {
					key: t.url,
					to: t.url,
					onMouseDown: e.onSubredditClick ? () => e.onSubredditClick(t) : void 0
				}, s)), l > 0 && c && i.a.createElement(d.o, {
					onClick: n
				}, r.fbt._("See more", null, {
					hk: "QYkk2"
				})))
			}
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return O
			})), s.d(t, "d", (function() {
				return C
			})), s.d(t, "b", (function() {
				return M
			}));
			var r = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/objectSelector/index.ts"),
				o = s("./src/reddit/actions/ads/index.ts"),
				d = s("./src/reddit/actions/focusedVerticals/index.ts"),
				a = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/postList.ts"),
				c = s("./src/reddit/actions/survey/index.ts"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				p = s("./src/reddit/helpers/trackers/post.ts"),
				h = s("./src/reddit/components/PostList/Placeholder.tsx"),
				x = s("./src/reddit/featureFlags/index.ts"),
				g = s("./src/reddit/selectors/experiments/survey.ts"),
				f = s("./src/reddit/selectors/listings.ts"),
				_ = s("./src/reddit/selectors/posts.ts"),
				E = s("./src/reddit/selectors/subreddit.ts"),
				S = s("./src/reddit/selectors/tracking.ts");

			function O() {
				return Object(m.t)({
					currentProfileName: m.h,
					isCommentPermalink: m.v,
					isCommentsPage: m.w,
					isFrontpage: m.y,
					isProfilePostListing: m.I,
					isTopicPage: m.M,
					pageLayer: e => e
				})
			}
			const y = O(),
				C = {
					apiError: f.c,
					apiPending: f.d,
					measureScrollFPS: x.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(m.N)(e, t),
					loadMore: f.g,
					postsById: _.Y,
					postIds: Object(i.a)((e, t) => {
						let {
							listingKey: s,
							listingName: r,
							inSubredditOrProfile: n
						} = t;
						return Object(_.K)(e, s, r, n)
					}),
					subredditsById: E.Z,
					viewportDataLoaded: S.a,
					pageReferrer: m.Q,
					postListPlaceholderComponent: () => h.a,
					isNpsScrollSurveyEnabled: g.b
				},
				P = Object(n.c)(C),
				M = (e, t) => {
					let {
						isFrontpage: s
					} = t;
					return {
						onBottomViewed: (t, s) => e(l.c(t, s)),
						adBrandSafetyStatusReceived: t => {
							e(o.d({
								isViewSafe: t
							}))
						},
						openPost: t => {
							s && e(Object(d.a)({
								lastLoadedEnv: "server"
							})), e(a.C(t))
						},
						fireAdPixelsOfType: (t, s) => {
							e(a.t(t, s))
						},
						trackOnPostEnteredViewport: (t, s, r) => {
							e(a.F(t, r))
						},
						trackOnPostExitedViewport: (t, s, r, n) => {
							e(a.G(t, r, n))
						},
						surveyTriggerScrollCounted: () => e(Object(c.b)())
					}
				},
				j = Object(r.b)(P, M, (e, t, s) => Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), s), {
					postClickEvent: (e, t, r) => Object(p.f)(e, t, r, s.listingKey, s.hostPostId, s.listingBelowVariant),
					postComponentForLayout: e => Object(b.b)(Object.assign({}, e))
				}));
			t.a = e => Object(u.c)(y(j(e)))
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var r = s("./src/reddit/models/WhitelistStatus/index.ts");
			const n = (e, t) => {
				const s = e.some(e => e.isNSFW),
					n = t.some(e => e.wls === r.b.NO_ADS);
				return !s && !n
			}
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", i({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/pages/ModListing/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/es6.regexp.match.js"), s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.regexp.search.js");
			var r = s("./node_modules/lodash/fromPairs.js"),
				n = s.n(r),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/extractQueryParams/index.ts"),
				u = s("./src/lib/makeListingKey/index.ts"),
				m = s("./src/reddit/actions/pages/modListing/index.ts"),
				b = s("./src/reddit/components/EmptySubreddit.tsx"),
				p = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				h = s("./src/reddit/components/JumpToContent/index.tsx"),
				x = s("./src/reddit/components/ListingPostList/index.tsx"),
				g = s("./src/reddit/components/ModHub/Content/NoPermissions.tsx"),
				f = s("./node_modules/fbt/lib/FbtPublic.js"),
				_ = s("./src/higherOrderComponents/asModal/index.tsx"),
				E = s("./src/reddit/actions/modal.ts"),
				S = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				O = s("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx"),
				y = s("./src/reddit/controls/TextButton/index.tsx"),
				C = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				P = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				M = s("./src/reddit/selectors/activeModalId.ts"),
				j = s("./src/reddit/selectors/modQueue.ts"),
				I = s("./src/reddit/components/ModListingSidebar/FeedDetails/index.m.less"),
				L = s.n(I);
			const {
				fbt: v
			} = s("./node_modules/fbt/lib/FbtPublic.js"), F = Object(_.a)(e => o.a.createElement(S.d, {
				className: L.a.modalBody
			}, o.a.createElement(S.h, null, o.a.createElement(P.a, null, o.a.createElement(S.p, {
				className: L.a.modalTitle
			}, o.a.createElement(C.a, {
				className: L.a.modIcon
			}), v._("r/Mod", null, {
				hk: "2a9ICx"
			})), o.a.createElement(y.a, {
				onClick: e.onCloseModal
			}, o.a.createElement(S.b, null)))), o.a.createElement(S.k, {
				className: L.a.modalMain
			}, o.a.createElement("div", {
				className: L.a.modalDescription
			}, v._("This is a feed for the communities that you moderate.", null, {
				hk: "2XK5kH"
			})), o.a.createElement(O.b, {
				isSidebar: !1,
				subredditsOrProfilesIds: e.moderatedCommunitiesIds
			})))), k = e => o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
				className: L.a.feedDetailsTitle
			}, o.a.createElement(C.a, {
				className: L.a.modIcon
			}), v._("r/Mod", null, {
				hk: "2a9ICx"
			})), o.a.createElement("div", {
				className: L.a.feedDetailsDescription
			}, v._("This is a feed for the communities that you moderate.", null, {
				hk: "2XK5kH"
			})), e.moderatedCommunitiesIds.length ? o.a.createElement(O.b, {
				isSidebar: !0,
				onSeeMoreDetails: e.onSeeMoreDetails,
				subredditsOrProfilesIds: e.moderatedCommunitiesIds
			}) : o.a.createElement("div", {
				className: L.a.loadingBar
			})), N = Object(a.c)({
				isModalOpen: Object(M.b)("MOD_LISTING_FEED_DETAILS_MODAL_ID"),
				moderatedCommunitiesIds: j.f
			});
			var w = Object(d.b)(N, (e, t) => {
					let {} = t;
					return {
						toggleModal: () => e(Object(E.i)("MOD_LISTING_FEED_DETAILS_MODAL_ID"))
					}
				})(e => {
					const {
						isModalOpen: t,
						moderatedCommunitiesIds: s,
						toggleModal: r
					} = e;
					return s ? o.a.createElement(o.a.Fragment, null, o.a.createElement(k, {
						moderatedCommunitiesIds: s,
						onSeeMoreDetails: r
					}), t && o.a.createElement(F, {
						moderatedCommunitiesIds: s,
						onCloseModal: r,
						onOverlayClick: r,
						withOverlay: !0
					})) : null
				}),
				T = s("./node_modules/react-router-redux/es/index.js"),
				H = s("./src/reddit/components/TrackingHelper/index.tsx"),
				B = s("./src/reddit/contexts/PageLayer/index.tsx"),
				K = s("./src/reddit/controls/Button/index.tsx");
			const D = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "hide_subreddit"
				}),
				R = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "unhide_subreddit"
				}),
				V = e => t => ({
					source: "r_mod",
					action: "click",
					noun: e ? "unfiltered_subreddits" : "filtered_subreddits"
				});
			var G = s("./src/reddit/routes/modListing/index.ts");
			const A = e => e.modListingPage.filteredSubreddits.api.pending;
			var Y = s("./src/reddit/constants/keycodes.ts"),
				J = s("./src/reddit/layout/row/Inline/index.tsx"),
				X = s("./src/reddit/components/ModListingSidebar/HideCommunities/HideInput/index.m.less"),
				Q = s.n(X);
			const W = Object(a.c)({
				apiError: e => e.modListingPage.filteredSubreddits.api.error,
				isApiPending: A
			});
			class q extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						subredditInput: ""
					}, this.clearSubredditInput = () => {
						this.setSubredditInput("")
					}, this.setSubredditInput = e => {
						this.setState({
							subredditInput: e
						})
					}, this.submitInput = () => {
						this.canSubmitInput() && (this.props.sendEvent(D()), this.props.hide(this.state.subredditInput), this.clearSubredditInput())
					}, this.onChange = e => {
						this.setSubredditInput(e.target.value)
					}, this.onKeyPress = e => {
						e.key === Y.b.Enter && this.submitInput()
					}, this.canSubmitInput = () => this.state.subredditInput && !this.props.isApiPending
				}
				render() {
					const {
						props: e
					} = this;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(J.a, null, o.a.createElement("input", {
						className: Q.a.input,
						onChange: this.onChange,
						onKeyPress: this.onKeyPress,
						placeholder: f.fbt._("r/community", null, {
							hk: "4ceDB9"
						}),
						value: this.state.subredditInput
					}), o.a.createElement(K.i, {
						"aria-label": f.fbt._("Hide", null, {
							hk: "1BnFmX"
						}),
						className: Q.a.hideButton,
						disabled: !this.canSubmitInput(),
						onClick: this.submitInput
					}, f.fbt._("Hide", null, {
						hk: "1BnFmX"
					}))), e.apiError && e.apiError.explanation && o.a.createElement("div", {
						className: Q.a.errorText
					}, e.apiError.explanation))
				}
			}
			var Z = Object(d.b)(W, e => ({
					hide: t => e(Object(m.a)(t))
				}))(Object(H.c)(q)),
				U = s("./src/lib/lessComponent.tsx"),
				z = s("./src/reddit/components/SubredditIcon/index.tsx"),
				$ = s("./src/lib/classNames/index.ts"),
				ee = s("./src/reddit/icons/fonts/helpers.tsx");
			var te = e => o.a.createElement("i", {
					className: Object($.a)(Object(ee.b)("clear"), e.className)
				}),
				se = s("./src/reddit/selectors/profile.ts"),
				re = s("./src/reddit/selectors/subreddit.ts"),
				ne = s("./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/SubredditsListRow/index.m.less"),
				ie = s.n(ne);
			const oe = U.a.wrapped(z.b, "SubredditIcon", ie.a),
				de = Object(a.c)({
					isApiPending: A,
					subredditOrProfile: (e, t) => {
						const s = Object(re.B)(e, {
							subredditName: t.subredditName
						});
						if (!s) {
							const s = (e => e.startsWith(l.Ub) ? e.slice(2) : e)(t.subredditName);
							return s && Object(se.j)(e, {
								profileName: s
							}) || null
						}
						return s
					}
				});
			class ae extends o.a.Component {
				constructor() {
					super(...arguments), this.onClickUnhideSubreddit = e => {
						e.stopPropagation(), e.preventDefault(), this.props.subredditOrProfile && (this.props.sendEvent(R()), this.props.unhide(this.props.subredditName))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return e.subredditOrProfile ? o.a.createElement(O.a, {
						className: ie.a.row,
						to: e.subredditOrProfile.url
					}, o.a.createElement(oe, {
						subredditOrProfile: e.subredditOrProfile
					}), o.a.createElement("span", {
						className: ie.a.label
					}, e.subredditOrProfile.displayText), !e.isApiPending && o.a.createElement("button", {
						"aria-label": f.fbt._("Unhide", null, {
							hk: "2sCv0O"
						}),
						className: ie.a.unhideButton,
						onClick: this.onClickUnhideSubreddit
					}, o.a.createElement(te, null))) : null
				}
			}
			var le = Object(d.b)(de, e => ({
					unhide: t => e(Object(m.d)(t))
				}))(Object(H.c)(ae)),
				ce = s("./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/index.m.less"),
				ue = s.n(ce);
			const {
				fbt: me
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var be = e => {
					let {
						hiddenSubredditsNames: t
					} = e;
					const s = t.map(e => o.a.createElement(le, {
						key: e,
						subredditName: e
					}));
					return o.a.createElement(o.a.Fragment, null, t.length ? o.a.createElement("div", {
						className: ue.a.rows
					}, s) : o.a.createElement("div", {
						className: ue.a.noRows
					}, me._("Viewing all communities", null, {
						hk: "4p9SL8"
					})))
				},
				pe = s("./src/reddit/components/ModListingSidebar/HideCommunities/index.m.less"),
				he = s.n(pe);
			const {
				fbt: xe
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ge = Object(B.t)({
				filtered: e => !!e && Object(G.d)(e.url)
			}), fe = Object(a.c)({
				hiddenSubredditsNames: e => e.modListingPage.filteredSubreddits.names
			});
			class _e extends o.a.Component {
				constructor() {
					super(...arguments), this.onToggleFiltered = () => {
						this.props.sendEvent(V(this.props.filtered)), this.props.toggleFiltered()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return o.a.createElement("div", {
						className: he.a.container
					}, o.a.createElement("div", {
						className: he.a.hideCommunitiesHeader
					}, xe._("Hide communities", null, {
						hk: "15OtHo"
					})), o.a.createElement(K.o, {
						className: he.a.tertiaryButton,
						onClick: this.onToggleFiltered
					}, e.filtered ? xe._("Go to unfiltered r/Mods", null, {
						hk: "2RGhxF"
					}) : xe._("Go to filtered r/Mod", null, {
						hk: "YdVw7"
					})), e.filtered && o.a.createElement("div", {
						className: he.a.inputContainer
					}, o.a.createElement(Z, null), o.a.createElement(be, {
						hiddenSubredditsNames: e.hiddenSubredditsNames
					})))
				}
			}
			var Ee = ge(Object(d.b)(fe, (e, t) => {
					let {
						filtered: s
					} = t;
					return {
						toggleFiltered: () => e(Object(T.b)(s ? G.a : G.b))
					}
				})(Object(H.c)(_e))),
				Se = s("./src/reddit/components/SidebarContainer/index.tsx"),
				Oe = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				ye = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx");
			var Ce = () => o.a.createElement(Se.a, null, o.a.createElement(ye.a, {
					title: f.fbt._("Feed details", null, {
						hk: "3JlrpB"
					})
				}, o.a.createElement(w, null), o.a.createElement(Ee, null)), o.a.createElement(Oe.a, null)),
				Pe = s("./src/reddit/constants/page.ts"),
				Me = s("./src/reddit/constants/parameters.ts"),
				je = s("./src/reddit/helpers/trackers/screenview.ts"),
				Ie = s("./src/reddit/layout/page/Listing/index.tsx"),
				Le = s("./src/reddit/selectors/moderatorPermissions.ts");
			const ve = Object(a.a)((e, t) => {
					let {
						location: s
					} = t;
					return s.search
				}, (e, t) => {
					let {
						match: s
					} = t;
					return s.params.sort || l.O.HOT
				}, (e, t) => {
					let {
						match: s
					} = t;
					return Object(G.d)(s.path)
				}, Le.h, Le.c, (e, t, s, r, i) => {
					const o = n()([...Object(c.a)(e)]),
						d = Me.w in o && o[Me.w].toUpperCase(),
						a = "string" == typeof d && d in l.Sb ? l.Sb[d] : l.Tb,
						m = s ? Pe.e : Pe.d;
					return {
						filtered: s,
						isModerator: r,
						isModeratorWithPostPerms: i,
						listingKey: Object(u.a)(m, t, o),
						listingName: m,
						sort: t,
						timeSort: a
					}
				}),
				Fe = Object(d.b)(ve, (e, t) => ({
					onLoadMorePosts: () => e(m.c({
						sort: t.match.params.sort
					}))
				}));
			class ke extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onViewed = (e, t) => Object(je.e)(this.props.listingKey, this.props.sort, t, e), this.renderEmptySubreddit = () => o.a.createElement(b.a, {
						listingName: this.props.listingName,
						sort: this.props.sort
					})
				}
				render() {
					const e = this.props.filtered ? G.b : G.a;
					return o.a.createElement("div", null, this.props.isModeratorWithPostPerms ? o.a.createElement(Ie.a, {
						className: this.props.className,
						fitPageToContent: !0,
						content: o.a.createElement(o.a.Fragment, null, o.a.createElement(p.a, {
							baseUrl: e,
							sort: this.props.sort,
							timeSort: this.props.timeSort
						}), o.a.createElement(h.a, null), o.a.createElement(x.a, {
							listingKey: this.props.listingKey,
							listingName: this.props.listingName,
							listingViewed: this.onViewed,
							noPostsComponent: this.renderEmptySubreddit,
							onLoadMore: this.props.onLoadMorePosts
						})),
						sidebar: o.a.createElement(Ce, null)
					}) : o.a.createElement(g.a, {
						isModerator: this.props.isModerator
					}))
				}
			}
			t.default = Fe(ke)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModListing.ac594cd493363624d153.js.map