// https://www.redditstatic.com/desktop2x/ModListing.b92084798660a9056f1a.js
// Retrieved at 3/30/2020, 2:50:05 PM by Reddit Dataminer v1.0.0
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
				EmptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg",
				emptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg",
				Component: "_2_C857z2MF49YnHj6VQteT",
				component: "_2_C857z2MF49YnHj6VQteT"
			}
		},
		"./src/reddit/components/EmptySubreddit.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/upperFirst.js"),
				i = s.n(r),
				d = s("./node_modules/react/index.js"),
				o = s.n(d),
				a = s("./src/config.ts"),
				l = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/isFakeSubreddit/index.ts"),
				u = s("./src/reddit/constants/postLayout.ts"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/components/PostList/Placeholder.tsx"),
				p = s("./src/reddit/components/EmptySubreddit.m.less"),
				h = s.n(p),
				_ = s("./src/lib/lessComponent.tsx");
			const g = _.a.div("PrimaryText", h.a),
				f = _.a.div("SecondaryText", h.a),
				x = _.a.div("MainContentWrapper", h.a),
				E = _.a.div("MainContent", h.a),
				S = _.a.wrapped(b.a, "BackgroundPlaceholder", h.a),
				O = _.a.wrapped(m.h, "SubmitLink", h.a),
				M = _.a.img("SnooImg", h.a),
				C = _.a.div("EmptyHomepage", h.a),
				y = e => {
					switch (e) {
						case l.O.RISING:
							return n.fbt._("Create a new post and take all the glory", null, {
								hk: "1NhXUe"
							});
						case l.O.TOP:
						case l.O.CONTROVERSIAL:
							return null;
						default:
							return n.fbt._("Be the first to till this fertile land.", null, {
								hk: "VYQD0"
							})
					}
				},
				I = e => {
					let {
						listingName: t,
						sort: s
					} = e;
					const r = y(s);
					return o.a.createElement(E, null, o.a.createElement(g, null, (e => {
						switch (e) {
							case l.O.RISING:
								return n.fbt._("Looks like nothing is rising fast enough in this subreddit", null, {
									hk: "kJ3Te"
								});
							case l.O.TOP:
							case l.O.CONTROVERSIAL:
								return n.fbt._("No posts were found using the {listing sort option} sort. Try changing the sort.", [n.fbt._param("listing sort option", i()(e))], {
									hk: "48BeCW"
								});
							default:
								return n.fbt._("There are no posts in this subreddit", null, {
									hk: "5mVkT"
								})
						}
					})(s)), t && !Object(c.a)(t) && !!r && o.a.createElement(o.a.Fragment, null, o.a.createElement(f, null, y(s)), o.a.createElement(O, {
						to: "/r/".concat(t, "/submit")
					}, n.fbt._("Add a post", null, {
						hk: "1vnCSW"
					}))))
				},
				P = () => o.a.createElement(E, null, o.a.createElement(M, {
					src: "".concat(a.a.assetPath, "/img/snoo_discovery@1x.png")
				}), o.a.createElement(g, null, n.fbt._("Reddit gets better when you join communities, so find some that you’ll love!", null, {
					hk: "7B6oq"
				})), o.a.createElement(O, {
					to: "/r/popular"
				}, n.fbt._("Browse Popular Posts", null, {
					hk: "2zfgXv"
				})));
			t.a = _.a.wrapped(e => o.a.createElement(C, null, o.a.createElement(S, {
				isLoading: !1,
				layout: u.g.Classic
			}), o.a.createElement(x, null, e.subreddit ? o.a.createElement(I, e) : o.a.createElement(P, null))), "Component", h.a)
		},
		"./src/reddit/components/ModHub/Content/NoPermissions.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				d = s("./src/app/strings/index.ts"),
				o = s("./src/reddit/components/ModHub/Content/index.m.less"),
				a = s.n(o);
			t.a = e => i.a.createElement("div", {
				className: a.a.noPermissions
			}, i.a.createElement("img", {
				className: a.a.rememberTheHuman,
				src: "".concat(n.a.assetPath, "/img/content-gate-icons/remember-the-human.png")
			}), e.isModerator ? Object(d.a)(e.language, "subredditModeration.modHub.incorrectPermissions") : Object(d.a)(e.language, "subredditModeration.modHub.modOnlyPage"), i.a.createElement("div", {
				className: a.a.noPermissionsSmallText
			}, e.isModerator ? Object(d.a)(e.language, "subredditModeration.modHub.incorrectPermissionsSubtext") : e.subredditDisplayText ? Object(d.a)(e.language, "subredditModeration.modHub.mustBeAModOfSubreddit", {
				subredditName: e.subredditDisplayText
			}) : Object(d.a)(e.language, "subredditModeration.modHub.mustBeAMod")))
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
				extraSmallFont: "ZVMudqNfA5HZ3QWDGW-rq",
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				d = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = s("./src/reddit/controls/Button/index.tsx"),
				a = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/components/SubredditIcon/index.tsx"),
				u = s("./src/reddit/selectors/subreddit.ts"),
				m = s("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditOrProfileRow.m.less"),
				b = s.n(m),
				p = s("./src/lib/lessComponent.tsx");
			const h = p.a.wrapped(c.b, "SubredditIcon", b.a),
				_ = p.a.span("Label", b.a),
				g = Object(l.c)({
					subredditOrProfile: u.J
				});
			var f = Object(a.b)(g)(e => {
				let {
					children: t,
					subredditOrProfile: s
				} = e;
				return t(s, i.a.createElement(i.a.Fragment, null, i.a.createElement(h, {
					subredditOrProfile: s
				}), i.a.createElement(_, null, s.displayText)))
			});
			var x = e => {
					let {
						children: t,
						className: s,
						subredditsOrProfilesIds: n
					} = e;
					const r = n.map(e => i.a.createElement(f, {
						children: t,
						key: e.id,
						identifier: e
					}));
					return i.a.createElement("div", {
						className: s
					}, r)
				},
				E = s("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less"),
				S = s.n(E);
			s.d(t, "a", (function() {
				return C
			}));
			const O = p.a.div("CommunityCount", S.a),
				M = p.a.wrapped(x, "SubredditsOrProfiles", S.a),
				C = p.a.wrapped(d.a, "SidebarSubreddit", S.a),
				y = p.a.wrapped(d.a, "ModalSubreddit", S.a);
			var I;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Sidebar = 1] = "Sidebar"
			}(I || (I = {}));
			t.b = e => {
				const {
					isSidebar: t,
					subredditsOrProfilesIds: s,
					onSeeMoreDetails: r,
					subredditCategory: d = {
						name: n.fbt._("multi", null, {
							hk: "28Z7Rp"
						})
					}
				} = e, a = t ? C : y, l = s.length, c = t && s.length > 4;
				return i.a.createElement(i.a.Fragment, null, i.a.createElement(O, null, n.fbt._({
					"*": "There are {number} communities in this {category}",
					_1: "There are 1 community in this {category}"
				}, [n.fbt._plural(l, "number"), n.fbt._param("category", d.name)], {
					hk: "33iWe4"
				})), l > 0 && i.a.createElement(M, {
					subredditsOrProfilesIds: t ? s.slice(0, 4) : s
				}, (t, s) => i.a.createElement(a, {
					key: t.url,
					to: t.url,
					onMouseDown: e.onSubredditClick ? () => e.onSubredditClick(t) : void 0
				}, s)), l > 0 && c && i.a.createElement(o.n, {
					onClick: r
				}, n.fbt._("See more", null, {
					hk: "1trUgh"
				})))
			}
		},
		"./src/reddit/pages/ModListing/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/es6.regexp.match.js"), s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.regexp.search.js");
			var n = s("./node_modules/lodash/fromPairs.js"),
				r = s.n(n),
				i = s("./node_modules/react/index.js"),
				d = s.n(i),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/extractQueryParams/index.ts"),
				u = s("./src/lib/makeListingKey/index.ts"),
				m = s("./src/reddit/actions/pages/modListing/index.ts"),
				b = s("./src/reddit/components/EmptySubreddit.tsx"),
				p = s("./src/reddit/components/JumpToContent/index.tsx"),
				h = s("./src/reddit/components/LayoutNavigation/index.tsx"),
				_ = s("./src/reddit/components/ListingPostList/index.tsx"),
				g = s("./src/reddit/components/ModHub/Content/NoPermissions.tsx"),
				f = s("./node_modules/fbt/lib/FbtPublic.js"),
				x = s("./src/higherOrderComponents/asModal/index.tsx"),
				E = s("./src/reddit/actions/modal.ts"),
				S = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				O = s("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx"),
				M = s("./src/reddit/controls/TextButton/index.tsx"),
				C = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				y = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				I = s("./src/reddit/selectors/activeModalId.ts"),
				P = s("./src/reddit/selectors/modQueue.ts"),
				j = s("./src/reddit/components/ModListingSidebar/FeedDetails/index.m.less"),
				N = s.n(j);
			const {
				fbt: L
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = Object(x.a)(e => d.a.createElement(S.c, {
				className: N.a.modalBody
			}, d.a.createElement(S.g, null, d.a.createElement(y.a, null, d.a.createElement(S.n, {
				className: N.a.modalTitle
			}, d.a.createElement(C.a, {
				className: N.a.modIcon
			}), L._("r/Mod", null, {
				hk: "2a9ICx"
			})), d.a.createElement(M.a, {
				onClick: e.onCloseModal
			}, d.a.createElement(S.b, null)))), d.a.createElement(S.j, {
				className: N.a.modalMain
			}, d.a.createElement("div", {
				className: N.a.modalDescription
			}, L._("This is a feed for the communities that you moderate.", null, {
				hk: "2XK5kH"
			})), d.a.createElement(O.b, {
				isSidebar: !1,
				subredditsOrProfilesIds: e.moderatedCommunitiesIds
			})))), v = e => d.a.createElement(d.a.Fragment, null, d.a.createElement("div", {
				className: N.a.feedDetailsTitle
			}, d.a.createElement(C.a, {
				className: N.a.modIcon
			}), L._("r/Mod", null, {
				hk: "2a9ICx"
			})), d.a.createElement("div", {
				className: N.a.feedDetailsDescription
			}, L._("This is a feed for the communities that you moderate.", null, {
				hk: "2XK5kH"
			})), e.moderatedCommunitiesIds.length ? d.a.createElement(O.b, {
				isSidebar: !0,
				onSeeMoreDetails: e.onSeeMoreDetails,
				subredditsOrProfilesIds: e.moderatedCommunitiesIds
			}) : d.a.createElement("div", {
				className: N.a.loadingBar
			})), F = Object(a.c)({
				isModalOpen: Object(I.b)("MOD_LISTING_FEED_DETAILS_MODAL_ID"),
				moderatedCommunitiesIds: P.f
			});
			var H = Object(o.b)(F, (e, t) => {
					let {} = t;
					return {
						toggleModal: () => e(Object(E.i)("MOD_LISTING_FEED_DETAILS_MODAL_ID"))
					}
				})(e => {
					const {
						isModalOpen: t,
						moderatedCommunitiesIds: s,
						toggleModal: n
					} = e;
					return s ? d.a.createElement(d.a.Fragment, null, d.a.createElement(v, {
						moderatedCommunitiesIds: s,
						onSeeMoreDetails: n
					}), t && d.a.createElement(k, {
						moderatedCommunitiesIds: s,
						onCloseModal: n,
						onOverlayClick: n,
						withOverlay: !0
					})) : null
				}),
				T = s("./node_modules/react-router-redux/es/index.js"),
				B = s("./src/reddit/components/TrackingHelper/index.tsx"),
				w = s("./src/reddit/contexts/PageLayer/index.tsx"),
				D = s("./src/reddit/controls/Button/index.tsx");
			const K = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "hide_subreddit"
				}),
				R = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "unhide_subreddit"
				}),
				A = e => t => ({
					source: "r_mod",
					action: "click",
					noun: e ? "unfiltered_subreddits" : "filtered_subreddits"
				});
			var G = s("./src/reddit/routes/modListing/index.ts");
			const V = e => e.modListingPage.filteredSubreddits.api.pending;
			var J = s("./src/reddit/constants/keycodes.ts"),
				q = s("./src/reddit/layout/row/Inline/index.tsx"),
				W = s("./src/reddit/components/ModListingSidebar/HideCommunities/HideInput/index.m.less"),
				Y = s.n(W);
			const Z = Object(a.c)({
				apiError: e => e.modListingPage.filteredSubreddits.api.error,
				isApiPending: V
			});
			class Q extends d.a.Component {
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
						e.key === J.b.Enter && this.submitInput()
					}, this.canSubmitInput = () => this.state.subredditInput && !this.props.isApiPending
				}
				render() {
					const {
						props: e
					} = this;
					return d.a.createElement(d.a.Fragment, null, d.a.createElement(q.a, null, d.a.createElement("input", {
						className: Y.a.input,
						onChange: this.onChange,
						onKeyPress: this.onKeyPress,
						placeholder: f.fbt._("r/community", null, {
							hk: "4ceDB9"
						}),
						value: this.state.subredditInput
					}), d.a.createElement(D.f, {
						"aria-label": f.fbt._("Hide", null, {
							hk: "1BnFmX"
						}),
						className: Y.a.hideButton,
						disabled: !this.canSubmitInput(),
						onClick: this.submitInput
					}, f.fbt._("Hide", null, {
						hk: "1BnFmX"
					}))), e.apiError && e.apiError.explanation && d.a.createElement("div", {
						className: Y.a.errorText
					}, e.apiError.explanation))
				}
			}
			var U = Object(o.b)(Z, e => ({
					hide: t => e(Object(m.a)(t))
				}))(Object(B.c)(Q)),
				X = s("./src/lib/lessComponent.tsx"),
				z = s("./src/reddit/components/SubredditIcon/index.tsx"),
				$ = s("./src/lib/classNames/index.ts"),
				ee = s("./src/reddit/icons/fonts/helpers.tsx");
			var te = e => d.a.createElement("i", {
					className: Object($.a)(Object(ee.b)("clear"), e.className)
				}),
				se = s("./src/reddit/selectors/profile.ts"),
				ne = s("./src/reddit/selectors/subreddit.ts"),
				re = s("./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/SubredditsListRow/index.m.less"),
				ie = s.n(re);
			const de = X.a.wrapped(z.b, "SubredditIcon", ie.a),
				oe = Object(a.c)({
					isApiPending: V,
					subredditOrProfile: (e, t) => {
						const s = Object(ne.y)(e, {
							subredditName: t.subredditName
						});
						if (!s) {
							const s = (e => e.startsWith(l.Tb) ? e.slice(2) : e)(t.subredditName);
							return s && Object(se.j)(e, {
								profileName: s
							}) || null
						}
						return s
					}
				});
			class ae extends d.a.Component {
				constructor() {
					super(...arguments), this.onClickUnhideSubreddit = e => {
						e.stopPropagation(), e.preventDefault(), this.props.subredditOrProfile && (this.props.sendEvent(R()), this.props.unhide(this.props.subredditName))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return e.subredditOrProfile ? d.a.createElement(O.a, {
						className: ie.a.row,
						to: e.subredditOrProfile.url
					}, d.a.createElement(de, {
						subredditOrProfile: e.subredditOrProfile
					}), d.a.createElement("span", {
						className: ie.a.label
					}, e.subredditOrProfile.displayText), !e.isApiPending && d.a.createElement("button", {
						"aria-label": f.fbt._("Unhide", null, {
							hk: "2sCv0O"
						}),
						className: ie.a.unhideButton,
						onClick: this.onClickUnhideSubreddit
					}, d.a.createElement(te, null))) : null
				}
			}
			var le = Object(o.b)(oe, e => ({
					unhide: t => e(Object(m.d)(t))
				}))(Object(B.c)(ae)),
				ce = s("./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/index.m.less"),
				ue = s.n(ce);
			const {
				fbt: me
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var be = e => {
					let {
						hiddenSubredditsNames: t
					} = e;
					const s = t.map(e => d.a.createElement(le, {
						key: e,
						subredditName: e
					}));
					return d.a.createElement(d.a.Fragment, null, t.length ? d.a.createElement("div", {
						className: ue.a.rows
					}, s) : d.a.createElement("div", {
						className: ue.a.noRows
					}, me._("Viewing all communities", null, {
						hk: "4p9SL8"
					})))
				},
				pe = s("./src/reddit/components/ModListingSidebar/HideCommunities/index.m.less"),
				he = s.n(pe);
			const {
				fbt: _e
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ge = Object(w.t)({
				filtered: e => !!e && Object(G.d)(e.url)
			}), fe = Object(a.c)({
				hiddenSubredditsNames: e => e.modListingPage.filteredSubreddits.names
			});
			class xe extends d.a.Component {
				constructor() {
					super(...arguments), this.onToggleFiltered = () => {
						this.props.sendEvent(A(this.props.filtered)), this.props.toggleFiltered()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return d.a.createElement("div", {
						className: he.a.container
					}, d.a.createElement("div", {
						className: he.a.hideCommunitiesHeader
					}, _e._("Hide communities", null, {
						hk: "15OtHo"
					})), d.a.createElement(D.n, {
						className: he.a.tertiaryButton,
						onClick: this.onToggleFiltered
					}, e.filtered ? _e._("Go to unfiltered r/Mods", null, {
						hk: "2RGhxF"
					}) : _e._("Go to filtered r/Mod", null, {
						hk: "YdVw7"
					})), e.filtered && d.a.createElement("div", {
						className: he.a.inputContainer
					}, d.a.createElement(U, null), d.a.createElement(be, {
						hiddenSubredditsNames: e.hiddenSubredditsNames
					})))
				}
			}
			var Ee = ge(Object(o.b)(fe, (e, t) => {
					let {
						filtered: s
					} = t;
					return {
						toggleFiltered: () => e(Object(T.b)(s ? G.a : G.b))
					}
				})(Object(B.c)(xe))),
				Se = s("./src/reddit/components/SidebarContainer/index.tsx"),
				Oe = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				Me = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx");
			var Ce = () => d.a.createElement(Se.a, null, d.a.createElement(Me.a, {
					title: f.fbt._("Feed details", null, {
						hk: "3JlrpB"
					})
				}, d.a.createElement(H, null), d.a.createElement(Ee, null)), d.a.createElement(Oe.a, null)),
				ye = s("./src/reddit/constants/page.ts"),
				Ie = s("./src/reddit/constants/parameters.ts"),
				Pe = s("./src/reddit/helpers/trackers/screenview.ts"),
				je = s("./src/reddit/layout/page/Listing/index.tsx"),
				Ne = s("./src/reddit/selectors/moderatorPermissions.ts"),
				Le = s("./src/reddit/selectors/user.ts");
			const ke = Object(a.a)((e, t) => {
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
				}, Ne.h, Ne.c, Le.O, (e, t, s, n, i, d) => {
					const o = r()([...Object(c.a)(e)]),
						a = Ie.t in o && o[Ie.t].toUpperCase(),
						m = "string" == typeof a && a in l.Rb ? l.Rb[a] : l.Sb,
						b = s ? ye.e : ye.d;
					return {
						filtered: s,
						isModerator: n,
						isModeratorWithPostPerms: i,
						language: d,
						listingKey: Object(u.a)(b, t, o),
						listingName: b,
						sort: t,
						timeSort: m
					}
				}),
				ve = Object(o.b)(ke, (e, t) => ({
					onLoadMorePosts: () => e(m.c({
						sort: t.match.params.sort
					}))
				}));
			class Fe extends d.a.PureComponent {
				constructor() {
					super(...arguments), this.onViewed = (e, t) => Object(Pe.d)(this.props.listingKey, this.props.sort, t, e), this.renderEmptySubreddit = () => d.a.createElement(b.a, {
						listingName: this.props.listingName,
						sort: this.props.sort
					})
				}
				render() {
					const e = this.props.filtered ? G.b : G.a;
					return d.a.createElement("div", null, this.props.isModeratorWithPostPerms ? d.a.createElement(je.a, {
						className: this.props.className,
						fitPageToContent: !0,
						contentNavBar: d.a.createElement(h.a, {
							baseUrl: e,
							sort: this.props.sort,
							timeSort: this.props.timeSort
						}),
						content: d.a.createElement(d.a.Fragment, null, d.a.createElement(p.a, null), d.a.createElement(_.a, {
							listingKey: this.props.listingKey,
							listingName: this.props.listingName,
							listingViewed: this.onViewed,
							noPostsComponent: this.renderEmptySubreddit,
							onLoadMore: this.props.onLoadMorePosts
						})),
						sidebar: d.a.createElement(Ce, null)
					}) : d.a.createElement(g.a, {
						language: this.props.language,
						isModerator: this.props.isModerator
					}))
				}
			}
			t.default = ve(Fe)
		}
	}
]);
//# sourceMappingURL=ModListing.b92084798660a9056f1a.js.map