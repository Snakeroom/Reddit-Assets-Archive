// https://www.redditstatic.com/desktop2x/reddit-components-ModQueueActivitySummaryCards-ModActivityPreview.25b7d5a330f12242a9c7.js
// Retrieved at 10/4/2022, 3:10:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ModQueueActivitySummaryCards-ModActivityPreview"], {
		"./src/reddit/components/ModQueueActivitySummaryCards/ModActivityPreview.tsx": function(e, t, o) {
			"use strict";
			o.r(t);
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = o("./src/higherOrderComponents/asTooltip.tsx"),
				n = o("./src/lib/classNames/index.ts"),
				s = o("./node_modules/react/index.js"),
				a = o.n(s),
				i = o("./node_modules/react-redux/es/index.js"),
				d = o("./src/reddit/actions/tooltip.ts"),
				l = o("./src/reddit/components/UserIcon/index.tsx"),
				c = o("./src/reddit/controls/Dropdown/index.tsx"),
				u = o("./src/lib/makeGqlRequest/index.ts"),
				m = o("./src/redditGQL/operations/LastModActionInSubreddit.json");
			o("./src/redditGQL/operations/ModActivitySummariesByNames.json");
			var v = o("./src/reddit/helpers/graphql/helpers.ts"),
				b = o("./src/reddit/hooks/useGqlContext.ts"),
				p = o("./src/reddit/selectors/modQueue.ts"),
				_ = o("./src/reddit/selectors/platform.ts"),
				h = o("./src/reddit/selectors/subreddit.ts"),
				k = o("./src/reddit/selectors/tooltip.ts"),
				f = o("./src/reddit/selectors/user.ts"),
				g = o("./src/reddit/components/ModQueueActivitySummaryCards/index.m.less"),
				C = o.n(g),
				S = o("./src/config.ts"),
				A = o("./node_modules/fbt/lib/FbtPublic.js"),
				N = o("./src/lib/timeAgo/index.ts"),
				R = o("./src/redditGQL/types.ts");
			const y = `${S.a.assetPath}/img/snoo-sunglasses.png`,
				E = e => {
					let {
						data: t
					} = e;
					var o, r, n, s, i, d, c;
					const u = (null === (o = t.info) || void 0 === o ? void 0 : o.displayName) || (null === (r = t.info) || void 0 === r ? void 0 : r.name),
						{
							lastModAction: m
						} = t;
					return a.a.createElement("div", {
						className: C.a.modRow
					}, a.a.createElement(l.a, {
						className: C.a.modIcon,
						userName: u || "",
						iconUrl: null === (s = null === (n = null == t ? void 0 : t.info) || void 0 === n ? void 0 : n.icon) || void 0 === s ? void 0 : s.url,
						isNSFW: !!(null === (d = null === (i = t.info) || void 0 === i ? void 0 : i.profile) || void 0 === d ? void 0 : d.isNsfw)
					}), a.a.createElement("div", {
						className: C.a.subredditRowText
					}, a.a.createElement("div", {
						className: C.a.username
					}, u), a.a.createElement("div", {
						className: C.a.detailText
					}, m && a.a.createElement(a.a.Fragment, null, ((e, t) => {
						switch (e) {
							case R.r.AddNote:
								return A.fbt._("Added mod note", null, {
									hk: "4EQdI3"
								});
							case R.r.AddRemovalReason:
								return A.fbt._("Added removal reason", null, {
									hk: "3sDuRA"
								});
							case R.r.AdjustPostCrowdControlLevel:
								return A.fbt._("Adjusted post crowd control level", null, {
									hk: "3Ru27s"
								});
							case R.r.EnablePostCrowdControlFilter:
								return A.fbt._("Enabled post crowd control level", null, {
									hk: "bnrbt"
								});
							case R.r.DisablePostCrowdControlFilter:
								return A.fbt._("Disabled post crowd control level", null, {
									hk: "3Pn8Cm"
								});
							case R.r.ApproveComment:
								return A.fbt._("Approved comment", null, {
									hk: "15N4AH"
								});
							case R.r.ApproveLink:
								return A.fbt._("Approved post", null, {
									hk: "2pHeO6"
								});
							case R.r.BanUser:
								return A.fbt._("Banned user", null, {
									hk: "30ZUto"
								});
							case R.r.Collections:
								return A.fbt._("Collections", null, {
									hk: "4DLN5q"
								});
							case R.r.DeleteNote:
								return A.fbt._("Deleted mod note", null, {
									hk: "24mUGI"
								});
							case R.r.Distinguish:
								return "SubredditPost" === t ? A.fbt._("Post distinguished", null, {
									hk: "1EzjPd"
								}) : A.fbt._("Comment distinguished", null, {
									hk: "3TNqQa"
								});
							case R.r.EditFlair:
								return "SubredditPost" === t ? A.fbt._("Post flair edited", null, {
									hk: "2oj67i"
								}) : A.fbt._("User flair edited", null, {
									hk: "2WAVS8"
								});
							case R.r.IgnoreReports:
								return "SubredditPost" === t ? A.fbt._("Post reports ignored", null, {
									hk: "1HbgCS"
								}) : A.fbt._("Comment reports ignored", null, {
									hk: "3eLRwL"
								});
							case R.r.Lock:
								return "SubredditPost" === t ? A.fbt._("Post locked", null, {
									hk: "45Huvj"
								}) : A.fbt._("Comment locked", null, {
									hk: "2HzroI"
								});
							case R.r.MarkNsfw:
								return A.fbt._("Marked post NSFW", null, {
									hk: "4qw3UI"
								});
							case R.r.MarkOriginalContent:
								return A.fbt._("Marked post Original Content", null, {
									hk: "4d9kgS"
								});
							case R.r.MuteUser:
								return A.fbt._("Muted user", null, {
									hk: "31YWRG"
								});
							case R.r.RemoveComment:
								return A.fbt._("Removed comment", null, {
									hk: "2qfmzC"
								});
							case R.r.RemoveLink:
								return A.fbt._("Removed post", null, {
									hk: "2leMij"
								});
							case R.r.SetContestMode:
								return A.fbt._("Set post contest mode", null, {
									hk: "2iE074"
								});
							case R.r.SetSuggestedsort:
								return A.fbt._("Set post suggested sort", null, {
									hk: "3zw33Q"
								});
							case R.r.ShowComment:
								return A.fbt._("Showed comment", null, {
									hk: "1xvaXS"
								});
							case R.r.SpamComment:
								return A.fbt._("Marked comment as spam", null, {
									hk: "E6CLe"
								});
							case R.r.SpamLink:
								return A.fbt._("Removed post as spam", null, {
									hk: "1Al2xz"
								});
							case R.r.Spoiler:
								return A.fbt._("Added spoiler tag", null, {
									hk: "254Axx"
								});
							case R.r.Sticky:
								return "SubredditPost" === t ? A.fbt._("Post stickied", null, {
									hk: "4m9DRx"
								}) : A.fbt._("Comment stickied", null, {
									hk: "1JIPzu"
								});
							case R.r.UnbanUser:
								return A.fbt._("Unbanned user", null, {
									hk: "3U4olT"
								});
							case R.r.Unlock:
								return "SubredditPost" === t ? A.fbt._("Post unlocked", null, {
									hk: "3IXrG"
								}) : A.fbt._("Comment unlocked", null, {
									hk: "4v2jmJ"
								});
							case R.r.UnmuteUser:
								return A.fbt._("Unmuted user", null, {
									hk: "2aB30x"
								});
							case R.r.UnsetContestMode:
								return A.fbt._("Unset post contest mode", null, {
									hk: "W4Yjf"
								});
							case R.r.UnsnoozeReports:
								return "SubredditPost" === t ? A.fbt._("Post unsnoozed", null, {
									hk: "3jp8zr"
								}) : A.fbt._("Comment unsnoozed", null, {
									hk: "2x01Eq"
								});
							case R.r.Unspoiler:
								return A.fbt._("Removed spoiler tag", null, {
									hk: "2GvhDn"
								});
							case R.r.Unsticky:
								return "SubredditPost" === t ? A.fbt._("Post unstickied", null, {
									hk: "KXoHl"
								}) : A.fbt._("Comment unstickied", null, {
									hk: "dpEKC"
								});
							case R.r.UpdateRemovalReason:
							case R.r.WikiBanned:
							case R.r.WikiContributor:
							case R.r.WikiPageListed:
							case R.r.WikiPermLevel:
							case R.r.WikiRevise:
							case R.r.WikiUnbanned:
							case R.r.AcceptModeratorInvite:
							case R.r.AddCommunityTopics:
							case R.r.AddContributor:
							case R.r.AddModerator:
							case R.r.CreateAward:
							case R.r.CreateScheduledPost:
							case R.r.CreateRemovalReason:
							case R.r.CommunityStyling:
							case R.r.CommunityWidgets:
							case R.r.CreateRule:
							case R.r.DeleteAward:
							case R.r.DeleteRule:
							case R.r.DeleteScheduledPost:
							case R.r.DeleteOverriddenClassification:
							case R.r.DeleteRemovalReason:
							case R.r.DisableAward:
							case R.r.EditPostRequirements:
							case R.r.EditRule:
							case R.r.EditScheduledPost:
							case R.r.EditSettings:
							case R.r.EnableAward:
							case R.r.Events:
							case R.r.HiddenAward:
							case R.r.InviteModerator:
							case R.r.InviteSubscriber:
							case R.r.ModAwardGiven:
							case R.r.ModmailEnrollment:
							case R.r.OverrideClassification:
							case R.r.RemoveCommunityTopics:
							case R.r.RemoveContributor:
							case R.r.RemoveModerator:
							case R.r.RemoveWikiContributor:
							case R.r.ReorderModerators:
							case R.r.ReorderRules:
							case R.r.SetPermissions:
							case R.r.SnoozeReports:
							case R.r.SubmitContentRatingSurvey:
							case R.r.SubmitScheduledPost:
							case R.r.UnignoreReports:
							case R.r.UninviteModerator:
							default:
								return A.fbt._("Last mod action", null, {
									hk: "S9AMb"
								})
						}
					})(null == m ? void 0 : m.action, null === (c = null == m ? void 0 : m.target) || void 0 === c ? void 0 : c.__typename), " ", Object(N.d)(Object(v.g)(m.createdAt) / 1e3)))))
				},
				j = e => {
					let {
						mostRecentAction: t
					} = e;
					return a.a.createElement("div", {
						className: C.a.emptyTooltip
					}, a.a.createElement("img", {
						alt: A.fbt._("Snoo face image", null, {
							hk: "35RYyE"
						}),
						src: y,
						className: C.a.snooImage
					}), a.a.createElement("div", {
						className: C.a.emptyText
					}, A.fbt._("The queue is all yours", null, {
						hk: "16NnPV"
					})), a.a.createElement("div", {
						className: C.a.emptyDetailText
					}, A.fbt._("We’ll let you know if another mod joins you in moderating the community.", null, {
						hk: "4EOUML"
					})), t && a.a.createElement("div", {
						className: C.a.lastActionContainer
					}, a.a.createElement("div", {
						className: C.a.lastActionTitle
					}, A.fbt._("Last Action taken", null, {
						hk: "4F3ynJ"
					})), a.a.createElement(E, {
						data: t
					})))
				},
				w = e => {
					let {
						orderedModsList: t,
						subredditName: o,
						mods: r,
						mostRecentAction: s
					} = e;
					return 0 === t.length ? a.a.createElement(j, {
						mostRecentAction: s
					}) : a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: C.a.tooltipTitle
					}, t.length, " ", A.fbt._({
						"*": "mods active in r/",
						_1: "mod active in r/"
					}, [A.fbt._plural(t.length)], {
						hk: "3o3C52"
					}), o), r && t.slice(0, 10).map(e => a.a.createElement(E, {
						data: r[e],
						key: e
					})), t.length > 10 && a.a.createElement("div", {
						className: Object(n.a)(C.a.detailText, C.a.more)
					}, "+", t.length - 10, " ", A.fbt._("more active moderators", null, {
						hk: "13CPFV"
					})))
				},
				M = Object(r.a)(c.a),
				O = e => e ? Object.keys(e).sort((t, o) => ((e, t, o) => {
					var r, n, s, a;
					const i = null === (n = null === (r = o[e]) || void 0 === r ? void 0 : r.lastModAction) || void 0 === n ? void 0 : n.createdAt,
						d = null === (a = null === (s = o[t]) || void 0 === s ? void 0 : s.lastModAction) || void 0 === a ? void 0 : a.createdAt;
					return Object(v.g)(i || "") - Object(v.g)(d || "")
				})(t, o, e)) : [];
			t.default = e => {
				let {
					className: t,
					subredditId: o,
					maxMods: r
				} = e;
				const c = Object(i.e)(_.c),
					v = o || c,
					g = Object(i.e)(e => Object(h.h)(e, {
						subredditId: v || ""
					})),
					S = Object(i.e)(e => {
						var t;
						return (null === (t = null == e ? void 0 : e.features) || void 0 === t ? void 0 : t.modActivitySummaries[v || ""]) || {}
					}),
					{
						mods: A
					} = S,
					N = Object(s.useCallback)(e => O(e), [])(A),
					[R, y] = Object(s.useState)(void 0),
					E = Object(b.a)();
				Object(s.useEffect)(() => {
					(async () => {
						var e, t, o, r;
						if (0 === N.length && g) {
							const n = null === (t = null === (e = (await ((e, t) => Object(u.a)(e, {
								...m,
								variables: t
							}))(E(), {
								subredditName: g
							})).body.data) || void 0 === e ? void 0 : e.subreddit) || void 0 === t ? void 0 : t.moderation;
							(null == n ? void 0 : n.actions) && (null === (r = null === (o = n.actions) || void 0 === o ? void 0 : o.edges) || void 0 === r || r.map(e => {
								const {
									moderatorInfo: t,
									...o
								} = null == e ? void 0 : e.node;
								y({
									info: t,
									lastModAction: o
								})
							}))
						}
					})()
				}, [E, N.length, g]);
				const j = (e => `mod_activity_tooltip_id-${e}`)(g || ""),
					P = Object(i.d)(),
					x = Object(s.useCallback)(() => {
						P(Object(d.h)({
							tooltipId: j
						}))
					}, [P, j]),
					L = Object(i.e)(e => Object(k.b)(j)(e)),
					D = Object(i.e)(p.d),
					U = Object(i.e)(f.k),
					I = r || 5;
				return a.a.createElement("div", {
					className: Object(n.a)(C.a.preview, t, {
						[C.a.isModListing]: !!D
					}),
					id: j,
					onMouseEnter: x,
					onMouseLeave: x,
					"data-testid": "mod-activity-preview"
				}, A && N.length > 0 ? N.slice(0, I).map((e, t) => {
					var o, r, s, i, d, c, u, m, v, b;
					return a.a.createElement(l.a, {
						className: Object(n.a)(C.a.userIcon, {
							[C.a.noMargin]: t === N.length - 1 && !(t === I - 1 && N.length > I)
						}),
						key: null === (r = null === (o = A[e]) || void 0 === o ? void 0 : o.info) || void 0 === r ? void 0 : r.displayName,
						userName: (null === (i = null === (s = A[e]) || void 0 === s ? void 0 : s.info) || void 0 === i ? void 0 : i.displayName) || "",
						iconUrl: null === (u = null === (c = null === (d = A[e]) || void 0 === d ? void 0 : d.info) || void 0 === c ? void 0 : c.icon) || void 0 === u ? void 0 : u.url,
						isNSFW: !!(null === (b = null === (v = null === (m = A[e]) || void 0 === m ? void 0 : m.info) || void 0 === v ? void 0 : v.profile) || void 0 === b ? void 0 : b.isNsfw)
					})
				}) : D ? null : a.a.createElement(l.a, {
					className: Object(n.a)(C.a.userIcon, C.a.noMargin),
					userName: (null == U ? void 0 : U.displayName) || "",
					iconUrl: null == U ? void 0 : U.accountIcon,
					isNSFW: !1
				}), N.length > I && a.a.createElement("div", {
					className: C.a.moreMods
				}, "+", N.length - I), a.a.createElement(M, {
					tooltipId: j,
					isOpen: L,
					className: C.a.tooltip,
					tooltipPosition: D ? void 0 : ["center", "top"]
				}, a.a.createElement(w, {
					orderedModsList: N,
					subredditName: g || "",
					mods: A,
					mostRecentAction: R
				})))
			}
		},
		"./src/reddit/components/ModQueueActivitySummaryCards/index.m.less": function(e, t, o) {
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
		"./src/redditGQL/operations/LastModActionInSubreddit.json": function(e) {
			e.exports = JSON.parse('{"id":"7888d2d30843"}')
		},
		"./src/redditGQL/operations/ModActivitySummariesByNames.json": function(e) {
			e.exports = JSON.parse('{"id":"23e855c12457"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ModQueueActivitySummaryCards-ModActivityPreview.25b7d5a330f12242a9c7.js.map