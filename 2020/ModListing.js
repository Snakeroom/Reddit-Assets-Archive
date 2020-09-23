// https://www.redditstatic.com/desktop2x/ModListing.d88e9da43f56287a3f76.js
// Retrieved at 9/23/2020, 4:40:06 PM by Reddit Dataminer v1.0.0
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
				i = s("./node_modules/lodash/upperFirst.js"),
				n = s.n(i),
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
				g = s("./src/lib/lessComponent.tsx");
			const f = g.a.div("PrimaryText", h.a),
				x = g.a.div("SecondaryText", h.a),
				_ = g.a.div("MainContentWrapper", h.a),
				E = g.a.div("MainContent", h.a),
				S = g.a.wrapped(b.a, "BackgroundPlaceholder", h.a),
				O = g.a.wrapped(m.h, "SubmitLink", h.a),
				y = g.a.img("SnooImg", h.a),
				C = g.a.div("EmptyHomepage", h.a),
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
				j = e => {
					let {
						listingName: t,
						sort: s
					} = e;
					const i = P(s);
					return d.a.createElement(E, null, d.a.createElement(f, null, (e => {
						switch (e) {
							case l.O.RISING:
								return r.fbt._("Looks like nothing is rising fast enough in this subreddit", null, {
									hk: "kJ3Te"
								});
							case l.O.TOP:
							case l.O.CONTROVERSIAL:
								return r.fbt._("No posts were found using the {listing sort option} sort. Try changing the sort.", [r.fbt._param("listing sort option", n()(e))], {
									hk: "48BeCW"
								});
							default:
								return r.fbt._("There are no posts in this subreddit", null, {
									hk: "5mVkT"
								})
						}
					})(s)), t && !Object(c.a)(t) && !!i && d.a.createElement(d.a.Fragment, null, d.a.createElement(x, null, P(s)), d.a.createElement(O, {
						to: "/r/".concat(t, "/submit")
					}, r.fbt._("Add a post", null, {
						hk: "1vnCSW"
					}))))
				},
				M = () => d.a.createElement(E, null, d.a.createElement(y, {
					src: "".concat(a.a.assetPath, "/img/snoo_discovery@1x.png")
				}), d.a.createElement(f, null, r.fbt._("Reddit gets better when you join communities, so find some that you’ll love!", null, {
					hk: "7B6oq"
				})), d.a.createElement(O, {
					to: "/r/popular"
				}, r.fbt._("Browse Popular Posts", null, {
					hk: "2zfgXv"
				})));
			t.a = g.a.wrapped(e => d.a.createElement(C, null, d.a.createElement(S, {
				isLoading: !1,
				layout: u.g.Classic
			}), d.a.createElement(_, null, e.subreddit ? d.a.createElement(j, e) : d.a.createElement(M, null))), "Component", h.a)
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/reddit/components/PostList/index.tsx"),
				i = s("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(i.a)(r.a)
		},
		"./src/reddit/components/ModHub/Content/NoPermissions.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/config.ts"),
				i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				d = s("./src/reddit/components/ModHub/Content/index.m.less"),
				a = s.n(d);
			t.a = e => o.a.createElement("div", {
				className: a.a.noPermissions
			}, o.a.createElement("img", {
				className: a.a.rememberTheHuman,
				src: "".concat(r.a.assetPath, "/img/content-gate-icons/remember-the-human.png")
			}), e.isModerator ? i.fbt._("Sorry, you do not have the moderator permissions needed to view this page", null, {
				hk: "4wUDIF"
			}) : i.fbt._("Sorry, this is a moderator-only page", null, {
				hk: "2BZEIA"
			}), o.a.createElement("div", {
				className: a.a.noPermissionsSmallText
			}, e.isModerator ? i.fbt._("You need to change your mod permissions to view this page", null, {
				hk: "RS9sd"
			}) : e.subredditDisplayText ? i.fbt._("You must be a moderator of {subredditName} to view this page", [i.fbt._param("subredditName", e.subredditDisplayText)], {
				hk: "8eU68"
			}) : i.fbt._("You must be a moderator to view this page", null, {
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
				i = s("./node_modules/react/index.js"),
				n = s.n(i),
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
				g = p.a.span("Label", b.a),
				f = Object(l.c)({
					subredditOrProfile: u.M
				});
			var x = Object(a.b)(f)(e => {
				let {
					children: t,
					subredditOrProfile: s
				} = e;
				return t(s, n.a.createElement(n.a.Fragment, null, n.a.createElement(h, {
					subredditOrProfile: s
				}), n.a.createElement(g, null, s.displayText)))
			});
			var _ = e => {
					let {
						children: t,
						className: s,
						subredditsOrProfilesIds: r
					} = e;
					const i = r.map(e => n.a.createElement(x, {
						children: t,
						key: e.id,
						identifier: e
					}));
					return n.a.createElement("div", {
						className: s
					}, i)
				},
				E = s("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less"),
				S = s.n(E);
			const O = p.a.div("CommunityCount", S.a),
				y = p.a.wrapped(_, "SubredditsOrProfiles", S.a),
				C = p.a.wrapped(o.a, "SidebarSubreddit", S.a),
				P = p.a.wrapped(o.a, "ModalSubreddit", S.a);
			var j;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Sidebar = 1] = "Sidebar"
			}(j || (j = {}));
			t.b = e => {
				const {
					isSidebar: t,
					subredditsOrProfilesIds: s,
					onSeeMoreDetails: i,
					subredditCategory: o = {
						name: r.fbt._("multi", null, {
							hk: "28Z7Rp"
						})
					}
				} = e, a = t ? C : P, l = s.length, c = t && s.length > 4;
				return n.a.createElement(n.a.Fragment, null, n.a.createElement(O, null, r.fbt._({
					"*": "There are {number} communities in this {category}",
					_1: "There are 1 community in this {category}"
				}, [r.fbt._plural(l, "number"), r.fbt._param("category", o.name)], {
					hk: "33iWe4"
				})), l > 0 && n.a.createElement(y, {
					subredditsOrProfilesIds: t ? s.slice(0, 4) : s
				}, (t, s) => n.a.createElement(a, {
					key: t.url,
					to: t.url,
					onMouseDown: e.onSubredditClick ? () => e.onSubredditClick(t) : void 0
				}, s)), l > 0 && c && n.a.createElement(d.n, {
					onClick: i
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
				return j
			}));
			var r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				n = s("./src/lib/objectSelector/index.ts"),
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
				g = s("./src/reddit/featureFlags/index.ts"),
				f = s("./src/reddit/selectors/experiments/survey.ts"),
				x = s("./src/reddit/selectors/listings.ts"),
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
					apiError: x.c,
					apiPending: x.d,
					measureScrollFPS: g.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(m.N)(e, t),
					loadMore: x.g,
					postsById: _.Y,
					postIds: Object(n.a)((e, t) => {
						let {
							listingKey: s,
							listingName: r,
							inSubredditOrProfile: i
						} = t;
						return Object(_.K)(e, s, r, i)
					}),
					subredditsById: E.Z,
					viewportDataLoaded: S.a,
					pageReferrer: m.Q,
					postListPlaceholderComponent: () => h.a,
					isNpsScrollSurveyEnabled: f.b
				},
				P = Object(i.c)(C),
				j = (e, t) => {
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
						trackOnPostExitedViewport: (t, s, r, i) => {
							e(a.G(t, r, i))
						},
						surveyTriggerScrollCounted: () => e(Object(c.b)())
					}
				},
				M = Object(r.b)(P, j, (e, t, s) => Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), s), {
					postClickEvent: (e, t, r) => Object(p.f)(e, t, r, s.listingKey, s.hostPostId, s.listingBelowVariant),
					postComponentForLayout: e => Object(b.b)(Object.assign({}, e))
				}));
			t.a = e => Object(u.c)(y(M(e)))
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./src/reddit/models/WhitelistStatus/index.ts");
			const i = (e, t) => {
				const s = e.some(e => e.isNSFW),
					i = t.some(e => e.wls === r.b.NO_ADS);
				return !s && !i
			}
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				i = s.n(r);

			function n() {
				return (n = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => i.a.createElement("svg", n({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), i.a.createElement("g", null, i.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/pages/ModListing/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/es6.regexp.match.js"), s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.regexp.search.js");
			var r = s("./node_modules/lodash/fromPairs.js"),
				i = s.n(r),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				d = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/extractQueryParams/index.ts"),
				u = s("./src/lib/makeListingKey/index.ts"),
				m = s("./src/reddit/actions/pages/modListing/index.ts"),
				b = s("./src/reddit/components/EmptySubreddit.tsx"),
				p = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				h = s("./src/reddit/components/JumpToContent/index.tsx"),
				g = s("./src/reddit/components/ListingPostList/index.tsx"),
				f = s("./src/reddit/components/ModHub/Content/NoPermissions.tsx"),
				x = s("./node_modules/fbt/lib/FbtPublic.js"),
				_ = s("./src/higherOrderComponents/asModal/index.tsx"),
				E = s("./src/reddit/actions/modal.ts"),
				S = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				O = s("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx"),
				y = s("./src/reddit/controls/TextButton/index.tsx"),
				C = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				P = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				j = s("./src/reddit/selectors/activeModalId.ts"),
				M = s("./src/reddit/selectors/modQueue.ts"),
				I = s("./src/reddit/components/ModListingSidebar/FeedDetails/index.m.less"),
				v = s.n(I);
			const {
				fbt: L
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = Object(_.a)(e => o.a.createElement(S.d, {
				className: v.a.modalBody
			}, o.a.createElement(S.h, null, o.a.createElement(P.a, null, o.a.createElement(S.p, {
				className: v.a.modalTitle
			}, o.a.createElement(C.a, {
				className: v.a.modIcon
			}), L._("r/Mod", null, {
				hk: "2a9ICx"
			})), o.a.createElement(y.a, {
				onClick: e.onCloseModal
			}, o.a.createElement(S.b, null)))), o.a.createElement(S.k, {
				className: v.a.modalMain
			}, o.a.createElement("div", {
				className: v.a.modalDescription
			}, L._("This is a feed for the communities that you moderate.", null, {
				hk: "2XK5kH"
			})), o.a.createElement(O.b, {
				isSidebar: !1,
				subredditsOrProfilesIds: e.moderatedCommunitiesIds
			})))), N = e => o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
				className: v.a.feedDetailsTitle
			}, o.a.createElement(C.a, {
				className: v.a.modIcon
			}), L._("r/Mod", null, {
				hk: "2a9ICx"
			})), o.a.createElement("div", {
				className: v.a.feedDetailsDescription
			}, L._("This is a feed for the communities that you moderate.", null, {
				hk: "2XK5kH"
			})), e.moderatedCommunitiesIds.length ? o.a.createElement(O.b, {
				isSidebar: !0,
				onSeeMoreDetails: e.onSeeMoreDetails,
				subredditsOrProfilesIds: e.moderatedCommunitiesIds
			}) : o.a.createElement("div", {
				className: v.a.loadingBar
			})), F = Object(a.c)({
				isModalOpen: Object(j.b)("MOD_LISTING_FEED_DETAILS_MODAL_ID"),
				moderatedCommunitiesIds: M.f
			});
			var w = Object(d.b)(F, (e, t) => {
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
					return s ? o.a.createElement(o.a.Fragment, null, o.a.createElement(N, {
						moderatedCommunitiesIds: s,
						onSeeMoreDetails: r
					}), t && o.a.createElement(k, {
						moderatedCommunitiesIds: s,
						onCloseModal: r,
						onOverlayClick: r,
						withOverlay: !0
					})) : null
				}),
				T = s("./node_modules/react-router-redux/es/index.js"),
				H = s("./src/reddit/components/TrackingHelper/index.tsx"),
				B = s("./src/reddit/contexts/PageLayer/index.tsx"),
				D = s("./src/reddit/controls/Button/index.tsx");
			const K = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "hide_subreddit"
				}),
				V = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "unhide_subreddit"
				}),
				R = e => t => ({
					source: "r_mod",
					action: "click",
					noun: e ? "unfiltered_subreddits" : "filtered_subreddits"
				});
			var A = s("./src/reddit/routes/modListing/index.ts");
			const G = e => e.modListingPage.filteredSubreddits.api.pending;
			var Y = s("./src/reddit/constants/keycodes.ts"),
				J = s("./src/reddit/layout/row/Inline/index.tsx"),
				W = s("./src/reddit/components/ModListingSidebar/HideCommunities/HideInput/index.m.less"),
				q = s.n(W);
			const Z = Object(a.c)({
				apiError: e => e.modListingPage.filteredSubreddits.api.error,
				isApiPending: G
			});
			class Q extends o.a.Component {
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
						this.canSubmitInput() && (this.props.sendEvent(K()), this.props.hide(this.state.subredditInput), this.clearSubredditInput())
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
						className: q.a.input,
						onChange: this.onChange,
						onKeyPress: this.onKeyPress,
						placeholder: x.fbt._("r/community", null, {
							hk: "4ceDB9"
						}),
						value: this.state.subredditInput
					}), o.a.createElement(D.f, {
						"aria-label": x.fbt._("Hide", null, {
							hk: "1BnFmX"
						}),
						className: q.a.hideButton,
						disabled: !this.canSubmitInput(),
						onClick: this.submitInput
					}, x.fbt._("Hide", null, {
						hk: "1BnFmX"
					}))), e.apiError && e.apiError.explanation && o.a.createElement("div", {
						className: q.a.errorText
					}, e.apiError.explanation))
				}
			}
			var U = Object(d.b)(Z, e => ({
					hide: t => e(Object(m.a)(t))
				}))(Object(H.c)(Q)),
				X = s("./src/lib/lessComponent.tsx"),
				z = s("./src/reddit/components/SubredditIcon/index.tsx"),
				$ = s("./src/lib/classNames/index.ts"),
				ee = s("./src/reddit/icons/fonts/helpers.tsx");
			var te = e => o.a.createElement("i", {
					className: Object($.a)(Object(ee.b)("clear"), e.className)
				}),
				se = s("./src/reddit/selectors/profile.ts"),
				re = s("./src/reddit/selectors/subreddit.ts"),
				ie = s("./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/SubredditsListRow/index.m.less"),
				ne = s.n(ie);
			const oe = X.a.wrapped(z.b, "SubredditIcon", ne.a),
				de = Object(a.c)({
					isApiPending: G,
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
						e.stopPropagation(), e.preventDefault(), this.props.subredditOrProfile && (this.props.sendEvent(V()), this.props.unhide(this.props.subredditName))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return e.subredditOrProfile ? o.a.createElement(O.a, {
						className: ne.a.row,
						to: e.subredditOrProfile.url
					}, o.a.createElement(oe, {
						subredditOrProfile: e.subredditOrProfile
					}), o.a.createElement("span", {
						className: ne.a.label
					}, e.subredditOrProfile.displayText), !e.isApiPending && o.a.createElement("button", {
						"aria-label": x.fbt._("Unhide", null, {
							hk: "2sCv0O"
						}),
						className: ne.a.unhideButton,
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
				fbt: ge
			} = s("./node_modules/fbt/lib/FbtPublic.js"), fe = Object(B.t)({
				filtered: e => !!e && Object(A.d)(e.url)
			}), xe = Object(a.c)({
				hiddenSubredditsNames: e => e.modListingPage.filteredSubreddits.names
			});
			class _e extends o.a.Component {
				constructor() {
					super(...arguments), this.onToggleFiltered = () => {
						this.props.sendEvent(R(this.props.filtered)), this.props.toggleFiltered()
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
					}, ge._("Hide communities", null, {
						hk: "15OtHo"
					})), o.a.createElement(D.n, {
						className: he.a.tertiaryButton,
						onClick: this.onToggleFiltered
					}, e.filtered ? ge._("Go to unfiltered r/Mods", null, {
						hk: "2RGhxF"
					}) : ge._("Go to filtered r/Mod", null, {
						hk: "YdVw7"
					})), e.filtered && o.a.createElement("div", {
						className: he.a.inputContainer
					}, o.a.createElement(U, null), o.a.createElement(be, {
						hiddenSubredditsNames: e.hiddenSubredditsNames
					})))
				}
			}
			var Ee = fe(Object(d.b)(xe, (e, t) => {
					let {
						filtered: s
					} = t;
					return {
						toggleFiltered: () => e(Object(T.b)(s ? A.a : A.b))
					}
				})(Object(H.c)(_e))),
				Se = s("./src/reddit/components/SidebarContainer/index.tsx"),
				Oe = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				ye = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx");
			var Ce = () => o.a.createElement(Se.a, null, o.a.createElement(ye.a, {
					title: x.fbt._("Feed details", null, {
						hk: "3JlrpB"
					})
				}, o.a.createElement(w, null), o.a.createElement(Ee, null)), o.a.createElement(Oe.a, null)),
				Pe = s("./src/reddit/constants/page.ts"),
				je = s("./src/reddit/constants/parameters.ts"),
				Me = s("./src/reddit/helpers/trackers/screenview.ts"),
				Ie = s("./src/reddit/layout/page/Listing/index.tsx"),
				ve = s("./src/reddit/selectors/moderatorPermissions.ts");
			const Le = Object(a.a)((e, t) => {
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
					return Object(A.d)(s.path)
				}, ve.h, ve.c, (e, t, s, r, n) => {
					const o = i()([...Object(c.a)(e)]),
						d = je.u in o && o[je.u].toUpperCase(),
						a = "string" == typeof d && d in l.Sb ? l.Sb[d] : l.Tb,
						m = s ? Pe.e : Pe.d;
					return {
						filtered: s,
						isModerator: r,
						isModeratorWithPostPerms: n,
						listingKey: Object(u.a)(m, t, o),
						listingName: m,
						sort: t,
						timeSort: a
					}
				}),
				ke = Object(d.b)(Le, (e, t) => ({
					onLoadMorePosts: () => e(m.c({
						sort: t.match.params.sort
					}))
				}));
			class Ne extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onViewed = (e, t) => Object(Me.e)(this.props.listingKey, this.props.sort, t, e), this.renderEmptySubreddit = () => o.a.createElement(b.a, {
						listingName: this.props.listingName,
						sort: this.props.sort
					})
				}
				render() {
					const e = this.props.filtered ? A.b : A.a;
					return o.a.createElement("div", null, this.props.isModeratorWithPostPerms ? o.a.createElement(Ie.a, {
						className: this.props.className,
						fitPageToContent: !0,
						content: o.a.createElement(o.a.Fragment, null, o.a.createElement(p.a, {
							baseUrl: e,
							sort: this.props.sort,
							timeSort: this.props.timeSort
						}), o.a.createElement(h.a, null), o.a.createElement(g.a, {
							listingKey: this.props.listingKey,
							listingName: this.props.listingName,
							listingViewed: this.onViewed,
							noPostsComponent: this.renderEmptySubreddit,
							onLoadMore: this.props.onLoadMorePosts
						})),
						sidebar: o.a.createElement(Ce, null)
					}) : o.a.createElement(f.a, {
						isModerator: this.props.isModerator
					}))
				}
			}
			t.default = ke(Ne)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModListing.d88e9da43f56287a3f76.js.map