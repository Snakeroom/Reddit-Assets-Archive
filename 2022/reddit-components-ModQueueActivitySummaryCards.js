// https://www.redditstatic.com/desktop2x/reddit-components-ModQueueActivitySummaryCards.e7b720075671c799c3d8.js
// Retrieved at 10/3/2022, 2:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ModQueueActivitySummaryCards", "reddit-components-ModQueueActivitySummaryCards-ModActivityPreview"], {
		"./src/reddit/components/ModQueueActivitySummaryCards/ModActivityPreview.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./src/higherOrderComponents/asTooltip.tsx"),
				n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				d = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/components/UserIcon/index.tsx"),
				c = s("./src/reddit/controls/Dropdown/index.tsx"),
				u = s("./src/lib/makeGqlRequest/index.ts"),
				m = s("./src/redditGQL/operations/LastModActionInSubreddit.json");
			s("./src/redditGQL/operations/ModActivitySummariesByNames.json");
			var b = s("./src/reddit/helpers/graphql/helpers.ts"),
				v = s("./src/reddit/hooks/useGqlContext.ts"),
				p = s("./src/reddit/selectors/modQueue.ts"),
				h = s("./src/reddit/selectors/platform.ts"),
				g = s("./src/reddit/selectors/subreddit.ts"),
				_ = s("./src/reddit/selectors/tooltip.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				k = s("./src/reddit/components/ModQueueActivitySummaryCards/index.m.less"),
				C = s.n(k),
				y = s("./src/config.ts"),
				S = s("./node_modules/fbt/lib/FbtPublic.js"),
				O = s("./src/lib/timeAgo/index.ts"),
				E = s("./src/redditGQL/types.ts");
			const q = `${y.a.assetPath}/img/snoo-sunglasses.png`,
				x = e => {
					let {
						data: t
					} = e;
					var s, o, n, r, d, i, c;
					const u = (null === (s = t.info) || void 0 === s ? void 0 : s.displayName) || (null === (o = t.info) || void 0 === o ? void 0 : o.name),
						{
							lastModAction: m
						} = t;
					return a.a.createElement("div", {
						className: C.a.modRow
					}, a.a.createElement(l.a, {
						className: C.a.modIcon,
						userName: u || "",
						iconUrl: null === (r = null === (n = null == t ? void 0 : t.info) || void 0 === n ? void 0 : n.icon) || void 0 === r ? void 0 : r.url,
						isNSFW: !!(null === (i = null === (d = t.info) || void 0 === d ? void 0 : d.profile) || void 0 === i ? void 0 : i.isNsfw)
					}), a.a.createElement("div", {
						className: C.a.subredditRowText
					}, a.a.createElement("div", {
						className: C.a.username
					}, u), a.a.createElement("div", {
						className: C.a.detailText
					}, m && a.a.createElement(a.a.Fragment, null, ((e, t) => {
						switch (e) {
							case E.q.AddNote:
								return S.fbt._("Added mod note", null, {
									hk: "4EQdI3"
								});
							case E.q.AddRemovalReason:
								return S.fbt._("Added removal reason", null, {
									hk: "3sDuRA"
								});
							case E.q.AdjustPostCrowdControlLevel:
								return S.fbt._("Adjusted post crowd control level", null, {
									hk: "3Ru27s"
								});
							case E.q.EnablePostCrowdControlFilter:
								return S.fbt._("Enabled post crowd control level", null, {
									hk: "bnrbt"
								});
							case E.q.DisablePostCrowdControlFilter:
								return S.fbt._("Disabled post crowd control level", null, {
									hk: "3Pn8Cm"
								});
							case E.q.ApproveComment:
								return S.fbt._("Approved comment", null, {
									hk: "15N4AH"
								});
							case E.q.ApproveLink:
								return S.fbt._("Approved post", null, {
									hk: "2pHeO6"
								});
							case E.q.BanUser:
								return S.fbt._("Banned user", null, {
									hk: "30ZUto"
								});
							case E.q.Collections:
								return S.fbt._("Collections", null, {
									hk: "4DLN5q"
								});
							case E.q.DeleteNote:
								return S.fbt._("Deleted mod note", null, {
									hk: "24mUGI"
								});
							case E.q.Distinguish:
								return "SubredditPost" === t ? S.fbt._("Post distinguished", null, {
									hk: "1EzjPd"
								}) : S.fbt._("Comment distinguished", null, {
									hk: "3TNqQa"
								});
							case E.q.EditFlair:
								return "SubredditPost" === t ? S.fbt._("Post flair edited", null, {
									hk: "2oj67i"
								}) : S.fbt._("User flair edited", null, {
									hk: "2WAVS8"
								});
							case E.q.IgnoreReports:
								return "SubredditPost" === t ? S.fbt._("Post reports ignored", null, {
									hk: "1HbgCS"
								}) : S.fbt._("Comment reports ignored", null, {
									hk: "3eLRwL"
								});
							case E.q.Lock:
								return "SubredditPost" === t ? S.fbt._("Post locked", null, {
									hk: "45Huvj"
								}) : S.fbt._("Comment locked", null, {
									hk: "2HzroI"
								});
							case E.q.MarkNsfw:
								return S.fbt._("Marked post NSFW", null, {
									hk: "4qw3UI"
								});
							case E.q.MarkOriginalContent:
								return S.fbt._("Marked post Original Content", null, {
									hk: "4d9kgS"
								});
							case E.q.MuteUser:
								return S.fbt._("Muted user", null, {
									hk: "31YWRG"
								});
							case E.q.RemoveComment:
								return S.fbt._("Removed comment", null, {
									hk: "2qfmzC"
								});
							case E.q.RemoveLink:
								return S.fbt._("Removed post", null, {
									hk: "2leMij"
								});
							case E.q.SetContestMode:
								return S.fbt._("Set post contest mode", null, {
									hk: "2iE074"
								});
							case E.q.SetSuggestedsort:
								return S.fbt._("Set post suggested sort", null, {
									hk: "3zw33Q"
								});
							case E.q.ShowComment:
								return S.fbt._("Showed comment", null, {
									hk: "1xvaXS"
								});
							case E.q.SpamComment:
								return S.fbt._("Marked comment as spam", null, {
									hk: "E6CLe"
								});
							case E.q.SpamLink:
								return S.fbt._("Removed post as spam", null, {
									hk: "1Al2xz"
								});
							case E.q.Spoiler:
								return S.fbt._("Added spoiler tag", null, {
									hk: "254Axx"
								});
							case E.q.Sticky:
								return "SubredditPost" === t ? S.fbt._("Post stickied", null, {
									hk: "4m9DRx"
								}) : S.fbt._("Comment stickied", null, {
									hk: "1JIPzu"
								});
							case E.q.UnbanUser:
								return S.fbt._("Unbanned user", null, {
									hk: "3U4olT"
								});
							case E.q.Unlock:
								return "SubredditPost" === t ? S.fbt._("Post unlocked", null, {
									hk: "3IXrG"
								}) : S.fbt._("Comment unlocked", null, {
									hk: "4v2jmJ"
								});
							case E.q.UnmuteUser:
								return S.fbt._("Unmuted user", null, {
									hk: "2aB30x"
								});
							case E.q.UnsetContestMode:
								return S.fbt._("Unset post contest mode", null, {
									hk: "W4Yjf"
								});
							case E.q.UnsnoozeReports:
								return "SubredditPost" === t ? S.fbt._("Post unsnoozed", null, {
									hk: "3jp8zr"
								}) : S.fbt._("Comment unsnoozed", null, {
									hk: "2x01Eq"
								});
							case E.q.Unspoiler:
								return S.fbt._("Removed spoiler tag", null, {
									hk: "2GvhDn"
								});
							case E.q.Unsticky:
								return "SubredditPost" === t ? S.fbt._("Post unstickied", null, {
									hk: "KXoHl"
								}) : S.fbt._("Comment unstickied", null, {
									hk: "dpEKC"
								});
							case E.q.UpdateRemovalReason:
							case E.q.WikiBanned:
							case E.q.WikiContributor:
							case E.q.WikiPageListed:
							case E.q.WikiPermLevel:
							case E.q.WikiRevise:
							case E.q.WikiUnbanned:
							case E.q.AcceptModeratorInvite:
							case E.q.AddCommunityTopics:
							case E.q.AddContributor:
							case E.q.AddModerator:
							case E.q.CreateAward:
							case E.q.CreateScheduledPost:
							case E.q.CreateRemovalReason:
							case E.q.CommunityStyling:
							case E.q.CommunityWidgets:
							case E.q.CreateRule:
							case E.q.DeleteAward:
							case E.q.DeleteRule:
							case E.q.DeleteScheduledPost:
							case E.q.DeleteOverriddenClassification:
							case E.q.DeleteRemovalReason:
							case E.q.DisableAward:
							case E.q.EditPostRequirements:
							case E.q.EditRule:
							case E.q.EditScheduledPost:
							case E.q.EditSettings:
							case E.q.EnableAward:
							case E.q.Events:
							case E.q.HiddenAward:
							case E.q.InviteModerator:
							case E.q.InviteSubscriber:
							case E.q.ModAwardGiven:
							case E.q.ModmailEnrollment:
							case E.q.OverrideClassification:
							case E.q.RemoveCommunityTopics:
							case E.q.RemoveContributor:
							case E.q.RemoveModerator:
							case E.q.RemoveWikiContributor:
							case E.q.ReorderModerators:
							case E.q.ReorderRules:
							case E.q.SetPermissions:
							case E.q.SnoozeReports:
							case E.q.SubmitContentRatingSurvey:
							case E.q.SubmitScheduledPost:
							case E.q.UnignoreReports:
							case E.q.UninviteModerator:
							default:
								return S.fbt._("Last mod action", null, {
									hk: "S9AMb"
								})
						}
					})(null == m ? void 0 : m.action, null === (c = null == m ? void 0 : m.target) || void 0 === c ? void 0 : c.__typename), " ", Object(O.d)(Object(b.g)(m.createdAt) / 1e3)))))
				},
				j = e => {
					let {
						mostRecentAction: t
					} = e;
					return a.a.createElement("div", {
						className: C.a.emptyTooltip
					}, a.a.createElement("img", {
						alt: S.fbt._("Snoo face image", null, {
							hk: "35RYyE"
						}),
						src: q,
						className: C.a.snooImage
					}), a.a.createElement("div", {
						className: C.a.emptyText
					}, S.fbt._("The queue is all yours", null, {
						hk: "16NnPV"
					})), a.a.createElement("div", {
						className: C.a.emptyDetailText
					}, S.fbt._("We’ll let you know if another mod joins you in moderating the community.", null, {
						hk: "4EOUML"
					})), t && a.a.createElement("div", {
						className: C.a.lastActionContainer
					}, a.a.createElement("div", {
						className: C.a.lastActionTitle
					}, S.fbt._("Last Action taken", null, {
						hk: "4F3ynJ"
					})), a.a.createElement(x, {
						data: t
					})))
				},
				N = e => {
					let {
						orderedModsList: t,
						subredditName: s,
						mods: o,
						mostRecentAction: r
					} = e;
					return 0 === t.length ? a.a.createElement(j, {
						mostRecentAction: r
					}) : a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: C.a.tooltipTitle
					}, t.length, " ", S.fbt._({
						"*": "mods active in r/",
						_1: "mod active in r/"
					}, [S.fbt._plural(t.length)], {
						hk: "3o3C52"
					}), s), o && t.slice(0, 10).map(e => a.a.createElement(x, {
						data: o[e],
						key: e
					})), t.length > 10 && a.a.createElement("div", {
						className: Object(n.a)(C.a.detailText, C.a.more)
					}, "+", t.length - 10, " ", S.fbt._("more active moderators", null, {
						hk: "13CPFV"
					})))
				},
				A = Object(o.a)(c.a),
				w = e => e ? Object.keys(e).sort((t, s) => ((e, t, s) => {
					var o, n, r, a;
					const d = null === (n = null === (o = s[e]) || void 0 === o ? void 0 : o.lastModAction) || void 0 === n ? void 0 : n.createdAt,
						i = null === (a = null === (r = s[t]) || void 0 === r ? void 0 : r.lastModAction) || void 0 === a ? void 0 : a.createdAt;
					return Object(b.g)(d || "") - Object(b.g)(i || "")
				})(t, s, e)) : [];
			t.default = e => {
				let {
					className: t,
					subredditId: s,
					maxMods: o
				} = e;
				const c = Object(d.e)(h.c),
					b = s || c,
					k = Object(d.e)(e => Object(g.h)(e, {
						subredditId: b || ""
					})),
					y = Object(d.e)(e => {
						var t;
						return (null === (t = null == e ? void 0 : e.features) || void 0 === t ? void 0 : t.modActivitySummaries[b || ""]) || {}
					}),
					{
						mods: S
					} = y,
					O = Object(r.useCallback)(e => w(e), [])(S),
					[E, q] = Object(r.useState)(void 0),
					x = Object(v.a)();
				Object(r.useEffect)(() => {
					(async () => {
						var e, t, s, o;
						if (0 === O.length && k) {
							const n = null === (t = null === (e = (await ((e, t) => Object(u.a)(e, {
								...m,
								variables: t
							}))(x(), {
								subredditName: k
							})).body.data) || void 0 === e ? void 0 : e.subreddit) || void 0 === t ? void 0 : t.moderation;
							(null == n ? void 0 : n.actions) && (null === (o = null === (s = n.actions) || void 0 === s ? void 0 : s.edges) || void 0 === o || o.map(e => {
								const {
									moderatorInfo: t,
									...s
								} = null == e ? void 0 : e.node;
								q({
									info: t,
									lastModAction: s
								})
							}))
						}
					})()
				}, [x, O.length, k]);
				const j = (e => `mod_activity_tooltip_id-${e}`)(k || ""),
					R = Object(d.d)(),
					M = Object(r.useCallback)(() => {
						R(Object(i.h)({
							tooltipId: j
						}))
					}, [R, j]),
					T = Object(d.e)(e => Object(_.b)(j)(e)),
					P = Object(d.e)(p.d),
					I = Object(d.e)(f.k),
					D = o || 5;
				return a.a.createElement("div", {
					className: Object(n.a)(C.a.preview, t, {
						[C.a.isModListing]: !!P
					}),
					id: j,
					onMouseEnter: M,
					onMouseLeave: M,
					"data-testid": "mod-activity-preview"
				}, S && O.length > 0 ? O.slice(0, D).map((e, t) => {
					var s, o, r, d, i, c, u, m, b, v;
					return a.a.createElement(l.a, {
						className: Object(n.a)(C.a.userIcon, {
							[C.a.noMargin]: t === O.length - 1 && !(t === D - 1 && O.length > D)
						}),
						key: null === (o = null === (s = S[e]) || void 0 === s ? void 0 : s.info) || void 0 === o ? void 0 : o.displayName,
						userName: (null === (d = null === (r = S[e]) || void 0 === r ? void 0 : r.info) || void 0 === d ? void 0 : d.displayName) || "",
						iconUrl: null === (u = null === (c = null === (i = S[e]) || void 0 === i ? void 0 : i.info) || void 0 === c ? void 0 : c.icon) || void 0 === u ? void 0 : u.url,
						isNSFW: !!(null === (v = null === (b = null === (m = S[e]) || void 0 === m ? void 0 : m.info) || void 0 === b ? void 0 : b.profile) || void 0 === v ? void 0 : v.isNsfw)
					})
				}) : P ? null : a.a.createElement(l.a, {
					className: Object(n.a)(C.a.userIcon, C.a.noMargin),
					userName: (null == I ? void 0 : I.displayName) || "",
					iconUrl: null == I ? void 0 : I.accountIcon,
					isNSFW: !1
				}), O.length > D && a.a.createElement("div", {
					className: C.a.moreMods
				}, "+", O.length - D), a.a.createElement(A, {
					tooltipId: j,
					isOpen: T,
					className: C.a.tooltip,
					tooltipPosition: P ? void 0 : ["center", "top"]
				}, a.a.createElement(N, {
					orderedModsList: O,
					subredditName: k || "",
					mods: S,
					mostRecentAction: E
				})))
			}
		},
		"./src/reddit/components/ModQueueActivitySummaryCards/index.m.less": function(e, t, s) {
			e.exports = {
				widget: "_2S3Rmz2Q8AgpyxfJD6L9Ni",
				titleContainer: "pg3jNvZKVsr3JdwcUwg2Q",
				widgetContent: "k9g6oop3qzXe5kYHchR2G",
				modIcon: "_3_ODW9yvfhSXaAyu-nkEVf",
				subredditIcon: "_3xHqnRKD2oZKVSbBsrhnhK",
				modRow: "_5sL4TmBPDSK5a3KCST8_D",
				subredditRow: "_13BVggQ6qexDLjYZd0OF_G",
				subredditRowText: "_251DNBern7Si-he5HNkDm7",
				emptyCard: "_1Df-DRjGp1nY8gKsqVuIWB",
				emptyText: "_25rN30WWKtFVSZo9ZhYJLx",
				subredditName: "_1-JqcOMFgfEZRr9C1rwtvN",
				tooltipTitle: "Edh6iORXd4A_ZV0h1CB8j",
				username: "_3iBG4sU_nNewURNnz2rmHn",
				emptyDetailText: "_138KBSl-Hzt-QdKbcCX4tv",
				detailText: "_1rZ6aZqtR9nzTvKOqVb7dP",
				snooImage: "Vg69__zCqDdWEkb_CTQcn",
				headerButtonContainer: "EzEg04ghsOqxnE1GnfnIr",
				headerButtonIcon: "yga1BOrh_Ki70reuqnYLi",
				up: "B30eRoRGRtXKAX8-rAmXV",
				more: "_22P9QU0SjkaqhoKGnofYXo",
				preview: "_2akotn_qPD4--TkwhPFyTR",
				isModListing: "_2JF1Rg88IUr9hs0b3iqckj",
				moreMods: "NbzlGrDvVUNrngQOyDY28",
				userIcon: "_1hC77l9y_LwLvok2bogZDP",
				noMargin: "_3K_wetbUvC8wNm6ueBwvh-",
				tooltip: "kRLDbyQSWoBrnkmHt5nmj",
				emptyTooltip: "_1yrR_PVgnpPVl0FS5aNxmY",
				lastActionContainer: "rU1nWYL0Qtmi0poIUJXmm",
				lastActionTitle: "_2bxj74obMqZ-SI9UrnCg7x"
			}
		},
		"./src/reddit/components/ModQueueActivitySummaryCards/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "SNOO_NO_MOUTH_IMAGE_PATH", (function() {
				return x
			})), s.d(t, "SNOO_THUMBS_UP_IMAGE_PATH", (function() {
				return j
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./src/config.ts"),
				n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				d = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/addQueryParams/index.ts"),
				l = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/filterQueryParams/index.ts"),
				u = s("./src/lib/timeAgo/index.ts"),
				m = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				b = s("./src/reddit/components/SubredditIcon/index.tsx"),
				v = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/controls/InternalLink/index.tsx"),
				g = s("./src/reddit/helpers/graphql/helpers.ts"),
				_ = s("./src/reddit/hooks/useLocalStorage.ts"),
				f = s("./src/reddit/hooks/usePageLayer.ts"),
				k = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				C = s("./src/reddit/selectors/meta.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				S = s("./src/reddit/components/ModQueueActivitySummaryCards/index.m.less"),
				O = s.n(S),
				E = s("./src/reddit/components/ModQueueActivitySummaryCards/ModActivityPreview.tsx");

			function q() {
				return (q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const x = `${o.a.assetPath}/img/snoo-no-mouth.png`,
				j = `${o.a.assetPath}/img/snoo-thumbs-up.png`,
				N = e => {
					let {
						subredditId: t,
						activityData: s,
						origin: o,
						currentPageUrl: r
					} = e;
					var l;
					const m = Object(d.e)(e => Object(y.X)(e, {
						subredditId: t
					}));
					return a.a.createElement(h.default, {
						className: O.a.subredditRow,
						key: null == m ? void 0 : m.displayText,
						to: Object(i.a)(Object(c.a)(`${o}${r}`, ["after", "before", "page", "profile", "subreddit"]), {
							subreddit: null == m ? void 0 : m.name
						})
					}, a.a.createElement(b.b, {
						className: O.a.subredditIcon,
						iconUrl: "",
						subredditOrProfile: m
					}), a.a.createElement("div", {
						className: O.a.subredditRowText
					}, a.a.createElement("div", {
						className: O.a.subredditName
					}, null == m ? void 0 : m.displayText), a.a.createElement("div", {
						className: O.a.detailText
					}, (null === (l = null == s ? void 0 : s.sub) || void 0 === l ? void 0 : l.lastModActionAt) ? a.a.createElement(a.a.Fragment, null, n.fbt._("Last action", null, {
						hk: "2lt40w"
					}), " ", Object(u.d)(Object(g.g)(s.sub.lastModActionAt) / 1e3)) : n.fbt._("No recent actions", null, {
						hk: "1qiZq9"
					}))), a.a.createElement(E.default, {
						subredditId: t,
						maxMods: 3
					}))
				},
				A = e => {
					let {
						subredditIdsList: t,
						totalSubs: s,
						modActivitySummaryData: o,
						isActive: r,
						origin: d,
						currentPageUrl: i,
						isCollapsed: c,
						setIsCollapsed: u
					} = e;
					const m = t.sort((e, t) => ((e, t, s) => {
						var o, n, r, a;
						const d = Object(g.g)(null === (n = null === (o = s[e]) || void 0 === o ? void 0 : o.sub) || void 0 === n ? void 0 : n.lastModActionAt),
							i = Object(g.g)(null === (a = null === (r = s[t]) || void 0 === r ? void 0 : r.sub) || void 0 === a ? void 0 : a.lastModActionAt);
						return d > i ? -1 : d < i ? 1 : 0
					})(e, t, o)).slice(0, 10);
					return a.a.createElement(v.a, {
						title: a.a.createElement("div", {
							className: O.a.titleContainer
						}, r ? n.fbt._("Actively being moderated", null, {
							hk: "43BqG4"
						}) : n.fbt._("Inactive", null, {
							hk: "1MbMLw"
						})),
						className: O.a.widget,
						contentOnly: !0,
						headerButton: a.a.createElement("div", {
							className: O.a.headerButtonContainer
						}, a.a.createElement(k.a, {
							className: Object(l.a)(O.a.headerButtonIcon, {
								[O.a.up]: c
							})
						})),
						onHeaderClick: () => u(c ? "false" : "true"),
						redditStyle: !0
					}, !c && a.a.createElement("div", {
						className: O.a.widgetContent
					}, 0 === s && a.a.createElement("div", {
						className: O.a.emptyCard
					}, a.a.createElement("img", {
						alt: n.fbt._("Snoo face image", null, {
							hk: "35RYyE"
						}),
						src: r ? x : j,
						className: O.a.snooImage
					}), a.a.createElement("div", {
						className: O.a.emptyText
					}, r ? n.fbt._("No communities are being moderated", null, {
						hk: "1cAhYD"
					}) : n.fbt._("It’s all covered", null, {
						hk: "32tVnu"
					})), a.a.createElement("div", {
						className: O.a.emptyDetailText
					}, r ? n.fbt._("Look up above at the “inactive” section to see what communities might moderation.", null, {
						hk: "22ka9V"
					}) : n.fbt._("Jump into the “actively being moderated” section below to see where else you could jump in.", null, {
						hk: "2t7nuw"
					}))), m.map(e => {
						const t = o[e];
						return a.a.createElement(N, {
							key: e,
							subredditId: e,
							activityData: t,
							origin: d,
							currentPageUrl: i
						})
					}), s > 10 && a.a.createElement("div", {
						className: Object(l.a)(O.a.detailText, O.a.more)
					}, "+", s - 10, " ", r ? n.fbt._("more being moderated", null, {
						hk: "2tAu2k"
					}) : n.fbt._("more not being moderated", null, {
						hk: "1Djx0e"
					}))))
				};
			t.default = () => {
				const e = Object(d.e)(e => {
						var t;
						return null === (t = null == e ? void 0 : e.features) || void 0 === t ? void 0 : t.modActivitySummaries
					}) || {},
					t = [],
					s = [];
				let o = 0,
					n = 0;
				Object.keys(e).map(r => {
					e[r].sub.activeMods.length > 0 ? (o < 10 && t.push(r), o++) : (n < 10 && s.push(r), n++)
				});
				const r = Object(d.e)(C.k),
					i = Object(f.a)(),
					l = {
						origin: r,
						currentPageUrl: Object(p.f)(i),
						modActivitySummaryData: e
					},
					[c, u] = Object(_.a)("inactive_mod_summaries_collapsed", "false"),
					[b, v] = Object(_.a)("active_mod_summaries_collapsed", "false");
				return a.a.createElement("span", {
					"data-testid": "mod-activity-cards"
				}, a.a.createElement(m.a, null, a.a.createElement(A, q({
					subredditIdsList: s,
					totalSubs: n,
					isCollapsed: "true" === c,
					setIsCollapsed: u
				}, l))), a.a.createElement(m.a, null, a.a.createElement(A, q({
					isActive: !0,
					subredditIdsList: t,
					totalSubs: o,
					isCollapsed: "true" === b,
					setIsCollapsed: v
				}, l))))
			}
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/reddit/components/SidebarSpacer/index.m.less"),
				n = s.n(o),
				r = s("./src/lib/lessComponent.tsx");
			t.a = r.a.div("Component", n.a)
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/reddit/components/SEOTitle/index.tsx"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/helpers/trackers/widgets.ts"),
				v = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				p = s("./src/reddit/selectors/experiments/topPosts.ts"),
				h = s("./src/reddit/selectors/structuredStyles.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/models/Theme/index.ts"),
				f = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const k = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(f.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				C = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(f.a)(e).widgetColors.sidebarWidgetHeaderColor,
				y = e => {
					const t = k(e);
					return Object(_.f)(t)
				},
				S = e => {
					const t = C(e);
					return Object(_.f)(t)
				};
			var O = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				E = s.n(O);
			const {
				fbt: q
			} = s("./node_modules/fbt/lib/FbtPublic.js"), x = Object(u.u)(), j = Object(r.b)(() => Object(a.c)({
				forceRedditStyle: (e, t) => {
					const s = Object(u.n)(e, t) || void 0,
						o = t.redditStyle || Object(h.l)(e, {
							subredditId: s
						}),
						n = Object(g.db)(e);
					return o || n
				},
				nigtmode: g.db,
				subredditId: u.n,
				topPostVariant: p.d
			}));
			class N extends n.a.Component {
				constructor() {
					super(...arguments), this.contentRef = n.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(Object(b.b)(e, t)), this.setState({
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
					return e.backgroundColor = k(this.props), e.borderColor = Object(v.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = y(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = C(this.props), e.color = e.fill = S(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: o,
						headerButton: r,
						id: a,
						onClick: i,
						onHeaderClick: c,
						title: u,
						titleClassName: b,
						truncateThreshold: v
					} = this.props, p = s ? E.a.widgetContentOnly : E.a.widgetContent, h = !o && this.props.styles, g = h ? this.getWidgetBackgroundStyles() : {}, _ = h ? this.getWidgetHeaderStyles() : {};
					return n.a.createElement("div", {
						className: Object(d.a)(t, E.a.widgetBackground, {
							[E.a.redditStyle]: o,
							[E.a.clickable]: !!i,
							[E.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": o,
						onClick: i,
						style: g
					}, u && n.a.createElement("div", {
						className: Object(d.a)(E.a.widgetHeader, {
							[E.a.clickable]: !!c
						}),
						id: a,
						style: _,
						onClick: c
					}, n.a.createElement("div", {
						className: Object(d.a)(E.a.widgetTitle, b)
					}, n.a.createElement(l.b, {
						type: l.a.Widget
					}, u)), r), n.a.createElement("div", {
						className: Object(d.a)(p, {
							[E.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? v : "none"
						}
					}, e), this.state.isTruncated && n.a.createElement(m.r, {
						className: E.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, q._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = x(j(Object(i.a)(Object(c.c)(N))))
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "c", (function() {
				return c
			}));
			var o, n, r = s("./src/reddit/constants/tracking.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(o || (o = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(n || (n = {}));
			const d = (e, t) => s => ({
					source: n.COMMUNITY_WIDGETS,
					action: r.c.CLICK,
					noun: o.SEE_MORE,
					widget: Object(a.xb)(s, {
						subredditId: e,
						widgetKind: t
					}),
					...a.o
				}),
				i = (e, t) => s => ({
					source: n.POST,
					action: r.c.CLICK,
					noun: o.REREDDIT_PROMO,
					post: a.K(s, e),
					subreddit: a.jb(s),
					...t && {
						banner: {
							buttonText: t,
							id: o.REREDDIT_PROMO
						}
					},
					...a.o(s)
				}),
				l = () => e => ({
					source: n.SIDEBAR,
					action: r.c.VIEW,
					noun: o.TOPICS_WIDGET,
					...a.o(e)
				}),
				c = e => t => ({
					source: n.TOPICS_WIDGET,
					action: r.c.CLICK,
					noun: o.TOPIC,
					...a.o(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/hooks/usePageLayer.ts": function(e, t, s) {
			"use strict";
			var o = s("./src/reddit/contexts/PageLayer/index.tsx");
			t.a = o.eb
		},
		"./src/redditGQL/operations/LastModActionInSubreddit.json": function(e) {
			e.exports = JSON.parse('{"id":"7888d2d30843"}')
		},
		"./src/redditGQL/operations/ModActivitySummariesByNames.json": function(e) {
			e.exports = JSON.parse('{"id":"23e855c12457"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ModQueueActivitySummaryCards.e7b720075671c799c3d8.js.map